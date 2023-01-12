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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  padding: 2% 10%;\\r\\n}\\r\\n\\r\\nnav a {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n  display: flex;\\r\\n  width: 50vw;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\nnav li {\\r\\n  list-style: none;\\r\\n  padding: 0 5%;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nnav li:hover {\\r\\n  text-decoration: underline;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.flex {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#logo {\\r\\n  border: 1px solid black;\\r\\n  border-radius: 100%;\\r\\n  padding: 2%;\\r\\n  width: 75px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#movie-container {\\r\\n  padding: 5% 0;\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto auto;\\r\\n  gap: 30px;\\r\\n}\\r\\n\\r\\n.item-data {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto;\\r\\n}\\r\\n\\r\\n.item-data > div {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#movie-container > div {\\r\\n  background-color: whitesmoke;\\r\\n  width: 250px;\\r\\n}\\r\\n\\r\\n#movie-container > div > div:first-child {\\r\\n  background-color: gray;\\r\\n  height: 50vh;\\r\\n}\\r\\n\\r\\n#movie-container > div > div:last-child {\\r\\n  padding: 1em;\\r\\n}\\r\\n\\r\\n#movie-container > div svg {\\r\\n  align-self: center;\\r\\n  border: 0;\\r\\n  font-size: 1.5em;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#movie-container img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n/* Modal pop up styles */\\r\\n\\r\\n.shw-modal {\\r\\n  font-size: 2rem;\\r\\n  font-weight: 200;\\r\\n  padding: 1.75rem 3.5rem;\\r\\n  margin: 5rem 2rem;\\r\\n  border: none;\\r\\n  color: #444;\\r\\n  border-radius: 5rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.close-modal {\\r\\n  position: absolute;\\r\\n  top: 1.2rem;\\r\\n  right: 2rem;\\r\\n  font-size: 5rem;\\r\\n  color: #333;\\r\\n  cursor: pointer;\\r\\n  border: none;\\r\\n  background: none;\\r\\n}\\r\\n\\r\\n#comments-container {\\r\\n  overflow: auto;\\r\\n  max-height: 25vh;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  font-size: 1.5rem;\\r\\n  margin-bottom: 2rem;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\np {\\r\\n  font-size: 1.8rem;\\r\\n}\\r\\n\\r\\n/* -------------------------- */\\r\\n\\r\\n/* CLASSES TO MAKE MODAL WORK */\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  position: fixed;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  width: 70%;\\r\\n  background-color: white;\\r\\n  padding: 2rem;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\\r\\n  z-index: 10;\\r\\n  max-height: 90vh;\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n.modal h1 {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#modal-img-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n#comment-section {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  padding: 2em;\\r\\n}\\r\\n\\r\\n.sub-details {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto;\\r\\n}\\r\\n\\r\\n.overlay {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background-color: rgba(0, 0, 0, 0.6);\\r\\n  backdrop-filter: blur(3px);\\r\\n  z-index: 5;\\r\\n}\\r\\n\\r\\n#addCommentForm {\\r\\n  display: grid;\\r\\n  gap: 20px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Javascript_Capstone_Project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://Javascript_Capstone_Project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Javascript_Capstone_Project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Javascript_Capstone_Project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Javascript_Capstone_Project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Javascript_Capstone_Project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Javascript_Capstone_Project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Javascript_Capstone_Project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Javascript_Capstone_Project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Javascript_Capstone_Project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_retrieve_movie_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/retrieve movie data.js */ \"./src/modules/retrieve movie data.js\");\n/* harmony import */ var _modules_postLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/postLike.js */ \"./src/modules/postLike.js\");\n/* harmony import */ var _modules_items_counter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/items counter.js */ \"./src/modules/items counter.js\");\n/* harmony import */ var _modules_getComment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/getComment.js */ \"./src/modules/getComment.js\");\n/* harmony import */ var _modules_commentApi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/commentApi.js */ \"./src/modules/commentApi.js\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n\n\n\n\n\n\n\n\ndocument.querySelector('DOMContentLoaded', (0,_modules_retrieve_movie_data_js__WEBPACK_IMPORTED_MODULE_1__.retrieveMovieData)());\ndocument.querySelector('DOMContentLoaded', (0,_modules_items_counter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n\ndocument.querySelector('#movie-container').addEventListener('click', (event) => {\n  if (event.target.nodeName === 'svg') {\n    (0,_modules_postLike_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(event.target.parentElement.parentElement.parentElement.id);\n  }\n});\n\n// open popup window\ndocument.querySelector('#movie-container').addEventListener('click', (event) => {\n  if (event.target.classList.contains('show-modal')) {\n    const userId = event.target.parentElement.id;\n    (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_6__.openModal)();\n    (0,_modules_getComment_js__WEBPACK_IMPORTED_MODULE_4__.getComment)(userId);\n    (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_6__.details)(userId);\n  }\n});\n\n// Post form details\ndocument.querySelector('form').addEventListener('submit', async (event) => {\n  event.preventDefault();\n  document.querySelector('#addCommentForm #submit').disabled = true;\n  const userId = document.querySelector('#movie-details').className;\n  const userName = document.querySelector('#name').value;\n  const userComment = document.querySelector('#comment').value;\n  await (0,_modules_commentApi_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(userId, userName, userComment);\n  await (0,_modules_getComment_js__WEBPACK_IMPORTED_MODULE_4__.getComment)(userId);\n  document.querySelector('#addCommentForm #submit').disabled = false;\n});\n\n// close popup window\ndocument.querySelector('.close-modal').addEventListener('click', _modules_popup_js__WEBPACK_IMPORTED_MODULE_6__.closeModal);\ndocument.querySelector('.overlay').addEventListener('click', _modules_popup_js__WEBPACK_IMPORTED_MODULE_6__.closeModal);\ndocument.addEventListener('keydown', (e) => {\n  if (e.key === 'Escape' && !document.querySelector('.modal').classList.contains('hidden')) { (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_6__.closeModal)(); }\n});\n\n\n//# sourceURL=webpack://Javascript_Capstone_Project/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentApi.js":
/*!***********************************!*\
  !*** ./src/modules/commentApi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addComment = async (id, name, userComment) => {\n  fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zzwfsFxqWArAT5ak4r3D/comments',\n    {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n        username: name,\n        comment: userComment,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    },\n  );\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);\n\n\n//# sourceURL=webpack://Javascript_Capstone_Project/./src/modules/commentApi.js?");

/***/ }),

/***/ "./src/modules/getComment.js":
/*!***********************************!*\
  !*** ./src/modules/getComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentCounter\": () => (/* binding */ commentCounter),\n/* harmony export */   \"getComment\": () => (/* binding */ getComment)\n/* harmony export */ });\nconst commentCounter = () => {\n  const counter = document.querySelector('#comments-container').childElementCount;\n  return counter;\n};\nconst getComment = async (id) => {\n  try {\n    await fetch(\n      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zzwfsFxqWArAT5ak4r3D/comments?item_id=${id}`,\n    )\n      .then((response) => response.json())\n      .then((json) => {\n        document.getElementById('comments-container').innerHTML = '';\n        json.forEach((i) => {\n          const comment = `${i.creation_date} ${i.username}: ${i.comment}`;\n          const commentElement = document.createElement('p');\n          commentElement.innerText = comment;\n\n          // Append the comment to the comments container\n\n          document.getElementById('comments-container').appendChild(commentElement);\n        });\n        document.getElementById('comment-header').innerHTML = `COMMENTS (${commentCounter()}) `;\n      });\n  } catch {\n    document.getElementById('comments-container').innerHTML = '';\n    document.getElementById('comment-header').innerHTML = 'COMMENTS (0)';\n  }\n};\n\n\n//# sourceURL=webpack://Javascript_Capstone_Project/./src/modules/getComment.js?");

/***/ }),

/***/ "./src/modules/items counter.js":
/*!**************************************!*\
  !*** ./src/modules/items counter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _retrieve_movie_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retrieve movie data.js */ \"./src/modules/retrieve movie data.js\");\n\n\n// Add total movie count to navigation item\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => { document.querySelector('#all-movies').innerHTML += ` (${_retrieve_movie_data_js__WEBPACK_IMPORTED_MODULE_0__.movieIDs.length})`; });\n\n//# sourceURL=webpack://Javascript_Capstone_Project/./src/modules/items_counter.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"details\": () => (/* binding */ details),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal)\n/* harmony export */ });\nconst modal = document.querySelector('.modal');\nconst overlay = document.querySelector('.overlay');\n\nconst closeModal = () => {\n  modal.classList.add('hidden');\n  overlay.classList.add('hidden');\n};\n\nconst openModal = () => {\n  modal.classList.remove('hidden');\n  overlay.classList.remove('hidden');\n};\n\nconst details = async (userId) => {\n  const movieDetails = document.querySelector('#movie-details');\n  movieDetails.innerHTML = '<h1></h1>';\n  movieDetails.className = userId;\n  document.querySelector('#modal-img').src = document.getElementById(userId).querySelector('img').src;\n  movieDetails.querySelector('h1').innerHTML = document.getElementById(userId).querySelector('.movie-title').innerHTML;\n  await fetch(`https://api.themoviedb.org/3/movie/${userId}?api_key=31ecb28000e35ff5c8ed82886f5861ad&language=en-US`, {})\n    .then((response) => response.json())\n    .then((json) => {\n      const subDetails = document.createElement('div');\n      subDetails.className = 'sub-details';\n      const genre = document.createElement('div');\n      genre.innerHTML = '<b>Genre: </b>';\n      json.genres.forEach((i) => { genre.innerHTML += ` ${i.name}`; });\n      subDetails.appendChild(genre);\n\n      const popularity = document.createElement('div');\n      popularity.innerHTML = `<b>Popularity: </b>${json.popularity}`;\n      subDetails.appendChild(popularity);\n\n      const lan = document.createElement('div');\n      lan.innerHTML = `<b>Original language: </b>${json.original_language}`;\n      subDetails.appendChild(lan);\n\n      const budget = document.createElement('div');\n      budget.innerHTML = `<b>Budget: </b>$${json.budget}`;\n      subDetails.appendChild(budget);\n\n      movieDetails.appendChild(subDetails);\n\n      const overview = document.createElement('div');\n      overview.innerHTML = `<h3>Overview</h3>${json.overview}`;\n      movieDetails.appendChild(overview);\n    });\n};\n\n\n//# sourceURL=webpack://Javascript_Capstone_Project/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/postLike.js":
/*!*********************************!*\
  !*** ./src/modules/postLike.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (item) => {\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zzwfsFxqWArAT5ak4r3D/likes', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: `${item}`,\n    }),\n  })\n    .then(() => {\n      document.getElementById(`${item}`).querySelector('.likes-count').innerHTML = +document.getElementById(`${item}`).querySelector('.likes-count').innerHTML + 1;\n    });\n});\n\n\n//# sourceURL=webpack://Javascript_Capstone_Project/./src/modules/postLike.js?");

/***/ }),

/***/ "./src/modules/retrieve movie data.js":
/*!********************************************!*\
  !*** ./src/modules/retrieve movie data.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"movieIDs\": () => (/* binding */ movieIDs),\n/* harmony export */   \"retrieveMovieData\": () => (/* binding */ retrieveMovieData)\n/* harmony export */ });\n// API movie IDs from movieDB API\nconst movieIDs = ['76600', '661374', '877269', '436270', '899112', '744594', '19995', '361743', '668482', '555604', '674324', '593643', '505642', '315162', '804095', '791177', '545611', '414906', '715931', '546554'];\n\n// Function to retrieve API data and append it to DOM\nconst retrieveMovieData = async () => {\n  // Define movie container element\n  const movieContainer = document.querySelector('#movie-container');\n\n  // Defining variable to store likes data\n  let likes;\n\n  // Fetching likes data\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zzwfsFxqWArAT5ak4r3D/likes/')\n    .then((response) => response.json())\n    .then((json) => {\n      likes = json;\n    });\n\n  // Function to retrieve movie data\n  const loadData = async (movieID, index) => {\n    // Creating movie item element\n    const item = document.createElement('div');\n    item.id = movieID;\n\n    // Creating div element for movie data\n    const itemData = document.createElement('div');\n    itemData.className = 'item-data';\n\n    // Retrieve image data from API\n    await fetch(`https://api.themoviedb.org/3/movie/${movieID}/images?api_key=31ecb28000e35ff5c8ed82886f5861ad&language=en`, {})\n      .then((response) => response.json())\n      .then((json) => {\n        const itemImg = document.createElement('div');\n        const imageObjectURL = `https://www.themoviedb.org/t/p/w220_and_h330_face${json.posters[1].file_path}`;\n        const image = new Image();\n        image.src = imageObjectURL;\n        itemImg.appendChild(image);\n        item.appendChild(itemImg);\n      });\n\n    // Retrieve title data from API\n    await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=31ecb28000e35ff5c8ed82886f5861ad&language=en-US`, {})\n      .then((response) => response.json())\n      .then((json) => {\n        const itemTitle = document.createElement('span');\n        itemTitle.className = 'movie-title';\n        itemTitle.innerHTML = json.original_title;\n        itemData.appendChild(itemTitle);\n      });\n\n    // Create empty div for like data\n    const likesContainer = document.createElement('div');\n    likesContainer.className = 'likes';\n    likesContainer.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-heart\" viewBox=\"0 0 16 16\">\n    <path d=\"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z\"/></svg>`;\n\n    // Add likes data to it's container\n    const likesData = document.createElement('div');\n\n    // Adding likes data to movie item in DOM\n    try {\n      const movieLikes = likes.find((arr) => arr.item_id === index.toString()).likes;\n      likesData.innerHTML += `<span class=\"likes-count\">${movieLikes}</span> <span> Likes</span>`;\n    } catch { likesData.innerHTML += '<span class=\"likes-count\">0</span> <span> Likes</span>'; }\n\n    likesContainer.appendChild(likesData);\n\n    // Append div with likes data to body\n    itemData.appendChild(likesContainer);\n\n    // Append div with movie data to body\n    item.appendChild(itemData);\n\n    // Create comment button and append to body\n    const commentBtn = document.createElement('button');\n    commentBtn.innerHTML = 'Comments';\n    item.appendChild(commentBtn);\n    commentBtn.classList.add('show-modal');\n\n    // Append movie item to body\n    movieContainer.appendChild(item);\n  };\n\n  // Iterate through arr of movie IDs to retrieve their data via movieDB API\n  movieIDs.forEach((movie) => loadData(movie, movieIDs.indexOf(movie)));\n};\n\n//# sourceURL=webpack://Javascript_Capstone_Project/./src/modules/retrieve_movie_data.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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