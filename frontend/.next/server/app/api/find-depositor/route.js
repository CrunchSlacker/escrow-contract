"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/find-depositor/route";
exports.ids = ["app/api/find-depositor/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffind-depositor%2Froute&page=%2Fapi%2Ffind-depositor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffind-depositor%2Froute.js&appDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffind-depositor%2Froute&page=%2Fapi%2Ffind-depositor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffind-depositor%2Froute.js&appDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_cyrus_Documents_highlytechnologicalAdvancedComputerShit_escrow_decentralized_escrow_contract_frontend_app_api_find_depositor_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/find-depositor/route.js */ \"(rsc)/./app/api/find-depositor/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/find-depositor/route\",\n        pathname: \"/api/find-depositor\",\n        filename: \"route\",\n        bundlePath: \"app/api/find-depositor/route\"\n    },\n    resolvedPagePath: \"/Users/cyrus/Documents/highlytechnologicalAdvancedComputerShit/escrow/decentralized-escrow-contract/frontend/app/api/find-depositor/route.js\",\n    nextConfigOutput,\n    userland: _Users_cyrus_Documents_highlytechnologicalAdvancedComputerShit_escrow_decentralized_escrow_contract_frontend_app_api_find_depositor_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/find-depositor/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZmaW5kLWRlcG9zaXRvciUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZmluZC1kZXBvc2l0b3IlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZmaW5kLWRlcG9zaXRvciUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmN5cnVzJTJGRG9jdW1lbnRzJTJGaGlnaGx5dGVjaG5vbG9naWNhbEFkdmFuY2VkQ29tcHV0ZXJTaGl0JTJGZXNjcm93JTJGZGVjZW50cmFsaXplZC1lc2Nyb3ctY29udHJhY3QlMkZmcm9udGVuZCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZjeXJ1cyUyRkRvY3VtZW50cyUyRmhpZ2hseXRlY2hub2xvZ2ljYWxBZHZhbmNlZENvbXB1dGVyU2hpdCUyRmVzY3JvdyUyRmRlY2VudHJhbGl6ZWQtZXNjcm93LWNvbnRyYWN0JTJGZnJvbnRlbmQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDNEY7QUFDeks7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8/ZjBiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvY3lydXMvRG9jdW1lbnRzL2hpZ2hseXRlY2hub2xvZ2ljYWxBZHZhbmNlZENvbXB1dGVyU2hpdC9lc2Nyb3cvZGVjZW50cmFsaXplZC1lc2Nyb3ctY29udHJhY3QvZnJvbnRlbmQvYXBwL2FwaS9maW5kLWRlcG9zaXRvci9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZmluZC1kZXBvc2l0b3Ivcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9maW5kLWRlcG9zaXRvclwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZmluZC1kZXBvc2l0b3Ivcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvY3lydXMvRG9jdW1lbnRzL2hpZ2hseXRlY2hub2xvZ2ljYWxBZHZhbmNlZENvbXB1dGVyU2hpdC9lc2Nyb3cvZGVjZW50cmFsaXplZC1lc2Nyb3ctY29udHJhY3QvZnJvbnRlbmQvYXBwL2FwaS9maW5kLWRlcG9zaXRvci9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9maW5kLWRlcG9zaXRvci9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffind-depositor%2Froute&page=%2Fapi%2Ffind-depositor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffind-depositor%2Froute.js&appDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/find-depositor/route.js":
/*!*****************************************!*\
  !*** ./app/api/find-depositor/route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\n(__webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\").config)();\nconst { MongoClient } = __webpack_require__(/*! mongodb */ \"mongodb\");\nconst url = process.env.MONGODB_URI;\nconst client = new MongoClient(url);\nasync function POST(req) {\n    const depositor = await req.json();\n    try {\n        await client.connect();\n        const db = client.db(\"escrow\");\n        const foundDocument = await db.collection(\"depositors\").findOne({\n            depositor: depositor\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(foundDocument, {\n            status: 200\n        });\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: error.message\n        });\n    } finally{\n        await client.close();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2ZpbmQtZGVwb3NpdG9yL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBRTNDQyxxRkFBd0I7QUFDeEIsTUFBTSxFQUFFRSxXQUFXLEVBQUUsR0FBR0YsbUJBQU9BLENBQUMsd0JBQVM7QUFFekMsTUFBTUcsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLE1BQU1DLFNBQVMsSUFBSUwsWUFBWUM7QUFFeEIsZUFBZUssS0FBS0MsR0FBRztJQUM1QixNQUFNQyxZQUFZLE1BQU1ELElBQUlFLElBQUk7SUFDaEMsSUFBSTtRQUNGLE1BQU1KLE9BQU9LLE9BQU87UUFDcEIsTUFBTUMsS0FBS04sT0FBT00sRUFBRSxDQUFDO1FBRXJCLE1BQU1DLGdCQUFnQixNQUFNRCxHQUN6QkUsVUFBVSxDQUFDLGNBQ1hDLE9BQU8sQ0FBQztZQUFFTixXQUFXQTtRQUFVO1FBQ2xDLE9BQU9YLGtGQUFZQSxDQUFDWSxJQUFJLENBQUNHLGVBQWU7WUFBRUcsUUFBUTtRQUFJO0lBQ3hELEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU9uQixrRkFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUVPLE9BQU9BLE1BQU1DLE9BQU87UUFBQztJQUNsRCxTQUFVO1FBQ1IsTUFBTVosT0FBT2EsS0FBSztJQUNwQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9hcHAvYXBpL2ZpbmQtZGVwb3NpdG9yL3JvdXRlLmpzPzQzZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbnJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7XG5jb25zdCB7IE1vbmdvQ2xpZW50IH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcblxuY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5jb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJsKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XG4gIGNvbnN0IGRlcG9zaXRvciA9IGF3YWl0IHJlcS5qc29uKCk7XG4gIHRyeSB7XG4gICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYihcImVzY3Jvd1wiKTtcblxuICAgIGNvbnN0IGZvdW5kRG9jdW1lbnQgPSBhd2FpdCBkYlxuICAgICAgLmNvbGxlY3Rpb24oXCJkZXBvc2l0b3JzXCIpXG4gICAgICAuZmluZE9uZSh7IGRlcG9zaXRvcjogZGVwb3NpdG9yIH0pO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihmb3VuZERvY3VtZW50LCB7IHN0YXR1czogMjAwIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICB9IGZpbmFsbHkge1xuICAgIGF3YWl0IGNsaWVudC5jbG9zZSgpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicmVxdWlyZSIsImNvbmZpZyIsIk1vbmdvQ2xpZW50IiwidXJsIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY2xpZW50IiwiUE9TVCIsInJlcSIsImRlcG9zaXRvciIsImpzb24iLCJjb25uZWN0IiwiZGIiLCJmb3VuZERvY3VtZW50IiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJzdGF0dXMiLCJlcnJvciIsIm1lc3NhZ2UiLCJjbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/find-depositor/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffind-depositor%2Froute&page=%2Fapi%2Ffind-depositor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffind-depositor%2Froute.js&appDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();