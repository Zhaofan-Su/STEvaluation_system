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
          <div>{{ item.aspect }}（{{ item.max_score }}分）</div>
        </div>
        <el-form ref="forms" :model="score[index]" label-width="170px" :rules="rules[index]">
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

    <div id="choose">
      <el-button
        type="primary"
        icon="el-icon-arrow-left"
        @click="validate('/design/evaluate/pre-rate')"
      >上一项</el-button>
      <el-button
        type="primary"
        style="margin-left:20px"
        @click="validate('/design/evaluate/assemble-rate')"
      >
        下一项
        <i class="el-icon-arrow-right el-icon--right"></i>
      </el-button>
    </div>
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
    return {
      items: [
        {
          id: 1,
          title: "柱",
          aspect: "",
          max_score: 5,
          second_score: 3,
          third_score: 2,
          evaluation_index: ""
        },
        {
          id: 2,
          title: "梁",
          aspect: "",
          max_score: 6,
          second_score: 4,
          third_score: 2,
          evaluation_index: ""
        },
        {
          id: 3,
          title: "支撑",
          aspect: "",
          max_score: 3,
          second_score: 2,
          third_score: 1,
          evaluation_index: ""
        }
      ],
      rules: [],
      score: []
    };
  },
  computed: {
    ...mapGetters({
      desginSocre: "design",
      eId: "eId"
    })
  },
  created() {
    for (var i = 0; i < this.items.length; i++) {
      this.rules.push({
        indicator: [
          {
            validator: (rule, value, callback) => {
              setTimeout(() => {
                if (parseFloat(value).toString === "NaN") {
                  callback(new Error("请输入数字"));
                } else {
                  if (value < 0 || value > 100) {
                    callback(new Error("请输入范围0--100的数字"));
                  } else {
                    callback();
                  }
                }
              }, 700);
            },
            trigger: "blur"
          }
        ]
      });
    }

    this.$store.dispatch("project/getHistory", this.eId);
    this.score = this.desginSocre._2_2_3;
  },
  beforeDestroy() {
    this.$store.dispatch("project/updateScore", {
      score: this.score,
      phase: "design",
      aspect: "_2_2_3"
    });
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
      } else {
        this.score[index].score = 0;
      }
    },
    validate(path) {
      for (var i = 0; i < this.items.length; i++) {
        this.$refs.forms[i].validate(valid => {
          if (!valid) {
            return false;
          }
        });
      }
      this.$router.push(path);
      return true;
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