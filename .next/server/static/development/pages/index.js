module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/iMac/projects/podcast/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  render() {\n    return __jsx(\"div\", {\n      className: \"jsx-227286726\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 5,\n        columnNumber: 10\n      }\n    }, __jsx(\"h1\", {\n      className: \"jsx-227286726\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 3\n      }\n    }, \"Hola platzi !\"), __jsx(\"p\", {\n      className: \"jsx-227286726\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 3\n      }\n    }, \"Bienvenidos al curso de Next Js\"), __jsx(\"img\", {\n      src: \"./platzi-logo.png\",\n      alt: \"Platzi\",\n      className: \"jsx-227286726\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 3\n      }\n    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n      id: \"441720775\",\n      __self: this\n    }, \"h1.jsx-227286726{color:red;}p.jsx-227286726{color:green;}img.jsx-227286726{max-width:50%;display:block;margin:0 auto;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pTWFjL3Byb2plY3RzL3BvZGNhc3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2MsQUFHZSxBQUdFLEFBR0UsVUFMZixFQUdBLEVBR2UsY0FDQSxjQUNmIiwiZmlsZSI6Ii9Vc2Vycy9pTWFjL3Byb2plY3RzL3BvZGNhc3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiA8ZGl2PlxuXG5cdFx0PGgxPkhvbGEgcGxhdHppICE8L2gxPlxuXHRcdDxwPkJpZW52ZW5pZG9zIGFsIGN1cnNvIGRlIE5leHQgSnM8L3A+XG5cblx0XHQ8aW1nIHNyYz0nLi9wbGF0emktbG9nby5wbmcnIGFsdD0nUGxhdHppJy8+XG5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRoMSB7XG5cdFx0XHRcdGNvbG9yOiByZWQ7XG5cdFx0XHR9XG5cdFx0XHRwIHtcblx0XHRcdFx0Y29sb3I6IGdyZWVuO1xuXHRcdFx0fVxuXHRcdFx0aW1nIHtcblx0XHRcdFx0bWF4LXdpZHRoOiA1MCU7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdH1cblx0XHRgfTwvc3R5bGU+XG5cblx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0Ym9keSB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGJsYWNrO1xuXHRcdFx0fVxuXHRcdGB9PC9zdHlsZT5cblxuXHRcdDwvZGl2PlxuXHR9XG59Il19 */\\n/*@ sourceURL=/Users/iMac/projects/podcast/pages/index.js */\"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n      id: \"1639572264\",\n      __self: this\n    }, \"body{background:black;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pTWFjL3Byb2plY3RzL3BvZGNhc3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJxQixBQUdzQixpQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2lNYWMvcHJvamVjdHMvcG9kY2FzdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIDxkaXY+XG5cblx0XHQ8aDE+SG9sYSBwbGF0emkgITwvaDE+XG5cdFx0PHA+QmllbnZlbmlkb3MgYWwgY3Vyc28gZGUgTmV4dCBKczwvcD5cblxuXHRcdDxpbWcgc3JjPScuL3BsYXR6aS1sb2dvLnBuZycgYWx0PSdQbGF0emknLz5cblxuXHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdGgxIHtcblx0XHRcdFx0Y29sb3I6IHJlZDtcblx0XHRcdH1cblx0XHRcdHAge1xuXHRcdFx0XHRjb2xvcjogZ3JlZW47XG5cdFx0XHR9XG5cdFx0XHRpbWcge1xuXHRcdFx0XHRtYXgtd2lkdGg6IDUwJTtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0fVxuXHRcdGB9PC9zdHlsZT5cblxuXHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRib2R5IHtcblx0XHRcdFx0YmFja2dyb3VuZDogYmxhY2s7XG5cdFx0XHR9XG5cdFx0YH08L3N0eWxlPlxuXG5cdFx0PC9kaXY+XG5cdH1cbn0iXX0= */\\n/*@ sourceURL=/Users/iMac/projects/podcast/pages/index.js */\"));\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRWUsNkVBQWNBLDRDQUFLLENBQUNDLFNBQXBCLENBQThCO0FBQzVDQyxRQUFNLEdBQUc7QUFDUixXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGTyxFQUdQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FITyxFQUtQO0FBQUssU0FBRyxFQUFDLG1CQUFUO0FBQTZCLFNBQUcsRUFBQyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5cENBQVA7QUE0QkE7O0FBOUIyQyxDIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiA8ZGl2PlxuXG5cdFx0PGgxPkhvbGEgcGxhdHppICE8L2gxPlxuXHRcdDxwPkJpZW52ZW5pZG9zIGFsIGN1cnNvIGRlIE5leHQgSnM8L3A+XG5cblx0XHQ8aW1nIHNyYz0nLi9wbGF0emktbG9nby5wbmcnIGFsdD0nUGxhdHppJy8+XG5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRoMSB7XG5cdFx0XHRcdGNvbG9yOiByZWQ7XG5cdFx0XHR9XG5cdFx0XHRwIHtcblx0XHRcdFx0Y29sb3I6IGdyZWVuO1xuXHRcdFx0fVxuXHRcdFx0aW1nIHtcblx0XHRcdFx0bWF4LXdpZHRoOiA1MCU7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdH1cblx0XHRgfTwvc3R5bGU+XG5cblx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0Ym9keSB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGJsYWNrO1xuXHRcdFx0fVxuXHRcdGB9PC9zdHlsZT5cblxuXHRcdDwvZGl2PlxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/iMac/projects/podcast/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });