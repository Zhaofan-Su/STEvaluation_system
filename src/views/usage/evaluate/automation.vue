<template>
  <div class="app-container">
    <h2>4.2.2&nbsp;电气及自动化</h2>
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
          <el-form-item v-if="item.id!=2&&item.id!=4" label="是否满足">
            <el-radio-group v-model="item.satisfy">
              <el-radio :label="true" :disabled="item.locked">是</el-radio>
              <el-radio :label="false" :disabled="item.locked">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-else-if="item.id==2" label>
            <el-radio-group v-model="item.score">
              <el-radio :label="4">主要房间满足要求</el-radio>
              <el-radio :label="8">所有区域均满足要求</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item v-else-if="item.id==4" label>
            <el-checkbox-group v-model="item.checklist">
              <el-checkbox :label="3">三相配电变压器满足现行国家标准《三相配电变压器能效限定值及能效等级》GB20052的节能评价值要求</el-checkbox>
              <el-checkbox :label="2">水泵、风机等设备，及其他电气装置满足相关现行国家标准的节能评价值要求</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item v-if="item.id==3" label="得分">
            <span v-if="item.de>=0.15">10&nbsp;&nbsp;</span>
            <span v-else-if="item.de>=0.1">7&nbsp;&nbsp;</span>
            <span v-else-if="item.de>=0.05">3&nbsp;&nbsp;</span>
            <span v-else>0&nbsp;&nbsp;</span>
          </el-form-item>
          <el-form-item v-if="!item.satisfy" label="不满足简述">
            <el-input v-model="item.description" label="不满足简述" type="textarea" />
          </el-form-item>
        </el-form>
      </el-card>
    </el-card>

    <div id="choose">
      <router-link to="/usage/evaluate/aircondition">
        <el-button type="primary" icon="el-icon-arrow-left">上一项</el-button>
      </router-link>

      <router-link to="/usage/evaluate/drainage">
        <el-button type="primary" style="margin-left:20px">
          下一项
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Automation",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "",
          aspect:
            "走廊、楼梯间、门厅、大堂、大空间、地下停车场等场所的照明系统采取分区、定时、感应等节能控制措施",
          satisfy: true,
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
          aspect:
            "照明功率密度值达到现行国家标准《建筑照明设计标准》GB50034中规定的目标值",
          satisfy: true,
          max_score: "8",
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
          aspect:
            "合理选用电梯和自动扶梯，并采取电梯群控、扶梯自动启停等节能控制措施",
          satisfy: true,
          max_score: "3",
          score: "0",
          description: "",
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 4,
          title: "",
          aspect: "合理选用节能型电气设备，按照下列规则累计得分",
          satisfy: true,
          max_score: "5",
          score: "0",
          dialogVisible: false,
          evaluation_index: "",
          description: "",
          locked: false,
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

  #choose {
    text-align: center;
    margin: 20px auto;
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