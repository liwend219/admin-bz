webpackJsonp([22],{

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(497)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(447),
  /* template */
  __webpack_require__(530),
  /* scopeId */
  "data-v-601c5b8e",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/views/products/noticeConfig.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] noticeConfig.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-601c5b8e", Component.options)
  } else {
    hotAPI.reload("data-v-601c5b8e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_products_noticeConfig_js__ = __webpack_require__(469);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            notice: {
                companyName: "",
                productName: ""
            }
        };
    },
    mounted: function mounted() {
        this.getNoticeBasic();
    },

    methods: {
        getNoticeBasic: function getNoticeBasic() {
            var _this = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_products_noticeConfig_js__["a" /* queryNoticeBasic */])().then(function (data) {
                if (data.errCode == 10000) {
                    if (!data.data) {
                        _this.$Message.warning("暂无配置信息");
                    }
                    _this.notice.companyName = data.data.companyName;
                    _this.notice.productName = data.data.productName;
                } else {
                    _this.$Message.error(data.data);
                }
            }).catch(function (err) {
                _this.$Message.error("获取通知设置信息失败");
                console.log(err);
            });
        }
    }
});

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = queryNoticeBasic;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_root__ = __webpack_require__(141);



var javacore = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].javacore;

// 查询通知设置
function queryNoticeBasic() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/notification/basic/query",
        data: data
    });
}

/***/ }),

/***/ 497:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', [_c('Form', {
    ref: "formInline",
    staticClass: "noticeconfig-form",
    attrs: {
      "label-width": 70
    }
  }, [_c('Form-item', {
    staticClass: "noticeconfig-form-item",
    attrs: {
      "label": "公司名称"
    }
  }, [_c('Input', {
    staticClass: "noticeconfig-form-input",
    attrs: {
      "type": "text",
      "placeholder": "公司名称",
      "readonly": ""
    },
    model: {
      value: (_vm.notice.companyName),
      callback: function($$v) {
        _vm.notice.companyName = $$v
      },
      expression: "notice.companyName"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "noticeconfig-form-item",
    attrs: {
      "label": "产品名称"
    }
  }, [_c('Input', {
    staticClass: "noticeconfig-form-input",
    attrs: {
      "type": "text",
      "placeholder": "产品名称",
      "readonly": ""
    },
    model: {
      value: (_vm.notice.productName),
      callback: function($$v) {
        _vm.notice.productName = $$v
      },
      expression: "notice.productName"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "noticeconfig-form-item"
  })], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "noticeconfig-header"
  }, [_c('h2', [_vm._v("通知设置")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-601c5b8e", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=22.chunk.js.map