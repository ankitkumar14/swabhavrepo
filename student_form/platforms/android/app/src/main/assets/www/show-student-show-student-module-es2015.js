(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["show-student-show-student-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-student/delete-student/delete-student.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-student/delete-student/delete-student.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loader\" *ngIf=\"loader\">\n\n</div>\n<ion-button href=\"\" >HOME</ion-button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-student/show-student.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-student/show-student.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar>\n    <ion-title>showStudent</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content scrollX=\"true\">\n  <div class=\"loader\"  *ngIf=\"loader\">\n\n  </div>\n  \n  <table class=\"table table-hover table-bordered\" *ngIf=\"!loader\">\n      <thead>\n        <tr>\n            <th>Id</th>\n            <th>Roll No</th>\n            <th>Name</th>\n            <th>age</th>\n            <th>Email</th>\n            <th>Date</th>\n            <th>Gender</th>\n            <th>update</th>\n            <th>delete</th>\n        </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let result of studentlist\">\n        <td>{{result.id}}</td>\n        <td>{{result.rollNo}}</td>\n        <td>{{result.name}}</td>\n        <td>{{result.age}}</td>\n        <td>{{result.email}}</td>\n        <td>{{result.date}}</td>\n        <td><div *ngIf=\"result.isMale ; else elseBlock\">male</div>\n        <ng-template #elseBlock>female</ng-template></td>\n        <td><ion-button href=\"/show-student/delete/{{result.id}}\" ><ion-icon name=\"create-outline\"></ion-icon></ion-button></td>\n        <td><ion-button href=\"/show-student/{{result.id}}\" ><ion-icon name=\"trash-outline\"></ion-icon></ion-button></td>\n        <hr>\n      </tr>\n    </tbody>\n    </table>\n\n</ion-content>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-student/update-student/update-student.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-student/update-student/update-student.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"loader\"  *ngIf=\"loader\">\n\n  </div>\n\n  <form >\n     \n    <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">roll no</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"studentdata.rollNo\" name=\"rollNo\"  required>\n        </ion-input>\n    </ion-item>  \n    <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">name</ion-label>\n        <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"studentdata.name\"  required>\n        </ion-input>\n    </ion-item>\n    <ion-item>  \n        <ion-label position=\"stacked\" color=\"primary\">age</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"studentdata.age\" name=\"age\" required>\n        </ion-input>\n      </ion-item>\n    <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">email</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"studentdata.email\" name=\"email\" required>\n        </ion-input>\n      </ion-item>\n    <ion-item> \n        <ion-label position=\"stacked\" color=\"primary\">date</ion-label>\n        <ion-input  type=\"date\" [(ngModel)]=\"studentdata.date\" name=\"date\" required>\n        </ion-input>\n      </ion-item>\n    <ion-item>  \n        <ion-label position=\"stacked\" color=\"primary\">isMale</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"studentdata.isMale\" name=\"gender\" required>\n        </ion-input>\n      </ion-item>\n      \n    <ion-button color=\"primary\" (click)=\"onSubmit()\" >submit</ion-button>\n  </form>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/show-student/delete-student/delete-student.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/show-student/delete-student/delete-student.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #3498db;\n  /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy1zdHVkZW50L2RlbGV0ZS1zdHVkZW50L0Q6XFxzd2FiaGF2XFxzdHVkZW50X2Zvcm0vc3JjXFxhcHBcXHNob3ctc3R1ZGVudFxcZGVsZXRlLXN0dWRlbnRcXGRlbGV0ZS1zdHVkZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaG93LXN0dWRlbnQvZGVsZXRlLXN0dWRlbnQvZGVsZXRlLXN0dWRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUE0QixlQUFBO0VBQzVCLDhCQUFBO0VBQWdDLFNBQUE7RUFDaEMsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUNHSjs7QURBRTtFQUNFO0lBQUssdUJBQUE7RUNJUDtFREhFO0lBQU8seUJBQUE7RUNNVDtBQUNGOztBRFRFO0VBQ0U7SUFBSyx1QkFBQTtFQ0lQO0VESEU7SUFBTyx5QkFBQTtFQ01UO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaG93LXN0dWRlbnQvZGVsZXRlLXN0dWRlbnQvZGVsZXRlLXN0dWRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcclxuICAgIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyAvKiBMaWdodCBncmV5ICovXHJcbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7IC8qIEJsdWUgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICB9IiwiLmxvYWRlciB7XG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xuICAvKiBMaWdodCBncmV5ICovXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcbiAgLyogQmx1ZSAqL1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/show-student/delete-student/delete-student.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/show-student/delete-student/delete-student.component.ts ***!
  \*************************************************************************/
/*! exports provided: DeleteStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteStudentComponent", function() { return DeleteStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_getdata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/getdata.service */ "./src/app/getdata.service.ts");




let DeleteStudentComponent = class DeleteStudentComponent {
    constructor(route, s) {
        this.route = route;
        this.s = s;
        this.loader = true;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        console.log(this.id);
        this.s.deletestudent(this.id)
            .then(result => {
            this.loader = false;
            console.log(result);
        })
            .catch(error => console.log(error));
    }
};
DeleteStudentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_getdata_service__WEBPACK_IMPORTED_MODULE_3__["GetdataService"] }
];
DeleteStudentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-student',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./delete-student.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-student/delete-student/delete-student.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./delete-student.component.scss */ "./src/app/show-student/delete-student/delete-student.component.scss")).default]
    })
], DeleteStudentComponent);



/***/ }),

/***/ "./src/app/show-student/show-student-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/show-student/show-student-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ShowStudentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowStudentPageRoutingModule", function() { return ShowStudentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _show_student_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-student.page */ "./src/app/show-student/show-student.page.ts");
/* harmony import */ var _delete_student_delete_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete-student/delete-student.component */ "./src/app/show-student/delete-student/delete-student.component.ts");
/* harmony import */ var _update_student_update_student_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-student/update-student.component */ "./src/app/show-student/update-student/update-student.component.ts");






const routes = [
    {
        path: '',
        component: _show_student_page__WEBPACK_IMPORTED_MODULE_3__["ShowStudentPage"]
    },
    {
        path: ':id',
        component: _delete_student_delete_student_component__WEBPACK_IMPORTED_MODULE_4__["DeleteStudentComponent"]
    },
    {
        path: 'delete/:id',
        component: _update_student_update_student_component__WEBPACK_IMPORTED_MODULE_5__["UpdateStudentComponent"]
    }
];
let ShowStudentPageRoutingModule = class ShowStudentPageRoutingModule {
};
ShowStudentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShowStudentPageRoutingModule);



/***/ }),

/***/ "./src/app/show-student/show-student.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/show-student/show-student.module.ts ***!
  \*****************************************************/
/*! exports provided: ShowStudentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowStudentPageModule", function() { return ShowStudentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _show_student_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-student-routing.module */ "./src/app/show-student/show-student-routing.module.ts");
/* harmony import */ var _show_student_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-student.page */ "./src/app/show-student/show-student.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _update_student_update_student_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-student/update-student.component */ "./src/app/show-student/update-student/update-student.component.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");










let ShowStudentPageModule = class ShowStudentPageModule {
};
ShowStudentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _show_student_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowStudentPageRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        ],
        declarations: [_show_student_page__WEBPACK_IMPORTED_MODULE_6__["ShowStudentPage"], _update_student_update_student_component__WEBPACK_IMPORTED_MODULE_8__["UpdateStudentComponent"]],
        providers: [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"]]
    })
], ShowStudentPageModule);



/***/ }),

/***/ "./src/app/show-student/show-student.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/show-student/show-student.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #3498db;\n  /* Blue */\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  margin: 0 auto;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\ntable {\n  width: 100%;\n}\n\nthead {\n  background-color: black;\n  color: white;\n}\n\ntable, th, td {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\n\nth, td {\n  padding: 15px;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy1zdHVkZW50L0Q6XFxzd2FiaGF2XFxzdHVkZW50X2Zvcm0vc3JjXFxhcHBcXHNob3ctc3R1ZGVudFxcc2hvdy1zdHVkZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvdy1zdHVkZW50L3Nob3ctc3R1ZGVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUE0QixlQUFBO0VBQzVCLDhCQUFBO0VBQWdDLFNBQUE7RUFDaEMsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFFQSwwQ0FBQTtVQUFBLGtDQUFBO0FDRUo7O0FEQ0U7RUFDRTtJQUFLLHVCQUFBO0VDR1A7RURGRTtJQUFPLHlCQUFBO0VDS1Q7QUFDRjs7QURSRTtFQUNFO0lBQUssdUJBQUE7RUNHUDtFREZFO0lBQU8seUJBQUE7RUNLVDtBQUNGOztBREhFO0VBQ0UsV0FBQTtBQ0tKOztBREZFO0VBQ0UsdUJBQUE7RUFDRixZQUFBO0FDS0Y7O0FESEU7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FDTUo7O0FESkU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL3Nob3ctc3R1ZGVudC9zaG93LXN0dWRlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlciB7XHJcbiAgICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xyXG4gICAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiOyAvKiBCbHVlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luOjAgXHJcbiAgICBhdXRvO1xyXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgfVxyXG5cclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxuXHJcbiAgdGhlYWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICB0YWJsZSwgdGgsIHRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB9XHJcbiAgdGgsIHRkIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH0iLCIubG9hZGVyIHtcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XG4gIC8qIExpZ2h0IGdyZXkgKi9cbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xuICAvKiBCbHVlICovXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxudGFibGUsIHRoLCB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50aCwgdGQge1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/show-student/show-student.page.ts":
/*!***************************************************!*\
  !*** ./src/app/show-student/show-student.page.ts ***!
  \***************************************************/
/*! exports provided: ShowStudentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowStudentPage", function() { return ShowStudentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _getdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getdata.service */ "./src/app/getdata.service.ts");



let ShowStudentPage = class ShowStudentPage {
    constructor(s) {
        this.s = s;
        this.loader = true;
        this.studentlist = [];
    }
    ngOnInit() {
        this.s.students().then((result) => {
            this.studentlist = JSON.parse(result.data);
            console.log(this.studentlist);
            this.loader = false;
        }).catch((error) => {
            console.log(error);
        });
    }
};
ShowStudentPage.ctorParameters = () => [
    { type: _getdata_service__WEBPACK_IMPORTED_MODULE_2__["GetdataService"] }
];
ShowStudentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-student',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./show-student.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-student/show-student.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./show-student.page.scss */ "./src/app/show-student/show-student.page.scss")).default]
    })
], ShowStudentPage);



/***/ }),

/***/ "./src/app/show-student/update-student/update-student.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/show-student/update-student/update-student.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #3498db;\n  /* Blue */\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  margin: 0 auto;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy1zdHVkZW50L3VwZGF0ZS1zdHVkZW50L0Q6XFxzd2FiaGF2XFxzdHVkZW50X2Zvcm0vc3JjXFxhcHBcXHNob3ctc3R1ZGVudFxcdXBkYXRlLXN0dWRlbnRcXHVwZGF0ZS1zdHVkZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaG93LXN0dWRlbnQvdXBkYXRlLXN0dWRlbnQvdXBkYXRlLXN0dWRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUE0QixlQUFBO0VBQzVCLDhCQUFBO0VBQWdDLFNBQUE7RUFDaEMsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFFQSwwQ0FBQTtVQUFBLGtDQUFBO0FDRUo7O0FEQ0U7RUFDRTtJQUFLLHVCQUFBO0VDR1A7RURGRTtJQUFPLHlCQUFBO0VDS1Q7QUFDRjs7QURSRTtFQUNFO0lBQUssdUJBQUE7RUNHUDtFREZFO0lBQU8seUJBQUE7RUNLVDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hvdy1zdHVkZW50L3VwZGF0ZS1zdHVkZW50L3VwZGF0ZS1zdHVkZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlciB7XHJcbiAgICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xyXG4gICAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiOyAvKiBCbHVlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luOjAgXHJcbiAgICBhdXRvO1xyXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgfSIsIi5sb2FkZXIge1xuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcbiAgLyogTGlnaHQgZ3JleSAqL1xuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XG4gIC8qIEJsdWUgKi9cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/show-student/update-student/update-student.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/show-student/update-student/update-student.component.ts ***!
  \*************************************************************************/
/*! exports provided: UpdateStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStudentComponent", function() { return UpdateStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_student__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/student */ "./src/app/student.ts");
/* harmony import */ var src_app_getdata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/getdata.service */ "./src/app/getdata.service.ts");





let UpdateStudentComponent = class UpdateStudentComponent {
    constructor(route, s, router) {
        this.route = route;
        this.s = s;
        this.router = router;
        this.studentlist = new src_app_student__WEBPACK_IMPORTED_MODULE_3__["student"];
        this.loader = true;
        this.studentdata = new src_app_student__WEBPACK_IMPORTED_MODULE_3__["student"];
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        console.log(this.id);
        this.getStudentById(this.id);
    }
    getStudentById(id) {
        this.s.getStudentById(id).then((result) => {
            this.studentlist = JSON.parse(result.data);
            this.studentdata = this.studentlist[0];
            this.loader = false;
            console.log(this.studentlist);
        }).catch((error) => {
            console.log(error);
        });
    }
    onSubmit() {
        this.router.navigate(['']);
        this.s.updateStudents(this.id, this.studentdata);
    }
};
UpdateStudentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_getdata_service__WEBPACK_IMPORTED_MODULE_4__["GetdataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UpdateStudentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-student',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./update-student.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-student/update-student/update-student.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./update-student.component.scss */ "./src/app/show-student/update-student/update-student.component.scss")).default]
    })
], UpdateStudentComponent);



/***/ })

}]);
//# sourceMappingURL=show-student-show-student-module-es2015.js.map