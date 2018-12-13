import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store.js'
import Accounting from 'accounting-js'
import App from './App.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'homeLink', component: Home },
  { path: '/menu', name: 'menuLink', component: Menu },
  { path: '/admin', name: 'adminLink', component: Admin, beforeEnter: (to, from, next) =>{
    alert('This aria is for authorised users only, please login to continue.');
    next();
  }},
  { path: '/about', name: 'aboutLink', component: About, children: [ 
    { path: '/contact', name: 'contactLink', component: Contact },
    { path: '/history', name: 'historyLink', component: History },
    { path: '/delivery', name: 'deliveryLink', component: Delivery },
    { path: '/ordering-guide', name: 'orderingGuideLink', component: OrderingGuide }
  ]},
  { path: '/*', redirect: '/' }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

Vue.filter('currency', function(val){
  return Accounting.formatMoney(val)
})

//Vue.component('global-component', () => import('./components/Menu.vue' ) )

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
