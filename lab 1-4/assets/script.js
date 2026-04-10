// ВИМОГА 1: Запуск основної логіки після завантаження документа
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM повністю завантажено. Запуск логіки сайту...");

    /* ========================================================
       ВИМОГА 2, 3 та 5: Обробка подій, Динамічна зміна інтерфейсу, Керований стан (State)
       Реалізація Темної Теми сайту
       ======================================================== */
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Стан (state): читаємо поточну тему з LocalStorage
    let currentTheme = localStorage.getItem('theme') || 'light';

    // Динамічно змінюємо клас при завантаженні, якщо тема темна
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    // Обробка події (click)
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // Динамічна зміна CSS-класу
            body.classList.toggle('dark-theme');

            // Оновлюємо стан і зберігаємо в пам'ять браузера
            currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
            localStorage.setItem('theme', currentTheme);
            console.log("Тему змінено на:", currentTheme);
        });
    }

    /* ========================================================
       ВИМОГА 4: Структура даних (Масив об'єктів)
       ======================================================== */
    // Масив проєктів
    const projectsData = [
        {
            title: "Візуалізація даних: Графік Серця",
            tech: "Python, turtle",
            description: "Опанувавши побудову графіків для студради, я вирішила створити власний творчий міні-проєкт.",
            img: "images/matplotlib_heart.jpg",
            alt: "Математичне серце turtle"
        },
        {
            title: "Розробка консольного чат-бота",
            tech: "Telegram Bot API, Botfather",
            description: "Програма генерує три частини гороскопу на основі введених дат народження.",
            img: "images/horoskope_tgbot.png",
            alt: "Telegram Bot"
        },
        {
            title: "Дашборд Погоди та Часу",
            tech: "HTML, CSS, JavaScript, API",
            description: "Інтерактивний дашборд, який показує поточну погоду та час у будь-якому місті світу.",
            img: "images/weather_time_dashboard.png",
            alt: "Погода та час"
        }
    ];

    // Масив освіти
    const educationData = [
        {
            isCourse: false,
            title: "Національний технічний університет України «КПІ ім. Ігоря Сікорського», ФБМІ",
            specialty: "Комп'ютерні науки",
            period: "2024 - 2028"
        },
        {
            isCourse: false,
            title: "ВСП Оптико-механічний фаховий коледж КНУ імені Тараса Шевченка",
            specialty: "Інженерія Програмного забезпечення (молодший спеціаліст)",
            period: "2019 - 2023"
        },
        {
            isCourse: true,
            title: "Додаткові курси",
            items: [
                "Основи Web UI: Prometheus (2023)",
                "Веб-розробка: майстер-клас GeniusSpace (2023)",
                "Веб-розробка: майстер-клас GoIT (2023)",
                "Веб-розробка: міні-курс Hillel (2023)"
            ]
        }
    ];

    /* ========================================================
       ВИМОГА 3: Динамічна зміна вмісту сторінки (Рендер)
       ======================================================== */

    // 1. Рендер Проєктів
    const projContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projectsContainer.innerHTML = ''; // Очищаємо перед рендером
        projectsData.forEach(project => {
            const card = document.createElement('article');
            card.className = 'card';
            card.innerHTML = `
                <img src="${project.img}" alt="${project.alt}" class="project-img">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p><strong>Технології:</strong> ${project.tech}</p>
                    <p>${project.description}</p>
                </div>
            `;
            projectsContainer.appendChild(card);
        });
    }

    // 2. Рендер Освіти
    const educationContainer = document.getElementById('education-container');
    if (educationContainer) {
        educationContainer.innerHTML = '';
        educationData.forEach(item => {
            const card = document.createElement('article');
            card.className = 'card';

            if (item.isCourse) {
                let coursesList = item.items.map((course, index) => `<li><strong>${index + 1}.</strong> ${course}</li>`).join('');
                card.innerHTML = `
                    <h3>${item.title}</h3>
                    <ul style="list-style-type: none; padding-left: 0;">${coursesList}</ul>
                `;
            } else {
                card.innerHTML = `
                    <h3>${item.title}</h3>
                    <p><strong>Спеціальність:</strong> ${item.specialty}</p>
                    <p><strong>Період:</strong> ${item.period}</p>
                `;
            }
            educationContainer.appendChild(card);
        });
    }
});