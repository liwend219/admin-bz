webpackJsonp([9],{

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(507)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(446),
  /* template */
  __webpack_require__(540),
  /* scopeId */
  "data-v-c0fe9662",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/views/products/listAllocate.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] listAllocate.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c0fe9662", Component.options)
  } else {
    hotAPI.reload("data-v-c0fe9662", Component.options)
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

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_filters_js__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_products_listAllocate_js__ = __webpack_require__(468);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            queryData: {
                orderCode: "",
                carNo: "",
                mobile: "",
                pageNo: 1,
                pageSize: 20,
                startDate: "",
                endDate: "",
                orderType: "asc"

            },
            columns1: [{
                title: '订单号',
                align: "center",
                key: 'orderCode'
            }, {
                title: '车牌号',
                align: "center",
                key: 'carNo'
            }, {
                title: '负责人',
                align: "center",
                key: 'name',
                render: function render(h, p) {
                    var name = p.row.name;
                    var mobile = p.row.mobile;
                    return h('span', name ? mobile + '\n（' + name + '）' : mobile);
                }
            }, {
                title: '分配时间',
                align: "center",
                key: 'fromCdt'
            }, {
                title: '支付状态',
                align: "center",
                key: 'paystatus',
                render: function render(h, p) {
                    var paystatus = p.row.paystatus;
                    if (paystatus == 0) {
                        return h('span', '未支付');
                    } else if (paystatus == 1) {
                        return h('span', '已支付');
                    }
                }
            }],
            historyData: [],
            columns: [],
            userList: [],
            applyUserList: [],
            totalCount: "",
            allocateConfig: {
                orderCodes: [],
                applyUid: ""
            },
            modelStatus: false,
            modelStatus2: false

        };
    },
    mounted: function mounted() {
        this.getColumns();
        this.queryList();
        this.getApplyUserList();
    },

    methods: {
        sortable: function sortable(data) {
            if (data.key == 'forceValidDate') {
                this.queryData.orderType = data.order;
                this.queryList(1);
            }
        },
        insurDatePick: function insurDatePick(date) {
            if (date[0] && date[1]) {
                this.queryData.startDate = date[0];
                this.queryData.endDate = date[1];
            } else {
                this.queryData.startDate = "";
                this.queryData.endDate = "";
            }
        },
        getColumns: function getColumns() {
            var _this = this;
            var list = [{
                type: 'selection',
                width: 60,
                align: 'center'
            }, { title: "订单号", key: "orderCode", align: "center" }, { title: "车牌号", key: "carNo", align: "center" }, {
                title: "最近保险起保日",
                key: "forceValidDate",
                align: "center",
                "sortable": 'custom',
                render: function render(h, params) {
                    return h('span', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_filters_js__["b" /* dateFormat */])(params.row.forceValidDate));
                }
            }, {
                title: "上次负责人",
                align: "center",
                render: function render(h, p) {
                    var disName = p.row.disName;
                    var disMobile = p.row.disMobile;
                    return h('span', disName ? disMobile + '\n（' + disName + '）' : disMobile);
                }
            }, {
                title: "上次支付状态",
                align: "center",
                render: function render(h, p) {
                    var paystatus = p.row.paystatus;
                    return h('span', paystatus == 0 ? '未支付' : '已支付');
                }
            }, {
                title: "负责人",
                align: "center",
                render: function render(h, p) {
                    var name = p.row.name;
                    var mobile = p.row.mobile;
                    return h('span', name ? mobile + '\n（' + name + '）' : mobile);
                }
            }, {
                title: "分配时间",
                align: "center",
                render: function render(h, p) {
                    return h('span', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_filters_js__["b" /* dateFormat */])(p.row.disTime));
                }
            }, {
                title: "操作",
                align: "center",
                render: function render(h, p) {
                    var carNo = p.row.carNo;
                    return h('a', {
                        on: {
                            'click': function click() {
                                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_products_listAllocate_js__["a" /* historyAllocate */])(carNo).then(function (data) {
                                    if (data.errCode === 10000) {
                                        _this.historyData = data.data;
                                        _this.openModel2();
                                    } else {
                                        _this.$Message.error(data.data);
                                    }
                                }).catch(function (err) {
                                    _this.$Message.error("获取分配历史列表失败");
                                    console.log(err);
                                });
                            }
                        }
                    }, '分配历史');
                }
            }];
            this.columns = list;
        },
        queryList: function queryList(page) {
            var _this2 = this;

            if (page) {
                this.queryData.pageNo = 1;
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_products_listAllocate_js__["b" /* getAllocateList */])(this.queryData).then(function (data) {
                if (data.errCode === 10000) {
                    _this2.totalCount = data.data.totalCount;
                    // this.queryData.pageNo
                    _this2.userList = data.data.results;
                } else {
                    _this2.$Message.error(data.data);
                }
            }).catch(function (err) {
                _this2.$Message.error("待分配订单列表获取失败");
                console.log(err);
            });
        },
        getApplyUserList: function getApplyUserList() {
            var _this3 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_products_listAllocate_js__["c" /* getUserList */])(this.queryData).then(function (data) {
                if (data.errCode === 10000) {
                    _this3.applyUserList = data.data;
                } else {
                    _this3.$Message.error(data.data);
                }
            }).catch(function (err) {
                _this3.$Message.error("电销员列表获取失败");
                console.log(err);
            });
        },
        openModel: function openModel() {
            this.modelStatus = true;
        },
        openModel2: function openModel2() {
            this.modelStatus2 = true;
        },
        selecteRow: function selecteRow(data) {
            var _this4 = this;

            this.allocateConfig.orderCodes = [];
            data.map(function (item) {
                _this4.allocateConfig.orderCodes.push(item.orderCode);
            });
        },
        okStatus: function okStatus() {
            var _this5 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_products_listAllocate_js__["d" /* saveAllocate */])(this.allocateConfig).then(function (data) {
                if (data.errCode === 10000) {
                    _this5.$Message.success("分配成功");
                    _this5.modelStatus = false;
                    _this5.queryList();
                } else {
                    _this5.$Message.error(data.data);
                }
            }).catch(function (err) {
                _this5.$Message.error("分配失败");
                console.log(err);
            });
        },
        changePage: function changePage(page) {
            this.queryData.pageNo = page;
            this.queryList();
        }
    }
});

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getAllocateList;
/* harmony export (immutable) */ __webpack_exports__["c"] = getUserList;
/* harmony export (immutable) */ __webpack_exports__["d"] = saveAllocate;
/* harmony export (immutable) */ __webpack_exports__["a"] = historyAllocate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_root__ = __webpack_require__(141);



var javacore = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].javacore;

// 请求名单分配列表
function getAllocateList(opt) {
    var data = {
        orderCode: opt.orderCode,
        carNo: opt.carNo,
        mobile: opt.mobile,
        pageNo: opt.pageNo,
        pageSize: opt.pageSize,
        startDate: opt.startDate,
        endDate: opt.endDate,
        orderType: opt.orderType
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/esale/queryOrderDistribute",
        data: data
    });
}
// 待分配用户列表
function getUserList() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/esale/userList",
        data: data
    });
}
// 名单分配
function saveAllocate(opt) {
    var data = {
        orderCodes: opt.orderCodes,
        applyUid: opt.applyUid
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/esale/distribute",
        data: data
    });
}
// 分配历史
function historyAllocate(carNo) {
    var data = {
        carNo: carNo
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/esale/disLog",
        data: data
    });
}

/***/ }),

/***/ 507:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "identiyaudit-page"
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
    staticClass: "identiyaudit-form",
    attrs: {
      "inline": "",
      "label-width": 70
    }
  }, [_c('Form-item', {
    staticClass: "identiyaudit-form-item",
    attrs: {
      "label": "订单号"
    }
  }, [_c('Input', {
    staticClass: "identiyaudit-form-input",
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
    staticClass: "identiyaudit-form-item",
    attrs: {
      "label": "车牌号"
    }
  }, [_c('Input', {
    staticClass: "identiyaudit-form-input",
    attrs: {
      "type": "text",
      "placeholder": "车牌号"
    },
    model: {
      value: (_vm.queryData.carNo),
      callback: function($$v) {
        _vm.queryData.carNo = $$v
      },
      expression: "queryData.carNo"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "identiyaudit-form-item",
    attrs: {
      "label": "负责人"
    }
  }, [_c('Input', {
    staticClass: "identiyaudit-form-input",
    attrs: {
      "type": "text",
      "placeholder": "负责人"
    },
    model: {
      value: (_vm.queryData.mobile),
      callback: function($$v) {
        _vm.queryData.mobile = $$v
      },
      expression: "queryData.mobile"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "identiyaudit-form-item",
    attrs: {
      "label": "商业险起保日",
      "label-width": 90
    }
  }, [_c('Date-picker', {
    attrs: {
      "type": "daterange",
      "placement": "bottom",
      "placeholder": "选择日期"
    },
    on: {
      "on-change": _vm.insurDatePick
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "identiyaudit-form-item"
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
  }, [_vm._v("分配任务")])], 1)], 1), _vm._v(" "), _c('Table', {
    attrs: {
      "stripe": "",
      "columns": _vm.columns,
      "data": _vm.userList
    },
    on: {
      "on-sort-change": _vm.sortable,
      "on-selection-change": _vm.selecteRow
    }
  }), _vm._v(" "), (_vm.userList.length > 0) ? _c('div', {
    staticClass: "identiyaudit-pagebar"
  }, [_c('Page', {
    staticClass: "identiyaudit-page-components",
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
    staticClass: "identiyaudit-model",
    attrs: {
      "title": "名单分配"
    },
    model: {
      value: (_vm.modelStatus),
      callback: function($$v) {
        _vm.modelStatus = $$v
      },
      expression: "modelStatus"
    }
  }, [_c('Form', {
    ref: "formInline",
    attrs: {
      "inline": "",
      "label-width": 120
    }
  }, [_c('Form-item', {
    staticClass: "commissionconfig-form-item",
    attrs: {
      "label": "任务分配给"
    }
  }, [_c('Select', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "clearable": ""
    },
    model: {
      value: (_vm.allocateConfig.applyUid),
      callback: function($$v) {
        _vm.allocateConfig.applyUid = $$v
      },
      expression: "allocateConfig.applyUid"
    }
  }, _vm._l((_vm.applyUserList), function(item, index) {
    return _c('Option', {
      key: index,
      attrs: {
        "value": item.id,
        "label": item.mobile
      }
    }, [_c('span', {
      domProps: {
        "textContent": _vm._s(item.mobile)
      }
    }), _vm._v(" "), _c('span', {
      staticStyle: {
        "float": "right",
        "color": "#ccc"
      },
      domProps: {
        "textContent": _vm._s(item.name)
      }
    })])
  }))], 1)], 1), _vm._v(" "), _c('div', {
    slot: "footer"
  }, [_c('Button', {
    attrs: {
      "type": "info",
      "size": "large"
    },
    on: {
      "click": _vm.okStatus
    }
  }, [_vm._v("保存")]), _vm._v(" "), _c('Button', {
    attrs: {
      "size": "large"
    },
    on: {
      "click": function($event) {
        _vm.modelStatus = false
      }
    }
  }, [_vm._v("取消")])], 1)], 1), _vm._v(" "), _c('Modal', {
    staticClass: "identiyaudit-model",
    attrs: {
      "title": "分配历史",
      "width": "800"
    },
    model: {
      value: (_vm.modelStatus2),
      callback: function($$v) {
        _vm.modelStatus2 = $$v
      },
      expression: "modelStatus2"
    }
  }, [_c('Form', {
    ref: "formInline",
    attrs: {
      "inline": "",
      "label-width": 120
    }
  }, [_c('Table', {
    attrs: {
      "stripe": "",
      "columns": _vm.columns1,
      "data": _vm.historyData
    }
  })], 1), _vm._v(" "), _c('div', {
    slot: "footer"
  }, [_c('Button', {
    attrs: {
      "type": "info",
      "size": "large"
    },
    on: {
      "click": function($event) {
        _vm.modelStatus2 = false
      }
    }
  }, [_vm._v("确定")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c0fe9662", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=9.chunk.js.map