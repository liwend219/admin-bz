<template>
    <div class="page-content">
        <div class="page-header">
            <h2>页面配置</h2>
            <Alert type="warning">请完善以下信息，以便完成您用户端页面配置</Alert>
        </div>
        <Row :gutter="30" type="flex" class="page-row page-noBorder" align="middle">
            <Col >
                <b>主图：</b>
            </Col>
            <Col span="5">
                <!-- <uploadBtn accept="image/jpeg,image/gif,image/png" @on-selected="selecteMainImg"></uploadBtn> -->
                <picClippingBox :fixedNumberW="5" :fixedNumberH="2" @imgCropper="selecteMainImg"></picClippingBox>
            </Col>
        </Row>
         <div style="margin-top:10px;display: inline-block;">上传主图照片(尺寸1080x500）</div>
          <!-- <span style="margin-left:100px;color:red;" v-if="imagenull(this.info.indexPic)&&!(imageSize)">照片大小不能超过2M</span>  -->
         <div style="border:1px dashed #ddd;height:100px;line-height:100px;">
             <img style="height:100%;" :src='imageReload(info.indexPic)'></img>
             <span v-if="judgePic(this.info.indexPic)" style="margin-left:20px;">暂无图片</span>
         </div>
        <Row :gutter="30" type="flex" class="page-row page-border" align="middle">
            <Col span="20">
                <Form>
                    <Form-item label="slogen文字" style="margin-bottom: 0;" :required="true">
                        <span style="color: #2d8cf0">（6-14字 偶数slogen代表性文字,超过七个字会自动换行）</span>
                        <Input type="textarea" :maxlength="14" :rows="1" v-model="info.solgn"></Input>
                    </Form-item>
                </Form>
            </Col>
        </Row>
        <Row :gutter="30" class="page-row page-noBorder">
            <Col span="12">
                <Row :gutter="30" type="flex" align="middle">
                    <Col >
                        <b>介绍栏1：</b>
                    </Col>
                    <Col span="10">
                        <picClippingBox :fixedNumberW="13" :fixedNumberH="10" @imgCropper="introduceOne"></picClippingBox>
                    </Col>
                </Row>
                <div style="margin-top:10px;display:inline-block;">上传介绍照片(尺寸500x500）</div>
                <!-- <span style="margin-left:100px;color:red;" v-if="imagenull(this.info.firstIntroductionUrl)">照片大小不能超过2M</span> -->
                <div style="border:1px dashed #ddd;height:100px;">
                    <img style="height:100%;line-height:100px;" :src='imageReload(info.firstIntroductionUrl)'></img>
                    <span v-if="judgePic(this.info.firstIntroductionUrl)" style="margin-left:20px;">暂无图片</span>
                </div>
                <Row :gutter="16" type="flex" class="page-row page-noBorder" align="middle">
                    <Col span="12">
                        <Form>
                            <Form-item label="标题文字" style="margin-bottom: 0;" :required="true">
                                <Input type="textarea" :maxlength="14" :rows="1" v-model="info.firstTitle"></Input>
                            </Form-item>
                        </Form>
                    </Col>
                    <Col span="12">
                        <Form>
                            <Form-item label="注释文字" style="margin-bottom: 0;" :required="true">
                                <Input type="textarea" :maxlength="14" :rows="1" v-model="info.firstAnnotation"></Input>
                            </Form-item>
                        </Form>
                    </Col>
                </Row>
                <Row :gutter="16" type="flex" class="page-row page-noBorder" align="middle">
                    <Col span="24">
                        <Form>
                            <Form-item label="跳转链接" style="margin-bottom: 0;">
                                <Input type="textarea" :rows="1" v-model="info.firstUrl"></Input>
                            </Form-item>
                        </Form>
                    </Col>
                </Row>
            </Col>
            <Col span="12">
                <Row :gutter="30" type="flex" align="middle">
                    <Col >
                        <b>介绍栏2：</b>
                    </Col>
                    <Col span="10">
                        <picClippingBox :fixedNumberW="13" :fixedNumberH="10" @imgCropper="introduceTwo"></picClippingBox>
                    </Col>
                </Row>
                <div style="margin-top:10px;display:inline-block;">上传介绍照片(尺寸500x500）</div>
                <!-- <span style="margin-left:100px;color:red;" v-if="imagenull(this.info.secondIntroductionUrl)">照片大小不能超过2M</span> -->
                <div style="border:1px dashed #ddd;height:100px;">
                    <img style="height:100%;line-height:100px;" :src='imageReload(info.secondIntroductionUrl)'></img>
                    <span v-if="judgePic(this.info.secondIntroductionUrl)" style="margin-left:20px;">暂无图片</span>
                </div>
                <Row :gutter="16" type="flex" class="page-row page-noBorder" align="middle">
                    <Col span="12">
                        <Form>
                            <Form-item label="标题文字" style="margin-bottom: 0;" :required="true">
                                <Input type="textarea" :maxlength="14" :rows="1" v-model="info.secondTitle"></Input>
                            </Form-item>
                        </Form>
                    </Col>
                    <Col span="12">
                        <Form>
                            <Form-item label="注释文字" style="margin-bottom: 0;" :required="true">
                                <Input type="textarea" :maxlength="14" :rows="1" v-model="info.secondAnnotaion"></Input>
                            </Form-item>
                        </Form>
                    </Col>
                </Row>
                <Row :gutter="16" type="flex" class="page-row page-noBorder" align="middle">
                    <Col span="24">
                        <Form>
                            <Form-item label="跳转链接" style="margin-bottom: 0;">
                                <Input type="textarea" :rows="1" v-model="info.secondUrl"></Input>
                            </Form-item>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row :gutter="30" class="page-row page-border">
            <Col span="12">
                <Row :gutter="30" type="flex" align="middle">
                    <Col >
                        <b>介绍栏3：</b>
                    </Col>
                    <Col span="10">
                        <picClippingBox :fixedNumberW="13" :fixedNumberH="10" @imgCropper="introduceThree"></picClippingBox>
                    </Col>
                </Row>
                <div style="margin-top:10px;display:inline-block;">上传介绍照片(尺寸500x500）</div>
                <!-- <span style="margin-left:100px;color:red;" v-if="imagenull(this.info.thirdIntroductionUrl)">照片大小不能超过2M</span> -->
                <div style="border:1px dashed #ddd;height:100px;">
                    <img style="height:100%;line-height:100px;" :src='imageReload(info.thirdIntroductionUrl)'></img>
                    <span v-if="judgePic(this.info.thirdIntroductionUrl)" style="margin-left:20px;">暂无图片</span>
                </div>
                <Row :gutter="16" type="flex" class="page-row page-noBorder" align="middle">
                    <Col span="12">
                        <Form>
                            <Form-item label="标题文字" style="margin-bottom: 0;" :required="true">
                                <Input type="textarea" :maxlength="14" :rows="1" v-model="info.thirdTitle"></Input>
                            </Form-item>
                        </Form>
                    </Col>
                    <Col span="12">
                        <Form>
                            <Form-item label="注释文字" style="margin-bottom: 0;" :required="true">
                                <Input type="textarea" :maxlength="14" :rows="1" v-model="info.thirdAnnotation"></Input>
                            </Form-item>
                        </Form>
                    </Col>
                </Row>
                <Row :gutter="16" type="flex" class="page-row page-noBorder" align="middle">
                    <Col span="24">
                        <Form>
                            <Form-item label="跳转链接" style="margin-bottom: 0;">
                                <Input type="textarea" :rows="1" v-model="info.thirdUrl"></Input>
                            </Form-item>
                        </Form>
                    </Col>
                </Row>
            </Col>
            <Col span="12">
                <Row :gutter="30" type="flex" align="middle">
                    <Col >
                        <b>介绍栏4：</b>
                    </Col>
                    <Col span="10">
                        <!-- <uploadBtn accept="image/jpeg,image/gif,image/png" @on-selected="introduceFour"></uploadBtn> -->
                        <picClippingBox :fixedNumberW="13" :fixedNumberH="10" @imgCropper="introduceFour"></picClippingBox>
                    </Col>
                </Row>
                <div style="margin-top:10px;display:inline-block;">上传介绍照片(尺寸500x500）</div>
                <!-- <span style="margin-left:100px;color:red;" v-if="imagenull(this.info.forthIntroductionUrl)">照片大小不能超过2M</span> -->
                <div style="border:1px dashed #ddd;height:100px;">
                    <img style="height:100%;line-height:100px;" :src='imageReload(info.forthIntroductionUrl)'></img>
                    <span v-if="judgePic(this.info.forthIntroductionUrl)" style="margin-left:20px;">暂无图片</span>
                </div>
                <Row :gutter="16" type="flex" class="page-row page-noBorder" align="middle">
                    <Col span="12">
                        <Form>
                            <Form-item label="标题文字" style="margin-bottom: 0;" :required="true">
                                <Input type="textarea" :maxlength="14" :rows="1" v-model="info.forthTitle"></Input>
                            </Form-item>
                        </Form>
                    </Col>
                    <Col span="12">
                        <Form>
                            <Form-item label="注释文字" style="margin-bottom: 0;" :required="true">
                                <Input type="textarea" :maxlength="14" :rows="1" v-model="info.forthAnnotation"></Input>
                            </Form-item>
                        </Form>
                    </Col>
                </Row>
                <Row :gutter="16" type="flex" class="page-row page-noBorder" align="middle">
                    <Col span="24">
                        <Form>
                            <Form-item label="跳转链接" style="margin-bottom: 0;">
                                <Input type="textarea" :rows="1" v-model="info.forthUrl"></Input>
                            </Form-item>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row :gutter="30" type="flex" class="page-row page-noBorder" align="middle">
            <Col span="12">
                <Form>
                    <Form-item style="margin-bottom: 0;">
                        <b>合作保险公司：</b>
                        <Select v-model="info.policyIds" multiple>
                            <Option v-for="item, index in lists" :value="item.code" :key="index">{{ item.name }}</Option>
                        </Select>
                    </Form-item>
                </Form>
            </Col>
        </Row>
        <Row :gutter="30" type="flex" class="page-row page-noBorder" style="margin-bottom: 150px" align="middle">
            <Col span="4">
                <Button type="primary" @click="saveGolbalConfig">　保存　</Button>
            </Col>
        </Row>
    </div>
</template>
<script>
    import uploadBtn from "../../components/uploadBtn.vue";
    import compneys from "../../mock/insurCompneys.json";
    import picClippingBox from "../../components/picClippingBox.vue"
    import { getGlobalInfo, nodeRoot, uploadImage, saveGlobalInfo } from "../../api/tenant/uiConfigGlobal.js"
    export default {
        data () {
            return {
                agent: this.$store.getters.agent,
                info: {
                    id: "",
                    tid: this.$store.getters.tid,
                    indexPic: "",
                    solgn: "",
                    firstTitle: "",
                    firstAnnotation: "",
                    firstUrl: "",
                    secondTitle: "",
                    secondAnnotaion: "",
                    secondUrl: "",
                    thirdTitle: "",
                    thirdAnnotation: "",
                    thirdUrl: "",
                    forthTitle: "",
                    forthAnnotation: "",
                    forthUrl: "",
                    firstIntroductionUrl: "",
                    secondIntroductionUrl: "",
                    thirdIntroductionUrl: "",
                    forthIntroductionUrl: "",
                    policyIds: []
                },
                lists: compneys,
                randomStr: "13124"
            }
        },
        mounted () {
            console.log(this.agent)
            this.globalInfoGet()
        },
        components:{
            uploadBtn,picClippingBox
        },
        computed: {

        },
        methods: {           
            imageSize (size) {
                if(size>2*1024*1024){
                    this.$Message.warning({
                        content: "照片大小不能超过2M",
                        duration: 5 
                    })
                    return false;
                }
                else {
                    return true
                }
                
            },
            imagenull (pic) {
                if(pic==""){
                     return false
                }else{
                     return true
                }
            },
            getRandomStr () {
              this.randomStr = Math.random().toString(36).substr(2)
            },
            imageReload (img) {
              return img + "?ram=" + this.randomStr
            },
            selecteMainImg (image) {
                let opt = {
                    imgData: image,
                    agent: this.agent,
                    type: "master",
                    phoneNo: this.agent,
                }
                uploadImage(opt).then(data => {
                    this.getRandomStr()
                    this.info.indexPic = nodeRoot+data
                    console.log(nodeRoot+data)
                }).catch( err => {
                    this.$Message.error("图片上传失败")
					console.log(err);
				});
            },
            introduceOne (image) {
                // if(!this.imageSize(image.size)){return}
                let opt = {
                    imgData: image,
                    agent: this.agent,
                    type: "int1",
                    phoneNo: this.agent,
                }
                uploadImage(opt).then(data => {
                    this.getRandomStr()
                    this.info.firstIntroductionUrl = nodeRoot+data
                    console.log(nodeRoot+data)
                }).catch( err => {
                    this.$Message.error("图片上传失败")
					console.log(err);
				});
            },
            introduceTwo (image) {
                // if(!this.imageSize(image.size)){return}
                let opt = {
                    imgData: image,
                    agent: this.agent,
                    type: "int2",
                    phoneNo: this.agent,
                }
                uploadImage(opt).then(data => {
                    this.getRandomStr()
                    this.info.secondIntroductionUrl = nodeRoot+data
                    console.log(nodeRoot+data)
                }).catch( err => {
                    this.$Message.error("图片上传失败")
					console.log(err);
				});
            },
            introduceThree (image) {
                // if(!this.imageSize(image.size)){return}
                let opt = {
                    imgData: image,
                    agent: this.agent,
                    type: "int3",
                    phoneNo: this.agent,
                }
                uploadImage(opt).then(data => {
                    this.getRandomStr()
                    this.info.thirdIntroductionUrl = nodeRoot+data
                    console.log(nodeRoot+data)
                }).catch( err => {
                    this.$Message.error("图片上传失败")
					               console.log(err);
				});
            },
            introduceFour (image) {
                // if(!this.imageSize(image.size)){return}
                let opt = {
                    imgData: image,
                    agent: this.agent,
                    type: "int4",
                    phoneNo: this.agent,
                }
                uploadImage(opt).then(data => {
                    this.getRandomStr()
                    this.info.forthIntroductionUrl = nodeRoot+data
                    console.log(nodeRoot+data)
                }).catch( err => {
                    this.$Message.error("图片上传失败")
					console.log(err);
				});
            },
            globalInfoGet () {
                getGlobalInfo().then(data => {
                    if(data.data){
                        this.info = data.data
                    }
                })
            },
            judgePic (src) {

                if(src!=""){
                    return false;
                }
                else{
                    return true;
                }
            },
            saveGolbalConfig () {
                if(!this.infoValid()){
                    return
                }
                if(this.info.solgn.length>=7){
                    var solgn=this.info.solgn
                    this.info.solgn=solgn.slice(0,parseInt(solgn.length/2))+'<br>'+solgn.slice(parseInt(solgn.length/2))
                }
                saveGlobalInfo(this.info).then(data => {
                    this.$Message.success("保存成功")
                }).catch(err => {
                    console.log(err)
                })
            },
            infoValid () {
                function urlTest (url) {
                    return url.indexOf('http://')!=0&&url.indexOf('https://')!=0
                }
                let firstUrl = this.info.firstUrl;
                let secondUrl = this.info.secondUrl;
                let thirdUrl = this.info.thirdUrl;
                let forthUrl = this.info.forthUrl;
                if (!this.info.indexPic) {
                    this.$Message.warning("请上传主图")
                    return false
                } else if (!this.info.solgn) {
                    this.$Message.warning("请输入SLOGEN文字")
                    return false
                } else if (!this.info.firstIntroductionUrl) {
                    this.$Message.warning("请上传介绍栏1的图片")
                    return false
                } else if (!this.info.firstTitle) {
                    this.$Message.warning("请输入介绍栏1的标题")
                    return false
                } else if (!this.info.firstAnnotation) {
                    this.$Message.warning("请输入介绍栏1的注释")
                    return false
                }else if(firstUrl!=null&&firstUrl!=""&&urlTest(firstUrl)){
                    this.$Message.warning("介绍栏1链接有误，应以'http://'或者'https://'开头")
                    return false                   
                }else if (!this.info.secondIntroductionUrl) {
                    this.$Message.warning("请上传介绍栏2的图片")
                    return false
                } else if (!this.info.secondTitle) {
                    this.$Message.warning("请输入介绍栏2的标题")
                    return false
                } else if (!this.info.secondAnnotaion) {
                    this.$Message.warning("请输入介绍栏2的注释")
                    return false
                }else if(secondUrl!=null&&secondUrl!=""&&urlTest(secondUrl)){
                    this.$Message.warning("介绍栏2链接有误，应以'http://'或者'https://'开头")
                    return false                   
                }else if (!this.info.thirdIntroductionUrl) {
                    this.$Message.warning("请上传介绍栏3的图片")
                    return false
                } else if (!this.info.thirdTitle) {
                    this.$Message.warning("请输入介绍栏3的标题")
                    return false
                } else if (!this.info.thirdAnnotation) {
                    this.$Message.warning("请输入介绍栏3的注释")
                    return false
                }else if(thirdUrl!=null&&thirdUrl!=""&&urlTest(thirdUrl)){
                    this.$Message.warning("介绍栏3链接有误，应以'http://'或者'https://'开头")
                    return false                   
                }else if (!this.info.forthIntroductionUrl) {
                    this.$Message.warning("请上传介绍栏4的图片")
                    return false
                } else if (!this.info.forthTitle) {
                    this.$Message.warning("请输入介绍栏4的标题")
                    return false
                }else if (!this.info.forthAnnotation) {
                    this.$Message.warning("请输入介绍栏4的注释")
                    return false
                }else if(forthUrl!=null&&forthUrl!=""&&urlTest(forthUrl)){
                    this.$Message.warning("介绍栏4链接有误，应以'http://'或者'https://'开头")
                    return false                   
                }else if (this.info.policyIds.length == 0) {
                    this.$Message.warning("至少要选择一个保险公司")
                    return false
                } else {
                    return true
                }
            }
        }
    }
</script>
<style scoped>
    .page-content{

    }
    .page-header{
        margin-left: -15px;
        margin-right: -15px;
        width: 100%;
    }
    .page-header h2{
        margin-bottom: 15px;
    }
    .logo-preview{
        height: 80px;
        width: 100%;
        border: 1px solid #dddee1;
        border-radius: 4px;
        font-size: 12px;
    }
    .page-row{
        width: 100%;
    }
    .page-noBorder{
        padding-top: 20px;
    }
    .page-border{
        padding: 20px 0;
        border-bottom: 1px solid #dddee1;
    }
    .page-col{
        font-size: 14px;
    }
</style>
