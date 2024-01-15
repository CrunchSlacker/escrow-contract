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
exports.id = "app/api/add-contract/route";
exports.ids = ["app/api/add-contract/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadd-contract%2Froute&page=%2Fapi%2Fadd-contract%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadd-contract%2Froute.js&appDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadd-contract%2Froute&page=%2Fapi%2Fadd-contract%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadd-contract%2Froute.js&appDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_cyrus_Documents_highlytechnologicalAdvancedComputerShit_escrow_decentralized_escrow_contract_frontend_app_api_add_contract_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/add-contract/route.js */ \"(rsc)/./app/api/add-contract/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/add-contract/route\",\n        pathname: \"/api/add-contract\",\n        filename: \"route\",\n        bundlePath: \"app/api/add-contract/route\"\n    },\n    resolvedPagePath: \"/Users/cyrus/Documents/highlytechnologicalAdvancedComputerShit/escrow/decentralized-escrow-contract/frontend/app/api/add-contract/route.js\",\n    nextConfigOutput,\n    userland: _Users_cyrus_Documents_highlytechnologicalAdvancedComputerShit_escrow_decentralized_escrow_contract_frontend_app_api_add_contract_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/add-contract/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZGQtY29udHJhY3QlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmFkZC1jb250cmFjdCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmFkZC1jb250cmFjdCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmN5cnVzJTJGRG9jdW1lbnRzJTJGaGlnaGx5dGVjaG5vbG9naWNhbEFkdmFuY2VkQ29tcHV0ZXJTaGl0JTJGZXNjcm93JTJGZGVjZW50cmFsaXplZC1lc2Nyb3ctY29udHJhY3QlMkZmcm9udGVuZCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZjeXJ1cyUyRkRvY3VtZW50cyUyRmhpZ2hseXRlY2hub2xvZ2ljYWxBZHZhbmNlZENvbXB1dGVyU2hpdCUyRmVzY3JvdyUyRmRlY2VudHJhbGl6ZWQtZXNjcm93LWNvbnRyYWN0JTJGZnJvbnRlbmQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDMEY7QUFDdks7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8/MmRhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvY3lydXMvRG9jdW1lbnRzL2hpZ2hseXRlY2hub2xvZ2ljYWxBZHZhbmNlZENvbXB1dGVyU2hpdC9lc2Nyb3cvZGVjZW50cmFsaXplZC1lc2Nyb3ctY29udHJhY3QvZnJvbnRlbmQvYXBwL2FwaS9hZGQtY29udHJhY3Qvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FkZC1jb250cmFjdC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2FkZC1jb250cmFjdFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYWRkLWNvbnRyYWN0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2N5cnVzL0RvY3VtZW50cy9oaWdobHl0ZWNobm9sb2dpY2FsQWR2YW5jZWRDb21wdXRlclNoaXQvZXNjcm93L2RlY2VudHJhbGl6ZWQtZXNjcm93LWNvbnRyYWN0L2Zyb250ZW5kL2FwcC9hcGkvYWRkLWNvbnRyYWN0L3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2FkZC1jb250cmFjdC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadd-contract%2Froute&page=%2Fapi%2Fadd-contract%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadd-contract%2Froute.js&appDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/add-contract/route.js":
/*!***************************************!*\
  !*** ./app/api/add-contract/route.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\n(__webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\").config)();\nconst { MongoClient } = __webpack_require__(/*! mongodb */ \"mongodb\");\nconst url = process.env.MONGODB_URI;\nconst client = new MongoClient(url);\nasync function POST(req) {\n    const document = await req.json();\n    console.log(document.depositor);\n    console.log(document.contractInformation.arbiter);\n    try {\n        await client.connect();\n        const db = client.db(\"escrow\");\n        await db.collection(\"depositors\").updateOne({\n            depositor: document.depositor\n        }, {\n            $push: {\n                contracts: {\n                    contract: document.contractInformation.contract,\n                    beneficiary: document.contractInformation.beneficiary,\n                    arbiter: document.contractInformation.arbiter\n                }\n            }\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            status: 200\n        });\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkZC1jb250cmFjdC9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUUzQ0MscUZBQXdCO0FBQ3hCLE1BQU0sRUFBRUUsV0FBVyxFQUFFLEdBQUdGLG1CQUFPQSxDQUFDLHdCQUFTO0FBRXpDLE1BQU1HLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztBQUNuQyxNQUFNQyxTQUFTLElBQUlMLFlBQVlDO0FBRXhCLGVBQWVLLEtBQUtDLEdBQUc7SUFDNUIsTUFBTUMsV0FBVyxNQUFNRCxJQUFJRSxJQUFJO0lBQy9CQyxRQUFRQyxHQUFHLENBQUNILFNBQVNJLFNBQVM7SUFDOUJGLFFBQVFDLEdBQUcsQ0FBQ0gsU0FBU0ssbUJBQW1CLENBQUNDLE9BQU87SUFDaEQsSUFBSTtRQUNGLE1BQU1ULE9BQU9VLE9BQU87UUFDcEIsTUFBTUMsS0FBS1gsT0FBT1csRUFBRSxDQUFDO1FBRXJCLE1BQU1BLEdBQ0hDLFVBQVUsQ0FBQyxjQUNYQyxTQUFTLENBQ1I7WUFBRU4sV0FBV0osU0FBU0ksU0FBUztRQUFDLEdBQ2hDO1lBQ0VPLE9BQU87Z0JBQ0xDLFdBQVc7b0JBQ1RDLFVBQVViLFNBQVNLLG1CQUFtQixDQUFDUSxRQUFRO29CQUMvQ0MsYUFBYWQsU0FBU0ssbUJBQW1CLENBQUNTLFdBQVc7b0JBQ3JEUixTQUFTTixTQUFTSyxtQkFBbUIsQ0FBQ0MsT0FBTztnQkFDL0M7WUFDRjtRQUNGO1FBRUosT0FBT2pCLGtGQUFZQSxDQUFDWSxJQUFJLENBQUM7WUFBRWMsUUFBUTtRQUFJO0lBQ3pDLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU8zQixrRkFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUVlLE9BQU9BLE1BQU1DLE9BQU87UUFBQztJQUNsRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9hcHAvYXBpL2FkZC1jb250cmFjdC9yb3V0ZS5qcz9mMzEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5yZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZygpO1xuY29uc3QgeyBNb25nb0NsaWVudCB9ID0gcmVxdWlyZShcIm1vbmdvZGJcIik7XG5cbmNvbnN0IHVybCA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuY29uc3QgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVybCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xuICBjb25zdCBkb2N1bWVudCA9IGF3YWl0IHJlcS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKGRvY3VtZW50LmRlcG9zaXRvcik7XG4gIGNvbnNvbGUubG9nKGRvY3VtZW50LmNvbnRyYWN0SW5mb3JtYXRpb24uYXJiaXRlcik7XG4gIHRyeSB7XG4gICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYihcImVzY3Jvd1wiKTtcblxuICAgIGF3YWl0IGRiXG4gICAgICAuY29sbGVjdGlvbihcImRlcG9zaXRvcnNcIilcbiAgICAgIC51cGRhdGVPbmUoXG4gICAgICAgIHsgZGVwb3NpdG9yOiBkb2N1bWVudC5kZXBvc2l0b3IgfSxcbiAgICAgICAge1xuICAgICAgICAgICRwdXNoOiB7XG4gICAgICAgICAgICBjb250cmFjdHM6IHtcbiAgICAgICAgICAgICAgY29udHJhY3Q6IGRvY3VtZW50LmNvbnRyYWN0SW5mb3JtYXRpb24uY29udHJhY3QsXG4gICAgICAgICAgICAgIGJlbmVmaWNpYXJ5OiBkb2N1bWVudC5jb250cmFjdEluZm9ybWF0aW9uLmJlbmVmaWNpYXJ5LFxuICAgICAgICAgICAgICBhcmJpdGVyOiBkb2N1bWVudC5jb250cmFjdEluZm9ybWF0aW9uLmFyYml0ZXIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3RhdHVzOiAyMDAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJyZXF1aXJlIiwiY29uZmlnIiwiTW9uZ29DbGllbnQiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJjbGllbnQiLCJQT1NUIiwicmVxIiwiZG9jdW1lbnQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRlcG9zaXRvciIsImNvbnRyYWN0SW5mb3JtYXRpb24iLCJhcmJpdGVyIiwiY29ubmVjdCIsImRiIiwiY29sbGVjdGlvbiIsInVwZGF0ZU9uZSIsIiRwdXNoIiwiY29udHJhY3RzIiwiY29udHJhY3QiLCJiZW5lZmljaWFyeSIsInN0YXR1cyIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/add-contract/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadd-contract%2Froute&page=%2Fapi%2Fadd-contract%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadd-contract%2Froute.js&appDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcyrus%2FDocuments%2FhighlytechnologicalAdvancedComputerShit%2Fescrow%2Fdecentralized-escrow-contract%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();