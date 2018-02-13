webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot([{
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'search'
                    },
                    {
                        path: '**',
                        component: __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
                    }
                ]),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__property_property_module__ = __webpack_require__("./src/app/property/property.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__property_property_module__["a" /* PropertyModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    The page you are looking for does not exist\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/property/property-detail/property-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes slidy {\r\n    0% {\r\n        left: 0%;\r\n    }\r\n    20% {\r\n        left: 0%;\r\n    }\r\n    25% {\r\n        left: -100%;\r\n    }\r\n    45% {\r\n        left: -100%;\r\n    }\r\n    50% {\r\n        left: -200%;\r\n    }\r\n    70% {\r\n        left: -200%;\r\n    }\r\n    75% {\r\n        left: -300%;\r\n    }\r\n    95% {\r\n        left: -300%;\r\n    }\r\n    100% {\r\n        left: -400%;\r\n    }\r\n}\r\n\r\n@keyframes slidy {\r\n    0% {\r\n        left: 0%;\r\n    }\r\n    20% {\r\n        left: 0%;\r\n    }\r\n    25% {\r\n        left: -100%;\r\n    }\r\n    45% {\r\n        left: -100%;\r\n    }\r\n    50% {\r\n        left: -200%;\r\n    }\r\n    70% {\r\n        left: -200%;\r\n    }\r\n    75% {\r\n        left: -300%;\r\n    }\r\n    95% {\r\n        left: -300%;\r\n    }\r\n    100% {\r\n        left: -400%;\r\n    }\r\n}\r\n\r\ndiv#slider {\r\n    overflow: hidden;\r\n}\r\n\r\ndiv#slider figure img {\r\n    width: 20%;\r\n    float: left;\r\n    height: 343px;\r\n}\r\n\r\ndiv#slider figure {\r\n    position: relative;\r\n    width: 500%;\r\n    margin: 0;\r\n    left: 0;\r\n    text-align: left;\r\n    font-size: 0;\r\n    -webkit-animation: 30s slidy infinite;\r\n            animation: 30s slidy infinite;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/property/property-detail/property-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-header mb-2\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"sm\">\n                <a class=\"btn btn-secondary\" queryParamsHandling=\"preserve\" [routerLink]=\"['/search']\">\n                <i class=\"fa fa-chevron-left\"></i> Back\n              </a>\n            </div>\n            <div class=\"sm ml-2\">\n                <h4 class=\"card-title\">Property details</h4>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"card-block col-md-6 pl-0\">\n            <div class=\"card mb-2\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Address</h5>\n                    <p class=\"card-text\">{{property.address}}</p>\n                    <p class=\"card-text\">{{property.zipCode}}</p>\n                </div>\n            </div>\n\n            <div class=\"card container mb-2\">\n                <div class=\"row\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Beds</h5>\n                        <p class=\"card-text\">{{property.beds}}</p>\n                    </div>\n\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Price</h5>\n                        <p class=\"card-text\">£{{property.price}}</p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Estate Agent</h5>\n                    <p class=\"card-text\">{{property.estateAgent}}</p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card-block col-md-6 border rounded\">\n            <div id=\"slider\">\n                <figure>\n                    <img class=\"card-img-center\" *ngFor=\"let img of property.images\" [src]=\"img\" alt=\"Card image cap\">\n                </figure>\n                <div class=\"card-body\">\n                    <h5 class=\"card-text font-weight-bold text-danger\"\n                     *ngIf=\"property.images.length==0\">This property does not have images available</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"card mt-2\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">Description</h5>\n        <p class=\"card-text\">{{property.description}}</p>\n    </div>\n</div>\n\n<div class=\"card mt-2\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">Description</h5>\n        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"15\">\n            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n        </agm-map>\n    </div>\n</div>\n\n<div class=\"card-footer\">\n    <a class=\"btn btn-secondary\" queryParamsHandling=\"preserve\" [routerLink]=\"['/search']\">\n            <i class=\"fa fa-chevron-left\"></i> Back\n          </a>\n</div>\n<!-- class=\"card-link\" -->\n"

/***/ }),

/***/ "./src/app/property/property-detail/property-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    PropertyDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-property-detail',
            template: __webpack_require__("./src/app/property/property-detail/property-detail.component.html"),
            styles: [__webpack_require__("./src/app/property/property-detail/property-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PropertyDetailComponent);
    return PropertyDetailComponent;
}());



/***/ }),

/***/ "./src/app/property/property-filter/property-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n    <div class=\"form-group\">\n        <label>Address</label>\n        <input class=\"form-control\" type=\"text\" name=\"address\" [(ngModel)]=\"filter.address\"\n        [ngClass]=\"{'border-info':filter.address}\">\n    </div>\n    <div>\n        <div class=\"row\">\n            <div class=\"form-group col-4\">\n                <label>Zipcode</label>\n                <input class=\"form-control\" type=\"text\" name=\"zipCode\" [(ngModel)]=\"filter.zipCode\"\n                [ngClass]=\"{'border-info':filter.zipCode}\">\n            </div>\n            <div class=\"form-group col-4\">\n                <label>Beds (>={{filter.beds}}) </label>\n                <input class=\"form-control text-right\" type=\"number\" name=\"beds\" [(ngModel)]=\"filter.beds\"\n                [ngClass]=\"{'border-info':filter.beds>0}\">\n            </div>\n            <div class=\"form-group col-4\">\n                <label>Price (>={{filter.price}})</label>\n                <input class=\"form-control text-right\" type=\"number\" name=\"price\" [(ngModel)]=\"filter.price\"\n                [ngClass]=\"{'border-info':filter.price>0}\">\n            </div>\n        </div>\n    </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/property/property-filter/property-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_property_filter_service__ = __webpack_require__("./src/app/property/service/property-filter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PropertyFilterComponent = /** @class */ (function () {
    function PropertyFilterComponent(propertyFilterService) {
        this.propertyFilterService = propertyFilterService;
        this.filter = {};
    }
    PropertyFilterComponent.prototype.ngOnInit = function () {
        this.filter = this.propertyFilterService.filter;
    };
    PropertyFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'property-filter',
            template: __webpack_require__("./src/app/property/property-filter/property-filter.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_property_filter_service__["a" /* PropertyFilterService */]])
    ], PropertyFilterComponent);
    return PropertyFilterComponent;
}());



/***/ }),

/***/ "./src/app/property/property-search/property-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* body {\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n  font-weight: 400;\r\n  color: #3b3b3b;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-smoothing: antialiased;\r\n  background: #2b2b2b;\r\n} */\r\n@media screen and (max-width: 580px) {\r\n  body {\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n  }\r\n}\r\n.wrapper {\r\n  margin: 0 auto;\r\n  padding: 40px;\r\n  max-width: 800px;\r\n}\r\n.table {\r\n  margin: 0 0 40px 0;\r\n  width: 100%;\r\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: table;\r\n}\r\n@media screen and (max-width: 580px) {\r\n  .table {\r\n    display: block;\r\n  }\r\n}\r\n.row {\r\n  display: table-row;\r\n  background: #f6f6f6;\r\n  border-top: 1px solid #e9ecef;\r\n}\r\n.row:nth-of-type(odd) {\r\n  background: #ffffff;\r\n}\r\n.row.header {\r\n  /* font-weight: 900;\r\n  color: #ffffff;\r\n  background: #ea6153; */\r\n  font-weight: bold;\r\n  font-size: 1.2rem;\r\n}\r\n.row.red {\r\n  background: #ea6153;\r\n}\r\n.row.green {\r\n  background: #27ae60;\r\n}\r\n.row.blue {\r\n  background: #2980b9;\r\n}\r\n@media screen and (max-width: 580px) {\r\n  .row {\r\n    padding: 14px 0 7px;\r\n    display: block;\r\n  }\r\n  .row.header {\r\n    padding: 0;\r\n    height: 6px;\r\n  }\r\n  .row.header .cell {\r\n    display: none;\r\n  }\r\n  .row .cell {\r\n    margin-bottom: 10px;\r\n    border-top: 1px solid #e9ecef;\r\n  }\r\n  .row .cell:before {\r\n    margin-bottom: 3px;\r\n    content: attr(data-title);\r\n    min-width: 98px;\r\n    font-size: 10px;\r\n    line-height: 10px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    color: #969696;\r\n    display: block;\r\n  }\r\n  .row .cell.text-right{\r\n    text-align: initial!important;\r\n  }\r\n}\r\n.caption {\r\n  display: table-caption;\r\n  padding: 6px 12px;\r\n  background: #27ae60;\r\n  color: #ffffff;\r\n  font-weight: 900;\r\n}\r\n.cell {\r\n  padding: 6px 12px;\r\n  display: table-cell;\r\n  border-top: 1px solid #e9ecef;\r\n}\r\n@media screen and (max-width: 580px) {\r\n  .cell {\r\n    padding: 2px 16px;\r\n    display: block;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/property/property-search/property-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-default\">\n    <div class=\"card-header\">\n        <div class=\"container\">\n            <div class=\"form-inline\">\n                <div class=\"sm mr-2\">\n                    <button (click)=\"search()\" class=\"btn btn-success\">Search</button>\n                </div>\n                <div class=\"sm mr-2\">\n                    <button (click)=\"showFilter=!showFilter\" class=\"btn\" [ngClass]=\"{'btn-danger':hasFilter(),'btn-success':!hasFilter()}\">\n                      Show filter\n                    </button>\n                </div>\n                <div class=\"sm\">\n                    {{totalsMessage}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-block  mt-2\">\n        <div *ngIf=\"showFilter\" class=\"card-block container\">\n            <property-filter></property-filter>\n        </div>\n        <div class=\"container\">\n            <div class=\"table\">\n                <div class=\"row header\">\n                    <div class=\"cell\">\n                        Address\n                    </div>\n                    <div class=\"cell\">\n                        Zipcode\n                    </div>\n                    <div class=\"cell text-right\">\n                        Beds\n                    </div>\n                    <div class=\"cell text-right\">\n                        Price &pound;\n                    </div>\n                    <div class=\"cell\">\n                        Type\n                    </div>\n                    <div class=\"cell\">\n                        Availability\n                    </div>\n                </div>\n\n                <div class=\"row\" *ngFor=\"let prop of properties\">\n                    <div class=\"cell\" data-title=\"Address\">\n                        <a [routerLink]=\"['/', prop.id, 'detail']\">{{prop.address}}</a>\n                    </div>\n                    <div class=\"cell\" data-title=\"Zipcode\">\n                        {{prop.zipCode}}\n                    </div>\n                    <div class=\"cell text-right\" data-title=\"Beds\">\n                        {{prop.beds}}\n                    </div>\n                    <div class=\"cell text-right\" data-title=\"Price\">\n                        {{prop.price}} &pound;\n                    </div>\n                    <div class=\"cell\" data-title=\"Type\">\n                        {{prop.propertyInfo.metaType}}\n                    </div>\n                    <div class=\"cell\" data-title=\"Availability\">\n                        {{prop.propertyInfo.availability}}\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"card-footer\">{{totalsMessage}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/property/property-search/property-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertySearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_property_data_service__ = __webpack_require__("./src/app/property/service/property-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_property_filter_service__ = __webpack_require__("./src/app/property/service/property-filter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
                _this.properties.length + " total properties found" :
                _this.properties.length + " new properties in London";
        }, function (error) {
            console.error("Error Server: " + error.error.error.message);
        });
    };
    PropertySearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'property-search',
            template: __webpack_require__("./src/app/property/property-search/property-search.component.html"),
            styles: [__webpack_require__("./src/app/property/property-search/property-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_property_data_service__["a" /* PropertyDataService */],
            __WEBPACK_IMPORTED_MODULE_2__service_property_filter_service__["a" /* PropertyFilterService */]])
    ], PropertySearchComponent);
    return PropertySearchComponent;
}());



/***/ }),

/***/ "./src/app/property/property.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__property_search_property_search_component__ = __webpack_require__("./src/app/property/property-search/property-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__property_filter_property_filter_component__ = __webpack_require__("./src/app/property/property-filter/property-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_property_data_service__ = __webpack_require__("./src/app/property/service/property-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__property_detail_property_detail_component__ = __webpack_require__("./src/app/property/property-detail/property-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_property_filter_service__ = __webpack_require__("./src/app/property/service/property-filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_property_resolver_service__ = __webpack_require__("./src/app/property/service/property-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [{
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_4__property_search_property_search_component__["a" /* PropertySearchComponent */]
    },
    {
        path: ':id/detail',
        resolve: { property: __WEBPACK_IMPORTED_MODULE_11__service_property_resolver_service__["a" /* PropertyResolverService */] },
        component: __WEBPACK_IMPORTED_MODULE_7__property_detail_property_detail_component__["a" /* PropertyDetailComponent */]
    }
];
var PropertyModule = /** @class */ (function () {
    function PropertyModule() {
    }
    PropertyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAuptizt9390AVWECoyE1W0FgqC39AosXM'
                })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__property_filter_property_filter_component__["a" /* PropertyFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__property_search_property_search_component__["a" /* PropertySearchComponent */],
                __WEBPACK_IMPORTED_MODULE_7__property_detail_property_detail_component__["a" /* PropertyDetailComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__service_property_data_service__["a" /* PropertyDataService */],
                __WEBPACK_IMPORTED_MODULE_10__service_property_filter_service__["a" /* PropertyFilterService */],
                __WEBPACK_IMPORTED_MODULE_11__service_property_resolver_service__["a" /* PropertyResolverService */]
            ],
        })
    ], PropertyModule);
    return PropertyModule;
}());



/***/ }),

/***/ "./src/app/property/service/property-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PropertyDataService = /** @class */ (function () {
    function PropertyDataService(http) {
        this.http = http;
        this.URL = 'assets/mock/test.json';
    }
    PropertyDataService.prototype.getDatas = function (topRow, filter) {
        if (topRow === void 0) { topRow = 0; }
        if (filter === void 0) { filter = null; }
        var getDatas$ = this.http.get(this.URL);
        var propsFiltered = getDatas$;
        if (topRow > 0) {
            propsFiltered = getDatas$
                .map(function (array) {
                return array.slice(0, topRow);
            });
        }
        if (filter && Object.keys(filter).length > 0) {
            propsFiltered = getDatas$;
            var filterString = function (keyProperty) {
                if (filter[keyProperty]) {
                    propsFiltered = propsFiltered.map(function (props) {
                        return props.filter(function (x) { return x.property[keyProperty].search(new RegExp(filter[keyProperty], 'i')) > -1; });
                    });
                }
            };
            var filterNumeric = function (keyProperty) {
                if (filter[keyProperty]) {
                    propsFiltered = propsFiltered.map(function (props) {
                        return props.filter(function (x) { return x.property[keyProperty] >= filter[keyProperty]; });
                    });
                }
            };
            filterString('address');
            filterString('zipCode');
            filterNumeric('beds');
            filterNumeric('price');
        }
        return propsFiltered || getDatas$;
    };
    PropertyDataService.prototype.findProperty = function (id) {
        return this.getDatas()
            .mergeMap(function (x) { return x.filter(function (root) { return root.property.id === id; }); });
    };
    PropertyDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PropertyDataService);
    return PropertyDataService;
}());



/***/ }),

/***/ "./src/app/property/service/property-filter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyFilterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
    PropertyFilterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], PropertyFilterService);
    return PropertyFilterService;
}());



/***/ }),

/***/ "./src/app/property/service/property-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__property_data_service__ = __webpack_require__("./src/app/property/service/property-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PropertyResolverService = /** @class */ (function () {
    function PropertyResolverService(propertyDataService) {
        this.propertyDataService = propertyDataService;
    }
    PropertyResolverService.prototype.resolve = function (route, state) {
        var id = route.params['id'];
        return this.propertyDataService.findProperty(+id)
            .map(function (x) { return x.property; });
    };
    PropertyResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__property_data_service__["a" /* PropertyDataService */]])
    ], PropertyResolverService);
    return PropertyResolverService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map