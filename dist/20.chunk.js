webpackJsonp([20],{

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(492)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(449),
  /* template */
  __webpack_require__(525),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/views/products/payConfig.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] payConfig.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f52f134", Component.options)
  } else {
    hotAPI.reload("data-v-2f52f134", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_products_payconfig_js__ = __webpack_require__(472);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            status: false,
            columns: [],
            payMode: {}
        };
    },
    mounted: function mounted() {
        this.getPayConfig();
    },

    methods: {
        getPayConfig: function getPayConfig() {
            var _this = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_payconfig_js__["a" /* payConfigStatus */])().then(function (data) {
                console.log("ok1");
                _this.columns = data.data;
                console.log(_this.columns);
            }).catch(function (err) {
                console.log(err);
            });
        },
        setPayType: function setPayType(val) {
            var _this2 = this;

            var payType = val.slice(0, 1);
            var index = val.slice(2, 3);
            var policyName = val.slice(4);
            console.log(policyName);
            var policyId = this.columns[index].policyId;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_payconfig_js__["b" /* setConfigStatus */])(policyId, payType).then(function (data) {
                _this2.columns[index].payType = payType;
                _this2.$Message.success(policyName + '设置' + (payType == 0 ? "直付" : "代收代付") + '成功');
            }).catch(function (err) {
                _this2.$Message.error("设置支付方式失败");
                console.log(err);
            });
        }
    }
});

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = payConfigStatus;
/* harmony export (immutable) */ __webpack_exports__["b"] = setConfigStatus;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_root__ = __webpack_require__(141);



var javacore = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].javacore;
//获取支付方式
function payConfigStatus() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/scoreRate/querySupportPolicys",
        data: data
    });
}

//修改支付方式
function setConfigStatus(policyId, payType) {
    var data = {
        policyId: policyId,
        payType: payType
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/config/updSupportPolicyPayType",
        data: data
    });
}

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), (_vm.status) ? _c('div', [_vm._m(1)]) : _vm._e(), _vm._v(" "), (!_vm.status) ? _c('div', [_c('ul', {
    staticStyle: {
      "margin-top": "30px"
    }
  }, _vm._l((_vm.columns), function(list, index) {
    return _c('li', {
      key: index,
      staticStyle: {
        "height": "50px"
      }
    }, [_c('div', {
      staticStyle: {
        "display": "inline-block",
        "margin-right": "100px"
      }
    }, [_vm._v("\n                    " + _vm._s(list.policyName) + "\n                ")]), _vm._v(" "), _c('div', {
      staticStyle: {
        "display": "inline-block",
        "margin-right": "100px"
      }
    }, [_c('Radio-group', {
      attrs: {
        "value": list.payType + "-" + index + "-" + list.policyName
      },
      on: {
        "on-change": _vm.setPayType
      }
    }, [_c('Radio', {
      staticStyle: {
        "margin-right": "100px"
      },
      attrs: {
        "label": 0 + '-' + index + '-' + list.policyName
      }
    }, [_vm._v("直付")]), _vm._v(" "), _c('Radio', {
      attrs: {
        "label": 1 + '-' + index + '-' + list.policyName
      }
    }, [_vm._v("代收代付")])], 1)], 1)])
  }))]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "payconfig-header"
  }, [_c('h2', [_vm._v("直付险企/代收代付")]), _vm._v(" "), _c('p', [_vm._v("根据租户需求 配置不同的支付方式")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "payconfig-content"
  }, [_c('p', [_vm._v("请致电联系保挣IT完成代收代付配置")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2f52f134", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=20.chunk.js.map