import Vue from 'vue'
import VueRouter from 'vue-router'
import BarchartView from '../views/bar-chart.vue'
import ChartView from '../views/chart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Barchart',
    component: BarchartView
  },
  {
    path: '/chart2',
    name: 'Chart',
    component: ChartView
  },
  
]

const router = new VueRouter({
  routes
})

export default router
