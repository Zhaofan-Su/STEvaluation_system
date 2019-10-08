<template>
  <div class="app-container">
    <h2>3.2.10&nbsp;现场施工人工用量</h2>
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
          <el-form-item label="工人减少比例">
            <el-input v-model="score[index].indicator" style="width:40%" placeholder="请输入工人减少比例" />
          </el-form-item>
          <el-form-item label="不满足简述">
            <el-input v-model="score[index].description" label="不满足简述" type="textarea" />
          </el-form-item>
          <el-form-item v-if="item.id<=3" label="得分">
            <!-- <el-radio-group v-model="i.score">
              <el-radio :label="10" :disabled="item.locked">预制率≥80%</el-radio>
              <el-radio :label="8" :disabled="item.locked">65%≤预制率&lt;80%</el-radio>
              <el-radio :label="5" :disabled="item.locked">50%≤预制率&lt;65%</el-radio>
            </el-radio-group>-->
            <span v-if="score[index].indicator>=0.5">{{ item.max_score }}&nbsp;&nbsp;分</span>
            <span v-else-if="score[index].indicator>=0.4">{{ item.second_score }}&nbsp;&nbsp;分</span>
            <span v-else-if="score[index].indicator>=0.2">{{ item.third_score }}&nbsp;&nbsp;分</span>
            <span v-else-if="score[index].indicator>=0.1">{{ item.forth_score }}&nbsp;&nbsp;分</span>
            <span v-else>0&nbsp;&nbsp;分</span>
          </el-form-item>
          <el-form-item v-else label="得分">
            <span v-if="score[index].indicator>=0.5">{{ item.max_score }}&nbsp;&nbsp;分</span>
            <span v-else>0&nbsp;&nbsp;分</span>
          </el-form-item>
        </el-form>
      </el-card>
    </el-card>

    <div id="choose">
      <el-button-group>
        <router-link to="/construct/evaluate/save-protection">
          <el-button type="primary" icon="el-icon-arrow-left">上一项</el-button>
        </router-link>

        <router-link to="/usage/basic">
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
import { mapGetters } from 'vuex';
import Lock from '@/components/Lock'
import EvaluationStd from '@/components/EvaluationStd'
export default {
  name: "Workers",
  components: {
    Lock,
    EvaluationStd
  },
  data () {
    return {
      items: [
        {
          id: 1,
          title: "",
          aspect: "单位建筑面积人工用量减少比例",
          max_score: "10",
          second_score: "8",
          third_score: "5",
          forth_score: "3",
          score: 0,
          evaluation_index: ""
        }
      ],
      score: []
    };
  },
  computed: {
    ...mapGetters({
      constructScore: 'construct',
      eId: 'eId'
    })
  },
  created () {
    this.$store.dispatch('score/getHistory', this.eId)
    this.score = this.constructScore._3_2_10
  },
  beforeDestroy () {
    this.$store.dispatch('score/updateScore', {
      score: this.score,
      phase: 'construct',
      aspect: '_3_2_10'
    })
  },
  // 最后提交的时候再计算每一个选项的得分
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