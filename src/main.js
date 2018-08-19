// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { CreateRouter } from './router'
import { create } from 'domain';

Vue.config.productionTip = false

/* eslint-disable no-new */

export function createApp(){
  const router=new CreateRouter();
  const app=new Vue({
    // el: '#app',
    router,
    render:h=>h(App)
    // components: { App },
    // template: '<App/>'
  })
  return {app,router}
}