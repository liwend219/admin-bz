webpackJsonp([18],{

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(489)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(451),
  /* template */
  __webpack_require__(522),
  /* scopeId */
  "data-v-28c3445a",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/views/products/saleNotice.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] saleNotice.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28c3445a", Component.options)
  } else {
    hotAPI.reload("data-v-28c3445a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_products_saleNotice_js__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iview__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_iview__);
var _this3 = this;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            noticeCofig: {
                id: "",
                tid: this.$store.getters.tid,
                status: ""
            },
            columns: [{ title: "名称", key: "name", align: "center" }, { title: "描述", key: "dis", align: "center" }, { title: "类型", key: "type", align: "center" }, {
                title: "操作",
                key: "oprate",
                align: "center",
                render: function render(h, params) {
                    return h('a', {
                        on: {
                            click: function click() {
                                showTemplate(params.index);
                            }
                        }
                    }, "查看");
                },
                show: function show() {
                    console.log("dd");
                }
            }],
            noticeList: [{
                name: "电销通知",
                dis: "报价成功短信",
                type: "通知",
                oprate: "查看"
            }, {
                name: "电销通知",
                dis: "报价失败短信",
                type: "通知",
                oprate: "查看"
            }, {
                name: "电销通知",
                dis: "支付短信",
                type: "通知",
                oprate: "查看"
            }, {
                name: "电销通知",
                dis: "支付失败短信",
                type: "通知",
                oprate: "查看"
            }]
        };
    },
    mounted: function mounted() {
        this.getNoticeCofig();
    },

    methods: {
        getNoticeCofig: function getNoticeCofig() {
            var _this = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_saleNotice_js__["a" /* saleNoticeStatus */])().then(function (data) {
                if (!data.data) {
                    _this.noticeCofig.status = -1;
                    return;
                }
                if (data.errCode == 10000) {
                    _this.noticeCofig.id = data.data.id;
                    _this.noticeCofig.tid = data.data.tid;
                    _this.noticeCofig.status = data.data.status;
                } else {
                    _this.$Message.error(data.data);
                }
            }).catch(function (err) {
                _this.$Message.error("无法获取电销通知信息");
                console.log(err);
            });
        },
        updateNoticeCofig: function updateNoticeCofig(status) {
            var _this2 = this;

            this.noticeCofig.status = status;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_saleNotice_js__["b" /* saveSaleNoticeStatus */])(this.noticeCofig).then(function (data) {
                if (data.errCode == 10000) {
                    _this2.$Message.success("通知配置保存成功");
                    _this2.getNoticeCofig();
                } else {
                    _this2.$Message.error(data.data);
                }
            }).catch(function (err) {
                _this2.$Message.error("通知配置保存失败");
                console.log(err);
            });
        }
    }
});

var showTemplate = function showTemplate(index) {
    if (index == 0) {
        doQuoteSuccess();
    } else if (index == 1) {
        doQuoteFail();
    } else if (index == 2) {
        doPayment();
    } else if (index == 3) {
        dopayfail();
    }
};
// 报价成功通知
var doQuoteSuccess = function doQuoteSuccess() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_saleNotice_js__["c" /* quoteSuccess */])().then(function (data) {
        if (data.errCode == 10000) {
            __WEBPACK_IMPORTED_MODULE_1_iview__["Modal"].info({
                title: "通知模板",
                content: data.data.template
            });
        } else {
            _this3.$Message.error(data.data);
        }
    }).catch(function (err) {
        _this3.$Message.error("通知模板获取失败");
        console.log(err);
    });
};
// 报价失败通知
var doQuoteFail = function doQuoteFail() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_saleNotice_js__["d" /* quoteFail */])().then(function (data) {
        if (data.errCode == 10000) {
            __WEBPACK_IMPORTED_MODULE_1_iview__["Modal"].info({
                title: "通知模板",
                content: data.data.template
            });
        } else {
            _this3.$Message.error(data.data);
        }
    }).catch(function (err) {
        _this3.$Message.error("通知模板获取失败");
        console.log(err);
    });
};
// 支付链接通知
var doPayment = function doPayment() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_saleNotice_js__["e" /* payment */])().then(function (data) {
        if (data.errCode == 10000) {
            __WEBPACK_IMPORTED_MODULE_1_iview__["Modal"].info({
                title: "通知模板",
                content: data.data.template
            });
        } else {
            _this3.$Message.error(data.data);
        }
    }).catch(function (err) {
        _this3.$Message.error("通知模板获取失败");
        console.log(err);
    });
};
//支付失败通知
var dopayfail = function dopayfail() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_saleNotice_js__["f" /* payfail */])().then(function (data) {
        if (data.errCode == 10000) {
            __WEBPACK_IMPORTED_MODULE_1_iview__["Modal"].info({
                title: "通知模板",
                content: data.data.template
            });
        } else {
            _this3.$Message.error(data.data);
        }
    }).catch(function (err) {
        _this3.$Message.error("通知模板获取失败");
        console.log(err);
    });
};

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = saleNoticeStatus;
/* harmony export (immutable) */ __webpack_exports__["b"] = saveSaleNoticeStatus;
/* harmony export (immutable) */ __webpack_exports__["c"] = quoteSuccess;
/* harmony export (immutable) */ __webpack_exports__["d"] = quoteFail;
/* harmony export (immutable) */ __webpack_exports__["e"] = payment;
/* harmony export (immutable) */ __webpack_exports__["f"] = payfail;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_root__ = __webpack_require__(141);



var javacore = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].javacore;

// 查询电销通知的配置状态
function saleNoticeStatus() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/config/query/esaleNotify",
        data: data
    });
}
// 启用电销通知的配置状态
function saveSaleNoticeStatus(opt) {
    var data = {
        id: opt.id,
        tid: opt.tid,
        status: opt.status // 1或-1
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/config/saveOrUpd/esaleNotify",
        data: data
    });
}
// 报价成功通知
function quoteSuccess() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/notification/template/query/esaleNotify_quote_success",
        data: data
    });
}
// 保价失败通知
function quoteFail() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/notification/template/query/esaleNotify_quote_fail",
        data: data
    });
}
// 支付链接通知
function payment() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/notification/template/query/esaleNotify_payment",
        data: data
    });
}
//支付失败通知
function payfail() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/notification/template/query/esaleNotify_payfail",
        data: data
    });
}

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.noticeCofig.status != 1) ? _c('div', [_vm._m(0), _vm._v(" "), _c('div', [_c('Button', {
    attrs: {
      "size": "large",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.updateNoticeCofig(1)
      }
    }
  }, [_vm._v("立即启用")])], 1)]) : _vm._e(), _vm._v(" "), (_vm.noticeCofig.status == 1) ? _c('div', {
    staticClass: "salenotice-header-inline"
  }, [_c('Button', {
    staticClass: "salenotice-header-btn",
    attrs: {
      "size": "large",
      "type": "ghost"
    },
    on: {
      "click": function($event) {
        _vm.updateNoticeCofig(-1)
      }
    }
  }, [_vm._v("停用")]), _vm._v(" "), _c('h2', [_vm._v("电销通知")])], 1) : _vm._e(), _vm._v(" "), (_vm.noticeCofig.status == 1) ? _c('div', [_c('Table', {
    attrs: {
      "columns": _vm.columns,
      "data": _vm.noticeList
    }
  })], 1) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "salenotice-header"
  }, [_c('h2', [_vm._v("电销通知")]), _vm._v(" "), _c('p', [_vm._v("辅助电销人员进行短信报价")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-28c3445a", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=18.chunk.js.map