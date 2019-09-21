<template>
  <div class="app-container">
    <h2>设计阶段</h2>
    <el-card v-for="(item, index) in items" :key="item.id" class="evaluation-item" shadow="hover">
      <div slot="header">
        <span class="number">2.1.{{item.id}}.</span>&nbsp;
        <span>{{item.aspect}}</span>
      </div>
      <el-radio-group v-model="score[index].satisfy">
        <el-radio :label="true" :disabled="score[index].locked">达标</el-radio>
        <el-radio :label="false" :disabled="score[index].locked">不达标</el-radio>
      </el-radio-group>
      <div class="options">
        <evaluationStd
          :_aspect="item.aspect"
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
    </el-card>
  </div>
</template>

<script>
import Lock from '@/components/Lock'
import EvaluationStd from '@/components/EvaluationStd'
import { mapGetters } from 'vuex'

export default {
  name: "DesignBasic",
  components: {
    Lock,
    EvaluationStd
  },
  data () {
    return {
      items: [
        {
          id: 1,
          aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
          // satisfy: true,
          evaluation_index: "",
          // locked: false,
        },
        {
          id: 2,
          aspect: "参评项目应进行建筑、结构、机电设备、室内装修一体化设计",
          // satisfy: true,
          evaluation_index: "",
          // locked: false,
        },
        {
          id: 3,
          aspect: "参评项目应具备完整的设计、施工和验收文件资料",
          // satisfy: true,
          evaluation_index: "",
          // locked: false,
        }
      ],
      score: []
    };
  },
  computed: {
    ...mapGetters({
      designScore: 'design',
      project: 'project'
    })
  },
  created () {
    console.log(this.project)
    this.score = this.designScore['basic']
  },
  beforeDestroy () {
    this.$store.dispatch('score/updateScore', this.score, 'design', 'basic')
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

    .number {
      font-weight: bold;
    }
    .options {
      margin: 20px 5px 10px 0;
      float: right;
      .evaluation,
      .lock {
        display: inline-block;
      }
    }
  }
}
</style>