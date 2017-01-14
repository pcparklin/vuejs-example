var Vue = require('vue')
var VueRouter = require('vue-router')
var VueMaterial = require('vue-material')

Vue.use(VueRouter)
Vue.use(VueMaterial)

var Main = require('./app/main.vue')
var Home = require('./view/home.vue')

var routes = [
  {path: '/', component: Home},
]

var router = new VueRouter({routes})

var app = new Vue({
  router,
  el: '#main',
  render: h => h(Main)
})
