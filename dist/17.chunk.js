webpackJsonp([17],{

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(488)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(454),
  /* template */
  __webpack_require__(521),
  /* scopeId */
  "data-v-2665e516",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/views/tenant/uiConfigBase.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] uiConfigBase.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2665e516", Component.options)
  } else {
    hotAPI.reload("data-v-2665e516", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_tenant_uiConfigBase_js__ = __webpack_require__(476);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            baseInfo: {},
            loaded: false
        };
    },
    mounted: function mounted() {
        var _this = this;

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_tenant_uiConfigBase_js__["a" /* getBasicInfo */])().then(function (data) {
            if (data.errCode === 10000) {
                _this.loaded = true;
                if (!data.data) {
                    _this.$Message.error("无法获取基础配置");
                    return;
                }
                _this.baseInfo = data.data;
                _this.baseInfo.logo = __WEBPACK_IMPORTED_MODULE_0__api_tenant_uiConfigBase_js__["b" /* nodeRoot */] + "/data/uploadimages/" + data.data.shortName + "/logo.png";
            } else {
                _this.$Message.error(data.data);
            }
        }).catch(function (res) {
            _this.$Message.error("无法获取基础配置");
            console.log(res);
        });
    },

    components: {},
    computed: {},
    methods: {}

});

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBasicInfo;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return nodeRoot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_root__ = __webpack_require__(141);



var javacore = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].javacore;
/* 短信验证码 */
function getBasicInfo() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/tInterface/basic",
        data: data
    });
}
var nodeRoot = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].noderoot;

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-content"
  }, [_c('div', {
    staticClass: "page-header"
  }, [_c('h2', [_vm._v("基础配置")]), _vm._v(" "), _c('Alert', {
    attrs: {
      "type": "warning"
    }
  }, [_vm._v("如需更改基础配置，请联系保挣客服人员")])], 1), _vm._v(" "), (!_vm.loaded) ? [_c('Spin', {
    staticClass: "page-spin",
    attrs: {
      "size": "large"
    }
  })] : [_c('Row', {
    staticClass: "page-row page-border",
    attrs: {
      "gutter": 30,
      "type": "flex",
      "align": "middle"
    }
  }, [_c('Col', {
    staticClass: "page-col ",
    attrs: {
      "span": "4"
    }
  }, [_c('span', [_vm._v("LOGO：")])]), _vm._v(" "), _c('Col', {
    staticClass: "page-col",
    attrs: {
      "span": "6"
    }
  }, [_c('div', {
    staticClass: "logo-preview"
  }, [_c('img', {
    attrs: {
      "src": _vm.baseInfo.logo,
      "alt": ""
    }
  })])])], 1), _vm._v(" "), _c('Row', {
    staticClass: "page-row page-noBorder",
    attrs: {
      "gutter": 30,
      "type": "flex",
      "align": "middle"
    }
  }, [_c('i-col', {
    staticClass: "page-col",
    attrs: {
      "span": "4"
    }
  }, [_c('span', [_vm._v("公司名称：")])]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "6"
    }
  }, [_c('Input', {
    attrs: {
      "readonly": true,
      "value": _vm.baseInfo.mername
    }
  })], 1)], 1), _vm._v(" "), _c('Row', {
    staticClass: "page-row page-border",
    attrs: {
      "type": "flex",
      "gutter": 30,
      "align": "middle"
    }
  }, [_c('i-col', {
    staticClass: "page-col",
    attrs: {
      "span": "4"
    }
  }, [_c('span', [_vm._v("公司简称：")])]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "6"
    }
  }, [_c('Input', {
    attrs: {
      "readonly": true,
      "value": _vm.baseInfo.shortName
    }
  })], 1)], 1), _vm._v(" "), _c('Row', {
    staticClass: "page-row page-noBorder",
    attrs: {
      "gutter": 30,
      "type": "flex",
      "align": "middle"
    }
  }, [_c('i-col', {
    staticClass: "page-col",
    attrs: {
      "span": "4"
    }
  }, [_c('span', [_vm._v("联系人：")])]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "6"
    }
  }, [_c('Input', {
    attrs: {
      "readonly": true,
      "value": _vm.baseInfo.contactsName
    }
  })], 1), _vm._v(" "), _c('i-col', {
    staticClass: "page-col",
    attrs: {
      "span": "4"
    }
  }, [_c('span', [_vm._v("联系人电话：")])]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "6"
    }
  }, [_c('Input', {
    attrs: {
      "readonly": true,
      "value": _vm.baseInfo.contactsTelephone
    }
  })], 1)], 1), _vm._v(" "), _c('Row', {
    staticClass: "page-row page-border",
    attrs: {
      "type": "flex",
      "gutter": 30,
      "align": "middle"
    }
  }, [_c('i-col', {
    staticClass: "page-col",
    attrs: {
      "span": "4"
    }
  }, [_c('span', [_vm._v("邮箱：")])]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "6"
    }
  }, [_c('Input', {
    attrs: {
      "readonly": true,
      "value": _vm.baseInfo.email
    }
  })], 1), _vm._v(" "), _c('i-col', {
    staticClass: "page-col",
    attrs: {
      "span": "4"
    }
  }, [_c('span', [_vm._v("公司地址：")])]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "6"
    }
  }, [_c('Input', {
    attrs: {
      "readonly": true,
      "value": _vm.baseInfo.meraddress
    }
  })], 1)], 1), _vm._v(" "), _c('Row', {
    staticClass: "page-row page-noBorder",
    attrs: {
      "gutter": 30,
      "type": "flex",
      "align": "middle"
    }
  }, [_c('i-col', {
    staticClass: "page-col",
    attrs: {
      "span": "4"
    }
  }, [_c('span', [_vm._v("公司简介：")])]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "16"
    }
  }, [_c('Input', {
    attrs: {
      "readonly": true,
      "type": "textarea",
      "value": _vm.baseInfo.discription
    }
  })], 1)], 1)]], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2665e516", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=17.chunk.js.map