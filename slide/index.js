const pptxgen = require("pptxgenjs");

const COLOR = {
  forest: "2C5F2D",
  forestDark: "1F3320",
  moss: "6E8F52",
  earth: "8B5E34",
  gold: "C9A227",
  cream: "FFFFFF",
  paper: "F7F6F1",
  ink: "2B2B22",
  mute: "6B6B5A",
  line: "D9D6C8",
  tintGreen: "E7ECE0",
  tintEarth: "EFE6D8",
};

const FONT_HEAD = "Cambria";
const FONT_BODY = "Calibri";

let pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.3 x 7.5
const PW = 13.33, PH = 7.5;

function icon(name) { return `icons/${name}.png`; }
function iconWhite(name) { return `icons/${name}_white.png`; }

function bgFill(slide, color) {
  slide.background = { color };
}

function pageTag(slide, num, total, dark) {
  slide.addText(`${num} / ${total}`, {
    x: PW - 1.3, y: PH - 0.5, w: 1.0, h: 0.3,
    fontFace: FONT_BODY, fontSize: 10, color: dark ? "C9D6BE" : COLOR.mute,
    align: "right",
  });
}

function kicker(slide, text, opts = {}) {
  slide.addText(text.toUpperCase(), {
    x: opts.x ?? 0.6, y: opts.y ?? 0.45, w: opts.w ?? 8, h: 0.4,
    fontFace: FONT_BODY, fontSize: 13, bold: true,
    color: opts.color ?? COLOR.gold, charSpacing: 2,
  });
}

function title(slide, text, opts = {}) {
  slide.addText(text, {
    x: opts.x ?? 0.6, y: opts.y ?? 0.8, w: opts.w ?? 10.5, h: opts.h ?? 0.9,
    fontFace: FONT_HEAD, fontSize: opts.size ?? 32, bold: true,
    color: opts.color ?? COLOR.forestDark, margin: 0,
  });
}

// Image placeholder: rounded rect, dashed border, tint fill, icon, thai label
function imagePlaceholder(slide, { x, y, w, h, label, iconName = "camera", tint = COLOR.tintGreen }) {
  slide.addShape("roundRect", {
    x, y, w, h, rectRadius: 0.12,
    fill: { color: tint },
    line: { color: COLOR.moss, width: 1.25, dashType: "dash" },
  });
  const isize = Math.min(0.6, h * 0.28);
  // slide.addImage({
  //   path: icon(iconName),
  //   x: x + w / 2 - isize / 2, y: y + h / 2 - isize / 2 - (h > 1.3 ? 0.28 : 0.12),
  //   w: isize, h: isize,
  // });
  slide.addText([{ text: "ใส่ภาพ: ", options: { bold: true, color: COLOR.forest } }, { text: label, options: { color: COLOR.mute } }], {
    x: x + 0.15, y: y + h - (h > 1.3 ? 0.55 : 0.4), w: w - 0.3, h: 0.4,
    fontFace: FONT_BODY, fontSize: h > 1.3 ? 11 : 9.5, align: "center", valign: "top", margin: 0,
  });
}

function iconCircle(slide, { x, y, d = 0.7, iconName, bg = COLOR.forest, iconScale = 0.5 }) {
  slide.addShape("ellipse", { x, y, w: d, h: d, fill: { color: bg }, line: { type: "none" } });
  const isz = d * iconScale;
  // slide.addImage({ path: iconWhite(iconName), x: x + d / 2 - isz / 2, y: y + d / 2 - isz / 2, w: isz, h: isz });
}

const TOTAL = 15;

// ---------- SLIDE 1: Title ----------
{
  const s = pres.addSlide();
  bgFill(s, COLOR.forestDark);
  imagePlaceholder(s, { x: 7.3, y: 0, w: 6.03, h: 7.5, label: "ทุ่งนาเขียวขจี น่าน (โทนมืดคลุมด้วย overlay เขียว)", iconName: "mountain", tint: "2C4A2C" });
  s.addShape("rect", { x: 7.3, y: 0, w: 6.03, h: 7.5, fill: { color: COLOR.forestDark, transparency: 55 }, line: { type: "none" } });

  s.addText("HACKATHON PITCH · จังหวัดน่าน", {
    x: 0.7, y: 0.7, w: 6, h: 0.4, fontFace: FONT_BODY, fontSize: 13, bold: true, color: COLOR.gold, charSpacing: 2,
  });
  s.addText("Nan Beyond AI", {
    x: 0.65, y: 2.6, w: 6.3, h: 1.6, fontFace: FONT_HEAD, fontSize: 54, bold: true, color: COLOR.cream, margin: 0,
  });
  s.addText("ค้นพบน่านในทุกฤดูกาล\nด้วย AI ผู้เล่าเรื่องท้องถิ่น", {
    x: 0.7, y: 4.15, w: 6, h: 1.2, fontFace: FONT_BODY, fontSize: 20, color: "D8E3CE", margin: 0, lineSpacingMultiple: 1.25,
  });
  s.addShape("line", { x: 0.72, y: 5.55, w: 1.6, h: 0, line: { color: COLOR.gold, width: 2 } });
  s.addText("แผนเที่ยวที่ปรับตามฤดูกาลจริง กระจายรายได้สู่ชุมชนตลอดทั้งปี", {
    x: 0.7, y: 5.75, w: 5.8, h: 0.6, fontFace: FONT_BODY, fontSize: 13, italic: true, color: "AFC2A0",
  });
}

// ---------- SLIDE 2: Hook stat ----------
{
  const s = pres.addSlide();
  bgFill(s, COLOR.paper);
  kicker(s, "ทำไมต้องเป็นตอนนี้");
  title(s, "น่านสวยทุกเดือน... แต่นักท่องเที่ยวมาแค่ 3 เดือน", { size: 30, w: 11.5 });
  s.addText("ช่วงพีค (ธ.ค.-ก.พ.) ที่พักแน่น ส่วนฤดูอื่นกลับเงียบเหงา ทั้งที่แต่ละฤดูกาลของน่านมีเสน่ห่ไม่แพ้กัน", {
    x: 0.6, y: 1.75, w: 6.1, h: 1.0, fontFace: FONT_BODY, fontSize: 14, color: COLOR.mute, lineSpacingMultiple: 1.3,
  });

  const stats = [
    { n: "85-100%", l: "อัตราเข้าพัก ปัว/บ่อเกลือ\nช่วงหน้าหนาว", c: COLOR.forest },
    { n: "-50%", l: "นักท่องเที่ยวลดลง เมื่อเศรษฐกิจ\nผันผวน (สะปัน/บ่อเกลือ)", c: COLOR.earth },
    { n: "9", l: "เดือนที่เหลือ ยังรอการ\nค้นพบจากนักเดินทาง", c: COLOR.gold },
  ];
  stats.forEach((st, i) => {
    const x = 0.6 + i * 2.05;
    s.addShape("roundRect", { x, y: 3.1, w: 1.85, h: 2.0, rectRadius: 0.1, fill: { color: COLOR.cream }, line: { color: COLOR.line, width: 1 }, shadow: { type: "outer", color: "888878", opacity: 0.25, blur: 6, offset: 2, angle: 90 } });
    s.addText(st.n, { x, y: 3.35, w: 1.85, h: 0.7, align: "center", fontFace: FONT_HEAD, bold: true, fontSize: 26, color: st.c, margin: 0 });
    s.addText(st.l, { x: x + 0.1, y: 4.1, w: 1.65, h: 0.9, align: "center", fontFace: FONT_BODY, fontSize: 10.5, color: COLOR.ink, lineSpacingMultiple: 1.15 });
  });

  imagePlaceholder(s, { x: 6.95, y: 1.75, w: 5.78, h: 5.15, label: "ที่พักปัว/บ่อเกลือคึกคักหน้าหนาว vs เงียบเหงาหน้าอื่น", iconName: "trending" });
  pageTag(s, 2, TOTAL, false);
}

// ---------- SLIDE 3: Problem 1 ----------
{
  const s = pres.addSlide();
  bgFill(s, COLOR.cream);
  imagePlaceholder(s, { x: 0, y: 0, w: 5.6, h: 7.5, label: "ถนนลอยฟ้าน่าน ช่วงหมอกหนาแน่น (สื่อถึงการเดินทางไกล)", iconName: "mountain" });

  kicker(s, "ปัญหาที่ 1", { x: 5.95 });
  title(s, "การกระจุกตัวและ\nข้อจำกัดการเดินทาง", { x: 5.95, w: 6.8, h: 1.6, size: 27 });
  s.addText(
    "นักท่องเที่ยวกระจุกตัวช่วงหน้าหนาว ทำให้ที่พักในอำเภอปัวและบ่อเกลือแน่นเกินรับ ส่วนฤดูอื่นกลับซบเซา และเมื่อเศรษฐกิจผันผวนหรือราคาน้ำมันสูง แหล่งท่องเที่ยวไกลอย่างสะปันและบ่อเกลือยิ่งได้รับผลกระทบหนัก เพราะนักท่องเที่ยวขาดความมั่นใจในการเดินทาง",
    { x: 5.95, y: 2.6, w: 6.8, h: 2.3, fontFace: FONT_BODY, fontSize: 15, color: COLOR.ink, lineSpacingMultiple: 1.35 }
  );

  iconCircle(s, { x: 5.95, y: 5.25, d: 0.6, iconName: "alert", bg: COLOR.earth, iconScale: 0.55 });
  s.addText("ความเสี่ยงเชิงเศรษฐกิจกระจุกตัวในไม่กี่เดือน ทำให้ชุมชนรายได้ไม่มั่นคง", {
    x: 6.7, y: 5.25, w: 6.0, h: 0.7, fontFace: FONT_BODY, fontSize: 13, italic: true, color: COLOR.mute, valign: "middle",
  });
  pageTag(s, 3, TOTAL, false);
}

// ---------- SLIDE 4: Problem 2 ----------
{
  const s = pres.addSlide();
  bgFill(s, COLOR.tintGreen);
  kicker(s, "ปัญหาที่ 2");
  title(s, "นักท่องเที่ยวไม่รู้เสน่ห์ของฤดูกาลอื่น", { w: 11.5, size: 28 });
  s.addText(
    "การค้นหาผ่าน Search Engine มักดึงเฉพาะ \"สถานที่ยอดนิยม\" มาแนะนำ โดยไม่ประเมินสภาพอากาศและบริบทของเดือนนั้น ๆ ทำให้ทริปได้ประสบการณ์ที่ไม่ตรงปก หรือเลือกไม่มาเที่ยวน่านในฤดูอื่นเลย",
    { x: 0.6, y: 1.7, w: 6.0, h: 1.7, fontFace: FONT_BODY, fontSize: 14.5, color: COLOR.ink, lineSpacingMultiple: 1.35 }
  );

  // mock search UI concept (not a photo, built from shapes)
  const mx = 0.6, my = 3.5, mw = 5.9, mh = 3.4;
  s.addShape("roundRect", { x: mx, y: my, w: mw, h: mh, rectRadius: 0.1, fill: { color: COLOR.cream }, line: { color: COLOR.line, width: 1 }, shadow: { type: "outer", color: "888878", opacity: 0.25, blur: 6, offset: 2, angle: 90 } });
  iconCircle(s, { x: mx + 0.25, y: my + 0.25, d: 0.45, iconName: "search", bg: COLOR.mute, iconScale: 0.55 });
  s.addText("ค้นหา: \"ที่เที่ยวน่าน\"", { x: mx + 0.85, y: my + 0.28, w: 3, h: 0.4, fontFace: FONT_BODY, fontSize: 13, color: COLOR.mute, valign: "middle" });
  const results = ["ดอยเสมอดาว (ยอดนิยม)", "วัดภูมินทร์ (ยอดนิยม)", "ถนนลอยฟ้า (ยอดนิยม)"];
  results.forEach((r, i) => {
    const ry = my + 0.95 + i * 0.6;
    s.addShape("line", { x: mx + 0.25, y: ry + 0.5, w: mw - 0.5, h: 0, line: { color: COLOR.line, width: 0.75 } });
    s.addText(r, { x: mx + 0.25, y: ry, w: mw - 0.5, h: 0.4, fontFace: FONT_BODY, fontSize: 13, color: COLOR.forest, valign: "middle" });
  });
  s.addText("⚠ ไม่บอกว่าตอนนี้เดือนไหนควรไปที่ไหน", { x: mx + 0.25, y: my + 2.8, w: mw - 0.5, h: 0.4, fontFace: FONT_BODY, fontSize: 11.5, italic: true, color: COLOR.earth, valign: "middle" });

  imagePlaceholder(s, { x: 6.8, y: 1.7, w: 5.9, h: 5.2, label: "นักท่องเที่ยวเปิดมือถือดูแผนที่กลางทุ่งนา/ดอย", iconName: "smartphone" });
  pageTag(s, 4, TOTAL, false);
}

// ---------- SLIDE 5: Problem 3 ----------
{
  const s = pres.addSlide();
  bgFill(s, COLOR.cream);
  kicker(s, "ปัญหาที่ 3");
  title(s, "ขาดความเชื่อมโยงกับเศรษฐกิจหมุนเวียน", { w: 11.5, size: 27 });
  s.addText(
    "การท่องเที่ยวเชิงธรรมชาติยังขาดการบูรณาการกับอัตลักษณ์และผลิตภัณฑ์ชุมชน ชุมชนต้องพึ่งพาสินค้านำเข้าจากภายนอก มากกว่าการหมุนเวียนเศรษฐกิจภายในท้องถิ่นของตนเอง",
    { x: 0.6, y: 1.7, w: 6.0, h: 1.5, fontFace: FONT_BODY, fontSize: 14.5, color: COLOR.ink, lineSpacingMultiple: 1.35 }
  );

  const items = [
    { icon: "weave", t: "กลุ่มทอผ้าบ้านซาวหลวง", d: "ยังเข้าไม่ถึงนักท่องเที่ยวคุณภาพ" },
    { icon: "home", t: "โฮมสเตย์ & ร้านค้าเล็ก", d: "รายได้กระจุกอยู่กับธุรกิจรายใหญ่" },
    { icon: "rice", t: "ผลิตผลท้องถิ่น", d: "ขาดช่องทางเล่าเรื่องสู่นักเดินทาง" },
  ];
  items.forEach((it, i) => {
    const y = 3.4 + i * 0.95;
    iconCircle(s, { x: 0.6, y, d: 0.6, iconName: it.icon === "weave" ? "gift" : it.icon, bg: COLOR.forest, iconScale: 0.55 });
    s.addText(it.t, { x: 1.35, y: y - 0.02, w: 4.7, h: 0.4, fontFace: FONT_BODY, bold: true, fontSize: 14, color: COLOR.forestDark, valign: "bottom" });
    s.addText(it.d, { x: 1.35, y: y + 0.35, w: 4.7, h: 0.4, fontFace: FONT_BODY, fontSize: 12, color: COLOR.mute });
  });

  imagePlaceholder(s, { x: 6.9, y: 1.7, w: 5.8, h: 5.2, label: "ผ้าทอมือ / ผลิตภัณฑ์ชุมชนบ้านซาวหลวง", iconName: "gift", tint: COLOR.tintEarth });
  pageTag(s, 5, TOTAL, false);
}

// ---------- SLIDE 6: Solution intro ----------
{
  const s = pres.addSlide();
  bgFill(s, COLOR.forestDark);
  kicker(s, "ทางออก", { color: COLOR.gold });
  s.addText("Nan Beyond AI คือผู้ช่วยเล่าเรื่องน่าน\nที่รู้จักทุกฤดูกาล", {
    x: 0.6, y: 1.4, w: 11.8, h: 1.9, fontFace: FONT_HEAD, bold: true, fontSize: 32, color: COLOR.cream, lineSpacingMultiple: 1.15, margin: 0,
  });
  s.addText(
    "AI ที่จับคู่สภาพอากาศ เทศกาล และความสนใจของผู้ใช้ เข้ากับบริบทของแต่ละเดือน เพื่อสร้างแผนเที่ยวที่ \"ตรงปก\" พร้อมแนะนำ Hidden Gems ของชุมชน",
    { x: 0.6, y: 3.35, w: 7.2, h: 1.2, fontFace: FONT_BODY, fontSize: 15, color: "D8E3CE", lineSpacingMultiple: 1.35 }
  );

  const pillars = [
    { icon: "compass", t: "แผนเที่ยวตามฤดูกาล" },
    { icon: "layers", t: "ปรับแผนได้แบบ Adaptive" },
    { icon: "heart", t: "เล่าเรื่องท้องถิ่นแบบ Local Guide" },
  ];
  pillars.forEach((p, i) => {
    const y = 4.85 + i * 0.68;
    iconCircle(s, { x: 0.6, y, d: 0.5, iconName: p.icon, bg: COLOR.gold, iconScale: 0.55 });
    s.addText(p.t, { x: 1.25, y, w: 5.5, h: 0.5, fontFace: FONT_BODY, fontSize: 14, bold: true, color: COLOR.cream, valign: "middle" });
  });

  imagePlaceholder(s, { x: 8.15, y: 1.4, w: 4.6, h: 5.6, label: "มือถือแสดงแผนเที่ยว AI คู่กับทุ่งนา/ทะเลหมอก", iconName: "smartphone", tint: "2C4A2C" });
  pageTag(s, 6, TOTAL, true);
}

// ---------- SLIDE 7: Seasonal showcase grid ----------
{
  const s = pres.addSlide();
  bgFill(s, COLOR.paper);
  kicker(s, "ประสบการณ์ 4 ฤดูกาล");
  title(s, "น่าน มีเรื่องเล่าใหม่ทุก 3 เดือน", { size: 28, w: 11 });

  const seasons = [
    { t: "หน้าฝน", sub: "พ.ค. - ต.ค.", d: "นาข้าวเขียวขจี หมอกหลังฝน วิถีชุมชนเดินทางง่าย", icon: "leaf", tint: COLOR.tintGreen },
    { t: "ปลายฝนต้นหนาว", sub: "ต.ค. - พ.ย.", d: "นาข้าวสีทอง ทัศนวิสัยดี ขับรถเที่ยวถนนลอยฟ้า", icon: "rice", tint: COLOR.tintEarth },
    { t: "หน้าหนาว (พีค)", sub: "ธ.ค. - ก.พ.", d: "อากาศหนาวจัด ทะเลหมอก กางเต็นท์ดูดาว", icon: "snow", tint: COLOR.tintGreen },
    { t: "หน้าร้อน", sub: "มี.ค. - พ.ค.", d: "ท้องฟ้าโปร่ง วัดภูมินทร์ คาเฟ่ ถนนคนเดิน", icon: "sun", tint: COLOR.tintEarth },
  ];
  const gw = 2.85, gh = 4.7, gapX = 0.25, startX = 0.6, startY = 1.7;
  seasons.forEach((se, i) => {
    const x = startX + i * (gw + gapX);
    imagePlaceholder(s, { x, y: startY, w: gw, h: 3.0, label: se.t, iconName: se.icon, tint: se.tint });
    s.addText(se.t, { x, y: startY + 3.08, w: gw, h: 0.35, fontFace: FONT_HEAD, bold: true, fontSize: 15, color: COLOR.forestDark, margin: 0 });
    s.addText(se.sub, { x, y: startY + 3.4, w: gw, h: 0.3, fontFace: FONT_BODY, fontSize: 10.5, color: COLOR.gold, bold: true, margin: 0 });
    s.addText(se.d, { x, y: startY + 3.68, w: gw, h: 1.0, fontFace: FONT_BODY, fontSize: 10.5, color: COLOR.mute, lineSpacingMultiple: 1.2 });
  });
  pageTag(s, 7, TOTAL, false);
}

// ---------- SLIDE 8: Why AI ----------
{
  const s = pres.addSlide();
  bgFill(s, COLOR.cream);
  kicker(s, "ทำไมต้องเป็น AI");
  title(s, "AI ไม่ใช่แค่แชทบอท แต่เป็นเอนจินแนะนำอัจฉริยะ", { w: 11.8, size: 25 });

  const factors = [
    ["calendar", "เดือนที่เดินทาง"],
    ["cloud", "สภาพอากาศ"],
    ["flag", "เทศกาล & กิจกรรมท้องถิ่น"],
    ["heart", "ความสนใจของผู้ใช้"],
    ["dollar", "งบประมาณ & ระยะเวลา"],
  ];
  const startX = 0.6, y = 1.95, cw = 2.32;
  factors.forEach((f, i) => {
    const x = startX + i * cw;
    iconCircle(s, { x: x + cw / 2 - 0.35, y, d: 0.7, iconName: f[0], bg: COLOR.forest, iconScale: 0.5 });
    s.addText(f[1], { x, y: y + 0.85, w: cw - 0.15, h: 0.6, align: "center", fontFace: FONT_BODY, fontSize: 11.5, bold: true, color: COLOR.forestDark, lineSpacingMultiple: 1.15 });
  });

  s.addShape("roundRect", { x: 0.6, y: 3.5, w: 12.1, h: 1.15, rectRadius: 0.1, fill: { color: COLOR.tintGreen }, line: { type: "none" } });
  s.addText("AI ให้คำแนะนำพร้อม “คำอธิบายที่โปร่งใส” ว่าทำไมสถานที่นี้เหมาะกับช่วงเวลานี้ — ไม่ใช่แค่บอกว่าไปไหน แต่บอกว่า “ทำไม”", {
    x: 0.9, y: 3.5, w: 11.5, h: 1.15, fontFace: FONT_BODY, italic: true, fontSize: 14.5, color: COLOR.forestDark, valign: "middle", lineSpacingMultiple: 1.25,
  });

  imagePlaceholder(s, { x: 0.6, y: 4.95, w: 5.85, h: 1.95, label: "ทะเลหมอกยามเช้า ดอยเสมอดาว", iconName: "mountain" });
  imagePlaceholder(s, { x: 6.65, y: 4.95, w: 6.05, h: 1.95, label: "หน้าจอแอปแสดงคำอธิบายเหตุผลแนะนำ", iconName: "smartphone", tint: COLOR.tintEarth });
  pageTag(s, 8, TOTAL, false);
}

// ---------- SLIDE 9: Data pipeline ----------
{
  const s = pres.addSlide();
  bgFill(s, COLOR.tintEarth);
  kicker(s, "เบื้องหลัง");
  title(s, "Data & Knowledge Pipeline", { w: 11, size: 30 });
  s.addText("ผสานข้อมูลทางการเข้ากับฐานความรู้ที่ทีมภัณฑ์ดูแลอย่างต่อเนื่อง", {
    x: 0.6, y: 1.55, w: 10, h: 0.5, fontFace: FONT_BODY, fontSize: 14, color: COLOR.mute,
  });

  const steps = [
    ["database", "ข้อมูลท่องเที่ยวทางการ", "ททท. / Open Data / ปฏิทินเทศกาล"],
    ["cloud", "ข้อมูลสภาพอากาศ", "Weather API แบบเรียลไทม์"],
    ["layers", "ฐานความรู้ท้องถิ่น", "ทีมงานคัดสรรและใส่ metadata ฤดูกาล"],
    ["cpu", "AI Recommendation Engine", "ประมวลผลและให้เหตุผลประกอบ"],
    ["compass", "แผนเที่ยวรายบุคคล", "ส่งมอบแผนที่ตรงปกที่สุด"],
  ];
  const y0 = 2.5, rowH = 0.92, x0 = 0.7;
  steps.forEach((st, i) => {
    const y = y0 + i * rowH;
    iconCircle(s, { x: x0, y, d: 0.6, iconName: st[0], bg: COLOR.forest, iconScale: 0.55 });
    s.addText(st[1], { x: x0 + 0.85, y: y - 0.03, w: 4.4, h: 0.4, fontFace: FONT_BODY, bold: true, fontSize: 13.5, color: COLOR.forestDark, valign: "bottom" });
    s.addText(st[2], { x: x0 + 0.85, y: y + 0.32, w: 4.4, h: 0.4, fontFace: FONT_BODY, fontSize: 10.5, color: COLOR.mute });
    if (i < steps.length - 1) {
      s.addShape("line", { x: x0 + 0.3, y: y + 0.6, w: 0, h: rowH - 0.6, line: { color: COLOR.moss, width: 1.5, dashType: "dash" } });
    }
  });

  imagePlaceholder(s, { x: 6.15, y: 2.5, w: 6.55, h: 4.55, label: "ไดอะแกรมแอปพลิเคชันบนมือถือขณะสร้างแผนเที่ยว", iconName: "cpu", tint: COLOR.tintGreen });
  pageTag(s, 9, TOTAL, false);
}

// ---------- SLIDE 10: Persona ----------
{
  const s = pres.addSlide();
  bgFill(s, COLOR.cream);
  kicker(s, "เข้าใจผู้ใช้");
  title(s, "ทำไมนักท่องเที่ยวเลือกที่ยอดนิยมเสมอ?", { w: 11.5, size: 25 });
  s.addText(
    "เพราะเวลาจำกัดและข้อมูลกระจัดกระจาย นักท่องเที่ยวจึงใช้ผลการค้นหา/โซเชียลเป็นทางลัด ซึ่งเน้นความนิยมมากกว่าความเหมาะสมกับฤดูกาล ทำให้ความคาดหวังไม่ตรงกับประสบการณ์จริง",
    { x: 0.6, y: 1.65, w: 6.9, h: 1.2, fontFace: FONT_BODY, fontSize: 13.5, color: COLOR.ink, lineSpacingMultiple: 1.3 }
  );

  // persona card
  const cx = 0.6, cy = 3.0, cw = 6.9, ch = 4.0;
  s.addShape("roundRect", { x: cx, y: cy, w: cw, h: ch, rectRadius: 0.12, fill: { color: COLOR.tintGreen }, line: { type: "none" } });
  imagePlaceholder(s, { x: cx + 0.3, y: cy + 0.3, w: 1.7, h: 1.7, label: "มินท์ 27 ปี", iconName: "users" });
  s.addText("มินท์ (Mint)", { x: cx + 2.2, y: cy + 0.35, w: 4.3, h: 0.4, fontFace: FONT_HEAD, bold: true, fontSize: 18, color: COLOR.forestDark });
  s.addText("27 ปี · พนักงานออฟฟิศ / สายดิจิทัล\nเที่ยวทริป 2-4 วันกับเพื่อน/แฟน", {
    x: cx + 2.2, y: cy + 0.8, w: 4.3, h: 0.8, fontFace: FONT_BODY, fontSize: 12, color: COLOR.mute, lineSpacingMultiple: 1.25,
  });

  s.addText("Pain Points", { x: cx + 0.3, y: cy + 2.15, w: 3.1, h: 0.35, fontFace: FONT_BODY, bold: true, fontSize: 12.5, color: COLOR.earth });
  s.addText(
    [
      { text: "ไม่แน่ใจว่าที่ไหนสวยจริงในเดือนที่ไป\n", options: { bullet: { code: "2022" }, breakLine: true } },
      { text: "เวลาหาข้อมูลมีจำกัด\n", options: { bullet: { code: "2022" }, breakLine: true } },
      { text: "อยากได้ประสบการณ์แท้ ไม่ใช่ที่คนแน่น", options: { bullet: { code: "2022" } } },
    ],
    { x: cx + 0.3, y: cy + 2.5, w: 3.2, h: 1.3, fontFace: FONT_BODY, fontSize: 11, color: COLOR.ink, paraSpaceAfter: 4, lineSpacingMultiple: 1.15 }
  );

  s.addText("Goal", { x: cx + 3.7, y: cy + 2.15, w: 2.9, h: 0.35, fontFace: FONT_BODY, bold: true, fontSize: 12.5, color: COLOR.forest });
  s.addText("ได้แผนเที่ยวเฉพาะบุคคล ที่ตรงกับเดือน สภาพอากาศ ความสนใจ และเวลาที่มี", {
    x: cx + 3.7, y: cy + 2.5, w: 2.9, h: 1.3, fontFace: FONT_BODY, fontSize: 11, color: COLOR.ink, lineSpacingMultiple: 1.25,
  });

  imagePlaceholder(s, { x: 7.85, y: 1.65, w: 4.9, h: 5.35, label: "นักท่องเที่ยวหญิงถ่ายรูปคาเฟ่วิวนาข้าวน่าน", iconName: "camera", tint: COLOR.tintEarth });
  pageTag(s, 10, TOTAL, false);
}

// ---------- SLIDE 11: Competitive positioning ----------
{
  const s = pres.addSlide();
  bgFill(s, COLOR.paper);
  kicker(s, "จุดต่าง");
  title(s, "ต่างจาก Search / แพลตฟอร์มท่องเที่ยวทั่วไปอย่างไร", { w: 12, size: 25 });

  const rows = [
    ["แนะนำตามความนิยม", "แนะนำตามความเหมาะสมของฤดูกาล"],
    ["ผลค้นหาแบบตายตัว", "แผนเที่ยวเฉพาะบุคคล"],
    ["ไม่อธิบายเหตุผล", "AI อธิบายว่า \"ทำไม\" ถึงเหมาะกับช่วงนี้"],
    ["ข้อมูลทั่วไป", "เรื่องเล่าท้องถิ่นและ Hidden Gems"],
    ["วางแผนเอง", "Adaptive AI ปรับแผนให้อัตโนมัติ"],
  ];
  const colW = 5.5, gx = 0.6, gy = 1.85, rh = 0.86;
  s.addText("General Search / Platform", { x: gx, y: gy, w: colW, h: 0.5, fontFace: FONT_BODY, bold: true, fontSize: 14, color: COLOR.mute });
  s.addText("Nan Beyond AI", { x: gx + colW + 0.5, y: gy, w: colW, h: 0.5, fontFace: FONT_BODY, bold: true, fontSize: 14, color: COLOR.forest });
  rows.forEach((r, i) => {
    const y = gy + 0.65 + i * rh;
    s.addShape("roundRect", { x: gx, y, w: colW, h: rh - 0.15, rectRadius: 0.08, fill: { color: COLOR.cream }, line: { color: COLOR.line, width: 0.75 } });
    s.addText(r[0], { x: gx + 0.25, y, w: colW - 0.5, h: rh - 0.15, fontFace: FONT_BODY, fontSize: 12.5, color: COLOR.mute, valign: "middle" });
    s.addShape("roundRect", { x: gx + colW + 0.5, y, w: colW, h: rh - 0.15, rectRadius: 0.08, fill: { color: COLOR.tintGreen }, line: { type: "none" } });
    s.addText(r[1], { x: gx + colW + 0.75, y, w: colW - 0.5, h: rh - 0.15, fontFace: FONT_BODY, fontSize: 12.5, bold: true, color: COLOR.forestDark, valign: "middle" });
  });
  pageTag(s, 11, TOTAL, false);
}

// ---------- SLIDE 12: Market size ----------
{
  const s = pres.addSlide();
  bgFill(s, COLOR.forestDark);
  kicker(s, "ขนาดตลาด", { color: COLOR.gold });
  title(s, "โอกาสทางตลาดของนักเดินทางคุณภาพ", { size: 27, color: COLOR.cream, w: 11.5 });

  const tiers = [
    { label: "TAM", n: "1.48 ล้านคน", d: "นักท่องเที่ยวทั้งหมดที่เข้าน่าน\n(สถานีตำรวจท่องเที่ยวน่าน 2567)", d1: 4.6 },
    { label: "SAM", n: "Creative\nTourism", d: "นักเดินทางคุณภาพ ตามนโยบาย\nอพท. น่าน", d1: 3.3 },
    { label: "SOM", n: "22-35 ปี", d: "Early Adopters: สาย Digital Nomad,\nWorkation, Backpacker", d1: 2.0 },
  ];
  const cx = 3.6, cyBase = 6.6;
  tiers.forEach((t) => {
    const d = t.d1;
    s.addShape("ellipse", { x: cx - d / 2, y: cyBase - d, w: d, h: d, fill: { color: "2C4A2C" }, line: { color: COLOR.moss, width: 1.5 } });
  });
  s.addText("TAM", { x: cx - 2.3, y: 1.55, w: 1.2, h: 0.35, fontFace: FONT_BODY, bold: true, fontSize: 13, color: COLOR.gold });
  s.addText("1.48 ล้านคน", { x: cx - 0.9, y: 2.0, w: 1.8, h: 0.5, align: "center", fontFace: FONT_HEAD, bold: true, fontSize: 17, color: COLOR.cream, margin: 0 });
  s.addText("SAM", { x: cx - 1.65, y: 2.9, w: 1.2, h: 0.35, fontFace: FONT_BODY, bold: true, fontSize: 12, color: COLOR.gold });
  s.addText("Creative\nTourism", { x: cx - 0.9, y: 3.35, w: 1.8, h: 0.7, align: "center", fontFace: FONT_HEAD, bold: true, fontSize: 14, color: COLOR.cream, margin: 0, lineSpacingMultiple: 1.05 });
  s.addText("SOM", { x: cx - 1.0, y: 4.9, w: 1.2, h: 0.3, fontFace: FONT_BODY, bold: true, fontSize: 11, color: COLOR.gold });
  s.addText("22-35 ปี\nEarly Adopters", { x: cx - 0.9, y: 5.25, w: 1.8, h: 0.9, align: "center", fontFace: FONT_HEAD, bold: true, fontSize: 12, color: COLOR.cream, margin: 0, lineSpacingMultiple: 1.05 });

  const descs = [tiers[0].d, tiers[1].d, tiers[2].d];
  const dy = [1.55, 3.15, 4.65];
  descs.forEach((d, i) => {
    s.addText(d, { x: 6.8, y: dy[i], w: 5.9, h: 1.3, fontFace: FONT_BODY, fontSize: 12.5, color: "D8E3CE", lineSpacingMultiple: 1.3 });
  });
  pageTag(s, 12, TOTAL, true);
}

// ---------- SLIDE 13: Stakeholders ----------
{
  const s = pres.addSlide();
  bgFill(s, COLOR.cream);
  kicker(s, "ผู้มีส่วนได้ส่วนเสีย");
  title(s, "คุณค่าที่ส่งถึงทุกฝ่าย", { w: 10, size: 30 });

  const cols = [
    { icon: "users", t: "นักท่องเที่ยว", d: "แผนเที่ยวที่ตรงปกและสวยงาม พร้อม Adaptive Planner ปรับแผนสำรองได้ทันทีเมื่อฝนตกหรือร้านปิด", tint: COLOR.tintGreen },
    { icon: "gift", t: "ธุรกิจ & ชุมชนท้องถิ่น", d: "กระจายรายได้สู่กลุ่มสร้างสรรค์ เช่น กลุ่มทอผ้า ผ่าน AI Storytelling ที่แนะนำ Hidden Gems", tint: COLOR.tintEarth },
    { icon: "shield", t: "หน่วยงานรัฐ", d: "ตอบวิสัยทัศน์ Smart Tourism และเป็นเครื่องมือจัดการ Big Data พฤติกรรมนักท่องเที่ยว", tint: COLOR.tintGreen },
  ];
  const cw = 3.9, gap = 0.2, x0 = 0.6, y0 = 1.85, ch = 4.9;
  cols.forEach((c, i) => {
    const x = x0 + i * (cw + gap);
    s.addShape("roundRect", { x, y: y0, w: cw, h: ch, rectRadius: 0.12, fill: { color: c.tint }, line: { type: "none" } });
    iconCircle(s, { x: x + cw / 2 - 0.4, y: y0 + 0.4, d: 0.8, iconName: c.icon, bg: COLOR.forest, iconScale: 0.5 });
    s.addText(c.t, { x: x + 0.2, y: y0 + 1.45, w: cw - 0.4, h: 0.5, align: "center", fontFace: FONT_HEAD, bold: true, fontSize: 16, color: COLOR.forestDark, margin: 0 });
    s.addText(c.d, { x: x + 0.35, y: y0 + 2.05, w: cw - 0.7, h: 2.6, align: "center", fontFace: FONT_BODY, fontSize: 12, color: COLOR.ink, lineSpacingMultiple: 1.35 });
  });
  pageTag(s, 13, TOTAL, false);
}

// ---------- SLIDE 14: Impact & KPI ----------
{
  const s = pres.addSlide();
  bgFill(s, COLOR.tintEarth);
  kicker(s, "ผลลัพธ์ที่วัดได้");
  title(s, "Impact & KPI", { w: 8, size: 32 });
  s.addText("ลดความเสี่ยงเศรษฐกิจจากฤดูกาล กระจายรายได้ตลอด 12 เดือน", {
    x: 0.6, y: 1.55, w: 11, h: 0.5, fontFace: FONT_BODY, fontSize: 14, color: COLOR.mute,
  });

  const kpis = [
    ["trending", "Adoption", "จำนวนแผนเที่ยวที่สร้างผ่าน AI"],
    ["map", "Distribution", "จำนวน Hidden Gems ที่ถูกเลือกใส่แพลนเนอร์"],
    ["calendar", "Low Season Boost", "อัตราเข้าพัก & ระยะพำนักที่เพิ่มขึ้นช่วง Low Season"],
    ["heart", "Satisfaction", "ความพึงพอใจต่อประสบการณ์ที่ตรงฤดูกาล"],
  ];
  const cw = 2.85, gap = 0.2, x0 = 0.6, y0 = 2.4, ch = 4.1;
  kpis.forEach((k, i) => {
    const x = x0 + i * (cw + gap);
    s.addShape("roundRect", { x, y: y0, w: cw, h: ch, rectRadius: 0.12, fill: { color: COLOR.cream }, line: { type: "none" }, shadow: { type: "outer", color: "888878", opacity: 0.2, blur: 5, offset: 2, angle: 90 } });
    iconCircle(s, { x: x + cw / 2 - 0.35, y: y0 + 0.35, d: 0.7, iconName: k[0], bg: COLOR.forest, iconScale: 0.5 });
    s.addText(k[1], { x: x + 0.15, y: y0 + 1.2, w: cw - 0.3, h: 0.45, align: "center", fontFace: FONT_HEAD, bold: true, fontSize: 14, color: COLOR.forestDark, margin: 0 });
    s.addText(k[2], { x: x + 0.2, y: y0 + 1.7, w: cw - 0.4, h: 2.2, align: "center", fontFace: FONT_BODY, fontSize: 11, color: COLOR.mute, lineSpacingMultiple: 1.3 });
  });
  pageTag(s, 14, TOTAL, false);
}

// ---------- SLIDE 15: Roadmap + Risks + CTA ----------
{
  const s = pres.addSlide();
  bgFill(s, COLOR.forestDark);
  kicker(s, "เส้นทางข้างหน้า", { color: COLOR.gold });
  title(s, "จาก Hackathon Prototype สู่ธุรกิจจริง", { size: 27, color: COLOR.cream, w: 11.8 });

  const road = [
    ["checkcircle", "วันนี้", "Prototype พิสูจน์ความเป็นไปได้ และคุณภาพคำแนะนำของ AI"],
    ["gift", "ระยะถัดไป", "เปิดลงทะเบียนธุรกิจท้องถิ่น แพ็กเกจโปรโมตร้าน/โฮมสเตย์ช่วง Low Season"],
    ["dollar", "อนาคต", "ระบบจอง & Affiliate โดยจัดอันดับตามความเหมาะสม ไม่ใช่การจ่ายเงินโปรโมต"],
  ];
  road.forEach((r, i) => {
    const x = 0.6 + i * 4.05;
    iconCircle(s, { x, y: 1.9, d: 0.6, iconName: r[0], bg: COLOR.gold, iconScale: 0.55 });
    s.addText(r[1], { x, y: 2.65, w: 3.7, h: 0.4, fontFace: FONT_BODY, bold: true, fontSize: 14, color: COLOR.cream });
    s.addText(r[2], { x, y: 3.05, w: 3.7, h: 1.3, fontFace: FONT_BODY, fontSize: 11.5, color: "C9D6BE", lineSpacingMultiple: 1.3 });
  });

  s.addShape("line", { x: 0.6, y: 4.7, w: 12.1, h: 0, line: { color: "3E5C3A", width: 1 } });
  iconCircle(s, { x: 0.6, y: 4.95, d: 0.5, iconName: "alert", bg: COLOR.earth, iconScale: 0.5 });
  s.addText("ข้อควรระวัง: คุณภาพคำแนะนำขึ้นกับความครบถ้วนของข้อมูล และต้องอัปเดตข้อมูลธุรกิจท้องถิ่นต่อเนื่อง", {
    x: 1.3, y: 4.95, w: 11.2, h: 0.55, fontFace: FONT_BODY, italic: true, fontSize: 12, color: "C9D6BE", valign: "middle",
  });

  s.addText("มาเปิดน่านให้โลกเห็นทุกฤดูกาลไปด้วยกัน", {
    x: 0.6, y: 5.85, w: 10.5, h: 0.7, fontFace: FONT_HEAD, bold: true, fontSize: 22, color: COLOR.gold, margin: 0,
  });
  s.addText("Nan Beyond AI — Beyond the Popular Season", {
    x: 0.6, y: 6.5, w: 8, h: 0.5, fontFace: FONT_BODY, italic: true, fontSize: 13, color: "AFC2A0",
  });
  pageTag(s, 15, TOTAL, true);
}

pres.writeFile({ fileName: "output.pptx" }).then(() => console.log("written"));