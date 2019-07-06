export default function(value, event = "change") {
  if (this.$parent.$options.componentName === "ElFormItem") {
    this.$parent.$emit("el.form." + event, value);
  }
}
