/* eslint-disable */
//ts本身不认识.vue模块，通过封装成模块解决
declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
