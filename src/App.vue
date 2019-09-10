<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
.el-popover {
  min-width: 90px;
  text-align: center;
  padding: 8px;
}
.el-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 !important;
  transform: translate(-50%, -50%);
  max-height: calc(100%-60px);
  max-width: calc(100%-80px);
  display: flex;
  flex-direction: column;
  > .el-dialog__body {
    overflow: auto;
  }
}
</style>