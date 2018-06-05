<template>
    <div>
        <h3>子夜</h3>
        {{count}}
        <button @click="increment">add</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "subpage",
  computed: mapGetters(["count"]),
  methods: mapActions(["increment"])
};
</script>