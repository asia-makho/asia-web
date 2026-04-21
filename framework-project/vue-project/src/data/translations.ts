export interface TranslationSchema {
  navHome: string;
  navContacts: string;
  navWeather: string;
  navTodo: string;
  label: string;
  name: string;
  sub: string;
  aboutTitle: string;
  aboutText1: string;
  aboutText2: string;
  aboutText3: string;
  skillsTitle: string;
  techStackTitle: string;
  techStackList: string[];
  softSkillsTitle: string;
  softSkillsList: string[];
  eduTitle: string;
  uniName: string;
  uniSpecialty: string;
  uniPeriod: string;
  projectsTitle: string;
  projTech: string;
  proj1Title: string;
  proj1Desc: string;
  proj2Title: string;
  proj2Desc: string;
  expTitle: string;
  expRole: string;
  expPeriod: string;
  expDesc1: string;
  expDesc2: string;
  contactTitle: string;
  rights: string;
  toTop: string;
  allContacts: string;
  searchPlace: string;
  searchBtn: string;
  weatherDesc: string;
  feelsLike: string;
  humidity: string;
  wind: string;
  // 🌟 ОСЬ ЦІ КЛЮЧІ, ЯКИХ НЕ ВИСТАЧАЛО:
  todoNewTask: string;
  todoMyList: string;
  todoPlaceholder: string;
  todoAdd: string;
  todoAll: string;
  todoActive: string;
  todoCompleted: string;
  todoEmpty: string;
}

export const translations: Record<'uk' | 'en', TranslationSchema> = {
  uk: {
    navHome: "Головна",
    navContacts: "Контакти",
    navWeather: "Погода та час",
    navTodo: "Todo List",
    label: "Портфоліо студентки",
    name: "Анастасія",
    sub: "2 курс ФБМІ КПІ | Комп'ютерні науки",
    aboutTitle: "Про мене",
    aboutText1: "Привіт! Мене звати Анастасія. Я — студентка 2 курсу ФБМІ КПІ.",
    aboutText2: "Захоплююся програмуванням, особливо веб-розробкою.",
    aboutText3: "У вільний час дивлюся детективні фільми та серіали. Також люблю подорожувати по Україні, найбільше сподобалось у Ворохті.",
    skillsTitle: "Навички",
    techStackTitle: "Стек технологій",
    techStackList: ["HTML5", "CSS3", "JavaScript", "Python", "Git/GitHub"],
    softSkillsTitle: "Soft skills",
    softSkillsList: ["Креативність", "Вміння працювати в команді", "Пунктуальність", "Готовність до навчання", "Відповідальність", "Тайм-менеджмент"],
    eduTitle: "Education",
    uniName: "Igor Sikorsky Kyiv Polytechnic Institute, FBME KPI",
    uniSpecialty: "Specialty: Computer Science",
    uniPeriod: "Period: 2024 - 2028",
    projectsTitle: "My Projects",
    projTech: "Інструменти",
    proj1Title: "Python Turtle Heart",
    proj1Desc: "After learning to plot graphs for the student council, I decided to create my own creative mini-project.",
    proj2Title: "Telegram Horoscope Bot",
    proj2Desc: "The program generates horoscopes based on birth dates.",
    expTitle: "Volunteer Experience",
    expRole: "Technical Department of the FBME Student Council",
    expPeriod: "Period: 2024 - present",
    expDesc1: "Processing surveys about teachers and building statistical charts using Python (matplotlib).",
    expDesc2: "Working in a team on collaborative tasks.",
    contactTitle: "Зв'язатися зі мною",
    rights: "© 2026",
    toTop: "Повернутися догори",
    allContacts: "Усі контакти",
    searchPlace: "Введіть назву міста...",
    searchBtn: "Пошук",
    weatherDesc: "Опис",
    feelsLike: "Відчувається як",
    humidity: "Вологість",
    wind: "Вітер",
    // Todo List UK
    todoNewTask: "Нове завдання",
    todoMyList: "Мій список",
    todoPlaceholder: "Що потрібно зробити?",
    todoAdd: "Додати",
    todoAll: "Всього",
    todoActive: "Активні",
    todoCompleted: "Виконано",
    todoEmpty: "Список порожній..."
  },
  en: {
    navHome: "Home",
    navContacts: "Contacts",
    navWeather: "Weather & Time",
    navTodo: "Todo List",
    label: "Student Portfolio",
    name: "Anastasiia",
    sub: "2nd year FBME KPI | Computer Science",
    aboutTitle: "About Me",
    aboutText1: "Hi! My name is Anastasiia. I am a 2nd-year student at FBME KPI.",
    aboutText2: "I am passionate about programming, especially web development.",
    aboutText3: "In my free time, I watch detective movies and series. I also love traveling around Ukraine, I liked Vorokhta the most.",
    skillsTitle: "Skills",
    techStackTitle: "Tech Stack",
    techStackList: ["HTML5", "CSS3", "JavaScript", "Python", "Git/GitHub"],
    softSkillsTitle: "Soft skills",
    softSkillsList: ["Creativity", "Teamwork", "Punctuality", "Eagerness to learn", "Responsibility", "Time management"],
    eduTitle: "Education",
    uniName: "Igor Sikorsky Kyiv Polytechnic Institute, FBME KPI",
    uniSpecialty: "Specialty: Computer Science",
    uniPeriod: "Period: 2024 - 2028",
    projectsTitle: "My Projects",
    projTech: "Tools",
    proj1Title: "Python Turtle Heart",
    proj1Desc: "After learning to plot graphs for the student council, I decided to create my own creative mini-project.",
    proj2Title: "Telegram Horoscope Bot",
    proj2Desc: "The program generates horoscopes based on birth dates.",
    expTitle: "Volunteer Experience",
    expRole: "Technical Department of the FBME Student Council",
    expPeriod: "Period: 2024 - present",
    expDesc1: "Processing surveys about teachers and building statistical charts using Python (matplotlib).",
    expDesc2: "Working in a team on collaborative tasks.",
    contactTitle: "Contact Me",
    rights: "© 2026",
    toTop: "Back to top",
    allContacts: "All Contacts",
    searchPlace: "Enter city name...",
    searchBtn: "Search",
    weatherDesc: "Description",
    feelsLike: "Feels like",
    humidity: "Humidity",
    wind: "Wind",
    // Todo List EN
    todoNewTask: "New Task",
    todoMyList: "My List",
    todoPlaceholder: "What needs to be done?",
    todoAdd: "Add",
    todoAll: "All",
    todoActive: "Active",
    todoCompleted: "Completed",
    todoEmpty: "List is empty..."
  }
};