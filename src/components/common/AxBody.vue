<template>
   <el-main>
       <ax-tab></ax-tab>
       
   </el-main>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

import AxTab from '@/components/common/AxTab';

export default {
  data() {
    return {
      title: 'title'
    };
  },
  components:{AxTab}
};
</script>

<style lang="scss">

</style>

