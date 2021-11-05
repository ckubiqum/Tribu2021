import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Start from './views/Start.vue'
import About from './views/About.vue'
import Content from './components/Content.vue'
import Chat from './views/Chat.vue'
import Iframe from './views/Iframe.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    }, {
      path: '/chat',
      name: 'Chat',
      component: Chat

    },

    {
      path: '/home',
      name: 'Home',
      component: Home
    },

    {
      path: '/iframe/:url',
      name: 'Iframe',
      component: Iframe,
      props: true
    },

  ]
})