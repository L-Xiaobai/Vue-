import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About')
  },
  {
    path: '/blog/:id',
    name: 'Blog',
    component: () => import('../views/Blog')
  },
  {
    path: '/message',
    name: 'Message',
    component: ()=>import('../views/Message')
  },
  {
    path: '/diary',
    name: 'Diary',
    component: ()=>import('../views/Diary')
  },
  {
    path: '/links',
    name: 'Links',
    component: ()=>import('../views/Links')
  }
];

const router = new VueRouter({
  routes
});

export default router
