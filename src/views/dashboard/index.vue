<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import adminDashboard from "./admin";
import editorDashboard from "./editor";
import innerDashboard from "./inner";

export default {
  name: "Dashboard",
  components: {
    adminDashboard,
    editorDashboard,
    innerDashboard
  },
  data () {
    return {
      currentRole: "adminDashboard"
    };
  },
  computed: {
    ...mapGetters(["roles"])
  },
  created () {
    if (!this.roles.includes("admin")) {
      if (!this.roles.includes("inner")) {
        this.currentRole = "editorDashboard"
      } else {
        this.currentRole = "innerDashboard"
      }
    }
  }
};
</script>
