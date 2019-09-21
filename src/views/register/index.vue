<template>
  <div class="register-container">
    <el-form
      ref="registerForm"
      :model="registerForm"
      class="register-form"
      autocomplete="on"
      label-position="left"
      :rules="rules"
    >
      <div class="title-container">
        <h3 class="title">用户注册</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="documentation" />
          <!-- <i class="el-icon-postcard" /> -->
        </span>
        <el-input v-model="registerForm.username" name="username" type="text" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="realname">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          v-model="registerForm.realname"
          name="realname"
          type="text"
          placeholder="请输入实际姓名"
        />
      </el-form-item>
      <el-form-item prop="mobile">
        <span class="svg-container">
          <i class="el-icon-phone" />
        </span>
        <el-input v-model="registerForm.mobile" name="realname" type="text" placeholder="请输入电话号码" />
      </el-form-item>
      <el-tooltip v-model="capsTooltip" content="大写键盘打开" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            ref="password"
            :key="passwordType"
            v-model="registerForm.password"
            :type="passwordType"
            placeholder="请输入密码"
            name="password"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleRegister"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>
      <el-form-item prop="confirmPwd">
        <span class="svg-container">
          <svg-icon icon-class="form" />
        </span>
        <el-input
          ref="confirm"
          type="password"
          v-model="registerForm.confirmPwd"
          placeholder="请再次输入密码"
        />
      </el-form-item>
      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px"
        @click.native.prevent="handleRegister"
      >注册</el-button>
    </el-form>
  </div>
</template>

<script>
import { register } from '@/api/user'
export default {
  name: "Register",
  data () {
    var checkPwd = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入密码"))
      } else {
        if (this.registerForm.confirmPwd !== "") {
          this.$refs.registerForm.validateField('confirm')
        }
        callback()
      }
    }
    var confirmPwd = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请再次输入密码"))
      } else if (value !== this.registerForm.password) {
        return callback(new Error("两次输入的密码不一致"))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        username: "",
        realname: "",
        mobile: "",
        password: "",
        confirmPwd: "",
      },
      passwordType: "password",
      capsTooltip: false,
      loading: false,
      rules: {
        password: [
          { validator: checkPwd, trigger: 'blur' }
        ],
        confirm: [
          { validator: confirmPwd, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    checkCapslock ({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if (
          (shiftKey && (key >= "a" && key <= "z")) ||
          (!shiftKey && (key >= "A" && key <= "Z"))
        ) {
          this.capsTooltip = true;
        } else {
          this.capsTooltip = false;
        }
      }
      if (key === "CapsLock" && this.capsTooltip === true) {
        this.capsTooltip = false;
      }
    },
    showPwd () {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleRegister () {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          var newUser = {
            username: this.registerForm.username,
            realname: this.registerForm.realname,
            mobile: this.registerForm.mobile,
            password: this.registerForm.password
          }
          return new Promise((resolve, reject) => {
            register(newUser).then(response => {
              this.$message({
                message: "注册成功！",
                type: 'success'
              })
              this.$router.push("/")
              this.loading = false
              resolve()
            })
          }).catch(err => {
            console.log(err)
            reject(err)
          })
        } else {
          this.loading = true
        }
      })
    }
  }
};
</script>

<style lang="scss" >
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .register-container .el-input input {
    color: $cursor;
  }
}

.register-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.register-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .register-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 80px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>