<template>
  <input v-bind="$props" :value="value" @input="onInput" @blur="onBlur" />
</template>

<script>
import triggerValidate from "../../../utils/triggerValidate";
export default {
  name: "raw-input",
  props: {
    value: null,
    schema: {
      type: Object,
      required: true
    }
  },
  methods: {
    onInput(e) {
      const value = e.target.value;
      this.$emit("input", value);
    },
    onBlur() {
      triggerValidate.call(this, this.value, "blur");
    }
  }
};
</script>
