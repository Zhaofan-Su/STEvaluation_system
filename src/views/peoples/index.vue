<template>
  <div class="app-container">
    <el-button type="primary" @click="createUser">新增用户</el-button>
    <div class="userTable">
      <el-table :data="tableData" border style="width:60%">
        <el-table-column prop="id" label="用户ID" align="header-center" width="180"></el-table-column>
        <el-table-column prop="name" label="用户姓名" align="center" width="180"></el-table-column>
        <el-table-column prop="role" label="用户角色" align="cneter" width="180"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope" v-if="scope.row.role!=='管理员'">
            <el-button type="primary" @click="changeRole(scope)" size="medium">编辑角色</el-button>
            <el-button type="danger" @click="deleteUser(scope)" size="medium">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :visible.sync="dialogVisible" :title="dialogType==='edit'?'修改用户角色':'新增用户'">
      <el-form v-model="choosedUser" label-width="100px" label-position="left">
        <el-form-item label="用户姓名">
          <el-input
            v-model="choosedUser.name"
            :disabled="dialogType==='edit'?true:false"
            placeholder="请输入用户姓名"
          />
        </el-form-item>
        <el-form-item label="用户角色">
          <el-radio-group v-model="choosedUser.role" :disabled="dialogType==='edit'?true:false">
            <el-radio :label="'inner'">内部人员</el-radio>
            <el-radio :label="'outer'">外部人员</el-radio>
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
export default {
  name: "Peoples",
  components: {},
  data () {
    return {
      choosedUser: {
        id: '',
        name: '',
        role: ''
      },
      dialogVisible: false,
      dialogType: '',
      tableData: [
        {
          id: 1,
          name: '张三',
          role: '管理员',

        },
        {
          id: 2,
          name: '李四',
          role: '内部人员'
        }, {
          id: 3,
          name: '王五',
          role: '外部人员'
        }
      ]
    };
  },
  created () { },
  methods: {
    createUser () {
      this.dialogType = 'add'
      this.dialogVisible = true

    },
    changeRole ({ $index, row }) {
      console.log(row)
    },
    deleteUser ({ $index, row }) {
      this.$confirm('确认删除用户？', '警告', {
        confirmButtonText: '确认',
        cancleButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          // await deleteUser()远程数据库删除数据
          this.tableData.splice($index, 1)
          this.$message({
            type: 'success',
            message: '删除成功！'
          })
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

    >>> .el-table {
      margin: 30px auto;
    }
  }
  .dialog-button {
    text-align: center;
  }
}
</style>