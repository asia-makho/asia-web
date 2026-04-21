<script setup lang="ts">
import { useSiteState } from '@/composables/useSiteState';

const { texts } = useSiteState();

// Ваш список контактів
const contacts = [
  { icon: 'fas fa-envelope', label: 'Email', value: 'asiamakhomet@gmail.com', link: 'mailto:asiamakhomet@gmail.com' },
  { icon: 'fab fa-github', label: 'GitHub', value: 'github.com/asia-makho', link: 'https://github.com/asia-makho' },
  { icon: 'fab fa-telegram', label: 'Telegram', value: '@Asia_Makhomet', link: 'https://t.me/Asia_Makhomet' },
  { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'anastasiia-makhomet', link: 'https://linkedin.com/in/anastasiia-makhomet' },
  { icon: 'fab fa-instagram', label: 'Instagram', value: '@asia_makhomet', link: 'https://instagram.com/asia_makhomet' },
  { icon: 'fab fa-telegram', label: 'Telegram (Work)', value: '@anastasiie_m', link: 'https://t.me/anastasiie_m' }
];
</script>

<template>
  <div class="contacts-page">
    <h1 class="page-title">{{ texts.contactTitle }}</h1>

    <div class="card contact-card">
      <div class="avatar-container">
        <img src="/images/me.jpg" alt="Anastasiia Makhomet" class="contact-avatar">
      </div>

      <div class="contact-list">
        <div v-for="item in contacts" :key="item.label" class="contact-item">
          <div class="icon-box">
            <i :class="item.icon"></i>
          </div>
          <div class="contact-info">
            <span class="label">{{ item.label }}:</span>
            <a :href="item.link" target="_blank" class="value">{{ item.value }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contacts-page {
  max-width: 600px;
  margin: 30px auto;
  text-align: center;
}

.page-title {
  margin-bottom: 30px;
  font-size: 2.2rem;
  font-weight: 800;
}

/* --- СТИЛІ КАРТКИ  --- */
.contact-card {
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px turquoise;
}

/* --- СТИЛІ ФОТО-ПОРТРЕТА --- */
.avatar-container {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}

.contact-avatar {
  width: 120px;  
  height: 120px;
  border-radius: 50%; 
  
  object-fit: cover; 
  object-position: center;
  border: 4px solid #b0d4f1; 
  box-shadow: 0 8px 20px rgba(0,0,0,0.1); 
}

/* Темна тема для фото */
:global(.dark) .contact-avatar {
  border-color: #444;
}

/* --- СПИСОК КОНТАКТІВ --- */
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: left; 
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px;
  border-radius: 12px; 
  transition: background 0.3s;
}

/* Ефект наведення на рядок */
.contact-item:hover {
  background: rgba(0, 0, 0, 0.02);
}

:global(.dark) .contact-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.icon-box {
  width: 40px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
}

:global(.dark) .icon-box { color: #ccc; }

.contact-info {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 0.8rem;
  color: #777;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2px;
}

.value {
  font-weight: 600;
  text-decoration: none;
  color: #0077cc;
  transition: color 0.3s;
}

.value:hover {
  color: #004499;
  text-decoration: underline;
}

:global(.dark) .value { color: #58a6ff; }

/* Кольори іконок  */
.fa-envelope { color: #ea4335; }
.fa-github { color: #333; }
:global(.dark) .fa-github { color: #fff; }
.fa-telegram { color: #0088cc; }
.fa-linkedin { color: #0a66c2; }
.fa-instagram { color: #e1306c; }
</style>