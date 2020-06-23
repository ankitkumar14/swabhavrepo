(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saving-saving-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/saving/add-saving/add-saving.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/saving/add-saving/add-saving.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-item>\n    <ion-label position=\"stacked\" color=\"primary\">AMOUNT</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"amount\" value=0 name=\"amount\"  required>\n    </ion-input>\n  </ion-item> \n \n  <br>\n  <ion-button  full (click)=\"submit()\">SUBMIT</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/saving/saving.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/saving/saving.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>saving</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br><br>\nTOTAL SAVING={{saving}}\n<br><br>\n<br><br>\n<ion-button [routerLink]=\"['./addSaving']\">ADD SAVING</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/saving/add-saving/add-saving.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/saving/add-saving/add-saving.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhdmluZy9hZGQtc2F2aW5nL2FkZC1zYXZpbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/saving/add-saving/add-saving.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/saving/add-saving/add-saving.component.ts ***!
  \***********************************************************/
/*! exports provided: AddSavingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSavingComponent", function() { return AddSavingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_my_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/my.service */ "./src/app/my.service.ts");




let AddSavingComponent = class AddSavingComponent {
    constructor(router, s) {
        this.router = router;
        this.s = s;
        this.amount = 0;
    }
    ngOnInit() { }
    submit() {
        this.s.addSaving(this.amount);
        this.router.navigate(['']);
    }
};
AddSavingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_my_service__WEBPACK_IMPORTED_MODULE_3__["MyService"] }
];
AddSavingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-saving',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-saving.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/saving/add-saving/add-saving.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-saving.component.scss */ "./src/app/saving/add-saving/add-saving.component.scss")).default]
    })
], AddSavingComponent);



/***/ }),

/***/ "./src/app/saving/saving-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/saving/saving-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SavingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingPageRoutingModule", function() { return SavingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _saving_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saving.page */ "./src/app/saving/saving.page.ts");
/* harmony import */ var _add_saving_add_saving_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-saving/add-saving.component */ "./src/app/saving/add-saving/add-saving.component.ts");





const routes = [
    {
        path: '',
        component: _saving_page__WEBPACK_IMPORTED_MODULE_3__["SavingPage"]
    },
    {
        path: 'addSaving',
        component: _add_saving_add_saving_component__WEBPACK_IMPORTED_MODULE_4__["AddSavingComponent"]
    }
];
let SavingPageRoutingModule = class SavingPageRoutingModule {
};
SavingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SavingPageRoutingModule);



/***/ }),

/***/ "./src/app/saving/saving.module.ts":
/*!*****************************************!*\
  !*** ./src/app/saving/saving.module.ts ***!
  \*****************************************/
/*! exports provided: SavingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingPageModule", function() { return SavingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _saving_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saving-routing.module */ "./src/app/saving/saving-routing.module.ts");
/* harmony import */ var _saving_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saving.page */ "./src/app/saving/saving.page.ts");
/* harmony import */ var _add_saving_add_saving_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-saving/add-saving.component */ "./src/app/saving/add-saving/add-saving.component.ts");








let SavingPageModule = class SavingPageModule {
};
SavingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _saving_routing_module__WEBPACK_IMPORTED_MODULE_5__["SavingPageRoutingModule"]
        ],
        declarations: [_saving_page__WEBPACK_IMPORTED_MODULE_6__["SavingPage"], _add_saving_add_saving_component__WEBPACK_IMPORTED_MODULE_7__["AddSavingComponent"]]
    })
], SavingPageModule);



/***/ }),

/***/ "./src/app/saving/saving.page.scss":
/*!*****************************************!*\
  !*** ./src/app/saving/saving.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhdmluZy9zYXZpbmcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/saving/saving.page.ts":
/*!***************************************!*\
  !*** ./src/app/saving/saving.page.ts ***!
  \***************************************/
/*! exports provided: SavingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingPage", function() { return SavingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _my_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../my.service */ "./src/app/my.service.ts");



let SavingPage = class SavingPage {
    constructor(s) {
        this.s = s;
        this.saving = 0;
        this.saving = this.s.getCurrentSaving();
    }
    ngOnInit() { }
};
SavingPage.ctorParameters = () => [
    { type: _my_service__WEBPACK_IMPORTED_MODULE_2__["MyService"] }
];
SavingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-saving',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./saving.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/saving/saving.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./saving.page.scss */ "./src/app/saving/saving.page.scss")).default]
    })
], SavingPage);



/***/ })

}]);
//# sourceMappingURL=saving-saving-module-es2015.js.map