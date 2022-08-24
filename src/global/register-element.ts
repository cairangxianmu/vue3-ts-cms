import { App } from "vue";
// import "element-plus/theme-chalk/base.css";
import {
    ElButton,
    ElCheckbox,
    ElForm,
    ElFormItem,
    ElInput,
    ElLink,
    ElRadio,
    ElTabPane,
    ElTabs,
} from "element-plus/lib";

import { User, Iphone } from "@element-plus/icons-vue";
const components = [
    ElButton,
    ElCheckbox,
    ElForm,
    ElFormItem,
    ElInput,
    ElLink,
    ElRadio,
    ElTabPane,
    ElTabs,
    User,
    Iphone,
];

export default function (app: App): void {
    for (const component of components) {
        app.component(component.name, component);
    }
}
