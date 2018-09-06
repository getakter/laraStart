
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import { Form, HasError, AlertError } from 'vform'

import VueRouter from 'vue-router'

import moment from 'moment'

import VueProgressBar from 'vue-progressbar'

import swal from 'sweetalert2'
window.swal = swal;

/*Sweet Alert */
const toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.toast = toast;


/*Progressbar*/
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})


/*Form*/
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

Vue.use(VueRouter)


/*Filters*/
Vue.filter('titlecase', function(text) {
	return text.charAt(0).toUpperCase() + text.slice(1)
});

Vue.filter('myDate',function(created){
    return moment(created).format('MMMM Do YYYY');
});


/*Routes*/
let routes = [
  { path: '/dashboard', component: require('./components/Dashboard.vue') },
  { path: '/users', component: require('./components/Users.vue') },
  { path: '/profile', component: require('./components/Profile.vue') }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app',
    router
});
