"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mimic-response";
exports.ids = ["vendor-chunks/mimic-response"];
exports.modules = {

/***/ "(ssr)/./node_modules/mimic-response/index.js":
/*!**********************************************!*\
  !*** ./node_modules/mimic-response/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\n// We define these manually to ensure they're always copied\n// even if they would move up the prototype chain\n// https://nodejs.org/api/http.html#http_class_http_incomingmessage\nconst knownProps = [\n    \"destroy\",\n    \"setTimeout\",\n    \"socket\",\n    \"headers\",\n    \"trailers\",\n    \"rawHeaders\",\n    \"statusCode\",\n    \"httpVersion\",\n    \"httpVersionMinor\",\n    \"httpVersionMajor\",\n    \"rawTrailers\",\n    \"statusMessage\"\n];\nmodule.exports = (fromStream, toStream)=>{\n    const fromProps = new Set(Object.keys(fromStream).concat(knownProps));\n    for (const prop of fromProps){\n        // Don't overwrite existing properties\n        if (prop in toStream) {\n            continue;\n        }\n        toStream[prop] = typeof fromStream[prop] === \"function\" ? fromStream[prop].bind(fromStream) : fromStream[prop];\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWltaWMtcmVzcG9uc2UvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSwyREFBMkQ7QUFDM0QsaURBQWlEO0FBQ2pELG1FQUFtRTtBQUNuRSxNQUFNQSxhQUFhO0lBQ2xCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNBO0FBRURDLE9BQU9DLE9BQU8sR0FBRyxDQUFDQyxZQUFZQztJQUM3QixNQUFNQyxZQUFZLElBQUlDLElBQUlDLE9BQU9DLElBQUksQ0FBQ0wsWUFBWU0sTUFBTSxDQUFDVDtJQUV6RCxLQUFLLE1BQU1VLFFBQVFMLFVBQVc7UUFDN0Isc0NBQXNDO1FBQ3RDLElBQUlLLFFBQVFOLFVBQVU7WUFDckI7UUFDRDtRQUVBQSxRQUFRLENBQUNNLEtBQUssR0FBRyxPQUFPUCxVQUFVLENBQUNPLEtBQUssS0FBSyxhQUFhUCxVQUFVLENBQUNPLEtBQUssQ0FBQ0MsSUFBSSxDQUFDUixjQUFjQSxVQUFVLENBQUNPLEtBQUs7SUFDL0c7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL21pbWljLXJlc3BvbnNlL2luZGV4LmpzP2JmMzciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyBXZSBkZWZpbmUgdGhlc2UgbWFudWFsbHkgdG8gZW5zdXJlIHRoZXkncmUgYWx3YXlzIGNvcGllZFxuLy8gZXZlbiBpZiB0aGV5IHdvdWxkIG1vdmUgdXAgdGhlIHByb3RvdHlwZSBjaGFpblxuLy8gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9jbGFzc19odHRwX2luY29taW5nbWVzc2FnZVxuY29uc3Qga25vd25Qcm9wcyA9IFtcblx0J2Rlc3Ryb3knLFxuXHQnc2V0VGltZW91dCcsXG5cdCdzb2NrZXQnLFxuXHQnaGVhZGVycycsXG5cdCd0cmFpbGVycycsXG5cdCdyYXdIZWFkZXJzJyxcblx0J3N0YXR1c0NvZGUnLFxuXHQnaHR0cFZlcnNpb24nLFxuXHQnaHR0cFZlcnNpb25NaW5vcicsXG5cdCdodHRwVmVyc2lvbk1ham9yJyxcblx0J3Jhd1RyYWlsZXJzJyxcblx0J3N0YXR1c01lc3NhZ2UnXG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmcm9tU3RyZWFtLCB0b1N0cmVhbSkgPT4ge1xuXHRjb25zdCBmcm9tUHJvcHMgPSBuZXcgU2V0KE9iamVjdC5rZXlzKGZyb21TdHJlYW0pLmNvbmNhdChrbm93blByb3BzKSk7XG5cblx0Zm9yIChjb25zdCBwcm9wIG9mIGZyb21Qcm9wcykge1xuXHRcdC8vIERvbid0IG92ZXJ3cml0ZSBleGlzdGluZyBwcm9wZXJ0aWVzXG5cdFx0aWYgKHByb3AgaW4gdG9TdHJlYW0pIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHRvU3RyZWFtW3Byb3BdID0gdHlwZW9mIGZyb21TdHJlYW1bcHJvcF0gPT09ICdmdW5jdGlvbicgPyBmcm9tU3RyZWFtW3Byb3BdLmJpbmQoZnJvbVN0cmVhbSkgOiBmcm9tU3RyZWFtW3Byb3BdO1xuXHR9XG59O1xuIl0sIm5hbWVzIjpbImtub3duUHJvcHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZnJvbVN0cmVhbSIsInRvU3RyZWFtIiwiZnJvbVByb3BzIiwiU2V0IiwiT2JqZWN0Iiwia2V5cyIsImNvbmNhdCIsInByb3AiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mimic-response/index.js\n");

/***/ })

};
;