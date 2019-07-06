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
    return {
      model: {
        title: "",
        poster: ""
      },
      schema: {
        title: {
          component: "el-input",
          type: String,
          props: {
            class: "content-title",
            type: "text",
            placeholder: "输入合适的标题，拒绝标题党",
            maxlength: "20",
            showWordLimit: true
          },
          rules: [
            {
              required: true,
              message: "请输入文章标题",
              trigger: "blur"
            }
          ],
          label: "标题"
        },
        poster: {
          component: "sfc-image-uploader",
          type: String,
          rules: [
            {
              required: true,
              message: "请上传封面",
              trigger: "blur"
            }
          ],
          label: "封面"
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
