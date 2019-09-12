<template>
  <div class="app-container">
    <!-- <navbar /> -->
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapStat, mapState, mapGetters } from "vuex";

import AdminHomepage from "./admin";
import InnerHomepage from "./inner";
import OuterHomepage from "./outer";

export default {
  name: "HomePage",
  components: {
    AdminHomepage,
    InnerHomepage,
    OuterHomepage
  },
  data() {
    return {
      currentRole: "AdminHomepage"
    };
  },
  computed: {
    ...mapGetters(["roles"])
  },
  created() {
    if (!this.roles.includes("admin")) {
      if (!this.roles.includes("inner")) {
        this.currentRole = "OuterHomepage";
      } else {
        this.currentRole = "InnerHomepage";
      }
    }
  }
};
</script>


