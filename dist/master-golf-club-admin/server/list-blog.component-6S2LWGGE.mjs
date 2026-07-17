import './polyfills.server.mjs';
import {
  BlogService
} from "./chunk-RAXCRHVT.mjs";
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
  SpinnerComponent,
  TableDirective,
  TooltipDirective
} from "./chunk-VUYBFT6U.mjs";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  RouterLink
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
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

// src/app/views/blog/list-blog/list-blog.component.ts
var _c0 = () => ["/blog/add"];
var _c1 = (a0) => ["/blog/update", a0];
var _c2 = (a0) => ({ "disabled": a0 });
var _c3 = (a0) => ({ "active": a0 });
function ListBlogComponent_c_spinner_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-spinner", 16);
  }
}
function ListBlogComponent_tr_55_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, "\n                  ");
    \u0275\u0275elementStart(2, "a", 26);
    \u0275\u0275listener("click", function ListBlogComponent_tr_55_div_20_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const blog_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openImage(blog_r3.blogImage));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const blog_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                    ", ctx_r3.getImageName(blog_r3.blogImage), "\n                  ");
  }
}
function ListBlogComponent_tr_55_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "No Image");
    \u0275\u0275elementEnd();
  }
}
function ListBlogComponent_tr_55_Template(rf, ctx) {
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
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n              ");
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n              ");
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13, "\n                ");
    \u0275\u0275elementStart(14, "div", 17);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n              ");
    \u0275\u0275elementStart(18, "td", 18);
    \u0275\u0275text(19, "\n                ");
    \u0275\u0275template(20, ListBlogComponent_tr_55_div_20_Template, 5, 1, "div", 19);
    \u0275\u0275text(21, "\n                ");
    \u0275\u0275template(22, ListBlogComponent_tr_55_span_22_Template, 2, 0, "span", 20);
    \u0275\u0275text(23, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n              ");
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26, "\n                ");
    \u0275\u0275elementStart(27, "a", 21);
    \u0275\u0275text(28, "\n                  ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(29, "svg", 22);
    \u0275\u0275text(30, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, "\n                ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "a", 23);
    \u0275\u0275listener("click", function ListBlogComponent_tr_55_Template_a_click_32_listener() {
      const blog_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteBlog(blog_r3.id));
    });
    \u0275\u0275text(33, "\n                  ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(34, "svg", 24);
    \u0275\u0275text(35, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const blog_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r3.currentPage - 1) * ctx_r3.itemsPerPage + i_r5 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 11, blog_r3.blogDate, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(blog_r3.blogTitle);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n                  ", blog_r3.blogHighlight, "\n                ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", blog_r3.blogImage);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !blog_r3.blogImage);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c1, blog_r3.id))("cTooltip", ctx_r3.tooltipEditText);
    \u0275\u0275advance(2);
    \u0275\u0275property("cIcon", ctx_r3.icons.cilPen);
    \u0275\u0275advance(3);
    \u0275\u0275property("cTooltip", ctx_r3.tooltipDeleteText);
    \u0275\u0275advance(2);
    \u0275\u0275property("cIcon", ctx_r3.icons.cilTrash);
  }
}
function ListBlogComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275text(1, "\n              ");
    \u0275\u0275elementStart(2, "td", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                ", ctx_r3.isLoading ? "Loading..." : "No blogs found", "\n              ");
  }
}
function ListBlogComponent_c_pagination_62_c_page_item_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-page-item");
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "a", 30);
    \u0275\u0275listener("click", function ListBlogComponent_c_pagination_62_c_page_item_8_Template_a_click_2_listener() {
      const page_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.changePage(page_r8));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n          ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c3, ctx_r3.currentPage === page_r8));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", page_r8, "\n            ");
  }
}
function ListBlogComponent_c_pagination_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-pagination", 29);
    \u0275\u0275text(1, "\n          ");
    \u0275\u0275elementStart(2, "c-page-item");
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "a", 30);
    \u0275\u0275listener("click", function ListBlogComponent_c_pagination_62_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.previousPage());
    });
    \u0275\u0275text(5, "\n              Previous\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n          ");
    \u0275\u0275template(8, ListBlogComponent_c_pagination_62_c_page_item_8_Template, 5, 4, "c-page-item", 13);
    \u0275\u0275text(9, "\n          ");
    \u0275\u0275elementStart(10, "c-page-item");
    \u0275\u0275text(11, "\n            ");
    \u0275\u0275elementStart(12, "a", 30);
    \u0275\u0275listener("click", function ListBlogComponent_c_pagination_62_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.nextPage());
    });
    \u0275\u0275text(13, "\n              Next\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c2, ctx_r3.currentPage === 1));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.pageRange);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c2, ctx_r3.currentPage === ctx_r3.totalPages));
  }
}
var _ListBlogComponent = class _ListBlogComponent {
  constructor(blogService) {
    this.blogService = blogService;
    this.icons = { cilPen, cilTrash };
    this.tooltipEditText = "Edit";
    this.tooltipDeleteText = "Delete";
    this.blogList = [];
    this.pageRange = [];
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.isLoading = false;
    this.searchTerm = "";
  }
  ngOnInit() {
    this.loadBlogList();
  }
  getImageName(imageUrl) {
    if (!imageUrl)
      return "";
    try {
      const urlParts = imageUrl.split("/");
      const fileName = urlParts[urlParts.length - 1];
      return decodeURIComponent(fileName);
    } catch (error) {
      console.error("Error getting image name:", error);
      return "Unknown Image";
    }
  }
  loadBlogList() {
    return __async(this, null, function* () {
      if (this.isLoading)
        return;
      this.isLoading = true;
      try {
        const response = yield this.blogService.listBlog("0");
        if (response.data.code === 1) {
          this.blogList = response.data.data;
          this.updatePageRange();
        } else {
          yield Swal.fire("Error", "Failed to load blog list", "error");
        }
      } catch (error) {
        console.error("Error loading blog list:", error);
        yield Swal.fire("Error", "An error occurred while loading the blog list", "error");
      } finally {
        this.isLoading = false;
      }
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
  search() {
    this.currentPage = 1;
    this.updatePageRange();
  }
  openImage(imageUrl) {
    if (!imageUrl)
      return;
    const baseUrl = "https://mastergolfclub";
    const fullUrl = imageUrl.startsWith("http") ? imageUrl : `${baseUrl}${imageUrl}`;
    window.open(fullUrl, "_blank");
  }
  get paginatedBlogList() {
    let filtered = this.blogList;
    if (this.searchTerm) {
      const searchTermLower = this.searchTerm.toLowerCase();
      filtered = this.blogList.filter((blog) => blog.blogTitle.toLowerCase().includes(searchTermLower) || blog.blogDescription.toLowerCase().includes(searchTermLower) || blog.blogDate.toLowerCase().includes(searchTermLower));
    }
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return filtered.slice(startIndex, startIndex + this.itemsPerPage);
  }
  get totalPages() {
    const filteredLength = this.searchTerm ? this.blogList.filter((blog) => blog.blogTitle.toLowerCase().includes(this.searchTerm.toLowerCase()) || blog.blogDescription.toLowerCase().includes(this.searchTerm.toLowerCase()) || blog.blogDate.toLowerCase().includes(this.searchTerm.toLowerCase())).length : this.blogList.length;
    return Math.ceil(filteredLength / this.itemsPerPage);
  }
  deleteBlog(id) {
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
          const response = yield this.blogService.deleteBlog(id.toString());
          if (response.data.code === 1) {
            yield Swal.fire("Deleted!", "Blog has been deleted.", "success");
            yield this.loadBlogList();
          } else {
            yield Swal.fire("Error", "Failed to delete blog", "error");
          }
        } catch (error) {
          console.error("Error deleting blog:", error);
          yield Swal.fire("Error", "An error occurred while deleting the blog", "error");
        } finally {
          this.isLoading = false;
        }
      }
    });
  }
};
_ListBlogComponent.\u0275fac = function ListBlogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListBlogComponent)(\u0275\u0275directiveInject(BlogService));
};
_ListBlogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListBlogComponent, selectors: [["app-list-blog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 67, vars: 10, consts: [["xs", "12"], [1, "mb-4"], ["cForm", "", 1, "row", "g-3"], [1, "col-auto"], ["cButton", "", "color", "primary", "role", "button", 3, "routerLink"], ["md", "3", 1, "mb-4"], [1, "position-relative"], ["cFormControl", "", "id", "searchInput", "type", "search", "placeholder", "Search blogs...", 3, "ngModelChange", "input", "ngModel"], ["size", "sm", "class", "position-absolute end-0 top-50 translate-middle-y me-2", 4, "ngIf"], ["cTable", "", 1, "align-middle", 3, "hover", "striped", "bordered"], ["scope", "col", 2, "width", "70px"], ["scope", "col"], ["scope", "col", 2, "width", "120px"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["aria-label", "Blog navigation", 4, "ngIf"], ["size", "sm", 1, "position-absolute", "end-0", "top-50", "translate-middle-y", "me-2"], [2, "max-width", "300px", "white-space", "nowrap", "overflow", "hidden", "text-overflow", "ellipsis"], [2, "width", "200px"], ["class", "d-flex flex-column gap-2", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], ["cButton", "", "color", "btn-transparent", "cTooltipPlacement", "top", 1, "btn-sm", "text-primary", "border-0", "py-0", 3, "routerLink", "cTooltip"], ["size", "xl", 3, "cIcon"], ["cButton", "", "color", "btn-transparent", "cTooltipPlacement", "top", 1, "btn-sm", "text-danger", "border-0", "py-0", 3, "click", "cTooltip"], ["width", "25", 3, "cIcon"], [1, "d-flex", "flex-column", "gap-2"], ["href", "javascript:void(0)", 1, "text-primary", "text-decoration-none", 3, "click"], [1, "text-muted"], ["colspan", "6", 1, "text-center", "py-4"], ["aria-label", "Blog navigation"], ["cPageLink", "", 3, "click", "ngClass"]], template: function ListBlogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-col", 0)(1, "c-card", 1)(2, "c-card-body")(3, "form", 2)(4, "div", 3)(5, "a", 4);
    \u0275\u0275text(6, "Create New Blog");
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
    \u0275\u0275elementStart(18, "div", 6);
    \u0275\u0275text(19, "\n            ");
    \u0275\u0275elementStart(20, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function ListBlogComponent_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
      return $event;
    });
    \u0275\u0275listener("input", function ListBlogComponent_Template_input_input_20_listener() {
      return ctx.search();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n            ");
    \u0275\u0275template(22, ListBlogComponent_c_spinner_22_Template, 1, 0, "c-spinner", 8);
    \u0275\u0275text(23, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, "\n\n        ");
    \u0275\u0275text(26, "\n        ");
    \u0275\u0275elementStart(27, "table", 9);
    \u0275\u0275text(28, "\n          ");
    \u0275\u0275elementStart(29, "thead");
    \u0275\u0275text(30, "\n            ");
    \u0275\u0275elementStart(31, "tr");
    \u0275\u0275text(32, "\n              ");
    \u0275\u0275elementStart(33, "th", 10);
    \u0275\u0275text(34, "S.No");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, "\n              ");
    \u0275\u0275elementStart(36, "th", 11);
    \u0275\u0275text(37, "Blog Date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, "\n              ");
    \u0275\u0275elementStart(39, "th", 11);
    \u0275\u0275text(40, "Blog Title");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, "\n              ");
    \u0275\u0275elementStart(42, "th", 11);
    \u0275\u0275text(43, "Blog Highlight");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, "\n              ");
    \u0275\u0275elementStart(45, "th", 11);
    \u0275\u0275text(46, "Blog Image");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, "\n              ");
    \u0275\u0275elementStart(48, "th", 12);
    \u0275\u0275text(49, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, "\n          ");
    \u0275\u0275elementStart(53, "tbody");
    \u0275\u0275text(54, "\n            ");
    \u0275\u0275template(55, ListBlogComponent_tr_55_Template, 38, 16, "tr", 13);
    \u0275\u0275text(56, "\n            ");
    \u0275\u0275template(57, ListBlogComponent_tr_57_Template, 5, 1, "tr", 14);
    \u0275\u0275text(58, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, "\n\n        ");
    \u0275\u0275text(61, "\n        ");
    \u0275\u0275template(62, ListBlogComponent_c_pagination_62_Template, 16, 7, "c-pagination", 15);
    \u0275\u0275text(63, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(66, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance(5);
    \u0275\u0275property("hover", true)("striped", true)("bordered", true);
    \u0275\u0275advance(28);
    \u0275\u0275property("ngForOf", ctx.paginatedBlogList);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.paginatedBlogList.length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.blogList.length > ctx.itemsPerPage);
  }
}, dependencies: [
  NgClass,
  CommonModule,
  NgForOf,
  NgIf,
  DatePipe,
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
  PageLinkDirective,
  SpinnerComponent
] });
var ListBlogComponent = _ListBlogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListBlogComponent, { className: "ListBlogComponent", filePath: "src\\app\\views\\blog\\list-blog\\list-blog.component.ts", lineNumber: 71 });
})();
export {
  ListBlogComponent
};
//# sourceMappingURL=list-blog.component-6S2LWGGE.mjs.map
