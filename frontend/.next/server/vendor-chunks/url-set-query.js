/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/url-set-query";
exports.ids = ["vendor-chunks/url-set-query"];
exports.modules = {

/***/ "(ssr)/./node_modules/url-set-query/index.js":
/*!*********************************************!*\
  !*** ./node_modules/url-set-query/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("module.exports = urlSetQuery;\nfunction urlSetQuery(url, query) {\n    if (query) {\n        // remove optional leading symbols\n        query = query.trim().replace(/^(\\?|#|&)/, \"\");\n        // don't append empty query\n        query = query ? \"?\" + query : query;\n        var parts = url.split(/[\\?\\#]/);\n        var start = parts[0];\n        if (query && /\\:\\/\\/[^\\/]*$/.test(start)) {\n            // e.g. http://foo.com -> http://foo.com/\n            start = start + \"/\";\n        }\n        var match = url.match(/(\\#.*)$/);\n        url = start + query;\n        if (match) {\n            url = url + match[0];\n        }\n    }\n    return url;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy91cmwtc2V0LXF1ZXJ5L2luZGV4LmpzPzJmNzciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB1cmxTZXRRdWVyeVxuZnVuY3Rpb24gdXJsU2V0UXVlcnkgKHVybCwgcXVlcnkpIHtcbiAgaWYgKHF1ZXJ5KSB7XG4gICAgLy8gcmVtb3ZlIG9wdGlvbmFsIGxlYWRpbmcgc3ltYm9sc1xuICAgIHF1ZXJ5ID0gcXVlcnkudHJpbSgpLnJlcGxhY2UoL14oXFw/fCN8JikvLCAnJylcblxuICAgIC8vIGRvbid0IGFwcGVuZCBlbXB0eSBxdWVyeVxuICAgIHF1ZXJ5ID0gcXVlcnkgPyAoJz8nICsgcXVlcnkpIDogcXVlcnlcblxuICAgIHZhciBwYXJ0cyA9IHVybC5zcGxpdCgvW1xcP1xcI10vKVxuICAgIHZhciBzdGFydCA9IHBhcnRzWzBdXG4gICAgaWYgKHF1ZXJ5ICYmIC9cXDpcXC9cXC9bXlxcL10qJC8udGVzdChzdGFydCkpIHtcbiAgICAgIC8vIGUuZy4gaHR0cDovL2Zvby5jb20gLT4gaHR0cDovL2Zvby5jb20vXG4gICAgICBzdGFydCA9IHN0YXJ0ICsgJy8nXG4gICAgfVxuICAgIHZhciBtYXRjaCA9IHVybC5tYXRjaCgvKFxcIy4qKSQvKVxuICAgIHVybCA9IHN0YXJ0ICsgcXVlcnlcbiAgICBpZiAobWF0Y2gpIHsgLy8gYWRkIGhhc2ggYmFjayBpblxuICAgICAgdXJsID0gdXJsICsgbWF0Y2hbMF1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVybFxufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1cmxTZXRRdWVyeSIsInVybCIsInF1ZXJ5IiwidHJpbSIsInJlcGxhY2UiLCJwYXJ0cyIsInNwbGl0Iiwic3RhcnQiLCJ0ZXN0IiwibWF0Y2giXSwibWFwcGluZ3MiOiJBQUFBQSxPQUFPQyxPQUFPLEdBQUdDO0FBQ2pCLFNBQVNBLFlBQWFDLEdBQUcsRUFBRUMsS0FBSztJQUM5QixJQUFJQSxPQUFPO1FBQ1Qsa0NBQWtDO1FBQ2xDQSxRQUFRQSxNQUFNQyxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxhQUFhO1FBRTFDLDJCQUEyQjtRQUMzQkYsUUFBUUEsUUFBUyxNQUFNQSxRQUFTQTtRQUVoQyxJQUFJRyxRQUFRSixJQUFJSyxLQUFLLENBQUM7UUFDdEIsSUFBSUMsUUFBUUYsS0FBSyxDQUFDLEVBQUU7UUFDcEIsSUFBSUgsU0FBUyxnQkFBZ0JNLElBQUksQ0FBQ0QsUUFBUTtZQUN4Qyx5Q0FBeUM7WUFDekNBLFFBQVFBLFFBQVE7UUFDbEI7UUFDQSxJQUFJRSxRQUFRUixJQUFJUSxLQUFLLENBQUM7UUFDdEJSLE1BQU1NLFFBQVFMO1FBQ2QsSUFBSU8sT0FBTztZQUNUUixNQUFNQSxNQUFNUSxLQUFLLENBQUMsRUFBRTtRQUN0QjtJQUNGO0lBQ0EsT0FBT1I7QUFDVCIsImZpbGUiOiIoc3NyKS8uL25vZGVfbW9kdWxlcy91cmwtc2V0LXF1ZXJ5L2luZGV4LmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/url-set-query/index.js\n");

/***/ })

};
;