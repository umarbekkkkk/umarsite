/* ============================================================
   UmarDev — RPG Character Sheet
   Multilingual · Interactive · Easter egg included
   ============================================================ */

/* ============================================================
   1. TRANSLATIONS
   ============================================================ */
const I18N = {
  ru: {
    charName: "Умарбек",
    classTitle: "Мультипотенциал · Воин Духа",
    motto: "«Дисциплина выше мотивации»",

    tabStats: "Характеристики",
    tabSkills: "Навыки",
    tabInventory: "Инвентарь",
    tabQuests: "Квесты",
    tabContact: "Связь",

    statStrength: "Сила",
    statIntelligence: "Интеллект",
    statWisdom: "Мудрость",
    statCharisma: "Обаяние",
    statDexterity: "Ловкость",
    statDiscipline: "Дисциплина",

    skills: [
      { icon: "🥊", title: "Боевые искусства", desc: "Бокс, ММА — дисциплина в ринге и за его пределами." },
      { icon: "📚", title: "Литература", desc: "Чтение и написание романов. Слово — тоже оружие." },
      { icon: "🏋️", title: "Сила и форма", desc: "Качалка, работа над телом и духом каждый день." },
      { icon: "🧠", title: "Психология", desc: "Понимание человеческого разума и поведения." },
      { icon: "🥗", title: "Нутрициология", desc: "Диетология и питание как фундамент здоровья." },
      { icon: "🧬", title: "Анатомия", desc: "Знание тела — путь к его максимальной форме." },
      { icon: "🗣️", title: "Языки", desc: "Изучение иностранных языков — окно в мир." },
      { icon: "✨", title: "Луксмаксинг", desc: "Работа над внешностью и уверенностью в себе." },
      { icon: "📱", title: "Блогинг", desc: "Создание контента и личный бренд в сети." }
    ],

    inventory: [
      { icon: "📖", title: "Книга", desc: "Всегда в рюкзаке" },
      { icon: "🥊", title: "Боксёрские перчатки", desc: "Главное оружие" },
      { icon: "🏋️", title: "Гантели", desc: "Стальные друзья" },
      { icon: "📓", title: "Дневник", desc: "Идеи для романов" },
      { icon: "🎧", title: "Наушники", desc: "Музыка для фокуса" },
      { icon: "💊", title: "Витамины", desc: "Забота о здоровье" },
      { icon: "🧴", title: "Уход за кожей", desc: "Looksmaxing-набор" },
      { icon: "💻", title: "Ноутбук", desc: "Для блога и учёбы" }
    ],

    quests: [
      { status: "active", name: "Написать роман", tag: "В процессе" },
      { status: "active", name: "Освоить новый язык", tag: "В процессе" },
      { status: "active", name: "Достичь пика формы", tag: "В процессе" },
      { status: "active", name: "Изучить глубины психологии", tag: "В процессе" },
      { status: "active", name: "Вырасти в блогинге", tag: "В процессе" },
      { status: "active", name: "Познать себя через дисциплину", tag: "Вечный квест" }
    ],

    contactIntro: "Выбери канал связи — и добро пожаловать в мой мир.",
    contactInstagram: "Instagram",
    contactTikTok: "TikTok",

    secretLabel: "Секретная комната",
    secretTitle: "SECRET ROOM",
    secretPrompt: "Это скрытая комната. Чтобы войти, введи мою дату рождения.",
    secretPlaceholder: "ДД.ММ.ГГГГ",
    secretSubmit: "Войти",
    secretHint: "Подсказка: меня зовут Умарбек. Может, ты знаешь...",
    secretWrong: "Неверно. Это не твоя комната. Попробуй ещё.",
    secretCorrect: "И че, мне теперь тебя похвалить? Это было очевидно, что знаешь 😏",
    secretEmpty: "Введи что-нибудь, не стесняйся."
  },

  uz: {
    charName: "Umarbek",
    classTitle: "Multipotensial · Ruh Jangchisi",
    motto: "«Intizom motivatsiyadan ustun»",

    tabStats: "Xususiyatlar",
    tabSkills: "Ko'nikmalar",
    tabInventory: "Inventar",
    tabQuests: "Kvestlar",
    tabContact: "Aloqa",

    statStrength: "Kuch",
    statIntelligence: "Aql",
    statWisdom: "Donolik",
    statCharisma: "Joziba",
    statDexterity: "Epchillik",
    statDiscipline: "Intizom",

    skills: [
      { icon: "🥊", title: "Jang san'atlari", desc: "Boks, MMA — ringda va undan tashqarida intizom." },
      { icon: "📚", title: "Adabiyot", desc: "O'qish va roman yozish. So'z ham quroldir." },
      { icon: "🏋️", title: "Kuch va forma", desc: "Sport zali, har kuni tana va ruh ustida ishlash." },
      { icon: "🧠", title: "Psixologiya", desc: "Inson ongi va xulq-atvorini tushunish." },
      { icon: "🥗", title: "Nutritsiologiya", desc: "Diyetologiya va sog'liq uchun to'g'ri ovqatlanish." },
      { icon: "🧬", title: "Anatomiya", desc: "Tanani bilish — eng yaxshi formaga yo'l." },
      { icon: "🗣️", title: "Tillar", desc: "Chet tillarini o'rganish — dunyoga deraza." },
      { icon: "✨", title: "Looksmaxing", desc: "Tashqi ko'rinish va o'ziga ishonch ustida ishlash." },
      { icon: "📱", title: "Bloging", desc: "Kontent yaratish va shaxsiy brend." }
    ],

    inventory: [
      { icon: "📖", title: "Kitob", desc: "Doim ryukzakda" },
      { icon: "🥊", title: "Boks qo'lqoplari", desc: "Asosiy qurol" },
      { icon: "🏋️", title: "Gantellar", desc: "Po'lat do'stlar" },
      { icon: "📓", title: "Kundalik", desc: "Roman g'oyalari" },
      { icon: "🎧", title: "Quloqchin", desc: "Fokus uchun musiqa" },
      { icon: "💊", title: "Vitaminlar", desc: "Sog'liq uchun g'amxo'rlik" },
      { icon: "🧴", title: "Teri parvarishi", desc: "Looksmaxing to'plami" },
      { icon: "💻", title: "Noutbuk", desc: "Blog va ta'lim uchun" }
    ],

    quests: [
      { status: "active", name: "Roman yozish", tag: "Jarayonda" },
      { status: "active", name: "Yangi til o'rganish", tag: "Jarayonda" },
      { status: "active", name: "Forma cho'qqisiga chiqish", tag: "Jarayonda" },
      { status: "active", name: "Psixologiya chuqurligini o'rganish", tag: "Jarayonda" },
      { status: "active", name: "Blogingda o'sish", tag: "Jarayonda" },
      { status: "active", name: "Intizom orqali o'zini anglash", tag: "Abadiy kvest" }
    ],

    contactIntro: "Aloqa kanalini tanla — mening dunyomga xush kelibsiz.",
    contactInstagram: "Instagram",
    contactTikTok: "TikTok",

    secretLabel: "Maxfiy xona",
    secretTitle: "SECRET ROOM",
    secretPrompt: "Bu yashirin xona. Kirish uchun mening tug'ilgan sanamni kiriting.",
    secretPlaceholder: "KK.OO.YYYY",
    secretSubmit: "Kirish",
    secretHint: "Maslahat: mening ismim Umarbek. Balki bilasan...",
    secretWrong: "Noto'g'ri. Bu sening xonang emas. Yana urinib ko'r.",
    secretCorrect: "Nima, endi seni maqtashim kerakmi? Bu bilishing aniq edi 😏",
    secretEmpty: "Nimadir kiriting, uyalma."
  },

  en: {
    charName: "Umarbek",
    classTitle: "Multipotentialite · Spirit Warrior",
    motto: "\"Discipline over motivation\"",

    tabStats: "Stats",
    tabSkills: "Skills",
    tabInventory: "Inventory",
    tabQuests: "Quests",
    tabContact: "Contact",

    statStrength: "Strength",
    statIntelligence: "Intelligence",
    statWisdom: "Wisdom",
    statCharisma: "Charisma",
    statDexterity: "Dexterity",
    statDiscipline: "Discipline",

    skills: [
      { icon: "🥊", title: "Martial Arts", desc: "Boxing, MMA — discipline inside and outside the ring." },
      { icon: "📚", title: "Literature", desc: "Reading and writing novels. The word is also a weapon." },
      { icon: "🏋️", title: "Strength & Physique", desc: "Gym, working on body and spirit every day." },
      { icon: "🧠", title: "Psychology", desc: "Understanding the human mind and behavior." },
      { icon: "🥗", title: "Nutrition", desc: "Dietology and nutrition as the foundation of health." },
      { icon: "🧬", title: "Anatomy", desc: "Knowing the body — the path to its peak form." },
      { icon: "🗣️", title: "Languages", desc: "Learning foreign languages — a window to the world." },
      { icon: "✨", title: "Looksmaxing", desc: "Working on appearance and self-confidence." },
      { icon: "📱", title: "Blogging", desc: "Content creation and personal brand." }
    ],

    inventory: [
      { icon: "📖", title: "Book", desc: "Always in the backpack" },
      { icon: "🥊", title: "Boxing gloves", desc: "Main weapon" },
      { icon: "🏋️", title: "Dumbbells", desc: "Steel friends" },
      { icon: "📓", title: "Journal", desc: "Novel ideas" },
      { icon: "🎧", title: "Headphones", desc: "Music for focus" },
      { icon: "💊", title: "Vitamins", desc: "Health care" },
      { icon: "🧴", title: "Skincare", desc: "Looksmaxing kit" },
      { icon: "💻", title: "Laptop", desc: "For blog and study" }
    ],

    quests: [
      { status: "active", name: "Write a novel", tag: "In progress" },
      { status: "active", name: "Master a new language", tag: "In progress" },
      { status: "active", name: "Reach peak physique", tag: "In progress" },
      { status: "active", name: "Study psychology deeply", tag: "In progress" },
      { status: "active", name: "Grow in blogging", tag: "In progress" },
      { status: "active", name: "Understand myself through discipline", tag: "Eternal quest" }
    ],

    contactIntro: "Pick a channel — and welcome to my world.",
    contactInstagram: "Instagram",
    contactTikTok: "TikTok",

    secretLabel: "Secret Room",
    secretTitle: "SECRET ROOM",
    secretPrompt: "This is a hidden room. To enter, type my date of birth.",
    secretPlaceholder: "DD.MM.YYYY",
    secretSubmit: "Enter",
    secretHint: "Hint: my name is Umarbek. Maybe you know...",
    secretWrong: "Wrong. This is not your room. Try again.",
    secretCorrect: "And what, should I praise you now? It was obvious you knew 😏",
    secretEmpty: "Type something, don't be shy."
  }
};

/* ============================================================
   2. DATA
   ============================================================ */
const STATS = [
  { key: "statStrength",     icon: "💪", value: 92 },
  { key: "statIntelligence", icon: "🧠", value: 95 },
  { key: "statWisdom",       icon: "🦉", value: 88 },
  { key: "statCharisma",     icon: "✨", value: 90 },
  { key: "statDexterity",    icon: "⚡", value: 87 },
  { key: "statDiscipline",   icon: "🔱", value: 99 }
];

const SOCIALS = {
  instagram: { icon: "📸", label: "contactInstagram", handle: "@aqlanu · @adillov.u", url: "https://instagram.com/aqlanu" },
  tiktok:    { icon: "🎵", label: "contactTikTok",    handle: "@aqlanu · @adillov.u", url: "https://tiktok.com/@aqlanu" }
};

const CORRECT_DATE_DIGITS = "08092009";

/* ============================================================
   3. STATE
   ============================================================ */
let currentLang = localStorage.getItem("umarbek-lang") || "ru";
let currentTab  = "stats";

/* ============================================================
   4. DOM SHORTCUTS
   ============================================================ */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const el = {
  charName:    $("#charName"),
  classTitle:  $("#classTitle"),
  motto:       $("#motto"),
  tabs:        $("#tabs"),
  panels: {
    stats:     $("#panel-stats"),
    skills:    $("#panel-skills"),
    inventory: $("#panel-inventory"),
    quests:    $("#panel-quests"),
    contact:   $("#panel-contact")
  },
  tabBtns: {
    stats:     $("#tabStats"),
    skills:    $("#tabSkills"),
    inventory: $("#tabInventory"),
    quests:    $("#tabQuests"),
    contact:   $("#tabContact")
  },
  secretTrigger: $("#secretTrigger"),
  secretLabel:   $("#secretLabel"),
  secretModal:   $("#secretModal"),
  closeModal:    $("#closeModal"),
  secretTitle:   $("#secretTitle"),
  secretPrompt:  $("#secretPrompt"),
  birthDate:     $("#birthDate"),
  submitDate:    $("#submitDate"),
  secretHint:    $("#secretHint"),
  secretResult:  $("#secretResult"),
  langBtns:      $$(".lang-btn"),
  avatar:        $("#avatar")
};

/* ============================================================
   5. RENDER FUNCTIONS
   ============================================================ */
function t(key) {
  return I18N[currentLang][key];
}

function renderHeader() {
  el.charName.textContent    = t("charName");
  el.classTitle.textContent  = t("classTitle");
  el.motto.textContent       = t("motto");
}

function renderTabs() {
  el.tabBtns.stats.textContent     = t("tabStats");
  el.tabBtns.skills.textContent    = t("tabSkills");
  el.tabBtns.inventory.textContent = t("tabInventory");
  el.tabBtns.quests.textContent    = t("tabQuests");
  el.tabBtns.contact.textContent   = t("tabContact");
}

function renderStats() {
  el.panels.stats.innerHTML = STATS.map(s => `
    <div class="stat-row">
      <div class="stat-header">
        <span class="stat-name"><span class="stat-icon">${s.icon}</span>${t(s.key)}</span>
        <span class="stat-value">${s.value}</span>
      </div>
      <div class="stat-bar">
        <div class="stat-fill" data-value="${s.value}"></div>
      </div>
    </div>
  `).join("");

  // animate bars after DOM insert
  requestAnimationFrame(() => {
    setTimeout(() => {
      $$(".stat-fill").forEach(bar => {
        bar.style.width = bar.dataset.value + "%";
      });
    }, 100);
  });
}

function renderSkills() {
  el.panels.skills.innerHTML = `
    <div class="grid-3">
      ${t("skills").map(s => `
        <div class="card">
          <span class="card-icon">${s.icon}</span>
          <div class="card-title">${s.title}</div>
          <div class="card-desc">${s.desc}</div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderInventory() {
  el.panels.inventory.innerHTML = `
    <div class="grid-3">
      ${t("inventory").map(item => `
        <div class="card">
          <span class="card-icon">${item.icon}</span>
          <div class="card-title">${item.title}</div>
          <div class="card-desc">${item.desc}</div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderQuests() {
  el.panels.quests.innerHTML = t("quests").map(q => `
    <div class="quest">
      <span class="quest-status ${q.status}">${q.status === "done" ? "✓" : "◈"}</span>
      <div class="quest-info">
        <div class="quest-name">${q.name}</div>
        <div class="quest-tag">${q.tag}</div>
      </div>
    </div>
  `).join("");
}

function renderContact() {
  el.panels.contact.innerHTML = `
    <p class="contact-intro">${t("contactIntro")}</p>
    <div class="contact-grid">
      ${Object.values(SOCIALS).map(s => `
        <a class="contact-card" href="${s.url}" target="_blank" rel="noopener">
          <span class="contact-icon">${s.icon}</span>
          <div class="contact-label">${t(s.label)}</div>
          <div class="contact-handle">${s.handle}</div>
        </a>
      `).join("")}
    </div>
  `;
}

function renderSecretRoom() {
  el.secretLabel.textContent   = t("secretLabel");
  el.secretTitle.textContent   = t("secretTitle");
  el.secretTitle.dataset.text  = t("secretTitle");
  el.secretPrompt.textContent  = t("secretPrompt");
  el.birthDate.placeholder     = t("secretPlaceholder");
  el.submitDate.textContent    = t("secretSubmit");
  el.secretHint.textContent    = t("secretHint");
}

function renderAll() {
  renderHeader();
  renderTabs();
  renderStats();
  renderSkills();
  renderInventory();
  renderQuests();
  renderContact();
  renderSecretRoom();
}

/* ============================================================
   6. TAB LOGIC
   ============================================================ */
function switchTab(tabName) {
  currentTab = tabName;

  $$(".tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });
  $$(".panel").forEach(p => {
    p.classList.toggle("active", p.id === "panel-" + tabName);
  });

  // Re-trigger stat bar animation
  if (tabName === "stats") {
    $$(".stat-fill").forEach(bar => bar.style.width = "0%");
    setTimeout(() => {
      $$(".stat-fill").forEach(bar => bar.style.width = bar.dataset.value + "%");
    }, 50);
  }
}

/* ============================================================
   7. LANGUAGE LOGIC
   ============================================================ */
function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem("umarbek-lang", lang);

  el.langBtns.forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
  document.documentElement.lang = lang;

  renderAll();
  // restore active tab after re-render
  switchTab(currentTab);

  // reset secret result if open
  el.secretResult.textContent = "";
  el.secretResult.className = "secret-result";
}

/* ============================================================
   8. SECRET ROOM LOGIC
   ============================================================ */
function openSecret() {
  el.secretModal.classList.add("open");
  el.secretModal.setAttribute("aria-hidden", "false");
  el.birthDate.value = "";
  el.secretResult.textContent = "";
  el.secretResult.className = "secret-result";
  setTimeout(() => el.birthDate.focus(), 350);
}

function closeSecret() {
  el.secretModal.classList.remove("open");
  el.secretModal.setAttribute("aria-hidden", "true");
}

function normalizeDate(input) {
  // Extract digits only
  const digits = input.replace(/\D/g, "");
  if (!digits) return false;

  // Direct 8-digit match
  if (digits === CORRECT_DATE_DIGITS) return true;

  // Parse components
  const parts = input.match(/\d+/g);
  if (!parts || parts.length !== 3) return false;

  const [a, b, c] = parts.map(Number);

  // DD.MM.YYYY form
  if (a === 8 && b === 9 && c === 2009) return true;

  // YYYY.MM.DD form
  if (a === 2009 && b === 9 && c === 8) return true;

  return false;
}

function submitSecret() {
  const value = el.birthDate.value.trim();
  el.secretResult.className = "secret-result";

  if (!value) {
    el.secretResult.textContent = t("secretEmpty");
    el.secretResult.classList.add("error");
    return;
  }

  if (normalizeDate(value)) {
    el.secretResult.textContent = t("secretCorrect");
    el.secretResult.classList.add("success");

    // Bonus: unlock an achievement toast after delay
    setTimeout(() => {
      createAchievementToast();
    }, 800);
  } else {
    el.secretResult.textContent = t("secretWrong");
    el.secretResult.classList.add("error");

    // Shake input
    el.birthDate.style.animation = "none";
    void el.birthDate.offsetWidth;
    el.birthDate.style.animation = "shake 0.5s";
  }
}

function createAchievementToast() {
  if (document.querySelector(".achievement-toast")) return;

  const toast = document.createElement("div");
  toast.className = "achievement-toast";
  toast.textContent = "🏆 " + (currentLang === "ru" ? "Достижение: Знаток Умарбека" :
                                currentLang === "uz" ? "Yutuq: Umarbek bilimdoni" :
                                                       "Achievement: Umarbek Knower");
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 50);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 500);
  }, 4000);
}

/* ============================================================
   9. PARTICLE BACKGROUND
   ============================================================ */
function initParticles() {
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const COLORS = ["#a855f7", "#3b82f6", "#22d3ee", "#c084fc"];

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.size = Math.random() * 2 + 0.5;
      this.speedY = -(Math.random() * 0.4 + 0.1);
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.alpha = Math.random() * 0.5 + 0.2;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.twinkle = Math.random() * Math.PI * 2;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.twinkle += 0.03;
      if (this.y < -10 || this.x < -10 || this.x > W + 10) this.reset();
    }
    draw() {
      const a = this.alpha * (0.6 + 0.4 * Math.sin(this.twinkle));
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = a;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
    }
  }

  const count = Math.min(Math.floor((W * H) / 18000), 90);
  for (let i = 0; i < count; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, W, H);
    ctx.globalAlpha = 1;
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
}

/* ============================================================
   10. EVENTS
   ============================================================ */
function bindEvents() {
  // Tabs
  $$(".tab").forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  // Language
  el.langBtns.forEach(btn => {
    btn.addEventListener("click", () => switchLang(btn.dataset.lang));
  });

  // Secret room
  el.secretTrigger.addEventListener("click", openSecret);
  el.closeModal.addEventListener("click", closeSecret);
  el.submitDate.addEventListener("click", submitSecret);

  el.birthDate.addEventListener("keydown", (e) => {
    if (e.key === "Enter") submitSecret();
  });

  el.secretModal.addEventListener("click", (e) => {
    if (e.target === el.secretModal) closeSecret();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSecret();
  });

  // Avatar click easter egg
  el.avatar.addEventListener("click", () => {
    el.avatar.style.transform = "scale(1.15) rotate(360deg)";
    setTimeout(() => el.avatar.style.transform = "", 600);
  });
}

/* ============================================================
   11. TOAST CSS (injected)
   ============================================================ */
function injectToastCSS() {
  const style = document.createElement("style");
  style.textContent = `
    .achievement-toast {
      position: fixed;
      bottom: 90px;
      left: 50%;
      transform: translateX(-50%) translateY(30px);
      padding: 14px 28px;
      background: linear-gradient(135deg, rgba(168, 85, 247, 0.95), rgba(59, 130, 246, 0.95));
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 30px;
      color: white;
      font-family: 'Orbitron', sans-serif;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 1px;
      box-shadow: 0 10px 40px rgba(168, 85, 247, 0.7);
      z-index: 2000;
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      pointer-events: none;
      white-space: nowrap;
    }
    .achievement-toast.show {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    @media (max-width: 480px) {
      .achievement-toast {
        font-size: 11px;
        padding: 12px 20px;
        max-width: calc(100vw - 40px);
        white-space: normal;
        text-align: center;
      }
    }
  `;
  document.head.appendChild(style);
}

/* ============================================================
   12. BOOT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  injectToastCSS();
  renderAll();
  switchLang(currentLang);
  bindEvents();
  initParticles();

  // console easter egg for curious devs
  console.log(
    "%c🚀 Umarbek's RPG Character Sheet",
    "font-size:16px; font-weight:bold; color:#a855f7; text-shadow:0 0 10px #a855f7;"
  );
  console.log(
    "%cИщешь секреты? Попробуй дату рождения... 😉",
    "color:#22d3ee; font-size:12px;"
  );
});