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

const translations = {
  th: {
    langToggle: "ไทย",
    langToggleShort: "EN",
    navSeason: "ฤดูกาล",
    navPlan: "แผนเที่ยว",
    navStories: "เรื่องเล่า",
    weatherHeaderLabel: "อากาศน่าน",
    weatherRainy: "ฝนตก",
    weatherCloudy: "มีเมฆ",
    weatherClear: "แจ่มใส",
    weatherNight: "กลางคืน",
    heroBadge: "ฤดูฝนเขียวชุ่ม",
    heroTitle: "น่านในฤดูเขียว: เมืองที่หายใจไปกับภูเขาและสายฝน",
    heroDesc: "วางแผนเที่ยวน่านจากฤดูกาลจริง สภาพอากาศจริง และเสน่ห์ของแต่ละเดือน ตั้งแต่วัดภูมินทร์ ปัว บ่อเกลือ ดอยเสมอดาว ไปจนถึงเสาดินนาน้อย",
    heroCta: "วางแผนตามฤดูกาล",
    seasonSectionLabel: "น่าน 12 เดือน",
    seasonSectionTitle: "ไฮไลต์ตามฤดูกาล",
    seasonSectionDesc: "แต่ละเดือนของน่านมีจังหวะไม่เหมือนกัน ใช้คู่มือนี้เลือกอารมณ์ เส้นทาง และประสบการณ์ท้องถิ่นให้เหมาะกับช่วงเดินทางของคุณ",
    planPageTitle: "แผนเที่ยว",
    planPageIntro: "เลือกเดือน ความสนใจ และจังหวะการเดินทางของคุณ ระบบจะผสานฤดูกาล อากาศจริง Hidden Gems และเรื่องเล่าท้องถิ่นให้กลายเป็นแผนเที่ยวที่เหมาะกับช่วงเวลานั้น",
    planSectionTimeTitle: "เดินทางเดือนไหน",
    planSectionTimeDesc: "เลือกเดือนที่อยากเดินทาง เพื่อให้คำแนะนำสอดคล้องกับฤดูกาลและบรรยากาศจริงของน่าน",
    planSectionVibeTitle: "โหมดการเดินทาง",
    planSectionVibeDesc: "เลือกสิ่งที่คุณชอบเพื่อให้แผนของคุณชวนสนใจมากขึ้น",
    planSectionPaceTitle: "จังหวะการเดินทาง",
    planSectionPaceDesc: "กำหนดความเร็วและความลึกของการเดินทางให้เข้ากับช่วงเวลาของคุณ",
    storyPageTitle: "น่าน 12 เดือน: คุณอยากพบน่านในจังหวะไหน",
    storyPageIntro: "สำรวจบรรยากาศที่เปลี่ยนไปในแต่ละเดือน ตั้งแต่ลมหนาว ดอกไม้ วัฒนธรรมเมืองเก่า นาข้าวสีเขียว ไปจนถึงทะเลหมอกปลายปี",
    journeyPageBadge: "แผนที่สร้างให้คุณ",
    journeyPageTitle: "แผนเที่ยวน่าน 3 วันในฤดูเขียว",
    journeyPageIntro: "เส้นทางที่ปรับตามฤดูกาลและสภาพอากาศจริง ผสานธรรมชาติสีเขียว วิถีชุมชน และมรดกวัฒนธรรมของน่าน",
    spotlightHeading: "จุดเด่นที่ซ่อนอยู่",
    viewAll: "ดูทั้งหมด",
    spotlightBadge: "เหมาะที่สุดในเดือนสิงหาคม",
    spotlightLocation: "สะปัน, น่าน",
    spotlightTitle: "โฮมสเตย์ริมน้ำตกกลางหุบเขาสะปัน",
    spotlightCopy: "ช่วงฤดูฝนคือเวลาที่หุบเขาเขียวที่สุด เหมาะกับการพักช้า ๆ ถ่ายภาพหมอก และสัมผัสวิถีชุมชนบ่อเกลือ-สะปัน",
    spotlightTag1: "ธรรมชาติ",
    spotlightTag2: "ชีวิตช้า ๆ",
    sourcesHeading: "แหล่งข้อมูลและอ้างอิง",
    sourcesIntro: "ข้อมูลสถานที่และเทศกาลอ้างอิงจากแหล่งที่เชื่อถือได้ของจังหวัดน่านและทางการท่องเที่ยว",
    sourcesNote: "ข้อมูลสถานที่และเทศกาลอ้างอิงจาก ททท. จังหวัดน่าน, 5 Must Do In Nan และข้อมูลอากาศจริงจาก Open-Meteo"
  },
  en: {
    langToggle: "EN",
    langToggleShort: "TH",
    navSeason: "Season",
    navPlan: "Plan",
    navStories: "Stories",
    weatherHeaderLabel: "Nan Weather",
    weatherRainy: "Rainy",
    weatherCloudy: "Cloudy",
    weatherClear: "Clear",
    weatherNight: "Night",
    heroBadge: "Lush Rainy Season",
    heroTitle: "August in Nan: Where the Earth Breathes Green",
    heroDesc: "Plan your Nan journey based on real seasons, live weather, and monthly charms. From Wat Phumin and Pua to Bo Kluea, Doi Samer Dao, and Sao Din Na Noi.",
    heroCta: "PLAN YOUR NAN",
    seasonSectionLabel: "Nan 12 Months",
    seasonSectionTitle: "Seasonal Highlights",
    seasonSectionDesc: "Each month in Nan has a different rhythm. Use this guide to choose the mood, route, and local experience that fits your travel window.",
    planPageTitle: "Crafting Your Nan Journey",
    planPageIntro: "Choose your month, interests, and pace of travel. The system blends seasonality, real weather, hidden gems, and local stories into a trip plan that fits that moment.",
    planSectionTimeTitle: "When",
    planSectionTimeDesc: "Select the month for your journey to experience the unique seasonal rhythms of Nan.",
    planSectionVibeTitle: "The Vibe",
    planSectionVibeDesc: "Choose the experiences that speak to you most and shape your days.",
    planSectionPaceTitle: "Dynamics",
    planSectionPaceDesc: "Define the rhythm of your trip and who you're sharing it with.",
    storyPageTitle: "Twelve Months, Twelve Souls. Which Nan is Yours?",
    storyPageIntro: "Explore the shifting atmospheres of Northern Thailand. From vibrant blooms to misty mornings, Nan transforms with every passing month.",
    journeyPageBadge: "A journey map made for you",
    journeyPageTitle: "Your 3 Day-Emerald Journey",
    journeyPageIntro: "A route shaped by season and real weather, blending green nature, local communities, and the cultural heritage of Nan.",
    spotlightHeading: "Hidden Gem Spotlight",
    viewAll: "VIEW ALL",
    spotlightBadge: "Best in August",
    spotlightLocation: "Sapan, Nan",
    spotlightTitle: "The Whispering Waterfall Homestay",
    spotlightCopy: "Tucked away in the misty valleys, this secluded retreat offers an unparalleled connection to nature during the peak of the rainy season.",
    spotlightTag1: "NATURE",
    spotlightTag2: "SLOW LIVING",
    sourcesHeading: "Official Nan tourism references",
    sourcesIntro: "A curated set of official and trusted sources for planning your Nan journey.",
    sourcesNote: "Place and festival references are drawn from TAT Nan, 5 Must Do In Nan, and live weather from Open-Meteo."
  }
};

const WEATHER_IMAGES = {
  rain: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKDhyiN5DjiaBIMSR34rOLIDu-mKNJ70YSiYrGJBzbRyL2yXZiN7sFYU5R8Fmk6EBmWV8Q7yoLso7XClAcEANU4hgFd89YVdrBPeOrllVh6xTkGNz3VCdzJzRgnhVpkbAs4GizoiZioJlQz08RhjnDRDKnrwZ-YpjyAjGvNQ-Is-Ael37tnmpj-lfaVTDRjYLb2pu68MJPvzzlDHDYKnhi-Rjwd9XYdmZrrjhKgcvTASN7WnWlt7T2hcCxSKm94AOrZ406O-NH96U',
  cloudy: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2LNfTLC7nkNkgzAfwam5AM3J5nJTctMgDevP9hg8Z4tcAqzCwBk_cRGs0ldC9R6M7FjmBIliDNQXsTzVCbNLFY6dxT7fJ5Bm_D4K5UJ06rx2nnaQOhV-vicQoPRUasnkZjF1YOoUbzcy6GwHc4DY9vtm-yJK1j6L6vcDhNyvh4B0vEKqtUOcjqKLW_Hfk3YXtq9jVta4TNDXITs9DZG5UANF1i4IxDCtKD9Y8PYlxWwnPT3s4uG-FsLUFmZxVf41_C6-YK9WXMng',
  clear: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEKEFeUSN3KY4efwhru4RUcYSkPTs6y4lGm32XkUVELtLJaGfdkXPOo_TCQacaAivbuSb-IPwDmuIcdc4mlqf0LOdNXkQLVIrPUtM4Mt-lcXTMQyKFo3vd3FOXz14dYJOLVTIJ9cXri8NNGoPqvcR9UTyPqdlh52AlzWlyISPY_2Z4OXWAPfh-MHDvDMvkKeLeagVuXGQXEFTvJ5f14AsS7cVrZmPPWF2N1maL0ncF3PY1vYJmYeszaYhb-ZZMMBcHDNUMk5Wp1qI',
  night: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqlaoTrcO96G8S7svgj75vs0_ipZku6_ZcKDd1alqM-HXqSOA6q7u0tEGtVtuFD3yCyjqkG6lxDadKiStwFTG0YtvlsIcRL9RWDy0VzmEo2EswWcZIYkRCAvUCSIAYZAYMkE1BWsccabuSFXA6KC9owjJyYDt9ptAfXvdwzp_XeIJnn_4A79huccjtc7UoIOAmrSs8eqdfLQVD5DDoglTL2TnFZHBc2QkjIfQU0ccYUPbwcJfFBilVkeg35gDIUN-2rmkfS0945_8'
};

function applyLanguage(lang = "th") {
  const safeLang = translations[lang] ? lang : "th";
  const locale = translations[safeLang];
  document.documentElement.lang = safeLang === "en" ? "en" : "th";
  document.documentElement.setAttribute("data-lang", safeLang);
  document.body?.setAttribute("data-lang", safeLang);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (locale[key]) element.textContent = locale[key];
  });

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    const label = toggle.querySelector("[data-lang-label]");
    const shortLabel = toggle.querySelector("[data-lang-short]");
    if (label) label.textContent = safeLang === "en" ? "EN" : "ไทย";
    if (shortLabel) shortLabel.textContent = safeLang === "en" ? "TH" : "EN";
  }

  const weatherLabel = document.getElementById("weather-header-label");
  if (weatherLabel && locale.weatherHeaderLabel) weatherLabel.textContent = locale.weatherHeaderLabel;
}

function setupLanguageToggle() {
  const toggle = document.getElementById("lang-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const nextLang = document.documentElement.getAttribute("data-lang") === "en" ? "th" : "en";
    localStorage.setItem("nanLanguage", nextLang);
    applyLanguage(nextLang);
    loadNanWeather();
  });
}

function applyWeather(kind, current = null) {
  const lang = document.documentElement.getAttribute("data-lang") === "en" ? "en" : "th";
  const locale = translations[lang] || translations.th;
  const weatherIcons = {
    rain: "rainy",
    cloudy: "cloud",
    clear: "clear_day",
    night: "nights_stay"
  };
  const weatherKeys = {
    rain: "weatherRainy",
    cloudy: "weatherCloudy",
    clear: "weatherClear",
    night: "weatherNight"
  };
  const copy = weatherIcons[kind] ? weatherIcons[kind] : "rainy";
  const label = locale[weatherKeys[kind]] || locale.weatherRainy || "Rainy";
  const temp = current && Number.isFinite(Number(current.temperature_2m)) ? ` · ${Math.round(current.temperature_2m)}°C` : "";
  const wind = current && Number.isFinite(Number(current.wind_speed_10m)) ? ` · Wind ${Math.round(current.wind_speed_10m)} km/h` : "";
  const fullLabel = `${label}${temp}${wind}`;

  const heroImage = document.getElementById("weather-hero-image");
  const heroIcon = document.getElementById("weather-icon");
  const heroLabel = document.getElementById("weather-label");
  const headerIcon = document.getElementById("weather-header-icon");
  const headerLabel = document.getElementById("weather-header-label");

  if (heroImage) heroImage.src = WEATHER_IMAGES[kind] || WEATHER_IMAGES.rain;
  if (heroIcon) heroIcon.textContent = copy;
  if (heroLabel) heroLabel.textContent = fullLabel;
  if (headerIcon) headerIcon.textContent = copy;
  if (headerLabel) headerLabel.textContent = fullLabel;
}

async function loadNanWeather() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=18.7756&longitude=100.7730&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,cloud_cover,wind_speed_10m&timezone=Asia%2FBangkok";
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`Weather request failed: ${response.status}`);
    const data = await response.json();
    const current = data.current || {};
    const code = Number(current.weather_code || 0);
    const rain = Number(current.rain || 0);
    const precipitation = Number(current.precipitation || 0);
    const cloudCover = Number(current.cloud_cover || 0);
    let kind = "rain";
    
    if (Number(current.is_day) === 0) kind = "night";
    else if (rain > 0 || precipitation > 0 || [51, 53, 55, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99].includes(code)) kind = "rain";
    else if ([1, 2, 3, 45, 48].includes(code) || cloudCover >= 55) kind = "cloudy";
    else kind = "clear";
    
    applyWeather(kind, current);
  } catch (error) {
    console.warn("Using fallback Nan weather background.", error);
    applyWeather("rain");
  }
}

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
  return link.getAttribute("data-nav-key") || "";
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
  const savedLang = localStorage.getItem("nanLanguage") || "th";
  applyLanguage(savedLang);
  loadNanWeather();
  setActiveNav();
  setupMonthNavigator();
  setupLanguageToggle();
  setInterval(() => {
    loadNanWeather();
  }, 600000);

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
