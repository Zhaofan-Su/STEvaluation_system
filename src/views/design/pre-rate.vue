<template>
  <div class="app-container">
    <h1>钢结构建筑构件预制率</h1>

    <!-- <ul class="rating-main">
      <li v-for="rating-item"
    </ul>-->
    <div v-for="item in ratingItems" :key="item.id">
      <el-card class="rating-item" shadow="hover">
        <div slot="header" class="clearfix">
          <div class="aspect">{{item.id}}.&nbsp;{{item.aspect}}（总分&nbsp;{{item.max_score}}&nbsp;分）</div>

          <div class="options">
            <el-button
              type="primary"
              circle
              icon="el-icon-document"
              size="mini"
              @click="item.dialogVisible=true"
            ></el-button>
            <!-- 弹出框，提示具体的评价指标 -->
            <el-dialog
              :title="item.aspect+'--评价指标及要求'"
              :visible.sync="item.dialogVisible"
              width="30%"
              :before-close="handleClose"
              center
            >
              <span>{{item.evaluation_index}}</span>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="item.dialogVisible=false">确定</el-button>
              </span>
            </el-dialog>

            <el-popover
              v-if="!item.locked"
              placement="bottom"
              width="25"
              trigger="manual"
              content="已解锁"
              v-model="item.popOverShow"
            >
              <el-button
                type="primary"
                circle
                icon="el-icon-unlock"
                size="mini"
                slot="reference"
                @click="handleLock(item)"
              ></el-button>
            </el-popover>
            <el-popover
              v-else
              placement="bottom"
              width="25"
              trigger="manual"
              content="已锁定"
              v-model="item.popOverShow"
            >
              <el-button
                type="warning"
                circle
                icon="el-icon-lock"
                size="mini"
                slot="reference"
                @click="handleLock(item)"
              ></el-button>
            </el-popover>
          </div>
        </div>
        <div class="evaluation">
          <el-form ref="form" :model="item" label-width="200px">
            <el-form-item label="是否满足评价指标及要求">
              <el-radio-group v-model="item.satisfy">
                <el-radio :label="true" :disabled="item.locked">是</el-radio>
                <el-radio :label="false" :disabled="item.locked">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="得分">
              <el-input :disabled="item.locked" v-model="item.score" style="width:80px" />
            </el-form-item>
            <el-form-item label="不满足简述">
              <el-input :disabled="item.locked" type="textarea" v-model="item.description"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreRate",

  data() {
    return {
      ratingItems: [
        {
          id: 1,
          aspect: "外墙板"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.app-container {
}
</style>

