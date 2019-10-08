<template>
  <div class="app-container">
    <h2>2.2.5&nbsp;建筑集成技术设计评分</h2>
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
      <el-card v-if="index==0" shadow="never" class="children-question">
        <el-form ref="form" :model="item" label-width="100px">
          <el-radio-group v-model="score[index].score">
            <div class="vertical">
              <el-radio
                :label="4"
                :disabled="score[index].locked"
                class="vertical"
                @change="changeOption(0)"
              >&nbsp;{{ item.options[0].aspect }}</el-radio>
            </div>

            <div>
              <el-radio
                :label="2"
                :disabled="score[index].locked"
                class="vertical"
                @change="changeOption(1)"
              >
                采用预制结构墙板、保温
                <span style="color:red">或</span>外饰面一体化外维护系统，满足结构、保温、防渗、装饰要求
              </el-radio>
            </div>

            <div class="vertical">
              <el-radio
                :label="0"
                :disabled="score[index].locked"
                class="vertical"
                @change="changeOption(2)"
              >&nbsp;{{ item.options[2].aspect }}</el-radio>
            </div>
          </el-radio-group>
          <el-form-item />
          <el-form-item label="不满足简述">
            <el-input v-model="score[index].description" label="不满足简述" type="textarea" />
          </el-form-item>
        </el-form>
      </el-card>

      <el-card v-else class="children-question" shadow="never">
        <div slot="header" class="children-header">
          <div>{{ item.aspect }}.（{{ item.max_score }}分）</div>
        </div>
        <el-form ref="form" :model="item" label-width="100px">
          <el-form-item label="是否满足">
            <el-radio-group v-model="score[index].satisfy">
              <el-radio
                :label="true"
                :disabled="score[index].locked"
                @change="addScore(index, true)"
              >是</el-radio>
              <el-radio
                :label="false"
                :disabled="score[index].locked"
                @change="addScore(index, true)"
              >否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-if="!score[index].satisfy" label="不满足简述">
            <el-input v-model="score[index].description" label="不满足简述" type="textarea" />
          </el-form-item>
        </el-form>
      </el-card>
    </el-card>

    <div id="choose">
      <el-button-group>
        <router-link to="/design/evaluate/assemble-rate">
          <el-button type="primary" icon="el-icon-arrow-left">上一项</el-button>
        </router-link>

        <router-link to="/design/evaluate/design-depth">
          <el-button type="primary">
            下一项
            <i class="el-icon-arrow-right el-icon--right"></i>
          </el-button>
        </router-link>
      </el-button-group>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Lock from "@/components/Lock";
import EvaluationStd from "@/components/EvaluationStd";

export default {
  name: "IntergrationTech",
  components: {
    Lock,
    EvaluationStd
  },
  data () {
    return {
      items: [
        {
          id: 1,
          title: "外维护结构集成技术",
          options: [
            {
              aspect:
                "采用预制结构墙板、保温、外饰面一体化外维护系统，满足结构、保温、防渗、装饰要求",
              max_score: 4
            },
            {
              aspect:
                "采用预制结构墙板、保温或外饰面一体化外维护系统，满足结构、保温、防渗、装饰要求",
              max_score: 2
            },
            {
              aspect: "未采用外维护结构集成技术",
              max_score: 0
            }
          ],
          evaluation_index: ""
        },
        {
          id: 2,
          title: "室内装修集成技术",
          aspect:
            "项目室内装修与建筑结构，机电设备一体化设计，采用管线与结构分离等系统集成技术",
          max_score: 3,
          evaluation_index: ""
        },
        {
          id: 3,
          title: "机电设备集成技术",
          aspect: "机电设备管线系统采用集中布置，管线及点位预留、预埋到位",
          max_score: 2,
          evaluation_index: ""
        }
      ],
      score: []
    };
  },
  computed: {
    ...mapGetters({
      designScore: "design",
      eId: 'eId'
    })
  },
  created () {
    this.$store.dispatch('score/getHistory', this.eId)
    this.score = this.designScore._2_2_5;
  },
  beforeDestroy () {
    // this.score.forEach(element => {
    //   this.sum += element.score;
    // });
    this.$store.dispatch("score/updateScore", {
      score: this.score,
      phase: "design",
      aspect: "_2_2_5"
    });
  },
  methods: {
    // 这个项目判断得分的时候，要注意第一个问题，是互斥的

    handleLock (index) {
      this.score[index].locked = !this.score[index].locked;
    },
    addScore (index, whether) {
      if (whether) {
        this.score[index].score = this.items[index].max_score;
      }
    },
    changeOption (index) {
      console.log(index);
      for (let i = 0; i < 3; i++) {
        if (i === index) {
          this.score[0].options[i].satisfy = true;
          this.score[0].options[i].subscore = this.items[0].options[
            i
          ].max_score;
        } else {
          this.score[0].options[i].satisfy = false;
          this.score[0].options[i].subscore = 0;
        }
      }
      console.log(this.score[0].score);
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

      .vertical {
        margin: 5px 0 5px 0;
        overflow: hidden;
        >>> .el-radio__input {
          display: inline-block;
        }
        >>> .el-radio__label {
          word-break: normal;
          line-height: 1.1em;
          width: 100%;
          vertical-align: top;
          display: inline-block;
          white-space: normal;
          word-wrap: break-word;
          word-break: break-all;
          padding: 1px 0 2px 14px;
        }
      }
    }
  }
}
</style>