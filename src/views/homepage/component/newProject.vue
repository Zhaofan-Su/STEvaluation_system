<template>
  <el-dialog title="新建项目" :visible="dialogVisible" width="50%" :before-close="handleClose" center>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="项目名称">
        <el-input v-model="form.projectName" />
      </el-form-item>
      <el-form-item label="所在省份">
        <el-select v-model="form.province" placeholder="请选择省份">
          <el-option label="北京市" value="beijing" />
          <el-option label="上海市" value="shanghai" />
        </el-select>
        <!-- 少一个所在城市 -->
      </el-form-item>
      <el-form-item label="建筑类型">
        <el-radio-group v-model="form.type">
          <el-radio label="居住建筑" />
          <el-radio label="公共建筑" />
          <el-radio label="厂房" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="项目建筑面积">
        <el-input v-model="form.area" style="width: 200px">
          <template slot="suffix">m^2</template>
        </el-input>
      </el-form-item>
      <el-form-item label="建筑主题高度">
        <el-input v-model="form.height" type="text" style="width: 200px">
          <template slot="suffix">m</template>
        </el-input>
      </el-form-item>
      <el-form-item label="建设单位">
        <el-input v-model="form.construct" />
      </el-form-item>
      <el-form-item label="设计单位">
        <el-input v-model="form.design" />
      </el-form-item>
      <el-form-item label="施工单位">
        <el-input v-model="form.build" />
      </el-form-item>
      <el-form-item label="结构形式">
        <el-input v-model="form.structType" />
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleSave">保存</el-button>
      <el-button type="primary" @click="handleCancle">取消</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'newProject',
  props: {
    'dialogVisible': {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // dialogVisible: false,
      form: {
        projectName: "",
        province: "",
        type: "",
        area: "",
        height: "",
        construct: "",
        design: "",
        build: "",
        structType: ""
      }
    }
  },
  methods: {
    handleClose () {
      this.$confirm('是否创建项目？')
        .then(_ => {
          this.dialogVisible = false
          this.toEvaluate()
        }).catch(_ => {
          this.dialogVisible = false
          console.log('不保存')
        })
    },
    handleSave () {
      this.dialogVisible = false
      console.log('保存')
      this.toEvaluate()
    },
    handleCancle () {
      this.dialogVisible = false
      console.log('不保存')
    },
    toEvaluate () {
      this.$message({
        message: '成功创建项目',
        type: 'success'
      })
      this.$router.push('/projectInfo/index')
    }
  }
}
</script>