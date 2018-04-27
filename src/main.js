import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Customers from './pages/app.customers.vue'
import Products from './pages/app.products.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
	{ path: '/', redirect: '/customers'},
	{ path: '/app.customers', component: Customers},
	{ path: '/app.products', component: Products}
]

const router = new VueRouter({
  routes
})

new Vue({
	router,
  render: h => h(App)
}).$mount('#app')
