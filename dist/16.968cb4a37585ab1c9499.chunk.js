webpackJsonp([16],{388:function(t,e,a){a(490);var n=a(96)(a(429),a(522),"data-v-355af14e",null);n.options.__file="/Users/ops/Desktop/workspace/admin-bz/src/views/balance/checkingEntry.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] checkingEntry.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},414:function(t,e,a){"use strict";function n(t){return t?t.slice(0,10):""}function r(t){return(t/100).toFixed(2)}e.b=n,e.a=r},425:function(t,e,a){"use strict";function n(t){var e={type:t.type,toTid:t.toTid,carNo:t.carNo,policyId:t.policyId,status:t.status,insuredStartTime:t.insuredStartTime,insuredEndDate:t.insuredEndDate,pageNo:t.pageNo,pageSize:t.pageSize};return a.i(r.a)({baseURL:s,url:"/balance/getbalance",data:e})}e.a=n;var r=a(139),i=a(140),s=i.a.javacore},429:function(t,e,a){"use strict";function n(t){return{0:"新生成",1:"待结算",2:"已结算",3:"已完成","-1":"已取消"}[t]}Object.defineProperty(e,"__esModule",{value:!0});var r=a(425),i=a(414);e.default={data:function(){return{queryData:{type:1,toTid:"",carNo:"",policyId:"",status:"",insuredStartTime:"",insuredEndDate:"",pageNo:1,pageSize:20},columns:[{title:"保单号",key:"proposalNo",align:"center"},{title:"承保日期",key:"orderTime",align:"center"},{title:"保险公司",key:"policyName",align:"center"},{title:"订单来源",key:"toTenantCode",align:"center"},{title:"产品名称",key:"productName",align:"center"},{title:"车牌号",key:"carNo",align:"center"},{title:"交强",key:"jqAmount",align:"center",render:function(t,e){return t("span",a.i(i.a)(e.row.jqAmount))}},{title:"车船",key:"ccAmount",align:"center",render:function(t,e){return t("span",a.i(i.a)(e.row.ccAmount))}},{title:"商业",key:"syAmount",align:"center",render:function(t,e){return t("span",a.i(i.a)(e.row.syAmount))}},{title:"商家结算",key:"balanceAmount",align:"center",render:function(t,e){return t("span",a.i(i.a)(e.row.balanceAmount))}},{title:"状态",key:"status",align:"center",render:function(t,e){return t("span",n(e.row.status))}},{title:"备注",key:"note",align:"center",ellipsis:!0}],balanceList:[],totalCount:0}},mounted:function(){this.queryList()},methods:{queryList:function(){var t=this;a.i(r.a)(this.queryData).then(function(e){1e4==e.errCode?(console.log(e),t.balanceList=e.data.results,t.totalCount=e.data.totalCount):t.$Message.error(e.data)}).catch(function(e){t.$Message.error("对账列表获取失败"),console.log(e)})},dateChange:function(t){t[0]&&t[1]?(this.queryData.insuredStartTime=t[0],this.queryData.insuredEndDate=t[1]):(this.queryData.insuredStartTime="",this.queryData.insuredEndDate="")},changePage:function(t){this.queryData.pageNo=t,this.queryList()}}}},490:function(t,e){},522:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",{staticClass:"checkingentry-card"},[a("Form",{ref:"formInline",staticClass:"checkingentry-form",attrs:{inline:"","label-width":70}},[a("Form-item",{staticClass:"checkingentry-form-item",attrs:{label:"用户ID"}},[a("Input",{staticClass:"checkingentry-form-input",attrs:{type:"text",placeholder:"用户ID"},model:{value:t.queryData.toTid,callback:function(e){t.queryData.toTid=e},expression:"queryData.toTid"}})],1),t._v(" "),a("Form-item",{staticClass:"checkingentry-form-item",attrs:{label:"车牌号码"}},[a("Input",{staticClass:"checkingentry-form-input",attrs:{placeholder:"车牌号码"},model:{value:t.queryData.carNo,callback:function(e){t.queryData.carNo=e},expression:"queryData.carNo"}})],1),t._v(" "),a("Form-item",{staticClass:"checkingentry-form-item",attrs:{label:"保险公司"}},[a("Input",{staticClass:"checkingentry-form-input",attrs:{type:"text",placeholder:"保险公司"},model:{value:t.queryData.policyId,callback:function(e){t.queryData.policyId=e},expression:"queryData.policyId"}})],1),t._v(" "),a("Form-item",{staticClass:"checkingentry-form-item",attrs:{label:"状态"}},[a("Select",{staticClass:"checkingentry-form-input",attrs:{clearable:""},model:{value:t.queryData.status,callback:function(e){t.queryData.status=e},expression:"queryData.status"}},[a("Option",{attrs:{value:0}},[t._v("新生成")]),t._v(" "),a("Option",{attrs:{value:1}},[t._v("待结算")]),t._v(" "),a("Option",{attrs:{value:2}},[t._v("已结算")]),t._v(" "),a("Option",{attrs:{value:3}},[t._v("已完成")]),t._v(" "),a("Option",{attrs:{value:-1}},[t._v("已取消")])],1)],1),t._v(" "),a("Form-item",{staticClass:"checkingentry-form-item",attrs:{label:"承保日期"}},[a("Date-picker",{attrs:{type:"daterange",placement:"bottom",placeholder:"选择日期"},on:{"on-change":t.dateChange}})],1),t._v(" "),a("Form-item",{staticClass:"checkingentry-form-item"},[a("Button",{attrs:{type:"ghost"},on:{click:t.queryList}},[t._v("查询")])],1)],1)],1),t._v(" "),a("Table",{attrs:{stripe:"",columns:t.columns,data:t.balanceList}}),t._v(" "),t.balanceList.length>0?a("div",{staticClass:"checkingentry-pagebar"},[a("Page",{staticClass:"checkingentry-page-components",attrs:{total:t.totalCount,"page-size":20,size:"small","show-total":""},on:{"on-change":t.changePage}})],1):t._e()],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});