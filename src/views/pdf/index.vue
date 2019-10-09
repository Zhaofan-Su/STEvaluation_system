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
          <el-button
            type="success"
            plain
            :disabled="scope.row.state==='finished'?false:true"
            @click="toPdf(scope.row)"
          >预览</el-button>
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
import { getProjectsByUser, getReport } from "@/api/projects";

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
    this.getList(this.userId);
  },
  methods: {
    async getList(userId) {
      const response = await getProjectsByUser(userId);
      let results = response.value.reverse();
      results.forEach(ele => {
        if (ele.state === "finished") {
          this.list.push(ele);
        }
      });
    },
    toPdf(row) {
      getReport(row.eId).then(response => {
        this.$router.push(`/reportPreview/${row.eId}`);
      });
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
