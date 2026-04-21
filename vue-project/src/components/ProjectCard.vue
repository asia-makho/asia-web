<script setup lang="ts">
import { useSiteState } from '@/composables/useSiteState'; // Імпортуємо стан

// Отримуємо переклади
const { texts } = useSiteState();

defineProps<{
  title: string;
  description: string;
  image: string;
  tech: string;
}>();
</script>

<template>
  <article class="project-card">
    <div class="image-wrapper">
      <img :src="image" :alt="title" class="project-img">
    </div>
    <div class="project-content">
      <h3 class="project-title">{{ title }}</h3>
      
      <p class="project-tech">
        <strong>{{ texts.projTech }}:</strong> {{ tech }}
      </p>
      
      <p class="project-description">{{ description }}</p>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

:global(.dark) .project-card {
  background: #2d2d2d;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(50, 205, 50, 0.2); /* Твій фірмовий неон */
}

.project-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.project-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-title {
  margin: 0 0 10px 0;
  font-size: 1.2rem;
}

.project-tech {
  font-size: 0.85rem;
  color: #0088cc;
  margin-bottom: 10px;
}

.project-description {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #555;
  flex-grow: 1;
}

.project-tech strong {
  color: #0f172a; /* Темніший колір для самого слова "Інструменти" */
}
:global(.dark) .project-tech strong { color: #f8fafc; }
:global(.dark) .project-description { color: #bbb; }
</style>