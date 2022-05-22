"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Home_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/ContentHeader.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/ContentHeader.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _HomeButton_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeButton.vue */ "./resources/js/Pages/Home/HomeButton.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    auth: Object
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var auth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.value.auth;
    }); // const user = computed(() => usePage().props.value.auth.user)

    var __returned__ = {
      auth: auth,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      usePage: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.usePage,
      HomeButton: _HomeButton_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/HomeButton.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/HomeButton.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    type: String
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {};
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/Index.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/Index.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _ContentHeader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentHeader.vue */ "./resources/js/Pages/Home/ContentHeader.vue");
/* harmony import */ var _Shared_TwoBookLogo_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Shared/TwoBookLogo.vue */ "./resources/js/Shared/TwoBookLogo.vue");
/* harmony import */ var _ContentSubheader_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContentSubheader.vue */ "./resources/js/Pages/Home/ContentSubheader.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    name: String,
    technologies: Array
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var user = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.value.auth.user;
    });
    var __returned__ = {
      user: user,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      usePage: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.usePage,
      ContentHeader: _ContentHeader_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      TwoBookLogo: _Shared_TwoBookLogo_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
      ContentSubheader: _ContentSubheader_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/TwoBookLogo.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/TwoBookLogo.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    mobile: Boolean
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {};
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/ContentHeader.vue?vue&type=template&id=41bc3502":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/ContentHeader.vue?vue&type=template&id=41bc3502 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex flex-col items-center max-w-xl space-y-10"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-4xl text-center text-main-green font-poppins font-bold leading-snug md:text-6xl md:leading-snug"
}, "The Book App for the Modern World.", -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "max-w-md"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-xl text-center text-main-black font-poppins mb-2"
}, " Keep in touch with friends and show off your latest reads in your library. Have real discussions with fellow book lovers. ")], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "flex flex-col space-y-3"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Explore books");

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Write a story");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [_hoisted_2, _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HomeButton"], {
    type: 'books'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HomeButton"], {
    type: 'story'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_6];
    }),
    _: 1
    /* STABLE */

  })])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/ContentSubheader.vue?vue&type=template&id=6fb06fcb":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/ContentSubheader.vue?vue&type=template&id=6fb06fcb ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div");
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/HomeButton.vue?vue&type=template&id=4c3bfd28":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/HomeButton.vue?vue&type=template&id=4c3bfd28 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex items-center justify-center border border-main-orange px-6 py-3 text-sm font-poppins rounded-lg hover:scale-110 transition duration-100", {
      'border border-main-orange text-main-orange': $props.type === 'story',
      'bg-main-orange text-main-off-white': $props.type === 'books'
    }])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")];
    }),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["class"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/Index.vue?vue&type=template&id=f311f62a":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/Index.vue?vue&type=template&id=f311f62a ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex flex-col gap-y-20"
};
var _hoisted_2 = {
  "class": "flex flex-col items-center md:flex-row md:justify-between"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Home"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ContentHeader"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TwoBookLogo"], {
    mobile: false
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ContentSubheader"])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/TwoBookLogo.vue?vue&type=template&id=57f197f4":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/TwoBookLogo.vue?vue&type=template&id=57f197f4 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "hidden md:block"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 495 555",
  style: {
    "enable-background": "new 0 0 495 555"
  },
  "xml:space": "preserve",
  width: "419",
  fill: "none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "class": "st0",
  d: "M379.7,123.9c5.8,0,10.5-4.7,10.5-10.5c0-5.8-4.7-10.5-10.5-10.5c-5.8,0-10.5,4.7-10.5,10.5\n\t\tC369.2,119.2,373.9,123.9,379.7,123.9z M495,270V51.3c0-10.5-6.3-16.8-16.8-16.8H264.4c-35.6,0-62.9,27.3-62.9,63.1v210.3\n\t\tc0,35.7,27.3,63.1,62.9,63.1h213.8c8.4,0,16.8-6.3,16.8-16.8v-10.5c0-4.2-2.1-8.4-6.3-12.6c-2.1-10.5-2.1-40,0-48.4\n\t\tC492.9,280.5,495,276.3,495,270z M358.7,71.3c29,0,52.4,18.9,52.4,42.1c0,13.7-8.3,25.8-21,33.4v8.6c0,5.8-4.7,10.5-10.5,10.5\n\t\th-41.9c-5.8,0-10.5-4.7-10.5-10.5v-8.6c-12.6-7.7-21-19.7-21-33.4C306.3,90.2,329.8,71.3,358.7,71.3z M283.3,181.2l4.1-9.7\n\t\tc1.1-2.7,4.2-3.9,6.9-2.8l64.4,27.7l64.5-27.7c2.7-1.1,5.8,0.1,6.9,2.8l4.1,9.7c1.1,2.7-0.1,5.8-2.8,6.9L385.3,208l46.1,19.8\n\t\tc2.7,1.1,3.9,4.2,2.8,6.9l-4.1,9.7c-1.1,2.7-4.2,3.9-6.9,2.8l-64.4-27.7l-64.4,27.7c-2.7,1.1-5.8-0.1-6.9-2.8l-4.1-9.7\n\t\tc-1.1-2.7,0.1-5.8,2.8-6.9l46.1-19.8L286,188.1C283.3,187,282.1,183.9,283.3,181.2z M451,328.9H264.4c-12.6,0-21-8.4-21-21\n\t\ts10.5-21,21-21H451V328.9z M337.8,123.9c5.8,0,10.5-4.7,10.5-10.5c0-5.8-4.7-10.5-10.5-10.5c-5.8,0-10.5,4.7-10.5,10.5\n\t\tC327.3,119.2,332,123.9,337.8,123.9z",
  fill: "#5465FF"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "class": "st1",
  d: "M235.5,440.6V263.9c0-7-5.6-12.6-12.6-12.6H50.5C22.6,251.3,0,273.9,0,301.8V470c0,27.9,22.6,50.5,50.5,50.5\n\t\th172.4c7,0,12.6-5.6,12.6-12.6v-8.4c0-3.9-1.8-7.5-4.7-9.8c-2.2-8.1-2.2-31.2,0-39.3C233.6,448.1,235.5,444.5,235.5,440.6z\n\t\t M156.5,317c9,0,16.3,7.3,16.3,16.3c0,9-7.3,16.3-16.3,16.3c-9,0-16.3-7.3-16.3-16.3C140.2,324.3,147.5,317,156.5,317z M79,317\n\t\tc9,0,16.3,7.3,16.3,16.3c0,9-7.3,16.3-16.3,16.3c-9,0-16.3-7.3-16.3-16.3C62.7,324.3,70,317,79,317z M63.1,381.8\n\t\tc1.1-0.6,2.3-0.9,3.5-0.9c2.4,0,4.7,1.2,6.2,3.3c10.2,14.9,26.5,23.6,45,23.6s34.9-8.7,45-23.6c2.1-3.1,6.3-4.2,9.6-2.4\n\t\tc2.6,1.3,4,4,4,6.6c0,1.4-0.4,2.8-1.3,4.1c-12.9,19-33.8,30.2-57.4,30.2s-44.5-11.1-57.4-30.2C57.9,388.8,59.2,383.8,63.1,381.8z\n\t\t M200.5,486.8h-150c-9.3,0-16.8-7.5-16.8-16.8c0-9.3,7.6-16.8,16.8-16.8h150C199.5,462.2,199.5,477.8,200.5,486.8z",
  fill: "#2FBF71"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "class": "st0",
  d: "M1418.6-876.9c6.6,0,12-5.4,12-12s-5.4-12-12-12c-6.6,0-12,5.4-12,12S1412-876.9,1418.6-876.9z M1550.2-710.1\n\t\tv-249.6c0-12-7.2-19.2-19.1-19.2H1287c-40.7,0-71.8,31.2-71.8,72v240c0,40.8,31.1,72,71.8,72h244.1c9.6,0,19.1-7.2,19.1-19.2v-12\n\t\tc0-4.8-2.4-9.6-7.2-14.4c-2.4-12-2.4-45.6,0-55.2C1547.8-698.1,1550.2-702.9,1550.2-710.1z M1394.7-936.9c33.1,0,59.8,21.5,59.8,48\n\t\tc0,15.7-9.5,29.4-23.9,38.2v9.8c0,6.6-5.4,12-12,12h-47.9c-6.6,0-12-5.4-12-12v-9.8c-14.4-8.8-23.9-22.5-23.9-38.2\n\t\tC1334.9-915.4,1361.6-936.9,1394.7-936.9z M1308.6-811.4l4.7-11c1.3-3.1,4.8-4.4,7.9-3.2l73.5,31.6l73.6-31.6\n\t\tc3.1-1.3,6.6,0.1,7.9,3.2l4.7,11c1.3,3.1-0.1,6.6-3.1,7.9l-52.6,22.7l52.6,22.6c3.1,1.3,4.4,4.8,3.1,7.9l-4.7,11\n\t\tc-1.3,3.1-4.8,4.4-7.9,3.2l-73.5-31.6l-73.5,31.7c-3.1,1.3-6.6-0.1-7.9-3.2l-4.7-11c-1.3-3.1,0.1-6.6,3.1-7.9l52.6-22.6l-52.7-22.7\n\t\tC1308.6-804.8,1307.3-808.4,1308.6-811.4z M1500-642.9h-213c-14.4,0-23.9-9.6-23.9-24c0-14.4,12-24,23.9-24h213V-642.9z\n\t\t M1370.8-876.9c6.6,0,12-5.4,12-12s-5.4-12-12-12c-6.6,0-12,5.4-12,12S1364.2-876.9,1370.8-876.9z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "class": "st1",
  d: "M1254-515.4v-201.6c0-8-6.4-14.4-14.4-14.4h-196.8c-31.8,0-57.6,25.8-57.6,57.6v192\n\t\tc0,31.8,25.8,57.6,57.6,57.6h196.8c8,0,14.4-6.4,14.4-14.4v-9.6c0-4.5-2.1-8.6-5.3-11.2c-2.5-9.2-2.5-35.6,0-44.8\n\t\tC1251.9-506.9,1254-510.9,1254-515.4z M1163.8-656.4c10.2,0,18.6,8.3,18.6,18.6c0,10.3-8.3,18.6-18.6,18.6\n\t\tc-10.3,0-18.6-8.3-18.6-18.6C1145.3-648.1,1153.6-656.4,1163.8-656.4z M1075.4-656.4c10.3,0,18.6,8.3,18.6,18.6\n\t\tc0,10.3-8.3,18.6-18.6,18.6c-10.2,0-18.6-8.3-18.6-18.6C1056.8-648.1,1065.2-656.4,1075.4-656.4z M1057.3-582.6\n\t\tc1.3-0.7,2.6-1,3.9-1c2.7,0,5.4,1.3,7,3.7c11.6,17,30.3,26.9,51.4,26.9c21.1,0,39.8-9.9,51.4-26.9c2.4-3.6,7.1-4.8,11-2.7\n\t\tc2.9,1.5,4.6,4.5,4.6,7.6c0,1.6-0.5,3.2-1.4,4.7c-14.7,21.7-38.6,34.4-65.5,34.4s-50.8-12.7-65.5-34.4\n\t\tC1051.3-574.5,1052.8-580.2,1057.3-582.6z M1214-462.6h-171.2c-10.6,0-19.2-8.6-19.2-19.2c0-10.6,8.6-19.2,19.2-19.2H1214\n\t\tC1212.9-490.8,1212.9-472.9,1214-462.6z"
})])], -1
/* HOISTED */
);

var _hoisted_3 = {
  key: 1
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-red-500 uppercase"
}, "toots!!!", -1
/* HOISTED */
);

var _hoisted_5 = [_hoisted_4];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.mobile === false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <svg width=\"373\" height=\"419\" viewBox=\"0 0 495 555\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M363.393 102C369.973 102 375.357 96.6 375.357 90C375.357 83.4 369.973 78 363.393 78C356.812 78 351.429 83.4 351.429 90C351.429 96.6 356.812 102 363.393 102ZM495 268.8V19.2C495 7.2 487.821 0 475.857 0H231.786C191.107 0 160 31.2 160 72V312C160 352.8 191.107 384 231.786 384H475.857C485.429 384 495 376.8 495 364.8V352.8C495 348 492.607 343.2 487.821 338.4C485.429 326.4 485.429 292.8 487.821 283.2C492.607 280.8 495 276 495 268.8ZM339.464 42C372.516 42 399.286 63.525 399.286 90C399.286 105.675 389.789 119.4 375.357 128.175V138C375.357 144.6 369.973 150 363.393 150H315.536C308.955 150 303.571 144.6 303.571 138V128.175C289.14 119.4 279.643 105.675 279.643 90C279.643 63.525 306.413 42 339.464 42ZM253.321 167.475L258.032 156.45C259.304 153.375 262.818 152.025 265.884 153.3L339.39 184.875L412.97 153.3C416.036 152.025 419.55 153.375 420.821 156.45L425.532 167.475C426.804 170.55 425.458 174.075 422.392 175.35L369.824 198L422.392 220.575C425.458 221.85 426.804 225.375 425.532 228.45L420.821 239.475C419.55 242.55 416.036 243.9 412.97 242.625L339.464 211.05L265.959 242.7C262.893 243.975 259.378 242.625 258.107 239.55L253.396 228.525C252.125 225.45 253.471 221.925 256.537 220.65L309.18 198.075L256.462 175.35C253.396 174.075 252.05 170.55 253.321 167.475ZM444.75 336H231.786C217.429 336 207.857 326.4 207.857 312C207.857 297.6 219.821 288 231.786 288H444.75V336ZM315.536 102C322.116 102 327.5 96.6 327.5 90C327.5 83.4 322.116 78 315.536 78C308.955 78 303.571 83.4 303.571 90C303.571 96.6 308.955 102 315.536 102Z\" fill=\"#5465FF\"/>\n            <rect x=\"12.034\" y=\"305.981\" width=\"245.494\" height=\"89.8541\" fill=\"#EDF2EF\"/>\n            <path d=\"M268.76 463.463V261.818C268.76 253.836 262.341 247.415 254.362 247.415H57.5915C25.7962 247.415 0 273.221 0 305.028V497.071C0 528.878 25.7962 554.684 57.5915 554.684H254.362C262.341 554.684 268.76 548.263 268.76 540.281V530.679C268.76 526.178 266.66 522.097 263.421 519.456C260.901 510.214 260.901 483.868 263.421 474.626C266.66 472.045 268.76 467.964 268.76 463.463ZM76.7886 327.833C76.7886 325.853 78.4084 324.232 80.3881 324.232H207.569C209.549 324.232 211.169 325.853 211.169 327.833V339.836C211.169 341.816 209.549 343.436 207.569 343.436H80.3881C78.4084 343.436 76.7886 341.816 76.7886 339.836V327.833ZM76.7886 366.242C76.7886 364.261 78.4084 362.641 80.3881 362.641H207.569C209.549 362.641 211.169 364.261 211.169 366.242V378.244C211.169 380.225 209.549 381.845 207.569 381.845H80.3881C78.4084 381.845 76.7886 380.225 76.7886 378.244V366.242ZM228.806 516.275H57.5915C46.973 516.275 38.3943 507.693 38.3943 497.071C38.3943 486.509 47.033 477.867 57.5915 477.867H228.806C227.666 488.129 227.666 506.013 228.806 516.275Z\" fill=\"#2FBF71\"/>\n        </svg> "), _hoisted_2])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, _hoisted_5));
}

/***/ }),

/***/ "./resources/js/Pages/Home/ContentHeader.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Home/ContentHeader.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContentHeader_vue_vue_type_template_id_41bc3502__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentHeader.vue?vue&type=template&id=41bc3502 */ "./resources/js/Pages/Home/ContentHeader.vue?vue&type=template&id=41bc3502");
/* harmony import */ var _ContentHeader_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentHeader.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Home/ContentHeader.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_prestonfoshee_dev_bookster_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_prestonfoshee_dev_bookster_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ContentHeader_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ContentHeader_vue_vue_type_template_id_41bc3502__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Home/ContentHeader.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Home/ContentSubheader.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Home/ContentSubheader.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContentSubheader_vue_vue_type_template_id_6fb06fcb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentSubheader.vue?vue&type=template&id=6fb06fcb */ "./resources/js/Pages/Home/ContentSubheader.vue?vue&type=template&id=6fb06fcb");
/* harmony import */ var _Users_prestonfoshee_dev_bookster_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_Users_prestonfoshee_dev_bookster_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_ContentSubheader_vue_vue_type_template_id_6fb06fcb__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Home/ContentSubheader.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Home/HomeButton.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Home/HomeButton.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomeButton_vue_vue_type_template_id_4c3bfd28__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeButton.vue?vue&type=template&id=4c3bfd28 */ "./resources/js/Pages/Home/HomeButton.vue?vue&type=template&id=4c3bfd28");
/* harmony import */ var _HomeButton_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeButton.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Home/HomeButton.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_prestonfoshee_dev_bookster_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_prestonfoshee_dev_bookster_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_HomeButton_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HomeButton_vue_vue_type_template_id_4c3bfd28__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Home/HomeButton.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Home/Index.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Home/Index.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_f311f62a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=f311f62a */ "./resources/js/Pages/Home/Index.vue?vue&type=template&id=f311f62a");
/* harmony import */ var _Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Home/Index.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_prestonfoshee_dev_bookster_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_prestonfoshee_dev_bookster_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_f311f62a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Home/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/TwoBookLogo.vue":
/*!*********************************************!*\
  !*** ./resources/js/Shared/TwoBookLogo.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TwoBookLogo_vue_vue_type_template_id_57f197f4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwoBookLogo.vue?vue&type=template&id=57f197f4 */ "./resources/js/Shared/TwoBookLogo.vue?vue&type=template&id=57f197f4");
/* harmony import */ var _TwoBookLogo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TwoBookLogo.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Shared/TwoBookLogo.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_prestonfoshee_dev_bookster_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_prestonfoshee_dev_bookster_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TwoBookLogo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TwoBookLogo_vue_vue_type_template_id_57f197f4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/TwoBookLogo.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Home/ContentHeader.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Home/ContentHeader.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContentHeader_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContentHeader_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContentHeader.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/ContentHeader.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Home/HomeButton.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Home/HomeButton.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeButton_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeButton_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomeButton.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/HomeButton.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Home/Index.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Home/Index.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/Index.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/TwoBookLogo.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/Shared/TwoBookLogo.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TwoBookLogo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TwoBookLogo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TwoBookLogo.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/TwoBookLogo.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Home/ContentHeader.vue?vue&type=template&id=41bc3502":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Home/ContentHeader.vue?vue&type=template&id=41bc3502 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContentHeader_vue_vue_type_template_id_41bc3502__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContentHeader_vue_vue_type_template_id_41bc3502__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContentHeader.vue?vue&type=template&id=41bc3502 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/ContentHeader.vue?vue&type=template&id=41bc3502");


/***/ }),

/***/ "./resources/js/Pages/Home/ContentSubheader.vue?vue&type=template&id=6fb06fcb":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Home/ContentSubheader.vue?vue&type=template&id=6fb06fcb ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContentSubheader_vue_vue_type_template_id_6fb06fcb__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContentSubheader_vue_vue_type_template_id_6fb06fcb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContentSubheader.vue?vue&type=template&id=6fb06fcb */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/ContentSubheader.vue?vue&type=template&id=6fb06fcb");


/***/ }),

/***/ "./resources/js/Pages/Home/HomeButton.vue?vue&type=template&id=4c3bfd28":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Home/HomeButton.vue?vue&type=template&id=4c3bfd28 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeButton_vue_vue_type_template_id_4c3bfd28__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeButton_vue_vue_type_template_id_4c3bfd28__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomeButton.vue?vue&type=template&id=4c3bfd28 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/HomeButton.vue?vue&type=template&id=4c3bfd28");


/***/ }),

/***/ "./resources/js/Pages/Home/Index.vue?vue&type=template&id=f311f62a":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Home/Index.vue?vue&type=template&id=f311f62a ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_f311f62a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_f311f62a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=f311f62a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/Index.vue?vue&type=template&id=f311f62a");


/***/ }),

/***/ "./resources/js/Shared/TwoBookLogo.vue?vue&type=template&id=57f197f4":
/*!***************************************************************************!*\
  !*** ./resources/js/Shared/TwoBookLogo.vue?vue&type=template&id=57f197f4 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TwoBookLogo_vue_vue_type_template_id_57f197f4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TwoBookLogo_vue_vue_type_template_id_57f197f4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TwoBookLogo.vue?vue&type=template&id=57f197f4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/TwoBookLogo.vue?vue&type=template&id=57f197f4");


/***/ })

}]);