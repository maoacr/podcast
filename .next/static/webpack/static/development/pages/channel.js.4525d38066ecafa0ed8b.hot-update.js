webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./pages/channel.js":
/*!**************************!*\
  !*** ./pages/channel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_ChannelGrid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ChannelGrid */ \"./components/ChannelGrid.js\");\n/* harmony import */ var _components_PodcastList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/PodcastList */ \"./components/PodcastList.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/iMac/projects/podcast/pages/channel.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar _default = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_default, _React$Component);\n\n  var _super = _createSuper(_default);\n\n  function _default() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, _default);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_default, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          channel = _this$props.channel,\n          audioClips = _this$props.audioClips,\n          series = _this$props.series,\n          statusCode = _this$props.statusCode;\n\n      if (statusCode !== 200) {\n        return __jsx(next_error__WEBPACK_IMPORTED_MODULE_14___default.a, {\n          statusCode: statusCode,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 14\n          }\n        });\n      }\n\n      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        title: channel.title,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 12\n        }\n      }, __jsx(\"div\", {\n        style: {\n          backgroundImage: \"url(\".concat(channel.urls.banner_image.original, \")\")\n        },\n        className: \"jsx-1404733386\" + \" \" + \"banner\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 7\n        }\n      }), __jsx(\"h1\", {\n        className: \"jsx-1404733386\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 7\n        }\n      }, channel.title), series.length > 0 && __jsx(\"div\", {\n        className: \"jsx-1404733386\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 9\n        }\n      }, __jsx(\"h2\", {\n        className: \"jsx-1404733386\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }\n      }, \"Series\"), __jsx(_components_ChannelGrid__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n        channels: series,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }\n      })), __jsx(\"h2\", {\n        className: \"jsx-1404733386\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 7\n        }\n      }, \"Ultimos Podcasts\"), __jsx(_components_PodcastList__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        podcasts: audioClips,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 7\n        }\n      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        id: \"1404733386\",\n        __self: this\n      }, \".banner.jsx-1404733386{width:100%;padding-bottom:25%;background-position:50% 50%;background-size:cover;background-color:#aaa;}h1.jsx-1404733386{font-weight:600;padding:15px;}h2.jsx-1404733386{padding:15px;font-size:1.2em;font-weight:600;margin:0;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pTWFjL3Byb2plY3RzL3BvZGNhc3QvcGFnZXMvY2hhbm5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRWtCLEFBR3NCLEFBT0ssQUFJSCxXQVZNLEVBV0gsR0FKSCxhQUNmLEFBSWtCLENBWFksZUFZbkIsU0FDWCxJQVp3QixzQkFDQSxzQkFDeEIiLCJmaWxlIjoiL1VzZXJzL2lNYWMvcHJvamVjdHMvcG9kY2FzdC9wYWdlcy9jaGFubmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBDaGFubmVsR3JpZCBmcm9tICcuLi9jb21wb25lbnRzL0NoYW5uZWxHcmlkJ1xuaW1wb3J0IFBvZGNhc3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUG9kY2FzdExpc3QnXG5pbXBvcnQgRXJyb3IgZnJvbSAnbmV4dC9lcnJvcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSwgcmVzIH0pIHtcblxuICAgIHRyeSB7XG4gICAgICBsZXQgaWRDaGFubmVsID0gcXVlcnkuaWRcblxuICAgICAgbGV0IFtyZXFDaGFubmVsLCByZXFTZXJpZXMsIHJlcUF1ZGlvc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfWApLFxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vY2hpbGRfY2hhbm5lbHNgKSxcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2F1ZGlvX2NsaXBzYClcbiAgICAgIF0pXG5cbiAgICAgIGlmKHJlcUNoYW5uZWwuc3RhdHVzID49IDQwMCkge1xuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IHJlcUNoYW5uZWwuc3RhdHVzXG4gICAgICAgIHJldHVybiB7IGNoYW5uZWw6IG51bGwsIGF1ZGlvQ2xpcHM6IG51bGwsIHNlcmllczogbnVsbCwgc3RhdHVzQ29kZTogcmVxQ2hhbm5lbC5zdGF0dXMgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUNoYW5uZWwgPSBhd2FpdCByZXFDaGFubmVsLmpzb24oKVxuICAgICAgbGV0IGNoYW5uZWwgPSBkYXRhQ2hhbm5lbC5ib2R5LmNoYW5uZWxcblxuICAgICAgbGV0IGRhdGFBdWRpb3MgPSBhd2FpdCByZXFBdWRpb3MuanNvbigpXG4gICAgICBsZXQgYXVkaW9DbGlwcyA9IGRhdGFBdWRpb3MuYm9keS5hdWRpb19jbGlwc1xuXG4gICAgICBsZXQgZGF0YVNlcmllcyA9IGF3YWl0IHJlcVNlcmllcy5qc29uKClcbiAgICAgIGxldCBzZXJpZXMgPSBkYXRhU2VyaWVzLmJvZHkuY2hhbm5lbHNcblxuICAgICAgcmV0dXJuIHsgY2hhbm5lbCwgYXVkaW9DbGlwcywgc2VyaWVzLCBzdGF0dXNDb2RlIH1cblxuXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICByZXR1cm4geyBjaGFubmVsOiBudWxsLCBhdWRpb0NsaXBzOiBudWxsLCBzZXJpZXM6IG51bGwsIHN0YXR1c0NvZGU6IHJlcy5zdGF0dXNDb2RlIH1cbiAgICB9XG5cbiAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoYW5uZWwsIGF1ZGlvQ2xpcHMsIHNlcmllcywgc3RhdHVzQ29kZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYoc3RhdHVzQ29kZSAhPT0gMjAwKSB7XG4gICAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9e3N0YXR1c0NvZGV9IC8+XG4gICAgfVxuXG4gICAgcmV0dXJuIDxMYXlvdXQgdGl0bGU9e2NoYW5uZWwudGl0bGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjaGFubmVsLnVybHMuYmFubmVyX2ltYWdlLm9yaWdpbmFsfSlgIH19IC8+XG4gICAgICBcbiAgICAgIDxoMT57IGNoYW5uZWwudGl0bGUgfTwvaDE+XG5cbiAgICAgIHsgc2VyaWVzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+U2VyaWVzPC9oMj5cbiAgICAgICAgICA8Q2hhbm5lbEdyaWQgY2hhbm5lbHM9eyBzZXJpZXMgfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cblxuICAgICAgPGgyPlVsdGltb3MgUG9kY2FzdHM8L2gyPlxuICAgICAgPFBvZGNhc3RMaXN0IHBvZGNhc3RzPXsgYXVkaW9DbGlwcyB9IC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmJhbm5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI1JTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgfVxufSJdfQ== */\\n/*@ sourceURL=/Users/iMac/projects/podcast/pages/channel.js */\"));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n        var query, res, idChannel, _yield$Promise$all, _yield$Promise$all2, reqChannel, reqSeries, reqAudios, dataChannel, channel, dataAudios, audioClips, dataSeries, series;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                query = _ref.query, res = _ref.res;\n                _context.prev = 1;\n                idChannel = query.id;\n                _context.next = 5;\n                return Promise.all([fetch(\"https://api.audioboom.com/channels/\".concat(idChannel)), fetch(\"https://api.audioboom.com/channels/\".concat(idChannel, \"/child_channels\")), fetch(\"https://api.audioboom.com/channels/\".concat(idChannel, \"/audio_clips\"))]);\n\n              case 5:\n                _yield$Promise$all = _context.sent;\n                _yield$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_yield$Promise$all, 3);\n                reqChannel = _yield$Promise$all2[0];\n                reqSeries = _yield$Promise$all2[1];\n                reqAudios = _yield$Promise$all2[2];\n\n                if (!(reqChannel.status >= 400)) {\n                  _context.next = 13;\n                  break;\n                }\n\n                res.statusCode = reqChannel.status;\n                return _context.abrupt(\"return\", {\n                  channel: null,\n                  audioClips: null,\n                  series: null,\n                  statusCode: reqChannel.status\n                });\n\n              case 13:\n                _context.next = 15;\n                return reqChannel.json();\n\n              case 15:\n                dataChannel = _context.sent;\n                channel = dataChannel.body.channel;\n                _context.next = 19;\n                return reqAudios.json();\n\n              case 19:\n                dataAudios = _context.sent;\n                audioClips = dataAudios.body.audio_clips;\n                _context.next = 23;\n                return reqSeries.json();\n\n              case 23:\n                dataSeries = _context.sent;\n                series = dataSeries.body.channels;\n                return _context.abrupt(\"return\", {\n                  channel: channel,\n                  audioClips: audioClips,\n                  series: series,\n                  statusCode: statusCode\n                });\n\n              case 28:\n                _context.prev = 28;\n                _context.t0 = _context[\"catch\"](1);\n                return _context.abrupt(\"return\", {\n                  channel: null,\n                  audioClips: null,\n                  series: null,\n                  statusCode: res.statusCode\n                });\n\n              case 31:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[1, 28]]);\n      }));\n\n      function getInitialProps(_x) {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return _default;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGFubmVsLmpzPzgxODIiXSwibmFtZXMiOlsicHJvcHMiLCJjaGFubmVsIiwiYXVkaW9DbGlwcyIsInNlcmllcyIsInN0YXR1c0NvZGUiLCJ0aXRsZSIsImJhY2tncm91bmRJbWFnZSIsInVybHMiLCJiYW5uZXJfaW1hZ2UiLCJvcmlnaW5hbCIsImxlbmd0aCIsInF1ZXJ5IiwicmVzIiwiaWRDaGFubmVsIiwiaWQiLCJQcm9taXNlIiwiYWxsIiwiZmV0Y2giLCJyZXFDaGFubmVsIiwicmVxU2VyaWVzIiwicmVxQXVkaW9zIiwic3RhdHVzIiwianNvbiIsImRhdGFDaGFubmVsIiwiYm9keSIsImRhdGFBdWRpb3MiLCJhdWRpb19jbGlwcyIsImRhdGFTZXJpZXMiLCJjaGFubmVscyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7NkJBdUNXO0FBQUEsd0JBQzZDLEtBQUtBLEtBRGxEO0FBQUEsVUFDQ0MsT0FERCxlQUNDQSxPQUREO0FBQUEsVUFDVUMsVUFEVixlQUNVQSxVQURWO0FBQUEsVUFDc0JDLE1BRHRCLGVBQ3NCQSxNQUR0QjtBQUFBLFVBQzhCQyxVQUQ5QixlQUM4QkEsVUFEOUI7O0FBR1AsVUFBR0EsVUFBVSxLQUFLLEdBQWxCLEVBQXVCO0FBQ3JCLGVBQU8sTUFBQyxrREFBRDtBQUFPLG9CQUFVLEVBQUVBLFVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVELGFBQU8sTUFBQywyREFBRDtBQUFRLGFBQUssRUFBRUgsT0FBTyxDQUFDSSxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0w7QUFBd0IsYUFBSyxFQUFFO0FBQUVDLHlCQUFlLGdCQUFTTCxPQUFPLENBQUNNLElBQVIsQ0FBYUMsWUFBYixDQUEwQkMsUUFBbkM7QUFBakIsU0FBL0I7QUFBQSw0Q0FBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESyxFQUdMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFNUixPQUFPLENBQUNJLEtBQWQsQ0FISyxFQUtIRixNQUFNLENBQUNPLE1BQVAsR0FBZ0IsQ0FBaEIsSUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRSxNQUFDLGdFQUFEO0FBQWEsZ0JBQVEsRUFBR1AsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBTkcsRUFZTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBWkssRUFhTCxNQUFDLGdFQUFEO0FBQWEsZ0JBQVEsRUFBR0QsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWJLO0FBQUE7QUFBQTtBQUFBLHkySEFBUDtBQW1DRDs7Ozs7Ozs7Ozs7QUE3RThCUyxxQixRQUFBQSxLLEVBQU9DLEcsUUFBQUEsRzs7QUFHOUJDLHlCLEdBQVlGLEtBQUssQ0FBQ0csRTs7dUJBRXlCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUN6REMsS0FBSyw4Q0FBdUNKLFNBQXZDLEVBRG9ELEVBRXpESSxLQUFLLDhDQUF1Q0osU0FBdkMscUJBRm9ELEVBR3pESSxLQUFLLDhDQUF1Q0osU0FBdkMsa0JBSG9ELENBQVosQzs7Ozs7QUFBMUNLLDBCO0FBQVlDLHlCO0FBQVdDLHlCOztzQkFNekJGLFVBQVUsQ0FBQ0csTUFBWCxJQUFxQixHOzs7OztBQUN0QlQsbUJBQUcsQ0FBQ1IsVUFBSixHQUFpQmMsVUFBVSxDQUFDRyxNQUE1QjtpREFDTztBQUFFcEIseUJBQU8sRUFBRSxJQUFYO0FBQWlCQyw0QkFBVSxFQUFFLElBQTdCO0FBQW1DQyx3QkFBTSxFQUFFLElBQTNDO0FBQWlEQyw0QkFBVSxFQUFFYyxVQUFVLENBQUNHO0FBQXhFLGlCOzs7O3VCQUdlSCxVQUFVLENBQUNJLElBQVgsRTs7O0FBQXBCQywyQjtBQUNBdEIsdUIsR0FBVXNCLFdBQVcsQ0FBQ0MsSUFBWixDQUFpQnZCLE87O3VCQUVSbUIsU0FBUyxDQUFDRSxJQUFWLEU7OztBQUFuQkcsMEI7QUFDQXZCLDBCLEdBQWF1QixVQUFVLENBQUNELElBQVgsQ0FBZ0JFLFc7O3VCQUVWUCxTQUFTLENBQUNHLElBQVYsRTs7O0FBQW5CSywwQjtBQUNBeEIsc0IsR0FBU3dCLFVBQVUsQ0FBQ0gsSUFBWCxDQUFnQkksUTtpREFFdEI7QUFBRTNCLHlCQUFPLEVBQVBBLE9BQUY7QUFBV0MsNEJBQVUsRUFBVkEsVUFBWDtBQUF1QkMsd0JBQU0sRUFBTkEsTUFBdkI7QUFBK0JDLDRCQUFVLEVBQVZBO0FBQS9CLGlCOzs7OztpREFJQTtBQUFFSCx5QkFBTyxFQUFFLElBQVg7QUFBaUJDLDRCQUFVLEVBQUUsSUFBN0I7QUFBbUNDLHdCQUFNLEVBQUUsSUFBM0M7QUFBaURDLDRCQUFVLEVBQUVRLEdBQUcsQ0FBQ1I7QUFBakUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEvQmdCeUIsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiIuL3BhZ2VzL2NoYW5uZWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IENoYW5uZWxHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhbm5lbEdyaWQnXG5pbXBvcnQgUG9kY2FzdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qb2RjYXN0TGlzdCdcbmltcG9ydCBFcnJvciBmcm9tICduZXh0L2Vycm9yJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5LCByZXMgfSkge1xuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBpZENoYW5uZWwgPSBxdWVyeS5pZFxuXG4gICAgICBsZXQgW3JlcUNoYW5uZWwsIHJlcVNlcmllcywgcmVxQXVkaW9zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9YCksXG4gICAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9jaGlsZF9jaGFubmVsc2ApLFxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vYXVkaW9fY2xpcHNgKVxuICAgICAgXSlcblxuICAgICAgaWYocmVxQ2hhbm5lbC5zdGF0dXMgPj0gNDAwKSB7XG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gcmVxQ2hhbm5lbC5zdGF0dXNcbiAgICAgICAgcmV0dXJuIHsgY2hhbm5lbDogbnVsbCwgYXVkaW9DbGlwczogbnVsbCwgc2VyaWVzOiBudWxsLCBzdGF0dXNDb2RlOiByZXFDaGFubmVsLnN0YXR1cyB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhQ2hhbm5lbCA9IGF3YWl0IHJlcUNoYW5uZWwuanNvbigpXG4gICAgICBsZXQgY2hhbm5lbCA9IGRhdGFDaGFubmVsLmJvZHkuY2hhbm5lbFxuXG4gICAgICBsZXQgZGF0YUF1ZGlvcyA9IGF3YWl0IHJlcUF1ZGlvcy5qc29uKClcbiAgICAgIGxldCBhdWRpb0NsaXBzID0gZGF0YUF1ZGlvcy5ib2R5LmF1ZGlvX2NsaXBzXG5cbiAgICAgIGxldCBkYXRhU2VyaWVzID0gYXdhaXQgcmVxU2VyaWVzLmpzb24oKVxuICAgICAgbGV0IHNlcmllcyA9IGRhdGFTZXJpZXMuYm9keS5jaGFubmVsc1xuXG4gICAgICByZXR1cm4geyBjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXMsIHN0YXR1c0NvZGUgfVxuXG5cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIHJldHVybiB7IGNoYW5uZWw6IG51bGwsIGF1ZGlvQ2xpcHM6IG51bGwsIHNlcmllczogbnVsbCwgc3RhdHVzQ29kZTogcmVzLnN0YXR1c0NvZGUgfVxuICAgIH1cblxuICAgIFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hhbm5lbCwgYXVkaW9DbGlwcywgc2VyaWVzLCBzdGF0dXNDb2RlIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZihzdGF0dXNDb2RlICE9PSAyMDApIHtcbiAgICAgIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17c3RhdHVzQ29kZX0gLz5cbiAgICB9XG5cbiAgICByZXR1cm4gPExheW91dCB0aXRsZT17Y2hhbm5lbC50aXRsZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2NoYW5uZWwudXJscy5iYW5uZXJfaW1hZ2Uub3JpZ2luYWx9KWAgfX0gLz5cbiAgICAgIFxuICAgICAgPGgxPnsgY2hhbm5lbC50aXRsZSB9PC9oMT5cblxuICAgICAgeyBzZXJpZXMubGVuZ3RoID4gMCAmJlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj5TZXJpZXM8L2gyPlxuICAgICAgICAgIDxDaGFubmVsR3JpZCBjaGFubmVscz17IHNlcmllcyB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuXG4gICAgICA8aDI+VWx0aW1vcyBQb2RjYXN0czwvaDI+XG4gICAgICA8UG9kY2FzdExpc3QgcG9kY2FzdHM9eyBhdWRpb0NsaXBzIH0gLz5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYmFubmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjUlO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/channel.js\n");

/***/ })

})