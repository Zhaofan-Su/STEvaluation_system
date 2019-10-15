<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        class="filter-item"
        v-model="listQuery.mobile"
        placeholder="用户电话"
        style="width:200px"
      />
      <el-select class="filter-item" v-model="listQuery.userType" placeholder="用户类型">
        <el-option label="管理员" value="0" />
        <el-option label="内部人员" value="1" />
        <el-option label="外部人员" value="2" />
      </el-select>

      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="onSearch"
      >搜索</el-button>

      <div style="display:inline-block">
        <el-button class="filter-item" type="primary" @click="createUser">新增用户</el-button>
      </div>
    </div>

    <div class="userTable">
      <el-table
        :data="tableData"
        fit
        highlight-current-row
        style="width:100%"
        v-loading="listLoading"
      >
        <el-table-column prop="username" label="用户名" align="center" width="150"></el-table-column>
        <el-table-column prop="realname" label="真实姓名" align="center" width="200"></el-table-column>
        <el-table-column prop="mobile" label="电话" align="head-center" width="180"></el-table-column>
        <el-table-column label="用户角色" align="center" width="100">
          <template slot-scope="scope">{{roleMap[scope.row.role]}}</template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope" v-if="scope.row.role!==0">
            <el-tooltip content="修改权限" effect="light" placement="bottom">
              <el-button
                type="primary"
                @click="changeRole(scope)"
                size="small"
                plain
                icon="el-icon-edit"
                circle
              ></el-button>
            </el-tooltip>
            <el-tooltip content="删除用户" effect="light" placement="bottom">
              <el-button
                type="danger"
                @click="deleteUser(scope)"
                size="small"
                plain
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
        @pagination="getUsers"
      />
    </div>

    <el-dialog
      class="handleUser"
      :visible.sync="dialogVisible"
      :title="dialogType==='edit'?'修改用户角色':'新增用户'"
      center
    >
      <el-form v-model="choosedUser" label-width="100px" ref="choosedUser">
        <el-form-item label="用户名">
          <el-input v-model="choosedUser.username" :disabled="disabled" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input
            v-model="choosedUser.realname"
            :disabled="disabled"
            :placeholder="choosedUser.realname"
          />
        </el-form-item>
        <el-form-item v-if="dialogType==='add'" label="密码">
          <el-input
            v-model="choosedUser.password"
            :disabled="disabled"
            :placeholder="choosedUser.password"
          />
        </el-form-item>
        <el-form-item label="电话号码" prop="mobile">
          <el-input
            v-model="choosedUser.mobile"
            :disabled="disabled"
            :placeholder="choosedUser.mobile"
          />
        </el-form-item>
        <el-form-item label="用户权限" prop="role">
          <el-radio-group v-model="choosedUser.role">
            <el-radio :label="1">内部人员</el-radio>
            <el-radio :label="2">外部人员</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div class="dialog-button">
        <el-button type="danger" @click="dialogVisible=!dialogVisible;clearChoosedUser()">取消</el-button>
        <el-button type="primary" @click="confirmUser">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { async } from "q";
import waves from "@/directive/waves";
import { getUsers, changeRole, addUser, deleteUser } from "@/api/user";
import Pagination from "@/components/Pagination";

export default {
  name: "Peoples",
  components: { Pagination },
  directives: { waves },
  data() {
    var checkMobile = (rule, value, callback) => {
      const mobileReg = /^1[3|4|5|7|8][0-9]{9}$/;
      if (value === "") {
        return callback(new Error("请输入电话号码"));
      }
      setTimeout(() => {
        if (!Number.isInteger(+value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (mobileReg.test(value)) {
            callback();
          } else {
            callback(new Error("电话号码格式不正确"));
          }
        }
      }, 700);
    };

    return {
      roleMap: {
        0: "管理员",
        1: "内部人员",
        2: "外部人员"
      },
      choosedUser: {
        id: "",
        username: "",
        realname: "",
        mobile: "",
        password: "",
        role: ""
      },
      dialogVisible: false,
      disabled: false,
      dialogType: "",
      tableData: [],
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        mobile: undefined,
        userType: undefined
      },
      rules: {
        mobile: [
          {
            // validate: checkMobile,
            required: true,
            trigger: "blur"
          }
        ],
        role: [{ required: true, trigger: "blur", message: "请选择用户权限" }]
      }
    };
  },
  watch: {
    dialogType: function(newVal, oldVal) {
      if (newVal === "edit") {
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    }
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      this.listLoading = true;
      const res = await getUsers();
      let users = [];
      let admins = [];
      for (var key in res.value) {
        if (res.value[key].role === 0) {
          admins.push(res.value[key]);
        } else {
          users.push(res.value[key]);
        }
      }
      var results = users.concat(admins).reverse();
      this.total = results.length;
      // 分页器实现
      let currentPage = this.listQuery.page;
      let limit = this.listQuery.limit;
      if (this.total === 1) {
        this.tableData = results;
      } else {
        this.tableData = results.slice(
          (currentPage - 1) * limit,
          currentPage * limit < this.total ? currentPage * limit - 1 : -1
        );
      }
      this.listLoading = false;
    },
    onSearch() {},
    createUser() {
      this.dialogType = "add";
      this.dialogVisible = true;
    },
    changeRole({ $index, row }) {
      this.dialogType = "edit";
      this.dialogVisible = true;
      this.choosedUser = this.tableData[$index];
    },
    deleteUser({ $index, row }) {
      this.$confirm("确认删除用户？", "警告", {
        confirmButtonText: "确认",
        cancleButtonText: "取消",
        type: "warning"
      })
        .then(_ => {
          deleteUser(row.id).then(response => {
            this.tableData.splice($index, 1);
            this.$message({
              type: "success",
              message: "删除成功！"
            });
            this.getUsers();
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    confirmUser() {
      // put到数据库里, 得到返回数据之后，更新一下id
      // this.$refs.choosedUser.validate(valid => {
      //   if (valid) {
      //     if (this.dialogType === "edit") {
      //       changeRole({
      //         userId: this.choosedUser.id,
      //         role: this.choosedUser.role
      //       })
      //         .then(response => {
      //           this.$message({
      //             message: "修改用户权限成功",
      //             type: "success"
      //           });
      //           for (var index = 0; index < this.tableData.length; index++) {
      //             if (this.tableData[index].id === this.choosedUser.id) {
      //               this.tableData.splice(index, 1, this.choosedUser);
      //             }
      //           }
      //         })
      //         .catch(error => {
      //           this.clearChoosedUser();
      //           console.log(error);
      //         });
      //     } else {
      //       addUser(this.choosedUser)
      //         .then(response => {
      //           this.$message({
      //             message: "成功创建用户",
      //             type: "success"
      //           });
      //           this.choosedUser.id = response.value.id;
      //           this.tableData.splice(1, 0, this.choosedUser);
      //         })
      //         .catch(error => {
      //           this.clearChoosedUser();
      //           console.log(error);
      //         });
      //     }
      //     this.dialogType = "";
      //     this.dialogVisible = false;
      //   } else {
      //     this.clearChoosedUser();
      //   }
      // });
      if (this.dialogType === "edit") {
        changeRole({
          userId: this.choosedUser.id,
          role: this.choosedUser.role
        })
          .then(response => {
            this.$message({
              message: "修改用户权限成功",
              type: "success"
            });
            for (var index = 0; index < this.tableData.length; index++) {
              if (this.tableData[index].id === this.choosedUser.id) {
                this.tableData.splice(index, 1, this.choosedUser);
              }
            }
          })
          .catch(error => {
            this.clearChoosedUser();
            console.log(error);
          });
        this.dialogType = "";
        this.dialogVisible = false;
      } else {
        addUser(this.choosedUser)
          .then(response => {
            this.$message({
              message: "成功创建用户",
              type: "success"
            });
            this.choosedUser.id = response.value.id;
            this.tableData.splice(1, 0, this.choosedUser);
            this.dialogType = "";
            this.dialogVisible = false;
          })
          .catch(error => {
            // this.clearChoosedUser();
            console.log(error);
          });
      }
    },
    clearChoosedUser() {
      this.choosedUser = {
        id: "",
        username: "",
        realname: "",
        mobile: "",
        password: "",
        role: ""
      };
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

  .handleUser {
    width: 70%;
    margin: auto auto;
  }
  .dialog-button {
    text-align: center;
  }
}
</style>