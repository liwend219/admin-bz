webpackJsonp([24],{366:function(e,t,a){a(469);var r=a(91)(a(408),a(502),null,null);r.options.__file="E:\\liwend\\admin-bz\\src\\views\\products\\commissionReward.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] commissionReward.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},408:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(430);t.default={data:function(){return{rewardCofig:{id:"",tid:this.$store.getters.tid,status:""},animal:"1"}},mounted:function(){this.getRewardCofig()},methods:{getRewardCofig:function(){var e=this;a.i(r.a)().then(function(t){if(!t.data)return void(e.rewardCofig.status=-1);1e4==t.errCode?(e.rewardCofig.id=t.data.id,e.rewardCofig.tid=t.data.tid,e.rewardCofig.status=t.data.status):e.$Message.error(t.data)}).catch(function(t){e.$Message.error("无法获取佣金配置信息"),console.log(t)})},updateRewardCofig:function(e){var t=this;this.rewardCofig.status=e,this.animal=e,a.i(r.b)(this.rewardCofig).then(function(e){1e4==e.errCode?(t.$Message.success("佣金配置保存成功"),t.getRewardCofig()):t.$Message.error(e.data)}).catch(function(e){t.$Message.error("佣金配置保存失败"),console.log(e)})}}}},430:function(e,t,a){"use strict";function r(){var e={};return a.i(s.a)({baseURL:n,url:"/config/query/esaleComission",data:e})}function i(e){var t={id:e.id,tid:e.tid,status:e.status};return a.i(s.a)({baseURL:n,url:"/config/saveOrUpd/esaleComission",data:t})}t.a=r,t.b=i;var s=a(129),o=a(130),n=o.a.javacore},469:function(e,t){},502:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:-1==e.rewardCofig.status,expression:"rewardCofig.status==-1"}]},[e._m(0),e._v(" "),a("div",[a("Button",{attrs:{size:"large",type:"primary"},on:{click:function(t){e.updateRewardCofig(1)}}},[e._v("立即启用")])],1)]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:-1!=e.rewardCofig.status,expression:"rewardCofig.status!=-1"}]},[a("div",{staticClass:"commissionreward-header-inline"},[a("Button",{staticStyle:{float:"right","margin-top":"6px","margin-left":"16px"},attrs:{size:"large",type:"ghost"},on:{click:function(t){e.updateRewardCofig(-1)}}},[e._v("立即停用")]),e._v(" "),a("h2",{staticStyle:{float:"right"}},[e._v("佣金分配")])],1),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),a("Radio-group",{attrs:{value:e.animal},on:{"on-change":e.updateRewardCofig}},[a("Radio",{attrs:{label:"1"}},[a("span",[e._v("分配给公司和客户")])]),e._v("      \n            "),a("Radio",{attrs:{label:"2"}},[a("span",[e._v("分配给电销和客户")])])],1)],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"commissionreward-header"},[a("h2",[e._v("佣金分配")]),e._v(" "),a("p",[e._v("你尚未启用佣金分配")])])}]},e.exports.render._withStripped=!0}});