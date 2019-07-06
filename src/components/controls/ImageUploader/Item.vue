<template>
  <div class="pvue-upload-image-item">
    <template v-if="multiple">
      <template v-if="src">
        <img class="pvue-upload-img" :src="src" alt="" />
        <RemoveMask @remove="$emit('remove', index, $event)" />
      </template>
      <template v-else>
        <i class="pvue-upload-add-icon" />
        <input
          type="file"
          name="file"
          class="pvue-upload-input"
          @change="$emit('add', index, $event)"
          accept="image/*"
        />
      </template>
    </template>
    <template v-else>
      <template v-if="src">
        <img class="pvue-upload-img" :src="src" alt="" />
        <div class="pvue-upload-single-mask">更换</div>
        <input
          type="file"
          name="file"
          class="pvue-upload-input"
          @change="$emit('set', $event)"
          accept="image/*"
        />
      </template>
      <template v-else>
        <i class="pvue-upload-add-icon" />
        <input
          type="file"
          name="file"
          class="pvue-upload-input"
          @change="$emit('set', $event)"
          accept="image/*"
        />
      </template>
    </template>
  </div>
</template>

<script>
import RemoveMask from "./RemoveMask";
export default {
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      default: ""
    },
    index: {
      type: Number,
      default: 0
    }
  },
  components: {
    RemoveMask
  }
};
</script>

<style lang="scss">
.pvue-upload {
  position: relative;
  display: inline-block;
  width: 160px;
  height: 90px;
  vertical-align: top;
}
.pvue-upload-image-item {
  width: 160px;
  height: 90px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  box-sizing: border-box;
}
.pvue-upload-add-icon {
  position: relative;
  width: 30px;
  height: 30px;
  &::before,
  &::after {
    position: absolute;
    left: 0;
    top: 13.5px;
    content: "";
    width: 30px;
    height: 3px;
    background: #d8d8d8;
    border-radius: 8px;
  }
  &::after {
    transform: rotate(90deg);
  }
}
.pvue-upload-input {
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.pvue-upload-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.pvue-upload-single-mask {
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 22px;
  font-family: PingFangSC-Regular;
  font-size: 11px;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
}
</style>
