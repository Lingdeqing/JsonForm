<template>
  <div>
    <h1>单个引入自定义控件</h1>
    <SForm ref="sform" :schema="schema" v-model="model" />
    <button @click="onSubmit">提交</button>
    <p>
      {{ model }}
    </p>
  </div>
</template>

<script>
import RawInput from "./customControls/RawInput";
export default {
  data() {
    return {
      model: {
        title: "",
        pics: [],
        category: "",
        customInput: ""
      },
      schema: {
        pics: {
          component: "sfc-image-uploader",
          props: {
            multiple: true
          },
          rules: [
            {
              required: true,
              message: "请上传图片",
              trigger: "blur"
            }
          ],
          label: "配图"
        },
        title: {
          component: "el-input",
          props: {
            class: "content-title",
            type: "text",
            placeholder: "输入合适的标题，拒绝标题党",
            maxlength: "20",
            showWordLimit: true
          },
          label: "标题"
        },
        customInput: {
          component: RawInput,
          props: {
            type: "text",
            placeholder: "自定义组件"
          },
          rules: [
            {
              required: true,
              message: "请输入文字",
              trigger: "blur"
            }
          ],
          label: "自定义输入框"
        },
        category: {
          component: "el-cascader",
          props: {
            class: "pvue-cascader",
            options: [
              {
                value: "1",
                label: "商品大类",
                children: [
                  {
                    value: "1-1",
                    label: "商品小类1"
                  },
                  {
                    value: "1-2",
                    label: "商品小类2"
                  },
                  {
                    value: "1-3",
                    label: "商品小类3"
                  },
                  {
                    value: "1-4",
                    label: "商品小类4"
                  }
                ]
              }
            ],
            popperClass: "pvue-cascader-popper",
            placeholder: "请选择"
          },
          rules: [
            {
              required: true,
              message: "请选择类目",
              trigger: "change"
            }
          ],
          label: "类目"
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
