/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/simple-concat";
exports.ids = ["vendor-chunks/simple-concat"];
exports.modules = {

/***/ "(ssr)/./node_modules/simple-concat/index.js":
/*!*********************************************!*\
  !*** ./node_modules/simple-concat/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/*! simple-concat. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ module.exports = function(stream, cb) {\n    var chunks = [];\n    stream.on(\"data\", function(chunk) {\n        chunks.push(chunk);\n    });\n    stream.once(\"end\", function() {\n        if (cb) cb(null, Buffer.concat(chunks));\n        cb = null;\n    });\n    stream.once(\"error\", function(err) {\n        if (cb) cb(err);\n        cb = null;\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9zaW1wbGUtY29uY2F0L2luZGV4LmpzP2UzMTkiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIHNpbXBsZS1jb25jYXQuIE1JVCBMaWNlbnNlLiBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmcvb3BlbnNvdXJjZT4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cmVhbSwgY2IpIHtcbiAgdmFyIGNodW5rcyA9IFtdXG4gIHN0cmVhbS5vbignZGF0YScsIGZ1bmN0aW9uIChjaHVuaykge1xuICAgIGNodW5rcy5wdXNoKGNodW5rKVxuICB9KVxuICBzdHJlYW0ub25jZSgnZW5kJywgZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYikgY2IobnVsbCwgQnVmZmVyLmNvbmNhdChjaHVua3MpKVxuICAgIGNiID0gbnVsbFxuICB9KVxuICBzdHJlYW0ub25jZSgnZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGNiKSBjYihlcnIpXG4gICAgY2IgPSBudWxsXG4gIH0pXG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInN0cmVhbSIsImNiIiwiY2h1bmtzIiwib24iLCJjaHVuayIsInB1c2giLCJvbmNlIiwiQnVmZmVyIiwiY29uY2F0IiwiZXJyIl0sIm1hcHBpbmdzIjoiQUFBQSxvRkFBb0YsR0FDcEZBLE9BQU9DLE9BQU8sR0FBRyxTQUFVQyxNQUFNLEVBQUVDLEVBQUU7SUFDbkMsSUFBSUMsU0FBUyxFQUFFO0lBQ2ZGLE9BQU9HLEVBQUUsQ0FBQyxRQUFRLFNBQVVDLEtBQUs7UUFDL0JGLE9BQU9HLElBQUksQ0FBQ0Q7SUFDZDtJQUNBSixPQUFPTSxJQUFJLENBQUMsT0FBTztRQUNqQixJQUFJTCxJQUFJQSxHQUFHLE1BQU1NLE9BQU9DLE1BQU0sQ0FBQ047UUFDL0JELEtBQUs7SUFDUDtJQUNBRCxPQUFPTSxJQUFJLENBQUMsU0FBUyxTQUFVRyxHQUFHO1FBQ2hDLElBQUlSLElBQUlBLEdBQUdRO1FBQ1hSLEtBQUs7SUFDUDtBQUNGIiwiZmlsZSI6Iihzc3IpLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1jb25jYXQvaW5kZXguanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/simple-concat/index.js\n");

/***/ })

};
;