<template>
  <div class="app-container">
    <h2>3.2.6&nbsp;一体化装修技术与施工工艺</h2>
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
      <router-link to="/construct/evaluate/construct-quality">
        <el-button type="primary" icon="el-icon-arrow-left">上一项</el-button>
      </router-link>

      <router-link to="/construct/evaluate/inter-renovation">
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
  name: "IntergrateTech",
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
            "具备装修施工组织设计，体现部品的工厂生产与现场施工工序、部品的生产工艺与施工安装工艺的协调配合",
          max_score: 3,
          score: 0,
          evaluation_index: ""
        },
        {
          id: 2,
          title: "",
          aspect:
            "各部件与部品之间、部品与主体结构之间采用装配化施工工艺，各工序偏差控制在设计要求范围内",
          max_score: 2,
          score: 0,
          evaluation_index: ""
        },
        {
          id: 3,
          title: "",
          aspect: "采用工厂生产的集成式厨房、卫生间，一次安装到位",
          max_score: 2,
          score: 0,
          evaluation_index: ""
        },
        {
          id: 4,
          title: "",
          aspect: "采用内隔墙板系统，与主体结构连接可靠，易于安装拆卸",
          max_score: 2,
          score: 0,
          evaluation_index: ""
        },
        {
          id: 5,
          title: "",
          aspect:
            "水、暖、电气等设备系统与主体结构的构件生产、装配施工协调配合",
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
    this.score = this.constructScore._3_2_6;
  },
  beforeDestroy() {
    this.$store.dispatch("project/updateScore", {
      score: this.score,
      phase: "construct",
      aspect: "_3_2_6"
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