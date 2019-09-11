<template>
  <div class="app-container">
    <h2>3.2.9&nbsp;资源节约与环保效果</h2>
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
  name: "Standard",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "节能效果",
          children_question: [
            {
              aspect:
                "制定并实施施工节能和用能方案，检查并记录施工能耗，与传统方式相比，现场施工能耗指示节约明显",
              satisfy: true,
              max_score: "5",
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
          title: "节水效果",
          children_question: [
            {
              aspect:
                "制定并实施施工节水与用水方案，检测并记录施工水耗，与传统方式相比，现场施工节约用水指标达到50%以上",
              satisfy: true,
              max_score: "5",
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
          title: "节材效果",
          children_question: [
            {
              aspect:
                "采用工厂化钢筋加工方法，降低现场加工的钢筋损耗率，采用工厂加工的钢筋不低于80%，钢筋损耗不大于2.0%",
              satisfy: true,
              max_score: "3",
              score: "0",
              description: ""
            },
            {
              aspect:
                "钢结构建筑采用无模板和无支撑式楼面板施工，采用预制成品楼板或钢筋桁架式组合楼板",
              satisfy: true,
              max_score: "2",
              score: "0",
              description: ""
            },
            {
              aspect:
                "最大限度地采用预制构件，减少预拌混凝土的损耗，混凝土的损耗率不大于1.5%",
              satisfy: true,
              max_score: "5",
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
          id: 4,
          title: "环保效果",
          children_question: [
            {
              aspect:
                "施工现场有整洁检查计划、检查记录和专人负责；施工现场有建筑垃圾控制计划和专人负责；施工垃圾减少50%以上；施工噪声不高于现行国家标准《建筑施工场界环境噪声排放标准》GB12532相关规定",
              satisfy: true,
              max_score: "5",
              score: "0",
              dialogVisible: false
            }
          ],

          evaluation_index: "",
          description: "",
          locked: false,
          popOverShow: false
        }
      ]
    };
  },
  methods: {
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