<template>
  <el-select v-bind="$props" :value="value" @change="$emit('input', $event)">
    <el-option
      v-for="item in schema.options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: "sfc-select",
  props: {
    value: null,
    schema: {
      type: Object,
      required: true
    }
  }
};
</script>
