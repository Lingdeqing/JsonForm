<template>
  <Item :multiple="false" :src="img" @set="setImage" />
</template>
<script>
import mx from "./mixin";

export default {
  mixins: [mx],
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      img: ""
    };
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        if (this.img !== this.value) {
          this.img = this.value;
        }
      }
    }
  },
  methods: {
    emitInput() {
      this.$emit("input", this.img);
      this.triggerValidate();
    }
  }
};
</script>
