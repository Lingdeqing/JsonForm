import Item from "./Item";

function uploadImage(file) {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append("file", file);
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function() {
      // document.querySelector('#progress').innerHTML = (event.loaded / event.total * 100 | 0);
    };
    xhr.onload = function() {
      if (xhr.status == 200) {
        const data = JSON.parse(xhr.responseText);
        if (data.code === 0) {
          resolve(data.data);
        } else {
          reject(data.msg);
        }
      } else {
        reject("上传失败");
      }
    };
    xhr.open("POST", "http://www.yaolin.win:23000/api/media/pic/upload");
    xhr.send(formData);
  });
}

export default {
  props: {
    uploadOptions: {
      type: Object,
      default() {
        return {
          isSt: true,
          service: "test",
          compress: false,
          extension: ""
        };
      }
    }
  },
  components: {
    Item
  },
  methods: {
    triggerValidate() {
      if (this.$parent.$options.componentName === "ElFormItem") {
        this.$parent.$emit("el.form.change", this.img || this.imgs);
      }
    },
    async setImage(e, index) {
      const file = e.target.files[0];
      e.target.value = "";
      uploadImage(file)
        .then(url => {
          if (typeof index === "number") {
            this.imgs[index] = url;
            this.imgs.push("");
          } else {
            this.img = url;
          }

          this.emitInput();
        })
        .catch(e => {
          this.$message.error("设置图片出错: " + e);
        });
    }
  }
};
