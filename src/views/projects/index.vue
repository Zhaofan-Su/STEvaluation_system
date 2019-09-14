
<template>
  <div class="app-container">
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

      <el-table-column label="结构形式" align="center">
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
import { Pagination } from "@/components/Pagination";
import { format } from "path";

import { mapStat, mapState, mapGetters } from "vuex";

export default {
  name: "Projects",
  components: {
    Pagination
  },
  directives: { waves },
  data () {
    return {
      tabelKey: 1,
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
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 20,
        projectName: undefined,
        type: undefined
      }
    };
  },
  computed: {},
  created () {
    if (!this.roles.includes("admin")) {
      if (!this.roles.includes("inner")) {
        this.currentRole = "OuterHomepage";
      } else {
        this.currentRole = "InnerHomepage";
      }
    }
  },
  methods: {
    getList () {
      this.listLoading = true;
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items;
        this.total = response.data.total;

        setTimeout(() => {
          this.listLoading = false;
        }, 1500);
      });
    },
    onSearch () { }
  }
};
</script>

<style lang="scss" scoped>
</style>