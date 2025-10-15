// src/lib/data.ts

// Tarif rejalari uchun professional "qoidalar to'plami" (TypeScript Type) yaratildi va to'g'rilandi.
export type PlanProps = {
  name: string;
  price: string;
  pricePeriod?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  recommended?: boolean; // backward-compat
};

// 💡 Asosiy yo'nalishlar (3 ta blok)
export const directions = [
  {
    icon: "🧠",
    title: "AI Mock Exam",
    description: "Nemis tilidan onlayn sinov — real imtihon formatida adaptiv savollar va AI tahlili.",
  },
  {
    icon: "🎯",
    title: "AI Kurslar",
    description: "A1 dan B2 gacha sun’iy intellekt murabbiyi bilan interaktiv darslar va mashqlar.",
  },
  {
    icon: "💬",
    title: "Konsalting",
    description: "Vizalar, o‘qish va Germaniyada ish imkoniyatlari bo‘yicha shaxsiy maslahatlar.",
  },
];

// 📘 Kurs darajalari (A1–B2)
export const courseLevels = [
  {
    level: "A1",
    focus: "Boshlang‘ich muloqot va kundalik vaziyatlar",
    intensity: "6 hafta / 3 soat"
  },
  {
    level: "A2",
    focus: "Amaliy til ko‘nikmalari va so‘z boyligini kengaytirish",
    intensity: "8 hafta / 4 soat"
  },
  {
    level: "B1",
    focus: "TestDaF va Goethe imtihoniga tayyorgarlik",
    intensity: "10 hafta / 5 soat"
  },
  {
    level: "B2",
    focus: "Akademik yozuv va professional muloqot",
    intensity: "12 hafta / 5 soat"
  }
];

// 🗺 Yo‘l xaritasi (Roadmap)
export const roadmapSteps = [
  {
    title: "Diagnostika",
    text: "AI quick-test orqali darajangizni aniqlang va kuchli/zaif tomonlaringizni biling."
  },
  {
    title: "Maqsad",
    text: "O‘rganish maqsadingizni tanlang: o‘qish, ish yoki immigratsiya."
  },
  {
    title: "Reja",
    text: "AI siz uchun shaxsiy yo‘l xaritasi, jadval va resurslarni yaratadi."
  },
  {
    title: "Amal",
    text: "Interaktiv darslar, speaking mashg‘ulotlari va avtomatik baholash tizimi bilan o‘rganing."
  },
  {
    title: "Sertifikat",
    text: "QR kod orqali tasdiqlanadigan natijali sertifikat oling."
  }
];

// 💳 Obuna tariflari (Ma'lumotlar strukturasi professional holatga keltirildi)
export const pricingPlans: PlanProps[] = [
  {
    name: "Starter",
    price: "199 000 so‘m",
    pricePeriod: "/ oy",
    description: "AI quick-test va haftalik progress report",
    features: [
      "Cheklanmagan AI testlar",
      "O‘zlashtirish bo‘yicha avtomatik hisobot",
      "Telegram ogohlantirishlari"
    ]
  },
  {
    name: "Standard",
    price: "399 000 so‘m",
    pricePeriod: "/ oy",
    description: "To‘liq kurslar va AI murabbiy bilan darslar",
    features: [
      "A1–B2 video + AI mashqlar",
      "Speaking analiz va transkript",
      "Oylik progress konsultatsiyasi"
    ],
    highlighted: true
  },
  {
    name: "Premium",
    price: "699 000 so‘m",
    pricePeriod: "/ oy",
    description: "Konsalting, vizaga tayyorgarlik va sertifikat",
    features: [
      "1:1 mentorlik seanslari",
      "Nemis universitetlari uchun paket",
      "Rasmiy hamkor sertifikati"
    ]
  }
];

// ❓ Ko‘p so‘raladigan savollar (FAQ)
export const faqs = [
  {
    question: "GermanAI nima va qanday ishlaydi?",
    answer:
      "GermanAI – AI asosidagi ta’lim platformasi. U sizning darajangizni aniqlab, shaxsiylashtirilgan kurslar, testlar va mashqlar taklif etadi."
  },
  {
    question: "Platformadan foydalanish uchun qanday qurilma kerak?",
    answer: "Zamonaviy brauzerli har qanday telefon, planshet yoki kompyuter yetarli."
  },
  {
    question: "AI test natijalarimni qayerda ko‘raman?",
    answer: "Natijalar shaxsiy kabinetingizda saqlanadi va PDF holida yuklab olish mumkin."
  },
  {
    question: "Kurslarga qanday yozilaman?",
    answer: "app.germanai.uz orqali profil yarating, reja tanlang va to‘lovni amalga oshiring."
  },
  {
    question: "To‘lov usullari qanday?",
    answer: "Uzcard, Humo, Visa, MasterCard hamda Click/Payme orqali to‘lash mumkin."
  },
  {
    question: "Speaking mashg‘ulotlari qanday o‘tkaziladi?",
    answer: "AI speaking buddy bilan 24/7 mashq, mentor bilan haftalik jonli sessiya."
  },
  {
    question: "Sertifikatni qayerda tan olishadi?",
    answer: "Hamkor universitetlar va til markazlari QR tasdiqli sertifikatni tan oladi."
  },
  {
    question: "O‘qituvchilar qayerdan?",
    answer: "Nemis va o‘zbek mutaxassislari – Goethe sertifikatiga ega trenerlar bilan ishlaymiz."
  },
  {
    question: "Platformadan oflayn foydalanish mumkinmi?",
    answer: "Mobil ilova orqalik darslarni yuklab olib oflayn ko‘rish funksiyasi yo‘lga qo‘yilmoqda."
  },
  {
    question: "Qo‘llab-quvvatlashga qanday murojaat qilaman?",
    answer: "support@germanai.uz yoki @germanai_support Telegram orqali."
  }
];
