<template>
  <div class="app-container">
    <h2>2.2.1&nbsp;标准化设计</h2>
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
          <el-form-item label="是否满足">
            <el-radio-group v-model="i.satisfy">
              <el-radio :label="true" :disabled="item.locked">是</el-radio>
              <el-radio :label="false" :disabled="item.locked">否</el-radio>
            </el-radio-group>
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
  name: "Standard",
  data () {
    return {
      items: [
        {
          id: 1,
          title: "模数协调",
          children_question: [
            {
              aspect:
                "建筑设计采用统一模数协调尺寸，并符合现行国家标准《建筑模数协调标准GB/T50002》的有关规定",
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
          title: "建筑单元",
          children_question: [
            {
              aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
              satisfy: true,
              max_score: "4",
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
          title: "平面布局",
          children_question: [
            {
              aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
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
          id: 4,
          title: "连接节点",
          children_question: [
            {
              aspect:
                "建筑设计采用统一模数协调尺寸，并符合现行国家标准《建筑模数协调标准GB/T50002》的有关规定",
              satisfy: true,
              max_score: "2",
              score: "0",
              dialogVisible: false
            }
          ],

          evaluation_index: "",
          description: "",
          locked: false,
          popOverShow: false
        },
        {
          id: 5,
          title: "预制构件",
          children_question: [
            {
              aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
              satisfy: true,
              max_score: "4",
              score: "0",
              dialogVisible: false
            },
            {
              aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
              satisfy: true,
              max_score: "2",
              score: "0",
              dialogVisible: false
            },
            {
              aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
              satisfy: true,
              max_score: "2",
              score: "0",
              dialogVisible: false
            },
            {
              aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
              satisfy: true,
              max_score: "2",
              score: "0",
              dialogVisible: false
            },
            {
              aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
              satisfy: true,
              max_score: "1",
              score: "0",
              dialogVisible: false
            }
          ],

          evaluation_index: "",
          description: "",
          locked: false,
          popOverShow: false
        },
        {
          id: 6,
          title: "建筑部品",
          children_question: [
            {
              aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
              satisfy: true,
              max_score: "2",
              score: "0",
              dialogVisible: false
            },
            {
              aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
              satisfy: true,
              max_score: "2",
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