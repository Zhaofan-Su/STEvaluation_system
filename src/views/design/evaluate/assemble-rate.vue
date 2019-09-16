<template>
  <div class="app-container">
    <h2>2.2.4&nbsp;装配率</h2>
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
          <div>{{ item.aspect }}（{{ item.max_score }}分）</div>
        </div>
        <el-form ref="form" :model="item" label-width="100px">
          <!-- <el-form-item label="是否满足">
            <el-radio-group v-model="i.satisfy">
              <el-radio :label="true" :disabled="item.locked">是</el-radio>
              <el-radio :label="false" :disabled="item.locked">否</el-radio>
            </el-radio-group>
          </el-form-item>-->
          <el-form-item label="预制率">
            <el-input v-model="score[index].indicator" style="width:40%" placeholder="请输入预制率" />
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
            <span v-if="score[index].indicator>=0.7">{{ item.max_score }}&nbsp;&nbsp;分</span>
            <span v-else>{{ item.second_score }}&nbsp;&nbsp;分</span>
          </el-form-item>
          <el-form-item v-else label="得分">
            <span v-if="score[index].indicator>=0.5">{{ item.max_score }}&nbsp;&nbsp;分</span>
            <span v-else>0&nbsp;&nbsp;分</span>
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
  name: "AssembleRate",
  components: {
    Lock,
    EvaluationStd
  },
  data () {
    return {
      items: [
        {
          id: 1,
          title: "非承重内隔墙",
          // aspect: "预制外挂墙板",
          max_score: "4",
          second_score: "2",
          score: 0,
          evaluation_index: ""
        },
        {
          id: 2,
          title: "集成式厨房",
          // aspect: "预制（叠合）楼板",
          max_score: "3",
          second_score: "1",
          score: 0,
          evaluation_index: ""
        },
        {
          id: 3,
          title: "集成式卫生间",
          // aspect: "楼梯、空调板、阳台板",
          max_score: "3",
          second_score: "1",
          score: 0,
          evaluation_index: ""
        },
        {
          id: 4,
          title: "预制管道井",
          // aspect: "预制外挂墙板",
          max_score: "2",
          second_score: "0",
          score: 0,
          evaluation_index: ""
        },
        {
          id: 5,
          title: "预制排烟管",
          // aspect: "预制（叠合）楼板",
          max_score: "2",
          second_score: "0",
          score: 0,
          evaluation_index: ""
        },
        {
          id: 6,
          title: "护栏",
          // aspect: "楼梯、空调板、阳台板",
          max_score: "1",
          second_score: "0",
          score: 0,
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
  // 最后提交的时候再计算每一个选项的得分
  created () {
    this.score = this.designScore._2_2_4
  },
  methods: {
    handleLock (item) {
      item.popOverShow = !item.popOverShow;
      item.locked = !item.locked;
      setTimeout(() => {
        item.popOverShow = !item.popOverShow;
      }, 1000);
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