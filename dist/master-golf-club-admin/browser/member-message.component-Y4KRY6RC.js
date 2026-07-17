import {
  require_sweetalert2_all
} from "./chunk-UDKX4ISR.js";
import {
  cilPen
} from "./chunk-3OTSM4RC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-EZZDAKGS.js";
import {
  axios_default
} from "./chunk-EXN3ACQE.js";
import {
  BaseAPIUrl,
  baseURLType
} from "./chunk-AE67A222.js";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  CommonModule,
  DatePipe,
  FormControlDirective,
  IconDirective,
  NgClass,
  NgForOf,
  NgIf,
  PageItemComponent,
  PageLinkDirective,
  PaginationComponent,
  Router,
  RowComponent,
  TableDirective,
  TooltipDirective
} from "./chunk-KEGAS2QG.js";
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WDQ2E3IC.js";
import {
  __async,
  __toESM
} from "./chunk-ZDRA4OZL.js";

// src/app/views/member-message/member-message/member-message.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/app/views/common-service/member-message/member-message.service.ts
var _MemberMessageService = class _MemberMessageService {
  constructor() {
    this.apiUrl = new BaseAPIUrl().getUrl(baseURLType);
  }
  listMemberMessage(id = "0") {
    const url = `${this.apiUrl}message/listing/${id}/`;
    return axios_default.get(url);
  }
  processMemberMessage(data, id = "0") {
    const url = `${this.apiUrl}message/processing/${id}/`;
    return axios_default.post(url, data);
  }
  deleteMemberMessage(id) {
    const url = `${this.apiUrl}message/deletion/${id}/`;
    return axios_default.get(url);
  }
  markMessageAsRead(id) {
    const url = `${this.apiUrl}message/mark_as_read/${id}/`;
    return axios_default.post(url);
  }
  markMessageAsReplied(id) {
    const url = `${this.apiUrl}message/mark_as_replied/${id}/`;
    return axios_default.post(url);
  }
  markMessageAsClosed(id) {
    const url = `${this.apiUrl}message/mark_as_closed/${id}/`;
    return axios_default.post(url);
  }
  getNewMessages() {
    const url = `${this.apiUrl}message/new_messages/`;
    return axios_default.get(url);
  }
  getMessageById(messageId) {
    return __async(this, null, function* () {
      try {
        const url = `${this.apiUrl}message/listing/${messageId}/`;
        console.log("Getting message by ID:", url);
        const response = yield axios_default.get(url, {
          timeout: 3e4
        });
        console.log("Get message response:", response);
        return response;
      } catch (error) {
        console.error("Error getting message by ID:", error);
        throw error;
      }
    });
  }
};
_MemberMessageService.\u0275fac = function MemberMessageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MemberMessageService)();
};
_MemberMessageService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MemberMessageService, factory: _MemberMessageService.\u0275fac, providedIn: "root" });
var MemberMessageService = _MemberMessageService;

// src/app/views/member-message/member-message/member-message.component.ts
var _c0 = (a0) => ({ "table-secondary": a0 });
var _c1 = (a0) => ({ "disabled": a0 });
var _c2 = (a0) => ({ "active": a0 });
function MemberMessageComponent_tr_52_a_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 18);
    \u0275\u0275listener("click", function MemberMessageComponent_tr_52_a_30_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const message_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.markMessageAsRead(message_r2.id));
    });
    \u0275\u0275text(1, "\n                  ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 19);
    \u0275\u0275text(3, "\n                ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("cIcon", ctx_r2.icons.cilPen);
  }
}
function MemberMessageComponent_tr_52_a_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 20);
    \u0275\u0275listener("click", function MemberMessageComponent_tr_52_a_33_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const message_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.markMessageAsReplied(message_r2.id));
    });
    \u0275\u0275text(1, "\n                  ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 21);
    \u0275\u0275text(3, "\n                ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("cIcon", ctx_r2.icons.cilPen);
  }
}
function MemberMessageComponent_tr_52_a_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275listener("click", function MemberMessageComponent_tr_52_a_36_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const message_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.markMessageAsClosed(message_r2.id));
    });
    \u0275\u0275text(1, "\n                  ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 23);
    \u0275\u0275text(3, "\n                ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("cIcon", ctx_r2.icons.cilPen);
  }
}
function MemberMessageComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 13);
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
    \u0275\u0275elementStart(23, "span", 14);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\n              ");
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28, "\n                ");
    \u0275\u0275text(29, "\n                ");
    \u0275\u0275template(30, MemberMessageComponent_tr_52_a_30_Template, 4, 1, "a", 15);
    \u0275\u0275text(31, "\n\n                ");
    \u0275\u0275text(32, "\n                ");
    \u0275\u0275template(33, MemberMessageComponent_tr_52_a_33_Template, 4, 1, "a", 16);
    \u0275\u0275text(34, "\n\n                ");
    \u0275\u0275text(35, "\n                ");
    \u0275\u0275template(36, MemberMessageComponent_tr_52_a_36_Template, 4, 1, "a", 17);
    \u0275\u0275text(37, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r2 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c0, ctx_r2.isMessageClosed(message_r2)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r2.currentPage - 1) * ctx_r2.itemsPerPage + i_r6 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 12, message_r2.createdAt, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(message_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(message_r2.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(message_r2.phone || "N/A");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(message_r2.subject);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r2.getStatusClass(message_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                  ", ctx_r2.getStatusText(message_r2), "\n                ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.isMessageNew(message_r2));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.isMessageReplied(message_r2) && !ctx_r2.isMessageClosed(message_r2));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.isMessageClosed(message_r2));
  }
}
function MemberMessageComponent_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275text(1, "\n              ");
    \u0275\u0275elementStart(2, "td", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                ", ctx_r2.isLoading ? "Loading..." : "No messages found", "\n              ");
  }
}
function MemberMessageComponent_c_pagination_59_c_page_item_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-page-item");
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "a", 26);
    \u0275\u0275listener("click", function MemberMessageComponent_c_pagination_59_c_page_item_8_Template_a_click_2_listener() {
      const page_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changePage(page_r9));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n          ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c2, ctx_r2.currentPage === page_r9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", page_r9, "\n            ");
  }
}
function MemberMessageComponent_c_pagination_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-pagination", 25);
    \u0275\u0275text(1, "\n          ");
    \u0275\u0275elementStart(2, "c-page-item");
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "a", 26);
    \u0275\u0275listener("click", function MemberMessageComponent_c_pagination_59_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previousPage());
    });
    \u0275\u0275text(5, "\n              Previous\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n          ");
    \u0275\u0275template(8, MemberMessageComponent_c_pagination_59_c_page_item_8_Template, 5, 4, "c-page-item", 27);
    \u0275\u0275text(9, "\n          ");
    \u0275\u0275elementStart(10, "c-page-item");
    \u0275\u0275text(11, "\n            ");
    \u0275\u0275elementStart(12, "a", 26);
    \u0275\u0275listener("click", function MemberMessageComponent_c_pagination_59_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r7);
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
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c1, ctx_r2.currentPage === 1));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.pageRange);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c1, ctx_r2.currentPage === ctx_r2.totalPages));
  }
}
var _MemberMessageComponent = class _MemberMessageComponent {
  constructor(memberMessageService, router) {
    this.memberMessageService = memberMessageService;
    this.router = router;
    this.icons = { cilPen };
    this.tooltipViewText = "View Message";
    this.tooltipMarkReadText = "Mark as Read";
    this.tooltipMarkRepliedText = "Mark as Replied";
    this.tooltipMarkClosedText = "Mark as Closed";
    this.Math = Math;
    this.messageList = [];
    this.filteredList = [];
    this.pageRange = [];
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.isLoading = false;
    this.searchTerm = "";
  }
  ngOnInit() {
    this.loadMessageList();
  }
  loadMessageList() {
    return __async(this, null, function* () {
      try {
        this.isLoading = true;
        const response = yield this.memberMessageService.listMemberMessage("0");
        if (response.data.status === "success") {
          this.messageList = response.data.data;
          this.filteredList = [...this.messageList];
          this.updatePageRange();
        } else {
          console.error("Error loading messages:", response.data.message);
          import_sweetalert2.default.fire({
            icon: "error",
            title: "Error",
            text: response.data.message || "Failed to load messages"
          });
        }
      } catch (error) {
        console.error("Error loading messages:", error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: "Error",
          text: "Failed to load messages"
        });
      } finally {
        this.isLoading = false;
      }
    });
  }
  markMessageAsRead(messageId) {
    return __async(this, null, function* () {
      try {
        const response = yield this.memberMessageService.markMessageAsRead(messageId.toString());
        if (response.data.status === "success") {
          import_sweetalert2.default.fire({
            icon: "success",
            title: "Success",
            text: "Message marked as read"
          });
          this.loadMessageList();
        } else {
          import_sweetalert2.default.fire({
            icon: "error",
            title: "Error",
            text: response.data.message || "Failed to mark message as read"
          });
        }
      } catch (error) {
        console.error("Error marking message as read:", error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: "Error",
          text: "Failed to mark message as read"
        });
      }
    });
  }
  markMessageAsReplied(messageId) {
    return __async(this, null, function* () {
      try {
        const response = yield this.memberMessageService.markMessageAsReplied(messageId.toString());
        if (response.data.status === "success") {
          import_sweetalert2.default.fire({
            icon: "success",
            title: "Success",
            text: "Message marked as replied"
          });
          this.loadMessageList();
        } else {
          import_sweetalert2.default.fire({
            icon: "error",
            title: "Error",
            text: response.data.message || "Failed to mark message as replied"
          });
        }
      } catch (error) {
        console.error("Error marking message as replied:", error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: "Error",
          text: "Failed to mark message as replied"
        });
      }
    });
  }
  markMessageAsClosed(messageId) {
    return __async(this, null, function* () {
      try {
        const response = yield this.memberMessageService.markMessageAsClosed(messageId.toString());
        if (response.data.status === "success") {
          import_sweetalert2.default.fire({
            icon: "success",
            title: "Success",
            text: "Message marked as closed"
          });
          this.loadMessageList();
        } else {
          import_sweetalert2.default.fire({
            icon: "error",
            title: "Error",
            text: response.data.message || "Failed to mark message as closed"
          });
        }
      } catch (error) {
        console.error("Error marking message as closed:", error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: "Error",
          text: "Failed to mark message as closed"
        });
      }
    });
  }
  getStatusText(message) {
    switch (message.status) {
      case "new":
        return "New";
      case "read":
        return "Read";
      case "replied":
        return "Replied";
      case "closed":
        return "Closed";
      default:
        return "Unknown";
    }
  }
  getStatusClass(message) {
    switch (message.status) {
      case "new":
        return "bg-warning";
      case "read":
        return "bg-info";
      case "replied":
        return "bg-success";
      case "closed":
        return "bg-secondary";
      default:
        return "bg-light";
    }
  }
  isMessageNew(message) {
    return message.status === "new";
  }
  isMessageRead(message) {
    return message.status === "read" || message.status === "replied" || message.status === "closed";
  }
  isMessageReplied(message) {
    return message.status === "replied";
  }
  isMessageClosed(message) {
    return message.status === "closed";
  }
  filterList() {
    if (!this.searchTerm.trim()) {
      this.filteredList = [...this.messageList];
    } else {
      const searchLower = this.searchTerm.toLowerCase();
      this.filteredList = this.messageList.filter((message) => message.name.toLowerCase().includes(searchLower) || message.email.toLowerCase().includes(searchLower) || message.subject.toLowerCase().includes(searchLower) || message.description.toLowerCase().includes(searchLower) || message.phone.toLowerCase().includes(searchLower));
    }
    this.currentPage = 1;
    this.updatePageRange();
  }
  updatePageRange() {
    const totalPages = this.totalPages;
    const current = this.currentPage;
    const delta = 2;
    this.pageRange = [];
    for (let i = Math.max(1, current - delta); i <= Math.min(totalPages, current + delta); i++) {
      this.pageRange.push(i);
    }
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  get paginatedMessageList() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredList.slice(startIndex, endIndex);
  }
  get totalPages() {
    return Math.ceil(this.filteredList.length / this.itemsPerPage);
  }
  search() {
    this.filterList();
  }
};
_MemberMessageComponent.\u0275fac = function MemberMessageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MemberMessageComponent)(\u0275\u0275directiveInject(MemberMessageService), \u0275\u0275directiveInject(Router));
};
_MemberMessageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MemberMessageComponent, selectors: [["app-member-message"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 71, vars: 10, consts: [["xs", "12"], [1, "mb-4"], ["md", "3", 1, "mb-4"], [1, "position-relative"], ["cFormControl", "", "id", "searchInput", "type", "search", "placeholder", "Search Messages", "autocomplete", "off", 3, "ngModelChange", "input", "ngModel"], ["cTable", "", 1, "align-middle", 3, "hover", "striped", "bordered"], ["scope", "col", 2, "width", "70px"], ["scope", "col"], ["scope", "col", 2, "width", "200px"], [3, "ngClass", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["aria-label", "Message navigation", 4, "ngIf"], [1, "mt-3", "text-muted"], [3, "ngClass"], [1, "badge", 3, "ngClass"], ["cButton", "", "color", "btn-transparent", "class", "btn-sm border-0 py-0 me-2", "cTooltip", "Mark as Read", "cTooltipPlacement", "top", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["cButton", "", "color", "btn-transparent", "class", "btn-sm border-0 py-0 me-2", "cTooltip", "Mark as Replied", "cTooltipPlacement", "top", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["cButton", "", "color", "btn-transparent", "class", "btn-sm border-0 py-0 me-2", "cTooltip", "Mark as Closed", "cTooltipPlacement", "top", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["cButton", "", "color", "btn-transparent", "cTooltip", "Mark as Read", "cTooltipPlacement", "top", 1, "btn-sm", "border-0", "py-0", "me-2", 2, "cursor", "pointer", 3, "click"], ["size", "xl", 1, "text-info", 3, "cIcon"], ["cButton", "", "color", "btn-transparent", "cTooltip", "Mark as Replied", "cTooltipPlacement", "top", 1, "btn-sm", "border-0", "py-0", "me-2", 2, "cursor", "pointer", 3, "click"], ["size", "xl", 1, "text-success", 3, "cIcon"], ["cButton", "", "color", "btn-transparent", "cTooltip", "Mark as Closed", "cTooltipPlacement", "top", 1, "btn-sm", "border-0", "py-0", "me-2", 2, "cursor", "pointer", 3, "click"], ["size", "xl", 1, "text-secondary", 3, "cIcon"], ["colspan", "8", 1, "text-center", "py-4"], ["aria-label", "Message navigation"], ["cPageLink", "", 3, "click", "ngClass"], [4, "ngFor", "ngForOf"]], template: function MemberMessageComponent_Template(rf, ctx) {
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
    \u0275\u0275twoWayListener("ngModelChange", function MemberMessageComponent_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
      return $event;
    });
    \u0275\u0275listener("input", function MemberMessageComponent_Template_input_input_13_listener() {
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
    \u0275\u0275text(31, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, "\n              ");
    \u0275\u0275elementStart(33, "th", 7);
    \u0275\u0275text(34, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, "\n              ");
    \u0275\u0275elementStart(36, "th", 7);
    \u0275\u0275text(37, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, "\n              ");
    \u0275\u0275elementStart(39, "th", 7);
    \u0275\u0275text(40, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, "\n              ");
    \u0275\u0275elementStart(42, "th", 7);
    \u0275\u0275text(43, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, "\n              ");
    \u0275\u0275elementStart(45, "th", 8);
    \u0275\u0275text(46, "Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, "\n          ");
    \u0275\u0275elementStart(50, "tbody");
    \u0275\u0275text(51, "\n            ");
    \u0275\u0275template(52, MemberMessageComponent_tr_52_Template, 39, 17, "tr", 9);
    \u0275\u0275text(53, "\n            ");
    \u0275\u0275template(54, MemberMessageComponent_tr_54_Template, 5, 1, "tr", 10);
    \u0275\u0275text(55, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, "\n\n        ");
    \u0275\u0275text(58, "\n        ");
    \u0275\u0275template(59, MemberMessageComponent_c_pagination_59_Template, 16, 7, "c-pagination", 11);
    \u0275\u0275text(60, "\n\n        ");
    \u0275\u0275text(61, "\n        ");
    \u0275\u0275elementStart(62, "div", 12);
    \u0275\u0275text(63, "\n          ");
    \u0275\u0275elementStart(64, "small");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275text(66, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(69, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(70, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
    \u0275\u0275advance(5);
    \u0275\u0275property("hover", true)("striped", true)("bordered", true);
    \u0275\u0275advance(34);
    \u0275\u0275property("ngForOf", ctx.paginatedMessageList);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.paginatedMessageList.length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.messageList.length > ctx.itemsPerPage);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3("\n            Showing ", (ctx.currentPage - 1) * ctx.itemsPerPage + 1, " to \n            ", ctx.Math.min(ctx.currentPage * ctx.itemsPerPage, ctx.filteredList.length), " of \n            ", ctx.filteredList.length, " messages\n          ");
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
var MemberMessageComponent = _MemberMessageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MemberMessageComponent, { className: "MemberMessageComponent", filePath: "src\\app\\views\\member-message\\member-message\\member-message.component.ts", lineNumber: 60 });
})();
export {
  MemberMessageComponent
};
//# sourceMappingURL=member-message.component-Y4KRY6RC.js.map
