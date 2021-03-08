import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router' //自动回去找文件夹中的index.js文件

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')
