<style scoped>
    .layout-content{
        min-height: 75vh;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
</style>
<template>
   <div class="layout-content">
        <div class="layout-content-main">
            <Row style="margin-bottom:20px;">
                <Col span="6">
                    <h2>自定义组件</h2>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="6">
                     <cityPicker></cityPicker> 
                </Col>
                <Col span="6">
                    <div>col-6</div>
                </Col>
                <Col span="6">
                    <div>col-6</div>
                </Col>
                <Col span="6">
                    <div>col-6</div>
                </Col>
            </Row>
       </div> 
       <picClippingBox @imgCropper="getImgSrc"></picClippingBox>
        <div class="div2">
            <img :src="imgCropper"></img>
        </div>
    </div>
   
</template>

<script>
    import vueCropper from 'vue-cropper';
    import store from "../store";
    import cityPicker from "../components/cityPicker.vue";
    import picClippingBox from "../components/picClippingBox";
    export default {
        data () {
            return {
               imgCropper:''
            }
        },
        components:{
            cityPicker,picClippingBox
        },
        computed: {
            
        },
        methods: {
           getImgSrc (data) {
               this.imgCropper=data
                console.log(data)
                console.log(132)
           }
        }
        
    }
</script>

<style>
    
    .div2{
        height: 600px;
        width:600px;
        margin : 50px auto;
        border : 1px solid #CCC;
    } 
</style>