//配置路由相关的信息

import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
//1 通过Vue.use（插件） 安装这个插件
Vue.use(VueRouter)

//2. 插件我们的路由对象
const routers = [
    {
        path: '',
        component: Home
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/user/:userid',
        component: User
    }
]
const router = new VueRouter({
    //配置路径和组件之间的应用关系
    routes: routers
});

//将我们的router对象传入到我们的Vue实力中
export default router