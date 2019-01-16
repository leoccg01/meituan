import Vue from 'vue'
import VueRouter from 'vue-router'
import pageA from './components/vuex.vue'
import pageB from './components/b.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:pageA
    },{
        path:'/pageb',
        component:pageB  
    }
]

const router = new VueRouter({
    routes,
})

export default router