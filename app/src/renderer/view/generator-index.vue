<template>
    <div class="">
        <el-row>
            <el-col :span="7" class="main-col">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="活动名称(分享标题)">
                        <el-input v-model="form.actName"></el-input>
                    </el-form-item>
                    <el-form-item label="关键字">
                        <el-input v-model="form.actKey"></el-input>
                    </el-form-item>
                    <el-form-item label="活动描述(分享描述)">
                        <el-input v-model="form.actDesc"></el-input>
                    </el-form-item>
                    <el-form-item label="评论区">
                        <el-switch on-text="" off-text="" v-model="form.actTopic"></el-switch>
                    </el-form-item>
                    <el-form-item label="评论区id" v-show="form.actTopic">
                        <el-input v-model="form.actTopicId"></el-input>
                    </el-form-item>
                    <el-form-item label="可分享">
                        <el-switch on-text="" off-text="" v-model="form.actShare"></el-switch>
                    </el-form-item>
                    <el-upload v-show="form.actShare"
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        mutiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将分享图拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form>
            </el-col>

            <el-col :span="10" class="main-col">
                <ViturePhone></ViturePhone>
            </el-col>

            <el-col :span="7">

            </el-col>
        </el-row>
    </div>
</template>
<script>
    
    import ViturePhone from '../components/ViturePhone.vue'

    export default {
        data() {
            return {
                form: {
                    actName: '',
                    actKey: '',
                    actDesc: '',
                    actTopic: true,
                    actTopicId: 0,
                    actShare: true
                }
            }
        },
        methods: {
            onSubmit() {

            }
        },
        components: {
            ViturePhone
        }
    }
</script>
<style lang="less">
    .main-col {
        margin: 30px 0;
        text-align: left;
    }
    .line {
        text-align: center;
    }
</style>