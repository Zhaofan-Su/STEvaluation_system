<template>
  <div>
    <div>
      <el-tooltip content="下载报告" effect="dark" placement="bottom">
        <el-button @click="print" class="print" type="primary" icon="el-icon-download" circle></el-button>
      </el-tooltip>
    </div>

    <detail :eId="this.$route.params.id"></detail>
  </div>
</template>

<script>
import detail from "./detail";
export default {
  name: "preview",
  components: {
    detail
  },
  data() {
    return {};
  },
  methods: {
    print() {
      // this.$router.push(`/reportDownload/${this.$route.params.id}`)
      let printHtml = this.$router.resolve({
        path: "/reportDownload",
        query: { id: this.$route.params.id }
      });
      window.open(printHtml.href, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
.print {
  position: fixed;
  right: 40px;
  bottom: 40px;
  padding: 15px;
  font-size: 1.2em;
}
</style>