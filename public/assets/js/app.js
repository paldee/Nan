const pageTransitionMs = 220;

const monthSpotlights = {
  jan: {
    badge: "เหมาะกับลมหนาวและเมืองเก่า",
    location: "เมืองน่าน",
    title: "วัดภูมินทร์และอุโมงค์ลีลาวดี",
    copy: "เริ่มปีด้วยอากาศเย็น เดินชมจิตรกรรมกระซิบรักบันลือโลก วัดภูมินทร์ และต่อด้วยพิพิธภัณฑสถานแห่งชาติน่านในบรรยากาศเมืองเก่า"
  },
  feb: {
    badge: "ฤดูดอกไม้และวัดสำคัญ",
    location: "ภูเพียง, น่าน",
    title: "วัดพระธาตุแช่แห้งในแสงอ่อน",
    copy: "ช่วงปลายหนาวเหมาะกับเส้นทางวัดสำคัญและจุดถ่ายภาพเมืองน่าน ก่อนเข้าสู่เทศกาลหกเป็งในช่วงเดือนมีนาคม"
  },
  mar: {
    badge: "วัฒนธรรมและงานหกเป็ง",
    location: "พระธาตุแช่แห้ง",
    title: "หกเป็งนมัสการพระธาตุแช่แห้ง",
    copy: "เดือนนี้เหมาะกับสายวัฒนธรรม งานหกเป็งเป็นหนึ่งใน Must See ของน่าน และเชื่อมกับเส้นทางวัดในเมืองได้ดี"
  },
  apr: {
    badge: "สงกรานต์และแสงฤดูร้อน",
    location: "ตัวเมืองน่าน",
    title: "เมืองเก่าในจังหวะเทศกาล",
    copy: "เมษายนเหมาะกับ temple walk, รถรางชมเมืองเก่า และอาหารพื้นเมืองคลายร้อน เช่น ของหวานเมืองน่านหรือข้าวหลาม"
  },
  may: {
    badge: "ประเพณีแปดเป็ง",
    location: "วัดจอมแจ้ง",
    title: "แปดเป็ง วัดจอมแจ้ง",
    copy: "ททท. ระบุว่างานแปดเป็ง วัดจอมแจ้งอยู่ในช่วงพฤษภาคม เหมาะกับการต่อเส้นทางวัดพระธาตุเขาน้อยและเมืองน่าน"
  },
  jun: {
    badge: "ฝนแรกและวิถีชุมชน",
    location: "ปัว",
    title: "ปัวในวันที่ทุ่งนาเริ่มเขียว",
    copy: "ฤดูฝนเริ่มทำให้ทุ่งนาและหุบเขากลับมามีชีวิต เหมาะกับคาเฟ่วิวทุ่ง ผ้าทอลายน้ำไหล และ slow travel"
  },
  jul: {
    badge: "นาข้าวและโฮมสเตย์",
    location: "ปัว - บ่อเกลือ",
    title: "เส้นทางชุมชนและบ่อเกลือ",
    copy: "ททท. แนะนำปัวและชุมชนบ่อเกลือสำหรับสัมผัสวิถีชีวิตดั้งเดิม เดือนนี้เหมาะกับโฮมสเตย์และภาพนาข้าวสีเขียว"
  },
  aug: {
    badge: "เหมาะที่สุดในเดือนสิงหาคม",
    location: "สะปัน, น่าน",
    title: "โฮมสเตย์ริมน้ำตกกลางหุบเขาสะปัน",
    copy: "ช่วงฤดูฝนคือเวลาที่หุบเขาเขียวที่สุด เหมาะกับการพักช้า ๆ ถ่ายภาพหมอก และสัมผัสวิถีชุมชนบ่อเกลือ-สะปัน"
  },
  sep: {
    badge: "งานตานก๋วยสลาก",
    location: "ชุมชนล้านนา",
    title: "ตานก๋วยสลากและทางฝนปลายฤดู",
    copy: "ประเพณีตานก๋วยสลากเริ่มราวกันยายนถึงตุลาคม เหมาะกับเส้นทางวัฒนธรรมและชุมชนที่ยังมีบรรยากาศเขียวชุ่ม"
  },
  oct: {
    badge: "ปลายฝนต้นหนาว",
    location: "นาน้อย",
    title: "เสาดินนาน้อยและวังศิลาแลง",
    copy: "อากาศเริ่มโปร่งขึ้น เหมาะกับ unseen landscape อย่างเสาดินนาน้อยหรือวังศิลาแลงที่ ททท. แนะนำเป็นซิกเนเจอร์ของน่าน"
  },
  nov: {
    badge: "เริ่มฤดูดาว",
    location: "ดอยเสมอดาว",
    title: "ดอยเสมอดาวก่อนฤดูพีก",
    copy: "ปลายปีเหมาะกับกางเต็นท์ ดูดาว และชมแสงเช้า ดอยเสมอดาวเป็นหนึ่งในจุดธรรมชาติสำคัญของจังหวัดน่าน"
  },
  dec: {
    badge: "ทะเลหมอกและปีใหม่ม้ง",
    location: "ปัว - ดอยเสมอดาว",
    title: "ทะเลหมอกและงานปีใหม่ม้ง",
    copy: "ธันวาคมเด่นเรื่องลมหนาว จุดชมวิวทะเลหมอก และงานปีใหม่ม้ง อ.ปัว ซึ่งอยู่ในกลุ่ม Must See ของน่าน"
  }
};

function gotoPage(url) {
  document.body.classList.add("page-leaving");
  window.setTimeout(() => {
    window.location.href = url;
  }, pageTransitionMs);
}

function currentPageKey() {
  const path = window.location.pathname.replace(/\\/g, "/");
  if (path.endsWith("/pages/your-plan.html")) return "plan";
  if (path.endsWith("/pages/journey.html")) return "journey";
  if (path.endsWith("/pages/stories.html")) return "stories";
  return "season";
}

function navKeyFromLink(link) {
  const label = link.textContent.trim().toLowerCase();
  if (label.includes("discover") || label.includes("season") || label.includes("ฤดูกาล")) return "season";
  if (label === "plan" || label.includes("วางแผน")) return "plan";
  if (label.includes("map") || label === "แผน" || label.includes("แผนเที่ยว")) return "journey";
  if (label.includes("stories") || label.includes("เรื่องเล่า")) return "stories";
  return "";
}

function setActiveNav() {
  const activeKey = currentPageKey();
  const mobileActiveMap = {
    season: "season",
    plan: "plan",
    journey: "journey",
    stories: "stories"
  };
  const desktopActiveMap = {
    season: "season",
    plan: "journey",
    journey: "journey",
    stories: "stories"
  };

  document.querySelectorAll("nav a[href$='.html']").forEach((link) => {
    const key = navKeyFromLink(link);
    const isMobile = Boolean(link.closest(".md\\:hidden"));
    const isActive = key === (isMobile ? mobileActiveMap[activeKey] : desktopActiveMap[activeKey]);
    link.classList.toggle("text-primary", isActive);
    link.classList.toggle("dark:text-primary-fixed-dim", isActive);
    link.classList.toggle("bg-primary-fixed/20", isActive);
    link.classList.toggle("border-b-2", isActive && !isMobile);
    link.classList.toggle("border-primary", isActive && !isMobile);
    link.classList.toggle("pb-1", isActive && !isMobile);
    link.classList.toggle("scale-105", isActive && isMobile);
    link.classList.toggle("text-on-surface-variant/70", !isActive && isMobile);
    link.classList.toggle("text-on-surface-variant", !isActive && !isMobile);
  });
}

function setActiveMonth(monthKey) {
  const nav = document.querySelector("[data-month-nav]");
  if (!nav) return;
  const spotlight = monthSpotlights[monthKey] || monthSpotlights.aug;

  nav.querySelectorAll("[data-month]").forEach((button) => {
    const active = button.dataset.month === monthKey;
    button.className = active
      ? "flex flex-col items-center gap-2 relative"
      : "text-on-surface-variant/50 font-label-caps text-label-caps cursor-pointer hover:text-on-surface transition-colors";
    button.innerHTML = active
      ? `<div class="text-primary font-label-caps text-label-caps font-bold">${button.textContent.trim()}</div><div class="w-1.5 h-1.5 rounded-full bg-primary absolute -bottom-4"></div>`
      : button.textContent.trim();
  });

  const badge = document.querySelector("[data-spotlight-badge]");
  const location = document.querySelector("[data-spotlight-location]");
  const title = document.querySelector("[data-spotlight-title]");
  const copy = document.querySelector("[data-spotlight-copy]");
  if (badge) badge.textContent = spotlight.badge;
  if (location) location.textContent = spotlight.location;
  if (title) title.textContent = spotlight.title;
  if (copy) copy.textContent = spotlight.copy;
}

function setupMonthNavigator() {
  const nav = document.querySelector("[data-month-nav]");
  if (!nav) return;
  nav.querySelectorAll("[data-month]").forEach((button) => {
    button.addEventListener("click", () => setActiveMonth(button.dataset.month));
  });
  setActiveMonth("aug");
}

function collectPlanForm() {
  const form = document.getElementById("plan-form");
  if (!form) return null;
  const data = new FormData(form);
  return {
    month: data.get("month") || "Aug",
    pace: data.get("pace") || "slow",
    group: data.get("group") || "couple",
    vibes: data.getAll("vibe")
  };
}

function renderGeneratedTrip() {
  const mount = document.getElementById("generated-trip");
  if (!mount) return;
  const raw = localStorage.getItem("nanGeneratedTrip");
  if (!raw) return;

  const trip = JSON.parse(raw);
  mount.innerHTML = `
    <div class="mb-16 rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6 md:p-8">
      <div class="flex items-center gap-2 mb-3">
        <span class="material-symbols-outlined text-secondary text-[18px]">auto_awesome</span>
        <span class="font-label-caps text-label-caps text-secondary uppercase tracking-wider">สร้างจาก Gemini-ready planner</span>
      </div>
      <h2 class="font-headline-md text-headline-md text-primary mb-3">${trip.title || "แผนเที่ยวน่านของคุณ"}</h2>
      <p class="font-body-md text-body-md text-on-surface-variant mb-6">${trip.summary || ""}</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        ${(trip.days || []).map((day) => `
          <article class="rounded-xl bg-surface-container-lowest border border-outline-variant/30 p-5">
            <p class="font-label-caps text-label-caps text-secondary uppercase tracking-wider mb-2">Day ${day.day}</p>
            <h3 class="font-headline-sm text-headline-sm text-primary mb-4">${day.theme || ""}</h3>
            ${(day.stops || []).map((stop) => `
              <div class="mb-4 last:mb-0">
                <p class="font-data-mono text-data-mono text-on-surface-variant">${stop.time || ""}</p>
                <h4 class="font-bold text-on-surface">${stop.place || ""}</h4>
                <p class="font-body-md text-body-md text-on-surface-variant">${stop.whyNow || ""}</p>
              </div>
            `).join("")}
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-ready");
  setActiveNav();
  setupMonthNavigator();

  document.querySelectorAll("[data-page-target]").forEach((button) => {
    button.addEventListener("click", () => gotoPage(button.dataset.pageTarget));
  });

  document.querySelectorAll("a[href$='.html']").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      gotoPage(link.getAttribute("href"));
    });
  });

  const generateButton = document.querySelector("[data-generate-trip]");
  if (generateButton) {
    generateButton.addEventListener("click", async () => {
      const input = collectPlanForm();
      if (!input) return gotoPage("journey.html");

      generateButton.disabled = true;
      generateButton.classList.add("opacity-80", "cursor-wait");
      const originalHtml = generateButton.innerHTML;
      generateButton.innerHTML = '<span class="material-symbols-outlined text-[18px]">progress_activity</span> กำลังสร้างแผน...';

      try {
        const response = await fetch("/api/generate-trip", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(input)
        });
        if (!response.ok) throw new Error("Generation failed");
        const trip = await response.json();
        localStorage.setItem("nanGeneratedTrip", JSON.stringify(trip));
      } catch (error) {
        console.warn("Using local fallback trip.", error);
        localStorage.setItem("nanGeneratedTrip", JSON.stringify({
          title: "Your 3-Day Emerald Journey",
          summary: "แผนสำรองสำหรับ demo flow หากต้องการสร้างแผนจริง ให้รัน dev server พร้อม GEMINI_API_KEY",
          days: []
        }));
      } finally {
        generateButton.disabled = false;
        generateButton.classList.remove("opacity-80", "cursor-wait");
        generateButton.innerHTML = originalHtml;
        gotoPage("journey.html");
      }
    });
  }

  renderGeneratedTrip();
});
