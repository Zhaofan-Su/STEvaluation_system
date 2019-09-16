<template>
  <div class="app-container">
    <h2>3.2.3&nbsp;装配化施工组织与管理</h2>
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Lock from '@/components/Lock'
import EvaluationStd from '@/components/EvaluationStd'
export default {
  name: "OrgManage",
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
          aspect: "参评项目具有工程总承包管理模式和专业化的施工队伍",
          max_score: "4",
          score: "0",
          evaluation_index: "",
        },
        {
          id: 2,
          title: "",
          aspect:
            "参评项目具备完整的施工组织方案，内容包括构件安装工程进场、场地、材料、人员、机械的组织，以及相应的质量、环境、安全管理措施",
          max_score: "4",
          score: "0",
          evaluation_index: ""
        },
        {
          id: 3,
          title: "",
          aspect: "参评项目具备完整的装配化施工工法或技术标准",
          max_score: "4",
          score: "0",
          evaluation_index: ""
        },
        {
          id: 4,
          title: "",
          aspect: "参评项目采用机械化施工，减少人力成本，并明显提高效率",
          max_score: "3",
          score: "0",
          evaluation_index: ""
        }
      ],
      score: []
    };
  },
  computed: {
    ...mapGetters({
      constructScore: 'construct'
    })
  },
  created () {
    this.score = this.constructScore._3_2_3
  },
  beforeDestroy () {
    this.$store.dispatch('score/updateScore', this.score, 'construct', '_3_2_3')
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