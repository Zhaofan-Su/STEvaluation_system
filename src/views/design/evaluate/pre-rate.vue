<template>
  <div class="app-container">
    <h2>2.2.2&nbsp;钢结构建筑构件预制率</h2>
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
          <el-form-item label="预制率">
            <el-input v-model="score[index].indicator" style="width:40%" placeholder="请输入预制率" />
          </el-form-item>
          <el-form-item label="不满足简述">
            <el-input v-model="score[index].description" label="不满足简述" type="textarea" />
          </el-form-item>
          <el-form-item label="得分">
            <span v-if="score[index].indicator>=0.8">{{ item.max_score }}&nbsp;&nbsp;分</span>
            <span v-else-if="score[index].indicator>=0.65">{{ item.second_score }}&nbsp;&nbsp;分</span>
            <span v-else-if="score[index].indicator>=0.5">{{ item.third_score }}&nbsp;&nbsp;分</span>
            <span v-else>0&nbsp;&nbsp;分</span>
          </el-form-item>
        </el-form>
      </el-card>
    </el-card>
  </div>
</template>

<script>
import Lock from '@/components/Lock'
import EvaluationStd from '@/components/EvaluationStd'
import { mapGetters, mapState } from 'vuex'

export default {
  name: "PreRate",
  components: {
    Lock,
    EvaluationStd
  },
  data () {
    return {
      items: [
        {
          id: 1,
          title: "外墙板",
          aspect: "预制外挂墙板",
          max_score: "10",
          second_score: "8",
          third_score: "5",
          score: 0,
          evaluation_index: ""
        },
        {
          id: 2,
          title: "楼板",
          aspect: "预制（叠合）楼板",
          max_score: "8",
          second_score: "6",
          third_score: "4",
          score: 0,
          evaluation_index: ""
        },
        {
          id: 3,
          title: "其他",
          aspect: "楼梯、空调板、阳台板",
          max_score: "7",
          second_score: "5",
          third_score: "3",
          score: 0,
          evaluation_index: ""
        }
      ],
      score: []
    };
  },
  computed: {
    ...mapGetters({
      desginSocre: 'design'
    })
  },
  created () {
    this.score = this.desginSocre._2_2_2
  },
  beforeDestroy () {
    this.$store.dispatch('score/updateScore', this.score, 'design', '_2_2_2')
  },
  // 最后提交的时候再计算每一个选项的得分
  methods: {

    handleLock (item) {
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