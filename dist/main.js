/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

@font-face {
    font-family: "San Francisco";
    font-weight: 400;
    src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
  }

:root {
    --aside-col: #f5f5f5;
    --ol-col: #e8e8e8;
    --main-col: #FFFFFF;
    --side-text-col: #3B3E41;
    --side-sec-text-col: #606468;
    --sel-col: #DBDEE1;
}

:root.dark {
    --aside-col: ;
    --main-col: ;
}

body {
    font-family: "San Francisco";
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 5fr 35fr;
    transition: all 0.15s;
}

/* 
SIDEBAR
*/
aside {
    grid-column: 1 / 3;
    background-color: var(--aside-col);
    display: grid;
    grid-template-rows: 4rem 1fr 3rem;
    justify-items: center;
    border-right: 1px solid var(--ol-col);
    overflow-x: hidden;
    transition: all 0.15s ease-in-out;
}

.aside-closed {
    grid-column: 1 / 2;
}

.aside-upper-cont {
    width: 100%;
    display: grid;
    justify-items: center;
    border-bottom: 1px solid var(--ol-col);
    margin-bottom: 1rem;
}

.aside-upper-inner {
    width: 80%;
    grid-row: 1 / 2;
    display: grid;
    grid-template-columns: 1fr 35px;
    align-content: center;
}

.menu-tog {
    cursor: pointer;
    grid-column: 2 / 3;
}

.aside-inner {
    width: 90%;
    grid-row: 2 / 3;
    overflow-y: scroll;
    display: grid;
    grid-template-rows: auto;
    gap: 2rem;
}

.aside-top {
    display: grid;
    grid-template-rows: min-content min-content min-content;
    gap: 3rem;
}

.side-tab {
    cursor: pointer;
    display: grid;
    grid-template-columns: 25px 1fr;
    align-items: center;
    gap: 0.6rem;
    padding-left: 0.4rem;
}

.side-tab:hover {
    background-color: var(--sel-col);
    border-radius: 0.3rem;
}

.side-tab-sel {
    background-color: var(--sel-col);
    border-radius: 0.3rem;
}

.side-tab svg {
    padding-top: 0.2rem;
    cursor: pointer;
    fill: var(--side-text-col)
}

.side-tab h1 {
    color: var(--side-text-col);
    font-size: 1.2rem;
    cursor: pointer;
    padding-bottom: 0.2rem;
}

.time-container {
    display: grid;
    grid-template-rows: min-content;
    gap: 1rem;
}

.aside-bottom {
    width: 100%;
    grid-row: 3 / 4;
    display: grid;
    border-top: 1px solid var(--ol-col);
    justify-items: center;
    align-items: center;
}

.aside-bottom-inner {
    width: 90%;
}

.projects-container {
    display: grid;
    grid-template-rows: min-content;
    gap: 0.5rem;
}

.new-project, .new-project svg {
    color: var(--side-sec-text-col);
    fill: var(--side-sec-text-col);
}

.new-project {
    cursor: text;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,4BAA4B;IAC5B,gBAAgB;IAChB,0HAA0H;EAC5H;;AAEF;IACI,oBAAoB;IACpB,iBAAiB;IACjB,mBAAmB;IACnB,wBAAwB;IACxB,4BAA4B;IAC5B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,4BAA4B;IAC5B,YAAY;IACZ,aAAa;IACb,aAAa;IACb,mCAAmC;IACnC,qBAAqB;AACzB;;AAEA;;CAEC;AACD;IACI,kBAAkB;IAClB,kCAAkC;IAClC,aAAa;IACb,iCAAiC;IACjC,qBAAqB;IACrB,qCAAqC;IACrC,kBAAkB;IAClB,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,qBAAqB;IACrB,sCAAsC;IACtC,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,eAAe;IACf,aAAa;IACb,+BAA+B;IAC/B,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uDAAuD;IACvD,SAAS;AACb;;AAEA;IACI,eAAe;IACf,aAAa;IACb,+BAA+B;IAC/B,mBAAmB;IACnB,WAAW;IACX,oBAAoB;AACxB;;AAEA;IACI,gCAAgC;IAChC,qBAAqB;AACzB;;AAEA;IACI,gCAAgC;IAChC,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf;AACJ;;AAEA;IACI,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,SAAS;AACb;;AAEA;IACI,WAAW;IACX,eAAe;IACf,aAAa;IACb,mCAAmC;IACnC,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,WAAW;AACf;;AAEA;IACI,+BAA+B;IAC/B,8BAA8B;AAClC;;AAEA;IACI,YAAY;AAChB","sourcesContent":["* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n@font-face {\n    font-family: \"San Francisco\";\n    font-weight: 400;\n    src: url(\"https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff\");\n  }\n\n:root {\n    --aside-col: #f5f5f5;\n    --ol-col: #e8e8e8;\n    --main-col: #FFFFFF;\n    --side-text-col: #3B3E41;\n    --side-sec-text-col: #606468;\n    --sel-col: #DBDEE1;\n}\n\n:root.dark {\n    --aside-col: ;\n    --main-col: ;\n}\n\nbody {\n    font-family: \"San Francisco\";\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 5fr 35fr;\n    transition: all 0.15s;\n}\n\n/* \nSIDEBAR\n*/\naside {\n    grid-column: 1 / 3;\n    background-color: var(--aside-col);\n    display: grid;\n    grid-template-rows: 4rem 1fr 3rem;\n    justify-items: center;\n    border-right: 1px solid var(--ol-col);\n    overflow-x: hidden;\n    transition: all 0.15s ease-in-out;\n}\n\n.aside-closed {\n    grid-column: 1 / 2;\n}\n\n.aside-upper-cont {\n    width: 100%;\n    display: grid;\n    justify-items: center;\n    border-bottom: 1px solid var(--ol-col);\n    margin-bottom: 1rem;\n}\n\n.aside-upper-inner {\n    width: 80%;\n    grid-row: 1 / 2;\n    display: grid;\n    grid-template-columns: 1fr 35px;\n    align-content: center;\n}\n\n.menu-tog {\n    cursor: pointer;\n    grid-column: 2 / 3;\n}\n\n.aside-inner {\n    width: 90%;\n    grid-row: 2 / 3;\n    overflow-y: scroll;\n    display: grid;\n    grid-template-rows: auto;\n    gap: 2rem;\n}\n\n.aside-top {\n    display: grid;\n    grid-template-rows: min-content min-content min-content;\n    gap: 3rem;\n}\n\n.side-tab {\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 25px 1fr;\n    align-items: center;\n    gap: 0.6rem;\n    padding-left: 0.4rem;\n}\n\n.side-tab:hover {\n    background-color: var(--sel-col);\n    border-radius: 0.3rem;\n}\n\n.side-tab-sel {\n    background-color: var(--sel-col);\n    border-radius: 0.3rem;\n}\n\n.side-tab svg {\n    padding-top: 0.2rem;\n    cursor: pointer;\n    fill: var(--side-text-col)\n}\n\n.side-tab h1 {\n    color: var(--side-text-col);\n    font-size: 1.2rem;\n    cursor: pointer;\n    padding-bottom: 0.2rem;\n}\n\n.time-container {\n    display: grid;\n    grid-template-rows: min-content;\n    gap: 1rem;\n}\n\n.aside-bottom {\n    width: 100%;\n    grid-row: 3 / 4;\n    display: grid;\n    border-top: 1px solid var(--ol-col);\n    justify-items: center;\n    align-items: center;\n}\n\n.aside-bottom-inner {\n    width: 90%;\n}\n\n.projects-container {\n    display: grid;\n    grid-template-rows: min-content;\n    gap: 0.5rem;\n}\n\n.new-project, .new-project svg {\n    color: var(--side-sec-text-col);\n    fill: var(--side-sec-text-col);\n}\n\n.new-project {\n    cursor: text;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ inbox)
/* harmony export */ });
function inbox() {
    const body = document.body;

    const main = document.createElement('main');
    
    body.appendChild(main);
}

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sidebar)
/* harmony export */ });
/* harmony import */ var _inbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox.js */ "./src/inbox.js");


function sidebar() {

    const body = document.body; //Get the body

    const aside = document.createElement('aside'); //Side bar main

    //Open/close 
    const asideUpperCont = document.createElement('div');
    asideUpperCont.classList.add('aside-upper-cont');

    const asideUpperInner = document.createElement('div');
    asideUpperInner.classList.add('aside-upper-inner');

    const asideTogEm = document.createElement('span');
    asideTogEm.classList.add('menu-tog');
    asideTogEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>'

    const asideInner = document.createElement('div'); //side bar inner
    asideInner.classList.add('aside-inner');

    const asideTop = document.createElement('div'); //top
    asideTop.classList.add('aside-top');

    //Inbox tab
    const inboxCont = document.createElement('div');
    inboxCont.classList.add('side-tab');
    inboxCont.classList.add('side-tab-sel');

    const inboxEm = document.createElement('span'); //inbox tab emoji
    inboxEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>inbox</title><path d="M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" /></svg>';

    const inboxText = document.createElement('h1'); //inbox tab text
    inboxText.innerHTML = 'Inbox';

    //timed tabs container
    const timeCont = document.createElement('div'); 
    timeCont.classList.add('time-container');

    const todayCont = document.createElement('div'); //today tab container
    todayCont.classList.add('side-tab');

    const todayEm = document.createElement('span'); //today tab emoji
    todayEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star-outline</title><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg>';

    const todayText = document.createElement('h1'); //today tab text
    todayText.innerHTML = 'Today';

    const weekCont = document.createElement('div'); //week tab container
    weekCont.classList.add('side-tab');

    const weekEm = document.createElement('span'); //week tab emoji
    weekEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-range</title><path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" /></svg>';

    const weekText = document.createElement('h1'); //week tab text
    weekText.innerHTML = 'Week';

    const monthCont = document.createElement('div'); //month tab container
    monthCont.classList.add('side-tab');

    const monthEm = document.createElement('span'); //month tab emoji
    monthEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-month</title><path d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" /></svg>';

    const monthText = document.createElement('h1'); //month tab text
    monthText.innerHTML = 'Month';

    const anytimeCont = document.createElement('div'); //anytime tab container
    anytimeCont.classList.add('side-tab');

    const anytimeEm = document.createElement('span'); //anytime tab emoji
    anytimeEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>note</title><path d="M14,10V4.5L19.5,10M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V9L15,3H5Z" /></svg>';

    const anytimeText = document.createElement('h1'); //anytime tab text
    anytimeText.innerHTML = 'Anytime';

    //aside bottom container
    const asideBottom = document.createElement('div');
    asideBottom.classList.add('aside-bottom');

    const asideBottomInner = document.createElement('div');
    asideBottomInner.classList.add('aside-bottom-inner');

    //Add List container
    const addListCont = document.createElement('div');
    addListCont.classList.add('side-tab');

    const addListEm = document.createElement('span');
    addListEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>';

    const addListText = document.createElement('h1');
    addListText.innerHTML = 'Add Project';

    //Projects 
    const projectsCont = document.createElement('div');
    projectsCont.classList.add('projects-container');

    const projectsHeadCont = document.createElement('div');
    projectsHeadCont.classList.add('side-tab');

    const projectsEm = document.createElement('span');
    projectsEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>database</title><path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z" /></svg>'

    const projectsHead = document.createElement('h1');
    projectsHead.innerHTML = 'Projects';

    
    //APEND
    body.appendChild(aside);
    aside.appendChild(asideUpperCont);
    asideUpperCont.appendChild(asideUpperInner);
    asideUpperInner.appendChild(asideTogEm);
    aside.appendChild(asideInner);
    asideInner.appendChild(asideTop);
    asideTop.appendChild(inboxCont);
    inboxCont.appendChild(inboxEm);
    inboxCont.appendChild(inboxText);
    asideTop.appendChild(timeCont);
    timeCont.appendChild(todayCont);
    todayCont.appendChild(todayEm);
    todayCont.appendChild(todayText);
    timeCont.appendChild(weekCont);
    weekCont.appendChild(weekEm);
    weekCont.appendChild(weekText);
    timeCont.appendChild(monthCont);
    monthCont.appendChild(monthEm);
    monthCont.appendChild(monthText);
    timeCont.appendChild(anytimeCont);
    anytimeCont.appendChild(anytimeEm);
    anytimeCont.appendChild(anytimeText);
    aside.appendChild(asideBottom);
    asideBottom.appendChild(asideBottomInner);
    asideBottomInner.appendChild(addListCont);
    addListCont.appendChild(addListEm);
    addListCont.appendChild(addListText);
    asideTop.appendChild(projectsCont);
    projectsCont.appendChild(projectsHeadCont);
    projectsHeadCont.appendChild(projectsEm);
    projectsHeadCont.appendChild(projectsHead);

    //event listeners
    inboxCont.addEventListener('click', () => {
        removeSel();
        inboxCont.classList.add('side-tab-sel');
        removeContent();
        (0,_inbox_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });

    todayCont.addEventListener('click', () => {
        removeSel();
        todayCont.classList.add('side-tab-sel');
        removeContent();
    });

    weekCont.addEventListener('click', () => {
        removeSel();
        weekCont.classList.add('side-tab-sel');
        removeContent();
    });

    monthCont.addEventListener('click', () => {
        removeSel();
        monthCont.classList.add('side-tab-sel');
        removeContent();
    });

    anytimeCont.addEventListener('click', () => {
        removeSel();
        anytimeCont.classList.add('side-tab-sel');
        removeContent();
    });

    projectsHeadCont.addEventListener('click', () => {
        removeSel();
        projectsHeadCont.classList.add('side-tab-sel');
        removeContent();
    });

    addListCont.addEventListener('click', createProj);

    //Creates new Project Button
    function createProj() {
        const newProject = document.createElement('div');
        newProject.classList.add('side-tab');
        newProject.classList.add('new-project');

        const newProjectEm = document.createElement('span');
        newProjectEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>timelapse</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.24,7.76C15.07,6.58 13.53,6 12,6V12L7.76,16.24C10.1,18.58 13.9,18.58 16.24,16.24C18.59,13.9 18.59,10.1 16.24,7.76Z" /></svg>';

        const newProjectText = document.createElement('span');
        newProjectText.innerHTML = 'New Project';

        projectsCont.appendChild(newProject);
        newProject.appendChild(newProjectEm);
        newProject.appendChild(newProjectText)

        newProject.addEventListener('click', () => {
            removeSel();
            newProject.classList.add('side-tab-sel');
            removeContent();
        })

        //Open and close side bar 
        asideTogEm.addEventListener('click', () => {
            console.log('fuck');
        });

        function toggleSide() {
            console.log('fuck')
            if (aside.classList.contains('aside-closed')) {
                aside.classList.remove('aside-closed')
            } else {
                aside.classList.add('aside-closed');
            }
        }

        //Allowe user to input project name
        newProjectText.addEventListener('click', () => {
            if (newProject.classList.contains('side-tab-sel')) {
                const inputField = document.createElement('input');
                inputField.type = 'text';
                if (newProjectText.innerHTML !== 'New Project') {
                    inputField.value = newProjectText.innerHTML;
                };
    
                newProjectText.parentNode.replaceChild(inputField, newProjectText);

                inputField.focus();
              
                // Handle blur event to restore the span when clicking outside the input
                inputField.addEventListener('blur', function() {
                    if (inputField.value === '') {
                        inputField.value = 'New Project';
                    }
                  newProjectText.innerHTML = inputField.value;
                  inputField.parentNode.replaceChild(newProjectText, inputField);
                });
            }
        });
    };

    //Remove Selected Tab Styling
    function removeSel() {
        inboxCont.classList.remove('side-tab-sel');
        todayCont.classList.remove('side-tab-sel');
        weekCont.classList.remove('side-tab-sel');
        monthCont.classList.remove('side-tab-sel');
        anytimeCont.classList.remove('side-tab-sel');
        projectsHeadCont.classList.remove('side-tab-sel');
        let projes = document.querySelectorAll('.new-project');
        console.log(projes);
        if (projes) {
            projes.forEach(proj => {
                proj.classList.remove('side-tab-sel'); 
            });
        }
    }

    //Remove The Content From Main
    function removeContent() {
        const main = document.querySelector('main');
        if (main) {
            body.removeChild(main);
        }
    };
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");



window.onload = () => {
    (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TkE7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDYzs7QUFFbEM7QUFDQSxJQUFJLHVEQUFPO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmJveC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJTYW4gRnJhbmNpc2NvXCI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vYXBwbGVzb2NpYWwuczMuYW1hem9uYXdzLmNvbS9hc3NldHMvc3R5bGVzL2ZvbnRzL3NhbmZyYW5jaXNjby9zYW5mcmFuY2lzY29kaXNwbGF5LXJlZ3VsYXItd2ViZm9udC53b2ZmXCIpO1xuICB9XG5cbjpyb290IHtcbiAgICAtLWFzaWRlLWNvbDogI2Y1ZjVmNTtcbiAgICAtLW9sLWNvbDogI2U4ZThlODtcbiAgICAtLW1haW4tY29sOiAjRkZGRkZGO1xuICAgIC0tc2lkZS10ZXh0LWNvbDogIzNCM0U0MTtcbiAgICAtLXNpZGUtc2VjLXRleHQtY29sOiAjNjA2NDY4O1xuICAgIC0tc2VsLWNvbDogI0RCREVFMTtcbn1cblxuOnJvb3QuZGFyayB7XG4gICAgLS1hc2lkZS1jb2w6IDtcbiAgICAtLW1haW4tY29sOiA7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBcIlNhbiBGcmFuY2lzY29cIjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAzNWZyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbn1cblxuLyogXG5TSURFQkFSXG4qL1xuYXNpZGUge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hc2lkZS1jb2wpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDFmciAzcmVtO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1vbC1jb2wpO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5hc2lkZS1jbG9zZWQge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbn1cblxuLmFzaWRlLXVwcGVyLWNvbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1vbC1jb2wpO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5hc2lkZS11cHBlci1pbm5lciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzNXB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1lbnUtdG9nIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xufVxuXG4uYXNpZGUtaW5uZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICBnYXA6IDJyZW07XG59XG5cbi5hc2lkZS10b3Age1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICBnYXA6IDNyZW07XG59XG5cbi5zaWRlLXRhYiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC42cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMC40cmVtO1xufVxuXG4uc2lkZS10YWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbC1jb2wpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbn1cblxuLnNpZGUtdGFiLXNlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsLWNvbCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xufVxuXG4uc2lkZS10YWIgc3ZnIHtcbiAgICBwYWRkaW5nLXRvcDogMC4ycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmaWxsOiB2YXIoLS1zaWRlLXRleHQtY29sKVxufVxuXG4uc2lkZS10YWIgaDEge1xuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXRleHQtY29sKTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcbn1cblxuLnRpbWUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uYXNpZGUtYm90dG9tIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBncmlkLXJvdzogMyAvIDQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tb2wtY29sKTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFzaWRlLWJvdHRvbS1pbm5lciB7XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xuICAgIGdhcDogMC41cmVtO1xufVxuXG4ubmV3LXByb2plY3QsIC5uZXctcHJvamVjdCBzdmcge1xuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXNlYy10ZXh0LWNvbCk7XG4gICAgZmlsbDogdmFyKC0tc2lkZS1zZWMtdGV4dC1jb2wpO1xufVxuXG4ubmV3LXByb2plY3Qge1xuICAgIGN1cnNvcjogdGV4dDtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLDBIQUEwSDtFQUM1SDs7QUFFRjtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLHFCQUFxQjtBQUN6Qjs7QUFFQTs7Q0FFQztBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLHFCQUFxQjtJQUNyQixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNDQUFzQztJQUN0QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVEQUF1RDtJQUN2RCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2FuIEZyYW5jaXNjb1xcXCI7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKFxcXCJodHRwczovL2FwcGxlc29jaWFsLnMzLmFtYXpvbmF3cy5jb20vYXNzZXRzL3N0eWxlcy9mb250cy9zYW5mcmFuY2lzY28vc2FuZnJhbmNpc2NvZGlzcGxheS1yZWd1bGFyLXdlYmZvbnQud29mZlxcXCIpO1xcbiAgfVxcblxcbjpyb290IHtcXG4gICAgLS1hc2lkZS1jb2w6ICNmNWY1ZjU7XFxuICAgIC0tb2wtY29sOiAjZThlOGU4O1xcbiAgICAtLW1haW4tY29sOiAjRkZGRkZGO1xcbiAgICAtLXNpZGUtdGV4dC1jb2w6ICMzQjNFNDE7XFxuICAgIC0tc2lkZS1zZWMtdGV4dC1jb2w6ICM2MDY0Njg7XFxuICAgIC0tc2VsLWNvbDogI0RCREVFMTtcXG59XFxuXFxuOnJvb3QuZGFyayB7XFxuICAgIC0tYXNpZGUtY29sOiA7XFxuICAgIC0tbWFpbi1jb2w6IDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2FuIEZyYW5jaXNjb1xcXCI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDM1ZnI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXG59XFxuXFxuLyogXFxuU0lERUJBUlxcbiovXFxuYXNpZGUge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFzaWRlLWNvbCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSAxZnIgM3JlbTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1vbC1jb2wpO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmFzaWRlLWNsb3NlZCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLmFzaWRlLXVwcGVyLWNvbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tb2wtY29sKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmFzaWRlLXVwcGVyLWlubmVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzNXB4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tZW51LXRvZyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4uYXNpZGUtaW5uZXIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5hc2lkZS10b3Age1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBnYXA6IDNyZW07XFxufVxcblxcbi5zaWRlLXRhYiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjZyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC40cmVtO1xcbn1cXG5cXG4uc2lkZS10YWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWwtY29sKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4uc2lkZS10YWItc2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsLWNvbCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLnNpZGUtdGFiIHN2ZyB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmlsbDogdmFyKC0tc2lkZS10ZXh0LWNvbClcXG59XFxuXFxuLnNpZGUtdGFiIGgxIHtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtdGV4dC1jb2wpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xcbn1cXG5cXG4udGltZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5hc2lkZS1ib3R0b20ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tb2wtY29sKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXNpZGUtYm90dG9tLWlubmVyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ubmV3LXByb2plY3QsIC5uZXctcHJvamVjdCBzdmcge1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1zZWMtdGV4dC1jb2wpO1xcbiAgICBmaWxsOiB2YXIoLS1zaWRlLXNlYy10ZXh0LWNvbCk7XFxufVxcblxcbi5uZXctcHJvamVjdCB7XFxuICAgIGN1cnNvcjogdGV4dDtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluYm94KCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xufSIsImltcG9ydCBpbmJveCBmcm9tICcuL2luYm94LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaWRlYmFyKCkge1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7IC8vR2V0IHRoZSBib2R5XG5cbiAgICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7IC8vU2lkZSBiYXIgbWFpblxuXG4gICAgLy9PcGVuL2Nsb3NlIFxuICAgIGNvbnN0IGFzaWRlVXBwZXJDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXNpZGVVcHBlckNvbnQuY2xhc3NMaXN0LmFkZCgnYXNpZGUtdXBwZXItY29udCcpO1xuXG4gICAgY29uc3QgYXNpZGVVcHBlcklubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXNpZGVVcHBlcklubmVyLmNsYXNzTGlzdC5hZGQoJ2FzaWRlLXVwcGVyLWlubmVyJyk7XG5cbiAgICBjb25zdCBhc2lkZVRvZ0VtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFzaWRlVG9nRW0uY2xhc3NMaXN0LmFkZCgnbWVudS10b2cnKTtcbiAgICBhc2lkZVRvZ0VtLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPm1lbnU8L3RpdGxlPjxwYXRoIGQ9XCJNMyw2SDIxVjhIM1Y2TTMsMTFIMjFWMTNIM1YxMU0zLDE2SDIxVjE4SDNWMTZaXCIgLz48L3N2Zz4nXG5cbiAgICBjb25zdCBhc2lkZUlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vc2lkZSBiYXIgaW5uZXJcbiAgICBhc2lkZUlubmVyLmNsYXNzTGlzdC5hZGQoJ2FzaWRlLWlubmVyJyk7XG5cbiAgICBjb25zdCBhc2lkZVRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL3RvcFxuICAgIGFzaWRlVG9wLmNsYXNzTGlzdC5hZGQoJ2FzaWRlLXRvcCcpO1xuXG4gICAgLy9JbmJveCB0YWJcbiAgICBjb25zdCBpbmJveENvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmJveENvbnQuY2xhc3NMaXN0LmFkZCgnc2lkZS10YWInKTtcbiAgICBpbmJveENvbnQuY2xhc3NMaXN0LmFkZCgnc2lkZS10YWItc2VsJyk7XG5cbiAgICBjb25zdCBpbmJveEVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpOyAvL2luYm94IHRhYiBlbW9qaVxuICAgIGluYm94RW0uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+aW5ib3g8L3RpdGxlPjxwYXRoIGQ9XCJNMTksMTVIMTVBMywzIDAgMCwxIDEyLDE4QTMsMyAwIDAsMSA5LDE1SDVWNUgxOU0xOSwzSDVDMy44OSwzIDMsMy45IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWNUEyLDIgMCAwLDAgMTksM1pcIiAvPjwvc3ZnPic7XG5cbiAgICBjb25zdCBpbmJveFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpOyAvL2luYm94IHRhYiB0ZXh0XG4gICAgaW5ib3hUZXh0LmlubmVySFRNTCA9ICdJbmJveCc7XG5cbiAgICAvL3RpbWVkIHRhYnMgY29udGFpbmVyXG4gICAgY29uc3QgdGltZUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgdGltZUNvbnQuY2xhc3NMaXN0LmFkZCgndGltZS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IHRvZGF5Q29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL3RvZGF5IHRhYiBjb250YWluZXJcbiAgICB0b2RheUNvbnQuY2xhc3NMaXN0LmFkZCgnc2lkZS10YWInKTtcblxuICAgIGNvbnN0IHRvZGF5RW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7IC8vdG9kYXkgdGFiIGVtb2ppXG4gICAgdG9kYXlFbS5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5zdGFyLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMTIsMTUuMzlMOC4yNCwxNy42Nkw5LjIzLDEzLjM4TDUuOTEsMTAuNUwxMC4yOSwxMC4xM0wxMiw2LjA5TDEzLjcxLDEwLjEzTDE4LjA5LDEwLjVMMTQuNzcsMTMuMzhMMTUuNzYsMTcuNjZNMjIsOS4yNEwxNC44MSw4LjYzTDEyLDJMOS4xOSw4LjYzTDIsOS4yNEw3LjQ1LDEzLjk3TDUuODIsMjFMMTIsMTcuMjdMMTguMTgsMjFMMTYuNTQsMTMuOTdMMjIsOS4yNFpcIiAvPjwvc3ZnPic7XG5cbiAgICBjb25zdCB0b2RheVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpOyAvL3RvZGF5IHRhYiB0ZXh0XG4gICAgdG9kYXlUZXh0LmlubmVySFRNTCA9ICdUb2RheSc7XG5cbiAgICBjb25zdCB3ZWVrQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL3dlZWsgdGFiIGNvbnRhaW5lclxuICAgIHdlZWtDb250LmNsYXNzTGlzdC5hZGQoJ3NpZGUtdGFiJyk7XG5cbiAgICBjb25zdCB3ZWVrRW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7IC8vd2VlayB0YWIgZW1vamlcbiAgICB3ZWVrRW0uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2FsZW5kYXItcmFuZ2U8L3RpdGxlPjxwYXRoIGQ9XCJNOSwxMEg3VjEySDlWMTBNMTMsMTBIMTFWMTJIMTNWMTBNMTcsMTBIMTVWMTJIMTdWMTBNMTksM0gxOFYxSDE2VjNIOFYxSDZWM0g1QzMuODksMyAzLDMuOSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjVBMiwyIDAgMCwwIDE5LDNNMTksMTlINVY4SDE5VjE5WlwiIC8+PC9zdmc+JztcblxuICAgIGNvbnN0IHdlZWtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTsgLy93ZWVrIHRhYiB0ZXh0XG4gICAgd2Vla1RleHQuaW5uZXJIVE1MID0gJ1dlZWsnO1xuXG4gICAgY29uc3QgbW9udGhDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vbW9udGggdGFiIGNvbnRhaW5lclxuICAgIG1vbnRoQ29udC5jbGFzc0xpc3QuYWRkKCdzaWRlLXRhYicpO1xuXG4gICAgY29uc3QgbW9udGhFbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTsgLy9tb250aCB0YWIgZW1vamlcbiAgICBtb250aEVtLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNhbGVuZGFyLW1vbnRoPC90aXRsZT48cGF0aCBkPVwiTTksMTBWMTJIN1YxMEg5TTEzLDEwVjEySDExVjEwSDEzTTE3LDEwVjEySDE1VjEwSDE3TTE5LDNBMiwyIDAgMCwxIDIxLDVWMTlBMiwyIDAgMCwxIDE5LDIxSDVDMy44OSwyMSAzLDIwLjEgMywxOVY1QTIsMiAwIDAsMSA1LDNINlYxSDhWM0gxNlYxSDE4VjNIMTlNMTksMTlWOEg1VjE5SDE5TTksMTRWMTZIN1YxNEg5TTEzLDE0VjE2SDExVjE0SDEzTTE3LDE0VjE2SDE1VjE0SDE3WlwiIC8+PC9zdmc+JztcblxuICAgIGNvbnN0IG1vbnRoVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7IC8vbW9udGggdGFiIHRleHRcbiAgICBtb250aFRleHQuaW5uZXJIVE1MID0gJ01vbnRoJztcblxuICAgIGNvbnN0IGFueXRpbWVDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vYW55dGltZSB0YWIgY29udGFpbmVyXG4gICAgYW55dGltZUNvbnQuY2xhc3NMaXN0LmFkZCgnc2lkZS10YWInKTtcblxuICAgIGNvbnN0IGFueXRpbWVFbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTsgLy9hbnl0aW1lIHRhYiBlbW9qaVxuICAgIGFueXRpbWVFbS5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5ub3RlPC90aXRsZT48cGF0aCBkPVwiTTE0LDEwVjQuNUwxOS41LDEwTTUsM0MzLjg5LDMgMywzLjg5IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWOUwxNSwzSDVaXCIgLz48L3N2Zz4nO1xuXG4gICAgY29uc3QgYW55dGltZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpOyAvL2FueXRpbWUgdGFiIHRleHRcbiAgICBhbnl0aW1lVGV4dC5pbm5lckhUTUwgPSAnQW55dGltZSc7XG5cbiAgICAvL2FzaWRlIGJvdHRvbSBjb250YWluZXJcbiAgICBjb25zdCBhc2lkZUJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFzaWRlQm90dG9tLmNsYXNzTGlzdC5hZGQoJ2FzaWRlLWJvdHRvbScpO1xuXG4gICAgY29uc3QgYXNpZGVCb3R0b21Jbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFzaWRlQm90dG9tSW5uZXIuY2xhc3NMaXN0LmFkZCgnYXNpZGUtYm90dG9tLWlubmVyJyk7XG5cbiAgICAvL0FkZCBMaXN0IGNvbnRhaW5lclxuICAgIGNvbnN0IGFkZExpc3RDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkTGlzdENvbnQuY2xhc3NMaXN0LmFkZCgnc2lkZS10YWInKTtcblxuICAgIGNvbnN0IGFkZExpc3RFbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhZGRMaXN0RW0uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+cGx1czwvdGl0bGU+PHBhdGggZD1cIk0xOSwxM0gxM1YxOUgxMVYxM0g1VjExSDExVjVIMTNWMTFIMTlWMTNaXCIgLz48L3N2Zz4nO1xuXG4gICAgY29uc3QgYWRkTGlzdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGFkZExpc3RUZXh0LmlubmVySFRNTCA9ICdBZGQgUHJvamVjdCc7XG5cbiAgICAvL1Byb2plY3RzIFxuICAgIGNvbnN0IHByb2plY3RzQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzQ29udC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1jb250YWluZXInKTtcblxuICAgIGNvbnN0IHByb2plY3RzSGVhZENvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0c0hlYWRDb250LmNsYXNzTGlzdC5hZGQoJ3NpZGUtdGFiJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0c0VtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByb2plY3RzRW0uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+ZGF0YWJhc2U8L3RpdGxlPjxwYXRoIGQ9XCJNMTIsM0M3LjU4LDMgNCw0Ljc5IDQsN0M0LDkuMjEgNy41OCwxMSAxMiwxMUMxNi40MiwxMSAyMCw5LjIxIDIwLDdDMjAsNC43OSAxNi40MiwzIDEyLDNNNCw5VjEyQzQsMTQuMjEgNy41OCwxNiAxMiwxNkMxNi40MiwxNiAyMCwxNC4yMSAyMCwxMlY5QzIwLDExLjIxIDE2LjQyLDEzIDEyLDEzQzcuNTgsMTMgNCwxMS4yMSA0LDlNNCwxNFYxN0M0LDE5LjIxIDcuNTgsMjEgMTIsMjFDMTYuNDIsMjEgMjAsMTkuMjEgMjAsMTdWMTRDMjAsMTYuMjEgMTYuNDIsMTggMTIsMThDNy41OCwxOCA0LDE2LjIxIDQsMTRaXCIgLz48L3N2Zz4nXG5cbiAgICBjb25zdCBwcm9qZWN0c0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHByb2plY3RzSGVhZC5pbm5lckhUTUwgPSAnUHJvamVjdHMnO1xuXG4gICAgXG4gICAgLy9BUEVORFxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYXNpZGUpO1xuICAgIGFzaWRlLmFwcGVuZENoaWxkKGFzaWRlVXBwZXJDb250KTtcbiAgICBhc2lkZVVwcGVyQ29udC5hcHBlbmRDaGlsZChhc2lkZVVwcGVySW5uZXIpO1xuICAgIGFzaWRlVXBwZXJJbm5lci5hcHBlbmRDaGlsZChhc2lkZVRvZ0VtKTtcbiAgICBhc2lkZS5hcHBlbmRDaGlsZChhc2lkZUlubmVyKTtcbiAgICBhc2lkZUlubmVyLmFwcGVuZENoaWxkKGFzaWRlVG9wKTtcbiAgICBhc2lkZVRvcC5hcHBlbmRDaGlsZChpbmJveENvbnQpO1xuICAgIGluYm94Q29udC5hcHBlbmRDaGlsZChpbmJveEVtKTtcbiAgICBpbmJveENvbnQuYXBwZW5kQ2hpbGQoaW5ib3hUZXh0KTtcbiAgICBhc2lkZVRvcC5hcHBlbmRDaGlsZCh0aW1lQ29udCk7XG4gICAgdGltZUNvbnQuYXBwZW5kQ2hpbGQodG9kYXlDb250KTtcbiAgICB0b2RheUNvbnQuYXBwZW5kQ2hpbGQodG9kYXlFbSk7XG4gICAgdG9kYXlDb250LmFwcGVuZENoaWxkKHRvZGF5VGV4dCk7XG4gICAgdGltZUNvbnQuYXBwZW5kQ2hpbGQod2Vla0NvbnQpO1xuICAgIHdlZWtDb250LmFwcGVuZENoaWxkKHdlZWtFbSk7XG4gICAgd2Vla0NvbnQuYXBwZW5kQ2hpbGQod2Vla1RleHQpO1xuICAgIHRpbWVDb250LmFwcGVuZENoaWxkKG1vbnRoQ29udCk7XG4gICAgbW9udGhDb250LmFwcGVuZENoaWxkKG1vbnRoRW0pO1xuICAgIG1vbnRoQ29udC5hcHBlbmRDaGlsZChtb250aFRleHQpO1xuICAgIHRpbWVDb250LmFwcGVuZENoaWxkKGFueXRpbWVDb250KTtcbiAgICBhbnl0aW1lQ29udC5hcHBlbmRDaGlsZChhbnl0aW1lRW0pO1xuICAgIGFueXRpbWVDb250LmFwcGVuZENoaWxkKGFueXRpbWVUZXh0KTtcbiAgICBhc2lkZS5hcHBlbmRDaGlsZChhc2lkZUJvdHRvbSk7XG4gICAgYXNpZGVCb3R0b20uYXBwZW5kQ2hpbGQoYXNpZGVCb3R0b21Jbm5lcik7XG4gICAgYXNpZGVCb3R0b21Jbm5lci5hcHBlbmRDaGlsZChhZGRMaXN0Q29udCk7XG4gICAgYWRkTGlzdENvbnQuYXBwZW5kQ2hpbGQoYWRkTGlzdEVtKTtcbiAgICBhZGRMaXN0Q29udC5hcHBlbmRDaGlsZChhZGRMaXN0VGV4dCk7XG4gICAgYXNpZGVUb3AuYXBwZW5kQ2hpbGQocHJvamVjdHNDb250KTtcbiAgICBwcm9qZWN0c0NvbnQuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkQ29udCk7XG4gICAgcHJvamVjdHNIZWFkQ29udC5hcHBlbmRDaGlsZChwcm9qZWN0c0VtKTtcbiAgICBwcm9qZWN0c0hlYWRDb250LmFwcGVuZENoaWxkKHByb2plY3RzSGVhZCk7XG5cbiAgICAvL2V2ZW50IGxpc3RlbmVyc1xuICAgIGluYm94Q29udC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlU2VsKCk7XG4gICAgICAgIGluYm94Q29udC5jbGFzc0xpc3QuYWRkKCdzaWRlLXRhYi1zZWwnKTtcbiAgICAgICAgcmVtb3ZlQ29udGVudCgpO1xuICAgICAgICBpbmJveCgpO1xuICAgIH0pO1xuXG4gICAgdG9kYXlDb250LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZW1vdmVTZWwoKTtcbiAgICAgICAgdG9kYXlDb250LmNsYXNzTGlzdC5hZGQoJ3NpZGUtdGFiLXNlbCcpO1xuICAgICAgICByZW1vdmVDb250ZW50KCk7XG4gICAgfSk7XG5cbiAgICB3ZWVrQ29udC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlU2VsKCk7XG4gICAgICAgIHdlZWtDb250LmNsYXNzTGlzdC5hZGQoJ3NpZGUtdGFiLXNlbCcpO1xuICAgICAgICByZW1vdmVDb250ZW50KCk7XG4gICAgfSk7XG5cbiAgICBtb250aENvbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZVNlbCgpO1xuICAgICAgICBtb250aENvbnQuY2xhc3NMaXN0LmFkZCgnc2lkZS10YWItc2VsJyk7XG4gICAgICAgIHJlbW92ZUNvbnRlbnQoKTtcbiAgICB9KTtcblxuICAgIGFueXRpbWVDb250LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZW1vdmVTZWwoKTtcbiAgICAgICAgYW55dGltZUNvbnQuY2xhc3NMaXN0LmFkZCgnc2lkZS10YWItc2VsJyk7XG4gICAgICAgIHJlbW92ZUNvbnRlbnQoKTtcbiAgICB9KTtcblxuICAgIHByb2plY3RzSGVhZENvbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZVNlbCgpO1xuICAgICAgICBwcm9qZWN0c0hlYWRDb250LmNsYXNzTGlzdC5hZGQoJ3NpZGUtdGFiLXNlbCcpO1xuICAgICAgICByZW1vdmVDb250ZW50KCk7XG4gICAgfSk7XG5cbiAgICBhZGRMaXN0Q29udC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVByb2opO1xuXG4gICAgLy9DcmVhdGVzIG5ldyBQcm9qZWN0IEJ1dHRvblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2ooKSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlLXRhYicpO1xuICAgICAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBuZXdQcm9qZWN0RW0uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+dGltZWxhcHNlPC90aXRsZT48cGF0aCBkPVwiTTEyLDIwQTgsOCAwIDAsMSA0LDEyQTgsOCAwIDAsMSAxMiw0QTgsOCAwIDAsMSAyMCwxMkE4LDggMCAwLDEgMTIsMjBNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJNMTYuMjQsNy43NkMxNS4wNyw2LjU4IDEzLjUzLDYgMTIsNlYxMkw3Ljc2LDE2LjI0QzEwLjEsMTguNTggMTMuOSwxOC41OCAxNi4yNCwxNi4yNEMxOC41OSwxMy45IDE4LjU5LDEwLjEgMTYuMjQsNy43NlpcIiAvPjwvc3ZnPic7XG5cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIG5ld1Byb2plY3RUZXh0LmlubmVySFRNTCA9ICdOZXcgUHJvamVjdCc7XG5cbiAgICAgICAgcHJvamVjdHNDb250LmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuICAgICAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RFbSk7XG4gICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRleHQpXG5cbiAgICAgICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZVNlbCgpO1xuICAgICAgICAgICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlLXRhYi1zZWwnKTtcbiAgICAgICAgICAgIHJlbW92ZUNvbnRlbnQoKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvL09wZW4gYW5kIGNsb3NlIHNpZGUgYmFyIFxuICAgICAgICBhc2lkZVRvZ0VtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Z1Y2snKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlU2lkZSgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmdWNrJylcbiAgICAgICAgICAgIGlmIChhc2lkZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FzaWRlLWNsb3NlZCcpKSB7XG4gICAgICAgICAgICAgICAgYXNpZGUuY2xhc3NMaXN0LnJlbW92ZSgnYXNpZGUtY2xvc2VkJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXNpZGUuY2xhc3NMaXN0LmFkZCgnYXNpZGUtY2xvc2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL0FsbG93ZSB1c2VyIHRvIGlucHV0IHByb2plY3QgbmFtZVxuICAgICAgICBuZXdQcm9qZWN0VGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChuZXdQcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucygnc2lkZS10YWItc2VsJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICAgICAgaWYgKG5ld1Byb2plY3RUZXh0LmlubmVySFRNTCAhPT0gJ05ldyBQcm9qZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gbmV3UHJvamVjdFRleHQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdFRleHQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaW5wdXRGaWVsZCwgbmV3UHJvamVjdFRleHQpO1xuXG4gICAgICAgICAgICAgICAgaW5wdXRGaWVsZC5mb2N1cygpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgYmx1ciBldmVudCB0byByZXN0b3JlIHRoZSBzcGFuIHdoZW4gY2xpY2tpbmcgb3V0c2lkZSB0aGUgaW5wdXRcbiAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0RmllbGQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gJ05ldyBQcm9qZWN0JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdFRleHQuaW5uZXJIVE1MID0gaW5wdXRGaWVsZC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIGlucHV0RmllbGQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3UHJvamVjdFRleHQsIGlucHV0RmllbGQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy9SZW1vdmUgU2VsZWN0ZWQgVGFiIFN0eWxpbmdcbiAgICBmdW5jdGlvbiByZW1vdmVTZWwoKSB7XG4gICAgICAgIGluYm94Q29udC5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlLXRhYi1zZWwnKTtcbiAgICAgICAgdG9kYXlDb250LmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGUtdGFiLXNlbCcpO1xuICAgICAgICB3ZWVrQ29udC5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlLXRhYi1zZWwnKTtcbiAgICAgICAgbW9udGhDb250LmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGUtdGFiLXNlbCcpO1xuICAgICAgICBhbnl0aW1lQ29udC5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlLXRhYi1zZWwnKTtcbiAgICAgICAgcHJvamVjdHNIZWFkQ29udC5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlLXRhYi1zZWwnKTtcbiAgICAgICAgbGV0IHByb2plcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXctcHJvamVjdCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZXMpO1xuICAgICAgICBpZiAocHJvamVzKSB7XG4gICAgICAgICAgICBwcm9qZXMuZm9yRWFjaChwcm9qID0+IHtcbiAgICAgICAgICAgICAgICBwcm9qLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGUtdGFiLXNlbCcpOyBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9SZW1vdmUgVGhlIENvbnRlbnQgRnJvbSBNYWluXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ29udGVudCgpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgICAgaWYgKG1haW4pIHtcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobWFpbik7XG4gICAgICAgIH1cbiAgICB9O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgc2lkZWJhciBmcm9tICcuL3NpZGViYXIuanMnXG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgc2lkZWJhcigpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9