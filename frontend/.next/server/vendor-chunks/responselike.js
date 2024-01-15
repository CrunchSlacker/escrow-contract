"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/responselike";
exports.ids = ["vendor-chunks/responselike"];
exports.modules = {

/***/ "(ssr)/./node_modules/responselike/node_modules/lowercase-keys/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/responselike/node_modules/lowercase-keys/index.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = (object)=>{\n    const result = {};\n    for (const [key, value] of Object.entries(object)){\n        result[key.toLowerCase()] = value;\n    }\n    return result;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVzcG9uc2VsaWtlL25vZGVfbW9kdWxlcy9sb3dlcmNhc2Uta2V5cy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBQSxPQUFPQyxPQUFPLEdBQUdDLENBQUFBO0lBQ2hCLE1BQU1DLFNBQVMsQ0FBQztJQUVoQixLQUFLLE1BQU0sQ0FBQ0MsS0FBS0MsTUFBTSxJQUFJQyxPQUFPQyxPQUFPLENBQUNMLFFBQVM7UUFDbERDLE1BQU0sQ0FBQ0MsSUFBSUksV0FBVyxHQUFHLEdBQUdIO0lBQzdCO0lBRUEsT0FBT0Y7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3Jlc3BvbnNlbGlrZS9ub2RlX21vZHVsZXMvbG93ZXJjYXNlLWtleXMvaW5kZXguanM/ZTRhMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdCA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xuXG5cdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iamVjdCkpIHtcblx0XHRyZXN1bHRba2V5LnRvTG93ZXJDYXNlKCldID0gdmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwib2JqZWN0IiwicmVzdWx0Iiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwidG9Mb3dlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/responselike/node_modules/lowercase-keys/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/responselike/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/responselike/src/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst Readable = (__webpack_require__(/*! stream */ \"stream\").Readable);\nconst lowercaseKeys = __webpack_require__(/*! lowercase-keys */ \"(ssr)/./node_modules/responselike/node_modules/lowercase-keys/index.js\");\nclass Response extends Readable {\n    constructor(statusCode, headers, body, url){\n        if (typeof statusCode !== \"number\") {\n            throw new TypeError(\"Argument `statusCode` should be a number\");\n        }\n        if (typeof headers !== \"object\") {\n            throw new TypeError(\"Argument `headers` should be an object\");\n        }\n        if (!(body instanceof Buffer)) {\n            throw new TypeError(\"Argument `body` should be a buffer\");\n        }\n        if (typeof url !== \"string\") {\n            throw new TypeError(\"Argument `url` should be a string\");\n        }\n        super();\n        this.statusCode = statusCode;\n        this.headers = lowercaseKeys(headers);\n        this.body = body;\n        this.url = url;\n    }\n    _read() {\n        this.push(this.body);\n        this.push(null);\n    }\n}\nmodule.exports = Response;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVzcG9uc2VsaWtlL3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLE1BQU1BLFdBQVdDLHNEQUEwQjtBQUMzQyxNQUFNQyxnQkFBZ0JELG1CQUFPQSxDQUFDO0FBRTlCLE1BQU1FLGlCQUFpQkg7SUFDdEJJLFlBQVlDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLEdBQUcsQ0FBRTtRQUMzQyxJQUFJLE9BQU9ILGVBQWUsVUFBVTtZQUNuQyxNQUFNLElBQUlJLFVBQVU7UUFDckI7UUFDQSxJQUFJLE9BQU9ILFlBQVksVUFBVTtZQUNoQyxNQUFNLElBQUlHLFVBQVU7UUFDckI7UUFDQSxJQUFJLENBQUVGLENBQUFBLGdCQUFnQkcsTUFBSyxHQUFJO1lBQzlCLE1BQU0sSUFBSUQsVUFBVTtRQUNyQjtRQUNBLElBQUksT0FBT0QsUUFBUSxVQUFVO1lBQzVCLE1BQU0sSUFBSUMsVUFBVTtRQUNyQjtRQUVBLEtBQUs7UUFDTCxJQUFJLENBQUNKLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdKLGNBQWNJO1FBQzdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsR0FBRyxHQUFHQTtJQUNaO0lBRUFHLFFBQVE7UUFDUCxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNMLElBQUk7UUFDbkIsSUFBSSxDQUFDSyxJQUFJLENBQUM7SUFDWDtBQUNEO0FBRUFDLE9BQU9DLE9BQU8sR0FBR1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9yZXNwb25zZWxpa2Uvc3JjL2luZGV4LmpzPzU5NTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFkYWJsZSA9IHJlcXVpcmUoJ3N0cmVhbScpLlJlYWRhYmxlO1xuY29uc3QgbG93ZXJjYXNlS2V5cyA9IHJlcXVpcmUoJ2xvd2VyY2FzZS1rZXlzJyk7XG5cbmNsYXNzIFJlc3BvbnNlIGV4dGVuZHMgUmVhZGFibGUge1xuXHRjb25zdHJ1Y3RvcihzdGF0dXNDb2RlLCBoZWFkZXJzLCBib2R5LCB1cmwpIHtcblx0XHRpZiAodHlwZW9mIHN0YXR1c0NvZGUgIT09ICdudW1iZXInKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBgc3RhdHVzQ29kZWAgc2hvdWxkIGJlIGEgbnVtYmVyJyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgaGVhZGVycyAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IGBoZWFkZXJzYCBzaG91bGQgYmUgYW4gb2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghKGJvZHkgaW5zdGFuY2VvZiBCdWZmZXIpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBgYm9keWAgc2hvdWxkIGJlIGEgYnVmZmVyJyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgYHVybGAgc2hvdWxkIGJlIGEgc3RyaW5nJyk7XG5cdFx0fVxuXG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuXHRcdHRoaXMuaGVhZGVycyA9IGxvd2VyY2FzZUtleXMoaGVhZGVycyk7XG5cdFx0dGhpcy5ib2R5ID0gYm9keTtcblx0XHR0aGlzLnVybCA9IHVybDtcblx0fVxuXG5cdF9yZWFkKCkge1xuXHRcdHRoaXMucHVzaCh0aGlzLmJvZHkpO1xuXHRcdHRoaXMucHVzaChudWxsKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc3BvbnNlO1xuIl0sIm5hbWVzIjpbIlJlYWRhYmxlIiwicmVxdWlyZSIsImxvd2VyY2FzZUtleXMiLCJSZXNwb25zZSIsImNvbnN0cnVjdG9yIiwic3RhdHVzQ29kZSIsImhlYWRlcnMiLCJib2R5IiwidXJsIiwiVHlwZUVycm9yIiwiQnVmZmVyIiwiX3JlYWQiLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/responselike/src/index.js\n");

/***/ })

};
;