// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRx from 'vue-rx'
import router from './router'
// import { Observable } from 'rxjs/Observable'
// import { Subscription } from 'rxjs/Subscription' // Disposable if using RxJS4
// import { Subject } from 'rxjs/Subject' // required for domStreams option
import Rx from 'rxjs/Rx'
// import VueRx from 'vue-rx'

// tada!
Vue.use(VueRx, Rx)
// Vue.use(VueRx, {
//   Observable,
//   Subscription,
//   Subject
// })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
