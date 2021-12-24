/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: pink;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 10px;\\r\\n  margin-top: 50px;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 50px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n  display: flex;\\r\\n  list-style: none;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nnav ul li {\\r\\n  margin: 30px;\\r\\n  font-size: 30px;\\r\\n  border: 1px solid purple;\\r\\n  border-radius: 18px;\\r\\n  padding: 10px;\\r\\n  background-color: seashell;\\r\\n}\\r\\n\\r\\nsection .cards {\\r\\n  margin-top: 50px;\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr 1fr;\\r\\n  place-items: center;\\r\\n  gap: 30px;\\r\\n  margin-bottom: 50px;\\r\\n}\\r\\n\\r\\n.img {\\r\\n  width: 400px;\\r\\n  height: 550px;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  font-size: 30px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.fa-heart {\\r\\n  color: tomato;\\r\\n}\\r\\n\\r\\n.likes-count {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 15px 20px;\\r\\n}\\r\\n\\r\\n.likes-count span {\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\n.button {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  font-size: 25px;\\r\\n  width: 250px;\\r\\n  height: 40px;\\r\\n  margin: 5px;\\r\\n  background-color: rgb(235, 231, 224);\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  border: 3px solid black;\\r\\n  height: 180px;\\r\\n}\\r\\n\\r\\nfooter p {\\r\\n  font-size: 20px;\\r\\n  font-size: 40px;\\r\\n}\\r\\n\\r\\n.commentPopUp {\\r\\n  display: flex;\\r\\n  background-color: rgb(230, 223, 224);\\r\\n  font-size: 30px;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  z-index: 1;\\r\\n  width: 100%;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.popup-box {\\r\\n  display: flex;\\r\\n  padding: 30px;\\r\\n  justify-content: space-evenly;\\r\\n}\\r\\n\\r\\n.fa-times {\\r\\n  display: flex;\\r\\n  justify-content: end;\\r\\n}\\r\\n\\r\\n.details {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr;\\r\\n  place-items: center;\\r\\n  gap: 30px;\\r\\n  margin-top: 50px;\\r\\n  margin-bottom: 50px;\\r\\n}\\r\\n\\r\\n.comment-section {\\r\\n  display: flex;\\r\\n  padding: 30px;\\r\\n  justify-content: space-evenly;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n#username {\\r\\n  width: 200px;\\r\\n  height: 40px;\\r\\n  outline: none;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n#comment {\\r\\n  width: 200px;\\r\\n  height: 80px;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#displayComments {\\r\\n  width: 500px;\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  border: 1px solid black;\\r\\n}\\r\\n\\r\\n#displayComments li {\\r\\n  width: 100%; \\r\\n}\\r\\n\\r\\n#displayComments li:nth-child(even) { \\r\\n  background-color: whitesmoke;\\r\\n}\\r\\n\\r\\n.edit {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n#submit {\\r\\n  margin: 20px 0;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

  /***/ }),
  
  /***/ "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/
  /***/ ((module) => {
  
  eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");
  
  /***/ }),
  
  /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
  /*!**************************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
    \**************************************************************/
  /***/ ((module) => {
  
  eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");
  
  /***/ }),
  
  /***/ "./src/style.css":
  /*!***********************!*\
    !*** ./src/style.css ***!
    \***********************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/
  /***/ ((module) => {
  
  eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
  /*!********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
    \********************************************************************/
  /***/ ((module) => {
  
  eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
    \**********************************************************************/
  /***/ ((module) => {
  
  eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
    \**********************************************************************************/
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
  
  eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
  /*!***************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
    \***************************************************************/
  /***/ ((module) => {
  
  eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
    \*********************************************************************/
  /***/ ((module) => {
  
  eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");
  
  /***/ }),
  
  /***/ "./src/comment.js":
  /*!************************!*\
    !*** ./src/comment.js ***!
    \************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postComments\": () => (/* binding */ postComments),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments)\n/* harmony export */ });\nconst commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q4ShCASnnzP55bg7hv5u/comments';\r\n\r\nconst postComments = async (obj) => {\r\n  await fetch(commentURL, {\r\n    method: 'POST',\r\n    cache: 'no-cache',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify(obj),\r\n  });\r\n};\r\n\r\nconst getComments = async (id) => {\r\n  const response = await fetch(`${commentURL}?item_id=${id}`);\r\n  const resData = await response.json();\r\n  return resData;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/comment.js?");
  
  /***/ }),
  
  /***/ "./src/index.js":
  /*!**********************!*\
    !*** ./src/index.js ***!
    \**********************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment.js */ \"./src/comment.js\");\n\r\n\r\n\r\nconst url = 'https://api.tvmaze.com/shows';\r\nconst countUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q4ShCASnnzP55bg7hv5u/likes';\r\nconst elem = document.querySelector('.cards');\r\nlet data;\r\n\r\nfunction render(data) {\r\n  document.querySelector('h1').innerText += ` (${data.length})`;\r\n  elem.innerHTML = '';\r\n  for (let i = 0; i < data.length; i += 1) {\r\n    elem.innerHTML += `\r\n<div class=\"cards-info\" id='movie-${data[i].id}'>\r\n         <img src=${data[i].image.medium} alt=\"\" class=\"img\">\r\n            <p class=description>${data[i].name}</p>\r\n<div class='likes-count'> \r\n      <i class=\"fas fa-heart fa-3x\" ></i>\r\n      <span>Likes-${data[i].likes}</span>\r\n      </div>\r\n            <div class=\"button\">\r\n              <button class=\"cmntBtn-button\">Comments</button>\r\n              <button class='reBtn'>Reservations</button>\r\n            </div>\r\n          </div>\r\n        </div>`;\r\n  }\r\n  async function count(obj) {\r\n    await fetch(countUrl,\r\n      {\r\n        method: 'POST',\r\n        headers: { 'Content-Type': 'application/json' },\r\n        body: JSON.stringify(obj),\r\n      });\r\n  }\r\n\r\n  document.querySelectorAll('i').forEach((like) => {\r\n    like.addEventListener('click', () => {\r\n      const obj = { item_id: like.id };\r\n      const id = Number(like.parentNode.parentNode.id.split('-')[1]);\r\n      const movie = data.find((x) => x.id === id);\r\n      movie.likes += 1;\r\n      obj.likes = movie.likes;\r\n      like.parentNode.querySelector('span').innerText = `Likes-${obj.likes}`;\r\n      count(obj);\r\n    });\r\n  });\r\n\r\n  const clearInputsFields = () => {\r\n    const userName = document.querySelector('#username');\r\n    const userComment = document.querySelector('#comment');\r\n    userName.value = '';\r\n    userComment.value = '';\r\n  };\r\n\r\n  document.querySelectorAll('.cmntBtn-button').forEach((item) => {\r\n    item.addEventListener('click', async () => {\r\n      const id = Number(item.parentNode.parentNode.id.split('-')[1]);\r\n      const movie = data.find((x) => x.id === id);\r\n      const showComment = document.querySelector('.commentPopUp');\r\n      showComment.style.display = 'block';\r\n      elem.style.opacity = '0.1';\r\n      const comments = await (0,_comment_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(item.parentNode.parentNode.id);\r\n      showComment.innerHTML = `\r\n    <div class=\"popup\">\r\n    <span>\r\n    <i class=\"fas fa-times fa-3x\"></i>\r\n    </span>\r\n    <div class=\"popup-box\">\r\n        <div class=\"popup-info\">\r\n            <img src=${movie.image.medium} class =\"popup-image\" alt=\"\">\r\n            <p class=\"name\">${movie.name}</p>\r\n        </div>\r\n        <div class=\"details\">\r\n            <p>Title: ${movie.name}</p>\r\n            <p>Language: ${movie.language}</p>\r\n            <p>Runtime: ${movie.runtime}</p>\r\n            <p>Status: ${movie.status}</p>\r\n        </div>\r\n        </div>\r\n        <div class=\"comment-section\">\r\n            <div class=\"edit\">\r\n            <h5>Add a comment</h5>\r\n            <input type=\"text\" id=\"username\" placeholder=\"Your name\">\r\n            <textarea type=\"text\" id=\"comment\" placeholder=\"Your comments\"></textarea>\r\n            <p id=\"error\"></p>\r\n            <button type=\"submit\" id=\"submit\" class=\"commentBtn\">Comment</button>\r\n            </div>\r\n            <div>\r\n            <h5 class=\"comment\">comments(${comments.length})</h5>\r\n            <ul id=\"displayComments\">\r\n            ${comments.error ? '' : comments.map((c) => `<li><b>${c.username}</b> ${c.comment}</li>`)}\r\n            </ul>\r\n            </div>\r\n            </div>\r\n    </div>\r\n`;\r\n      document.querySelector('.fa-times').addEventListener('click', () => {\r\n        showComment.style.display = 'none';\r\n        elem.style.opacity = 'unset';\r\n      });\r\n      const submitBtn = document.querySelector('#submit');\r\n      submitBtn.addEventListener('click', () => {\r\n        const userName = document.querySelector('#username').value;\r\n        const userComment = document.querySelector('#comment').value;\r\n\r\n        if (userName === '' || userComment === '') {\r\n          const displayError = document.querySelector('#error');\r\n          displayError.innerHTML = '*All fields must be filled';\r\n          setTimeout(() => {\r\n            displayError.remove();\r\n          }, 5000);\r\n        } else {\r\n          const obj = {\r\n            item_id: item.parentNode.parentNode.id,\r\n            username: userName,\r\n            comment: userComment,\r\n          };\r\n          (0,_comment_js__WEBPACK_IMPORTED_MODULE_1__.postComments)(obj);\r\n          clearInputsFields();\r\n          const commentElement = document.querySelector('#displayComments');\r\n          commentElement.innerHTML += `<li><b>${obj.username}</b> ${obj.comment}</li>`;\r\n        }\r\n      });\r\n    });\r\n  });\r\n}\r\n\r\nasync function getShows() {\r\n  const response = await fetch(url);\r\n  data = await response.json();\r\n  const response1 = await fetch(countUrl);\r\n  const countData = await response1.json();\r\n  for (let i = 0; i < data.length; i += 1) {\r\n    /* eslint-disable-next-line */\r\n    const count = countData.find((x) => x.item_id === `movie-${data[i].id}`);\r\n    data[i].likes = count ? count.likes : 0;\r\n  }\r\n  render(data);\r\n}\r\ngetShows();\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");
  
  /***/ })
  
  /******/ 	});
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	var __webpack_module_cache__ = {};
  /******/ 	
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/ 		// Check if module is in cache
  /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
  /******/ 		if (cachedModule !== undefined) {
  /******/ 			return cachedModule.exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			id: moduleId,
  /******/ 			// no module.loaded needed
  /******/ 			exports: {}
  /******/ 		};
  /******/ 	
  /******/ 		// Execute the module function
  /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/ 	
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/ 	
  /************************************************************************/
  /******/ 	/* webpack/runtime/compat get default export */
  /******/ 	(() => {
  /******/ 		// getDefaultExport function for compatibility with non-harmony modules
  /******/ 		__webpack_require__.n = (module) => {
  /******/ 			var getter = module && module.__esModule ?
  /******/ 				() => (module['default']) :
  /******/ 				() => (module);
  /******/ 			__webpack_require__.d(getter, { a: getter });
  /******/ 			return getter;
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/define property getters */
  /******/ 	(() => {
  /******/ 		// define getter functions for harmony exports
  /******/ 		__webpack_require__.d = (exports, definition) => {
  /******/ 			for(var key in definition) {
  /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
  /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
  /******/ 				}
  /******/ 			}
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
  /******/ 	(() => {
  /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/make namespace object */
  /******/ 	(() => {
  /******/ 		// define __esModule on exports
  /******/ 		__webpack_require__.r = (exports) => {
  /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/ 			}
  /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /************************************************************************/
  /******/ 	
  /******/ 	// startup
  /******/ 	// Load entry module and return exports
  /******/ 	// This entry module can't be inlined because the eval devtool is used.
  /******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/ 	
  /******/ })()
  ;