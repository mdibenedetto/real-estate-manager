(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/bundles/common.umd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");





var routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
    },
    {
        path: '**',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ],
            declarations: [_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    v7\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/bundles/common.umd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _property_property_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./property/property.module */ "./src/app/property/property.module.ts");
/* harmony import */ var _common_interceptors_base_url_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/interceptors/base-url.interceptor */ "./src/app/common/interceptors/base-url.interceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/bundles/common-http.umd.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _common_mock_services_mock_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/mock-services/mock-data-service */ "./src/app/common/mock-services/mock-data-service.ts");













var provideLocationStrategy = [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"] }];
if (!_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]['useHash']) {
    console.log('Use hash strategy!');
    provideLocationStrategy = [];
}
console.log("it is running in environment \"" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].envName + "\"");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _property_property_module__WEBPACK_IMPORTED_MODULE_8__["PropertyModule"],
                _app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production ? [] :
                    angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_11__["HttpClientInMemoryWebApiModule"].forRoot(_common_mock_services_mock_data_service__WEBPACK_IMPORTED_MODULE_12__["MockDataService"]),
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _common_interceptors_base_url_interceptor__WEBPACK_IMPORTED_MODULE_9__["BaseUrlInterceptor"], multi: true }
            ].concat(provideLocationStrategy),
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/interceptors/base-url.interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/interceptors/base-url.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: BaseUrlInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseUrlInterceptor", function() { return BaseUrlInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment.prod */ "./src/environments/environment.prod.ts");



var BaseUrlInterceptor = /** @class */ (function () {
    function BaseUrlInterceptor() {
    }
    BaseUrlInterceptor.prototype.intercept = function (req, next) {
        var url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].production ?
            '{{YOUR_PRODUCTION_URL}}' : window.location.origin;
        req = req.clone({
            url: url + req.url
        });
        return next.handle(req);
    };
    BaseUrlInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BaseUrlInterceptor);
    return BaseUrlInterceptor;
}());



/***/ }),

/***/ "./src/app/common/mock-services/mock-data-service.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/mock-services/mock-data-service.ts ***!
  \***********************************************************/
/*! exports provided: MockDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockDataService", function() { return MockDataService; });
/* harmony import */ var _assets_mock_properties_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/mock/properties.json */ "./src/assets/mock/properties.json");
var _assets_mock_properties_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/mock/properties.json */ "./src/assets/mock/properties.json", 1);

var MockDataService = /** @class */ (function () {
    function MockDataService() {
    }
    MockDataService.prototype.createDb = function () {
        return { properties: _assets_mock_properties_json__WEBPACK_IMPORTED_MODULE_0___namespace };
    };
    return MockDataService;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    The page you are looking for does not exist\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/property/property-detail/property-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/property/property-detail/property-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes slidy {\r\n    0% {\r\n        left: 0%;\r\n    }\r\n    20% {\r\n        left: 0%;\r\n    }\r\n    25% {\r\n        left: -100%;\r\n    }\r\n    45% {\r\n        left: -100%;\r\n    }\r\n    50% {\r\n        left: -200%;\r\n    }\r\n    70% {\r\n        left: -200%;\r\n    }\r\n    75% {\r\n        left: -300%;\r\n    }\r\n    95% {\r\n        left: -300%;\r\n    }\r\n    100% {\r\n        left: -400%;\r\n    }\r\n}\r\n\r\n@keyframes slidy {\r\n    0% {\r\n        left: 0%;\r\n    }\r\n    20% {\r\n        left: 0%;\r\n    }\r\n    25% {\r\n        left: -100%;\r\n    }\r\n    45% {\r\n        left: -100%;\r\n    }\r\n    50% {\r\n        left: -200%;\r\n    }\r\n    70% {\r\n        left: -200%;\r\n    }\r\n    75% {\r\n        left: -300%;\r\n    }\r\n    95% {\r\n        left: -300%;\r\n    }\r\n    100% {\r\n        left: -400%;\r\n    }\r\n}\r\n\r\ndiv#slider {\r\n    overflow: hidden;\r\n}\r\n\r\ndiv#slider figure img {\r\n    width: 20%;\r\n    float: left;\r\n    height: 343px;\r\n}\r\n\r\ndiv#slider figure {\r\n    position: relative;\r\n    width: 500%;\r\n    margin: 0;\r\n    left: 0;\r\n    text-align: left;\r\n    font-size: 0;\r\n    -webkit-animation: 30s slidy infinite;\r\n            animation: 30s slidy infinite;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydHkvcHJvcGVydHktZGV0YWlsL3Byb3BlcnR5LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7SUFDQTtRQUNJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBNUJBO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7SUFDQTtRQUNJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvcHJvcGVydHkvcHJvcGVydHktZGV0YWlsL3Byb3BlcnR5LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBzbGlkeSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgbGVmdDogMCU7XHJcbiAgICB9XHJcbiAgICAyMCUge1xyXG4gICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgfVxyXG4gICAgMjUlIHtcclxuICAgICAgICBsZWZ0OiAtMTAwJTtcclxuICAgIH1cclxuICAgIDQ1JSB7XHJcbiAgICAgICAgbGVmdDogLTEwMCU7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIGxlZnQ6IC0yMDAlO1xyXG4gICAgfVxyXG4gICAgNzAlIHtcclxuICAgICAgICBsZWZ0OiAtMjAwJTtcclxuICAgIH1cclxuICAgIDc1JSB7XHJcbiAgICAgICAgbGVmdDogLTMwMCU7XHJcbiAgICB9XHJcbiAgICA5NSUge1xyXG4gICAgICAgIGxlZnQ6IC0zMDAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgbGVmdDogLTQwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRpdiNzbGlkZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuZGl2I3NsaWRlciBmaWd1cmUgaW1nIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogMzQzcHg7XHJcbn1cclxuXHJcbmRpdiNzbGlkZXIgZmlndXJlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA1MDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDA7XHJcbiAgICBhbmltYXRpb246IDMwcyBzbGlkeSBpbmZpbml0ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/property/property-detail/property-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/property/property-detail/property-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-header mb-2\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"sm\">\n                <a class=\"btn btn-secondary\" queryParamsHandling=\"preserve\" [routerLink]=\"['/search']\">\n                <i class=\"fa fa-chevron-left\"></i> Back\n              </a>\n            </div>\n            <div class=\"sm ml-2\">\n                <h4 class=\"card-title\">Property details</h4>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"card-block col-md-6 pl-0\">\n            <div class=\"card mb-2\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Address</h5>\n                    <p class=\"card-text\">{{property.address}}</p>\n                    <p class=\"card-text\">{{property.zipCode}}</p>\n                </div>\n            </div>\n\n            <div class=\"card container mb-2\">\n                <div class=\"row\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Beds</h5>\n                        <p class=\"card-text\">{{property.beds}}</p>\n                    </div>\n\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Price</h5>\n                        <p class=\"card-text\">£{{property.price}}</p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Estate Agent</h5>\n                    <p class=\"card-text\">{{property.estateAgent}}</p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card-block col-md-6 border rounded\">\n            <div id=\"slider\">\n                <figure>\n                    <img class=\"card-img-center\" *ngFor=\"let img of property.images\" [src]=\"img\" alt=\"Card image cap\">\n                </figure>\n                <div class=\"card-body\">\n                    <h5 class=\"card-text font-weight-bold text-danger\"\n                     *ngIf=\"property.images.length==0\">This property does not have images available</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"card mt-2\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">Description</h5>\n        <p class=\"card-text\">{{property.description}}</p>\n    </div>\n</div>\n\n<div class=\"card mt-2\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">Description</h5>\n        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"15\">\n            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n        </agm-map>\n    </div>\n</div>\n\n<div class=\"card-footer\">\n    <a class=\"btn btn-secondary\" queryParamsHandling=\"preserve\" [routerLink]=\"['/search']\">\n            <i class=\"fa fa-chevron-left\"></i> Back\n          </a>\n</div>\n<!-- class=\"card-link\" -->\n"

/***/ }),

/***/ "./src/app/property/property-detail/property-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/property/property-detail/property-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: PropertyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyDetailComponent", function() { return PropertyDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PropertyDetailComponent = /** @class */ (function () {
    function PropertyDetailComponent(root) {
        this.root = root;
        this.latitude = 51.5074;
        this.longitude = 0.1278;
    }
    PropertyDetailComponent.prototype.ngOnInit = function () {
        this.property = this.root.snapshot.data['property'];
        if (this.property.location.length > 1) {
            this.latitude = this.property.location[1];
            this.longitude = this.property.location[0];
        }
    };
    PropertyDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property-detail',
            template: __webpack_require__(/*! ./property-detail.component.html */ "./src/app/property/property-detail/property-detail.component.html"),
            styles: [__webpack_require__(/*! ./property-detail.component.css */ "./src/app/property/property-detail/property-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PropertyDetailComponent);
    return PropertyDetailComponent;
}());



/***/ }),

/***/ "./src/app/property/property-filter/property-filter.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/property/property-filter/property-filter.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n    <div class=\"form-group\">\n        <label>Address</label>\n        <input class=\"form-control\" type=\"text\" name=\"address\" [(ngModel)]=\"filter.address\"\n        [ngClass]=\"{'border-info':filter.address}\">\n    </div>\n    <div>\n        <div class=\"row\">\n            <div class=\"form-group col-4\">\n                <label>Zipcode</label>\n                <input class=\"form-control\" type=\"text\" name=\"zipCode\" [(ngModel)]=\"filter.zipCode\"\n                [ngClass]=\"{'border-info':filter.zipCode}\">\n            </div>\n            <div class=\"form-group col-4\">\n                <label>Beds (>={{filter.beds}}) </label>\n                <input class=\"form-control text-right\" type=\"number\" name=\"beds\" [(ngModel)]=\"filter.beds\"\n                [ngClass]=\"{'border-info':filter.beds>0}\">\n            </div>\n            <div class=\"form-group col-4\">\n                <label>Price (>={{filter.price}})</label>\n                <input class=\"form-control text-right\" type=\"number\" name=\"price\" [(ngModel)]=\"filter.price\"\n                [ngClass]=\"{'border-info':filter.price>0}\">\n            </div>\n        </div>\n    </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/property/property-filter/property-filter.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/property/property-filter/property-filter.component.ts ***!
  \***********************************************************************/
/*! exports provided: PropertyFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyFilterComponent", function() { return PropertyFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_property_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/property-filter.service */ "./src/app/property/service/property-filter.service.ts");



var PropertyFilterComponent = /** @class */ (function () {
    function PropertyFilterComponent(propertyFilterService) {
        this.propertyFilterService = propertyFilterService;
        this.filter = {};
    }
    PropertyFilterComponent.prototype.ngOnInit = function () {
        this.filter = this.propertyFilterService.filter;
    };
    PropertyFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'property-filter',
            template: __webpack_require__(/*! ./property-filter.component.html */ "./src/app/property/property-filter/property-filter.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_property_filter_service__WEBPACK_IMPORTED_MODULE_2__["PropertyFilterService"]])
    ], PropertyFilterComponent);
    return PropertyFilterComponent;
}());



/***/ }),

/***/ "./src/app/property/property-search/property-search.component.css":
/*!************************************************************************!*\
  !*** ./src/app/property/property-search/property-search.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* body {\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n  font-weight: 400;\r\n  color: #3b3b3b;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-smoothing: antialiased;\r\n  background: #2b2b2b;\r\n} */\r\n@media screen and (max-width: 580px) {\r\n  body {\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n  }\r\n}\r\n.wrapper {\r\n  margin: 0 auto;\r\n  padding: 40px;\r\n  max-width: 800px;\r\n}\r\n.table {\r\n  margin: 0 0 40px 0;\r\n  width: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n  border-top: 1px solid #e9ecef;\r\n}\r\n.row:nth-of-type(odd) {\r\n  background: #ffffff;\r\n}\r\n.row.header {\r\n  /* font-weight: 900;\r\n  color: #ffffff;\r\n  background: #ea6153; */\r\n  font-weight: bold;\r\n  font-size: 1.2rem;\r\n}\r\n.row.red {\r\n  background: #ea6153;\r\n}\r\n.row.green {\r\n  background: #27ae60;\r\n}\r\n.row.blue {\r\n  background: #2980b9;\r\n}\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n  .row.header {\r\n    padding: 0;\r\n    height: 6px;\r\n  }\r\n  .row.header .cell {\r\n    display: none;\r\n  }\r\n  .row .cell {\r\n    margin-bottom: 10px;\r\n    border-top: 1px solid #e9ecef;\r\n  }\r\n  .row .cell:before {\r\n    margin-bottom: 3px;\r\n    content: attr(data-title);\r\n    min-width: 98px;\r\n    font-size: 10px;\r\n    line-height: 10px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    color: #969696;\r\n    display: block;\r\n  }\r\n  .row .cell.text-right{\r\n    text-align: initial!important;\r\n  }\r\n}\r\n.caption {\r\n  display: table-caption;\r\n  padding: 6px 12px;\r\n  background: #27ae60;\r\n  color: #ffffff;\r\n  font-weight: 900;\r\n}\r\n.cell {\r\n  padding: 6px 12px;\r\n  display: table-cell;\r\n  border-top: 1px solid #e9ecef;\r\n}\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydHkvcHJvcGVydHktc2VhcmNoL3Byb3BlcnR5LXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7R0FTRztBQUNIO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHdDQUF3QztFQUN4QyxjQUFjO0FBQ2hCO0FBQ0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0U7O3dCQUVzQjtFQUN0QixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsY0FBYztFQUNoQjtFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0FBQ0Y7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9wZXJ0eS9wcm9wZXJ0eS1zZWFyY2gvcHJvcGVydHktc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBib2R5IHtcclxuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjM2IzYjNiO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIGZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICBiYWNrZ3JvdW5kOiAjMmIyYjJiO1xyXG59ICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgYm9keSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICB9XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgbWFyZ2luOiAwIDAgNDBweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAudGFibGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZWNlZjtcclxufVxyXG4ucm93Om50aC1vZi10eXBlKG9kZCkge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuLnJvdy5oZWFkZXIge1xyXG4gIC8qIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZDogI2VhNjE1MzsgKi9cclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG4ucm93LnJlZCB7XHJcbiAgYmFja2dyb3VuZDogI2VhNjE1MztcclxufVxyXG4ucm93LmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xyXG59XHJcbi5yb3cuYmx1ZSB7XHJcbiAgYmFja2dyb3VuZDogIzI5ODBiOTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC5yb3cge1xyXG4gICAgcGFkZGluZzogMTRweCAwIDdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAucm93LmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgfVxyXG4gIC5yb3cuaGVhZGVyIC5jZWxsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5yb3cgLmNlbGwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIH1cclxuICAucm93IC5jZWxsOmJlZm9yZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xyXG4gICAgbWluLXdpZHRoOiA5OHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogIzk2OTY5NjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAucm93IC5jZWxsLnRleHQtcmlnaHR7XHJcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXB0aW9uIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jYXB0aW9uO1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICMyN2FlNjA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLmNlbGwge1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWY7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAuY2VsbCB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/property/property-search/property-search.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/property/property-search/property-search.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-default\">\n    <div class=\"card-header\">\n        <div class=\"container\">\n            <div class=\"form-inline\">\n                <div class=\"sm mr-2\">\n                    <button (click)=\"search()\" class=\"btn btn-success\">Search</button>\n                </div>\n                <div class=\"sm mr-2\">\n                    <button (click)=\"showFilter=!showFilter\" class=\"btn\" [ngClass]=\"{'btn-danger':hasFilter(),'btn-success':!hasFilter()}\">\n                        Show filter\n                    </button>\n                </div>\n                <div class=\"sm\">\n                    {{totalsMessage}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-block  mt-2\">\n        <div *ngIf=\"showFilter\" class=\"card-block container\">\n            <property-filter></property-filter>\n        </div>\n        <div class=\"container\">\n            <div class=\"table\">\n                <div class=\"row header\">\n                    <div class=\"cell\">\n                        Address\n                    </div>\n                    <div class=\"cell\">\n                        Zipcode\n                    </div>\n                    <div class=\"cell text-right\">\n                        Beds\n                    </div>\n                    <div class=\"cell text-right\">\n                        Price &pound;\n                    </div>\n                    <div class=\"cell\">\n                        Type\n                    </div>\n                    <div class=\"cell\">\n                        Availability\n                    </div>\n                </div>\n\n                <div class=\"row\" *ngFor=\"let prop of properties\">\n                    <div class=\"cell\" data-title=\"Address\">\n                        <a [routerLink]=\"['/', prop.id, 'detail']\">{{prop.address}}</a>\n                    </div>\n                    <div class=\"cell\" data-title=\"Zipcode\">\n                        {{prop.zipCode}}\n                    </div>\n                    <div class=\"cell text-right\" data-title=\"Beds\">\n                        {{prop.beds}}\n                    </div>\n                    <div class=\"cell text-right\" data-title=\"Price\">\n                        {{prop.price}} &pound;\n                    </div>\n                    <div class=\"cell\" data-title=\"Type\">\n                        {{prop.propertyInfo.metaType}}\n                    </div>\n                    <div class=\"cell\" data-title=\"Availability\">\n                        {{prop.propertyInfo.availability}}\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"card-footer\">{{totalsMessage}}</div>\n</div>"

/***/ }),

/***/ "./src/app/property/property-search/property-search.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/property/property-search/property-search.component.ts ***!
  \***********************************************************************/
/*! exports provided: PropertySearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertySearchComponent", function() { return PropertySearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_property_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/property-data.service */ "./src/app/property/service/property-data.service.ts");
/* harmony import */ var _service_property_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/property-filter.service */ "./src/app/property/service/property-filter.service.ts");




var PropertySearchComponent = /** @class */ (function () {
    function PropertySearchComponent(propertyDataService, propertyFilterService) {
        this.propertyDataService = propertyDataService;
        this.propertyFilterService = propertyFilterService;
        this.showFilter = false;
        this.totalsMessage = '';
    }
    PropertySearchComponent.prototype.ngOnInit = function () {
        this.search(20);
    };
    PropertySearchComponent.prototype.hasFilter = function () {
        return this.propertyFilterService.hasFilter();
    };
    PropertySearchComponent.prototype.search = function (topRow) {
        var _this = this;
        if (topRow === void 0) { topRow = 0; }
        var filter = this.propertyFilterService.filter;
        this.propertyDataService
            .getDatas(topRow, filter)
            .subscribe(function (res) {
            _this.properties = res.map(function (x) { return x.property; });
            _this.totalsMessage = topRow === 0 ?
                _this.properties.length + " total properties found!" :
                _this.properties.length + " new properties in London";
        }, function (error) {
            console.error("Error Server: " + error.message);
        });
    };
    PropertySearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'property-search',
            template: __webpack_require__(/*! ./property-search.component.html */ "./src/app/property/property-search/property-search.component.html"),
            styles: [__webpack_require__(/*! ./property-search.component.css */ "./src/app/property/property-search/property-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_property_data_service__WEBPACK_IMPORTED_MODULE_2__["PropertyDataService"],
            _service_property_filter_service__WEBPACK_IMPORTED_MODULE_3__["PropertyFilterService"]])
    ], PropertySearchComponent);
    return PropertySearchComponent;
}());



/***/ }),

/***/ "./src/app/property/property.module.ts":
/*!*********************************************!*\
  !*** ./src/app/property/property.module.ts ***!
  \*********************************************/
/*! exports provided: PropertyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyModule", function() { return PropertyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/bundles/common.umd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _property_search_property_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./property-search/property-search.component */ "./src/app/property/property-search/property-search.component.ts");
/* harmony import */ var _property_filter_property_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./property-filter/property-filter.component */ "./src/app/property/property-filter/property-filter.component.ts");
/* harmony import */ var _service_property_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/property-data.service */ "./src/app/property/service/property-data.service.ts");
/* harmony import */ var _property_detail_property_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./property-detail/property-detail.component */ "./src/app/property/property-detail/property-detail.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/bundles/common-http.umd.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_property_filter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/property-filter.service */ "./src/app/property/service/property-filter.service.ts");
/* harmony import */ var _service_property_resolver_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/property-resolver.service */ "./src/app/property/service/property-resolver.service.ts");













var routes = [{
        path: 'search',
        component: _property_search_property_search_component__WEBPACK_IMPORTED_MODULE_5__["PropertySearchComponent"]
    },
    {
        path: ':id/detail',
        resolve: { property: _service_property_resolver_service__WEBPACK_IMPORTED_MODULE_12__["PropertyResolverService"] },
        component: _property_detail_property_detail_component__WEBPACK_IMPORTED_MODULE_8__["PropertyDetailComponent"]
    }
];
var PropertyModule = /** @class */ (function () {
    function PropertyModule() {
    }
    PropertyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAuptizt9390AVWECoyE1W0FgqC39AosXM'
                })
            ],
            declarations: [
                _property_filter_property_filter_component__WEBPACK_IMPORTED_MODULE_6__["PropertyFilterComponent"],
                _property_search_property_search_component__WEBPACK_IMPORTED_MODULE_5__["PropertySearchComponent"],
                _property_detail_property_detail_component__WEBPACK_IMPORTED_MODULE_8__["PropertyDetailComponent"]
            ],
            providers: [
                _service_property_data_service__WEBPACK_IMPORTED_MODULE_7__["PropertyDataService"],
                _service_property_filter_service__WEBPACK_IMPORTED_MODULE_11__["PropertyFilterService"],
                _service_property_resolver_service__WEBPACK_IMPORTED_MODULE_12__["PropertyResolverService"]
            ],
        })
    ], PropertyModule);
    return PropertyModule;
}());



/***/ }),

/***/ "./src/app/property/service/property-data.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/property/service/property-data.service.ts ***!
  \***********************************************************/
/*! exports provided: PropertyDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyDataService", function() { return PropertyDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/bundles/common-http.umd.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var PropertyDataService = /** @class */ (function () {
    function PropertyDataService(http) {
        this.http = http;
    }
    PropertyDataService.prototype.getDatas = function (topRow, filter) {
        if (topRow === void 0) { topRow = 0; }
        if (filter === void 0) { filter = null; }
        var _getDatas$ = this.http.get('/properties');
        var getDatas$ = _getDatas$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (array) { return array.default; }));
        var propsFiltered = getDatas$;
        if (topRow > 0) {
            propsFiltered = getDatas$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (array) {
                return array.slice(0, topRow);
            }));
        }
        if (filter && Object.keys(filter).length > 0) {
            propsFiltered = getDatas$;
            var filterString = function (keyProperty) {
                if (filter[keyProperty]) {
                    propsFiltered = propsFiltered.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (props) {
                        return props.filter(function (x) { return x.property[keyProperty]
                            .search(new RegExp(filter[keyProperty], 'i')) > -1; });
                    }));
                }
            };
            var filterNumeric = function (keyProperty) {
                if (filter[keyProperty]) {
                    propsFiltered = propsFiltered.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (props) {
                        return props
                            .filter(function (x) { return x.property[keyProperty] >= filter[keyProperty]; });
                    }));
                }
            };
            filterString('address');
            filterString('zipCode');
            filterNumeric('beds');
            filterNumeric('price');
        }
        return propsFiltered;
    };
    PropertyDataService.prototype.findProperty = function (id) {
        return this.getDatas().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (x) { return x.filter(function (root) { return root.property.id === id; }); }));
    };
    PropertyDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PropertyDataService);
    return PropertyDataService;
}());



/***/ }),

/***/ "./src/app/property/service/property-filter.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/property/service/property-filter.service.ts ***!
  \*************************************************************/
/*! exports provided: PropertyFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyFilterService", function() { return PropertyFilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PropertyFilterService = /** @class */ (function () {
    function PropertyFilterService() {
        this.filter = {};
    }
    PropertyFilterService.prototype.hasFilter = function () {
        var _this = this;
        var res = false;
        Object.keys(this.filter).forEach(function (key) {
            if (_this.filter[key]) {
                res = true;
                return true;
            }
        });
        return res;
    };
    PropertyFilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PropertyFilterService);
    return PropertyFilterService;
}());



/***/ }),

/***/ "./src/app/property/service/property-resolver.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/property/service/property-resolver.service.ts ***!
  \***************************************************************/
/*! exports provided: PropertyResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyResolverService", function() { return PropertyResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _property_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property-data.service */ "./src/app/property/service/property-data.service.ts");




var PropertyResolverService = /** @class */ (function () {
    function PropertyResolverService(propertyDataService) {
        this.propertyDataService = propertyDataService;
    }
    PropertyResolverService.prototype.resolve = function (route, state) {
        var id = route.params['id'];
        return this.propertyDataService.findProperty(+id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return x.property; }));
    };
    PropertyResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_property_data_service__WEBPACK_IMPORTED_MODULE_3__["PropertyDataService"]])
    ], PropertyResolverService);
    return PropertyResolverService;
}());



/***/ }),

/***/ "./src/assets/mock/properties.json":
/*!*****************************************!*\
  !*** ./src/assets/mock/properties.json ***!
  \*****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, default */
/***/ (function(module) {

module.exports = [{"receivedDate":"2017-10-02T14:52:31.231Z","processedDate":"2017-11-12","property":{"id":1,"address":"Grange Street, Bridport Place, London N1","price":239950,"location":[-0.08598981286789789,51.53496103373708],"beds":2,"zipCode":"N1 5JN","images":[],"description":"2 bedroom ground floor flat for sale in Grange Street,\r\nBridport Place,\r\nLondon N1 £239,950. Marketed by Amhurst Estates, Hackney","propertyInfo":{"metaType":"apartment","type":"flat","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":1},{"receivedDate":"2017-09-30T06:38:59.579Z","processedDate":"2017-11-12","property":{"id":2,"address":"Curzon Mews,Wilmslow,Cheshire","price":289950,"location":[-2.2389509596968002,53.320919284934995],"beds":3,"zipCode":"SK9 5JN","images":["http://via.placeholder.com/350x150"],"description":"3 bedroom terraced house for sale in Curzon Mews,Wilmslow,Cheshire £289,950. Marketed by Jordan Fishwick, Wilmslow","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":2},{"receivedDate":"2017-09-30T07:08:43.665Z","processedDate":"2017-11-12","property":{"id":3,"address":"Cubert","price":144950,"location":[-5.116413118643851,50.37758371867477],"beds":3,"zipCode":"TR8 5JN","images":["http://via.placeholder.com/350x150"],"description":"3 bedroom house for sale in Cubert £144,950. Marketed by Stratton Creber, Newquay","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":3},{"receivedDate":"2017-09-30T08:03:29.298Z","processedDate":"2017-11-12","property":{"id":4,"address":"Cedar Close, North Elmham, DEREHAM","price":169000,"location":[0.9427477810404992,52.74943990466523],"beds":3,"zipCode":"NR20 5JN","images":["http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150"],"description":"3 bedroom house for sale in Cedar Close, North Elmham, DEREHAM £169,000. Marketed by William H. Brown, Dereham","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":4},{"receivedDate":"2017-09-30T04:13:41.420Z","processedDate":"2017-11-12","property":{"id":5,"address":"MOORLAND ROAD,MAGHULL","price":149995,"location":[-2.943843155920832,53.50070832117843],"beds":3,"zipCode":"L31 5JN","images":["http://via.placeholder.com/350x150"],"description":"3 bedroom semi-detached house for sale in MOORLAND ROAD,MAGHULL £149,995. Marketed by Halifax Estate Agents, Maghull","propertyInfo":{"metaType":"house","type":"house","subType":"detached","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":5},{"receivedDate":"2017-09-30T02:41:49.906Z","processedDate":"2017-11-12","property":{"id":6,"address":"Coleford Road Southmead","price":94950,"location":[-2.595097796879989,51.50194793270608],"beds":3,"zipCode":"BS10 5JN","images":["http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150"],"description":"3 bedroom semi-detached house for sale in Coleford Road Southmead £94,950. Marketed by Connells, Filton","propertyInfo":{"metaType":"house","type":"house","subType":"detached","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":6},{"receivedDate":"2017-10-01T01:39:05.154Z","processedDate":"2017-11-12","property":{"id":7,"address":"NORTHFLEET","price":122995,"location":[0.37555267206213583,51.423637816666485],"beds":3,"zipCode":"DA12 5JN","images":["http://via.placeholder.com/350x150"],"description":"3 bedroom terraced house for sale in NORTHFLEET £122,995. Marketed by Robinson Michael & Jackson, Gravesend and Northfleet - Sales","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":7},{"receivedDate":"2017-10-01T00:48:12.452Z","processedDate":"2017-11-12","property":{"id":8,"address":"Egmont Road, Sutton,","price":119950,"location":[-0.18939753571426277,51.35243544990794],"beds":1,"zipCode":"SM2 5JN","images":["http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150"],"description":"1 bedroom flat for sale in Egmont Road,\r\nSutton,\r\n £119,950. Marketed by Mann, Sutton","propertyInfo":{"metaType":"apartment","type":"flat","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":8},{"receivedDate":"2017-10-01T04:14:56.647Z","processedDate":"2017-11-12","property":{"id":9,"address":"Abington ,Northampton ,Northamptonshire","price":134995,"location":[-0.8712503678411341,52.24124883138607],"beds":3,"zipCode":"NN1 5JN","images":["http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150"],"description":"3 bedroom terraced house for sale in Abington  ,Northampton ,Northamptonshire £134,995. Marketed by Merry's Estate Agents, Northampton","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":9},{"receivedDate":"2017-10-01T04:16:46.390Z","processedDate":"2017-11-12","property":{"id":10,"address":"Grimsargh","price":189950,"location":[-2.6299380858180252,53.80325491971009],"beds":4,"zipCode":"PR2 5JN","images":["http://via.placeholder.com/350x150"],"description":"4 bedroom house for sale in Grimsargh £189,950. Marketed by Entwistle Green, Longridge","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":10},{"receivedDate":"2017-09-30T23:49:23.498Z","processedDate":"2017-11-12","property":{"id":11,"address":"Cobbs Lane, Hough,","price":249950,"location":[-2.426959006363235,53.05566998657859],"beds":5,"zipCode":"CW2 5JN","images":["http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150"],"description":"5 bedroom detached house for sale in Cobbs Lane,\r\nHough,\r\n £249,950. Marketed by Entwistle Green, Crewe","propertyInfo":{"metaType":"house","type":"house","subType":"detached","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":11},{"receivedDate":"2017-09-30T23:56:15.949Z","processedDate":"2017-11-12","property":{"id":12,"address":"Bessemer Court, Blakelands, MILTON KEYNES","price":121000,"location":[-0.7405354639463073,52.07296389663099],"beds":1,"zipCode":"MK14 5JN","images":["http://via.placeholder.com/350x150"],"description":"1 bedroom bungalow for sale in Bessemer Court, Blakelands, MILTON KEYNES £121,000. Marketed by Brown & Merry, Newport Pagnell","propertyInfo":{"metaType":"house","type":"bungalow","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":12},{"receivedDate":"2017-10-01T00:08:00.598Z","processedDate":"2017-11-12","property":{"id":13,"address":"8 THE DALES, COTTINGHAM","price":185000,"location":[-0.43838813997224413,53.77946164821092],"beds":3,"zipCode":"HU16 5JN","images":["http://via.placeholder.com/350x150"],"description":"3 bedroom detached bungalow for sale in 8 THE DALES, COTTINGHAM £185,000. Marketed by Halifax Estate Agents, Cottingham","propertyInfo":{"metaType":"house","type":"bungalow","subType":"detached","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":13},{"receivedDate":"2017-09-30T15:50:29.309Z","processedDate":"2017-11-12","property":{"id":14,"address":"Wraysbury ,Middlesex","price":339950,"location":[-0.5729801431929391,51.4541331492174],"beds":3,"zipCode":"TW19 5JN","images":[],"description":"3 bedroom detached bungalow for sale in Wraysbury  ,Middlesex £339,950. Marketed by Romans, Staines - Lettings","propertyInfo":{"metaType":"house","type":"bungalow","subType":"detached","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":14},{"receivedDate":"2017-09-30T15:32:46.348Z","processedDate":"2017-11-12","property":{"id":15,"address":"Wraysbury ,Middlesex","price":339950,"location":[-0.5729801431929391,51.4541331492174],"beds":3,"zipCode":"TW19 5JN","images":["http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150"],"description":"3 bedroom detached bungalow for sale in Wraysbury  ,Middlesex £339,950. Marketed by Romans, Staines - Lettings","propertyInfo":{"metaType":"house","type":"bungalow","subType":"detached","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":15},{"receivedDate":"2017-09-30T15:42:45.386Z","processedDate":"2017-11-12","property":{"id":16,"address":"Wraysbury ,Middlesex","price":339950,"location":[-0.5729801431929391,51.4541331492174],"beds":3,"zipCode":"TW19 5JN","images":[],"description":"3 bedroom detached bungalow for sale in Wraysbury  ,Middlesex £339,950. Marketed by Romans, Staines - Lettings","propertyInfo":{"metaType":"house","type":"bungalow","subType":"detached","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":16},{"receivedDate":"2017-09-30T12:03:32.772Z","processedDate":"2017-11-12","property":{"id":17,"address":"Cobbs Lane, Hough,","price":295000,"location":[-2.426959006363235,53.05566998657859],"beds":4,"zipCode":"CW2 5JN","images":["http://via.placeholder.com/350x150"],"description":"4 bedroom house for sale in Cobbs Lane,\r\nHough,\r\n £295,000. Marketed by Bridgfords, Nantwich","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":17},{"receivedDate":"2017-09-30T17:51:02.072Z","processedDate":"2017-11-12","property":{"id":18,"address":"Neswick Street, Stonehouse, Plymouth","price":82950,"location":[-4.1537578492077225,50.37224290777166],"beds":2,"zipCode":"PL1 5JN","images":["http://via.placeholder.com/350x150"],"description":"2 bedroom end of terrace house for sale in Neswick Street, Stonehouse, Plymouth £82,950. Marketed by Fulfords, Drake Circus Office, Plymouth","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":18},{"receivedDate":"2017-09-30T22:38:49.525Z","processedDate":"2017-11-12","property":{"id":19,"address":"Hough","price":249950,"location":[-2.426959006363235,53.05566998657859],"beds":5,"zipCode":"CW2 5JN","images":["http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150"],"description":"5 bedroom detached house for sale in Hough\r\n £249,950. Marketed by Beresford Executive & Country Homes, Nantwich","propertyInfo":{"metaType":"house","type":"house","subType":"detached","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":19},{"receivedDate":"2017-09-30T18:47:55.112Z","processedDate":"2017-11-12","property":{"id":20,"address":"SIDCUP","price":145995,"location":[0.12597675040077322,51.417370561968056],"beds":2,"zipCode":"DA14 5JN","images":["http://via.placeholder.com/350x150"],"description":"2 bedroom terraced house for sale in SIDCUP £145,995. Marketed by Halifax Estate Agents, Sidcup","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":20},{"receivedDate":"2017-09-30T17:01:26.069Z","processedDate":"2017-11-12","property":{"id":21,"address":"GRAVESEND","price":125000,"location":[0.37555267206213583,51.423637816666485],"beds":3,"zipCode":"DA12 5JN","images":["http://via.placeholder.com/350x150"],"description":"3 bedroom terraced house for sale in GRAVESEND £125,000. Marketed by Robinson Michael & Jackson, Gravesend and Northfleet - Sales","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":21},{"receivedDate":"2017-09-30T17:05:40.252Z","processedDate":"2017-11-12","property":{"id":22,"address":"East Point, Emerald Quay, SHOREHAM-BY-SEA","price":129950,"location":[-0.26476360361922924,50.83054562445052],"beds":2,"zipCode":"BN43 5JN","images":["http://via.placeholder.com/350x150","http://via.placeholder.com/350x150"],"description":"2 bedroom flat for sale in East Point, Emerald Quay, SHOREHAM-BY-SEA £129,950. Marketed by Fox & Sons, Shoreham By Sea","propertyInfo":{"metaType":"apartment","type":"flat","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":22},{"receivedDate":"2017-09-29T23:39:41.118Z","processedDate":"2017-11-12","property":{"id":23,"address":"Cam","price":129950,"location":[-2.369693173385643,51.70518032887116],"beds":2,"zipCode":"GL11 5JN","images":["http://via.placeholder.com/350x150"],"description":"2 bedroom semi-detached house for sale in Cam £129,950. Marketed by Bennett Jones, Dursley","propertyInfo":{"metaType":"house","type":"house","subType":"detached","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":23},{"receivedDate":"2017-09-29T23:40:45.936Z","processedDate":"2017-11-12","property":{"id":24,"address":"11 FRANCIS STREET, HALIFAX, W YORKSHIRE","price":20000,"location":[-1.875543444484019,53.722604723851205],"beds":2,"zipCode":"HX1 5JN","images":["http://via.placeholder.com/350x150"],"description":"2 bedroom end of terrace house for sale in 11 FRANCIS STREET, HALIFAX, W YORKSHIRE £20,000. Marketed by Halifax Estate Agents, Halifax","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":24},{"receivedDate":"2017-09-29T23:45:36.215Z","processedDate":"2017-11-12","property":{"id":25,"address":"Crofthandy, St.Day","price":349950,"location":[-5.1741384745274726,50.23919436305747],"beds":4,"zipCode":"TR16 5JN","images":["http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150"],"description":"4 bedroom detached house for sale in Crofthandy, St.Day £349,950. Marketed by Fulfords, Redruth","propertyInfo":{"metaType":"house","type":"house","subType":"detached","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":25},{"receivedDate":"2017-09-29T22:48:09.518Z","processedDate":"2017-11-12","property":{"id":26,"address":"HORSHAM","price":159950,"location":[-0.31267996352095706,51.06084284132494],"beds":3,"zipCode":"RH13 5JN","images":["http://via.placeholder.com/350x150"],"description":"3 bedroom semi-detached house for sale in HORSHAM £159,950. Marketed by Halifax Estate Agents, Horsham","propertyInfo":{"metaType":"house","type":"house","subType":"detached","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":26},{"receivedDate":"2017-09-29T23:10:41.581Z","processedDate":"2017-11-12","property":{"id":27,"address":"38, Eltham Road, West Bridgford","price":162500,"location":[-1.1233002326805734,52.929332029605426],"beds":2,"zipCode":"NG2 5JN","images":["http://via.placeholder.com/350x150"],"description":"2 bedroom semi-detached house for sale in 38, Eltham Road, West Bridgford £162,500. Marketed by Royston & Lund Estate Agents, West Bridgford","propertyInfo":{"metaType":"house","type":"house","subType":"detached","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":27},{"receivedDate":"2017-09-30T05:57:58.691Z","processedDate":"2017-11-12","property":{"id":28,"address":"Chamberlayne Road, Eastleigh","price":109950,"location":[-1.3578129584267797,50.9685650163028],"beds":1,"zipCode":"SO50 5JN","images":["http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150"],"description":"1 bedroom flat for sale in Chamberlayne Road, Eastleigh £109,950. Marketed by Enfields, Eastleigh","propertyInfo":{"metaType":"apartment","type":"flat","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":28},{"receivedDate":"2017-09-30T05:57:58.926Z","processedDate":"2017-11-12","property":{"id":29,"address":"Chamberlayne Road, Eastleigh","price":117500,"location":[-1.3578129584267797,50.9685650163028],"beds":1,"zipCode":"SO50 5JN","images":["http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150","http://via.placeholder.com/350x150"],"description":"1 bedroom flat for sale in Chamberlayne Road, Eastleigh £117,500. Marketed by Enfields, Eastleigh","propertyInfo":{"metaType":"apartment","type":"flat","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":29},{"receivedDate":"2017-09-30T05:58:09.613Z","processedDate":"2017-11-12","property":{"id":30,"address":"Hertford Road, Enfield, Middx","price":198750,"location":[-0.045516819011421086,51.66171736748136],"beds":3,"zipCode":"EN3 5JN","images":["http://via.placeholder.com/350x150"],"description":"3 bedroom terraced house for sale in Hertford Road, Enfield, Middx £198,750. Marketed by Kings Group, Enfield Highway","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":30},{"receivedDate":"2017-09-30T06:07:03.557Z","processedDate":"2017-11-12","property":{"id":31,"address":"Lingmell Road ,Liverpool ,**","price":115000,"location":[-2.9093335481278015,53.43796449979636],"beds":3,"zipCode":"L12 5JN","images":["http://via.placeholder.com/350x150"],"description":"3 bedroom semi-detached house for sale in Lingmell Road  ,Liverpool ,** £115,000. Marketed by Whitegates, West Derby","propertyInfo":{"metaType":"house","type":"house","subType":"detached","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":31},{"receivedDate":"2017-09-30T22:28:40.707Z","processedDate":"2017-11-12","property":{"id":32,"address":"Marlborough Road, Yeovil, Somerset","price":99950,"location":[-2.6112279363542443,50.95038582207067],"beds":3,"zipCode":"BA21 5JN","images":["http://via.placeholder.com/350x150"],"description":"3 bedroom terraced house for sale in Marlborough Road, Yeovil, Somerset £99,950. Marketed by Laceys Yeovil Ltd, Yeovil","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":32},{"receivedDate":"2017-10-02T22:37:39.633Z","processedDate":"2017-11-12","property":{"id":33,"address":"Caterham Hill","price":142500,"location":[-0.09988197496538871,51.294452617656084],"beds":2,"zipCode":"CR3 5JN","images":[],"description":"2 bedroom semi-detached house for sale in Caterham Hill £142,500. Marketed by Bairstow Eves, Caterham","propertyInfo":{"metaType":"house","type":"house","subType":"detached","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":33},{"receivedDate":"2017-09-30T20:33:33.322Z","processedDate":"2017-11-12","property":{"id":34,"address":"Tunbridge Wells, Kent","price":111950,"location":[0.2780277303687821,51.12519663731666],"beds":1,"zipCode":"TN2 5JN","images":["http://via.placeholder.com/350x150"],"description":"1 bedroom terraced house for sale in Tunbridge Wells, Kent £111,950. Marketed by Ward & Partners, Tunbridge Wells","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":34},{"receivedDate":"2017-09-30T20:38:55.875Z","processedDate":"2017-11-12","property":{"id":35,"address":"Southgate","price":149950,"location":[-0.14271515368519008,51.63263123323325],"beds":2,"zipCode":"N14 5JN","images":["http://via.placeholder.com/350x150"],"description":"2 bedroom flat for sale in Southgate £149,950. Marketed by Atkinsons Residential, Enfield - Sales","propertyInfo":{"metaType":"apartment","type":"flat","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":35},{"receivedDate":"2017-09-30T22:52:13.357Z","processedDate":"2017-11-12","property":{"id":36,"address":"Morston Close, TADWORTH, TADWORTH","price":212500,"location":[-0.2379885792841857,51.30245792154006],"beds":3,"zipCode":"KT20 5JN","images":["http://via.placeholder.com/350x150"],"description":"3 bedroom house for sale in Morston Close, TADWORTH, TADWORTH £212,500. Marketed by Barnard Marcus, Epsom","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":36},{"receivedDate":"2017-09-30T21:23:31.013Z","processedDate":"2017-11-12","property":{"id":37,"address":"Witney, Oxon","price":143000,"location":[-1.5052254090019497,51.78060618571224],"beds":2,"zipCode":"OX28 5JN","images":["http://via.placeholder.com/350x150"],"description":"2 bedroom house for sale in Witney, Oxon £143,000. Marketed by Buckell & Ballard, Witney","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":37},{"receivedDate":"2017-09-30T21:22:20.284Z","processedDate":"2017-11-12","property":{"id":38,"address":"GRAVESEND","price":135995,"location":[0.37555267206213583,51.423637816666485],"beds":3,"zipCode":"DA12 5JN","images":["http://via.placeholder.com/350x150"],"description":"3 bedroom terraced house for sale in GRAVESEND £135,995. Marketed by Robinson Michael & Jackson, Gravesend and Northfleet - Sales","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":38},{"receivedDate":"2017-10-01T05:26:55.558Z","processedDate":"2017-11-12","property":{"id":39,"address":"Ffordd Nant, Kinmel Bay,","price":180000,"location":[-3.5083495987844766,53.30218307669375],"beds":3,"zipCode":"LL18 5JN","images":["http://via.placeholder.com/350x150"],"description":"3 bedroom detached bungalow for sale in Ffordd Nant,\r\nKinmel Bay,\r\n £180,000. Marketed by Beresford Adams, Rhyl","propertyInfo":{"metaType":"house","type":"bungalow","subType":"detached","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":39},{"receivedDate":"2017-10-01T03:18:17.470Z","processedDate":"2017-11-12","property":{"id":40,"address":"Gammons Lane, North Watford, Herts","price":224950,"location":[-0.41213810657424677,51.67992588557486],"beds":3,"zipCode":"WD24 5JN","images":["http://via.placeholder.com/350x150"],"description":"3 bedroom house for sale in Gammons Lane, North Watford, Herts £224,950. Marketed by Claytons Estate Agents, Garston","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":40},{"receivedDate":"2017-10-01T05:11:53.614Z","processedDate":"2017-11-12","property":{"id":41,"address":"Lime Grove, Sutton Coldfield","price":129950,"location":[-1.8307058907348681,52.536813619920245],"beds":3,"zipCode":"B73 5JN","images":["http://via.placeholder.com/350x150"],"description":"3 bedroom house for sale in Lime Grove, Sutton Coldfield £129,950. Marketed by Dixons Countrywide, Wylde Green","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":41},{"receivedDate":"2017-09-30T16:28:45.278Z","processedDate":"2017-11-12","property":{"id":42,"address":"Austin Road, London, SW11","price":205000,"location":[-0.15565125137915709,51.4738489547773],"beds":2,"zipCode":"SW11 5JN","images":["http://via.placeholder.com/350x150","http://via.placeholder.com/350x150"],"description":"2 bedroom flat for sale in Austin Road, London, SW11 £205,000. Marketed by John D Wood & Co, Battersea","propertyInfo":{"metaType":"apartment","type":"flat","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":42},{"receivedDate":"2017-09-30T13:24:26.636Z","processedDate":"2017-11-12","property":{"id":43,"address":"Greenland Mews, Trundleys Road, Deptford, SE8 5JN","price":299500,"location":[-0.04311861095897317,51.485603515403206],"beds":3,"zipCode":"SE8 5JN","images":[],"description":"3 bedroom flat for sale in Greenland Mews, Trundleys Road, Deptford, SE8 5JN £299,500. Marketed by Alex Neil Estate Agents, South East London - Lettings","propertyInfo":{"metaType":"apartment","type":"flat","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":43},{"receivedDate":"2017-09-30T14:15:02.974Z","processedDate":"2017-11-12","property":{"id":44,"address":"PINELODGE","price":84950,"location":[0.5992923460827334,50.86476823461804],"beds":2,"zipCode":"TN35 5JN","images":["http://via.placeholder.com/350x150"],"description":"2 bedroom ground floor flat for sale in PINELODGE £84,950. Marketed by Halifax Estate Agents, Hastings - Wellington Place","propertyInfo":{"metaType":"apartment","type":"flat","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":44},{"receivedDate":"2017-09-30T01:06:43.616Z","processedDate":"2017-11-12","property":{"id":45,"address":"Caversham, Caversham","price":199950,"location":[-0.958101669079587,51.47401363823729],"beds":1,"zipCode":"RG4 5JN","images":["http://via.placeholder.com/350x150","http://via.placeholder.com/350x150"],"description":"1 bedroom semi-detached house for sale in Caversham, Caversham £199,950. Marketed by Whiteknights Estate Agents, Caversham","propertyInfo":{"metaType":"house","type":"house","subType":"detached","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":45},{"receivedDate":"2017-10-01T18:26:34.311Z","processedDate":"2017-11-12","property":{"id":46,"address":"Herne Bay, Kent","price":69995,"location":[1.1222365948003024,51.37175484827984],"beds":1,"zipCode":"CT6 5JN","images":[],"description":"1 bedroom flat for sale in Herne Bay, Kent £69,995. Marketed by Ward & Partners, Herne Bay","propertyInfo":{"metaType":"apartment","type":"flat","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":46},{"receivedDate":"2017-10-01T18:14:54.627Z","processedDate":"2017-11-12","property":{"id":47,"address":"Herne Bay, Kent","price":66995,"location":[1.1222365948003024,51.37175484827984],"beds":1,"zipCode":"CT6 5JN","images":[],"description":"1 bedroom flat for sale in Herne Bay, Kent £66,995. Marketed by Ward & Partners, Herne Bay","propertyInfo":{"metaType":"apartment","type":"flat","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":47},{"receivedDate":"2017-10-01T15:17:40.579Z","processedDate":"2017-11-12","property":{"id":48,"address":"Offerton, Stockport, Cheshire","price":94950,"location":[-2.1082248453404255,53.39113096305853],"beds":3,"zipCode":"SK2 5JN","images":[],"description":"3 bedroom house for sale in Offerton, Stockport, Cheshire £94,950. Marketed by Beresford Adams, Marple Bridge","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":48},{"receivedDate":"2017-10-01T20:05:43.124Z","processedDate":"2017-11-12","property":{"id":49,"address":"Kings Road, Woking","price":169950,"location":[-0.5451571590104376,51.32412260416489],"beds":2,"zipCode":"GU21 5JN","images":[],"description":"2 bedroom end of terrace house for sale in Kings Road,\r\nWoking £169,950. Marketed by Carson & Co, Woking","propertyInfo":{"metaType":"house","type":"house","subType":"unknown","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":49},{"receivedDate":"2017-10-01T13:40:28.258Z","processedDate":"2017-11-12","property":{"id":50,"address":"POLEGATE BORDERS","price":189950,"location":[0.2406491885656298,50.8187843050877],"beds":3,"zipCode":"BN26 5JN","images":["http://via.placeholder.com/350x150"],"description":"3 bedroom semi-detached house for sale in POLEGATE BORDERS £189,950. Marketed by Halifax Estate Agents, Polegate","propertyInfo":{"metaType":"house","type":"house","subType":"detached","availability":"forSale"},"isLive":false,"agencyAgent":""},"id":50}];

/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    envName: 'prod'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    useHash: true,
    envName: 'ghp'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /x_devs/_github/real-estate-manager/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map