import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: () => import('../pages/Contacts.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../pages/Dashboard.vue')
    },
    {
        path: '/todo',
        name: 'Todo',
        component: () => import('../pages/TodoList.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router