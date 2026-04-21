<script setup lang="ts">
import { ref, computed } from 'vue';
import { useSiteState } from '@/composables/useSiteState';

const { texts } = useSiteState();
const newTask = ref('');
const todos = ref<{ id: number; text: string; completed: boolean }[]>([]);
const currentFilter = ref('all'); // Стан фільтра: all, active, completed

const addTask = () => {
  if (newTask.value.trim()) {
    todos.value.push({ id: Date.now(), text: newTask.value, completed: false });
    newTask.value = '';
  }
};

const removeTask = (id: number) => {
  todos.value = todos.value.filter(t => t.id !== id);
};

// 🌟 МАГІЯ ФІЛЬТРАЦІЇ
const filteredTodos = computed(() => {
  if (currentFilter.value === 'active') return todos.value.filter(t => !t.completed);
  if (currentFilter.value === 'completed') return todos.value.filter(t => t.completed);
  return todos.value;
});

const totalTasks = computed(() => todos.value.length);
const completedTasks = computed(() => todos.value.filter(t => t.completed).length);
const activeTasks = computed(() => todos.value.filter(t => !t.completed).length);
</script>

<template>
  <div class="todo-wrapper">
    <div class="grid-two">
      
      <div class="todo-card">
        <h2 class="card-title">{{ texts.todoNewTask }}</h2>
        <div class="todo-input-group">
          <input 
            v-model="newTask" 
            @keyup.enter="addTask"
            type="text" 
            class="todo-input" 
            :placeholder="texts.todoPlaceholder"
          >
          <button @click="addTask" class="add-btn">{{ texts.todoAdd }}</button>
        </div>
        
        <div class="stats">
          <button @click="currentFilter = 'all'" :class="{ active: currentFilter === 'all' }">
            {{ texts.todoAll }}: <strong>{{ totalTasks }}</strong>
          </button>
          <button @click="currentFilter = 'active'" :class="{ active: currentFilter === 'active' }">
            {{ texts.todoActive }}: <strong>{{ activeTasks }}</strong>
          </button>
          <button @click="currentFilter = 'completed'" :class="{ active: currentFilter === 'completed' }">
            {{ texts.todoCompleted }}: <strong>{{ completedTasks }}</strong>
          </button>
        </div>
      </div>

      <div class="todo-card">
        <h2 class="card-title">{{ texts.todoMyList }}</h2>
        <ul class="todo-list">
          <li v-for="todo in filteredTodos" :key="todo.id" class="todo-item">
            <div class="todo-left">
              <input type="checkbox" v-model="todo.completed" class="todo-checkbox">
              <span :class="{ 'completed-text': todo.completed }">{{ todo.text }}</span>
            </div>
            <button @click="removeTask(todo.id)" class="delete-btn">✕</button>
          </li>
          <li v-if="filteredTodos.length === 0" class="empty-msg">{{ texts.todoEmpty }}</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<style scoped>
.todo-wrapper { padding: 60px 20px; display: flex; justify-content: center; min-height: 80vh; }
.grid-two { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; width: 100%; max-width: 950px; align-items: start; }

.todo-card { background: white; padding: 35px; border-radius: 28px; box-shadow: 0 10px 40px rgba(0,0,0,0.04) !important; border: 1px solid rgba(0,0,0,0.05); }
:global(.dark) .todo-card { background: #2d2d2d; box-shadow: none !important; border-color: #444; }

/* ЗАГОЛОВКИ (ЧОРНІ) */
.card-title { font-size: 1.6rem; font-weight: 900; margin-bottom: 25px; color: #000 !important; }
:global(.dark) .card-title { color: #000 !important; }

.todo-input-group { display: flex; flex-direction: column; gap: 15px; }
.todo-input { box-sizing: border-box; width: 100%; padding: 12px 16px; border: 2px solid #f1f5f9; border-radius: 12px; font-size: 0.95rem; background: #fdfdfd; outline: none; }
:global(.dark) .todo-input { background: #1a1a1a; border-color: #444; color: white; }

.add-btn { background: linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%); color: white; border: none; padding: 12px; border-radius: 12px; font-weight: 800; cursor: pointer; text-transform: uppercase; }

/* СТИЛЬ СТАТИСТИКИ ТА ФІЛЬТРІВ */
.stats { margin-top: 25px; padding-top: 20px; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-between; gap: 5px; }
.stats button { 
  background: none; border: none; font-size: 0.8rem; color: #64748b; cursor: pointer; 
  padding: 5px 10px; border-radius: 8px; transition: 0.3s; font-weight: 600;
}
.stats button.active { background: #f1f5f9; color: #3b82f6; }
:global(.dark) .stats button.active { background: #3d3d3d; color: #2dd4bf; }

.todo-item { display: flex; justify-content: space-between; align-items: center; padding: 12px 15px; background: #f8fafc; border-radius: 12px; margin-bottom: 10px; }
:global(.dark) .todo-item { background: #3d3d3d; color: white; }
.completed-text { text-decoration: line-through; color: #94a3b8; }
.delete-btn { background: none; border: none; color: #ef4444; font-size: 1.2rem; cursor: pointer; }
.empty-msg { text-align: center; color: #94a3b8; padding: 20px; }

@media (max-width: 900px) { .grid-two { grid-template-columns: 1fr; } }
</style>