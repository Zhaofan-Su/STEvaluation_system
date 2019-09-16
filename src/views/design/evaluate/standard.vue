<template>
  <div class="app-container">
    <h2>2.2.1&nbsp;标准化设计</h2>
    <el-card v-for="(item,index) in items" :key="item.id" class="evaluation-item" shadow="hover">
      <div slot="header" class="clearfix">
        <span class="number">{{item.id}}.&nbsp;{{item.title}}</span>
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
          <div>{{i.aspect}}.（{{i.max_score}}分）</div>
        </div>
        <el-form ref="form" :model="i" label-width="100px">
          <el-form-item label="是否满足">
            <el-radio-group v-model="score[index].children_question[_index].satisfy">
              <el-radio :label="true" :disabled="score[index].locked">是</el-radio>
              <el-radio :label="false" :disabled="score[index].locked">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="不满足简述" v-if="!score[index].children_question[_index].satisfy">
            <el-input
              label="不满足简述"
              type="textarea"
              v-model="score[index].children_question[_index].description"
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
import { mapGetters } from 'vuex'
import Lock from '@/components/Lock'
import EvaluationStd from '@/components/EvaluationStd'

export default {
  name: "Standard",
  components: {
    Lock,
    EvaluationStd
  },
  data () {
    return {
      items: [
        {
          id: 1,
          title: "模数协调",
          children_question: [
            {
              aspect:
                "建筑设计采用统一模数协调尺寸，并符合现行国家标准《建筑模数协调标准GB/T50002》的有关规定",
              max_score: "2",
              score: "0",
            }
          ],
          evaluation_index: ""
        },
        {
          id: 2,
          title: "建筑单元",
          children_question: [
            {
              aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
              max_score: "4",
              score: "0",
            }
          ],
          evaluation_index: ""
        },
        {
          id: 3,
          title: "平面布局",
          children_question: [
            {
              aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
              max_score: "2",
              score: "0",
            }
          ],
          evaluation_index: ""
        },
        {
          id: 4,
          title: "连接节点",
          children_question: [
            {
              aspect:
                "建筑设计采用统一模数协调尺寸，并符合现行国家标准《建筑模数协调标准GB/T50002》的有关规定",
              max_score: "2",
              score: "0",
            }
          ],
          evaluation_index: ""
        },
        {
          id: 5,
          title: "预制构件",
          children_question: [
            {
              aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
              max_score: "4",
              score: "0",
            },
            {
              aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
              max_score: "2",
              score: "0",
            },
            {
              aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
              max_score: "2",
              score: "0",
            },
            {
              aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
              max_score: "2",
              score: "0",
            },
            {
              aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
              max_score: "1",
              score: "0",
            }
          ],
          evaluation_index: ""
        },
        {
          id: 6,
          title: "建筑部品",
          children_question: [
            {
              aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
              max_score: "2",
              score: "0",
            },
            {
              aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
              max_score: "2",
              score: "0",
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
      designScore: 'design'
    })
  },
  created () {
    this.score = this.designScore._2_2_1
  },
  beforeDestroy () {
    this.$store.dispatch('score/updateScore', this.score, 'design', '_2_2_1')
  },
  methods: {
    handleLock (index) {
      this.score[index].locked = !this.score[index].locked
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