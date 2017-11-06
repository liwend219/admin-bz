webpackJsonp([24],{

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(502)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(443),
  /* template */
  __webpack_require__(535),
  /* scopeId */
  "data-v-810f5cc2",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/views/products/insurNotice.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] insurNotice.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-810f5cc2", Component.options)
  } else {
    hotAPI.reload("data-v-810f5cc2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_products_insurNotice_js__ = __webpack_require__(465);
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
                name: "投保通知",
                dis: "投保成功短信",
                type: "通知",
                oprate: "查看"
            }, {
                name: "投保通知",
                dis: "投保失败短信",
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

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_insurNotice_js__["a" /* insurNoticeStatus */])().then(function (data) {
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
                _this.$Message.error("无法获取投保通知信息");
                console.log(err);
            });
        },
        updateNoticeCofig: function updateNoticeCofig(status) {
            var _this2 = this;

            this.noticeCofig.status = status;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_insurNotice_js__["b" /* saveInsurNoticeStatus */])(this.noticeCofig).then(function (data) {
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
        doInsurSuccess();
    } else if (index == 1) {
        doInsurFail();
    }
};
// 投保成功通知
var doInsurSuccess = function doInsurSuccess() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_insurNotice_js__["c" /* insurSuccess */])().then(function (data) {
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
// 投保失败通知
var doInsurFail = function doInsurFail() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_insurNotice_js__["d" /* insurFail */])().then(function (data) {
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

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = insurNoticeStatus;
/* harmony export (immutable) */ __webpack_exports__["b"] = saveInsurNoticeStatus;
/* harmony export (immutable) */ __webpack_exports__["c"] = insurSuccess;
/* harmony export (immutable) */ __webpack_exports__["d"] = insurFail;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_root__ = __webpack_require__(141);



var javacore = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].javacore;

// 查询投保通知的配置状态
function insurNoticeStatus() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/config/query/insureNotify",
        data: data
    });
}
// 启用投保通知的配置状态
function saveInsurNoticeStatus(opt) {
    var data = {
        id: opt.id,
        tid: opt.tid,
        status: opt.status // 1或-1
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/config/saveOrUpd/insureNotify",
        data: data
    });
}
// 投保成功通知
function insurSuccess() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/notification/template/query/insureNotify_success",
        data: data
    });
}
// 投保失败通知
function insurFail() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/notification/template/query/insureNotify_fail",
        data: data
    });
}

/***/ }),

/***/ 502:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 535:
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
    staticClass: "insurnotice-header-inline"
  }, [_c('Button', {
    staticClass: "insurnotice-header-btn",
    attrs: {
      "size": "large",
      "type": "ghost"
    },
    on: {
      "click": function($event) {
        _vm.updateNoticeCofig(-1)
      }
    }
  }, [_vm._v("停用")]), _vm._v(" "), _c('h2', [_vm._v("投保通知")])], 1) : _vm._e(), _vm._v(" "), (_vm.noticeCofig.status == 1) ? _c('div', [_c('Table', {
    attrs: {
      "columns": _vm.columns,
      "data": _vm.noticeList
    }
  })], 1) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "insurnotice-header"
  }, [_c('h2', [_vm._v("投保通知")]), _vm._v(" "), _c('p')])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-810f5cc2", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=24.chunk.js.map