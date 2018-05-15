import Vue from "vue";
import App from './APP.vue';
import router from './router';
import store from './store';
import './assets/mock';

const app = new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
})

export default app;