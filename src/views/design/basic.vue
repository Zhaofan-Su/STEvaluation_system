<template>
  <div class="app-container">
    <h2>设计阶段</h2>
    <el-card v-for="(item, index) in items" :key="item.id" class="evaluation-item" shadow="hover">
      <div slot="header" class="clearfix">
        <span class="number">2.1.{{item.id}}.</span>&nbsp;
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
      <el-button type="primary" icon="el-icon-arrow-left" :disabled="true">上一项</el-button>
      <router-link to="/design/evaluate/standard">
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
  name: "DesignBasic",
  components: {
    Lock,
    EvaluationStd
  },
  data() {
    return {
      items: [
        {
          id: 1,
          aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
          // satisfy: true,
          evaluation_index: ""
          // locked: false,
        },
        {
          id: 2,
          aspect: "参评项目应进行建筑、结构、机电设备、室内装修一体化设计",
          // satisfy: true,
          evaluation_index: ""
          // locked: false,
        },
        {
          id: 3,
          aspect: "参评项目应具备完整的设计、施工和验收文件资料",
          // satisfy: true,
          evaluation_index: ""
          // locked: false,
        }
      ],
      score: []
    };
  },
  computed: {
    ...mapGetters({
      designScore: "design",
      project: "project",
      eId: "eId"
    })
  },
  created() {
    this.$store.dispatch("project/getHistory", this.eId);
    this.score = this.designScore["basic"];
  },
  beforeDestroy() {
    this.$store.dispatch("project/updateScore", {
      score: this.score,
      phase: "design",
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
      .number {
        font-weight: bold;
        position: absolute;
        bottom: 0;
      }
      .title {
        position: absolute;
        bottom: 0;
        left: 50px;
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
  }
}
</style>