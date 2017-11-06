import Vue from 'vue';
import vueCropper from 'vue-cropper'
import store from "./store/index.js"
import router from './router';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import jquery from "jquery";
import uploadBtn from './components/uploadBtn.vue'

Vue.prototype.$ = jquery;

Vue.use(vueCropper)
Vue.use(uploadBtn)

new Vue({
    el: '#app',
    store,
    router: router,
    render: h => h(App)
});
