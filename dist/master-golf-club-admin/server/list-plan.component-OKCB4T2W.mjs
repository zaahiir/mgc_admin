import './polyfills.server.mjs';
import {
  PlanService
} from "./chunk-WRN2RFTQ.mjs";
import {
  Swal
} from "./chunk-LUM3LCUE.mjs";
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
import "./chunk-KMHHOWHO.mjs";
import "./chunk-R72VMWDM.mjs";
import "./chunk-HYNU6U63.mjs";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  IconDirective,
  PageItemComponent,
  PageLinkDirective,
  PaginationComponent,
  RowComponent,
  TableDirective,
  TooltipDirective
} from "./chunk-VUYBFT6U.mjs";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  RouterLink
} from "./chunk-7RJECGZ5.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-J4TCKMJW.mjs";
import {
  __async
} from "./chunk-CKH4O4N6.mjs";

// src/app/views/plan/list-plan/list-plan.component.ts
var _c0 = () => ["/plan/add"];
var _c1 = (a0) => ["/plan/update", a0];
var _c2 = (a0) => ({ "active": a0 });
function ListPlanComponent_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275text(1, "\n              ");
    \u0275\u0275elementStart(2, "td");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n              ");
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n              ");
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n              ");
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n              ");
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15, "\n                ");
    \u0275\u0275elementStart(16, "a", 11);
    \u0275\u0275text(17, "\n                  ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(18, "svg", 12);
    \u0275\u0275text(19, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n                ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "a", 13);
    \u0275\u0275listener("click", function ListPlanComponent_tr_45_Template_a_click_21_listener() {
      const plan_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deletePlan(plan_r2.id));
    });
    \u0275\u0275text(22, "\n                  ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(23, "svg", 14);
    \u0275\u0275text(24, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r2.currentPage - 1) * ctx_r2.itemsPerPage + i_r4 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plan_r2.planName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plan_r2.planDuration);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plan_r2.planPrice);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c1, plan_r2.id))("cTooltip", ctx_r2.tooltipEditText);
    \u0275\u0275advance(2);
    \u0275\u0275property("cIcon", ctx_r2.icons.cilPen);
    \u0275\u0275advance(3);
    \u0275\u0275property("cTooltip", ctx_r2.tooltipDeleteText);
    \u0275\u0275advance(2);
    \u0275\u0275property("cIcon", ctx_r2.icons.cilTrash);
  }
}
function ListPlanComponent_c_pagination_49_c_page_item_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-page-item");
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "a", 17);
    \u0275\u0275listener("click", function ListPlanComponent_c_pagination_49_c_page_item_8_Template_a_click_2_listener() {
      const page_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changePage(page_r7));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n          ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c2, ctx_r2.currentPage === page_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(page_r7);
  }
}
function ListPlanComponent_c_pagination_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-pagination", 15);
    \u0275\u0275text(1, "\n          ");
    \u0275\u0275elementStart(2, "c-page-item");
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "a", 16);
    \u0275\u0275listener("click", function ListPlanComponent_c_pagination_49_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previousPage());
    });
    \u0275\u0275text(5, "Previous");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n          ");
    \u0275\u0275template(8, ListPlanComponent_c_pagination_49_c_page_item_8_Template, 5, 4, "c-page-item", 9);
    \u0275\u0275text(9, "\n          ");
    \u0275\u0275elementStart(10, "c-page-item");
    \u0275\u0275text(11, "\n            ");
    \u0275\u0275elementStart(12, "a", 16);
    \u0275\u0275listener("click", function ListPlanComponent_c_pagination_49_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextPage());
    });
    \u0275\u0275text(13, "Next");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.pageRange);
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-disabled", ctx_r2.currentPage === ctx_r2.totalPages);
  }
}
var _ListPlanComponent = class _ListPlanComponent {
  constructor(planService) {
    this.planService = planService;
    this.icons = { cilPen, cilTrash };
    this.tooltipEditText = "Edit";
    this.tooltipDeleteText = "Delete";
    this.planList = [];
    this.pageRange = [];
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.isLoading = false;
    this.searchTerm = "";
  }
  ngOnInit() {
    this.loadPlanList();
  }
  updatePageRange() {
    const totalPages = this.totalPages;
    let start = Math.max(1, this.currentPage - 1);
    let end = Math.min(totalPages, start + 2);
    if (end === totalPages) {
      start = Math.max(1, totalPages - 2);
    }
    this.pageRange = Array.from({ length: Math.min(3, totalPages) }, (_, i) => start + i);
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages && !this.isLoading) {
      this.currentPage = page;
      this.updatePageRange();
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages && !this.isLoading) {
      this.changePage(this.currentPage + 1);
    }
  }
  previousPage() {
    if (this.currentPage > 1 && !this.isLoading) {
      this.changePage(this.currentPage - 1);
    }
  }
  loadPlanList() {
    return __async(this, null, function* () {
      if (this.isLoading)
        return;
      this.isLoading = true;
      try {
        const response = yield this.planService.listPlan("0");
        if (response.data.code === 1) {
          this.planList = response.data.data;
          this.updatePageRange();
        } else {
          yield Swal.fire("Error", "Failed to load Plan list", "error");
        }
      } catch (error) {
        console.error("Error loading Plan list:", error);
        yield Swal.fire("Error", "An error occurred while loading the Plan list", "error");
      } finally {
        this.isLoading = false;
      }
    });
  }
  search() {
    this.currentPage = 1;
    this.updatePageRange();
  }
  get paginatedPlanList() {
    let filtered = this.planList;
    if (this.searchTerm) {
      const searchTermLower = this.searchTerm.toLowerCase();
      filtered = this.planList.filter((plan) => plan.planName.toLowerCase().includes(searchTermLower) || plan.planDuration.toString().includes(searchTermLower) || plan.planPrice.toString().includes(searchTermLower));
    }
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return filtered.slice(startIndex, startIndex + this.itemsPerPage);
  }
  get totalPages() {
    const filteredLength = this.searchTerm ? this.planList.filter((plan) => plan.planName.toLowerCase().includes(this.searchTerm.toLowerCase()) || plan.planDuration.toString().includes(this.searchTerm.toLowerCase()) || plan.planPrice.toString().includes(this.searchTerm.toLowerCase())).length : this.planList.length;
    return Math.ceil(filteredLength / this.itemsPerPage);
  }
  deletePlan(id) {
    return __async(this, null, function* () {
      if (this.isLoading)
        return;
      const result = yield Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });
      if (result.isConfirmed) {
        this.isLoading = true;
        try {
          const response = yield this.planService.deletePlan(id.toString());
          if (response.data.code === 1) {
            this.planList = this.planList.filter((plan) => plan.id !== id);
            yield Swal.fire("Deleted!", "Plan has been deleted.", "success");
            yield this.loadPlanList();
          } else {
            yield Swal.fire("Error", "Failed to delete Plan", "error");
          }
        } catch (error) {
          console.error("Error deleting Plan:", error);
          yield Swal.fire("Error", "An error occurred while deleting the Plan", "error");
        } finally {
          this.isLoading = false;
        }
      }
    });
  }
};
_ListPlanComponent.\u0275fac = function ListPlanComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListPlanComponent)(\u0275\u0275directiveInject(PlanService));
};
_ListPlanComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListPlanComponent, selectors: [["app-list-plan"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 8, consts: [["xs", "12"], [1, "mb-4"], ["cForm", "", 1, "row", "g-3"], [1, "col-auto"], ["cButton", "", "color", "primary", "role", "button", 3, "routerLink"], ["md", "3", 1, "mb-4", "flex", "justify-content-md-end"], ["cFormControl", "", "id", "validationCustom09", "type", "search", "placeholder", "search", 3, "input", "ngModelChange", "ngModel"], ["cTable", "", 3, "hover", "striped", "bordered"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["aria-label", "Page navigation example", 4, "ngIf"], ["cButton", "", "color", "btn-transparent", "role", "button", "cTooltipPlacement", "top", 1, "btn-sm", "text-primary", "border-0", "py-0", 3, "routerLink", "cTooltip"], ["size", "xl", "title", "List Icon", 3, "cIcon"], ["cButton", "", "color", "btn-transparent", "role", "button", "cTooltipPlacement", "top", 1, "btn-sm", "text-danger", "border-0", "py-0", 3, "click", "cTooltip"], ["width", "25", "title", "List Icon", 3, "cIcon"], ["aria-label", "Page navigation example"], ["cPageLink", "", 3, "click"], ["cPageLink", "", 3, "click", "ngClass"]], template: function ListPlanComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-col", 0)(1, "c-card", 1)(2, "c-card-body")(3, "form", 2)(4, "div", 3)(5, "a", 4);
    \u0275\u0275text(6, "Create New Plan");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(7, "c-row");
    \u0275\u0275text(8, "\n  ");
    \u0275\u0275elementStart(9, "c-col", 0);
    \u0275\u0275text(10, "\n    ");
    \u0275\u0275elementStart(11, "c-card", 1);
    \u0275\u0275text(12, "\n      ");
    \u0275\u0275elementStart(13, "c-card-body");
    \u0275\u0275text(14, "\n        ");
    \u0275\u0275elementStart(15, "c-col", 5);
    \u0275\u0275text(16, "\n          ");
    \u0275\u0275elementStart(17, "input", 6);
    \u0275\u0275listener("input", function ListPlanComponent_Template_input_input_17_listener() {
      return ctx.search();
    });
    \u0275\u0275twoWayListener("ngModelChange", function ListPlanComponent_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n        ");
    \u0275\u0275elementStart(20, "table", 7);
    \u0275\u0275text(21, "\n          ");
    \u0275\u0275elementStart(22, "thead");
    \u0275\u0275text(23, "\n            ");
    \u0275\u0275elementStart(24, "tr");
    \u0275\u0275text(25, "\n              ");
    \u0275\u0275elementStart(26, "th", 8);
    \u0275\u0275text(27, "S.No");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, "\n              ");
    \u0275\u0275elementStart(29, "th", 8);
    \u0275\u0275text(30, "Plan Name");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, "\n              ");
    \u0275\u0275elementStart(32, "th", 8);
    \u0275\u0275text(33, "Plan Duration (Years)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, "\n              ");
    \u0275\u0275elementStart(35, "th", 8);
    \u0275\u0275text(36, "Plan Price");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, "\n              ");
    \u0275\u0275elementStart(38, "th", 8);
    \u0275\u0275text(39, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, "\n          ");
    \u0275\u0275elementStart(43, "tbody");
    \u0275\u0275text(44, "\n            ");
    \u0275\u0275template(45, ListPlanComponent_tr_45_Template, 27, 11, "tr", 9);
    \u0275\u0275text(46, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, "\n        ");
    \u0275\u0275template(49, ListPlanComponent_c_pagination_49_Template, 16, 3, "c-pagination", 10);
    \u0275\u0275text(50, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
    \u0275\u0275advance(3);
    \u0275\u0275property("hover", true)("striped", true)("bordered", true);
    \u0275\u0275advance(25);
    \u0275\u0275property("ngForOf", ctx.paginatedPlanList);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.planList.length > ctx.itemsPerPage);
  }
}, dependencies: [
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  TooltipDirective,
  IconDirective,
  RouterLink,
  RowComponent,
  ColComponent,
  CardComponent,
  CardBodyComponent,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormsModule,
  NgModel,
  NgForm,
  FormDirective,
  FormControlDirective,
  ButtonDirective,
  TableDirective,
  PaginationComponent,
  PageItemComponent,
  PageLinkDirective
] });
var ListPlanComponent = _ListPlanComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListPlanComponent, { className: "ListPlanComponent", filePath: "src\\app\\views\\plan\\list-plan\\list-plan.component.ts", lineNumber: 33 });
})();
export {
  ListPlanComponent
};
//# sourceMappingURL=list-plan.component-OKCB4T2W.mjs.map
