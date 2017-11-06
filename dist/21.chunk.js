webpackJsonp([21],{

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(501)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(448),
  /* template */
  __webpack_require__(534),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/views/products/overallconfig.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] overallconfig.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75d9eaaa", Component.options)
  } else {
    hotAPI.reload("data-v-75d9eaaa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_products_overallconfig_js__ = __webpack_require__(470);
//
//
//
//
//
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
            animal: '',
            tid: this.$store.getters.tid,
            id: ""
        };
    },

    methods: {
        refundMode: function refundMode() {
            var _this = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_overallconfig_js__["a" /* refundMode */])().then(function (data) {
                console.log(data);
                if (data.errCode == 10000) {
                    if (data.data == null) {
                        _this.animal = -1;
                        return;
                    }
                    _this.id = data.data.id;
                    _this.animal = data.data.status;
                }
            }).catch(function (err) {
                console.log(err);
            });
        },
        change: function change(val) {
            var _this2 = this;

            var id = this.id;
            var tid = this.tid;
            var status = val;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_overallconfig_js__["b" /* saverefundModeStatus */])(id, tid, status).then(function (data) {
                console.log(data);
                if (data.errCode == 10000) {
                    if (data.data == null) {
                        _this2.animal = val;
                        _this2.$Message.success("已设置" + (status == -1 ? "不支持" : "支持") + "支付宝原路退款");
                        return;
                    }
                }
            }).catch(function (err) {
                _this2.$Message.error("设置退款方式失败");
                console.log(err);
            });
        }
    },
    mounted: function mounted() {
        this.refundMode();
    }
});

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = refundMode;
/* harmony export (immutable) */ __webpack_exports__["b"] = saverefundModeStatus;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_root__ = __webpack_require__(141);



var javacore = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].javacore;

// 查询退款方式配置状态
function refundMode() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/config/query/directRefund",
        data: data
    });
}

// 启用退款方式的配置状态
function saverefundModeStatus(id, tid, status) {
    var data = {
        id: id,
        tid: tid,
        status: status // 1或-1
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/config/saveOrUpd/directRefund",
        data: data
    });
}

/***/ }),

/***/ 501:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "inline-block",
      "margin-left": "50px"
    }
  }, [_c('Radio-group', {
    attrs: {
      "value": _vm.animal
    },
    on: {
      "on-change": _vm.change
    }
  }, [_c('Radio', {
    attrs: {
      "label": "-1"
    }
  }, [_vm._v("不支持")]), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": "1"
    }
  }, [_vm._v("支持")])], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "display": "inline-block",
      "margin-top": "50px"
    }
  }, [_c('span', [_vm._v("支付宝原路退款")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-75d9eaaa", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=21.chunk.js.map