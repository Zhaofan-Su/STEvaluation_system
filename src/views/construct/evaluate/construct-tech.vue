<template>
  <div class="app-container">
    <h2>3.2.4&nbsp;装配化施工技术与工艺</h2>
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
      <router-link to="/construct/evaluate/org-manage">
        <el-button type="primary" icon="el-icon-arrow-left">上一项</el-button>
      </router-link>

      <router-link to="/construct/evaluate/construct-quality">
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
  name: "OrgManage",
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
            "参评项目具备构建安装专项技术方案，内容包括构件成品保护、存放、翻转、起吊、定位、稳固、连接等技术措施和质量、安全控制措施",
          max_score: 2,
          score: 0,
          evaluation_index: ""
        },
        {
          id: 2,
          title: "",
          aspect:
            "构件连接技术施工方便、安全可靠，连接技术系统性强、经济适用，符合国家现行有关标准规定",
          max_score: 2,
          score: 0,
          evaluation_index: ""
        },
        {
          id: 3,
          title: "",
          aspect: "外墙、内墙、顶棚基本实现无抹灰",
          max_score: 2,
          score: 0,
          evaluation_index: ""
        },
        {
          id: 4,
          title: "",
          aspect: "外墙减少外脚手架施工，室内采用工具式、定型化安全支撑措施",
          max_score: 2,
          score: 0,
          evaluation_index: ""
        },
        {
          id: 5,
          title: "",
          aspect: "采用工具式、定型化模板及支撑系统，可重复使用30次以上",
          max_score: 2,
          score: 0,
          evaluation_index: ""
        },
        {
          id: 6,
          title: "",
          aspect: "采用吊车满足100mm以下微动性的要求，有分配梁或分配桁架的吊具",
          max_score: 2,
          score: 0,
          evaluation_index: ""
        },
        {
          id: 7,
          title: "",
          aspect: "项目所用成型钢筋、钢筋网片、钢筋桁架等由工厂加工制作",
          max_score: 2,
          score: 0,
          evaluation_index: ""
        },
        {
          id: 8,
          title: "",
          aspect: "各机电设备管线预埋到位、采用机械连接方式",
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
    this.score = this.constructScore._3_2_4;
  },
  beforeDestroy() {
    this.$store.dispatch("project/updateScore", {
      score: this.score,
      phase: "construct",
      aspect: "_3_2_4"
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