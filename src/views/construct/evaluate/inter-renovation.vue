<template>
  <div class="app-container">
    <h2>3.2.7&nbsp;室内装修工程</h2>
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

    <div id="choose">
      <el-button-group>
        <router-link to="/construct/evaluate/intergrate-tech">
          <el-button type="primary" icon="el-icon-arrow-left">上一项</el-button>
        </router-link>

        <router-link to="/construct/evaluate/infor-manage">
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
          aspect: "非承重内隔墙采用装配施工技术，现场无湿作业和二次施工",
          max_score: 2,
          score: 0,
          evaluation_index: ""
        },
        {
          id: 2,
          title: "",
          aspect: "墙和地面瓷砖、石材等装修材料工厂加工编号，无现场切割",
          max_score: 1,
          score: 0,
          evaluation_index: ""
        },
        {
          id: 3,
          title: "",
          aspect: "各种柜体、内门等木制品和木装饰采用工厂定制，无现场切割",
          max_score: 1,
          score: 0,
          evaluation_index: ""
        },
        {
          id: 4,
          title: "",
          aspect: "各种设备管线，连接部位提前预留接口、孔洞，无现场剔凿",
          max_score: 1,
          score: 0,
          evaluation_index: ""
        },
        {
          id: 5,
          title: "",
          aspect: "采用预拌砂浆、预拌混凝土或其他工业化产品",
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
    this.$store.dispatch("score/getHistory", this.eId);
    this.score = this.constructScore._3_2_7;
  },
  beforeDestroy() {
    this.$store.dispatch("score/updateScore", {
      score: this.score,
      phase: "construct",
      aspect: "_3_2_7"
    });
  },
  methods: {
    // 计算分数的时候，第一项可能要先获取项目资料

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