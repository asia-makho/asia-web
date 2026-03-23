// ==========================================
// 1. АНАЛОГОВИЙ ГОДИННИК
// ==========================================
function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Розрахунок градусів
    const secondDegrees = (seconds / 60) * 360;
    const minDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30);

    // Застосування стилів з урахуванням центрування
    document.getElementById('second-hand').style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
    document.getElementById('min-hand').style.transform = `translateX(-50%) rotate(${minDegrees}deg)`;
    document.getElementById('hour-hand').style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
}

// Запуск годинника
setInterval(updateClock, 1000);
updateClock(); // викликаємо одразу, щоб стрілки стали на місце без затримки в 1 секунду

// Запуск годинника (тільки якщо годинник Є на сторінці)
if (document.getElementById('second-hand')) {
    setInterval(updateClock, 1000);
    updateClock();
}

document.addEventListener('DOMContentLoaded', () => {
    // Запускаємо погоду, тільки якщо є поле для вводу міста
    if (document.getElementById('city')) {
        getWeather('Kyiv');
    }
});

// ==========================================
// 2. ВІДЖЕТ ПОГОДИ
// ==========================================

const API_KEY = '3d54d1e61b499314da57152e9bad38ed';
function handleEnter(event) {
    if (event.key === "Enter") {
        getWeather();
    }
}

async function getWeather(city = null) {
    const searchCity = city || document.getElementById('city').value;
    const errorMessage = document.getElementById('error-message');
    const loading = document.getElementById('loading');

    if (!searchCity) {
        errorMessage.innerText = "Please enter a city name";
        return;
    }

    errorMessage.innerText = "";
    loading.style.display = "block"; // Показуємо напис "Завантаження..."

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        // 💡 СПЕЦІАЛЬНИЙ РЯДОК ДЛЯ ДЕБАГУ: 
        console.log("Відповідь від сервера:", data);

        // Більш надійна перевірка: якщо сервер повернув статус помилки (не 200)
        if (!response.ok) {
            throw new Error(`Помилка: ${data.message}`);
        }

        // Якщо все добре, оновлюємо HTML
        document.getElementById('cityName').innerText = data.name;
        document.getElementById('temperature').innerText = `${Math.round(data.main.temp)}°C`;
        document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
        document.getElementById('feels-like').innerText = `Feels like: ${Math.round(data.main.feels_like)}°C`;
        document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById('wind-speed').innerText = `Wind: ${data.wind.speed} m/s`;

    } catch (error) {
        // Якщо сталася помилка, показуємо її на екрані
        errorMessage.innerText = error.message;
    } finally {
        loading.style.display = "none"; // Ховаємо напис "Завантаження..."
    }
}

// ==========================================
// 3. ІНІЦІАЛІЗАЦІЯ (ЗАПУСК ПРИ ВІДКРИТТІ СТОРІНКИ)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Завантажуємо погоду для Києва за замовчуванням при відкритті сайту
    getWeather('Kyiv');
});