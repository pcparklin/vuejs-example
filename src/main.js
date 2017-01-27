var Vue = require('vue')
var VueRouter = require('vue-router')
var VueMaterial = require('vue-material')
var VueResource = require('vue-resource')

Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(VueResource)

var Main = require('./app/main.vue')
var Home = require('./view/home.vue')
var Distribution = require('./view/distribution.vue')
var Combination = require('./view/combination.vue')
var Groups = require('./view/groups.vue')

var routes = [
  {path: '/', component: Home},
  {path: '/groups', component: Groups},
  {path: '/distribution', component: Distribution},
  {path: '/combination', component: Combination},
]

var router = new VueRouter({routes})

var app = new Vue({
  router,
  el: '#main',
  render: h => h(Main)
})
