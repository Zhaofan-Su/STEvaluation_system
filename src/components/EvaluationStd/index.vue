<template>
  <div class="description">
    <el-button
      type="primary"
      circle
      icon="el-icon-document"
      size="mini"
      @click="dialogVisible=true"
    ></el-button>
    <!-- 弹出框，提示具体的评价指标 -->
    <el-dialog :title="aspect+'--评价指标及要求'" :visible.sync="dialogVisible" width="30%" center>
      <span>{{evaluation_index}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible=false">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'evaluationStd',
  props: {
    _aspect: {
      default: '',
      type: String
    },
    _evaluation_index: {
      default: '',
      type: String
    },
  },
  data () {
    return {
      dialogVisible: false,
      aspect: this._aspect,
      evaluation_index: this._evaluation_index
    }
  },
  methods: {
    // handleClose (done) {
    //   this.$confirm("确认关闭?")
    //     .then(_ => {
    //       done();
    //     })
    //     .catch(_ => {

    //     });
    // },
  }
}
</script>