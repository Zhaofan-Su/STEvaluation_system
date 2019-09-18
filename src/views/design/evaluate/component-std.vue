<template>
  <div class="app-container">
    <h2>2.2.3&nbsp;主体结构构件采用国标构件比例</h2>
    <el-card v-for="(item,index) in items" :key="item.id" class="evaluation-item" shadow="hover">
      <div slot="header" class="clearfix">
        <span class="number">{{ item.id }}.&nbsp;{{ item.title }}</span>
        <div class="options">
          <evaluationStd
            :_aspect="item.title"
            :_evaluatioon_index="item.evaluation_index"
            class="evaluation"
          />

          <lock
            :_locked="score[index].locked"
            :-pop-over-show="false"
            class="lock"
            @click.native="handleLock(index)"
          />
        </div>
      </div>
      <el-card class="children-question" shadow="never">
        <div slot="header" class="children-header">
          <div>{{ item.aspect }}.（{{ item.max_score }}分）</div>
        </div>
        <el-form ref="form" :model="item" label-width="170px" :rules="rules">
          <el-form-item label="采用国标轧制构件比例" prop="indicator">
            <el-input
              v-model="score[index].indicator"
              style="width:40%"
              placeholder="请输入项目比例"
              @blur="changeScore(index)"
            >
              <template slot="suffix">%</template>
            </el-input>
          </el-form-item>
          <el-form-item label="不满足简述">
            <el-input v-model="score[index].description" label="不满足简述" type="textarea" />
          </el-form-item>
          <el-form-item label="得分">
            <span v-if="score[index].indicator>=80">{{ item.max_score }}&nbsp;&nbsp;分</span>
            <span v-else-if="score[index].indicator>=60">{{ item.second_score }}&nbsp;&nbsp;分</span>
            <span v-else-if="score[index].indicator>=50">{{ item.third_score }}&nbsp;&nbsp;分</span>
            <span v-else>0&nbsp;&nbsp;分</span>
          </el-form-item>
        </el-form>
      </el-card>
    </el-card>
  </div>
</template>

<script>
import Lock from "@/components/Lock";
import EvaluationStd from "@/components/EvaluationStd";
import { mapGetters, mapState } from "vuex";
import { setTimeout } from "timers";

export default {
  name: "ComponentStandard",
  components: {
    Lock,
    EvaluationStd
  },
  data() {
    var checkNum = (rule, value, callback) => {
      if (!checkNum) {
        return callback(new Error("输入的比例不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字"));
        } else {
          if (value < 0 || value > 100) {
            callback(new Error("请输入范围0--100的数字"));
          } else {
            callback();
          }
        }
      }, 500);
    };
    return {
      items: [
        {
          id: 1,
          title: "柱",
          aspect: "预制外挂墙板、预制复合墙板",
          max_score: 10,
          second_score: 8,
          third_score: 5,
          evaluation_index: ""
        },
        {
          id: 2,
          title: "梁",
          aspect: "预制（叠合）楼板",
          max_score: 10,
          second_score: 8,
          third_score: 5,
          evaluation_index: ""
        },
        {
          id: 3,
          title: "支撑",
          aspect: "楼梯、空调板、阳台板",
          max_score: 10,
          second_score: 8,
          third_score: 5,
          evaluation_index: ""
        }
      ],
      rules: {
        indicator: [
          {
            required: true,
            type: "number",
            validator: checkNum,
            trigger: "blur"
          }
        ]
      },
      score: []
    };
  },
  computed: {
    ...mapGetters({
      desginSocre: "design"
    })
  },
  created() {
    this.score = this.desginSocre._2_2_3;
    // this.sum = this.desginSocre.sum;
  },
  beforeDestroy() {
    this.$store.dispatch("score/updateScore", this.score, "design", "_2_2_3");
  },
  // 最后提交的时候再计算每一个选项的得分
  methods: {
    handleLock(index) {
      this.score[index].locked = !this.score[index].locked;
    },
    changeScore(index) {
      let value = this.score[index].indicator;
      if (value >= 80) {
        this.score[index].score = this.items[index].max_score;
        // this.sum += this.items[index].max_score;
      } else if (value >= 60) {
        this.score[index].score = this.items[index].second_score;
        // this.sum += this.items[index].second_score;
      } else if (value >= 50) {
        this.score[index].score = this.items[index].third_score;
        // this.sum += this.items[index].third_score;
      }
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
        .lock,
        .evaluation {
          display: inline-block;
        }
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