import './polyfills.server.mjs';
import {
  cilPen,
  cilTrash
} from "./chunk-MJFQPHHA.mjs";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-IPRNOZXQ.mjs";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  IconDirective,
  RowComponent,
  TableDirective,
  TooltipDirective
} from "./chunk-VUYBFT6U.mjs";
import {
  CommonModule,
  RouterLink
} from "./chunk-7RJECGZ5.mjs";
import {
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
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-J4TCKMJW.mjs";
import "./chunk-CKH4O4N6.mjs";

// src/app/views/tournament/list-tournament/list-tournament.component.ts
var _c0 = () => ["/tournament/add"];
var _c1 = () => ["/tournament/update"];
var _ListTournamentComponent = class _ListTournamentComponent {
  constructor() {
    this.icons = { cilPen, cilTrash };
    this.tooltipEditText = "Edit";
    this.tooltipDeleteText = "Delete";
    this.isLoading = false;
    this.searchTerm = "";
  }
  search() {
  }
};
_ListTournamentComponent.\u0275fac = function ListTournamentComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListTournamentComponent)();
};
_ListTournamentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListTournamentComponent, selectors: [["app-list-tournament"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 76, vars: 12, consts: [["xs", "12"], [1, "mb-4"], ["cForm", "", 1, "row", "g-3"], [1, "col-auto"], ["cButton", "", "color", "primary", "role", "button", 3, "routerLink"], ["md", "3", 1, "mb-4", "flex", "justify-content-md-end"], ["cFormControl", "", "id", "validationCustom09", "type", "search", "placeholder", "search", 3, "input", "ngModelChange", "ngModel"], ["cTable", "", 3, "hover", "striped", "bordered"], ["scope", "col"], ["cButton", "", "color", "btn-transparent", "role", "button", "cTooltipPlacement", "top", 1, "btn-sm", "text-primary", "border-0", "py-0", 3, "routerLink", "cTooltip"], ["size", "xl", "title", "List Icon", 3, "cIcon"], ["cButton", "", "color", "btn-transparent", "role", "button", "cTooltipPlacement", "top", 1, "btn-sm", "text-danger", "border-0", "py-0", 3, "cTooltip"], ["width", "25", "title", "List Icon", 3, "cIcon"]], template: function ListTournamentComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-col", 0)(1, "c-card", 1)(2, "c-card-body")(3, "form", 2)(4, "div", 3)(5, "a", 4);
    \u0275\u0275text(6, "Create New Tournament");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(7, "c-row");
    \u0275\u0275text(8, "\n    ");
    \u0275\u0275elementStart(9, "c-col", 0);
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementStart(11, "c-card", 1);
    \u0275\u0275text(12, "\n        ");
    \u0275\u0275elementStart(13, "c-card-body");
    \u0275\u0275text(14, "\n          ");
    \u0275\u0275elementStart(15, "c-col", 5);
    \u0275\u0275text(16, "\n          ");
    \u0275\u0275elementStart(17, "input", 6);
    \u0275\u0275listener("input", function ListTournamentComponent_Template_input_input_17_listener() {
      return ctx.search();
    });
    \u0275\u0275twoWayListener("ngModelChange", function ListTournamentComponent_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n          ");
    \u0275\u0275elementStart(20, "table", 7);
    \u0275\u0275text(21, "\n            ");
    \u0275\u0275elementStart(22, "thead");
    \u0275\u0275text(23, "\n            ");
    \u0275\u0275elementStart(24, "tr");
    \u0275\u0275text(25, "\n              ");
    \u0275\u0275elementStart(26, "th", 8);
    \u0275\u0275text(27, "S.No");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, "\n              ");
    \u0275\u0275elementStart(29, "th", 8);
    \u0275\u0275text(30, "Tournament Name");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, "\n              ");
    \u0275\u0275elementStart(32, "th", 8);
    \u0275\u0275text(33, "Tournament Date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, "\n              ");
    \u0275\u0275elementStart(35, "th", 8);
    \u0275\u0275text(36, "Tournament Time");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, "\n              ");
    \u0275\u0275elementStart(38, "th", 8);
    \u0275\u0275text(39, "Tournament Location");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, "\n              ");
    \u0275\u0275elementStart(41, "th", 8);
    \u0275\u0275text(42, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, "  \n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, "\n            ");
    \u0275\u0275elementStart(46, "tbody");
    \u0275\u0275text(47, "\n            ");
    \u0275\u0275elementStart(48, "tr");
    \u0275\u0275text(49, "\n              ");
    \u0275\u0275element(50, "td");
    \u0275\u0275text(51, "\n              ");
    \u0275\u0275element(52, "td");
    \u0275\u0275text(53, "\n              ");
    \u0275\u0275element(54, "td");
    \u0275\u0275text(55, "\n              ");
    \u0275\u0275element(56, "td");
    \u0275\u0275text(57, "\n              ");
    \u0275\u0275element(58, "td");
    \u0275\u0275text(59, "\n              ");
    \u0275\u0275elementStart(60, "td");
    \u0275\u0275text(61, "\n                ");
    \u0275\u0275elementStart(62, "a", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(63, "svg", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, "\n                ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(65, "a", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(66, "svg", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(69, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(70, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, "\n          ");
    \u0275\u0275text(72, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(74, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(75, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
    \u0275\u0275advance(3);
    \u0275\u0275property("hover", true)("striped", true)("bordered", true);
    \u0275\u0275advance(42);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c1))("cTooltip", ctx.tooltipEditText);
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx.icons.cilPen);
    \u0275\u0275advance(2);
    \u0275\u0275property("cTooltip", ctx.tooltipDeleteText);
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx.icons.cilTrash);
  }
}, dependencies: [CommonModule, TooltipDirective, IconDirective, RouterLink, RowComponent, ColComponent, CardComponent, CardBodyComponent, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormsModule, NgModel, NgForm, FormDirective, FormControlDirective, ButtonDirective, TableDirective] });
var ListTournamentComponent = _ListTournamentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListTournamentComponent, { className: "ListTournamentComponent", filePath: "src\\app\\views\\tournament\\list-tournament\\list-tournament.component.ts", lineNumber: 17 });
})();
export {
  ListTournamentComponent
};
//# sourceMappingURL=list-tournament.component-DPQDNJEQ.mjs.map
