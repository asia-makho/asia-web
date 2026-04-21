<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useSiteState } from '@/composables/useSiteState';

const { texts } = useSiteState();

// --- ГОДИННИК ---
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
let timer: number;

const updateClock = () => {
  const date = new Date();
  hours.value = (date.getHours() % 12) * 30 + date.getMinutes() * 0.5;
  minutes.value = date.getMinutes() * 6;
  seconds.value = date.getSeconds() * 6;
};

// --- ПОГОДА ---
const cityQuery = ref('Kyiv');
const weather = ref({
  temp: 5,
  description: 'clear sky',
  feelsLike: 5,
  humidity: 61,
  wind: 0.45
});

const fetchWeather = async () => {
  console.log('Шукаємо погоду для:', cityQuery.value);
};

onMounted(() => {
  updateClock();
  timer = window.setInterval(updateClock, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="dashboard-wrapper">
    
    <div class="clock-container">
      <div class="clock">
  <div class="center-dot"></div>
  
  <div class="hand hour-hand" :style="{ transform: `translateX(-50%) rotate(${hours}deg)` }"></div>
  <div class="hand min-hand" :style="{ transform: `translateX(-50%) rotate(${minutes}deg)` }"></div>
  <div class="hand second-hand" :style="{ transform: `translateX(-50%) rotate(${seconds}deg)` }"></div>
  
  <div class="number" v-for="n in 12" :key="n" :style="{ transform: `rotate(${n * 30}deg)` }">
    <span :style="{ transform: `rotate(${-n * 30}deg)` }">{{ n }}</span>
  </div>
</div>
    </div>

    <div class="card weather-card">
      <div class="search-box">
        <input 
          v-model="cityQuery" 
          @keyup.enter="fetchWeather" 
          :placeholder="texts.searchPlace"
          class="search-input"
        >
        <button @click="fetchWeather" class="search-btn">{{ texts.searchBtn }}</button>
      </div>

      <div class="weather-info">
        <div class="weather-header">
          <h2>{{ cityQuery }}</h2>
          <span class="temp">{{ weather.temp }}°C</span>
        </div>
        
        <div class="weather-details">
          <p><strong>{{ texts.weatherDesc }}:</strong> {{ weather.description }}</p>
          <p><strong>{{ texts.feelsLike }}:</strong> {{ weather.feelsLike }}°C</p>
          <p><strong>{{ texts.humidity }}:</strong> {{ weather.humidity }}%</p>
          <p><strong>{{ texts.wind }}:</strong> {{ weather.wind }} m/s</p>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.dashboard-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
  padding: 60px 20px;
  min-height: 70vh;
}

/* === ГОДИННИК === */
.clock-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.clock {
  width: 300px;
  height: 300px;
  border: 12px solid white;
  border-radius: 50%;
  position: relative;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  box-shadow: 0 15px 35px transparent;
}

/* Темна тема для годинника */
:global(.dark) .clock {
  border-color: #444 !important; /* Темна рамка для годинника */
}

/* Ефект фокусу, коли натискаєш на пошук */
.search-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

:global(.dark) .search-input {
  background: #333;
  border-color: #444;
  color: white;
}

.center-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  background: #333;
  border: 3px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

:global(.dark) .center-dot { background: white; border-color: #222; }

.hand {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform-origin: bottom center;
  border-radius: 10px;
}

.hour-hand { width: 8px; height: 75px; background: #333; z-index: 3; }
.min-hand { width: 5px; height: 100px; background: #666; z-index: 2; }
.second-hand { width: 3px; height: 115px; background: #ff4757; z-index: 1; }

:global(.dark) .hour-hand { background: #eee; }
:global(.dark) .min-hand { background: #aaa; }

.number {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 900;
  color: #333;
  padding: 25px; 
  box-sizing: border-box; 
}

:global(.dark) .number { color: #fff; }

.number span {
  display: inline-block; /* Це дозволяє цифрам не перевертатися */
}

/* === ПОГОДА === */
.weather-card {
  width: 100%;
  max-width: 400px;
  padding: 40px;
  border-radius: 30px; 
  box-shadow: 0 10px 30px transparent;
}

:global(.dark) .weather-card {
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.search-box {
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
}

.search-input {
  flex: 1;
  padding: 12px 15px;
  border: 2px solid #eee;
  border-radius: 12px;
  outline: none;
  font-size: 1rem;
  background: #fdfdfd;
  transition: border-color 0.3s;
}

:global(.dark) .search-input {
  background: #333;
  border-color: #555;
  color: white;
}

.search-input:focus {
  border-color: #888;
}

.search-btn {
  background:  #008080;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, background 0.3s;
}

:global(.dark) .search-btn {
  background: #555;
}

.search-btn:hover {
  background: #000;
  transform: translateY(-2px);
}

.weather-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 2px solid #eee;
  padding-bottom: 15px;
}

:global(.dark) .weather-header { border-color: #444; }

.weather-header h2 { margin: 0; font-size: 2rem; }
.temp { font-size: 2.5rem; font-weight: 900; }

.weather-details p {
  margin: 10px 0;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
}
</style>