"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/strict-uri-encode";
exports.ids = ["vendor-chunks/strict-uri-encode"];
exports.modules = {

/***/ "(ssr)/./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\nmodule.exports = function(str) {\n    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {\n        return \"%\" + c.charCodeAt(0).toString(16).toUpperCase();\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3RyaWN0LXVyaS1lbmNvZGUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQUEsT0FBT0MsT0FBTyxHQUFHLFNBQVVDLEdBQUc7SUFDN0IsT0FBT0MsbUJBQW1CRCxLQUFLRSxPQUFPLENBQUMsWUFBWSxTQUFVQyxDQUFDO1FBQzdELE9BQU8sTUFBTUEsRUFBRUMsVUFBVSxDQUFDLEdBQUdDLFFBQVEsQ0FBQyxJQUFJQyxXQUFXO0lBQ3REO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9zdHJpY3QtdXJpLWVuY29kZS9pbmRleC5qcz8yNWM4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCkqXS9nLCBmdW5jdGlvbiAoYykge1xuXHRcdHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdH0pO1xufTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic3RyIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsImMiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJ0b1VwcGVyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/strict-uri-encode/index.js\n");

/***/ })

};
;