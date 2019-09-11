<template>
  <div :class="classObj" class="app-wrapper">
    <navbar />
    <component :is="currentRole" />
  </div>
</template>

<script>
import { Navbar } from '../../layout/components'
import ResizeMixin from '../../layout/mixin/ResizeHandler'
import { mapStat, mapState, mapGetters } from 'vuex'

import { fromTextArea } from 'codemirror';
import ResizeHandler from '../../layout/mixin/ResizeHandler';

import AdminHomepage from "./admin";
import InnerHomepage from "./inner";
import OuterHomepage from "./outer";

export default {
  name: 'HomePage',
  components: {
    Navbar,
    AdminHomepage,
    InnerHomepage,
    OuterHomepage
  },
  data () {
    return {
      currentRole: "AdminHomepage"
    }
  },
  mixins: [ResizeHandler],
  computed: {
    ...mapState({
      device: state => state.app.device,
    }),
    ...mapGetters(['roles']),
    classObj () {
      return {
        mobile: this.device === 'mobile'
      }
    }
  },
  created () {
    if (!this.roles.includes("admin")) {
      if (!this.roles.includes("inner")) {
        this.currentRole = "OuterHomepage"
      } else {
        this.currentRole = "InnerHomepage"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>