<template>
  <div class="pvue-upload-image-list">
    <Item
      v-for="(img, index) in imgs"
      :key="index"
      :index="index"
      :multiple="true"
      :src="img"
      @add="addImage"
      @remove="removeImage"
    />
  </div>
</template>
<script>
import mx from "./mixin";

export default {
  mixins: [mx],
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      imgs: [""]
    };
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        let imgs = this.imgs.slice(0, -1);
        if (JSON.stringify(imgs) !== JSON.stringify(this.value)) {
          this.imgs = [...this.value, ""];
        }
      }
    }
  },
  methods: {
    async addImage(index, e) {
      this.setImage(e, index);
    },
    async removeImage(index) {
      this.imgs.splice(index, 1);
      this.emitInput();
    },
    emitInput() {
      this.$emit("input", this.imgs.slice(0, -1));
      this.triggerValidate();
    }
  }
};
</script>

<style lang="scss">
.pvue-upload-image-list {
  display: flex;
  flex-wrap: wrap;
  .pvue-upload-image-item {
    flex: none;
    margin: 0 10px 5px 0;
  }
}
</style>
