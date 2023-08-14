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
        setTimeout(() => { proj.parentNode.remove() }, 250); 
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

            let proj = List.findProject(input.innerHTML); //Modules

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
                    inputField.parentNode.id = inputField.value
                }
            input.innerHTML = inputField.value;
            document.querySelector('.title').innerHTML = inputField.value;
            inputField.parentNode.replaceChild(input, inputField);

            proj.setName(inputField.value); //Modules 

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

        
        let todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"]('New Task');
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
        const checked = document.createElement('div');
        checked.classList.add('checked')
        checked.classList.add('check-box')
        checked.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-intermediate</title><path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M17,17H7V7H17V17Z" /></svg>'

        task.firstElementChild.replaceChild(checked, task.firstElementChild.firstElementChild)

        task.lastElementChild.style.textDecoration = 'line-through';

        setTimeout(() => { task.remove() }, 250)
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


class List {
    constructor() {
        this.projects = [];
        this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Inbox'));
        this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Today'))
        this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Week'))
        this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Month'))
    }

    setProject(projects) {
        this.projects = projects;
    }

    getProjects() {
        return this.projects;
    }

    addProject(newProject) {
        this.projects.push(newProject);
    }

    findProject(name) {
        return this.projects.find((project) => project.getName() == name);
    }

    deleteProject(targetName) {
        const ind = this.projects.find((project) => project.getName() == targetName);

        this.projects.splice(this.projects.indexOf(projectToDelete), 1);
    }

    Print() {
        for (const project of this.projects) {
            console.log(project.getName());
        }
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
        const todoList = Storage.getTodoList()
        todoList.addProject(project)
        Storage.saveTodoList(todoList)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUss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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjRCO0FBQ007QUFDTjs7QUFFYjtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQyxnREFBSTs7QUFFL0MsdUZBQXVGLG1EQUFPOztBQUU5Rjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4QmU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNZOztBQUVoQyw4Q0FBOEMsc0RBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvbGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiU2FuIEZyYW5jaXNjb1wiO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiB1cmwoXCJodHRwczovL2FwcGxlc29jaWFsLnMzLmFtYXpvbmF3cy5jb20vYXNzZXRzL3N0eWxlcy9mb250cy9zYW5mcmFuY2lzY28vc2FuZnJhbmNpc2NvZGlzcGxheS1yZWd1bGFyLXdlYmZvbnQud29mZlwiKTtcbiAgfVxuXG46cm9vdCB7XG4gICAgLS1hc2lkZS1jb2w6ICNmNWY1ZjU7XG4gICAgLS1vbC1jb2w6ICNlOGU4ZTg7XG4gICAgLS1tYWluLWNvbDogI0ZGRkZGRjtcbiAgICAtLXNpZGUtdGV4dC1jb2w6ICMzQjNFNDE7XG4gICAgLS1zaWRlLXNlYy10ZXh0LWNvbDogIzYwNjQ2ODtcbiAgICAtLXNlbC1jb2w6ICNEQkRFRTE7XG4gICAgLS1tYWluLXRleHQtY29sOiAjMEIwRDExO1xufVxuXG46cm9vdC5saWdodCB7XG4gICAgLS1hc2lkZS1jb2w6ICNmNWY1ZjU7XG4gICAgLS1vbC1jb2w6ICNlOGU4ZTg7XG4gICAgLS1tYWluLWNvbDogI0ZGRkZGRjtcbiAgICAtLXNpZGUtdGV4dC1jb2w6ICMzQjNFNDE7XG4gICAgLS1zaWRlLXNlYy10ZXh0LWNvbDogIzYwNjQ2ODtcbiAgICAtLXNlbC1jb2w6ICNEQkRFRTE7XG4gICAgLS1tYWluLXRleHQtY29sOiAjMEIwRDExO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgOnJvb3QuZGFyayB7XG4gICAgICAgIC0tYXNpZGUtY29sOiAjMWMxYzFjO1xuICAgICAgICAtLW9sLWNvbDogIzI2MjYyNjtcbiAgICAgICAgLS1tYWluLWNvbDogIzFjMWMxYztcbiAgICAgICAgLS1zaWRlLXRleHQtY29sOiAjZDFkMWQxO1xuICAgICAgICAtLXNpZGUtc2VjLXRleHQtY29sOiAjYThhOGE4O1xuICAgICAgICAtLXNlbC1jb2w6ICMyZTJlMmU7XG4gICAgICAgIC0tbWFpbi10ZXh0LWNvbDogI2Y1ZjVmNTtcbiAgICB9XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBcIlNhbiBGcmFuY2lzY29cIjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDVweCA0ZnIgMzNmcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG5cbi8qIFxuU0lERUJBUlxuKi9cbmFzaWRlIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXNpZGUtY29sKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSAxZnIgM3JlbTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tb2wtY29sKTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuXG4uYXNpZGUtY2xvc2VkIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG59XG5cbi5hc2lkZS11cHBlci1jb250IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tb2wtY29sKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmFzaWRlLXVwcGVyLWlubmVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzVweCAxZnIgMzVweDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tZW51LXRvZyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcbn1cblxuLnRvZ2dsZXIge1xuICAgIGZpbGw6IHZhcigtLXNpZGUtdGV4dC1jb2wpO1xufVxuXG4ubWVudS10b2ctY2xvc2VkIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG59XG5cbi5hc2lkZS1pbm5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgIGdhcDogMnJlbTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5hc2lkZS10b3Age1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICBnYXA6IDNyZW07XG59XG5cbi5zaWRlLXRhYiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC42cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMC40cmVtO1xufVxuXG4uc2lkZS10YWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbC1jb2wpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbn1cblxuLnNpZGUtdGFiLXNlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsLWNvbCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbn1cblxuLnNpZGUtdGFiIHN2ZyB7XG4gICAgcGFkZGluZy10b3A6IDAuMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmlsbDogdmFyKC0tc2lkZS10ZXh0LWNvbClcbn1cblxuLnNpZGUtdGFiIGgxIHtcbiAgICBjb2xvcjogdmFyKC0tc2lkZS10ZXh0LWNvbCk7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi50aW1lLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmFzaWRlLWJvdHRvbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLW9sLWNvbCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXNpZGUtYm90dG9tLWlubmVyIHtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbi5uZXctcHJvamVjdCwgLm5ldy1wcm9qZWN0IHN2ZyB7XG4gICAgY29sb3I6IHZhcigtLXNpZGUtc2VjLXRleHQtY29sKTtcbiAgICBmaWxsOiB2YXIoLS1zaWRlLXNlYy10ZXh0LWNvbCk7XG59XG5cbi5uZXctcHJvamVjdCB7XG4gICAgY3Vyc29yOiB0ZXh0O1xufVxuXG4ubmFtZS1wcm9qIHtcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1zZWMtdGV4dC1jb2wpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLm5hbWUtcHJvajpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZVxufVxuXG5tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gMWZyIDNyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2wpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbn1cblxuLm1haW4tdXBwZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1vbC1jb2wpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbn1cblxuLm1haW4tdXBwZXIgc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1zaWRlLXRleHQtY29sKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuXG4ubWFpbi1pbm5lciB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBncmlkLXJvdzogMiAvIDM7XG59XG5cbi5hZGQtdG8tZG8ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbCk7XG59XG5cbi5hZGQtdG8tZG8gc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1tYWluLXRleHQtY29sKTtcbn1cblxuLmFkZC10by1kby1jb250YWluZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbC1jb2wpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbn1cblxuLnRhc2sge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMnB4IGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sKTtcbiAgICBwYWRkaW5nOiAwLjJyZW0gMDtcbn1cblxuLnRhc2sgc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1tYWluLXRleHQtY29sKTtcbn1cblxuLnRhc2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbC1jb2wpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbn1cblxuLm5hbWUtdGFzayB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHZhcigtLXNpZGUtc2VjLXRleHQtY29sKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5uYW1lLXRhc2s6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pbmQtdGFzayB7XG4gICAgY29sb3I6IHZhcigtLXNpZGUtc2VjLXRleHQtY29sKTtcbiAgICBjdXJzb3I6IHRleHQ7XG59XG5cbi50aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2wpO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubWFpbi1ib3R0b20ge1xuICAgIGdyaWQtcm93OiAzIC8gNDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tb2wtY29sKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG5cbi5mb290ZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDMwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXRleHQtY29sKTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmZvb3RlciBzdmcge1xuICAgIGZpbGw6IHZhcigtLXNpZGUtdGV4dC1jb2wpO1xufVxuXG4ubmV3LXByb2plY3Qge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnIgMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07XG59XG5cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsMEhBQTBIO0VBQzVIOztBQUVGO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0k7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Z0M7SUFDaEMsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2FuIEZyYW5jaXNjb1xcXCI7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKFxcXCJodHRwczovL2FwcGxlc29jaWFsLnMzLmFtYXpvbmF3cy5jb20vYXNzZXRzL3N0eWxlcy9mb250cy9zYW5mcmFuY2lzY28vc2FuZnJhbmNpc2NvZGlzcGxheS1yZWd1bGFyLXdlYmZvbnQud29mZlxcXCIpO1xcbiAgfVxcblxcbjpyb290IHtcXG4gICAgLS1hc2lkZS1jb2w6ICNmNWY1ZjU7XFxuICAgIC0tb2wtY29sOiAjZThlOGU4O1xcbiAgICAtLW1haW4tY29sOiAjRkZGRkZGO1xcbiAgICAtLXNpZGUtdGV4dC1jb2w6ICMzQjNFNDE7XFxuICAgIC0tc2lkZS1zZWMtdGV4dC1jb2w6ICM2MDY0Njg7XFxuICAgIC0tc2VsLWNvbDogI0RCREVFMTtcXG4gICAgLS1tYWluLXRleHQtY29sOiAjMEIwRDExO1xcbn1cXG5cXG46cm9vdC5saWdodCB7XFxuICAgIC0tYXNpZGUtY29sOiAjZjVmNWY1O1xcbiAgICAtLW9sLWNvbDogI2U4ZThlODtcXG4gICAgLS1tYWluLWNvbDogI0ZGRkZGRjtcXG4gICAgLS1zaWRlLXRleHQtY29sOiAjM0IzRTQxO1xcbiAgICAtLXNpZGUtc2VjLXRleHQtY29sOiAjNjA2NDY4O1xcbiAgICAtLXNlbC1jb2w6ICNEQkRFRTE7XFxuICAgIC0tbWFpbi10ZXh0LWNvbDogIzBCMEQxMTtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgICA6cm9vdC5kYXJrIHtcXG4gICAgICAgIC0tYXNpZGUtY29sOiAjMWMxYzFjO1xcbiAgICAgICAgLS1vbC1jb2w6ICMyNjI2MjY7XFxuICAgICAgICAtLW1haW4tY29sOiAjMWMxYzFjO1xcbiAgICAgICAgLS1zaWRlLXRleHQtY29sOiAjZDFkMWQxO1xcbiAgICAgICAgLS1zaWRlLXNlYy10ZXh0LWNvbDogI2E4YThhODtcXG4gICAgICAgIC0tc2VsLWNvbDogIzJlMmUyZTtcXG4gICAgICAgIC0tbWFpbi10ZXh0LWNvbDogI2Y1ZjVmNTtcXG4gICAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTYW4gRnJhbmNpc2NvXFxcIjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ1cHggNGZyIDMzZnI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXG59XFxuXFxuLyogXFxuU0lERUJBUlxcbiovXFxuYXNpZGUge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFzaWRlLWNvbCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSAxZnIgM3JlbTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1vbC1jb2wpO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXG59XFxuXFxuLmFzaWRlLWNsb3NlZCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLmFzaWRlLXVwcGVyLWNvbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tb2wtY29sKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uYXNpZGUtdXBwZXItaW5uZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzVweCAxZnIgMzVweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWVudS10b2cge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG59XFxuXFxuLnRvZ2dsZXIge1xcbiAgICBmaWxsOiB2YXIoLS1zaWRlLXRleHQtY29sKTtcXG59XFxuXFxuLm1lbnUtdG9nLWNsb3NlZCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLmFzaWRlLWlubmVyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5hc2lkZS10b3Age1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBnYXA6IDNyZW07XFxufVxcblxcbi5zaWRlLXRhYiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjZyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC40cmVtO1xcbn1cXG5cXG4uc2lkZS10YWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWwtY29sKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4uc2lkZS10YWItc2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsLWNvbCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcbn1cXG5cXG4uc2lkZS10YWIgc3ZnIHtcXG4gICAgcGFkZGluZy10b3A6IDAuMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmaWxsOiB2YXIoLS1zaWRlLXRleHQtY29sKVxcbn1cXG5cXG4uc2lkZS10YWIgaDEge1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS10ZXh0LWNvbCk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udGltZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5hc2lkZS1ib3R0b20ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tb2wtY29sKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hc2lkZS1ib3R0b20taW5uZXIge1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5uZXctcHJvamVjdCwgLm5ldy1wcm9qZWN0IHN2ZyB7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXNlYy10ZXh0LWNvbCk7XFxuICAgIGZpbGw6IHZhcigtLXNpZGUtc2VjLXRleHQtY29sKTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IHtcXG4gICAgY3Vyc29yOiB0ZXh0O1xcbn1cXG5cXG4ubmFtZS1wcm9qIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtc2VjLXRleHQtY29sKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm5hbWUtcHJvajpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmVcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDFmciAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXG59XFxuXFxuLm1haW4tdXBwZXIge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tb2wtY29sKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcbn1cXG5cXG4ubWFpbi11cHBlciBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1zaWRlLXRleHQtY29sKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XFxufVxcblxcbi5tYWluLWlubmVyIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmFkZC10by1kbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2wpO1xcbn1cXG5cXG4uYWRkLXRvLWRvIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLW1haW4tdGV4dC1jb2wpO1xcbn1cXG5cXG4uYWRkLXRvLWRvLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbC1jb2wpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMnB4IGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sKTtcXG4gICAgcGFkZGluZzogMC4ycmVtIDA7XFxufVxcblxcbi50YXNrIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLW1haW4tdGV4dC1jb2wpO1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbC1jb2wpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi5uYW1lLXRhc2sge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1zZWMtdGV4dC1jb2wpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubmFtZS10YXNrOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmluZC10YXNrIHtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtc2VjLXRleHQtY29sKTtcXG4gICAgY3Vyc29yOiB0ZXh0O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbCk7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1haW4tYm90dG9tIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDZmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLW9sLWNvbCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAzMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXRleHQtY29sKTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5mb290ZXIgc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tc2lkZS10ZXh0LWNvbCk7XFxufVxcblxcbi5uZXctcHJvamVjdCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnIgMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMC4ycmVtO1xcbn1cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFRPRE8gZnJvbSAnLi90b2RvLmpzJ1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG5cblxuICAgIHN0YXRpYyBsb2FkSG9tZSgpIHtcbiAgICAgICAgVUkuc2lkZWJhcigpO1xuICAgICAgICBVSS5tYWluKCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgc2lkZWJhcigpIHtcbiAgICAgICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xuICAgICAgICBhc2lkZS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhc2lkZS11cHBlci1jb250XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXNpZGUtdXBwZXItaW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1lbnUtdG9nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJ0b2dnbGVyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5tZW51PC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMyw2SDIxVjhIM1Y2TTMsMTFIMjFWMTNIM1YxMU0zLDE2SDIxVjE4SDNWMTZaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXNpZGUtaW5uZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhc2lkZS10b3BcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS10YWIgc2lkZS10YWItc2VsXCIgaWQ9XCJJbmJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+aW5ib3g8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTksMTVIMTVBMywzIDAgMCwxIDEyLDE4QTMsMyAwIDAsMSA5LDE1SDVWNUgxOU0xOSwzSDVDMy44OSwzIDMsMy45IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWNUEyLDIgMCAwLDAgMTksM1pcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkluYm94PC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtdGFiXCIgaWQ9XCJUb2RheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+c3Rhci1vdXRsaW5lPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiwxNS4zOUw4LjI0LDE3LjY2TDkuMjMsMTMuMzhMNS45MSwxMC41TDEwLjI5LDEwLjEzTDEyLDYuMDlMMTMuNzEsMTAuMTNMMTguMDksMTAuNUwxNC43NywxMy4zOEwxNS43NiwxNy42Nk0yMiw5LjI0TDE0LjgxLDguNjNMMTIsMkw5LjE5LDguNjNMMiw5LjI0TDcuNDUsMTMuOTdMNS44MiwyMUwxMiwxNy4yN0wxOC4xOCwyMUwxNi41NCwxMy45N0wyMiw5LjI0WlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+VG9kYXk8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtdGFiXCIgaWQ9XCJXZWVrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5jYWxlbmRhci1yYW5nZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOSwxMEg3VjEySDlWMTBNMTMsMTBIMTFWMTJIMTNWMTBNMTcsMTBIMTVWMTJIMTdWMTBNMTksM0gxOFYxSDE2VjNIOFYxSDZWM0g1QzMuODksMyAzLDMuOSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjVBMiwyIDAgMCwwIDE5LDNNMTksMTlINVY4SDE5VjE5WlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+V2VlazwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS10YWJcIiBpZD1cIk1vbnRoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5jYWxlbmRhci1tb250aDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOSwxMFYxMkg3VjEwSDlNMTMsMTBWMTJIMTFWMTBIMTNNMTcsMTBWMTJIMTVWMTBIMTdNMTksM0EyLDIgMCAwLDEgMjEsNVYxOUEyLDIgMCAwLDEgMTksMjFINUMzLjg5LDIxIDMsMjAuMSAzLDE5VjVBMiwyIDAgMCwxIDUsM0g2VjFIOFYzSDE2VjFIMThWM0gxOU0xOSwxOVY4SDVWMTlIMTlNOSwxNFYxNkg3VjE0SDlNMTMsMTRWMTZIMTFWMTRIMTNNMTcsMTRWMTZIMTVWMTRIMTdaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Nb250aDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS10YWJcIiBpZD1cIkFueXRpbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPm5vdGU8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0LDEwVjQuNUwxOS41LDEwTTUsM0MzLjg5LDMgMywzLjkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVY5TDE1LDNINVpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkFueXRpbWU8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLXRhYlwiIGlkPVwiUHJvamVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPmRhdGFiYXNlPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiwzQzcuNTgsMyA0LDQuNzkgNCw3QzQsOS4yMSA3LjU4LDExIDEyLDExQzE2LjQyLDExIDIwLDkuMjEgMjAsN0MyMCw0Ljc5IDE2LjQyLDMgMTIsM000LDlWMTJDNCwxNC4yMSA3LjU4LDE2IDEyLDE2QzE2LjQyLDE2IDIwLDE0LjIxIDIwLDEyVjlDMjAsMTEuMjEgMTYuNDIsMTMgMTIsMTNDNy41OCwxMyA0LDExLjIxIDQsOU00LDE0VjE3QzQsMTkuMjEgNy41OCwyMSAxMiwyMUMxNi40MiwyMSAyMCwxOS4yMSAyMCwxN1YxNEMyMCwxNi4yMSAxNi40MiwxOCAxMiwxOEM3LjU4LDE4IDQsMTYuMjEgNCwxNFpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlByb2plY3RzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhc2lkZS1ib3R0b21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhc2lkZS1ib3R0b20taW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS10YWIgYWRkLXByb2plY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnBsdXM8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTksMTNIMTNWMTlIMTFWMTNINVYxMUgxMVY1SDEzVjExSDE5VjEzWlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5BZGQgUHJvamVjdDwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YDtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXNpZGUpO1xuICAgIFVJLmluaXRCdXR0b25zKCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgaW5pdEJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IGhhbU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlcicpO1xuICAgICAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGUtdGFiJyk7XG4gICAgICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuXG4gICAgICAgIGhhbU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS50b2dnbGVNZW51KTtcbiAgICAgICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLnRhYih0YWIpKSk7XG4gICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmFkZFByb2plY3QpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHRvZ2dsZU1lbnUoKSB7XG4gICAgICAgIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKTtcbiAgICAgICAgY29uc3QgYXNpZGVTVkcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS10b2cnKTtcbiAgICAgICAgaWYgKGFzaWRlLmNsYXNzTGlzdC5jb250YWlucygnYXNpZGUtY2xvc2VkJykpIHtcbiAgICAgICAgICAgIGFzaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FzaWRlLWNsb3NlZCcpO1xuICAgICAgICAgICAgYXNpZGVTVkcuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS10b2ctY2xvc2VkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhc2lkZS5jbGFzc0xpc3QuYWRkKCdhc2lkZS1jbG9zZWQnKTtcbiAgICAgICAgICAgIGFzaWRlU1ZHLmNsYXNzTGlzdC5hZGQoJ21lbnUtdG9nLWNsb3NlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgdGFiKGUpIHtcbiAgICAgICAgVUkucmVtb3ZlVGFiU3R5bGUoKTtcbiAgICAgICAgVUkudGFiU3R5bGUoZSk7XG4gICAgICAgIFVJLnJlbW92ZVRhYigpO1xuICAgICAgICBVSS5vcGVuUHJvamVjdChlKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyByZW1vdmVUYWJTdHlsZSgpIHtcbiAgICAgICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlLXRhYicpO1xuICAgICAgICB0YWJzLmZvckVhY2goKHRhYikgPT4gdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGUtdGFiLXNlbCcpKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyB0YWJTdHlsZShlKSB7XG4gICAgICAgIGUuY2xhc3NMaXN0LmFkZCgnc2lkZS10YWItc2VsJyk7XG4gICAgfVxuXG4gICAgXG4gICAgc3RhdGljIGRlbFByb2oocHJvaikge1xuICAgICAgICBwcm9qLnBhcmVudE5vZGUuY2hpbGRyZW5bMV0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHByb2oucGFyZW50Tm9kZS5yZW1vdmUoKSB9LCAyNTApOyBcbiAgICB9XG5cblxuICAgIHN0YXRpYyBhZGRQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2ouaWQgPSAncHJvamVjdHNDb250JztcbiAgICAgICAgcHJvai5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLXRhYiBuZXctcHJvamVjdFwiIGlkPVwiTmV3IFByb2plY3RcIj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnRpbWVsYXBzZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIsMjBBOCw4IDAgMCwxIDQsMTJBOCw4IDAgMCwxIDEyLDRBOCw4IDAgMCwxIDIwLDEyQTgsOCAwIDAsMSAxMiwyME0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMk0xNi4yNCw3Ljc2QzE1LjA3LDYuNTggMTMuNTMsNiAxMiw2VjEyTDcuNzYsMTYuMjRDMTAuMSwxOC41OCAxMy45LDE4LjU4IDE2LjI0LDE2LjI0QzE4LjU5LDEzLjkgMTguNTksMTAuMSAxNi4yNCw3Ljc2WlwiIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3QtbmFtZVwiPk5ldyBQcm9qZWN0PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbFwiPlxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPmRlbGV0ZS1jaXJjbGU8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLDJDMTcuNTMsMiAyMiw2LjQ3IDIyLDEyQzIyLDE3LjUzIDE3LjUzLDIyIDEyLDIyQzYuNDcsMjIgMiwxNy41MyAyLDEyQzIsNi40NyA2LjQ3LDIgMTIsMk0xNyw3SDE0LjVMMTMuNSw2SDEwLjVMOS41LDdIN1Y5SDE3VjdNOSwxOEgxNUExLDEgMCAwLDAgMTYsMTdWMTBIOFYxN0ExLDEgMCAwLDAgOSwxOFpcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHByb2opO1xuXG4gICAgU3RvcmFnZS5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KCdOZXcgUHJvamVjdCcpKTsgLy9Nb2R1bGVzXG5cbiAgICBVSS5pbml0UHJvamVjdCgpO1xuICAgIFVJLm9wZW5Qcm9qZWN0KHByb2ouZmlyc3RFbGVtZW50Q2hpbGQpOyBcbiAgICB9XG5cblxuICAgIHN0YXRpYyBpbml0UHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXctcHJvamVjdCcpW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXctcHJvamVjdCcpLmxlbmd0aCAtIDFdO1xuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkudGFiKHByb2plY3QpKTtcblxuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpZGUtdGFiLXNlbCcpO1xuXG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1uYW1lJylbZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtbmFtZScpLmxlbmd0aCAtIDFdO1xuICAgICAgICB0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkucmVuYW1lUHJvamVjdCh0ZXh0KSk7XG5cbiAgICAgICAgY29uc3QgZGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbCcpW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWwnKS5sZW5ndGggLSAxXTtcbiAgICAgICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkuZGVsUHJvaihkZWwpKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyByZW5hbWVQcm9qZWN0KGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnc2lkZS10YWItc2VsJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICBsZXQgcHJvaiA9IExpc3QuZmluZFByb2plY3QoaW5wdXQuaW5uZXJIVE1MKTsgLy9Nb2R1bGVzXG5cbiAgICAgICAgICAgIGlucHV0RmllbGQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIGlucHV0RmllbGQuY2xhc3NMaXN0LmFkZCgnbmFtZS1wcm9qJyk7XG4gICAgICAgICAgICBpZiAoaW5wdXQuaW5uZXJIVE1MICE9PSAnTmV3IFByb2plY3QnKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9IGlucHV0LmlubmVySFRNTDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlucHV0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGlucHV0RmllbGQsIGlucHV0KTtcblxuICAgICAgICAgICAgaW5wdXRGaWVsZC5mb2N1cygpO1xuICAgICAgICAgIFxuICAgICAgICAgICAgaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0RmllbGQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0RmllbGQudmFsdWUgPSAnTmV3IFByb2plY3QnO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnBhcmVudE5vZGUuaWQgPSAnTmV3IFByb2plY3QnXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRGaWVsZC5wYXJlbnROb2RlLmlkID0gaW5wdXRGaWVsZC52YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0LmlubmVySFRNTCA9IGlucHV0RmllbGQudmFsdWU7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS5pbm5lckhUTUwgPSBpbnB1dEZpZWxkLnZhbHVlO1xuICAgICAgICAgICAgaW5wdXRGaWVsZC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChpbnB1dCwgaW5wdXRGaWVsZCk7XG5cbiAgICAgICAgICAgIHByb2ouc2V0TmFtZShpbnB1dEZpZWxkLnZhbHVlKTsgLy9Nb2R1bGVzIFxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc3RhdGljIG1haW4oKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi11cHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGUtdG9nXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cIm1vZGVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+d2hpdGUtYmFsYW5jZS1zdW5ueTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMy41NSAxOS4wOUw0Ljk2IDIwLjVMNi43NiAxOC43MUw1LjM0IDE3LjI5TTEyIDZDOC42OSA2IDYgOC42OSA2IDEyUzguNjkgMTggMTIgMTggMTggMTUuMzEgMTggMTJDMTggOC42OCAxNS4zMSA2IDEyIDZNMjAgMTNIMjNWMTFIMjBNMTcuMjQgMTguNzFMMTkuMDQgMjAuNUwyMC40NSAxOS4wOUwxOC42NiAxNy4yOU0yMC40NSA1TDE5LjA0IDMuNkwxNy4yNCA1LjM5TDE4LjY2IDYuODFNMTMgMUgxMVY0SDEzTTYuNzYgNS4zOUw0Ljk2IDMuNkwzLjU1IDVMNS4zNCA2LjgxTDYuNzYgNS4zOU0xIDEzSDRWMTFIMU0xMyAyMEgxMVYyM0gxM1wiIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWlubmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1pbm5lci11cHBlclwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+SW5ib3g8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza3MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtdG8tZG8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10by1kb1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+cGx1czwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE5LDEzSDEzVjE5SDExVjEzSDVWMTFIMTFWNUgxM1YxMUgxOVYxM1pcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkFkZCBUYXNrPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tYm90dG9tXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+Q29weXJpZ2h0IMKpIDIwMjMgRGVjbGFua2I8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+Z2l0aHViPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiwyQTEwLDEwIDAgMCwwIDIsMTJDMiwxNi40MiA0Ljg3LDIwLjE3IDguODQsMjEuNUM5LjM0LDIxLjU4IDkuNSwyMS4yNyA5LjUsMjFDOS41LDIwLjc3IDkuNSwyMC4xNCA5LjUsMTkuMzFDNi43MywxOS45MSA2LjE0LDE3Ljk3IDYuMTQsMTcuOTdDNS42OCwxNi44MSA1LjAzLDE2LjUgNS4wMywxNi41QzQuMTIsMTUuODggNS4xLDE1LjkgNS4xLDE1LjlDNi4xLDE1Ljk3IDYuNjMsMTYuOTMgNi42MywxNi45M0M3LjUsMTguNDUgOC45NywxOCA5LjU0LDE3Ljc2QzkuNjMsMTcuMTEgOS44OSwxNi42NyAxMC4xNywxNi40MkM3Ljk1LDE2LjE3IDUuNjIsMTUuMzEgNS42MiwxMS41QzUuNjIsMTAuMzkgNiw5LjUgNi42NSw4Ljc5QzYuNTUsOC41NCA2LjIsNy41IDYuNzUsNi4xNUM2Ljc1LDYuMTUgNy41OSw1Ljg4IDkuNSw3LjE3QzEwLjI5LDYuOTUgMTEuMTUsNi44NCAxMiw2Ljg0QzEyLjg1LDYuODQgMTMuNzEsNi45NSAxNC41LDcuMTdDMTYuNDEsNS44OCAxNy4yNSw2LjE1IDE3LjI1LDYuMTVDMTcuOCw3LjUgMTcuNDUsOC41NCAxNy4zNSw4Ljc5QzE4LDkuNSAxOC4zOCwxMC4zOSAxOC4zOCwxMS41QzE4LjM4LDE1LjMyIDE2LjA0LDE2LjE2IDEzLjgxLDE2LjQxQzE0LjE3LDE2LjcyIDE0LjUsMTcuMzMgMTQuNSwxOC4yNkMxNC41LDE5LjYgMTQuNSwyMC42OCAxNC41LDIxQzE0LjUsMjEuMjcgMTQuNjYsMjEuNTkgMTUuMTcsMjEuNUMxOS4xNCwyMC4xNiAyMiwxNi40MiAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwiIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgICAgIFVJLmluaXRNYWluQnV0dG9ucygpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGluaXRNYWluQnV0dG9ucygpIHtcbiAgICAgICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG8tZG8nKTtcbiAgICAgICAgY29uc3QgdG9nZ2xlTW9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RlLXRvZycpO1xuXG4gICAgICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5hZGRUYXNrKTtcbiAgICAgICAgdG9nZ2xlTW9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLm1vZGUpXG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmVtb3ZlVGFiKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRhaW5lcicpLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG9wZW5Qcm9qZWN0KFRhYikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS5pbm5lckhUTUwgPSBUYWIuaWQ7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKS5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cblxuICAgIHN0YXRpYyBtb2RlKCkge1xuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBuZXdUaGVtZSA9IHJvb3QuY2xhc3NOYW1lID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnO1xuICAgICAgICByb290LmNsYXNzTmFtZSA9IG5ld1RoZW1lO1xuXG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kZS10b2cnKVxuICAgICAgICBpZiAobmV3VGhlbWUgPT09ICdkYXJrJykge1xuICAgICAgICAgICAgaWNvbi5pbm5lckhUTUwgPSAnPHN2ZyBjbGFzcz1cIm1vZGVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5tb29uLWZ1bGw8L3RpdGxlPjxwYXRoIGQ9XCJNMTIgMkExMCAxMCAwIDEgMSAyIDEyQTEwIDEwIDAgMCAxIDEyIDJaXCIgLz48L3N2Zz4nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpY29uLmlubmVySFRNTCA9ICc8c3ZnIGNsYXNzPVwibW9kZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPndoaXRlLWJhbGFuY2Utc3Vubnk8L3RpdGxlPjxwYXRoIGQ9XCJNMy41NSAxOS4wOUw0Ljk2IDIwLjVMNi43NiAxOC43MUw1LjM0IDE3LjI5TTEyIDZDOC42OSA2IDYgOC42OSA2IDEyUzguNjkgMTggMTIgMTggMTggMTUuMzEgMTggMTJDMTggOC42OCAxNS4zMSA2IDEyIDZNMjAgMTNIMjNWMTFIMjBNMTcuMjQgMTguNzFMMTkuMDQgMjAuNUwyMC40NSAxOS4wOUwxOC42NiAxNy4yOU0yMC40NSA1TDE5LjA0IDMuNkwxNy4yNCA1LjM5TDE4LjY2IDYuODFNMTMgMUgxMVY0SDEzTTYuNzYgNS4zOUw0Ljk2IDMuNkwzLjU1IDVMNS4zNCA2LjgxTDYuNzYgNS4zOU0xIDEzSDRWMTFIMU0xMyAyMEgxMVYyM0gxM1wiIC8+PC9zdmc+JztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc3RhdGljIGFkZFRhc2soKSB7XG4gICAgICAgIGNvbnN0IHRhc2tET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0RPTS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgIHRhc2tET00uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2stYm94IHVuY2hlY2tlZFwiPlxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5jaGVja2JveC1ibGFuay1vdXRsaW5lPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE5LDNINUMzLjg5LDMgMywzLjg5IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWNUMyMSwzLjg5IDIwLjEsMyAxOSwzTTE5LDVWMTlINVY1SDE5WlwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMyBjbGFzcz1cImluZC10YXNrXCI+TmV3IFRhc2s8L2gzPmA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKS5hcHBlbmRDaGlsZCh0YXNrRE9NKTtcblxuICAgICAgICBcbiAgICAgICAgbGV0IHRvZG8gPSBuZXcgVE9ETygnTmV3IFRhc2snKTtcbiAgICAgICAgVUkubmFtZVRhc2sodGFza0RPTSwgdG9kbyk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbmFtZVRhc2sodGFza0RPTSwgdG9kbykge1xuICAgICAgICBjb25zdCB0ZXh0Ym94ID0gdGFza0RPTS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICBcbiAgICAgICAgaWYgKCF0ZXh0Ym94LmNsYXNzTGlzdC5jb250YWlucygnbmFtZS10YXNrJykpIHtcbiAgICAgICAgICAgIFVJLmluaXRUYXNrKHRhc2tET00pO1xuXG4gICAgICAgICAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0RmllbGQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIGlucHV0RmllbGQuY2xhc3NMaXN0LmFkZCgnbmFtZS10YXNrJyk7XG4gICAgICAgICAgICBpZiAodGV4dGJveC5pbm5lckhUTUwgIT09ICdOZXcgVGFzaycpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gdGV4dGJveC5pbm5lckhUTUw7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0ZXh0Ym94LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGlucHV0RmllbGQsIHRleHRib3gpO1xuXG4gICAgICAgICAgICBpbnB1dEZpZWxkLmZvY3VzKCk7XG5cbiAgICAgICAgICAgIGlucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dEZpZWxkLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gJ05ldyBUYXNrJztcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgdGV4dGJveC5pbm5lckhUTUwgPSBpbnB1dEZpZWxkLnZhbHVlO1xuICAgICAgICAgICAgdGFza0RPTS5pZCA9IGlucHV0RmllbGQudmFsdWU7XG4gICAgICAgICAgICB0b2RvLnNldE5hbWUoaW5wdXRGaWVsZC52YWx1ZSk7XG4gICAgICAgICAgICB0YXNrRE9NLnJlcGxhY2VDaGlsZCh0ZXh0Ym94LCBpbnB1dEZpZWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgaW5pdFRhc2sodGFzaykge1xuICAgICAgICB0YXNrLmxhc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5uYW1lVGFzayh0YXNrKSk7XG4gICAgICAgIHRhc2suZmlyc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5jaGVja1Rhc2sodGFzaykpXG4gICAgfVxuXG5cbiAgICBzdGF0aWMgY2hlY2tUYXNrKHRhc2spIHtcbiAgICAgICAgY29uc3QgY2hlY2tlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaGVja2VkLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKVxuICAgICAgICBjaGVja2VkLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWJveCcpXG4gICAgICAgIGNoZWNrZWQuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2hlY2tib3gtaW50ZXJtZWRpYXRlPC90aXRsZT48cGF0aCBkPVwiTTE5LDNINUEyLDIgMCAwLDAgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVY1QTIsMiAwIDAsMCAxOSwzTTE5LDE5SDVWNUgxOVYxOU0xNywxN0g3VjdIMTdWMTdaXCIgLz48L3N2Zz4nXG5cbiAgICAgICAgdGFzay5maXJzdEVsZW1lbnRDaGlsZC5yZXBsYWNlQ2hpbGQoY2hlY2tlZCwgdGFzay5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZClcblxuICAgICAgICB0YXNrLmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGFzay5yZW1vdmUoKSB9LCAyNTApXG4gICAgfVxuXG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ0luYm94JykpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ1RvZGF5JykpXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnV2VlaycpKVxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ01vbnRoJykpXG4gICAgfVxuXG4gICAgc2V0UHJvamVjdChwcm9qZWN0cykge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICAgIH1cblxuICAgIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgfVxuXG4gICAgZmluZFByb2plY3QobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PSBuYW1lKTtcbiAgICB9XG5cbiAgICBkZWxldGVQcm9qZWN0KHRhcmdldE5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5kID0gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PSB0YXJnZXROYW1lKTtcblxuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZSh0aGlzLnByb2plY3RzLmluZGV4T2YocHJvamVjdFRvRGVsZXRlKSwgMSk7XG4gICAgfVxuXG4gICAgUHJpbnQoKSB7XG4gICAgICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiB0aGlzLnByb2plY3RzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LmdldE5hbWUoKSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBzZXRUYXNrcyh0YXNrcykge1xuICAgICAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gICAgfVxuICAgIFxuICAgIGdldFRhc2tzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgICB9XG5cblxufSIsImltcG9ydCBUT0RPIGZyb20gJy4vdG9kby5qcydcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gICAgc3RhdGljIHNhdmVUb2RvTGlzdChkYXRhKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUb2RvTGlzdCgpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBPYmplY3QuYXNzaWduKG5ldyBMaXN0KCksIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9MaXN0JykpKVxuXG4gICAgICAgIHRvZG9MaXN0LnNldFByb2plY3RzKHRvZG9MaXN0LmdldFByb2plY3RzKCkubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpKSlcblxuICAgICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3Quc2V0VGFza3MocHJvamVjdC5nZXRUYXNrcygpLm1hcCgodGFzaykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCB0YXNrKSkpKVxuXG4gICAgICAgIHJldHVybiB0b2RvTGlzdFxuICAgIH1cblxuICAgIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KClcbiAgICAgICAgdG9kb0xpc3QuYWRkUHJvamVjdChwcm9qZWN0KVxuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdClcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9ETyB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBzZXREYXRlKGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB9XG4gICAgXG4gICAgZ2V0RGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgICB9XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IFVJIGZyb20gJy4vbW9kdWxlcy9VSS5qcydcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFVJLmxvYWRIb21lKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9