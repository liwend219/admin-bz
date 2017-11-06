webpackJsonp([10],{

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(509)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(442),
  /* template */
  __webpack_require__(543),
  /* scopeId */
  "data-v-ed8018ce",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/views/products/identityAudit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] identityAudit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ed8018ce", Component.options)
  } else {
    hotAPI.reload("data-v-ed8018ce", Component.options)
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

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_filters_js__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_products_identityAudit_js__ = __webpack_require__(464);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var auditStatusFormat = function auditStatusFormat(val) {
    return {
        "-1": "审核失败",
        "0": "未上传",
        "1": "待审核",
        "2": "审核通过"
    }[val];
};

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            isShow: false,
            identityAuditCofig: {
                id: "",
                tid: "",
                status: ""
            },
            queryData: {
                idCardStatus: "",
                order: "",
                pageNo: 1,
                pageSize: 10,
                sort: "cdt",
                userId: ""
            },
            columns: [{ title: "钱包ID", key: "id", align: "center" }, { title: "用户ID", key: "uid", align: "center" }, {
                title: "钱包余额",
                key: "purseLeft",
                align: "center",
                render: function render(h, params) {
                    return h('span', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_filters_js__["a" /* moneyFormat */])(params.row.purseLeft));
                }
            }, {
                title: "总收益",
                key: "totalBalance",
                align: "center",
                render: function render(h, params) {
                    return h('span', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_filters_js__["a" /* moneyFormat */])(params.row.totalBalance));
                }
            }, {
                title: "总提现",
                key: "totalCashBack",
                align: "center",
                render: function render(h, params) {
                    return h('span', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_filters_js__["a" /* moneyFormat */])(params.row.totalCashBack));
                }
            }, {
                title: "身份信息审核状态",
                key: "idCardStatus",
                align: "center",
                render: function render(h, params) {
                    return h('span', auditStatusFormat(params.row.idCardStatus));
                }
            }, {
                title: "更新时间",
                key: "upd",
                align: "center",
                render: function render(h, params) {
                    return h('span', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_filters_js__["b" /* dateFormat */])(params.row.upd));
                }
            }, {
                title: "创建时间",
                key: "cdt",
                align: "center",
                render: function render(h, params) {
                    return h('span', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_filters_js__["b" /* dateFormat */])(params.row.cdt));
                }
            }],
            userList: [],
            totalCount: "",
            userSelected: {
                name: "",
                idNo: "",
                purseUserId: "",
                status: "",
                idCardBack: "",
                idCardFront: ""
            },
            modelStatus: false
        };
    },
    mounted: function mounted() {
        this.getIdentityAuditCofig();
    },

    methods: {
        getIdentityAuditCofig: function getIdentityAuditCofig() {
            var _this = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_products_identityAudit_js__["a" /* inentityAuditStatus */])().then(function (data) {
                if (data.errCode === 10000) {
                    if (!data.data) {
                        return;
                    }
                    _this.identityAuditCofig.id = data.data.id;
                    _this.identityAuditCofig.tid = data.data.tid;
                    _this.identityAuditCofig.status = data.data.status;
                    if (data.data.status == 1) {
                        _this.queryList();
                    }
                } else {
                    _this.identityAuditCofig.status = -1;
                    _this.$Message.error(data.data);
                }
            }).catch(function (err) {
                _this.$Message.error("无法获取用户信息");
                console.log(err);
            });
        },
        updateIdentityAuditCofig: function updateIdentityAuditCofig(status) {
            var _this2 = this;

            this.identityAuditCofig.status = status;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_products_identityAudit_js__["b" /* saveInentityAuditStatus */])(this.identityAuditCofig).then(function (data) {
                if (data.errCode === 10000) {
                    _this2.$Message.success("启用成功");
                    _this2.getIdentityAuditCofig();
                } else {
                    _this2.identityAuditCofig.status = -1;
                    _this2.$Message.error(data.data);
                }
            }).catch(function (err) {
                _this2.$Message.error("启用失败");
                console.log(err);
            });
        },
        queryList: function queryList(page) {
            var _this3 = this;

            if (page) {
                this.queryData.pageNo = 1;
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_products_identityAudit_js__["c" /* inentityAuditList */])(this.queryData).then(function (data) {
                if (data.errCode === 10000) {
                    _this3.totalCount = data.data.total;
                    _this3.userList = data.data.pageRows;
                } else {
                    _this3.$Message.error(data.data);
                }
            }).catch(function (err) {
                _this3.$Message.error("审核列表获取失败");
                console.log(err);
            });
        },
        openModel: function openModel() {
            if (this.userSelected.purseUserId == "") {
                this.$Message.warning("请选择你要审核的用户");
            } else if (this.userSelected.status == 0) {
                this.$Message.warning("未上传身份信息，无法审核");
            } else if (this.userSelected.status == -1) {
                this.$Message.warning("已审核失败");
            } else if (this.userSelected.status == 2) {
                this.modelStatus = true;
                this.isShow = false;
            } else {
                this.modelStatus = true;
                this.isShow = true;
            }
        },
        selecteRow: function selecteRow(data) {
            this.userSelected.name = data.name;
            this.userSelected.idNo = data.idNo;
            this.userSelected.purseUserId = data.uid;
            this.userSelected.status = data.idCardStatus;
            this.userSelected.idCardBack = data.idCardBack;
            this.userSelected.idCardFront = data.idCardFront;
        },
        okStatus: function okStatus() {
            this.commitStatus(2);
        },
        cancelStatus: function cancelStatus() {
            this.commitStatus(-1);
        },
        commitStatus: function commitStatus(status) {
            var _this4 = this;

            var opt = {
                status: status,
                purseUserId: this.userSelected.purseUserId
            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_products_identityAudit_js__["d" /* inentityAudit */])(opt).then(function (data) {
                if (data.errCode === 10000) {
                    _this4.$Message.success("审核成功");
                    _this4.queryList();
                } else {
                    _this4.$Message.error(data.data);
                }
            }).catch(function (err) {
                _this4.$Message.error("审核失败");
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

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = inentityAuditStatus;
/* harmony export (immutable) */ __webpack_exports__["b"] = saveInentityAuditStatus;
/* harmony export (immutable) */ __webpack_exports__["c"] = inentityAuditList;
/* harmony export (immutable) */ __webpack_exports__["d"] = inentityAudit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_root__ = __webpack_require__(141);



var javacore = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].javacore;

// 查询身份审核的配置状态
function inentityAuditStatus() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/config/query/inentityAudit",
        data: data
    });
}
// 启用身份审核的配置状态
function saveInentityAuditStatus(opt) {
    var data = {
        id: opt.id,
        tid: opt.tid,
        status: opt.status // 1或-1
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/config/saveOrUpd/inentityAudit",
        data: data
    });
}
// 请求身份审核列表
function inentityAuditList(opt) {
    var data = {
        idCardStatus: opt.idCardStatus,
        order: opt.order,
        pageNo: opt.pageNo,
        pageSize: opt.pageSize,
        userId: opt.userId,
        sort: "cdt",
        tenantCode: opt.tenantCode
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/accounting/purse/identityAudit",
        data: data
    });
}
// 身份审核
function inentityAudit(opt) {
    var data = {
        purseUserId: opt.purseUserId,
        status: opt.status
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/accounting/purse/dealIdentityAudit",
        data: data
    });
}

/***/ }),

/***/ 509:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.identityAuditCofig.status != 1) ? _c('div', [_vm._m(0), _vm._v(" "), _c('div', [_c('Button', {
    attrs: {
      "size": "large",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.updateIdentityAuditCofig(1)
      }
    }
  }, [_vm._v("立即启用")])], 1)]) : _vm._e(), _vm._v(" "), (_vm.identityAuditCofig.status == 1) ? _c('div', {
    staticClass: "identiyaudit-header-inline"
  }, [_c('Button', {
    staticClass: "identiyaudit-header-btn",
    attrs: {
      "size": "large",
      "type": "ghost"
    },
    on: {
      "click": function($event) {
        _vm.updateIdentityAuditCofig(-1)
      }
    }
  }, [_vm._v("停用")]), _vm._v(" "), _c('h2', [_vm._v("身份审核")])], 1) : _vm._e(), _vm._v(" "), (_vm.identityAuditCofig.status == 1) ? _c('div', {
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
      "label": "用户ID"
    }
  }, [_c('Input', {
    staticClass: "identiyaudit-form-input",
    attrs: {
      "type": "text",
      "placeholder": "用户ID"
    },
    model: {
      value: (_vm.queryData.id),
      callback: function($$v) {
        _vm.queryData.id = $$v
      },
      expression: "queryData.id"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "identiyaudit-form-item",
    attrs: {
      "label": "状态"
    }
  }, [_c('Select', {
    staticStyle: {
      "width": "120px"
    },
    attrs: {
      "clearable": ""
    },
    model: {
      value: (_vm.queryData.idCardStatus),
      callback: function($$v) {
        _vm.queryData.idCardStatus = $$v
      },
      expression: "queryData.idCardStatus"
    }
  }, [_c('Option', {
    attrs: {
      "value": "-1"
    }
  }, [_vm._v("审核失败")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("未上传")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("待审核")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("审核通过")])], 1)], 1), _vm._v(" "), _c('Form-item', {
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
  }, [_vm._v("身份审核")])], 1)], 1), _vm._v(" "), _c('Table', {
    attrs: {
      "stripe": "",
      "columns": _vm.columns,
      "data": _vm.userList,
      "highlight-row": ""
    },
    on: {
      "on-current-change": _vm.selecteRow
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
  })], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c('Modal', {
    staticClass: "identiyaudit-model",
    attrs: {
      "title": "身份审核"
    },
    model: {
      value: (_vm.modelStatus),
      callback: function($$v) {
        _vm.modelStatus = $$v
      },
      expression: "modelStatus"
    }
  }, [(_vm.isShow) ? _c('div', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v("姓　　名：" + _vm._s(_vm.userSelected.name))]), _vm._v(" "), _c('label', {
    staticClass: "form-label"
  }, [_vm._v("身份证号：" + _vm._s(_vm.userSelected.idNo))])]) : _vm._e(), _vm._v(" "), _c('br'), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.userSelected.idCardBack,
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.userSelected.idCardFront,
      "alt": ""
    }
  }), _vm._v(" "), (_vm.isShow) ? _c('div', {
    slot: "footer"
  }, [_c('Button', {
    attrs: {
      "type": "info",
      "size": "large"
    },
    on: {
      "click": _vm.okStatus
    }
  }, [_vm._v("审核通过")]), _vm._v(" "), _c('Button', {
    attrs: {
      "size": "large"
    },
    on: {
      "click": _vm.cancelStatus
    }
  }, [_vm._v("审核不通过")])], 1) : _vm._e()])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "identiyaudit-header"
  }, [_c('h2', [_vm._v("身份审核")]), _vm._v(" "), _c('p', [_vm._v("你尚未启用身份审核")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-ed8018ce", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=10.chunk.js.map