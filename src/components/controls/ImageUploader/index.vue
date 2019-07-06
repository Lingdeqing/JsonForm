<template>
  <div>
    <component :is="uploader" v-bind="$props" v-on="$listeners" />
  </div>
</template>
<script>
import SingleUploader from "./single";
import MultipleUploader from "./multiple";

export default {
  name: "sfc-image-uploader",
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
    },
    multiple: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Array, String],
      default: ""
    }
  },
  components: {
    SingleUploader,
    MultipleUploader
  },
  computed: {
    uploader() {
      return this.multiple ? MultipleUploader : SingleUploader;
    }
  }
};
</script>

<style lang="scss"></style>
