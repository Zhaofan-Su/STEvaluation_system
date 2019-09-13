<template>
  <el-popover
    v-if="!locked"
    placement="bottom"
    width="25"
    trigger="manual"
    content="已解锁"
    v-model="popOverShow"
  >
    <el-button
      type="primary"
      circle
      icon="el-icon-unlock"
      size="mini"
      slot="reference"
      @click="handleLock()"
    ></el-button>
  </el-popover>
  <el-popover
    v-else
    placement="bottom"
    width="25"
    trigger="manual"
    content="已锁定"
    v-model="popOverShow"
  >
    <el-button
      type="warning"
      circle
      icon="el-icon-lock"
      size="mini"
      slot="reference"
      @click="handleLock()"
    ></el-button>
  </el-popover>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'Lock',
  props: {
    _locked: {
      type: Boolean,
      default: false
    },
    _popOverShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      locked: this._locked,
      popOverShow: this._popOverShow
    }
  },
  created () {
    if (this.popOverShow) {
      setTimeout(() => {
        this.popOverShow = !this.popOverShow;
      }, 1000);
    }
  },
  methods: {
    handleLock () {
      this.popOverShow = !this.popOverShow;
      this.locked = !this.locked;
      setTimeout(() => {
        this.popOverShow = !this.popOverShow;
      }, 1000);
    }
  }
}
</script>
