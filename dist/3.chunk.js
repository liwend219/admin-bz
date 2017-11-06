webpackJsonp([3],{

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(490)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(455),
  /* template */
  __webpack_require__(523),
  /* scopeId */
  "data-v-2a425e47",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/views/tenant/uiConfigGlobal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] uiConfigGlobal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a425e47", Component.options)
  } else {
    hotAPI.reload("data-v-2a425e47", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iview__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_iview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_cropper__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_cropper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_cropper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uploadBtn_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uploadBtn_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__uploadBtn_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    props: {
        fixedNumberW: {
            type: Number,
            required: true
        },
        fixedNumberH: {
            type: Number,
            required: true
        }
    },
    data: function data() {
        return {
            example2: {},
            data: {},
            modal5: false
        };
    },

    components: {
        vueCropper: __WEBPACK_IMPORTED_MODULE_1_vue_cropper___default.a, uploadBtn: __WEBPACK_IMPORTED_MODULE_2__uploadBtn_vue___default.a
    },
    methods: {
        close: function close() {
            this.modal5 = false;
            return;
        },
        finish: function finish(type) {
            var _this = this;

            console.log('裁剪');
            this.$refs.cropper.getCropData(function (data) {
                _this.$emit("imgCropper", data);
                _this.modal5 = false;
            });
        },
        selecteMainImg: function selecteMainImg(data) {
            this.data = data;
            console.log(data);
            this.open();
        },
        open: function open() {
            console.log(this.fixedNumberW);
            this.modal5 = true;
            this.example2 = {
                imgSrc: '',
                id: 'img1',
                img: this.data.data,
                info: true,
                size: 1,
                outputType: 'jpeg',
                canScale: true,
                autoCrop: true,
                // 只有自动截图开启 宽度高度才生效
                autoCropWidth: 200,
                autoCropHeight: 150,
                // 开启宽度和高度比例
                fixed: true,
                fixedNumber: [this.fixedNumberW, this.fixedNumberH]
            };
        }
    }
});

/***/ }),

/***/ 419:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(419)
__webpack_require__(420)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(417),
  /* template */
  __webpack_require__(423),
  /* scopeId */
  "data-v-b28b547c",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/components/picClippingBox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] picClippingBox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b28b547c", Component.options)
  } else {
    hotAPI.reload("data-v-b28b547c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('uploadBtn', {
    attrs: {
      "accept": "image/jpeg,image/gif,image/png"
    },
    on: {
      "on-selected": _vm.selecteMainImg
    }
  }), _vm._v(" "), _c('Modal', {
    staticClass: "cropper-modal",
    attrs: {
      "title": "选择图片",
      "width": "1000",
      "class-name": "cropper-modal-content",
      "styles": {
        'z-index': '1009'
      }
    },
    model: {
      value: (_vm.modal5),
      callback: function($$v) {
        _vm.modal5 = $$v
      },
      expression: "modal5"
    }
  }, [_c('div', {
    staticClass: "div1"
  }, [_c('vueCropper', {
    ref: "cropper",
    attrs: {
      "img": _vm.example2.img,
      "outputSize": _vm.example2.size,
      "outputType": _vm.example2.outputType,
      "info": _vm.example2.info,
      "canScale": _vm.example2.canScale,
      "autoCrop": _vm.example2.autoCrop,
      "autoCropWidth": _vm.example2.autoCropWidth,
      "autoCropHeight": _vm.example2.autoCropHeight,
      "fixed": _vm.example2.fixed,
      "fixedNumber": _vm.example2.fixedNumber
    }
  })], 1), _vm._v(" "), _c('div', {
    slot: "footer"
  }, [_c('Button', {
    attrs: {
      "type": "info",
      "size": "large"
    },
    on: {
      "click": _vm.finish
    }
  }, [_vm._v("确认裁剪")]), _vm._v(" "), _c('Button', {
    attrs: {
      "size": "large"
    },
    on: {
      "click": _vm.close
    }
  }, [_vm._v("取消")])], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-b28b547c", module.exports)
  }
}

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_uploadBtn_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_uploadBtn_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_uploadBtn_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_insurCompneys_json__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_insurCompneys_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mock_insurCompneys_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_picClippingBox_vue__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_picClippingBox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_picClippingBox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_tenant_uiConfigGlobal_js__ = __webpack_require__(477);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            agent: this.$store.getters.agent,
            info: {
                id: "",
                tid: this.$store.getters.tid,
                indexPic: "",
                solgn: "",
                firstTitle: "",
                firstAnnotation: "",
                firstUrl: "",
                secondTitle: "",
                secondAnnotaion: "",
                secondUrl: "",
                thirdTitle: "",
                thirdAnnotation: "",
                thirdUrl: "",
                forthTitle: "",
                forthAnnotation: "",
                forthUrl: "",
                firstIntroductionUrl: "",
                secondIntroductionUrl: "",
                thirdIntroductionUrl: "",
                forthIntroductionUrl: "",
                policyIds: []
            },
            lists: __WEBPACK_IMPORTED_MODULE_1__mock_insurCompneys_json___default.a,
            randomStr: "13124"
        };
    },
    mounted: function mounted() {
        console.log(this.agent);
        this.globalInfoGet();
    },

    components: {
        uploadBtn: __WEBPACK_IMPORTED_MODULE_0__components_uploadBtn_vue___default.a, picClippingBox: __WEBPACK_IMPORTED_MODULE_2__components_picClippingBox_vue___default.a
    },
    computed: {},
    methods: {
        imageSize: function imageSize(size) {
            if (size > 2 * 1024 * 1024) {
                this.$Message.warning({
                    content: "照片大小不能超过2M",
                    duration: 5
                });
                return false;
            } else {
                return true;
            }
        },
        imagenull: function imagenull(pic) {
            if (pic == "") {
                return false;
            } else {
                return true;
            }
        },
        getRandomStr: function getRandomStr() {
            this.randomStr = Math.random().toString(36).substr(2);
        },
        imageReload: function imageReload(img) {
            return img + "?ram=" + this.randomStr;
        },
        selecteMainImg: function selecteMainImg(image) {
            var _this = this;

            var opt = {
                imgData: image,
                agent: this.agent,
                type: "master",
                phoneNo: this.agent
            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_tenant_uiConfigGlobal_js__["a" /* uploadImage */])(opt).then(function (data) {
                _this.getRandomStr();
                _this.info.indexPic = __WEBPACK_IMPORTED_MODULE_3__api_tenant_uiConfigGlobal_js__["b" /* nodeRoot */] + data;
                console.log(__WEBPACK_IMPORTED_MODULE_3__api_tenant_uiConfigGlobal_js__["b" /* nodeRoot */] + data);
            }).catch(function (err) {
                _this.$Message.error("图片上传失败");
                console.log(err);
            });
        },
        introduceOne: function introduceOne(image) {
            var _this2 = this;

            // if(!this.imageSize(image.size)){return}
            var opt = {
                imgData: image,
                agent: this.agent,
                type: "int1",
                phoneNo: this.agent
            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_tenant_uiConfigGlobal_js__["a" /* uploadImage */])(opt).then(function (data) {
                _this2.getRandomStr();
                _this2.info.firstIntroductionUrl = __WEBPACK_IMPORTED_MODULE_3__api_tenant_uiConfigGlobal_js__["b" /* nodeRoot */] + data;
                console.log(__WEBPACK_IMPORTED_MODULE_3__api_tenant_uiConfigGlobal_js__["b" /* nodeRoot */] + data);
            }).catch(function (err) {
                _this2.$Message.error("图片上传失败");
                console.log(err);
            });
        },
        introduceTwo: function introduceTwo(image) {
            var _this3 = this;

            // if(!this.imageSize(image.size)){return}
            var opt = {
                imgData: image,
                agent: this.agent,
                type: "int2",
                phoneNo: this.agent
            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_tenant_uiConfigGlobal_js__["a" /* uploadImage */])(opt).then(function (data) {
                _this3.getRandomStr();
                _this3.info.secondIntroductionUrl = __WEBPACK_IMPORTED_MODULE_3__api_tenant_uiConfigGlobal_js__["b" /* nodeRoot */] + data;
                console.log(__WEBPACK_IMPORTED_MODULE_3__api_tenant_uiConfigGlobal_js__["b" /* nodeRoot */] + data);
            }).catch(function (err) {
                _this3.$Message.error("图片上传失败");
                console.log(err);
            });
        },
        introduceThree: function introduceThree(image) {
            var _this4 = this;

            // if(!this.imageSize(image.size)){return}
            var opt = {
                imgData: image,
                agent: this.agent,
                type: "int3",
                phoneNo: this.agent
            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_tenant_uiConfigGlobal_js__["a" /* uploadImage */])(opt).then(function (data) {
                _this4.getRandomStr();
                _this4.info.thirdIntroductionUrl = __WEBPACK_IMPORTED_MODULE_3__api_tenant_uiConfigGlobal_js__["b" /* nodeRoot */] + data;
                console.log(__WEBPACK_IMPORTED_MODULE_3__api_tenant_uiConfigGlobal_js__["b" /* nodeRoot */] + data);
            }).catch(function (err) {
                _this4.$Message.error("图片上传失败");
                console.log(err);
            });
        },
        introduceFour: function introduceFour(image) {
            var _this5 = this;

            // if(!this.imageSize(image.size)){return}
            var opt = {
                imgData: image,
                agent: this.agent,
                type: "int4",
                phoneNo: this.agent
            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_tenant_uiConfigGlobal_js__["a" /* uploadImage */])(opt).then(function (data) {
                _this5.getRandomStr();
                _this5.info.forthIntroductionUrl = __WEBPACK_IMPORTED_MODULE_3__api_tenant_uiConfigGlobal_js__["b" /* nodeRoot */] + data;
                console.log(__WEBPACK_IMPORTED_MODULE_3__api_tenant_uiConfigGlobal_js__["b" /* nodeRoot */] + data);
            }).catch(function (err) {
                _this5.$Message.error("图片上传失败");
                console.log(err);
            });
        },
        globalInfoGet: function globalInfoGet() {
            var _this6 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_tenant_uiConfigGlobal_js__["c" /* getGlobalInfo */])().then(function (data) {
                if (data.data) {
                    _this6.info = data.data;
                }
            });
        },
        judgePic: function judgePic(src) {

            if (src != "") {
                return false;
            } else {
                return true;
            }
        },
        saveGolbalConfig: function saveGolbalConfig() {
            var _this7 = this;

            if (!this.infoValid()) {
                return;
            }
            if (this.info.solgn.length >= 7) {
                var solgn = this.info.solgn;
                this.info.solgn = solgn.slice(0, parseInt(solgn.length / 2)) + '<br>' + solgn.slice(parseInt(solgn.length / 2));
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_tenant_uiConfigGlobal_js__["d" /* saveGlobalInfo */])(this.info).then(function (data) {
                _this7.$Message.success("保存成功");
            }).catch(function (err) {
                console.log(err);
            });
        },
        infoValid: function infoValid() {
            function urlTest(url) {
                return url.indexOf('http://') != 0 && url.indexOf('https://') != 0;
            }
            var firstUrl = this.info.firstUrl;
            var secondUrl = this.info.secondUrl;
            var thirdUrl = this.info.thirdUrl;
            var forthUrl = this.info.forthUrl;
            if (!this.info.indexPic) {
                this.$Message.warning("请上传主图");
                return false;
            } else if (!this.info.solgn) {
                this.$Message.warning("请输入SLOGEN文字");
                return false;
            } else if (!this.info.firstIntroductionUrl) {
                this.$Message.warning("请上传介绍栏1的图片");
                return false;
            } else if (!this.info.firstTitle) {
                this.$Message.warning("请输入介绍栏1的标题");
                return false;
            } else if (!this.info.firstAnnotation) {
                this.$Message.warning("请输入介绍栏1的注释");
                return false;
            } else if (firstUrl != null && firstUrl != "" && urlTest(firstUrl)) {
                this.$Message.warning("介绍栏1链接有误，应以'http://'或者'https://'开头");
                return false;
            } else if (!this.info.secondIntroductionUrl) {
                this.$Message.warning("请上传介绍栏2的图片");
                return false;
            } else if (!this.info.secondTitle) {
                this.$Message.warning("请输入介绍栏2的标题");
                return false;
            } else if (!this.info.secondAnnotaion) {
                this.$Message.warning("请输入介绍栏2的注释");
                return false;
            } else if (secondUrl != null && secondUrl != "" && urlTest(secondUrl)) {
                this.$Message.warning("介绍栏2链接有误，应以'http://'或者'https://'开头");
                return false;
            } else if (!this.info.thirdIntroductionUrl) {
                this.$Message.warning("请上传介绍栏3的图片");
                return false;
            } else if (!this.info.thirdTitle) {
                this.$Message.warning("请输入介绍栏3的标题");
                return false;
            } else if (!this.info.thirdAnnotation) {
                this.$Message.warning("请输入介绍栏3的注释");
                return false;
            } else if (thirdUrl != null && thirdUrl != "" && urlTest(thirdUrl)) {
                this.$Message.warning("介绍栏3链接有误，应以'http://'或者'https://'开头");
                return false;
            } else if (!this.info.forthIntroductionUrl) {
                this.$Message.warning("请上传介绍栏4的图片");
                return false;
            } else if (!this.info.forthTitle) {
                this.$Message.warning("请输入介绍栏4的标题");
                return false;
            } else if (!this.info.forthAnnotation) {
                this.$Message.warning("请输入介绍栏4的注释");
                return false;
            } else if (forthUrl != null && forthUrl != "" && urlTest(forthUrl)) {
                this.$Message.warning("介绍栏4链接有误，应以'http://'或者'https://'开头");
                return false;
            } else if (this.info.policyIds.length == 0) {
                this.$Message.warning("至少要选择一个保险公司");
                return false;
            } else {
                return true;
            }
        }
    }
});

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return nodeRoot; });
/* harmony export (immutable) */ __webpack_exports__["c"] = getGlobalInfo;
/* harmony export (immutable) */ __webpack_exports__["d"] = saveGlobalInfo;
/* harmony export (immutable) */ __webpack_exports__["a"] = uploadImage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_root__ = __webpack_require__(141);



var javacore = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].javacore;

var nodeRoot = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].noderoot;
/* 获取配置信息*/
function getGlobalInfo() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/tInterface/global/get",
        data: data
    });
}
// 保存配置信息
function saveGlobalInfo(opt) {
    var data = opt;
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "tInterface/global/saveOrUpd",
        data: data
    });
}
// 上传图片
function uploadImage(opt) {
    var data = {
        imgData: opt.imgData,
        agent: opt.agent,
        type: opt.type,
        phoneNo: opt.phoneNo
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: nodeRoot,
        url: "/img/saveIdCardImage",
        data: data
    });
}

/***/ }),

/***/ 490:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-content"
  }, [_c('div', {
    staticClass: "page-header"
  }, [_c('h2', [_vm._v("页面配置")]), _vm._v(" "), _c('Alert', {
    attrs: {
      "type": "warning"
    }
  }, [_vm._v("请完善以下信息，以便完成您用户端页面配置")])], 1), _vm._v(" "), _c('Row', {
    staticClass: "page-row page-noBorder",
    attrs: {
      "gutter": 30,
      "type": "flex",
      "align": "middle"
    }
  }, [_c('Col', [_c('b', [_vm._v("主图：")])]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "5"
    }
  }, [_c('picClippingBox', {
    attrs: {
      "fixedNumberW": 5,
      "fixedNumberH": 2
    },
    on: {
      "imgCropper": _vm.selecteMainImg
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "10px",
      "display": "inline-block"
    }
  }, [_vm._v("上传主图照片(尺寸1080x500）")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "border": "1px dashed #ddd",
      "height": "100px",
      "line-height": "100px"
    }
  }, [_c('img', {
    staticStyle: {
      "height": "100%"
    },
    attrs: {
      "src": _vm.imageReload(_vm.info.indexPic)
    }
  }), _vm._v(" "), (_vm.judgePic(this.info.indexPic)) ? _c('span', {
    staticStyle: {
      "margin-left": "20px"
    }
  }, [_vm._v("暂无图片")]) : _vm._e()]), _vm._v(" "), _c('Row', {
    staticClass: "page-row page-border",
    attrs: {
      "gutter": 30,
      "type": "flex",
      "align": "middle"
    }
  }, [_c('Col', {
    attrs: {
      "span": "20"
    }
  }, [_c('Form', [_c('Form-item', {
    staticStyle: {
      "margin-bottom": "0"
    },
    attrs: {
      "label": "slogen文字",
      "required": true
    }
  }, [_c('span', {
    staticStyle: {
      "color": "#2d8cf0"
    }
  }, [_vm._v("（6-14字 偶数slogen代表性文字,超过七个字会自动换行）")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "maxlength": 14,
      "rows": 1
    },
    model: {
      value: (_vm.info.solgn),
      callback: function($$v) {
        _vm.info.solgn = $$v
      },
      expression: "info.solgn"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('Row', {
    staticClass: "page-row page-noBorder",
    attrs: {
      "gutter": 30
    }
  }, [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Row', {
    attrs: {
      "gutter": 30,
      "type": "flex",
      "align": "middle"
    }
  }, [_c('Col', [_c('b', [_vm._v("介绍栏1：")])]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "10"
    }
  }, [_c('picClippingBox', {
    attrs: {
      "fixedNumberW": 13,
      "fixedNumberH": 10
    },
    on: {
      "imgCropper": _vm.introduceOne
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "10px",
      "display": "inline-block"
    }
  }, [_vm._v("上传介绍照片(尺寸500x500）")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "border": "1px dashed #ddd",
      "height": "100px"
    }
  }, [_c('img', {
    staticStyle: {
      "height": "100%",
      "line-height": "100px"
    },
    attrs: {
      "src": _vm.imageReload(_vm.info.firstIntroductionUrl)
    }
  }), _vm._v(" "), (_vm.judgePic(this.info.firstIntroductionUrl)) ? _c('span', {
    staticStyle: {
      "margin-left": "20px"
    }
  }, [_vm._v("暂无图片")]) : _vm._e()]), _vm._v(" "), _c('Row', {
    staticClass: "page-row page-noBorder",
    attrs: {
      "gutter": 16,
      "type": "flex",
      "align": "middle"
    }
  }, [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form', [_c('Form-item', {
    staticStyle: {
      "margin-bottom": "0"
    },
    attrs: {
      "label": "标题文字",
      "required": true
    }
  }, [_c('Input', {
    attrs: {
      "type": "textarea",
      "maxlength": 14,
      "rows": 1
    },
    model: {
      value: (_vm.info.firstTitle),
      callback: function($$v) {
        _vm.info.firstTitle = $$v
      },
      expression: "info.firstTitle"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form', [_c('Form-item', {
    staticStyle: {
      "margin-bottom": "0"
    },
    attrs: {
      "label": "注释文字",
      "required": true
    }
  }, [_c('Input', {
    attrs: {
      "type": "textarea",
      "maxlength": 14,
      "rows": 1
    },
    model: {
      value: (_vm.info.firstAnnotation),
      callback: function($$v) {
        _vm.info.firstAnnotation = $$v
      },
      expression: "info.firstAnnotation"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('Row', {
    staticClass: "page-row page-noBorder",
    attrs: {
      "gutter": 16,
      "type": "flex",
      "align": "middle"
    }
  }, [_c('Col', {
    attrs: {
      "span": "24"
    }
  }, [_c('Form', [_c('Form-item', {
    staticStyle: {
      "margin-bottom": "0"
    },
    attrs: {
      "label": "跳转链接"
    }
  }, [_c('Input', {
    attrs: {
      "type": "textarea",
      "rows": 1
    },
    model: {
      value: (_vm.info.firstUrl),
      callback: function($$v) {
        _vm.info.firstUrl = $$v
      },
      expression: "info.firstUrl"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Row', {
    attrs: {
      "gutter": 30,
      "type": "flex",
      "align": "middle"
    }
  }, [_c('Col', [_c('b', [_vm._v("介绍栏2：")])]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "10"
    }
  }, [_c('picClippingBox', {
    attrs: {
      "fixedNumberW": 13,
      "fixedNumberH": 10
    },
    on: {
      "imgCropper": _vm.introduceTwo
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "10px",
      "display": "inline-block"
    }
  }, [_vm._v("上传介绍照片(尺寸500x500）")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "border": "1px dashed #ddd",
      "height": "100px"
    }
  }, [_c('img', {
    staticStyle: {
      "height": "100%",
      "line-height": "100px"
    },
    attrs: {
      "src": _vm.imageReload(_vm.info.secondIntroductionUrl)
    }
  }), _vm._v(" "), (_vm.judgePic(this.info.secondIntroductionUrl)) ? _c('span', {
    staticStyle: {
      "margin-left": "20px"
    }
  }, [_vm._v("暂无图片")]) : _vm._e()]), _vm._v(" "), _c('Row', {
    staticClass: "page-row page-noBorder",
    attrs: {
      "gutter": 16,
      "type": "flex",
      "align": "middle"
    }
  }, [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form', [_c('Form-item', {
    staticStyle: {
      "margin-bottom": "0"
    },
    attrs: {
      "label": "标题文字",
      "required": true
    }
  }, [_c('Input', {
    attrs: {
      "type": "textarea",
      "maxlength": 14,
      "rows": 1
    },
    model: {
      value: (_vm.info.secondTitle),
      callback: function($$v) {
        _vm.info.secondTitle = $$v
      },
      expression: "info.secondTitle"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form', [_c('Form-item', {
    staticStyle: {
      "margin-bottom": "0"
    },
    attrs: {
      "label": "注释文字",
      "required": true
    }
  }, [_c('Input', {
    attrs: {
      "type": "textarea",
      "maxlength": 14,
      "rows": 1
    },
    model: {
      value: (_vm.info.secondAnnotaion),
      callback: function($$v) {
        _vm.info.secondAnnotaion = $$v
      },
      expression: "info.secondAnnotaion"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('Row', {
    staticClass: "page-row page-noBorder",
    attrs: {
      "gutter": 16,
      "type": "flex",
      "align": "middle"
    }
  }, [_c('Col', {
    attrs: {
      "span": "24"
    }
  }, [_c('Form', [_c('Form-item', {
    staticStyle: {
      "margin-bottom": "0"
    },
    attrs: {
      "label": "跳转链接"
    }
  }, [_c('Input', {
    attrs: {
      "type": "textarea",
      "rows": 1
    },
    model: {
      value: (_vm.info.secondUrl),
      callback: function($$v) {
        _vm.info.secondUrl = $$v
      },
      expression: "info.secondUrl"
    }
  })], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('Row', {
    staticClass: "page-row page-border",
    attrs: {
      "gutter": 30
    }
  }, [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Row', {
    attrs: {
      "gutter": 30,
      "type": "flex",
      "align": "middle"
    }
  }, [_c('Col', [_c('b', [_vm._v("介绍栏3：")])]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "10"
    }
  }, [_c('picClippingBox', {
    attrs: {
      "fixedNumberW": 13,
      "fixedNumberH": 10
    },
    on: {
      "imgCropper": _vm.introduceThree
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "10px",
      "display": "inline-block"
    }
  }, [_vm._v("上传介绍照片(尺寸500x500）")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "border": "1px dashed #ddd",
      "height": "100px"
    }
  }, [_c('img', {
    staticStyle: {
      "height": "100%",
      "line-height": "100px"
    },
    attrs: {
      "src": _vm.imageReload(_vm.info.thirdIntroductionUrl)
    }
  }), _vm._v(" "), (_vm.judgePic(this.info.thirdIntroductionUrl)) ? _c('span', {
    staticStyle: {
      "margin-left": "20px"
    }
  }, [_vm._v("暂无图片")]) : _vm._e()]), _vm._v(" "), _c('Row', {
    staticClass: "page-row page-noBorder",
    attrs: {
      "gutter": 16,
      "type": "flex",
      "align": "middle"
    }
  }, [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form', [_c('Form-item', {
    staticStyle: {
      "margin-bottom": "0"
    },
    attrs: {
      "label": "标题文字",
      "required": true
    }
  }, [_c('Input', {
    attrs: {
      "type": "textarea",
      "maxlength": 14,
      "rows": 1
    },
    model: {
      value: (_vm.info.thirdTitle),
      callback: function($$v) {
        _vm.info.thirdTitle = $$v
      },
      expression: "info.thirdTitle"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form', [_c('Form-item', {
    staticStyle: {
      "margin-bottom": "0"
    },
    attrs: {
      "label": "注释文字",
      "required": true
    }
  }, [_c('Input', {
    attrs: {
      "type": "textarea",
      "maxlength": 14,
      "rows": 1
    },
    model: {
      value: (_vm.info.thirdAnnotation),
      callback: function($$v) {
        _vm.info.thirdAnnotation = $$v
      },
      expression: "info.thirdAnnotation"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('Row', {
    staticClass: "page-row page-noBorder",
    attrs: {
      "gutter": 16,
      "type": "flex",
      "align": "middle"
    }
  }, [_c('Col', {
    attrs: {
      "span": "24"
    }
  }, [_c('Form', [_c('Form-item', {
    staticStyle: {
      "margin-bottom": "0"
    },
    attrs: {
      "label": "跳转链接"
    }
  }, [_c('Input', {
    attrs: {
      "type": "textarea",
      "rows": 1
    },
    model: {
      value: (_vm.info.thirdUrl),
      callback: function($$v) {
        _vm.info.thirdUrl = $$v
      },
      expression: "info.thirdUrl"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Row', {
    attrs: {
      "gutter": 30,
      "type": "flex",
      "align": "middle"
    }
  }, [_c('Col', [_c('b', [_vm._v("介绍栏4：")])]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "10"
    }
  }, [_c('picClippingBox', {
    attrs: {
      "fixedNumberW": 13,
      "fixedNumberH": 10
    },
    on: {
      "imgCropper": _vm.introduceFour
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "10px",
      "display": "inline-block"
    }
  }, [_vm._v("上传介绍照片(尺寸500x500）")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "border": "1px dashed #ddd",
      "height": "100px"
    }
  }, [_c('img', {
    staticStyle: {
      "height": "100%",
      "line-height": "100px"
    },
    attrs: {
      "src": _vm.imageReload(_vm.info.forthIntroductionUrl)
    }
  }), _vm._v(" "), (_vm.judgePic(this.info.forthIntroductionUrl)) ? _c('span', {
    staticStyle: {
      "margin-left": "20px"
    }
  }, [_vm._v("暂无图片")]) : _vm._e()]), _vm._v(" "), _c('Row', {
    staticClass: "page-row page-noBorder",
    attrs: {
      "gutter": 16,
      "type": "flex",
      "align": "middle"
    }
  }, [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form', [_c('Form-item', {
    staticStyle: {
      "margin-bottom": "0"
    },
    attrs: {
      "label": "标题文字",
      "required": true
    }
  }, [_c('Input', {
    attrs: {
      "type": "textarea",
      "maxlength": 14,
      "rows": 1
    },
    model: {
      value: (_vm.info.forthTitle),
      callback: function($$v) {
        _vm.info.forthTitle = $$v
      },
      expression: "info.forthTitle"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form', [_c('Form-item', {
    staticStyle: {
      "margin-bottom": "0"
    },
    attrs: {
      "label": "注释文字",
      "required": true
    }
  }, [_c('Input', {
    attrs: {
      "type": "textarea",
      "maxlength": 14,
      "rows": 1
    },
    model: {
      value: (_vm.info.forthAnnotation),
      callback: function($$v) {
        _vm.info.forthAnnotation = $$v
      },
      expression: "info.forthAnnotation"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('Row', {
    staticClass: "page-row page-noBorder",
    attrs: {
      "gutter": 16,
      "type": "flex",
      "align": "middle"
    }
  }, [_c('Col', {
    attrs: {
      "span": "24"
    }
  }, [_c('Form', [_c('Form-item', {
    staticStyle: {
      "margin-bottom": "0"
    },
    attrs: {
      "label": "跳转链接"
    }
  }, [_c('Input', {
    attrs: {
      "type": "textarea",
      "rows": 1
    },
    model: {
      value: (_vm.info.forthUrl),
      callback: function($$v) {
        _vm.info.forthUrl = $$v
      },
      expression: "info.forthUrl"
    }
  })], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('Row', {
    staticClass: "page-row page-noBorder",
    attrs: {
      "gutter": 30,
      "type": "flex",
      "align": "middle"
    }
  }, [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form', [_c('Form-item', {
    staticStyle: {
      "margin-bottom": "0"
    }
  }, [_c('b', [_vm._v("合作保险公司：")]), _vm._v(" "), _c('Select', {
    attrs: {
      "multiple": ""
    },
    model: {
      value: (_vm.info.policyIds),
      callback: function($$v) {
        _vm.info.policyIds = $$v
      },
      expression: "info.policyIds"
    }
  }, _vm._l((_vm.lists), function(item, index) {
    return _c('Option', {
      key: index,
      attrs: {
        "value": item.code
      }
    }, [_vm._v(_vm._s(item.name))])
  }))], 1)], 1)], 1)], 1), _vm._v(" "), _c('Row', {
    staticClass: "page-row page-noBorder",
    staticStyle: {
      "margin-bottom": "150px"
    },
    attrs: {
      "gutter": 30,
      "type": "flex",
      "align": "middle"
    }
  }, [_c('Col', {
    attrs: {
      "span": "4"
    }
  }, [_c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveGolbalConfig
    }
  }, [_vm._v("　保存　")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2a425e47", module.exports)
  }
}

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

module.exports = [{"code":"100","name":"安邦车险"},{"code":"101","name":"安联车险"},{"code":"102","name":"亚太财险"},{"code":"103","name":"众安车险"},{"code":"104","name":"太平洋保险"},{"code":"106","name":"阳光财险"},{"code":"107","name":"人保财险"},{"code":"108","name":"大地保险"},{"code":"109","name":"天安财险"},{"code":"110","name":"太平财险"},{"code":"111","name":"中华联合"},{"code":"112","name":"安盛天平"},{"code":"113","name":"紫金财险"},{"code":"114","name":"永安财险"},{"code":"115","name":"华安财险"},{"code":"117","name":"安心财险"},{"code":"118","name":"平安财险"},{"code":"119","name":"锦泰财险"},{"code":"120","name":"安华财险"},{"code":"121","name":"利宝财险"},{"code":"122","name":"信达财险"},{"code":"124","name":"安诚保险"}]

/***/ })

});
//# sourceMappingURL=3.chunk.js.map