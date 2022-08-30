import { createApp } from "vue";
import { globalRegister } from "./global";

// import "./service/axios_demo";
import "element-plus/dist/index.css";
// import "element-plus/theme-chalk/base.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "./assets/css/index.less";

import { setupStore } from "./store";

const app = createApp(App);
// 注册element-plus/其他
app.use(globalRegister);
app.use(router);
app.use(store);
setupStore();
app.mount("#app");
