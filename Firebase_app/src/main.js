import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import axios from 'axios'
import Vee from 'vee-validate'

Vue.use(axios);
Vue.use(Vee);

Vue.component('app-servers-st',Home);
new Vue({
  el: '#app',
  render: h => h(App)
})
