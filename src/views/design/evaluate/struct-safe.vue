<template>
  <div class="app-container">
    <h2>2.2.9&nbsp;结构安全设计评估</h2>
    <span>文档表格有问题</span>
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
      <el-card class="children-question" shadow="never">
        <div slot="header" class="children-header">
          <div>{{ item.aspect }}.（{{ item.max_score }}分）</div>
        </div>
        <el-form ref="form" :model="item" label-width="100px">
          <el-form-item label="是否满足">
            <el-radio-group v-model="score[index].satisfy">
              <el-radio :label="true" :disabled="score[index].locked">是</el-radio>
              <el-radio :label="false" :disabled="score[index].locked">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-if="!score[index].satisfy" label="不满足简述">
            <el-input v-model="score[index].description" label="不满足简述" type="textarea" />
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
  name: "InformationTech",
  components: {
    Lock,
    EvaluationStd
  },
  data () {
    return {
      items: [
        {
          id: 1,
          title: "设防水平提高",
          aspect: "",
          max_score: "2",
          score: "0",
          evaluation_index: ""
        },
        {
          id: 2,
          title: "采用性能化分析设计方法",
          aspect: "",
          max_score: "2",
          score: "0",
          evaluation_index: ""
        },
        {
          id: 3,
          title: "采用消能减震技术、隔震技术、抗风技术",
          aspect: "",
          max_score: "1",
          score: "0",
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
    this.score = this.designScore._2_2_9
  },
  beforeDestroy () {
    this.$store.dispatch('score/updateScore', this.score, 'design', '_2_2_9')
  },
  methods: {
    // 计算分数的时候，第一项可能要先获取项目资料

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