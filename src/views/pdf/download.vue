<template>
  <detail :eId="this.$route.query.id"></detail>
</template>

<script>
import { getHistory } from "@/api/projects";
import { mapGetters } from "vuex";
import detail from './detail'

export default {
  name: 'download',
  components: {
    detail
  },
  data () {
    return {
      fullscreenLoading: true,
      fullscreenLoading: false,
    };
  },
  created () {
    this.print()
  },
  methods: {
    print () {
      if (this.getExplorer() === "IE") {
        this.pageSetup_null()
      }
      setTimeout(() => {
        window.print()
      }, 500)
    },
    pageSetup_null () {
      let hkey_root, hkey_path, hkey_key
      hkey_root = "HKEY_CURRENT_USER";
      hkey_path = "\\Software\\Microsoft\\Internet Explorer\\PageSetup\\";
      try {
        var RegWsh = new ActiveXObject("WScript.Shell");
        hkey_key = "header";
        RegWsh.RegWrite(hkey_root + hkey_path + hkey_key, "");
        hkey_key = "footer";
        RegWsh.RegWrite(hkey_root + hkey_path + hkey_key, "");
      } catch (e) { }
    },
    getExplorer () {
      let explorer = window.navigator.userAgent;
      //ie
      if (explorer.indexOf("MSIE") >= 0) {
        return "IE";
      }
      //firefox
      else if (explorer.indexOf("Firefox") >= 0) {
        return "Firefox";
      }
      //Chrome
      else if (explorer.indexOf("Chrome") >= 0) {
        return "Chrome";
      }
      //Opera
      else if (explorer.indexOf("Opera") >= 0) {
        return "Opera";
      }
      //Safari
      else if (explorer.indexOf("Safari") >= 0) {
        return "Safari";
      }
    }
  }
}
</script>


<style lang="scss" scoped>
@media print {
  @page {
    size: auto;
    margin: 0;
  }
}
</style>
