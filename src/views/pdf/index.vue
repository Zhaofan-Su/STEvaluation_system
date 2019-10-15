<template>
  <div class="app-container">
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      fit
      highlight-current-row
      style="width:100%"
    >
      <el-table-column label="项目名称" prop="projectName" width="120px" align="center">
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

      <el-table-column label="项目建筑面积/m^2" prop="area" width="140px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.info.area }}</span>
        </template>
      </el-table-column>

      <el-table-column label="建筑主体高度/m" prop="height" width="130px" align="center">
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

      <el-table-column align="center">
        <template slot-scope="scope">
          <el-tooltip content="预览报告" effect="light" placement="bottom">
            <el-button
              type="success"
              plain
              @click="toPdf(scope.row)"
              circle
              icon="el-icon-document-checked"
              size="small"
            ></el-button>
          </el-tooltip>
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

import { mapState, mapGetters } from "vuex";

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
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        projectName: undefined,
        type: undefined
      }
    };
  },
  computed: {
    ...mapGetters(["userId"])
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.listLoading = true;
      const response = await getProjectsByUser(this.userId);
      let responseData = response.value.reverse();
      let results = [];
      responseData.forEach(ele => {
        if (ele.state === "finished") {
          results.push(ele);
        }
      });
      this.total = results.length;
      // 分页器实现
      let currentPage = this.listQuery.page;
      let limit = this.listQuery.limit;
      if (this.total === 1) {
        this.list = results;
      } else {
        this.list = results.slice(
          (currentPage - 1) * limit,
          currentPage * limit < this.total ? currentPage * limit - 1 : -1
        );
      }
      this.listLoading = false;
    },
    toPdf(row) {
      this.$router.push(`/reportPreview/${row.eId}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  // .filter-container {
  //   .filter-item {
  //     vertical-align: bottom;
  //   }
  // }
}
</style>
