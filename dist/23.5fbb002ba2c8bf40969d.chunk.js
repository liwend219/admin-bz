webpackJsonp([23],{403:function(t,e,i){i(496);var o=i(96)(i(445),i(529),"data-v-49be5376",null);o.options.__file="/Users/ops/Desktop/workspace/admin-bz/src/views/products/integrateNotice.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] integrateNotice.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},445:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(466),n=i(48),a=(i.n(n),this);e.default={data:function(){return{noticeCofig:{id:"",tid:this.$store.getters.tid,status:""},columns:[{title:"名称",key:"name",align:"center"},{title:"描述",key:"dis",align:"center"},{title:"类型",key:"type",align:"center"},{title:"操作",key:"oprate",align:"center",render:function(t,e){return t("a",{on:{click:function(){s(e.index)}}},"查看")},show:function(){console.log("dd")}}],noticeList:[{name:"积分通知",dis:"积分审核通过短信",type:"通知",oprate:"查看"}]}},mounted:function(){this.getNoticeCofig()},methods:{getNoticeCofig:function(){var t=this;i.i(o.a)().then(function(e){if(!e.data)return void(t.noticeCofig.status=-1);1e4==e.errCode?(t.noticeCofig.id=e.data.id,t.noticeCofig.tid=e.data.tid,t.noticeCofig.status=e.data.status):t.$Message.error(e.data)}).catch(function(e){t.$Message.error("无法获取积分通知信息"),console.log(e)})},updateNoticeCofig:function(t){var e=this;this.noticeCofig.status=t,i.i(o.b)(this.noticeCofig).then(function(t){1e4==t.errCode?(e.$Message.success("通知配置保存成功"),e.getNoticeCofig()):e.$Message.error(t.data)}).catch(function(t){e.$Message.error("通知配置保存失败"),console.log(t)})}}};var s=function(t){0==t&&r()},r=function(){i.i(o.c)().then(function(t){1e4==t.errCode?n.Modal.info({title:"通知模板",content:t.data.template}):a.$Message.error(t.data)}).catch(function(t){a.$Message.error("通知模板获取失败"),console.log(t)})}},466:function(t,e,i){"use strict";function o(){var t={};return i.i(s.a)({baseURL:c,url:"/config/query/scoreNotify",data:t})}function n(t){var e={id:t.id,tid:t.tid,status:t.status};return i.i(s.a)({baseURL:c,url:"/config/saveOrUpd/scoreNotify",data:e})}function a(){var t={};return i.i(s.a)({baseURL:c,url:"/notification/template/query/scoreNotify_access",data:t})}e.a=o,e.b=n,e.c=a;var s=i(139),r=i(140),c=r.a.javacore},496:function(t,e){},529:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[1!=t.noticeCofig.status?i("div",[t._m(0),t._v(" "),i("div",[i("Button",{attrs:{size:"large",type:"primary"},on:{click:function(e){t.updateNoticeCofig(1)}}},[t._v("立即启用")])],1)]):t._e(),t._v(" "),1==t.noticeCofig.status?i("div",{staticClass:"integratenotice-header-inline"},[i("Button",{staticClass:"integratenotice-header-btn",attrs:{size:"large",type:"ghost"},on:{click:function(e){t.updateNoticeCofig(-1)}}},[t._v("停用")]),t._v(" "),i("h2",[t._v("积分通知")])],1):t._e(),t._v(" "),1==t.noticeCofig.status?i("div",[i("Table",{attrs:{columns:t.columns,data:t.noticeList}})],1):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"integratenotice-header"},[i("h2",[t._v("积分通知")]),t._v(" "),i("p",[t._v("积分变动后短信通知")])])}]},t.exports.render._withStripped=!0}});