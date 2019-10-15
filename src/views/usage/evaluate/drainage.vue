<template>
  <div class="app-container">
    <h2>4.2.3&nbsp;给排水（此页前几项的评分标准好像没有给）</h2>
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
              <el-radio :label="5" :disabled="item.locked">用水效率等级达到3级</el-radio>
              <el-radio :label="10" :disabled="item.locked">用水效率等级达到2级</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-else-if="item.id==2" label>
            <el-radio-group v-model="item.score">
              <el-radio :label="7">采用节水灌溉体系（后面还有附加选项）</el-radio>
              <el-radio :label="10">种植无需永久灌溉植物</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-else-if="item.id==3" label>
            <el-radio-group v-model="item.score">
              <el-radio :label="6">循环冷却水系统设置水处理措施；采取加大集水盘、设置平衡t或平衡水箱的方式，避免冷却水泵停泵时冷却水溢出</el-radio>
              <el-radio :label="10">运行时，冷却塔的蒸发耗水量占冷却水补水量的比例不低于80%</el-radio>
              <el-radio :label="10">采用无蒸发耗水量的冷却技术</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-else-if="item.id==4" label>
            <el-radio-group v-model="item.score">
              <el-radio :label="3">50%≤其他用水中采用节水技术或措施的比例&lt;80%</el-radio>
              <el-radio :label="5">其他用水中采用节水技术或措施的比例≥80%</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </el-card>
    </el-card>

    <div id="choose">
      <router-link to="/usage/evaluate/automation">
        <el-button type="primary" icon="el-icon-arrow-left">上一项</el-button>
      </router-link>

      <router-link to="/usage/evaluate/material-select">
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
  name: "Drainage",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "",
          aspect: "使用较高用水效率等级的卫生器具",
          max_score: "10",
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
          aspect: "绿化灌溉采用节水灌溉方式",
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
          aspect: "空调设备或系统采用节水冷却技术",
          max_score: "10",
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
          aspect: "除卫生器具、绿化灌溉和冷却塔外的其他用水采用节水技术或措施",
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