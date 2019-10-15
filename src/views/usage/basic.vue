<template>
  <div class="app-container">
    <h2>使用阶段</h2>
    <el-card v-for="(item,index) in items" :key="item.id" class="evaluation-item" shadow="hover">
      <div slot="header" class="clearfix">
        <span class="number">4.1.{{item.id}}.</span>&nbsp;
        <span class="title">{{item.aspect}}</span>
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
      </div>
      <el-radio-group v-model="score[index].satisfy">
        <el-radio :label="true" :disabled="score[index].locked">达标</el-radio>
        <el-radio :label="false" :disabled="score[index].locked">不达标</el-radio>
      </el-radio-group>
    </el-card>

    <div id="choose">
      <router-link to="/construct/evaluate/workers">
        <el-button type="primary" icon="el-icon-arrow-left">上一项</el-button>
      </router-link>

      <router-link to="/usage/evaluate/aircondition">
        <el-button type="primary" style="margin-left:20px">
          下一项
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Lock from "@/components/Lock";
import EvaluationStd from "@/components/EvaluationStd";
import { mapGetters } from "vuex";
export default {
  name: "UsageBasic",
  components: {
    Lock,
    EvaluationStd
  },
  data() {
    return {
      items: [
        {
          id: 1,
          aspect:
            "建筑设计应符合国家现行相关建筑节能设计标准中强制性条文的规定",
          evaluation_index: ""
        },
        {
          id: 2,
          aspect:
            "不应采用电直接加热设备作为供暖空调系统的供暖热源和空气加湿热源",
          evaluation_index: ""
        },
        {
          id: 3,
          aspect: "冷热源、输配系统和照明等各部分能耗应进行独立分项计量",
          evaluation_index: ""
        },
        {
          id: 4,
          aspect:
            "各房间或场所的照明功率密度值不应高于现行国家标准《建筑照明设计标准》GB50034中规定的现行指",
          evaluation_index: ""
        }
      ],
      score: []
    };
  },
  computed: {
    ...mapGetters({
      usageScore: "usage",
      eId: "eId"
    })
  },
  created() {
    this.$store.dispatch("project/getHistory", this.eId);
    this.score = this.usageScore.basic;
  },
  beforeDestroy() {
    this.$store.dispatch("project/updateScore", {
      score: this.score,
      phase: "usage",
      aspect: "basic"
    });
  },
  methods: {
    handleLock(index) {
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
      height: 36px;
      .number {
        font-weight: bold;
        position: absolute;
        top: 0;
        vertical-align: bottom;
      }
      .title {
        position: absolute;
        top: 0;
        left: 50px;
        display: inline-block;
        margin-right: 80px;
        vertical-align: bottom;
      }
      .options {
        float: right;
        top: 0;
        .lock,
        .evaluation {
          display: inline-block;
        }
      }
    }
  }
}
</style>