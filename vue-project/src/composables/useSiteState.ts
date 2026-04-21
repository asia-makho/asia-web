import { ref, computed } from 'vue';
import { translations } from '@/data/translations';

// Створюю стан ПОЗА функцією, щоб він був один на весь сайт
const locale = ref<'uk' | 'en'>('uk');
const theme = ref<'light' | 'dark'>('light');

export function useSiteState() {
  const setLocale = (newLocale: 'uk' | 'en') => {
    locale.value = newLocale;
  };

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', theme.value === 'dark');
  };

  const texts = computed(() => translations[locale.value]);

  return {
    locale,
    setLocale,
    theme,
    toggleTheme,
    texts
  };
}