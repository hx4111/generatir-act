<template>
    <div>
        <el-menu default-active="2" class="el-menu-vertical-demo">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>通用</template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <router-link to="/generator-index"><el-menu-item index="2"><i class="el-icon-menu"></i>制作</el-menu-item></router-link>
            <el-menu-item index="3"><i class="el-icon-setting"></i>其他</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
    export default {
        name: 'nav-bar'
    }
</script>
<style lang="less">
    .nav-bar {
        height: 100%;
        background-color: #EEF1F6;
    }
</style>