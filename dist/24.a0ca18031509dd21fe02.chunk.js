webpackJsonp([24],{395:function(t,e,o){o(499);var i=o(96)(o(436),o(531),"data-v-9778f6a2",null);i.options.__file="/Users/ops/Desktop/workspace/admin-bz/src/views/products/cashOutNotice.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] cashOutNotice.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},436:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(457),n=o(48),a=(o.n(n),this);e.default={data:function(){return{noticeCofig:{id:"",tid:this.$store.getters.tid,status:""},columns:[{title:"名称",key:"name",align:"center"},{title:"描述",key:"dis",align:"center"},{title:"类型",key:"type",align:"center"},{title:"操作",key:"oprate",align:"center",render:function(t,e){return t("a",{on:{click:function(){s(e.index)}}},"查看")},show:function(){console.log("dd")}}],noticeList:[{name:"提现通知",dis:"提现成功短信",type:"通知",oprate:"查看"},{name:"提现通知",dis:"提现失败短信",type:"通知",oprate:"查看"}]}},mounted:function(){this.getNoticeCofig()},methods:{getNoticeCofig:function(){var t=this;o.i(i.a)().then(function(e){if(!e.data)return void(t.noticeCofig.status=-1);1e4==e.errCode?(t.noticeCofig.id=e.data.id,t.noticeCofig.tid=e.data.tid,t.noticeCofig.status=e.data.status):t.$Message.error(e.data)}).catch(function(e){t.$Message.error("无法获取提现通知信息"),console.log(e)})},updateNoticeCofig:function(t){var e=this;this.noticeCofig.status=t,o.i(i.b)(this.noticeCofig).then(function(t){1e4==t.errCode?(e.$Message.success("通知配置保存成功"),e.getNoticeCofig()):e.$Message.error(t.data)}).catch(function(t){e.$Message.error("通知配置保存失败"),console.log(t)})}}};var s=function(t){0==t?c():1==t&&r()},c=function(){o.i(i.c)().then(function(t){1e4==t.errCode?n.Modal.info({title:"通知模板",content:t.data.template}):a.$Message.error(t.data)}).catch(function(t){a.$Message.error("通知模板获取失败"),console.log(t)})},r=function(){o.i(i.d)().then(function(t){1e4==t.errCode?n.Modal.info({title:"通知模板",content:t.data.template}):a.$Message.error(t.data)}).catch(function(t){a.$Message.error("通知模板获取失败"),console.log(t)})}},457:function(t,e,o){"use strict";function i(){var t={};return o.i(c.a)({baseURL:u,url:"/config/query/cashbackNotify",data:t})}function n(t){var e={id:t.id,tid:t.tid,status:t.status};return o.i(c.a)({baseURL:u,url:"/config/saveOrUpd/cashbackNotify",data:e})}function a(){var t={};return o.i(c.a)({baseURL:u,url:"/notification/template/query/cashbackNotify_success",data:t})}function s(){var t={};return o.i(c.a)({baseURL:u,url:"/notification/template/query/cashbackNotify_fail",data:t})}e.a=i,e.b=n,e.c=a,e.d=s;var c=o(139),r=o(140),u=r.a.javacore},499:function(t,e){},531:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[1!=t.noticeCofig.status?o("div",[t._m(0),t._v(" "),o("div",[o("Button",{attrs:{size:"large",type:"primary"},on:{click:function(e){t.updateNoticeCofig(1)}}},[t._v("立即启用")])],1)]):t._e(),t._v(" "),1==t.noticeCofig.status?o("div",{staticClass:"cashoutnotice-header-inline"},[o("Button",{staticClass:"cashoutnotice-header-btn",attrs:{size:"large",type:"ghost"},on:{click:function(e){t.updateNoticeCofig(-1)}}},[t._v("停用")]),t._v(" "),o("h2",[t._v("提现通知")])],1):t._e(),t._v(" "),1==t.noticeCofig.status?o("div",[o("Table",{attrs:{columns:t.columns,data:t.noticeList}})],1):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cashoutnotice-header"},[o("h2",[t._v("提现通知")]),t._v(" "),o("p")])}]},t.exports.render._withStripped=!0}});