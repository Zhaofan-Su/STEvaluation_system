<template>
  <div class="app-container">
    <h2>2.2.2&nbsp;钢结构建筑构件预制率</h2>
    <el-card v-for="item in items" :key="item.id" class="evaluation-item" shadow="hover">
      <div slot="header" class="clearfix">
        <span class="number">{{item.id}}.&nbsp;{{item.title}}</span>
        <div class="options">
          <el-button
            type="primary"
            circle
            icon="el-icon-document"
            size="mini"
            @click="item.dialogVisible=true"
          ></el-button>
          <!-- 弹出框，提示具体的评价指标 -->
          <el-dialog
            :title="item.title+'--评价指标及要求'"
            :visible.sync="item.dialogVisible"
            width="30%"
            :before-close="handleClose"
            center
          >
            <span>{{item.evaluation_index}}</span>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="item.dialogVisible=false">确定</el-button>
            </span>
          </el-dialog>

          <el-popover
            v-if="!item.locked"
            placement="bottom"
            width="25"
            trigger="manual"
            content="已解锁"
            v-model="item.popOverShow"
          >
            <el-button
              type="primary"
              circle
              icon="el-icon-unlock"
              size="mini"
              slot="reference"
              @click="handleLock(item)"
            ></el-button>
          </el-popover>
          <el-popover
            v-else
            placement="bottom"
            width="25"
            trigger="manual"
            content="已锁定"
            v-model="item.popOverShow"
          >
            <el-button
              type="warning"
              circle
              icon="el-icon-lock"
              size="mini"
              slot="reference"
              @click="handleLock(item)"
            ></el-button>
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
          <div>{{i.aspect}}.（{{i.max_score}}分）</div>
        </div>
        <el-form ref="form" :model="i" label-width="100px">
          <!-- <el-form-item label="是否满足">
            <el-radio-group v-model="i.satisfy">
              <el-radio :label="true" :disabled="item.locked">是</el-radio>
              <el-radio :label="false" :disabled="item.locked">否</el-radio>
            </el-radio-group>
          </el-form-item>-->
          <el-form-item label="预制率">
            <el-input v-model="i.indicator" style="width:40%" placeholder="请输入预制率"></el-input>
          </el-form-item>
          <el-form-item label="得分">
            <!-- <el-radio-group v-model="i.score">
              <el-radio :label="10" :disabled="item.locked">预制率≥80%</el-radio>
              <el-radio :label="8" :disabled="item.locked">65%≤预制率&lt;80%</el-radio>
              <el-radio :label="5" :disabled="item.locked">50%≤预制率&lt;65%</el-radio>
            </el-radio-group>-->
            <span>{{i.score}}&nbsp;&nbsp;分</span>
          </el-form-item>
          <el-form-item label="不满足简述" v-if="!i.satisfy">
            <el-input label="不满足简述" type="textarea" v-model="i.description" />
          </el-form-item>
        </el-form>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "PreRate",
  data () {
    return {
      items: [
        {
          id: 1,
          title: "外墙板",
          children_question: [
            {
              aspect:
                "预制外挂墙板",
              indicator: null,
              max_score: "10",
              score: 0,
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
          title: "楼板",
          children_question: [
            {
              aspect: "预制（叠合）楼板",
              indicator: null,
              max_score: "8",
              score: 0,
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
          title: "其他",
          children_question: [
            {
              aspect: "楼梯、空调板、阳台板",
              max_score: "7",
              indicator: null,
              score: 0,
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
  computed () {
    children_question.score: function() {
      let indicator = this.children_question.indicator
      if (indicator >= 0.80) {
        return 10
      }
      else if (indicator >= 0.65) {
        return 8
      }
      else if (indicator >= 0.5) {
        return 5
      }
    }
  },
  methods: {
    handleClose () {
      this.$confirm("确认关闭?")
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    handleLock (item) {
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