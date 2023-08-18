/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js",
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js",
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

@font-face {
    font-family: "San Francisco";
    font-weight: 400;
    src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
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
    background-color: var(--main-col);
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

.date-task {
    color: var(--main-text-col);
    background-color: var(--input-col);
    user-select: none;
}

.card-container {
    max-height: 70vh;
    overflow-y: scroll;
}

.proj-card {
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

.proj-card svg {
    fill: var(--main-text-col);
}

.proj-card:hover {
    background-color: var(--sel-col);
    border-radius: 0.3rem;
}






`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,4BAA4B;IAC5B,gBAAgB;IAChB,0HAA0H;EAC5H;;AAEF;IACI,oBAAoB;IACpB,iBAAiB;IACjB,mBAAmB;IACnB,wBAAwB;IACxB,4BAA4B;IAC5B,kBAAkB;IAClB,wBAAwB;IACxB,qCAAqC;AACzC;;AAEA;IACI;QACI,oBAAoB;QACpB,iBAAiB;QACjB,mBAAmB;QACnB,wBAAwB;QACxB,4BAA4B;QAC5B,kBAAkB;QAClB,wBAAwB;QACxB,kCAAkC;IACtC;AACJ;;AAEA;IACI,4BAA4B;IAC5B,YAAY;IACZ,aAAa;IACb,aAAa;IACb,oCAAoC;IACpC,qBAAqB;IACrB,iCAAiC;AACrC;;AAEA;;CAEC;AACD;IACI,kBAAkB;IAClB,kCAAkC;IAClC,aAAa;IACb,iCAAiC;IACjC,qBAAqB;IACrB,qCAAqC;IACrC,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,qBAAqB;IACrB,sCAAsC;IACtC,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,wBAAwB;IACxB,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uDAAuD;IACvD,SAAS;AACb;;AAEA;IACI,eAAe;IACf,aAAa;IACb,+BAA+B;IAC/B,mBAAmB;IACnB,WAAW;IACX,oBAAoB;AACxB;;AAEA;IACI,gCAAgC;IAChC,qBAAqB;AACzB;;AAEA;IACI,gCAAgC;IAChC,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf;AACJ;;AAEA;IACI,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;IACf,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,SAAS;AACb;;AAEA;IACI,WAAW;IACX,eAAe;IACf,aAAa;IACb,mCAAmC;IACnC,qBAAqB;IACrB,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,WAAW;AACf;;AAEA;IACI,+BAA+B;IAC/B,8BAA8B;AAClC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,oBAAoB;IACpB,eAAe;IACf,+BAA+B;IAC/B,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI;AACJ;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,iCAAiC;IACjC,iCAAiC;IACjC,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,sCAAsC;IACtC,qBAAqB;IACrB,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,oBAAoB;IACpB,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,0BAA0B;IAC1B,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,wBAAwB;IACxB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,mBAAmB;IACnB,WAAW;IACX,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,gCAAgC;IAChC,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,2BAA2B;IAC3B,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,gCAAgC;IAChC,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,oBAAoB;IACpB,eAAe;IACf,+BAA+B;IAC/B,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,+BAA+B;IAC/B,YAAY;AAChB;;AAEA;IACI,2BAA2B;IAC3B,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,qBAAqB;IACrB,mCAAmC;IACnC,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,eAAe;IACf,2BAA2B;IAC3B,iBAAiB;AACrB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,oCAAoC;IACpC,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,2BAA2B;IAC3B,kCAAkC;IAClC,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,2BAA2B;IAC3B,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,gCAAgC;IAChC,qBAAqB;AACzB",
            sourcesContent: [
              '* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n@font-face {\n    font-family: "San Francisco";\n    font-weight: 400;\n    src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");\n  }\n\n:root.light {\n    --aside-col: #f5f5f5;\n    --ol-col: #e8e8e8;\n    --main-col: #FFFFFF;\n    --side-text-col: #3B3E41;\n    --side-sec-text-col: #606468;\n    --sel-col: #DBDEE1;\n    --main-text-col: #0B0D11;\n    --input-col: rgba(195, 199, 202, 0.7);\n}\n\n@media (prefers-color-scheme: dark) {\n    :root.dark {\n        --aside-col: #1c1c1c;\n        --ol-col: #262626;\n        --main-col: #1c1c1c;\n        --side-text-col: #d1d1d1;\n        --side-sec-text-col: #a8a8a8;\n        --sel-col: #2e2e2e;\n        --main-text-col: #f5f5f5;\n        --input-col: rgba(84, 84, 84, 0.7);\n    }\n}\n\nbody {\n    font-family: "San Francisco";\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 45px 4fr 33fr;\n    transition: all 0.15s;\n    background-color: var(--main-col);\n}\n\n/* \nSIDEBAR\n*/\naside {\n    grid-column: 1 / 3;\n    background-color: var(--aside-col);\n    display: grid;\n    grid-template-rows: 4rem 1fr 3rem;\n    justify-items: center;\n    border-right: 1px solid var(--ol-col);\n    overflow-x: hidden;\n    transition: all 0.15s;\n}\n\n.aside-upper-cont {\n    width: 100%;\n    display: grid;\n    justify-items: center;\n    border-bottom: 1px solid var(--ol-col);\n    transition: all 0.15s;\n    margin-bottom: 1rem;\n}\n\n.aside-inner {\n    width: 90%;\n    grid-row: 2 / 3;\n    overflow-y: scroll;\n    display: grid;\n    grid-template-rows: auto;\n    gap: 2rem;\n    overflow-x: hidden;\n}\n\n.aside-top {\n    display: grid;\n    grid-template-rows: min-content min-content min-content;\n    gap: 3rem;\n}\n\n.side-tab {\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 25px 1fr;\n    align-items: center;\n    gap: 0.6rem;\n    padding-left: 0.4rem;\n}\n\n.side-tab:hover {\n    background-color: var(--sel-col);\n    border-radius: 0.3rem;\n}\n\n.side-tab-sel {\n    background-color: var(--sel-col);\n    border-radius: 0.3rem;\n    transition: all 0.15s;\n}\n\n.side-tab svg {\n    padding-top: 0.2rem;\n    cursor: pointer;\n    fill: var(--side-text-col)\n}\n\n.side-tab h1 {\n    color: var(--side-text-col);\n    font-size: 1.2rem;\n    cursor: pointer;\n    padding-bottom: 0.2rem;\n    user-select: none;\n}\n\n.time-container {\n    display: grid;\n    grid-template-rows: min-content;\n    gap: 1rem;\n}\n\n.aside-bottom {\n    width: 100%;\n    grid-row: 3 / 4;\n    display: grid;\n    border-top: 1px solid var(--ol-col);\n    transition: all 0.15s;\n    justify-items: center;\n    align-items: center;\n}\n\n.aside-bottom-inner {\n    width: 90%;\n}\n\n.projects-container {\n    display: grid;\n    grid-template-rows: min-content;\n    gap: 0.5rem;\n}\n\n.new-project, .new-project svg {\n    color: var(--side-sec-text-col);\n    fill: var(--side-sec-text-col);\n}\n\n.new-project {\n    cursor: text;\n}\n\n.name-proj {\n    width: 80%;\n    padding-left: 0.2rem;\n    font-size: 1rem;\n    color: var(--side-sec-text-col);\n    background-color: transparent;\n    border: none;\n}\n\n.name-proj:focus {\n    outline: none\n}\n\nmain {\n    display: grid;\n    align-content: center;\n    grid-template-rows: 3rem 1fr 3rem;\n    background-color: var(--main-col);\n    transition: all 0.15s;\n}\n\n.tasks-container {\n    max-height: 70vh;\n    overflow-y: scroll;\n}\n\n.main-upper {\n    border-bottom: 1px solid var(--ol-col);\n    transition: all 0.15s;\n    display: grid;\n    grid-template-columns: 30px;\n    align-items: center;\n    justify-content: end;\n    padding-right: 10rem;\n    transition: all 0.15s;\n}\n\n.main-upper svg {\n    fill: var(--side-text-col);\n    cursor: pointer;\n    transition: all 0.15s;\n}\n\n.main-inner {\n    width: 60%;\n    height: 95%;\n    /* overflow-y: scroll; */\n    justify-self: center;\n    grid-row: 2 / 3;\n}\n\n.add-to-do {\n    display: grid;\n    grid-template-columns: 30px auto;\n    align-items: center;\n    gap: 0.5rem;\n    margin-top: 2rem;\n    cursor: pointer;\n    user-select: none;\n    color: var(--main-text-col);\n}\n\n.add-to-do svg {\n    fill: var(--main-text-col);\n}\n\n.add-to-do-container:hover {\n    background-color: var(--sel-col);\n    border-radius: 0.3rem;\n}\n\n.check-box {\n    padding-top: 0.3rem;\n}\n\n.task {\n    display: grid;\n    grid-template-columns: 22px auto 10rem;\n    align-items: center;\n    gap: 0.5rem;\n    margin-top: 1.5rem;\n    cursor: pointer;\n    user-select: none;\n    color: var(--main-text-col);\n    padding: 0.2rem 0;\n    padding-right: 1rem;\n}\n\n.task svg {\n    fill: var(--main-text-col);\n}\n\n.task:hover {\n    background-color: var(--sel-col);\n    border-radius: 0.3rem;\n}\n\n.name-task {\n    width: 80%;\n    padding-left: 0.2rem;\n    font-size: 1rem;\n    color: var(--side-sec-text-col);\n    background-color: transparent;\n    border: none;\n}\n\n.name-task:focus {\n    outline: none;\n}\n\n.ind-task {\n    color: var(--side-sec-text-col);\n    cursor: text;\n}\n\n.title {\n    color: var(--main-text-col);\n    font-size: 2.5rem;\n    user-select: none;\n}\n\n.main-bottom {\n    grid-row: 3 / 4;\n    display: grid;\n    grid-template-columns: 6fr 1fr;\n    align-items: center;\n    justify-items: center;\n    border-top: 1px solid var(--ol-col);\n    transition: all 0.15s;\n}\n\n.footer {\n    display: grid;\n    grid-template-columns: auto 30px;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    font-size: 1rem;\n    color: var(--side-text-col);\n    user-select: none;\n}\n\n.footer svg {\n    fill: var(--side-text-col);\n}\n\n.new-project {\n    grid-template-columns: 25px 1fr 20px;\n    padding-right: 0.2rem;\n}\n\n.date-span {\n    justify-self: end;\n}\n\n.input-error {\n    color: red;\n}\n\n.project-name {\n    user-select: none;\n}\n\n.date-task {\n    color: var(--main-text-col);\n    background-color: var(--input-col);\n    user-select: none;\n}\n\n.card-container {\n    max-height: 70vh;\n    overflow-y: scroll;\n}\n\n.proj-card {\n    display: grid;\n    grid-template-columns: 22px auto 10rem;\n    align-items: center;\n    gap: 0.5rem;\n    margin-top: 1.5rem;\n    cursor: pointer;\n    user-select: none;\n    color: var(--main-text-col);\n    padding: 0.2rem 0;\n    padding-right: 1rem;\n}\n\n.proj-card svg {\n    fill: var(--main-text-col);\n}\n\n.proj-card:hover {\n    background-color: var(--sel-col);\n    border-radius: 0.3rem;\n}\n\n\n\n\n\n\n',
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
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
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {",
                );
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
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping))),
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64,
              );
            var sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css",
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head",
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
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
              layer: item[5],
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
                references: 1,
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
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }
              api.update((obj = newObj));
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

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};

        /* istanbul ignore next  */
        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target);

            // Special case to return head of iframe instead of iframe itself
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
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
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          }
          target.appendChild(style);
        }
        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }
        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;
          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }
        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
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
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {",
            );
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
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */",
              );
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
              remove: function remove() {},
            };
          }
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }
        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
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

        /***/
      },

    /***/ "./src/modules/UI.js":
      /*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ UI,
          /* harmony export */
        });
        /* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");
        /* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
        /* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");

        class UI {
          static loadHome() {
            UI.sidebar();
            UI.main();
            UI.loadProjects();
            UI.openProject(document.querySelector("#Inbox"), true);
            UI.mode(true);
          }

          static loadProjects() {
            _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"]
              .getTodoList()
              .getProjects()
              .forEach((project) => {
                if (
                  project.getName() !== "Inbox" &&
                  project.getName() !== "Today" &&
                  project.getName() !== "Week" &&
                  project.getName() !== "Month" &&
                  project.getName() !== "Anytime"
                ) {
                  UI.addProject(project.getName(), true);
                }
              });
          }

          static sidebar() {
            const aside = document.createElement("aside");
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
            const tabs = document.querySelectorAll(".side-tab");
            const addBtn = document.querySelector(".add-project");

            tabs.forEach((tab) =>
              tab.addEventListener("click", () => UI.tab(tab)),
            );
            addBtn.addEventListener("click", () =>
              UI.addProject("New Project"),
            );
          }

          static tab(Tab) {
            UI.removeTabStyle();
            UI.tabStyle(Tab);
            UI.removeTab();
            if (Tab.id === "Today") {
              UI.openToday(Tab);
            } else if (Tab.id === "Week") {
              UI.openWeek(Tab);
            } else if (Tab.id === "Month") {
              UI.openMonth(Tab);
            } else if (Tab.id === "Projects") {
              UI.openProjDisp(Tab);
            } else {
              UI.openProject(Tab, true);
            }
          }

          static openToday(Tab) {
            document.querySelector(".title").innerHTML = Tab.id;
            document.querySelector(".add-to-do").style = "display:none";

            const todoList =
              _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoList();

            todoList.getProjects().forEach((proj) => {
              proj.getTasks().forEach((task) => {
                const taskDate = task.getDate();
                if (taskDate != "No Date") {
                  const [day, month, year] = taskDate.split("-");
                  const parsedDate = new Date(`${year}-${month}-${day}`);
                  const currentDate = new Date();

                  parsedDate.setHours(0, 0, 0, 0);
                  currentDate.setHours(0, 0, 0, 0);

                  if (parsedDate.getTime() === currentDate.getTime()) {
                    UI.addTask(task.getName(), task.getDate(), false);
                  }
                }
              });
            });
          }

          static openWeek(Tab) {
            document.querySelector(".title").innerHTML = Tab.id;
            document.querySelector(".add-to-do").style = "display:none";

            const todoList =
              _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoList();
            const today = new Date();

            todoList.getProjects().forEach((proj) => {
              proj.getTasks().forEach((task) => {
                const taskDate = task.getDate();
                if (taskDate !== "No Date") {
                  const [day, month, year] = taskDate.split("-");
                  const parsedDate = new Date(`${year}-${month}-${day}`);

                  // Calculate the start and end of the current week
                  const startOfWeek = new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    today.getDate() - today.getDay(),
                  );
                  const endOfWeek = new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    today.getDate() + (6 - today.getDay()),
                  );

                  if (parsedDate >= startOfWeek && parsedDate <= endOfWeek) {
                    UI.addTask(task.getName(), task.getDate(), false);
                  }
                }
              });
            });
          }

          static openMonth(Tab) {
            document.querySelector(".title").innerHTML = Tab.id;
            document.querySelector(".add-to-do").style = "display:none";

            const todoList =
              _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoList();
            const today = new Date();

            todoList.getProjects().forEach((proj) => {
              proj.getTasks().forEach((task) => {
                const taskDate = task.getDate();
                if (taskDate !== "No Date") {
                  const [day, month, year] = taskDate.split("-");
                  const parsedDate = new Date(`${year}-${month}-${day}`);

                  // Calculate the start and end of the current month
                  const startOfMonth = new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    1,
                  );
                  const endOfMonth = new Date(
                    today.getFullYear(),
                    today.getMonth() + 1,
                    0,
                  );

                  if (parsedDate >= startOfMonth && parsedDate <= endOfMonth) {
                    UI.addTask(task.getName(), task.getDate(), false);
                  }
                }
              });
            });
          }

          static openProjDisp(Tab) {
            document.querySelector(".title").innerHTML = Tab.id;
            document.querySelector(".add-to-do").style = "display:none";

            const card = document.createElement("div");
            card.classList.add("cards-container");
            document.querySelector(".main-inner").appendChild(card);

            _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"]
              .getTodoList()
              .getProjects()
              .forEach((project) => {
                if (
                  project.getName() !== "Inbox" &&
                  project.getName() !== "Today" &&
                  project.getName() !== "Week" &&
                  project.getName() !== "Month"
                ) {
                  UI.addProjCard(project);
                }
              });
          }

          static addProjCard(project) {
            const card = document.createElement("div");
            card.classList.add("proj-card");
            card.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13,2.03V2.05L13,4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03M11,2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06M4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1L4.26,5.67M2.06,13C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13H2.06M7.1,18.37L5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37M16.82,15.19L12.71,11.08C13.12,10.04 12.89,8.82 12.03,7.97C11.13,7.06 9.78,6.88 8.69,7.38L10.63,9.32L9.28,10.68L7.29,8.73C6.75,9.82 7,11.17 7.88,12.08C8.74,12.94 9.96,13.16 11,12.76L15.11,16.86C15.29,17.05 15.56,17.05 15.74,16.86L16.78,15.83C17,15.65 17,15.33 16.82,15.19Z" />
        </svg>
        <h2>${project.getName()}</h2>
        <span>Tasks: ${project.getCount()}</span>`;
            document.querySelector(".cards-container").appendChild(card);
          }

          static removeTabStyle() {
            const tabs = document.querySelectorAll(".side-tab");
            tabs.forEach((tab) => tab.classList.remove("side-tab-sel"));
          }

          static tabStyle(e) {
            e.classList.add("side-tab-sel");
          }

          static delProj(proj, sameName = false) {
            proj.parentNode.children[1].style.textDecoration = "line-through";
            const name = proj.parentNode.id;

            setTimeout(() => {
              proj.parentNode.parentNode.remove();
              UI.tab(document.getElementById("Inbox"));
            }, 250);

            _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProject(
              name,
              sameName,
            ); //Modules
          }

          static addProject(projName, pageLoad = false) {
            const proj = document.createElement("div");
            proj.id = "projectsCont";
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
            document.querySelector(".projects-container").appendChild(proj);

            UI.initProject(projName, pageLoad);

            if (projName == "New Project" && !pageLoad) {
              _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(
                new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"](
                  "New Project",
                ),
              ); //Modules
              UI.openProject(proj.firstElementChild);
            }
          }

          static initProject(projName, pageLoad = false) {
            const project =
              document.querySelectorAll(".new-project")[
                document.querySelectorAll(".new-project").length - 1
              ];
            project.addEventListener("click", () => UI.tab(project));

            if (projName == "New Project" && !pageLoad) {
              project.classList.add("side-tab-sel");
            }

            const text =
              document.querySelectorAll(".project-name")[
                document.querySelectorAll(".project-name").length - 1
              ];
            text.addEventListener("click", () => UI.renameProject(text));

            const del =
              document.querySelectorAll(".del")[
                document.querySelectorAll(".del").length - 1
              ];
            del.addEventListener("click", () => UI.delProj(del));
          }

          static renameProject(input) {
            if (input.parentNode.classList.contains("side-tab-sel")) {
              const inputField = document.createElement("input");

              inputField.type = "text";
              inputField.classList.add("name-proj");
              if (input.innerHTML !== "New Project") {
                inputField.value = input.innerHTML;
              }

              const oldName = input.innerHTML.trim();

              input.parentNode.replaceChild(inputField, input);

              inputField.focus();

              inputField.addEventListener("input", () =>
                UI.checkProjName(
                  inputField,
                  inputField.value.trim(),
                  oldName,
                  false,
                  false,
                ),
              );

              inputField.addEventListener("blur", () => {
                if (inputField.value === "") {
                  inputField.value = "New Project";
                  inputField.parentNode.id = "New Project";
                } else {
                  inputField.parentNode.id = inputField.value.trim();
                }

                const name = input.innerHTML.trim();

                _storage_js__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ].renameProject(
                  input.innerHTML.trim(),
                  inputField.value.trim(),
                ); //Modules

                input.innerHTML = inputField.value.trim();
                document.querySelector(".title").innerHTML =
                  inputField.value.trim();
                inputField.parentNode.replaceChild(input, inputField);

                UI.checkProjName(
                  input,
                  inputField.value.trim(),
                  name,
                  true,
                  inputField.classList.contains("input-error"),
                );
              });
            }
          }

          static checkProjName(projDOM, name, oldName, isBlur, okDel) {
            const list =
              _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoList();
            let isSame = false;

            list.getProjects().forEach((proj) => {
              if (isBlur) {
                if (okDel && proj.getName() == name) {
                  projDOM.classList.add("input-error");
                  UI.delProj(projDOM.parentNode.children[2], true);
                }
              } else {
                if (proj.getName() == name && name != oldName) {
                  isSame = true;
                  projDOM.classList.add("input-error");
                } else if (!isSame) {
                  projDOM.classList.remove("input-error");
                  isSame = false;
                }
              }
            });
          }

          static main() {
            const main = document.createElement("main");
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
            const addTask = document.querySelector(".add-to-do");
            const toggleMode = document.querySelector(".mode-tog");

            addTask.addEventListener("click", () => UI.addTask("New Task"));
            toggleMode.addEventListener("click", () => UI.mode(false));
          }

          static removeTab() {
            document.querySelector(".title").innerHTML = "";
            document.querySelector(".tasks-container").innerHTML = "";
            if (document.querySelector(".cards-container") !== null) {
              document.querySelector(".cards-container").remove();
            }
          }

          static openProject(Tab, pageLoad = false) {
            document.querySelector(".title").innerHTML = Tab.id;
            document.querySelector(".add-to-do").style = "display:grid";

            const proj = _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"]
              .getTodoList()
              .getProjects()
              .find((project) => project.getName() === Tab.id);
            if (proj !== undefined) {
              proj
                .getTasks()
                .forEach((task) =>
                  UI.addTask(task.getName(), task.getDate(), pageLoad),
                );
            }
          }

          static mode(onload) {
            const root = document.documentElement;
            let newTheme;

            if (onload) {
              if (
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
              ) {
                newTheme = "dark";
              }
            } else {
              newTheme = root.className === "dark" ? "light" : "dark";
            }
            root.className = newTheme;

            const icon = document.querySelector(".mode-tog");
            if (newTheme === "dark") {
              icon.innerHTML =
                '<svg class="mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2A10 10 0 1 1 2 12A10 10 0 0 1 12 2Z" /></svg>';
            } else {
              icon.innerHTML =
                '<svg class="mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" /></svg>';
            }
          }

          static addTask(name, date, pageLoad) {
            if (date === undefined) {
              date = "No Date";
            }
            const taskDOM = document.createElement("div");
            taskDOM.id = name;
            taskDOM.classList.add("task");
            taskDOM.innerHTML = `
        <div class="check-box unchecked">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" />
            </svg>
        </div>
        <h3 class="ind-task">${name}</h3>
        <span class="date-span">${date}</span>`;
            document.querySelector(".tasks-container").appendChild(taskDOM);

            UI.initTask(taskDOM);

            if (name == "New Task" && !pageLoad) {
              const projName = document.querySelector(".title").innerHTML;
              _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(
                new _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"](
                  "New Task",
                ),
                projName,
              ); //Modules

              UI.nameTask(taskDOM);
            }
          }

          static nameTask(taskDOM) {
            const textbox = taskDOM.children[1];

            if (!textbox.classList.contains("name-task")) {
              const inputField = document.createElement("input");
              inputField.type = "text";
              inputField.classList.add("name-task");
              if (textbox.innerHTML !== "New Task") {
                inputField.value = textbox.innerHTML;
              }

              const oldName = textbox.innerHTML.trim(); //
              const projName = document.querySelector(".title").innerHTML; //

              textbox.parentNode.replaceChild(inputField, textbox);

              inputField.focus();

              inputField.addEventListener("input", () =>
                UI.checkTaskName(
                  inputField,
                  inputField.value.trim(),
                  oldName,
                  projName,
                  false,
                  false,
                ),
              ); //

              inputField.addEventListener("blur", function () {
                if (inputField.value === "") {
                  inputField.value = "New Task";
                }

                if (
                  projName === "Today" ||
                  projName === "Week" ||
                  projName === "Month"
                ) {
                  _storage_js__WEBPACK_IMPORTED_MODULE_2__[
                    "default"
                  ].renameTimeTask(
                    textbox.innerHTML.trim(),
                    inputField.value.trim(),
                  );
                } else {
                  _storage_js__WEBPACK_IMPORTED_MODULE_2__[
                    "default"
                  ].renameTask(
                    textbox.innerHTML.trim(),
                    inputField.value.trim(),
                    projName,
                  ); // Modules
                }

                const name = textbox.innerHTML.trim(); //

                textbox.innerHTML = inputField.value.trim();
                taskDOM.id = inputField.value.trim();

                taskDOM.replaceChild(textbox, inputField);

                UI.checkTaskName(
                  textbox,
                  inputField.value.trim(),
                  name,
                  projName,
                  true,
                  inputField.classList.contains("input-error"),
                ); //
              });
            }
          }

          static checkTaskName(
            inputField,
            name,
            oldName,
            projName,
            isBlur,
            okDel,
          ) {
            const list =
              _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoList();
            let isSame = false;

            list.getProjects().forEach((proj) => {
              if (proj.getName() == projName) {
                proj.getTasks().forEach((task) => {
                  if (isBlur) {
                    if (okDel && task.getName() == name) {
                      console.log(name);
                      inputField.classList.add("input-error");
                      UI.checkTask(inputField.parentNode, true); //fixme
                      okDel = false;
                    }
                  } else {
                    if (task.getName() == name && name != oldName) {
                      isSame = true;
                      inputField.classList.add("input-error");
                    } else if (!isSame) {
                      inputField.classList.remove("input-error");
                      isSame = false;
                    }
                  }
                });
              }
            });
          }

          static initTask(task) {
            task.children[1].addEventListener("click", () => UI.nameTask(task));
            task.firstElementChild.addEventListener("click", () =>
              UI.checkTask(task, false),
            );
            task.lastElementChild.addEventListener("click", () =>
              UI.dateTask(task),
            );
          }

          static dateTask(taskDOM) {
            const dateSpan = taskDOM.lastElementChild;

            const inputField = document.createElement("input");
            inputField.type = "date";
            inputField.classList.add("date-task");
            if (dateSpan.innerHTML !== "No Date") {
              inputField.value = dateSpan.innerHTML;
            }

            dateSpan.parentNode.replaceChild(inputField, dateSpan);

            inputField.focus();

            inputField.addEventListener("blur", function () {
              let formattedDate;
              if (inputField.value === "") {
                formattedDate = "No Date";
              } else {
                //Formatting Date
                const unformattedDate = inputField.value;
                formattedDate =
                  unformattedDate.split("-")[2] +
                  "-" +
                  unformattedDate.split("-")[1] +
                  "-" +
                  unformattedDate.split("-")[0];
              }
              const projName = document.querySelector(".title").innerHTML;
              const taskName = inputField.parentNode.children[1].innerHTML;

              _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].dateTask(
                formattedDate,
                taskName,
                projName,
              ); // Modules

              dateSpan.innerHTML = formattedDate;
              taskDOM.id = formattedDate;

              taskDOM.replaceChild(dateSpan, inputField);
            });
          }

          static checkTask(task, sameName = false) {
            const name = task.id;

            const checked = document.createElement("div");
            checked.classList.add("checked");
            checked.classList.add("check-box");
            checked.innerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M17,17H7V7H17V17Z" /></svg>';

            task.firstElementChild.replaceChild(
              checked,
              task.firstElementChild.firstElementChild,
            );

            task.children[1].style.textDecoration = "line-through";

            setTimeout(() => {
              task.remove();
            }, 250);

            const projName = document.querySelector(".title").innerHTML;

            if (
              projName == "Today" ||
              projName == "Week" ||
              projName == "Month"
            ) {
              _storage_js__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ].deleteTimeTask(name, sameName);
            } else {
              _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].deleteTask(
                name,
                projName,
                sameName,
              );
            }
          }
        }

        /***/
      },

    /***/ "./src/modules/list.js":
      /*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ List,
          /* harmony export */
        });
        /* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
        /* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");

        class List {
          constructor() {
            this.projects = [];
            this.projects.push(
              new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Inbox"),
            );
            this.projects.push(
              new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Today"),
            );
            this.projects.push(
              new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Week"),
            );
            this.projects.push(
              new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Month"),
            );
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
              const indexToDelete = this.projects.findIndex(
                (project) => project.getName() === targetName,
              );

              if (indexToDelete !== -1) {
                const secondIndexToDelete = this.projects.findIndex(
                  (project, index) =>
                    index !== indexToDelete && project.getName() === targetName,
                );

                if (secondIndexToDelete !== -1) {
                  this.projects.splice(secondIndexToDelete, 1);
                }
              }
            } else {
              const projectToDelete = this.projects.find(
                (project) => project.getName() == targetName,
              );

              this.projects.splice(this.projects.indexOf(projectToDelete), 1);
            }
          }

          renameProject(name, newName) {
            const proj = this.projects.find(
              (project) => project.getName() == name,
            );

            proj.setName(newName);
          }

          addTask(task, projName) {
            const proj = this.projects.find(
              (project) => project.getName() == projName,
            );

            proj.addTask(task);
          }

          renameTask(name, newName, projName) {
            const proj = this.projects.find(
              (project) => project.getName() == projName,
            );

            proj.renameTask(name, newName);
          }

          dateTask(date, taskName, projName) {
            const proj = this.projects.find(
              (project) => project.getName() == projName,
            );

            proj.dateTask(date, taskName);
          }

          deleteTask(task, projName, sameName) {
            const proj = this.projects.find(
              (project) => project.getName() == projName,
            );

            proj.deleteTask(task, sameName);
          }
        }

        /***/
      },

    /***/ "./src/modules/project.js":
      /*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ Project,
          /* harmony export */
        });
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
            this.tasks.push(task);
          }

          getCount() {
            let count = 0;
            for (let task in this.tasks) {
              ++count;
            }
            return count;
          }

          renameTask(name, newName) {
            const TODO = this.tasks.find((task) => task.getName() == name);
            if (TODO !== undefined) {
              TODO.setName(newName);
            }
          }

          dateTask(date, name) {
            const TODO = this.tasks.find((task) => task.getName() == name);
            TODO.setDate(date);
          }

          deleteTask(name, sameName) {
            if (sameName) {
              const firstTODOIndex = this.tasks.findIndex(
                (task) => task.getName() === name,
              );

              if (firstTODOIndex !== -1) {
                const secondTODOIndex = this.tasks.findIndex(
                  (task, index) =>
                    index !== firstTODOIndex && task.getName() === name,
                );

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

        /***/
      },

    /***/ "./src/modules/storage.js":
      /*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ Storage,
          /* harmony export */
        });
        /* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");
        /* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
        /* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./list.js */ "./src/modules/list.js");

        class Storage {
          static saveTodoList(data) {
            localStorage.setItem("todoList", JSON.stringify(data));
          }

          static getTodoList() {
            const todoList = Object.assign(
              new _list_js__WEBPACK_IMPORTED_MODULE_2__["default"](),
              JSON.parse(localStorage.getItem("todoList")),
            );

            todoList.setProjects(
              todoList
                .getProjects()
                .map((project) =>
                  Object.assign(
                    new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
                    project,
                  ),
                ),
            );

            todoList
              .getProjects()
              .forEach((project) =>
                project.setTasks(
                  project
                    .getTasks()
                    .map((todo) =>
                      Object.assign(
                        new _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"](),
                        todo,
                      ),
                    ),
                ),
              );

            return todoList;
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

          static deleteTimeTask(task, sameName) {
            const todoList = Storage.getTodoList();
            todoList.getProjects().forEach((project) => {
              project.deleteTask(task, sameName);
            });
            Storage.saveTodoList(todoList);
          }

          static renameTimeTask(name, newName) {
            const todoList = Storage.getTodoList();
            todoList.getProjects().forEach((project) => {
              project.renameTask(name, newName);
            });
            Storage.saveTodoList(todoList);
          }
        }

        /***/
      },

    /***/ "./src/modules/todo.js":
      /*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ TODO,
          /* harmony export */
        });
        class TODO {
          constructor(name, date = "No Date") {
            this.name = name;
            this.date = date;
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

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./style.css */ "./src/style.css");
    /* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./modules/UI.js */ "./src/modules/UI.js");

    document.addEventListener(
      "DOMContentLoaded",
      _modules_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadHome,
    );
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0EsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2I0QjtBQUNNO0FBQ0E7QUFDZ0I7OztBQUduQzs7O0FBR2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsUUFBUSxtREFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qixt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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM5RWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDdkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ1k7O0FBRWhDLDhDQUE4QyxzREFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9saXN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJTYW4gRnJhbmNpc2NvXCI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vYXBwbGVzb2NpYWwuczMuYW1hem9uYXdzLmNvbS9hc3NldHMvc3R5bGVzL2ZvbnRzL3NhbmZyYW5jaXNjby9zYW5mcmFuY2lzY29kaXNwbGF5LXJlZ3VsYXItd2ViZm9udC53b2ZmXCIpO1xuICB9XG5cbjpyb290LmxpZ2h0IHtcbiAgICAtLWFzaWRlLWNvbDogI2Y1ZjVmNTtcbiAgICAtLW9sLWNvbDogI2U4ZThlODtcbiAgICAtLW1haW4tY29sOiAjRkZGRkZGO1xuICAgIC0tc2lkZS10ZXh0LWNvbDogIzNCM0U0MTtcbiAgICAtLXNpZGUtc2VjLXRleHQtY29sOiAjNjA2NDY4O1xuICAgIC0tc2VsLWNvbDogI0RCREVFMTtcbiAgICAtLW1haW4tdGV4dC1jb2w6ICMwQjBEMTE7XG4gICAgLS1pbnB1dC1jb2w6IHJnYmEoMTk1LCAxOTksIDIwMiwgMC43KTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIDpyb290LmRhcmsge1xuICAgICAgICAtLWFzaWRlLWNvbDogIzFjMWMxYztcbiAgICAgICAgLS1vbC1jb2w6ICMyNjI2MjY7XG4gICAgICAgIC0tbWFpbi1jb2w6ICMxYzFjMWM7XG4gICAgICAgIC0tc2lkZS10ZXh0LWNvbDogI2QxZDFkMTtcbiAgICAgICAgLS1zaWRlLXNlYy10ZXh0LWNvbDogI2E4YThhODtcbiAgICAgICAgLS1zZWwtY29sOiAjMmUyZTJlO1xuICAgICAgICAtLW1haW4tdGV4dC1jb2w6ICNmNWY1ZjU7XG4gICAgICAgIC0taW5wdXQtY29sOiByZ2JhKDg0LCA4NCwgODQsIDAuNyk7XG4gICAgfVxufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogXCJTYW4gRnJhbmNpc2NvXCI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ1cHggNGZyIDMzZnI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sKTtcbn1cblxuLyogXG5TSURFQkFSXG4qL1xuYXNpZGUge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hc2lkZS1jb2wpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDFmciAzcmVtO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1vbC1jb2wpO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG5cbi5hc2lkZS11cHBlci1jb250IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tb2wtY29sKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmFzaWRlLWlubmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgZ2FwOiAycmVtO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmFzaWRlLXRvcCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIGdhcDogM3JlbTtcbn1cblxuLnNpZGUtdGFiIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHggMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjZyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwLjRyZW07XG59XG5cbi5zaWRlLXRhYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsLWNvbCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xufVxuXG4uc2lkZS10YWItc2VsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWwtY29sKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuXG4uc2lkZS10YWIgc3ZnIHtcbiAgICBwYWRkaW5nLXRvcDogMC4ycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmaWxsOiB2YXIoLS1zaWRlLXRleHQtY29sKVxufVxuXG4uc2lkZS10YWIgaDEge1xuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXRleHQtY29sKTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnRpbWUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uYXNpZGUtYm90dG9tIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBncmlkLXJvdzogMyAvIDQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tb2wtY29sKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hc2lkZS1ib3R0b20taW5uZXIge1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuLm5ldy1wcm9qZWN0LCAubmV3LXByb2plY3Qgc3ZnIHtcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1zZWMtdGV4dC1jb2wpO1xuICAgIGZpbGw6IHZhcigtLXNpZGUtc2VjLXRleHQtY29sKTtcbn1cblxuLm5ldy1wcm9qZWN0IHtcbiAgICBjdXJzb3I6IHRleHQ7XG59XG5cbi5uYW1lLXByb2oge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXNlYy10ZXh0LWNvbCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ubmFtZS1wcm9qOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lXG59XG5cbm1haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAxZnIgM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuXG4udGFza3MtY29udGFpbmVyIHtcbiAgICBtYXgtaGVpZ2h0OiA3MHZoO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLm1haW4tdXBwZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1vbC1jb2wpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbn1cblxuLm1haW4tdXBwZXIgc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1zaWRlLXRleHQtY29sKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuXG4ubWFpbi1pbm5lciB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDk1JTtcbiAgICAvKiBvdmVyZmxvdy15OiBzY3JvbGw7ICovXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xufVxuXG4uYWRkLXRvLWRvIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2wpO1xufVxuXG4uYWRkLXRvLWRvIHN2ZyB7XG4gICAgZmlsbDogdmFyKC0tbWFpbi10ZXh0LWNvbCk7XG59XG5cbi5hZGQtdG8tZG8tY29udGFpbmVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWwtY29sKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG59XG5cbi5jaGVjay1ib3gge1xuICAgIHBhZGRpbmctdG9wOiAwLjNyZW07XG59XG5cbi50YXNrIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjJweCBhdXRvIDEwcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbCk7XG4gICAgcGFkZGluZzogMC4ycmVtIDA7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cblxuLnRhc2sgc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1tYWluLXRleHQtY29sKTtcbn1cblxuLnRhc2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbC1jb2wpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbn1cblxuLm5hbWUtdGFzayB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHZhcigtLXNpZGUtc2VjLXRleHQtY29sKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5uYW1lLXRhc2s6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pbmQtdGFzayB7XG4gICAgY29sb3I6IHZhcigtLXNpZGUtc2VjLXRleHQtY29sKTtcbiAgICBjdXJzb3I6IHRleHQ7XG59XG5cbi50aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2wpO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubWFpbi1ib3R0b20ge1xuICAgIGdyaWQtcm93OiAzIC8gNDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tb2wtY29sKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG5cbi5mb290ZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDMwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXRleHQtY29sKTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmZvb3RlciBzdmcge1xuICAgIGZpbGw6IHZhcigtLXNpZGUtdGV4dC1jb2wpO1xufVxuXG4ubmV3LXByb2plY3Qge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnIgMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07XG59XG5cbi5kYXRlLXNwYW4ge1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4uaW5wdXQtZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5wcm9qZWN0LW5hbWUge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZGF0ZS10YXNrIHtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtY29sKTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgICBtYXgtaGVpZ2h0OiA3MHZoO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnByb2otY2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIycHggYXV0byAxMHJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2wpO1xuICAgIHBhZGRpbmc6IDAuMnJlbSAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbi5wcm9qLWNhcmQgc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1tYWluLXRleHQtY29sKTtcbn1cblxuLnByb2otY2FyZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsLWNvbCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xufVxuXG5cblxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLDBIQUEwSDtFQUM1SDs7QUFFRjtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSTtRQUNJLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLHdCQUF3QjtRQUN4Qiw0QkFBNEI7UUFDNUIsa0JBQWtCO1FBQ2xCLHdCQUF3QjtRQUN4QixrQ0FBa0M7SUFDdEM7QUFDSjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMscUJBQXFCO0lBQ3JCLGlDQUFpQztBQUNyQzs7QUFFQTs7Q0FFQztBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLHFCQUFxQjtJQUNyQixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNDQUFzQztJQUN0QyxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVEQUF1RDtJQUN2RCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxl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RUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0NBQWtDO0lBQ2xDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIlNhbiBGcmFuY2lzY29cXFwiO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybChcXFwiaHR0cHM6Ly9hcHBsZXNvY2lhbC5zMy5hbWF6b25hd3MuY29tL2Fzc2V0cy9zdHlsZXMvZm9udHMvc2FuZnJhbmNpc2NvL3NhbmZyYW5jaXNjb2Rpc3BsYXktcmVndWxhci13ZWJmb250LndvZmZcXFwiKTtcXG4gIH1cXG5cXG46cm9vdC5saWdodCB7XFxuICAgIC0tYXNpZGUtY29sOiAjZjVmNWY1O1xcbiAgICAtLW9sLWNvbDogI2U4ZThlODtcXG4gICAgLS1tYWluLWNvbDogI0ZGRkZGRjtcXG4gICAgLS1zaWRlLXRleHQtY29sOiAjM0IzRTQxO1xcbiAgICAtLXNpZGUtc2VjLXRleHQtY29sOiAjNjA2NDY4O1xcbiAgICAtLXNlbC1jb2w6ICNEQkRFRTE7XFxuICAgIC0tbWFpbi10ZXh0LWNvbDogIzBCMEQxMTtcXG4gICAgLS1pbnB1dC1jb2w6IHJnYmEoMTk1LCAxOTksIDIwMiwgMC43KTtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgICA6cm9vdC5kYXJrIHtcXG4gICAgICAgIC0tYXNpZGUtY29sOiAjMWMxYzFjO1xcbiAgICAgICAgLS1vbC1jb2w6ICMyNjI2MjY7XFxuICAgICAgICAtLW1haW4tY29sOiAjMWMxYzFjO1xcbiAgICAgICAgLS1zaWRlLXRleHQtY29sOiAjZDFkMWQxO1xcbiAgICAgICAgLS1zaWRlLXNlYy10ZXh0LWNvbDogI2E4YThhODtcXG4gICAgICAgIC0tc2VsLWNvbDogIzJlMmUyZTtcXG4gICAgICAgIC0tbWFpbi10ZXh0LWNvbDogI2Y1ZjVmNTtcXG4gICAgICAgIC0taW5wdXQtY29sOiByZ2JhKDg0LCA4NCwgODQsIDAuNyk7XFxuICAgIH1cXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2FuIEZyYW5jaXNjb1xcXCI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0NXB4IDRmciAzM2ZyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sKTtcXG59XFxuXFxuLyogXFxuU0lERUJBUlxcbiovXFxuYXNpZGUge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFzaWRlLWNvbCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSAxZnIgM3JlbTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1vbC1jb2wpO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXG59XFxuXFxuLmFzaWRlLXVwcGVyLWNvbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tb2wtY29sKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uYXNpZGUtaW5uZXIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmFzaWRlLXRvcCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGdhcDogM3JlbTtcXG59XFxuXFxuLnNpZGUtdGFiIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHggMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNnJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjRyZW07XFxufVxcblxcbi5zaWRlLXRhYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbC1jb2wpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi5zaWRlLXRhYi1zZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWwtY29sKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XFxufVxcblxcbi5zaWRlLXRhYiBzdmcge1xcbiAgICBwYWRkaW5nLXRvcDogMC4ycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbGw6IHZhcigtLXNpZGUtdGV4dC1jb2wpXFxufVxcblxcbi5zaWRlLXRhYiBoMSB7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXRleHQtY29sKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50aW1lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmFzaWRlLWJvdHRvbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1vbC1jb2wpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFzaWRlLWJvdHRvbS1pbm5lciB7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LCAubmV3LXByb2plY3Qgc3ZnIHtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtc2VjLXRleHQtY29sKTtcXG4gICAgZmlsbDogdmFyKC0tc2lkZS1zZWMtdGV4dC1jb2wpO1xcbn1cXG5cXG4ubmV3LXByb2plY3Qge1xcbiAgICBjdXJzb3I6IHRleHQ7XFxufVxcblxcbi5uYW1lLXByb2oge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1zZWMtdGV4dC1jb2wpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubmFtZS1wcm9qOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZVxcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gMWZyIDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVyIHtcXG4gICAgbWF4LWhlaWdodDogNzB2aDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ubWFpbi11cHBlciB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1vbC1jb2wpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XFxufVxcblxcbi5tYWluLXVwcGVyIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLXNpZGUtdGV4dC1jb2wpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXG59XFxuXFxuLm1haW4taW5uZXIge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDk1JTtcXG4gICAgLyogb3ZlcmZsb3cteTogc2Nyb2xsOyAqL1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uYWRkLXRvLWRvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbCk7XFxufVxcblxcbi5hZGQtdG8tZG8gc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tbWFpbi10ZXh0LWNvbCk7XFxufVxcblxcbi5hZGQtdG8tZG8tY29udGFpbmVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsLWNvbCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLmNoZWNrLWJveCB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjNyZW07XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMnB4IGF1dG8gMTByZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sKTtcXG4gICAgcGFkZGluZzogMC4ycmVtIDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbi50YXNrIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLW1haW4tdGV4dC1jb2wpO1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbC1jb2wpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi5uYW1lLXRhc2sge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1zZWMtdGV4dC1jb2wpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubmFtZS10YXNrOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmluZC10YXNrIHtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtc2VjLXRleHQtY29sKTtcXG4gICAgY3Vyc29yOiB0ZXh0O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbCk7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1haW4tYm90dG9tIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDZmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLW9sLWNvbCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAzMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlLXRleHQtY29sKTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5mb290ZXIgc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tc2lkZS10ZXh0LWNvbCk7XFxufVxcblxcbi5uZXctcHJvamVjdCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnIgMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMC4ycmVtO1xcbn1cXG5cXG4uZGF0ZS1zcGFuIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5pbnB1dC1lcnJvciB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmRhdGUtdGFzayB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtY29sKTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciB7XFxuICAgIG1heC1oZWlnaHQ6IDcwdmg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLnByb2otY2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjJweCBhdXRvIDEwcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbCk7XFxuICAgIHBhZGRpbmc6IDAuMnJlbSAwO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ucHJvai1jYXJkIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLW1haW4tdGV4dC1jb2wpO1xcbn1cXG5cXG4ucHJvai1jYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsLWNvbCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBUT0RPIGZyb20gJy4vdG9kby5qcydcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcydcbmltcG9ydCB7IGZvcm1hdCwgcGFyc2UsIGFkZERheXMgfSBmcm9tICdkYXRlLWZucyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuXG5cbiAgICBzdGF0aWMgbG9hZEhvbWUoKSB7XG4gICAgICAgIFVJLnNpZGViYXIoKTtcbiAgICAgICAgVUkubWFpbigpO1xuICAgICAgICBVSS5sb2FkUHJvamVjdHMoKTtcbiAgICAgICAgVUkub3BlblByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0luYm94JyksIHRydWUpXG4gICAgICAgIFVJLm1vZGUodHJ1ZSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbG9hZFByb2plY3RzKCkge1xuICAgICAgICBTdG9yYWdlLmdldFRvZG9MaXN0KCkuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcHJvamVjdC5nZXROYW1lKCkgIT09ICdJbmJveCcgJiZcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldE5hbWUoKSAhPT0gJ1RvZGF5JyAmJlxuICAgICAgICAgICAgICAgIHByb2plY3QuZ2V0TmFtZSgpICE9PSAnV2VlaycgJiZcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldE5hbWUoKSAhPT0gJ01vbnRoJyAmJlxuICAgICAgICAgICAgICAgIHByb2plY3QuZ2V0TmFtZSgpICE9PSAnQW55dGltZSdcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIFVJLmFkZFByb2plY3QocHJvamVjdC5nZXROYW1lKCksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBzaWRlYmFyKCkge1xuICAgICAgICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG4gICAgICAgIGFzaWRlLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFzaWRlLXVwcGVyLWNvbnRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhc2lkZS1pbm5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFzaWRlLXRvcFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLXRhYiBzaWRlLXRhYi1zZWxcIiBpZD1cIkluYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTksMTVIMTVBMywzIDAgMCwxIDEyLDE4QTMsMyAwIDAsMSA5LDE1SDVWNUgxOU0xOSwzSDVDMy44OSwzIDMsMy45IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWNUEyLDIgMCAwLDAgMTksM1pcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkluYm94PC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtdGFiXCIgaWQ9XCJUb2RheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLDE1LjM5TDguMjQsMTcuNjZMOS4yMywxMy4zOEw1LjkxLDEwLjVMMTAuMjksMTAuMTNMMTIsNi4wOUwxMy43MSwxMC4xM0wxOC4wOSwxMC41TDE0Ljc3LDEzLjM4TDE1Ljc2LDE3LjY2TTIyLDkuMjRMMTQuODEsOC42M0wxMiwyTDkuMTksOC42M0wyLDkuMjRMNy40NSwxMy45N0w1LjgyLDIxTDEyLDE3LjI3TDE4LjE4LDIxTDE2LjU0LDEzLjk3TDIyLDkuMjRaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Ub2RheTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS10YWJcIiBpZD1cIldlZWtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05LDEwSDdWMTJIOVYxME0xMywxMEgxMVYxMkgxM1YxME0xNywxMEgxNVYxMkgxN1YxME0xOSwzSDE4VjFIMTZWM0g4VjFINlYzSDVDMy44OSwzIDMsMy45IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWNUEyLDIgMCAwLDAgMTksM00xOSwxOUg1VjhIMTlWMTlaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5XZWVrPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLXRhYlwiIGlkPVwiTW9udGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05LDEwVjEySDdWMTBIOU0xMywxMFYxMkgxMVYxMEgxM00xNywxMFYxMkgxNVYxMEgxN00xOSwzQTIsMiAwIDAsMSAyMSw1VjE5QTIsMiAwIDAsMSAxOSwyMUg1QzMuODksMjEgMywyMC4xIDMsMTlWNUEyLDIgMCAwLDEgNSwzSDZWMUg4VjNIMTZWMUgxOFYzSDE5TTE5LDE5VjhINVYxOUgxOU05LDE0VjE2SDdWMTRIOU0xMywxNFYxNkgxMVYxNEgxM00xNywxNFYxNkgxNVYxNEgxN1pcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk1vbnRoPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS10YWJcIiBpZD1cIlByb2plY3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIsM0M3LjU4LDMgNCw0Ljc5IDQsN0M0LDkuMjEgNy41OCwxMSAxMiwxMUMxNi40MiwxMSAyMCw5LjIxIDIwLDdDMjAsNC43OSAxNi40MiwzIDEyLDNNNCw5VjEyQzQsMTQuMjEgNy41OCwxNiAxMiwxNkMxNi40MiwxNiAyMCwxNC4yMSAyMCwxMlY5QzIwLDExLjIxIDE2LjQyLDEzIDEyLDEzQzcuNTgsMTMgNCwxMS4yMSA0LDlNNCwxNFYxN0M0LDE5LjIxIDcuNTgsMjEgMTIsMjFDMTYuNDIsMjEgMjAsMTkuMjEgMjAsMTdWMTRDMjAsMTYuMjEgMTYuNDIsMTggMTIsMThDNy41OCwxOCA0LDE2LjIxIDQsMTRaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Qcm9qZWN0czwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXNpZGUtYm90dG9tXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXNpZGUtYm90dG9tLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtdGFiIGFkZC1wcm9qZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTksMTNIMTNWMTlIMTFWMTNINVYxMUgxMVY1SDEzVjExSDE5VjEzWlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5BZGQgUHJvamVjdDwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YDtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXNpZGUpO1xuICAgIFVJLmluaXRCdXR0b25zKCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgaW5pdEJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZS10YWInKTtcbiAgICAgICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG5cbiAgICAgICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLnRhYih0YWIpKSk7XG4gICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLmFkZFByb2plY3QoJ05ldyBQcm9qZWN0JykpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHRhYihUYWIpIHtcbiAgICAgICAgVUkucmVtb3ZlVGFiU3R5bGUoKTtcbiAgICAgICAgVUkudGFiU3R5bGUoVGFiKTtcbiAgICAgICAgVUkucmVtb3ZlVGFiKCk7XG4gICAgICAgIGlmIChUYWIuaWQgPT09ICdUb2RheScpIHtcbiAgICAgICAgICAgIFVJLm9wZW5Ub2RheShUYWIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoVGFiLmlkID09PSAnV2VlaycpIHtcbiAgICAgICAgICAgIFVJLm9wZW5XZWVrKFRhYilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChUYWIuaWQgPT09ICdNb250aCcpIHtcbiAgICAgICAgICAgIFVJLm9wZW5Nb250aChUYWIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoVGFiLmlkID09PSAnUHJvamVjdHMnKSB7XG4gICAgICAgICAgICBVSS5vcGVuUHJvakRpc3AoVGFiKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgVUkub3BlblByb2plY3QoVGFiLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBzdGF0aWMgb3BlblRvZGF5KFRhYikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS5pbm5lckhUTUwgPSBUYWIuaWQ7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG8tZG8nKS5zdHlsZSA9ICdkaXNwbGF5Om5vbmUnXG4gICAgICAgIFxuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcblxuICAgICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2opID0+IHtcbiAgICAgICAgICAgIHByb2ouZ2V0VGFza3MoKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSB0YXNrLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGFza0RhdGUgIT0gJ05vIERhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtkYXksIG1vbnRoLCB5ZWFyXSA9IHRhc2tEYXRlLnNwbGl0KCctJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZERhdGUgPSBuZXcgRGF0ZShgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZERhdGUuZ2V0VGltZSgpID09PSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFVJLmFkZFRhc2sodGFzay5nZXROYW1lKCksIHRhc2suZ2V0RGF0ZSgpLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBzdGF0aWMgb3BlbldlZWsoVGFiKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLmlubmVySFRNTCA9IFRhYi5pZDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10by1kbycpLnN0eWxlID0gJ2Rpc3BsYXk6bm9uZSdcblxuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpOyBcbiAgICAgICAgXG4gICAgICAgIHRvZG9MaXN0LmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvaikgPT4ge1xuICAgICAgICAgICAgcHJvai5nZXRUYXNrcygpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IHRhc2suZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0YXNrRGF0ZSAhPT0gJ05vIERhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtkYXksIG1vbnRoLCB5ZWFyXSA9IHRhc2tEYXRlLnNwbGl0KCctJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZERhdGUgPSBuZXcgRGF0ZShgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgY3VycmVudCB3ZWVrXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0T2ZXZWVrID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpIC0gdG9kYXkuZ2V0RGF5KCkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmRPZldlZWsgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkgKyAoNiAtIHRvZGF5LmdldERheSgpKSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkRGF0ZSA+PSBzdGFydE9mV2VlayAmJiBwYXJzZWREYXRlIDw9IGVuZE9mV2Vlaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgVUkuYWRkVGFzayh0YXNrLmdldE5hbWUoKSwgdGFzay5nZXREYXRlKCksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgICAgICAgIFxuICAgIH1cblxuXG4gICAgc3RhdGljIG9wZW5Nb250aChUYWIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykuaW5uZXJIVE1MID0gVGFiLmlkO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvLWRvJykuc3R5bGUgPSAnZGlzcGxheTpub25lJ1xuXG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7IFxuXG4gICAgICAgIHRvZG9MaXN0LmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvaikgPT4ge1xuICAgICAgICAgICAgcHJvai5nZXRUYXNrcygpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IHRhc2suZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0YXNrRGF0ZSAhPT0gJ05vIERhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtkYXksIG1vbnRoLCB5ZWFyXSA9IHRhc2tEYXRlLnNwbGl0KCctJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZERhdGUgPSBuZXcgRGF0ZShgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgY3VycmVudCBtb250aFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydE9mTW9udGggPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kT2ZNb250aCA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCkgKyAxLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWREYXRlID49IHN0YXJ0T2ZNb250aCAmJiBwYXJzZWREYXRlIDw9IGVuZE9mTW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFVJLmFkZFRhc2sodGFzay5nZXROYW1lKCksIHRhc2suZ2V0RGF0ZSgpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgb3BlblByb2pEaXNwKFRhYikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS5pbm5lckhUTUwgPSBUYWIuaWQ7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG8tZG8nKS5zdHlsZSA9ICdkaXNwbGF5Om5vbmUnXG5cbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZHMtY29udGFpbmVyJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWlubmVyJykuYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgICAgICAgU3RvcmFnZS5nZXRUb2RvTGlzdCgpLmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpICE9PSAnSW5ib3gnICYmIHByb2plY3QuZ2V0TmFtZSgpICE9PSAnVG9kYXknICYmIHByb2plY3QuZ2V0TmFtZSgpICE9PSAnV2VlaycgJiYgcHJvamVjdC5nZXROYW1lKCkgIT09ICdNb250aCcpIHtcbiAgICAgICAgICAgICAgICBVSS5hZGRQcm9qQ2FyZChwcm9qZWN0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxuXG5cbiAgICBzdGF0aWMgYWRkUHJvakNhcmQocHJvamVjdCkge1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgncHJvai1jYXJkJyk7XG4gICAgICAgIGNhcmQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEzLDIuMDNWMi4wNUwxMyw0LjA1QzE3LjM5LDQuNTkgMjAuNSw4LjU4IDE5Ljk2LDEyLjk3QzE5LjUsMTYuNjEgMTYuNjQsMTkuNSAxMywxOS45M1YyMS45M0MxOC41LDIxLjM4IDIyLjUsMTYuNSAyMS45NSwxMUMyMS41LDYuMjUgMTcuNzMsMi41IDEzLDIuMDNNMTEsMi4wNkM5LjA1LDIuMjUgNy4xOSwzIDUuNjcsNC4yNkw3LjEsNS43NEM4LjIyLDQuODQgOS41Nyw0LjI2IDExLDQuMDZWMi4wNk00LjI2LDUuNjdDMyw3LjE5IDIuMjUsOS4wNCAyLjA1LDExSDQuMDVDNC4yNCw5LjU4IDQuOCw4LjIzIDUuNjksNy4xTDQuMjYsNS42N00yLjA2LDEzQzIuMjYsMTQuOTYgMy4wMywxNi44MSA0LjI3LDE4LjMzTDUuNjksMTYuOUM0LjgxLDE1Ljc3IDQuMjQsMTQuNDIgNC4wNiwxM0gyLjA2TTcuMSwxOC4zN0w1LjY3LDE5Ljc0QzcuMTgsMjEgOS4wNCwyMS43OSAxMSwyMlYyMEM5LjU4LDE5LjgyIDguMjMsMTkuMjUgNy4xLDE4LjM3TTE2LjgyLDE1LjE5TDEyLjcxLDExLjA4QzEzLjEyLDEwLjA0IDEyLjg5LDguODIgMTIuMDMsNy45N0MxMS4xMyw3LjA2IDkuNzgsNi44OCA4LjY5LDcuMzhMMTAuNjMsOS4zMkw5LjI4LDEwLjY4TDcuMjksOC43M0M2Ljc1LDkuODIgNywxMS4xNyA3Ljg4LDEyLjA4QzguNzQsMTIuOTQgOS45NiwxMy4xNiAxMSwxMi43NkwxNS4xMSwxNi44NkMxNS4yOSwxNy4wNSAxNS41NiwxNy4wNSAxNS43NCwxNi44NkwxNi43OCwxNS44M0MxNywxNS42NSAxNywxNS4zMyAxNi44MiwxNS4xOVpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPGgyPiR7cHJvamVjdC5nZXROYW1lKCl9PC9oMj5cbiAgICAgICAgPHNwYW4+VGFza3M6ICR7cHJvamVjdC5nZXRDb3VudCgpfTwvc3Bhbj5gXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1jb250YWluZXInKS5hcHBlbmRDaGlsZChjYXJkKVxuICAgIH1cblxuXG4gICAgc3RhdGljIHJlbW92ZVRhYlN0eWxlKCkge1xuICAgICAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGUtdGFiJyk7XG4gICAgICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZS10YWItc2VsJykpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHRhYlN0eWxlKGUpIHtcbiAgICAgICAgZS5jbGFzc0xpc3QuYWRkKCdzaWRlLXRhYi1zZWwnKTtcbiAgICB9XG5cbiAgICBcbiAgICBzdGF0aWMgZGVsUHJvaihwcm9qLCBzYW1lTmFtZSA9IGZhbHNlKSB7XG4gICAgICAgIHByb2oucGFyZW50Tm9kZS5jaGlsZHJlblsxXS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgICBjb25zdCBuYW1lID0gcHJvai5wYXJlbnROb2RlLmlkO1xuXG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHByb2oucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpOyBcbiAgICAgICAgICAgIFVJLnRhYihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSW5ib3gnKSk7XG4gICAgICAgIH0sIDI1MCk7IFxuXG5cbiAgICAgICAgU3RvcmFnZS5kZWxldGVQcm9qZWN0KG5hbWUsIHNhbWVOYW1lKTsgLy9Nb2R1bGVzXG4gICAgfVxuXG5cbiAgICBzdGF0aWMgYWRkUHJvamVjdChwcm9qTmFtZSwgcGFnZUxvYWQgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBwcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2ouaWQgPSAncHJvamVjdHNDb250JztcbiAgICAgICAgcHJvai5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLXRhYiBuZXctcHJvamVjdFwiIGlkPVwiJHtwcm9qTmFtZX1cIj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiwyMEE4LDggMCAwLDEgNCwxMkE4LDggMCAwLDEgMTIsNEE4LDggMCAwLDEgMjAsMTJBOCw4IDAgMCwxIDEyLDIwTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyTTE2LjI0LDcuNzZDMTUuMDcsNi41OCAxMy41Myw2IDEyLDZWMTJMNy43NiwxNi4yNEMxMC4xLDE4LjU4IDEzLjksMTguNTggMTYuMjQsMTYuMjRDMTguNTksMTMuOSAxOC41OSwxMC4xIDE2LjI0LDcuNzZaXCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+JHtwcm9qTmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLDJDMTcuNTMsMiAyMiw2LjQ3IDIyLDEyQzIyLDE3LjUzIDE3LjUzLDIyIDEyLDIyQzYuNDcsMjIgMiwxNy41MyAyLDEyQzIsNi40NyA2LjQ3LDIgMTIsMk0xNyw3SDE0LjVMMTMuNSw2SDEwLjVMOS41LDdIN1Y5SDE3VjdNOSwxOEgxNUExLDEgMCAwLDAgMTYsMTdWMTBIOFYxN0ExLDEgMCAwLDAgOSwxOFpcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHByb2opO1xuXG4gICAgXG4gICAgVUkuaW5pdFByb2plY3QocHJvak5hbWUsIHBhZ2VMb2FkKTtcblxuICAgIGlmKHByb2pOYW1lID09ICdOZXcgUHJvamVjdCcgJiYgIXBhZ2VMb2FkKSB7XG4gICAgICAgIFN0b3JhZ2UuYWRkUHJvamVjdChuZXcgUHJvamVjdCgnTmV3IFByb2plY3QnKSk7IC8vTW9kdWxlc1xuICAgICAgICBVSS5vcGVuUHJvamVjdChwcm9qLmZpcnN0RWxlbWVudENoaWxkKTsgXG4gICAgfVxuICAgIH1cblxuXG4gICAgc3RhdGljIGluaXRQcm9qZWN0KHByb2pOYW1lLCBwYWdlTG9hZCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LXByb2plY3QnKVtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LXByb2plY3QnKS5sZW5ndGggLSAxXTtcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLnRhYihwcm9qZWN0KSk7XG5cbiAgICAgICAgaWYgKHByb2pOYW1lID09ICdOZXcgUHJvamVjdCcgJiYgIXBhZ2VMb2FkKSB7XG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpZGUtdGFiLXNlbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW5hbWUnKVtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1uYW1lJykubGVuZ3RoIC0gMV07XG4gICAgICAgIHRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5yZW5hbWVQcm9qZWN0KHRleHQpKTtcblxuICAgICAgICBjb25zdCBkZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsJylbZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbCcpLmxlbmd0aCAtIDFdO1xuICAgICAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5kZWxQcm9qKGRlbCkpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJlbmFtZVByb2plY3QoaW5wdXQpIHtcbiAgICAgICAgaWYgKGlucHV0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlLXRhYi1zZWwnKSkge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgIGlucHV0RmllbGQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIGlucHV0RmllbGQuY2xhc3NMaXN0LmFkZCgnbmFtZS1wcm9qJyk7XG4gICAgICAgICAgICBpZiAoaW5wdXQuaW5uZXJIVE1MICE9PSAnTmV3IFByb2plY3QnKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9IGlucHV0LmlubmVySFRNTDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IG9sZE5hbWUgPSBpbnB1dC5pbm5lckhUTUwudHJpbSgpXG5cbiAgICAgICAgICAgIGlucHV0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGlucHV0RmllbGQsIGlucHV0KTtcblxuICAgICAgICAgICAgaW5wdXRGaWVsZC5mb2N1cygpO1xuXG4gICAgICAgICAgICBpbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gVUkuY2hlY2tQcm9qTmFtZShpbnB1dEZpZWxkLCBpbnB1dEZpZWxkLnZhbHVlLnRyaW0oKSwgb2xkTmFtZSwgZmFsc2UsIGZhbHNlKSk7XG5cblxuICAgICAgICAgICAgaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4geyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRGaWVsZC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9ICdOZXcgUHJvamVjdCc7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0RmllbGQucGFyZW50Tm9kZS5pZCA9ICdOZXcgUHJvamVjdCdcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnBhcmVudE5vZGUuaWQgPSBpbnB1dEZpZWxkLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gaW5wdXQuaW5uZXJIVE1MLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIFN0b3JhZ2UucmVuYW1lUHJvamVjdChpbnB1dC5pbm5lckhUTUwudHJpbSgpLCBpbnB1dEZpZWxkLnZhbHVlLnRyaW0oKSk7IC8vTW9kdWxlcyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbnB1dC5pbm5lckhUTUwgPSBpbnB1dEZpZWxkLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS5pbm5lckhUTUwgPSBpbnB1dEZpZWxkLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGlucHV0LCBpbnB1dEZpZWxkKTtcblxuICAgICAgICAgICAgICAgIFVJLmNoZWNrUHJvak5hbWUoaW5wdXQsIGlucHV0RmllbGQudmFsdWUudHJpbSgpLCBuYW1lLCB0cnVlLCBpbnB1dEZpZWxkLmNsYXNzTGlzdC5jb250YWlucygnaW5wdXQtZXJyb3InKSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgY2hlY2tQcm9qTmFtZShwcm9qRE9NLCBuYW1lLCBvbGROYW1lLCBpc0JsdXIsIG9rRGVsKSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgICAgIGxldCBpc1NhbWUgPSBmYWxzZTtcblxuICAgICAgICBsaXN0LmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvaikgPT4ge1xuICAgICAgICAgICAgaWYgKGlzQmx1cikge1xuICAgICAgICAgICAgICAgIGlmIChva0RlbCAmJiBwcm9qLmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2pET00uY2xhc3NMaXN0LmFkZCgnaW5wdXQtZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgVUkuZGVsUHJvaihwcm9qRE9NLnBhcmVudE5vZGUuY2hpbGRyZW5bMl0sIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2ouZ2V0TmFtZSgpID09IG5hbWUgJiYgbmFtZSAhPSBvbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzU2FtZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHByb2pET00uY2xhc3NMaXN0LmFkZCgnaW5wdXQtZXJyb3InKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFpc1NhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvakRPTS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1lcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICBpc1NhbWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgc3RhdGljIG1haW4oKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi11cHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGUtdG9nXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cIm1vZGVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMuNTUgMTkuMDlMNC45NiAyMC41TDYuNzYgMTguNzFMNS4zNCAxNy4yOU0xMiA2QzguNjkgNiA2IDguNjkgNiAxMlM4LjY5IDE4IDEyIDE4IDE4IDE1LjMxIDE4IDEyQzE4IDguNjggMTUuMzEgNiAxMiA2TTIwIDEzSDIzVjExSDIwTTE3LjI0IDE4LjcxTDE5LjA0IDIwLjVMMjAuNDUgMTkuMDlMMTguNjYgMTcuMjlNMjAuNDUgNUwxOS4wNCAzLjZMMTcuMjQgNS4zOUwxOC42NiA2LjgxTTEzIDFIMTFWNEgxM002Ljc2IDUuMzlMNC45NiAzLjZMMy41NSA1TDUuMzQgNi44MUw2Ljc2IDUuMzlNMSAxM0g0VjExSDFNMTMgMjBIMTFWMjNIMTNcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1pbm5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4taW5uZXItdXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPkluYm94PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLXRvLWRvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtdG8tZG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOSwxM0gxM1YxOUgxMVYxM0g1VjExSDExVjVIMTNWMTFIMTlWMTNaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5BZGQgVGFzazwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWJvdHRvbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPkNvcHlyaWdodCDCqSAyMDIzIERlY2xhbmtiPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRGVjbGFuS0Jyb3duXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkMyLDE2LjQyIDQuODcsMjAuMTcgOC44NCwyMS41QzkuMzQsMjEuNTggOS41LDIxLjI3IDkuNSwyMUM5LjUsMjAuNzcgOS41LDIwLjE0IDkuNSwxOS4zMUM2LjczLDE5LjkxIDYuMTQsMTcuOTcgNi4xNCwxNy45N0M1LjY4LDE2LjgxIDUuMDMsMTYuNSA1LjAzLDE2LjVDNC4xMiwxNS44OCA1LjEsMTUuOSA1LjEsMTUuOUM2LjEsMTUuOTcgNi42MywxNi45MyA2LjYzLDE2LjkzQzcuNSwxOC40NSA4Ljk3LDE4IDkuNTQsMTcuNzZDOS42MywxNy4xMSA5Ljg5LDE2LjY3IDEwLjE3LDE2LjQyQzcuOTUsMTYuMTcgNS42MiwxNS4zMSA1LjYyLDExLjVDNS42MiwxMC4zOSA2LDkuNSA2LjY1LDguNzlDNi41NSw4LjU0IDYuMiw3LjUgNi43NSw2LjE1QzYuNzUsNi4xNSA3LjU5LDUuODggOS41LDcuMTdDMTAuMjksNi45NSAxMS4xNSw2Ljg0IDEyLDYuODRDMTIuODUsNi44NCAxMy43MSw2Ljk1IDE0LjUsNy4xN0MxNi40MSw1Ljg4IDE3LjI1LDYuMTUgMTcuMjUsNi4xNUMxNy44LDcuNSAxNy40NSw4LjU0IDE3LjM1LDguNzlDMTgsOS41IDE4LjM4LDEwLjM5IDE4LjM4LDExLjVDMTguMzgsMTUuMzIgMTYuMDQsMTYuMTYgMTMuODEsMTYuNDFDMTQuMTcsMTYuNzIgMTQuNSwxNy4zMyAxNC41LDE4LjI2QzE0LjUsMTkuNiAxNC41LDIwLjY4IDE0LjUsMjFDMTQuNSwyMS4yNyAxNC42NiwyMS41OSAxNS4xNywyMS41QzE5LjE0LDIwLjE2IDIyLDE2LjQyIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICAgICAgICBVSS5pbml0TWFpbkJ1dHRvbnMoKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBpbml0TWFpbkJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvLWRvJyk7XG4gICAgICAgIGNvbnN0IHRvZ2dsZU1vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kZS10b2cnKTtcbiAgICAgICAgXG4gICAgICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5hZGRUYXNrKCdOZXcgVGFzaycpKTtcbiAgICAgICAgdG9nZ2xlTW9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFVJLm1vZGUoZmFsc2UpKVxuICAgIH1cblxuXG4gICAgc3RhdGljIHJlbW92ZVRhYigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1jb250YWluZXInKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLWNvbnRhaW5lcicpLnJlbW92ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHN0YXRpYyBvcGVuUHJvamVjdChUYWIsIHBhZ2VMb2FkID0gZmFsc2UpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykuaW5uZXJIVE1MID0gVGFiLmlkO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvLWRvJykuc3R5bGUgPSAnZGlzcGxheTpncmlkJ1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvaiA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKS5nZXRQcm9qZWN0cygpLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBUYWIuaWQpO1xuICAgICAgICBpZiAocHJvaiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcm9qLmdldFRhc2tzKCkuZm9yRWFjaCgodGFzaykgPT4gVUkuYWRkVGFzayh0YXNrLmdldE5hbWUoKSwgdGFzay5nZXREYXRlKCksIHBhZ2VMb2FkKSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHN0YXRpYyBtb2RlKG9ubG9hZCkge1xuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICBsZXQgbmV3VGhlbWU7XG5cbiAgICAgICAgaWYgKG9ubG9hZCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIG5ld1RoZW1lID0gJ2RhcmsnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VGhlbWUgPSByb290LmNsYXNzTmFtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJztcbiAgICAgICAgfVxuICAgICAgICByb290LmNsYXNzTmFtZSA9IG5ld1RoZW1lO1xuXG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kZS10b2cnKVxuICAgICAgICBpZiAobmV3VGhlbWUgPT09ICdkYXJrJykge1xuICAgICAgICAgICAgaWNvbi5pbm5lckhUTUwgPSAnPHN2ZyBjbGFzcz1cIm1vZGVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTIgMkExMCAxMCAwIDEgMSAyIDEyQTEwIDEwIDAgMCAxIDEyIDJaXCIgLz48L3N2Zz4nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpY29uLmlubmVySFRNTCA9ICc8c3ZnIGNsYXNzPVwibW9kZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0zLjU1IDE5LjA5TDQuOTYgMjAuNUw2Ljc2IDE4LjcxTDUuMzQgMTcuMjlNMTIgNkM4LjY5IDYgNiA4LjY5IDYgMTJTOC42OSAxOCAxMiAxOCAxOCAxNS4zMSAxOCAxMkMxOCA4LjY4IDE1LjMxIDYgMTIgNk0yMCAxM0gyM1YxMUgyME0xNy4yNCAxOC43MUwxOS4wNCAyMC41TDIwLjQ1IDE5LjA5TDE4LjY2IDE3LjI5TTIwLjQ1IDVMMTkuMDQgMy42TDE3LjI0IDUuMzlMMTguNjYgNi44MU0xMyAxSDExVjRIMTNNNi43NiA1LjM5TDQuOTYgMy42TDMuNTUgNUw1LjM0IDYuODFMNi43NiA1LjM5TTEgMTNINFYxMUgxTTEzIDIwSDExVjIzSDEzXCIgLz48L3N2Zz4nO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgYWRkVGFzayhuYW1lLCBkYXRlLCBwYWdlTG9hZCkge1xuICAgICAgICBpZiAoZGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkYXRlID0gJ05vIERhdGUnXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGFza0RPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRE9NLmlkID0gbmFtZTtcbiAgICAgICAgdGFza0RPTS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgIHRhc2tET00uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2stYm94IHVuY2hlY2tlZFwiPlxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTksM0g1QzMuODksMyAzLDMuODkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVY1QzIxLDMuODkgMjAuMSwzIDE5LDNNMTksNVYxOUg1VjVIMTlaXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgzIGNsYXNzPVwiaW5kLXRhc2tcIj4ke25hbWV9PC9oMz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlLXNwYW5cIj4ke2RhdGV9PC9zcGFuPmA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKS5hcHBlbmRDaGlsZCh0YXNrRE9NKTtcblxuICAgICAgICBVSS5pbml0VGFzayh0YXNrRE9NKTtcblxuICAgICAgICBpZiAobmFtZSA9PSAnTmV3IFRhc2snICYmICFwYWdlTG9hZCkge1xuICAgICAgICAgICAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS5pbm5lckhUTUw7XG4gICAgICAgICAgICBTdG9yYWdlLmFkZFRhc2sobmV3IFRPRE8oJ05ldyBUYXNrJyksIHByb2pOYW1lKTsgLy9Nb2R1bGVzXG4gICAgXG4gICAgICAgICAgICBVSS5uYW1lVGFzayh0YXNrRE9NKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc3RhdGljIG5hbWVUYXNrKHRhc2tET00pIHtcbiAgICAgICAgY29uc3QgdGV4dGJveCA9IHRhc2tET00uY2hpbGRyZW5bMV07XG4gICAgICAgIFxuICAgICAgICBpZiAoIXRleHRib3guY2xhc3NMaXN0LmNvbnRhaW5zKCduYW1lLXRhc2snKSkge1xuXG4gICAgICAgICAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0RmllbGQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIGlucHV0RmllbGQuY2xhc3NMaXN0LmFkZCgnbmFtZS10YXNrJyk7XG4gICAgICAgICAgICBpZiAodGV4dGJveC5pbm5lckhUTUwgIT09ICdOZXcgVGFzaycpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gdGV4dGJveC5pbm5lckhUTUw7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBvbGROYW1lID0gdGV4dGJveC5pbm5lckhUTUwudHJpbSgpIC8vXG4gICAgICAgICAgICBjb25zdCBwcm9qTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLmlubmVySFRNTCAvL1xuXG4gICAgICAgICAgICB0ZXh0Ym94LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGlucHV0RmllbGQsIHRleHRib3gpO1xuXG4gICAgICAgICAgICBpbnB1dEZpZWxkLmZvY3VzKCk7XG5cbiAgICAgICAgICAgIGlucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBVSS5jaGVja1Rhc2tOYW1lKGlucHV0RmllbGQsIGlucHV0RmllbGQudmFsdWUudHJpbSgpLCBvbGROYW1lLCBwcm9qTmFtZSwgZmFsc2UsIGZhbHNlKSkgLy9cblxuICAgICAgICAgICAgaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0RmllbGQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0RmllbGQudmFsdWUgPSAnTmV3IFRhc2snO1xuICAgICAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgICAgICBpZiAocHJvak5hbWUgPT09ICdUb2RheScgfHwgcHJvak5hbWUgPT09ICdXZWVrJyB8fCBwcm9qTmFtZSA9PT0gJ01vbnRoJykge1xuICAgICAgICAgICAgICAgICAgICBTdG9yYWdlLnJlbmFtZVRpbWVUYXNrKHRleHRib3guaW5uZXJIVE1MLnRyaW0oKSwgaW5wdXRGaWVsZC52YWx1ZS50cmltKCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFN0b3JhZ2UucmVuYW1lVGFzayh0ZXh0Ym94LmlubmVySFRNTC50cmltKCksIGlucHV0RmllbGQudmFsdWUudHJpbSgpLCBwcm9qTmFtZSk7IC8vIE1vZHVsZXNcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gdGV4dGJveC5pbm5lckhUTUwudHJpbSgpOyAvL1xuXG4gICAgICAgICAgICAgICAgdGV4dGJveC5pbm5lckhUTUwgPSBpbnB1dEZpZWxkLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB0YXNrRE9NLmlkID0gaW5wdXRGaWVsZC52YWx1ZS50cmltKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHRhc2tET00ucmVwbGFjZUNoaWxkKHRleHRib3gsIGlucHV0RmllbGQpO1xuXG4gICAgICAgICAgICAgICAgVUkuY2hlY2tUYXNrTmFtZSh0ZXh0Ym94LCBpbnB1dEZpZWxkLnZhbHVlLnRyaW0oKSwgbmFtZSwgcHJvak5hbWUsIHRydWUsIGlucHV0RmllbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dC1lcnJvcicpKSAvL1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHN0YXRpYyBjaGVja1Rhc2tOYW1lKGlucHV0RmllbGQsIG5hbWUsIG9sZE5hbWUsIHByb2pOYW1lLCBpc0JsdXIsIG9rRGVsKSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgICAgIGxldCBpc1NhbWUgPSBmYWxzZTtcblxuICAgICAgICBsaXN0LmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvaikgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2ouZ2V0TmFtZSgpID09IHByb2pOYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvai5nZXRUYXNrcygpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0JsdXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChva0RlbCAmJiB0YXNrLmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVUkuY2hlY2tUYXNrKGlucHV0RmllbGQucGFyZW50Tm9kZSwgdHJ1ZSk7IC8vZml4bWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBva0RlbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suZ2V0TmFtZSgpID09IG5hbWUgJiYgbmFtZSAhPSBvbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFpc1NhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTYW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBpbml0VGFzayh0YXNrKSB7XG4gICAgICAgIHRhc2suY2hpbGRyZW5bMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5uYW1lVGFzayh0YXNrKSk7XG4gICAgICAgIHRhc2suZmlyc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5jaGVja1Rhc2sodGFzaywgZmFsc2UpKVxuICAgICAgICB0YXNrLmxhc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5kYXRlVGFzayh0YXNrKSlcbiAgICB9XG5cblxuICAgIHN0YXRpYyBkYXRlVGFzayh0YXNrRE9NKSB7XG4gICAgICAgIGNvbnN0IGRhdGVTcGFuID0gdGFza0RPTS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0RmllbGQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKCdkYXRlLXRhc2snKTtcbiAgICAgICAgaWYgKGRhdGVTcGFuLmlubmVySFRNTCAhPT0gJ05vIERhdGUnKSB7XG4gICAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gZGF0ZVNwYW4uaW5uZXJIVE1MO1xuICAgICAgICB9O1xuXG4gICAgICAgIGRhdGVTcGFuLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGlucHV0RmllbGQsIGRhdGVTcGFuKTtcblxuICAgICAgICBpbnB1dEZpZWxkLmZvY3VzKCk7XG5cbiAgICAgICAgaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZTtcbiAgICAgICAgICAgIGlmIChpbnB1dEZpZWxkLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGUgPSAnTm8gRGF0ZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vRm9ybWF0dGluZyBEYXRlXG4gICAgICAgICAgICAgICAgY29uc3QgdW5mb3JtYXR0ZWREYXRlID0gaW5wdXRGaWVsZC52YWx1ZTtcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWREYXRlID0gdW5mb3JtYXR0ZWREYXRlLnNwbGl0KCctJylbMl0gKyAnLScgKyB1bmZvcm1hdHRlZERhdGUuc3BsaXQoJy0nKVsxXSArICctJyArIHVuZm9ybWF0dGVkRGF0ZS5zcGxpdCgnLScpWzBdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS5pbm5lckhUTUw7XG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGlucHV0RmllbGQucGFyZW50Tm9kZS5jaGlsZHJlblsxXS5pbm5lckhUTUw7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgU3RvcmFnZS5kYXRlVGFzayhmb3JtYXR0ZWREYXRlLCB0YXNrTmFtZSwgcHJvak5hbWUpOyAvLyBNb2R1bGVzXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgZGF0ZVNwYW4uaW5uZXJIVE1MID0gZm9ybWF0dGVkRGF0ZTtcbiAgICAgICAgICAgIHRhc2tET00uaWQgPSBmb3JtYXR0ZWREYXRlO1xuICAgIFxuICAgICAgICAgICAgdGFza0RPTS5yZXBsYWNlQ2hpbGQoZGF0ZVNwYW4sIGlucHV0RmllbGQpO1xuICAgICAgICB9KTtcbiAgICB9IFxuXG5cbiAgICBzdGF0aWMgY2hlY2tUYXNrKHRhc2ssIHNhbWVOYW1lID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRhc2suaWQ7XG5cbiAgICAgICAgY29uc3QgY2hlY2tlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaGVja2VkLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKVxuICAgICAgICBjaGVja2VkLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWJveCcpXG4gICAgICAgIGNoZWNrZWQuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE5LDNINUEyLDIgMCAwLDAgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVY1QTIsMiAwIDAsMCAxOSwzTTE5LDE5SDVWNUgxOVYxOU0xNywxN0g3VjdIMTdWMTdaXCIgLz48L3N2Zz4nXG5cbiAgICAgICAgdGFzay5maXJzdEVsZW1lbnRDaGlsZC5yZXBsYWNlQ2hpbGQoY2hlY2tlZCwgdGFzay5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZClcblxuICAgICAgICB0YXNrLmNoaWxkcmVuWzFdLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRhc2sucmVtb3ZlKCkgfSwgMjUwKVxuXG4gICAgICAgIGNvbnN0IHByb2pOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykuaW5uZXJIVE1MO1xuXG4gICAgICAgIGlmIChwcm9qTmFtZSA9PSAnVG9kYXknIHx8IHByb2pOYW1lID09ICdXZWVrJyB8fCBwcm9qTmFtZSA9PSAnTW9udGgnKSB7XG4gICAgICAgICAgICBTdG9yYWdlLmRlbGV0ZVRpbWVUYXNrKG5hbWUsIHNhbWVOYW1lKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgU3RvcmFnZS5kZWxldGVUYXNrKG5hbWUsIHByb2pOYW1lLCBzYW1lTmFtZSlcbiAgICAgICAgfVxuICAgIH1cblxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCBUT0RPIGZyb20gJy4vdG9kby5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdJbmJveCcpKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdUb2RheScpKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdXZWVrJykpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ01vbnRoJykpO1xuICAgIH1cblxuICAgIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gICAgfVxuXG5cbiAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIH1cblxuICAgIGRlbGV0ZVByb2plY3QodGFyZ2V0TmFtZSwgc2FtZU5hbWUpIHtcbiAgICAgICAgaWYgKHNhbWVOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleFRvRGVsZXRlID0gdGhpcy5wcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSB0YXJnZXROYW1lKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4VG9EZWxldGUgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kSW5kZXhUb0RlbGV0ZSA9IHRoaXMucHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0LCBpbmRleCkgPT4gaW5kZXggIT09IGluZGV4VG9EZWxldGUgJiYgcHJvamVjdC5nZXROYW1lKCkgPT09IHRhcmdldE5hbWUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHNlY29uZEluZGV4VG9EZWxldGUgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHNlY29uZEluZGV4VG9EZWxldGUsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUb0RlbGV0ZSA9IHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT0gdGFyZ2V0TmFtZSk7XG4gICAgXG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZSh0aGlzLnByb2plY3RzLmluZGV4T2YocHJvamVjdFRvRGVsZXRlKSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5hbWVQcm9qZWN0KG5hbWUsIG5ld05hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvaiA9IHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT0gbmFtZSk7XG5cbiAgICAgICAgcHJvai5zZXROYW1lKG5ld05hbWUpO1xuICAgIH1cblxuXG4gICAgYWRkVGFzayh0YXNrLCBwcm9qTmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qID0gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PSBwcm9qTmFtZSk7XG5cbiAgICAgICAgcHJvai5hZGRUYXNrKHRhc2spXG4gICAgfVxuXG4gICAgcmVuYW1lVGFzayhuYW1lLCBuZXdOYW1lLCBwcm9qTmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qID0gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PSBwcm9qTmFtZSk7XG5cbiAgICAgICAgcHJvai5yZW5hbWVUYXNrKG5hbWUsIG5ld05hbWUpXG4gICAgfVxuXG4gICAgZGF0ZVRhc2soZGF0ZSwgdGFza05hbWUsIHByb2pOYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2ogPSB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09IHByb2pOYW1lKTtcblxuICAgICAgICBwcm9qLmRhdGVUYXNrKGRhdGUsIHRhc2tOYW1lKVxuICAgIH1cblxuICAgIGRlbGV0ZVRhc2sodGFzaywgcHJvak5hbWUsIHNhbWVOYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2ogPSB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09IHByb2pOYW1lKTtcblxuICAgICAgICBwcm9qLmRlbGV0ZVRhc2sodGFzaywgc2FtZU5hbWUpXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cblxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0VGFza3ModGFza3MpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICAgIH1cbiAgICBcbiAgICBnZXRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKVxuICAgIH1cblxuICAgIGdldENvdW50KCkge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCB0YXNrIGluIHRoaXMudGFza3MpIHtcbiAgICAgICAgICAgICsrY291bnRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuXG4gICAgcmVuYW1lVGFzayhuYW1lLCBuZXdOYW1lKSB7XG4gICAgICAgIGNvbnN0IFRPRE8gPSB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09IG5hbWUpO1xuICAgICAgICBpZiAoVE9ETyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBUT0RPLnNldE5hbWUobmV3TmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRlVGFzayhkYXRlLCBuYW1lKSB7XG4gICAgICAgIGNvbnN0IFRPRE8gPSB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09IG5hbWUpO1xuICAgICAgICBUT0RPLnNldERhdGUoZGF0ZSk7XG4gICAgfVxuXG4gICAgZGVsZXRlVGFzayhuYW1lLCBzYW1lTmFtZSkge1xuICAgICAgICBpZiAoc2FtZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VE9ET0luZGV4ID0gdGhpcy50YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSBuYW1lKTtcblxuICAgICAgICAgICAgaWYgKGZpcnN0VE9ET0luZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZFRPRE9JbmRleCA9IHRoaXMudGFza3MuZmluZEluZGV4KCh0YXNrLCBpbmRleCkgPT4gaW5kZXggIT09IGZpcnN0VE9ET0luZGV4ICYmIHRhc2suZ2V0TmFtZSgpID09PSBuYW1lKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChzZWNvbmRUT0RPSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFza3Muc3BsaWNlKHNlY29uZFRPRE9JbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgVE9ETyA9IHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT0gbmFtZSk7XG4gICAgXG4gICAgICAgICAgICB0aGlzLnRhc2tzLnNwbGljZSh0aGlzLnRhc2tzLmluZGV4T2YoVE9ETyksIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgVE9ETyBmcm9tICcuL3RvZG8uanMnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnXG5pbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICAgIHN0YXRpYyBzYXZlVG9kb0xpc3QoZGF0YSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VG9kb0xpc3QoKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gT2JqZWN0LmFzc2lnbihuZXcgTGlzdCgpLCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdCcpKSlcblxuICAgICAgICB0b2RvTGlzdC5zZXRQcm9qZWN0cyh0b2RvTGlzdC5nZXRQcm9qZWN0cygpLm1hcCgocHJvamVjdCkgPT4gT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBwcm9qZWN0KSkpXG5cbiAgICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiBwcm9qZWN0LnNldFRhc2tzKHByb2plY3QuZ2V0VGFza3MoKS5tYXAoKHRvZG8pID0+IE9iamVjdC5hc3NpZ24obmV3IFRPRE8oKSwgdG9kbykpKSlcblxuICAgICAgICByZXR1cm4gdG9kb0xpc3RcbiAgICB9XG5cblxuICAgIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgICAgIHRvZG9MaXN0LmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVuYW1lUHJvamVjdChuYW1lLCBuZXdOYW1lKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICB0b2RvTGlzdC5yZW5hbWVQcm9qZWN0KG5hbWUsIG5ld05hbWUpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZVByb2plY3QobmFtZSwgc2FtZU5hbWUpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgICAgIHRvZG9MaXN0LmRlbGV0ZVByb2plY3QobmFtZSwgc2FtZU5hbWUpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgYWRkVGFzayh0YXNrLCBwcm9qTmFtZSkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QuYWRkVGFzayh0YXNrLCBwcm9qTmFtZSk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVuYW1lVGFzayhuYW1lLCBuZXdOYW1lLCBwcm9qTmFtZSkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QucmVuYW1lVGFzayhuYW1lLCBuZXdOYW1lLCBwcm9qTmFtZSk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGRhdGVUYXNrKGRhdGUsIHRhc2tOYW1lLCBwcm9qTmFtZSkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QuZGF0ZVRhc2soZGF0ZSwgdGFza05hbWUsIHByb2pOYW1lKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWxldGVUYXNrKHRhc2ssIHByb2pOYW1lLCBzYW1lTmFtZSkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QuZGVsZXRlVGFzayh0YXNrLCBwcm9qTmFtZSwgc2FtZU5hbWUpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZVRpbWVUYXNrKHRhc2ssIHNhbWVOYW1lKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIHByb2plY3QuZGVsZXRlVGFzayh0YXNrLCBzYW1lTmFtZSlcbiAgICAgICAgfSlcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyByZW5hbWVUaW1lVGFzayhuYW1lLCBuZXdOYW1lKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIHByb2plY3QucmVuYW1lVGFzayhuYW1lLCBuZXdOYW1lKVxuICAgICAgICB9KVxuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPRE8ge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGF0ZSA9ICdObyBEYXRlJykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIH1cblxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0RGF0ZShkYXRlKSB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgfVxuICAgIFxuICAgIGdldERhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGU7XG4gICAgfVxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBVSSBmcm9tICcuL21vZHVsZXMvVUkuanMnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBVSS5sb2FkSG9tZSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
