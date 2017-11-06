webpackJsonp([15],{

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(506)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(431),
  /* template */
  __webpack_require__(539),
  /* scopeId */
  "data-v-bc4ae756",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/views/balance/checkingOutput.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] checkingOutput.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bc4ae756", Component.options)
  } else {
    hotAPI.reload("data-v-bc4ae756", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = dateFormat;
/* unused harmony export compneysFormat */
/* harmony export (immutable) */ __webpack_exports__["a"] = moneyFormat;
/* harmony export (immutable) */ __webpack_exports__["c"] = moneyFormat2;
function dateFormat(str) {
    if (str) {
        return str.slice(0, 10);
    } else {
        return "";
    }
}
function compneysFormat(code) {
    return {
        "100": "安邦车险",
        "101": "安联车险",
        "102": "亚太财险",
        "103": "众安车险",
        "104": "太平洋保险",
        "106": "阳光财险",
        "107": "人保财险",
        "108": "大地保险",
        "109": "天安财险",
        "110": "太平财险",
        "111": "中华联合",
        "112": "安盛天平",
        "113": "紫金财险",
        "114": "永安财险",
        "115": "华安财险",
        "117": "安心财险",
        "118": "平安财险",
        "119": "锦泰财险",
        "120": "安华财险",
        "121": "利宝财险",
        "122": "信达财险"
    }[code];
}
function moneyFormat(number) {
    return (number / 100).toFixed(2);
}

function moneyFormat2(number) {
    return number.toFixed(2);
}

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = queryBalanceList;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_root__ = __webpack_require__(141);



var javacore = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].javacore;

// 查询对账列表
function queryBalanceList(opt) {
    var data = {
        type: opt.type,
        toTid: opt.toTid,
        carNo: opt.carNo,
        policyId: opt.policyId,
        status: opt.status,
        insuredStartTime: opt.insuredStartTime,
        insuredEndDate: opt.insuredEndDate,
        pageNo: opt.pageNo,
        pageSize: opt.pageSize
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/balance/getbalance",
        data: data
    });
}

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_balance_checkingEntry_js__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_filters_js__ = __webpack_require__(415);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




function statusFormat(status) {
    return {
        "0": "新生成",
        "1": "待结算",
        "2": "已结算",
        "3": "已完成",
        "-1": "已取消"
    }[status];
}
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            queryData: {
                type: 2,
                toTid: "",
                carNo: "",
                policyId: "",
                status: "",
                insuredStartTime: "",
                insuredEndDate: "",
                pageNo: 1,
                pageSize: 20
            },
            columns: [{ title: "保单号", key: "proposalNo", align: "center" }, { title: "承保日期", key: "orderTime", align: "center" }, { title: "保险公司", key: "policyName", align: "center" }, { title: "订单来源", key: "toTenantCode", align: "center" }, { title: "产品名称", key: "productName", align: "center" }, {
                title: "车牌号",
                key: "carNo",
                align: "center"
            }, {
                title: "交强",
                key: "jqAmount",
                align: "center",
                render: function render(h, params) {
                    return h('span', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__libs_filters_js__["a" /* moneyFormat */])(params.row.jqAmount));
                }
            }, {
                title: "车船",
                key: "ccAmount",
                align: "center",
                render: function render(h, params) {
                    return h('span', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__libs_filters_js__["a" /* moneyFormat */])(params.row.ccAmount));
                }
            }, {
                title: "商业",
                key: "syAmount",
                align: "center",
                render: function render(h, params) {
                    return h('span', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__libs_filters_js__["a" /* moneyFormat */])(params.row.syAmount));
                }
            },
            // {
            //     title: "保费合计",
            //     key: "mercreatetime",
            //     align: "center",
            //     render (h, params) {
            //         let row = params.row
            //         return h('span', row.ccAmount+row.jqAmount+row.syAmount)
            //     }
            // },
            // {
            //     title: "起保日期",
            //     key: "insurancrStartDate",
            //     align: "center",
            //     render (h, params) {
            //         return h('span', dateFormat(params.row.insurancrStartDate))
            //     }
            // },
            // {
            //     title: "终保日期",
            //     key: "insuranceEndDate",
            //     align: "center",
            //     render (h, params) {
            //         return h('span', dateFormat(params.row.insuranceEndDate))
            //     }
            // },
            {
                title: "商家结算",
                key: "balanceAmount",
                align: "center",
                render: function render(h, params) {
                    return h('span', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__libs_filters_js__["a" /* moneyFormat */])(params.row.balanceAmount));
                }
            }, {
                title: "状态",
                key: "status",
                align: "center",
                render: function render(h, params) {
                    return h('span', statusFormat(params.row.status));
                }
            }, {
                title: "备注",
                key: "note",
                align: "center",
                ellipsis: true
            }],
            balanceList: [],
            totalCount: 0
        };
    },
    mounted: function mounted() {
        this.queryList();
    },

    methods: {
        queryList: function queryList(page) {
            var _this = this;

            if (page) {
                this.queryData.pageNo = 1;
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_balance_checkingEntry_js__["a" /* queryBalanceList */])(this.queryData).then(function (data) {
                if (data.errCode == 10000) {
                    _this.balanceList = data.data.results;
                    _this.totalCount = data.data.totalCount;
                } else {
                    _this.$Message.error(data.data);
                }
            }).catch(function (err) {
                _this.$Message.error("对账列表获取失败");
                console.log(err);
            });
        },
        dateChange: function dateChange(date) {
            if (date[0] && date[1]) {
                this.queryData.insuredStartTime = date[0];
                this.queryData.insuredEndDate = date[1];
            } else {
                this.queryData.insuredStartTime = "";
                this.queryData.insuredEndDate = "";
            }
        },
        changePage: function changePage(page) {
            this.queryData.pageNo = page;
            this.queryList();
        }
    }
});

/***/ }),

/***/ 506:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Card', {
    staticClass: "checkingoutput-card"
  }, [_c('Form', {
    ref: "formInline",
    staticClass: "checkingoutput-form",
    attrs: {
      "inline": "",
      "label-width": 70
    }
  }, [_c('Form-item', {
    staticClass: "checkingoutput-form-item",
    attrs: {
      "label": "用户ID"
    }
  }, [_c('Input', {
    staticClass: "checkingoutput-form-input",
    attrs: {
      "type": "text",
      "placeholder": "用户ID"
    },
    model: {
      value: (_vm.queryData.toTid),
      callback: function($$v) {
        _vm.queryData.toTid = $$v
      },
      expression: "queryData.toTid"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "checkingoutput-form-item",
    attrs: {
      "label": "车牌号码"
    }
  }, [_c('Input', {
    staticClass: "checkingoutput-form-input",
    attrs: {
      "placeholder": "车牌号码"
    },
    model: {
      value: (_vm.queryData.carNo),
      callback: function($$v) {
        _vm.queryData.carNo = $$v
      },
      expression: "queryData.carNo"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "checkingoutput-form-item",
    attrs: {
      "label": "保险公司"
    }
  }, [_c('Input', {
    staticClass: "checkingoutput-form-input",
    attrs: {
      "type": "text",
      "placeholder": "保险公司"
    },
    model: {
      value: (_vm.queryData.policyId),
      callback: function($$v) {
        _vm.queryData.policyId = $$v
      },
      expression: "queryData.policyId"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "checkingoutput-form-item",
    attrs: {
      "label": "状态"
    }
  }, [_c('Select', {
    staticClass: "checkingoutput-form-input",
    attrs: {
      "clearable": ""
    },
    model: {
      value: (_vm.queryData.status),
      callback: function($$v) {
        _vm.queryData.status = $$v
      },
      expression: "queryData.status"
    }
  }, [_c('Option', {
    attrs: {
      "value": 0
    }
  }, [_vm._v("新生成")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("待结算")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": 2
    }
  }, [_vm._v("已结算")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": 3
    }
  }, [_vm._v("已完成")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": -1
    }
  }, [_vm._v("已取消")])], 1)], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "checkingoutput-form-item",
    attrs: {
      "label": "承保日期"
    }
  }, [_c('Date-picker', {
    attrs: {
      "type": "daterange",
      "placement": "bottom",
      "placeholder": "选择日期"
    },
    on: {
      "on-change": _vm.dateChange
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "checkingoutput-form-item"
  }, [_c('Button', {
    attrs: {
      "type": "ghost"
    },
    on: {
      "click": function($event) {
        _vm.queryList(1)
      }
    }
  }, [_vm._v("查询")])], 1)], 1)], 1), _vm._v(" "), _c('Table', {
    attrs: {
      "stripe": "",
      "columns": _vm.columns,
      "data": _vm.balanceList
    }
  }), _vm._v(" "), (_vm.balanceList.length > 0) ? _c('div', {
    staticClass: "checkingoutput-pagebar"
  }, [_c('Page', {
    staticClass: "checkingoutput-page-components",
    attrs: {
      "total": _vm.totalCount,
      "current": _vm.queryData.pageNo,
      "page-size": 20,
      "size": "small",
      "show-total": ""
    },
    on: {
      "on-change": _vm.changePage
    }
  })], 1) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-bc4ae756", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=15.chunk.js.map