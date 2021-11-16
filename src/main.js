import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin.js'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

const firebaseConfig = {
  apiKey: "AIzaSyCB5IQbNOgLc-DJ0nd1pEl4pG2kcvSR55U",
  authDomain: "vue-crm-cb582.firebaseapp.com",
  projectId: "vue-crm-cb582",
  storageBucket: "vue-crm-cb582.appspot.com",
  messagingSenderId: "105291034588",
  appId: "1:105291034588:web:a65305de8c3b4655756919",
  measurementId: "G-WKVTXCT84H"
}

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})