<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        min-height: 100%;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        margin: 15px 0;
        overflow: hidden;
        background: #fff;
        overflow-y: hidden;
    }
    .layout-content-main{
        padding: 10px 30px 10px 45px;
        overflow-y: auto;
        height: 100%;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-header .ivu-dropdown{
        float: right;
        padding: 8px 15px;
    }
    .layout-logo-left{
        width: 100%;
        height: 60px;
        text-align: center;
    }
    .layout-logo-left img{
        margin-top: 30px;
        transform: translateY(-50%);
        max-height: 100%;
        max-width: 100%;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-btn-left{
        position: absolute;
        bottom: 15px;
        left: 0;
        width: 100%;
    }
</style>
<template>
    <div class="layout" >
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <div class="layout-logo-left">
                    <img src="../images/logo.png" alt="">
                </div>
                <sideBar :menus="menuList" :routers="routers" @on-change="routerChange"></sideBar>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">
                    <Dropdown @on-click="selDropDown">
                        <Button type="ghost" shape="circle" icon="person" >{{ tel }}</Button>
                        <Dropdown-menu slot="list">
                            <Dropdown-item name="logOutBtn">退出登陆</Dropdown-item>
                        </Dropdown-menu>
                    </Dropdown>
                </div>
                <Row class="layout-content">
                    <i-col span="3">
                        <subSideBar :router="subRouters" :height="subMenuHeight"></subSideBar>
                    </i-col>
                    <i-col span="21" style="height: 100%;">
                        <div class="layout-content-main">
                            <router-view></router-view>
                        </div>
                    </i-col>
                </Row>
            </i-col>
        </Row>
    </div>
</template>
<script>
    import storage from '../libs/storage.js';
    import routers from "../libs/routers.js";
    import RGBaster from "../libs/RGBaster.js";
    import $ from "jquery"

    import sideBar from "../components/sideBar.vue";//导航条
    import subSideBar from "../components/subSideBar.vue";//二级导航

    import menuList from "../mock/sideBarData.json";
    import { getIndexInfo } from "../api/userConfig.js"

    export default {
        data () {
            return {
                spanLeft: 3,
                spanRight: 21,
                subMenuHeight:"500",
                tel: this.$store.getters.mobile||"已登录",
                routers: routers,
                menuList: menuList,
                subRouters: routers[0],
            }
        },
        components:{
            sideBar,
            subSideBar
        },
        filters: {
            telCheck: function(val){
                return val ? val : "已登录"
            }
        },
        mounted () {
          	if(storage.get("Admin-Token")){
                this.$Message.success('登录成功')
                this.$router.replace({ path: '/uiConfig/base' })
            }else{
                this.$router.replace({ path: 'login' })
            }
			this.reLayout()
            this.getIndexInfo()
        },
        computed: {
            iconSize () {
                return this.spanLeft === 4 ? 16 : 22
            }
        },
        methods: {
            reLayout () {
                // 左上角LOGO背景色
                let logo = this.$(this.$el).find(".layout-logo-left")[0]
                RGBaster.colors($(logo).find("img")[0], {
                    success: payload => {
                        console.log(payload.dominant)
                        logo.style.backgroundColor = payload.dominant
                    }
                })
                // 调整工作区高度
                let content = this.$(this.$el).find(".layout-content")[0]
                content.style.height = window.innerHeight-92 + "px"
                // 调整副导航条的高度
                this.subMenuHeight = window.innerHeight-92
            },
            logOut () {
                this.$store.dispatch("LogOut").then(()=>{
                    this.$router.replace({ path: '/login' })
				}).catch( err => {
					console.log(err);
				});
            },
            selDropDown (name) {
                if(name=="logOutBtn"){
                    this.logOut();
                }
            },
            routerChange (router) {
                let _this = this;
                this.$store.dispatch("updateSubMenu",router).then(()=>{
                    _this.subRouters = _this.$store.getters.subMenu;
				}).catch( err => {

                })
            },
            getIndexInfo () {
                getIndexInfo().then(data => {
                    if(data.errCode == 10000){
                        let agent = data.data.tenantBasic.tenantCode
                        let tid = data.data.tenantBasic.id
                        this.$store.dispatch("getAgent", agent)
                        this.$store.dispatch("getTid", tid)
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        },
    }
</script>
