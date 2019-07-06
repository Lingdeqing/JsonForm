import Vue from "vue";
import SForm from "./SForm";
// import JsonForm from "./JsonForm";
// import JsonFormItem from "./JsonFormItem";

import Select from "./controls/Select";
// 简单表单组件
Vue.component(SForm.name, SForm);

// 无限嵌套表单组件
// Vue.component(JsonForm.name, JsonForm);
// Vue.component(JsonFormItem.name, JsonFormItem);

// 表单项控件
Vue.component(Select.name, Select);
export default {
  install() {}
};
