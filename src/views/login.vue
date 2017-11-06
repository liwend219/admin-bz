<style scoped>
    @import '../styles/login.css';
    .loginCard{
      width: 340px;
      position: absolute;
      left: 50%;
      top: 30%;
      transform: translate(-50%,-30%);
      border:none;
	  background-color: transparent;
    }
    .loginCard:hover{
		box-shadow: none;
    }
    .row:not(:first-child){
      margin-top: 20px;
    }
</style>
<template>
  <div class="login_page">
    <Card class="loginCard">
			<Row type="flex" class="row">
				<i-col span="24">
					<h1>手机登录</h1>
				</i-col>
			</Row>
			<Row type="flex" class="row">
				<i-col span="24">
					<Input v-model="tel" class="loginInput" size="large" :maxlength="11" :autofocus="true" @input.native="telRequire" placeholder="手机号"></Input>
				</i-col>
			</Row>
			<Row type="flex" justify="space-between" align="middle" :gutter="16" class="row">
				<i-col span="15">
					<Input v-model="imgCode" class="loginInput" size="large" :maxlength="4" @input.native="imgCodeRequire" placeholder="图形验证码"></Input>
				</i-col>
				<i-col span="9">
					<img :src="codesrc" @click="getImgCode" style="vertical-align:middle;cursor:pointer;height:40px;width:100%;" alt="">
				</i-col>
			</Row>
			<Row type="flex" justify="space-between" align="middle" :gutter="16" class="row">
				<i-col span="15">
					<Input v-model="code" class="loginInput" size="large" :maxlength="6" @keyup.enter.native="login" @input.native="msgCodeRequire" placeholder="短信验证码"></Input>
				</i-col>
				<i-col span="9">
					<Button type="info" html-type="submit" size="large" long @click="getCode" :disabled="codeBtnStatus" v-text="btnText"></Button>
				</i-col>
			</Row>
			<Row type="flex" class="row">
				<i-col span="24">
					<Button type="info" html-type="submit" size="large" long @click="login" :disabled="loginBtnStatus">登陆</Button>
				</i-col>
			</Row>
			<Row type="flex" class="row">
				<i-col span="24">
					<h5>保挣科技·管理后台</h5>
				</i-col>
			</Row>
    </Card>
    <div id="wave" style="padding-top:50px;height:100vh;"></div>
  </div>
</template>
<script>
    import waves from '../libs/waves.js';
    import { imageSrc, getMsgCode } from '../api/login.js';
	import { telValid } from '../libs/validate.js';

    export default {
        data () {
            return {
				tel: "",
	            code: "",
				imgCode: "",
                btnText: "获取验证码",
				codeBtnStatus: true,
				loginBtnStatus: true,
				nonstr: "",
                codesrc: "",
				btnTimer: ""
            }
        },
        mounted () {
			if(this.$store.getters.token){
				return this.$router.replace({path:"/uiConfig"})
			}
          	var wave = window.document.getElementById("wave")
           	waves.init(wave);
           	waves.animate();
		  	this.getImgCode();
        },
        computed: {

        },
        methods: {
			randomStr () {
				return Math.random().toString(36).substring(7);
			},
            getImgCode () {
                this.nonstr = this.randomStr();
                this.codesrc = imageSrc+"/captcha/code?nonstr="+this.nonstr;
            },
			timer () {
				let _this = this;
				let c = 59;
				_this.codeBtnStatus = true;
				_this.btnText = "（ "+ c +"S ）"
				let t = setInterval(function(){
					_this.btnText = "（ "+ c +"S ）";
					c--;
					if(_this.imgCode.length<4||_this.tel.length<11){
						_this.btnText = "获取验证码";
						clearInterval(t);
					}
					if(c<0){
						_this.btnText = "获取验证码";
						_this.codeBtnStatus = false;
						clearInterval(t);
					}
				},1000)
			},
			toast (meg) {
				this.$Message.error({
					content: meg,
					duration: 5,
					closable: true
				});
			},
			getCode () {
				let _this = this;
				if(!telValid(_this.tel)){
					_this.toast("手机号格式有误")
					return
				}
				getMsgCode(this.tel, this.nonstr, this.imgCode).then( data =>{
					if(data.errCode==10000){
						_this.timer();
					}else{
						_this.toast(data.data)
					}
				}).catch( err => {
					_this.toast("验证码发送失败");
					console.log(err);
				});
			},
			login () {
				let _this = this;
				if(!telValid(_this.tel)){
					_this.toast("手机号格式有误")
					return
				}
				let opt = {
					 mobile: _this.tel,
					 code: _this.code
				}
				this.$store.dispatch("LoginByTel",opt).then(()=>{
					this.$router.replace({ path: '/uiConfig' })
				}).catch( err => {
					_this.toast("登录失败");
					console.log(err);
				});
			},
			telRequire () {
				if(this.imgCode.length<4||this.tel.length<11){
					this.codeBtnStatus = true
				}else{
					this.codeBtnStatus = false
				}
				if(this.code.length<4||this.imgCode.length<4||this.tel.length<11){
					this.loginBtnStatus = true
				}else{
					this.loginBtnStatus = false
				}
			},
			imgCodeRequire () {
				if(this.imgCode.length<4||this.tel.length<11){
					this.codeBtnStatus = true
				}else{
					this.codeBtnStatus = false
				}
				if(this.code.length<4||this.imgCode.length<4||this.tel.length<11){
					this.loginBtnStatus = true
				}else{
					this.loginBtnStatus = false
				}
			},
			msgCodeRequire () {
				if(this.code.length<4||this.imgCode.length<4||this.tel.length<11){
					this.loginBtnStatus = true
				}else{
					this.loginBtnStatus = false
				}
			}
        }
    }

</script>
