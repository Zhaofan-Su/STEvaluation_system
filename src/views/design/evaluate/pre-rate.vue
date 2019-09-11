<template>
  <div class="app-container">
    <h2>2.2.2&nbsp;钢结构建筑构件预制率</h2>
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
          <el-form-item label="预制率">
            <el-input v-model="item.indicator" style="width:40%" placeholder="请输入预制率" />
          </el-form-item>
          <el-form-item label="得分">
            <span v-if="item.indicator>=0.8">{{ item.max_score }}&nbsp;&nbsp;分</span>
            <span v-else-if="item.indicator>=0.65">{{ item.second_score }}&nbsp;&nbsp;分</span>
            <span v-else-if="item.indicator>=0.5">{{ item.third_score }}&nbsp;&nbsp;分</span>
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
  name: "PreRate",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "外墙板",
          aspect: "预制外挂墙板",
          indicator: null,
          max_score: "10",
          second_score: "8",
          third_score: "5",
          score: 0,
          description: "",
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 2,
          title: "楼板",
          aspect: "预制（叠合）楼板",
          indicator: null,
          max_score: "8",
          second_score: "6",
          third_score: "4",
          score: 0,
          description: "",
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 3,
          title: "其他",
          aspect: "楼梯、空调板、阳台板",
          max_score: "7",
          second_score: "5",
          third_score: "3",
          indicator: null,
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