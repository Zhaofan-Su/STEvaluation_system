<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    // 页面加载时读取sessionStorage中的信息;
    // if (sessionStorage.getItem("store")) {
    //   this.$store.replaceState(
    //     Object.assign(
    //       {},
    //       this.$store.state,
    //       JSON.parse(sessionStorage.getItem("store"))
    //     )
    //   );
    // }
    // 页面刷新时将vuex中的信息保存到sessionStorage中;
    // window.addEventListener("beforeunload", () => {
    //   sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    // });
  },
  beforeDestroy() {
    // this.$store.dispatch("project/evaluate", false);
    // this.$store.commit("project/SET_EID");
    // sessionStorage.clear();
  }
};
</script>

<style lang="scss">
body {
  background-color: #f4f4f5;
}

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
  max-height: calc(100%-100px);
  max-width: calc(100%-80px);
  display: flex;
  flex-direction: column;
  > .el-dialog__body {
    overflow: auto;
    padding: 10px 40px 10px 30px;
  }
}
</style>