import Vue from 'vue';
import Router from 'vue-router';
import iView from 'iview';
import Util from './libs/util';
import routers from './libs/routers';

Vue.use(Router);
Vue.use(iView);

const router = new Router({
    // mode: 'history',
    routes: routers
});

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

export default router;