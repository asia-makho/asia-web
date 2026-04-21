<script setup lang="ts">
import { useSiteState } from '@/composables/useSiteState';
import ProjectCard from '@/components/ProjectCard.vue'; 

const { texts } = useSiteState();
</script>

<template>
  <div class="home-wrapper">
    
    <header class="hero-header-v2">
      <div class="header-content-v2">
        <img src="/images/me.jpg" alt="Anastasiia" class="Me-logo-small">
        <div class="header-text-v2">
          <span class="portfolio-label">{{ texts.label }}</span>
          <h1 class="my-name">{{ texts.name }}</h1>
          <p class="hero-subtext">{{ texts.sub }}</p>
        </div>
      </div>
    </header>

    <section class="section">
      <h2 class="section-title">{{ texts.aboutTitle }}</h2>
      <div class="card">
        <div class="about-me-content">
          <img src="/images/Vorokhta.jpg" alt="Vorokhta" class="Vorokhta-img">
          <div class="about-me-text">
            <p>{{ texts.aboutText1 }}</p>
            <p>{{ texts.aboutText2 }}</p>
            <p>{{ texts.aboutText3 }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="section">
      <h2 class="section-title">{{ texts.skillsTitle }}</h2>
      <div class="grid-two">
        <article class="card">
          <h3>{{ texts.techStackTitle }}</h3>
          <ul class="compact-list">
            <li v-for="skill in texts.techStackList" :key="skill">{{ skill }}</li>
          </ul>
        </article>
        <article class="card">
          <h3>{{ texts.softSkillsTitle }}</h3>
          <ul class="compact-list">
            <li v-for="skill in texts.softSkillsList" :key="skill">{{ skill }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section id="projects" class="section">
      <h2 class="section-title">{{ texts.projectsTitle }}</h2>
      <div class="grid-two">
        <ProjectCard 
          :title="texts.proj1Title"
          :description="texts.proj1Desc"
          image="/images/matplotlib_heart.jpg"
          tech="Python, Matplotlib, Turtle"
        />
        <ProjectCard 
          :title="texts.proj2Title"
          :description="texts.proj2Desc"
          image="/images/horoskope_tgbot.png"
          tech="Telegram Bot API, Python, MML"
        />
      </div>
    </section>

    <section id="details" class="section">
      <div class="grid-two">
        
        <div class="info-group">
          <h2 class="section-title-small">{{ texts.eduTitle }}</h2>
          <article class="card">
            <h3>{{ texts.uniName }}</h3>
            <p class="small-text"><strong><i>{{ texts.uniSpecialty }}</i></strong></p>
            <p class="small-text">{{ texts.uniPeriod }}</p>
          </article>
        </div>

        <div class="info-group">
          <h2 class="section-title-small">{{ texts.expTitle }}</h2>
          <article class="card">
            <h3>{{ texts.expRole }}</h3>
            <p class="small-text"><strong>{{ texts.expPeriod }}</strong></p>
            <ul class="compact-list">
              <li>{{ texts.expDesc1 }}</li>
              <li>{{ texts.expDesc2 }}</li>
            </ul>
          </article>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
/* ЗАГАЛЬНІ НАЛАШТУВАННЯ */
.home-wrapper {
  padding-bottom: 30px; 
}

.section { 
  max-width: 1100px; 
  margin: 0 auto;  
  padding: 15px 20px; 
}

.card { 
  background: white; 
  padding: 18px 25px; 
  border-radius: 20px; 
  box-shadow: 0 4px 15px rgba(0,0,0,0.03); 
  border: 1px solid rgba(0,0,0,0.02);
}

:global(.dark) .card { 
  background: #2d2d2d; 
  border-color: #444;
  box-shadow: none;
}

/* СІТКА */
.grid-two { 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  gap: 15px; 
  align-items: start;
}

/* ЗАГОЛОВКИ */
.my-name { 
  font-size: 3.5rem; 
  margin: 0; 
  font-weight: 900; 
  color: #0f172a; 
  letter-spacing: -1px;
}

.section-title { 
  font-size: 1.6rem; 
  font-weight: 900;
  margin-bottom: 10px; 
  color: #0f172a;
}

.section-title-small {
  font-size: 1.3rem;
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 8px;
  padding-left: 5px;
}

h3 { font-size: 1.1rem; font-weight: 800; margin-bottom: 6px; color: #1e293b; }

:global(.dark) .my-name, 
:global(.dark) .section-title, 
:global(.dark) .section-title-small,
:global(.dark) h3 { color: #f8fafc; }

/* HERO */
.hero-header-v2 { 
  display: flex; 
  justify-content: center; 
  margin: 25px 0; 
}

.header-content-v2 { display: flex; align-items: center; gap: 20px; }
.Me-logo-small { width: 90px; height: 90px; object-fit: cover; border-radius: 50%; }
.hero-subtext { font-size: 1rem; color: #475569; margin-top: 5px; }

/* ABOUT ME (ПРО МЕНЕ) */
.about-me-content { display: flex; gap: 20px; align-items: center; }
.Vorokhta-img { width: 140px; height: 95px; object-fit: cover; border-radius: 12px; flex-shrink: 0; }
.about-me-text p { font-size: 0.95rem; line-height: 1.5; margin-bottom: 6px; color: #334155; }

/* СПИСКИ */
.compact-list { padding-left: 18px; margin: 0; }
.compact-list li { margin-bottom: 4px; font-size: 0.9rem; }

.small-text { font-size: 0.85rem; color: #64748b; margin-bottom: 2px; }

@media (max-width: 850px) {
  .grid-two { gap: 15px; }
  .section { padding: 10px 20px; }
  .my-name { font-size: 2.2rem; }
}
</style>