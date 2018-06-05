<template>
    <el-container>
        <ax-sider></ax-sider>
        <el-container>
            <ax-header></ax-header>
            <ax-body></ax-body>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script>
import AxHeader from '@/components/common/AxHeader';
import AxBody from '@/components/common/AxBody';
import AxSider from '@/components/common/AxSider';

export default {
    components:{AxHeader,AxBody,AxSider}
};
</script>
