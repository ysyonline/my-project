<template>
  <el-tabs v-if="options.length" v-model="activeTabValue" type="border-card" closable @tab-remove="removeTab" @tab-click="clickTab">
    <el-tab-pane v-for="item in options" :key="item.name" :label="item.title" :name="item.name">
    </el-tab-pane>

    <router-view></router-view>

  </el-tabs>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import Vue from "vue";

export default {
  data() {
    return {};
  },
  watch: {
    $route(to, from) {
      let {meta: { name, title } } = this.$route;
      this.$store.dispatch("forwardModule", {
        title,
        name
      });
    }
  },
  computed: {
    activeTabValue: {
      get() {
        return this.$store.state.activeTabValue;
      },
      set() {}
    },
    ...mapGetters(["options", "tabIndex"])
  },
  created() {
    let { name, meta: { title } } = this.$route;
    this.$store.dispatch("forwardModule", {
      title,
      name
    });
  },
  methods: {
    clickTab(inst) {
      console.log(",,");
      this.$router.push({ name: inst.$props.name });
      this.$store.dispatch("forwardModule", {
        title: inst.$props.title,
        name: inst.$props.name
      });
    },
    removeTab(targetName) {
      this.$store.dispatch("removeTab", { targetName });
      this.$router.push({ name: this.activeTabValue });
    }
  }
};
</script>
