<template>
  <div>
    <h3 class="atitle">{{title}}</h3>
    <span>{{count}}</span>sss
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "count",
  data() {
    return {
      title: 'title'
    };
  },
  computed:mapGetters([
    "count"
  ]),
  methods: mapActions([
    "increment",
    "decrement"
  ])
};
</script>

<style lang="scss">
@import './common/index.scss';

$title-color: green;
.atitle {
  color: $title-color;
  @include border-style;
}

</style>

