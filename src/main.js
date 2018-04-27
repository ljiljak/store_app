import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Customers from './pages/customers.vue'
import Products from './pages/products.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
	{ path: '/', redirect: '/customers'},
	{ path: '/customers', component: Customers},
	{ path: '/products', component: Products}
]

const router = new VueRouter({
  routes
})

new Vue({
	router,
  render: h => h(App)
}).$mount('#app')
