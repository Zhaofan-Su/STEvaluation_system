<template>
  <div class="app-container">
    <h2>3.2.0&nbsp;概念评分项目</h2>
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
          <el-form-item label="是否满足">
            <el-radio-group v-model="item.satisfy">
              <el-radio :label="true" :disabled="item.locked">是</el-radio>
              <el-radio :label="false" :disabled="item.locked">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="评分">
            <el-input v-model="item.score" style="width:40%" placeholder="请输入得分" />
          </el-form-item>
        </el-form>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "InformationTech",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "",
          aspect:
            "参评项目建立系统管理信息平台，并对工程建设全过程实施动态、量化、科学、系统地管理和控制",
          satisfy: true,
          max_score: "10",
          score: "",
          description: "",
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 2,
          title: "",
          aspect:
            "参评项目从设计阶段开始建立建筑信息模型，并随项目设计、构件生产及施工建造等环节实施信息共享、有效传递和协同工作",
          satisfy: true,
          max_score: "5",
          score: "",
          description: "",
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 3,
          title: "",
          aspect:
            "参评项目参与各方均具有建筑信息化管理人员、并进行信息系统的管理与维护",
          satisfy: true,
          max_score: "3",
          score: "",
          description: "",
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 4,
          title: "",
          aspect:
            "参评项目建造成本与同等条件下传统建造方式相比，增加成本不高于10%",
          satisfy: true,
          max_score: "10",
          score: "",
          description: "",
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 5,
          title: "",
          aspect: "参评项目充分体现对行业技术的促进作用",
          satisfy: true,
          max_score: "8",
          score: "",
          description: "",
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 6,
          title: "",
          aspect: "参评项目用工制度充分体现建立现代产业工人队伍",
          satisfy: true,
          max_score: "7",
          score: "",
          description: "",
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 7,
          title: "",
          aspect:
            "与相同条件下传统生产方式工期相比，参评项目在主体结构与室内装修施工阶段所用总工期减少20%以上",
          satisfy: true,
          max_score: "10",
          score: "",
          description: "",
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
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