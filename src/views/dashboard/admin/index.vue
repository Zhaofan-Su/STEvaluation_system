<template>
  <!-- <div class="dashboard-editor-container">
    <github-corner class="github-corner" />

    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <todo-list />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <box-card />
      </el-col>
    </el-row>
  </div>-->
  <div class="dashboard-admin-container">
    <div class="filter-container">
      <el-input v-model="listQuery.projectName" placeholder="项目名称" style="width: 200px" />
      <el-select v-model="listQuery.type" placeholder="建筑类型">
        <el-option label="居住建筑" value="living" />
        <el-option label="公共建筑" value="public" />
        <el-option label="厂房" value="factory" />
      </el-select>
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="onSearch"
      >搜索</el-button>
    </div>
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width:100%"
    >
      <el-table-column label="ID" prop="id" align="center" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="项目名称" prop="projectName" width="120px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.projectName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="所在省份" prop="province" width="100px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.province }}</span>
        </template>
      </el-table-column>

      <el-table-column label="所在城市" prop="city" width="100px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.city }}</span>
        </template>
      </el-table-column>
      <el-table-column label="建筑类型" prop="type" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.type }}</span>
        </template>
      </el-table-column>

      <el-table-column label="项目建筑面积/m^2" prop="area" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.area }}</span>
        </template>
      </el-table-column>

      <el-table-column label="建筑主体高度/m" prop="height" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.height }}</span>
        </template>
      </el-table-column>

      <el-table-column label="相关单位" width="360px" align="center">
        <el-table-column label="建设单位" prop="construct" width="120px">
          <template slot-scope="scope">
            <span>{{ scope.row.construt }}</span>
          </template>
        </el-table-column>
        <el-table-column label="设计单位" prop="design" width="120px">
          <template slot-scope="scope">
            <span>{{ scope.row.design }}</span>
          </template>
        </el-table-column>
        <el-table-column label="施工单位" prop="build" width="120px">
          <template slot-scope="scope">
            <span>{{ scope.row.build }}</span>
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column label="结构形式" width="170px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.structType }}</span>
        </template>
      </el-table-column>
    </el-table>

    <paginaton
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>


<script>
import { fetchList } from "@/api/article";
import waves from "@/directive/waves";
import Pagination from "@/components/Pagination";
import { setTimeout } from "timers";
import { format } from "path";
// import GithubCorner from '@/components/GithubCorner'
// import PanelGroup from './components/PanelGroup'
// import LineChart from './components/LineChart'
// import RaddarChart from './components/RaddarChart'
// import PieChart from './components/PieChart'
// import BarChart from './components/BarChart'
// import TransactionTable from './components/TransactionTable'
// import TodoList from './components/TodoList'
// import BoxCard from './components/BoxCard'

// const lineChartData = {
//   newVisitis: {
//     expectedData: [100, 120, 161, 134, 105, 160, 165],
//     actualData: [120, 82, 91, 154, 162, 140, 145]
//   },
//   messages: {
//     expectedData: [200, 192, 120, 144, 160, 130, 140],
//     actualData: [180, 160, 151, 106, 145, 150, 130]
//   },
//   purchases: {
//     expectedData: [80, 100, 121, 104, 105, 90, 100],
//     actualData: [120, 90, 100, 138, 142, 130, 130]
//   },
//   shoppings: {
//     expectedData: [130, 140, 141, 142, 145, 150, 160],
//     actualData: [120, 82, 91, 154, 162, 140, 130]
//   }
// }

export default {
  name: "DashboardAdmin",
  components: {
    Pagination
  },
  directives: { waves },
  // components: {
  //   GithubCorner,
  //   PanelGroup,
  //   LineChart,
  //   RaddarChart,
  //   PieChart,
  //   BarChart,
  //   TransactionTable,
  //   TodoList,
  //   BoxCard
  // },
  data() {
    return {
      // lineChartData: lineChartData.newVisitis,
      tabelKey: 0,
      list: [
        {
          id: 1,
          projectName: "case1",
          province: "北京市",
          city: "北京市",
          type: "居住建筑",
          area: "120",
          height: "",
          construct: "",
          design: "",
          build: "",
          structType: ""
        },
        {
          id: 2,
          projectName: "case2",
          province: "上海市",
          city: "上海市",
          type: "厂房",
          area: "120",
          height: "",
          construct: "",
          design: "",
          build: "",
          structType: ""
        }
      ],
      total: 0,
      // listLoading: true,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 20,
        projectName: undefined,
        type: undefined
      }
    };
  },
  created() {
    // this.getList()
  },
  methods: {
    // handleSetLineChartData (type) {
    //   this.lineChartData = lineChartData[type]
    // },
    getList() {
      this.listLoading = true;
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items;
        this.total = response.data.total;

        setTimeout(() => {
          this.listLoading = false;
        }, 1500);
      });
    },
    onSearch() {}
  }
};
</script>

<style lang="scss" scoped>
.dashboard-admin-container {
  padding: 32px;
}
// .dashboard-editor-container {
//   padding: 32px;
//   background-color: rgb(240, 242, 245);
//   position: relative;

//   .github-corner {
//     position: absolute;
//     top: 0px;
//     border: 0;
//     right: 0;
//   }

//   .chart-wrapper {
//     background: #fff;
//     padding: 16px 16px 0;
//     margin-bottom: 32px;
//   }
// }

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
