webpackJsonp([22],{372:function(e,t,o){o(464);var n=o(91)(o(414),o(497),"data-v-601c5b8e",null);n.options.__file="E:\\liwend\\admin-bz\\src\\views\\products\\noticeConfig.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] noticeConfig.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},414:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(436);t.default={data:function(){return{notice:{companyName:"",productName:""}}},mounted:function(){this.getNoticeBasic()},methods:{getNoticeBasic:function(){var e=this;o.i(n.a)().then(function(t){1e4==t.errCode?(t.data||e.$Message.warning("暂无配置信息"),e.notice.companyName=t.data.companyName,e.notice.productName=t.data.productName):e.$Message.error(t.data)}).catch(function(t){e.$Message.error("获取通知设置信息失败"),console.log(t)})}}}},436:function(e,t,o){"use strict";function n(){var e={};return o.i(a.a)({baseURL:c,url:"/notification/basic/query",data:e})}t.a=n;var a=o(129),i=o(130),c=i.a.javacore},464:function(e,t){},497:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),e._v(" "),o("div",[o("Form",{ref:"formInline",staticClass:"noticeconfig-form",attrs:{"label-width":70}},[o("Form-item",{staticClass:"noticeconfig-form-item",attrs:{label:"公司名称"}},[o("Input",{staticClass:"noticeconfig-form-input",attrs:{type:"text",placeholder:"公司名称",readonly:""},model:{value:e.notice.companyName,callback:function(t){e.notice.companyName=t},expression:"notice.companyName"}})],1),e._v(" "),o("Form-item",{staticClass:"noticeconfig-form-item",attrs:{label:"产品名称"}},[o("Input",{staticClass:"noticeconfig-form-input",attrs:{type:"text",placeholder:"产品名称",readonly:""},model:{value:e.notice.productName,callback:function(t){e.notice.productName=t},expression:"notice.productName"}})],1),e._v(" "),o("Form-item",{staticClass:"noticeconfig-form-item"})],1)],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"noticeconfig-header"},[o("h2",[e._v("通知设置")])])}]},e.exports.render._withStripped=!0}});