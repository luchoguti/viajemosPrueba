require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
Vue.use(VueAxios, axios);

import VuejsDialog from 'vuejs-dialog/';

// include the default style
import 'vuejs-dialog/dist/vuejs-dialog.min.css'
Vue.use(VuejsDialog);

import HomeComponent from './components/HomeComponent.vue';

// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading);

const routes = [
    {
        name: 'home',
        path: '/',
        component: HomeComponent
    },
];

const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');
