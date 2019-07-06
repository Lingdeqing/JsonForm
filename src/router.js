import Vue from "vue";
import Router from "vue-router";
import Test from "./views/Test.vue";
import e1 from "./views/examples/e1.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "test",
      component: Test
    },
    {
      path: "/e1",
      name: "e1",
      component: e1
    }
  ]
});
