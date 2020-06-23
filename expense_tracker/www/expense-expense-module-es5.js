function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expense-expense-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/expense/add-expense/add-expense.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expense/add-expense/add-expense.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExpenseAddExpenseAddExpenseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content>\n  <ion-item>\n    <ion-label position=\"stacked\" color=\"primary\">AMOUNT</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"amount\" value=0 name=\"amount\"  required>\n    </ion-input>\n</ion-item> \n<br>\n<ion-item>\n  <ion-label position=\"stacked\" color=\"primary\">REASON</ion-label>\n  <ion-input type=\"text\" [(ngModel)]=\"reason\" name=\"reason\"  required>\n  </ion-input>\n</ion-item> \n  <br>\n  <ion-button  full (click)=\"submit()\">SUBMIT</ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/expense/expense.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expense/expense.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExpenseExpensePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>expense</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br>\n  total saving={{totalSaving}}\n  <br>\n  <br>\n  total expense={{totalExpense}}\n  <br><br>\n  remaining amount={{currentSaving}}\n  <br>\n  <br>\n  <ion-button [routerLink]=\"['./addExpense']\">ADD expense</ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/expense/add-expense/add-expense.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/expense/add-expense/add-expense.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExpenseAddExpenseAddExpenseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVuc2UvYWRkLWV4cGVuc2UvYWRkLWV4cGVuc2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/expense/add-expense/add-expense.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/expense/add-expense/add-expense.component.ts ***!
    \**************************************************************/

  /*! exports provided: AddExpenseComponent */

  /***/
  function srcAppExpenseAddExpenseAddExpenseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddExpenseComponent", function () {
      return AddExpenseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_my_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/my.service */
    "./src/app/my.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AddExpenseComponent = /*#__PURE__*/function () {
      function AddExpenseComponent(s, router) {
        _classCallCheck(this, AddExpenseComponent);

        this.s = s;
        this.router = router;
        this.amount = 0;
      }

      _createClass(AddExpenseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          this.s.addExpense(this.amount);
          this.s.addReason(this.amount, this.reason);
          this.router.navigate(['']);
        }
      }]);

      return AddExpenseComponent;
    }();

    AddExpenseComponent.ctorParameters = function () {
      return [{
        type: src_app_my_service__WEBPACK_IMPORTED_MODULE_2__["MyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AddExpenseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-expense',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-expense.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/expense/add-expense/add-expense.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-expense.component.scss */
      "./src/app/expense/add-expense/add-expense.component.scss"))["default"]]
    })], AddExpenseComponent);
    /***/
  },

  /***/
  "./src/app/expense/expense-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/expense/expense-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ExpensePageRoutingModule */

  /***/
  function srcAppExpenseExpenseRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpensePageRoutingModule", function () {
      return ExpensePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _expense_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./expense.page */
    "./src/app/expense/expense.page.ts");
    /* harmony import */


    var _add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-expense/add-expense.component */
    "./src/app/expense/add-expense/add-expense.component.ts");

    var routes = [{
      path: '',
      component: _expense_page__WEBPACK_IMPORTED_MODULE_3__["ExpensePage"]
    }, {
      path: 'addExpense',
      component: _add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_4__["AddExpenseComponent"]
    }];

    var ExpensePageRoutingModule = function ExpensePageRoutingModule() {
      _classCallCheck(this, ExpensePageRoutingModule);
    };

    ExpensePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ExpensePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/expense/expense.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/expense/expense.module.ts ***!
    \*******************************************/

  /*! exports provided: ExpensePageModule */

  /***/
  function srcAppExpenseExpenseModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpensePageModule", function () {
      return ExpensePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _expense_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./expense-routing.module */
    "./src/app/expense/expense-routing.module.ts");
    /* harmony import */


    var _expense_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./expense.page */
    "./src/app/expense/expense.page.ts");
    /* harmony import */


    var _add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./add-expense/add-expense.component */
    "./src/app/expense/add-expense/add-expense.component.ts");

    var ExpensePageModule = function ExpensePageModule() {
      _classCallCheck(this, ExpensePageModule);
    };

    ExpensePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _expense_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExpensePageRoutingModule"]],
      declarations: [_expense_page__WEBPACK_IMPORTED_MODULE_6__["ExpensePage"], _add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_7__["AddExpenseComponent"]]
    })], ExpensePageModule);
    /***/
  },

  /***/
  "./src/app/expense/expense.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/expense/expense.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppExpenseExpensePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVuc2UvZXhwZW5zZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/expense/expense.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/expense/expense.page.ts ***!
    \*****************************************/

  /*! exports provided: ExpensePage */

  /***/
  function srcAppExpenseExpensePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpensePage", function () {
      return ExpensePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _my_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../my.service */
    "./src/app/my.service.ts");

    var ExpensePage = /*#__PURE__*/function () {
      function ExpensePage(s) {
        _classCallCheck(this, ExpensePage);

        this.s = s;
        this.totalSaving = s.getTotalSaving();
        this.currentSaving = s.getCurrentSaving();
        this.totalExpense = s.getTotalExpense();
      }

      _createClass(ExpensePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExpensePage;
    }();

    ExpensePage.ctorParameters = function () {
      return [{
        type: _my_service__WEBPACK_IMPORTED_MODULE_2__["MyService"]
      }];
    };

    ExpensePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-expense',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./expense.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/expense/expense.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./expense.page.scss */
      "./src/app/expense/expense.page.scss"))["default"]]
    })], ExpensePage);
    /***/
  }
}]);
//# sourceMappingURL=expense-expense-module-es5.js.map