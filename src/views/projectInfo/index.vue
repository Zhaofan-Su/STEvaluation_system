<template>
  <div class="project-editor-container">
    <lock :_locked="locked" :_popOverShow="true" v-on:click.native="locked=!locked" class="lock" />
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="项目名称">
        <el-input v-model="form.projectName" :disabled="locked" />
      </el-form-item>
      <el-form-item label="所在省份">
        <el-input v-model="form.province" placeholder="请输入所在省份" :disabled="locked"></el-input>
      </el-form-item>
      <el-form-item label="所在城市">
        <el-input v-model="form.city" placeholder="请输入所在城市" :disabled="locked"></el-input>
      </el-form-item>
      <el-form-item label="建筑类型">
        <el-radio-group v-model="form.type" :disabled="locked">
          <el-radio label="居住建筑" />
          <el-radio label="公共建筑" />
          <el-radio label="厂房" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="项目建筑面积">
        <el-input v-model="form.area" style="width: 200px" :disabled="locked">
          <template slot="suffix">m^2</template>
        </el-input>
      </el-form-item>
      <el-form-item label="建筑主题高度">
        <el-input v-model="form.height" type="text" style="width: 200px" :disabled="locked">
          <template slot="suffix">m</template>
        </el-input>
      </el-form-item>
      <el-form-item label="建设单位">
        <el-input v-model="form.construct" :disabled="locked" />
      </el-form-item>
      <el-form-item label="设计单位">
        <el-input v-model="form.design" :disabled="locked" />
      </el-form-item>
      <el-form-item label="施工单位">
        <el-input v-model="form.build" :disabled="locked" />
      </el-form-item>
      <el-form-item label="结构形式">
        <el-input v-model="form.structType" :disabled="locked" />
      </el-form-item>
      <el-form-item label="评价截止时间">
        <el-date-picker
          v-model="pickTime"
          type="datetime"
          placeholder="选择结束时间"
          default-time="00:00:00"
          :disabled="locked"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="是否公开">
        <el-radio-group v-model="RWState" :disabled="locked">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="评价人员">
        <el-select v-model="sendTo" multiple placeholder="请选择参评人员" :disabled="locked">
          <el-option
            v-for="people in sendTo"
            :key="people.id"
            :label="people.name"
            :value="people.name"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item id="save">
        <el-button type="primary" @click="onSave">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Lock from '@/components/Lock';

export default {
  name: "ProjectInfo",
  components: { Lock },
  data () {
    return {
      locked: true,
      endTime: ''
    };
  },
  computed: {
    ...mapGetters({
      evaluate: 'evaluate',
      form: 'projectInfo',
      pickTime: 'endTime',
      RWState: 'RWState',
      sendTo: 'sendTo'
    })
  },
  created () {
    if (!this.evaluate) {
      // 此处进行判断
      // alert("还没有选择项目");
    }
  },
  methods: {
    onSave () {
      // 用户所填信息先保存到网页
      let updating = {
        evaluate: this.evaluate,
        info: this.form,
        endTime: this.endTime,
        RWState: this.RWState,
        sendTo: this.sendTo,
      }
      this.$store.dispatch('project/updateProject', updating)
      this.locked = true
      this.$message({
        message: '项目信息保存成功',
        type: 'success'
      })
    },
  }
};
</script>

<style lang="scss" scoped>
.project-editor-container {
  min-height: 100vh;
  padding: 50px 200px 0px;

  .lock {
    position: absolute;
    top: 5%;
    left: 5%;
  }

  #save {
    text-align: center;
  }
}
</style>
