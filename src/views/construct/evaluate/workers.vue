<template>
  <div class="app-container">
    <h2>3.2.10&nbsp;现场施工人工用量</h2>
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
          <el-form-item label="工人减少比例">
            <el-input v-model="item.indicator" style="width:40%" placeholder="请输入工人减少比例" />
          </el-form-item>
          <el-form-item v-if="item.id<=3" label="得分">
            <!-- <el-radio-group v-model="i.score">
              <el-radio :label="10" :disabled="item.locked">预制率≥80%</el-radio>
              <el-radio :label="8" :disabled="item.locked">65%≤预制率&lt;80%</el-radio>
              <el-radio :label="5" :disabled="item.locked">50%≤预制率&lt;65%</el-radio>
            </el-radio-group>-->
            <span v-if="item.indicator>=0.5">{{ item.max_score }}&nbsp;&nbsp;分</span>
            <span v-else-if="item.indicator>=0.4">{{ item.second_score }}&nbsp;&nbsp;分</span>
            <span v-else-if="item.indicator>=0.2">{{ item.third_score }}&nbsp;&nbsp;分</span>
            <span v-else-if="item.indicator>=0.1">{{ item.forth_score }}&nbsp;&nbsp;分</span>
            <span v-else>0&nbsp;&nbsp;分</span>
          </el-form-item>
          <el-form-item v-else label="得分">
            <span v-if="item.indicator>=0.5">{{ item.max_score }}&nbsp;&nbsp;分</span>
            <span v-else>0&nbsp;&nbsp;分</span>
          </el-form-item>
          <el-form-item label="不满足简述">
            <el-input v-model="item.description" label="不满足简述" type="textarea" />
          </el-form-item>
        </el-form>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Workers",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "",
          aspect: "单位建筑面积人工用量减少比例",
          indicator: null,
          max_score: "10",
          second_score: "8",
          third_score: "5",
          forth_score: "3",
          score: 0,
          description: "",
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        }
      ]
    };
  },
  computed() {},
  // 最后提交的时候再计算每一个选项的得分
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