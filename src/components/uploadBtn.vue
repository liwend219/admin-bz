<style scoped>
    .ivu-btn-info{
        color: #2db7f5;
        background-color: #fff;
    }
    .ivu-upload{
        display: inline-block;
    }
</style>
<template>
    <div class="ivu-upload">
        <div class="ivu-upload ivu-upload-select">
            <input type="file" :accept="accept" @change="selected" class="ivu-upload-input">
            <button type="button" class="ivu-btn ivu-btn-info" @click="start">
                <i class="ivu-icon ivu-icon-ios-cloud-upload-outline"></i>
                <span>上传文件</span>
            </button>
        </div>
        <Progress :percent="progress" :stroke-width="2" :status="status" v-if="progress>0"></Progress>
    </div>
</template>
<script>
    export default {
        props: ['accept'],
        data () {
            return {
                input: "",
                timer: "",
                progress: 0,
                status:'normal'
            }
        },
        mounted () {
            this.input = this.$(this.$el).find("input")
        },
        methods: {
            start () {
                this.input.click()
            },
            interval (t) {
                if(this.timer){
                    clearInterval(this.timer)
                }
                this.timer = setInterval(() => {
                    this.progress++
                    if(this.progress==100){
                        clearInterval(this.timer)
                    }
                },t)
            },
            statuss (size) {
                if(size>1024*1024*2){
                    this.status="wrong"
                    this.$Message.warning({
                        content: "照片大小不能超过2M",
                    })
                    return false
                }
                this.status="success"
                return true
            },
            selected (event) {
                let _this = this
                _this.progress=0
                _this.interval(500)
                let img = event.target.files[0]
                let image = {'size': img.size}
                if(!this.statuss (image.size)){
                    _this.progress=5
                    clearInterval(this.timer)
                    return
                } 
                console.log(image.size+'大小')
                let reader = new FileReader()
                reader.onload = function(e){
                    image.data = e.target.result
                    _this.interval(5)
                    _this.$emit('on-selected', image);
                };
                if(img){
                    reader.readAsDataURL(img);
                }else{
                    return;
                }
            }
        }
    }
</script>