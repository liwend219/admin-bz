<template>
    <div>
        <uploadBtn accept="image/jpeg,image/gif,image/png" @on-selected="selecteMainImg"></uploadBtn> 
        <Modal
            v-model="modal5"
            title="选择图片"
            width="1000"
            class="cropper-modal"
            class-name="cropper-modal-content"
            :styles="{'z-index': '1009'}">
            <div class='div1'> 
                 <vueCropper
                    ref="cropper"
                    :img="example2.img"
                    :outputSize="example2.size"
                    :outputType="example2.outputType"
                    :info="example2.info"
                    :canScale="example2.canScale"
                    :autoCrop="example2.autoCrop"
                    :autoCropWidth="example2.autoCropWidth"
                    :autoCropHeight="example2.autoCropHeight"
                    :fixed="example2.fixed"
                    :fixedNumber="example2.fixedNumber">
                </vueCropper> 
             </div> 
            
            <div slot="footer">
                <Button type="info" size="large" @click="finish">确认裁剪</Button>
                <Button size="large" @click="close">取消</Button>
            </div>
        </Modal>
         
    </div> 
</template>

<script>
    import iview from 'iview'
    import vueCropper from 'vue-cropper'
    import uploadBtn from './uploadBtn.vue'
    export default {
        props: {
            fixedNumberW: {
                type: Number,
                required: true
            },
            fixedNumberH: {
                type: Number,
                required: true
            }
        },
        data () {
            return {
                example2: {},
                data:{},
                modal5: false,
            }
        },
        components:{
            vueCropper,uploadBtn
        },
        methods:{
            close () {
                this.modal5=false
                return
            },
            finish (type) {
                console.log('裁剪')
                this.$refs.cropper.getCropData((data) => {
                    this.$emit("imgCropper",data)
                    this.modal5=false
			    })
            },
            selecteMainImg (data) {
                this.data=data
                console.log(data)
                this.open ();
            },
            open () {
                console.log(this.fixedNumberW)
                this.modal5 = true
                this.example2 = {
                    imgSrc:'',
                    id:'img1',
                    img: this.data.data,
                    info: true,
                    size: 1,
                    outputType: 'jpeg',
                    canScale: true,
                    autoCrop: true,
                    // 只有自动截图开启 宽度高度才生效
                    autoCropWidth: 200,
                    autoCropHeight: 150,
                    // 开启宽度和高度比例
                    fixed: true,
                    fixedNumber:[this.fixedNumberW,this.fixedNumberH]
                }
            }
        }
    }
</script>

<style>
    .div1{
        height:500px; 
        background: red;
        margin:0 auto;
        width: 800px; 
    }
    .ivu-modal-wrap.cropper-modal-content {
        z-index: 1008;
    }
    .cropper-modal>.ivu-modal-mask{
        z-index: 1008;
    }
</style>
<style scoped>
        .cropper-modal {
        z-index: 1007;
    }
</style>



