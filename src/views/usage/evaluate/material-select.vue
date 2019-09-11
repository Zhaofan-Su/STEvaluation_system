<template>
  <div class="app-container">
    <h2>4.2.4&nbsp;建筑材料的选用（此页前几项的评分标准好像没有给）</h2>
    <el-card v-for="item in items" :key="item.id" class="evaluation-item" shadow="hover">
      <div slot="header" class="clearfix">
        <span class="number">{{ item.id }}.&nbsp;{{ item.title }}</span>
        <div class="options">
          <el-button
            type="primary"
            circle
            icon="el-icon-document"
            size="mini"
            @click="item.dialogVisible=true"
          />
          <!-- 弹出框，提示具体的评价指标 -->
          <el-dialog
            :title="item.title+'--评价指标及要求'"
            :visible.sync="item.dialogVisible"
            width="30%"
            :before-close="handleClose"
            center
          >
            <span>{{ item.evaluation_index }}</span>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="item.dialogVisible=false">确定</el-button>
            </span>
          </el-dialog>

          <el-popover
            v-if="!item.locked"
            v-model="item.popOverShow"
            placement="bottom"
            width="25"
            trigger="manual"
            content="已解锁"
          >
            <el-button
              slot="reference"
              type="primary"
              circle
              icon="el-icon-unlock"
              size="mini"
              @click="handleLock(item)"
            />
          </el-popover>
          <el-popover
            v-else
            v-model="item.popOverShow"
            placement="bottom"
            width="25"
            trigger="manual"
            content="已锁定"
          >
            <el-button
              slot="reference"
              type="warning"
              circle
              icon="el-icon-lock"
              size="mini"
              @click="handleLock(item)"
            />
          </el-popover>
        </div>
      </div>
      <el-card class="children-question" shadow="never">
        <div slot="header" class="children-header">
          <div>{{ item.aspect }}.（{{ item.max_score }}分）</div>
        </div>
        <el-form ref="form" :model="item" label-width="100px">
          <el-form-item v-if="item.id==1" label>
            <el-radio-group v-model="item.score">
              <el-radio :label="0">满足</el-radio>
              <el-radio :label="10">不满足</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-else-if="item.id==2" label>
            <el-radio-group v-model="item.score">
              <el-radio :label="6" :disabled="item.locked">住宅建筑土建与装修一体化设计的户数比例达到30%</el-radio>
              <el-radio :label="10" :disabled="item.locked">住宅建筑土建与装修一体化设计的户数比例达到100%</el-radio>
              <el-radio :label="6" :disabled="item.locked">公共建筑公共部位土建与装修一体化设计</el-radio>
              <el-radio :label="10" :disabled="item.locked">所有部位均土建与装修一体化设计</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item v-else-if="item.id==3" label>
            <el-checkbox-group v-model="item.checklist">
              <el-checkbox :label="2">合理采用清水混凝土</el-checkbox>
              <el-checkbox :label="2">采用耐久性好、易维护的外立面材料%</el-checkbox>
              <el-checkbox :label="1">采用耐久性好、易维护的室内装饰装修材料</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "MaterialSelect",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "",
          aspect: "对地基基础、结构体系、结构构件进行优化设计，达到节材效果",
          max_score: "5",
          score: "0",
          description: "",
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 2,
          title: "",
          aspect: "土建工程与装修工程一体化设计",
          max_score: "10",
          score: "0",
          description: "",
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 3,
          title: "",
          aspect: "合理采用耐久性好、易维护的装饰装修建筑材料",
          max_score: "5",
          score: "0",
          description: "",
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false,
          checklist: []
        }
      ]
    };
  },
  methods: {
    // 计算分数的时候，第一项可能要先获取项目资料
    handleClose() {
      this.$confirm("确认关闭?")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleLock(item) {
      item.popOverShow = !item.popOverShow;
      item.locked = !item.locked;
      setTimeout(() => {
        item.popOverShow = !item.popOverShow;
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.app-container {
  h2 {
    text-align: center;
  }

  .evaluation-item {
    width: 60%;
    margin: 10px auto;

    >>> .el-card__header {
      padding: 10px 20px;
    }
    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both;
    }
    .clearfix {
      overflow: hidden;
      position: relative;
      .number {
        font-weight: bold;
        position: absolute;
        bottom: 0;
      }
      .options {
        float: right;
        bottom: 0;
      }
    }

    .children-question {
      width: 100%;
      border: none;

      >>> .el-card__header {
        border-bottom: 0px;
        padding: 0px 20px;
      }
      >>> .el-card__body {
        padding: 10px 20px;
      }
    }
  }
}
</style>