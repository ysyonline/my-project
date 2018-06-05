import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/components/common'
import AxHome from '@/components/common/AxHome'

import AxCsRegist from '@/components/cs/reg/AxCsRegist'
import AxCsRegisty from '@/components/cs/reg/AxCsRegisty'
import AxCsRegistx from '@/components/cs/reg/AxCsRegistx'
import AxCsCheck from '@/components/cs/check/AxCsCheck'
import AxCs from '@/components/cs/AxCs'

Vue.use(Router)

/*
Vue.mixin({
  beforeCreate() {
    console.log(this.$store)
    console.log("init");
  }
});
*/

export default new Router({
  routes: [
    {
      path: '/',
      name: "common",
      component: Common,
      children: [
        { path: "", redirect: "home" },
        { path: "/home", name: "home", component: AxHome, meta: { title: "首页" } },
        //保全
        {
          path: "/cs",
          name: "cs",
          component: AxCs,
          children: [
            {
              path: "",
              redirect: "/cs/reg"
            },
            //保全注册
            {
              path: "/cs/reg",
              name: "csregist",
              component: AxCsRegist,
              meta:{title: '注册', name: "regist"},
              children:[
                {
                  path: "/cs/reg/regy",
                  name: "csregisty",
                  component: AxCsRegisty,
                  meta:{title: '注册', name: "regist"},
                },
                {
                  path: "/cs/reg/regx",
                  name: "csregistx",
                  component: AxCsRegistx,
                  meta:{title: '注册', name: "regist"},
                }
              ]
            }, 
            //保全审核
            {
              path: "/cs/check",
              name: "cscheck",
              component: AxCsCheck,
              meta: {
                title: "审核"
              }
            }
          ]
        }
      ]

    }
  ]
})
