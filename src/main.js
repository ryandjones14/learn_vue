/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//import the hello component
import HelloWorld from './components/HelloWorld'
import About from './components/About'
import Param from './components/Param'
import profile from './components/profile'

//define your routes
const routes = [
  //define the root url of the application.
  { path: '/', component: HelloWorld },
  { path: '/about', component: About },
  { path: '/param', component: Param },
  { path: '/Profile/:username', component: profile, name: 'Profile' }
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  console.log('test');
  if (to.path === '/param') {
    console.log('HELLO');
    if (localStorage.getItem('user') == undefined) {
      var user = prompt('please enter your username');
      var pass = prompt('please enter your password');
      if (user == 'username' && pass == 'password') {
        localStorage.setItem('user', user);
        next();
      } else {
        alert('Wrong username and password, you do not have permission to access that route');
        return;
      }
    }
  }
  next();
});

new Vue({
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app