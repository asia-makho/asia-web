<script setup lang="ts">
import { useSiteState } from '@/composables/useSiteState';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const { theme } = useSiteState();
</script>

<template>
  <div :class="['app-container', theme]">
    <Header />
    <main class="content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style>
/* 1. Глобальні налаштування для всього сайту */
body {
  margin: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-family: Arial, sans-serif; 
}

/* 2. Стилі для контейнера*/
.app-container {
  background-color: #b0d4f1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #222; 
}

/* 3. Стилі для контейнера (Темна тема) */
.app-container.dark {
  background-color: #1a1a1a; 
  color: #f1f1f1; 
}

/* 4. Налаштування карток для обох тем */
.card {
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Картка в світлій темі */
.app-container:not(.dark) .card {
  background-color: white;
  color: #333;
}

/* Картка в темній темі */
.app-container.dark .card {
  background-color: #2d2d2d; 
  color: #ffffff; 
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}

/* Налаштування заголовків у темній темі */
.app-container.dark h1, 
.app-container.dark h2, 
.app-container.dark h3 {
  color: #ffffff;
}

/* Налаштування підписів та тексту */
.app-container.dark .label, 
.app-container.dark .subtitle,
.app-container.dark p {
  color: #cccccc;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>