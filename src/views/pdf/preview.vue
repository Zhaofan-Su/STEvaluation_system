<template>
  <div>
    <div>
      <el-button @click="print" class="print" type="primary">打印</el-button>
    </div>

    <detail :eId="this.$route.params.id"></detail>
  </div>
</template>

<script>
import detail from './detail'
export default {
  name: 'preview',
  components: {
    detail
  },
  data () {
    return {
    }
  },
  methods: {
    print () {
      // this.$router.push(`/reportDownload/${this.$route.params.id}`)
      let printHtml = this.$router.resolve({
        path: '/reportDownload',
        query: { id: this.$route.params.id }
      })
      window.open(printHtml.href, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.print {
  position: fixed;
  right: 0px;
  top: 80px;
}
</style>