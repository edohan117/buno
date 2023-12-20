import Home from "@/pages/Home";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

const routes = [
    {path: '/', component: Home},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;