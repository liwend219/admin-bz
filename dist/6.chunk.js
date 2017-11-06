webpackJsonp([6],{

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(504)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(456),
  /* template */
  __webpack_require__(537),
  /* scopeId */
  "data-v-90d1fda2",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/views/tenant/userManagerUser.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] userManagerUser.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-90d1fda2", Component.options)
  } else {
    hotAPI.reload("data-v-90d1fda2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = telValid;
/* harmony export (immutable) */ __webpack_exports__["a"] = idValid;
/* unused harmony export carNoValid */
/*
 * Created by wang youxu on 17/6/27.
 */
function telValid(str) {
    var reg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])+\d{8}$/;
    return reg.test(str);
}
function idValid(str) {
    var reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    return reg.test(str);
}
function carNoValid(str) {
    var reg = /^[A-Z_a-z]{1}[A-Z_a-z_0-9]{6}/;
    return reg.test(str);
}

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_validate_js__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_tenant_userManagerUser_js__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_iview__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_iview__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





function flagFormat(flag) {
    return {
        "1": "电销",
        "2": "代理人",
        "0": "默认用户"
    }[flag];
}
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            queryData: {
                id: "",
                mobile: "",
                name: "",
                flag: "",
                pageSize: "20",
                pageNo: 1
            },
            columns: [{ title: "用户ID", key: "id", align: "center" }, { title: "手机号码", key: "mobile", align: "center" }, { title: "姓名", key: "name", align: "center" }, { title: "身份证", key: "idNo", align: "center" }, {
                title: "用户标签",
                key: "flag",
                align: "center",
                render: function render(h, params) {
                    return h('span', flagFormat(params.row.flag));
                }
            }, {
                title: "备注",
                key: "note",
                align: "center",
                ellipsis: true,
                render: function render(h, params) {
                    return h('span', {
                        style: {
                            cursor: "pointer",
                            color: "#2db7f5"
                        },
                        on: {
                            click: function click() {
                                __WEBPACK_IMPORTED_MODULE_2_iview__["Modal"].info({
                                    title: '用户备注',
                                    content: "" + params.row.note
                                });
                            }
                        }
                    }, params.row.note);
                }
            }],
            userList: [],
            totalCount: "",
            userSected: {
                id: "",
                channel: "",
                name: "",
                idNo: "",
                note: "",
                flag: ""
            },
            modelBox: false
        };
    },
    mounted: function mounted() {
        this.queryUsers();
    },

    methods: {
        queryUsers: function queryUsers(page) {
            var _this = this;

            if (page) {
                this.queryData.pageNo = 1;
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_tenant_userManagerUser_js__["a" /* queryUserList */])(this.queryData).then(function (data) {
                if (data.errCode === 10000) {
                    _this.totalCount = data.data.totalCount;
                    _this.userList = data.data.results;
                } else {
                    _this.$Message.error(data.data);
                }
            }).catch(function (err) {
                _this.$Message.error("无法获取用户信息");
                console.log(err);
            });
        },
        changePage: function changePage(no) {
            this.queryData.pageNo = no;
            this.queryUsers();
        },
        selecteRow: function selecteRow(data) {
            for (var key in this.userSected) {
                this.userSected[key] = key == "flag" ? data[key].toString() : data[key];
            }
        },
        openModel: function openModel() {
            if (this.userSected.id == "") {
                this.$Message.warning("请选择你要编辑的用户");
            } else {
                this.modelBox = true;
            }
        },
        updateUser: function updateUser() {
            var _this2 = this;

            if (this.userSected.idNo && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_validate_js__["a" /* idValid */])(this.userSected.idNo)) {
                this.$Message.warning("请输入正确的用户身份证");
                return;
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_tenant_userManagerUser_js__["b" /* updateUserList */])(this.userSected).then(function (data) {
                console.log(data);
                if (data.errCode == 10000) {
                    _this2.$Message.success("保存成功");
                    _this2.queryUsers();
                } else {
                    _this2.$Message.error(data.data);
                }
            }).catch(function (err) {
                _this2.$Message.error("保存失败");
                console.log(err);
            });
        }
    }
});

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = queryUserList;
/* harmony export (immutable) */ __webpack_exports__["b"] = updateUserList;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_root__ = __webpack_require__(141);



var javacore = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].javacore;

// 查询用户列表
function queryUserList(opt) {
    var data = {
        id: opt.id,
        mobile: opt.mobile,
        name: opt.name,
        flag: opt.flag,
        pageSize: opt.pageSize,
        pageNo: opt.pageNo
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/userManage/query",
        data: data
    });
}
// 添加用户
function updateUserList(opt) {
    var data = {
        id: opt.id,
        name: opt.name,
        flag: opt.flag,
        note: opt.note,
        idNo: opt.idNo,
        channel: opt.channel
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/userManage/update",
        data: data
    });
}

/***/ }),

/***/ 504:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "margin-top": "38px"
    }
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
    staticClass: "manageruser-form",
    attrs: {
      "inline": "",
      "label-width": 70
    }
  }, [_c('Form-item', {
    staticClass: "manageruser-form-item",
    attrs: {
      "label": "用户ID"
    }
  }, [_c('Input', {
    staticClass: "manageruser-form-input",
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
    staticClass: "manageruser-form-item",
    attrs: {
      "label": "手机号"
    }
  }, [_c('Input', {
    staticClass: "manageruser-form-input",
    attrs: {
      "placeholder": "手机号"
    },
    model: {
      value: (_vm.queryData.mobile),
      callback: function($$v) {
        _vm.queryData.mobile = $$v
      },
      expression: "queryData.mobile"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "manageruser-form-item",
    attrs: {
      "label": "姓名"
    }
  }, [_c('Input', {
    staticClass: "manageruser-form-input",
    attrs: {
      "placeholder": "姓名"
    },
    model: {
      value: (_vm.queryData.name),
      callback: function($$v) {
        _vm.queryData.name = $$v
      },
      expression: "queryData.name"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "manageruser-form-item",
    attrs: {
      "label": "用户标签"
    }
  }, [_c('Select', {
    attrs: {
      "clearable": ""
    },
    model: {
      value: (_vm.queryData.flag),
      callback: function($$v) {
        _vm.queryData.flag = $$v
      },
      expression: "queryData.flag"
    }
  }, [_c('Option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("电销")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("代理人")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("默认用户")])], 1)], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "manageruser-form-item"
  }, [_c('Button', {
    attrs: {
      "type": "ghost"
    },
    on: {
      "click": function($event) {
        _vm.queryUsers(1)
      }
    }
  }, [_vm._v("查询")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('Col', {
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
  }, [_vm._v("编辑")])], 1)], 1), _vm._v(" "), _c('Table', {
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
    staticClass: "manageruser-pagebar"
  }, [_c('Page', {
    staticClass: "manageruser-page-components",
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
  })], 1) : _vm._e(), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "编辑用户信息"
    },
    on: {
      "on-ok": _vm.updateUser,
      "on-cancel": function($event) {
        _vm.modelBox = false
      }
    },
    model: {
      value: (_vm.modelBox),
      callback: function($$v) {
        _vm.modelBox = $$v
      },
      expression: "modelBox"
    }
  }, [_c('Form', {
    ref: "formInline",
    staticClass: "manageruser-form-model",
    attrs: {
      "inline": "",
      "label-width": 80
    }
  }, [_c('Form-item', {
    staticClass: "manageruser-form-model-item",
    attrs: {
      "label": "用户姓名"
    }
  }, [_c('Input', {
    staticClass: "manageruser-form-model-input",
    attrs: {
      "type": "text",
      "placeholder": "用户姓名"
    },
    model: {
      value: (_vm.userSected.name),
      callback: function($$v) {
        _vm.userSected.name = $$v
      },
      expression: "userSected.name"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "manageruser-form-model-item",
    attrs: {
      "label": "用户身份证"
    }
  }, [_c('Input', {
    staticClass: "manageruser-form-model-input",
    attrs: {
      "placeholder": "用户身份证"
    },
    model: {
      value: (_vm.userSected.idNo),
      callback: function($$v) {
        _vm.userSected.idNo = $$v
      },
      expression: "userSected.idNo"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "manageruser-form-model-item",
    attrs: {
      "label": "用户标签"
    }
  }, [_c('Select', {
    staticStyle: {
      "width": "130px"
    },
    model: {
      value: (_vm.userSected.flag),
      callback: function($$v) {
        _vm.userSected.flag = $$v
      },
      expression: "userSected.flag"
    }
  }, [_c('Option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("电销")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("代理人")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("默认用户")])], 1)], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "manageruser-form-model-item",
    attrs: {
      "label": "备注"
    }
  }, [_c('Input', {
    staticClass: "manageruser-form-model-input",
    attrs: {
      "placeholder": "备注"
    },
    model: {
      value: (_vm.userSected.note),
      callback: function($$v) {
        _vm.userSected.note = $$v
      },
      expression: "userSected.note"
    }
  })], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-90d1fda2", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=6.chunk.js.map