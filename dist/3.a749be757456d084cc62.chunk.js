webpackJsonp([3],{413:function(t,e,o){o(490);var n=o(96)(o(455),o(523),"data-v-2a425e47",null);n.options.__file="/Users/ops/Desktop/workspace/admin-bz/src/views/tenant/uiConfigGlobal.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] uiConfigGlobal.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},417:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(48),i=(o.n(n),o(142)),a=o.n(i),r=o(141),s=o.n(r);e.default={props:{fixedNumberW:{type:Number,required:!0},fixedNumberH:{type:Number,required:!0}},data:function(){return{example2:{},data:{},modal5:!1}},components:{vueCropper:a.a,uploadBtn:s.a},methods:{close:function(){this.modal5=!1},finish:function(t){var e=this;console.log("裁剪"),this.$refs.cropper.getCropData(function(t){e.$emit("imgCropper",t),e.modal5=!1})},selecteMainImg:function(t){this.data=t,console.log(t),this.open()},open:function(){console.log(this.fixedNumberW),this.modal5=!0,this.example2={imgSrc:"",id:"img1",img:this.data.data,info:!0,size:1,outputType:"jpeg",canScale:!0,autoCrop:!0,autoCropWidth:200,autoCropHeight:150,fixed:!0,fixedNumber:[this.fixedNumberW,this.fixedNumberH]}}}}},419:function(t,e){},420:function(t,e){},422:function(t,e,o){o(419),o(420);var n=o(96)(o(417),o(423),"data-v-b28b547c",null);n.options.__file="/Users/ops/Desktop/workspace/admin-bz/src/components/picClippingBox.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] picClippingBox.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},423:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("uploadBtn",{attrs:{accept:"image/jpeg,image/gif,image/png"},on:{"on-selected":t.selecteMainImg}}),t._v(" "),o("Modal",{staticClass:"cropper-modal",attrs:{title:"选择图片",width:"1000","class-name":"cropper-modal-content",styles:{"z-index":"1009"}},model:{value:t.modal5,callback:function(e){t.modal5=e},expression:"modal5"}},[o("div",{staticClass:"div1"},[o("vueCropper",{ref:"cropper",attrs:{img:t.example2.img,outputSize:t.example2.size,outputType:t.example2.outputType,info:t.example2.info,canScale:t.example2.canScale,autoCrop:t.example2.autoCrop,autoCropWidth:t.example2.autoCropWidth,autoCropHeight:t.example2.autoCropHeight,fixed:t.example2.fixed,fixedNumber:t.example2.fixedNumber}})],1),t._v(" "),o("div",{slot:"footer"},[o("Button",{attrs:{type:"info",size:"large"},on:{click:t.finish}},[t._v("确认裁剪")]),t._v(" "),o("Button",{attrs:{size:"large"},on:{click:t.close}},[t._v("取消")])],1)])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},455:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(141),i=o.n(n),a=o(547),r=o.n(a),s=o(422),l=o.n(s),c=o(477);e.default={data:function(){return{agent:this.$store.getters.agent,info:{id:"",tid:this.$store.getters.tid,indexPic:"",solgn:"",firstTitle:"",firstAnnotation:"",firstUrl:"",secondTitle:"",secondAnnotaion:"",secondUrl:"",thirdTitle:"",thirdAnnotation:"",thirdUrl:"",forthTitle:"",forthAnnotation:"",forthUrl:"",firstIntroductionUrl:"",secondIntroductionUrl:"",thirdIntroductionUrl:"",forthIntroductionUrl:"",policyIds:[]},lists:r.a,randomStr:"13124"}},mounted:function(){console.log(this.agent),this.globalInfoGet()},components:{uploadBtn:i.a,picClippingBox:l.a},computed:{},methods:{imageSize:function(t){return!(t>2097152)||(this.$Message.warning({content:"照片大小不能超过2M",duration:5}),!1)},imagenull:function(t){return""!=t},getRandomStr:function(){this.randomStr=Math.random().toString(36).substr(2)},imageReload:function(t){return t+"?ram="+this.randomStr},selecteMainImg:function(t){var e=this,n={imgData:t,agent:this.agent,type:"master",phoneNo:this.agent};o.i(c.a)(n).then(function(t){e.getRandomStr(),e.info.indexPic=c.b+t,console.log(c.b+t)}).catch(function(t){e.$Message.error("图片上传失败"),console.log(t)})},introduceOne:function(t){var e=this,n={imgData:t,agent:this.agent,type:"int1",phoneNo:this.agent};o.i(c.a)(n).then(function(t){e.getRandomStr(),e.info.firstIntroductionUrl=c.b+t,console.log(c.b+t)}).catch(function(t){e.$Message.error("图片上传失败"),console.log(t)})},introduceTwo:function(t){var e=this,n={imgData:t,agent:this.agent,type:"int2",phoneNo:this.agent};o.i(c.a)(n).then(function(t){e.getRandomStr(),e.info.secondIntroductionUrl=c.b+t,console.log(c.b+t)}).catch(function(t){e.$Message.error("图片上传失败"),console.log(t)})},introduceThree:function(t){var e=this,n={imgData:t,agent:this.agent,type:"int3",phoneNo:this.agent};o.i(c.a)(n).then(function(t){e.getRandomStr(),e.info.thirdIntroductionUrl=c.b+t,console.log(c.b+t)}).catch(function(t){e.$Message.error("图片上传失败"),console.log(t)})},introduceFour:function(t){var e=this,n={imgData:t,agent:this.agent,type:"int4",phoneNo:this.agent};o.i(c.a)(n).then(function(t){e.getRandomStr(),e.info.forthIntroductionUrl=c.b+t,console.log(c.b+t)}).catch(function(t){e.$Message.error("图片上传失败"),console.log(t)})},globalInfoGet:function(){var t=this;o.i(c.c)().then(function(e){e.data&&(t.info=e.data)})},judgePic:function(t){return""==t},saveGolbalConfig:function(){var t=this;if(this.infoValid()){if(this.info.solgn.length>=7){var e=this.info.solgn;this.info.solgn=e.slice(0,parseInt(e.length/2))+"<br>"+e.slice(parseInt(e.length/2))}o.i(c.d)(this.info).then(function(e){t.$Message.success("保存成功")}).catch(function(t){console.log(t)})}},infoValid:function(){function t(t){return 0!=t.indexOf("http://")&&0!=t.indexOf("https://")}var e=this.info.firstUrl,o=this.info.secondUrl,n=this.info.thirdUrl,i=this.info.forthUrl;return this.info.indexPic?this.info.solgn?this.info.firstIntroductionUrl?this.info.firstTitle?this.info.firstAnnotation?null!=e&&""!=e&&t(e)?(this.$Message.warning("介绍栏1链接有误，应以'http://'或者'https://'开头"),!1):this.info.secondIntroductionUrl?this.info.secondTitle?this.info.secondAnnotaion?null!=o&&""!=o&&t(o)?(this.$Message.warning("介绍栏2链接有误，应以'http://'或者'https://'开头"),!1):this.info.thirdIntroductionUrl?this.info.thirdTitle?this.info.thirdAnnotation?null!=n&&""!=n&&t(n)?(this.$Message.warning("介绍栏3链接有误，应以'http://'或者'https://'开头"),!1):this.info.forthIntroductionUrl?this.info.forthTitle?this.info.forthAnnotation?null!=i&&""!=i&&t(i)?(this.$Message.warning("介绍栏4链接有误，应以'http://'或者'https://'开头"),!1):0!=this.info.policyIds.length||(this.$Message.warning("至少要选择一个保险公司"),!1):(this.$Message.warning("请输入介绍栏4的注释"),!1):(this.$Message.warning("请输入介绍栏4的标题"),!1):(this.$Message.warning("请上传介绍栏4的图片"),!1):(this.$Message.warning("请输入介绍栏3的注释"),!1):(this.$Message.warning("请输入介绍栏3的标题"),!1):(this.$Message.warning("请上传介绍栏3的图片"),!1):(this.$Message.warning("请输入介绍栏2的注释"),!1):(this.$Message.warning("请输入介绍栏2的标题"),!1):(this.$Message.warning("请上传介绍栏2的图片"),!1):(this.$Message.warning("请输入介绍栏1的注释"),!1):(this.$Message.warning("请输入介绍栏1的标题"),!1):(this.$Message.warning("请上传介绍栏1的图片"),!1):(this.$Message.warning("请输入SLOGEN文字"),!1):(this.$Message.warning("请上传主图"),!1)}}}},477:function(t,e,o){"use strict";function n(){var t={};return o.i(r.a)({baseURL:l,url:"/tInterface/global/get",data:t})}function i(t){var e=t;return o.i(r.a)({baseURL:l,url:"tInterface/global/saveOrUpd",data:e})}function a(t){var e={imgData:t.imgData,agent:t.agent,type:t.type,phoneNo:t.phoneNo};return o.i(r.a)({baseURL:c,url:"/img/saveIdCardImage",data:e})}o.d(e,"b",function(){return c}),e.c=n,e.d=i,e.a=a;var r=o(139),s=o(140),l=s.a.javacore,c=s.a.noderoot},490:function(t,e){},523:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-content"},[o("div",{staticClass:"page-header"},[o("h2",[t._v("页面配置")]),t._v(" "),o("Alert",{attrs:{type:"warning"}},[t._v("请完善以下信息，以便完成您用户端页面配置")])],1),t._v(" "),o("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:30,type:"flex",align:"middle"}},[o("Col",[o("b",[t._v("主图：")])]),t._v(" "),o("Col",{attrs:{span:"5"}},[o("picClippingBox",{attrs:{fixedNumberW:5,fixedNumberH:2},on:{imgCropper:t.selecteMainImg}})],1)],1),t._v(" "),o("div",{staticStyle:{"margin-top":"10px",display:"inline-block"}},[t._v("上传主图照片(尺寸1080x500）")]),t._v(" "),o("div",{staticStyle:{border:"1px dashed #ddd",height:"100px","line-height":"100px"}},[o("img",{staticStyle:{height:"100%"},attrs:{src:t.imageReload(t.info.indexPic)}}),t._v(" "),t.judgePic(this.info.indexPic)?o("span",{staticStyle:{"margin-left":"20px"}},[t._v("暂无图片")]):t._e()]),t._v(" "),o("Row",{staticClass:"page-row page-border",attrs:{gutter:30,type:"flex",align:"middle"}},[o("Col",{attrs:{span:"20"}},[o("Form",[o("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"slogen文字",required:!0}},[o("span",{staticStyle:{color:"#2d8cf0"}},[t._v("（6-14字 偶数slogen代表性文字,超过七个字会自动换行）")]),t._v(" "),o("Input",{attrs:{type:"textarea",maxlength:14,rows:1},model:{value:t.info.solgn,callback:function(e){t.info.solgn=e},expression:"info.solgn"}})],1)],1)],1)],1),t._v(" "),o("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:30}},[o("Col",{attrs:{span:"12"}},[o("Row",{attrs:{gutter:30,type:"flex",align:"middle"}},[o("Col",[o("b",[t._v("介绍栏1：")])]),t._v(" "),o("Col",{attrs:{span:"10"}},[o("picClippingBox",{attrs:{fixedNumberW:13,fixedNumberH:10},on:{imgCropper:t.introduceOne}})],1)],1),t._v(" "),o("div",{staticStyle:{"margin-top":"10px",display:"inline-block"}},[t._v("上传介绍照片(尺寸500x500）")]),t._v(" "),o("div",{staticStyle:{border:"1px dashed #ddd",height:"100px"}},[o("img",{staticStyle:{height:"100%","line-height":"100px"},attrs:{src:t.imageReload(t.info.firstIntroductionUrl)}}),t._v(" "),t.judgePic(this.info.firstIntroductionUrl)?o("span",{staticStyle:{"margin-left":"20px"}},[t._v("暂无图片")]):t._e()]),t._v(" "),o("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:16,type:"flex",align:"middle"}},[o("Col",{attrs:{span:"12"}},[o("Form",[o("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"标题文字",required:!0}},[o("Input",{attrs:{type:"textarea",maxlength:14,rows:1},model:{value:t.info.firstTitle,callback:function(e){t.info.firstTitle=e},expression:"info.firstTitle"}})],1)],1)],1),t._v(" "),o("Col",{attrs:{span:"12"}},[o("Form",[o("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"注释文字",required:!0}},[o("Input",{attrs:{type:"textarea",maxlength:14,rows:1},model:{value:t.info.firstAnnotation,callback:function(e){t.info.firstAnnotation=e},expression:"info.firstAnnotation"}})],1)],1)],1)],1),t._v(" "),o("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:16,type:"flex",align:"middle"}},[o("Col",{attrs:{span:"24"}},[o("Form",[o("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"跳转链接"}},[o("Input",{attrs:{type:"textarea",rows:1},model:{value:t.info.firstUrl,callback:function(e){t.info.firstUrl=e},expression:"info.firstUrl"}})],1)],1)],1)],1)],1),t._v(" "),o("Col",{attrs:{span:"12"}},[o("Row",{attrs:{gutter:30,type:"flex",align:"middle"}},[o("Col",[o("b",[t._v("介绍栏2：")])]),t._v(" "),o("Col",{attrs:{span:"10"}},[o("picClippingBox",{attrs:{fixedNumberW:13,fixedNumberH:10},on:{imgCropper:t.introduceTwo}})],1)],1),t._v(" "),o("div",{staticStyle:{"margin-top":"10px",display:"inline-block"}},[t._v("上传介绍照片(尺寸500x500）")]),t._v(" "),o("div",{staticStyle:{border:"1px dashed #ddd",height:"100px"}},[o("img",{staticStyle:{height:"100%","line-height":"100px"},attrs:{src:t.imageReload(t.info.secondIntroductionUrl)}}),t._v(" "),t.judgePic(this.info.secondIntroductionUrl)?o("span",{staticStyle:{"margin-left":"20px"}},[t._v("暂无图片")]):t._e()]),t._v(" "),o("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:16,type:"flex",align:"middle"}},[o("Col",{attrs:{span:"12"}},[o("Form",[o("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"标题文字",required:!0}},[o("Input",{attrs:{type:"textarea",maxlength:14,rows:1},model:{value:t.info.secondTitle,callback:function(e){t.info.secondTitle=e},expression:"info.secondTitle"}})],1)],1)],1),t._v(" "),o("Col",{attrs:{span:"12"}},[o("Form",[o("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"注释文字",required:!0}},[o("Input",{attrs:{type:"textarea",maxlength:14,rows:1},model:{value:t.info.secondAnnotaion,callback:function(e){t.info.secondAnnotaion=e},expression:"info.secondAnnotaion"}})],1)],1)],1)],1),t._v(" "),o("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:16,type:"flex",align:"middle"}},[o("Col",{attrs:{span:"24"}},[o("Form",[o("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"跳转链接"}},[o("Input",{attrs:{type:"textarea",rows:1},model:{value:t.info.secondUrl,callback:function(e){t.info.secondUrl=e},expression:"info.secondUrl"}})],1)],1)],1)],1)],1)],1),t._v(" "),o("Row",{staticClass:"page-row page-border",attrs:{gutter:30}},[o("Col",{attrs:{span:"12"}},[o("Row",{attrs:{gutter:30,type:"flex",align:"middle"}},[o("Col",[o("b",[t._v("介绍栏3：")])]),t._v(" "),o("Col",{attrs:{span:"10"}},[o("picClippingBox",{attrs:{fixedNumberW:13,fixedNumberH:10},on:{imgCropper:t.introduceThree}})],1)],1),t._v(" "),o("div",{staticStyle:{"margin-top":"10px",display:"inline-block"}},[t._v("上传介绍照片(尺寸500x500）")]),t._v(" "),o("div",{staticStyle:{border:"1px dashed #ddd",height:"100px"}},[o("img",{staticStyle:{height:"100%","line-height":"100px"},attrs:{src:t.imageReload(t.info.thirdIntroductionUrl)}}),t._v(" "),t.judgePic(this.info.thirdIntroductionUrl)?o("span",{staticStyle:{"margin-left":"20px"}},[t._v("暂无图片")]):t._e()]),t._v(" "),o("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:16,type:"flex",align:"middle"}},[o("Col",{attrs:{span:"12"}},[o("Form",[o("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"标题文字",required:!0}},[o("Input",{attrs:{type:"textarea",maxlength:14,rows:1},model:{value:t.info.thirdTitle,callback:function(e){t.info.thirdTitle=e},expression:"info.thirdTitle"}})],1)],1)],1),t._v(" "),o("Col",{attrs:{span:"12"}},[o("Form",[o("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"注释文字",required:!0}},[o("Input",{attrs:{type:"textarea",maxlength:14,rows:1},model:{value:t.info.thirdAnnotation,callback:function(e){t.info.thirdAnnotation=e},expression:"info.thirdAnnotation"}})],1)],1)],1)],1),t._v(" "),o("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:16,type:"flex",align:"middle"}},[o("Col",{attrs:{span:"24"}},[o("Form",[o("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"跳转链接"}},[o("Input",{attrs:{type:"textarea",rows:1},model:{value:t.info.thirdUrl,callback:function(e){t.info.thirdUrl=e},expression:"info.thirdUrl"}})],1)],1)],1)],1)],1),t._v(" "),o("Col",{attrs:{span:"12"}},[o("Row",{attrs:{gutter:30,type:"flex",align:"middle"}},[o("Col",[o("b",[t._v("介绍栏4：")])]),t._v(" "),o("Col",{attrs:{span:"10"}},[o("picClippingBox",{attrs:{fixedNumberW:13,fixedNumberH:10},on:{imgCropper:t.introduceFour}})],1)],1),t._v(" "),o("div",{staticStyle:{"margin-top":"10px",display:"inline-block"}},[t._v("上传介绍照片(尺寸500x500）")]),t._v(" "),o("div",{staticStyle:{border:"1px dashed #ddd",height:"100px"}},[o("img",{staticStyle:{height:"100%","line-height":"100px"},attrs:{src:t.imageReload(t.info.forthIntroductionUrl)}}),t._v(" "),t.judgePic(this.info.forthIntroductionUrl)?o("span",{staticStyle:{"margin-left":"20px"}},[t._v("暂无图片")]):t._e()]),t._v(" "),o("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:16,type:"flex",align:"middle"}},[o("Col",{attrs:{span:"12"}},[o("Form",[o("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"标题文字",required:!0}},[o("Input",{attrs:{type:"textarea",maxlength:14,rows:1},model:{value:t.info.forthTitle,callback:function(e){t.info.forthTitle=e},expression:"info.forthTitle"}})],1)],1)],1),t._v(" "),o("Col",{attrs:{span:"12"}},[o("Form",[o("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"注释文字",required:!0}},[o("Input",{attrs:{type:"textarea",maxlength:14,rows:1},model:{value:t.info.forthAnnotation,callback:function(e){t.info.forthAnnotation=e},expression:"info.forthAnnotation"}})],1)],1)],1)],1),t._v(" "),o("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:16,type:"flex",align:"middle"}},[o("Col",{attrs:{span:"24"}},[o("Form",[o("Form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"跳转链接"}},[o("Input",{attrs:{type:"textarea",rows:1},model:{value:t.info.forthUrl,callback:function(e){t.info.forthUrl=e},expression:"info.forthUrl"}})],1)],1)],1)],1)],1)],1),t._v(" "),o("Row",{staticClass:"page-row page-noBorder",attrs:{gutter:30,type:"flex",align:"middle"}},[o("Col",{attrs:{span:"12"}},[o("Form",[o("Form-item",{staticStyle:{"margin-bottom":"0"}},[o("b",[t._v("合作保险公司：")]),t._v(" "),o("Select",{attrs:{multiple:""},model:{value:t.info.policyIds,callback:function(e){t.info.policyIds=e},expression:"info.policyIds"}},t._l(t.lists,function(e,n){return o("Option",{key:n,attrs:{value:e.code}},[t._v(t._s(e.name))])}))],1)],1)],1)],1),t._v(" "),o("Row",{staticClass:"page-row page-noBorder",staticStyle:{"margin-bottom":"150px"},attrs:{gutter:30,type:"flex",align:"middle"}},[o("Col",{attrs:{span:"4"}},[o("Button",{attrs:{type:"primary"},on:{click:t.saveGolbalConfig}},[t._v("　保存　")])],1)],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},547:function(t,e){t.exports=[{code:"100",name:"安邦车险"},{code:"101",name:"安联车险"},{code:"102",name:"亚太财险"},{code:"103",name:"众安车险"},{code:"104",name:"太平洋保险"},{code:"106",name:"阳光财险"},{code:"107",name:"人保财险"},{code:"108",name:"大地保险"},{code:"109",name:"天安财险"},{code:"110",name:"太平财险"},{code:"111",name:"中华联合"},{code:"112",name:"安盛天平"},{code:"113",name:"紫金财险"},{code:"114",name:"永安财险"},{code:"115",name:"华安财险"},{code:"117",name:"安心财险"},{code:"118",name:"平安财险"},{code:"119",name:"锦泰财险"},{code:"120",name:"安华财险"},{code:"121",name:"利宝财险"},{code:"122",name:"信达财险"},{code:"124",name:"安诚保险"}]}});