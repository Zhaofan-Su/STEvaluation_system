<template>
  <div class="app-container">
    <h2>3.2.0&nbsp;概念评分项目</h2>
    <el-card v-for="(item, index) in items" :key="item.id" class="evaluation-item" shadow="hover">
      <div slot="header" class="clearfix">
        <span class="number">{{ item.id }}.&nbsp;{{ item.title }}</span>
        <div class="options">
          <evaluationStd
            :_aspect="item.aspect"
            :_evaluatioon_index="item.evaluation_index"
            class="evaluation"
          />
          <lock
            :_locked="score[index].locked"
            :-pop-over-show="false"
            class="lock"
            @click.native="handleLock(index)"
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
          <!-- <el-form-item label="评分">
            <el-input v-model="item.score" style="width:40%" placeholder="请输入得分" />
          </el-form-item>-->
        </el-form>
      </el-card>
    </el-card>

    <div id="choose">
      <el-button-group>
        <router-link to="/construct/basic">
          <el-button type="primary" icon="el-icon-arrow-left">上一项</el-button>
        </router-link>

        <router-link to="/construct/evaluate/produce-quality">
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
import Lock from "@/components/Lock";
import EvaluationStd from "@/components/EvaluationStd";
import { mapGetters } from "vuex";
export default {
  name: "InformationTech",
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
            "参评项目建立系统管理信息平台，并对工程建设全过程实施动态、量化、科学、系统地管理和控制",
          max_score: 3,
          evaluation_index: ""
        },
        {
          id: 2,
          title: "",
          aspect:
            "参评项目从设计阶段开始建立建筑信息模型，并随项目设计、构件生产及施工建造等环节实施信息共享、有效传递和协同工作",
          max_score: 1,
          evaluation_index: ""
        },
        {
          id: 3,
          title: "",
          aspect:
            "参评项目参与各方均具有建筑信息化管理人员、并进行信息系统的管理与维护",
          max_score: 2,
          evaluation_index: ""
        },
        {
          id: 4,
          title: "",
          aspect:
            "参评项目建造成本与同等条件下传统建造方式相比，增加成本不高于10%",
          max_score: 2,
          evaluation_index: ""
        },
        {
          id: 5,
          title: "",
          aspect: "参评项目充分体现对行业技术的促进作用",
          max_score: 1,
          evaluation_index: ""
        },
        {
          id: 6,
          title: "",
          aspect: "参评项目用工制度充分体现建立现代产业工人队伍",
          max_score: 1,
          evaluation_index: ""
        },
        {
          id: 7,
          title: "",
          aspect:
            "与相同条件下传统生产方式工期相比，参评项目在主体结构与室内装修施工阶段所用总工期减少20%以上",
          max_score: 2,
          evaluation_index: ""
        }
      ]
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
    this.score = this.constructScore._3_2_0;
  },
  beforeDestroy() {
    this.$store.dispatch(
      "project/updateScore",
      this.score,
      "construct",
      "_3_2_0"
    );
  },
  methods: {
    // 计算分数的时候，第一项可能要先获取项目资料

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
        .evaluation,
        .lock {
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