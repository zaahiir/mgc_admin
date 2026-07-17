import {
  MemberService
} from "./chunk-KC7TMNWE.js";
import {
  require_sweetalert2_all
} from "./chunk-UDKX4ISR.js";
import {
  cilPen,
  cilTrash
} from "./chunk-3OTSM4RC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-EZZDAKGS.js";
import "./chunk-EXN3ACQE.js";
import "./chunk-AE67A222.js";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  CommonModule,
  FormControlDirective,
  FormDirective,
  IconDirective,
  NgClass,
  NgForOf,
  NgIf,
  PageItemComponent,
  PageLinkDirective,
  PaginationComponent,
  RouterLink,
  RowComponent,
  TableDirective,
  TooltipDirective
} from "./chunk-KEGAS2QG.js";
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
} from "./chunk-WDQ2E3IC.js";
import {
  __async,
  __toESM
} from "./chunk-ZDRA4OZL.js";

// src/app/views/members/list-members/list-members.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = () => ["/members/add"];
var _c1 = (a0) => ["/members/update", a0];
var _c2 = (a0) => ({ "active": a0 });
function ListMembersComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "\n          ");
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5, "Loading...");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementEnd();
  }
}
function ListMembersComponent_table_25_tr_28_Template(rf, ctx) {
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
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n              ");
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18, "\n                ");
    \u0275\u0275elementStart(19, "a", 17);
    \u0275\u0275text(20, "\n                  ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(21, "svg", 18);
    \u0275\u0275text(22, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n                ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "a", 19);
    \u0275\u0275listener("click", function ListMembersComponent_table_25_tr_28_Template_a_click_24_listener() {
      const member_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteMember(member_r2.id));
    });
    \u0275\u0275text(25, "\n                  ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(26, "svg", 20);
    \u0275\u0275text(27, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r2.currentPage - 1) * ctx_r2.itemsPerPage + i_r4 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r2.golfClubId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getFullName(member_r2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r2.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r2.phoneNumber);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c1, member_r2.id))("cTooltip", ctx_r2.tooltipEditText);
    \u0275\u0275advance(2);
    \u0275\u0275property("cIcon", ctx_r2.icons.cilPen);
    \u0275\u0275advance(3);
    \u0275\u0275property("cTooltip", ctx_r2.tooltipDeleteText);
    \u0275\u0275advance(2);
    \u0275\u0275property("cIcon", ctx_r2.icons.cilTrash);
  }
}
function ListMembersComponent_table_25_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275text(1, "\n              ");
    \u0275\u0275elementStart(2, "td", 21);
    \u0275\u0275text(3, "\n                No members found\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n            ");
    \u0275\u0275elementEnd();
  }
}
function ListMembersComponent_table_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 13);
    \u0275\u0275text(1, "\n          ");
    \u0275\u0275elementStart(2, "thead");
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "tr");
    \u0275\u0275text(5, "\n              ");
    \u0275\u0275elementStart(6, "th", 14);
    \u0275\u0275text(7, "S.No");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n              ");
    \u0275\u0275elementStart(9, "th", 14);
    \u0275\u0275text(10, "Member ID");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n              ");
    \u0275\u0275elementStart(12, "th", 14);
    \u0275\u0275text(13, "Member Name");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n              ");
    \u0275\u0275elementStart(15, "th", 14);
    \u0275\u0275text(16, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n              ");
    \u0275\u0275elementStart(18, "th", 14);
    \u0275\u0275text(19, "Mobile Number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n              ");
    \u0275\u0275elementStart(21, "th", 14);
    \u0275\u0275text(22, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, "\n          ");
    \u0275\u0275elementStart(26, "tbody");
    \u0275\u0275text(27, "\n            ");
    \u0275\u0275template(28, ListMembersComponent_table_25_tr_28_Template, 30, 12, "tr", 15);
    \u0275\u0275text(29, "\n            ");
    \u0275\u0275text(30, "\n            ");
    \u0275\u0275template(31, ListMembersComponent_table_25_tr_31_Template, 5, 0, "tr", 16);
    \u0275\u0275text(32, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("hover", true)("striped", true)("bordered", true);
    \u0275\u0275advance(28);
    \u0275\u0275property("ngForOf", ctx_r2.paginatedMembers);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.paginatedMembers.length === 0);
  }
}
function ListMembersComponent_c_pagination_28_c_page_item_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-page-item");
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "a", 24);
    \u0275\u0275listener("click", function ListMembersComponent_c_pagination_28_c_page_item_8_Template_a_click_2_listener() {
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
function ListMembersComponent_c_pagination_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-pagination", 22);
    \u0275\u0275text(1, "\n          ");
    \u0275\u0275elementStart(2, "c-page-item");
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "a", 23);
    \u0275\u0275listener("click", function ListMembersComponent_c_pagination_28_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previousPage());
    });
    \u0275\u0275text(5, "Previous");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n          ");
    \u0275\u0275template(8, ListMembersComponent_c_pagination_28_c_page_item_8_Template, 5, 4, "c-page-item", 15);
    \u0275\u0275text(9, "\n          ");
    \u0275\u0275elementStart(10, "c-page-item");
    \u0275\u0275text(11, "\n            ");
    \u0275\u0275elementStart(12, "a", 23);
    \u0275\u0275listener("click", function ListMembersComponent_c_pagination_28_Template_a_click_12_listener() {
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
var _ListMembersComponent = class _ListMembersComponent {
  constructor(memberService) {
    this.memberService = memberService;
    this.icons = { cilPen, cilTrash };
    this.tooltipEditText = "Edit";
    this.tooltipDeleteText = "Delete";
    this.isLoading = false;
    this.searchTerm = "";
    this.members = [];
    this.pageRange = [];
    this.currentPage = 1;
    this.itemsPerPage = 10;
  }
  ngOnInit() {
    this.loadMembers();
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
  loadMembers() {
    return __async(this, null, function* () {
      if (this.isLoading)
        return;
      try {
        this.isLoading = true;
        const response = yield this.memberService.listMember();
        if (response.data?.data) {
          this.members = response.data.data;
          this.updatePageRange();
        } else {
          throw new Error("Failed to load members");
        }
      } catch (error) {
        console.error("Error loading members:", error);
        yield import_sweetalert2.default.fire("Error", "Failed to load members", "error");
      } finally {
        this.isLoading = false;
      }
    });
  }
  search() {
    this.currentPage = 1;
    this.updatePageRange();
  }
  get paginatedMembers() {
    let filtered = this.members;
    if (this.searchTerm) {
      const searchTermLower = this.searchTerm.toLowerCase();
      filtered = this.members.filter((member) => member.golfClubId?.toLowerCase().includes(searchTermLower) || member.firstName?.toLowerCase().includes(searchTermLower) || member.lastName?.toLowerCase().includes(searchTermLower) || member.email?.toLowerCase().includes(searchTermLower) || member.phoneNumber?.includes(this.searchTerm));
    }
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return filtered.slice(startIndex, startIndex + this.itemsPerPage);
  }
  get totalPages() {
    const filteredLength = this.searchTerm ? this.members.filter((member) => member.golfClubId?.toLowerCase().includes(this.searchTerm.toLowerCase()) || member.firstName?.toLowerCase().includes(this.searchTerm.toLowerCase()) || member.lastName?.toLowerCase().includes(this.searchTerm.toLowerCase()) || member.email?.toLowerCase().includes(this.searchTerm.toLowerCase()) || member.phoneNumber?.includes(this.searchTerm)).length : this.members.length;
    return Math.ceil(filteredLength / this.itemsPerPage);
  }
  deleteMember(memberId) {
    return __async(this, null, function* () {
      if (this.isLoading)
        return;
      try {
        const result = yield import_sweetalert2.default.fire({
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
          const response = yield this.memberService.deleteMember(memberId.toString());
          if (response.data?.code === 1) {
            yield import_sweetalert2.default.fire("Deleted!", "Member has been deleted.", "success");
            yield this.loadMembers();
          } else {
            throw new Error(response.data?.message || "Failed to delete member");
          }
        }
      } catch (error) {
        console.error("Error deleting member:", error);
        yield import_sweetalert2.default.fire("Error", "Failed to delete member", "error");
      } finally {
        this.isLoading = false;
      }
    });
  }
  getFullName(member) {
    return `${member.firstName || ""} ${member.lastName || ""}`.trim();
  }
};
_ListMembersComponent.\u0275fac = function ListMembersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListMembersComponent)(\u0275\u0275directiveInject(MemberService));
};
_ListMembersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListMembersComponent, selectors: [["app-list-members"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 6, consts: [["xs", "12"], [1, "mb-4"], ["cForm", "", 1, "row", "g-3"], [1, "col-auto"], ["cButton", "", "color", "primary", "role", "button", 3, "routerLink"], ["md", "3", 1, "mb-4", "flex", "justify-content-md-end"], ["cFormControl", "", "id", "searchInput", "type", "search", "placeholder", "Search members...", 3, "input", "ngModelChange", "ngModel"], ["class", "text-center my-4", 4, "ngIf"], ["cTable", "", 3, "hover", "striped", "bordered", 4, "ngIf"], ["aria-label", "Page navigation", 4, "ngIf"], [1, "text-center", "my-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], ["cTable", "", 3, "hover", "striped", "bordered"], ["scope", "col"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["cButton", "", "color", "btn-transparent", "role", "button", "cTooltipPlacement", "top", 1, "btn-sm", "text-primary", "border-0", "py-0", 3, "routerLink", "cTooltip"], ["size", "xl", "title", "Edit", 3, "cIcon"], ["cButton", "", "color", "btn-transparent", "role", "button", "cTooltipPlacement", "top", 1, "btn-sm", "text-danger", "border-0", "py-0", 3, "click", "cTooltip"], ["width", "25", "title", "Delete", 3, "cIcon"], ["colspan", "6", 1, "text-center", "py-4"], ["aria-label", "Page navigation"], ["cPageLink", "", 3, "click"], ["cPageLink", "", 3, "click", "ngClass"]], template: function ListMembersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-col", 0)(1, "c-card", 1)(2, "c-card-body")(3, "form", 2)(4, "div", 3)(5, "a", 4);
    \u0275\u0275text(6, "Create New Members");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(7, "c-row");
    \u0275\u0275text(8, "\n  ");
    \u0275\u0275elementStart(9, "c-col", 0);
    \u0275\u0275text(10, "\n    ");
    \u0275\u0275elementStart(11, "c-card", 1);
    \u0275\u0275text(12, "\n      ");
    \u0275\u0275elementStart(13, "c-card-body");
    \u0275\u0275text(14, "\n        ");
    \u0275\u0275text(15, "\n        ");
    \u0275\u0275elementStart(16, "c-col", 5);
    \u0275\u0275text(17, "\n          ");
    \u0275\u0275elementStart(18, "input", 6);
    \u0275\u0275listener("input", function ListMembersComponent_Template_input_input_18_listener() {
      return ctx.search();
    });
    \u0275\u0275twoWayListener("ngModelChange", function ListMembersComponent_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n\n        ");
    \u0275\u0275text(21, "\n        ");
    \u0275\u0275template(22, ListMembersComponent_div_22_Template, 8, 0, "div", 7);
    \u0275\u0275text(23, "\n\n        ");
    \u0275\u0275text(24, "\n        ");
    \u0275\u0275template(25, ListMembersComponent_table_25_Template, 34, 5, "table", 8);
    \u0275\u0275text(26, "\n\n        ");
    \u0275\u0275text(27, "\n        ");
    \u0275\u0275template(28, ListMembersComponent_c_pagination_28_Template, 16, 3, "c-pagination", 9);
    \u0275\u0275text(29, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.members.length > ctx.itemsPerPage);
  }
}, dependencies: [
  NgClass,
  CommonModule,
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
var ListMembersComponent = _ListMembersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListMembersComponent, { className: "ListMembersComponent", filePath: "src\\app\\views\\members\\list-members\\list-members.component.ts", lineNumber: 68 });
})();
export {
  ListMembersComponent
};
//# sourceMappingURL=list-members.component-MAHZXUAQ.js.map
