webpackJsonp([22],{368:function(t,e,i){i(464);var n=i(91)(i(409),i(496),"data-v-810f5cc2",null);n.options.__file="E:\\liwend\\admin-bz\\src\\views\\products\\insurNotice.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] insurNotice.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},409:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(430),o=i(47),a=(i.n(o),this);e.default={data:function(){return{noticeCofig:{id:"",tid:this.$store.getters.tid,status:""},columns:[{title:"名称",key:"name",align:"center"},{title:"描述",key:"dis",align:"center"},{title:"类型",key:"type",align:"center"},{title:"操作",key:"oprate",align:"center",render:function(t,e){return t("a",{on:{click:function(){r(e.index)}}},"查看")},show:function(){console.log("dd")}}],noticeList:[{name:"投保通知",dis:"投保成功短信",type:"通知",oprate:"查看"},{name:"投保通知",dis:"投保失败短信",type:"通知",oprate:"查看"}]}},mounted:function(){this.getNoticeCofig()},methods:{getNoticeCofig:function(){var t=this;i.i(n.a)().then(function(e){if(!e.data)return void(t.noticeCofig.status=-1);1e4==e.errCode?(t.noticeCofig.id=e.data.id,t.noticeCofig.tid=e.data.tid,t.noticeCofig.status=e.data.status):t.$Message.error(e.data)}).catch(function(e){t.$Message.error("无法获取投保通知信息"),console.log(e)})},updateNoticeCofig:function(t){var e=this;this.noticeCofig.status=t,i.i(n.b)(this.noticeCofig).then(function(t){1e4==t.errCode?(e.$Message.success("通知配置保存成功"),e.getNoticeCofig()):e.$Message.error(t.data)}).catch(function(t){e.$Message.error("通知配置保存失败"),console.log(t)})}}};var r=function(t){0==t?s():1==t&&c()},s=function(){i.i(n.c)().then(function(t){1e4==t.errCode?o.Modal.info({title:"通知模板",content:t.data.template}):a.$Message.error(t.data)}).catch(function(t){a.$Message.error("通知模板获取失败"),console.log(t)})},c=function(){i.i(n.d)().then(function(t){1e4==t.errCode?o.Modal.info({title:"通知模板",content:t.data.template}):a.$Message.error(t.data)}).catch(function(t){a.$Message.error("通知模板获取失败"),console.log(t)})}},430:function(t,e,i){"use strict";function n(){var t={};return i.i(s.a)({baseURL:u,url:"/config/query/insureNotify",data:t})}function o(t){var e={id:t.id,tid:t.tid,status:t.status};return i.i(s.a)({baseURL:u,url:"/config/saveOrUpd/insureNotify",data:e})}function a(){var t={};return i.i(s.a)({baseURL:u,url:"/notification/template/query/insureNotify_success",data:t})}function r(){var t={};return i.i(s.a)({baseURL:u,url:"/notification/template/query/insureNotify_fail",data:t})}e.a=n,e.b=o,e.c=a,e.d=r;var s=i(129),c=i(130),u=c.a.javacore},464:function(t,e){},496:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[1!=t.noticeCofig.status?i("div",[t._m(0),t._v(" "),i("div",[i("Button",{attrs:{size:"large",type:"primary"},on:{click:function(e){t.updateNoticeCofig(1)}}},[t._v("立即启用")])],1)]):t._e(),t._v(" "),1==t.noticeCofig.status?i("div",{staticClass:"insurnotice-header-inline"},[i("Button",{staticClass:"insurnotice-header-btn",attrs:{size:"large",type:"ghost"},on:{click:function(e){t.updateNoticeCofig(-1)}}},[t._v("停用")]),t._v(" "),i("h2",[t._v("投保通知")])],1):t._e(),t._v(" "),1==t.noticeCofig.status?i("div",[i("Table",{attrs:{columns:t.columns,data:t.noticeList}})],1):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"insurnotice-header"},[i("h2",[t._v("投保通知")]),t._v(" "),i("p")])}]},t.exports.render._withStripped=!0}});