// =========================================================
// * Vue Material Kit - v1.2.2
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-kit
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-kit/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import MaterialKit from "./plugins/material-kit";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//统一引入API
import * as API from '@/api';

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.use(MaterialKit);

const NavbarStore = {
    showNavbar: false
};

Vue.mixin({
    data() {
        return {
            NavbarStore
        };
    }
});

new Vue({
    router,
    beforeCreate() {
      Vue.prototype.$bus = this;
      Vue.prototype.$API = API
    },
    render: h => h(App)
}).$mount("#app");
