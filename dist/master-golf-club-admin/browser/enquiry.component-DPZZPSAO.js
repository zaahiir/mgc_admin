import {
  require_sweetalert2_all
} from "./chunk-UDKX4ISR.js";
import {
  cilCheckCircle,
  cilClock,
  cilTrash
} from "./chunk-A7ELECVY.js";
import {
  axios_default
} from "./chunk-EXN3ACQE.js";
import {
  BaseAPIUrl,
  baseURLType
} from "./chunk-AE67A222.js";
import {
  CardBodyComponent,
  CardComponent,
  ColComponent,
  CommonModule,
  DatePipe,
  DefaultValueAccessor,
  FormControlDirective,
  FormsModule,
  NgClass,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  PageItemComponent,
  PageLinkDirective,
  PaginationComponent,
  TableDirective,
  TitleCasePipe,
  TooltipDirective
} from "./chunk-DWS3B4N5.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
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
} from "./chunk-WDQ2E3IC.js";
import {
  __async,
  __toESM
} from "./chunk-ZDRA4OZL.js";

// src/app/views/enquiry/enquiry/enquiry.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/app/views/common-service/enquiry/enquiry.service.ts
var _EnquiryService = class _EnquiryService {
  constructor() {
    this.apiUrl = new BaseAPIUrl().getUrl(baseURLType);
    this.lists = this.apiUrl + "contactEnquiry/0/listing/";
    this.processing = this.apiUrl + "contactEnquiry/0/processing/";
    this.deletion = this.apiUrl + "contactEnquiry/0/deletion/";
    this.toggleStatus = this.apiUrl + "contactEnquiry/0/toggle_status/";
  }
  listEnquiry(id = "0") {
    return axios_default.get(this.lists.replace("0", id));
  }
  processEnquiry(data, id = "0") {
    return axios_default.post(this.processing.replace("0", id), data);
  }
  deleteEnquiry(id) {
    return axios_default.get(this.deletion.replace("0", id));
  }
  // Updated method to toggle status
  toggleEnquiryStatus(id) {
    return axios_default.post(this.toggleStatus.replace("0", id), {});
  }
};
_EnquiryService.\u0275fac = function EnquiryService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EnquiryService)();
};
_EnquiryService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EnquiryService, factory: _EnquiryService.\u0275fac, providedIn: "root" });
var EnquiryService = _EnquiryService;

// src/app/views/enquiry/enquiry/enquiry.component.ts
var _c0 = (a0) => ({ "disabled": a0 });
var _c1 = (a0) => ({ "active": a0 });
function EnquiryComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 8);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "div", 9)(20, "input", 10);
    \u0275\u0275listener("change", function EnquiryComponent_tr_25_Template_input_change_20_listener() {
      const enquiry_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleStatus(enquiry_r2.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "label", 11);
    \u0275\u0275element(22, "span", 12)(23, "span", 13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const enquiry_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.currentPage - 1) * ctx_r2.itemsPerPage + i_r4 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(enquiry_r2.contactEnquiryFirstName + " " + enquiry_r2.contactEnquiryLastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(enquiry_r2.contactEnquiryPhoneNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(enquiry_r2.contactEnquiryEmail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(enquiry_r2.contactEnquiryMessage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 12, enquiry_r2.contactEnquiryDate, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", enquiry_r2.status === "completed" ? "status-completed" : "status-pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 15, enquiry_r2.status), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("id", "toggle-" + enquiry_r2.id)("checked", enquiry_r2.status === "completed");
    \u0275\u0275advance();
    \u0275\u0275property("for", "toggle-" + enquiry_r2.id)("cTooltip", "Toggle status: " + (enquiry_r2.status === "complete" ? "Mark as Complete" : "Reopen Enquiry"));
  }
}
function EnquiryComponent_c_pagination_26_c_page_item_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-page-item")(1, "a", 15);
    \u0275\u0275listener("click", function EnquiryComponent_c_pagination_26_c_page_item_4_Template_a_click_1_listener() {
      const page_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changePage(page_r7));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c1, ctx_r2.currentPage === page_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r7, " ");
  }
}
function EnquiryComponent_c_pagination_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-pagination", 14)(1, "c-page-item")(2, "a", 15);
    \u0275\u0275listener("click", function EnquiryComponent_c_pagination_26_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previousPage());
    });
    \u0275\u0275text(3, " Previous ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, EnquiryComponent_c_pagination_26_c_page_item_4_Template, 3, 4, "c-page-item", 6);
    \u0275\u0275elementStart(5, "c-page-item")(6, "a", 15);
    \u0275\u0275listener("click", function EnquiryComponent_c_pagination_26_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextPage());
    });
    \u0275\u0275text(7, " Next ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c0, ctx_r2.currentPage === 1));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.pageRange);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c0, ctx_r2.currentPage === ctx_r2.totalPages));
  }
}
var _EnquiryComponent = class _EnquiryComponent {
  constructor(enquiryService) {
    this.enquiryService = enquiryService;
    this.icons = {
      cilClock,
      cilCheckCircle,
      cilTrash
    };
    this.enquiryList = [];
    this.pageRange = [];
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.isLoading = false;
    this.searchTerm = "";
  }
  ngOnInit() {
    this.loadEnquiryList();
  }
  loadEnquiryList() {
    return __async(this, null, function* () {
      if (this.isLoading)
        return;
      this.isLoading = true;
      try {
        const response = yield this.enquiryService.listEnquiry("0");
        if (response.data.code === 1) {
          this.enquiryList = response.data.data;
          this.updatePageRange();
        } else {
          yield import_sweetalert2.default.fire("Error", "Failed to load enquiry list", "error");
        }
      } catch (error) {
        console.error("Error loading enquiry list:", error);
        yield import_sweetalert2.default.fire("Error", "An error occurred while loading the enquiry list", "error");
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
  get paginatedEnquiryList() {
    let filtered = this.enquiryList;
    if (this.searchTerm) {
      const searchTermLower = this.searchTerm.toLowerCase();
      filtered = this.enquiryList.filter((enquiry) => enquiry.contactEnquiryFirstName.toLowerCase().includes(searchTermLower) || enquiry.contactEnquiryLastName.toLowerCase().includes(searchTermLower) || enquiry.contactEnquiryEmail.toLowerCase().includes(searchTermLower) || enquiry.contactEnquiryPhoneNumber.toLowerCase().includes(searchTermLower) || enquiry.contactEnquiryMessage.toLowerCase().includes(searchTermLower));
    }
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return filtered.slice(startIndex, startIndex + this.itemsPerPage);
  }
  get totalPages() {
    const filteredLength = this.searchTerm ? this.enquiryList.filter((enquiry) => enquiry.contactEnquiryFirstName.toLowerCase().includes(this.searchTerm.toLowerCase()) || enquiry.contactEnquiryLastName.toLowerCase().includes(this.searchTerm.toLowerCase()) || enquiry.contactEnquiryEmail.toLowerCase().includes(this.searchTerm.toLowerCase()) || enquiry.contactEnquiryPhoneNumber.toLowerCase().includes(this.searchTerm.toLowerCase()) || enquiry.contactEnquiryMessage.toLowerCase().includes(this.searchTerm.toLowerCase())).length : this.enquiryList.length;
    return Math.ceil(filteredLength / this.itemsPerPage);
  }
  // Updated method to toggle status
  toggleStatus(enquiryId) {
    return __async(this, null, function* () {
      try {
        const response = yield this.enquiryService.toggleEnquiryStatus(enquiryId.toString());
        if (response.data.code === 1) {
          yield this.loadEnquiryList();
          yield import_sweetalert2.default.fire("Success", response.data.message, "success");
        } else {
          console.error("Failed to toggle status:", response.data.message);
          yield import_sweetalert2.default.fire("Error", "Failed to update status", "error");
        }
      } catch (error) {
        console.error("Error toggling status:", error);
        yield import_sweetalert2.default.fire("Error", "Error updating status", "error");
      }
    });
  }
  // Helper method to get the next status for display
  getNextStatus(currentStatus) {
    return currentStatus === "pending" ? "completed" : "pending";
  }
  // Helper method to get the appropriate icon
  getStatusIcon(currentStatus) {
    return currentStatus === "pending" ? this.icons.cilCheckCircle : this.icons.cilClock;
  }
  // Helper method to get button color
  getButtonColor(currentStatus) {
    return currentStatus === "pending" ? "success" : "warning";
  }
  // Optional: Method to filter enquiries by status
  filterByStatus(status) {
    if (status === "all") {
      this.currentPage = 1;
    } else {
      this.currentPage = 1;
    }
    this.updatePageRange();
  }
};
_EnquiryComponent.\u0275fac = function EnquiryComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EnquiryComponent)(\u0275\u0275directiveInject(EnquiryService));
};
_EnquiryComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnquiryComponent, selectors: [["app-enquiry"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 6, consts: [["xs", "12"], [1, "mb-4"], ["md", "3", 1, "mb-4", "flex", "justify-content-md-end"], ["cFormControl", "", "id", "searchInput", "type", "search", "placeholder", "Search Enquiries", 3, "input", "ngModelChange", "ngModel"], ["cTable", "", 3, "hover", "striped", "bordered"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["aria-label", "Enquiry navigation", 4, "ngIf"], [1, "status-badge", 3, "ngClass"], [1, "toggle-switch-container"], ["type", "checkbox", 1, "toggle-switch-input", 3, "change", "id", "checked"], ["cTooltipPlacement", "top", 1, "toggle-switch-label", 3, "for", "cTooltip"], [1, "toggle-switch-slider"], [1, "toggle-switch-text"], ["aria-label", "Enquiry navigation"], ["cPageLink", "", 3, "click", "ngClass"]], template: function EnquiryComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-col", 0)(1, "c-card", 1)(2, "c-card-body")(3, "c-col", 2)(4, "input", 3);
    \u0275\u0275listener("input", function EnquiryComponent_Template_input_input_4_listener() {
      return ctx.search();
    });
    \u0275\u0275twoWayListener("ngModelChange", function EnquiryComponent_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "table", 4)(6, "thead")(7, "tr")(8, "th", 5);
    \u0275\u0275text(9, "S.No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 5);
    \u0275\u0275text(11, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 5);
    \u0275\u0275text(13, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 5);
    \u0275\u0275text(15, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 5);
    \u0275\u0275text(17, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 5);
    \u0275\u0275text(19, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 5);
    \u0275\u0275text(21, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 5);
    \u0275\u0275text(23, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, EnquiryComponent_tr_25_Template, 24, 17, "tr", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, EnquiryComponent_c_pagination_26_Template, 8, 7, "c-pagination", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("hover", true)("striped", true)("bordered", true);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx.paginatedEnquiryList);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.enquiryList.length > ctx.itemsPerPage);
  }
}, dependencies: [
  NgClass,
  CommonModule,
  NgForOf,
  NgIf,
  TitleCasePipe,
  DatePipe,
  TooltipDirective,
  ColComponent,
  CardComponent,
  CardBodyComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  FormControlDirective,
  TableDirective,
  PaginationComponent,
  PageItemComponent,
  PageLinkDirective
], styles: ['\n\n.toggle-switch-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.toggle-switch-input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-switch-label[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 120px;\n  height: 40px;\n  border-radius: 25px;\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  margin: 0;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border: 1px solid;\n}\n.toggle-switch-label[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);\n}\n.toggle-switch-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  width: 32px;\n  height: 32px;\n  background: white;\n  border-radius: 50%;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);\n  z-index: 3;\n}\n.toggle-switch-slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.toggle-switch-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 12px;\n  font-weight: 700;\n  color: white;\n  z-index: 2;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  letter-spacing: 0.5px;\n}\n.toggle-switch-input[_ngcontent-%COMP%]:not(:checked)    + .toggle-switch-label[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-color: #667eea;\n}\n.toggle-switch-input[_ngcontent-%COMP%]:not(:checked)    + .toggle-switch-label[_ngcontent-%COMP%]   .toggle-switch-slider[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      135deg,\n      #5a6fd8 0%,\n      #6a4190 100%);\n}\n.toggle-switch-input[_ngcontent-%COMP%]:not(:checked)    + .toggle-switch-label[_ngcontent-%COMP%]   .toggle-switch-text[_ngcontent-%COMP%] {\n  right: 15px;\n}\n.toggle-switch-input[_ngcontent-%COMP%]:not(:checked)    + .toggle-switch-label[_ngcontent-%COMP%]   .toggle-switch-text[_ngcontent-%COMP%]::after {\n  content: "Complete";\n}\n.toggle-switch-input[_ngcontent-%COMP%]:not(:checked)    + .toggle-switch-label[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #5a6fd8 0%,\n      #6a4190 100%);\n}\n.toggle-switch-input[_ngcontent-%COMP%]:checked    + .toggle-switch-label[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7F7FD3 0%,\n      #91A7FF 100%);\n  border-color: #7F7FD3;\n}\n.toggle-switch-input[_ngcontent-%COMP%]:checked    + .toggle-switch-label[_ngcontent-%COMP%]   .toggle-switch-slider[_ngcontent-%COMP%] {\n  left: 84px;\n}\n.toggle-switch-input[_ngcontent-%COMP%]:checked    + .toggle-switch-label[_ngcontent-%COMP%]   .toggle-switch-slider[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      135deg,\n      #7575CC 0%,\n      #8699FF 100%);\n}\n.toggle-switch-input[_ngcontent-%COMP%]:checked    + .toggle-switch-label[_ngcontent-%COMP%]   .toggle-switch-text[_ngcontent-%COMP%] {\n  left: 15px;\n}\n.toggle-switch-input[_ngcontent-%COMP%]:checked    + .toggle-switch-label[_ngcontent-%COMP%]   .toggle-switch-text[_ngcontent-%COMP%]::after {\n  content: "Reopen";\n}\n.toggle-switch-input[_ngcontent-%COMP%]:checked    + .toggle-switch-label[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #7575CC 0%,\n      #8699FF 100%);\n}\n.toggle-switch-input[_ngcontent-%COMP%]:focus    + .toggle-switch-label[_ngcontent-%COMP%] {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);\n}\n.toggle-switch-input[_ngcontent-%COMP%]:active    + .toggle-switch-label[_ngcontent-%COMP%]   .toggle-switch-slider[_ngcontent-%COMP%] {\n  transform: scale(0.95);\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  text-transform: capitalize;\n  display: inline-block;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.status-badge[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.3);\n  transition: left 0.4s ease;\n}\n.status-badge[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fff3cd 0%,\n      #ffeaa7 100%);\n  color: #856404;\n  border: 1px solid #ffeaa7;\n}\n.status-pending[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(255, 234, 167, 0.4);\n}\n.status-completed[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d4edda 0%,\n      #c3e6cb 100%);\n  color: #155724;\n  border: 1px solid #00b894;\n}\n.status-completed[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0, 184, 148, 0.4);\n}\n/*# sourceMappingURL=enquiry.component.css.map */'] });
var EnquiryComponent = _EnquiryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnquiryComponent, { className: "EnquiryComponent", filePath: "src\\app\\views\\enquiry\\enquiry\\enquiry.component.ts", lineNumber: 64 });
})();
export {
  EnquiryComponent
};
//# sourceMappingURL=enquiry.component-DPZZPSAO.js.map
