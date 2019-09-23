<template>
  <div class="app-container">
    <h2>2.2.1&nbsp;标准化设计</h2>
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
      <el-card
        v-for="(i,_index) in item.children_question"
        :key="_index"
        class="children-question"
        shadow="never"
      >
        <div slot="header" class="children-header">
          <div>{{ i.aspect }}.（{{ i.max_score }}分）</div>
        </div>
        <el-form ref="form" :model="i" label-width="100px">
          <el-form-item label="是否满足">
            <el-radio-group v-model="score[index].children_question[_index].satisfy">
              <el-radio
                :label="true"
                :disabled="score[index].locked"
                @change="addScore(index, _index, true)"
              >是</el-radio>
              <el-radio
                :label="false"
                :disabled="score[index].locked"
                @change="addScore(index, _index,false)"
              >否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-if="!score[index].children_question[_index].satisfy" label="不满足简述">
            <el-input
              v-model="score[index].children_question[_index].description"
              label="不满足简述"
              type="textarea"
            />
          </el-form-item>
        </el-form>
      </el-card>
      <!-- <div class="socre">
        <div class="score-title">得分&nbsp;&nbsp;</div>
        <div class="sum-score">{{item.score}}&nbsp;分</div>
      </div>-->
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Lock from "@/components/Lock";
import EvaluationStd from "@/components/EvaluationStd";

export default {
  name: "Standard",
  components: {
    Lock,
    EvaluationStd
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "模数协调",
          children_question: [
            {
              aspect:
                "建筑设计采用统一模数协调尺寸，并符合现行国家标准《建筑模数协调标准GB/T50002》的有关规定",
              max_score: 2
            }
          ],
          evaluation_index: ""
        },
        {
          id: 2,
          title: "建筑单元",
          children_question: [
            {
              aspect:
                "在单体住宅建筑中重复使用量最多的三个基本户型的面积之和占总建筑面积的比例不低于70%；在单体公共建筑中重复使用最多的三个基本单元的面积之和占总建筑面积的比例不低于60%",
              max_score: 4
            }
          ],
          evaluation_index: ""
        },
        {
          id: 3,
          title: "平面布局",
          children_question: [
            {
              aspect:
                "各功能空间布局合理、规则有序，符合建筑功能和结构抗震安全要素",
              max_score: 2
            }
          ],
          evaluation_index: ""
        },
        {
          id: 4,
          title: "连接节点",
          children_question: [
            {
              aspect: "连接节点具备标准化设计，符合安全、经济、方便施工等要求",
              max_score: 2
            }
          ],
          evaluation_index: ""
        },
        {
          id: 5,
          title: "预制构件",
          children_question: [
            {
              aspect:
                "预制梁、预制柱、预制外承重墙板、内承重墙板、外挂墙板在单体建筑中重复使用最多的三个规格构件的总个数占同类构件总个数的比例均不低于50%",
              max_score: 4
            },
            {
              aspect:
                "预制楼板、预制叠合楼板在单体建筑中重复使用量最多的三个规格构件的总个数占预制楼板总数的比例不低于60%",
              max_score: 2
            },
            {
              aspect:
                "预制楼梯在单体建筑中重复使用最多的一个规格的总个数占楼梯总个数的比例不低于70%",
              max_score: 2
            },
            {
              aspect:
                "预制内隔墙板在单体建筑中重复使用量最多的一个规格构件的面积之和占同类型墙板总面积的比例不低于50%",
              max_score: 2
            },
            {
              aspect:
                "预制阳台板在单体建筑中重复使用量最多的一个规格构件的总个数占阳台板总数的比例不低于50%",
              max_score: 1
            }
          ],
          evaluation_index: ""
        },
        {
          id: 6,
          title: "建筑部品",
          children_question: [
            {
              aspect:
                "外墙在单体建筑中重复使用量最多的三个规格的总个数占外墙总数量的比例不低于60%",
              max_score: 2
            },
            {
              aspect:
                "集成卫生间、整体橱柜、储物间等室内建筑部品在单体建筑中重复使用量最多的三个规格的总个数占同类部品总数量的比例不低于70%，并采用标准化接口、工厂化生产、装配化施工",
              max_score: 2
            }
          ],
          evaluation_index: ""
        }
      ],
      score: []
    };
  },
  computed: {
    ...mapGetters({
      designScore: "design"
    })
  },
  created() {
    this.score = this.designScore._2_2_1;
    // this.sum = this.designScore.sum;
  },
  beforeDestroy() {
    this.$store.dispatch("score/updateScore", this.score, "design", "_2_2_1");
  },
  methods: {
    handleLock(index) {
      this.score[index].locked = !this.score[index].locked;
    },
    addScore(index, _index, whether) {
      if (whether) {
        this.score[index].children_question[_index].score = this.items[
          index
        ].children_question[_index].max_score;
        // this.sum += this.items[index].children_question[_index].max_score;
      } else {
        // this.score[index].children_question[_index].score = 0;
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

    .score {
      text-align: right;
      float: right;
      .score-title {
        display: block;
        font-weight: 800;
      }
      .sum-score {
        display: block;
      }
    }
  }
}
</style>