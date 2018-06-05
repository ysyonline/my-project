<template>
    <div>
        <h3>菜单</h3>
        <button @click="add">add</button>
    </div>
</template>

<script>
export default {
  name: "subpage",
  data() {
    return {
      num: 0
    };
  },
  methods: {
    add(){
      this.$emit("add", this.num++);
    }
  }
};
</script>