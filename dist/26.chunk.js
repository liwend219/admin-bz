webpackJsonp([26],{

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(505)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(438),
  /* template */
  __webpack_require__(538),
  /* scopeId */
  "data-v-9778f6a2",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/views/products/cashOutNotice.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] cashOutNotice.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9778f6a2", Component.options)
  } else {
    hotAPI.reload("data-v-9778f6a2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_products_cashOutNotice_js__ = __webpack_require__(460);
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
                name: "提现通知",
                dis: "提现成功短信",
                type: "通知",
                oprate: "查看"
            }, {
                name: "提现通知",
                dis: "提现失败短信",
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

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_cashOutNotice_js__["a" /* cashOutNoticeStatus */])().then(function (data) {
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
                _this.$Message.error("无法获取提现通知信息");
                console.log(err);
            });
        },
        updateNoticeCofig: function updateNoticeCofig(status) {
            var _this2 = this;

            this.noticeCofig.status = status;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_cashOutNotice_js__["b" /* saveCashOutNoticeStatus */])(this.noticeCofig).then(function (data) {
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
        doCashOutSuccess();
    } else if (index == 1) {
        doCashOutFail();
    }
};
// 提现成功通知
var doCashOutSuccess = function doCashOutSuccess() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_cashOutNotice_js__["c" /* cashOutSuccess */])().then(function (data) {
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
// 提现失败通知
var doCashOutFail = function doCashOutFail() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_cashOutNotice_js__["d" /* cashOutFail */])().then(function (data) {
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

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cashOutNoticeStatus;
/* harmony export (immutable) */ __webpack_exports__["b"] = saveCashOutNoticeStatus;
/* harmony export (immutable) */ __webpack_exports__["c"] = cashOutSuccess;
/* harmony export (immutable) */ __webpack_exports__["d"] = cashOutFail;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_root__ = __webpack_require__(141);



var javacore = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].javacore;

// 查询提现通知的配置状态
function cashOutNoticeStatus() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/config/query/cashbackNotify",
        data: data
    });
}
// 启用提现通知的配置状态
function saveCashOutNoticeStatus(opt) {
    var data = {
        id: opt.id,
        tid: opt.tid,
        status: opt.status // 1或-1
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/config/saveOrUpd/cashbackNotify",
        data: data
    });
}
// 提现成功通知
function cashOutSuccess() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/notification/template/query/cashbackNotify_success",
        data: data
    });
}
// 提现失败通知
function cashOutFail() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/notification/template/query/cashbackNotify_fail",
        data: data
    });
}

/***/ }),

/***/ 505:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 538:
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
    staticClass: "cashoutnotice-header-inline"
  }, [_c('Button', {
    staticClass: "cashoutnotice-header-btn",
    attrs: {
      "size": "large",
      "type": "ghost"
    },
    on: {
      "click": function($event) {
        _vm.updateNoticeCofig(-1)
      }
    }
  }, [_vm._v("停用")]), _vm._v(" "), _c('h2', [_vm._v("提现通知")])], 1) : _vm._e(), _vm._v(" "), (_vm.noticeCofig.status == 1) ? _c('div', [_c('Table', {
    attrs: {
      "columns": _vm.columns,
      "data": _vm.noticeList
    }
  })], 1) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cashoutnotice-header"
  }, [_c('h2', [_vm._v("提现通知")]), _vm._v(" "), _c('p')])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-9778f6a2", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=26.chunk.js.map