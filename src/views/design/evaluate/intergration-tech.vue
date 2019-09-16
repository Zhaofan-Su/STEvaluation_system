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
              <el-radio :label="true" :disabled="score[index].locked">是</el-radio>
              <el-radio :label="false" :disabled="score[index].locked">否</el-radio>
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Lock from '@/components/Lock'
import EvaluationStd from '@/components/EvaluationStd'

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
          children_question: [
            {
              aspect:
                "采用预制结构墙板、保温、外饰面一体化外维护系统，满足结构、保温、防渗、装饰要求",
              max_score: "4",
              score: "0"
            },
            {
              aspect:
                "采用预制结构墙板、保温、外饰面一体化维护系统，满足结构、保温、防渗、装饰要求",
              max_score: "2",
              score: "0"
            }
          ],
          evaluation_index: ""
        },
        {
          id: 2,
          title: "室内装修集成技术",
          children_question: [
            {
              aspect:
                "项目室内装修与建筑结构，机电设备一体化设计，采用管线与结构分离等系统集成技术",
              max_score: "3",
              score: "0"
            }
          ],
          evaluation_index: ""
        },
        {
          id: 3,
          title: "机电设备集成技术",
          children_question: [
            {
              aspect: "机电设备管线系统采用集中布置，管线及点位预留、预埋到位",
              max_score: "3",
              score: "0"
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
    this.score = this.designScore._2_2_5
  },
  beforeDestroy () {
    this.$store.dispatch('score/updateScore', this.score, 'design', '_2_2_5')
  },
  methods: {
    // 这个项目判断得分的时候，要注意第一个问题，是互斥的

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
  }
}
</style>