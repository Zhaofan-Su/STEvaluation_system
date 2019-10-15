<template>
  <div class="app-container">
    <h2>4.2.1&nbsp;供暖、通风与空调</h2>
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
          <el-form-item v-if="item.id!=3&&item.id!=5" label="是否满足">
            <el-radio-group v-model="item.satisfy">
              <el-radio :label="true" :disabled="item.locked">是</el-radio>
              <el-radio :label="false" :disabled="item.locked">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-else-if="item.id==3" label="能耗降低幅度">
            <el-input v-model="item.de" label="能耗降低幅度" />
          </el-form-item>

          <el-form-item v-else-if="item.id==5" label>
            <el-checkbox-group v-model="item.checklist">
              <el-checkbox :label="3">区分房间的朝向，细分供暖、空调区域，对系统进行分区控制</el-checkbox>
              <el-checkbox
                :label="3"
              >合理选配空调冷、热源机组台数与容量，制定实施根据负荷变化调节制冷（热）量的控制策略，且空调冷源的部分负荷性能符合现行国家标准《公共建筑节能设计标准》GB50189的规定</el-checkbox>
              <el-checkbox label="3">水系统、风系统采用变频技术，且采取相应的水力平衡措施</el-checkbox>
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
      <router-link to="/usage/basic">
        <el-button type="primary" icon="el-icon-arrow-left">上一项</el-button>
      </router-link>

      <router-link to="/usage/evaluate/automation">
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
  name: "Aircondition",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "",
          aspect:
            "供暖空调系统的冷、热源机组能效均优于现行国家标准《公共建筑节能设计标准》GB50189的规定以及现行有关国家标准能效限定值的要求",
          satisfy: true,
          max_score: "6",
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
            "集中供暖系统热水循环泵的耗电输热比和通风空调系统风机的单位风量耗功率符合现行国家标准《公共建筑节能设计标准》GB50189等的有关规定，且空调冷热水系统循环水泵的耗电输冷（热）比比现行国家标准《民用建筑供暖通风与空气调节设计规范》GB50736规定值低20%",
          satisfy: true,
          max_score: "6",
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
            "合理选择和优化供暖、通风与空调系统，以供暖、通风与空调系统能耗降低幅度D_e为标准",
          satisfy: true,
          max_score: "10",
          score: "0",
          de: "", //能耗降低幅度
          description: "",
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 4,
          title: "",
          aspect: "采取措施降低过渡季节供暖、通风与空调系统能耗",
          satisfy: true,
          max_score: "6",
          score: "0",
          dialogVisible: false,
          evaluation_index: "",
          description: "",
          locked: false,
          popOverShow: false
        },
        {
          id: 5,
          title: "",
          aspect:
            "采取措施降低部分负荷、部分空间使用下的供暖、通风与空调系统能耗，按下列规则累计积分",
          satisfy: true,
          max_score: "9",
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
  created() {
    // this.$store.dispatch('score/getHistory', this.eId)
    // this.score = this.usageScore._4_2_1
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