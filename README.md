# เตร็ดเตร่ trade-TRE

เว็บวางแผนท่องเที่ยวน่านแบบอิงฤดูกาล ใช้ข้อมูลอากาศจริงจาก Open-Meteo, รองรับการสร้างแผนเที่ยวด้วย Gemini 2.5 Flash, แยกหน้าเป็นระบบ และมีการเปลี่ยนหน้าที่นุ่มขึ้น

## โครงสร้างโปรเจกต์

```text
.
├── public/
│   ├── index.html              # หน้า Season - Nan
│   ├── pages/
│   │   ├── your-plan.html      # หน้า Map / Your Plan
│   │   ├── journey.html        # หน้าแผนเที่ยว 3 วัน
│   │   └── stories.html        # หน้า Twelve Months stories
│   └── assets/
│       └── js/
│           └── app.js          # transition, active nav, generate flow
├── server/
│   └── server.mjs              # static server + API routes
├── .env.example
├── package.json
└── README.md
```

## ความสามารถหลัก

- Flow แบบหลายหน้า: Season → Your Plan → Journey → Stories
- Bottom navigation ขยับ active state ตามหน้าปัจจุบัน
- เปลี่ยนหน้าด้วย fade/slide transition
- ดึงสภาพอากาศจริงของตัวเมืองน่านจาก Open-Meteo ด้วยพิกัด `18.7756, 100.7730`
- รองรับการ generate แผนเที่ยวผ่าน Gemini 2.5 Flash ที่ endpoint `/api/generate-trip`
- ถ้าไม่ได้ตั้งค่า `GEMINI_API_KEY` ระบบจะใช้ fallback itinerary เพื่อให้ demo ยังใช้งานได้

## วิธีรันในเครื่อง

```powershell
npm run dev
```

จากนั้นเปิด:

```text
http://localhost:5173
```

## เปิดใช้ Gemini Generation

สร้างไฟล์ `.env` โดยดูตัวอย่างจาก `.env.example`:

```text
GEMINI_API_KEY=your_gemini_api_key_here
PORT=5173
```

แล้ว restart server:

```powershell
npm run dev
```

เมื่อกด `Generate My Experience` ในหน้า Your Plan ระบบจะส่งข้อมูลฟอร์มไปที่ `/api/generate-trip` จากนั้น server จะดึงข้อมูลอากาศจริงจาก Open-Meteo มาประกอบ prompt และให้ Gemini ตอบกลับเป็น JSON สำหรับแสดงในหน้า Journey

## API Routes

- `GET /api/weather` ดึงสภาพอากาศปัจจุบันของตัวเมืองน่านจาก Open-Meteo
- `POST /api/generate-trip` สร้างแผนเที่ยว 3 วันจากข้อมูลในฟอร์ม

ตัวอย่างการทดสอบ API:

```powershell
Invoke-RestMethod -Uri http://localhost:5173/api/generate-trip `
  -Method Post `
  -ContentType "application/json" `
  -Body '{"month":"Aug","pace":"slow","group":"couple","vibes":["Photography","Peace"]}'
```

## หมายเหตุ

- ห้ามใส่ `GEMINI_API_KEY` ไว้ใน JavaScript ฝั่ง browser เพราะ key จะหลุดได้ง่าย
- ข้อมูลอากาศมาจาก Open-Meteo แบบ real-time
- ถ้า Gemini หรือ network ใช้งานไม่ได้ ระบบยังแสดง fallback itinerary เพื่อให้ flow ของเว็บยังใช้งานได้
