<script setup lang="ts">
import { useSiteState } from '@/composables/useSiteState';
const { locale, setLocale, toggleTheme, theme, texts } = useSiteState();
</script>

<template>
  <header class="header">
    <nav class="nav-group">
      <router-link to="/" class="nav-btn">{{ texts.navHome }}</router-link>
      <router-link to="/contacts" class="nav-btn">{{ texts.navContacts }}</router-link>
      <router-link to="/dashboard" class="nav-btn">{{ texts.navWeather }}</router-link>
      <router-link to="/todo" class="nav-btn">{{ texts.navTodo }}</router-link>
    </nav>

    <div class="settings-group">
      <div class="lang-box">
        <button 
          @click="setLocale('uk')" 
          :class="['settings-btn', { active: locale === 'uk' }]"
        >UA</button>
        <button 
          @click="setLocale('en')" 
          :class="['settings-btn', { active: locale === 'en' }]"
        >EN</button>
      </div>
      
      <button @click="toggleTheme" class="settings-btn theme-toggle">
        {{ theme === 'light' ? 'Тема 🌙' : 'Тема ☀️' }}
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(15px); 
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Додаю відстань між UA та EN всередині їхньої групи */
.lang-box {
  display: flex;
  gap: 8px; /* Ось тут ми регулюємо відстань */
}

.settings-group {
  display: flex;
  gap: 12px; 
  background: rgba(0, 0, 0, 0.03);
  padding: 5px;
  border-radius: 12px;
  align-items: center;
}
.nav-group, .settings-group {
  display: flex;
  gap: 5px;
  background: rgba(0, 0, 0, 0.03); 
  padding: 5px;
  border-radius: 12px;
}

/* БАЗОВИЙ СТИЛЬ (Прозорі кнопки) */
.nav-btn, .settings-btn {
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid rgb(85, 8, 226);
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 640;
  color: yellowgreen; 
  background: whitesmoke;
  transition: all 0.3s ease;
  cursor: pointer;
  text-transform: uppercase;
}

/* ЕФЕКТ ПРИ НАВЕДЕННІ (ще чіткіший) */
.nav-btn:hover:not(.router-link-active), 
.settings-btn:hover:not(.active) {
  background: rgba(255, 255, 255, 0.6);
  color: #0f172a; 
}

/* 🌟 АКТИВНА КНОПКА (Біла з тінню та градієнтом) */
.router-link-active, .settings-btn.active {
  background: white !important;
  border-color: rgba(59, 130, 246, 0.2) !important; 
  
  /* Наш фірмовий градієнт */
  background-image: linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); 
}

/* Темна тема */
:global(.dark) .nav-group, :global(.dark) .settings-group { background: rgba(255, 255, 255, 0.05); }
:global(.dark) .router-link-active, :global(.dark) .settings-btn.active { background: #2d2d2d !important; }
</style>