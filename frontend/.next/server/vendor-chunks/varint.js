/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/varint";
exports.ids = ["vendor-chunks/varint"];
exports.modules = {

/***/ "(ssr)/./node_modules/varint/decode.js":
/*!***************************************!*\
  !*** ./node_modules/varint/decode.js ***!
  \***************************************/
/***/ ((module) => {

eval("module.exports = read;\nvar MSB = 0x80, REST = 0x7F;\nfunction read(buf, offset) {\n    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;\n    do {\n        if (counter >= l) {\n            read.bytes = 0;\n            throw new RangeError(\"Could not decode varint\");\n        }\n        b = buf[counter++];\n        res += shift < 28 ? (b & REST) << shift : (b & REST) * Math.pow(2, shift);\n        shift += 7;\n    }while (b >= MSB);\n    read.bytes = counter - offset;\n    return res;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy92YXJpbnQvZGVjb2RlLmpzP2ZjMGIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZWFkXG5cbnZhciBNU0IgPSAweDgwXG4gICwgUkVTVCA9IDB4N0ZcblxuZnVuY3Rpb24gcmVhZChidWYsIG9mZnNldCkge1xuICB2YXIgcmVzICAgID0gMFxuICAgICwgb2Zmc2V0ID0gb2Zmc2V0IHx8IDBcbiAgICAsIHNoaWZ0ICA9IDBcbiAgICAsIGNvdW50ZXIgPSBvZmZzZXRcbiAgICAsIGJcbiAgICAsIGwgPSBidWYubGVuZ3RoXG5cbiAgZG8ge1xuICAgIGlmIChjb3VudGVyID49IGwpIHtcbiAgICAgIHJlYWQuYnl0ZXMgPSAwXG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQ291bGQgbm90IGRlY29kZSB2YXJpbnQnKVxuICAgIH1cbiAgICBiID0gYnVmW2NvdW50ZXIrK11cbiAgICByZXMgKz0gc2hpZnQgPCAyOFxuICAgICAgPyAoYiAmIFJFU1QpIDw8IHNoaWZ0XG4gICAgICA6IChiICYgUkVTVCkgKiBNYXRoLnBvdygyLCBzaGlmdClcbiAgICBzaGlmdCArPSA3XG4gIH0gd2hpbGUgKGIgPj0gTVNCKVxuXG4gIHJlYWQuYnl0ZXMgPSBjb3VudGVyIC0gb2Zmc2V0XG5cbiAgcmV0dXJuIHJlc1xufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZWFkIiwiTVNCIiwiUkVTVCIsImJ1ZiIsIm9mZnNldCIsInJlcyIsInNoaWZ0IiwiY291bnRlciIsImIiLCJsIiwibGVuZ3RoIiwiYnl0ZXMiLCJSYW5nZUVycm9yIiwiTWF0aCIsInBvdyJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsSUFBSUMsTUFBTSxNQUNOQyxPQUFPO0FBRVgsU0FBU0YsS0FBS0csR0FBRyxFQUFFQyxNQUFNO0lBQ3ZCLElBQUlDLE1BQVMsR0FDVEQsU0FBU0EsVUFBVSxHQUNuQkUsUUFBUyxHQUNUQyxVQUFVSCxRQUNWSSxHQUNBQyxJQUFJTixJQUFJTyxNQUFNO0lBRWxCLEdBQUc7UUFDRCxJQUFJSCxXQUFXRSxHQUFHO1lBQ2hCVCxLQUFLVyxLQUFLLEdBQUc7WUFDYixNQUFNLElBQUlDLFdBQVc7UUFDdkI7UUFDQUosSUFBSUwsR0FBRyxDQUFDSSxVQUFVO1FBQ2xCRixPQUFPQyxRQUFRLEtBQ1gsQUFBQ0UsQ0FBQUEsSUFBSU4sSUFBRyxLQUFNSSxRQUNkLEFBQUNFLENBQUFBLElBQUlOLElBQUcsSUFBS1csS0FBS0MsR0FBRyxDQUFDLEdBQUdSO1FBQzdCQSxTQUFTO0lBQ1gsUUFBU0UsS0FBS1AsS0FBSTtJQUVsQkQsS0FBS1csS0FBSyxHQUFHSixVQUFVSDtJQUV2QixPQUFPQztBQUNUIiwiZmlsZSI6Iihzc3IpLy4vbm9kZV9tb2R1bGVzL3ZhcmludC9kZWNvZGUuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/varint/decode.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/varint/encode.js":
/*!***************************************!*\
  !*** ./node_modules/varint/encode.js ***!
  \***************************************/
/***/ ((module) => {

eval("module.exports = encode;\nvar MSB = 0x80, REST = 0x7F, MSBALL = ~REST, INT = Math.pow(2, 31);\nfunction encode(num, out, offset) {\n    out = out || [];\n    offset = offset || 0;\n    var oldOffset = offset;\n    while(num >= INT){\n        out[offset++] = num & 0xFF | MSB;\n        num /= 128;\n    }\n    while(num & MSBALL){\n        out[offset++] = num & 0xFF | MSB;\n        num >>>= 7;\n    }\n    out[offset] = num | 0;\n    encode.bytes = offset - oldOffset + 1;\n    return out;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy92YXJpbnQvZW5jb2RlLmpzP2M5NWUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBlbmNvZGVcblxudmFyIE1TQiA9IDB4ODBcbiAgLCBSRVNUID0gMHg3RlxuICAsIE1TQkFMTCA9IH5SRVNUXG4gICwgSU5UID0gTWF0aC5wb3coMiwgMzEpXG5cbmZ1bmN0aW9uIGVuY29kZShudW0sIG91dCwgb2Zmc2V0KSB7XG4gIG91dCA9IG91dCB8fCBbXVxuICBvZmZzZXQgPSBvZmZzZXQgfHwgMFxuICB2YXIgb2xkT2Zmc2V0ID0gb2Zmc2V0XG5cbiAgd2hpbGUobnVtID49IElOVCkge1xuICAgIG91dFtvZmZzZXQrK10gPSAobnVtICYgMHhGRikgfCBNU0JcbiAgICBudW0gLz0gMTI4XG4gIH1cbiAgd2hpbGUobnVtICYgTVNCQUxMKSB7XG4gICAgb3V0W29mZnNldCsrXSA9IChudW0gJiAweEZGKSB8IE1TQlxuICAgIG51bSA+Pj49IDdcbiAgfVxuICBvdXRbb2Zmc2V0XSA9IG51bSB8IDBcbiAgXG4gIGVuY29kZS5ieXRlcyA9IG9mZnNldCAtIG9sZE9mZnNldCArIDFcbiAgXG4gIHJldHVybiBvdXRcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZW5jb2RlIiwiTVNCIiwiUkVTVCIsIk1TQkFMTCIsIklOVCIsIk1hdGgiLCJwb3ciLCJudW0iLCJvdXQiLCJvZmZzZXQiLCJvbGRPZmZzZXQiLCJieXRlcyJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsSUFBSUMsTUFBTSxNQUNOQyxPQUFPLE1BQ1BDLFNBQVMsQ0FBQ0QsTUFDVkUsTUFBTUMsS0FBS0MsR0FBRyxDQUFDLEdBQUc7QUFFdEIsU0FBU04sT0FBT08sR0FBRyxFQUFFQyxHQUFHLEVBQUVDLE1BQU07SUFDOUJELE1BQU1BLE9BQU8sRUFBRTtJQUNmQyxTQUFTQSxVQUFVO0lBQ25CLElBQUlDLFlBQVlEO0lBRWhCLE1BQU1GLE9BQU9ILElBQUs7UUFDaEJJLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLEFBQUNGLE1BQU0sT0FBUU47UUFDL0JNLE9BQU87SUFDVDtJQUNBLE1BQU1BLE1BQU1KLE9BQVE7UUFDbEJLLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLEFBQUNGLE1BQU0sT0FBUU47UUFDL0JNLFNBQVM7SUFDWDtJQUNBQyxHQUFHLENBQUNDLE9BQU8sR0FBR0YsTUFBTTtJQUVwQlAsT0FBT1csS0FBSyxHQUFHRixTQUFTQyxZQUFZO0lBRXBDLE9BQU9GO0FBQ1QiLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmFyaW50L2VuY29kZS5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/varint/encode.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/varint/index.js":
/*!**************************************!*\
  !*** ./node_modules/varint/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\n    encode: __webpack_require__(/*! ./encode.js */ \"(ssr)/./node_modules/varint/encode.js\"),\n    decode: __webpack_require__(/*! ./decode.js */ \"(ssr)/./node_modules/varint/decode.js\"),\n    encodingLength: __webpack_require__(/*! ./length.js */ \"(ssr)/./node_modules/varint/length.js\")\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmFyaW50L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBQSxPQUFPQyxPQUFPLEdBQUc7SUFDYkMsUUFBUUMsbUJBQU9BLENBQUM7SUFDaEJDLFFBQVFELG1CQUFPQSxDQUFDO0lBQ2hCRSxnQkFBZ0JGLG1CQUFPQSxDQUFDO0FBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvdmFyaW50L2luZGV4LmpzP2I2YjQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZW5jb2RlOiByZXF1aXJlKCcuL2VuY29kZS5qcycpXG4gICwgZGVjb2RlOiByZXF1aXJlKCcuL2RlY29kZS5qcycpXG4gICwgZW5jb2RpbmdMZW5ndGg6IHJlcXVpcmUoJy4vbGVuZ3RoLmpzJylcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZW5jb2RlIiwicmVxdWlyZSIsImRlY29kZSIsImVuY29kaW5nTGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/varint/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/varint/length.js":
/*!***************************************!*\
  !*** ./node_modules/varint/length.js ***!
  \***************************************/
/***/ ((module) => {

eval("var N1 = Math.pow(2, 7);\nvar N2 = Math.pow(2, 14);\nvar N3 = Math.pow(2, 21);\nvar N4 = Math.pow(2, 28);\nvar N5 = Math.pow(2, 35);\nvar N6 = Math.pow(2, 42);\nvar N7 = Math.pow(2, 49);\nvar N8 = Math.pow(2, 56);\nvar N9 = Math.pow(2, 63);\nmodule.exports = function(value) {\n    return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy92YXJpbnQvbGVuZ3RoLmpzP2YwZGIiXSwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgTjEgPSBNYXRoLnBvdygyLCAgNylcbnZhciBOMiA9IE1hdGgucG93KDIsIDE0KVxudmFyIE4zID0gTWF0aC5wb3coMiwgMjEpXG52YXIgTjQgPSBNYXRoLnBvdygyLCAyOClcbnZhciBONSA9IE1hdGgucG93KDIsIDM1KVxudmFyIE42ID0gTWF0aC5wb3coMiwgNDIpXG52YXIgTjcgPSBNYXRoLnBvdygyLCA0OSlcbnZhciBOOCA9IE1hdGgucG93KDIsIDU2KVxudmFyIE45ID0gTWF0aC5wb3coMiwgNjMpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgPCBOMSA/IDFcbiAgOiB2YWx1ZSA8IE4yID8gMlxuICA6IHZhbHVlIDwgTjMgPyAzXG4gIDogdmFsdWUgPCBONCA/IDRcbiAgOiB2YWx1ZSA8IE41ID8gNVxuICA6IHZhbHVlIDwgTjYgPyA2XG4gIDogdmFsdWUgPCBONyA/IDdcbiAgOiB2YWx1ZSA8IE44ID8gOFxuICA6IHZhbHVlIDwgTjkgPyA5XG4gIDogICAgICAgICAgICAgIDEwXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJOMSIsIk1hdGgiLCJwb3ciLCJOMiIsIk4zIiwiTjQiLCJONSIsIk42IiwiTjciLCJOOCIsIk45IiwibW9kdWxlIiwiZXhwb3J0cyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiQUFDQSxJQUFJQSxLQUFLQyxLQUFLQyxHQUFHLENBQUMsR0FBSTtBQUN0QixJQUFJQyxLQUFLRixLQUFLQyxHQUFHLENBQUMsR0FBRztBQUNyQixJQUFJRSxLQUFLSCxLQUFLQyxHQUFHLENBQUMsR0FBRztBQUNyQixJQUFJRyxLQUFLSixLQUFLQyxHQUFHLENBQUMsR0FBRztBQUNyQixJQUFJSSxLQUFLTCxLQUFLQyxHQUFHLENBQUMsR0FBRztBQUNyQixJQUFJSyxLQUFLTixLQUFLQyxHQUFHLENBQUMsR0FBRztBQUNyQixJQUFJTSxLQUFLUCxLQUFLQyxHQUFHLENBQUMsR0FBRztBQUNyQixJQUFJTyxLQUFLUixLQUFLQyxHQUFHLENBQUMsR0FBRztBQUNyQixJQUFJUSxLQUFLVCxLQUFLQyxHQUFHLENBQUMsR0FBRztBQUVyQlMsT0FBT0MsT0FBTyxHQUFHLFNBQVVDLEtBQUs7SUFDOUIsT0FDRUEsUUFBUWIsS0FBSyxJQUNiYSxRQUFRVixLQUFLLElBQ2JVLFFBQVFULEtBQUssSUFDYlMsUUFBUVIsS0FBSyxJQUNiUSxRQUFRUCxLQUFLLElBQ2JPLFFBQVFOLEtBQUssSUFDYk0sUUFBUUwsS0FBSyxJQUNiSyxRQUFRSixLQUFLLElBQ2JJLFFBQVFILEtBQUssSUFDQTtBQUVqQiIsImZpbGUiOiIoc3NyKS8uL25vZGVfbW9kdWxlcy92YXJpbnQvbGVuZ3RoLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/varint/length.js\n");

/***/ })

};
;