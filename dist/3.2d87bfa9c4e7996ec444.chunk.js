webpackJsonp([3],{374:function(t,e,n){n(446);var o=n(128)(n(414),n(478),"data-v-2a425e47",null);o.options.__file="D:\\workspace\\admin-bz\\src\\views\\tenant\\uiConfigGlobal.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] uiConfigGlobal.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},382:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["accept"],data:function(){return{input:"",timer:"",progress:0}},mounted:function(){this.input=this.$(this.$el).find("input")},methods:{start:function(){this.input.click()},interval:function(t){var e=this;this.timer&&clearInterval(this.timer),this.timer=setInterval(function(){100==++e.progress&&clearInterval(e.timer)},t)},selected:function(t){var e=this;e.progress=0,e.interval(500);var n=t.target.files[0],o={size:n.size},i=new FileReader;i.onload=function(t){o.data=t.target.result,e.interval(5),e.$emit("on-selected",o)},n&&i.readAsDataURL(n)}}}},384:function(t,e){},385:function(t,e,n){n(384);var o=n(128)(n(382),n(386),"data-v-2fd38de8",null);o.options.__file="D:\\workspace\\admin-bz\\src\\components\\uploadBtn.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] uploadBtn.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},386:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ivu-upload"},[n("div",{staticClass:"ivu-upload ivu-upload-select"},[n("input",{staticClass:"ivu-upload-input",attrs:{type:"file",accept:t.accept},on:{change:t.selected}}),t._v(" "),n("button",{staticClass:"ivu-btn ivu-btn-info",attrs:{type:"button"},on:{click:t.start}},[n("i",{staticClass:"ivu-icon ivu-icon-ios-cloud-upload-outline"}),t._v(" "),n("span",[t._v("上传文件")])])]),t._v(" "),t.progress>0?n("Progress",{attrs:{percent:t.progress,"stroke-width":2}}):t._e()],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},414:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(385),i=n.n(o),a=n(501),r=n.n(a),s=n(434);e.default={data:function(){return{agent:this.$store.getters.agent,info:{id:"",tid:this.$store.getters.tid,indexPic:"",solgn:"",firstTitle:"",firstAnnotation:"",firstUrl:"",secondTitle:"",secondAnnotaion:"",secondUrl:"",thirdTitle:"",thirdAnnotation:"",thirdUrl:"",forthTitle:"",forthAnnotation:"",forthUrl:"",firstIntroductionUrl:"",secondIntroductionUrl:"",thirdIntroductionUrl:"",forthIntroductionUrl:"",policyIds:[]},lists:r.a,randomStr:"13124"}},mounted:function(){console.log(this.agent),this.globalInfoGet()},components:{uploadBtn:i.a},computed:{},methods:{imageSize:function(t){return!(t>2097152)||(this.$Message.warning({content:"照片大小不能超过2M",duration:5}),!1)},getRandomStr:function(){this.randomStr=Math.random().toString(36).substr(2)},imageReload:function(t){return t+"?ram="+this.randomStr},selecteMainImg:function(t){var e=this;if(this.imageSize(t.size)){var o={imgData:t.data,agent:this.agent,type:"master",phoneNo:this.agent};n.i(s.a)(o).then(function(t){e.getRandomStr(),e.info.indexPic=s.b+t,console.log(s.b+t)}).catch(function(t){e.$Message.error("图片上传失败"),console.log(t)})}},introduceOne:function(t){var e=this;if(this.imageSize(t.size)){var o={imgData:t.data,agent:this.agent,type:"int1",phoneNo:this.agent};n.i(s.a)(o).then(function(t){e.getRandomStr(),e.info.firstIntroductionUrl=s.b+t,console.log(s.b+t)}).catch(function(t){e.$Message.error("图片上传失败"),console.log(t)})}},introduceTwo:function(t){var e=this;if(this.imageSize(t.size)){var o={imgData:t.data,agent:this.agent,type:"int2",phoneNo:this.agent};n.i(s.a)(o).then(function(t){e.getRandomStr(),e.info.secondIntroductionUrl=s.b+t,console.log(s.b+t)}).catch(function(t){e.$Message.error("图片上传失败"),console.log(t)})}},introduceThree:function(t){var e=this;if(this.imageSize(t.size)){var o={imgData:t.data,agent:this.agent,type:"int3",phoneNo:this.agent};n.i(s.a)(o).then(function(t){e.getRandomStr(),e.info.thirdIntroductionUrl=s.b+t,console.log(s.b+t)}).catch(function(t){e.$Message.error("图片上传失败"),console.log(t)})}},introduceFour:function(t){var e=this;if(this.imageSize(t.size)){var o={imgData:t.data,agent:this.agent,type:"int4",phoneNo:this.agent};n.i(s.a)(o).then(function(t){e.getRandomStr(),e.info.forthIntroductionUrl=s.b+t,console.log(s.b+t)}).catch(function(t){e.$Message.error("图片上传失败"),console.log(t)})}},globalInfoGet:function(){var t=this;n.i(s.c)().then(function(e){e.data&&(t.info=e.data)})},judgePic:function(t){return""==t},saveGolbalConfig:function(){var t=this;this.infoValid()&&n.i(s.d)(this.info).then(function(e){t.$Message.success("保存成功")}).catch(function(t){console.log(t)})},infoValid:function(){return this.info.indexPic?this.info.solgn?this.info.firstIntroductionUrl?this.info.firstTitle?this.info.firstAnnotation?this.info.secondIntroductionUrl?this.info.secondTitle?this.info.secondAnnotaion?this.info.thirdIntroductionUrl?this.info.thirdTitle?this.info.thirdAnnotation?this.info.forthIntroductionUrl?this.info.forthTitle?this.info.forthAnnotation?0!=this.info.policyIds.length||(this.$Message.warning("至少要选择一个保险公司"),!1):(this.$Message.warning("请输入介绍栏4的注释"),!1):(this.$Message.warning("请输入介绍栏4的标题"),!1):(this.$Message.warning("请上传介绍栏4的图片"),!1):(this.$Message.warning("请输入介绍栏3的注释"),!1):(this.$Message.warning("请输入介绍栏3的标题"),!1):(this.$Message.warning("请上传介绍栏3的图片"),!1):(this.$Message.warning("请输入介绍栏2的注释"),!1):(this.$Message.warning("请输入介绍栏2的标题"),!1):(this.$Message.warning("请上传介绍栏2的图片"),!1):(this.$Message.warning("请输入介绍栏1的注释"),!1):(this.$Message.warning("请输入介绍栏1的标题"),!1):(this.$Message.warning("请上传介绍栏1的图片"),!1):(this.$Message.warning("请输入SLOGEN文字"),!1):(this.$Message.warning("请上传主图"),!1)}}}},434:function(t,e,n){"use strict";function o(){var t={};return n.i(r.a)({baseURL:l,url:"/tInterface/global/get",data:t})}function i(t){var e=t;return n.i(r.a)({baseURL:l,url:"tInterface/global/saveOrUpd",data:e})}function a(t){var e={imgData:t.imgData,agent:t.agent,type:t.type,phoneNo:t.phoneNo};return n.i(r.a)({baseURL:c,url:"/img/saveIdCardImage",data:e})}n.d(e,"b",function(){return c}),e.c=o,e.d=i,e.a=a;var r=n(129),s=n(130),l=s.a.javacore,c=s.a.noderoot},446:function(t,e){},478:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-content"},[n("div",{staticClass:"page-header"},[n("h2",[t._v("页面配置")]),t._v(" "),n("Alert",{attrs:{type:"warning"}},[t._v("请完善以下信息，以便完成您用户端页面配置")])],1),t._v(" "),n("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:30,type:"flex",align:"middle"}},[n("Col",[n("b",[t._v("主图：")])]),t._v(" "),n("Col",{attrs:{span:"5"}},[n("uploadBtn",{attrs:{accept:"image/jpeg,image/gif,image/png"},on:{"on-selected":t.selecteMainImg}})],1)],1),t._v(" "),n("div",{staticStyle:{"margin-top":"10px"}},[t._v("上传主图照片(尺寸1080x500）")]),t._v(" "),n("div",{staticStyle:{border:"1px dashed #ddd",height:"100px","line-height":"100px"}},[n("img",{staticStyle:{height:"100%"},attrs:{src:t.imageReload(t.info.indexPic)}}),t._v(" "),t.judgePic(this.info.indexPic)?n("span",{staticStyle:{"margin-left":"20px"}},[t._v("暂无图片")]):t._e()]),t._v(" "),n("Row",{staticClass:"page-row page-border",attrs:{gutter:30,type:"flex",align:"middle"}},[n("Col",{attrs:{span:"20"}},[n("Form",[n("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"slogen文字",required:!0}},[n("span",{staticStyle:{color:"#2d8cf0"}},[t._v("（6-14字 偶数slogen代表性文字）")]),t._v(" "),n("Input",{attrs:{type:"textarea",maxlength:14,rows:1},model:{value:t.info.solgn,callback:function(e){t.info.solgn=e},expression:"info.solgn"}})],1)],1)],1)],1),t._v(" "),n("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:30}},[n("Col",{attrs:{span:"12"}},[n("Row",{attrs:{gutter:30,type:"flex",align:"middle"}},[n("Col",[n("b",[t._v("介绍栏1：")])]),t._v(" "),n("Col",{attrs:{span:"10"}},[n("uploadBtn",{attrs:{accept:"image/jpeg,image/gif,image/png"},on:{"on-selected":t.introduceOne}})],1)],1),t._v(" "),n("div",{staticStyle:{"margin-top":"10px"}},[t._v("上传介绍照片(尺寸500x500）")]),t._v(" "),n("div",{staticStyle:{border:"1px dashed #ddd",height:"100px"}},[n("img",{staticStyle:{height:"100%","line-height":"100px"},attrs:{src:t.imageReload(t.info.firstIntroductionUrl)}}),t._v(" "),t.judgePic(this.info.firstIntroductionUrl)?n("span",{staticStyle:{"margin-left":"20px"}},[t._v("暂无图片")]):t._e()]),t._v(" "),n("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:16,type:"flex",align:"middle"}},[n("Col",{attrs:{span:"12"}},[n("Form",[n("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"标题文字",required:!0}},[n("Input",{attrs:{type:"textarea",maxlength:14,rows:1},model:{value:t.info.firstTitle,callback:function(e){t.info.firstTitle=e},expression:"info.firstTitle"}})],1)],1)],1),t._v(" "),n("Col",{attrs:{span:"12"}},[n("Form",[n("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"注释文字",required:!0}},[n("Input",{attrs:{type:"textarea",maxlength:14,rows:1},model:{value:t.info.firstAnnotation,callback:function(e){t.info.firstAnnotation=e},expression:"info.firstAnnotation"}})],1)],1)],1)],1),t._v(" "),n("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:16,type:"flex",align:"middle"}},[n("Col",{attrs:{span:"24"}},[n("Form",[n("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"跳转链接"}},[n("Input",{attrs:{type:"textarea",rows:1},model:{value:t.info.firstUrl,callback:function(e){t.info.firstUrl=e},expression:"info.firstUrl"}})],1)],1)],1)],1)],1),t._v(" "),n("Col",{attrs:{span:"12"}},[n("Row",{attrs:{gutter:30,type:"flex",align:"middle"}},[n("Col",[n("b",[t._v("介绍栏2：")])]),t._v(" "),n("Col",{attrs:{span:"10"}},[n("uploadBtn",{attrs:{accept:"image/jpeg,image/gif,image/png"},on:{"on-selected":t.introduceTwo}})],1)],1),t._v(" "),n("div",{staticStyle:{"margin-top":"10px"}},[t._v("上传介绍照片(尺寸500x500）")]),t._v(" "),n("div",{staticStyle:{border:"1px dashed #ddd",height:"100px"}},[n("img",{staticStyle:{height:"100%","line-height":"100px"},attrs:{src:t.imageReload(t.info.secondIntroductionUrl)}}),t._v(" "),t.judgePic(this.info.secondIntroductionUrl)?n("span",{staticStyle:{"margin-left":"20px"}},[t._v("暂无图片")]):t._e()]),t._v(" "),n("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:16,type:"flex",align:"middle"}},[n("Col",{attrs:{span:"12"}},[n("Form",[n("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"标题文字",required:!0}},[n("Input",{attrs:{type:"textarea",maxlength:14,rows:1},model:{value:t.info.secondTitle,callback:function(e){t.info.secondTitle=e},expression:"info.secondTitle"}})],1)],1)],1),t._v(" "),n("Col",{attrs:{span:"12"}},[n("Form",[n("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"注释文字",required:!0}},[n("Input",{attrs:{type:"textarea",maxlength:14,rows:1},model:{value:t.info.secondAnnotaion,callback:function(e){t.info.secondAnnotaion=e},expression:"info.secondAnnotaion"}})],1)],1)],1)],1),t._v(" "),n("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:16,type:"flex",align:"middle"}},[n("Col",{attrs:{span:"24"}},[n("Form",[n("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"跳转链接"}},[n("Input",{attrs:{type:"textarea",rows:1},model:{value:t.info.secondUrl,callback:function(e){t.info.secondUrl=e},expression:"info.secondUrl"}})],1)],1)],1)],1)],1)],1),t._v(" "),n("Row",{staticClass:"page-row page-border",attrs:{gutter:30}},[n("Col",{attrs:{span:"12"}},[n("Row",{attrs:{gutter:30,type:"flex",align:"middle"}},[n("Col",[n("b",[t._v("介绍栏3：")])]),t._v(" "),n("Col",{attrs:{span:"10"}},[n("uploadBtn",{attrs:{accept:"image/jpeg,image/gif,image/png"},on:{"on-selected":t.introduceThree}})],1)],1),t._v(" "),n("div",{staticStyle:{"margin-top":"10px"}},[t._v("上传介绍照片(尺寸500x500）")]),t._v(" "),n("div",{staticStyle:{border:"1px dashed #ddd",height:"100px"}},[n("img",{staticStyle:{height:"100%","line-height":"100px"},attrs:{src:t.imageReload(t.info.thirdIntroductionUrl)}}),t._v(" "),t.judgePic(this.info.thirdIntroductionUrl)?n("span",{staticStyle:{"margin-left":"20px"}},[t._v("暂无图片")]):t._e()]),t._v(" "),n("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:16,type:"flex",align:"middle"}},[n("Col",{attrs:{span:"12"}},[n("Form",[n("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"标题文字",required:!0}},[n("Input",{attrs:{type:"textarea",maxlength:14,rows:1},model:{value:t.info.thirdTitle,callback:function(e){t.info.thirdTitle=e},expression:"info.thirdTitle"}})],1)],1)],1),t._v(" "),n("Col",{attrs:{span:"12"}},[n("Form",[n("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"注释文字",required:!0}},[n("Input",{attrs:{type:"textarea",maxlength:14,rows:1},model:{value:t.info.thirdAnnotation,callback:function(e){t.info.thirdAnnotation=e},expression:"info.thirdAnnotation"}})],1)],1)],1)],1),t._v(" "),n("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:16,type:"flex",align:"middle"}},[n("Col",{attrs:{span:"24"}},[n("Form",[n("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"跳转链接"}},[n("Input",{attrs:{type:"textarea",rows:1},model:{value:t.info.thirdUrl,callback:function(e){t.info.thirdUrl=e},expression:"info.thirdUrl"}})],1)],1)],1)],1)],1),t._v(" "),n("Col",{attrs:{span:"12"}},[n("Row",{attrs:{gutter:30,type:"flex",align:"middle"}},[n("Col",[n("b",[t._v("介绍栏4：")])]),t._v(" "),n("Col",{attrs:{span:"10"}},[n("uploadBtn",{attrs:{accept:"image/jpeg,image/gif,image/png"},on:{"on-selected":t.introduceFour}})],1)],1),t._v(" "),n("div",{staticStyle:{"margin-top":"10px"}},[t._v("上传介绍照片(尺寸500x500）")]),t._v(" "),n("div",{staticStyle:{border:"1px dashed #ddd",height:"100px"}},[n("img",{staticStyle:{height:"100%","line-height":"100px"},attrs:{src:t.imageReload(t.info.forthIntroductionUrl)}}),t._v(" "),t.judgePic(this.info.forthIntroductionUrl)?n("span",{staticStyle:{"margin-left":"20px"}},[t._v("暂无图片")]):t._e()]),t._v(" "),n("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:16,type:"flex",align:"middle"}},[n("Col",{attrs:{span:"12"}},[n("Form",[n("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"标题文字",required:!0}},[n("Input",{attrs:{type:"textarea",maxlength:14,rows:1},model:{value:t.info.forthTitle,callback:function(e){t.info.forthTitle=e},expression:"info.forthTitle"}})],1)],1)],1),t._v(" "),n("Col",{attrs:{span:"12"}},[n("Form",[n("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"注释文字",required:!0}},[n("Input",{attrs:{type:"textarea",maxlength:14,rows:1},model:{value:t.info.forthAnnotation,callback:function(e){t.info.forthAnnotation=e},expression:"info.forthAnnotation"}})],1)],1)],1)],1),t._v(" "),n("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:16,type:"flex",align:"middle"}},[n("Col",{attrs:{span:"24"}},[n("Form",[n("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"跳转链接"}},[n("Input",{attrs:{type:"textarea",rows:1},model:{value:t.info.forthUrl,callback:function(e){t.info.forthUrl=e},expression:"info.forthUrl"}})],1)],1)],1)],1)],1)],1),t._v(" "),n("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:30,type:"flex",align:"middle"}},[n("Col",{attrs:{span:"12"}},[n("Form",[n("Form-item",{staticStyle:{"margin-bottom":"0"}},[n("b",[t._v("合作保险公司：")]),t._v(" "),n("Select",{attrs:{multiple:""},model:{value:t.info.policyIds,callback:function(e){t.info.policyIds=e},expression:"info.policyIds"}},t._l(t.lists,function(e,o){return n("Option",{key:o,attrs:{value:e.code}},[t._v(t._s(e.name))])}))],1)],1)],1)],1),t._v(" "),n("Row",{staticClass:"page-row page-noBorder",staticStyle:{"margin-bottom":"150px"},attrs:{gutter:30,type:"flex",align:"middle"}},[n("Col",{attrs:{span:"4"}},[n("Button",{attrs:{type:"primary"},on:{click:t.saveGolbalConfig}},[t._v("　保存　")])],1)],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},501:function(t,e){t.exports=[{code:"100",name:"安邦车险"},{code:"101",name:"安联车险"},{code:"102",name:"亚太财险"},{code:"103",name:"众安车险"},{code:"104",name:"太平洋保险"},{code:"106",name:"阳光财险"},{code:"107",name:"人保财险"},{code:"108",name:"大地保险"},{code:"109",name:"天安财险"},{code:"110",name:"太平财险"},{code:"111",name:"中华联合"},{code:"112",name:"安盛天平"},{code:"113",name:"紫金财险"},{code:"114",name:"永安财险"},{code:"115",name:"华安财险"},{code:"117",name:"安心财险"},{code:"118",name:"平安财险"},{code:"119",name:"锦泰财险"},{code:"120",name:"安华财险"},{code:"121",name:"利宝财险"},{code:"122",name:"信达财险"}]}});