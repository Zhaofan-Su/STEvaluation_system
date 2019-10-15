
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
      <el-table-column label="项目名称" prop="projectName" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.info.projectName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="所在省份" prop="province" width="180" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.info.province }}</span>
        </template>
      </el-table-column>

      <el-table-column label="所在城市" prop="city" width="180" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.info.city }}</span>
        </template>
      </el-table-column>
      <el-table-column label="建筑类型" prop="type" width="140" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.info.type }}</span>
        </template>
      </el-table-column>

      <el-table-column label="项目建筑面积/m^2" prop="area" width="140" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.info.area }}</span>
        </template>
      </el-table-column>

      <el-table-column label="建筑主体高度/m" prop="height" width="140" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.info.height }}</span>
        </template>
      </el-table-column>

      <!-- <el-table-column label="相关单位" width="360px" align="center">
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
      </el-table-column>-->
      <!-- 
      <el-table-column label="结构形式" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.structType }}</span>
        </template>
      </el-table-column>-->
      <el-table-column label="是否公开" align="center" width="80">
        <template slot-scope="scope">
          <!-- <span>{{ scope.row.structType }}</span> -->
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

      <el-table-column label="操作" align="center" v-if="role===0">
        <template slot-scope="scope">
          <el-tooltip content="删除" effect="light" placement="bottom">
            <el-button
              type="danger"
              @click="remove(scope.eId)"
              plain
              size="small"
              icon="el-icon-delete"
              circle
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
import { getAllProjects, deleteProject } from "@/api/projects";
import { mapStat, mapState, mapGetters } from "vuex";

export default {
  name: "Projects",
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
    ...mapGetters(["role"])
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.listLoading = true;
      getAllProjects().then(response => {
        var results = response.value.reverse();
        this.total = results.length;
        // 分页器实现
        let currentPage = this.listQuery.page;
        let limit = this.listQuery.limit;
        this.list = results.slice(
          (currentPage - 1) * limit,
          currentPage * limit < this.total ? currentPage * limit - 1 : -1
        );

        this.listLoading = false;
      });
    },
    onSearch() {
      this.$message({
        message: "搜索功能暂未开放！",
        type: "primary"
      });
    },
    remove(eId) {
      this.$confirm("确认删除此项目？")
        .then(_ => {
          deleteProject(eId)
            .then(response => {
              this.$message({
                message: "成功删除项目",
                type: "success"
              });
              this.getList();
            })
            .catch(error => {
              this.$message({
                message: error,
                type: "wrong"
              });
            });
        })
        .catch(_ => {});
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  padding: 15px 20px;
  .filter-container {
    padding: 0;
    .filter-item {
      vertical-align: bottom;
    }
  }
}
</style>