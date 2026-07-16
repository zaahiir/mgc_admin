import './polyfills.server.mjs';
import {
  MemberEnquiryService
} from "./chunk-VHZUDTQY.mjs";
import {
  Swal
} from "./chunk-LUM3LCUE.mjs";
import {
  cilPen,
  cilTrash
} from "./chunk-3IVUJFLD.mjs";
import "./chunk-KMHHOWHO.mjs";
import "./chunk-R72VMWDM.mjs";
import "./chunk-HYNU6U63.mjs";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  DefaultValueAccessor,
  FormControlDirective,
  FormsModule,
  IconDirective,
  NgControlStatus,
  NgModel,
  PageItemComponent,
  PageLinkDirective,
  PaginationComponent,
  RowComponent,
  TableDirective,
  TooltipDirective
} from "./chunk-KHKHR2VG.mjs";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  Router
} from "./chunk-7RJECGZ5.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-J4TCKMJW.mjs";
import {
  __async
} from "./chunk-CKH4O4N6.mjs";

// src/app/views/memberEnquiry/member-enquiry/member-enquiry.component.ts
var _c0 = (a0) => ({ "table-secondary": a0 });
var _c1 = (a0, a1) => ({ "bg-success": a0, "bg-warning": a1 });
var _c2 = (a0, a1) => ({ "text-primary": a0, "text-muted": a1 });
var _c3 = (a0) => ({ "disabled": a0 });
var _c4 = (a0) => ({ "active": a0 });
function MemberEnquiryComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 12);
    \u0275\u0275text(1, "\n              ");
    \u0275\u0275elementStart(2, "td");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n              ");
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n              ");
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n              ");
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n              ");
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n              ");
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n              ");
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22, "\n                ");
    \u0275\u0275elementStart(23, "span", 13);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\n              ");
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28, "\n                ");
    \u0275\u0275text(29, "\n                ");
    \u0275\u0275elementStart(30, "a", 14);
    \u0275\u0275listener("click", function MemberEnquiryComponent_tr_52_Template_a_click_30_listener() {
      const enquiry_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.convertToMember(enquiry_r2.id));
    });
    \u0275\u0275text(31, "\n                  ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(32, "svg", 15);
    \u0275\u0275text(33, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const enquiry_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(19, _c0, ctx_r2.isEnquiryConverted(enquiry_r2)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r2.currentPage - 1) * ctx_r2.itemsPerPage + i_r4 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 16, enquiry_r2.memberEnquiryDate, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getPlanName(enquiry_r2.memberEnquiryPlan));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", enquiry_r2.memberEnquiryFirstName, " ", enquiry_r2.memberEnquiryLastName, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(enquiry_r2.memberEnquiryPhoneNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(enquiry_r2.memberEnquiryEmail);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(21, _c1, ctx_r2.isEnquiryConverted(enquiry_r2), !ctx_r2.isEnquiryConverted(enquiry_r2)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                  ", ctx_r2.getStatusText(enquiry_r2), "\n                ");
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("cursor", ctx_r2.isEnquiryConverted(enquiry_r2) ? "not-allowed" : "pointer");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(24, _c2, !ctx_r2.isEnquiryConverted(enquiry_r2), ctx_r2.isEnquiryConverted(enquiry_r2)))("disabled", ctx_r2.isEnquiryConverted(enquiry_r2))("cTooltip", ctx_r2.isEnquiryConverted(enquiry_r2) ? ctx_r2.tooltipConvertedText : ctx_r2.tooltipEditText);
    \u0275\u0275advance(2);
    \u0275\u0275property("cIcon", ctx_r2.icons.cilPen);
  }
}
function MemberEnquiryComponent_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275text(1, "\n              ");
    \u0275\u0275elementStart(2, "td", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                ", ctx_r2.isLoading ? "Loading..." : "No enquiries found", "\n              ");
  }
}
function MemberEnquiryComponent_c_pagination_59_c_page_item_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-page-item");
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "a", 18);
    \u0275\u0275listener("click", function MemberEnquiryComponent_c_pagination_59_c_page_item_8_Template_a_click_2_listener() {
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
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c4, ctx_r2.currentPage === page_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", page_r7, "\n            ");
  }
}
function MemberEnquiryComponent_c_pagination_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-pagination", 17);
    \u0275\u0275text(1, "\n          ");
    \u0275\u0275elementStart(2, "c-page-item");
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "a", 18);
    \u0275\u0275listener("click", function MemberEnquiryComponent_c_pagination_59_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previousPage());
    });
    \u0275\u0275text(5, "\n              Previous\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n          ");
    \u0275\u0275template(8, MemberEnquiryComponent_c_pagination_59_c_page_item_8_Template, 5, 4, "c-page-item", 19);
    \u0275\u0275text(9, "\n          ");
    \u0275\u0275elementStart(10, "c-page-item");
    \u0275\u0275text(11, "\n            ");
    \u0275\u0275elementStart(12, "a", 18);
    \u0275\u0275listener("click", function MemberEnquiryComponent_c_pagination_59_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextPage());
    });
    \u0275\u0275text(13, "\n              Next\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c3, ctx_r2.currentPage === 1));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.pageRange);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c3, ctx_r2.currentPage === ctx_r2.totalPages));
  }
}
var _MemberEnquiryComponent = class _MemberEnquiryComponent {
  constructor(memberEnquiryService, router) {
    this.memberEnquiryService = memberEnquiryService;
    this.router = router;
    this.icons = { cilPen, cilTrash };
    this.tooltipEditText = "Convert to Member";
    this.tooltipDeleteText = "Delete";
    this.tooltipConvertedText = "Already Converted to Member";
    this.memberEnquiryList = [];
    this.filteredList = [];
    this.pageRange = [];
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.isLoading = false;
    this.searchTerm = "";
  }
  ngOnInit() {
    this.loadMemberEnquiryList();
  }
  getPlanName(plan) {
    if (!plan)
      return "N/A";
    if (typeof plan === "object" && plan.planName) {
      return plan.planName;
    }
    if (typeof plan === "string" || typeof plan === "number") {
      return plan.toString();
    }
    return "N/A";
  }
  loadMemberEnquiryList() {
    return __async(this, null, function* () {
      if (this.isLoading)
        return;
      this.isLoading = true;
      try {
        const response = yield this.memberEnquiryService.listMemberEnquiry("0");
        if (response.data.code === 1) {
          this.memberEnquiryList = response.data.data;
          this.filterList();
          this.updatePageRange();
        } else {
          yield Swal.fire("Error", "Failed to load member enquiry list", "error");
        }
      } catch (error) {
        yield Swal.fire("Error", "An error occurred while loading the list", "error");
      } finally {
        this.isLoading = false;
      }
    });
  }
  convertToMember(enquiryId) {
    const enquiry = this.memberEnquiryList.find((e) => e.id === enquiryId);
    if (enquiry?.isConverted) {
      Swal.fire("Info", "This enquiry has already been converted to a member.", "info");
      return;
    }
    this.router.navigate(["/members/add"], {
      queryParams: { enquiryId }
    });
  }
  // Method to check if an enquiry is converted
  isEnquiryConverted(enquiry) {
    return enquiry.isConverted === true;
  }
  // Method to get the status display text
  getStatusText(enquiry) {
    if (enquiry.isConverted) {
      return `Converted (${enquiry.convertedMemberId || "Member ID"})`;
    }
    return "Pending";
  }
  filterList() {
    if (!this.searchTerm) {
      this.filteredList = [...this.memberEnquiryList];
      return;
    }
    const searchTermLower = this.searchTerm.toLowerCase().trim();
    this.filteredList = this.memberEnquiryList.filter((enquiry) => {
      const fullName = `${enquiry.memberEnquiryFirstName || ""} ${enquiry.memberEnquiryLastName || ""}`.toLowerCase();
      const planName = this.getPlanName(enquiry.memberEnquiryPlan).toLowerCase();
      const status = this.getStatusText(enquiry).toLowerCase();
      const searchableFields = [
        planName,
        fullName,
        (enquiry.memberEnquiryPhoneNumber || "").toLowerCase(),
        (enquiry.memberEnquiryEmail || "").toLowerCase(),
        status
      ];
      return searchableFields.some((field) => field.includes(searchTermLower));
    });
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
  get paginatedMemberEnquiryList() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredList.slice(startIndex, startIndex + this.itemsPerPage);
  }
  get totalPages() {
    return Math.ceil(this.filteredList.length / this.itemsPerPage);
  }
  search() {
    this.filterList();
    this.currentPage = 1;
    this.updatePageRange();
  }
};
_MemberEnquiryComponent.\u0275fac = function MemberEnquiryComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MemberEnquiryComponent)(\u0275\u0275directiveInject(MemberEnquiryService), \u0275\u0275directiveInject(Router));
};
_MemberEnquiryComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MemberEnquiryComponent, selectors: [["app-member-enquiry"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 64, vars: 7, consts: [["xs", "12"], [1, "mb-4"], ["md", "3", 1, "mb-4"], [1, "position-relative"], ["cFormControl", "", "id", "searchInput", "type", "search", "placeholder", "Search Enquiries", "autocomplete", "off", 3, "ngModelChange", "input", "ngModel"], ["cTable", "", 1, "align-middle", 3, "hover", "striped", "bordered"], ["scope", "col", 2, "width", "70px"], ["scope", "col"], ["scope", "col", 2, "width", "120px"], [3, "ngClass", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["aria-label", "Member enquiry navigation", 4, "ngIf"], [3, "ngClass"], [1, "badge", 3, "ngClass"], ["cButton", "", "color", "btn-transparent", "cTooltipPlacement", "top", 1, "btn-sm", "border-0", "py-0", 3, "click", "ngClass", "disabled", "cTooltip"], ["size", "xl", 3, "cIcon"], ["colspan", "8", 1, "text-center", "py-4"], ["aria-label", "Member enquiry navigation"], ["cPageLink", "", 3, "click", "ngClass"], [4, "ngFor", "ngForOf"]], template: function MemberEnquiryComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row");
    \u0275\u0275text(1, "\n  ");
    \u0275\u0275elementStart(2, "c-col", 0);
    \u0275\u0275text(3, "\n    ");
    \u0275\u0275elementStart(4, "c-card", 1);
    \u0275\u0275text(5, "\n      ");
    \u0275\u0275elementStart(6, "c-card-body");
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275text(8, "\n        ");
    \u0275\u0275elementStart(9, "c-col", 2);
    \u0275\u0275text(10, "\n          ");
    \u0275\u0275elementStart(11, "div", 3);
    \u0275\u0275text(12, "\n            ");
    \u0275\u0275elementStart(13, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function MemberEnquiryComponent_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
      return $event;
    });
    \u0275\u0275listener("input", function MemberEnquiryComponent_Template_input_input_13_listener() {
      return ctx.search();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n\n        ");
    \u0275\u0275text(17, "\n        ");
    \u0275\u0275elementStart(18, "table", 5);
    \u0275\u0275text(19, "\n          ");
    \u0275\u0275elementStart(20, "thead");
    \u0275\u0275text(21, "\n            ");
    \u0275\u0275elementStart(22, "tr");
    \u0275\u0275text(23, "\n              ");
    \u0275\u0275elementStart(24, "th", 6);
    \u0275\u0275text(25, "S.No");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\n              ");
    \u0275\u0275elementStart(27, "th", 7);
    \u0275\u0275text(28, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\n              ");
    \u0275\u0275elementStart(30, "th", 7);
    \u0275\u0275text(31, "Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, "\n              ");
    \u0275\u0275elementStart(33, "th", 7);
    \u0275\u0275text(34, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, "\n              ");
    \u0275\u0275elementStart(36, "th", 7);
    \u0275\u0275text(37, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, "\n              ");
    \u0275\u0275elementStart(39, "th", 7);
    \u0275\u0275text(40, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, "\n              ");
    \u0275\u0275elementStart(42, "th", 7);
    \u0275\u0275text(43, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, "\n              ");
    \u0275\u0275elementStart(45, "th", 8);
    \u0275\u0275text(46, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, "\n          ");
    \u0275\u0275elementStart(50, "tbody");
    \u0275\u0275text(51, "\n            ");
    \u0275\u0275template(52, MemberEnquiryComponent_tr_52_Template, 36, 27, "tr", 9);
    \u0275\u0275text(53, "\n            ");
    \u0275\u0275template(54, MemberEnquiryComponent_tr_54_Template, 5, 1, "tr", 10);
    \u0275\u0275text(55, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, "\n\n        ");
    \u0275\u0275text(58, "\n        ");
    \u0275\u0275template(59, MemberEnquiryComponent_c_pagination_59_Template, 16, 7, "c-pagination", 11);
    \u0275\u0275text(60, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(62, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
    \u0275\u0275advance(5);
    \u0275\u0275property("hover", true)("striped", true)("bordered", true);
    \u0275\u0275advance(34);
    \u0275\u0275property("ngForOf", ctx.paginatedMemberEnquiryList);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.paginatedMemberEnquiryList.length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.memberEnquiryList.length > ctx.itemsPerPage);
  }
}, dependencies: [
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  DatePipe,
  TooltipDirective,
  IconDirective,
  RowComponent,
  ColComponent,
  CardComponent,
  CardBodyComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  FormControlDirective,
  ButtonDirective,
  TableDirective,
  PaginationComponent,
  PageItemComponent,
  PageLinkDirective
] });
var MemberEnquiryComponent = _MemberEnquiryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MemberEnquiryComponent, { className: "MemberEnquiryComponent", filePath: "src\\app\\views\\memberEnquiry\\member-enquiry\\member-enquiry.component.ts", lineNumber: 65 });
})();
export {
  MemberEnquiryComponent
};
//# sourceMappingURL=member-enquiry.component-YPJ4RVM4.mjs.map
