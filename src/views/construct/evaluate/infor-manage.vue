<template>
  <div class="app-container">
    <h2>3.2.8&nbsp;信息化管理</h2>
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

    <div id="choose">
      <el-button-group>
        <router-link to="/construct/evaluate/inter-renovation">
          <el-button type="primary" icon="el-icon-arrow-left">上一项</el-button>
        </router-link>

        <router-link to="/construct/evaluate/save-protection">
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
import { mapGetters } from 'vuex'
import Lock from '@/components/Lock'
import EvaluationStd from '@/components/EvaluationStd'
export default {
  name: "IntergrateTech",
  components: {
    Lock,
    EvaluationStd
  },
  data () {
    return {
      items: [
        {
          id: 1,
          title: "设计阶段",
          aspect:
            "采用基于建筑信息模型技术的设计软件，每个构件有唯一的身份标识，按照相关标准，将设计信息传递给后续环节",
          max_score: "4",
          score: "0",
          evaluation_index: ""
        },
        {
          id: 2,
          title: "生产阶段",
          aspect:
            "建立构件生产管理系统，建立构件生产信息数据库，用于记录构件生产关键信息，追溯、管理构件的生产质量、生产进度",
          max_score: "4",
          score: "0",
          evaluation_index: ""
        },
        {
          id: 3,
          title: "施工阶段",
          aspect:
            "建立构件施工管理系统，将设计阶段信息模型与时间、成本信息关联整合，进行管理；结合构件中的身份识别标识，记录构件吊装、施工关键信息，追溯、管理构件施工质量、施工进度等，实现施工过程精细化管理",
          max_score: "4",
          score: "0",
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
    this.score = this.constructScore._3_2_8
  },
  beforeDestroy () {
    this.$store.dispatch('score/updateScore', {
      score: this.score,
      phase: 'construct',
      aspect: '_3_2_8'
    })
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