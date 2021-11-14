webpackHotUpdate_N_E("pages/clients",{

/***/ "./pages/clients/index.js":
/*!********************************!*\
  !*** ./pages/clients/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\Marhamat Baghirov\\Downloads\\nextjscourse\\pages\\clients\\index.js",
    _s = $RefreshSig$();





function clientsPage() {
  _s();

  var _this = this;

  var clients = [{
    id: "Max",
    name: "maximlian"
  }, {
    id: "Elvis",
    name: "elvisor"
  }];
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "The Clients Page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: clients.map(function (client) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "{`/clients/${client.id}`}",
            children: clients.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 15
          }, _this)
        }, client.id, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

_s(clientsPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

/* harmony default export */ __webpack_exports__["default"] = (clientsPage);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbGllbnRzUGFnZSIsImNsaWVudHMiLCJpZCIsIm5hbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtYXAiLCJjbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQUE7O0FBQ3JCLE1BQU1DLE9BQU8sR0FBRyxDQUNkO0FBQUVDLE1BQUUsRUFBRSxLQUFOO0FBQWFDLFFBQUksRUFBRTtBQUFuQixHQURjLEVBRWQ7QUFBRUQsTUFBRSxFQUFFLE9BQU47QUFBZUMsUUFBSSxFQUFFO0FBQXJCLEdBRmMsQ0FBaEI7QUFLQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBR0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBR0k7QUFBQSxnQkFDR0osT0FBTyxDQUFDSyxHQUFSLENBQVksVUFBQ0MsTUFBRDtBQUFBLDRCQUNiO0FBQUEsaUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFDLDJCQUFYO0FBQUEsc0JBQXlDTixPQUFPLENBQUNFO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixXQUFTSSxNQUFNLENBQUNMLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFaO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0Q7O0dBdkJRRixXO1VBTVFLLHFEOzs7QUFtQkZMLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NsaWVudHMuZTZjZTI0YzQ0Y2FiNmU1ZTNiZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5cclxuZnVuY3Rpb24gY2xpZW50c1BhZ2UoKSB7XHJcbiAgY29uc3QgY2xpZW50cyA9IFtcclxuICAgIHsgaWQ6IFwiTWF4XCIsIG5hbWU6IFwibWF4aW1saWFuXCIgfSxcclxuICAgIHsgaWQ6IFwiRWx2aXNcIiwgbmFtZTogXCJlbHZpc29yXCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5UaGUgQ2xpZW50cyBQYWdlPC9oMT5cclxuICAgICAgXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge2NsaWVudHMubWFwKChjbGllbnQpPT4oXHJcbiAgICAgICAgICA8bGkga2V5PXtjbGllbnQuaWR9ID5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwie2AvY2xpZW50cy8ke2NsaWVudC5pZH1gfVwiID57Y2xpZW50cy5uYW1lfTwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPikpXHJcbn1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudHNQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9