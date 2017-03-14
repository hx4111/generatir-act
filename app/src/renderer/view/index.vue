<template>
    <div class="page">
        <act-header></act-header>
        <el-row class="page-row">
            <el-col :span="2" class="nav-bar">
                <NavBar></NavBar>
            </el-col>
            <el-col :span="22" class="page-main">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import NavBar from '../components/NavBar.vue'

    export default {
        data() {
            return {

            }
        },
        components: {
            NavBar,
            'act-header': Header
        }
    }
</script>

<style lang="less">
    .page-row {
        height: 95%;
    }
    .page-main {
        padding: 20px;
    }
</style>