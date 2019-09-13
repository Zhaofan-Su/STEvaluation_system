<template>
  <div class="dialog-containe">
    <el-button type="text" class="e-button" @click="dialogVisible=true">新建项目</el-button>
    <el-dialog
      title="新建项目"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
      center
    >
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="项目名称">
          <el-input v-model="form.projectName" />
        </el-form-item>
        <el-form-item label="所在省份">
          <el-input v-model="form.province" placeholder="请输入省份" />
        </el-form-item>
        <el-form-item label="所在城市">
          <el-input v-model="form.city" placeholder="请输入城市" />
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
        <el-form-item label="评价截止时间">
          <el-date-picker
            v-model="pickTime"
            type="datetime"
            placeholder="选择结束时间"
            default-time="00:00:00"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="是否公开">
          <el-radio-group v-model="RWState">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="评价人员">
          <!-- <el-select
            v-model="sendTo"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="请选择参评人员"
            :remote-method="searchPeople"
            :loading="loading"
          >-->
          <el-select v-model="sendTo" multiple placeholder="请选择参评人员">
            <el-option
              v-for="people in peoples"
              :key="people.id"
              :label="people.name"
              :value="people.name"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="createProject">新建项目</el-button>
        <el-button type="primary" @click="dialogVisible=false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { setTimeout } from 'timers';

export default {
  name: "newProject",
  data () {
    return {
      dialogVisible: false,
      form: {
        projectName: "",
        province: "",
        city: "",
        type: "",
        area: "",
        height: "",
        construct: "",
        design: "",
        build: "",
        structType: ""
      },
      pickTime: "",
      RWState: 0,
      sendTo: [],
      // loading: false,
      peoples: [
        {
          id: '1',
          name: '张三'
        }, {
          id: '2',
          name: '李四'
        }
      ],
      // list: []
    };
  },
  computed: {

    ...mapGetters(['userId'])

  },
  created () {

  },
  mounted () {
    // this.list 
  },
  methods: {
    // searchPeople (query) {
    //   if (query === "") {
    //     this.loading = true
    //     setTimeout(() => {
    //       this.loading = false
    //       this.peoples = this.list.filter(item => {
    //         return item.name.indexOf(query.toLowerCase()) > -1
    //       })
    //     }, 200)
    //   } else {
    //     this.peoples = []
    //   }

    // },
    handleClose () {
      let _this = this
      this.$confirm("是否创建项目？")
        .then(_ => {
          this.dialogVisible = false;
          this.createProject();
        })
        .catch(_ => {
          this.dialogVisible = false;
        });
    },
    handleCancle () {
      this.dialogVisible = false;
    },
    createProject () {
      // 用户进入评估状态
      // this.$store.dispatch('project/evaluate', true);
      // 对话框消失
      this.dialogVisible = false;
      // 成功创建提示
      this.$message({
        message: "成功创建项目",
        type: "success"
      });
      // 表单内容暂存
      let endTime
      if (this.pickTime == "") {
        endTime = new Date('10000', '0', 0)
      }
      else {
        endTime = this.pickTime
      }
      let newCase = {
        evaluate: true,
        info: this.form,
        createTime: new Date().toJSON(),
        endTime: endTime.toJSON(),
        creator: this.userId,
        RWState: 0,
        sendTo: this.sendTo
      };

      this.$store.dispatch('project/updateProject', newCase);
      this.$router.push("/projectInfo");
    },
  }
};
</script>