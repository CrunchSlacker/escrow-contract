"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/assert-never";
exports.ids = ["vendor-chunks/assert-never"];
exports.modules = {

/***/ "(ssr)/./node_modules/assert-never/index.js":
/*!********************************************!*\
  !*** ./node_modules/assert-never/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n/**\n * Helper function for exhaustive checks of discriminated unions.\n * https://basarat.gitbooks.io/typescript/docs/types/discriminated-unions.html\n *\n * @example\n *\n *    type A = {type: 'a'};\n *    type B = {type: 'b'};\n *    type Union = A | B;\n *\n *    function doSomething(arg: Union) {\n *      if (arg.type === 'a') {\n *        return something;\n *      }\n *\n *      if (arg.type === 'b') {\n *        return somethingElse;\n *      }\n *\n *      // TS will error if there are other types in the union\n *      // Will throw an Error when called at runtime.\n *      // Use `assertNever(arg, true)` instead to fail silently.\n *      return assertNever(arg);\n *    }\n */ function assertNever(value, noThrow) {\n    if (noThrow) {\n        return value;\n    }\n    throw new Error(\"Unhandled discriminated union member: \" + JSON.stringify(value));\n}\nexports.assertNever = assertNever;\nexports[\"default\"] = assertNever;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYXNzZXJ0LW5ldmVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2JBLDhDQUE2QztJQUFFRyxPQUFPO0FBQUssQ0FBQyxFQUFDO0FBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F3QkMsR0FDRCxTQUFTQyxZQUFZRCxLQUFLLEVBQUVFLE9BQU87SUFDL0IsSUFBSUEsU0FBUztRQUNULE9BQU9GO0lBQ1g7SUFDQSxNQUFNLElBQUlHLE1BQU0sMkNBQTJDQyxLQUFLQyxTQUFTLENBQUNMO0FBQzlFO0FBQ0FELG1CQUFtQixHQUFHRTtBQUN0QkYsa0JBQWUsR0FBR0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9hc3NlcnQtbmV2ZXIvaW5kZXguanM/MWYyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBleGhhdXN0aXZlIGNoZWNrcyBvZiBkaXNjcmltaW5hdGVkIHVuaW9ucy5cbiAqIGh0dHBzOi8vYmFzYXJhdC5naXRib29rcy5pby90eXBlc2NyaXB0L2RvY3MvdHlwZXMvZGlzY3JpbWluYXRlZC11bmlvbnMuaHRtbFxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogICAgdHlwZSBBID0ge3R5cGU6ICdhJ307XG4gKiAgICB0eXBlIEIgPSB7dHlwZTogJ2InfTtcbiAqICAgIHR5cGUgVW5pb24gPSBBIHwgQjtcbiAqXG4gKiAgICBmdW5jdGlvbiBkb1NvbWV0aGluZyhhcmc6IFVuaW9uKSB7XG4gKiAgICAgIGlmIChhcmcudHlwZSA9PT0gJ2EnKSB7XG4gKiAgICAgICAgcmV0dXJuIHNvbWV0aGluZztcbiAqICAgICAgfVxuICpcbiAqICAgICAgaWYgKGFyZy50eXBlID09PSAnYicpIHtcbiAqICAgICAgICByZXR1cm4gc29tZXRoaW5nRWxzZTtcbiAqICAgICAgfVxuICpcbiAqICAgICAgLy8gVFMgd2lsbCBlcnJvciBpZiB0aGVyZSBhcmUgb3RoZXIgdHlwZXMgaW4gdGhlIHVuaW9uXG4gKiAgICAgIC8vIFdpbGwgdGhyb3cgYW4gRXJyb3Igd2hlbiBjYWxsZWQgYXQgcnVudGltZS5cbiAqICAgICAgLy8gVXNlIGBhc3NlcnROZXZlcihhcmcsIHRydWUpYCBpbnN0ZWFkIHRvIGZhaWwgc2lsZW50bHkuXG4gKiAgICAgIHJldHVybiBhc3NlcnROZXZlcihhcmcpO1xuICogICAgfVxuICovXG5mdW5jdGlvbiBhc3NlcnROZXZlcih2YWx1ZSwgbm9UaHJvdykge1xuICAgIGlmIChub1Rocm93KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5oYW5kbGVkIGRpc2NyaW1pbmF0ZWQgdW5pb24gbWVtYmVyOiBcIiArIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG59XG5leHBvcnRzLmFzc2VydE5ldmVyID0gYXNzZXJ0TmV2ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBhc3NlcnROZXZlcjtcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImFzc2VydE5ldmVyIiwibm9UaHJvdyIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/assert-never/index.js\n");

/***/ })

};
;