<template>
  <div class="project-editor-container">
    <!-- <lock :_locked="locked" :_popOverShow="true" v-on:click.native="locked=!locked" class="lock" /> -->
    <el-card class="info-container">
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="项目名称" prop="projectName">
          <el-input v-model="form.projectName" :disabled="locked" />
        </el-form-item>
        <el-form-item label="所在省份">
          <el-input v-model="form.province" placeholder="请输入所在省份" :disabled="locked"></el-input>
        </el-form-item>
        <el-form-item label="所在城市">
          <el-input v-model="form.city" placeholder="请输入所在城市" :disabled="locked"></el-input>
        </el-form-item>
        <el-form-item label="建筑类型" prop="type">
          <el-radio-group v-model="form.type" :disabled="locked">
            <el-radio label="居住建筑" value="居住建筑" />
            <el-radio label="公共建筑" value="公共建筑" />
            <el-radio label="厂房" value="厂房" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="项目建筑面积" prop="area">
          <el-input v-model.number="form.area" style="width: 200px" :disabled="locked">
            <template slot="suffix">m^2</template>
          </el-input>
        </el-form-item>
        <el-form-item label="建筑主题高度" prop="height">
          <el-input
            v-model.number="form.height"
            type="text"
            style="width: 200px"
            :disabled="locked"
          >
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
        <!-- <el-form-item label="评价截止时间">
          <el-date-picker
            v-model="endTime"
            type="datetime"
            placeholder="选择结束时间"
            default-time="00:00:00"
            :disabled="locked"
          ></el-date-picker>
        </el-form-item>-->
        <el-form-item label="是否公开" prop="RWState">
          <el-radio-group v-model="RWState" :disabled="locked">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
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
      </el-form>
      <div id="save">
        <el-button type="primary" @click="onSave">保存</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import Lock from '@/components/Lock';

export default {
  name: "ProjectInfo",
  // components: { Lock },
  data() {
    return {
      locked: false,
      form: {},
      // endTime: "",
      RWState: 0,
      sendTo: [],
      rules: {
        projectName: [
          { required: true, message: "请输入项目名称", trigger: "blur" }
        ],
        type: [{ required: true, message: "请选择建筑类型", trigger: "blur" }],
        area: [
          { required: true, message: "请输入建筑面积", trigger: "blur" },
          { type: "number", message: "必须输入数字" }
        ],
        height: [
          { required: true, message: "请输入建筑面积", trigger: "blur" },
          { type: "number", message: "必须输入数字" }
        ]
      }
    };
  },
  computed: {
    ...mapGetters({
      project: "project"
    })
  },
  created() {
    this.form = this.project.info;
    // this.endTime = this.project.endTime;
    this.RWState = this.project.RWState;
    this.sendTo = this.project.sendTo;
  },
  methods: {
    onSave() {
      // 用户所填信息先保存到网页
      // if (this.endTime == "") {
      //   this.endTime = new Date("10000", "0", 0);
      // }
      let updating = {
        evaluate: true,
        info: this.form,
        createTime: this.project.createTime,
        creator: this.project.creator,
        // endTime: this.endTime.toJSON(),
        RWState: this.RWState,
        sendTo: this.sendTo
      };
      this.$store.dispatch("project/updateProject", updating);
      // this.locked = true
      this.$message({
        message: "项目信息保存成功",
        type: "success"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.project-editor-container {
  min-height: 100vh;
  padding: 2% 20%;
  .lock {
    position: absolute;
    top: 5%;
    left: 5%;
  }
  #save {
    text-align: center;
    padding: 20px auto;
  }
}
</style>
