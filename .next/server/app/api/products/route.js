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
exports.id = "app/api/products/route";
exports.ids = ["app/api/products/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.ts&appDir=C%3A%5CUsers%5Cefeka%5CDocuments%5CGitHub%5Cqr_menu_with_db%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cefeka%5CDocuments%5CGitHub%5Cqr_menu_with_db&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.ts&appDir=C%3A%5CUsers%5Cefeka%5CDocuments%5CGitHub%5Cqr_menu_with_db%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cefeka%5CDocuments%5CGitHub%5Cqr_menu_with_db&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_efeka_Documents_GitHub_qr_menu_with_db_src_app_api_products_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/products/route.ts */ \"(rsc)/./src/app/api/products/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/products/route\",\n        pathname: \"/api/products\",\n        filename: \"route\",\n        bundlePath: \"app/api/products/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\efeka\\\\Documents\\\\GitHub\\\\qr_menu_with_db\\\\src\\\\app\\\\api\\\\products\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_efeka_Documents_GitHub_qr_menu_with_db_src_app_api_products_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/products/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcm9kdWN0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcHJvZHVjdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwcm9kdWN0cyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNlZmVrYSU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1Q3FyX21lbnVfd2l0aF9kYiU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDZWZla2ElNUNEb2N1bWVudHMlNUNHaXRIdWIlNUNxcl9tZW51X3dpdGhfZGImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDdUM7QUFDcEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xcl9tZW51X3dpdGhfZGIvPzIwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZWZla2FcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxxcl9tZW51X3dpdGhfZGJcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccHJvZHVjdHNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Byb2R1Y3RzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJvZHVjdHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Byb2R1Y3RzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcZWZla2FcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxxcl9tZW51X3dpdGhfZGJcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccHJvZHVjdHNcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvcHJvZHVjdHMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.ts&appDir=C%3A%5CUsers%5Cefeka%5CDocuments%5CGitHub%5Cqr_menu_with_db%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cefeka%5CDocuments%5CGitHub%5Cqr_menu_with_db&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/products/route.ts":
/*!***************************************!*\
  !*** ./src/app/api/products/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./src/lib/mongodb.ts\");\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Product */ \"(rsc)/./src/models/Product.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function GET() {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const products = await _models_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({}).sort({\n            createdAt: -1\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(products);\n    } catch (error) {\n        console.error(\"Error fetching products:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Failed to fetch products\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_3__.getServerSession)();\n        if (!session) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const data = await request.json();\n        // Validate required fields\n        const requiredFields = [\n            \"name\",\n            \"description\",\n            \"price\",\n            \"image\",\n            \"category\"\n        ];\n        for (const field of requiredFields){\n            if (!data[field]) {\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                    error: `${field} is required`\n                }, {\n                    status: 400\n                });\n            }\n        }\n        // Validate price is a number and positive\n        if (isNaN(data.price) || data.price <= 0) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Price must be a positive number\"\n            }, {\n                status: 400\n            });\n        }\n        const product = await _models_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create(data);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(product);\n    } catch (error) {\n        console.error(\"Error creating product:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: error.message || \"Failed to create product\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wcm9kdWN0cy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ0w7QUFDQztBQUNNO0FBRXRDLGVBQWVJO0lBQ3BCLElBQUk7UUFDRixNQUFNSCx3REFBU0E7UUFDZixNQUFNSSxXQUFXLE1BQU1ILHVEQUFPQSxDQUFDSSxJQUFJLENBQUMsQ0FBQyxHQUFHQyxJQUFJLENBQUM7WUFBRUMsV0FBVyxDQUFDO1FBQUU7UUFDN0QsT0FBT1Isa0ZBQVlBLENBQUNTLElBQUksQ0FBQ0o7SUFDM0IsRUFBRSxPQUFPSyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1FBQzFDLE9BQU9WLGtGQUFZQSxDQUFDUyxJQUFJLENBQ3RCO1lBQUVDLE9BQU87UUFBMkIsR0FDcEM7WUFBRUUsUUFBUTtRQUFJO0lBRWxCO0FBQ0Y7QUFFTyxlQUFlQyxLQUFLQyxPQUFnQjtJQUN6QyxJQUFJO1FBQ0YsTUFBTUMsVUFBVSxNQUFNWiwyREFBZ0JBO1FBRXRDLElBQUksQ0FBQ1ksU0FBUztZQUNaLE9BQU9mLGtGQUFZQSxDQUFDUyxJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQWUsR0FDeEI7Z0JBQUVFLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE1BQU1YLHdEQUFTQTtRQUNmLE1BQU1lLE9BQU8sTUFBTUYsUUFBUUwsSUFBSTtRQUUvQiwyQkFBMkI7UUFDM0IsTUFBTVEsaUJBQWlCO1lBQUM7WUFBUTtZQUFlO1lBQVM7WUFBUztTQUFXO1FBQzVFLEtBQUssTUFBTUMsU0FBU0QsZUFBZ0I7WUFDbEMsSUFBSSxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRTtnQkFDaEIsT0FBT2xCLGtGQUFZQSxDQUFDUyxJQUFJLENBQ3RCO29CQUFFQyxPQUFPLENBQUMsRUFBRVEsTUFBTSxZQUFZLENBQUM7Z0JBQUMsR0FDaEM7b0JBQUVOLFFBQVE7Z0JBQUk7WUFFbEI7UUFDRjtRQUVBLDBDQUEwQztRQUMxQyxJQUFJTyxNQUFNSCxLQUFLSSxLQUFLLEtBQUtKLEtBQUtJLEtBQUssSUFBSSxHQUFHO1lBQ3hDLE9BQU9wQixrRkFBWUEsQ0FBQ1MsSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUFrQyxHQUMzQztnQkFBRUUsUUFBUTtZQUFJO1FBRWxCO1FBRUEsTUFBTVMsVUFBVSxNQUFNbkIsdURBQU9BLENBQUNvQixNQUFNLENBQUNOO1FBQ3JDLE9BQU9oQixrRkFBWUEsQ0FBQ1MsSUFBSSxDQUFDWTtJQUMzQixFQUFFLE9BQU9YLE9BQVk7UUFDbkJDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO1FBQ3pDLE9BQU9WLGtGQUFZQSxDQUFDUyxJQUFJLENBQ3RCO1lBQUVDLE9BQU9BLE1BQU1hLE9BQU8sSUFBSTtRQUEyQixHQUNyRDtZQUFFWCxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3FyX21lbnVfd2l0aF9kYi8uL3NyYy9hcHAvYXBpL3Byb2R1Y3RzL3JvdXRlLnRzPzE3MGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJ0AvbGliL21vbmdvZGInO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICdAL21vZGVscy9Qcm9kdWN0JztcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBjb25uZWN0REIoKTtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgUHJvZHVjdC5maW5kKHt9KS5zb3J0KHsgY3JlYXRlZEF0OiAtMSB9KTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihwcm9kdWN0cyk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzOicsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBwcm9kdWN0cycgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbigpO1xyXG4gICAgXHJcbiAgICBpZiAoIXNlc3Npb24pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdERCKCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICBcclxuICAgIC8vIFZhbGlkYXRlIHJlcXVpcmVkIGZpZWxkc1xyXG4gICAgY29uc3QgcmVxdWlyZWRGaWVsZHMgPSBbJ25hbWUnLCAnZGVzY3JpcHRpb24nLCAncHJpY2UnLCAnaW1hZ2UnLCAnY2F0ZWdvcnknXTtcclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgcmVxdWlyZWRGaWVsZHMpIHtcclxuICAgICAgaWYgKCFkYXRhW2ZpZWxkXSkge1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICAgIHsgZXJyb3I6IGAke2ZpZWxkfSBpcyByZXF1aXJlZGAgfSxcclxuICAgICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBwcmljZSBpcyBhIG51bWJlciBhbmQgcG9zaXRpdmVcclxuICAgIGlmIChpc05hTihkYXRhLnByaWNlKSB8fCBkYXRhLnByaWNlIDw9IDApIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6ICdQcmljZSBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBQcm9kdWN0LmNyZWF0ZShkYXRhKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihwcm9kdWN0KTtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGNyZWF0ZSBwcm9kdWN0JyB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59ICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjb25uZWN0REIiLCJQcm9kdWN0IiwiZ2V0U2VydmVyU2Vzc2lvbiIsIkdFVCIsInByb2R1Y3RzIiwiZmluZCIsInNvcnQiLCJjcmVhdGVkQXQiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzIiwiUE9TVCIsInJlcXVlc3QiLCJzZXNzaW9uIiwiZGF0YSIsInJlcXVpcmVkRmllbGRzIiwiZmllbGQiLCJpc05hTiIsInByaWNlIiwicHJvZHVjdCIsImNyZWF0ZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/products/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/mongodb.ts":
/*!****************************!*\
  !*** ./src/lib/mongodb.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env\");\n}\nconst MONGODB_URI = process.env.MONGODB_URI;\nconst cached = global.mongoose || {\n    conn: null,\n    promise: null\n};\nif (!global.mongoose) {\n    global.mongoose = cached;\n}\nasync function connectDB() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI).then((mongoose)=>{\n            return mongoose.connection;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vbmdvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBVWhDLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJQyxNQUFNO0FBQ2xCO0FBRUEsTUFBTUQsY0FBY0YsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBRTNDLE1BQU1FLFNBQVNDLE9BQU9OLFFBQVEsSUFBSTtJQUFFTyxNQUFNO0lBQU1DLFNBQVM7QUFBSztBQUU5RCxJQUFJLENBQUNGLE9BQU9OLFFBQVEsRUFBRTtJQUNwQk0sT0FBT04sUUFBUSxHQUFHSztBQUNwQjtBQUVBLGVBQWVJO0lBQ2IsSUFBSUosT0FBT0UsSUFBSSxFQUFFO1FBQ2YsT0FBT0YsT0FBT0UsSUFBSTtJQUNwQjtJQUVBLElBQUksQ0FBQ0YsT0FBT0csT0FBTyxFQUFFO1FBQ25CSCxPQUFPRyxPQUFPLEdBQUdSLHVEQUFnQixDQUFDRyxhQUFhUSxJQUFJLENBQUMsQ0FBQ1g7WUFDbkQsT0FBT0EsU0FBU1ksVUFBVTtRQUM1QjtJQUNGO0lBRUEsSUFBSTtRQUNGUCxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNwQyxFQUFFLE9BQU9LLEdBQUc7UUFDVlIsT0FBT0csT0FBTyxHQUFHO1FBQ2pCLE1BQU1LO0lBQ1I7SUFFQSxPQUFPUixPQUFPRSxJQUFJO0FBQ3BCO0FBRUEsaUVBQWVFLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xcl9tZW51X3dpdGhfZGIvLi9zcmMvbGliL21vbmdvZGIudHM/NTNjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXJcclxuICB2YXIgbW9uZ29vc2U6IHtcclxuICAgIGNvbm46IG1vbmdvb3NlLkNvbm5lY3Rpb24gfCBudWxsO1xyXG4gICAgcHJvbWlzZTogUHJvbWlzZTxtb25nb29zZS5Db25uZWN0aW9uPiB8IG51bGw7XHJcbiAgfTtcclxufVxyXG5cclxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xyXG4gIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYnKTtcclxufVxyXG5cclxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuXHJcbmNvbnN0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSB8fCB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcclxuXHJcbmlmICghZ2xvYmFsLm1vbmdvb3NlKSB7XHJcbiAgZ2xvYmFsLm1vbmdvb3NlID0gY2FjaGVkO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0REIoKTogUHJvbWlzZTxtb25nb29zZS5Db25uZWN0aW9uPiB7XHJcbiAgaWYgKGNhY2hlZC5jb25uKSB7XHJcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbiAgfVxyXG5cclxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XHJcbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkkpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XHJcbiAgICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0aW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjYWNoZWQucHJvbWlzZSA9IG51bGw7XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7ICJdLCJuYW1lcyI6WyJtb25nb29zZSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJjb25uZWN0REIiLCJjb25uZWN0IiwidGhlbiIsImNvbm5lY3Rpb24iLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/Product.ts":
/*!*******************************!*\
  !*** ./src/models/Product.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst productSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a name for this product.\"\n        ],\n        maxlength: [\n            60,\n            \"Name cannot be more than 60 characters\"\n        ]\n    },\n    description: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a description for this product.\"\n        ],\n        maxlength: [\n            200,\n            \"Description cannot be more than 200 characters\"\n        ]\n    },\n    price: {\n        type: Number,\n        required: [\n            true,\n            \"Please provide a price for this product.\"\n        ]\n    },\n    image: {\n        type: String,\n        required: [\n            true,\n            \"Please provide an image URL for this product.\"\n        ]\n    },\n    category: {\n        type: String,\n        required: [\n            true,\n            \"Please specify the category of this product.\"\n        ]\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\n// Check if the model is already defined to prevent recompilation error\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Product || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", productSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1Byb2R1Y3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGdCQUFnQixJQUFJRCx3REFBZSxDQUFDO0lBQ3hDRyxNQUFNO1FBQ0pDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQTBDO1FBQzNEQyxXQUFXO1lBQUM7WUFBSTtTQUF5QztJQUMzRDtJQUNBQyxhQUFhO1FBQ1hKLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQWlEO1FBQ2xFQyxXQUFXO1lBQUM7WUFBSztTQUFpRDtJQUNwRTtJQUNBRSxPQUFPO1FBQ0xMLE1BQU1NO1FBQ05KLFVBQVU7WUFBQztZQUFNO1NBQTJDO0lBQzlEO0lBQ0FLLE9BQU87UUFDTFAsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBZ0Q7SUFDbkU7SUFDQU0sVUFBVTtRQUNSUixNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUErQztJQUNsRTtJQUNBTyxXQUFXO1FBQ1RULE1BQU1VO1FBQ05DLFNBQVNELEtBQUtFLEdBQUc7SUFDbkI7QUFDRjtBQUVBLHVFQUF1RTtBQUN2RSxpRUFBZWhCLHdEQUFlLENBQUNrQixPQUFPLElBQUlsQixxREFBYyxDQUFDLFdBQVdDLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xcl9tZW51X3dpdGhfZGIvLi9zcmMvbW9kZWxzL1Byb2R1Y3QudHM/NjkzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgcHJvZHVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIG5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1BsZWFzZSBwcm92aWRlIGEgbmFtZSBmb3IgdGhpcyBwcm9kdWN0LiddLFxyXG4gICAgbWF4bGVuZ3RoOiBbNjAsICdOYW1lIGNhbm5vdCBiZSBtb3JlIHRoYW4gNjAgY2hhcmFjdGVycyddLFxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1BsZWFzZSBwcm92aWRlIGEgZGVzY3JpcHRpb24gZm9yIHRoaXMgcHJvZHVjdC4nXSxcclxuICAgIG1heGxlbmd0aDogWzIwMCwgJ0Rlc2NyaXB0aW9uIGNhbm5vdCBiZSBtb3JlIHRoYW4gMjAwIGNoYXJhY3RlcnMnXSxcclxuICB9LFxyXG4gIHByaWNlOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICByZXF1aXJlZDogW3RydWUsICdQbGVhc2UgcHJvdmlkZSBhIHByaWNlIGZvciB0aGlzIHByb2R1Y3QuJ10sXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGxlYXNlIHByb3ZpZGUgYW4gaW1hZ2UgVVJMIGZvciB0aGlzIHByb2R1Y3QuJ10sXHJcbiAgfSxcclxuICBjYXRlZ29yeToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGxlYXNlIHNwZWNpZnkgdGhlIGNhdGVnb3J5IG9mIHRoaXMgcHJvZHVjdC4nXSxcclxuICB9LFxyXG4gIGNyZWF0ZWRBdDoge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICAgIGRlZmF1bHQ6IERhdGUubm93LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy8gQ2hlY2sgaWYgdGhlIG1vZGVsIGlzIGFscmVhZHkgZGVmaW5lZCB0byBwcmV2ZW50IHJlY29tcGlsYXRpb24gZXJyb3JcclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlByb2R1Y3QgfHwgbW9uZ29vc2UubW9kZWwoJ1Byb2R1Y3QnLCBwcm9kdWN0U2NoZW1hKTsgIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicHJvZHVjdFNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJtYXhsZW5ndGgiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiTnVtYmVyIiwiaW1hZ2UiLCJjYXRlZ29yeSIsImNyZWF0ZWRBdCIsIkRhdGUiLCJkZWZhdWx0Iiwibm93IiwibW9kZWxzIiwiUHJvZHVjdCIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Product.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.ts&appDir=C%3A%5CUsers%5Cefeka%5CDocuments%5CGitHub%5Cqr_menu_with_db%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cefeka%5CDocuments%5CGitHub%5Cqr_menu_with_db&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();