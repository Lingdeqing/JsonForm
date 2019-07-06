<template>
  <div class="pvue-remove-mask">
    <button type="button" @click="$emit('remove')">删除</button>
  </div>
</template>

<style lang="scss">
.pvue-remove-mask {
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);

  button {
    box-sizing: border-box;
    border: 0;
    cursor: pointer;
    position: absolute;
    margin: auto;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 62px;
    height: 24px;
    line-height: 24px;
    background: #f48080;
    border-radius: 2px;
    font-family: PingFangSC-Regular;
    font-size: 10px;
    color: #ffffff;
    text-align: center;
    outline: none;
  }
}

:hover > .pvue-remove-mask {
  display: block;
}
</style>
