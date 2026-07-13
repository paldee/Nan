import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = process.cwd();
const publicRoot = join(root, "public");
const port = Number(process.env.PORT || 5173);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

async function loadLocalEnv() {
  try {
    const envFile = await readFile(join(root, ".env"), "utf8");
    for (const line of envFile.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
      const [key, ...valueParts] = trimmed.split("=");
      if (!process.env[key]) process.env[key] = valueParts.join("=").replace(/^["']|["']$/g, "");
    }
  } catch {
    // .env is optional; generation falls back when GEMINI_API_KEY is absent.
  }
}

function send(res, status, body, type = "application/json; charset=utf-8") {
  res.writeHead(status, { "content-type": type });
  res.end(body);
}

async function readJson(req) {
  let body = "";
  for await (const chunk of req) body += chunk;
  return body ? JSON.parse(body) : {};
}

function fallbackTrip(input) {
  const vibes = Array.isArray(input.vibes) && input.vibes.length ? input.vibes.join(", ") : "Photography, Peace, Local Crafts";
  return {
    title: "Your 3-Day Emerald Journey",
    summary: `A weather-aware Nan route for ${input.month || "August"}, tuned for ${vibes}.`,
    days: [
      {
        day: 1,
        theme: "Arrival & The Valleys",
        stops: [
          {
            time: "10:00 AM",
            place: "Sapan Rice Terraces",
            whyNow: "Green season rice fields, mist, and soft rain make this the strongest opening scene.",
            localInsight: "Start slowly and let the first day introduce Nan through landscape and village rhythm."
          }
        ]
      },
      {
        day: 2,
        theme: "Craft, Salt & Mountain Roads",
        stops: [
          {
            time: "2:30 PM",
            place: "Bo Kluea Ancient Salt Wells",
            whyNow: "Cooler damp weather makes the steam and wood-fire salt process more atmospheric.",
            localInsight: "A good stop for local craft, history, and hidden-gem storytelling."
          }
        ]
      },
      {
        day: 3,
        theme: "Slow Return Through Nan City",
        stops: [
          {
            time: "9:30 AM",
            place: "Nan Old Town",
            whyNow: "A calm final morning balances the mountain route with temples, cafes, and local markets.",
            localInsight: "Keep the last day flexible so rain can reshape the route without breaking the experience."
          }
        ]
      }
    ]
  };
}

async function fetchNanWeather() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=18.7756&longitude=100.7730&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,cloud_cover,wind_speed_10m&timezone=Asia%2FBangkok";
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) throw new Error(`Open-Meteo request failed ${response.status}`);
  const data = await response.json();
  return data.current || {};
}

async function generateTrip(input) {
  let weather = null;
  try {
    weather = await fetchNanWeather();
  } catch (error) {
    console.warn(error.message);
  }

  const enrichedInput = { ...input, weather };
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return fallbackTrip(enrichedInput);

  const prompt = `
Create a concise 3-day Nan, Thailand travel itinerary as strict JSON only.
Use season-aware recommendations, Open-Meteo weather context if provided, hidden gems, local stories, and adaptive rainy-day logic.
Input: ${JSON.stringify(enrichedInput)}
Required JSON shape:
{
  "title": "string",
  "summary": "string",
  "days": [
    {
      "day": 1,
      "theme": "string",
      "stops": [
        { "time": "string", "place": "string", "whyNow": "string", "localInsight": "string" }
      ]
    }
  ]
}`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini request failed ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  return text ? JSON.parse(text) : fallbackTrip(enrichedInput);
}

async function handleStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const aliases = {
    "/": "/index.html",
    "/UI.html": "/index.html",
    "/your-plan.html": "/pages/your-plan.html",
    "/journey.html": "/pages/journey.html",
    "/stories.html": "/pages/stories.html"
  };
  const pathname = aliases[url.pathname] || decodeURIComponent(url.pathname);
  const safePath = normalize(pathname).replace(/^[/\\]+/, "").replace(/^(\.\.[/\\])+/, "");
  const filePath = join(publicRoot, safePath);
  const ext = extname(filePath);
  const content = await readFile(filePath);
  send(res, 200, content, mimeTypes[ext] || "application/octet-stream");
}

await loadLocalEnv();

export async function appHandler(req, res) {
  try {
    if (req.method === "GET" && req.url === "/api/weather") {
      const weather = await fetchNanWeather();
      send(res, 200, JSON.stringify(weather));
      return;
    }

    if (req.method === "POST" && req.url === "/api/generate-trip") {
      const input = await readJson(req);
      const trip = await generateTrip(input);
      send(res, 200, JSON.stringify(trip));
      return;
    }

    if (req.method === "GET") {
      await handleStatic(req, res);
      return;
    }

    send(res, 405, JSON.stringify({ error: "Method not allowed" }));
  } catch (error) {
    console.error(error);
    send(res, 500, JSON.stringify({ error: error.message }));
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  createServer(appHandler).listen(port, () => {
    console.log(`Nan Beyond running at http://localhost:${port}`);
  });
}
