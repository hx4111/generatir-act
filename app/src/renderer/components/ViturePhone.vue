<template>
    <div class="phone-page">
        <!-- 手机界面 -->
        <el-col :span="12">
            <div class="phone-pannel">
                <ul class="img-list">
                    <li v-for="img in imgList" @drop="onDrop($event)" @dragover="onDragOver($event)">
                        <img :src="imgBase + img" alt="">
                    </li> 
                </ul>
            </div>
            <div class="bg-ctrl-pannel">
                <el-button type="primary" @click="changeBgImg">点击选择背景图片</el-button>
                <span slot="tip" class="el-upload__tip">  只能上传jpg文件</span>
            </div>
        </el-col>  
        <!-- 控制按钮 -->
        <!-- <el-col :span="6">
            <div class="active-btn-ctrl">
                <el-form ref="form" :model="goBtnForm" label-width="80px">
                    <el-form-item label="x">
                        <el-input v-model="goBtnForm.btnX"></el-input>
                    </el-form-item>
                    <el-form-item label="y">
                        <el-input v-model="goBtnForm.btnY"></el-input>
                    </el-form-item>
                    <el-form-item label="宽">
                        <el-input v-model="goBtnForm.btnW"></el-input>
                    </el-form-item>
                    <el-form-item label="高">
                        <el-input v-model="goBtnForm.btnH"></el-input>
                    </el-form-item>
                    <div v-if="activeType == 'go'">
                        <el-form-item label="漫画id">
                            <el-input v-model="goBtnForm.ccid"></el-input>
                        </el-form-item>
                        <el-form-item label="话数id">
                            <el-input v-model="goBtnForm.epid"></el-input>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="btn-list">
                <div class="viture-btn go"
                    draggable="true" 
                    @dragstart="onDragStart($event, 'go')">
                    阅读漫画按钮
                </div>
            </div>
        </el-col> -->
    </div>
</template>
<script>
    import { ImgTools } from '../../service/imgTools'
    import protocols from 'electron-protocols'

    export default {
        data() {
            return {
                imgBase: 'apptempimg://',
                imgList: [],
                activeType: '',
                dragEle: '',
                goBtnForm: {
                    btnX: 0,
                    btnY: 0,
                    btnW: 100,
                    btnH: 20,
                    epid: 0,
                    ccid: 0
                },
                goBtnStyle: {
                    width: 0, 
                    height: 20
                }
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
            },
            // 拖拽元素
            onDragStart(ev, activeType) {
                console.info('start')
                this.dragEle = ev.currentTarget.cloneNode()
                this.dragEle.className += ' active'
                this.dragEle.textContent += '阅读漫画'
                this.activeType = activeType
            },
            onDrop(ev) {
                ev.preventDefault()
                console.info('drop')
                console.info(this.dragEle)
                console.info(ev.target)
                let target = ev.target 
                target = target.parentNode
                target.append(this.dragEle)
            },
            onDragOver(ev) {
                console.info('over')
                ev.preventDefault()
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
            position: relative;

            img {
                display: table;
                width: 100%;
                z-index: 1;
            }

            .viture-btn {
                position: absolute;
                z-index: 10;

                &.active {
                    border: 1px dashed #000;
                }
            }
        }
    }

    .viture-btn {

        &.go {
            text-align: center;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 150px;
            cursor: move;
        }
    }
</style>