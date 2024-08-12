"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/web3-bzz";
exports.ids = ["vendor-chunks/web3-bzz"];
exports.modules = {

/***/ "(ssr)/./node_modules/web3-bzz/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/web3-bzz/lib/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n    This file is part of web3.js.\n\n    web3.js is free software: you can redistribute it and/or modify\n    it under the terms of the GNU Lesser General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n\n    web3.js is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU Lesser General Public License for more details.\n\n    You should have received a copy of the GNU Lesser General Public License\n    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.\n*/ /**\n * @file index.js\n * @author Fabian Vogelsteller <fabian@ethereum.org>\n * @date 2017\n */ \nvar swarm = __webpack_require__(/*! swarm-js */ \"(ssr)/./node_modules/swarm-js/lib/api-node.js\");\nvar Bzz = function Bzz(provider) {\n    this.givenProvider = Bzz.givenProvider;\n    if (provider && provider._requestManager) {\n        provider = provider.currentProvider;\n    }\n    // only allow file picker when in browser\n    if (typeof document !== \"undefined\") {\n        this.pick = swarm.pick;\n    }\n    this.setProvider(provider);\n};\n// set default ethereum provider\n/* jshint ignore:start */ Bzz.givenProvider = null;\nif (typeof ethereum !== \"undefined\" && ethereum.bzz) {\n    Bzz.givenProvider = ethereum.bzz;\n}\n/* jshint ignore:end */ Bzz.prototype.setProvider = function(provider) {\n    // is ethereum provider\n    if (!!provider && typeof provider === \"object\" && typeof provider.bzz === \"string\") {\n        provider = provider.bzz;\n    // is no string, set default\n    }\n    // else if(!_.isString(provider)) {\n    //      provider = 'http://swarm-gateways.net'; // default to gateway\n    // }\n    if (typeof provider === \"string\") {\n        this.currentProvider = provider;\n    } else {\n        this.currentProvider = null;\n        var noProviderError = new Error(\"No provider set, please set one using bzz.setProvider().\");\n        this.download = this.upload = this.isAvailable = function() {\n            throw noProviderError;\n        };\n        return false;\n    }\n    // add functions\n    this.download = swarm.at(provider).download;\n    this.upload = swarm.at(provider).upload;\n    this.isAvailable = swarm.at(provider).isAvailable;\n    return true;\n};\nmodule.exports = Bzz;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2ViMy1ienovbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQSxHQUNBOzs7O0NBSUMsR0FDWTtBQUNiLElBQUlBLFFBQVFDLG1CQUFPQSxDQUFDLCtEQUFVO0FBQzlCLElBQUlDLE1BQU0sU0FBU0EsSUFBSUMsUUFBUTtJQUMzQixJQUFJLENBQUNDLGFBQWEsR0FBR0YsSUFBSUUsYUFBYTtJQUN0QyxJQUFJRCxZQUFZQSxTQUFTRSxlQUFlLEVBQUU7UUFDdENGLFdBQVdBLFNBQVNHLGVBQWU7SUFDdkM7SUFDQSx5Q0FBeUM7SUFDekMsSUFBSSxPQUFPQyxhQUFhLGFBQWE7UUFDakMsSUFBSSxDQUFDQyxJQUFJLEdBQUdSLE1BQU1RLElBQUk7SUFDMUI7SUFDQSxJQUFJLENBQUNDLFdBQVcsQ0FBQ047QUFDckI7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCLEdBQ3ZCRCxJQUFJRSxhQUFhLEdBQUc7QUFDcEIsSUFBSSxPQUFPTSxhQUFhLGVBQWVBLFNBQVNDLEdBQUcsRUFBRTtJQUNqRFQsSUFBSUUsYUFBYSxHQUFHTSxTQUFTQyxHQUFHO0FBQ3BDO0FBQ0EscUJBQXFCLEdBQ3JCVCxJQUFJVSxTQUFTLENBQUNILFdBQVcsR0FBRyxTQUFVTixRQUFRO0lBQzFDLHVCQUF1QjtJQUN2QixJQUFJLENBQUMsQ0FBQ0EsWUFBWSxPQUFPQSxhQUFhLFlBQVksT0FBT0EsU0FBU1EsR0FBRyxLQUFLLFVBQVU7UUFDaEZSLFdBQVdBLFNBQVNRLEdBQUc7SUFDdkIsNEJBQTRCO0lBQ2hDO0lBQ0EsbUNBQW1DO0lBQ25DLHFFQUFxRTtJQUNyRSxJQUFJO0lBQ0osSUFBSSxPQUFPUixhQUFhLFVBQVU7UUFDOUIsSUFBSSxDQUFDRyxlQUFlLEdBQUdIO0lBQzNCLE9BQ0s7UUFDRCxJQUFJLENBQUNHLGVBQWUsR0FBRztRQUN2QixJQUFJTyxrQkFBa0IsSUFBSUMsTUFBTTtRQUNoQyxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJLENBQUNDLFdBQVcsR0FBRztZQUM3QyxNQUFNSjtRQUNWO1FBQ0EsT0FBTztJQUNYO0lBQ0EsZ0JBQWdCO0lBQ2hCLElBQUksQ0FBQ0UsUUFBUSxHQUFHZixNQUFNa0IsRUFBRSxDQUFDZixVQUFVWSxRQUFRO0lBQzNDLElBQUksQ0FBQ0MsTUFBTSxHQUFHaEIsTUFBTWtCLEVBQUUsQ0FBQ2YsVUFBVWEsTUFBTTtJQUN2QyxJQUFJLENBQUNDLFdBQVcsR0FBR2pCLE1BQU1rQixFQUFFLENBQUNmLFVBQVVjLFdBQVc7SUFDakQsT0FBTztBQUNYO0FBQ0FFLE9BQU9DLE9BQU8sR0FBR2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvd2ViMy1ienovbGliL2luZGV4LmpzPzJhNGIiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBUaGlzIGZpbGUgaXMgcGFydCBvZiB3ZWIzLmpzLlxuXG4gICAgd2ViMy5qcyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gICAgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gICAgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAgICAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuXG4gICAgd2ViMy5qcyBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICAgIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gICAgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICAgIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuXG4gICAgWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gICAgYWxvbmcgd2l0aCB3ZWIzLmpzLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuKi9cbi8qKlxuICogQGZpbGUgaW5kZXguanNcbiAqIEBhdXRob3IgRmFiaWFuIFZvZ2Vsc3RlbGxlciA8ZmFiaWFuQGV0aGVyZXVtLm9yZz5cbiAqIEBkYXRlIDIwMTdcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgc3dhcm0gPSByZXF1aXJlKFwic3dhcm0tanNcIik7XG52YXIgQnp6ID0gZnVuY3Rpb24gQnp6KHByb3ZpZGVyKSB7XG4gICAgdGhpcy5naXZlblByb3ZpZGVyID0gQnp6LmdpdmVuUHJvdmlkZXI7XG4gICAgaWYgKHByb3ZpZGVyICYmIHByb3ZpZGVyLl9yZXF1ZXN0TWFuYWdlcikge1xuICAgICAgICBwcm92aWRlciA9IHByb3ZpZGVyLmN1cnJlbnRQcm92aWRlcjtcbiAgICB9XG4gICAgLy8gb25seSBhbGxvdyBmaWxlIHBpY2tlciB3aGVuIGluIGJyb3dzZXJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnBpY2sgPSBzd2FybS5waWNrO1xuICAgIH1cbiAgICB0aGlzLnNldFByb3ZpZGVyKHByb3ZpZGVyKTtcbn07XG4vLyBzZXQgZGVmYXVsdCBldGhlcmV1bSBwcm92aWRlclxuLyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuQnp6LmdpdmVuUHJvdmlkZXIgPSBudWxsO1xuaWYgKHR5cGVvZiBldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCcgJiYgZXRoZXJldW0uYnp6KSB7XG4gICAgQnp6LmdpdmVuUHJvdmlkZXIgPSBldGhlcmV1bS5ieno7XG59XG4vKiBqc2hpbnQgaWdub3JlOmVuZCAqL1xuQnp6LnByb3RvdHlwZS5zZXRQcm92aWRlciA9IGZ1bmN0aW9uIChwcm92aWRlcikge1xuICAgIC8vIGlzIGV0aGVyZXVtIHByb3ZpZGVyXG4gICAgaWYgKCEhcHJvdmlkZXIgJiYgdHlwZW9mIHByb3ZpZGVyID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcHJvdmlkZXIuYnp6ID09PSAnc3RyaW5nJykge1xuICAgICAgICBwcm92aWRlciA9IHByb3ZpZGVyLmJ6ejtcbiAgICAgICAgLy8gaXMgbm8gc3RyaW5nLCBzZXQgZGVmYXVsdFxuICAgIH1cbiAgICAvLyBlbHNlIGlmKCFfLmlzU3RyaW5nKHByb3ZpZGVyKSkge1xuICAgIC8vICAgICAgcHJvdmlkZXIgPSAnaHR0cDovL3N3YXJtLWdhdGV3YXlzLm5ldCc7IC8vIGRlZmF1bHQgdG8gZ2F0ZXdheVxuICAgIC8vIH1cbiAgICBpZiAodHlwZW9mIHByb3ZpZGVyID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmN1cnJlbnRQcm92aWRlciA9IHByb3ZpZGVyO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvdmlkZXIgPSBudWxsO1xuICAgICAgICB2YXIgbm9Qcm92aWRlckVycm9yID0gbmV3IEVycm9yKCdObyBwcm92aWRlciBzZXQsIHBsZWFzZSBzZXQgb25lIHVzaW5nIGJ6ei5zZXRQcm92aWRlcigpLicpO1xuICAgICAgICB0aGlzLmRvd25sb2FkID0gdGhpcy51cGxvYWQgPSB0aGlzLmlzQXZhaWxhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbm9Qcm92aWRlckVycm9yO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGFkZCBmdW5jdGlvbnNcbiAgICB0aGlzLmRvd25sb2FkID0gc3dhcm0uYXQocHJvdmlkZXIpLmRvd25sb2FkO1xuICAgIHRoaXMudXBsb2FkID0gc3dhcm0uYXQocHJvdmlkZXIpLnVwbG9hZDtcbiAgICB0aGlzLmlzQXZhaWxhYmxlID0gc3dhcm0uYXQocHJvdmlkZXIpLmlzQXZhaWxhYmxlO1xuICAgIHJldHVybiB0cnVlO1xufTtcbm1vZHVsZS5leHBvcnRzID0gQnp6O1xuIl0sIm5hbWVzIjpbInN3YXJtIiwicmVxdWlyZSIsIkJ6eiIsInByb3ZpZGVyIiwiZ2l2ZW5Qcm92aWRlciIsIl9yZXF1ZXN0TWFuYWdlciIsImN1cnJlbnRQcm92aWRlciIsImRvY3VtZW50IiwicGljayIsInNldFByb3ZpZGVyIiwiZXRoZXJldW0iLCJienoiLCJwcm90b3R5cGUiLCJub1Byb3ZpZGVyRXJyb3IiLCJFcnJvciIsImRvd25sb2FkIiwidXBsb2FkIiwiaXNBdmFpbGFibGUiLCJhdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/web3-bzz/lib/index.js\n");

/***/ })

};
;