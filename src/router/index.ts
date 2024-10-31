import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-dlc',
    name: 'About Dlc',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutDlc/AboutDlc.vue')
  },
  {
    path: "/experiences",
    name: "Experiences",
    component: () =>
      import(/* webpackChunkName: "our-worlds" */ "../views/Experiences/Experiences.vue"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
    import(/* webpackChunkName: "about" */ '../views/AboutDlc/AboutDlc.vue'),
      // import(/* webpackChunkName: "gallery" */ "../views/Gallery/Gallery.vue"),
  },
  {
    path: "/our-worlds",
    name: "Our Worlds",
    component: () =>
      import(/* webpackChunkName: "our-worlds" */ "../views/Experiences/Experiences.vue"),
  },
 
  {
    path: "/press",
    name: "Press",
    component: () =>
      import(/* webpackChunkName: "our-worlds" */ "../views/Experiences/Experiences.vue"),
     // import(/* webpackChunkName: "our-worlds" */ "../views/Press/Press.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
