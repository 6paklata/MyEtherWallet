((typeof self !== 'undefined' ? self : this)["webpackJsonp"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    type: {
      type: String,
      default: 'issues'
    }
  },
  data: function data() {
    return {
      // Create a random string for each popover instance
      popOverId: 'popoverid' + String(Math.floor(Math.random() * 100000000))
    };
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_kvhnuke_GitHub_MyEtherWallet_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_kvhnuke_GitHub_MyEtherWallet_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _layouts_InterfaceLayout_components_InterfaceContainerTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/layouts/InterfaceLayout/components/InterfaceContainerTitle */ "./src/layouts/InterfaceLayout/components/InterfaceContainerTitle/index.js");
/* harmony import */ var _components_InterfaceBottomText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/InterfaceBottomText */ "./src/components/InterfaceBottomText/index.js");
/* harmony import */ var _components_BottomHelpLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/BottomHelpLink */ "./src/components/BottomHelpLink/index.js");
/* harmony import */ var _components_Blockie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Blockie */ "./src/components/Blockie/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../helpers */ "./src/dapps/MakerDai/helpers.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_13__);








var _watch;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_home_kvhnuke_GitHub_MyEtherWallet_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var toBigNumber = function toBigNumber(num) {
  return new bignumber_js__WEBPACK_IMPORTED_MODULE_13___default.a(num);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'interface-container-title': _layouts_InterfaceLayout_components_InterfaceContainerTitle__WEBPACK_IMPORTED_MODULE_8__["default"],
    'interface-bottom-text': _components_InterfaceBottomText__WEBPACK_IMPORTED_MODULE_9__["default"],
    blockie: _components_Blockie__WEBPACK_IMPORTED_MODULE_11__["default"],
    'help-link': _components_BottomHelpLink__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  props: {
    openCloseModal: {
      type: Boolean,
      default: false
    },
    openMoveModal: {
      type: Boolean,
      default: false
    },
    tokensWithBalance: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    getBalance: {
      type: Function,
      default: function _default() {}
    },
    makerActive: {
      type: Boolean,
      default: false
    },
    cdps: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    availableCdps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    valuesUpdated: {
      type: Number,
      default: 0
    },
    getCdp: {
      type: Function,
      default: function _default() {}
    },
    hasCdp: {
      type: Function,
      default: function _default() {}
    },
    values: {
      type: Object,
      default: function _default() {
        return {
          maxPethDraw: '',
          maxEthDraw: '',
          maxUsdDraw: '',
          ethCollateral: '',
          pethCollateral: '',
          usdCollateral: '',
          debtValue: '',
          maxDai: '',
          collateralRatio: '',
          cdpId: '',
          stabilityFee: '',
          minEth: '',
          liquidationRatio: '',
          wethToPethRatio: '',
          liquidationPenalty: '',
          targetPrice: '',
          pethPrice: ''
        };
      }
    },
    ethPrice: {
      type: bignumber_js__WEBPACK_IMPORTED_MODULE_13___default.a,
      default: toBigNumber(0)
    },
    pethPrice: {
      type: bignumber_js__WEBPACK_IMPORTED_MODULE_13___default.a,
      default: toBigNumber(0)
    },
    liquidationPenalty: {
      type: bignumber_js__WEBPACK_IMPORTED_MODULE_13___default.a,
      default: toBigNumber(0)
    },
    stabilityFee: {
      type: bignumber_js__WEBPACK_IMPORTED_MODULE_13___default.a,
      default: toBigNumber(0)
    },
    liquidationRatio: {
      type: bignumber_js__WEBPACK_IMPORTED_MODULE_13___default.a,
      default: toBigNumber(0)
    },
    wethToPethRatio: {
      type: bignumber_js__WEBPACK_IMPORTED_MODULE_13___default.a,
      default: toBigNumber(0)
    },
    pethMin: {
      type: bignumber_js__WEBPACK_IMPORTED_MODULE_13___default.a,
      default: toBigNumber(0)
    },
    priceService: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    cdpService: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    proxyService: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      activeCdp: {},
      loaded: false,
      ethQty: 0,
      daiQty: 0,
      selectedCdp: '',
      cdpId: '',
      cdp: {},
      maxDaiDraw: toBigNumber(0),
      maxWithDraw: toBigNumber(0),
      maxWithDrawUSD: toBigNumber(0),
      maxPethDraw: toBigNumber(0),
      maxEthDraw: toBigNumber(0)
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])(['account', 'gasPrice', 'web3', 'network', 'ens']), {
    noProxy: function noProxy() {
      if (this.activeCdp) {
        return this.activeCdp.noProxy;
      }
    },
    finishMigration: function finishMigration() {
      if (this.activeCdp) {
        return this.activeCdp.needToFinishMigrating;
      }
    },
    collateralRatioColoring: function collateralRatioColoring() {
      if (this.values) {
        if (this.values.collateralRatio >= 2) {
          return 'green';
        } else if (this.values.collateralRatio >= 1.75 && this.values.collateralRatio < 2) {
          return 'orange';
        }

        return 'red';
      }

      return '';
    },
    liquidationPriceDisplay: function liquidationPriceDisplay() {
      if (this.values) {
        var value = Object(_helpers__WEBPACK_IMPORTED_MODULE_12__["displayFixedValue"])(this.values.liquidationPrice, 2);

        if (new bignumber_js__WEBPACK_IMPORTED_MODULE_13___default.a(value).gt(0)) {
          return value;
        }

        return '--';
      }

      return '--';
    },
    collaterlizationRatioDisplay: function collaterlizationRatioDisplay() {
      if (this.values) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_12__["displayFixedPercent"])(this.values.collateralRatio);
      }

      return '--';
    },
    cdpIdDisplay: function cdpIdDisplay() {
      if (this.values) {
        return this.values.cdpId;
      }

      return '--';
    },
    liquidationRatioDisplay: function liquidationRatioDisplay() {
      if (this.values) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_12__["displayFixedValue"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_12__["displayPercentValue"])(this.liquidationRatio));
      }

      return '--';
    },
    liquidationPenaltyDisplay: function liquidationPenaltyDisplay() {
      if (this.values) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_12__["displayFixedValue"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_12__["displayPercentValue"])(this.liquidationPenalty));
      }

      return '--';
    },
    stabilityFeeDisplay: function stabilityFeeDisplay() {
      if (this.values) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_12__["displayFixedValue"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_12__["displayPercentValue"])(this.stabilityFee));
      }

      return '--';
    },
    ethPriceDisplay: function ethPriceDisplay() {
      if (this.values) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_12__["displayFixedValue"])(this.ethPrice, 2);
      }

      return '--';
    },
    maxPethDrawDisplay: function maxPethDrawDisplay() {
      if (this.values) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_12__["displayFixedValue"])(this.values.maxPethDraw, 5);
      }

      return '--';
    },
    zeroDebt: function zeroDebt() {
      return toBigNumber(this.values.debtValue).eq(0);
    },
    maxEthDrawDisplay: function maxEthDrawDisplay() {
      if (this.values) {
        return this.values.maxEthDraw;
      }

      return '--';
    },
    maxUsdDrawDisplay: function maxUsdDrawDisplay() {
      if (this.values) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_12__["displayFixedValue"])(this.values.maxUsdDraw, 2);
      }

      return '--';
    },
    ethCollateral: function ethCollateral() {
      if (this.values) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_12__["displayFixedValue"])(this.values.ethCollateral, 5, true);
      }

      return '--';
    },
    pethCollateral: function pethCollateral() {
      if (this.values) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_12__["displayFixedValue"])(this.values.pethCollateral, 5, true);
      }

      return '--';
    },
    usdCollateral: function usdCollateral() {
      if (this.values) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_12__["displayFixedValue"])(this.values.usdCollateral, 2);
      }

      return '--';
    },
    debtValueDisplay: function debtValueDisplay() {
      if (this.values) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_12__["displayFixedValue"])(this.values.debtValue, 2);
      }

      return '--';
    },
    debtValue: function debtValue() {
      if (this.values) {
        return this.values.debtValue;
      }

      return '--';
    },
    maxDai: function maxDai() {
      if (this.values) {
        return this.values.maxDai;
      }

      return '--';
    },
    maxUsd: function maxUsd() {
      if (this.values) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_12__["displayFixedValue"])(this.values.maxDai, 2);
      }

      return '--';
    }
  }),
  watch: (_watch = {}, Object(_home_kvhnuke_GitHub_MyEtherWallet_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_watch, 'activeCdp.ready', function activeCdpReady() {
    this.isReady();
  }), Object(_home_kvhnuke_GitHub_MyEtherWallet_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_watch, "openCloseModal", function openCloseModal(val) {
    if (val) {
      this.showClose();
    }
  }), Object(_home_kvhnuke_GitHub_MyEtherWallet_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_watch, "openMoveModal", function openMoveModal(val) {
    if (val) {
      this.showMove();
    }
  }), _watch),
  mounted: function () {
    var _mounted = Object(_home_kvhnuke_GitHub_MyEtherWallet_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.activeCdp = {};
              this.cdpId = this.$route.params.cdpId;

              if (this.makerActive) {
                this.loaded = true;

                if (this.cdpId) {
                  this.$emit('activeCdpId', this.cdpId);
                }
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    showDeposit: function showDeposit() {
      this.$emit('showDeposit');
    },
    showWithdraw: function showWithdraw() {
      this.$emit('showWithdraw');
    },
    showPayback: function showPayback() {
      this.$emit('showPayback');
    },
    showGenerate: function showGenerate() {
      this.$emit('showGenerate');
    },
    displayPercentValue: _helpers__WEBPACK_IMPORTED_MODULE_12__["displayPercentValue"],
    displayFixedValue: _helpers__WEBPACK_IMPORTED_MODULE_12__["displayFixedValue"],
    isReady: function () {
      var _isReady = Object(_home_kvhnuke_GitHub_MyEtherWallet_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function isReady() {
        return _isReady.apply(this, arguments);
      }

      return isReady;
    }()
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"5569e56c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=template&id=79c51c62&scoped=true&lang=html&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5569e56c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=template&id=79c51c62&scoped=true&lang=html& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "Bottom-help-link" }, [
    _vm.type == "issues"
      ? _c("div", { staticClass: "issues" }, [
          _vm._v("\n    Having issues?\n    "),
          _c(
            "a",
            {
              attrs: { href: "https://kb.myetherwallet.com/", target: "_blank" }
            },
            [_vm._v("Help Center")]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"5569e56c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=template&id=512e0126&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5569e56c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=template&id=512e0126&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "manage-cdp" },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.finishMigration,
              expression: "!finishMigration"
            }
          ],
          staticClass: "manage-container"
        },
        [
          _c("div", { staticClass: "title-content-container" }, [
            _c("p", { staticClass: "cpd-title" }, [
              _vm._v(_vm._s(_vm.$t("dappsMaker.cdpPortal")))
            ]),
            _c("p", { staticClass: "cdp-id" }, [
              _vm._v(
                "\n        " +
                  _vm._s(
                    _vm.$t("dappsMaker.positionLabel", {
                      value: _vm.cdpIdDisplay
                    })
                  ) +
                  "\n      "
              )
            ])
          ]),
          _c("div", { staticClass: "information-blocks" }, [
            _c("div", { staticClass: "block-item" }, [
              _c("div", { staticClass: "block-title" }, [
                _c("p", [
                  _vm._v(
                    _vm._s(_vm.$t("dappsMaker.liquidPrice")) + " (ETH/USD)"
                  )
                ]),
                _c("div", { staticClass: "blue" }, [
                  _c("span", { staticClass: "blue-bold" }, [
                    _vm._v(_vm._s(_vm.liquidationPriceDisplay))
                  ]),
                  _vm._v("\n            USD\n          ")
                ])
              ]),
              _c("div", { staticClass: "block-content" }, [
                _c("div", { staticClass: "item" }, [
                  _c("p", [
                    _vm._v(
                      _vm._s(_vm.$t("dappsMaker.currentPrice")) + "(ETH/USD)"
                    )
                  ]),
                  _c("div", [
                    _vm._v(_vm._s(_vm.ethPriceDisplay) + " "),
                    _c("span", [_vm._v("USD")])
                  ])
                ]),
                _c("div", { staticClass: "item" }, [
                  _c("p", [
                    _vm._v(_vm._s(_vm.$t("dappsMaker.liquidationPenalty")))
                  ]),
                  _c("div", [
                    _vm._v(_vm._s(_vm.liquidationPenaltyDisplay) + "%")
                  ])
                ])
              ])
            ]),
            _c("div", { staticClass: "block-item" }, [
              _c("div", { staticClass: "block-title" }, [
                _c("p", [_vm._v(_vm._s(_vm.$t("dappsMaker.collateralRatio")))]),
                _c("div", { class: _vm.collateralRatioColoring }, [
                  _c("span", [
                    _vm._v(_vm._s(_vm.collaterlizationRatioDisplay) + "%")
                  ])
                ])
              ]),
              _c("div", { staticClass: "block-content" }, [
                _c("div", { staticClass: "item" }, [
                  _c("p", [_vm._v(_vm._s(_vm.$t("dappsMaker.minimumRatio")))]),
                  _c("div", [_vm._v(_vm._s(_vm.liquidationRatioDisplay) + "%")])
                ]),
                _c("div", { staticClass: "item" }, [
                  _c("p", [_vm._v(_vm._s(_vm.$t("dappsMaker.stabilityFee")))]),
                  _c("div", [_vm._v(_vm._s(_vm.stabilityFeeDisplay) + "%")])
                ])
              ])
            ])
          ]),
          _c("div", { staticClass: "information-single-block" }, [
            _c("div", { staticClass: "block-item" }, [
              _c("div", { staticClass: "block-title" }, [
                _c("p", [_vm._v(_vm._s(_vm.$t("dappsMaker.ethCollateral")))])
              ]),
              _c("div", { staticClass: "block-content-container" }, [
                _c("div", { staticClass: "block-content" }, [
                  _c("div", { staticClass: "item" }, [
                    _c("p", [_vm._v(_vm._s(_vm.$t("dappsMaker.deposited")))]),
                    _c("div", [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.ethCollateral) +
                          "\n                "
                      ),
                      _c("span", [_vm._v("ETH")])
                    ]),
                    _c("div", [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.pethCollateral) +
                          "\n                "
                      ),
                      _c("span", [_vm._v("PETH")]),
                      _vm._v(
                        " /\n                " +
                          _vm._s(_vm.usdCollateral) +
                          "\n                "
                      ),
                      _c("span", [_vm._v("USD")])
                    ]),
                    _c("button", { on: { click: _vm.showDeposit } }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("dappsMaker.deposit")) +
                          " >\n              "
                      )
                    ])
                  ])
                ]),
                _c("div", { staticClass: "block-content" }, [
                  _c("div", { staticClass: "item" }, [
                    _c("p", [_vm._v(_vm._s(_vm.$t("dappsMaker.maxWithDraw")))]),
                    _c("div", [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.maxEthDrawDisplay) +
                          "\n                "
                      ),
                      _c("span", [_vm._v("ETH")])
                    ]),
                    _c("div", [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.maxPethDrawDisplay) +
                          "\n                "
                      ),
                      _c("span", [_vm._v("PETH")]),
                      _vm._v(
                        " /\n                " +
                          _vm._s(_vm.maxUsdDrawDisplay) +
                          "\n                "
                      ),
                      _c("span", [_vm._v("USD")])
                    ]),
                    _c("button", { on: { click: _vm.showWithdraw } }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("dappsMaker.withdraw")) +
                          " >\n              "
                      )
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _c("div", { staticClass: "information-single-block" }, [
            _c("div", { staticClass: "block-item" }, [
              _c("div", { staticClass: "block-title" }, [
                _c("p", [_vm._v(_vm._s(_vm.$t("dappsMaker.daiPosition")))])
              ]),
              _c("div", { staticClass: "block-content-container" }, [
                _c("div", { staticClass: "block-content" }, [
                  _c("div", { staticClass: "item" }, [
                    _c("p", [_vm._v(_vm._s(_vm.$t("dappsMaker.generated")))]),
                    _c("div", [
                      _vm._v(_vm._s(_vm.debtValue) + " "),
                      _c("span", [_vm._v("DAI")])
                    ]),
                    _c("div", [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.debtValueDisplay) +
                          "\n                "
                      ),
                      _c("span", [_vm._v("USD")])
                    ]),
                    _c("button", { on: { click: _vm.showPayback } }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("dappsMaker.payBack")) +
                          " >\n              "
                      )
                    ])
                  ])
                ]),
                _c("div", { staticClass: "block-content" }, [
                  _c("div", { staticClass: "item" }, [
                    _c("p", [
                      _vm._v(_vm._s(_vm.$t("dappsMaker.maxAvailable")))
                    ]),
                    _c("div", [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.maxDai) +
                          "\n                "
                      ),
                      _c("span", [_vm._v("DAI")])
                    ]),
                    _c("div", [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.maxUsd) +
                          "\n                "
                      ),
                      _c("span", [_vm._v("USD")])
                    ]),
                    _c("button", { on: { click: _vm.showGenerate } }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("dappsMaker.generate")) +
                          " >\n              "
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]
      ),
      _c("help-link")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=style&index=0&id=79c51c62&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=style&index=0&id=79c51c62&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Bottom-help-link[data-v-79c51c62] {\n  padding: 20px 0;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=style&index=0&id=512e0126&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=style&index=0&id=512e0126&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".manage-cdp[data-v-512e0126] {\n  padding-bottom: 30px;\n}\n@media all and (max-width: 700px) {\n.manage-cdp[data-v-512e0126] {\n      padding-bottom: 10px;\n}\n}\n.manage-container[data-v-512e0126] {\n  padding: 40px;\n}\n@media all and (max-width: 700px) {\n.manage-container[data-v-512e0126] {\n      padding: 40px 20px 10px 20px;\n}\n}\n.title-content-container[data-v-512e0126] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding-bottom: 20px;\n}\n@media all and (max-width: 700px) {\n.title-content-container[data-v-512e0126] {\n      display: block;\n}\n}\n.title-content-container .cpd-title[data-v-512e0126] {\n    font-size: 16px;\n    color: #0b2840;\n    font-weight: 600;\n}\n.title-content-container .cdp-id[data-v-512e0126] {\n    margin-left: auto;\n    font-size: 16px;\n    color: #0b2840;\n    font-weight: 600;\n    text-align: right;\n}\n@media all and (max-width: 700px) {\n.title-content-container .cdp-id[data-v-512e0126] {\n        text-align: left;\n}\n}\n.information-blocks[data-v-512e0126] {\n  margin-top: 30px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 15px;\n}\n@media all and (max-width: 700px) {\n.information-blocks[data-v-512e0126] {\n      display: block;\n}\n}\n@media all and (max-width: 700px) {\n.information-blocks .block-item[data-v-512e0126] {\n      margin-bottom: 30px;\n}\n}\n.information-blocks .block-item .block-title[data-v-512e0126] {\n    padding: 0 20px;\n    margin-bottom: 5px;\n}\n.information-blocks .block-item .block-title p[data-v-512e0126] {\n      font-size: 14px;\n      font-weight: 600;\n      color: #0b2840;\n}\n.information-blocks .block-item .block-title .blue[data-v-512e0126] {\n      font-size: 16px;\n}\n.information-blocks .block-item .block-title .blue span[data-v-512e0126] {\n        font-size: 16px;\n        color: #5a78f0;\n        font-weight: 600;\n}\n.information-blocks .block-item .block-title .orange[data-v-512e0126] {\n      font-size: 16px;\n}\n.information-blocks .block-item .block-title .orange span[data-v-512e0126] {\n        font-size: 16px;\n        color: orange;\n        font-weight: 600;\n}\n.information-blocks .block-item .block-title .green[data-v-512e0126] {\n      font-size: 16px;\n}\n.information-blocks .block-item .block-title .green span[data-v-512e0126] {\n        font-size: 16px;\n        color: #05c0a5;\n        font-weight: 600;\n}\n.information-blocks .block-item .block-title .red[data-v-512e0126] {\n      font-size: 16px;\n}\n.information-blocks .block-item .block-title .red span[data-v-512e0126] {\n        font-size: 16px;\n        color: red;\n        font-weight: 600;\n}\n.information-blocks .block-item .block-content[data-v-512e0126] {\n    background-color: #f2fafa;\n    padding: 20px;\n}\n.information-blocks .block-item .block-content .item[data-v-512e0126] {\n      margin-bottom: 10px;\n}\n.information-blocks .block-item .block-content .item[data-v-512e0126]:last-child {\n        margin-bottom: 0;\n}\n.information-blocks .block-item .block-content .item div[data-v-512e0126] {\n        font-weight: 600;\n}\n.information-blocks .block-item .block-content .item div span[data-v-512e0126] {\n          font-weight: 400;\n}\n.information-single-block[data-v-512e0126] {\n  margin-top: 30px;\n}\n.information-single-block .block-item .block-title[data-v-512e0126] {\n    padding: 0 20px;\n    margin-bottom: 10px;\n}\n.information-single-block .block-item .block-title p[data-v-512e0126] {\n      font-size: 14px;\n      font-weight: 600;\n      color: #0b2840;\n}\n.information-single-block .block-item .block-title .blue[data-v-512e0126] {\n      font-size: 16px;\n}\n.information-single-block .block-item .block-title .blue span[data-v-512e0126] {\n        font-size: 16px;\n        color: #5a78f0;\n        font-weight: 600;\n}\n.information-single-block .block-item .block-title .orange[data-v-512e0126] {\n      font-size: 16px;\n}\n.information-single-block .block-item .block-title .orange span[data-v-512e0126] {\n        font-size: 16px;\n        color: orange;\n        font-weight: 600;\n}\n.information-single-block .block-item .block-content-container[data-v-512e0126] {\n    padding: 20px 0;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    background-color: #f2fafa;\n}\n@media all and (max-width: 700px) {\n.information-single-block .block-item .block-content-container[data-v-512e0126] {\n        display: block;\n        padding: 0 20px;\n}\n}\n.information-single-block .block-item .block-content[data-v-512e0126] {\n    padding: 0 20px;\n}\n@media all and (max-width: 700px) {\n.information-single-block .block-item .block-content[data-v-512e0126] {\n        padding: 20px 0;\n}\n}\n.information-single-block .block-item .block-content[data-v-512e0126]:nth-child(odd) {\n      border-right: 1px solid #c9f2ed;\n}\n@media all and (max-width: 700px) {\n.information-single-block .block-item .block-content[data-v-512e0126]:nth-child(odd) {\n          border-right: 0;\n          border-bottom: 1px solid #c9f2ed;\n}\n}\n.information-single-block .block-item .block-content .item[data-v-512e0126] {\n      margin-bottom: 10px;\n}\n.information-single-block .block-item .block-content .item[data-v-512e0126]:last-child {\n        margin-bottom: 0;\n}\n.information-single-block .block-item .block-content .item p[data-v-512e0126] {\n        margin-bottom: 10px;\n}\n.information-single-block .block-item .block-content .item div[data-v-512e0126] {\n        font-weight: 600;\n}\n.information-single-block .block-item .block-content .item div span[data-v-512e0126] {\n          font-weight: 400;\n}\n.information-single-block .block-item .block-content .item button[data-v-512e0126] {\n        background: none;\n        border: 0;\n        padding: 0;\n        margin: 10px 0 0 0;\n        color: #05c0a5;\n        font-weight: 600;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=style&index=0&id=79c51c62&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=style&index=0&id=79c51c62&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BottomHelpLink.vue?vue&type=style&index=0&id=79c51c62&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=style&index=0&id=79c51c62&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("feed96d6", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BottomHelpLink.vue?vue&type=style&index=0&id=79c51c62&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=style&index=0&id=79c51c62&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BottomHelpLink.vue?vue&type=style&index=0&id=79c51c62&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=style&index=0&id=79c51c62&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=style&index=0&id=512e0126&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=style&index=0&id=512e0126&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageCDP.vue?vue&type=style&index=0&id=512e0126&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=style&index=0&id=512e0126&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("173d1ae5", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageCDP.vue?vue&type=style&index=0&id=512e0126&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=style&index=0&id=512e0126&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageCDP.vue?vue&type=style&index=0&id=512e0126&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=style&index=0&id=512e0126&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/BottomHelpLink/BottomHelpLink.vue":
/*!**********************************************************!*\
  !*** ./src/components/BottomHelpLink/BottomHelpLink.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BottomHelpLink_vue_vue_type_template_id_79c51c62_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BottomHelpLink.vue?vue&type=template&id=79c51c62&scoped=true&lang=html& */ "./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=template&id=79c51c62&scoped=true&lang=html&");
/* harmony import */ var _BottomHelpLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BottomHelpLink.vue?vue&type=script&lang=js& */ "./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BottomHelpLink_vue_vue_type_style_index_0_id_79c51c62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BottomHelpLink.vue?vue&type=style&index=0&id=79c51c62&lang=scss&scoped=true& */ "./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=style&index=0&id=79c51c62&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BottomHelpLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BottomHelpLink_vue_vue_type_template_id_79c51c62_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BottomHelpLink_vue_vue_type_template_id_79c51c62_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "79c51c62",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('79c51c62')) {
      api.createRecord('79c51c62', component.options)
    } else {
      api.reload('79c51c62', component.options)
    }
    module.hot.accept(/*! ./BottomHelpLink.vue?vue&type=template&id=79c51c62&scoped=true&lang=html& */ "./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=template&id=79c51c62&scoped=true&lang=html&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _BottomHelpLink_vue_vue_type_template_id_79c51c62_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BottomHelpLink.vue?vue&type=template&id=79c51c62&scoped=true&lang=html& */ "./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=template&id=79c51c62&scoped=true&lang=html&");
(function () {
      api.rerender('79c51c62', {
        render: _BottomHelpLink_vue_vue_type_template_id_79c51c62_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _BottomHelpLink_vue_vue_type_template_id_79c51c62_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/components/BottomHelpLink/BottomHelpLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomHelpLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BottomHelpLink.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomHelpLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=style&index=0&id=79c51c62&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=style&index=0&id=79c51c62&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomHelpLink_vue_vue_type_style_index_0_id_79c51c62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BottomHelpLink.vue?vue&type=style&index=0&id=79c51c62&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=style&index=0&id=79c51c62&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomHelpLink_vue_vue_type_style_index_0_id_79c51c62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomHelpLink_vue_vue_type_style_index_0_id_79c51c62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomHelpLink_vue_vue_type_style_index_0_id_79c51c62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomHelpLink_vue_vue_type_style_index_0_id_79c51c62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomHelpLink_vue_vue_type_style_index_0_id_79c51c62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=template&id=79c51c62&scoped=true&lang=html&":
/*!***************************************************************************************************************!*\
  !*** ./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=template&id=79c51c62&scoped=true&lang=html& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_5569e56c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomHelpLink_vue_vue_type_template_id_79c51c62_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5569e56c-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BottomHelpLink.vue?vue&type=template&id=79c51c62&scoped=true&lang=html& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"5569e56c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BottomHelpLink/BottomHelpLink.vue?vue&type=template&id=79c51c62&scoped=true&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_5569e56c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomHelpLink_vue_vue_type_template_id_79c51c62_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_5569e56c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomHelpLink_vue_vue_type_template_id_79c51c62_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/BottomHelpLink/index.js":
/*!************************************************!*\
  !*** ./src/components/BottomHelpLink/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BottomHelpLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BottomHelpLink */ "./src/components/BottomHelpLink/BottomHelpLink.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _BottomHelpLink__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue":
/*!***************************************************************!*\
  !*** ./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ManageCDP_vue_vue_type_template_id_512e0126_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageCDP.vue?vue&type=template&id=512e0126&scoped=true& */ "./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=template&id=512e0126&scoped=true&");
/* harmony import */ var _ManageCDP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageCDP.vue?vue&type=script&lang=js& */ "./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ManageCDP_vue_vue_type_style_index_0_id_512e0126_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ManageCDP.vue?vue&type=style&index=0&id=512e0126&lang=scss&scoped=true& */ "./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=style&index=0&id=512e0126&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ManageCDP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ManageCDP_vue_vue_type_template_id_512e0126_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ManageCDP_vue_vue_type_template_id_512e0126_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "512e0126",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('512e0126')) {
      api.createRecord('512e0126', component.options)
    } else {
      api.reload('512e0126', component.options)
    }
    module.hot.accept(/*! ./ManageCDP.vue?vue&type=template&id=512e0126&scoped=true& */ "./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=template&id=512e0126&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ManageCDP_vue_vue_type_template_id_512e0126_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageCDP.vue?vue&type=template&id=512e0126&scoped=true& */ "./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=template&id=512e0126&scoped=true&");
(function () {
      api.rerender('512e0126', {
        render: _ManageCDP_vue_vue_type_template_id_512e0126_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ManageCDP_vue_vue_type_template_id_512e0126_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCDP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageCDP.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCDP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=style&index=0&id=512e0126&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=style&index=0&id=512e0126&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCDP_vue_vue_type_style_index_0_id_512e0126_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageCDP.vue?vue&type=style&index=0&id=512e0126&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=style&index=0&id=512e0126&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCDP_vue_vue_type_style_index_0_id_512e0126_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCDP_vue_vue_type_style_index_0_id_512e0126_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCDP_vue_vue_type_style_index_0_id_512e0126_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCDP_vue_vue_type_style_index_0_id_512e0126_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCDP_vue_vue_type_style_index_0_id_512e0126_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=template&id=512e0126&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=template&id=512e0126&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_5569e56c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCDP_vue_vue_type_template_id_512e0126_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5569e56c-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageCDP.vue?vue&type=template&id=512e0126&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"5569e56c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue?vue&type=template&id=512e0126&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_5569e56c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCDP_vue_vue_type_template_id_512e0126_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_5569e56c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCDP_vue_vue_type_template_id_512e0126_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/dapps/MakerDai/containers/ManageCDP/index.js":
/*!**********************************************************!*\
  !*** ./src/dapps/MakerDai/containers/ManageCDP/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ManageCDP__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageCDP */ "./src/dapps/MakerDai/containers/ManageCDP/ManageCDP.vue");

/* harmony default export */ __webpack_exports__["default"] = (_ManageCDP__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/dapps/MakerDai/helpers.js":
/*!***************************************!*\
  !*** ./src/dapps/MakerDai/helpers.js ***!
  \***************************************/
/*! exports provided: displayPercentValue, displayFixedValue, displayFixedPercent, maxDai, maxPethDraw, maxEthDraw, calcCollatRatio, calcLiquidationPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayPercentValue", function() { return displayPercentValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayFixedValue", function() { return displayFixedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayFixedPercent", function() { return displayFixedPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxDai", function() { return maxDai; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxPethDraw", function() { return maxPethDraw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxEthDraw", function() { return maxEthDraw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcCollatRatio", function() { return calcCollatRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcLiquidationPrice", function() { return calcLiquidationPrice; });
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);



var toBigNumber = function toBigNumber(num) {
  return new bignumber_js__WEBPACK_IMPORTED_MODULE_1___default.a(num);
};

var bnOver = function bnOver(one, two, three) {
  return toBigNumber(one).times(toBigNumber(two)).div(toBigNumber(three));
};

function displayPercentValue(raw) {
  if (!bignumber_js__WEBPACK_IMPORTED_MODULE_1___default.a.isBigNumber(raw)) raw = new bignumber_js__WEBPACK_IMPORTED_MODULE_1___default.a(raw);
  return raw.times(100).toString();
}
function displayFixedValue(raw) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var round = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (!bignumber_js__WEBPACK_IMPORTED_MODULE_1___default.a.isBigNumber(raw)) raw = new bignumber_js__WEBPACK_IMPORTED_MODULE_1___default.a(raw);
  if (!isFinite(raw) || isNaN(raw)) return '--';
  if (round) return raw.toFixed(decimals, bignumber_js__WEBPACK_IMPORTED_MODULE_1___default.a.ROUND_DOWN).toString();
  return raw.toFixed(decimals).toString();
}
function displayFixedPercent(raw) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var round = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var value = displayFixedValue(displayPercentValue(raw), decimals, round);

  if (isFinite(value) && new bignumber_js__WEBPACK_IMPORTED_MODULE_1___default.a(value).gt(0)) {
    return value;
  }

  return '--';
} // Calculations

function maxDai(ethPrice, ethCollateral, liquidationRatio, debtValue) {
  return bnOver(toBigNumber(ethPrice), toBigNumber(ethCollateral), toBigNumber(liquidationRatio)).minus(toBigNumber(debtValue));
}
function maxPethDraw(pethCollateral, liquidationRatio, debtValue, pethPrice) {
  var pethMin = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  return toBigNumber(pethCollateral).minus(bnOver(toBigNumber(liquidationRatio).plus(0.001), toBigNumber(debtValue), toBigNumber(pethPrice))).minus(toBigNumber(pethMin).times(1.0));
}
function maxEthDraw(ethCollateral, liquidationRatio, debtValue, ethPrice) {
  var minEth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  return toBigNumber(ethCollateral).minus(bnOver(toBigNumber(liquidationRatio), toBigNumber(debtValue), toBigNumber(ethPrice))).minus(toBigNumber(minEth).times(1.0));
}
function calcCollatRatio(ethQty, daiQty, ethPrice) {
  return bnOver(toBigNumber(ethPrice), ethQty, daiQty);
}
function calcLiquidationPrice(ethQty, daiQty, ethPrice, liquidationRatio) {
  var getInt = parseInt(ethPrice);

  for (var i = getInt; i > 0; i--) {
    var atValue = bnOver(i, ethQty, daiQty).lte(toBigNumber(liquidationRatio));

    if (atValue) {
      return i;
    }
  }

  for (var _i = 100; _i > 0; _i--) {
    var _atValue = bnOver(_i / 100, ethQty, daiQty).lte(toBigNumber(liquidationRatio));

    if (_atValue) {
      return _i / 100;
    }
  }

  return 0;
}

/***/ })

}]);
//# sourceMappingURL=26.js.map