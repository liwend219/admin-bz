webpackJsonp([11],{

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(491)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(439),
  /* template */
  __webpack_require__(524),
  /* scopeId */
  "data-v-2c6b3971",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/views/products/chashOut.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] chashOut.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c6b3971", Component.options)
  } else {
    hotAPI.reload("data-v-2c6b3971", Component.options)
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

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_filters_js__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_products_chashOut_js__ = __webpack_require__(461);
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
//
//
//




var cashOutAudFormat = function cashOutAudFormat(val) {
    return {
        "0": "处理中",
        "1": "处理完成",
        "-1": "处理失败"
    }[val];
};
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            queryData: {
                applyerAlipayAccount: "",
                applyerName: "",
                serialNo: "",
                userId: "",
                status: "",
                pageNo: 1,
                pageSize: 10,
                sort: "cdt",
                order: ""
            },
            columns: [{
                type: 'selection',
                width: 60,
                align: 'center',
                fixed: "left"
            }, { title: "提现ID", key: "id", align: "center", fixed: "left", width: 120 }, { title: "用户ID", key: "uid", align: "center", width: 120 }, { title: "流水号", key: "serialNo", align: "center", width: 120 }, {
                title: "提现金额",
                key: "actualAmount",
                align: "center",
                width: 100,
                render: function render(h, params) {
                    return h('span', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_filters_js__["a" /* moneyFormat */])(params.row.actualAmount));
                }
            }, {
                title: "返现金额",
                key: "amount",
                align: "center",
                width: 100,
                render: function render(h, params) {
                    return h('span', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_filters_js__["a" /* moneyFormat */])(params.row.amount));
                }
            }, {
                title: "钱包余额",
                key: "purseLeft",
                align: "center",
                width: 100,
                render: function render(h, params) {
                    return h('span', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_filters_js__["a" /* moneyFormat */])(params.row.purseLeft));
                }
            }, {
                title: "申请人",
                key: "applyerName",
                align: "center",
                width: 120
            }, {
                title: "申请人身份证",
                key: "applyerIdNo",
                align: "center",
                width: 180
            }, {
                title: "申请人支付宝",
                key: "applyerAlipayAccount",
                align: "center",
                width: 120
            }, {
                title: "状态",
                key: "status",
                align: "center",
                width: 100,
                render: function render(h, params) {
                    return h('span', cashOutAudFormat(params.row.status));
                }
            }, {
                title: "更新时间",
                key: "upd",
                align: "center",
                width: 120,
                render: function render(h, params) {
                    return h('span', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_filters_js__["b" /* dateFormat */])(params.row.upd));
                }
            }],
            cashOutList: [],
            totalCount: "",
            cashOutSelected: {
                purseDetailIds: [],
                status: ""
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
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_products_chashOut_js__["a" /* cashOutAuditList */])(this.queryData).then(function (data) {
                if (data.errCode === 10000) {
                    data.data.pageRows.map(function (data) {
                        data._disabled = data.status == 0 ? false : true;
                    });
                    _this.totalCount = data.data.total;
                    _this.cashOutList = data.data.pageRows;
                } else {
                    _this.$Message.error(data.data);
                }
            }).catch(function (err) {
                _this.$Message.error("提现申请列表获取失败");
                console.log(err);
            });
        },
        changePage: function changePage(page) {
            this.queryData.pageNo = page;
            this.queryList();
        },
        selecteRow: function selecteRow(arr) {
            var _this2 = this;

            this.cashOutSelected.purseDetailIds = [];
            arr.map(function (data) {
                _this2.cashOutSelected.purseDetailIds.push(data.id);
            });
        },
        openModel: function openModel() {
            if (this.cashOutSelected.purseDetailIds.length == 0) {
                this.$Message.warning("至少要选择一条要审核的项目");
                return;
            }
            this.modelStatus = true;
        },
        okStatus: function okStatus() {
            this.cashOutSelected.status = "1";
            this.commitStatus();
        },
        cancelStatus: function cancelStatus() {
            this.cashOutSelected.status = "-1";
            this.commitStatus();
        },
        commitStatus: function commitStatus() {
            var _this3 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_products_chashOut_js__["b" /* cashOutAuditDeal */])(this.cashOutSelected).then(function (data) {
                if (data.errCode === 10000) {
                    _this3.$Message.success("审核成功");
                    _this3.modelStatus = false;
                    _this3.queryList();
                } else {
                    _this3.$Message.error(data.data);
                }
            }).catch(function (err) {
                _this3.$Message.error("审核失败");
                console.log(err);
            });
        }
    }
});

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cashOutAuditList;
/* harmony export (immutable) */ __webpack_exports__["b"] = cashOutAuditDeal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_root__ = __webpack_require__(141);



var javacore = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].javacore;

// 请求提现审核列表
function cashOutAuditList(opt) {
    var data = {
        applyerAlipayAccount: opt.applyerAlipayAccount,
        applyerName: opt.applyerName,
        order: opt.order,
        pageNo: opt.pageNo,
        pageSize: opt.pageSize,
        serialNo: opt.serialNo,
        userId: opt.userId,
        sort: "cdt",
        status: opt.status
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/accounting/purse/cashback",
        data: data
    });
}

// 提交提现审核
function cashOutAuditDeal(opt) {
    var data = {
        purseDetailIds: opt.purseDetailIds,
        status: opt.status
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/accounting/purse/dealCashback",
        data: data
    });
}

/***/ }),

/***/ 491:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 524:
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
      "label": "用户ID"
    }
  }, [_c('Input', {
    staticClass: "cashout-form-input",
    attrs: {
      "type": "text",
      "placeholder": "用户ID"
    },
    model: {
      value: (_vm.queryData.userId),
      callback: function($$v) {
        _vm.queryData.userId = $$v
      },
      expression: "queryData.userId"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "cashout-form-item",
    attrs: {
      "label": "流水号"
    }
  }, [_c('Input', {
    staticClass: "cashout-form-input",
    attrs: {
      "type": "text",
      "placeholder": "流水号"
    },
    model: {
      value: (_vm.queryData.serialNo),
      callback: function($$v) {
        _vm.queryData.serialNo = $$v
      },
      expression: "queryData.serialNo"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "cashout-form-item",
    attrs: {
      "label": "申请人"
    }
  }, [_c('Input', {
    staticClass: "cashout-form-input",
    attrs: {
      "type": "text",
      "placeholder": "申请人"
    },
    model: {
      value: (_vm.queryData.applyerName),
      callback: function($$v) {
        _vm.queryData.applyerName = $$v
      },
      expression: "queryData.applyerName"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "cashout-form-item",
    attrs: {
      "label": "支付宝"
    }
  }, [_c('Input', {
    staticClass: "cashout-form-input",
    attrs: {
      "type": "text",
      "placeholder": "支付宝"
    },
    model: {
      value: (_vm.queryData.applyerAlipayAccount),
      callback: function($$v) {
        _vm.queryData.applyerAlipayAccount = $$v
      },
      expression: "queryData.applyerAlipayAccount"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
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
      "value": "0"
    }
  }, [_vm._v("处理中")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("处理完成")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "-1"
    }
  }, [_vm._v("处理失败")])], 1)], 1), _vm._v(" "), _c('Form-item', {
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
  }, [_vm._v("提现审核")])], 1)], 1), _vm._v(" "), _c('Table', {
    attrs: {
      "stripe": "",
      "columns": _vm.columns,
      "data": _vm.cashOutList
    },
    on: {
      "on-selection-change": _vm.selecteRow
    }
  }), _vm._v(" "), (_vm.cashOutList.length > 0) ? _c('div', {
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
  }, [_vm._v("审核通过")]), _vm._v(" "), _c('Button', {
    attrs: {
      "size": "large"
    },
    on: {
      "click": _vm.cancelStatus
    }
  }, [_vm._v("审核不通过")])], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2c6b3971", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=11.chunk.js.map