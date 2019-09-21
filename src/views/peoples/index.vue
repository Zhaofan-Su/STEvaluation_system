<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.mobile" placeholder="用户电话" style="width:200px" />
      <el-select v-model="listQuery.userType" placeholder="用户类型">
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

      <el-button type="primary" @click="createUser">新增用户</el-button>
    </div>

    <div class="userTable">
      <el-table
        :data="tableData"
        fit
        highlight-current-row
        style="width:100%"
        :header-cell-style="{background:'#eef1f6'}"
      >
        <el-table-column prop="username" label="用户名" align="center" width="150"></el-table-column>
        <el-table-column prop="realname" label="真实姓名" align="center" width="120"></el-table-column>
        <el-table-column prop="mobile" label="电话" align="header-center" width="180"></el-table-column>
        <el-table-column label="用户角色" align="cneter" width="100">
          <template slot-scope="scope">{{roleMap[scope.row.role]}}</template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope" v-if="scope.row.role!==0">
            <el-button type="primary" @click="changeRole(scope)" size="small" plain>编辑角色</el-button>
            <el-button type="danger" @click="deleteUser(scope)" size="small" plain>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :visible.sync="dialogVisible" :title="dialogType==='edit'?'修改用户角色':'新增用户'" center>
      <el-form v-model="choosedUser" label-width="100px">
        <el-form-item label="用户名">
          <el-input v-model="choosedUser.username" :disabled="disabled" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="真实姓名">
          <!-- <el-input
            v-model="choosedUser.realname"
            :disabled="dialogType==='edit'?true:false"
            placeholder="请输入真实姓名"
          />-->
          <el-input v-model="choosedUser.realname" :disabled="disabled" placeholder="请输入真实姓名" />
        </el-form-item>
        <el-form-item v-if="dialogType==='add'" label="密码">
          <el-input v-model="choosedUser.password" :disabled="disabled" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item label="电话号码">
          <el-input v-model="choosedUser.mobile" :disabled="disabled" placeholder="请输入电话号码" />
        </el-form-item>
        <el-form-item label="用户角色">
          <el-radio-group v-model="choosedUser.role">
            <el-radio :label="1">内部人员</el-radio>
            <el-radio :label="2">外部人员</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div class="dialog-button">
        <el-button type="danger" @click="dialogVisible==!dialogVisible">取消</el-button>
        <el-button type="primary" @click="confirmUser">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { async } from 'q';
import waves from '@/directive/waves'
import { getUsers } from '@/api/user'
export default {
  name: "Peoples",
  components: {},
  directives: { waves },
  data () {
    return {
      roleMap: {
        0: '管理员',
        1: '内部人员',
        2: '外部人员'
      },
      choosedUser: {
        id: '',
        username: '',
        realname: '',
        mobile: '',
        password: '',
        role: ''
      },
      dialogVisible: false,
      disabled: false,
      dialogType: '',
      tableData: [],
      listQuery: {
        page: 1,
        limit: 20,
        mobile: undefined,
        userType: undefined
      }
    };
  },
  watch: {
    dialogType: function (newVal, oldVal) {
      if (newVal === 'edit') {
        this.disabled = true
      }
      else {
        this.disabled = false
      }
    }
  },
  created () {
    this.getUsers()
  },
  methods: {
    async getUsers () {
      const res = await getUsers()
      let list = []
      for (var key in res.value) {
        list.push(res.value[key])
      }
      this.tableData = list
    },
    onSearch () {

    },
    createUser () {
      this.dialogType = 'add'
      this.dialogVisible = true
    },
    changeRole ({ $index, row }) {
      this.dialogType = 'edit'
      this.dialogVisible = true
    },
    deleteUser ({ $index, row }) {
      this.$confirm('确认删除用户？', '警告', {
        confirmButtonText: '确认',
        cancleButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          // await deleteUser()远程数据库删除数据
          // this.tableData.splice($index, 1)
          // this.$message({
          //   type: 'success',
          //   message: '删除成功！'
          // })
        })
        .catch(err => {
          console.log(err)
        })
    },
    confirmUser () {
      // put到数据库里, 得到返回数据之后，更新一下id
      if (this.dialogType === 'edit') {
        this.tableData.splice($index, 1, this.choosedUser)
      } else {
        this.tableData.push(this.choosedUser)
      }
      this.dialogType = ''
      this.dialogVisible = false
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  .userTable {
    text-align: center;
    // >>> .el-table {
    //   margin: 30px auto;
    // }
  }
  .dialog-button {
    text-align: center;
  }
}
</style>