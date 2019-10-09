<template>
  <div
    v-loading.fullscreen.lock="fullscreenLoading"
    class="main-article"
    element-loading-text="正在生成预览界面"
  >
    <div class="main-title">装配式钢结构体系建筑一体化集成建造评价系统评分表</div>

    <!-- 主表 -->
    <!-- <table border="1">
      <tr>
        <td>工程项目名称</td>
        <td>{{info.projectName}}</td>
      </tr>
      <tr>
        <td>申请评价方</td>
        <td>{{info.construct}}</td>
      </tr>
      <tr>
        <td>评价阶段</td>
        <td class="choices">

        </td>
        <td>建筑类型</td>
        <td class="choices"></td>
      </tr>
      <tr>
        <td>评价指标</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <tr>

        </tr>
        <tr>
          
        </tr>
      </tr>
    </table>-->

    <!-- 设计阶段 -->
    <div class="table-title">2.2.1 标准化设计</div>
    <table border="1" cellpadding="0" cellspacing="0" width="100%" height="50">
      <tr class="table-head" align="center">
        <th width="5%">序号</th>
        <th width="10%">评价项目</th>
        <th width="40%">评价指标及要求</th>
        <th width="10%">设定分值</th>
        <th width="10%">是否满足</th>
        <th width="10%">得分</th>
        <th>不满足简述</th>
      </tr>
      <tr v-for="q in design._2_2_1" :key="q.id" align="center">
        <td v-if="q.id<5">{{q.id}}</td>
        <td v-if="q.id<5">{{q.title}}</td>
        <td v-if="q.id<5">{{q.children_question[0].aspect}}</td>
        <td v-if="q.id<5">{{q.children_question[0].max_score}}</td>
        <td v-if="q.id<5"></td>
        <td v-if="q.id<5"></td>
        <td v-if="q.id<5"></td>
      </tr>
      <tr align="center">
        <td rowspan="6">{{design._2_2_1[4].id}}</td>
        <td rowspan="6">{{design._2_2_1[4].title}}</td>
        <td>{{design._2_2_1[4].children_question[0].aspect}}</td>
        <td>{{design._2_2_1[4].children_question[0].max_score}}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr v-for="(q,index) in design._2_2_1[4].children_question" :key="index" align="center">
        <td v-if="index>0">{{q.aspect}}</td>
        <td v-if="index>0">{{q.max_score}}</td>
        <td v-if="index>0"></td>
        <td v-if="index>0"></td>
        <td v-if="index>0"></td>
      </tr>
      <tr align="center">
        <td rowspan="2">{{design._2_2_1[5].id}}</td>
        <td rowspan="2">{{design._2_2_1[5].title}}</td>
        <td>{{design._2_2_1[5].children_question[0].aspect}}</td>
        <td>{{design._2_2_1[5].children_question[0].max_score}}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr align="center">
        <td>{{design._2_2_1[5].children_question[1].aspect}}</td>
        <td>{{design._2_2_1[5].children_question[1].max_score}}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: "",
      // fullscreenLoading: true,
      fullscreenLoading: false,
      design: {
        _2_2_1: [
          {
            id: 1,
            title: "模数协调",
            children_question: [
              {
                aspect:
                  "建筑设计采用统一模数协调尺寸，并符合现行国家标准《建筑模数协调标准GB/T50002》的有关规定",
                max_score: 2
              }
            ],
            evaluation_index: ""
          },
          {
            id: 2,
            title: "建筑单元",
            children_question: [
              {
                aspect:
                  "在单体住宅建筑中重复使用量最多的三个基本户型的面积之和占总建筑面积的比例不低于70%；在单体公共建筑中重复使用最多的三个基本单元的面积之和占总建筑面积的比例不低于60%",
                max_score: 4
              }
            ],
            evaluation_index: ""
          },
          {
            id: 3,
            title: "平面布局",
            children_question: [
              {
                aspect:
                  "各功能空间布局合理、规则有序，符合建筑功能和结构抗震安全要素",
                max_score: 2
              }
            ],
            evaluation_index: ""
          },
          {
            id: 4,
            title: "连接节点",
            children_question: [
              {
                aspect:
                  "连接节点具备标准化设计，符合安全、经济、方便施工等要求",
                max_score: 2
              }
            ],
            evaluation_index: ""
          },
          {
            id: 5,
            title: "预制构件",
            children_question: [
              {
                aspect:
                  "预制梁、预制柱、预制外承重墙板、内承重墙板、外挂墙板在单体建筑中重复使用最多的三个规格构件的总个数占同类构件总个数的比例均不低于50%",
                max_score: 3
              },
              {
                aspect:
                  "预制楼板、预制叠合楼板在单体建筑中重复使用量最多的三个规格构件的总个数占预制楼板总数的比例不低于60%",
                max_score: 2
              },
              {
                aspect:
                  "预制楼梯在单体建筑中重复使用最多的一个规格的总个数占楼梯总个数的比例不低于70%",
                max_score: 2
              },
              {
                aspect:
                  "预制内隔墙板在单体建筑中重复使用量最多的一个规格构件的面积之和占同类型墙板总面积的比例不低于50%",
                max_score: 2
              },
              {
                aspect:
                  "预制阳台板在单体建筑中重复使用量最多的一个规格构件的总个数占阳台板总数的比例不低于50%",
                max_score: 1
              }
            ],
            evaluation_index: ""
          },
          {
            id: 6,
            title: "建筑部品",
            children_question: [
              {
                aspect:
                  "外墙在单体建筑中重复使用量最多的三个规格的总个数占外墙总数量的比例不低于60%",
                max_score: 2
              },
              {
                aspect:
                  "集成卫生间、整体橱柜、储物间等室内建筑部品在单体建筑中重复使用量最多的三个规格的总个数占同类部品总数量的比例不低于70%，并采用标准化接口、工厂化生产、装配化施工",
                max_score: 2
              }
            ],
            evaluation_index: ""
          }
        ]
      }
    };
  },
  mounted() {
    // this.fetchData();
  },
  methods: {
    fetchData() {
      // import("./content.js").then(data => {
      //   const { title } = data.default;
      //   document.title = title;
      //   this.article = data.default;
      //   setTimeout(() => {
      //     this.fullscreenLoading = false;
      //     this.$nextTick(() => {
      //       window.print();
      //     });
      //   }, 3000);
      // });
    },
    _2_2_1Span({ row, column, rowIndex, columnIndex }) {
      var num = 0;
      if (columnIndex === 0 || columnIndex === 1) {
        for (var i = 0; i < this.design._2_2_1.length; i++) {
          if (row.id === this.design._2_2_1[i].id) num++;
        }
      }
      return {
        rowspan: num,
        colspan: 1
      };
      // if (num == 1) {
      //   return {
      //     rowspan: num,
      //     colspan: 1
      //   };
      // } else if (num > 1) {
      //   if (
      //     this.design._2_2_1[rowIndex - 1] &&
      //     this.design._2_2_1[rowIndex - 1].id ===
      //       this.design._2_2_1[rowIndex].id
      //   ) {
      //     return {
      //       rowspan: num,
      //       colspan: 1
      //     };
      //   }
      // }
    }
  }
};
</script>

<style lang="scss">
@mixin clearfix {
  &:before {
    display: table;
    content: "";
    clear: both;
  }

  &:after {
    display: table;
    content: "";
    clear: both;
  }
}

.main-article {
  // padding: 20px;
  padding: 40px;
  margin: 0 auto;
  // display: block;
  // width: 740px;
  width: 900px;
  background: #fff;
  font-family: "simsun";

  .main-title {
    font-family: "simsun";
    font-size: 1.6em;
    font-weight: bold;
    text-align: center;
    margin: 20px auto 30px auto;
  }

  .table-title {
    font-family: "simsun";
    font-size: 1.2em;
    text-align: left;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .table-head {
    height: 10px;
  }
}

.article__heading {
  position: relative;
  padding: 0 0 20px;
  overflow: hidden;
}

.article__heading__title {
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size: 32px;
  line-height: 48px;
  font-weight: 600;
  color: #333;
  overflow: hidden;
}

.node-article-content {
  margin: 20px 0 0;
  @include clearfix;
  font-size: 16px;
  color: #333;
  letter-spacing: 0.5px;
  line-height: 28px;
  margin-bottom: 30px;
  font-family: medium-content-serif-font, Georgia, Cambria, "Times New Roman",
    Times, serif;

  & > :last-child {
    margin-bottom: 0;
  }

  b,
  strong {
    font-weight: inherit;
    font-weight: bolder;
  }

  img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }

  p {
    font-weight: 400;
    font-style: normal;
    font-size: 21px;
    line-height: 1.58;
    letter-spacing: -0.003em;
  }

  ul {
    margin-bottom: 30px;
  }

  li {
    --x-height-multiplier: 0.375;
    --baseline-multiplier: 0.17;

    letter-spacing: 0.01rem;
    font-weight: 400;
    font-style: normal;
    font-size: 21px;
    line-height: 1.58;
    letter-spacing: -0.003em;
    margin-left: 30px;
    margin-bottom: 14px;
  }

  a {
    text-decoration: none;
    background-repeat: repeat-x;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.84) 100%,
      rgba(0, 0, 0, 0) 0
    );
    background-size: 1px 1px;
    background-position: 0 calc(1em + 1px);
    padding: 0 6px;
  }

  code {
    background: rgba(0, 0, 0, 0.05);
    padding: 3px 4px;
    margin: 0 2px;
    font-size: 16px;
    display: inline-block;
  }

  img {
    border: 0;
  }

  /* 解决 IE6-7 图片缩放锯齿问题 */
  img {
    -ms-interpolation-mode: bicubic;
  }

  blockquote {
    --x-height-multiplier: 0.375;
    --baseline-multiplier: 0.17;
    font-family: medium-content-serif-font, Georgia, Cambria, "Times New Roman",
      Times, serif;
    letter-spacing: 0.01rem;
    font-weight: 400;
    font-style: italic;
    font-size: 21px;
    line-height: 1.58;
    letter-spacing: -0.003em;
    border-left: 3px solid rgba(0, 0, 0, 0.84);
    padding-left: 20px;
    margin-left: -23px;
    padding-bottom: 2px;
  }

  a {
    text-decoration: none;
  }

  h2,
  h3,
  h4 {
    font-size: 34px;
    line-height: 1.15;
    letter-spacing: -0.015em;
    margin: 53px 0 0;
  }

  h4 {
    font-size: 26px;
  }
}
</style>
