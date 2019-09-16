<template>
  <div class="app-container">
    <h2>2.2.6&nbsp;设计深度相关</h2>
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
  name: "DesignDepth",
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
          aspect:
            "具有完整的构件深化图，主要包括：设计说明、构件统计表、连接节点详图、构件加工详图、预埋件详图",
          max_score: "2",
          score: "0",
          evaluation_index: ""
        },
        {
          id: 2,
          title: "",
          aspect:
            "构件深化图要满足工厂生产、施工装配等相关环节承接工序的技术和安全要求，各种埋件、连接件设计准确、清晰、合理",
          max_score: "4",
          score: "0",
          evaluation_index: ""
        },
        {
          id: 3,
          title: "",
          aspect:
            "构件设计与构件生产工业结合良好，与构件生产工厂建立有协同工作机制",
          max_score: "2",
          score: "0",
          evaluation_index: ""
        },
        {
          id: 4,
          title: "",
          aspect: "项目设计与施工组织紧密结合，与施工企业建立有协同工作机制",
          max_score: "2",
          score: "0",
          evaluation_index: ""
        },
        {
          id: 5,
          title: "",
          aspect:
            "构件设计合理、规格尺寸优化、便于生产制作，有利于提高工效，降低成本",
          max_score: "4",
          score: "0",
          evaluation_index: ""
        },
        {
          id: 6,
          title: "",
          aspect: "构件连接技术安全可靠、构造合理、施工简便",
          max_score: "2",
          score: "0",
          evaluation_index: ""
        },
        {
          id: 7,
          title: "",
          aspect: "构件设计满足构件运输和吊装能力要求，便于安装施工",
          max_score: "2",
          score: "0",
          evaluation_index: ""
        },
        {
          id: 8,
          title: "",
          aspect: "满足不同施工外架条件的影响以及模板和支撑系统的采用",
          max_score: "4",
          score: "0",
          evaluation_index: ""
        },
        {
          id: 9,
          title: "",
          aspect: "构件设计综合考虑了装配化施工的安装调节和公差配合要求",
          max_score: "2",
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
    this.score = this.designScore._2_2_6
  },
  beforeDestroy () {
    this.$store.dispatch('score/updateScore', this.score, 'design', '_2_2_6')
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