<template>
  <div>
    <h1>测试页面</h1>
    <SForm ref="sform" :schema="schema" v-model="model" />
    <button @click="onSubmit">提交</button>
    <p>
      {{ model }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    // 测试el-input
    // return {
    //   model: "abc",
    //   schema: {
    //     component: "el-input",
    //     props: {},
    //     label: "哈哈",
    //     type: String,
    //     rules: [
    //       {
    //         required: true,
    //         message: "请输入哈哈名称",
    //         trigger: "blur"
    //       }
    //     ],
    //     prop: "r"
    //   }
    // };
    // 测试sfc-select
    // return {
    //   model: "abc",
    //   schema: {
    //     component: "sfc-select",
    //     props: {},
    //     label: "哈哈",
    //     type: String,
    //     rules: [
    //       {
    //         required: true,
    //         message: "请选择哈哈名称",
    //         trigger: "change"
    //       }
    //     ],
    //     options: [
    //       {
    //         value: "选项1",
    //         label: "黄金糕"
    //       },
    //       {
    //         value: "选项2",
    //         label: "双皮奶"
    //       }
    //     ],
    //     prop: "r"
    //   }
    // };

    // 测试多个字段使用
    return {
      model: {},
      schema: {
        a: {
          component: "el-input",
          type: String,
          rules: [
            {
              required: true,
              message: "请输入a名称",
              trigger: "blur"
            }
          ],
          label: "a",
          prop: "a"
        },
        b: {
          component: "el-input",
          type: String,
          rules: [
            {
              required: true,
              message: "请输入b名称",
              trigger: "blur"
            }
          ],
          label: "b",
          prop: "b"
        },
        c: {
          component: "sfc-select",
          type: String,
          label: "城市",
          prop: "city",
          rules: [
            {
              required: true,
              message: "请选择城市名称",
              trigger: "change"
            }
          ],
          options: [
            {
              value: "选项1",
              label: "黄金糕"
            },
            {
              value: "选项2",
              label: "双皮奶"
            }
          ]
        }
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.sform
        .submit()
        .then(model => {
          console.log(model);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
