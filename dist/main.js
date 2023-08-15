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
    transition: all 0.15s;
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

.new-project {
    grid-template-columns: 25px 1fr 20px;
    padding-right: 0.2rem;
}



`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n@font-face {\n    font-family: \"San Francisco\";\n    font-weight: 400;\n    src: url(\"https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff\");\n  }\n\n:root {\n    --aside-col: #f5f5f5;\n    --ol-col: #e8e8e8;\n    --main-col: #FFFFFF;\n    --side-text-col: #3B3E41;\n    --side-sec-text-col: #606468;\n    --sel-col: #DBDEE1;\n    --main-text-col: #0B0D11;\n}\n\n:root.light {\n    --aside-col: #f5f5f5;\n    --ol-col: #e8e8e8;\n    --main-col: #FFFFFF;\n    --side-text-col: #3B3E41;\n    --side-sec-text-col: #606468;\n    --sel-col: #DBDEE1;\n    --main-text-col: #0B0D11;\n}\n\n@media (prefers-color-scheme: dark) {\n    :root.dark {\n        --aside-col: #1c1c1c;\n        --ol-col: #262626;\n        --main-col: #1c1c1c;\n        --side-text-col: #d1d1d1;\n        --side-sec-text-col: #a8a8a8;\n        --sel-col: #2e2e2e;\n        --main-text-col: #f5f5f5;\n    }\n}\n\nbody {\n    font-family: \"San Francisco\";\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 45px 4fr 33fr;\n    transition: all 0.15s;\n}\n\n/* \nSIDEBAR\n*/\naside {\n    grid-column: 1 / 3;\n    background-color: var(--aside-col);\n    display: grid;\n    grid-template-rows: 4rem 1fr 3rem;\n    justify-items: center;\n    border-right: 1px solid var(--ol-col);\n    overflow-x: hidden;\n    transition: all 0.15s;\n}\n\n.aside-closed {\n    grid-column: 1 / 2;\n}\n\n.aside-upper-cont {\n    width: 100%;\n    display: grid;\n    justify-items: center;\n    border-bottom: 1px solid var(--ol-col);\n    transition: all 0.15s;\n    margin-bottom: 1rem;\n}\n\n.aside-upper-inner {\n    width: 80%;\n    grid-row: 1 / 2;\n    display: grid;\n    grid-template-columns: 35px 1fr 35px;\n    align-content: center;\n}\n\n.menu-tog {\n    cursor: pointer;\n    grid-column: 3 / 4;\n}\n\n.toggler {\n    fill: var(--side-text-col);\n}\n\n.menu-tog-closed {\n    grid-column: 1 / 2;\n}\n\n.aside-inner {\n    width: 90%;\n    grid-row: 2 / 3;\n    overflow-y: scroll;\n    display: grid;\n    grid-template-rows: auto;\n    gap: 2rem;\n    overflow-x: hidden;\n}\n\n.aside-top {\n    display: grid;\n    grid-template-rows: min-content min-content min-content;\n    gap: 3rem;\n}\n\n.side-tab {\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 25px 1fr;\n    align-items: center;\n    gap: 0.6rem;\n    padding-left: 0.4rem;\n}\n\n.side-tab:hover {\n    background-color: var(--sel-col);\n    border-radius: 0.3rem;\n}\n\n.side-tab-sel {\n    background-color: var(--sel-col);\n    border-radius: 0.3rem;\n    transition: all 0.15s;\n}\n\n.side-tab svg {\n    padding-top: 0.2rem;\n    cursor: pointer;\n    fill: var(--side-text-col)\n}\n\n.side-tab h1 {\n    color: var(--side-text-col);\n    font-size: 1.2rem;\n    cursor: pointer;\n    padding-bottom: 0.2rem;\n    user-select: none;\n}\n\n.time-container {\n    display: grid;\n    grid-template-rows: min-content;\n    gap: 1rem;\n}\n\n.aside-bottom {\n    width: 100%;\n    grid-row: 3 / 4;\n    display: grid;\n    border-top: 1px solid var(--ol-col);\n    transition: all 0.15s;\n    justify-items: center;\n    align-items: center;\n}\n\n.aside-bottom-inner {\n    width: 90%;\n}\n\n.projects-container {\n    display: grid;\n    grid-template-rows: min-content;\n    gap: 0.5rem;\n}\n\n.new-project, .new-project svg {\n    color: var(--side-sec-text-col);\n    fill: var(--side-sec-text-col);\n}\n\n.new-project {\n    cursor: text;\n}\n\n.name-proj {\n    width: 80%;\n    padding-left: 0.2rem;\n    font-size: 1rem;\n    color: var(--side-sec-text-col);\n    background-color: transparent;\n    border: none;\n}\n\n.name-proj:focus {\n    outline: none\n}\n\nmain {\n    display: grid;\n    align-content: center;\n    grid-template-rows: 3rem 1fr 3rem;\n    background-color: var(--main-col);\n    transition: all 0.15s;\n}\n\n.main-upper {\n    border-bottom: 1px solid var(--ol-col);\n    transition: all 0.15s;\n    display: grid;\n    grid-template-columns: 30px;\n    align-items: center;\n    justify-content: end;\n    padding-right: 10rem;\n    transition: all 0.15s;\n}\n\n.main-upper svg {\n    fill: var(--side-text-col);\n    cursor: pointer;\n    transition: all 0.15s;\n}\n\n.main-inner {\n    width: 60%;\n    justify-self: center;\n    grid-row: 2 / 3;\n}\n\n.add-to-do {\n    display: grid;\n    grid-template-columns: 30px auto;\n    align-items: center;\n    gap: 0.5rem;\n    margin-top: 2rem;\n    cursor: pointer;\n    user-select: none;\n    color: var(--main-text-col);\n}\n\n.add-to-do svg {\n    fill: var(--main-text-col);\n}\n\n.add-to-do-container:hover {\n    background-color: var(--sel-col);\n    border-radius: 0.3rem;\n}\n\n.task {\n    display: grid;\n    grid-template-columns: 22px auto;\n    align-items: center;\n    gap: 0.5rem;\n    margin-top: 1.5rem;\n    cursor: pointer;\n    user-select: none;\n    color: var(--main-text-col);\n    padding: 0.2rem 0;\n}\n\n.task svg {\n    fill: var(--main-text-col);\n}\n\n.task:hover {\n    background-color: var(--sel-col);\n    border-radius: 0.3rem;\n}\n\n.name-task {\n    width: 80%;\n    padding-left: 0.2rem;\n    font-size: 1rem;\n    color: var(--side-sec-text-col);\n    background-color: transparent;\n    border: none;\n}\n\n.name-task:focus {\n    outline: none;\n}\n\n.ind-task {\n    color: var(--side-sec-text-col);\n    cursor: text;\n}\n\n.title {\n    color: var(--main-text-col);\n    font-size: 2.5rem;\n    user-select: none;\n}\n\n.main-bottom {\n    grid-row: 3 / 4;\n    display: grid;\n    grid-template-columns: 6fr 1fr;\n    align-items: center;\n    justify-items: center;\n    border-top: 1px solid var(--ol-col);\n    transition: all 0.15s;\n}\n\n.footer {\n    display: grid;\n    grid-template-columns: auto 30px;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    font-size: 1rem;\n    color: var(--side-text-col);\n    user-select: none;\n}\n\n.footer svg {\n    fill: var(--side-text-col);\n}\n\n.new-project {\n    grid-template-columns: 25px 1fr 20px;\n    padding-right: 0.2rem;\n}\n\n\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");




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
        UI.removeTab();
        UI.openProject(e);
    }


    static removeTabStyle() {
        const tabs = document.querySelectorAll('.side-tab');
        tabs.forEach((tab) => tab.classList.remove('side-tab-sel'));
    }


    static tabStyle(e) {
        e.classList.add('side-tab-sel');
    }

    
    static delProj(proj) {
        proj.parentNode.children[1].style.textDecoration = 'line-through';
        const name = proj.parentNode.id;
        setTimeout(() => { proj.parentNode.remove() }, 250); 

        _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProject(name); //Modules
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
            <div class="del">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>delete-circle</title>
                    <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z" />
                </svg>
            </div>
        </div>`;
    document.querySelector('.projects-container').appendChild(proj);

    _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]('New Project')); //Modules

    UI.initProject();
    UI.openProject(proj.firstElementChild); 
    }


    static initProject() {
        const project = document.querySelectorAll('.new-project')[document.querySelectorAll('.new-project').length - 1];
        project.addEventListener('click', () => UI.tab(project));

        project.classList.add('side-tab-sel');

        const text = document.querySelectorAll('.project-name')[document.querySelectorAll('.project-name').length - 1];
        text.addEventListener('click', () => UI.renameProject(text));

        const del = document.querySelectorAll('.del')[document.querySelectorAll('.del').length - 1];
        del.addEventListener('click', () => UI.delProj(del));
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
          
            inputField.addEventListener('blur', function() {
                if (inputField.value === '') {
                    inputField.value = 'New Project';
                    inputField.parentNode.id = 'New Project'
                } else {
                    inputField.parentNode.id = inputField.value;
                }

            _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].renameProject(input.innerHTML, inputField.value); //Modules 

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


    static removeTab() {
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
        const taskDOM = document.createElement('div');
        taskDOM.classList.add('task');
        taskDOM.innerHTML = `
        <div class="check-box unchecked">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>checkbox-blank-outline</title>
                <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" />
            </svg>
        </div>
        <h3 class="ind-task">New Task</h3>`;
        document.querySelector('.tasks-container').appendChild(taskDOM);

        const projName = document.querySelector('.title').innerHTML;
        _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(new Task('New Task'), projName); //Modules

        UI.nameTask(taskDOM, todo);
    }


    static nameTask(taskDOM, todo) {
        const textbox = taskDOM.lastElementChild;
        
        if (!textbox.classList.contains('name-task')) {
            UI.initTask(taskDOM);

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

                const projName = document.querySelector('.title').innerHTML;
                _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].renameTask(textbox.innerHTML, inputField.value, projName); // Modules

                textbox.innerHTML = inputField.value;
                taskDOM.id = inputField.value;
                todo.setName(inputField.value);
                taskDOM.replaceChild(textbox, inputField);
            });
        }
    }


    static initTask(task) {
        task.lastElementChild.addEventListener('click', () => UI.nameTask(task));
        task.firstElementChild.addEventListener('click', () => UI.checkTask(task))
    }


    static checkTask(task) {
        const name = task.id;

        const checked = document.createElement('div');
        checked.classList.add('checked')
        checked.classList.add('check-box')
        checked.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-intermediate</title><path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M17,17H7V7H17V17Z" /></svg>'

        task.firstElementChild.replaceChild(checked, task.firstElementChild.firstElementChild)

        task.lastElementChild.style.textDecoration = 'line-through';

        setTimeout(() => { task.remove() }, 250)

        const projName = document.querySelector('.title').innerHTML;
        _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].deleteTask(name, projName);
    }

}

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");



class List {
    constructor() {
        this.projects = [];
        this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Inbox'));
        this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Today'))
        this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Week'))
        this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Month'))
    }

    setProjects(projects) {
        this.projects = projects;
    }

    getProjects() {
        return this.projects;
    }


    addProject(newProject) {
        this.projects.push(newProject);
    }

    deleteProject(targetName) {
        const projectToDelete = this.projects.find((project) => project.getName() == targetName);

        this.projects.splice(this.projects.indexOf(projectToDelete), 1);
    }

    renameProject(name, newName) {
        const proj = this.projects.find((project) => project.getName() == name);

        proj.setName(newName);
    }


    addTask(task, projName) {
        const proj = this.projects.find((project) => project.getName() == projName);

        proj.addTask(task)
    }

    renameTask(name, newName, projName) {
        const proj = this.projects.find((project) => project.getName() == projName);

        proj.renameTask(name, newName)
    }

    deleteTask(task, projName) {
        const proj = this.projects.find((project) => project.getName() == projName);

        proj.deleteTask(task)
    }
}

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }
    
    getTasks() {
        return this.tasks;
    }

    addTask(task) {
        this.tasks.push(task)
    }

    renameTask(name, newName) {
        const TODO = this.tasks.find((task) => task.getName() == name);
        TODO.setName(newName);
    }

    deleteTask(name) {
        const TODO = this.tasks.find((task) => task.getName() == name);

        this.tasks.splice(this.tasks.indexOf(TODO), 1);
    }


}

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ "./src/modules/list.js");




class Storage {
    static saveTodoList(data) {
        localStorage.setItem('todoList', JSON.stringify(data))
    }

    static getTodoList() {
        const todoList = Object.assign(new _list_js__WEBPACK_IMPORTED_MODULE_2__["default"](), JSON.parse(localStorage.getItem('todoList')))

        todoList.setProjects(todoList.getProjects().map((project) => Object.assign(new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"](), project)))

        todoList.getProjects().forEach((project) => project.setTasks(project.getTasks().map((task) => Object.assign(new Task(), task))))

        return todoList
    }


    static addProject(project) {
        const todoList = Storage.getTodoList();
        todoList.addProject(project);
        Storage.saveTodoList(todoList);
    }

    static renameProject(name, newName) {
        const todoList = Storage.getTodoList();
        todoList.renameProject(name, newName);
        Storage.saveTodoList(todoList);
    }

    static deleteProject(name) {
        const todoList = Storage.getTodoList();
        todoList.deleteProject(name);
        Storage.saveTodoList(todoList);
    }


    static addTask(task, projName) {
        const todoList = Storage.getTodoList();
        todoList.addTask(task, projName);
        Storage.saveTodoList(todoList);
    }

    static renameTask(name, newName, projName) {
        const todoList = Storage.getTodoList();
        todoList.renameTask(name, newName, projName);
        Storage.saveTodoList(todoList);
    }

    static deleteTask(task, projName) {
        const todoList = Storage.getTodoList();
        todoList.deleteTask(task, projName);
        Storage.saveTodoList(todoList);
    }
}

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TODO)
/* harmony export */ });
class TODO {

    constructor(name) {
        this.name = name;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setDate(dueDate) {
        this.dueDate = dueDate;
    }
    
    getDate() {
        return this.dueDate;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUss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Q0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ1k7O0FBRWhDLDhDQUE4QyxzREFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9saXN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJTYW4gRnJhbmNpc2NvXCI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vYXBwbGVzb2NpYWwuczMuYW1hem9uYXdzLmNvbS9hc3NldHMvc3R5bGVzL2ZvbnRzL3NhbmZyYW5jaXNjby9zYW5mcmFuY2lzY29kaXNwbGF5LXJlZ3VsYXItd2ViZm9udC53b2ZmXCIpO1xuICB9XG5cbjpyb290IHtcbiAgICAtLWFzaWRlLWNvbDogI2Y1ZjVmNTtcbiAgICAtLW9sLWNvbDogI2U4ZThlODtcbiAgICAtLW1haW4tY29sOiAjRkZGRkZGO1xuICAgIC0tc2lkZS10ZXh0LWNvbDogIzNCM0U0MTtcbiAgICAtLXNpZGUtc2VjLXRleHQtY29sOiAjNjA2NDY4O1xuICAgIC0tc2VsLWNvbDogI0RCREVFMTtcbiAgICAtLW1haW4tdGV4dC1jb2w6ICMwQjBEMTE7XG59XG5cbjpyb290LmxpZ2h0IHtcbiAgICAtLWFzaWRlLWNvbDogI2Y1ZjVmNTtcbiAgICAtLW9sLWNvbDogI2U4ZThlODtcbiAgICAtLW1haW4tY29sOiAjRkZGRkZGO1xuICAgIC0tc2lkZS10ZXh0LWNvbDogIzNCM0U0MTtcbiAgICAtLXNpZGUtc2VjLXRleHQtY29sOiAjNjA2NDY4O1xuICAgIC0tc2VsLWNvbDogI0RCREVFMTtcbiAgICAtLW1haW4tdGV4dC1jb2w6ICMwQjBEMTE7XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICA6cm9vdC5kYXJrIHtcbiAgICAgICAgLS1hc2lkZS1jb2w6ICMxYzFjMWM7XG4gICAgICAgIC0tb2wtY29sOiAjMjYyNjI2O1xuICAgICAgICAtLW1haW4tY29sOiAjMWMxYzFjO1xuICAgICAgICAtLXNpZGUtdGV4dC1jb2w6ICNkMWQxZDE7XG4gICAgICAgIC0tc2lkZS1zZWMtdGV4dC1jb2w6ICNhOGE4YTg7XG4gICAgICAgIC0tc2VsLWNvbDogIzJlMmUyZTtcbiAgICAgICAgLS1tYWluLXRleHQtY29sOiAjZjVmNWY1O1xuICAgIH1cbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFwiU2FuIEZyYW5jaXNjb1wiO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0NXB4IDRmciAzM2ZyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbn1cblxuLyogXG5TSURFQkFSXG4qL1xuYXNpZGUge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hc2lkZS1jb2wpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDFmciAzcmVtO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1vbC1jb2wpO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG5cbi5hc2lkZS1jbG9zZWQge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbn1cblxuLmFzaWRlLXVwcGVyLWNvbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1vbC1jb2wpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uYXNpZGUtdXBwZXItaW5uZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDFmciAzNXB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1lbnUtdG9nIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xufVxuXG4udG9nZ2xlciB7XG4gICAgZmlsbDogdmFyKC0tc2lkZS10ZXh0LWNvbCk7XG59XG5cbi5tZW51LXRvZy1jbG9zZWQge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbn1cblxuLmFzaWRlLWlubmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgZ2FwOiAycmVtO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmFzaWRlLXRvcCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIGdhcDogM3JlbTtcbn1cblxuLnNpZGUtdGFiIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHggMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjZyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwLjRyZW07XG59XG5cbi5zaWRlLXRhYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsLWNvbCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xufVxuXG4uc2lkZS10YWItc2VsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWwtY29sKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuXG4uc2lkZS10YWIgc3ZnIHtcbiAgICBwYWRkaW5nLXRvcDogMC4ycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmaWxsOiB2YXIoLS1zaWRlLXRleHQtY29sKVxufVxuXG4uc2lkZS10YWIgaDEge1xuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXRleHQtY29sKTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnRpbWUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uYXNpZGUtYm90dG9tIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBncmlkLXJvdzogMyAvIDQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tb2wtY29sKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hc2lkZS1ib3R0b20taW5uZXIge1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuLm5ldy1wcm9qZWN0LCAubmV3LXByb2plY3Qgc3ZnIHtcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1zZWMtdGV4dC1jb2wpO1xuICAgIGZpbGw6IHZhcigtLXNpZGUtc2VjLXRleHQtY29sKTtcbn1cblxuLm5ldy1wcm9qZWN0IHtcbiAgICBjdXJzb3I6IHRleHQ7XG59XG5cbi5uYW1lLXByb2oge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXNlYy10ZXh0LWNvbCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ubmFtZS1wcm9qOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lXG59XG5cbm1haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAxZnIgM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuXG4ubWFpbi11cHBlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW9sLWNvbCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgcGFkZGluZy1yaWdodDogMTByZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuXG4ubWFpbi11cHBlciBzdmcge1xuICAgIGZpbGw6IHZhcigtLXNpZGUtdGV4dC1jb2wpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG5cbi5tYWluLWlubmVyIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbn1cblxuLmFkZC10by1kbyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggYXV0bztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sKTtcbn1cblxuLmFkZC10by1kbyBzdmcge1xuICAgIGZpbGw6IHZhcigtLW1haW4tdGV4dC1jb2wpO1xufVxuXG4uYWRkLXRvLWRvLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsLWNvbCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xufVxuXG4udGFzayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIycHggYXV0bztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2wpO1xuICAgIHBhZGRpbmc6IDAuMnJlbSAwO1xufVxuXG4udGFzayBzdmcge1xuICAgIGZpbGw6IHZhcigtLW1haW4tdGV4dC1jb2wpO1xufVxuXG4udGFzazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsLWNvbCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xufVxuXG4ubmFtZS10YXNrIHtcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1zZWMtdGV4dC1jb2wpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLm5hbWUtdGFzazpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmluZC10YXNrIHtcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1zZWMtdGV4dC1jb2wpO1xuICAgIGN1cnNvcjogdGV4dDtcbn1cblxuLnRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbCk7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5tYWluLWJvdHRvbSB7XG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1vbC1jb2wpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbn1cblxuLmZvb3RlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMzBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHZhcigtLXNpZGUtdGV4dC1jb2wpO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZm9vdGVyIHN2ZyB7XG4gICAgZmlsbDogdmFyKC0tc2lkZS10ZXh0LWNvbCk7XG59XG5cbi5uZXctcHJvamVjdCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmciAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMnJlbTtcbn1cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wi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O0FBQzlCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTYW4gRnJhbmNpc2NvXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoXFxcImh0dHBzOi8vYXBwbGVzb2NpYWwuczMuYW1hem9uYXdzLmNvbS9hc3NldHMvc3R5bGVzL2ZvbnRzL3NhbmZyYW5jaXNjby9zYW5mcmFuY2lzY29kaXNwbGF5LXJlZ3VsYXItd2ViZm9udC53b2ZmXFxcIik7XFxuICB9XFxuXFxuOnJvb3Qge1xcbiAgICAtLWFzaWRlLWNvbDogI2Y1ZjVmNTtcXG4gICAgLS1vbC1jb2w6ICNlOGU4ZTg7XFxuICAgIC0tbWFpbi1jb2w6ICNGRkZGRkY7XFxuICAgIC0tc2lkZS10ZXh0LWNvbDogIzNCM0U0MTtcXG4gICAgLS1zaWRlLXNlYy10ZXh0LWNvbDogIzYwNjQ2ODtcXG4gICAgLS1zZWwtY29sOiAjREJERUUxO1xcbiAgICAtLW1haW4tdGV4dC1jb2w6ICMwQjBEMTE7XFxufVxcblxcbjpyb290LmxpZ2h0IHtcXG4gICAgLS1hc2lkZS1jb2w6ICNmNWY1ZjU7XFxuICAgIC0tb2wtY29sOiAjZThlOGU4O1xcbiAgICAtLW1haW4tY29sOiAjRkZGRkZGO1xcbiAgICAtLXNpZGUtdGV4dC1jb2w6ICMzQjNFNDE7XFxuICAgIC0tc2lkZS1zZWMtdGV4dC1jb2w6ICM2MDY0Njg7XFxuICAgIC0tc2VsLWNvbDogI0RCREVFMTtcXG4gICAgLS1tYWluLXRleHQtY29sOiAjMEIwRDExO1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICAgIDpyb290LmRhcmsge1xcbiAgICAgICAgLS1hc2lkZS1jb2w6ICMxYzFjMWM7XFxuICAgICAgICAtLW9sLWNvbDogIzI2MjYyNjtcXG4gICAgICAgIC0tbWFpbi1jb2w6ICMxYzFjMWM7XFxuICAgICAgICAtLXNpZGUtdGV4dC1jb2w6ICNkMWQxZDE7XFxuICAgICAgICAtLXNpZGUtc2VjLXRleHQtY29sOiAjYThhOGE4O1xcbiAgICAgICAgLS1zZWwtY29sOiAjMmUyZTJlO1xcbiAgICAgICAgLS1tYWluLXRleHQtY29sOiAjZjVmNWY1O1xcbiAgICB9XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogXFxcIlNhbiBGcmFuY2lzY29cXFwiO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDVweCA0ZnIgMzNmcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcbn1cXG5cXG4vKiBcXG5TSURFQkFSXFxuKi9cXG5hc2lkZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXNpZGUtY29sKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDFmciAzcmVtO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLW9sLWNvbCk7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcbn1cXG5cXG4uYXNpZGUtY2xvc2VkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4uYXNpZGUtdXBwZXItY29udCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1vbC1jb2wpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5hc2lkZS11cHBlci1pbm5lciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDFmciAzNXB4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tZW51LXRvZyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbn1cXG5cXG4udG9nZ2xlciB7XFxuICAgIGZpbGw6IHZhcigtLXNpZGUtdGV4dC1jb2wpO1xcbn1cXG5cXG4ubWVudS10b2ctY2xvc2VkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4uYXNpZGUtaW5uZXIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmFzaWRlLXRvcCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGdhcDogM3JlbTtcXG59XFxuXFxuLnNpZGUtdGFiIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHggMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNnJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjRyZW07XFxufVxcblxcbi5zaWRlLXRhYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbC1jb2wpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi5zaWRlLXRhYi1zZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWwtY29sKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XFxufVxcblxcbi5zaWRlLXRhYiBzdmcge1xcbiAgICBwYWRkaW5nLXRvcDogMC4ycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbGw6IHZhcigtLXNpZGUtdGV4dC1jb2wpXFxufVxcblxcbi5zaWRlLXRhYiBoMSB7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXRleHQtY29sKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50aW1lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmFzaWRlLWJvdHRvbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1vbC1jb2wpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFzaWRlLWJvdHRvbS1pbm5lciB7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LCAubmV3LXByb2plY3Qgc3ZnIHtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtc2VjLXRleHQtY29sKTtcXG4gICAgZmlsbDogdmFyKC0tc2lkZS1zZWMtdGV4dC1jb2wpO1xcbn1cXG5cXG4ubmV3LXByb2plY3Qge1xcbiAgICBjdXJzb3I6IHRleHQ7XFxufVxcblxcbi5uYW1lLXByb2oge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1zZWMtdGV4dC1jb2wpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubmFtZS1wcm9qOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZVxcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gMWZyIDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcbn1cXG5cXG4ubWFpbi11cHBlciB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1vbC1jb2wpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XFxufVxcblxcbi5tYWluLXVwcGVyIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLXNpZGUtdGV4dC1jb2wpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXG59XFxuXFxuLm1haW4taW5uZXIge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uYWRkLXRvLWRvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbCk7XFxufVxcblxcbi5hZGQtdG8tZG8gc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tbWFpbi10ZXh0LWNvbCk7XFxufVxcblxcbi5hZGQtdG8tZG8tY29udGFpbmVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsLWNvbCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIycHggYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2wpO1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMDtcXG59XFxuXFxuLnRhc2sgc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tbWFpbi10ZXh0LWNvbCk7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsLWNvbCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLm5hbWUtdGFzayB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXNlYy10ZXh0LWNvbCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5uYW1lLXRhc2s6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uaW5kLXRhc2sge1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1zZWMtdGV4dC1jb2wpO1xcbiAgICBjdXJzb3I6IHRleHQ7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sKTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWFpbi1ib3R0b20ge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tb2wtY29sKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDMwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtdGV4dC1jb2wpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmZvb3RlciBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1zaWRlLXRleHQtY29sKTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmciAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07XFxufVxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVE9ETyBmcm9tICcuL3RvZG8uanMnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcblxuXG4gICAgc3RhdGljIGxvYWRIb21lKCkge1xuICAgICAgICBVSS5zaWRlYmFyKCk7XG4gICAgICAgIFVJLm1haW4oKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBzaWRlYmFyKCkge1xuICAgICAgICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG4gICAgICAgIGFzaWRlLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFzaWRlLXVwcGVyLWNvbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhc2lkZS11cHBlci1pbm5lclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWVudS10b2dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInRvZ2dsZXJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPm1lbnU8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zLDZIMjFWOEgzVjZNMywxMUgyMVYxM0gzVjExTTMsMTZIMjFWMThIM1YxNlpcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhc2lkZS1pbm5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFzaWRlLXRvcFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLXRhYiBzaWRlLXRhYi1zZWxcIiBpZD1cIkluYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5pbmJveDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOSwxNUgxNUEzLDMgMCAwLDEgMTIsMThBMywzIDAgMCwxIDksMTVINVY1SDE5TTE5LDNINUMzLjg5LDMgMywzLjkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVY1QTIsMiAwIDAsMCAxOSwzWlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aDE+SW5ib3g8L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS10YWJcIiBpZD1cIlRvZGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5zdGFyLW91dGxpbmU8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLDE1LjM5TDguMjQsMTcuNjZMOS4yMywxMy4zOEw1LjkxLDEwLjVMMTAuMjksMTAuMTNMMTIsNi4wOUwxMy43MSwxMC4xM0wxOC4wOSwxMC41TDE0Ljc3LDEzLjM4TDE1Ljc2LDE3LjY2TTIyLDkuMjRMMTQuODEsOC42M0wxMiwyTDkuMTksOC42M0wyLDkuMjRMNy40NSwxMy45N0w1LjgyLDIxTDEyLDE3LjI3TDE4LjE4LDIxTDE2LjU0LDEzLjk3TDIyLDkuMjRaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Ub2RheTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS10YWJcIiBpZD1cIldlZWtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPmNhbGVuZGFyLXJhbmdlPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05LDEwSDdWMTJIOVYxME0xMywxMEgxMVYxMkgxM1YxME0xNywxMEgxNVYxMkgxN1YxME0xOSwzSDE4VjFIMTZWM0g4VjFINlYzSDVDMy44OSwzIDMsMy45IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWNUEyLDIgMCAwLDAgMTksM00xOSwxOUg1VjhIMTlWMTlaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5XZWVrPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLXRhYlwiIGlkPVwiTW9udGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPmNhbGVuZGFyLW1vbnRoPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05LDEwVjEySDdWMTBIOU0xMywxMFYxMkgxMVYxMEgxM00xNywxMFYxMkgxNVYxMEgxN00xOSwzQTIsMiAwIDAsMSAyMSw1VjE5QTIsMiAwIDAsMSAxOSwyMUg1QzMuODksMjEgMywyMC4xIDMsMTlWNUEyLDIgMCAwLDEgNSwzSDZWMUg4VjNIMTZWMUgxOFYzSDE5TTE5LDE5VjhINVYxOUgxOU05LDE0VjE2SDdWMTRIOU0xMywxNFYxNkgxMVYxNEgxM00xNywxNFYxNkgxNVYxNEgxN1pcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk1vbnRoPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLXRhYlwiIGlkPVwiQW55dGltZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+bm90ZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQsMTBWNC41TDE5LjUsMTBNNSwzQzMuODksMyAzLDMuOSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjlMMTUsM0g1WlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+QW55dGltZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtdGFiXCIgaWQ9XCJQcm9qZWN0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+ZGF0YWJhc2U8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLDNDNy41OCwzIDQsNC43OSA0LDdDNCw5LjIxIDcuNTgsMTEgMTIsMTFDMTYuNDIsMTEgMjAsOS4yMSAyMCw3QzIwLDQuNzkgMTYuNDIsMyAxMiwzTTQsOVYxMkM0LDE0LjIxIDcuNTgsMTYgMTIsMTZDMTYuNDIsMTYgMjAsMTQuMjEgMjAsMTJWOUMyMCwxMS4yMSAxNi40MiwxMyAxMiwxM0M3LjU4LDEzIDQsMTEuMjEgNCw5TTQsMTRWMTdDNCwxOS4yMSA3LjU4LDIxIDEyLDIxQzE2LjQyLDIxIDIwLDE5LjIxIDIwLDE3VjE0QzIwLDE2LjIxIDE2LjQyLDE4IDEyLDE4QzcuNTgsMTggNCwxNi4yMSA0LDE0WlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+UHJvamVjdHM8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFzaWRlLWJvdHRvbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFzaWRlLWJvdHRvbS1pbm5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLXRhYiBhZGQtcHJvamVjdFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+cGx1czwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOSwxM0gxM1YxOUgxMVYxM0g1VjExSDExVjVIMTNWMTFIMTlWMTNaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkFkZCBQcm9qZWN0PC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhc2lkZSk7XG4gICAgVUkuaW5pdEJ1dHRvbnMoKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBpbml0QnV0dG9ucygpIHtcbiAgICAgICAgY29uc3QgaGFtTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGVyJyk7XG4gICAgICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZS10YWInKTtcbiAgICAgICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG5cbiAgICAgICAgaGFtTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLnRvZ2dsZU1lbnUpO1xuICAgICAgICB0YWJzLmZvckVhY2goKHRhYikgPT4gdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkudGFiKHRhYikpKTtcbiAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuYWRkUHJvamVjdCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgdG9nZ2xlTWVudSgpIHtcbiAgICAgICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xuICAgICAgICBjb25zdCBhc2lkZVNWRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXRvZycpO1xuICAgICAgICBpZiAoYXNpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS1jbG9zZWQnKSkge1xuICAgICAgICAgICAgYXNpZGUuY2xhc3NMaXN0LnJlbW92ZSgnYXNpZGUtY2xvc2VkJyk7XG4gICAgICAgICAgICBhc2lkZVNWRy5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXRvZy1jbG9zZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFzaWRlLmNsYXNzTGlzdC5hZGQoJ2FzaWRlLWNsb3NlZCcpO1xuICAgICAgICAgICAgYXNpZGVTVkcuY2xhc3NMaXN0LmFkZCgnbWVudS10b2ctY2xvc2VkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHN0YXRpYyB0YWIoZSkge1xuICAgICAgICBVSS5yZW1vdmVUYWJTdHlsZSgpO1xuICAgICAgICBVSS50YWJTdHlsZShlKTtcbiAgICAgICAgVUkucmVtb3ZlVGFiKCk7XG4gICAgICAgIFVJLm9wZW5Qcm9qZWN0KGUpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJlbW92ZVRhYlN0eWxlKCkge1xuICAgICAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGUtdGFiJyk7XG4gICAgICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZS10YWItc2VsJykpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHRhYlN0eWxlKGUpIHtcbiAgICAgICAgZS5jbGFzc0xpc3QuYWRkKCdzaWRlLXRhYi1zZWwnKTtcbiAgICB9XG5cbiAgICBcbiAgICBzdGF0aWMgZGVsUHJvaihwcm9qKSB7XG4gICAgICAgIHByb2oucGFyZW50Tm9kZS5jaGlsZHJlblsxXS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgICBjb25zdCBuYW1lID0gcHJvai5wYXJlbnROb2RlLmlkO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgcHJvai5wYXJlbnROb2RlLnJlbW92ZSgpIH0sIDI1MCk7IFxuXG4gICAgICAgIFN0b3JhZ2UuZGVsZXRlUHJvamVjdChuYW1lKTsgLy9Nb2R1bGVzXG4gICAgfVxuXG5cbiAgICBzdGF0aWMgYWRkUHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qLmlkID0gJ3Byb2plY3RzQ29udCc7XG4gICAgICAgIHByb2ouaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS10YWIgbmV3LXByb2plY3RcIiBpZD1cIk5ldyBQcm9qZWN0XCI+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT50aW1lbGFwc2U8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLDIwQTgsOCAwIDAsMSA0LDEyQTgsOCAwIDAsMSAxMiw0QTgsOCAwIDAsMSAyMCwxMkE4LDggMCAwLDEgMTIsMjBNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJNMTYuMjQsNy43NkMxNS4wNyw2LjU4IDEzLjUzLDYgMTIsNlYxMkw3Ljc2LDE2LjI0QzEwLjEsMTguNTggMTMuOSwxOC41OCAxNi4yNCwxNi4yNEMxOC41OSwxMy45IDE4LjU5LDEwLjEgMTYuMjQsNy43NlpcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj5OZXcgUHJvamVjdDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5kZWxldGUtY2lyY2xlPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiwyQzE3LjUzLDIgMjIsNi40NyAyMiwxMkMyMiwxNy41MyAxNy41MywyMiAxMiwyMkM2LjQ3LDIyIDIsMTcuNTMgMiwxMkMyLDYuNDcgNi40NywyIDEyLDJNMTcsN0gxNC41TDEzLjUsNkgxMC41TDkuNSw3SDdWOUgxN1Y3TTksMThIMTVBMSwxIDAgMCwwIDE2LDE3VjEwSDhWMTdBMSwxIDAgMCwwIDksMThaXCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKS5hcHBlbmRDaGlsZChwcm9qKTtcblxuICAgIFN0b3JhZ2UuYWRkUHJvamVjdChuZXcgUHJvamVjdCgnTmV3IFByb2plY3QnKSk7IC8vTW9kdWxlc1xuXG4gICAgVUkuaW5pdFByb2plY3QoKTtcbiAgICBVSS5vcGVuUHJvamVjdChwcm9qLmZpcnN0RWxlbWVudENoaWxkKTsgXG4gICAgfVxuXG5cbiAgICBzdGF0aWMgaW5pdFByb2plY3QoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LXByb2plY3QnKVtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LXByb2plY3QnKS5sZW5ndGggLSAxXTtcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLnRhYihwcm9qZWN0KSk7XG5cbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlLXRhYi1zZWwnKTtcblxuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtbmFtZScpW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW5hbWUnKS5sZW5ndGggLSAxXTtcbiAgICAgICAgdGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLnJlbmFtZVByb2plY3QodGV4dCkpO1xuXG4gICAgICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWwnKVtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsJykubGVuZ3RoIC0gMV07XG4gICAgICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLmRlbFByb2ooZGVsKSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmVuYW1lUHJvamVjdChpbnB1dCkge1xuICAgICAgICBpZiAoaW5wdXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGUtdGFiLXNlbCcpKSB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgaW5wdXRGaWVsZC50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKCduYW1lLXByb2onKTtcbiAgICAgICAgICAgIGlmIChpbnB1dC5pbm5lckhUTUwgIT09ICdOZXcgUHJvamVjdCcpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gaW5wdXQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW5wdXQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaW5wdXRGaWVsZCwgaW5wdXQpO1xuXG4gICAgICAgICAgICBpbnB1dEZpZWxkLmZvY3VzKCk7XG4gICAgICAgICAgXG4gICAgICAgICAgICBpbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRGaWVsZC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9ICdOZXcgUHJvamVjdCc7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0RmllbGQucGFyZW50Tm9kZS5pZCA9ICdOZXcgUHJvamVjdCdcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnBhcmVudE5vZGUuaWQgPSBpbnB1dEZpZWxkLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgU3RvcmFnZS5yZW5hbWVQcm9qZWN0KGlucHV0LmlubmVySFRNTCwgaW5wdXRGaWVsZC52YWx1ZSk7IC8vTW9kdWxlcyBcblxuICAgICAgICAgICAgaW5wdXQuaW5uZXJIVE1MID0gaW5wdXRGaWVsZC52YWx1ZTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLmlubmVySFRNTCA9IGlucHV0RmllbGQudmFsdWU7XG4gICAgICAgICAgICBpbnB1dEZpZWxkLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGlucHV0LCBpbnB1dEZpZWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbWFpbigpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLXVwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kZS10b2dcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwibW9kZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT53aGl0ZS1iYWxhbmNlLXN1bm55PC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zLjU1IDE5LjA5TDQuOTYgMjAuNUw2Ljc2IDE4LjcxTDUuMzQgMTcuMjlNMTIgNkM4LjY5IDYgNiA4LjY5IDYgMTJTOC42OSAxOCAxMiAxOCAxOCAxNS4zMSAxOCAxMkMxOCA4LjY4IDE1LjMxIDYgMTIgNk0yMCAxM0gyM1YxMUgyME0xNy4yNCAxOC43MUwxOS4wNCAyMC41TDIwLjQ1IDE5LjA5TDE4LjY2IDE3LjI5TTIwLjQ1IDVMMTkuMDQgMy42TDE3LjI0IDUuMzlMMTguNjYgNi44MU0xMyAxSDExVjRIMTNNNi43NiA1LjM5TDQuOTYgMy42TDMuNTUgNUw1LjM0IDYuODFMNi43NiA1LjM5TTEgMTNINFYxMUgxTTEzIDIwSDExVjIzSDEzXCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4taW5uZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWlubmVyLXVwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5JbmJveDwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10by1kby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLXRvLWRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5wbHVzPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTksMTNIMTNWMTlIMTFWMTNINVYxMUgxMVY1SDEzVjExSDE5VjEzWlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8aDM+QWRkIFRhc2s8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1ib3R0b21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Db3B5cmlnaHQgwqkgMjAyMyBEZWNsYW5rYjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5naXRodWI8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkMyLDE2LjQyIDQuODcsMjAuMTcgOC44NCwyMS41QzkuMzQsMjEuNTggOS41LDIxLjI3IDkuNSwyMUM5LjUsMjAuNzcgOS41LDIwLjE0IDkuNSwxOS4zMUM2LjczLDE5LjkxIDYuMTQsMTcuOTcgNi4xNCwxNy45N0M1LjY4LDE2LjgxIDUuMDMsMTYuNSA1LjAzLDE2LjVDNC4xMiwxNS44OCA1LjEsMTUuOSA1LjEsMTUuOUM2LjEsMTUuOTcgNi42MywxNi45MyA2LjYzLDE2LjkzQzcuNSwxOC40NSA4Ljk3LDE4IDkuNTQsMTcuNzZDOS42MywxNy4xMSA5Ljg5LDE2LjY3IDEwLjE3LDE2LjQyQzcuOTUsMTYuMTcgNS42MiwxNS4zMSA1LjYyLDExLjVDNS42MiwxMC4zOSA2LDkuNSA2LjY1LDguNzlDNi41NSw4LjU0IDYuMiw3LjUgNi43NSw2LjE1QzYuNzUsNi4xNSA3LjU5LDUuODggOS41LDcuMTdDMTAuMjksNi45NSAxMS4xNSw2Ljg0IDEyLDYuODRDMTIuODUsNi44NCAxMy43MSw2Ljk1IDE0LjUsNy4xN0MxNi40MSw1Ljg4IDE3LjI1LDYuMTUgMTcuMjUsNi4xNUMxNy44LDcuNSAxNy40NSw4LjU0IDE3LjM1LDguNzlDMTgsOS41IDE4LjM4LDEwLjM5IDE4LjM4LDExLjVDMTguMzgsMTUuMzIgMTYuMDQsMTYuMTYgMTMuODEsMTYuNDFDMTQuMTcsMTYuNzIgMTQuNSwxNy4zMyAxNC41LDE4LjI2QzE0LjUsMTkuNiAxNC41LDIwLjY4IDE0LjUsMjFDMTQuNSwyMS4yNyAxNC42NiwyMS41OSAxNS4xNywyMS41QzE5LjE0LDIwLjE2IDIyLDE2LjQyIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaXCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICAgICAgVUkuaW5pdE1haW5CdXR0b25zKCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgaW5pdE1haW5CdXR0b25zKCkge1xuICAgICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10by1kbycpO1xuICAgICAgICBjb25zdCB0b2dnbGVNb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGUtdG9nJyk7XG5cbiAgICAgICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmFkZFRhc2spO1xuICAgICAgICB0b2dnbGVNb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkubW9kZSlcbiAgICB9XG5cblxuICAgIHN0YXRpYyByZW1vdmVUYWIoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtY29udGFpbmVyJykuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgb3BlblByb2plY3QoVGFiKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLmlubmVySFRNTCA9IFRhYi5pZDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRhaW5lcicpLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG1vZGUoKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IG5ld1RoZW1lID0gcm9vdC5jbGFzc05hbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyayc7XG4gICAgICAgIHJvb3QuY2xhc3NOYW1lID0gbmV3VGhlbWU7XG5cbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RlLXRvZycpXG4gICAgICAgIGlmIChuZXdUaGVtZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgICAgICBpY29uLmlubmVySFRNTCA9ICc8c3ZnIGNsYXNzPVwibW9kZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPm1vb24tZnVsbDwvdGl0bGU+PHBhdGggZD1cIk0xMiAyQTEwIDEwIDAgMSAxIDIgMTJBMTAgMTAgMCAwIDEgMTIgMlpcIiAvPjwvc3ZnPidcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGljb24uaW5uZXJIVE1MID0gJzxzdmcgY2xhc3M9XCJtb2RlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+d2hpdGUtYmFsYW5jZS1zdW5ueTwvdGl0bGU+PHBhdGggZD1cIk0zLjU1IDE5LjA5TDQuOTYgMjAuNUw2Ljc2IDE4LjcxTDUuMzQgMTcuMjlNMTIgNkM4LjY5IDYgNiA4LjY5IDYgMTJTOC42OSAxOCAxMiAxOCAxOCAxNS4zMSAxOCAxMkMxOCA4LjY4IDE1LjMxIDYgMTIgNk0yMCAxM0gyM1YxMUgyME0xNy4yNCAxOC43MUwxOS4wNCAyMC41TDIwLjQ1IDE5LjA5TDE4LjY2IDE3LjI5TTIwLjQ1IDVMMTkuMDQgMy42TDE3LjI0IDUuMzlMMTguNjYgNi44MU0xMyAxSDExVjRIMTNNNi43NiA1LjM5TDQuOTYgMy42TDMuNTUgNUw1LjM0IDYuODFMNi43NiA1LjM5TTEgMTNINFYxMUgxTTEzIDIwSDExVjIzSDEzXCIgLz48L3N2Zz4nO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgYWRkVGFzaygpIHtcbiAgICAgICAgY29uc3QgdGFza0RPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRE9NLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgdGFza0RPTS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGVjay1ib3ggdW5jaGVja2VkXCI+XG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgPHRpdGxlPmNoZWNrYm94LWJsYW5rLW91dGxpbmU8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTksM0g1QzMuODksMyAzLDMuODkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVY1QzIxLDMuODkgMjAuMSwzIDE5LDNNMTksNVYxOUg1VjVIMTlaXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgzIGNsYXNzPVwiaW5kLXRhc2tcIj5OZXcgVGFzazwvaDM+YDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHRhc2tET00pO1xuXG4gICAgICAgIGNvbnN0IHByb2pOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykuaW5uZXJIVE1MO1xuICAgICAgICBTdG9yYWdlLmFkZFRhc2sobmV3IFRhc2soJ05ldyBUYXNrJyksIHByb2pOYW1lKTsgLy9Nb2R1bGVzXG5cbiAgICAgICAgVUkubmFtZVRhc2sodGFza0RPTSwgdG9kbyk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbmFtZVRhc2sodGFza0RPTSwgdG9kbykge1xuICAgICAgICBjb25zdCB0ZXh0Ym94ID0gdGFza0RPTS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICBcbiAgICAgICAgaWYgKCF0ZXh0Ym94LmNsYXNzTGlzdC5jb250YWlucygnbmFtZS10YXNrJykpIHtcbiAgICAgICAgICAgIFVJLmluaXRUYXNrKHRhc2tET00pO1xuXG4gICAgICAgICAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0RmllbGQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIGlucHV0RmllbGQuY2xhc3NMaXN0LmFkZCgnbmFtZS10YXNrJyk7XG4gICAgICAgICAgICBpZiAodGV4dGJveC5pbm5lckhUTUwgIT09ICdOZXcgVGFzaycpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gdGV4dGJveC5pbm5lckhUTUw7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0ZXh0Ym94LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGlucHV0RmllbGQsIHRleHRib3gpO1xuXG4gICAgICAgICAgICBpbnB1dEZpZWxkLmZvY3VzKCk7XG5cbiAgICAgICAgICAgIGlucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dEZpZWxkLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gJ05ldyBUYXNrJztcbiAgICAgICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgU3RvcmFnZS5yZW5hbWVUYXNrKHRleHRib3guaW5uZXJIVE1MLCBpbnB1dEZpZWxkLnZhbHVlLCBwcm9qTmFtZSk7IC8vIE1vZHVsZXNcblxuICAgICAgICAgICAgICAgIHRleHRib3guaW5uZXJIVE1MID0gaW5wdXRGaWVsZC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0YXNrRE9NLmlkID0gaW5wdXRGaWVsZC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0b2RvLnNldE5hbWUoaW5wdXRGaWVsZC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGFza0RPTS5yZXBsYWNlQ2hpbGQodGV4dGJveCwgaW5wdXRGaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc3RhdGljIGluaXRUYXNrKHRhc2spIHtcbiAgICAgICAgdGFzay5sYXN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkubmFtZVRhc2sodGFzaykpO1xuICAgICAgICB0YXNrLmZpcnN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkuY2hlY2tUYXNrKHRhc2spKVxuICAgIH1cblxuXG4gICAgc3RhdGljIGNoZWNrVGFzayh0YXNrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0YXNrLmlkO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hlY2tlZC5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJylcbiAgICAgICAgY2hlY2tlZC5jbGFzc0xpc3QuYWRkKCdjaGVjay1ib3gnKVxuICAgICAgICBjaGVja2VkLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNoZWNrYm94LWludGVybWVkaWF0ZTwvdGl0bGU+PHBhdGggZD1cIk0xOSwzSDVBMiwyIDAgMCwwIDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWNUEyLDIgMCAwLDAgMTksM00xOSwxOUg1VjVIMTlWMTlNMTcsMTdIN1Y3SDE3VjE3WlwiIC8+PC9zdmc+J1xuXG4gICAgICAgIHRhc2suZmlyc3RFbGVtZW50Q2hpbGQucmVwbGFjZUNoaWxkKGNoZWNrZWQsIHRhc2suZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQpXG5cbiAgICAgICAgdGFzay5sYXN0RWxlbWVudENoaWxkLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRhc2sucmVtb3ZlKCkgfSwgMjUwKVxuXG4gICAgICAgIGNvbnN0IHByb2pOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykuaW5uZXJIVE1MO1xuICAgICAgICBTdG9yYWdlLmRlbGV0ZVRhc2sobmFtZSwgcHJvak5hbWUpO1xuICAgIH1cblxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCBUT0RPIGZyb20gJy4vdG9kby5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdJbmJveCcpKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdUb2RheScpKVxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ1dlZWsnKSlcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdNb250aCcpKVxuICAgIH1cblxuICAgIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gICAgfVxuXG5cbiAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIH1cblxuICAgIGRlbGV0ZVByb2plY3QodGFyZ2V0TmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9EZWxldGUgPSB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09IHRhcmdldE5hbWUpO1xuXG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0VG9EZWxldGUpLCAxKTtcbiAgICB9XG5cbiAgICByZW5hbWVQcm9qZWN0KG5hbWUsIG5ld05hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvaiA9IHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT0gbmFtZSk7XG5cbiAgICAgICAgcHJvai5zZXROYW1lKG5ld05hbWUpO1xuICAgIH1cblxuXG4gICAgYWRkVGFzayh0YXNrLCBwcm9qTmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qID0gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PSBwcm9qTmFtZSk7XG5cbiAgICAgICAgcHJvai5hZGRUYXNrKHRhc2spXG4gICAgfVxuXG4gICAgcmVuYW1lVGFzayhuYW1lLCBuZXdOYW1lLCBwcm9qTmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qID0gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PSBwcm9qTmFtZSk7XG5cbiAgICAgICAgcHJvai5yZW5hbWVUYXNrKG5hbWUsIG5ld05hbWUpXG4gICAgfVxuXG4gICAgZGVsZXRlVGFzayh0YXNrLCBwcm9qTmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qID0gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PSBwcm9qTmFtZSk7XG5cbiAgICAgICAgcHJvai5kZWxldGVUYXNrKHRhc2spXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cblxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0VGFza3ModGFza3MpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICAgIH1cbiAgICBcbiAgICBnZXRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKVxuICAgIH1cblxuICAgIHJlbmFtZVRhc2sobmFtZSwgbmV3TmFtZSkge1xuICAgICAgICBjb25zdCBUT0RPID0gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PSBuYW1lKTtcbiAgICAgICAgVE9ETy5zZXROYW1lKG5ld05hbWUpO1xuICAgIH1cblxuICAgIGRlbGV0ZVRhc2sobmFtZSkge1xuICAgICAgICBjb25zdCBUT0RPID0gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PSBuYW1lKTtcblxuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZSh0aGlzLnRhc2tzLmluZGV4T2YoVE9ETyksIDEpO1xuICAgIH1cblxuXG59IiwiaW1wb3J0IFRPRE8gZnJvbSAnLi90b2RvLmpzJ1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgICBzdGF0aWMgc2F2ZVRvZG9MaXN0KGRhdGEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRvZG9MaXN0KCkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IE9iamVjdC5hc3NpZ24obmV3IExpc3QoKSwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSkpXG5cbiAgICAgICAgdG9kb0xpc3Quc2V0UHJvamVjdHModG9kb0xpc3QuZ2V0UHJvamVjdHMoKS5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpKVxuXG4gICAgICAgIHRvZG9MaXN0LmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4gcHJvamVjdC5zZXRUYXNrcyhwcm9qZWN0LmdldFRhc2tzKCkubWFwKCh0YXNrKSA9PiBPYmplY3QuYXNzaWduKG5ldyBUYXNrKCksIHRhc2spKSkpXG5cbiAgICAgICAgcmV0dXJuIHRvZG9MaXN0XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICB0b2RvTGlzdC5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmFtZVByb2plY3QobmFtZSwgbmV3TmFtZSkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QucmVuYW1lUHJvamVjdChuYW1lLCBuZXdOYW1lKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWxldGVQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgICAgIHRvZG9MaXN0LmRlbGV0ZVByb2plY3QobmFtZSk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBhZGRUYXNrKHRhc2ssIHByb2pOYW1lKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICB0b2RvTGlzdC5hZGRUYXNrKHRhc2ssIHByb2pOYW1lKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyByZW5hbWVUYXNrKG5hbWUsIG5ld05hbWUsIHByb2pOYW1lKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICB0b2RvTGlzdC5yZW5hbWVUYXNrKG5hbWUsIG5ld05hbWUsIHByb2pOYW1lKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWxldGVUYXNrKHRhc2ssIHByb2pOYW1lKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICB0b2RvTGlzdC5kZWxldGVUYXNrKHRhc2ssIHByb2pOYW1lKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUT0RPIHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBzZXROYW1lKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHNldERhdGUoZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH1cbiAgICBcbiAgICBnZXREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgIH1cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL1VJLmpzJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkubG9hZEhvbWUpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=