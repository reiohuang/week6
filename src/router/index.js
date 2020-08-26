import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Front/Home.vue'),
    children: [
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/Front/About.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/Front/Products.vue')
      },
      {
        path: 'carts',
        name: 'Carts',
        component: () => import('../views/Front/Carts.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin/Admin.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Admin/Products.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Admin/Coupons.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Admin/Order.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
