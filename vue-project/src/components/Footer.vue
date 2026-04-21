<script setup lang="ts">
import { useSiteState } from '@/composables/useSiteState';
const { texts } = useSiteState();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      
      <div class="footer-left">
        <div class="copyright">{{ texts.rights }}</div>
        <button @click="scrollToTop" class="footer-btn back-to-top">
          {{ texts.toTop }} ↑
        </button>
      </div>

      <div class="footer-right">
        <router-link to="/contacts" class="footer-btn contact-link">
          {{ texts.allContacts }}
        </router-link>
      </div>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 60px;
  padding: 40px 10%;
  border-top: 1px solid rgba(230, 31, 31, 0.05);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(15px);
  position: relative;
  z-index: 1000;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end; 
}

/* БЛОК ПІД 2026 */
.footer-left {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}

.copyright {
  font-weight: 800;
  color: yellowgreen;
  font-size: 0.95rem;
  margin-left: 5px;
}

/* СТИЛЬ КНОПОК */
.footer-btn {
  text-decoration: none;
  background: transparent;
  border: none;
  padding: 5px 0;
  font-size: 0.8rem;
  font-weight: 700;
  color: yellowgreen; 
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
}

/* Ефект при наведенні: колір змінюється на синій */
.footer-btn:hover {
  color: grey;
  transform: translateX(3px); /* Легке зміщення вбік для інтерактивності */
}

/* ТЕМНА ТЕМА */
:global(.dark) .footer-btn {
  color: grey;
}
:global(.dark) .footer-btn:hover {
  color: grey;
}

/* Додамо трохи більше місця між роком і кнопкою */
.footer-left {
  display: flex;
  flex-direction: column;
  gap: 8px; 
  align-items: flex-start;
}


/* Адаптація */
@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  .footer-left { align-items: center; }
}
</style>