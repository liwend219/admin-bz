<template>
    <div class="page-content">
        <div class="page-header">
            <h2>基础配置</h2>
            <Alert type="warning">如需更改基础配置，请联系保挣客服人员</Alert> 
        </div>
        <template v-if="!loaded">
            <Spin size="large" class="page-spin"></Spin>
        </template>
        <template v-else>
            <Row :gutter="30" type="flex" class="page-row page-border" align="middle">
                <Col span="4" class="page-col ">
                    <span>LOGO：</span>
                </Col>
                <Col span="6" class="page-col">
                    <div class="logo-preview">
                        <img :src="baseInfo.logo" alt="">
                    </div>
                </Col>
            </Row>
            <Row :gutter="30" type="flex" class="page-row page-noBorder" align="middle">
                <i-col span="4" class="page-col">
                    <span>公司名称：</span>
                </i-col>
                <i-col span="6">
                    <Input :readonly="true" :value="baseInfo.mername"></Input>
                </i-col>
            </Row>
            <Row type="flex" :gutter="30" align="middle" class="page-row page-border">
                <i-col span="4" class="page-col">
                    <span>公司简称：</span>
                </i-col>
                <i-col span="6">
                    <Input :readonly="true" :value="baseInfo.shortName"></Input>
                </i-col>
            </Row>
            <Row :gutter="30" type="flex" class="page-row page-noBorder" align="middle">
                <i-col span="4" class="page-col">
                    <span>联系人：</span>
                </i-col>
                <i-col span="6">
                    <Input :readonly="true" :value="baseInfo.contactsName"></Input>
                </i-col>
                <i-col span="4" class="page-col">
                    <span>联系人电话：</span>
                </i-col>
                <i-col span="6">
                    <Input :readonly="true" :value="baseInfo.contactsTelephone"></Input>
                </i-col>
            </Row>
            <Row type="flex" :gutter="30" align="middle" class="page-row page-border">
                <i-col span="4" class="page-col">
                    <span>邮箱：</span>
                </i-col>
                <i-col span="6">
                    <Input :readonly="true" :value="baseInfo.email"></Input>
                </i-col>
                <i-col span="4" class="page-col">
                    <span>公司地址：</span>
                </i-col>
                <i-col span="6">
                    <Input :readonly="true" :value="baseInfo.meraddress"></Input>
                </i-col>
            </Row>
            <Row :gutter="30" type="flex" class="page-row page-noBorder" align="middle">
                <i-col span="4" class="page-col">
                    <span>公司简介：</span>
                </i-col>
                <i-col span="16">
                    <Input :readonly="true" type="textarea" :value="baseInfo.discription"></Input>
                </i-col>
            </Row>
        </template>
    </div>
</template>
<script>
    import { getBasicInfo, nodeRoot } from "../../api/tenant/uiConfigBase.js"
    export default {
        data () {
            return {
               baseInfo: {},
               loaded: false,
            }
        },
        mounted () {
            getBasicInfo().then( data => {
                if (data.errCode === 10000) {
                    this.loaded = true
                    if (!data.data) {
                        this.$Message.error("无法获取基础配置")
                        return
                    }
                    this.baseInfo = data.data
                    this.baseInfo.logo = nodeRoot + "/data/uploadimages/"+data.data.shortName+"/logo.png"
                } else {
                    this.$Message.error(data.data)
                }
            }).catch( res => {
                this.$Message.error("无法获取基础配置")
                console.log(res)
            })
        },
        components:{
            
        },
        computed: {
            
        },
        methods: {

        }
        
    }
</script>
<style scoped>
    .page-content{
        position: relative;
    }
    .page-header{
        margin-left: -15px;
        margin-right: -15px;
        width: 100%;
    }
    .page-header h2{
        margin-bottom: 15px;
    }
    .page-spin{
        position: absolute;
        left: 50%;
        margin-left: -40px;
        margin-top:50px;
        transform: translateX(-50%);
    }
    .logo-preview{
        height: 80px;
        width: 100%;
        border: 1px solid #dddee1;
        border-radius: 4px;
        font-size: 12px;
        text-align: center;
    }
    .logo-preview img{
        max-width: 100%;
        max-height: 100%;
        vertical-align: middle;
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