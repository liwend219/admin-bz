webpackJsonp([1],{

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(493)

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(444),
  /* template */
  __webpack_require__(526),
  /* scopeId */
  "data-v-353b6098",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/views/products/insurProList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] insurProList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-353b6098", Component.options)
  } else {
    hotAPI.reload("data-v-353b6098", Component.options)
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

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microCities_json__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microCities_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microCities_json__);
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        value: Array
    },
    data: function data() {
        return {
            data: []
        };
    },
    mounted: function mounted() {
        this.data = __WEBPACK_IMPORTED_MODULE_0__microCities_json___default.a;
    },

    methods: {
        citySelected: function citySelected(data) {
            this.$emit('input', data);
            this.$emit("on-change", data);
        }
    }
});

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

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(97)(
  /* script */
  __webpack_require__(416),
  /* template */
  __webpack_require__(424),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/ops/Desktop/workspace/admin-bz/src/components/microCityPicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] microCityPicker.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c9ee676c", Component.options)
  } else {
    hotAPI.reload("data-v-c9ee676c", Component.options)
  }
})()}

module.exports = Component.exports


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

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Cascader', {
    attrs: {
      "change-on-select": "",
      "value": _vm.value,
      "data": _vm.data,
      "trigger": "click"
    },
    on: {
      "on-change": _vm.citySelected
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c9ee676c", module.exports)
  }
}

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

module.exports = [{"value":"110000","label":"北京市","children":[{"value":"110000","label":"北京市"}]},{"value":"120000","label":"天津市","children":[{"value":"120000","label":"天津市"}]},{"value":"130000","label":"河北省","children":[{"value":"130100","label":"石家庄市"},{"value":"130200","label":"唐山市"},{"value":"130300","label":"秦皇岛市"},{"value":"130400","label":"邯郸市"},{"value":"130500","label":"邢台市"},{"value":"130600","label":"保定市"},{"value":"130700","label":"张家口市"},{"value":"130800","label":"承德市"},{"value":"130900","label":"沧州市"},{"value":"131000","label":"廊坊市"},{"value":"131100","label":"衡水市"},{"value":"139000","label":"省直辖县级行政区划"}]},{"value":"140000","label":"山西省","children":[{"value":"140100","label":"太原市"},{"value":"140200","label":"大同市"},{"value":"140300","label":"阳泉市"},{"value":"140400","label":"长治市"},{"value":"140500","label":"晋城市"},{"value":"140600","label":"朔州市"},{"value":"140700","label":"晋中市"},{"value":"140800","label":"运城市"},{"value":"140900","label":"忻州市"},{"value":"141000","label":"临汾市"},{"value":"141100","label":"吕梁市"}]},{"value":"150000","label":"内蒙古自治区","children":[{"value":"150100","label":"呼和浩特市"},{"value":"150200","label":"包头市"},{"value":"150300","label":"乌海市"},{"value":"150400","label":"赤峰市"},{"value":"150500","label":"通辽市"},{"value":"150600","label":"鄂尔多斯市"},{"value":"150700","label":"呼伦贝尔市"},{"value":"150800","label":"巴彦淖尔市"},{"value":"150900","label":"乌兰察布市"},{"value":"152200","label":"兴安盟"},{"value":"152500","label":"锡林郭勒盟"},{"value":"152900","label":"阿拉善盟"}]},{"value":"210000","label":"辽宁省","children":[{"value":"210100","label":"沈阳市"},{"value":"210200","label":"大连市"},{"value":"210300","label":"鞍山市"},{"value":"210400","label":"抚顺市"},{"value":"210500","label":"本溪市"},{"value":"210600","label":"丹东市"},{"value":"210700","label":"锦州市"},{"value":"210800","label":"营口市"},{"value":"210900","label":"阜新市"},{"value":"211000","label":"辽阳市"},{"value":"211100","label":"盘锦市"},{"value":"211200","label":"铁岭市"},{"value":"211300","label":"朝阳市"},{"value":"211400","label":"葫芦岛市"}]},{"value":"220000","label":"吉林省","children":[{"value":"220100","label":"长春市"},{"value":"220200","label":"吉林市"},{"value":"220300","label":"四平市"},{"value":"220400","label":"辽源市"},{"value":"220500","label":"通化市"},{"value":"220600","label":"白山市"},{"value":"220700","label":"松原市"},{"value":"220800","label":"白城市"},{"value":"222400","label":"延边朝鲜族自治州"}]},{"value":"230000","label":"黑龙江省","children":[{"value":"230100","label":"哈尔滨市"},{"value":"230200","label":"齐齐哈尔市"},{"value":"230300","label":"鸡西市"},{"value":"230400","label":"鹤岗市"},{"value":"230500","label":"双鸭山市"},{"value":"230600","label":"大庆市"},{"value":"230700","label":"伊春市"},{"value":"230800","label":"佳木斯市"},{"value":"230900","label":"七台河市"},{"value":"231000","label":"牡丹江市"},{"value":"231100","label":"黑河市"},{"value":"231200","label":"绥化市"},{"value":"232700","label":"大兴安岭地区"}]},{"value":"310000","label":"上海市","children":[{"value":"310000","label":"上海市"}]},{"value":"320000","label":"江苏省","children":[{"value":"320100","label":"南京市"},{"value":"320200","label":"无锡市"},{"value":"320300","label":"徐州市"},{"value":"320400","label":"常州市"},{"value":"320500","label":"苏州市"},{"value":"320600","label":"南通市"},{"value":"320700","label":"连云港市"},{"value":"320800","label":"淮安市"},{"value":"320900","label":"盐城市"},{"value":"321000","label":"扬州市"},{"value":"321100","label":"镇江市"},{"value":"321200","label":"泰州市"},{"value":"321300","label":"宿迁市"}]},{"value":"330000","label":"浙江省","children":[{"value":"330100","label":"杭州市"},{"value":"330200","label":"宁波市"},{"value":"330300","label":"温州市"},{"value":"330400","label":"嘉兴市"},{"value":"330500","label":"湖州市"},{"value":"330600","label":"绍兴市"},{"value":"330700","label":"金华市"},{"value":"330800","label":"衢州市"},{"value":"330900","label":"舟山市"},{"value":"331000","label":"台州市"},{"value":"331100","label":"丽水市"}]},{"value":"340000","label":"安徽省","children":[{"value":"340100","label":"合肥市"},{"value":"340200","label":"芜湖市"},{"value":"340300","label":"蚌埠市"},{"value":"340400","label":"淮南市"},{"value":"340500","label":"马鞍山市"},{"value":"340600","label":"淮北市"},{"value":"340700","label":"铜陵市"},{"value":"340800","label":"安庆市"},{"value":"341000","label":"黄山市"},{"value":"341100","label":"滁州市"},{"value":"341200","label":"阜阳市"},{"value":"341300","label":"宿州市"},{"value":"341500","label":"六安市"},{"value":"341600","label":"亳州市"},{"value":"341700","label":"池州市"},{"value":"341800","label":"宣城市"}]},{"value":"350000","label":"福建省","children":[{"value":"350100","label":"福州市"},{"value":"350200","label":"厦门市"},{"value":"350300","label":"莆田市"},{"value":"350400","label":"三明市"},{"value":"350500","label":"泉州市"},{"value":"350600","label":"漳州市"},{"value":"350700","label":"南平市"},{"value":"350800","label":"龙岩市"},{"value":"350900","label":"宁德市"}]},{"value":"360000","label":"江西省","children":[{"value":"360100","label":"南昌市"},{"value":"360200","label":"景德镇市"},{"value":"360300","label":"萍乡市"},{"value":"360400","label":"九江市"},{"value":"360500","label":"新余市"},{"value":"360600","label":"鹰潭市"},{"value":"360700","label":"赣州市"},{"value":"360800","label":"吉安市"},{"value":"360900","label":"宜春市"},{"value":"361000","label":"抚州市"},{"value":"361100","label":"上饶市"}]},{"value":"370000","label":"山东省","children":[{"value":"370100","label":"济南市"},{"value":"370200","label":"青岛市"},{"value":"370300","label":"淄博市"},{"value":"370400","label":"枣庄市"},{"value":"370500","label":"东营市"},{"value":"370600","label":"烟台市"},{"value":"370700","label":"潍坊市"},{"value":"370800","label":"济宁市"},{"value":"370900","label":"泰安市"},{"value":"371000","label":"威海市"},{"value":"371100","label":"日照市"},{"value":"371200","label":"莱芜市"},{"value":"371300","label":"临沂市"},{"value":"371400","label":"德州市"},{"value":"371500","label":"聊城市"},{"value":"371600","label":"滨州市"},{"value":"371700","label":"菏泽市"}]},{"value":"410000","label":"河南省","children":[{"value":"410100","label":"郑州市"},{"value":"410200","label":"开封市"},{"value":"410300","label":"洛阳市"},{"value":"410400","label":"平顶山市"},{"value":"410500","label":"安阳市"},{"value":"410600","label":"鹤壁市"},{"value":"410700","label":"新乡市"},{"value":"410800","label":"焦作市"},{"value":"410900","label":"濮阳市"},{"value":"411000","label":"许昌市"},{"value":"411100","label":"漯河市"},{"value":"411200","label":"三门峡市"},{"value":"411300","label":"南阳市"},{"value":"411400","label":"商丘市"},{"value":"411500","label":"信阳市"},{"value":"411600","label":"周口市"},{"value":"411700","label":"驻马店市"},{"value":"419000","label":"省直辖县级行政区划"}]},{"value":"420000","label":"湖北省","children":[{"value":"420100","label":"武汉市"},{"value":"420200","label":"黄石市"},{"value":"420300","label":"十堰市"},{"value":"420500","label":"宜昌市"},{"value":"420600","label":"襄阳市"},{"value":"420700","label":"鄂州市"},{"value":"420800","label":"荆门市"},{"value":"420900","label":"孝感市"},{"value":"421000","label":"荆州市"},{"value":"421100","label":"黄冈市"},{"value":"421200","label":"咸宁市"},{"value":"421300","label":"随州市"},{"value":"422800","label":"恩施土家族苗族自治州"},{"value":"429000","label":"省直辖县级行政区划"}]},{"value":"430000","label":"湖南省","children":[{"value":"430100","label":"长沙市"},{"value":"430200","label":"株洲市"},{"value":"430300","label":"湘潭市"},{"value":"430400","label":"衡阳市"},{"value":"430500","label":"邵阳市"},{"value":"430600","label":"岳阳市"},{"value":"430700","label":"常德市"},{"value":"430800","label":"张家界市"},{"value":"430900","label":"益阳市"},{"value":"431000","label":"郴州市"},{"value":"431100","label":"永州市"},{"value":"431200","label":"怀化市"},{"value":"431300","label":"娄底市"},{"value":"433100","label":"湘西土家族苗族自治州"}]},{"value":"440000","label":"广东省","children":[{"value":"440100","label":"广州市"},{"value":"440200","label":"韶关市"},{"value":"440300","label":"深圳市"},{"value":"440400","label":"珠海市"},{"value":"440500","label":"汕头市"},{"value":"440600","label":"佛山市"},{"value":"440700","label":"江门市"},{"value":"440800","label":"湛江市"},{"value":"440900","label":"茂名市"},{"value":"441200","label":"肇庆市"},{"value":"441300","label":"惠州市"},{"value":"441400","label":"梅州市"},{"value":"441500","label":"汕尾市"},{"value":"441600","label":"河源市"},{"value":"441700","label":"阳江市"},{"value":"441800","label":"清远市"},{"value":"441900","label":"东莞市"},{"value":"442000","label":"中山市"},{"value":"445100","label":"潮州市"},{"value":"445200","label":"揭阳市"},{"value":"445300","label":"云浮市"}]},{"value":"450000","label":"广西壮族自治区","children":[{"value":"450100","label":"南宁市"},{"value":"450200","label":"柳州市"},{"value":"450300","label":"桂林市"},{"value":"450400","label":"梧州市"},{"value":"450500","label":"北海市"},{"value":"450600","label":"防城港市"},{"value":"450700","label":"钦州市"},{"value":"450800","label":"贵港市"},{"value":"450900","label":"玉林市"},{"value":"451000","label":"百色市"},{"value":"451100","label":"贺州市"},{"value":"451200","label":"河池市"},{"value":"451300","label":"来宾市"},{"value":"451400","label":"崇左市"}]},{"value":"460000","label":"海南省","children":[{"value":"460100","label":"海口市"},{"value":"460200","label":"三亚市"},{"value":"460300","label":"三沙市"},{"value":"460400","label":"儋州市"},{"value":"469000","label":"省直辖县级行政区划"}]},{"value":"500000","label":"重庆市","children":[{"value":"500000","label":"重庆市"},{"value":"500200","label":"县"}]},{"value":"510000","label":"四川省","children":[{"value":"510100","label":"成都市"},{"value":"510300","label":"自贡市"},{"value":"510400","label":"攀枝花市"},{"value":"510500","label":"泸州市"},{"value":"510600","label":"德阳市"},{"value":"510700","label":"绵阳市"},{"value":"510800","label":"广元市"},{"value":"510900","label":"遂宁市"},{"value":"511000","label":"内江市"},{"value":"511100","label":"乐山市"},{"value":"511300","label":"南充市"},{"value":"511400","label":"眉山市"},{"value":"511500","label":"宜宾市"},{"value":"511600","label":"广安市"},{"value":"511700","label":"达州市"},{"value":"511800","label":"雅安市"},{"value":"511900","label":"巴中市"},{"value":"512000","label":"资阳市"},{"value":"513200","label":"阿坝藏族羌族自治州"},{"value":"513300","label":"甘孜藏族自治州"},{"value":"513400","label":"凉山彝族自治州"}]},{"value":"520000","label":"贵州省","children":[{"value":"520100","label":"贵阳市"},{"value":"520200","label":"六盘水市"},{"value":"520300","label":"遵义市"},{"value":"520400","label":"安顺市"},{"value":"520500","label":"毕节市"},{"value":"520600","label":"铜仁市"},{"value":"522300","label":"黔西南布依族苗族自治州"},{"value":"522600","label":"黔东南苗族侗族自治州"},{"value":"522700","label":"黔南布依族苗族自治州"}]},{"value":"530000","label":"云南省","children":[{"value":"530100","label":"昆明市"},{"value":"530300","label":"曲靖市"},{"value":"530400","label":"玉溪市"},{"value":"530500","label":"保山市"},{"value":"530600","label":"昭通市"},{"value":"530700","label":"丽江市"},{"value":"530800","label":"普洱市"},{"value":"530900","label":"临沧市"},{"value":"532300","label":"楚雄彝族自治州"},{"value":"532500","label":"红河哈尼族彝族自治州"},{"value":"532600","label":"文山壮族苗族自治州"},{"value":"532800","label":"西双版纳傣族自治州"},{"value":"532900","label":"大理白族自治州"},{"value":"533100","label":"德宏傣族景颇族自治州"},{"value":"533300","label":"怒江傈僳族自治州"},{"value":"533400","label":"迪庆藏族自治州"}]},{"value":"540000","label":"西藏自治区","children":[{"value":"540100","label":"拉萨市"},{"value":"540200","label":"日喀则市"},{"value":"540300","label":"昌都市"},{"value":"540400","label":"林芝市"},{"value":"540500","label":"山南市"},{"value":"542400","label":"那曲地区"},{"value":"542500","label":"阿里地区"}]},{"value":"610000","label":"陕西省","children":[{"value":"610100","label":"西安市"},{"value":"610200","label":"铜川市"},{"value":"610300","label":"宝鸡市"},{"value":"610400","label":"咸阳市"},{"value":"610500","label":"渭南市"},{"value":"610600","label":"延安市"},{"value":"610700","label":"汉中市"},{"value":"610800","label":"榆林市"},{"value":"610900","label":"安康市"},{"value":"611000","label":"商洛市"}]},{"value":"620000","label":"甘肃省","children":[{"value":"620100","label":"兰州市"},{"value":"620200","label":"嘉峪关市"},{"value":"620300","label":"金昌市"},{"value":"620400","label":"白银市"},{"value":"620500","label":"天水市"},{"value":"620600","label":"武威市"},{"value":"620700","label":"张掖市"},{"value":"620800","label":"平凉市"},{"value":"620900","label":"酒泉市"},{"value":"621000","label":"庆阳市"},{"value":"621100","label":"定西市"},{"value":"621200","label":"陇南市"},{"value":"622900","label":"临夏回族自治州"},{"value":"623000","label":"甘南藏族自治州"}]},{"value":"630000","label":"青海省","children":[{"value":"630100","label":"西宁市"},{"value":"630200","label":"海东市"},{"value":"632200","label":"海北藏族自治州"},{"value":"632300","label":"黄南藏族自治州"},{"value":"632500","label":"海南藏族自治州"},{"value":"632600","label":"果洛藏族自治州"},{"value":"632700","label":"玉树藏族自治州"},{"value":"632800","label":"海西蒙古族藏族自治州"}]},{"value":"640000","label":"宁夏回族自治区","children":[{"value":"640100","label":"银川市"},{"value":"640200","label":"石嘴山市"},{"value":"640300","label":"吴忠市"},{"value":"640400","label":"固原市"},{"value":"640500","label":"中卫市"}]},{"value":"650000","label":"新疆维吾尔自治区","children":[{"value":"650100","label":"乌鲁木齐市"},{"value":"650200","label":"克拉玛依市"},{"value":"650400","label":"吐鲁番市"},{"value":"650500","label":"哈密市"},{"value":"652300","label":"昌吉回族自治州"},{"value":"652700","label":"博尔塔拉蒙古自治州"},{"value":"652800","label":"巴音郭楞蒙古自治州"},{"value":"652900","label":"阿克苏地区"},{"value":"653000","label":"克孜勒苏柯尔克孜自治州"},{"value":"653100","label":"喀什地区"},{"value":"653200","label":"和田地区"},{"value":"654000","label":"伊犁哈萨克自治州"},{"value":"654200","label":"塔城地区"},{"value":"654300","label":"阿勒泰地区"},{"value":"659000","label":"自治区直辖县级行政区划"}]},{"value":"710000","label":"台湾省","children":[]},{"value":"810000","label":"香港特别行政区","children":[]},{"value":"820000","label":"澳门特别行政区","children":[]}]

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_filters_js__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_microCityPicker_vue__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_microCityPicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_microCityPicker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_uploadBtn_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_uploadBtn_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_uploadBtn_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_products_lifeInsurance_js__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_iview__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_iview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_picClippingBox_vue__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_picClippingBox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_picClippingBox_vue__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: {
        microCityPicker: __WEBPACK_IMPORTED_MODULE_1__components_microCityPicker_vue___default.a,
        uploadBtn: __WEBPACK_IMPORTED_MODULE_2__components_uploadBtn_vue___default.a,
        picClippingBox: __WEBPACK_IMPORTED_MODULE_5__components_picClippingBox_vue___default.a
    },
    data: function data() {
        return {
            agent: this.$store.getters.agent,
            categoryList: [],
            queryData: {
                pageNo: 1,
                pageSize: 20,
                categoryId: "",
                title: "",
                status: "",
                effectStartTime: ""
            },
            columns: [{ title: "产品名称", key: "title", align: "center" }, { title: "产品分类", key: "categoryName", align: "center" }, { title: "上线时间", key: "effectStartTime", align: "center" }, {
                title: "备注",
                key: "note",
                align: "center",
                render: function render(h, params) {
                    return h('a', {
                        on: {
                            click: function click() {
                                __WEBPACK_IMPORTED_MODULE_4_iview__["Modal"].info({
                                    title: "产品备注",
                                    content: params.row.note
                                });
                            }
                        }
                    }, "查看");
                }
            }, {
                title: "状态",
                key: "status",
                align: "center",
                render: function render(h, params) {
                    return h('span', statusFormat(params.row.status));
                }
            }],
            proList: [],
            totalCount: "",
            prodetialSel: "",
            prodetial: {
                id: "",
                categoryId: "",
                title: "",
                effectStartTime: "",
                indexImage: "",
                detailImages: [],
                description: "",
                note: ""
            },
            modelConfig: {
                status: false,
                type: ""
            }
        };
    },
    mounted: function mounted() {
        this.queryList();
        this.getCategoryList();
    },

    methods: {
        getCategoryList: function getCategoryList() {
            var _this = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_products_lifeInsurance_js__["a" /* getCategoryList */])().then(function (data) {
                if (data.errCode == 10000) {
                    _this.categoryList = data.data;
                } else {
                    _this.$Message.error(data.data);
                }
            }).catch(function (err) {
                console.log(err);
            });
        },
        queryList: function queryList(page) {
            var _this2 = this;

            if (page) {
                this.queryData.pageNo = 1;
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_products_lifeInsurance_js__["b" /* getProductList */])(this.queryData).then(function (data) {
                if (data.errCode === 10000) {
                    _this2.totalCount = data.data.totalCount;
                    _this2.proList = data.data.results;
                } else {
                    _this2.$Message.error(data.data);
                }
            }).catch(function (err) {
                _this2.$Message.error("产品列表获取失败");
                console.log(err);
            });
        },
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
        selecteMainImg: function selecteMainImg(img) {
            var _this3 = this;

            // if(!this.imageSize(image.size)){return}
            // if(this.imageSize)
            var opt = {
                imgData: img,
                agent: this.agent,
                type: "proMaster",
                phoneNo: Math.random().toString(36).substr(2)
            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_products_lifeInsurance_js__["c" /* uploadImage */])(opt).then(function (data) {
                _this3.prodetial.indexImage = __WEBPACK_IMPORTED_MODULE_3__api_products_lifeInsurance_js__["d" /* nodeRoot */] + data;
                console.log(__WEBPACK_IMPORTED_MODULE_3__api_products_lifeInsurance_js__["d" /* nodeRoot */] + data);
            }).catch(function (err) {
                _this3.$Message.error("图片上传失败");
                console.log(err);
            });
        },
        selecteDetailImg: function selecteDetailImg(image) {
            var _this4 = this;

            if (!this.imageSize(image.size)) {
                return;
            }

            var opt = {
                imgData: image.data,
                agent: this.agent,
                type: "proDetail",
                phoneNo: Math.random().toString(36).substr(2)
            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_products_lifeInsurance_js__["c" /* uploadImage */])(opt).then(function (data) {
                var img = __WEBPACK_IMPORTED_MODULE_3__api_products_lifeInsurance_js__["d" /* nodeRoot */] + data;
                _this4.prodetial.detailImages.push(img);
            }).catch(function (err) {
                _this4.$Message.error("图片上传失败");
                console.log(err);
            });
        },
        delDetailImg: function delDetailImg(index) {
            this.prodetial.detailImages.splice(index, 1);
        },
        changePage: function changePage(data) {
            this.queryData.pageNo = page;
            this.queryList();
        },
        selecteRow: function selecteRow(row) {
            this.prodetialSel = row.id;
        },
        updateConfig: function updateConfig() {
            var _this5 = this;

            if (!this.prodetialSel) {
                this.$Message.warning("请选择一条产品进行编辑");
                return;
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_products_lifeInsurance_js__["e" /* getProductById */])(this.prodetialSel).then(function (data) {
                if (data.errCode == 10000) {
                    data.data.detailImages = JSON.parse(data.data.detailImages);
                    _this5.prodetial = data.data;
                } else {
                    _this5.$Message.warning(data.data);
                }
            }).catch(function (err) {
                console.log(data);
            });
            this.modelConfig.type = "update";
            this.modelConfig.status = true;
        },
        saveConfig: function saveConfig() {
            this.prodetial = _defineProperty({
                id: "",
                categoryId: "",
                title: "",
                effectStartTime: "",
                note: "",
                indexImage: "",
                detailImages: [],
                description: ""
            }, "note", "");
            this.modelConfig.type = "save";
            this.modelConfig.status = true;
        },
        judge: function judge() {
            if (this.prodetial.indexImage == "") {
                this.$Message.warning("产品主图不能为空！");
                return false;
            } else if (this.prodetial.title == "") {
                this.$Message.warning("产品名称不能为空！");
                return false;
            } else if (this.prodetial.description == "") {
                this.$Message.warning("产品描述不能为空！");
                return false;
            } else if (this.prodetial.categoryId == "") {
                this.$Message.warning("产品分类不能为空！");
                return false;
            } else if (this.prodetial.detailImages.length == 0) {
                this.$Message.warning("产品详情图不能为空！");
                return false;
            } else if (this.prodetial.effectStartTime == "") {
                this.$Message.warning("上线时间不能为空！");
                return false;
            } else {
                return true;
            }
        },
        okStatus: function okStatus() {
            var _this6 = this;

            if (!this.judge()) {
                return;
            };

            this.modelConfig.status = false;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_products_lifeInsurance_js__["f" /* saveOrUpdProduct */])(this.prodetial).then(function (data) {
                if (data.errCode == 10000) {
                    _this6.$Message.success("保存成功");
                    _this6.queryList();
                } else {
                    _this6.$Message.warning(data.data);
                }
            }).catch(function (err) {
                console.log(err);
            });
        },

        statusFormat: statusFormat
    }
});
function statusFormat(status) {
    return {
        '-1': "审核失败",
        '0': "审核中",
        '1': "审核通过",
        '2': "已上线",
        '3': "已下架"
    }[status];
}

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return nodeRoot; });
/* harmony export (immutable) */ __webpack_exports__["b"] = getProductList;
/* harmony export (immutable) */ __webpack_exports__["a"] = getCategoryList;
/* harmony export (immutable) */ __webpack_exports__["e"] = getProductById;
/* harmony export (immutable) */ __webpack_exports__["f"] = saveOrUpdProduct;
/* harmony export (immutable) */ __webpack_exports__["c"] = uploadImage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_fetch__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_root__ = __webpack_require__(141);



var javacore = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].javacore;

var nodeRoot = __WEBPACK_IMPORTED_MODULE_1__libs_root__["a" /* default */].noderoot;
// 请求产品列表
function getProductList(opt) {
    var data = {
        'title': opt.title, // 标题
        'categoryId': opt.categoryId, // 类别id
        'status': opt.status, // 状态
        'effectStartTime': opt.effectStartTime, // 生效时间
        'pageNo': opt.pageNo,
        'pageSize': opt.pageSize
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/lifeInsurance/productList",
        data: data
    });
}
// 获取产品类别
function getCategoryList() {
    var data = {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/lifeInsurance/categoryList",
        data: data
    });
}

// 获取产品详情
function getProductById(pid) {
    var data = {
        'pid': pid
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/lifeInsurance/getProductById",
        data: data
    });
}
// 保存产品详情(没有ID视为新建)
function saveOrUpdProduct(opt) {
    var data = {
        'id': opt.id, // 编辑传，新建不传
        'categoryId': opt.categoryId, // 类别id
        'title': opt.title, // 名称
        'effectStartTime': opt.effectStartTime,
        'note': opt.note, //注释
        'indexImage': opt.indexImage, //主图
        'detailImages': opt.detailImages, //数组
        'description': opt.description // 描述
    };
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_fetch__["a" /* default */])({
        baseURL: javacore,
        url: "/lifeInsurance/saveOrUpdProduct",
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

/***/ 493:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "insurprolist-page"
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
    staticClass: "insurprolist-form",
    attrs: {
      "inline": "",
      "label-width": 70
    }
  }, [_c('Form-item', {
    staticClass: "insurprolist-form-item",
    attrs: {
      "label": "产品名称"
    }
  }, [_c('Input', {
    staticClass: "insurprolist-form-input",
    attrs: {
      "placeholder": "产品名称"
    },
    model: {
      value: (_vm.queryData.title),
      callback: function($$v) {
        _vm.queryData.title = $$v
      },
      expression: "queryData.title"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "insurprolist-form-item",
    attrs: {
      "label": "产品分类"
    }
  }, [_c('Select', {
    staticStyle: {
      "width": "120px"
    },
    attrs: {
      "clearable": ""
    },
    model: {
      value: (_vm.queryData.categoryId),
      callback: function($$v) {
        _vm.queryData.categoryId = $$v
      },
      expression: "queryData.categoryId"
    }
  }, _vm._l((_vm.categoryList), function(item, index) {
    return _c('Option', {
      key: index,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                              " + _vm._s(item.categoryName) + "\n                          ")])
  }))], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "insurprolist-form-item",
    attrs: {
      "label": "上线时间"
    }
  }, [_c('Date-picker', {
    staticClass: "insurprolist-form-input",
    attrs: {
      "type": "date",
      "placeholder": "上线时间"
    },
    on: {
      "on-change": function (date) {
        _vm.queryData.effectStartTime = date
      }
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "insurprolist-form-item",
    attrs: {
      "label": "产品状态"
    }
  }, [_c('Select', {
    staticStyle: {
      "width": "120px"
    },
    attrs: {
      "clearable": ""
    },
    model: {
      value: (_vm.queryData.status),
      callback: function($$v) {
        _vm.queryData.status = $$v
      },
      expression: "queryData.status"
    }
  }, _vm._l(([-1, 0, 1, 2, 3]), function(item, index) {
    return _c('Option', {
      key: index,
      attrs: {
        "value": item
      },
      domProps: {
        "textContent": _vm._s(_vm.statusFormat(item))
      }
    })
  }))], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "insurprolist-form-item"
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
      "type": "ghost"
    },
    on: {
      "click": _vm.updateConfig
    }
  }, [_vm._v("编辑")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveConfig
    }
  }, [_vm._v("新建")])], 1)], 1), _vm._v(" "), _c('Table', {
    attrs: {
      "stripe": "",
      "columns": _vm.columns,
      "data": _vm.proList,
      "highlight-row": ""
    },
    on: {
      "on-current-change": _vm.selecteRow
    }
  }), _vm._v(" "), (_vm.proList.length > 0) ? _c('div', {
    staticClass: "insurprolist-pagebar"
  }, [_c('Page', {
    staticClass: "insurprolist-page-components",
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
    staticClass: "insurprolist-model",
    attrs: {
      "title": "产品详情",
      "width": 800
    },
    model: {
      value: (_vm.modelConfig.status),
      callback: function($$v) {
        _vm.modelConfig.status = $$v
      },
      expression: "modelConfig.status"
    }
  }, [_c('Alert', {
    attrs: {
      "type": "warning"
    }
  }, [_vm._v("请完善以下信息，以便完成您客户端产品信息")]), _vm._v(" "), _c('Form', {
    ref: "formInline",
    attrs: {
      "label-width": 80
    }
  }, [_c('Form-item', {
    staticClass: "insurprolist-form-item",
    attrs: {
      "label": "产品主图"
    }
  }, [_c('picClippingBox', {
    attrs: {
      "fixedNumberW": 8,
      "fixedNumberH": 5
    },
    on: {
      "imgCropper": _vm.selecteMainImg
    }
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "12px",
      "margin-left": "100px"
    }
  }, [_vm._v("图片大小(770*460)")])], 1), _vm._v(" "), _c('div', {
    staticClass: "modal-indexImg-show"
  }, [_c('img', {
    attrs: {
      "src": _vm.prodetial.indexImage,
      "alt": ""
    }
  })]), _vm._v(" "), _c('Form-item', {
    staticClass: "insurprolist-form-item",
    attrs: {
      "label": "产品名称"
    }
  }, [_c('Input', {
    staticClass: "insurprolist-form-input",
    attrs: {
      "type": "text",
      "placeholder": "产品名称",
      "maxlength": 16
    },
    model: {
      value: (_vm.prodetial.title),
      callback: function($$v) {
        _vm.prodetial.title = $$v
      },
      expression: "prodetial.title"
    }
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "12px",
      "margin-left": "78px"
    }
  }, [_vm._v("产品名称长度不得超过16个字")])], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "insurprolist-form-item",
    attrs: {
      "label": "产品描述"
    }
  }, [_c('Input', {
    staticClass: "insurprolist-form-input",
    attrs: {
      "type": "text",
      "placeholder": "产品描述",
      "maxlength": 20
    },
    model: {
      value: (_vm.prodetial.description),
      callback: function($$v) {
        _vm.prodetial.description = $$v
      },
      expression: "prodetial.description"
    }
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "12px",
      "margin-left": "78px"
    }
  }, [_vm._v("产品描述长度不得超过16个字")])], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "insurprolist-form-item",
    attrs: {
      "label": "产品分类"
    }
  }, [_c('Select', {
    staticStyle: {
      "width": "120px"
    },
    model: {
      value: (_vm.prodetial.categoryId),
      callback: function($$v) {
        _vm.prodetial.categoryId = $$v
      },
      expression: "prodetial.categoryId"
    }
  }, _vm._l((_vm.categoryList), function(item, index) {
    return _c('Option', {
      key: index,
      attrs: {
        "value": item.id
      },
      domProps: {
        "textContent": _vm._s(item.categoryName)
      }
    })
  }))], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "insurprolist-form-item",
    attrs: {
      "label": "产品详情图"
    }
  }, [_c('uploadBtn', {
    staticStyle: {
      "display": "inline-block"
    },
    attrs: {
      "accept": "image/jpeg,image/gif,image/png"
    },
    on: {
      "on-selected": _vm.selecteDetailImg
    }
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "12px",
      "margin-left": "100px"
    }
  }, [_vm._v("图片大小(770*460)")])], 1), _vm._v(" "), _c('ul', {
    staticClass: "modal-detailImages-show"
  }, _vm._l((_vm.prodetial.detailImages), function(item, index) {
    return _c('li', {
      key: index
    }, [_c('Button', {
      staticClass: "icon-del",
      attrs: {
        "shape": "circle",
        "icon": "trash-a"
      },
      on: {
        "click": function($event) {
          _vm.delDetailImg(index)
        }
      }
    }), _vm._v(" "), _c('img', {
      attrs: {
        "src": item,
        "alt": ""
      }
    })], 1)
  })), _vm._v(" "), _c('Form-item', {
    staticClass: "insurprolist-form-item",
    attrs: {
      "label": "上线日期"
    }
  }, [_c('Date-picker', {
    staticClass: "insurprolist-form-input",
    attrs: {
      "type": "date",
      "value": _vm.prodetial.effectStartTime,
      "placeholder": "上线时间"
    },
    on: {
      "on-change": function (date) {
        _vm.prodetial.effectStartTime = date
      }
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    staticClass: "insurprolist-form-item",
    attrs: {
      "label": "产品备注"
    }
  }, [_c('Input', {
    attrs: {
      "type": "textarea",
      "placeholder": "产品备注"
    },
    model: {
      value: (_vm.prodetial.note),
      callback: function($$v) {
        _vm.prodetial.note = $$v
      },
      expression: "prodetial.note"
    }
  })], 1)], 1), _vm._v(" "), _c('Alert', {
    attrs: {
      "show-icon": ""
    }
  }, [_vm._v("产品发布后将进入审核，通过审核将自动上线")]), _vm._v(" "), _c('div', {
    slot: "footer"
  }, [_c('Button', {
    attrs: {
      "type": "info",
      "size": "large"
    },
    on: {
      "click": _vm.okStatus
    }
  }, [_vm._v("提交审核")]), _vm._v(" "), _c('Button', {
    attrs: {
      "size": "large"
    },
    on: {
      "click": function($event) {
        _vm.modelConfig.status = false
      }
    }
  }, [_vm._v("取消")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-353b6098", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=1.chunk.js.map