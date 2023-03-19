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
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n//  /api/new-meetup\n\nconst handler = async (req, res)=>{\n    //request object contains data about the incoming request.\n    //response object will be needed for sending back response.\n    //req.method provides us the find which kind of request is that.\n    if (req.method === \"POST\") {\n        const data = req.body; //req.body contains the data of the incoming request.\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://eemrebasdag:475KnIoIzyaiztV6@cluster0.ipeizxu.mongodb.net/meetups?retryWrites=true&w=majority\"); // connecting Mongo DB\n        const db = client.db(); //define db\n        const meetupsCollection = db.collection(\"meetups\");\n        const result = await meetupsCollection.insertOne({\n            data\n        });\n        console.log(result);\n        client.close();\n        res.status(201).json({\n            message: \"Meetup Inserted\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQkFBbUI7QUFDbUI7QUFFdEMsTUFBTUMsVUFBVSxPQUFPQyxLQUFLQyxNQUFRO0lBQ2xDLDBEQUEwRDtJQUMxRCwyREFBMkQ7SUFFM0QsZ0VBQWdFO0lBQ2hFLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU1DLE9BQU9ILElBQUlJLElBQUksRUFBRSxxREFBcUQ7UUFFNUUsTUFBTUMsU0FBUyxNQUFNUCx3REFBbUIsQ0FDdEMsZ0hBQ0Msc0JBQXNCO1FBRXpCLE1BQU1TLEtBQUtGLE9BQU9FLEVBQUUsSUFBSSxXQUFXO1FBRW5DLE1BQU1DLG9CQUFvQkQsR0FBR0UsVUFBVSxDQUFDO1FBQ3hDLE1BQU1DLFNBQVMsTUFBTUYsa0JBQWtCRyxTQUFTLENBQUM7WUFBRVI7UUFBSztRQUV4RFMsUUFBUUMsR0FBRyxDQUFDSDtRQUVaTCxPQUFPUyxLQUFLO1FBRVpiLElBQUljLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFrQjtJQUNwRCxDQUFDO0FBQ0g7QUFFQSxpRUFBZWxCLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanM/NzM5NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAgL2FwaS9uZXctbWVldHVwXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAvL3JlcXVlc3Qgb2JqZWN0IGNvbnRhaW5zIGRhdGEgYWJvdXQgdGhlIGluY29taW5nIHJlcXVlc3QuXHJcbiAgLy9yZXNwb25zZSBvYmplY3Qgd2lsbCBiZSBuZWVkZWQgZm9yIHNlbmRpbmcgYmFjayByZXNwb25zZS5cclxuXHJcbiAgLy9yZXEubWV0aG9kIHByb3ZpZGVzIHVzIHRoZSBmaW5kIHdoaWNoIGtpbmQgb2YgcmVxdWVzdCBpcyB0aGF0LlxyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5OyAvL3JlcS5ib2R5IGNvbnRhaW5zIHRoZSBkYXRhIG9mIHRoZSBpbmNvbWluZyByZXF1ZXN0LlxyXG5cclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICAgIFwibW9uZ29kYitzcnY6Ly9lZW1yZWJhc2RhZzo0NzVLbklvSXp5YWl6dFY2QGNsdXN0ZXIwLmlwZWl6eHUubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICAgKTsgLy8gY29ubmVjdGluZyBNb25nbyBEQlxyXG5cclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7IC8vZGVmaW5lIGRiXHJcblxyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZSh7IGRhdGEgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwiTWVldHVwIEluc2VydGVkXCIgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();