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
exports.id = "app/api/add-depositor/route";
exports.ids = ["app/api/add-depositor/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadd-depositor%2Froute&page=%2Fapi%2Fadd-depositor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadd-depositor%2Froute.js&appDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadd-depositor%2Froute&page=%2Fapi%2Fadd-depositor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadd-depositor%2Froute.js&appDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_cyrus_Documents_highlytechnologicalAdvancedComputerShit_escrow_decentralized_escrow_contract_frontend_app_api_add_depositor_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/add-depositor/route.js */ \"(rsc)/./app/api/add-depositor/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/add-depositor/route\",\n        pathname: \"/api/add-depositor\",\n        filename: \"route\",\n        bundlePath: \"app/api/add-depositor/route\"\n    },\n    resolvedPagePath: \"/Users/cyrus/Documents/highlytechnologicalAdvancedComputerShit/escrow/decentralized-escrow-contract/frontend/app/api/add-depositor/route.js\",\n    nextConfigOutput,\n    userland: _Users_cyrus_Documents_highlytechnologicalAdvancedComputerShit_escrow_decentralized_escrow_contract_frontend_app_api_add_depositor_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/add-depositor/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZGQtZGVwb3NpdG9yJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhZGQtZGVwb3NpdG9yJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWRkLWRlcG9zaXRvciUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmN5cnVzJTJGRG9jdW1lbnRzJTJGaGlnaGx5dGVjaG5vbG9naWNhbEFkdmFuY2VkQ29tcHV0ZXJTaGl0JTJGZXNjcm93JTJGZGVjZW50cmFsaXplZC1lc2Nyb3ctY29udHJhY3QlMkZmcm9udGVuZCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZjeXJ1cyUyRkRvY3VtZW50cyUyRmhpZ2hseXRlY2hub2xvZ2ljYWxBZHZhbmNlZENvbXB1dGVyU2hpdCUyRmVzY3JvdyUyRmRlY2VudHJhbGl6ZWQtZXNjcm93LWNvbnRyYWN0JTJGZnJvbnRlbmQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDMkY7QUFDeEs7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8/MDg5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvY3lydXMvRG9jdW1lbnRzL2hpZ2hseXRlY2hub2xvZ2ljYWxBZHZhbmNlZENvbXB1dGVyU2hpdC9lc2Nyb3cvZGVjZW50cmFsaXplZC1lc2Nyb3ctY29udHJhY3QvZnJvbnRlbmQvYXBwL2FwaS9hZGQtZGVwb3NpdG9yL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hZGQtZGVwb3NpdG9yL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWRkLWRlcG9zaXRvclwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYWRkLWRlcG9zaXRvci9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9jeXJ1cy9Eb2N1bWVudHMvaGlnaGx5dGVjaG5vbG9naWNhbEFkdmFuY2VkQ29tcHV0ZXJTaGl0L2VzY3Jvdy9kZWNlbnRyYWxpemVkLWVzY3Jvdy1jb250cmFjdC9mcm9udGVuZC9hcHAvYXBpL2FkZC1kZXBvc2l0b3Ivcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYWRkLWRlcG9zaXRvci9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadd-depositor%2Froute&page=%2Fapi%2Fadd-depositor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadd-depositor%2Froute.js&appDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/add-depositor/route.js":
/*!****************************************!*\
  !*** ./app/api/add-depositor/route.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\n(__webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\").config)();\nconst { MongoClient } = __webpack_require__(/*! mongodb */ \"mongodb\");\nconst url = process.env.MONGODB_URI;\nconst client = new MongoClient(url);\nasync function POST(req) {\n    const document = await req.json();\n    try {\n        await client.connect();\n        const db = client.db(\"escrow\");\n        await db.collection(\"depositors\").insertOne(document);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(\"Success: \" + document.depositor + \" added to depositors collection.\", {\n            status: 200\n        });\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: error.message\n        });\n    } finally{\n        await client.close();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkZC1kZXBvc2l0b3Ivcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFFM0NDLHFGQUF3QjtBQUN4QixNQUFNLEVBQUVFLFdBQVcsRUFBRSxHQUFHRixtQkFBT0EsQ0FBQyx3QkFBUztBQUV6QyxNQUFNRyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUMsU0FBUyxJQUFJTCxZQUFZQztBQUV4QixlQUFlSyxLQUFLQyxHQUFHO0lBQzVCLE1BQU1DLFdBQVcsTUFBTUQsSUFBSUUsSUFBSTtJQUMvQixJQUFJO1FBQ0YsTUFBTUosT0FBT0ssT0FBTztRQUNwQixNQUFNQyxLQUFLTixPQUFPTSxFQUFFLENBQUM7UUFFckIsTUFBTUEsR0FBR0MsVUFBVSxDQUFDLGNBQWNDLFNBQVMsQ0FBQ0w7UUFFNUMsT0FBT1gsa0ZBQVlBLENBQUNZLElBQUksQ0FDdEIsY0FBY0QsU0FBU00sU0FBUyxHQUFHLG9DQUNuQztZQUFFQyxRQUFRO1FBQUk7SUFFbEIsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBT25CLGtGQUFZQSxDQUFDWSxJQUFJLENBQUM7WUFBRU8sT0FBT0EsTUFBTUMsT0FBTztRQUFDO0lBQ2xELFNBQVU7UUFDUixNQUFNWixPQUFPYSxLQUFLO0lBQ3BCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2FwcC9hcGkvYWRkLWRlcG9zaXRvci9yb3V0ZS5qcz8zZTgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5yZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZygpO1xuY29uc3QgeyBNb25nb0NsaWVudCB9ID0gcmVxdWlyZShcIm1vbmdvZGJcIik7XG5cbmNvbnN0IHVybCA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuY29uc3QgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVybCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xuICBjb25zdCBkb2N1bWVudCA9IGF3YWl0IHJlcS5qc29uKCk7XG4gIHRyeSB7XG4gICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYihcImVzY3Jvd1wiKTtcblxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJkZXBvc2l0b3JzXCIpLmluc2VydE9uZShkb2N1bWVudCk7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICBcIlN1Y2Nlc3M6IFwiICsgZG9jdW1lbnQuZGVwb3NpdG9yICsgXCIgYWRkZWQgdG8gZGVwb3NpdG9ycyBjb2xsZWN0aW9uLlwiLFxuICAgICAgeyBzdGF0dXM6IDIwMCB9XG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBhd2FpdCBjbGllbnQuY2xvc2UoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInJlcXVpcmUiLCJjb25maWciLCJNb25nb0NsaWVudCIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNsaWVudCIsIlBPU1QiLCJyZXEiLCJkb2N1bWVudCIsImpzb24iLCJjb25uZWN0IiwiZGIiLCJjb2xsZWN0aW9uIiwiaW5zZXJ0T25lIiwiZGVwb3NpdG9yIiwic3RhdHVzIiwiZXJyb3IiLCJtZXNzYWdlIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/add-depositor/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadd-depositor%2Froute&page=%2Fapi%2Fadd-depositor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadd-depositor%2Froute.js&appDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();