webpackJsonp([10],{400:function(t,e,i){i(509);var a=i(96)(i(442),i(543),"data-v-ed8018ce",null);a.options.__file="/Users/ops/Desktop/workspace/admin-bz/src/views/products/identityAudit.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] identityAudit.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},415:function(t,e,i){"use strict";function a(t){return t?t.slice(0,10):""}function s(t){return(t/100).toFixed(2)}function r(t){return t.toFixed(2)}e.b=a,e.a=s,e.c=r},442:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(415),s=i(464),r=function(t){return{"-1":"审核失败",0:"未上传",1:"待审核",2:"审核通过"}[t]};e.default={data:function(){return{isShow:!1,identityAuditCofig:{id:"",tid:"",status:""},queryData:{idCardStatus:"",order:"",pageNo:1,pageSize:10,sort:"cdt",userId:""},columns:[{title:"钱包ID",key:"id",align:"center"},{title:"用户ID",key:"uid",align:"center"},{title:"钱包余额",key:"purseLeft",align:"center",render:function(t,e){return t("span",i.i(a.a)(e.row.purseLeft))}},{title:"总收益",key:"totalBalance",align:"center",render:function(t,e){return t("span",i.i(a.a)(e.row.totalBalance))}},{title:"总提现",key:"totalCashBack",align:"center",render:function(t,e){return t("span",i.i(a.a)(e.row.totalCashBack))}},{title:"身份信息审核状态",key:"idCardStatus",align:"center",render:function(t,e){return t("span",r(e.row.idCardStatus))}},{title:"更新时间",key:"upd",align:"center",render:function(t,e){return t("span",i.i(a.b)(e.row.upd))}},{title:"创建时间",key:"cdt",align:"center",render:function(t,e){return t("span",i.i(a.b)(e.row.cdt))}}],userList:[],totalCount:"",userSelected:{name:"",idNo:"",purseUserId:"",status:"",idCardBack:"",idCardFront:""},modelStatus:!1}},mounted:function(){this.getIdentityAuditCofig()},methods:{getIdentityAuditCofig:function(){var t=this;i.i(s.a)().then(function(e){if(1e4===e.errCode){if(!e.data)return;t.identityAuditCofig.id=e.data.id,t.identityAuditCofig.tid=e.data.tid,t.identityAuditCofig.status=e.data.status,1==e.data.status&&t.queryList()}else t.identityAuditCofig.status=-1,t.$Message.error(e.data)}).catch(function(e){t.$Message.error("无法获取用户信息"),console.log(e)})},updateIdentityAuditCofig:function(t){var e=this;this.identityAuditCofig.status=t,i.i(s.b)(this.identityAuditCofig).then(function(t){1e4===t.errCode?(e.$Message.success("启用成功"),e.getIdentityAuditCofig()):(e.identityAuditCofig.status=-1,e.$Message.error(t.data))}).catch(function(t){e.$Message.error("启用失败"),console.log(t)})},queryList:function(t){var e=this;t&&(this.queryData.pageNo=1),i.i(s.c)(this.queryData).then(function(t){1e4===t.errCode?(e.totalCount=t.data.total,e.userList=t.data.pageRows):e.$Message.error(t.data)}).catch(function(t){e.$Message.error("审核列表获取失败"),console.log(t)})},openModel:function(){""==this.userSelected.purseUserId?this.$Message.warning("请选择你要审核的用户"):0==this.userSelected.status?this.$Message.warning("未上传身份信息，无法审核"):-1==this.userSelected.status?this.$Message.warning("已审核失败"):2==this.userSelected.status?(this.modelStatus=!0,this.isShow=!1):(this.modelStatus=!0,this.isShow=!0)},selecteRow:function(t){this.userSelected.name=t.name,this.userSelected.idNo=t.idNo,this.userSelected.purseUserId=t.uid,this.userSelected.status=t.idCardStatus,this.userSelected.idCardBack=t.idCardBack,this.userSelected.idCardFront=t.idCardFront},okStatus:function(){this.commitStatus(2)},cancelStatus:function(){this.commitStatus(-1)},commitStatus:function(t){var e=this,a={status:t,purseUserId:this.userSelected.purseUserId};i.i(s.d)(a).then(function(t){1e4===t.errCode?(e.$Message.success("审核成功"),e.queryList()):e.$Message.error(t.data)}).catch(function(t){e.$Message.error("审核失败"),console.log(t)})},changePage:function(t){this.queryData.pageNo=t,this.queryList()}}}},464:function(t,e,i){"use strict";function a(){var t={};return i.i(u.a)({baseURL:d,url:"/config/query/inentityAudit",data:t})}function s(t){var e={id:t.id,tid:t.tid,status:t.status};return i.i(u.a)({baseURL:d,url:"/config/saveOrUpd/inentityAudit",data:e})}function r(t){var e={idCardStatus:t.idCardStatus,order:t.order,pageNo:t.pageNo,pageSize:t.pageSize,userId:t.userId,sort:"cdt",tenantCode:t.tenantCode};return i.i(u.a)({baseURL:d,url:"/accounting/purse/identityAudit",data:e})}function n(t){var e={purseUserId:t.purseUserId,status:t.status};return i.i(u.a)({baseURL:d,url:"/accounting/purse/dealIdentityAudit",data:e})}e.a=a,e.b=s,e.c=r,e.d=n;var u=i(139),o=i(140),d=o.a.javacore},509:function(t,e){},543:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[1!=t.identityAuditCofig.status?i("div",[t._m(0),t._v(" "),i("div",[i("Button",{attrs:{size:"large",type:"primary"},on:{click:function(e){t.updateIdentityAuditCofig(1)}}},[t._v("立即启用")])],1)]):t._e(),t._v(" "),1==t.identityAuditCofig.status?i("div",{staticClass:"identiyaudit-header-inline"},[i("Button",{staticClass:"identiyaudit-header-btn",attrs:{size:"large",type:"ghost"},on:{click:function(e){t.updateIdentityAuditCofig(-1)}}},[t._v("停用")]),t._v(" "),i("h2",[t._v("身份审核")])],1):t._e(),t._v(" "),1==t.identityAuditCofig.status?i("div",{staticClass:"identiyaudit-page"},[i("Row",{attrs:{type:"flex",align:"middle"}},[i("Col",{attrs:{span:20}},[i("Card",{staticStyle:{"margin-bottom":"15px"}},[i("Form",{ref:"formInline",staticClass:"identiyaudit-form",attrs:{inline:"","label-width":70}},[i("Form-item",{staticClass:"identiyaudit-form-item",attrs:{label:"用户ID"}},[i("Input",{staticClass:"identiyaudit-form-input",attrs:{type:"text",placeholder:"用户ID"},model:{value:t.queryData.id,callback:function(e){t.queryData.id=e},expression:"queryData.id"}})],1),t._v(" "),i("Form-item",{staticClass:"identiyaudit-form-item",attrs:{label:"状态"}},[i("Select",{staticStyle:{width:"120px"},attrs:{clearable:""},model:{value:t.queryData.idCardStatus,callback:function(e){t.queryData.idCardStatus=e},expression:"queryData.idCardStatus"}},[i("Option",{attrs:{value:"-1"}},[t._v("审核失败")]),t._v(" "),i("Option",{attrs:{value:"0"}},[t._v("未上传")]),t._v(" "),i("Option",{attrs:{value:"1"}},[t._v("待审核")]),t._v(" "),i("Option",{attrs:{value:"2"}},[t._v("审核通过")])],1)],1),t._v(" "),i("Form-item",{staticClass:"identiyaudit-form-item"},[i("Button",{attrs:{type:"primary"},on:{click:function(e){t.queryList(1)}}},[t._v("搜索")])],1)],1)],1)],1),t._v(" "),i("Col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[i("Button",{attrs:{type:"primary"},on:{click:t.openModel}},[t._v("身份审核")])],1)],1),t._v(" "),i("Table",{attrs:{stripe:"",columns:t.columns,data:t.userList,"highlight-row":""},on:{"on-current-change":t.selecteRow}}),t._v(" "),t.userList.length>0?i("div",{staticClass:"identiyaudit-pagebar"},[i("Page",{staticClass:"identiyaudit-page-components",attrs:{total:t.totalCount,current:t.queryData.pageNo,"page-size":20,size:"small","show-total":""},on:{"on-change":t.changePage}})],1):t._e()],1):t._e(),t._v(" "),i("Modal",{staticClass:"identiyaudit-model",attrs:{title:"身份审核"},model:{value:t.modelStatus,callback:function(e){t.modelStatus=e},expression:"modelStatus"}},[t.isShow?i("div",{staticStyle:{"text-align":"center"}},[i("label",{staticClass:"form-label"},[t._v("姓　　名："+t._s(t.userSelected.name))]),t._v(" "),i("label",{staticClass:"form-label"},[t._v("身份证号："+t._s(t.userSelected.idNo))])]):t._e(),t._v(" "),i("br"),t._v(" "),i("img",{attrs:{src:t.userSelected.idCardBack,alt:""}}),t._v(" "),i("img",{attrs:{src:t.userSelected.idCardFront,alt:""}}),t._v(" "),t.isShow?i("div",{slot:"footer"},[i("Button",{attrs:{type:"info",size:"large"},on:{click:t.okStatus}},[t._v("审核通过")]),t._v(" "),i("Button",{attrs:{size:"large"},on:{click:t.cancelStatus}},[t._v("审核不通过")])],1):t._e()])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"identiyaudit-header"},[i("h2",[t._v("身份审核")]),t._v(" "),i("p",[t._v("你尚未启用身份审核")])])}]},t.exports.render._withStripped=!0}});