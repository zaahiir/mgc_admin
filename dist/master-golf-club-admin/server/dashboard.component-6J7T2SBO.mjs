import './polyfills.server.mjs';
import {
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  ColComponent,
  DefaultValueAccessor,
  FormCheckLabelDirective,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  GutterDirective,
  IconDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ProgressComponent,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  RowComponent,
  ɵNgNoValidate
} from "./chunk-KHKHR2VG.mjs";
import {
  DOCUMENT
} from "./chunk-7RJECGZ5.mjs";
import {
  DestroyRef,
  Renderer2,
  effect,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-J4TCKMJW.mjs";
import {
  __privateAdd,
  __privateGet,
  __privateSet
} from "./chunk-CKH4O4N6.mjs";

// src/app/views/dashboard/dashboard.component.ts
var _destroyRef, _document, _renderer, _mainChartRefEffect;
var _DashboardComponent = class _DashboardComponent {
  constructor() {
    __privateAdd(this, _destroyRef);
    __privateAdd(this, _document);
    __privateAdd(this, _renderer);
    __privateAdd(this, _mainChartRefEffect);
    __privateSet(this, _destroyRef, inject(DestroyRef));
    __privateSet(this, _document, inject(DOCUMENT));
    __privateSet(this, _renderer, inject(Renderer2));
    this.users = [
      {
        name: "Yiorgos Avraamu",
        state: "New",
        registered: "Jan 1, 2021",
        country: "Us",
        usage: 50,
        period: "Jun 11, 2021 - Jul 10, 2021",
        payment: "Mastercard",
        activity: "10 sec ago",
        avatar: "./assets/images/avatars/1.jpg",
        status: "success",
        color: "success"
      },
      {
        name: "Avram Tarasios",
        state: "Recurring ",
        registered: "Jan 1, 2021",
        country: "Br",
        usage: 10,
        period: "Jun 11, 2021 - Jul 10, 2021",
        payment: "Visa",
        activity: "5 minutes ago",
        avatar: "./assets/images/avatars/2.jpg",
        status: "danger",
        color: "info"
      },
      {
        name: "Quintin Ed",
        state: "New",
        registered: "Jan 1, 2021",
        country: "In",
        usage: 74,
        period: "Jun 11, 2021 - Jul 10, 2021",
        payment: "Stripe",
        activity: "1 hour ago",
        avatar: "./assets/images/avatars/3.jpg",
        status: "warning",
        color: "warning"
      },
      {
        name: "En\xE9as Kwadwo",
        state: "Sleep",
        registered: "Jan 1, 2021",
        country: "Fr",
        usage: 98,
        period: "Jun 11, 2021 - Jul 10, 2021",
        payment: "Paypal",
        activity: "Last month",
        avatar: "./assets/images/avatars/4.jpg",
        status: "secondary",
        color: "danger"
      },
      {
        name: "Agapetus Tade\xE1\u0161",
        state: "New",
        registered: "Jan 1, 2021",
        country: "Es",
        usage: 22,
        period: "Jun 11, 2021 - Jul 10, 2021",
        payment: "ApplePay",
        activity: "Last week",
        avatar: "./assets/images/avatars/5.jpg",
        status: "success",
        color: "primary"
      },
      {
        name: "Friderik D\xE1vid",
        state: "New",
        registered: "Jan 1, 2021",
        country: "Pl",
        usage: 43,
        period: "Jun 11, 2021 - Jul 10, 2021",
        payment: "Amex",
        activity: "Yesterday",
        avatar: "./assets/images/avatars/6.jpg",
        status: "info",
        color: "dark"
      }
    ];
    this.mainChartRef = signal(void 0);
    __privateSet(this, _mainChartRefEffect, effect(() => {
      if (this.mainChartRef()) {
        this.setChartStyles();
      }
    }));
    this.trafficRadioGroup = new FormGroup({
      trafficRadio: new FormControl("Month")
    });
  }
  ngOnInit() {
    this.updateChartOnColorModeChange();
  }
  setTrafficPeriod(value) {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
  }
  handleChartRef($chartRef) {
    if ($chartRef) {
      this.mainChartRef.set($chartRef);
    }
  }
  updateChartOnColorModeChange() {
    const unListen = __privateGet(this, _renderer).listen(__privateGet(this, _document).documentElement, "ColorSchemeChange", () => {
      this.setChartStyles();
    });
    __privateGet(this, _destroyRef).onDestroy(() => {
      unListen();
    });
  }
  setChartStyles() {
    if (this.mainChartRef()) {
      setTimeout(() => {
        this.mainChartRef().update();
      });
    }
  }
};
_destroyRef = new WeakMap();
_document = new WeakMap();
_renderer = new WeakMap();
_mainChartRefEffect = new WeakMap();
_DashboardComponent.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardComponent)();
};
_DashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 6, consts: [[1, "my-4"], ["sm", "5"], ["id", "traffic", 1, "card-title", "mb-0"], [1, "small", "text-body-secondary"], ["sm", "7", 1, "d-none", "d-md-block"], ["cButton", "", "color", "primary", "aria-label", "Download", 1, "float-end"], ["cIcon", "", "name", "cilCloudDownload"], [3, "formGroup"], ["role", "group", 1, "float-end", "me-3"], ["formControlName", "trafficRadio", "type", "radio", "value", "Day", "id", "dayRadio", 1, "btn-check"], ["cButton", "", "cFormCheckLabel", "", "color", "secondary", "variant", "outline", "for", "dayRadio", 3, "click"], ["formControlName", "trafficRadio", "type", "radio", "value", "Month", "id", "radioMonth", 1, "btn-check"], ["cButton", "", "cFormCheckLabel", "", "color", "secondary", "variant", "outline", "for", "radioMonth", 3, "click"], ["formControlName", "trafficRadio", "type", "radio", "value", "Year", "id", "radioYear", 1, "btn-check"], ["cButton", "", "cFormCheckLabel", "", "color", "secondary", "variant", "outline", "for", "radioYear", 3, "click"], [1, "text-center", "mb-2", 3, "xl", "lg", "sm", "xs", "gutter"], [1, "text-body-secondary"], ["thin", "", "color", "success", "value", "40", "aria-label", "User visits", 1, "mt-2"], [1, "fw-semibold", "text-truncate"], ["thin", "", "color", "info", "value", "20", "aria-label", "Unique users", 1, "mt-2"], ["thin", "", "color", "warning", "value", "60", "aria-label", "Page views", 1, "mt-2"], ["thin", "", "color", "danger", "value", "80", "aria-label", "New users", 1, "mt-2"], [1, "d-none", "d-xl-block"], ["thin", "", "value", "40", "aria-label", "Bounce rate", 1, "mt-2"]], template: function DashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-card", 0)(1, "c-card-body")(2, "c-row")(3, "c-col", 1)(4, "h4", 2);
    \u0275\u0275text(5, "Traffic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 3);
    \u0275\u0275text(7, "January - December 2023");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "c-col", 4)(9, "button", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(10, "svg", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "form", 7)(12, "c-button-group", 8);
    \u0275\u0275element(13, "input", 9);
    \u0275\u0275elementStart(14, "label", 10);
    \u0275\u0275listener("click", function DashboardComponent_Template_label_click_14_listener() {
      return ctx.setTrafficPeriod("Day");
    });
    \u0275\u0275text(15, " Day ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 11);
    \u0275\u0275elementStart(17, "label", 12);
    \u0275\u0275listener("click", function DashboardComponent_Template_label_click_17_listener() {
      return ctx.setTrafficPeriod("Month");
    });
    \u0275\u0275text(18, " Month ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 13);
    \u0275\u0275elementStart(20, "label", 14);
    \u0275\u0275listener("click", function DashboardComponent_Template_label_click_20_listener() {
      return ctx.setTrafficPeriod("Year");
    });
    \u0275\u0275text(21, " Year ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(22, "c-card-footer")(23, "c-row", 15)(24, "c-col")(25, "div", 16);
    \u0275\u0275text(26, "Visits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28, "29.703 Users (40%)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "c-progress", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "c-col")(31, "div", 16);
    \u0275\u0275text(32, "Unique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 18);
    \u0275\u0275text(34, "24.093 Users (20%)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "c-progress", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "c-col")(37, "div", 16);
    \u0275\u0275text(38, "Page views");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 18);
    \u0275\u0275text(40, "78.706 Views (60%)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "c-progress", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "c-col")(43, "div", 16);
    \u0275\u0275text(44, "New Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 18);
    \u0275\u0275text(46, "22.123 Users (80%)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "c-progress", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "c-col", 22)(49, "div", 16);
    \u0275\u0275text(50, "Bounce Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 18);
    \u0275\u0275text(52, "Average Rate (40.15%)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "c-progress", 23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx.trafficRadioGroup);
    \u0275\u0275advance(12);
    \u0275\u0275property("xl", 5)("lg", 4)("sm", 2)("xs", 1)("gutter", 4);
  }
}, dependencies: [CardComponent, CardBodyComponent, RowComponent, ColComponent, ButtonDirective, IconDirective, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ButtonGroupComponent, FormCheckLabelDirective, CardFooterComponent, GutterDirective, ProgressComponent] });
var DashboardComponent = _DashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\views\\dashboard\\dashboard.component.ts", lineNumber: 50 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=dashboard.component-6J7T2SBO.mjs.map
