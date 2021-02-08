import Vue from 'vue'
import VueRouter from 'vue-router'
import shangpinlist from '../list/shangpinlist.vue'
import Detial   from '../Detial.vue'
import zhifu   from  '../zhifu.vue'
Vue.use(VueRouter)
const routes = [
   
    {
        path: '/',
        name: 'shangpinlist',
        component: shangpinlist,
    },
    
  
    {
        path: '/Detial',
        name: 'Detial',
        component: Detial,
    },
    {
        path: '/zhifu',
        name: 'zhifu',
        component: zhifu,
    },
  
   
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
