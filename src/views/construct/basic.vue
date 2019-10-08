<template>
  <div class="app-container">
    <h2>建造阶段</h2>
    <el-card v-for="(item, index) in items" :key="item.id" class="evaluation-item" shadow="hover">
      <div slot="header">
        <span class="number">3.1.{{ item.id }}.</span>&nbsp;
        <span>{{ item.aspect }}</span>
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

    <div id="choose">
      <el-button-group>
        <router-link to="/design/evaluate/information-tech">
          <el-button type="primary" icon="el-icon-arrow-left">上一项</el-button>
        </router-link>

        <router-link to="/construct/evaluate/concept">
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
import Lock from '@/components/Lock'
import EvaluationStd from '@/components/EvaluationStd'
import { mapGetters } from 'vuex'

export default {
  name: "ConstructBasic",
  components: { Lock, EvaluationStd },
  data () {
    return {
      items: [
        {
          id: 1,
          aspect:
            "参评项目应按工业化建造方式编制施工组织设计，并满足建筑设计、生产运输、装配施工、装饰装修等环节的协调配合与组织管理要求",
          evaluation_index: ""
        },
        {
          id: 2,
          aspect:
            "参评项目室内装修工程应与建筑设计、构建制作、主体施工和机电设备安装实现一体化",
          evaluation_index: ""
        },
        {
          id: 3,
          aspect: "参评项目应具备专业化的施工队伍，并应建立员工培训和考核制度",
          evaluation_index: ""
        },
        {
          id: 4,
          aspect: "参评项目应建立项目质量终身责任信息档案",
          evaluation_index: ""
        },
        {
          id: 5,
          aspect:
            "参评项目建造过程建立节能、节水、节材和建筑物废弃管理制度，并应具有相应的数据记录和节约效果分析",
          evaluation_index: ""
        },
        {
          id: 6,
          aspect:
            "参评项目设计、建造全过程应采用信息化管理技术，并应实现设计、生产、运输、施工、监理、运营等环节的协调工作",
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
    this.$store.dispatch('score/getHitstory', this.eId)
    this.score = this.constructScore.basic
  },
  beforeDestroy () {
    this.$store.dispatch('score/updateScore', {
      score: this.score,
      phase: 'construct',
      aspect: 'basic'
    })
  },
  methods: {
    handleLock (index) {
      this.score[index].locked = !this.score[index].locked;
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