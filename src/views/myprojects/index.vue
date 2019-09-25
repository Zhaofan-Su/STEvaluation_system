
<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.projectName"
        class="filter-item"
        placeholder="项目名称"
        style="width: 200px"
      />
      <el-select v-model="listQuery.type" class="filter-item" placeholder="建筑类型">
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
      <el-table-column label="项目名称" prop="projectName" width="120px" align="center">
        <!-- <router-link to="/"></router-link> -->
        <template slot-scope="scope">
          <span>{{ scope.row.info.projectName }}</span>
        </template>
      </el-table-column>

      <el-table-column label="所在省份" prop="province" width="100px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.info.province }}</span>
        </template>
      </el-table-column>

      <el-table-column label="所在城市" prop="city" width="100px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.info.city }}</span>
        </template>
      </el-table-column>
      <el-table-column label="建筑类型" prop="type" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.info.type }}</span>
        </template>
      </el-table-column>

      <el-table-column label="项目建筑面积/m^2" prop="area" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.info.area }}</span>
        </template>
      </el-table-column>

      <el-table-column label="建筑主体高度/m" prop="height" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.info.height }}</span>
        </template>
      </el-table-column>

      <el-table-column label="是否公开" width="120px" align="center">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.rwState==='private'" type="warning">否</el-tag>
          <el-tag v-else type="primary">是</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="项目状态" align="center">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.state==='finished'" type="success">已完成</el-tag>
          <el-tag v-else type="warning">未完成</el-tag>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>


<script>
import waves from "@/directive/waves";
import Pagination from "@/components/Pagination";
import { getProjectsByUser } from "@/api/projects";

import { mapStat, mapState, mapGetters } from "vuex";

export default {
  name: "MyProjects",
  components: {
    Pagination
  },
  directives: { waves },
  data() {
    return {
      tableKey: 1,
      list: [],
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
  computed: {
    ...mapGetters(["userId"])
  },
  created() {
    console.log(this.userId);
    this.getList(this.userId);
  },
  methods: {
    async getList(userId) {
      const response = await getProjectsByUser(userId);
      this.list = response.value.reverse();
    },
    onSearch() {
      this.$message({
        message: "搜索功能暂未开放！",
        type: "primary"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  .filter-container {
    .filter-item {
      vertical-align: bottom;
    }
  }
}
</style>