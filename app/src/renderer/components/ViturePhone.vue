<template>
    <div class="phone-page">
        <div class="phone-pannel">
            <ul class="img-list">
                <li v-for="img in imgList">
                    <img :src="imgBase + img" alt="">
                </li> 
            </ul>
        </div>
        <div class="bg-ctrl-pannel">
            <el-button type="primary" @click="changeBgImg">点击选择背景图片</el-button>
            <span slot="tip" class="el-upload__tip">  只能上传jpg文件</span>
        </div>
    </div>
</template>
<script>
    import { ImgTools } from '../../service/imgTools'
    import protocols from 'electron-protocols'

    export default {
        data() {
            return {
                imgBase: 'apptemp://',
                imgList: []
            }
        },
        methods: { 
            // 更换背景图片
            changeBgImg() {
                let cropRes = ImgTools.chooseImg()
                if (cropRes) {
                    cropRes.then((obj) => {
                        this.imgList = obj
                    })
                }
            }
        }
    }
</script>
<style lang="less">
    .phone-page {
        position: relative;
    }
    .phone-pannel {
        margin: 0 auto;
        width: 375px;
        height: 677px;
        border: 1px solid #E2E2E3;
        overflow: auto;
    }
    .bg-ctrl-pannel {
        margin-top: 1rem; 
        text-align: center;
        span {
            margin-left: .5rem;
        }
    }
    .img-list {
        width: 100%;

        li {

            img {
                display: table;
                width: 100%;
            }
        }
    }
</style>