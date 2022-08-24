import { createApp } from "vue";
import { globalRegister } from "./global";
// import "./service/axios_demo";

// import ElementPlus from "element-plus";
// import { ElButton } from "element-plus/lib";
import "element-plus/dist/index.css";
// import "element-plus/theme-chalk/base.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import hyRequest from "./service";
import "normalize.css";
import "./assets/css/index.less";

import { setupStore } from "./store";

const app = createApp(App);
// app.component(ElButton.name, ElButton);
// 注册element-plus/其他
app.use(globalRegister);
app.use(router);
app.use(store);
setupStore();
// app.use(ElementPlus, { size: "small", zIndex: 3000 });
app.mount("#app");

// console.log(process.env.NODE_ENV);

hyRequest.request({
    url: "/home/multidata",
    method: "GET",
});
