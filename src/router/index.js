import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../components/Home.vue'
import About from '../components/About.vue'

//1 通过Vue.use() 安装插件
Vue.use(VueRouter)


//2 创建VueRouter对象
const routes = [
    {
        path : '/home',
        component : Home
    },
    {
        path : '/about',
        component : About
    }
]
const router = new VueRouter({
    routes
})


//3 将router对象传入到Vue实例
export default router