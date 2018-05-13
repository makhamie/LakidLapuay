// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
// import 'bulma/css/bulma.css'
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI, {locale})

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
