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
    --input-col: rgba(195, 199, 202, 0.7);
}

:root.light {
    --aside-col: #f5f5f5;
    --ol-col: #e8e8e8;
    --main-col: #FFFFFF;
    --side-text-col: #3B3E41;
    --side-sec-text-col: #606468;
    --sel-col: #DBDEE1;
    --main-text-col: #0B0D11;
    --input-col: rgba(195, 199, 202, 0.7);
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
        --input-col: rgba(84, 84, 84, 0.7);
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

.aside-upper-cont {
    width: 100%;
    display: grid;
    justify-items: center;
    border-bottom: 1px solid var(--ol-col);
    transition: all 0.15s;
    margin-bottom: 1rem;
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

.tasks-container {
    max-height: 70vh;
    overflow-y: scroll;
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
    height: 95%;
    /* overflow-y: scroll; */
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

.check-box {
    padding-top: 0.3rem;
}

.task {
    display: grid;
    grid-template-columns: 22px auto 10rem;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
    cursor: pointer;
    user-select: none;
    color: var(--main-text-col);
    padding: 0.2rem 0;
    padding-right: 1rem;
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

.date-span {
    justify-self: end;
}

.input-error {
    color: red;
}

.project-name {
    user-select: none;
}






`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n@font-face {\n    font-family: \"San Francisco\";\n    font-weight: 400;\n    src: url(\"https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff\");\n  }\n\n:root {\n    --aside-col: #f5f5f5;\n    --ol-col: #e8e8e8;\n    --main-col: #FFFFFF;\n    --side-text-col: #3B3E41;\n    --side-sec-text-col: #606468;\n    --sel-col: #DBDEE1;\n    --main-text-col: #0B0D11;\n    --input-col: rgba(195, 199, 202, 0.7);\n}\n\n:root.light {\n    --aside-col: #f5f5f5;\n    --ol-col: #e8e8e8;\n    --main-col: #FFFFFF;\n    --side-text-col: #3B3E41;\n    --side-sec-text-col: #606468;\n    --sel-col: #DBDEE1;\n    --main-text-col: #0B0D11;\n    --input-col: rgba(195, 199, 202, 0.7);\n}\n\n@media (prefers-color-scheme: dark) {\n    :root.dark {\n        --aside-col: #1c1c1c;\n        --ol-col: #262626;\n        --main-col: #1c1c1c;\n        --side-text-col: #d1d1d1;\n        --side-sec-text-col: #a8a8a8;\n        --sel-col: #2e2e2e;\n        --main-text-col: #f5f5f5;\n        --input-col: rgba(84, 84, 84, 0.7);\n    }\n}\n\nbody {\n    font-family: \"San Francisco\";\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 45px 4fr 33fr;\n    transition: all 0.15s;\n}\n\n/* \nSIDEBAR\n*/\naside {\n    grid-column: 1 / 3;\n    background-color: var(--aside-col);\n    display: grid;\n    grid-template-rows: 4rem 1fr 3rem;\n    justify-items: center;\n    border-right: 1px solid var(--ol-col);\n    overflow-x: hidden;\n    transition: all 0.15s;\n}\n\n.aside-upper-cont {\n    width: 100%;\n    display: grid;\n    justify-items: center;\n    border-bottom: 1px solid var(--ol-col);\n    transition: all 0.15s;\n    margin-bottom: 1rem;\n}\n\n.aside-inner {\n    width: 90%;\n    grid-row: 2 / 3;\n    overflow-y: scroll;\n    display: grid;\n    grid-template-rows: auto;\n    gap: 2rem;\n    overflow-x: hidden;\n}\n\n.aside-top {\n    display: grid;\n    grid-template-rows: min-content min-content min-content;\n    gap: 3rem;\n}\n\n.side-tab {\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 25px 1fr;\n    align-items: center;\n    gap: 0.6rem;\n    padding-left: 0.4rem;\n}\n\n.side-tab:hover {\n    background-color: var(--sel-col);\n    border-radius: 0.3rem;\n}\n\n.side-tab-sel {\n    background-color: var(--sel-col);\n    border-radius: 0.3rem;\n    transition: all 0.15s;\n}\n\n.side-tab svg {\n    padding-top: 0.2rem;\n    cursor: pointer;\n    fill: var(--side-text-col)\n}\n\n.side-tab h1 {\n    color: var(--side-text-col);\n    font-size: 1.2rem;\n    cursor: pointer;\n    padding-bottom: 0.2rem;\n    user-select: none;\n}\n\n.time-container {\n    display: grid;\n    grid-template-rows: min-content;\n    gap: 1rem;\n}\n\n.aside-bottom {\n    width: 100%;\n    grid-row: 3 / 4;\n    display: grid;\n    border-top: 1px solid var(--ol-col);\n    transition: all 0.15s;\n    justify-items: center;\n    align-items: center;\n}\n\n.aside-bottom-inner {\n    width: 90%;\n}\n\n.projects-container {\n    display: grid;\n    grid-template-rows: min-content;\n    gap: 0.5rem;\n}\n\n.new-project, .new-project svg {\n    color: var(--side-sec-text-col);\n    fill: var(--side-sec-text-col);\n}\n\n.new-project {\n    cursor: text;\n}\n\n.name-proj {\n    width: 80%;\n    padding-left: 0.2rem;\n    font-size: 1rem;\n    color: var(--side-sec-text-col);\n    background-color: transparent;\n    border: none;\n}\n\n.name-proj:focus {\n    outline: none\n}\n\nmain {\n    display: grid;\n    align-content: center;\n    grid-template-rows: 3rem 1fr 3rem;\n    background-color: var(--main-col);\n    transition: all 0.15s;\n}\n\n.tasks-container {\n    max-height: 70vh;\n    overflow-y: scroll;\n}\n\n.main-upper {\n    border-bottom: 1px solid var(--ol-col);\n    transition: all 0.15s;\n    display: grid;\n    grid-template-columns: 30px;\n    align-items: center;\n    justify-content: end;\n    padding-right: 10rem;\n    transition: all 0.15s;\n}\n\n.main-upper svg {\n    fill: var(--side-text-col);\n    cursor: pointer;\n    transition: all 0.15s;\n}\n\n.main-inner {\n    width: 60%;\n    height: 95%;\n    /* overflow-y: scroll; */\n    justify-self: center;\n    grid-row: 2 / 3;\n}\n\n.add-to-do {\n    display: grid;\n    grid-template-columns: 30px auto;\n    align-items: center;\n    gap: 0.5rem;\n    margin-top: 2rem;\n    cursor: pointer;\n    user-select: none;\n    color: var(--main-text-col);\n}\n\n.add-to-do svg {\n    fill: var(--main-text-col);\n}\n\n.add-to-do-container:hover {\n    background-color: var(--sel-col);\n    border-radius: 0.3rem;\n}\n\n.check-box {\n    padding-top: 0.3rem;\n}\n\n.task {\n    display: grid;\n    grid-template-columns: 22px auto 10rem;\n    align-items: center;\n    gap: 0.5rem;\n    margin-top: 1.5rem;\n    cursor: pointer;\n    user-select: none;\n    color: var(--main-text-col);\n    padding: 0.2rem 0;\n    padding-right: 1rem;\n}\n\n.task svg {\n    fill: var(--main-text-col);\n}\n\n.task:hover {\n    background-color: var(--sel-col);\n    border-radius: 0.3rem;\n}\n\n.name-task {\n    width: 80%;\n    padding-left: 0.2rem;\n    font-size: 1rem;\n    color: var(--side-sec-text-col);\n    background-color: transparent;\n    border: none;\n}\n\n.name-task:focus {\n    outline: none;\n}\n\n.ind-task {\n    color: var(--side-sec-text-col);\n    cursor: text;\n}\n\n.title {\n    color: var(--main-text-col);\n    font-size: 2.5rem;\n    user-select: none;\n}\n\n.main-bottom {\n    grid-row: 3 / 4;\n    display: grid;\n    grid-template-columns: 6fr 1fr;\n    align-items: center;\n    justify-items: center;\n    border-top: 1px solid var(--ol-col);\n    transition: all 0.15s;\n}\n\n.footer {\n    display: grid;\n    grid-template-columns: auto 30px;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    font-size: 1rem;\n    color: var(--side-text-col);\n    user-select: none;\n}\n\n.footer svg {\n    fill: var(--side-text-col);\n}\n\n.new-project {\n    grid-template-columns: 25px 1fr 20px;\n    padding-right: 0.2rem;\n}\n\n.date-span {\n    justify-self: end;\n}\n\n.input-error {\n    color: red;\n}\n\n.project-name {\n    user-select: none;\n}\n\n\n\n\n\n\n"],"sourceRoot":""}]);
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
        UI.loadProjects();
        UI.openProject(document.querySelector('#Inbox'), true)
    }


    static loadProjects() {
        _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoList().getProjects().forEach((project) => {
            if (
                project.getName() !== 'Inbox' &&
                project.getName() !== 'Today' &&
                project.getName() !== 'Week' &&
                project.getName() !== 'Month' &&
                project.getName() !== 'Anytime'
            ) {
                UI.addProject(project.getName(), true);
            }
        });
    }


    static sidebar() {
        const aside = document.createElement('aside');
        aside.innerHTML = `
        <div class="aside-upper-cont">
        </div>
        <div class="aside-inner">
            <div class="aside-top">
                <div class="side-tab side-tab-sel" id="Inbox">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />
                        </svg>
                    </span>
                    <h1>Inbox</h1>
                </div>
                <div class="time-container">
                    <div class="side-tab" id="Today">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
                            </svg>
                        </span>
                        <h1>Today</h1>
                    </div>
                    <div class="side-tab" id="Week">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" />
                            </svg>
                        </span>
                        <h1>Week</h1>
                    </div>
                    <div class="side-tab" id="Month">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" />
                            </svg>
                        </span>
                        <h1>Month</h1>
                    </div>
                    <div class="side-tab" id="Anytime">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
        const tabs = document.querySelectorAll('.side-tab');
        const addBtn = document.querySelector('.add-project');

        tabs.forEach((tab) => tab.addEventListener('click', () => UI.tab(tab)));
        addBtn.addEventListener('click', () => UI.addProject('New Project'));
    }


    static tab(e) {
        UI.removeTabStyle();
        UI.tabStyle(e);
        UI.removeTab();
        UI.openProject(e, true);
    }


    static removeTabStyle() {
        const tabs = document.querySelectorAll('.side-tab');
        tabs.forEach((tab) => tab.classList.remove('side-tab-sel'));
    }


    static tabStyle(e) {
        e.classList.add('side-tab-sel');
    }

    
    static delProj(proj, sameName = false) {
        proj.parentNode.children[1].style.textDecoration = 'line-through';
        const name = proj.parentNode.id;

        
        setTimeout(() => {
            proj.parentNode.parentNode.remove(); 
            UI.tab(document.getElementById('Inbox'));
        }, 250); 


        _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProject(name, sameName); //Modules
    }


    static addProject(projName, pageLoad = false) {
        const proj = document.createElement('div');
        proj.id = 'projectsCont';
        proj.innerHTML = `
        <div class="side-tab new-project" id="${projName}">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.24,7.76C15.07,6.58 13.53,6 12,6V12L7.76,16.24C10.1,18.58 13.9,18.58 16.24,16.24C18.59,13.9 18.59,10.1 16.24,7.76Z" />
                </svg>
            </span>
            <span class="project-name">${projName}</span>
            <div class="del">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z" />
                </svg>
            </div>
        </div>`;
    document.querySelector('.projects-container').appendChild(proj);

    
    UI.initProject(projName, pageLoad);

    if(projName == 'New Project' && !pageLoad) {
        _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]('New Project')); //Modules
        UI.openProject(proj.firstElementChild); 
    }
    }


    static initProject(projName, pageLoad = false) {
        const project = document.querySelectorAll('.new-project')[document.querySelectorAll('.new-project').length - 1];
        project.addEventListener('click', () => UI.tab(project));

        if (projName == 'New Project' && !pageLoad) {
            project.classList.add('side-tab-sel');
        }

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

            const oldName = input.innerHTML.trim()

            input.parentNode.replaceChild(inputField, input);

            inputField.focus();

            inputField.addEventListener('input', () => UI.checkProjName(inputField, inputField.value.trim(), oldName, false, false));


            inputField.addEventListener('blur', () => { 
                
                if (inputField.value === '') {
                    inputField.value = 'New Project';
                    inputField.parentNode.id = 'New Project'
                } else {
                    inputField.parentNode.id = inputField.value.trim();
                }

                const name = input.innerHTML.trim();
                

                _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].renameProject(input.innerHTML.trim(), inputField.value.trim()); //Modules 
                
                input.innerHTML = inputField.value.trim();
                document.querySelector('.title').innerHTML = inputField.value.trim();
                inputField.parentNode.replaceChild(input, inputField);

                UI.checkProjName(input, inputField.value.trim(), name, true, inputField.classList.contains('input-error'))
            });
        }
    }


    static checkProjName(projDOM, name, oldName, isBlur, okDel) {
        const list = _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoList();
        let isSame = false;

        list.getProjects().forEach((proj) => {
            if (isBlur) {
                if (okDel && proj.getName() == name) {
                    projDOM.classList.add('input-error');
                    UI.delProj(projDOM.parentNode.children[2], true);
                }
            } else {
                if (proj.getName() == name && name != oldName) {
                    isSame = true;
                    projDOM.classList.add('input-error');
                } else if (!isSame) {
                    projDOM.classList.remove('input-error');
                    isSame = false;
                }
            }
        });
    }


    static main() {
        const main = document.createElement('main');
        main.innerHTML = `
        <div class="main-upper">
            <div class="mode-tog">
                <svg class="mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
                        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <h3>Add Task</h3>
                </div>
            </div>
        </div>
        <div class="main-bottom">
            <div class="footer">
                <span>Copyright © 2023 Declankb</span>
                <a href="https://github.com/DeclanKBrown" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                </a>
            </div>
        </div>
        `;
        document.body.appendChild(main);
        UI.initMainButtons();
    }


    static initMainButtons() {
        const addTask = document.querySelector('.add-to-do');
        const toggleMode = document.querySelector('.mode-tog');

        addTask.addEventListener('click', () => UI.addTask('New Task'));
        toggleMode.addEventListener('click', UI.mode)
    }


    static removeTab() {
        document.querySelector('.title').innerHTML = '';
        document.querySelector('.tasks-container').innerHTML = '';
    }


    static openProject(Tab, pageLoad = false) {
        document.querySelector('.title').innerHTML = Tab.id;
        
        const proj = _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoList().getProjects().find((project) => project.getName() === Tab.id);
        if (proj !== undefined) {
            proj.getTasks().forEach((task) => UI.addTask(task.getName(), task.getDate(), pageLoad));
        }
    }


    static mode() {
        const root = document.documentElement;
        const newTheme = root.className === 'dark' ? 'light' : 'dark';
        root.className = newTheme;

        const icon = document.querySelector('.mode-tog')
        if (newTheme === 'dark') {
            icon.innerHTML = '<svg class="mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2A10 10 0 1 1 2 12A10 10 0 0 1 12 2Z" /></svg>'
        } else {
            icon.innerHTML = '<svg class="mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" /></svg>';
        }
    }


    static addTask(name, date, pageLoad) {
        const taskDOM = document.createElement('div');
        taskDOM.id = name;
        taskDOM.classList.add('task');
        taskDOM.innerHTML = `
        <div class="check-box unchecked">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" />
            </svg>
        </div>
        <h3 class="ind-task">${name}</h3>
        <span class="date-span">${date}</span>`;
        document.querySelector('.tasks-container').appendChild(taskDOM);

        UI.initTask(taskDOM);

        if (name == 'New Task' && !pageLoad) {
            const projName = document.querySelector('.title').innerHTML;
            _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(new _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"]('New Task'), projName); //Modules
    
            UI.nameTask(taskDOM);
        }
    }


    static nameTask(taskDOM) {
        const textbox = taskDOM.children[1];
        
        if (!textbox.classList.contains('name-task')) {

            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.classList.add('name-task');
            if (textbox.innerHTML !== 'New Task') {
                inputField.value = textbox.innerHTML;
            };

            const oldName = textbox.innerHTML.trim() //
            const projName = document.querySelector('.title').innerHTML //

            textbox.parentNode.replaceChild(inputField, textbox);

            inputField.focus();

            inputField.addEventListener('input', () => UI.checkTaskName(inputField, inputField.value.trim(), oldName, projName, false, false)) //

            inputField.addEventListener('blur', function() {
                if (inputField.value === '') {
                    inputField.value = 'New Task';
                } 

                console.log(textbox.innerHTML)
                console.log(inputField.value)
                console.log(projName)
                _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].renameTask(textbox.innerHTML.trim(), inputField.value.trim(), projName); // Modules

                const name = textbox.innerHTML.trim(); //

                textbox.innerHTML = inputField.value.trim();
                taskDOM.id = inputField.value.trim();
        
                taskDOM.replaceChild(textbox, inputField);

                UI.checkTaskName(textbox, inputField.value.trim(), name, projName, true, inputField.classList.contains('input-error')) //
            });
        }
    }

    static checkTaskName(inputField, name, oldName, projName, isBlur, okDel) {
        const list = _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoList();
        let isSame = false;

        list.getProjects().forEach((proj) => {
            if (proj.getName() == projName) {
                proj.getTasks().forEach(task => {
                    if (isBlur) {
                        if (okDel && task.getName() == name) {
                            console.log(name)
                            inputField.classList.add('input-error');
                            UI.checkTask(inputField.parentNode, true); //fixme
                            okDel = false;
                        }
                    } else {
                        if (task.getName() == name && name != oldName) {
                            isSame = true;
                            inputField.classList.add('input-error');
                        } else if (!isSame) {
                            inputField.classList.remove('input-error');
                            isSame = false;
                        }
                    }
                })
            }
        });
    }


    static initTask(task) {
        task.children[1].addEventListener('click', () => UI.nameTask(task));
        task.firstElementChild.addEventListener('click', () => UI.checkTask(task, false))
        task.lastElementChild.addEventListener('click', () => UI.dateTask(task))
    }


    static dateTask(taskDOM) {
        const dateSpan = taskDOM.lastElementChild;
        
        const inputField = document.createElement('input');
        inputField.type = 'date';
        inputField.classList.add('date-task');
        if (dateSpan.innerHTML !== 'No Date') {
            inputField.value = dateSpan.innerHTML;
        };

        dateSpan.parentNode.replaceChild(inputField, dateSpan);

        inputField.focus();

        inputField.addEventListener('blur', function() {
            if (inputField.value === '') {
                inputField.value = 'No Date';
            } 

            //Formatting Date
            const unformattedDate = inputField.value;
            const formattedDate = unformattedDate.split('-')[2] + '-' + unformattedDate.split('-')[1] + '-' + unformattedDate.split('-')[0];
            
            const projName = document.querySelector('.title').innerHTML;
            const taskName = inputField.parentNode.children[1].innerHTML;

            _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].dateTask(formattedDate, taskName, projName); // Modules
            

            dateSpan.innerHTML = formattedDate;
            taskDOM.id = formattedDate;
    
            taskDOM.replaceChild(dateSpan, inputField);
        });
    } 


    static checkTask(task, sameName = false) {
        const name = task.id;

        const checked = document.createElement('div');
        checked.classList.add('checked')
        checked.classList.add('check-box')
        checked.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M17,17H7V7H17V17Z" /></svg>'

        task.firstElementChild.replaceChild(checked, task.firstElementChild.firstElementChild)

        task.children[1].style.textDecoration = 'line-through';

        setTimeout(() => { task.remove() }, 250)

        const projName = document.querySelector('.title').innerHTML;
        _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].deleteTask(name, projName, sameName)
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
        this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Today'));
        this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Week'));
        this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Month'));
        this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Anytime'));
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

    deleteProject(targetName, sameName) {
        if (sameName) {
            const indexToDelete = this.projects.findIndex((project) => project.getName() === targetName);

            if (indexToDelete !== -1) {
                const secondIndexToDelete = this.projects.findIndex((project, index) => index !== indexToDelete && project.getName() === targetName);
            
                if (secondIndexToDelete !== -1) {
                    this.projects.splice(secondIndexToDelete, 1);
                }
            }
        } else {
            const projectToDelete = this.projects.find((project) => project.getName() == targetName);
    
            this.projects.splice(this.projects.indexOf(projectToDelete), 1);
        }
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

    dateTask(date, taskName, projName) {
        const proj = this.projects.find((project) => project.getName() == projName);

        proj.dateTask(date, taskName)
    }

    deleteTask(task, projName, sameName) {
        const proj = this.projects.find((project) => project.getName() == projName);

        proj.deleteTask(task, sameName)
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

    dateTask(date, name) {
        const TODO = this.tasks.find((task) => task.getName() == name);
        TODO.setDate(date);
    }

    deleteTask(name, sameName) {
        if (sameName) {
            const firstTODOIndex = this.tasks.findIndex((task) => task.getName() === name);

            if (firstTODOIndex !== -1) {
                const secondTODOIndex = this.tasks.findIndex((task, index) => index !== firstTODOIndex && task.getName() === name);
            
                if (secondTODOIndex !== -1) {
                    this.tasks.splice(secondTODOIndex, 1);
                }
            }
        } else {
            const TODO = this.tasks.find((task) => task.getName() == name);
    
            this.tasks.splice(this.tasks.indexOf(TODO), 1);
        }
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

        todoList.getProjects().forEach((project) => project.setTasks(project.getTasks().map((todo) => Object.assign(new _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"](), todo))))

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

    static deleteProject(name, sameName) {
        const todoList = Storage.getTodoList();
        todoList.deleteProject(name, sameName);
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
    
    static dateTask(date, taskName, projName) {
        const todoList = Storage.getTodoList();
        todoList.dateTask(date, taskName, projName);
        Storage.saveTodoList(todoList);
    }

    static deleteTask(task, projName, sameName) {
        const todoList = Storage.getTodoList();
        todoList.deleteTask(task, projName, sameName);
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

    constructor(name, date = 'No Date') {
        this.name = name;
        this.date= date;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setDate(date) {
        this.date = date;
    }
    
    getDate() {
        return this.date;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FBT0EsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFL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QTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ1k7O0FBRWhDLDhDQUE4QyxzREFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9saXN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJTYW4gRnJhbmNpc2NvXCI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vYXBwbGVzb2NpYWwuczMuYW1hem9uYXdzLmNvbS9hc3NldHMvc3R5bGVzL2ZvbnRzL3NhbmZyYW5jaXNjby9zYW5mcmFuY2lzY29kaXNwbGF5LXJlZ3VsYXItd2ViZm9udC53b2ZmXCIpO1xuICB9XG5cbjpyb290IHtcbiAgICAtLWFzaWRlLWNvbDogI2Y1ZjVmNTtcbiAgICAtLW9sLWNvbDogI2U4ZThlODtcbiAgICAtLW1haW4tY29sOiAjRkZGRkZGO1xuICAgIC0tc2lkZS10ZXh0LWNvbDogIzNCM0U0MTtcbiAgICAtLXNpZGUtc2VjLXRleHQtY29sOiAjNjA2NDY4O1xuICAgIC0tc2VsLWNvbDogI0RCREVFMTtcbiAgICAtLW1haW4tdGV4dC1jb2w6ICMwQjBEMTE7XG4gICAgLS1pbnB1dC1jb2w6IHJnYmEoMTk1LCAxOTksIDIwMiwgMC43KTtcbn1cblxuOnJvb3QubGlnaHQge1xuICAgIC0tYXNpZGUtY29sOiAjZjVmNWY1O1xuICAgIC0tb2wtY29sOiAjZThlOGU4O1xuICAgIC0tbWFpbi1jb2w6ICNGRkZGRkY7XG4gICAgLS1zaWRlLXRleHQtY29sOiAjM0IzRTQxO1xuICAgIC0tc2lkZS1zZWMtdGV4dC1jb2w6ICM2MDY0Njg7XG4gICAgLS1zZWwtY29sOiAjREJERUUxO1xuICAgIC0tbWFpbi10ZXh0LWNvbDogIzBCMEQxMTtcbiAgICAtLWlucHV0LWNvbDogcmdiYSgxOTUsIDE5OSwgMjAyLCAwLjcpO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgOnJvb3QuZGFyayB7XG4gICAgICAgIC0tYXNpZGUtY29sOiAjMWMxYzFjO1xuICAgICAgICAtLW9sLWNvbDogIzI2MjYyNjtcbiAgICAgICAgLS1tYWluLWNvbDogIzFjMWMxYztcbiAgICAgICAgLS1zaWRlLXRleHQtY29sOiAjZDFkMWQxO1xuICAgICAgICAtLXNpZGUtc2VjLXRleHQtY29sOiAjYThhOGE4O1xuICAgICAgICAtLXNlbC1jb2w6ICMyZTJlMmU7XG4gICAgICAgIC0tbWFpbi10ZXh0LWNvbDogI2Y1ZjVmNTtcbiAgICAgICAgLS1pbnB1dC1jb2w6IHJnYmEoODQsIDg0LCA4NCwgMC43KTtcbiAgICB9XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBcIlNhbiBGcmFuY2lzY29cIjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDVweCA0ZnIgMzNmcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG5cbi8qIFxuU0lERUJBUlxuKi9cbmFzaWRlIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXNpZGUtY29sKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSAxZnIgM3JlbTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tb2wtY29sKTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuXG4uYXNpZGUtdXBwZXItY29udCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW9sLWNvbCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5hc2lkZS1pbm5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgIGdhcDogMnJlbTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5hc2lkZS10b3Age1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICBnYXA6IDNyZW07XG59XG5cbi5zaWRlLXRhYiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC42cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMC40cmVtO1xufVxuXG4uc2lkZS10YWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbC1jb2wpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbn1cblxuLnNpZGUtdGFiLXNlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsLWNvbCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbn1cblxuLnNpZGUtdGFiIHN2ZyB7XG4gICAgcGFkZGluZy10b3A6IDAuMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmlsbDogdmFyKC0tc2lkZS10ZXh0LWNvbClcbn1cblxuLnNpZGUtdGFiIGgxIHtcbiAgICBjb2xvcjogdmFyKC0tc2lkZS10ZXh0LWNvbCk7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi50aW1lLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmFzaWRlLWJvdHRvbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLW9sLWNvbCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXNpZGUtYm90dG9tLWlubmVyIHtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbi5uZXctcHJvamVjdCwgLm5ldy1wcm9qZWN0IHN2ZyB7XG4gICAgY29sb3I6IHZhcigtLXNpZGUtc2VjLXRleHQtY29sKTtcbiAgICBmaWxsOiB2YXIoLS1zaWRlLXNlYy10ZXh0LWNvbCk7XG59XG5cbi5uZXctcHJvamVjdCB7XG4gICAgY3Vyc29yOiB0ZXh0O1xufVxuXG4ubmFtZS1wcm9qIHtcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1zZWMtdGV4dC1jb2wpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLm5hbWUtcHJvajpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZVxufVxuXG5tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gMWZyIDNyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2wpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbn1cblxuLnRhc2tzLWNvbnRhaW5lciB7XG4gICAgbWF4LWhlaWdodDogNzB2aDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5tYWluLXVwcGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tb2wtY29sKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG5cbi5tYWluLXVwcGVyIHN2ZyB7XG4gICAgZmlsbDogdmFyKC0tc2lkZS10ZXh0LWNvbCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbn1cblxuLm1haW4taW5uZXIge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiA5NSU7XG4gICAgLyogb3ZlcmZsb3cteTogc2Nyb2xsOyAqL1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbn1cblxuLmFkZC10by1kbyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggYXV0bztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sKTtcbn1cblxuLmFkZC10by1kbyBzdmcge1xuICAgIGZpbGw6IHZhcigtLW1haW4tdGV4dC1jb2wpO1xufVxuXG4uYWRkLXRvLWRvLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsLWNvbCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xufVxuXG4uY2hlY2stYm94IHtcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xufVxuXG4udGFzayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIycHggYXV0byAxMHJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2wpO1xuICAgIHBhZGRpbmc6IDAuMnJlbSAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbi50YXNrIHN2ZyB7XG4gICAgZmlsbDogdmFyKC0tbWFpbi10ZXh0LWNvbCk7XG59XG5cbi50YXNrOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWwtY29sKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG59XG5cbi5uYW1lLXRhc2sge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXNlYy10ZXh0LWNvbCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ubmFtZS10YXNrOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uaW5kLXRhc2sge1xuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXNlYy10ZXh0LWNvbCk7XG4gICAgY3Vyc29yOiB0ZXh0O1xufVxuXG4udGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sKTtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm1haW4tYm90dG9tIHtcbiAgICBncmlkLXJvdzogMyAvIDQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDZmciAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLW9sLWNvbCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuXG4uZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAzMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tc2lkZS10ZXh0LWNvbCk7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5mb290ZXIgc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1zaWRlLXRleHQtY29sKTtcbn1cblxuLm5ldy1wcm9qZWN0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHggMWZyIDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMC4ycmVtO1xufVxuXG4uZGF0ZS1zcGFuIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLmlucHV0LWVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4ucHJvamVjdC1uYW1lIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuXG5cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQiwwSEFBMEg7RUFDNUg7O0FBRUY7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJO1FBQ0ksb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsd0JBQXdCO1FBQ3hCLDRCQUE0QjtRQUM1QixrQkFBa0I7UUFDbEIsd0JBQXdCO1FBQ3hCLGtDQUFrQztJQUN0QztBQUNKOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxxQkFBcUI7QUFDekI7O0FBRUE7O0NBRUM7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxxQkFBcUI7SUFDckIscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQ0FBc0M7SUFDdEMs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Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIlNhbiBGcmFuY2lzY29cXFwiO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybChcXFwiaHR0cHM6Ly9hcHBsZXNvY2lhbC5zMy5hbWF6b25hd3MuY29tL2Fzc2V0cy9zdHlsZXMvZm9udHMvc2FuZnJhbmNpc2NvL3NhbmZyYW5jaXNjb2Rpc3BsYXktcmVndWxhci13ZWJmb250LndvZmZcXFwiKTtcXG4gIH1cXG5cXG46cm9vdCB7XFxuICAgIC0tYXNpZGUtY29sOiAjZjVmNWY1O1xcbiAgICAtLW9sLWNvbDogI2U4ZThlODtcXG4gICAgLS1tYWluLWNvbDogI0ZGRkZGRjtcXG4gICAgLS1zaWRlLXRleHQtY29sOiAjM0IzRTQxO1xcbiAgICAtLXNpZGUtc2VjLXRleHQtY29sOiAjNjA2NDY4O1xcbiAgICAtLXNlbC1jb2w6ICNEQkRFRTE7XFxuICAgIC0tbWFpbi10ZXh0LWNvbDogIzBCMEQxMTtcXG4gICAgLS1pbnB1dC1jb2w6IHJnYmEoMTk1LCAxOTksIDIwMiwgMC43KTtcXG59XFxuXFxuOnJvb3QubGlnaHQge1xcbiAgICAtLWFzaWRlLWNvbDogI2Y1ZjVmNTtcXG4gICAgLS1vbC1jb2w6ICNlOGU4ZTg7XFxuICAgIC0tbWFpbi1jb2w6ICNGRkZGRkY7XFxuICAgIC0tc2lkZS10ZXh0LWNvbDogIzNCM0U0MTtcXG4gICAgLS1zaWRlLXNlYy10ZXh0LWNvbDogIzYwNjQ2ODtcXG4gICAgLS1zZWwtY29sOiAjREJERUUxO1xcbiAgICAtLW1haW4tdGV4dC1jb2w6ICMwQjBEMTE7XFxuICAgIC0taW5wdXQtY29sOiByZ2JhKDE5NSwgMTk5LCAyMDIsIDAuNyk7XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4gICAgOnJvb3QuZGFyayB7XFxuICAgICAgICAtLWFzaWRlLWNvbDogIzFjMWMxYztcXG4gICAgICAgIC0tb2wtY29sOiAjMjYyNjI2O1xcbiAgICAgICAgLS1tYWluLWNvbDogIzFjMWMxYztcXG4gICAgICAgIC0tc2lkZS10ZXh0LWNvbDogI2QxZDFkMTtcXG4gICAgICAgIC0tc2lkZS1zZWMtdGV4dC1jb2w6ICNhOGE4YTg7XFxuICAgICAgICAtLXNlbC1jb2w6ICMyZTJlMmU7XFxuICAgICAgICAtLW1haW4tdGV4dC1jb2w6ICNmNWY1ZjU7XFxuICAgICAgICAtLWlucHV0LWNvbDogcmdiYSg4NCwgODQsIDg0LCAwLjcpO1xcbiAgICB9XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogXFxcIlNhbiBGcmFuY2lzY29cXFwiO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDVweCA0ZnIgMzNmcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcbn1cXG5cXG4vKiBcXG5TSURFQkFSXFxuKi9cXG5hc2lkZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXNpZGUtY29sKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDFmciAzcmVtO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLW9sLWNvbCk7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcbn1cXG5cXG4uYXNpZGUtdXBwZXItY29udCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1vbC1jb2wpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5hc2lkZS1pbm5lciB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdhcDogMnJlbTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4uYXNpZGUtdG9wIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4uc2lkZS10YWIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC42cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNHJlbTtcXG59XFxuXFxuLnNpZGUtdGFiOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsLWNvbCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLnNpZGUtdGFiLXNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbC1jb2wpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXG59XFxuXFxuLnNpZGUtdGFiIHN2ZyB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmlsbDogdmFyKC0tc2lkZS10ZXh0LWNvbClcXG59XFxuXFxuLnNpZGUtdGFiIGgxIHtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtdGV4dC1jb2wpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRpbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYXNpZGUtYm90dG9tIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLW9sLWNvbCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXNpZGUtYm90dG9tLWlubmVyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ubmV3LXByb2plY3QsIC5uZXctcHJvamVjdCBzdmcge1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1zZWMtdGV4dC1jb2wpO1xcbiAgICBmaWxsOiB2YXIoLS1zaWRlLXNlYy10ZXh0LWNvbCk7XFxufVxcblxcbi5uZXctcHJvamVjdCB7XFxuICAgIGN1cnNvcjogdGV4dDtcXG59XFxuXFxuLm5hbWUtcHJvaiB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXNlYy10ZXh0LWNvbCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5uYW1lLXByb2o6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lXFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAxZnIgM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2wpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XFxufVxcblxcbi50YXNrcy1jb250YWluZXIge1xcbiAgICBtYXgtaGVpZ2h0OiA3MHZoO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5tYWluLXVwcGVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW9sLWNvbCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgcGFkZGluZy1yaWdodDogMTByZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXG59XFxuXFxuLm1haW4tdXBwZXIgc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tc2lkZS10ZXh0LWNvbCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcbn1cXG5cXG4ubWFpbi1pbm5lciB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogOTUlO1xcbiAgICAvKiBvdmVyZmxvdy15OiBzY3JvbGw7ICovXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5hZGQtdG8tZG8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sKTtcXG59XFxuXFxuLmFkZC10by1kbyBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1tYWluLXRleHQtY29sKTtcXG59XFxuXFxuLmFkZC10by1kby1jb250YWluZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWwtY29sKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4uY2hlY2stYm94IHtcXG4gICAgcGFkZGluZy10b3A6IDAuM3JlbTtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIycHggYXV0byAxMHJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2wpO1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMDtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuXFxuLnRhc2sgc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tbWFpbi10ZXh0LWNvbCk7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsLWNvbCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLm5hbWUtdGFzayB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXNlYy10ZXh0LWNvbCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5uYW1lLXRhc2s6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uaW5kLXRhc2sge1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1zZWMtdGV4dC1jb2wpO1xcbiAgICBjdXJzb3I6IHRleHQ7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sKTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWFpbi1ib3R0b20ge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tb2wtY29sKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDMwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtdGV4dC1jb2wpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmZvb3RlciBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1zaWRlLXRleHQtY29sKTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmciAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07XFxufVxcblxcbi5kYXRlLXNwYW4ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmlucHV0LWVycm9yIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFRPRE8gZnJvbSAnLi90b2RvLmpzJ1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJ1xuaW1wb3J0IHsgZm9ybWF0LCBwYXJzZSwgYWRkRGF5cyB9IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuXG5cbiAgICBzdGF0aWMgbG9hZEhvbWUoKSB7XG4gICAgICAgIFVJLnNpZGViYXIoKTtcbiAgICAgICAgVUkubWFpbigpO1xuICAgICAgICBVSS5sb2FkUHJvamVjdHMoKTtcbiAgICAgICAgVUkub3BlblByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0luYm94JyksIHRydWUpXG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbG9hZFByb2plY3RzKCkge1xuICAgICAgICBTdG9yYWdlLmdldFRvZG9MaXN0KCkuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcHJvamVjdC5nZXROYW1lKCkgIT09ICdJbmJveCcgJiZcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldE5hbWUoKSAhPT0gJ1RvZGF5JyAmJlxuICAgICAgICAgICAgICAgIHByb2plY3QuZ2V0TmFtZSgpICE9PSAnV2VlaycgJiZcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldE5hbWUoKSAhPT0gJ01vbnRoJyAmJlxuICAgICAgICAgICAgICAgIHByb2plY3QuZ2V0TmFtZSgpICE9PSAnQW55dGltZSdcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIFVJLmFkZFByb2plY3QocHJvamVjdC5nZXROYW1lKCksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBzaWRlYmFyKCkge1xuICAgICAgICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG4gICAgICAgIGFzaWRlLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFzaWRlLXVwcGVyLWNvbnRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhc2lkZS1pbm5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFzaWRlLXRvcFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLXRhYiBzaWRlLXRhYi1zZWxcIiBpZD1cIkluYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTksMTVIMTVBMywzIDAgMCwxIDEyLDE4QTMsMyAwIDAsMSA5LDE1SDVWNUgxOU0xOSwzSDVDMy44OSwzIDMsMy45IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWNUEyLDIgMCAwLDAgMTksM1pcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkluYm94PC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtdGFiXCIgaWQ9XCJUb2RheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLDE1LjM5TDguMjQsMTcuNjZMOS4yMywxMy4zOEw1LjkxLDEwLjVMMTAuMjksMTAuMTNMMTIsNi4wOUwxMy43MSwxMC4xM0wxOC4wOSwxMC41TDE0Ljc3LDEzLjM4TDE1Ljc2LDE3LjY2TTIyLDkuMjRMMTQuODEsOC42M0wxMiwyTDkuMTksOC42M0wyLDkuMjRMNy40NSwxMy45N0w1LjgyLDIxTDEyLDE3LjI3TDE4LjE4LDIxTDE2LjU0LDEzLjk3TDIyLDkuMjRaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Ub2RheTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS10YWJcIiBpZD1cIldlZWtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05LDEwSDdWMTJIOVYxME0xMywxMEgxMVYxMkgxM1YxME0xNywxMEgxNVYxMkgxN1YxME0xOSwzSDE4VjFIMTZWM0g4VjFINlYzSDVDMy44OSwzIDMsMy45IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWNUEyLDIgMCAwLDAgMTksM00xOSwxOUg1VjhIMTlWMTlaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5XZWVrPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLXRhYlwiIGlkPVwiTW9udGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05LDEwVjEySDdWMTBIOU0xMywxMFYxMkgxMVYxMEgxM00xNywxMFYxMkgxNVYxMEgxN00xOSwzQTIsMiAwIDAsMSAyMSw1VjE5QTIsMiAwIDAsMSAxOSwyMUg1QzMuODksMjEgMywyMC4xIDMsMTlWNUEyLDIgMCAwLDEgNSwzSDZWMUg4VjNIMTZWMUgxOFYzSDE5TTE5LDE5VjhINVYxOUgxOU05LDE0VjE2SDdWMTRIOU0xMywxNFYxNkgxMVYxNEgxM00xNywxNFYxNkgxNVYxNEgxN1pcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk1vbnRoPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLXRhYlwiIGlkPVwiQW55dGltZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0LDEwVjQuNUwxOS41LDEwTTUsM0MzLjg5LDMgMywzLjkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVY5TDE1LDNINVpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkFueXRpbWU8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLXRhYlwiIGlkPVwiUHJvamVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiwzQzcuNTgsMyA0LDQuNzkgNCw3QzQsOS4yMSA3LjU4LDExIDEyLDExQzE2LjQyLDExIDIwLDkuMjEgMjAsN0MyMCw0Ljc5IDE2LjQyLDMgMTIsM000LDlWMTJDNCwxNC4yMSA3LjU4LDE2IDEyLDE2QzE2LjQyLDE2IDIwLDE0LjIxIDIwLDEyVjlDMjAsMTEuMjEgMTYuNDIsMTMgMTIsMTNDNy41OCwxMyA0LDExLjIxIDQsOU00LDE0VjE3QzQsMTkuMjEgNy41OCwyMSAxMiwyMUMxNi40MiwyMSAyMCwxOS4yMSAyMCwxN1YxNEMyMCwxNi4yMSAxNi40MiwxOCAxMiwxOEM3LjU4LDE4IDQsMTYuMjEgNCwxNFpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlByb2plY3RzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhc2lkZS1ib3R0b21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhc2lkZS1ib3R0b20taW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS10YWIgYWRkLXByb2plY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOSwxM0gxM1YxOUgxMVYxM0g1VjExSDExVjVIMTNWMTFIMTlWMTNaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkFkZCBQcm9qZWN0PC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhc2lkZSk7XG4gICAgVUkuaW5pdEJ1dHRvbnMoKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBpbml0QnV0dG9ucygpIHtcbiAgICAgICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlLXRhYicpO1xuICAgICAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcblxuICAgICAgICB0YWJzLmZvckVhY2goKHRhYikgPT4gdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkudGFiKHRhYikpKTtcbiAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkuYWRkUHJvamVjdCgnTmV3IFByb2plY3QnKSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgdGFiKGUpIHtcbiAgICAgICAgVUkucmVtb3ZlVGFiU3R5bGUoKTtcbiAgICAgICAgVUkudGFiU3R5bGUoZSk7XG4gICAgICAgIFVJLnJlbW92ZVRhYigpO1xuICAgICAgICBVSS5vcGVuUHJvamVjdChlLCB0cnVlKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyByZW1vdmVUYWJTdHlsZSgpIHtcbiAgICAgICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlLXRhYicpO1xuICAgICAgICB0YWJzLmZvckVhY2goKHRhYikgPT4gdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGUtdGFiLXNlbCcpKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyB0YWJTdHlsZShlKSB7XG4gICAgICAgIGUuY2xhc3NMaXN0LmFkZCgnc2lkZS10YWItc2VsJyk7XG4gICAgfVxuXG4gICAgXG4gICAgc3RhdGljIGRlbFByb2oocHJvaiwgc2FtZU5hbWUgPSBmYWxzZSkge1xuICAgICAgICBwcm9qLnBhcmVudE5vZGUuY2hpbGRyZW5bMV0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgICAgY29uc3QgbmFtZSA9IHByb2oucGFyZW50Tm9kZS5pZDtcblxuICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBwcm9qLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmUoKTsgXG4gICAgICAgICAgICBVSS50YWIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0luYm94JykpO1xuICAgICAgICB9LCAyNTApOyBcblxuXG4gICAgICAgIFN0b3JhZ2UuZGVsZXRlUHJvamVjdChuYW1lLCBzYW1lTmFtZSk7IC8vTW9kdWxlc1xuICAgIH1cblxuXG4gICAgc3RhdGljIGFkZFByb2plY3QocHJvak5hbWUsIHBhZ2VMb2FkID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qLmlkID0gJ3Byb2plY3RzQ29udCc7XG4gICAgICAgIHByb2ouaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS10YWIgbmV3LXByb2plY3RcIiBpZD1cIiR7cHJvak5hbWV9XCI+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIsMjBBOCw4IDAgMCwxIDQsMTJBOCw4IDAgMCwxIDEyLDRBOCw4IDAgMCwxIDIwLDEyQTgsOCAwIDAsMSAxMiwyME0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMk0xNi4yNCw3Ljc2QzE1LjA3LDYuNTggMTMuNTMsNiAxMiw2VjEyTDcuNzYsMTYuMjRDMTAuMSwxOC41OCAxMy45LDE4LjU4IDE2LjI0LDE2LjI0QzE4LjU5LDEzLjkgMTguNTksMTAuMSAxNi4yNCw3Ljc2WlwiIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3QtbmFtZVwiPiR7cHJvak5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbFwiPlxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiwyQzE3LjUzLDIgMjIsNi40NyAyMiwxMkMyMiwxNy41MyAxNy41MywyMiAxMiwyMkM2LjQ3LDIyIDIsMTcuNTMgMiwxMkMyLDYuNDcgNi40NywyIDEyLDJNMTcsN0gxNC41TDEzLjUsNkgxMC41TDkuNSw3SDdWOUgxN1Y3TTksMThIMTVBMSwxIDAgMCwwIDE2LDE3VjEwSDhWMTdBMSwxIDAgMCwwIDksMThaXCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKS5hcHBlbmRDaGlsZChwcm9qKTtcblxuICAgIFxuICAgIFVJLmluaXRQcm9qZWN0KHByb2pOYW1lLCBwYWdlTG9hZCk7XG5cbiAgICBpZihwcm9qTmFtZSA9PSAnTmV3IFByb2plY3QnICYmICFwYWdlTG9hZCkge1xuICAgICAgICBTdG9yYWdlLmFkZFByb2plY3QobmV3IFByb2plY3QoJ05ldyBQcm9qZWN0JykpOyAvL01vZHVsZXNcbiAgICAgICAgVUkub3BlblByb2plY3QocHJvai5maXJzdEVsZW1lbnRDaGlsZCk7IFxuICAgIH1cbiAgICB9XG5cblxuICAgIHN0YXRpYyBpbml0UHJvamVjdChwcm9qTmFtZSwgcGFnZUxvYWQgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ldy1wcm9qZWN0JylbZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ldy1wcm9qZWN0JykubGVuZ3RoIC0gMV07XG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS50YWIocHJvamVjdCkpO1xuXG4gICAgICAgIGlmIChwcm9qTmFtZSA9PSAnTmV3IFByb2plY3QnICYmICFwYWdlTG9hZCkge1xuICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlLXRhYi1zZWwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1uYW1lJylbZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtbmFtZScpLmxlbmd0aCAtIDFdO1xuICAgICAgICB0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkucmVuYW1lUHJvamVjdCh0ZXh0KSk7XG5cbiAgICAgICAgY29uc3QgZGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbCcpW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWwnKS5sZW5ndGggLSAxXTtcbiAgICAgICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkuZGVsUHJvaihkZWwpKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyByZW5hbWVQcm9qZWN0KGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnc2lkZS10YWItc2VsJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICBpbnB1dEZpZWxkLnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoJ25hbWUtcHJvaicpO1xuICAgICAgICAgICAgaWYgKGlucHV0LmlubmVySFRNTCAhPT0gJ05ldyBQcm9qZWN0Jykge1xuICAgICAgICAgICAgICAgIGlucHV0RmllbGQudmFsdWUgPSBpbnB1dC5pbm5lckhUTUw7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBvbGROYW1lID0gaW5wdXQuaW5uZXJIVE1MLnRyaW0oKVxuXG4gICAgICAgICAgICBpbnB1dC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChpbnB1dEZpZWxkLCBpbnB1dCk7XG5cbiAgICAgICAgICAgIGlucHV0RmllbGQuZm9jdXMoKTtcblxuICAgICAgICAgICAgaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IFVJLmNoZWNrUHJvak5hbWUoaW5wdXRGaWVsZCwgaW5wdXRGaWVsZC52YWx1ZS50cmltKCksIG9sZE5hbWUsIGZhbHNlLCBmYWxzZSkpO1xuXG5cbiAgICAgICAgICAgIGlucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0RmllbGQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0RmllbGQudmFsdWUgPSAnTmV3IFByb2plY3QnO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnBhcmVudE5vZGUuaWQgPSAnTmV3IFByb2plY3QnXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRGaWVsZC5wYXJlbnROb2RlLmlkID0gaW5wdXRGaWVsZC52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGlucHV0LmlubmVySFRNTC50cmltKCk7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBTdG9yYWdlLnJlbmFtZVByb2plY3QoaW5wdXQuaW5uZXJIVE1MLnRyaW0oKSwgaW5wdXRGaWVsZC52YWx1ZS50cmltKCkpOyAvL01vZHVsZXMgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW5wdXQuaW5uZXJIVE1MID0gaW5wdXRGaWVsZC52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykuaW5uZXJIVE1MID0gaW5wdXRGaWVsZC52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgaW5wdXRGaWVsZC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChpbnB1dCwgaW5wdXRGaWVsZCk7XG5cbiAgICAgICAgICAgICAgICBVSS5jaGVja1Byb2pOYW1lKGlucHV0LCBpbnB1dEZpZWxkLnZhbHVlLnRyaW0oKSwgbmFtZSwgdHJ1ZSwgaW5wdXRGaWVsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0LWVycm9yJykpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc3RhdGljIGNoZWNrUHJvak5hbWUocHJvakRPTSwgbmFtZSwgb2xkTmFtZSwgaXNCbHVyLCBva0RlbCkge1xuICAgICAgICBjb25zdCBsaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICBsZXQgaXNTYW1lID0gZmFsc2U7XG5cbiAgICAgICAgbGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2opID0+IHtcbiAgICAgICAgICAgIGlmIChpc0JsdXIpIHtcbiAgICAgICAgICAgICAgICBpZiAob2tEZWwgJiYgcHJvai5nZXROYW1lKCkgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qRE9NLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIFVJLmRlbFByb2oocHJvakRPTS5wYXJlbnROb2RlLmNoaWxkcmVuWzJdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qLmdldE5hbWUoKSA9PSBuYW1lICYmIG5hbWUgIT0gb2xkTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpc1NhbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBwcm9qRE9NLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWVycm9yJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghaXNTYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2pET00uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgaXNTYW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBtYWluKCkge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgICAgICBtYWluLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tdXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RlLXRvZ1wiPlxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJtb2RlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zLjU1IDE5LjA5TDQuOTYgMjAuNUw2Ljc2IDE4LjcxTDUuMzQgMTcuMjlNMTIgNkM4LjY5IDYgNiA4LjY5IDYgMTJTOC42OSAxOCAxMiAxOCAxOCAxNS4zMSAxOCAxMkMxOCA4LjY4IDE1LjMxIDYgMTIgNk0yMCAxM0gyM1YxMUgyME0xNy4yNCAxOC43MUwxOS4wNCAyMC41TDIwLjQ1IDE5LjA5TDE4LjY2IDE3LjI5TTIwLjQ1IDVMMTkuMDQgMy42TDE3LjI0IDUuMzlMMTguNjYgNi44MU0xMyAxSDExVjRIMTNNNi43NiA1LjM5TDQuOTYgMy42TDMuNTUgNUw1LjM0IDYuODFMNi43NiA1LjM5TTEgMTNINFYxMUgxTTEzIDIwSDExVjIzSDEzXCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4taW5uZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWlubmVyLXVwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5JbmJveDwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10by1kby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLXRvLWRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTksMTNIMTNWMTlIMTFWMTNINVYxMUgxMVY1SDEzVjExSDE5VjEzWlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8aDM+QWRkIFRhc2s8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1ib3R0b21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Db3B5cmlnaHQgwqkgMjAyMyBEZWNsYW5rYjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0RlY2xhbktCcm93blwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiwyQTEwLDEwIDAgMCwwIDIsMTJDMiwxNi40MiA0Ljg3LDIwLjE3IDguODQsMjEuNUM5LjM0LDIxLjU4IDkuNSwyMS4yNyA5LjUsMjFDOS41LDIwLjc3IDkuNSwyMC4xNCA5LjUsMTkuMzFDNi43MywxOS45MSA2LjE0LDE3Ljk3IDYuMTQsMTcuOTdDNS42OCwxNi44MSA1LjAzLDE2LjUgNS4wMywxNi41QzQuMTIsMTUuODggNS4xLDE1LjkgNS4xLDE1LjlDNi4xLDE1Ljk3IDYuNjMsMTYuOTMgNi42MywxNi45M0M3LjUsMTguNDUgOC45NywxOCA5LjU0LDE3Ljc2QzkuNjMsMTcuMTEgOS44OSwxNi42NyAxMC4xNywxNi40MkM3Ljk1LDE2LjE3IDUuNjIsMTUuMzEgNS42MiwxMS41QzUuNjIsMTAuMzkgNiw5LjUgNi42NSw4Ljc5QzYuNTUsOC41NCA2LjIsNy41IDYuNzUsNi4xNUM2Ljc1LDYuMTUgNy41OSw1Ljg4IDkuNSw3LjE3QzEwLjI5LDYuOTUgMTEuMTUsNi44NCAxMiw2Ljg0QzEyLjg1LDYuODQgMTMuNzEsNi45NSAxNC41LDcuMTdDMTYuNDEsNS44OCAxNy4yNSw2LjE1IDE3LjI1LDYuMTVDMTcuOCw3LjUgMTcuNDUsOC41NCAxNy4zNSw4Ljc5QzE4LDkuNSAxOC4zOCwxMC4zOSAxOC4zOCwxMS41QzE4LjM4LDE1LjMyIDE2LjA0LDE2LjE2IDEzLjgxLDE2LjQxQzE0LjE3LDE2LjcyIDE0LjUsMTcuMzMgMTQuNSwxOC4yNkMxNC41LDE5LjYgMTQuNSwyMC42OCAxNC41LDIxQzE0LjUsMjEuMjcgMTQuNjYsMjEuNTkgMTUuMTcsMjEuNUMxOS4xNCwyMC4xNiAyMiwxNi40MiAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICAgICAgVUkuaW5pdE1haW5CdXR0b25zKCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgaW5pdE1haW5CdXR0b25zKCkge1xuICAgICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10by1kbycpO1xuICAgICAgICBjb25zdCB0b2dnbGVNb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGUtdG9nJyk7XG5cbiAgICAgICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLmFkZFRhc2soJ05ldyBUYXNrJykpO1xuICAgICAgICB0b2dnbGVNb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkubW9kZSlcbiAgICB9XG5cblxuICAgIHN0YXRpYyByZW1vdmVUYWIoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtY29udGFpbmVyJykuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgb3BlblByb2plY3QoVGFiLCBwYWdlTG9hZCA9IGZhbHNlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLmlubmVySFRNTCA9IFRhYi5pZDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2ogPSBTdG9yYWdlLmdldFRvZG9MaXN0KCkuZ2V0UHJvamVjdHMoKS5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gVGFiLmlkKTtcbiAgICAgICAgaWYgKHByb2ogIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJvai5nZXRUYXNrcygpLmZvckVhY2goKHRhc2spID0+IFVJLmFkZFRhc2sodGFzay5nZXROYW1lKCksIHRhc2suZ2V0RGF0ZSgpLCBwYWdlTG9hZCkpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbW9kZSgpIHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgbmV3VGhlbWUgPSByb290LmNsYXNzTmFtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJztcbiAgICAgICAgcm9vdC5jbGFzc05hbWUgPSBuZXdUaGVtZTtcblxuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGUtdG9nJylcbiAgICAgICAgaWYgKG5ld1RoZW1lID09PSAnZGFyaycpIHtcbiAgICAgICAgICAgIGljb24uaW5uZXJIVE1MID0gJzxzdmcgY2xhc3M9XCJtb2RlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTEyIDJBMTAgMTAgMCAxIDEgMiAxMkExMCAxMCAwIDAgMSAxMiAyWlwiIC8+PC9zdmc+J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWNvbi5pbm5lckhUTUwgPSAnPHN2ZyBjbGFzcz1cIm1vZGVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMy41NSAxOS4wOUw0Ljk2IDIwLjVMNi43NiAxOC43MUw1LjM0IDE3LjI5TTEyIDZDOC42OSA2IDYgOC42OSA2IDEyUzguNjkgMTggMTIgMTggMTggMTUuMzEgMTggMTJDMTggOC42OCAxNS4zMSA2IDEyIDZNMjAgMTNIMjNWMTFIMjBNMTcuMjQgMTguNzFMMTkuMDQgMjAuNUwyMC40NSAxOS4wOUwxOC42NiAxNy4yOU0yMC40NSA1TDE5LjA0IDMuNkwxNy4yNCA1LjM5TDE4LjY2IDYuODFNMTMgMUgxMVY0SDEzTTYuNzYgNS4zOUw0Ljk2IDMuNkwzLjU1IDVMNS4zNCA2LjgxTDYuNzYgNS4zOU0xIDEzSDRWMTFIMU0xMyAyMEgxMVYyM0gxM1wiIC8+PC9zdmc+JztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc3RhdGljIGFkZFRhc2sobmFtZSwgZGF0ZSwgcGFnZUxvYWQpIHtcbiAgICAgICAgY29uc3QgdGFza0RPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRE9NLmlkID0gbmFtZTtcbiAgICAgICAgdGFza0RPTS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgIHRhc2tET00uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2stYm94IHVuY2hlY2tlZFwiPlxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTksM0g1QzMuODksMyAzLDMuODkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVY1QzIxLDMuODkgMjAuMSwzIDE5LDNNMTksNVYxOUg1VjVIMTlaXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgzIGNsYXNzPVwiaW5kLXRhc2tcIj4ke25hbWV9PC9oMz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlLXNwYW5cIj4ke2RhdGV9PC9zcGFuPmA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKS5hcHBlbmRDaGlsZCh0YXNrRE9NKTtcblxuICAgICAgICBVSS5pbml0VGFzayh0YXNrRE9NKTtcblxuICAgICAgICBpZiAobmFtZSA9PSAnTmV3IFRhc2snICYmICFwYWdlTG9hZCkge1xuICAgICAgICAgICAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS5pbm5lckhUTUw7XG4gICAgICAgICAgICBTdG9yYWdlLmFkZFRhc2sobmV3IFRPRE8oJ05ldyBUYXNrJyksIHByb2pOYW1lKTsgLy9Nb2R1bGVzXG4gICAgXG4gICAgICAgICAgICBVSS5uYW1lVGFzayh0YXNrRE9NKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc3RhdGljIG5hbWVUYXNrKHRhc2tET00pIHtcbiAgICAgICAgY29uc3QgdGV4dGJveCA9IHRhc2tET00uY2hpbGRyZW5bMV07XG4gICAgICAgIFxuICAgICAgICBpZiAoIXRleHRib3guY2xhc3NMaXN0LmNvbnRhaW5zKCduYW1lLXRhc2snKSkge1xuXG4gICAgICAgICAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0RmllbGQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIGlucHV0RmllbGQuY2xhc3NMaXN0LmFkZCgnbmFtZS10YXNrJyk7XG4gICAgICAgICAgICBpZiAodGV4dGJveC5pbm5lckhUTUwgIT09ICdOZXcgVGFzaycpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gdGV4dGJveC5pbm5lckhUTUw7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBvbGROYW1lID0gdGV4dGJveC5pbm5lckhUTUwudHJpbSgpIC8vXG4gICAgICAgICAgICBjb25zdCBwcm9qTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLmlubmVySFRNTCAvL1xuXG4gICAgICAgICAgICB0ZXh0Ym94LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGlucHV0RmllbGQsIHRleHRib3gpO1xuXG4gICAgICAgICAgICBpbnB1dEZpZWxkLmZvY3VzKCk7XG5cbiAgICAgICAgICAgIGlucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBVSS5jaGVja1Rhc2tOYW1lKGlucHV0RmllbGQsIGlucHV0RmllbGQudmFsdWUudHJpbSgpLCBvbGROYW1lLCBwcm9qTmFtZSwgZmFsc2UsIGZhbHNlKSkgLy9cblxuICAgICAgICAgICAgaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0RmllbGQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0RmllbGQudmFsdWUgPSAnTmV3IFRhc2snO1xuICAgICAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0Ym94LmlubmVySFRNTClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbnB1dEZpZWxkLnZhbHVlKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2pOYW1lKVxuICAgICAgICAgICAgICAgIFN0b3JhZ2UucmVuYW1lVGFzayh0ZXh0Ym94LmlubmVySFRNTC50cmltKCksIGlucHV0RmllbGQudmFsdWUudHJpbSgpLCBwcm9qTmFtZSk7IC8vIE1vZHVsZXNcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0ZXh0Ym94LmlubmVySFRNTC50cmltKCk7IC8vXG5cbiAgICAgICAgICAgICAgICB0ZXh0Ym94LmlubmVySFRNTCA9IGlucHV0RmllbGQudmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgICAgIHRhc2tET00uaWQgPSBpbnB1dEZpZWxkLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgdGFza0RPTS5yZXBsYWNlQ2hpbGQodGV4dGJveCwgaW5wdXRGaWVsZCk7XG5cbiAgICAgICAgICAgICAgICBVSS5jaGVja1Rhc2tOYW1lKHRleHRib3gsIGlucHV0RmllbGQudmFsdWUudHJpbSgpLCBuYW1lLCBwcm9qTmFtZSwgdHJ1ZSwgaW5wdXRGaWVsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0LWVycm9yJykpIC8vXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjaGVja1Rhc2tOYW1lKGlucHV0RmllbGQsIG5hbWUsIG9sZE5hbWUsIHByb2pOYW1lLCBpc0JsdXIsIG9rRGVsKSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgICAgIGxldCBpc1NhbWUgPSBmYWxzZTtcblxuICAgICAgICBsaXN0LmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvaikgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2ouZ2V0TmFtZSgpID09IHByb2pOYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvai5nZXRUYXNrcygpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0JsdXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChva0RlbCAmJiB0YXNrLmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVUkuY2hlY2tUYXNrKGlucHV0RmllbGQucGFyZW50Tm9kZSwgdHJ1ZSk7IC8vZml4bWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBva0RlbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suZ2V0TmFtZSgpID09IG5hbWUgJiYgbmFtZSAhPSBvbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFpc1NhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTYW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBpbml0VGFzayh0YXNrKSB7XG4gICAgICAgIHRhc2suY2hpbGRyZW5bMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5uYW1lVGFzayh0YXNrKSk7XG4gICAgICAgIHRhc2suZmlyc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5jaGVja1Rhc2sodGFzaywgZmFsc2UpKVxuICAgICAgICB0YXNrLmxhc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5kYXRlVGFzayh0YXNrKSlcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkYXRlVGFzayh0YXNrRE9NKSB7XG4gICAgICAgIGNvbnN0IGRhdGVTcGFuID0gdGFza0RPTS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0RmllbGQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKCdkYXRlLXRhc2snKTtcbiAgICAgICAgaWYgKGRhdGVTcGFuLmlubmVySFRNTCAhPT0gJ05vIERhdGUnKSB7XG4gICAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gZGF0ZVNwYW4uaW5uZXJIVE1MO1xuICAgICAgICB9O1xuXG4gICAgICAgIGRhdGVTcGFuLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGlucHV0RmllbGQsIGRhdGVTcGFuKTtcblxuICAgICAgICBpbnB1dEZpZWxkLmZvY3VzKCk7XG5cbiAgICAgICAgaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXRGaWVsZC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gJ05vIERhdGUnO1xuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgLy9Gb3JtYXR0aW5nIERhdGVcbiAgICAgICAgICAgIGNvbnN0IHVuZm9ybWF0dGVkRGF0ZSA9IGlucHV0RmllbGQudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gdW5mb3JtYXR0ZWREYXRlLnNwbGl0KCctJylbMl0gKyAnLScgKyB1bmZvcm1hdHRlZERhdGUuc3BsaXQoJy0nKVsxXSArICctJyArIHVuZm9ybWF0dGVkRGF0ZS5zcGxpdCgnLScpWzBdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLmlubmVySFRNTDtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gaW5wdXRGaWVsZC5wYXJlbnROb2RlLmNoaWxkcmVuWzFdLmlubmVySFRNTDtcblxuICAgICAgICAgICAgU3RvcmFnZS5kYXRlVGFzayhmb3JtYXR0ZWREYXRlLCB0YXNrTmFtZSwgcHJvak5hbWUpOyAvLyBNb2R1bGVzXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgZGF0ZVNwYW4uaW5uZXJIVE1MID0gZm9ybWF0dGVkRGF0ZTtcbiAgICAgICAgICAgIHRhc2tET00uaWQgPSBmb3JtYXR0ZWREYXRlO1xuICAgIFxuICAgICAgICAgICAgdGFza0RPTS5yZXBsYWNlQ2hpbGQoZGF0ZVNwYW4sIGlucHV0RmllbGQpO1xuICAgICAgICB9KTtcbiAgICB9IFxuXG5cbiAgICBzdGF0aWMgY2hlY2tUYXNrKHRhc2ssIHNhbWVOYW1lID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRhc2suaWQ7XG5cbiAgICAgICAgY29uc3QgY2hlY2tlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaGVja2VkLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKVxuICAgICAgICBjaGVja2VkLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWJveCcpXG4gICAgICAgIGNoZWNrZWQuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE5LDNINUEyLDIgMCAwLDAgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVY1QTIsMiAwIDAsMCAxOSwzTTE5LDE5SDVWNUgxOVYxOU0xNywxN0g3VjdIMTdWMTdaXCIgLz48L3N2Zz4nXG5cbiAgICAgICAgdGFzay5maXJzdEVsZW1lbnRDaGlsZC5yZXBsYWNlQ2hpbGQoY2hlY2tlZCwgdGFzay5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZClcblxuICAgICAgICB0YXNrLmNoaWxkcmVuWzFdLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRhc2sucmVtb3ZlKCkgfSwgMjUwKVxuXG4gICAgICAgIGNvbnN0IHByb2pOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykuaW5uZXJIVE1MO1xuICAgICAgICBTdG9yYWdlLmRlbGV0ZVRhc2sobmFtZSwgcHJvak5hbWUsIHNhbWVOYW1lKVxuICAgIH1cblxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCBUT0RPIGZyb20gJy4vdG9kby5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdJbmJveCcpKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdUb2RheScpKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdXZWVrJykpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ01vbnRoJykpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ0FueXRpbWUnKSk7XG4gICAgfVxuXG4gICAgc2V0UHJvamVjdHMocHJvamVjdHMpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICAgIH1cblxuICAgIGdldFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgICB9XG5cblxuICAgIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgfVxuXG4gICAgZGVsZXRlUHJvamVjdCh0YXJnZXROYW1lLCBzYW1lTmFtZSkge1xuICAgICAgICBpZiAoc2FtZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4VG9EZWxldGUgPSB0aGlzLnByb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHRhcmdldE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXhUb0RlbGV0ZSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRJbmRleFRvRGVsZXRlID0gdGhpcy5wcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QsIGluZGV4KSA9PiBpbmRleCAhPT0gaW5kZXhUb0RlbGV0ZSAmJiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gdGFyZ2V0TmFtZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoc2Vjb25kSW5kZXhUb0RlbGV0ZSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2Uoc2Vjb25kSW5kZXhUb0RlbGV0ZSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PSB0YXJnZXROYW1lKTtcbiAgICBcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0VG9EZWxldGUpLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmFtZVByb2plY3QobmFtZSwgbmV3TmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qID0gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PSBuYW1lKTtcblxuICAgICAgICBwcm9qLnNldE5hbWUobmV3TmFtZSk7XG4gICAgfVxuXG5cbiAgICBhZGRUYXNrKHRhc2ssIHByb2pOYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2ogPSB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09IHByb2pOYW1lKTtcblxuICAgICAgICBwcm9qLmFkZFRhc2sodGFzaylcbiAgICB9XG5cbiAgICByZW5hbWVUYXNrKG5hbWUsIG5ld05hbWUsIHByb2pOYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2ogPSB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09IHByb2pOYW1lKTtcblxuICAgICAgICBwcm9qLnJlbmFtZVRhc2sobmFtZSwgbmV3TmFtZSlcbiAgICB9XG5cbiAgICBkYXRlVGFzayhkYXRlLCB0YXNrTmFtZSwgcHJvak5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvaiA9IHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT0gcHJvak5hbWUpO1xuXG4gICAgICAgIHByb2ouZGF0ZVRhc2soZGF0ZSwgdGFza05hbWUpXG4gICAgfVxuXG4gICAgZGVsZXRlVGFzayh0YXNrLCBwcm9qTmFtZSwgc2FtZU5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvaiA9IHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT0gcHJvak5hbWUpO1xuXG4gICAgICAgIHByb2ouZGVsZXRlVGFzayh0YXNrLCBzYW1lTmFtZSlcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBzZXRUYXNrcyh0YXNrcykge1xuICAgICAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gICAgfVxuICAgIFxuICAgIGdldFRhc2tzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgICB9XG5cbiAgICBhZGRUYXNrKHRhc2spIHtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spXG4gICAgfVxuXG4gICAgcmVuYW1lVGFzayhuYW1lLCBuZXdOYW1lKSB7XG4gICAgICAgIGNvbnN0IFRPRE8gPSB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09IG5hbWUpO1xuICAgICAgICBUT0RPLnNldE5hbWUobmV3TmFtZSk7XG4gICAgfVxuXG4gICAgZGF0ZVRhc2soZGF0ZSwgbmFtZSkge1xuICAgICAgICBjb25zdCBUT0RPID0gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PSBuYW1lKTtcbiAgICAgICAgVE9ETy5zZXREYXRlKGRhdGUpO1xuICAgIH1cblxuICAgIGRlbGV0ZVRhc2sobmFtZSwgc2FtZU5hbWUpIHtcbiAgICAgICAgaWYgKHNhbWVOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdFRPRE9JbmRleCA9IHRoaXMudGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gbmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChmaXJzdFRPRE9JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRUT0RPSW5kZXggPSB0aGlzLnRhc2tzLmZpbmRJbmRleCgodGFzaywgaW5kZXgpID0+IGluZGV4ICE9PSBmaXJzdFRPRE9JbmRleCAmJiB0YXNrLmdldE5hbWUoKSA9PT0gbmFtZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoc2Vjb25kVE9ET0luZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShzZWNvbmRUT0RPSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IFRPRE8gPSB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09IG5hbWUpO1xuICAgIFxuICAgICAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UodGhpcy50YXNrcy5pbmRleE9mKFRPRE8pLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59IiwiaW1wb3J0IFRPRE8gZnJvbSAnLi90b2RvLmpzJ1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgICBzdGF0aWMgc2F2ZVRvZG9MaXN0KGRhdGEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRvZG9MaXN0KCkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IE9iamVjdC5hc3NpZ24obmV3IExpc3QoKSwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSkpXG5cbiAgICAgICAgdG9kb0xpc3Quc2V0UHJvamVjdHModG9kb0xpc3QuZ2V0UHJvamVjdHMoKS5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpKVxuXG4gICAgICAgIHRvZG9MaXN0LmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4gcHJvamVjdC5zZXRUYXNrcyhwcm9qZWN0LmdldFRhc2tzKCkubWFwKCh0b2RvKSA9PiBPYmplY3QuYXNzaWduKG5ldyBUT0RPKCksIHRvZG8pKSkpXG5cbiAgICAgICAgcmV0dXJuIHRvZG9MaXN0XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICB0b2RvTGlzdC5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmFtZVByb2plY3QobmFtZSwgbmV3TmFtZSkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QucmVuYW1lUHJvamVjdChuYW1lLCBuZXdOYW1lKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWxldGVQcm9qZWN0KG5hbWUsIHNhbWVOYW1lKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICB0b2RvTGlzdC5kZWxldGVQcm9qZWN0KG5hbWUsIHNhbWVOYW1lKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGFkZFRhc2sodGFzaywgcHJvak5hbWUpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgICAgIHRvZG9MaXN0LmFkZFRhc2sodGFzaywgcHJvak5hbWUpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmFtZVRhc2sobmFtZSwgbmV3TmFtZSwgcHJvak5hbWUpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgICAgIHRvZG9MaXN0LnJlbmFtZVRhc2sobmFtZSwgbmV3TmFtZSwgcHJvak5hbWUpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBkYXRlVGFzayhkYXRlLCB0YXNrTmFtZSwgcHJvak5hbWUpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgICAgIHRvZG9MaXN0LmRhdGVUYXNrKGRhdGUsIHRhc2tOYW1lLCBwcm9qTmFtZSk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlVGFzayh0YXNrLCBwcm9qTmFtZSwgc2FtZU5hbWUpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgICAgIHRvZG9MaXN0LmRlbGV0ZVRhc2sodGFzaywgcHJvak5hbWUsIHNhbWVOYW1lKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPRE8ge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGF0ZSA9ICdObyBEYXRlJykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRhdGU9IGRhdGU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBzZXREYXRlKGRhdGUpIHtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB9XG4gICAgXG4gICAgZ2V0RGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZTtcbiAgICB9XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IFVJIGZyb20gJy4vbW9kdWxlcy9VSS5qcydcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFVJLmxvYWRIb21lKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9