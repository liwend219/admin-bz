webpackJsonp([8],{

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(482)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(452),
  /* template */
  __webpack_require__(516),
  /* scopeId */
  "data-v-012cb474",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/views/tenant/groupAgency.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] groupAgency.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-012cb474", Component.options)
  } else {
    hotAPI.reload("data-v-012cb474", Component.options)
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

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_tenant_groupAgency_js__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_filters_js__ = __webpack_require__(415);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                merName: "",
                contactsName: ""
            },
            columns: [{ title: "用户ID", key: "merid", align: "center" }, { title: "公司名", key: "mername", align: "center", ellipsis: true }, { title: "联系人", key: "contactsName", align: "center" }, { title: "联系人电话", key: "contactsTelephone", align: "center" }, {
                title: "合约开始时间",
                key: "contractStartTime",
                align: "center",
                render: function render(h, params) {
                    return h('span', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__libs_filters_js__["b" /* dateFormat */])(params.row.contractStartTime));
                }
            }, {
                title: "合约到期时间",
                key: "contractEndTime",
                align: "center",
                render: function render(h, params) {
                    return h('span', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__libs_filters_js__["b" /* dateFormat */])(params.row.contractEndTime));
                }
            }, {
                title: "建立时间",
                key: "mercreatetime",
                align: "center",
                render: function render(h, params) {
                    return h('span', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__libs_filters_js__["b" /* dateFormat */])(params.row.mercreatetime));
                }
            }],
            agenciesList: []
        };
    },
    mounted: function mounted() {
        this.queryList();
    },

    methods: {
        queryList: function queryList() {
            var _this = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_tenant_groupAgency_js__["a" /* queryAgentList */])(this.queryData).then(function (data) {
                if (data.errCode == 10000) {
                    _this.agenciesList = data.data;
                } else {
                    _this.$Message.error(data.data);
                }
            }).catch(function (err) {
                _this.$Message.error("公司列表获取失败");
                console.log(err);
            });
        }
    }
});

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = queryAgentList;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_root__ = __webpack_require__(141);



var javacore = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].javacore;

// 查询用户列表
function queryAgentList(opt) {
    var data = {
        merName: opt.merName,
        contactsName: opt.contactsName
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/tgroup/getAgent",
        data: data
    });
}

/***/ }),

/***/ 482:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Card', {
    staticClass: "groupagency-card"
  }, [_c('Form', {
    ref: "formInline",
    staticClass: "groupagency-form",
    attrs: {
      "inline": "",
      "label-width": 70
    }
  }, [_c('Form-item', {
    staticClass: "groupagency-form-item",
    attrs: {
      "label": "公司名"
    }
  }, [_c('Input', {
    staticClass: "groupagency-form-input",
    attrs: {
      "type": "text",
      "placeholder": "公司名"
    },
    model: {
      value: (_vm.queryData.merName),
      callback: function($$v) {
        _vm.queryData.merName = $$v
      },
      expression: "queryData.merName"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "groupagency-form-item",
    attrs: {
      "label": "联系人"
    }
  }, [_c('Input', {
    staticClass: "groupagency-form-input",
    attrs: {
      "placeholder": "联系人"
    },
    model: {
      value: (_vm.queryData.contactsName),
      callback: function($$v) {
        _vm.queryData.contactsName = $$v
      },
      expression: "queryData.contactsName"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "groupagency-form-item"
  }, [_c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.queryList
    }
  }, [_vm._v("查询")])], 1)], 1)], 1), _vm._v(" "), _c('Table', {
    attrs: {
      "stripe": "",
      "columns": _vm.columns,
      "data": _vm.agenciesList
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-012cb474", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=8.chunk.js.map