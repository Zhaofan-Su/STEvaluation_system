<template>
  <div class="app-container">
    <h2>3.2.5&nbsp;装配化施工质量</h2>
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
              <el-radio
                :label="true"
                :disabled="score[index].locked"
                @change="addScore(index, true)"
              >是</el-radio>
              <el-radio
                :label="false"
                :disabled="score[index].locked"
                @change="addScore(index, false)"
              >否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-if="!score[index].satisfy" label="不满足简述">
            <el-input v-model="score[index].description" label="不满足简述" type="textarea" />
          </el-form-item>
        </el-form>
      </el-card>
    </el-card>

    <div id="choose">
      <router-link to="/construct/evaluate/construct-tech">
        <el-button type="primary" icon="el-icon-arrow-left">上一项</el-button>
      </router-link>

      <router-link to="/construct/evaluate/intergrate-tech">
        <el-button type="primary" style="margin-left:20px">
          下一项
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Lock from "@/components/Lock";
import EvaluationStd from "@/components/EvaluationStd";
export default {
  name: "ConstructQuality",
  components: {
    Lock,
    EvaluationStd
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "",
          aspect:
            "全部主控项目的构件连接部位均进行实体抽样检测，检测结果符合设计要求",
          max_score: 3,
          score: 0,
          evaluation_index: ""
        },
        {
          id: 2,
          title: "",
          aspect:
            "按国家现行有关标准的规定进行了工程质量验收，并且达到国家现行有关装配式结构工程验收标准的合格要求",
          max_score: 2,
          score: 0,
          evaluation_index: ""
        },
        {
          id: 3,
          title: "",
          aspect:
            "构件、灌浆料强度检测报告、主要材料及配件的质量证明文件、进场验收记录，资料齐全、详实、可靠",
          max_score: 2,
          score: 0,
          evaluation_index: ""
        },
        {
          id: 4,
          title: "",
          aspect:
            "构件安装施工记录、钢筋连接施工检验记录、钢结构建筑的主体结构连接螺栓或焊接节点检验记录，资料齐全、详实、可靠",
          max_score: 2,
          score: 0,
          evaluation_index: ""
        },
        {
          id: 5,
          title: "",
          aspect:
            "后浇混凝土部位、后装封闭构件施工前的隐蔽工程检查验收文件，资料齐全、详实、可靠",
          max_score: 2,
          score: 0,
          evaluation_index: ""
        },
        {
          id: 6,
          title: "",
          aspect: "装配式结构分项工程质量验收文件，资料齐全、详实、可靠",
          max_score: 2,
          score: 0,
          evaluation_index: ""
        }
      ],
      score: []
    };
  },
  computed: {
    ...mapGetters({
      constructScore: "construct",
      eId: "eId"
    })
  },
  created() {
    this.$store.dispatch("project/getHistory", this.eId);
    this.score = this.constructScore._3_2_5;
  },
  beforeDestroy() {
    this.$store.dispatch("project/updateScore", {
      score: this.score,
      phase: "construct",
      aspect: "_3_2_5"
    });
  },
  methods: {
    handleLock(index) {
      this.score[index].locked = !this.score[index].locked;
    },
    addScore(index, whether) {
      if (whether) {
        this.score[index].score = this.items[index].max_score;
      } else {
        this.score[index].score = 0;
      }
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