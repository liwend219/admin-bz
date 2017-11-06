import Vue from 'vue';
import App from './serve.vue';
import Router from 'vue-router';
import iView from 'iview';
import Util from './libs/util';
import 'iview/dist/styles/iview.css';

Vue.use(Router);
Vue.use(iView);

const mo = (resolve) => require(['./views/serve/mo.vue'], resolve);

const routers = [
    { path: '/mo', meta: { title: '莫伟峰要的查询' }, component: mo },
];

const router = new Router({
    routes: routers
});

router.beforeEach((to, from, next) => {
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});