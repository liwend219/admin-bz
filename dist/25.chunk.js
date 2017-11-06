webpackJsonp([25],{

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(503)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(441),
  /* template */
  __webpack_require__(536),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/views/products/commissionReward.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] commissionReward.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-90425564", Component.options)
  } else {
    hotAPI.reload("data-v-90425564", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_products_commissionReward_js__ = __webpack_require__(463);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            rewardCofig: {
                id: "",
                tid: this.$store.getters.tid,
                status: ""
            }
        };
    },
    mounted: function mounted() {
        this.getRewardCofig();
    },

    methods: {
        getRewardCofig: function getRewardCofig() {
            var _this = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_commissionReward_js__["a" /* rewardStatus */])().then(function (data) {
                if (!data.data) {
                    _this.rewardCofig.status = -1;
                    return;
                }
                if (data.errCode == 10000) {
                    console.log("ok");
                    console.log(_this.rewardCofig.status);
                    _this.rewardCofig.id = data.data.id;
                    _this.rewardCofig.tid = data.data.tid;
                    _this.rewardCofig.status = data.data.status;
                } else {
                    _this.$Message.error(data.data);
                }
            }).catch(function (err) {
                _this.$Message.error("无法获取佣金配置信息");
                console.log(err);
            });
        },
        updateRewardCofig: function updateRewardCofig(status) {
            var _this2 = this;

            this.rewardCofig.status = status;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_commissionReward_js__["b" /* saveRewardStatus */])(this.rewardCofig).then(function (data) {
                if (data.errCode == 10000) {
                    _this2.$Message.success("佣金配置保存成功");
                    _this2.getRewardCofig();
                } else {
                    _this2.$Message.error(data.data);
                }
            }).catch(function (err) {
                _this2.$Message.error("佣金配置保存失败");
                console.log(err);
            });
        }
    }
});

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rewardStatus;
/* harmony export (immutable) */ __webpack_exports__["b"] = saveRewardStatus;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_root__ = __webpack_require__(141);



var javacore = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].javacore;

// 查询佣金分配的配置状态
function rewardStatus() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/config/query/esaleComission",
        data: data
    });
}
// 启用佣金分配的配置状态
function saveRewardStatus(opt) {
    var data = {
        id: opt.id,
        tid: opt.tid,
        status: opt.status // 1或-1
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/config/saveOrUpd/esaleComission",
        data: data
    });
}

/***/ }),

/***/ 503:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.rewardCofig.status == -1),
      expression: "rewardCofig.status==-1"
    }]
  }, [_vm._m(0), _vm._v(" "), _c('div', [_c('Button', {
    attrs: {
      "size": "large",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.updateRewardCofig(1)
      }
    }
  }, [_vm._v("立即启用")])], 1)]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.rewardCofig.status != -1),
      expression: "rewardCofig.status!=-1"
    }]
  }, [_c('div', {
    staticClass: "commissionreward-header-inline"
  }, [_c('Button', {
    staticStyle: {
      "float": "right",
      "margin-top": "6px",
      "margin-left": "16px"
    },
    attrs: {
      "size": "large",
      "type": "ghost"
    },
    on: {
      "click": function($event) {
        _vm.updateRewardCofig(-1)
      }
    }
  }, [_vm._v("立即停用")]), _vm._v(" "), _c('h2', {
    staticStyle: {
      "float": "right"
    }
  }, [_vm._v("佣金分配")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('Radio-group', {
    attrs: {
      "value": _vm.rewardCofig.status
    },
    on: {
      "on-change": _vm.updateRewardCofig
    }
  }, [_c('Radio', {
    attrs: {
      "label": "1"
    }
  }, [_c('span', [_vm._v("分配给公司和客户")])]), _vm._v("      \n            "), _c('Radio', {
    attrs: {
      "label": "2"
    }
  }, [_c('span', [_vm._v("分配给电销和客户")])])], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "commissionreward-header"
  }, [_c('h2', [_vm._v("佣金分配")]), _vm._v(" "), _c('p', [_vm._v("你尚未启用佣金分配")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-90425564", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=25.chunk.js.map