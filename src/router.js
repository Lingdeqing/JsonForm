import Vue from "vue";
import Router from "vue-router";
import Test from "./views/Test.vue";
import e1 from "./views/examples/e1.vue";
import e2 from "./views/examples/e2.vue";
import e3 from "./views/examples/e3.vue";

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
    },
    {
      path: "/e2",
      name: "e2",
      component: e2
    },
    {
      path: "/e3",
      name: "e3",
      component: e3
    }
  ]
});
