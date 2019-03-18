<template>
    <el-container>
        <el-header>
            <app-header></app-header>
        </el-header>
        <el-container>
            <app-content></app-content>
        </el-container>
    </el-container>
</template>

<script>
import { AppHeader, AppContent } from "@/components";

export default {
    components: {
        AppHeader, AppContent
    },
}
</script>

<style lang="scss" scoped>
.el-container {
    .el-header {
        background-color: rgb(84, 92, 100);
    }
    .el-header,
    .el-container {
        > div {
            width: 1200px;
            margin: 0 auto;
        }
    }
    .el-container {
        margin-top: 30px;
        margin-bottom: 30px;
        > div {
            background-color: #ffffff;
            padding: 30px;
        }
    }
}
</style>

