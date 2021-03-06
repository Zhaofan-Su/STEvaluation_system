<template>
  <div class="app-container">
    <h2>3.2.9&nbsp;资源节约与环保效果</h2>
    <el-card v-for="(item, index) in items" :key="item.id" class="evaluation-item" shadow="hover">
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
            :_popOverShow="false"
            v-on:click.native="handleLock(index)"
            class="lock"
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
                @change="addScore(index, _index,true)"
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
    </el-card>

    <div id="choose">
      <router-link to="/construct/evaluate/info-manage">
        <el-button type="primary" icon="el-icon-arrow-left">上一项</el-button>
      </router-link>

      <router-link to="/construct/evaluate/workers">
        <el-button type="primary" style="margin-left:20px">
          下一项
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
      </router-link>
    </div>
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
          title: "节能效果",
          children_question: [
            {
              aspect:
                "制定并实施施工节能和用能方案，检查并记录施工能耗，与传统方式相比，现场施工能耗指示节约明显",
              max_score: 3,
              score: 0
            }
          ],
          evaluation_index: ""
        },
        {
          id: 2,
          title: "节水效果",
          children_question: [
            {
              aspect:
                "制定并实施施工节水与用水方案，检测并记录施工水耗，与传统方式相比，现场施工节约用水指标达到50%以上",
              max_score: 3,
              score: 0
            }
          ],
          evaluation_index: ""
        },
        {
          id: 3,
          title: "节材效果",
          children_question: [
            {
              aspect:
                "采用工厂化钢筋加工方法，降低现场加工的钢筋损耗率，采用工厂加工的钢筋不低于80%，钢筋损耗不大于2.0%",
              max_score: 2,
              score: 0
            },
            {
              aspect:
                "钢结构建筑采用无模板和无支撑式楼面板施工，采用预制成品楼板或钢筋桁架式组合楼板",
              max_score: 2,
              score: 0
            },
            {
              aspect:
                "最大限度地采用预制构件，减少预拌混凝土的损耗，混凝土的损耗率不大于1.5%",
              max_score: 5,
              score: 0
            }
          ],
          evaluation_index: ""
        },
        {
          id: 4,
          title: "环保效果",
          children_question: [
            {
              aspect:
                "施工现场有整洁检查计划、检查记录和专人负责；施工现场有建筑垃圾控制计划和专人负责；施工垃圾减少50%以上；施工噪声不高于现行国家标准《建筑施工场界环境噪声排放标准》GB12532相关规定",
              max_score: 4,
              score: 0
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
      constructScore: "construct",
      eId: "eId"
    })
  },
  created() {
    this.$store.dispatch("project/getHistory", this.eId);
    this.score = this.constructScore._3_2_9;
  },
  beforeDestroy() {
    this.$store.dispatch("project/updateScore", {
      score: this.score,
      phase: "construct",
      aspect: "_3_2_9"
    });
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
      } else {
        this.score[index].children_question[_index].score = 0;
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