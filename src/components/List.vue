<template>
  <div>
    <div class="">
      <ul class="nav">
        <li class="dropdwon" :key="item.id" v-for="item in menu">
          <a class="dropbtn" href="javacript:void(0)">{{item.title}}</a>
          <div class="msg">
            <h1>{{item.submenu.title}}</h1>
            <p>{{item.submenu.content}}</p>
          </div>
        </li>
      </ul>
    </div>
    {{count}}222
    <ax-menu v-on:add="addT"></ax-menu>{{msg}}
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Menu from "./Menu";

export default {
  data() {
    return {
      menu: [
        { title: "天猫", submenu: { title: "我的消息", content: "..." } },
        { title: "天猫", submenu: { title: "我的消息", content: "..." } },
        { title: "天猫", submenu: { title: "我的消息", content: "..." } }
      ],
      msg: "--"
    };
  },
  computed: mapGetters(["count"]),
  components: {
    "ax-menu": Menu
  },
  methods: {
    addT(x) {
      console.log(x);
      this.$store.dispatch("increment");
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
}
.nav {
  list-style: none;
}
.nav::after {
  content: "";
  display: block;
  clear: both;
}
.nav li {
  float: left;
  margin: 10px;
  position: relative;
}
.nav li a {
  display: inline-block;
  height: 20px;
  line-height: 20px;
  padding: 10px;
  text-decoration: none;
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 5px;
}
.nav li a:hover,
.nav li:hover .dropbtn {
  background: #5c3317;
  color: #fff;
}
.nav li:hover .msg {
  display: block;
}
.msg {
  display: none;
  height: 200px;
  width: 200px;
  border: 1px solid #000;
  position: absolute;
}
</style>
