<template>
  <div class="app-container">
    <h2>2.2.2&nbsp;钢结构建筑构件预制率</h2>
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
        <el-form ref="forms" :model="score[index]" label-width="100px" :rules="rules[index]">
          <el-form-item label="预制率" prop="indicator">
            <el-input
              v-model="score[index].indicator"
              style="width:40%"
              placeholder="请输入预制率"
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
            <span v-else-if="score[index].indicator>=65">{{ item.second_score }}&nbsp;&nbsp;分</span>
            <span v-else-if="score[index].indicator>=50">{{ item.third_score }}&nbsp;&nbsp;分</span>
            <span v-else>0&nbsp;&nbsp;分</span>
          </el-form-item>
        </el-form>
      </el-card>
    </el-card>

    <div id="choose">
      <el-button-group>
        <!-- <router-link to="/design/evaluate/standard"> -->
        <el-button
          type="primary"
          icon="el-icon-arrow-left"
          @click="validate('/design/evaluate/standard')"
        >上一项</el-button>
        <!-- </router-link> -->

        <!-- <router-link to="/design/evaluate/component-std"> -->
        <el-button type="primary" @click="validate('/design/evaluate/component-std')">
          下一项
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
        <!-- </router-link> -->
      </el-button-group>
    </div>
  </div>
</template>

<script>
import Lock from "@/components/Lock";
import EvaluationStd from "@/components/EvaluationStd";
import { mapGetters, mapState } from "vuex";
import { setTimeout } from "timers";

export default {
  name: "PreRate",
  components: {
    Lock,
    EvaluationStd
  },
  data () {
    return {
      items: [
        {
          id: 1,
          title: "外墙板",
          aspect: "预制外挂墙板、预制复合墙板",
          max_score: 6,
          second_score: 4,
          third_score: 3,
          evaluation_index: "",
          domain: 'indicator'
        },
        {
          id: 2,
          title: "楼板",
          aspect: "预制（叠合）楼板",
          max_score: 6,
          second_score: 4,
          third_score: 2,
          evaluation_index: "",
          domain: 'indicator'
        },
        {
          id: 3,
          title: "其他",
          aspect: "楼梯、空调板、阳台板",
          max_score: 6,
          second_score: 3,
          third_score: 2,
          evaluation_index: "",
          domain: 'indicator'
        }
      ],
      rules: [],
      score: []
    };
  },
  computed: {
    ...mapGetters({
      designScore: "design",
      eId: "eId"
    })
  },
  created () {
    for (var i = 0; i < this.items.length; i++) {
      this.rules.push({
        indicator: [
          {
            validator: (rule, value, callback) => {
              // if (value === "") {
              //   return callback(new Error("预制率不能为空"));
              // }
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
            trigger: 'blur'
          }
        ]
      })
    }

    this.$store.dispatch("project/getHistory", this.eId);
    this.score = this.designScore._2_2_2;
  },
  beforeDestroy () {
    this.$store.dispatch("project/updateScore", {
      score: this.score,
      phase: "design",
      aspect: "_2_2_2"
    });
  },
  // 最后提交的时候再计算每一个选项的得分
  methods: {
    handleLock (index) {
      this.score[index].locked = !this.score[index].locked;
    },
    changeScore (index) {
      let value = this.score[index].indicator;
      if (value >= 80) {
        this.score[index].score = this.items[index].max_score;
      } else if (value >= 65) {
        this.score[index].score = this.items[index].second_score;
      } else if (value >= 50) {
        this.score[index].score = this.items[index].third_score;
      } else {
        this.score[index].score = 0
      }
    },
    validate (path) {
      var validNum = 0
      for (var i = 0; i < this.items.length; i++) {
        this.$refs.forms[i].validate((valid) => {
          if (valid) {
            validNum++
          }
        })
      }
      if (validNum === this.items.length) {
        this.$router.push(path)
        return true
      }
      else {
        return true
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