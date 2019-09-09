<template>
  <div class="dashboard-editor-container">
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
      <el-form-item id="save">
        <el-button type="primary" @click="onSave">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  name: "DashboardEditor",
  data() {
    return {
      // emptyGif: 'https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3',
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
    };
  },
  computed: {
    // ...mapGetters([
    //   'name',
    //   'avatar',
    //   'roles'
    // ])
  },
  methods: {
    onSave() {
      // 用户所填信息先保存到网页
    }
  }
};
</script>

<style lang="scss" scoped>
.emptyGif {
  display: block;
  width: 45%;
  margin: 0 auto;
}

.dashboard-editor-container {
  min-height: 100vh;
  padding: 50px 200px 0px;
}

#save {
  text-align: center;
}
</style>
