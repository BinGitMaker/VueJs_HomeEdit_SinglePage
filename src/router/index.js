import {createRouter, createWebHistory} from 'vue-router'

import Accueil from '../components/Accueil.vue'

const routes = [ 
    {path: '/', name: 'accueil', component: Accueil, props: true},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router