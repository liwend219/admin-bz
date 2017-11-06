webpackJsonp([0],{

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(500)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(436),
  /* template */
  __webpack_require__(533),
  /* scopeId */
  "data-v-6cf72f1e",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/views/layout.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] layout.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6cf72f1e", Component.options)
  } else {
    hotAPI.reload("data-v-6cf72f1e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    props: ["menus", "routers"],
    data: function data() {
        return {
            menulist: this.setSideBar(),
            itemActive: "用户界面配置"
        };
    },
    mounted: function mounted() {
        this.$el.style.maxHeight = window.innerHeight - 62 + "px";
    },

    methods: {
        setSideBar: function setSideBar() {
            var _this = this;

            var Arr = [];
            this.menus.map(function (menu) {
                var group = { name: menu.group, children: [] };
                _this.routers.map(function (router) {
                    if (router.group && router.group == menu.group) {
                        menu.children.map(function (child) {
                            if (child.name && child.name == router.name) {
                                group.children.push(router);
                            }
                        });
                    }
                });
                Arr.push(group);
            });
            return Arr;
        },
        selected: function selected(e) {
            var _this2 = this;

            this.menulist.map(function (group) {
                group.children.map(function (router) {
                    if (router.name == e) {
                        _this2.$emit('on-change', router);
                    }
                });
            });
        }
    }

});

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
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
    props: ["router", "height"],
    data: function data() {
        return {
            activeName: this.router.children[0].name,
            menu: ""
        };
    },
    mounted: function mounted() {
        this.menu = this.$(this.$el).find(".sideBar")[0];
    },

    watch: {
        "height": function height() {
            var _this = this;

            this.$nextTick(function () {
                _this.menu.style.height = _this.height + "px";
            });
        },
        "router": function router() {
            var _this2 = this;

            this.$nextTick(function () {
                _this2.activeName = _this2.router.children[0].name;
            });
        }
    }
});

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_storage_js__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_routers_js__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_RGBaster_js__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_sideBar_vue__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_sideBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_sideBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_subSideBar_vue__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_subSideBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_subSideBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mock_sideBarData_json__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mock_sideBarData_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__mock_sideBarData_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_userConfig_js__ = __webpack_require__(479);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






 //导航条
 //二级导航




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            spanLeft: 3,
            spanRight: 21,
            subMenuHeight: "500",
            tel: this.$store.getters.mobile || "已登录",
            routers: __WEBPACK_IMPORTED_MODULE_1__libs_routers_js__["a" /* default */],
            menuList: __WEBPACK_IMPORTED_MODULE_6__mock_sideBarData_json___default.a,
            subRouters: __WEBPACK_IMPORTED_MODULE_1__libs_routers_js__["a" /* default */][0]
        };
    },

    components: {
        sideBar: __WEBPACK_IMPORTED_MODULE_4__components_sideBar_vue___default.a,
        subSideBar: __WEBPACK_IMPORTED_MODULE_5__components_subSideBar_vue___default.a
    },
    filters: {
        telCheck: function telCheck(val) {
            return val ? val : "已登录";
        }
    },
    mounted: function mounted() {
        if (__WEBPACK_IMPORTED_MODULE_0__libs_storage_js__["a" /* default */].get("Admin-Token")) {
            this.$Message.success('登录成功');
            this.$router.replace({ path: '/uiConfig/base' });
        } else {
            this.$router.replace({ path: 'login' });
        }
        this.reLayout();
        this.getIndexInfo();
    },

    computed: {
        iconSize: function iconSize() {
            return this.spanLeft === 4 ? 16 : 22;
        }
    },
    methods: {
        reLayout: function reLayout() {
            // 左上角LOGO背景色
            var logo = this.$(this.$el).find(".layout-logo-left")[0];
            __WEBPACK_IMPORTED_MODULE_2__libs_RGBaster_js__["a" /* default */].colors(__WEBPACK_IMPORTED_MODULE_3_jquery___default()(logo).find("img")[0], {
                success: function success(payload) {
                    console.log(payload.dominant);
                    logo.style.backgroundColor = payload.dominant;
                }
            });
            // 调整工作区高度
            var content = this.$(this.$el).find(".layout-content")[0];
            content.style.height = window.innerHeight - 92 + "px";
            // 调整副导航条的高度
            this.subMenuHeight = window.innerHeight - 92;
        },
        logOut: function logOut() {
            var _this2 = this;

            this.$store.dispatch("LogOut").then(function () {
                _this2.$router.replace({ path: '/login' });
            }).catch(function (err) {
                console.log(err);
            });
        },
        selDropDown: function selDropDown(name) {
            if (name == "logOutBtn") {
                this.logOut();
            }
        },
        routerChange: function routerChange(router) {
            var _this = this;
            this.$store.dispatch("updateSubMenu", router).then(function () {
                _this.subRouters = _this.$store.getters.subMenu;
            }).catch(function (err) {});
        },
        getIndexInfo: function getIndexInfo() {
            var _this3 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__api_userConfig_js__["a" /* getIndexInfo */])().then(function (data) {
                if (data.errCode == 10000) {
                    var agent = data.data.tenantBasic.tenantCode;
                    var tid = data.data.tenantBasic.id;
                    _this3.$store.dispatch("getAgent", agent);
                    _this3.$store.dispatch("getTid", tid);
                }
            }).catch(function (err) {
                console.log(err);
            });
        }
    }
});

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getIndexInfo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_root__ = __webpack_require__(141);



var javacore = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].javacore;
/* 短信验证码 */
function getIndexInfo() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/tInterface/getIndexInfo",
        data: data
    });
}

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ;(function(window, undefined){



// Helper functions.

var getContext = function getContext(width, height) {
  var canvas = document.createElement("canvas");
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  return canvas.getContext('2d');
};

var getImageData = function getImageData(img, loaded) {

  var imgObj = new Image();
  var imgSrc = img.src || img;

  if (imgSrc.substring(0, 5) !== 'data:') imgObj.crossOrigin = "Anonymous";

  imgObj.onload = function () {
    var context = getContext(imgObj.width, imgObj.height);
    context.drawImage(imgObj, 0, 0);

    var imageData = context.getImageData(0, 0, imgObj.width, imgObj.height);
    loaded && loaded(imageData.data);
  };

  imgObj.src = imgSrc;
};

var makeRGB = function makeRGB(name) {
  return ['rgb(', name, ')'].join('');
};

var mapPalette = function mapPalette(palette) {
  var arr = [];
  for (var prop in palette) {
    arr.push(frmtPobj(prop, palette[prop]));
  };
  arr.sort(function (a, b) {
    return b.count - a.count;
  });
  return arr;
};

var fitPalette = function fitPalette(arr, fitSize) {
  if (arr.length > fitSize) {
    return arr.slice(0, fitSize);
  } else {
    for (var i = arr.length - 1; i < fitSize - 1; i++) {
      arr.push(frmtPobj('0,0,0', 0));
    };
    return arr;
  };
};

var frmtPobj = function frmtPobj(a, b) {
  return { name: makeRGB(a), count: b };
};

// RGBaster Object
// ---------------
//
var PALETTESIZE = 10;

var RGBaster = {};

RGBaster.colors = function (img, opts) {

  opts = opts || {};
  var exclude = opts.exclude || [],
      // for example, to exclude white and black:  [ '0,0,0', '255,255,255' ]
  paletteSize = opts.paletteSize || PALETTESIZE;

  getImageData(img, function (data) {

    var colorCounts = {},
        rgbString = '',
        rgb = [],
        colors = {
      dominant: { name: '', count: 0 },
      palette: []
    };

    var i = 0;
    for (; i < data.length; i += 4) {
      rgb[0] = data[i];
      rgb[1] = data[i + 1];
      rgb[2] = data[i + 2];
      rgbString = rgb.join(",");

      // skip undefined data and transparent pixels
      if (rgb.indexOf(undefined) !== -1 || data[i + 3] === 0) {
        continue;
      }

      // Ignore those colors in the exclude list.
      if (exclude.indexOf(makeRGB(rgbString)) === -1) {
        if (rgbString in colorCounts) {
          colorCounts[rgbString] = colorCounts[rgbString] + 1;
        } else {
          colorCounts[rgbString] = 1;
        }
      }
    }

    if (opts.success) {
      var palette = fitPalette(mapPalette(colorCounts), paletteSize + 1);
      opts.success({
        dominant: palette[0].name,
        secondary: palette[1].name,
        palette: palette.map(function (c) {
          return c.name;
        }).slice(1)
      });
    }
  });
};

//   window.RGBaster = window.RGBaster || RGBaster;

// })(window);

/* harmony default export */ __webpack_exports__["a"] = (RGBaster);

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 500:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 510:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a9f14a2c9344df8ae74736d27e89c70c.png";

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(483)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(428),
  /* template */
  __webpack_require__(517),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/components/sideBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] sideBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05a5c549", Component.options)
  } else {
    hotAPI.reload("data-v-05a5c549", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(510)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(429),
  /* template */
  __webpack_require__(544),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/components/subSideBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] subSideBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-efed4842", Component.options)
  } else {
    hotAPI.reload("data-v-efed4842", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Menu', {
    staticClass: "sidebar-menu",
    attrs: {
      "active-name": _vm.itemActive,
      "theme": "dark",
      "width": "auto",
      "open-names": [_vm.menulist[0].name, _vm.menulist[1].name, _vm.menulist[2].name]
    },
    on: {
      "on-select": _vm.selected
    }
  }, [_vm._l((_vm.menulist), function(menu) {
    return [(menu.children && menu.children.length > 0) ? _c('Submenu', {
      attrs: {
        "name": menu.name || ''
      }
    }, [_c('template', {
      slot: "title"
    }, [_c('Icon', {
      attrs: {
        "type": menu.icon
      }
    }), _vm._v(" "), _c('span', {
      domProps: {
        "textContent": _vm._s(menu.name)
      }
    })], 1), _vm._v(" "), _vm._l((menu.children), function(item) {
      return (menu.children.length > 0) ? [_c('router-link', {
        attrs: {
          "to": item.path
        }
      }, [_c('Menu-item', {
        key: item.name,
        attrs: {
          "name": item.name
        }
      }, [_c('span', {
        domProps: {
          "textContent": _vm._s(item.name)
        }
      })])], 1)] : _vm._e()
    })], 2) : _c('Menu-item', {
      attrs: {
        "name": menu.name || ''
      }
    }, [_c('Icon', {
      attrs: {
        "type": menu.icon
      }
    }), _vm._v(" "), _c('span', {
      domProps: {
        "textContent": _vm._s(menu.name)
      }
    })], 1)]
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-05a5c549", module.exports)
  }
}

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layout"
  }, [_c('Row', {
    attrs: {
      "type": "flex"
    }
  }, [_c('i-col', {
    staticClass: "layout-menu-left",
    attrs: {
      "span": _vm.spanLeft
    }
  }, [_c('div', {
    staticClass: "layout-logo-left"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(512),
      "alt": ""
    }
  })]), _vm._v(" "), _c('sideBar', {
    attrs: {
      "menus": _vm.menuList,
      "routers": _vm.routers
    },
    on: {
      "on-change": _vm.routerChange
    }
  })], 1), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": _vm.spanRight
    }
  }, [_c('div', {
    staticClass: "layout-header"
  }, [_c('Dropdown', {
    on: {
      "on-click": _vm.selDropDown
    }
  }, [_c('Button', {
    attrs: {
      "type": "ghost",
      "shape": "circle",
      "icon": "person"
    }
  }, [_vm._v(_vm._s(_vm.tel))]), _vm._v(" "), _c('Dropdown-menu', {
    slot: "list"
  }, [_c('Dropdown-item', {
    attrs: {
      "name": "logOutBtn"
    }
  }, [_vm._v("退出登陆")])], 1)], 1)], 1), _vm._v(" "), _c('Row', {
    staticClass: "layout-content"
  }, [_c('i-col', {
    attrs: {
      "span": "3"
    }
  }, [_c('subSideBar', {
    attrs: {
      "router": _vm.subRouters,
      "height": _vm.subMenuHeight
    }
  })], 1), _vm._v(" "), _c('i-col', {
    staticStyle: {
      "height": "100%"
    },
    attrs: {
      "span": "21"
    }
  }, [_c('div', {
    staticClass: "layout-content-main"
  }, [_c('router-view')], 1)])], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6cf72f1e", module.exports)
  }
}

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Menu', {
    staticClass: "sideBar",
    attrs: {
      "active-name": _vm.activeName,
      "width": "auto",
      "mode": "vertical"
    }
  }, [_c('Menu-group', {
    attrs: {
      "title": _vm.router.name
    }
  }, [_vm._l((_vm.router.children), function(item) {
    return [_c('router-link', {
      staticStyle: {
        "color": "#495060"
      },
      attrs: {
        "to": item.path
      }
    }, [_c('Menu-item', {
      attrs: {
        "name": item.name
      }
    }, [_c('span', {
      domProps: {
        "textContent": _vm._s(item.name)
      }
    })])], 1)]
  })], 2)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-efed4842", module.exports)
  }
}

/***/ }),

/***/ 548:
/***/ (function(module, exports) {

module.exports = [{"group":"租户模块","children":[{"name":"用户界面配置"},{"name":"用户管理"},{"name":"租户组级"}]},{"group":"产品服务","children":[{"name":"电销"},{"name":"车险"},{"name":"非车险"},{"name":"钱包"},{"name":"支付"},{"name":"通知"}]},{"group":"结算","children":[{"name":"账务管理"},{"name":"对账"}]}]

/***/ })

});
//# sourceMappingURL=0.chunk.js.map