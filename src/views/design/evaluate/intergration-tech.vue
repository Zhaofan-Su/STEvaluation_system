<template>
  <div class="app-container">
    <h2>2.2.5&nbsp;建筑集成技术设计评分</h2>
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
      <el-card
        v-for="(i,index) in item.children_question"
        :key="index"
        class="children-question"
        shadow="never"
      >
        <div slot="header" class="children-header">
          <div>{{ i.aspect }}.（{{ i.max_score }}分）</div>
        </div>
        <el-form ref="form" :model="i" label-width="100px">
          <el-form-item label="是否满足">
            <el-radio-group v-model="i.satisfy">
              <el-radio :label="true" :disabled="item.locked">是</el-radio>
              <el-radio :label="false" :disabled="item.locked">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-if="!i.satisfy" label="不满足简述">
            <el-input v-model="i.description" label="不满足简述" type="textarea" />
          </el-form-item>
        </el-form>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "IntergrationTech",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "外维护结构集成技术",
          children_question: [
            {
              aspect:
                "采用预制结构墙板、保温、外饰面一体化外维护系统，满足结构、保温、防渗、装饰要求",
              satisfy: true,
              max_score: "4",
              score: "0",

              description: ""
            },
            {
              aspect:
                "采用预制结构墙板、保温、外饰面一体化维护系统，满足结构、保温、防渗、装饰要求",
              satisfy: true,
              max_score: "2",
              score: "0",
              description: ""
            }
          ],

          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 2,
          title: "室内装修集成技术",
          children_question: [
            {
              aspect:
                "项目室内装修与建筑结构，机电设备一体化设计，采用管线与结构分离等系统集成技术",
              satisfy: true,
              max_score: "3",
              score: "0",
              description: ""
            }
          ],

          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 3,
          title: "机电设备集成技术",
          children_question: [
            {
              aspect: "机电设备管线系统采用集中布置，管线及点位预留、预埋到位",
              satisfy: true,
              max_score: "3",
              score: "0",
              description: ""
            }
          ],

          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        }
      ]
    };
  },
  methods: {
    // 这个项目判断得分的时候，要注意第一个问题，是互斥的
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