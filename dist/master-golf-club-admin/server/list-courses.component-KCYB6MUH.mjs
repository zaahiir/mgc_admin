import './polyfills.server.mjs';
import {
  CourseService
} from "./chunk-672NKZHA.mjs";
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
  FormDirective,
  FormsModule,
  IconDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  PageItemComponent,
  PageLinkDirective,
  PaginationComponent,
  ReactiveFormsModule,
  RowComponent,
  TableDirective,
  TooltipDirective,
  ɵNgNoValidate
} from "./chunk-KHKHR2VG.mjs";
import {
  CommonModule,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-J4TCKMJW.mjs";
import {
  __async
} from "./chunk-CKH4O4N6.mjs";

// src/app/views/courses/list-courses/list-courses.component.ts
var _c0 = () => ["/courses/add"];
var _c1 = (a0) => ["/courses/update", a0];
function ListCoursesComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "\n          ");
    \u0275\u0275elementStart(2, "div", 12);
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "span", 13);
    \u0275\u0275text(5, "Loading...");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementEnd();
  }
}
function ListCoursesComponent_table_22_tr_34_a_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r2.getCourseWebsite(course_r2), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                  ", ctx_r2.getCourseWebsite(course_r2), "\n                ");
  }
}
function ListCoursesComponent_table_22_tr_34_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "N/A");
    \u0275\u0275elementEnd();
  }
}
function ListCoursesComponent_table_22_tr_34_Template(rf, ctx) {
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
    \u0275\u0275template(16, ListCoursesComponent_table_22_tr_34_a_16_Template, 2, 2, "a", 17);
    \u0275\u0275text(17, "\n                ");
    \u0275\u0275template(18, ListCoursesComponent_table_22_tr_34_span_18_Template, 2, 0, "span", 18);
    \u0275\u0275text(19, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n              ");
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n              ");
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25, "\n                ");
    \u0275\u0275elementStart(26, "span", 19);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\n              ");
    \u0275\u0275elementStart(30, "td");
    \u0275\u0275text(31, "\n                ");
    \u0275\u0275elementStart(32, "a", 20);
    \u0275\u0275text(33, "\n                  ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(34, "svg", 21);
    \u0275\u0275text(35, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, "\n                ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(37, "a", 22);
    \u0275\u0275listener("click", function ListCoursesComponent_table_22_tr_34_Template_a_click_37_listener() {
      const course_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteCourse(course_r2.id));
    });
    \u0275\u0275text(38, "\n                  ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(39, "svg", 23);
    \u0275\u0275text(40, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r2.currentPage - 1) * ctx_r2.itemsPerPage + i_r4 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getCourseName(course_r2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getTownFromAddress(course_r2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getCoursePhone(course_r2));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.getCourseWebsite(course_r2) !== "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.getCourseWebsite(course_r2) === "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getCourseTiming(course_r2));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getTeeInfo(course_r2));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c1, course_r2.id))("cTooltip", ctx_r2.tooltipEditText);
    \u0275\u0275advance(2);
    \u0275\u0275property("cIcon", ctx_r2.icons.cilPen);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.isLoading)("cTooltip", ctx_r2.tooltipDeleteText);
    \u0275\u0275advance(2);
    \u0275\u0275property("cIcon", ctx_r2.icons.cilTrash);
  }
}
function ListCoursesComponent_table_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 14);
    \u0275\u0275text(1, "\n          ");
    \u0275\u0275elementStart(2, "thead");
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "tr");
    \u0275\u0275text(5, "\n              ");
    \u0275\u0275elementStart(6, "th", 15);
    \u0275\u0275text(7, "S.No");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n              ");
    \u0275\u0275elementStart(9, "th", 15);
    \u0275\u0275text(10, "Course Name");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n              ");
    \u0275\u0275elementStart(12, "th", 15);
    \u0275\u0275text(13, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n              ");
    \u0275\u0275elementStart(15, "th", 15);
    \u0275\u0275text(16, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n              ");
    \u0275\u0275elementStart(18, "th", 15);
    \u0275\u0275text(19, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n              ");
    \u0275\u0275elementStart(21, "th", 15);
    \u0275\u0275text(22, "Timing");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n              ");
    \u0275\u0275elementStart(24, "th", 15);
    \u0275\u0275text(25, "Tees");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\n              ");
    \u0275\u0275elementStart(27, "th", 15);
    \u0275\u0275text(28, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, "\n          ");
    \u0275\u0275elementStart(32, "tbody");
    \u0275\u0275text(33, "\n            ");
    \u0275\u0275template(34, ListCoursesComponent_table_22_tr_34_Template, 43, 16, "tr", 16);
    \u0275\u0275text(35, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("hover", true)("striped", true)("bordered", true);
    \u0275\u0275advance(34);
    \u0275\u0275property("ngForOf", ctx_r2.paginatedCourseList);
  }
}
function ListCoursesComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, "\n          ");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No courses found.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n        ");
    \u0275\u0275elementEnd();
  }
}
function ListCoursesComponent_c_pagination_26_c_page_item_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-page-item", 30);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "a", 28);
    \u0275\u0275listener("click", function ListCoursesComponent_c_pagination_26_c_page_item_8_Template_a_click_2_listener() {
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
    \u0275\u0275property("active", ctx_r2.currentPage === page_r7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(page_r7);
  }
}
function ListCoursesComponent_c_pagination_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-pagination", 26);
    \u0275\u0275text(1, "\n          ");
    \u0275\u0275elementStart(2, "c-page-item", 27);
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "a", 28);
    \u0275\u0275listener("click", function ListCoursesComponent_c_pagination_26_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previousPage());
    });
    \u0275\u0275text(5, "Previous");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n          ");
    \u0275\u0275template(8, ListCoursesComponent_c_pagination_26_c_page_item_8_Template, 5, 2, "c-page-item", 29);
    \u0275\u0275text(9, "\n          ");
    \u0275\u0275elementStart(10, "c-page-item", 27);
    \u0275\u0275text(11, "\n            ");
    \u0275\u0275elementStart(12, "a", 28);
    \u0275\u0275listener("click", function ListCoursesComponent_c_pagination_26_Template_a_click_12_listener() {
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
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.pageRange);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-disabled", ctx_r2.currentPage === ctx_r2.totalPages);
  }
}
var _ListCoursesComponent = class _ListCoursesComponent {
  constructor(courseService) {
    this.courseService = courseService;
    this.icons = { cilPen, cilTrash };
    this.tooltipEditText = "Edit";
    this.tooltipDeleteText = "Delete";
    this.courseList = [];
    this.pageRange = [];
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.isLoading = false;
    this.searchTerm = "";
  }
  ngOnInit() {
    this.loadCourseList();
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
  loadCourseList() {
    return __async(this, null, function* () {
      if (this.isLoading)
        return;
      this.isLoading = true;
      try {
        const response = yield this.courseService.listCourse("0");
        if (response.data.code === 1) {
          this.courseList = response.data.data;
          this.updatePageRange();
        } else {
          yield Swal.fire("Error", "Failed to load Course list", "error");
        }
      } catch (error) {
        console.error("Error loading Course list:", error);
        yield Swal.fire("Error", "An error occurred while loading the Course list", "error");
      } finally {
        this.isLoading = false;
      }
    });
  }
  search() {
    this.currentPage = 1;
    this.updatePageRange();
  }
  // Helper methods to safely get field values
  getCourseName(course) {
    return course.name || course.courseName || "N/A";
  }
  getCourseAddress(course) {
    return course.address || course.courseAddress || "N/A";
  }
  getCoursePhone(course) {
    return course.phone || course.coursePhoneNumber || "N/A";
  }
  getCourseWebsite(course) {
    return course.website || course.courseWebsite || "N/A";
  }
  getCourseLocation(course) {
    return course.location || course.courseLocation || "N/A";
  }
  getCourseTiming(course) {
    return course.timing || course.courseOpenFrom || "N/A";
  }
  // Get tee information for display
  getTeeInfo(course) {
    if (course.tees && course.tees.length > 0) {
      const teeCount = course.tees.length;
      const holeTypes = course.tees.map((tee) => `${tee.holeNumber}H`).join(", ");
      return `${teeCount} tee${teeCount > 1 ? "s" : ""} (${holeTypes})`;
    }
    return "No tees";
  }
  // Extract town from address (first part before comma)
  getTownFromAddress(course) {
    const address = this.getCourseAddress(course);
    if (address && address !== "N/A") {
      const parts = address.split(",");
      return parts[0].trim();
    }
    return "N/A";
  }
  get paginatedCourseList() {
    let filtered = this.courseList;
    if (this.searchTerm) {
      const searchTermLower = this.searchTerm.toLowerCase();
      filtered = this.courseList.filter((course) => this.getCourseName(course).toLowerCase().includes(searchTermLower) || this.getTownFromAddress(course).toLowerCase().includes(searchTermLower) || this.getCoursePhone(course).toLowerCase().includes(searchTermLower) || this.getCourseWebsite(course).toLowerCase().includes(searchTermLower) || this.getCourseLocation(course).toLowerCase().includes(searchTermLower) || this.getTeeInfo(course).toLowerCase().includes(searchTermLower));
    }
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return filtered.slice(startIndex, startIndex + this.itemsPerPage);
  }
  get totalPages() {
    const filteredLength = this.searchTerm ? this.courseList.filter((course) => this.getCourseName(course).toLowerCase().includes(this.searchTerm.toLowerCase()) || this.getTownFromAddress(course).toLowerCase().includes(this.searchTerm.toLowerCase()) || this.getCoursePhone(course).toLowerCase().includes(this.searchTerm.toLowerCase()) || this.getCourseWebsite(course).toLowerCase().includes(this.searchTerm.toLowerCase()) || this.getCourseLocation(course).toLowerCase().includes(this.searchTerm.toLowerCase()) || this.getTeeInfo(course).toLowerCase().includes(this.searchTerm.toLowerCase())).length : this.courseList.length;
    return Math.ceil(filteredLength / this.itemsPerPage);
  }
  deleteCourse(id) {
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
          const response = yield this.courseService.deleteCourse(id.toString());
          if (response.data.code === 1) {
            this.courseList = this.courseList.filter((course) => course.id !== id);
            yield Swal.fire("Deleted!", "Course has been deleted.", "success");
            yield this.loadCourseList();
          } else {
            yield Swal.fire("Error", "Failed to delete Course", "error");
          }
        } catch (error) {
          console.error("Error deleting Course:", error);
          yield Swal.fire("Error", "An error occurred while deleting the Course", "error");
        } finally {
          this.isLoading = false;
        }
      }
    });
  }
};
_ListCoursesComponent.\u0275fac = function ListCoursesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListCoursesComponent)(\u0275\u0275directiveInject(CourseService));
};
_ListCoursesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListCoursesComponent, selectors: [["app-list-courses"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 7, consts: [["xs", "12"], [1, "mb-4"], ["cForm", "", 1, "row", "g-3"], [1, "col-auto"], ["cButton", "", "color", "primary", "role", "button", 3, "routerLink"], ["md", "3", 1, "mb-4", "flex", "justify-content-md-end"], ["cFormControl", "", "id", "searchInput", "type", "search", "placeholder", "Search courses...", 3, "input", "ngModelChange", "ngModel"], ["class", "text-center py-4", 4, "ngIf"], ["cTable", "", 3, "hover", "striped", "bordered", 4, "ngIf"], ["class", "text-center py-4 text-muted", 4, "ngIf"], ["aria-label", "Page navigation", "class", "mt-3", 4, "ngIf"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["cTable", "", 3, "hover", "striped", "bordered"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", 4, "ngIf"], [4, "ngIf"], [1, "badge", "bg-info"], ["cButton", "", "color", "btn-transparent", "role", "button", "cTooltipPlacement", "top", 1, "btn-sm", "text-primary", "border-0", "py-0", "me-2", 3, "routerLink", "cTooltip"], ["size", "xl", "title", "Edit", 3, "cIcon"], ["cButton", "", "color", "btn-transparent", "role", "button", "cTooltipPlacement", "top", 1, "btn-sm", "text-danger", "border-0", "py-0", 3, "click", "disabled", "cTooltip"], ["width", "25", "title", "Delete", 3, "cIcon"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "text-center", "py-4", "text-muted"], ["aria-label", "Page navigation", 1, "mt-3"], [3, "disabled"], ["cPageLink", "", 3, "click"], [3, "active", 4, "ngFor", "ngForOf"], [3, "active"]], template: function ListCoursesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-col", 0)(1, "c-card", 1)(2, "c-card-body")(3, "form", 2)(4, "div", 3)(5, "a", 4);
    \u0275\u0275text(6, "Create New Course");
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
    \u0275\u0275listener("input", function ListCoursesComponent_Template_input_input_17_listener() {
      return ctx.search();
    });
    \u0275\u0275twoWayListener("ngModelChange", function ListCoursesComponent_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n\n        ");
    \u0275\u0275template(20, ListCoursesComponent_div_20_Template, 8, 0, "div", 7);
    \u0275\u0275text(21, "\n\n        ");
    \u0275\u0275template(22, ListCoursesComponent_table_22_Template, 37, 4, "table", 8);
    \u0275\u0275text(23, "\n\n        ");
    \u0275\u0275template(24, ListCoursesComponent_div_24_Template, 5, 0, "div", 9);
    \u0275\u0275text(25, "\n\n        ");
    \u0275\u0275template(26, ListCoursesComponent_c_pagination_26_Template, 16, 5, "c-pagination", 10);
    \u0275\u0275text(27, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.paginatedCourseList.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.courseList.length > ctx.itemsPerPage);
  }
}, dependencies: [
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
var ListCoursesComponent = _ListCoursesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListCoursesComponent, { className: "ListCoursesComponent", filePath: "src\\app\\views\\courses\\list-courses\\list-courses.component.ts", lineNumber: 47 });
})();
export {
  ListCoursesComponent
};
//# sourceMappingURL=list-courses.component-KCYB6MUH.mjs.map
