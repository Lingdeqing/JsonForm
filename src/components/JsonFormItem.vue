<template>
  <div class="json-form-item">
    <div
      v-if="
        !schema.isField && (schema.type === Object || schema.type === Array)
      "
    >
      <JsonFormItem
        v-for="(val, key) in schema.properties"
        :key="key"
        :rootModel="rootModel"
        :rootSchema="rootSchema"
        :schema="val"
        :model="model[key]"
      />
    </div>
    <el-form-item v-else :label="schema.label">
      {{ model }}
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "JsonFormItem",
  model: {
    prop: "model",
    event: "update-model"
  },

  filters: {
    str(o) {
      return JSON.stringify(o);
    }
  },
  props: {
    rootModel: {
      validator() {
        // 通过任意类型
        return true;
      }
    },
    model: {
      validator() {
        // 通过任意类型
        return true;
      }
    },
    schema: {
      type: Object,
      required: true
    },
    rootSchema: {
      type: Object,
      required: true
    }
  },
  methods: {}
};
</script>
