webpackJsonp([14],{

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(484)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(432),
  /* template */
  __webpack_require__(518),
  /* scopeId */
  "data-v-107fd4b2",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/views/balance/moneyAccount.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] moneyAccount.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-107fd4b2", Component.options)
  } else {
    hotAPI.reload("data-v-107fd4b2", Component.options)
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

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_filters_js__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_balance_moneyAccount_js__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_iview__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_iview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
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






var statusFormat = function statusFormat(status) {
    return {
        "0": "已取消",
        "1": "待支付",
        "2": "支付宝未回调",
        "3": "已支付",
        "4": "支付失败"
    }[status];
};
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            queryData: {
                orderCode: "",
                payType: "",
                status: "",
                pageNo: 1,
                pageSize: 20
            },
            accountCallback: "",
            columns: [{
                type: 'selection',
                width: 60,
                align: 'center',
                fixed: 'left'
            }, { title: "出账ID", key: "id", align: "center", width: 80, fixed: 'left' }, { title: "申请人身份证", key: "applyIDCard", align: "center", width: 140 }, {
                title: "提现订单号",
                key: "orderCode",
                align: "center",
                width: 220
            }, {
                title: "支付宝姓名",
                key: "alipayName",
                align: "center",
                width: 120
            }, {
                title: "支付宝账号",
                key: "alipayAccount",
                align: "center",
                width: 140
            }, {
                title: "支付宝流水号",
                key: "thirdPartCode",
                align: "center",
                width: 140
            }, {
                title: "账务流水号",
                key: "payOrderCode",
                align: "center",
                width: 160
            }, {
                title: "金额",
                key: "money",
                align: "center",
                width: 100
            }, {
                title: "原因",
                key: "reason",
                align: "center",
                width: 100,
                render: function render(h, p) {
                    return h("a", {
                        on: {
                            click: function click() {
                                __WEBPACK_IMPORTED_MODULE_2_iview__["Modal"].info({
                                    title: "原因",
                                    content: p.row.reason
                                });
                            }
                        }
                    }, "查看原因");
                }
            }, {
                title: "处理人",
                key: "dealer",
                align: "center",
                width: 100
            }, {
                title: "订单状态",
                key: "status",
                align: "center",
                width: 100,
                render: function render(h, params) {
                    return h('span', statusFormat(params.row.status));
                }
            }, {
                title: "订单完成时间",
                key: "modifyTime",
                align: "center",
                width: 120
            }],
            preYieldlist: [],
            totalCount: "",
            accountSelected: {
                idList: []
            },
            modelStatus: false
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
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_balance_moneyAccount_js__["a" /* queryAccountlist */])(this.queryData).then(function (data) {
                if (data.errCode === 10000) {
                    data.data.items.map(function (data) {
                        // data._disabled = data.status== 1 ? false : true
                    });
                    _this.totalCount = data.data.totalCount;
                    _this.preYieldlist = data.data.items;
                } else {
                    _this.$Message.error(data.data);
                }
            }).catch(function (err) {
                _this.$Message.error("预收益列表获取失败");
                console.log(err);
            });
        },
        changePage: function changePage(page) {
            this.queryData.pageNo = page;
            this.queryList();
        },
        datePick: function datePick(date) {
            if (date[0] && date[1]) {
                this.queryData.availableDate = date[0];
                this.queryData.availableEndDate = date[1];
            } else {
                this.queryData.availableDate = "";
                this.queryData.availableEndDate = "";
            }
        },
        selecteRow: function selecteRow(arr) {
            var _this2 = this;

            this.accountSelected.idList = [];
            arr.map(function (data) {
                _this2.accountSelected.idList.push(data.id);
            });
        },
        openModel: function openModel() {
            if (this.accountSelected.idList.length == 0) {
                this.$Message.warning("至少要选择一条要审核的项目");
                return;
            }
            this.modelStatus = true;
        },
        okStatus: function okStatus() {
            var _this3 = this;

            this.modelStatus = false;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_balance_moneyAccount_js__["b" /* accountPay */])(this.accountSelected).then(function (data) {
                if (data.data.fail != null) {
                    _this3.$Message.error(data.data.fail);
                } else {
                    var failMap = data.data['failMap'];
                    var html = data.data['alipayHtml'];
                    for (var key in failMap) {
                        if (failMap[key] != null && failMap[key] != "") {
                            _this3.$Notice.error({
                                title: '操作失败',
                                desc: "订单号为" + key + "的订单操作失败,原因" + failMap[key]
                            });
                        }
                    }
                    if (data.data['alipayHtml'] != null && data.data['alipayHtml'] != '') {
                        __WEBPACK_IMPORTED_MODULE_3_jquery___default()('#accountCallback').append(data.data['alipayHtml']);
                    }
                }
            }).catch(function (err) {
                _this3.$Message.error("打款失败");
                console.log(err);
            });
        },
        cancelStatus: function cancelStatus() {
            var _this4 = this;

            this.modelStatus = false;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_balance_moneyAccount_js__["c" /* accountRefund */])(this.accountSelected).then(function (data) {
                if (data.data.fail != null) {
                    _this4.$Message.error(data.data.fail);
                } else {
                    var failMap = data.data['failMap'];
                    var html = data.data['alipayHtml'];
                    var i = 0;
                    for (var key in failMap) {
                        if (failMap[key] != null && failMap[key] != "") {
                            i++;
                            _this4.$Notice.error({
                                title: '操作失败',
                                desc: "订单号为" + key + "的订单操作失败,原因" + failMap[key]
                            });
                        }
                    }
                    if (i == 0) {
                        _this4.$Notice.success({
                            title: "操作成功"
                        });
                    }
                    if (data.data['alipayHtml'] != null && data.data['alipayHtml'] != '') {
                        __WEBPACK_IMPORTED_MODULE_3_jquery___default()('#accountCallback').append(data.data['alipayHtml']);
                    }
                }
            }).catch(function (err) {
                _this4.$Message.error("退款失败");
                console.log(err);
            });
        }
    }
});

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = queryAccountlist;
/* harmony export (immutable) */ __webpack_exports__["b"] = accountPay;
/* harmony export (immutable) */ __webpack_exports__["c"] = accountRefund;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_root__ = __webpack_require__(141);



var javacore = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].javacore;

// 查询账单列表
function queryAccountlist(opt) {
    var data = {
        payType: opt.payType, // 0 支付宝打款 , 4 微信退款,6 支付宝退款
        orderCode: opt.orderCode,
        pageNo: opt.pageNo,
        pageSize: opt.pageSize,
        status: opt.status
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/accounting/account",
        data: data
    });
}
// 打款
function accountPay(opt) {
    var data = {
        idList: opt.idList
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/accounting/pay",
        data: data
    });
}
// 退款
function accountRefund(opt) {
    var data = {
        idList: opt.idList
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/accounting/refund",
        data: data
    });
}

/***/ }),

/***/ 484:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cashout-page"
  }, [_c('Row', {
    attrs: {
      "type": "flex",
      "align": "middle"
    }
  }, [_c('Col', {
    attrs: {
      "span": 20
    }
  }, [_c('Card', {
    staticStyle: {
      "margin-bottom": "15px"
    }
  }, [_c('Form', {
    ref: "formInline",
    staticClass: "cashout-form",
    attrs: {
      "inline": "",
      "label-width": 70
    }
  }, [_c('Form-item', {
    staticClass: "cashout-form-item",
    attrs: {
      "label": "订单号"
    }
  }, [_c('Input', {
    staticClass: "cashout-form-input",
    attrs: {
      "type": "text",
      "placeholder": "订单号"
    },
    model: {
      value: (_vm.queryData.orderCode),
      callback: function($$v) {
        _vm.queryData.orderCode = $$v
      },
      expression: "queryData.orderCode"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "cashout-form-item",
    attrs: {
      "label": "支付类型"
    }
  }, [_c('Select', {
    staticStyle: {
      "width": "120px"
    },
    attrs: {
      "clearable": ""
    },
    model: {
      value: (_vm.queryData.payType),
      callback: function($$v) {
        _vm.queryData.payType = $$v
      },
      expression: "queryData.payType"
    }
  }, [_c('Option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("支付宝打款")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("微信退款")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "6"
    }
  }, [_vm._v("支付宝退款")])], 1)], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "cashout-form-item",
    attrs: {
      "label": "状态"
    }
  }, [_c('Select', {
    staticStyle: {
      "width": "120px"
    },
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
  }, [_vm._v("已取消")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("待支付")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": 2
    }
  }, [_vm._v("支付宝未回调")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": 3
    }
  }, [_vm._v("已支付")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": 4
    }
  }, [_vm._v("支付失败")])], 1)], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "cashout-form-item"
  }, [_c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.queryList(1)
      }
    }
  }, [_vm._v("搜索")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('Col', {
    staticStyle: {
      "text-align": "right"
    },
    attrs: {
      "span": 4
    }
  }, [_c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.openModel
    }
  }, [_vm._v("财务审核")])], 1)], 1), _vm._v(" "), _c('Table', {
    attrs: {
      "stripe": "",
      "columns": _vm.columns,
      "data": _vm.preYieldlist
    },
    on: {
      "on-selection-change": _vm.selecteRow
    }
  }), _vm._v(" "), (_vm.preYieldlist.length > 0) ? _c('div', {
    staticClass: "cashout-pagebar"
  }, [_c('Page', {
    staticClass: "cashout-page-components",
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
  })], 1) : _vm._e(), _vm._v(" "), _c('Modal', {
    staticClass: "cashout-model",
    attrs: {
      "title": "提现审核"
    },
    model: {
      value: (_vm.modelStatus),
      callback: function($$v) {
        _vm.modelStatus = $$v
      },
      expression: "modelStatus"
    }
  }, [_c('p', [_c('Icon', {
    staticStyle: {
      "vertical-align": "middle"
    },
    attrs: {
      "type": "information-circled",
      "color": "#ff9900",
      "size": "24"
    }
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("审核提交后不可更改，点击空白处可取消审核")])], 1), _vm._v(" "), _c('div', {
    slot: "footer"
  }, [_c('Button', {
    attrs: {
      "type": "info",
      "size": "large"
    },
    on: {
      "click": _vm.okStatus
    }
  }, [_vm._v("打款")]), _vm._v(" "), _c('Button', {
    attrs: {
      "size": "large"
    },
    on: {
      "click": _vm.cancelStatus
    }
  }, [_vm._v("退款")])], 1)]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (false),
      expression: "false"
    }],
    attrs: {
      "id": "accountCallback"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.accountCallback)
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-107fd4b2", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=14.chunk.js.map