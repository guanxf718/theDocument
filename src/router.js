import Vue from 'vue'
import Router from 'vue-router'
import INDEX from './views/index/index.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        redirect: { name: 'index' }
    }, {
        path: '/index',
        name: 'index',
        component: INDEX
    }, ]
})