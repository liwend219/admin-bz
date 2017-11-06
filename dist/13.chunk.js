webpackJsonp([13],{

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(508)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(434),
  /* template */
  __webpack_require__(542),
  /* scopeId */
  "data-v-db6325c0",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/views/balance/moneyPreYield.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] moneyPreYield.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-db6325c0", Component.options)
  } else {
    hotAPI.reload("data-v-db6325c0", Component.options)
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

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_filters_js__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_balance_moneyPreYield_js__ = __webpack_require__(459);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
        "1": "待审核",
        "0": "已生成",
        "2": "审核通过",
        "3": "已领取",
        // "-1": "已出险",
        "-2": "审核不通过"
    }[status];
};
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            queryData: _defineProperty({
                availableDate: "",
                availableEndDate: "",
                orderNo: "",
                status: "",
                pageNo: 1,
                pageSize: 20,
                userId: ""
            }, "orderNo", ""),
            columns: [{
                type: 'selection',
                width: 60,
                align: 'center',
                fixed: "left"
            }, { title: "用户ID", key: "userId", align: "center", width: 80, fixed: "left" }, { title: "订单号", key: "orderNo", align: "center", width: 220 }, {
                title: "产品名称",
                key: "productName",
                align: "center",
                width: 100
            }, {
                title: "预计领取时间",
                key: "availableDate",
                align: "center",
                width: 140
            }, {
                title: "领取时间",
                key: "obtainDate",
                align: "center",
                width: 140,
                render: function render(h, p) {
                    return h("span", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_filters_js__["b" /* dateFormat */])(p.row.obtainDate));
                }
            }, {
                title: "奖励金额",
                key: "cbAmount",
                align: "center",
                width: 100
            }, {
                title: "商业险金额",
                key: "tbAmount",
                align: "center",
                width: 100
            }, {
                title: "交强险金额",
                key: "jqAmount",
                align: "center",
                width: 100
            }, {
                title: "奖励类型",
                key: "type",
                align: "center",
                width: 120,
                render: function render(h, p) {
                    var type = void 0;
                    if (p.row.type == 5) {
                        type = "电销客户收益";
                    } else if (p.row.type == 6) {
                        type = "电销自提";
                    }
                    return h("span", type);
                }
            }, {
                title: "参考金额",
                key: "rate",
                align: "center",
                width: 100
            }, {
                title: "状态",
                key: "status",
                align: "center",
                width: 120,
                render: function render(h, params) {
                    return h('span', statusFormat(params.row.status));
                }
            }, {
                title: "操作人",
                key: "operator",
                align: "center",
                width: 140
            }],
            preYieldlist: [],
            totalCount: "",
            preYieldSelected: {
                detailIds: [],
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
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_balance_moneyPreYield_js__["a" /* queryPreYieldlist */])(this.queryData).then(function (data) {
                if (data.errCode === 10000) {
                    data.data.pageRows.map(function (data) {
                        data._disabled = data.status == 1 ? false : true;
                    });
                    _this.totalCount = data.data.total;
                    _this.preYieldlist = data.data.pageRows;
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

            this.preYieldSelected.detailIds = [];
            arr.map(function (data) {
                _this2.preYieldSelected.detailIds.push(data.id);
            });
        },
        openModel: function openModel() {
            if (this.preYieldSelected.detailIds.length == 0) {
                this.$Message.warning("至少要选择一条要审核的项目");
                return;
            }
            this.modelStatus = true;
        },
        okStatus: function okStatus() {
            this.preYieldSelected.status = "2";
            this.commitStatus();
            this.modelStatus = false;
        },
        cancelStatus: function cancelStatus() {
            this.preYieldSelected.status = "-2";
            this.commitStatus();
            this.modelStatus = false;
        },
        commitStatus: function commitStatus() {
            var _this3 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_balance_moneyPreYield_js__["b" /* updatePreYield */])(this.preYieldSelected).then(function (data) {
                if (data.errCode === 10000) {
                    _this3.$Message.success("审核成功");
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

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = queryPreYieldlist;
/* harmony export (immutable) */ __webpack_exports__["b"] = updatePreYield;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_root__ = __webpack_require__(141);



var javacore = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].javacore;

// 查询预收益列表
function queryPreYieldlist(opt) {
    var data = {
        availableDate: opt.availableDate,
        availableEndDate: opt.availableEndDate,
        orderNo: opt.orderNo,
        pageNo: opt.pageNo,
        status: opt.status,
        pageSize: opt.pageSize,
        userId: opt.userId
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/accounting/preYield",
        data: data
    });
}
// 预收益审核
function updatePreYield(opt) {
    var data = {
        detailIds: opt.detailIds,
        status: opt.status
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/accounting/dealPreYield",
        data: data
    });
}

/***/ }),

/***/ 508:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 542:
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
      "label": "订单号"
    }
  }, [_c('Input', {
    staticClass: "cashout-form-input",
    attrs: {
      "type": "text",
      "placeholder": "订单号"
    },
    model: {
      value: (_vm.queryData.orderNo),
      callback: function($$v) {
        _vm.queryData.orderNo = $$v
      },
      expression: "queryData.orderNo"
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
      "value": "1"
    }
  }, [_vm._v("待审核")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("已生成")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("审核通过")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("已领取")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "-2"
    }
  }, [_vm._v("审核不通过")])], 1)], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "cashout-form-item",
    attrs: {
      "label": "预计领取时间",
      "label-width": 90
    }
  }, [_c('Date-picker', {
    attrs: {
      "type": "daterange",
      "placement": "bottom",
      "placeholder": "选择日期"
    },
    on: {
      "on-change": _vm.datePick
    }
  })], 1), _vm._v(" "), _c('Form-item', {
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
      "title": "预收益审核审核"
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-db6325c0", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=13.chunk.js.map