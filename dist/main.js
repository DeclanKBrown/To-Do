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
    --main-text-col: #0B0D11;
}

:root.light {
    --aside-col: #f5f5f5;
    --ol-col: #e8e8e8;
    --main-col: #FFFFFF;
    --side-text-col: #3B3E41;
    --side-sec-text-col: #606468;
    --sel-col: #DBDEE1;
    --main-text-col: #0B0D11;
}

@media (prefers-color-scheme: dark) {
    :root.dark {
        --aside-col: #1c1c1c;
        --ol-col: #262626;
        --main-col: #1c1c1c;
        --side-text-col: #d1d1d1;
        --side-sec-text-col: #a8a8a8;
        --sel-col: #2e2e2e;
        --main-text-col: #f5f5f5;
    }
}

body {
    font-family: "San Francisco";
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 45px 4fr 33fr;
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
    transition: all 0.15s;
}

.aside-closed {
    grid-column: 1 / 2;
}

.aside-upper-cont {
    width: 100%;
    display: grid;
    justify-items: center;
    border-bottom: 1px solid var(--ol-col);
    transition: all 0.15s;
    margin-bottom: 1rem;
}

.aside-upper-inner {
    width: 80%;
    grid-row: 1 / 2;
    display: grid;
    grid-template-columns: 35px 1fr 35px;
    align-content: center;
}

.menu-tog {
    cursor: pointer;
    grid-column: 3 / 4;
}

.toggler {
    fill: var(--side-text-col);
}

.menu-tog-closed {
    grid-column: 1 / 2;
}

.aside-inner {
    width: 90%;
    grid-row: 2 / 3;
    overflow-y: scroll;
    display: grid;
    grid-template-rows: auto;
    gap: 2rem;
    overflow-x: hidden;
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
    user-select: none;
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
    transition: all 0.15s;
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

.name-proj {
    width: 80%;
    padding-left: 0.2rem;
    font-size: 1rem;
    color: var(--side-sec-text-col);
    background-color: transparent;
    border: none;
}

.name-proj:focus {
    outline: none
}

main {
    display: grid;
    align-content: center;
    grid-template-rows: 3rem 1fr 3rem;
    background-color: var(--main-col);
    transition: all 0.15s;
}

.main-upper {
    border-bottom: 1px solid var(--ol-col);
    transition: all 0.15s;
    display: grid;
    grid-template-columns: 30px;
    align-items: center;
    justify-content: end;
    padding-right: 10rem;
    transition: all 0.15s;
}

.main-upper svg {
    fill: var(--side-text-col);
    cursor: pointer;
    transition: all 0.15s;
}

.main-inner {
    width: 60%;
    justify-self: center;
    grid-row: 2 / 3;
}

.add-to-do {
    display: grid;
    grid-template-columns: 30px auto;
    align-items: center;
    gap: 0.5rem;
    margin-top: 2rem;
    cursor: pointer;
    user-select: none;
    color: var(--main-text-col);
}

.add-to-do svg {
    fill: var(--main-text-col);
}

.add-to-do-container:hover {
    background-color: var(--sel-col);
    border-radius: 0.3rem;
}

.task {
    display: grid;
    grid-template-columns: 22px auto;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
    cursor: pointer;
    user-select: none;
    color: var(--main-text-col);
    padding: 0.2rem 0;
}

.task svg {
    fill: var(--main-text-col);
}

.task:hover {
    background-color: var(--sel-col);
    border-radius: 0.3rem;
}

.name-task {
    width: 80%;
    padding-left: 0.2rem;
    font-size: 1rem;
    color: var(--side-sec-text-col);
    background-color: transparent;
    border: none;
}

.name-task:focus {
    outline: none;
}

.ind-task {
    color: var(--side-sec-text-col);
    cursor: text;
}

.title {
    color: var(--main-text-col);
    font-size: 2.5rem;
    user-select: none;
}

.main-bottom {
    grid-row: 3 / 4;
    display: grid;
    grid-template-columns: 6fr 1fr;
    align-items: center;
    justify-items: center;
    border-top: 1px solid var(--ol-col);
    transition: all 0.15s;
}

.footer {
    display: grid;
    grid-template-columns: auto 30px;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1rem;
    color: var(--side-text-col);
    user-select: none;
}

.footer svg {
    fill: var(--side-text-col);
}


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n@font-face {\n    font-family: \"San Francisco\";\n    font-weight: 400;\n    src: url(\"https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff\");\n  }\n\n:root {\n    --aside-col: #f5f5f5;\n    --ol-col: #e8e8e8;\n    --main-col: #FFFFFF;\n    --side-text-col: #3B3E41;\n    --side-sec-text-col: #606468;\n    --sel-col: #DBDEE1;\n    --main-text-col: #0B0D11;\n}\n\n:root.light {\n    --aside-col: #f5f5f5;\n    --ol-col: #e8e8e8;\n    --main-col: #FFFFFF;\n    --side-text-col: #3B3E41;\n    --side-sec-text-col: #606468;\n    --sel-col: #DBDEE1;\n    --main-text-col: #0B0D11;\n}\n\n@media (prefers-color-scheme: dark) {\n    :root.dark {\n        --aside-col: #1c1c1c;\n        --ol-col: #262626;\n        --main-col: #1c1c1c;\n        --side-text-col: #d1d1d1;\n        --side-sec-text-col: #a8a8a8;\n        --sel-col: #2e2e2e;\n        --main-text-col: #f5f5f5;\n    }\n}\n\nbody {\n    font-family: \"San Francisco\";\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 45px 4fr 33fr;\n    transition: all 0.15s;\n}\n\n/* \nSIDEBAR\n*/\naside {\n    grid-column: 1 / 3;\n    background-color: var(--aside-col);\n    display: grid;\n    grid-template-rows: 4rem 1fr 3rem;\n    justify-items: center;\n    border-right: 1px solid var(--ol-col);\n    overflow-x: hidden;\n    transition: all 0.15s;\n}\n\n.aside-closed {\n    grid-column: 1 / 2;\n}\n\n.aside-upper-cont {\n    width: 100%;\n    display: grid;\n    justify-items: center;\n    border-bottom: 1px solid var(--ol-col);\n    transition: all 0.15s;\n    margin-bottom: 1rem;\n}\n\n.aside-upper-inner {\n    width: 80%;\n    grid-row: 1 / 2;\n    display: grid;\n    grid-template-columns: 35px 1fr 35px;\n    align-content: center;\n}\n\n.menu-tog {\n    cursor: pointer;\n    grid-column: 3 / 4;\n}\n\n.toggler {\n    fill: var(--side-text-col);\n}\n\n.menu-tog-closed {\n    grid-column: 1 / 2;\n}\n\n.aside-inner {\n    width: 90%;\n    grid-row: 2 / 3;\n    overflow-y: scroll;\n    display: grid;\n    grid-template-rows: auto;\n    gap: 2rem;\n    overflow-x: hidden;\n}\n\n.aside-top {\n    display: grid;\n    grid-template-rows: min-content min-content min-content;\n    gap: 3rem;\n}\n\n.side-tab {\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 25px 1fr;\n    align-items: center;\n    gap: 0.6rem;\n    padding-left: 0.4rem;\n}\n\n.side-tab:hover {\n    background-color: var(--sel-col);\n    border-radius: 0.3rem;\n}\n\n.side-tab-sel {\n    background-color: var(--sel-col);\n    border-radius: 0.3rem;\n}\n\n.side-tab svg {\n    padding-top: 0.2rem;\n    cursor: pointer;\n    fill: var(--side-text-col)\n}\n\n.side-tab h1 {\n    color: var(--side-text-col);\n    font-size: 1.2rem;\n    cursor: pointer;\n    padding-bottom: 0.2rem;\n    user-select: none;\n}\n\n.time-container {\n    display: grid;\n    grid-template-rows: min-content;\n    gap: 1rem;\n}\n\n.aside-bottom {\n    width: 100%;\n    grid-row: 3 / 4;\n    display: grid;\n    border-top: 1px solid var(--ol-col);\n    transition: all 0.15s;\n    justify-items: center;\n    align-items: center;\n}\n\n.aside-bottom-inner {\n    width: 90%;\n}\n\n.projects-container {\n    display: grid;\n    grid-template-rows: min-content;\n    gap: 0.5rem;\n}\n\n.new-project, .new-project svg {\n    color: var(--side-sec-text-col);\n    fill: var(--side-sec-text-col);\n}\n\n.new-project {\n    cursor: text;\n}\n\n.name-proj {\n    width: 80%;\n    padding-left: 0.2rem;\n    font-size: 1rem;\n    color: var(--side-sec-text-col);\n    background-color: transparent;\n    border: none;\n}\n\n.name-proj:focus {\n    outline: none\n}\n\nmain {\n    display: grid;\n    align-content: center;\n    grid-template-rows: 3rem 1fr 3rem;\n    background-color: var(--main-col);\n    transition: all 0.15s;\n}\n\n.main-upper {\n    border-bottom: 1px solid var(--ol-col);\n    transition: all 0.15s;\n    display: grid;\n    grid-template-columns: 30px;\n    align-items: center;\n    justify-content: end;\n    padding-right: 10rem;\n    transition: all 0.15s;\n}\n\n.main-upper svg {\n    fill: var(--side-text-col);\n    cursor: pointer;\n    transition: all 0.15s;\n}\n\n.main-inner {\n    width: 60%;\n    justify-self: center;\n    grid-row: 2 / 3;\n}\n\n.add-to-do {\n    display: grid;\n    grid-template-columns: 30px auto;\n    align-items: center;\n    gap: 0.5rem;\n    margin-top: 2rem;\n    cursor: pointer;\n    user-select: none;\n    color: var(--main-text-col);\n}\n\n.add-to-do svg {\n    fill: var(--main-text-col);\n}\n\n.add-to-do-container:hover {\n    background-color: var(--sel-col);\n    border-radius: 0.3rem;\n}\n\n.task {\n    display: grid;\n    grid-template-columns: 22px auto;\n    align-items: center;\n    gap: 0.5rem;\n    margin-top: 1.5rem;\n    cursor: pointer;\n    user-select: none;\n    color: var(--main-text-col);\n    padding: 0.2rem 0;\n}\n\n.task svg {\n    fill: var(--main-text-col);\n}\n\n.task:hover {\n    background-color: var(--sel-col);\n    border-radius: 0.3rem;\n}\n\n.name-task {\n    width: 80%;\n    padding-left: 0.2rem;\n    font-size: 1rem;\n    color: var(--side-sec-text-col);\n    background-color: transparent;\n    border: none;\n}\n\n.name-task:focus {\n    outline: none;\n}\n\n.ind-task {\n    color: var(--side-sec-text-col);\n    cursor: text;\n}\n\n.title {\n    color: var(--main-text-col);\n    font-size: 2.5rem;\n    user-select: none;\n}\n\n.main-bottom {\n    grid-row: 3 / 4;\n    display: grid;\n    grid-template-columns: 6fr 1fr;\n    align-items: center;\n    justify-items: center;\n    border-top: 1px solid var(--ol-col);\n    transition: all 0.15s;\n}\n\n.footer {\n    display: grid;\n    grid-template-columns: auto 30px;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    font-size: 1rem;\n    color: var(--side-text-col);\n    user-select: none;\n}\n\n.footer svg {\n    fill: var(--side-text-col);\n}\n\n\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
class UI {
    static loadHome() {
        UI.sidebar();
        UI.main();
    }

    static sidebar() {
        const aside = document.createElement('aside');
        aside.innerHTML = `
        <div class="aside-upper-cont">
            <div class="aside-upper-inner">
                <span class="menu-tog">
                    <svg class="toggler" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>menu</title>
                        <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                    </svg>
                </span>
            </div>
        </div>
        <div class="aside-inner">
            <div class="aside-top">
                <div class="side-tab side-tab-sel" id="Inbox">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>inbox</title>
                            <path d="M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />
                        </svg>
                    </span>
                    <h1>Inbox</h1>
                </div>
                <div class="time-container">
                    <div class="side-tab" id="Today">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>star-outline</title>
                                <path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
                            </svg>
                        </span>
                        <h1>Today</h1>
                    </div>
                    <div class="side-tab" id="Week">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>calendar-range</title>
                                <path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" />
                            </svg>
                        </span>
                        <h1>Week</h1>
                    </div>
                    <div class="side-tab" id="Month">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>calendar-month</title>
                                <path d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" />
                            </svg>
                        </span>
                        <h1>Month</h1>
                    </div>
                    <div class="side-tab" id="Anytime">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>note</title>
                                <path d="M14,10V4.5L19.5,10M5,3C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V9L15,3H5Z" />
                            </svg>
                        </span>
                        <h1>Anytime</h1>
                    </div>
                </div>
                <div class="projects-container">
                    <div class="side-tab" id="Projects">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>database</title>
                                <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z" />
                            </svg>
                        </span>
                        <h1>Projects</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="aside-bottom">
            <div class="aside-bottom-inner">
                <div class="side-tab add-project">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>plus</title>
                            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
                        </svg>
                    </span>
                    <h1>Add Project</h1>
                </div>
            </div>
        </div>`;

    document.body.appendChild(aside);
    UI.initButtons();
    }

    static initButtons() {
        const hamMenu = document.querySelector('.toggler');
        const tabs = document.querySelectorAll('.side-tab');
        const addBtn = document.querySelector('.add-project');

        hamMenu.addEventListener('click', UI.toggleMenu);
        tabs.forEach((tab) => tab.addEventListener('click', () => UI.tab(tab)));
        addBtn.addEventListener('click', UI.addProject);
    }

    static toggleMenu() {
        const aside = document.querySelector('aside');
        const asideSVG = document.querySelector('.menu-tog');
        if (aside.classList.contains('aside-closed')) {
            aside.classList.remove('aside-closed');
            asideSVG.classList.remove('menu-tog-closed');
        } else {
            aside.classList.add('aside-closed');
            asideSVG.classList.add('menu-tog-closed');
        }
    }

    static tab(e) {
        UI.removeTabStyle();
        UI.tabStyle(e);
        UI.removeProject();
        UI.openProject(e);
    }

    static removeTabStyle() {
        const tabs = document.querySelectorAll('.side-tab');
        tabs.forEach((tab) => tab.classList.remove('side-tab-sel'));
    }

    static tabStyle(e) {
        e.classList.add('side-tab-sel');
    }

    static addProject() {
        const proj = document.createElement('div');
        proj.id = 'projectsCont';
        proj.innerHTML = `
        <div class="side-tab new-project" id="New Project">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>timelapse</title>
                    <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.24,7.76C15.07,6.58 13.53,6 12,6V12L7.76,16.24C10.1,18.58 13.9,18.58 16.24,16.24C18.59,13.9 18.59,10.1 16.24,7.76Z" />
                </svg>
            </span>
            <span class="project-name">New Project</span>
        </div>`;
    document.querySelector('.projects-container').appendChild(proj);

    UI.initProject();
    UI.openProject(proj.firstElementChild);
    }

    static initProject() {
        const project = document.querySelectorAll('.new-project')[document.querySelectorAll('.new-project').length - 1];
        project.addEventListener('click', () => UI.tab(project));

        project.classList.add('side-tab-sel');

        const text = document.querySelectorAll('.project-name')[document.querySelectorAll('.project-name').length - 1];
        text.addEventListener('click', () => UI.renameProject(text))
    }

    static renameProject(input) {
        if (input.parentNode.classList.contains('side-tab-sel')) {
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.classList.add('name-proj');
            if (input.innerHTML !== 'New Project') {
                inputField.value = input.innerHTML;
            };

            input.parentNode.replaceChild(inputField, input);

            inputField.focus();
          
            // Handle blur event to restore the span when clicking outside the input
            inputField.addEventListener('blur', function() {
                if (inputField.value === '') {
                    inputField.value = 'New Project';
                    inputField.parentNode.id = 'New Project'
                } else {
                    inputField.parentNode.id = inputField.value
                }
            input.innerHTML = inputField.value;
            document.querySelector('.title').innerHTML = inputField.value;
            inputField.parentNode.replaceChild(input, inputField);
            });
        }
    }

    static main() {
        const main = document.createElement('main');
        main.innerHTML = `
        <div class="main-upper">
            <div class="mode-tog">
                <svg class="mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>white-balance-sunny</title>
                    <path d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" />
                </svg>
            </div>
        </div>
        <div class="main-inner">
            <div class="main-inner-upper">
                <h1 class="title">Inbox</h1>
            </div>
            <div class="tasks-container">
            </div>
            <div class="add-to-do-container">
                <div class="add-to-do">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>plus</title>
                        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <h3>Add Task</h3>
                </div>
            </div>
        </div>
        <div class="main-bottom">
            <div class="footer">
                <span>Copyright © 2023 Declankb</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>github</title>
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg>
            </div>
        </div>
        `;
        document.body.appendChild(main);
        UI.initMainButtons();
    }

    static initMainButtons() {
        const addTask = document.querySelector('.add-to-do');
        const toggleMode = document.querySelector('.mode-tog');

        addTask.addEventListener('click', UI.addTask);
        toggleMode.addEventListener('click', UI.mode)
    }

    static removeProject() {
        document.querySelector('.title').innerHTML = '';
        document.querySelector('.tasks-container').innerHTML = '';
    }

    static openProject(Tab) {
        document.querySelector('.title').innerHTML = Tab.id;
        document.querySelector('.tasks-container').innerHTML = '';
    }

    static mode() {
        const root = document.documentElement;
        const newTheme = root.className === 'dark' ? 'light' : 'dark';
        root.className = newTheme;

        const icon = document.querySelector('.mode-tog')
        if (newTheme === 'dark') {
            icon.innerHTML = '<svg class="mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>moon-full</title><path d="M12 2A10 10 0 1 1 2 12A10 10 0 0 1 12 2Z" /></svg>'
        } else {
            icon.innerHTML = '<svg class="mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>white-balance-sunny</title><path d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" /></svg>';
        }
    }

    static addTask() {
        const task = document.createElement('div');
        task.classList.add('task');
        task.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>checkbox-blank-outline</title>
            <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" />
        </svg>
        <h3 class="ind-task">New Task</h3>`;
        document.querySelector('.tasks-container').appendChild(task);

        UI.nameTask(task)
    }

    static nameTask(task) {
        const textbox = task.lastElementChild;
        console.log(textbox)
        
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.classList.add('name-task');
        if (textbox.innerHTML !== 'New Task') {
            inputField.value = textbox.innerHTML;
        };

        textbox.parentNode.replaceChild(inputField, textbox);

        inputField.focus();

        inputField.addEventListener('blur', function() {
            if (inputField.value === '') {
                inputField.value = 'New Task';
            } 
        textbox.innerHTML = inputField.value;
        task.replaceChild(textbox, inputField);
        });

        UI.initTask();
    }

    static initTask() {
        const task = document.querySelectorAll('.ind-task')[document.querySelectorAll('.ind-task').length - 1];
        task.addEventListener('click', () => UI.nameTask(task))
    }

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
/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI.js */ "./src/modules/UI.js");



document.addEventListener('DOMContentLoaded', _modules_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadHome)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDdlRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ1k7O0FBRWhDLDhDQUE4QyxzREFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlNhbiBGcmFuY2lzY29cIjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9hcHBsZXNvY2lhbC5zMy5hbWF6b25hd3MuY29tL2Fzc2V0cy9zdHlsZXMvZm9udHMvc2FuZnJhbmNpc2NvL3NhbmZyYW5jaXNjb2Rpc3BsYXktcmVndWxhci13ZWJmb250LndvZmZcIik7XG4gIH1cblxuOnJvb3Qge1xuICAgIC0tYXNpZGUtY29sOiAjZjVmNWY1O1xuICAgIC0tb2wtY29sOiAjZThlOGU4O1xuICAgIC0tbWFpbi1jb2w6ICNGRkZGRkY7XG4gICAgLS1zaWRlLXRleHQtY29sOiAjM0IzRTQxO1xuICAgIC0tc2lkZS1zZWMtdGV4dC1jb2w6ICM2MDY0Njg7XG4gICAgLS1zZWwtY29sOiAjREJERUUxO1xuICAgIC0tbWFpbi10ZXh0LWNvbDogIzBCMEQxMTtcbn1cblxuOnJvb3QubGlnaHQge1xuICAgIC0tYXNpZGUtY29sOiAjZjVmNWY1O1xuICAgIC0tb2wtY29sOiAjZThlOGU4O1xuICAgIC0tbWFpbi1jb2w6ICNGRkZGRkY7XG4gICAgLS1zaWRlLXRleHQtY29sOiAjM0IzRTQxO1xuICAgIC0tc2lkZS1zZWMtdGV4dC1jb2w6ICM2MDY0Njg7XG4gICAgLS1zZWwtY29sOiAjREJERUUxO1xuICAgIC0tbWFpbi10ZXh0LWNvbDogIzBCMEQxMTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIDpyb290LmRhcmsge1xuICAgICAgICAtLWFzaWRlLWNvbDogIzFjMWMxYztcbiAgICAgICAgLS1vbC1jb2w6ICMyNjI2MjY7XG4gICAgICAgIC0tbWFpbi1jb2w6ICMxYzFjMWM7XG4gICAgICAgIC0tc2lkZS10ZXh0LWNvbDogI2QxZDFkMTtcbiAgICAgICAgLS1zaWRlLXNlYy10ZXh0LWNvbDogI2E4YThhODtcbiAgICAgICAgLS1zZWwtY29sOiAjMmUyZTJlO1xuICAgICAgICAtLW1haW4tdGV4dC1jb2w6ICNmNWY1ZjU7XG4gICAgfVxufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogXCJTYW4gRnJhbmNpc2NvXCI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ1cHggNGZyIDMzZnI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuXG4vKiBcblNJREVCQVJcbiovXG5hc2lkZSB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFzaWRlLWNvbCk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gMWZyIDNyZW07XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLW9sLWNvbCk7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbn1cblxuLmFzaWRlLWNsb3NlZCB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xufVxuXG4uYXNpZGUtdXBwZXItY29udCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW9sLWNvbCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5hc2lkZS11cHBlci1pbm5lciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1cHggMWZyIDM1cHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4ubWVudS10b2cge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XG59XG5cbi50b2dnbGVyIHtcbiAgICBmaWxsOiB2YXIoLS1zaWRlLXRleHQtY29sKTtcbn1cblxuLm1lbnUtdG9nLWNsb3NlZCB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xufVxuXG4uYXNpZGUtaW5uZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICBnYXA6IDJyZW07XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uYXNpZGUtdG9wIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgZ2FwOiAzcmVtO1xufVxuXG4uc2lkZS10YWIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNnJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNHJlbTtcbn1cblxuLnNpZGUtdGFiOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWwtY29sKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG59XG5cbi5zaWRlLXRhYi1zZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbC1jb2wpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbn1cblxuLnNpZGUtdGFiIHN2ZyB7XG4gICAgcGFkZGluZy10b3A6IDAuMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmlsbDogdmFyKC0tc2lkZS10ZXh0LWNvbClcbn1cblxuLnNpZGUtdGFiIGgxIHtcbiAgICBjb2xvcjogdmFyKC0tc2lkZS10ZXh0LWNvbCk7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi50aW1lLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmFzaWRlLWJvdHRvbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLW9sLWNvbCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXNpZGUtYm90dG9tLWlubmVyIHtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbi5uZXctcHJvamVjdCwgLm5ldy1wcm9qZWN0IHN2ZyB7XG4gICAgY29sb3I6IHZhcigtLXNpZGUtc2VjLXRleHQtY29sKTtcbiAgICBmaWxsOiB2YXIoLS1zaWRlLXNlYy10ZXh0LWNvbCk7XG59XG5cbi5uZXctcHJvamVjdCB7XG4gICAgY3Vyc29yOiB0ZXh0O1xufVxuXG4ubmFtZS1wcm9qIHtcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1zZWMtdGV4dC1jb2wpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLm5hbWUtcHJvajpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZVxufVxuXG5tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gMWZyIDNyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2wpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbn1cblxuLm1haW4tdXBwZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1vbC1jb2wpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbn1cblxuLm1haW4tdXBwZXIgc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1zaWRlLXRleHQtY29sKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuXG4ubWFpbi1pbm5lciB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBncmlkLXJvdzogMiAvIDM7XG59XG5cbi5hZGQtdG8tZG8ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbCk7XG59XG5cbi5hZGQtdG8tZG8gc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1tYWluLXRleHQtY29sKTtcbn1cblxuLmFkZC10by1kby1jb250YWluZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbC1jb2wpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbn1cblxuLnRhc2sge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMnB4IGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sKTtcbiAgICBwYWRkaW5nOiAwLjJyZW0gMDtcbn1cblxuLnRhc2sgc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1tYWluLXRleHQtY29sKTtcbn1cblxuLnRhc2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbC1jb2wpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbn1cblxuLm5hbWUtdGFzayB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHZhcigtLXNpZGUtc2VjLXRleHQtY29sKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5uYW1lLXRhc2s6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pbmQtdGFzayB7XG4gICAgY29sb3I6IHZhcigtLXNpZGUtc2VjLXRleHQtY29sKTtcbiAgICBjdXJzb3I6IHRleHQ7XG59XG5cbi50aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2wpO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubWFpbi1ib3R0b20ge1xuICAgIGdyaWQtcm93OiAzIC8gNDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tb2wtY29sKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG5cbi5mb290ZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDMwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXRleHQtY29sKTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmZvb3RlciBzdmcge1xuICAgIGZpbGw6IHZhcigtLXNpZGUtdGV4dC1jb2wpO1xufVxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQiwwSEFBMEg7RUFDNUg7O0FBRUY7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSTtRQUNJLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLHdCQUF3QjtRQUN4Qiw0QkFBNEI7UUFDNUIsa0JBQWtCO1FBQ2xCLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxxQkFBcUI7QUFDekI7O0FBRUE7O0NBRUM7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxxQkFBcUI7SUFDckIscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQ0FB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QUFtQjtJQUNuQixxQkFBcUI7SUFDckIsbUNBQW1DO0lBQ25DLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2FuIEZyYW5jaXNjb1xcXCI7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKFxcXCJodHRwczovL2FwcGxlc29jaWFsLnMzLmFtYXpvbmF3cy5jb20vYXNzZXRzL3N0eWxlcy9mb250cy9zYW5mcmFuY2lzY28vc2FuZnJhbmNpc2NvZGlzcGxheS1yZWd1bGFyLXdlYmZvbnQud29mZlxcXCIpO1xcbiAgfVxcblxcbjpyb290IHtcXG4gICAgLS1hc2lkZS1jb2w6ICNmNWY1ZjU7XFxuICAgIC0tb2wtY29sOiAjZThlOGU4O1xcbiAgICAtLW1haW4tY29sOiAjRkZGRkZGO1xcbiAgICAtLXNpZGUtdGV4dC1jb2w6ICMzQjNFNDE7XFxuICAgIC0tc2lkZS1zZWMtdGV4dC1jb2w6ICM2MDY0Njg7XFxuICAgIC0tc2VsLWNvbDogI0RCREVFMTtcXG4gICAgLS1tYWluLXRleHQtY29sOiAjMEIwRDExO1xcbn1cXG5cXG46cm9vdC5saWdodCB7XFxuICAgIC0tYXNpZGUtY29sOiAjZjVmNWY1O1xcbiAgICAtLW9sLWNvbDogI2U4ZThlODtcXG4gICAgLS1tYWluLWNvbDogI0ZGRkZGRjtcXG4gICAgLS1zaWRlLXRleHQtY29sOiAjM0IzRTQxO1xcbiAgICAtLXNpZGUtc2VjLXRleHQtY29sOiAjNjA2NDY4O1xcbiAgICAtLXNlbC1jb2w6ICNEQkRFRTE7XFxuICAgIC0tbWFpbi10ZXh0LWNvbDogIzBCMEQxMTtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgICA6cm9vdC5kYXJrIHtcXG4gICAgICAgIC0tYXNpZGUtY29sOiAjMWMxYzFjO1xcbiAgICAgICAgLS1vbC1jb2w6ICMyNjI2MjY7XFxuICAgICAgICAtLW1haW4tY29sOiAjMWMxYzFjO1xcbiAgICAgICAgLS1zaWRlLXRleHQtY29sOiAjZDFkMWQxO1xcbiAgICAgICAgLS1zaWRlLXNlYy10ZXh0LWNvbDogI2E4YThhODtcXG4gICAgICAgIC0tc2VsLWNvbDogIzJlMmUyZTtcXG4gICAgICAgIC0tbWFpbi10ZXh0LWNvbDogI2Y1ZjVmNTtcXG4gICAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTYW4gRnJhbmNpc2NvXFxcIjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ1cHggNGZyIDMzZnI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXG59XFxuXFxuLyogXFxuU0lERUJBUlxcbiovXFxuYXNpZGUge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFzaWRlLWNvbCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSAxZnIgM3JlbTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1vbC1jb2wpO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXG59XFxuXFxuLmFzaWRlLWNsb3NlZCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLmFzaWRlLXVwcGVyLWNvbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tb2wtY29sKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uYXNpZGUtdXBwZXItaW5uZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzVweCAxZnIgMzVweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWVudS10b2cge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG59XFxuXFxuLnRvZ2dsZXIge1xcbiAgICBmaWxsOiB2YXIoLS1zaWRlLXRleHQtY29sKTtcXG59XFxuXFxuLm1lbnUtdG9nLWNsb3NlZCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLmFzaWRlLWlubmVyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5hc2lkZS10b3Age1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBnYXA6IDNyZW07XFxufVxcblxcbi5zaWRlLXRhYiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjZyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC40cmVtO1xcbn1cXG5cXG4uc2lkZS10YWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWwtY29sKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4uc2lkZS10YWItc2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsLWNvbCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLnNpZGUtdGFiIHN2ZyB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmlsbDogdmFyKC0tc2lkZS10ZXh0LWNvbClcXG59XFxuXFxuLnNpZGUtdGFiIGgxIHtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtdGV4dC1jb2wpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRpbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYXNpZGUtYm90dG9tIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLW9sLWNvbCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXNpZGUtYm90dG9tLWlubmVyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ubmV3LXByb2plY3QsIC5uZXctcHJvamVjdCBzdmcge1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1zZWMtdGV4dC1jb2wpO1xcbiAgICBmaWxsOiB2YXIoLS1zaWRlLXNlYy10ZXh0LWNvbCk7XFxufVxcblxcbi5uZXctcHJvamVjdCB7XFxuICAgIGN1cnNvcjogdGV4dDtcXG59XFxuXFxuLm5hbWUtcHJvaiB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXNlYy10ZXh0LWNvbCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5uYW1lLXByb2o6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lXFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAxZnIgM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2wpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XFxufVxcblxcbi5tYWluLXVwcGVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW9sLWNvbCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgcGFkZGluZy1yaWdodDogMTByZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXG59XFxuXFxuLm1haW4tdXBwZXIgc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tc2lkZS10ZXh0LWNvbCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcbn1cXG5cXG4ubWFpbi1pbm5lciB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5hZGQtdG8tZG8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sKTtcXG59XFxuXFxuLmFkZC10by1kbyBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLXRleHQtY29sKTtcXG59XFxuXFxuLmFkZC10by1kby1jb250YWluZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWwtY29sKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjJweCBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbCk7XFxuICAgIHBhZGRpbmc6IDAuMnJlbSAwO1xcbn1cXG5cXG4udGFzayBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLXRleHQtY29sKTtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWwtY29sKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4ubmFtZS10YXNrIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtc2VjLXRleHQtY29sKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm5hbWUtdGFzazpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5pbmQtdGFzayB7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXNlYy10ZXh0LWNvbCk7XFxuICAgIGN1cnNvcjogdGV4dDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2wpO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5tYWluLWJvdHRvbSB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1vbC1jb2wpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS10ZXh0LWNvbCk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uZm9vdGVyIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLXNpZGUtdGV4dC1jb2wpO1xcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICAgIHN0YXRpYyBsb2FkSG9tZSgpIHtcbiAgICAgICAgVUkuc2lkZWJhcigpO1xuICAgICAgICBVSS5tYWluKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNpZGViYXIoKSB7XG4gICAgICAgIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcbiAgICAgICAgYXNpZGUuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXNpZGUtdXBwZXItY29udFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFzaWRlLXVwcGVyLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZW51LXRvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwidG9nZ2xlclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+bWVudTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMsNkgyMVY4SDNWNk0zLDExSDIxVjEzSDNWMTFNMywxNkgyMVYxOEgzVjE2WlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFzaWRlLWlubmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXNpZGUtdG9wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtdGFiIHNpZGUtdGFiLXNlbFwiIGlkPVwiSW5ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPmluYm94PC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE5LDE1SDE1QTMsMyAwIDAsMSAxMiwxOEEzLDMgMCAwLDEgOSwxNUg1VjVIMTlNMTksM0g1QzMuODksMyAzLDMuOSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjVBMiwyIDAgMCwwIDE5LDNaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5JbmJveDwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLXRhYlwiIGlkPVwiVG9kYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnN0YXItb3V0bGluZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIsMTUuMzlMOC4yNCwxNy42Nkw5LjIzLDEzLjM4TDUuOTEsMTAuNUwxMC4yOSwxMC4xM0wxMiw2LjA5TDEzLjcxLDEwLjEzTDE4LjA5LDEwLjVMMTQuNzcsMTMuMzhMMTUuNzYsMTcuNjZNMjIsOS4yNEwxNC44MSw4LjYzTDEyLDJMOS4xOSw4LjYzTDIsOS4yNEw3LjQ1LDEzLjk3TDUuODIsMjFMMTIsMTcuMjdMMTguMTgsMjFMMTYuNTQsMTMuOTdMMjIsOS4yNFpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlRvZGF5PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLXRhYlwiIGlkPVwiV2Vla1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+Y2FsZW5kYXItcmFuZ2U8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTksMTBIN1YxMkg5VjEwTTEzLDEwSDExVjEySDEzVjEwTTE3LDEwSDE1VjEySDE3VjEwTTE5LDNIMThWMUgxNlYzSDhWMUg2VjNINUMzLjg5LDMgMywzLjkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVY1QTIsMiAwIDAsMCAxOSwzTTE5LDE5SDVWOEgxOVYxOVpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPldlZWs8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtdGFiXCIgaWQ9XCJNb250aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+Y2FsZW5kYXItbW9udGg8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTksMTBWMTJIN1YxMEg5TTEzLDEwVjEySDExVjEwSDEzTTE3LDEwVjEySDE1VjEwSDE3TTE5LDNBMiwyIDAgMCwxIDIxLDVWMTlBMiwyIDAgMCwxIDE5LDIxSDVDMy44OSwyMSAzLDIwLjEgMywxOVY1QTIsMiAwIDAsMSA1LDNINlYxSDhWM0gxNlYxSDE4VjNIMTlNMTksMTlWOEg1VjE5SDE5TTksMTRWMTZIN1YxNEg5TTEzLDE0VjE2SDExVjE0SDEzTTE3LDE0VjE2SDE1VjE0SDE3WlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+TW9udGg8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtdGFiXCIgaWQ9XCJBbnl0aW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5ub3RlPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNCwxMFY0LjVMMTkuNSwxME01LDNDMy44OSwzIDMsMy45IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWOUwxNSwzSDVaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Bbnl0aW1lPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS10YWJcIiBpZD1cIlByb2plY3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5kYXRhYmFzZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIsM0M3LjU4LDMgNCw0Ljc5IDQsN0M0LDkuMjEgNy41OCwxMSAxMiwxMUMxNi40MiwxMSAyMCw5LjIxIDIwLDdDMjAsNC43OSAxNi40MiwzIDEyLDNNNCw5VjEyQzQsMTQuMjEgNy41OCwxNiAxMiwxNkMxNi40MiwxNiAyMCwxNC4yMSAyMCwxMlY5QzIwLDExLjIxIDE2LjQyLDEzIDEyLDEzQzcuNTgsMTMgNCwxMS4yMSA0LDlNNCwxNFYxN0M0LDE5LjIxIDcuNTgsMjEgMTIsMjFDMTYuNDIsMjEgMjAsMTkuMjEgMjAsMTdWMTRDMjAsMTYuMjEgMTYuNDIsMTggMTIsMThDNy41OCwxOCA0LDE2LjIxIDQsMTRaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Qcm9qZWN0czwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXNpZGUtYm90dG9tXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXNpZGUtYm90dG9tLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtdGFiIGFkZC1wcm9qZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5wbHVzPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE5LDEzSDEzVjE5SDExVjEzSDVWMTFIMTFWNUgxM1YxMUgxOVYxM1pcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aDE+QWRkIFByb2plY3Q8L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmA7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFzaWRlKTtcbiAgICBVSS5pbml0QnV0dG9ucygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbml0QnV0dG9ucygpIHtcbiAgICAgICAgY29uc3QgaGFtTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGVyJyk7XG4gICAgICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZS10YWInKTtcbiAgICAgICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG5cbiAgICAgICAgaGFtTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLnRvZ2dsZU1lbnUpO1xuICAgICAgICB0YWJzLmZvckVhY2goKHRhYikgPT4gdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkudGFiKHRhYikpKTtcbiAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuYWRkUHJvamVjdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHRvZ2dsZU1lbnUoKSB7XG4gICAgICAgIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKTtcbiAgICAgICAgY29uc3QgYXNpZGVTVkcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS10b2cnKTtcbiAgICAgICAgaWYgKGFzaWRlLmNsYXNzTGlzdC5jb250YWlucygnYXNpZGUtY2xvc2VkJykpIHtcbiAgICAgICAgICAgIGFzaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FzaWRlLWNsb3NlZCcpO1xuICAgICAgICAgICAgYXNpZGVTVkcuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS10b2ctY2xvc2VkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhc2lkZS5jbGFzc0xpc3QuYWRkKCdhc2lkZS1jbG9zZWQnKTtcbiAgICAgICAgICAgIGFzaWRlU1ZHLmNsYXNzTGlzdC5hZGQoJ21lbnUtdG9nLWNsb3NlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHRhYihlKSB7XG4gICAgICAgIFVJLnJlbW92ZVRhYlN0eWxlKCk7XG4gICAgICAgIFVJLnRhYlN0eWxlKGUpO1xuICAgICAgICBVSS5yZW1vdmVQcm9qZWN0KCk7XG4gICAgICAgIFVJLm9wZW5Qcm9qZWN0KGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyByZW1vdmVUYWJTdHlsZSgpIHtcbiAgICAgICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlLXRhYicpO1xuICAgICAgICB0YWJzLmZvckVhY2goKHRhYikgPT4gdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGUtdGFiLXNlbCcpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdGFiU3R5bGUoZSkge1xuICAgICAgICBlLmNsYXNzTGlzdC5hZGQoJ3NpZGUtdGFiLXNlbCcpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2ouaWQgPSAncHJvamVjdHNDb250JztcbiAgICAgICAgcHJvai5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLXRhYiBuZXctcHJvamVjdFwiIGlkPVwiTmV3IFByb2plY3RcIj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnRpbWVsYXBzZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIsMjBBOCw4IDAgMCwxIDQsMTJBOCw4IDAgMCwxIDEyLDRBOCw4IDAgMCwxIDIwLDEyQTgsOCAwIDAsMSAxMiwyME0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMk0xNi4yNCw3Ljc2QzE1LjA3LDYuNTggMTMuNTMsNiAxMiw2VjEyTDcuNzYsMTYuMjRDMTAuMSwxOC41OCAxMy45LDE4LjU4IDE2LjI0LDE2LjI0QzE4LjU5LDEzLjkgMTguNTksMTAuMSAxNi4yNCw3Ljc2WlwiIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3QtbmFtZVwiPk5ldyBQcm9qZWN0PC9zcGFuPlxuICAgICAgICA8L2Rpdj5gO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKS5hcHBlbmRDaGlsZChwcm9qKTtcblxuICAgIFVJLmluaXRQcm9qZWN0KCk7XG4gICAgVUkub3BlblByb2plY3QocHJvai5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXRQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ldy1wcm9qZWN0JylbZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ldy1wcm9qZWN0JykubGVuZ3RoIC0gMV07XG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS50YWIocHJvamVjdCkpO1xuXG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2lkZS10YWItc2VsJyk7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW5hbWUnKVtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1uYW1lJykubGVuZ3RoIC0gMV07XG4gICAgICAgIHRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5yZW5hbWVQcm9qZWN0KHRleHQpKVxuICAgIH1cblxuICAgIHN0YXRpYyByZW5hbWVQcm9qZWN0KGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnc2lkZS10YWItc2VsJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXRGaWVsZC50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKCduYW1lLXByb2onKTtcbiAgICAgICAgICAgIGlmIChpbnB1dC5pbm5lckhUTUwgIT09ICdOZXcgUHJvamVjdCcpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gaW5wdXQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW5wdXQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaW5wdXRGaWVsZCwgaW5wdXQpO1xuXG4gICAgICAgICAgICBpbnB1dEZpZWxkLmZvY3VzKCk7XG4gICAgICAgICAgXG4gICAgICAgICAgICAvLyBIYW5kbGUgYmx1ciBldmVudCB0byByZXN0b3JlIHRoZSBzcGFuIHdoZW4gY2xpY2tpbmcgb3V0c2lkZSB0aGUgaW5wdXRcbiAgICAgICAgICAgIGlucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dEZpZWxkLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gJ05ldyBQcm9qZWN0JztcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRGaWVsZC5wYXJlbnROb2RlLmlkID0gJ05ldyBQcm9qZWN0J1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0RmllbGQucGFyZW50Tm9kZS5pZCA9IGlucHV0RmllbGQudmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dC5pbm5lckhUTUwgPSBpbnB1dEZpZWxkLnZhbHVlO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykuaW5uZXJIVE1MID0gaW5wdXRGaWVsZC52YWx1ZTtcbiAgICAgICAgICAgIGlucHV0RmllbGQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaW5wdXQsIGlucHV0RmllbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgbWFpbigpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLXVwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kZS10b2dcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwibW9kZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT53aGl0ZS1iYWxhbmNlLXN1bm55PC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zLjU1IDE5LjA5TDQuOTYgMjAuNUw2Ljc2IDE4LjcxTDUuMzQgMTcuMjlNMTIgNkM4LjY5IDYgNiA4LjY5IDYgMTJTOC42OSAxOCAxMiAxOCAxOCAxNS4zMSAxOCAxMkMxOCA4LjY4IDE1LjMxIDYgMTIgNk0yMCAxM0gyM1YxMUgyME0xNy4yNCAxOC43MUwxOS4wNCAyMC41TDIwLjQ1IDE5LjA5TDE4LjY2IDE3LjI5TTIwLjQ1IDVMMTkuMDQgMy42TDE3LjI0IDUuMzlMMTguNjYgNi44MU0xMyAxSDExVjRIMTNNNi43NiA1LjM5TDQuOTYgMy42TDMuNTUgNUw1LjM0IDYuODFMNi43NiA1LjM5TTEgMTNINFYxMUgxTTEzIDIwSDExVjIzSDEzXCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4taW5uZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWlubmVyLXVwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5JbmJveDwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10by1kby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLXRvLWRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5wbHVzPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTksMTNIMTNWMTlIMTFWMTNINVYxMUgxMVY1SDEzVjExSDE5VjEzWlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8aDM+QWRkIFRhc2s8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1ib3R0b21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Db3B5cmlnaHQgwqkgMjAyMyBEZWNsYW5rYjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5naXRodWI8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkMyLDE2LjQyIDQuODcsMjAuMTcgOC44NCwyMS41QzkuMzQsMjEuNTggOS41LDIxLjI3IDkuNSwyMUM5LjUsMjAuNzcgOS41LDIwLjE0IDkuNSwxOS4zMUM2LjczLDE5LjkxIDYuMTQsMTcuOTcgNi4xNCwxNy45N0M1LjY4LDE2LjgxIDUuMDMsMTYuNSA1LjAzLDE2LjVDNC4xMiwxNS44OCA1LjEsMTUuOSA1LjEsMTUuOUM2LjEsMTUuOTcgNi42MywxNi45MyA2LjYzLDE2LjkzQzcuNSwxOC40NSA4Ljk3LDE4IDkuNTQsMTcuNzZDOS42MywxNy4xMSA5Ljg5LDE2LjY3IDEwLjE3LDE2LjQyQzcuOTUsMTYuMTcgNS42MiwxNS4zMSA1LjYyLDExLjVDNS42MiwxMC4zOSA2LDkuNSA2LjY1LDguNzlDNi41NSw4LjU0IDYuMiw3LjUgNi43NSw2LjE1QzYuNzUsNi4xNSA3LjU5LDUuODggOS41LDcuMTdDMTAuMjksNi45NSAxMS4xNSw2Ljg0IDEyLDYuODRDMTIuODUsNi44NCAxMy43MSw2Ljk1IDE0LjUsNy4xN0MxNi40MSw1Ljg4IDE3LjI1LDYuMTUgMTcuMjUsNi4xNUMxNy44LDcuNSAxNy40NSw4LjU0IDE3LjM1LDguNzlDMTgsOS41IDE4LjM4LDEwLjM5IDE4LjM4LDExLjVDMTguMzgsMTUuMzIgMTYuMDQsMTYuMTYgMTMuODEsMTYuNDFDMTQuMTcsMTYuNzIgMTQuNSwxNy4zMyAxNC41LDE4LjI2QzE0LjUsMTkuNiAxNC41LDIwLjY4IDE0LjUsMjFDMTQuNSwyMS4yNyAxNC42NiwyMS41OSAxNS4xNywyMS41QzE5LjE0LDIwLjE2IDIyLDE2LjQyIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaXCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICAgICAgVUkuaW5pdE1haW5CdXR0b25zKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXRNYWluQnV0dG9ucygpIHtcbiAgICAgICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG8tZG8nKTtcbiAgICAgICAgY29uc3QgdG9nZ2xlTW9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RlLXRvZycpO1xuXG4gICAgICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5hZGRUYXNrKTtcbiAgICAgICAgdG9nZ2xlTW9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLm1vZGUpXG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZVByb2plY3QoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtY29udGFpbmVyJykuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgc3RhdGljIG9wZW5Qcm9qZWN0KFRhYikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS5pbm5lckhUTUwgPSBUYWIuaWQ7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKS5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICBzdGF0aWMgbW9kZSgpIHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgbmV3VGhlbWUgPSByb290LmNsYXNzTmFtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJztcbiAgICAgICAgcm9vdC5jbGFzc05hbWUgPSBuZXdUaGVtZTtcblxuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGUtdG9nJylcbiAgICAgICAgaWYgKG5ld1RoZW1lID09PSAnZGFyaycpIHtcbiAgICAgICAgICAgIGljb24uaW5uZXJIVE1MID0gJzxzdmcgY2xhc3M9XCJtb2RlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+bW9vbi1mdWxsPC90aXRsZT48cGF0aCBkPVwiTTEyIDJBMTAgMTAgMCAxIDEgMiAxMkExMCAxMCAwIDAgMSAxMiAyWlwiIC8+PC9zdmc+J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWNvbi5pbm5lckhUTUwgPSAnPHN2ZyBjbGFzcz1cIm1vZGVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT53aGl0ZS1iYWxhbmNlLXN1bm55PC90aXRsZT48cGF0aCBkPVwiTTMuNTUgMTkuMDlMNC45NiAyMC41TDYuNzYgMTguNzFMNS4zNCAxNy4yOU0xMiA2QzguNjkgNiA2IDguNjkgNiAxMlM4LjY5IDE4IDEyIDE4IDE4IDE1LjMxIDE4IDEyQzE4IDguNjggMTUuMzEgNiAxMiA2TTIwIDEzSDIzVjExSDIwTTE3LjI0IDE4LjcxTDE5LjA0IDIwLjVMMjAuNDUgMTkuMDlMMTguNjYgMTcuMjlNMjAuNDUgNUwxOS4wNCAzLjZMMTcuMjQgNS4zOUwxOC42NiA2LjgxTTEzIDFIMTFWNEgxM002Ljc2IDUuMzlMNC45NiAzLjZMMy41NSA1TDUuMzQgNi44MUw2Ljc2IDUuMzlNMSAxM0g0VjExSDFNMTMgMjBIMTFWMjNIMTNcIiAvPjwvc3ZnPic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkVGFzaygpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgdGFzay5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgIDx0aXRsZT5jaGVja2JveC1ibGFuay1vdXRsaW5lPC90aXRsZT5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTksM0g1QzMuODksMyAzLDMuODkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVY1QzIxLDMuODkgMjAuMSwzIDE5LDNNMTksNVYxOUg1VjVIMTlaXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxoMyBjbGFzcz1cImluZC10YXNrXCI+TmV3IFRhc2s8L2gzPmA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKS5hcHBlbmRDaGlsZCh0YXNrKTtcblxuICAgICAgICBVSS5uYW1lVGFzayh0YXNrKVxuICAgIH1cblxuICAgIHN0YXRpYyBuYW1lVGFzayh0YXNrKSB7XG4gICAgICAgIGNvbnN0IHRleHRib3ggPSB0YXNrLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRleHRib3gpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXRGaWVsZC50eXBlID0gJ3RleHQnO1xuICAgICAgICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoJ25hbWUtdGFzaycpO1xuICAgICAgICBpZiAodGV4dGJveC5pbm5lckhUTUwgIT09ICdOZXcgVGFzaycpIHtcbiAgICAgICAgICAgIGlucHV0RmllbGQudmFsdWUgPSB0ZXh0Ym94LmlubmVySFRNTDtcbiAgICAgICAgfTtcblxuICAgICAgICB0ZXh0Ym94LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGlucHV0RmllbGQsIHRleHRib3gpO1xuXG4gICAgICAgIGlucHV0RmllbGQuZm9jdXMoKTtcblxuICAgICAgICBpbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dEZpZWxkLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGlucHV0RmllbGQudmFsdWUgPSAnTmV3IFRhc2snO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgdGV4dGJveC5pbm5lckhUTUwgPSBpbnB1dEZpZWxkLnZhbHVlO1xuICAgICAgICB0YXNrLnJlcGxhY2VDaGlsZCh0ZXh0Ym94LCBpbnB1dEZpZWxkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgVUkuaW5pdFRhc2soKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5pdFRhc2soKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5kLXRhc2snKVtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5kLXRhc2snKS5sZW5ndGggLSAxXTtcbiAgICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLm5hbWVUYXNrKHRhc2spKVxuICAgIH1cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL1VJLmpzJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkubG9hZEhvbWUpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=