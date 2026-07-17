import './polyfills.server.mjs';
import {
  Swal
} from "./chunk-LUM3LCUE.mjs";
import {
  cilBan,
  cilBuilding,
  cilCalendar,
  cilChart,
  cilCheckCircle,
  cilClock,
  cilCloudDownload,
  cilOptions,
  cilPen,
  cilReload,
  cilSearch,
  cilTrash,
  cilUser,
  cilXCircle,
  cilZoom
} from "./chunk-MJFQPHHA.mjs";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-IPRNOZXQ.mjs";
import {
  axios_default
} from "./chunk-KMHHOWHO.mjs";
import {
  BaseAPIUrl,
  baseURLType
} from "./chunk-R72VMWDM.mjs";
import "./chunk-HYNU6U63.mjs";
import {
  BadgeComponent,
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormSelectDirective,
  IconDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
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
  NgForOf,
  NgIf
} from "./chunk-7RJECGZ5.mjs";
import {
  Subject,
  debounceTime,
  distinctUntilChanged,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-J4TCKMJW.mjs";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-CKH4O4N6.mjs";

// src/app/views/common-service/booking/booking.service.ts
var _BookingService = class _BookingService {
  constructor() {
    this.apiUrl = new BaseAPIUrl().getUrl(baseURLType);
    this.lists = this.apiUrl + "course/0/listing/";
    this.processing = this.apiUrl + "course/0/processing/";
    this.deletion = this.apiUrl + "course/0/deletion/";
  }
  // Course Management Methods (Admin)
  listCourse(id = "0") {
    return axios_default.get(this.lists.replace("0", id));
  }
  processCourse(data, id = "0") {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    return axios_default.post(this.processing.replace("0", id), data, config);
  }
  deleteCourse(id) {
    return axios_default.get(this.deletion.replace("0", id));
  }
  // ==================== BOOKING MANAGEMENT METHODS ====================
  // Get comprehensive booking statistics for dashboard cards
  getBookingStatistics() {
    return this.getAllBookings();
  }
  // Get all bookings with filtering and pagination - Admin version
  getAllBookings(filters) {
    const config = {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("access_token")}`
      }
    };
    if (filters) {
      config.params = filters;
    }
    return axios_default.get(`${this.apiUrl}booking/admin/all-bookings/`, config);
  }
  // Get all join requests for admin
  getAllJoinRequestsAdmin(filters) {
    const config = {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("access_token")}`
      }
    };
    if (filters) {
      config.params = filters;
    }
    return axios_default.get(`${this.apiUrl}joinRequest/admin/all-requests/`, config);
  }
  // Get bookings by specific status
  getBookingsByStatus(status, filters) {
    const config = this.getAuthConfig();
    const params = __spreadValues({ status }, filters);
    config.params = params;
    return axios_default.get(`${this.apiUrl}orders/by_status/`, config);
  }
  // Get detailed booking information
  getBookingDetails(bookingId) {
    const config = this.getAuthConfig();
    return axios_default.get(`${this.apiUrl}booking/${bookingId}/details/`, config);
  }
  // Get all join requests
  getAllJoinRequests(filters) {
    const config = this.getAuthConfig();
    if (filters) {
      config.params = filters;
    }
    return axios_default.get(`${this.apiUrl}joinRequest/`, config);
  }
  // Get incoming join requests (for original bookers)
  getIncomingJoinRequests(filters) {
    const config = this.getAuthConfig();
    if (filters) {
      config.params = filters;
    }
    return axios_default.get(`${this.apiUrl}joinRequest/incoming_requests/`, config);
  }
  // Get outgoing join requests (requests made by members)
  getOutgoingJoinRequests(filters) {
    const config = this.getAuthConfig();
    if (filters) {
      config.params = filters;
    }
    return axios_default.get(`${this.apiUrl}joinRequest/outgoing_requests/`, config);
  }
  // Get join request statistics
  getJoinRequestStatistics() {
    const config = this.getAuthConfig();
    return axios_default.get(`${this.apiUrl}joinRequest/statistics/`, config);
  }
  // Get pending review requests
  getPendingReviewRequests() {
    const config = this.getAuthConfig();
    return axios_default.get(`${this.apiUrl}orders/pending_review/`, config);
  }
  // Admin actions for bookings
  cancelBooking(bookingId, reason) {
    const config = this.getAuthConfig();
    return axios_default.post(`${this.apiUrl}booking/${bookingId}/cancel/`, { reason }, config);
  }
  // Admin actions for join requests
  approveJoinRequest(requestId, notes) {
    const config = this.getAuthConfig();
    return axios_default.post(`${this.apiUrl}joinRequest/${requestId}/approve/`, { notes }, config);
  }
  rejectJoinRequest(requestId, notes) {
    const config = this.getAuthConfig();
    return axios_default.post(`${this.apiUrl}joinRequest/${requestId}/reject/`, { notes }, config);
  }
  // Bulk operations
  bulkCancelBookings(bookingIds, reason) {
    const config = this.getAuthConfig();
    return axios_default.post(`${this.apiUrl}booking/bulk_cancel/`, { booking_ids: bookingIds, reason }, config);
  }
  bulkApproveRequests(requestIds) {
    const config = this.getAuthConfig();
    return axios_default.post(`${this.apiUrl}joinRequest/bulk_approve/`, { request_ids: requestIds }, config);
  }
  bulkRejectRequests(requestIds, reason) {
    const config = this.getAuthConfig();
    return axios_default.post(`${this.apiUrl}joinRequest/bulk_reject/`, { request_ids: requestIds, reason }, config);
  }
  // Export functionality - Client-side CSV generation for admin
  exportBookings(filters, format = "csv") {
    return __async(this, null, function* () {
      try {
        const response = yield this.getAllBookings(filters);
        const bookings = response.data?.data || response.data || [];
        const csvContent = this.generateBookingsCSV(bookings);
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        return { data: blob };
      } catch (error) {
        throw error;
      }
    });
  }
  exportJoinRequests(filters, format = "csv") {
    return __async(this, null, function* () {
      try {
        const response = yield this.getAllJoinRequestsAdmin(filters);
        const requests = response.data?.data || response.data || [];
        const csvContent = this.generateJoinRequestsCSV(requests);
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        return { data: blob };
      } catch (error) {
        throw error;
      }
    });
  }
  // Helper method to generate CSV for bookings
  generateBookingsCSV(bookings) {
    const headers = [
      "Booking ID",
      "Member Name",
      "Member ID",
      "Course",
      "Tee",
      "Date",
      "Time",
      "Participants",
      "Status",
      "Created At"
    ];
    const csvRows = [headers.join(",")];
    bookings.forEach((booking) => {
      const row = [
        booking.booking_id || "",
        `"${booking.memberFullName || booking.memberName || ""}"`,
        booking.memberGolfClubId || "",
        `"${booking.courseName || ""}"`,
        `"${booking.teeInfo || ""}"`,
        booking.slot_date || "",
        booking.booking_time || "",
        booking.participants || 0,
        booking.status || "",
        booking.createdAt || ""
      ];
      csvRows.push(row.join(","));
    });
    return csvRows.join("\n");
  }
  // Helper method to generate CSV for join requests
  generateJoinRequestsCSV(requests) {
    const headers = [
      "Request ID",
      "Requester Name",
      "Requester ID",
      "Course",
      "Tee",
      "Date",
      "Time",
      "Participants",
      "Status",
      "Created At"
    ];
    const csvRows = [headers.join(",")];
    requests.forEach((request) => {
      const row = [
        request.request_id || "",
        `"${request.requesterName || ""}"`,
        request.requesterMemberId || "",
        `"${request.courseName || ""}"`,
        `"${request.tee || ""}"`,
        request.slotDate || "",
        request.slotTime || "",
        request.participants || 0,
        request.status || "",
        request.createdAt || ""
      ];
      csvRows.push(row.join(","));
    });
    return csvRows.join("\n");
  }
  // Search functionality - Use admin endpoints with client-side filtering
  searchBookings(query, filters) {
    return __async(this, null, function* () {
      try {
        const response = yield this.getAllBookings(filters);
        const bookings = response.data?.data || response.data || [];
        const filteredBookings = bookings.filter((booking) => {
          const searchText = query.toLowerCase();
          return booking.booking_id?.toLowerCase().includes(searchText) || booking.memberFullName?.toLowerCase().includes(searchText) || booking.memberName?.toLowerCase().includes(searchText) || booking.courseName?.toLowerCase().includes(searchText) || booking.memberGolfClubId?.toLowerCase().includes(searchText);
        });
        return {
          data: {
            code: 1,
            message: "Search results retrieved successfully",
            data: filteredBookings
          }
        };
      } catch (error) {
        throw error;
      }
    });
  }
  searchJoinRequests(query, filters) {
    return __async(this, null, function* () {
      try {
        const response = yield this.getAllJoinRequestsAdmin(filters);
        const requests = response.data?.data || response.data || [];
        const filteredRequests = requests.filter((request) => {
          const searchText = query.toLowerCase();
          return request.request_id?.toLowerCase().includes(searchText) || request.requesterName?.toLowerCase().includes(searchText) || request.courseName?.toLowerCase().includes(searchText) || request.requesterMemberId?.toLowerCase().includes(searchText);
        });
        return {
          data: {
            code: 1,
            message: "Search results retrieved successfully",
            data: filteredRequests
          }
        };
      } catch (error) {
        throw error;
      }
    });
  }
  // Course and tee data for filters
  getCoursesForFilter() {
    return axios_default.get(`${this.apiUrl}collection/list_courses/`);
  }
  getTeesByCourse(courseId) {
    return axios_default.get(`${this.apiUrl}tee/by_course/`, { params: { course_id: courseId } });
  }
  // Member search for filters
  searchMembers(query) {
    const config = this.getAuthConfig();
    return axios_default.get(`${this.apiUrl}member/search/`, __spreadProps(__spreadValues({}, config), { params: { q: query } }));
  }
  // Notification management
  getBookingNotifications() {
    const config = this.getAuthConfig();
    return axios_default.get(`${this.apiUrl}notification/`, config);
  }
  markNotificationAsRead(notificationId) {
    const config = this.getAuthConfig();
    return axios_default.post(`${this.apiUrl}notification/${notificationId}/mark_as_read/`, {}, config);
  }
  // Real-time updates
  getRecentBookingActivity(limit = 10) {
    const config = this.getAuthConfig();
    return axios_default.get(`${this.apiUrl}orders/recent_activity/`, __spreadProps(__spreadValues({}, config), { params: { limit } }));
  }
  // Slot availability for admin
  getSlotAvailability(courseId, date, teeId) {
    const config = this.getAuthConfig();
    const params = { course_id: courseId, date };
    if (teeId)
      params.tee_id = teeId;
    config.params = params;
    return axios_default.get(`${this.apiUrl}booking/available_slots/`, config);
  }
  // Admin slot management
  blockSlot(courseId, teeId, date, time, reason) {
    const config = this.getAuthConfig();
    return axios_default.post(`${this.apiUrl}booking/block_slot/`, {
      course_id: courseId,
      tee_id: teeId,
      date,
      time,
      reason
    }, config);
  }
  unblockSlot(courseId, teeId, date, time) {
    const config = this.getAuthConfig();
    return axios_default.post(`${this.apiUrl}booking/unblock_slot/`, {
      course_id: courseId,
      tee_id: teeId,
      date,
      time
    }, config);
  }
  // Helper method to get auth configuration
  getAuthConfig() {
    const token = localStorage.getItem("access_token");
    return {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    };
  }
};
_BookingService.\u0275fac = function BookingService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingService)();
};
_BookingService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookingService, factory: _BookingService.\u0275fac, providedIn: "root" });
var BookingService = _BookingService;

// src/app/views/bookings/list-booking/list-booking.component.ts
var _c0 = ["detailsModal"];
function ListBookingComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "c-spinner", 6);
    \u0275\u0275elementEnd();
  }
}
function ListBookingComponent_div_1_button_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_button_80_Template_button_click_0_listener() {
      const view_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.switchView(view_r3.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const view_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("color", ctx_r3.currentView === view_r3.value ? view_r3.color : "outline-" + view_r3.color);
    \u0275\u0275attribute("aria-pressed", ctx_r3.currentView === view_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", view_r3.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.viewCounts[view_r3.value]);
  }
}
function ListBookingComponent_div_1_div_97_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    \u0275\u0275property("value", option_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", option_r6.label, " (", option_r6.count, ") ");
  }
}
function ListBookingComponent_div_1_div_97_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r7 = ctx.$implicit;
    \u0275\u0275property("value", course_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", course_r7.name, " ");
  }
}
function ListBookingComponent_div_1_div_97_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tee_r8 = ctx.$implicit;
    \u0275\u0275property("value", tee_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tee_r8.holeNumber, " Holes ");
  }
}
function ListBookingComponent_div_1_div_97_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    \u0275\u0275property("value", option_r9.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r9.label, " ");
  }
}
function ListBookingComponent_div_1_div_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "form", 55)(2, "c-row", 56)(3, "c-col", 57)(4, "label", 58);
    \u0275\u0275text(5, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 59);
    \u0275\u0275template(7, ListBookingComponent_div_1_div_97_option_7_Template, 2, 3, "option", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "c-col", 57)(9, "label", 58);
    \u0275\u0275text(10, "Course");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 61);
    \u0275\u0275listener("change", function ListBookingComponent_div_1_div_97_Template_select_change_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onCourseChange($event));
    });
    \u0275\u0275elementStart(12, "option", 62);
    \u0275\u0275text(13, "All Courses");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ListBookingComponent_div_1_div_97_option_14_Template, 2, 2, "option", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "c-col", 57)(16, "label", 58);
    \u0275\u0275text(17, "Tee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 63)(19, "option", 62);
    \u0275\u0275text(20, "All Tees");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ListBookingComponent_div_1_div_97_option_21_Template, 2, 2, "option", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "c-col", 57)(23, "label", 58);
    \u0275\u0275text(24, "Date From");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "c-col", 57)(27, "label", 58);
    \u0275\u0275text(28, "Date To");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "c-col", 57)(31, "label", 58);
    \u0275\u0275text(32, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "select", 66);
    \u0275\u0275template(34, ListBookingComponent_div_1_div_97_option_34_Template, 2, 2, "option", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "c-col", 57)(36, "label", 58);
    \u0275\u0275text(37, "Booking ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "c-col", 68)(40, "button", 69);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_div_97_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.clearAllFilters());
    });
    \u0275\u0275text(41, " Clear All Filters ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.filterForm);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r3.statusOptions);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r3.courses);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r3.tees);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r3.participantOptions);
  }
}
function ListBookingComponent_div_1_tr_142_small_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 77);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 84);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const booking_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r3.icons.cilClock);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", booking_r11.slotTime, " ");
  }
}
function ListBookingComponent_div_1_tr_142_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 71);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div", 72)(7, "code", 73);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_tr_142_Template_code_click_7_listener() {
      const booking_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(booking_r11.booking_id));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "c-badge", 74);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(10, "svg", 75);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "td")(13, "div")(14, "div", 76);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "small", 77);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "div")(22, "div");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, ListBookingComponent_div_1_tr_142_small_24_Template, 3, 2, "small", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td")(26, "span", 79);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td")(29, "c-badge", 80);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(30, "svg", 75);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "span", 81);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "td")(34, "button", 82);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_tr_142_Template_button_click_34_listener() {
      const booking_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewDetails(booking_r11));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(35, "svg", 83);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const booking_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r3.currentPage - 1) * ctx_r3.itemsPerPage + i_r12 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r11.bookedDate);
    \u0275\u0275advance(3);
    \u0275\u0275property("cTooltip", "Click to copy");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", booking_r11.booking_id, " ");
    \u0275\u0275advance();
    \u0275\u0275property("color", booking_r11.type === "BOOKING" ? "primary" : "info");
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r3.getTypeIcon(booking_r11.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", booking_r11.type, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(booking_r11.member.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r11.member.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r11.course.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(booking_r11.tee.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", booking_r11.slotTime);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatParticipants(booking_r11));
    \u0275\u0275advance(2);
    \u0275\u0275property("color", ctx_r3.getStatusBadgeColor(booking_r11.status));
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r3.getStatusIcon(booking_r11.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r11.status.split("_").join(" "));
    \u0275\u0275advance(2);
    \u0275\u0275property("cTooltip", "View Details");
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r3.icons.cilEye);
  }
}
function ListBookingComponent_div_1_tr_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 85)(2, "div", 77);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(3, "svg", 86);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h5");
    \u0275\u0275text(5, "No bookings found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Try adjusting your search criteria or filters.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("cIcon", ctx_r3.icons.cilCalendar);
  }
}
function ListBookingComponent_div_1_c_row_144_c_page_item_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-page-item", 93)(1, "a", 91);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_c_row_144_c_page_item_9_Template_a_click_1_listener() {
      const page_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.changePage(page_r15));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r15 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("active", ctx_r3.currentPage === page_r15);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r15);
  }
}
function ListBookingComponent_div_1_c_row_144_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-row", 87)(1, "c-col", 88)(2, "c-pagination", 89)(3, "c-page-item", 90)(4, "a", 91);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_c_row_144_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.changePage(1));
    });
    \u0275\u0275text(5, "First");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "c-page-item", 90)(7, "a", 91);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_c_row_144_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.changePage(ctx_r3.currentPage - 1));
    });
    \u0275\u0275text(8, "Previous");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ListBookingComponent_div_1_c_row_144_c_page_item_9_Template, 3, 2, "c-page-item", 92);
    \u0275\u0275elementStart(10, "c-page-item", 90)(11, "a", 91);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_c_row_144_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.changePage(ctx_r3.currentPage + 1));
    });
    \u0275\u0275text(12, "Next");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "c-page-item", 90)(14, "a", 91);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_c_row_144_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.changePage(ctx_r3.totalPages));
    });
    \u0275\u0275text(15, "Last");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.currentPage === 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-disabled", ctx_r3.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.currentPage === 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-disabled", ctx_r3.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.pageRange);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.currentPage === ctx_r3.totalPages);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-disabled", ctx_r3.currentPage === ctx_r3.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.currentPage === ctx_r3.totalPages);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-disabled", ctx_r3.currentPage === ctx_r3.totalPages);
  }
}
function ListBookingComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "c-row", 7)(2, "c-col", 8)(3, "c-card", 9)(4, "c-card-body", 10)(5, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(6, "svg", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h3", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 14);
    \u0275\u0275text(10, "TOTAL BOOKINGS");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "c-col", 8)(12, "c-card", 9)(13, "c-card-body", 10)(14, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(15, "svg", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "h3", 13);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 14);
    \u0275\u0275text(19, "CONFIRMED BOOKINGS");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "c-col", 8)(21, "c-card", 9)(22, "c-card-body", 10)(23, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(24, "svg", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "h3", 13);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 14);
    \u0275\u0275text(28, "PENDING REQUESTS");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "c-col", 8)(30, "c-card", 9)(31, "c-card-body", 10)(32, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(33, "svg", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "h3", 13);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 14);
    \u0275\u0275text(37, "APPROVED REQUESTS");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "c-col", 8)(39, "c-card", 9)(40, "c-card-body", 10)(41, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(42, "svg", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "h3", 13);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 14);
    \u0275\u0275text(46, "REJECTED REQUESTS");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "c-col", 8)(48, "c-card", 9)(49, "c-card-body", 10)(50, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(51, "svg", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(52, "h3", 13);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p", 14);
    \u0275\u0275text(55, "CANCELLED");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(56, "c-col", 8)(57, "c-card", 9)(58, "c-card-body", 10)(59, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(60, "svg", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(61, "h3", 13);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "p", 14);
    \u0275\u0275text(64, "TODAY'S BOOKINGS");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(65, "c-col", 8)(66, "c-card", 9)(67, "c-card-body", 10)(68, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(69, "svg", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(70, "h3", 13);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "p", 14);
    \u0275\u0275text(73, "ACTIVE COURSES");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(74, "c-card", 20)(75, "c-card-body")(76, "c-row", 21)(77, "c-col", 22)(78, "div", 23)(79, "c-button-group", 24);
    \u0275\u0275template(80, ListBookingComponent_div_1_button_80_Template, 4, 4, "button", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "c-col", 26)(82, "div", 27)(83, "button", 28);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.refreshData());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(84, "svg", 29);
    \u0275\u0275text(85, " Refresh ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(86, "button", 30);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_Template_button_click_86_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleAdvancedFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(87, "svg", 29);
    \u0275\u0275text(88, " Filters ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(89, "button", 31);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_Template_button_click_89_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.exportData("csv"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(90, "svg", 29);
    \u0275\u0275text(91, " Export CSV ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(92, "c-row", 21)(93, "c-col", 32)(94, "div", 33)(95, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function ListBookingComponent_div_1_Template_input_ngModelChange_95_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.searchTerm, $event) || (ctx_r3.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ListBookingComponent_div_1_Template_input_input_95_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(96, "svg", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(97, ListBookingComponent_div_1_div_97_Template, 42, 5, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(98, "c-card")(99, "c-card-body")(100, "c-row", 21)(101, "c-col", 37)(102, "p", 38);
    \u0275\u0275text(103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "c-col", 39)(105, "div", 40)(106, "label", 41);
    \u0275\u0275text(107, "Show:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "select", 42);
    \u0275\u0275twoWayListener("ngModelChange", function ListBookingComponent_div_1_Template_select_ngModelChange_108_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.itemsPerPage, $event) || (ctx_r3.itemsPerPage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ListBookingComponent_div_1_Template_select_ngModelChange_108_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onItemsPerPageChange());
    });
    \u0275\u0275elementStart(109, "option", 43);
    \u0275\u0275text(110, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "option", 43);
    \u0275\u0275text(112, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "option", 43);
    \u0275\u0275text(114, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "option", 43);
    \u0275\u0275text(116, "100");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "span", 44);
    \u0275\u0275text(118, "records per page");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(119, "div", 45)(120, "table", 46)(121, "thead")(122, "tr")(123, "th", 47);
    \u0275\u0275text(124, "S.NO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "th", 48);
    \u0275\u0275text(126, "BOOKED DATE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "th", 48);
    \u0275\u0275text(128, "BOOKING ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "th", 48);
    \u0275\u0275text(130, "MEMBER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "th", 48);
    \u0275\u0275text(132, "COURSE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "th", 48);
    \u0275\u0275text(134, "TEE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "th", 48);
    \u0275\u0275text(136, "PARTICIPANTS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "th", 48);
    \u0275\u0275text(138, "STATUS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "th", 49);
    \u0275\u0275text(140, "DETAILS");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(141, "tbody");
    \u0275\u0275template(142, ListBookingComponent_div_1_tr_142_Template, 36, 18, "tr", 50)(143, ListBookingComponent_div_1_tr_143_Template, 8, 1, "tr", 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(144, ListBookingComponent_div_1_c_row_144_Template, 16, 9, "c-row", 51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("cIcon", ctx_r3.icons.cilCalendar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.statistics.totalBookings);
    \u0275\u0275advance(7);
    \u0275\u0275property("cIcon", ctx_r3.icons.cilCheckCircle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.statistics.confirmedBookings);
    \u0275\u0275advance(7);
    \u0275\u0275property("cIcon", ctx_r3.icons.cilClock);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.statistics.pendingRequests);
    \u0275\u0275advance(7);
    \u0275\u0275property("cIcon", ctx_r3.icons.cilUser);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.statistics.approvedRequests);
    \u0275\u0275advance(7);
    \u0275\u0275property("cIcon", ctx_r3.icons.cilXCircle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.statistics.rejectedRequests);
    \u0275\u0275advance(7);
    \u0275\u0275property("cIcon", ctx_r3.icons.cilBan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.statistics.cancelledBookings);
    \u0275\u0275advance(7);
    \u0275\u0275property("cIcon", ctx_r3.icons.cilCalendar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.statistics.todaysBookings);
    \u0275\u0275advance(7);
    \u0275\u0275property("cIcon", ctx_r3.icons.cilBuilding);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.statistics.activeCourses);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r3.views);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r3.icons.cilRefresh);
    \u0275\u0275advance(3);
    \u0275\u0275property("cIcon", ctx_r3.icons.cilFilter);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isExporting);
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r3.icons.cilDownload);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r3.icons.cilSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.showAdvancedFilters);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3(" Showing ", (ctx_r3.currentPage - 1) * ctx_r3.itemsPerPage + 1, "-", ctx_r3.Math.min(ctx_r3.currentPage * ctx_r3.itemsPerPage, ctx_r3.totalItems), " of ", ctx_r3.totalItems, " records ");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.itemsPerPage);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 25);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 50);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 100);
    \u0275\u0275advance(5);
    \u0275\u0275property("hover", true)("striped", true)("bordered", true);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r3.paginatedBookings);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.paginatedBookings.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.totalPages > 1);
  }
}
function ListBookingComponent_c_modal_body_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-modal-body")(1, "div", 94)(2, "div", 95)(3, "div", 96)(4, "h6", 97);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 98);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 96)(9, "h6", 97);
    \u0275\u0275text(10, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "c-badge", 99);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 100)(14, "h6", 101);
    \u0275\u0275text(15, "Member Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 102)(17, "div", 96)(18, "p")(19, "strong");
    \u0275\u0275text(20, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p")(23, "strong");
    \u0275\u0275text(24, "Membership ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 96)(27, "p")(28, "strong");
    \u0275\u0275text(29, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p")(32, "strong");
    \u0275\u0275text(33, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 100)(36, "h6", 101);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 102)(39, "div", 96)(40, "p")(41, "strong");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p")(45, "strong");
    \u0275\u0275text(46, "Course:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p")(49, "strong");
    \u0275\u0275text(50, "Tee:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 96)(53, "p")(54, "strong");
    \u0275\u0275text(55, "Slot Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "p")(58, "strong");
    \u0275\u0275text(59, "Slot Time:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "p")(62, "strong");
    \u0275\u0275text(63, "Participants:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(65, "div", 103)(66, "h6", 101);
    \u0275\u0275text(67, "Status Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 104)(69, "c-badge", 105);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(70, "svg", 75);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedBookingDetails.type === "REQUEST" ? "Request ID" : "Booking ID");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.selectedBookingDetails.booking_id);
    \u0275\u0275advance(4);
    \u0275\u0275property("color", ctx_r3.selectedBookingDetails.type === "BOOKING" ? "primary" : "info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.selectedBookingDetails.type === "REQUEST" ? "JOIN REQUEST" : "ORIGINAL BOOKING", " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", (ctx_r3.selectedBookingDetails.member == null ? null : ctx_r3.selectedBookingDetails.member.name) || "N/A", "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r3.selectedBookingDetails.member == null ? null : ctx_r3.selectedBookingDetails.member.id) || "N/A", "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r3.selectedBookingDetails.member == null ? null : ctx_r3.selectedBookingDetails.member.email) || "N/A", "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r3.selectedBookingDetails.member == null ? null : ctx_r3.selectedBookingDetails.member.phone) || "N/A", "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.selectedBookingDetails.type === "REQUEST" ? "Request Details" : "Booking Details", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedBookingDetails.type === "REQUEST" ? "Requested Date:" : "Booked Date:");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.selectedBookingDetails.bookedDate || "N/A", "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r3.selectedBookingDetails.course == null ? null : ctx_r3.selectedBookingDetails.course.name) || "N/A", "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r3.selectedBookingDetails.tee == null ? null : ctx_r3.selectedBookingDetails.tee.name) || "N/A", "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r3.selectedBookingDetails.slotDate || "N/A", "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r3.selectedBookingDetails.slotTime || "N/A", "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatParticipants(ctx_r3.selectedBookingDetails), "");
    \u0275\u0275advance(5);
    \u0275\u0275property("color", ctx_r3.getStatusBadgeColor(ctx_r3.selectedBookingDetails.status));
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r3.getStatusIcon(ctx_r3.selectedBookingDetails.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.selectedBookingDetails.status, " ");
  }
}
var _ListBookingComponent = class _ListBookingComponent {
  // Helper method to get current UK time
  getCurrentUKTime() {
    const now = /* @__PURE__ */ new Date();
    return new Date(now.toLocaleString("en-US", { timeZone: this.ukTimezone }));
  }
  // Helper method to check if a booking/request is expired (past date/time)
  isBookingExpired(booking) {
    if (!booking.slotDate)
      return false;
    try {
      const ukNow = this.getCurrentUKTime();
      const bookingDateStr = booking.slotDate;
      const bookingTimeStr = booking.slotTime;
      const dateParts = bookingDateStr.split(" ");
      if (dateParts.length < 3)
        return false;
      const day = parseInt(dateParts[0]);
      const monthStr = dateParts[1];
      const year = 2e3 + parseInt(dateParts[2]);
      const monthMap = {
        "Jan": 0,
        "Feb": 1,
        "Mar": 2,
        "Apr": 3,
        "May": 4,
        "Jun": 5,
        "Jul": 6,
        "Aug": 7,
        "Sep": 8,
        "Oct": 9,
        "Nov": 10,
        "Dec": 11
      };
      const month = monthMap[monthStr];
      if (month === void 0)
        return false;
      const bookingDate = new Date(year, month, day);
      if (bookingTimeStr) {
        const [hours, minutes] = bookingTimeStr.split(":").map(Number);
        bookingDate.setHours(hours, minutes, 0, 0);
        return bookingDate < ukNow;
      }
      const ukToday = new Date(ukNow.getFullYear(), ukNow.getMonth(), ukNow.getDate());
      const bookingDateOnly = new Date(bookingDate.getFullYear(), bookingDate.getMonth(), bookingDate.getDate());
      return bookingDateOnly < ukToday;
    } catch (error) {
      console.error("Error checking if booking is expired:", error);
      return false;
    }
  }
  // Public method to check if booking is expired (for template use)
  isExpired(booking) {
    return this.isBookingExpired(booking);
  }
  constructor(bookingService, fb) {
    this.bookingService = bookingService;
    this.fb = fb;
    this.icons = {
      cilPen,
      cilTrash,
      cilEye: cilZoom,
      cilCalendar,
      cilUser,
      cilCheckCircle,
      cilClock,
      cilXCircle,
      cilBan,
      cilChart,
      cilBuilding,
      cilSearch,
      cilFilter: cilOptions,
      cilDownload: cilCloudDownload,
      cilRefresh: cilReload
    };
    this.destroy$ = new Subject();
    this.searchSubject = new Subject();
    this.isLoading = false;
    this.isLoadingStats = false;
    this.isExporting = false;
    this.currentView = "all";
    this.views = [
      { value: "all", label: "All Records", color: "primary" },
      { value: "bookings", label: "Bookings", color: "success" },
      { value: "approved", label: "Approved", color: "info" },
      { value: "pending", label: "Pending", color: "warning" },
      { value: "expired", label: "Expired", color: "secondary" }
    ];
    this.statistics = {
      totalBookings: 0,
      confirmedBookings: 0,
      pendingRequests: 0,
      approvedRequests: 0,
      rejectedRequests: 0,
      cancelledBookings: 0,
      todaysBookings: 0,
      activeCourses: 0
    };
    this.bookings = [];
    this.filteredBookings = [];
    this.courses = [];
    this.tees = [];
    this.members = [];
    this.activeFilters = {};
    this.showAdvancedFilters = false;
    this.searchTerm = "";
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalItems = 0;
    this.totalPages = 0;
    this.pageRange = [];
    this.selectedBookings = /* @__PURE__ */ new Set();
    this.selectAll = false;
    this.selectedBookingDetails = null;
    this.showDetailsModal = false;
    this.statusOptions = [
      { value: "", label: "All Records", count: 0 },
      { value: "confirmed", label: "Confirmed Bookings", count: 0 },
      { value: "pending_approval", label: "Pending Requests", count: 0 },
      { value: "approved", label: "Approved Requests", count: 0 },
      { value: "rejected", label: "Rejected Requests", count: 0 },
      { value: "cancelled", label: "Cancelled Bookings", count: 0 }
    ];
    this.participantOptions = [
      { value: "", label: "All" },
      { value: 1, label: "1 Player" },
      { value: 2, label: "2 Players" },
      { value: 3, label: "3 Players" },
      { value: 4, label: "4 Players" }
    ];
    this.ukTimezone = "Europe/London";
    this.Math = Math;
    this.initializeFilterForm();
    this.setupSearch();
  }
  ngOnInit() {
    this.loadInitialData();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  initializeFilterForm() {
    this.filterForm = this.fb.group({
      status: [""],
      course: [""],
      tee: [""],
      dateFrom: [""],
      dateTo: [""],
      member: [""],
      bookingId: [""],
      participants: [""]
    });
  }
  setupSearch() {
    this.searchSubject.pipe(takeUntil(this.destroy$), debounceTime(300), distinctUntilChanged()).subscribe((searchTerm) => {
      this.performSearch(searchTerm);
    });
  }
  loadInitialData() {
    return __async(this, null, function* () {
      this.isLoading = true;
      try {
        yield Promise.all([
          this.loadStatistics(),
          this.loadBookings(),
          this.loadCourses()
        ]);
      } catch (error) {
        console.error("Error loading initial data:", error);
      } finally {
        this.isLoading = false;
      }
    });
  }
  loadStatistics() {
    return __async(this, null, function* () {
      try {
        const [bookingsResponse, joinRequestsResponse] = yield Promise.all([
          this.bookingService.getAllBookings(),
          this.bookingService.getAllJoinRequestsAdmin()
        ]);
        console.log("Bookings response:", bookingsResponse.data);
        console.log("Join requests response:", joinRequestsResponse.data);
        const bookings = bookingsResponse.data?.data || bookingsResponse.data || [];
        const joinRequests = joinRequestsResponse.data?.data || joinRequestsResponse.data || [];
        console.log("Extracted bookings:", bookings);
        console.log("Extracted join requests:", joinRequests);
        const confirmedBookings = Array.isArray(bookings) ? bookings.filter((b) => b.status === "confirmed").length : 0;
        const pendingRequests = Array.isArray(joinRequests) ? joinRequests.filter((r) => r.status === "pending_approval").length : 0;
        const approvedRequests = Array.isArray(joinRequests) ? joinRequests.filter((r) => r.status === "approved").length : 0;
        const rejectedRequests = Array.isArray(joinRequests) ? joinRequests.filter((r) => r.status === "rejected").length : 0;
        this.statistics = {
          totalBookings: Array.isArray(bookings) ? bookings.length : 0,
          confirmedBookings,
          pendingRequests,
          approvedRequests,
          rejectedRequests,
          cancelledBookings: Array.isArray(bookings) ? bookings.filter((b) => b.status === "cancelled").length : 0,
          todaysBookings: Array.isArray(bookings) ? this.getTodaysBookings(bookings) : 0,
          activeCourses: Array.isArray(bookings) ? this.getActiveCourses(bookings) : 0
        };
        this.updateStatusCounts();
      } catch (error) {
        console.error("Error loading statistics:", error);
        this.statistics = {
          totalBookings: 0,
          confirmedBookings: 0,
          pendingRequests: 0,
          approvedRequests: 0,
          rejectedRequests: 0,
          cancelledBookings: 0,
          todaysBookings: 0,
          activeCourses: 0
        };
      }
    });
  }
  loadBookings() {
    return __async(this, null, function* () {
      try {
        const [bookingsResponse, joinRequestsResponse] = yield Promise.all([
          this.bookingService.getAllBookings(this.activeFilters),
          this.bookingService.getAllJoinRequestsAdmin(this.activeFilters)
        ]);
        console.log("Bookings response:", bookingsResponse.data);
        console.log("Join requests response:", joinRequestsResponse.data);
        this.bookings = [];
        const bookings = bookingsResponse.data?.data || bookingsResponse.data || [];
        const joinRequests = joinRequestsResponse.data?.data || joinRequestsResponse.data || [];
        console.log("Extracted bookings for table:", bookings);
        console.log("Extracted join requests for table:", joinRequests);
        if (Array.isArray(bookings)) {
          bookings.forEach((booking) => {
            this.bookings.push(this.formatBookingForTable(booking, "BOOKING"));
          });
        }
        if (Array.isArray(joinRequests)) {
          joinRequests.forEach((request) => {
            this.bookings.push(this.formatJoinRequestForTable(request, "REQUEST"));
          });
        }
        this.applyViewFilter();
      } catch (error) {
        console.error("Error loading bookings:", error);
        this.bookings = [];
        this.filteredBookings = [];
        this.totalItems = 0;
      }
    });
  }
  loadCourses() {
    return __async(this, null, function* () {
      try {
        const response = yield this.bookingService.getCoursesForFilter();
        console.log("Courses response:", response.data);
        if (response.data.code === 1) {
          this.courses = response.data.data || [];
        } else {
          this.courses = response.data.results || [];
        }
      } catch (error) {
        console.error("Error loading courses:", error);
        this.courses = [];
      }
    });
  }
  onSearch(event) {
    const searchTerm = event.target.value;
    this.searchTerm = searchTerm;
    this.searchSubject.next(searchTerm);
  }
  performSearch(searchTerm) {
    let rows = this.bookings.filter((b) => this.matchesView(b, this.currentView));
    const term = searchTerm.trim().toLowerCase();
    if (term) {
      rows = rows.filter((booking) => (booking.booking_id || "").toLowerCase().includes(term) || (booking.member?.name || "").toLowerCase().includes(term) || (booking.course?.name || "").toLowerCase().includes(term));
    }
    this.filteredBookings = rows;
    this.updatePagination();
  }
  switchView(view) {
    this.currentView = view;
    this.applyViewFilter();
  }
  /**
   * Which tab a row belongs to. Expiry wins over the stored status, so a past
   * slot lands under Expired rather than lingering in Bookings or Pending.
   * Tab counts and the table both read this, so they can never disagree.
   */
  matchesView(booking, view) {
    const status = (booking.status || "").toUpperCase();
    switch (view) {
      case "all":
        return true;
      case "expired":
        return status === "EXPIRED";
      case "approved":
        return status === "APPROVED";
      case "pending":
        return status === "PENDING_APPROVAL";
      case "bookings":
        return booking.type === "BOOKING" && status !== "EXPIRED";
      default:
        return true;
    }
  }
  /** Live per-tab counts, derived from the rows actually loaded. */
  get viewCounts() {
    const counts = {
      all: 0,
      bookings: 0,
      approved: 0,
      pending: 0,
      expired: 0
    };
    for (const view of this.views) {
      counts[view.value] = this.bookings.filter((b) => this.matchesView(b, view.value)).length;
    }
    return counts;
  }
  applyViewFilter() {
    this.performSearch(this.searchTerm);
  }
  updatePagination() {
    this.totalItems = this.filteredBookings.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.currentPage = 1;
  }
  get paginatedBookings() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredBookings.slice(start, end);
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  getStatusBadgeColor(status) {
    switch (status.toLowerCase()) {
      case "confirmed":
        return "success";
      case "pending_approval":
        return "warning";
      case "approved":
        return "success";
      case "rejected":
        return "danger";
      case "cancelled":
        return "secondary";
      case "expired":
        return "secondary";
      default:
        return "primary";
    }
  }
  viewDetails(booking) {
    return __async(this, null, function* () {
      this.selectedBookingDetails = booking;
      this.showDetailsModal = true;
    });
  }
  closeDetailsModal() {
    this.showDetailsModal = false;
    this.selectedBookingDetails = null;
  }
  refreshData() {
    return __async(this, null, function* () {
      yield this.loadInitialData();
    });
  }
  // Additional utility methods
  toggleAdvancedFilters() {
    this.showAdvancedFilters = !this.showAdvancedFilters;
  }
  clearAllFilters() {
    this.filterForm.reset();
    this.searchTerm = "";
    this.currentView = "all";
    this.selectedBookings.clear();
    this.selectAll = false;
    this.applyViewFilter();
  }
  onCourseChange(event) {
    return __async(this, null, function* () {
      const courseId = event.target.value;
      const id = parseInt(courseId);
      if (id) {
        try {
          const response = yield this.bookingService.getTeesByCourse(id);
          this.tees = response.data || [];
        } catch (error) {
          console.error("Error loading tees:", error);
          this.tees = [];
        }
      } else {
        this.tees = [];
        this.filterForm.patchValue({ tee: "" });
      }
    });
  }
  // Selection methods
  toggleSelectAll() {
    this.selectAll = !this.selectAll;
    if (this.selectAll) {
      this.paginatedBookings.forEach((booking) => this.selectedBookings.add(booking.id));
    } else {
      this.selectedBookings.clear();
    }
  }
  toggleSelectBooking(bookingId) {
    if (this.selectedBookings.has(bookingId)) {
      this.selectedBookings.delete(bookingId);
    } else {
      this.selectedBookings.add(bookingId);
    }
    this.selectAll = this.selectedBookings.size === this.paginatedBookings.length;
  }
  isSelected(bookingId) {
    return this.selectedBookings.has(bookingId);
  }
  formatParticipants(booking) {
    if (booking.type === "REQUEST") {
      return `+${booking.participants} players`;
    }
    return `${booking.participants}/4 players`;
  }
  getTypeIcon(type) {
    return type === "BOOKING" ? this.icons.cilCalendar : this.icons.cilUser;
  }
  getStatusIcon(status) {
    switch (status.toLowerCase()) {
      case "confirmed":
        return this.icons.cilCheckCircle;
      case "pending_approval":
        return this.icons.cilClock;
      case "approved":
        return this.icons.cilCheckCircle;
      case "rejected":
        return this.icons.cilXCircle;
      case "cancelled":
        return this.icons.cilBan;
      default:
        return this.icons.cilCalendar;
    }
  }
  changeItemsPerPage(event) {
    this.itemsPerPage = parseInt(event.target.value);
    this.currentPage = 1;
    this.updatePagination();
  }
  onItemsPerPageChange() {
    this.currentPage = 1;
    this.updatePagination();
  }
  exportData(format = "csv") {
    return __async(this, null, function* () {
      this.isExporting = true;
      try {
        const response = yield this.bookingService.exportBookings(this.activeFilters, format);
        this.downloadFile(response.data, `bookings.${format}`);
        this.showSuccessMessage(`Data exported successfully as ${format.toUpperCase()}`);
      } catch (error) {
        console.error("Error exporting data:", error);
        this.showErrorMessage("Failed to export data");
      } finally {
        this.isExporting = false;
      }
    });
  }
  downloadFile(data, filename) {
    const url = window.URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
  copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      this.showSuccessMessage("Booking ID copied to clipboard");
    }).catch(() => {
      this.showErrorMessage("Failed to copy to clipboard");
    });
  }
  showSuccessMessage(message) {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: message,
      timer: 3e3,
      showConfirmButton: false
    });
  }
  showErrorMessage(message) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
      confirmButtonText: "OK"
    });
  }
  // Format booking data for table display
  formatBookingForTable(booking, type) {
    const formattedBooking = {
      id: booking.id,
      booking_id: booking.booking_id,
      type,
      member: {
        name: booking.memberFullName || booking.memberName || (booking.member ? `${booking.member.firstName || ""} ${booking.member.lastName || ""}`.trim() : "") || "N/A",
        id: booking.memberGolfClubId || (booking.member ? booking.member.golfClubId : "") || "N/A",
        email: booking.memberEmail || booking.member?.email || "N/A",
        phone: booking.memberPhone || booking.member?.phone || booking.member?.phoneNumber || "N/A"
      },
      bookedDate: this.formatDate(booking.createdAt || booking.formattedDate),
      course: {
        name: booking.courseName || (booking.course ? booking.course.courseName : "") || "N/A",
        id: booking.course?.id || booking.course
      },
      tee: {
        name: booking.teeInfo || booking.teeName || (booking.tee ? `${booking.tee.holeNumber} Holes` : "") || "N/A",
        id: booking.tee?.id || booking.tee
      },
      slotDate: this.formatDate(booking.slot_date || booking.slotDate || booking.bookingDate),
      slotTime: this.formatTime(booking.booking_time || booking.bookingTime),
      participants: booking.participants || booking.totalParticipants || 0,
      status: booking.status?.toUpperCase() || "CONFIRMED",
      details: booking
    };
    if (this.isBookingExpired(formattedBooking)) {
      formattedBooking.status = "EXPIRED";
    }
    return formattedBooking;
  }
  // Format join request data for table display
  formatJoinRequestForTable(request, type) {
    const formattedRequest = {
      id: request.id,
      booking_id: request.request_id || request.requestId,
      type,
      member: {
        name: request.requesterName || request.memberFullName || (request.member ? `${request.member.firstName || ""} ${request.member.lastName || ""}`.trim() : "") || "N/A",
        id: request.requesterMemberId || request.memberGolfClubId || (request.member ? request.member.golfClubId : "") || "N/A",
        email: request.requesterEmail || request.member?.email || "N/A",
        phone: request.requesterPhone || request.member?.phone || request.member?.phoneNumber || "N/A"
      },
      bookedDate: this.formatDate(request.createdAt || request.requestDate),
      course: {
        name: request.courseName || (request.original_booking?.course ? request.original_booking.course.courseName : "") || "N/A",
        id: request.course || request.original_booking?.course?.id
      },
      tee: {
        name: request.tee || (request.original_booking?.tee ? `${request.original_booking.tee.holeNumber} Holes` : "") || "N/A",
        id: request.teeId || request.original_booking?.tee?.id
      },
      slotDate: this.formatDate(request.slotDate || request.original_booking?.slot_date),
      slotTime: this.formatTime(request.slotTime || request.original_booking?.booking_time),
      participants: request.participants || request.requestedParticipants || 0,
      status: request.status?.toUpperCase() || "PENDING_APPROVAL",
      details: request
    };
    if (this.isBookingExpired(formattedRequest)) {
      formattedRequest.status = "EXPIRED";
    }
    return formattedRequest;
  }
  formatDate(dateString) {
    if (!dateString)
      return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "2-digit"
    });
  }
  formatTime(timeString) {
    if (!timeString)
      return "";
    return timeString.substring(0, 5);
  }
  updateStatusCounts() {
    this.statusOptions[0].count = this.statistics.totalBookings;
    this.statusOptions[1].count = this.statistics.confirmedBookings;
    this.statusOptions[2].count = this.statistics.pendingRequests;
    this.statusOptions[3].count = this.statistics.approvedRequests;
    this.statusOptions[4].count = this.statistics.rejectedRequests;
    this.statusOptions[5].count = this.statistics.cancelledBookings;
  }
  getTodaysBookings(bookings) {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    return bookings.filter((booking) => {
      const bookingDate = booking.slot_date || booking.slotDate;
      return bookingDate && bookingDate.startsWith(today);
    }).length;
  }
  getActiveCourses(bookings) {
    const uniqueCourses = /* @__PURE__ */ new Set();
    bookings.forEach((booking) => {
      if (booking.course) {
        uniqueCourses.add(booking.course);
      }
    });
    return uniqueCourses.size;
  }
};
_ListBookingComponent.\u0275fac = function ListBookingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListBookingComponent)(\u0275\u0275directiveInject(BookingService), \u0275\u0275directiveInject(FormBuilder));
};
_ListBookingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListBookingComponent, selectors: [["app-list-booking"]], viewQuery: function ListBookingComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.detailsModal = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 7, consts: [["class", "d-flex justify-content-center align-items-center", "style", "min-height: 400px;", 4, "ngIf"], [4, "ngIf"], ["size", "lg", "scrollable", "true", 3, "visibleChange", "visible", "keyboard", "backdrop"], ["cModalTitle", ""], ["cButton", "", "color", "secondary", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "min-height", "400px"], ["color", "primary", "size", "sm"], [1, "mb-4", "stats-row"], ["xs", "12", "sm", "6", "lg", "3", 1, "mb-3"], [1, "text-center", "h-100", "stats-card"], [1, "d-flex", "flex-column", "justify-content-center"], [1, "stats-icon", "mb-2"], ["size", "2xl", 1, "text-primary", 3, "cIcon"], [1, "mb-1", "fw-bold"], [1, "text-muted", "mb-0", "small"], ["size", "2xl", 1, "text-success", 3, "cIcon"], ["size", "2xl", 1, "text-warning", 3, "cIcon"], ["size", "2xl", 1, "text-info", 3, "cIcon"], ["size", "2xl", 1, "text-danger", 3, "cIcon"], ["size", "2xl", 1, "text-secondary", 3, "cIcon"], [1, "mb-4"], [1, "mb-3"], ["xs", "12", "md", "7"], [1, "d-flex", "align-items-center", "booking-view-tabs-scroll"], ["role", "group", 1, "booking-view-tabs"], ["cButton", "", "size", "sm", 3, "color", "click", 4, "ngFor", "ngForOf"], ["xs", "12", "md", "5"], [1, "d-flex", "flex-wrap", "gap-2", "justify-content-md-end"], ["cButton", "", "color", "outline-secondary", "size", "sm", 3, "click", "disabled"], [1, "me-1", 3, "cIcon"], ["cButton", "", "color", "outline-info", "size", "sm", 3, "click"], ["cButton", "", "color", "outline-success", "size", "sm", 3, "click", "disabled"], ["xs", "12", "md", "6"], [1, "position-relative"], ["cFormControl", "", "type", "search", "placeholder", "Search by Booking ID, Member Name, Course...", 1, "ps-5", 3, "ngModelChange", "input", "ngModel"], [1, "position-absolute", "top-50", "start-0", "translate-middle-y", "ms-3", "text-muted", 3, "cIcon"], ["class", "border-top pt-3 filter-controls", 4, "ngIf"], ["xs", "12", "sm", "6"], [1, "mb-0", "text-muted"], ["xs", "12", "sm", "6", 1, "text-sm-end"], [1, "d-flex", "align-items-center", "justify-content-sm-end", "gap-2"], [1, "mb-0", "text-muted", "small"], ["cSelect", "", "size", "sm", 2, "width", "auto", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "text-muted", "small"], [1, "table-responsive", "booking-table-wrapper"], ["cTable", "", 1, "booking-table", 3, "hover", "striped", "bordered"], ["scope", "col", 2, "width", "60px"], ["scope", "col"], ["scope", "col", 2, "width", "100px"], [4, "ngFor", "ngForOf"], ["class", "mt-3", 4, "ngIf"], ["cButton", "", "size", "sm", 3, "click", "color"], [1, "tab-count"], [1, "border-top", "pt-3", "filter-controls"], ["cForm", "", 3, "formGroup"], [1, "g-3"], ["xs", "12", "sm", "6", "md", "3"], ["cLabel", ""], ["cSelect", "", "formControlName", "status"], [3, "value", 4, "ngFor", "ngForOf"], ["cSelect", "", "formControlName", "course", 3, "change"], ["value", ""], ["cSelect", "", "formControlName", "tee"], ["cFormControl", "", "type", "date", "formControlName", "dateFrom"], ["cFormControl", "", "type", "date", "formControlName", "dateTo"], ["cSelect", "", "formControlName", "participants"], ["cFormControl", "", "type", "text", "placeholder", "Search by ID", "formControlName", "bookingId"], ["xs", "12", "md", "6", 1, "d-flex", "align-items-end"], ["cButton", "", "color", "outline-secondary", "size", "sm", "type", "button", 3, "click"], [3, "value"], [1, "text-nowrap"], [1, "d-flex", "flex-column", "align-items-start", "gap-1"], [1, "booking-id", 3, "click", "cTooltip"], [1, "d-inline-flex", "align-items-center", "gap-1", 3, "color"], ["size", "sm", 3, "cIcon"], [1, "fw-semibold"], [1, "text-muted"], ["class", "text-muted", 4, "ngIf"], [1, "fw-semibold", "text-nowrap"], [1, "d-inline-flex", "align-items-center", "gap-1", "status-badge", 3, "color"], [1, "status-text"], ["cButton", "", "color", "outline-primary", "size", "sm", 3, "click", "cTooltip"], [3, "cIcon"], ["size", "sm", 1, "me-1", 3, "cIcon"], ["colspan", "9", 1, "text-center", "py-5"], ["size", "3xl", 1, "mb-3", "opacity-50", 3, "cIcon"], [1, "mt-3"], ["xs", "12"], [1, "justify-content-center"], [3, "disabled"], ["cPageLink", "", 3, "click"], [3, "active", 4, "ngFor", "ngForOf"], [3, "active"], [1, "booking-details"], [1, "row", "mb-4"], [1, "col-md-6"], [1, "text-muted", "mb-2"], [1, "fw-bold"], [3, "color"], [1, "border-top", "pt-3", "mb-4"], [1, "text-primary", "mb-3"], [1, "row"], [1, "border-top", "pt-3"], [1, "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "d-flex", "align-items-center", "gap-1", 3, "color"]], template: function ListBookingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ListBookingComponent_div_0_Template, 2, 0, "div", 0)(1, ListBookingComponent_div_1_Template, 145, 39, "div", 1);
    \u0275\u0275elementStart(2, "c-modal", 2);
    \u0275\u0275listener("visibleChange", function ListBookingComponent_Template_c_modal_visibleChange_2_listener($event) {
      return ctx.showDetailsModal = $event;
    });
    \u0275\u0275elementStart(3, "c-modal-header")(4, "h4", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ListBookingComponent_c_modal_body_6_Template, 72, 19, "c-modal-body", 1);
    \u0275\u0275elementStart(7, "c-modal-footer")(8, "button", 4);
    \u0275\u0275listener("click", function ListBookingComponent_Template_button_click_8_listener() {
      return ctx.closeDetailsModal();
    });
    \u0275\u0275text(9, "Close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("visible", ctx.showDetailsModal)("keyboard", true)("backdrop", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx.selectedBookingDetails == null ? null : ctx.selectedBookingDetails.type) === "REQUEST" ? "Join Request Details" : "Booking Details", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedBookingDetails);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  TooltipDirective,
  IconDirective,
  RowComponent,
  ColComponent,
  CardComponent,
  CardBodyComponent,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  FormsModule,
  NgModel,
  FormDirective,
  FormLabelDirective,
  FormControlDirective,
  ButtonDirective,
  TableDirective,
  PaginationComponent,
  PageItemComponent,
  PageLinkDirective,
  ModalComponent,
  ModalHeaderComponent,
  ModalBodyComponent,
  ModalFooterComponent,
  ModalTitleDirective,
  BadgeComponent,
  SpinnerComponent,
  FormSelectDirective,
  ButtonGroupComponent
], styles: [`

.stats-card[_ngcontent-%COMP%] {
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.stats-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.stats-card[_ngcontent-%COMP%]   .stats-icon[_ngcontent-%COMP%] {
  opacity: 0.8;
}
.stats-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 2rem;
  color: #2c3e50;
}
.stats-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-weight: 600;
  letter-spacing: 0.5px;
}
.filter-section[_ngcontent-%COMP%] {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}
.position-relative[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {
  padding-left: 2.5rem;
}
.position-relative[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
  z-index: 10;
}
.table-responsive[_ngcontent-%COMP%] {
  border-radius: 8px;
  overflow-x: auto;
  overflow-y: visible;
  -webkit-overflow-scrolling: touch;
}
.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {
  margin-bottom: 0;
  min-width: 900px;
}
.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #667eea 0%,
      #764ba2 100%);
  color: white;
}
.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  border: none;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  padding: 1rem 0.75rem;
  vertical-align: middle;
}
.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  transition: all 0.2s ease;
}
.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {
  background-color: rgba(0, 123, 255, 0.05);
}
.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 0.875rem 0.75rem;
  vertical-align: middle;
  border-color: #e9ecef;
}
.booking-id[_ngcontent-%COMP%] {
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
}
.booking-id[_ngcontent-%COMP%]:hover {
  background: #e9ecef;
  border-color: #adb5bd;
}
c-badge[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  font-weight: 600;
}
c-badge.d-flex[_ngcontent-%COMP%], 
c-badge.d-inline-flex[_ngcontent-%COMP%] {
  display: inline-flex !important;
  align-items: center;
  gap: 0.25rem;
}
c-badge.d-flex[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
c-badge.d-inline-flex[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}
.status-badge[_ngcontent-%COMP%] {
  max-width: 120px;
  white-space: normal;
  text-align: left;
}
.status-badge[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {
  white-space: normal;
  word-break: break-word;
  line-height: 1.15;
}
c-button-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0;
}
c-button-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
c-button-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.booking-view-tabs-scroll[_ngcontent-%COMP%] {
  overflow-x: auto;
  scrollbar-width: thin;
}
.booking-view-tabs-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {
  height: 4px;
}
.booking-view-tabs[_ngcontent-%COMP%] {
  flex-wrap: nowrap;
}
.booking-view-tabs[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.7rem;
  font-size: 0.8125rem;
  white-space: nowrap;
}
.booking-view-tabs[_ngcontent-%COMP%]   .tab-count[_ngcontent-%COMP%] {
  display: inline-block;
  min-width: 1.4rem;
  padding: 0.05rem 0.35rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.08);
  font-size: 0.6875rem;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
}
.booking-view-tabs[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:not([class*=btn-outline])   .tab-count[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.3);
  color: #fff;
}
.booking-view-tabs[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%] {
  color: #5c6570;
  border-color: #ced4da;
}
.booking-view-tabs[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%]:hover {
  background-color: #6c757d;
  border-color: #6c757d;
  color: #fff;
}
.filter-controls[_ngcontent-%COMP%]   label.form-label[_ngcontent-%COMP%] {
  display: block;
  margin-bottom: 0.35rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #6c757d;
}
.filter-controls[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%], 
.filter-controls[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {
  width: 100%;
  height: calc(1.5em + 0.9rem + 2px);
  padding: 0.45rem 2rem 0.45rem 0.75rem;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  background-color: #fff;
  font-size: 0.875rem;
  color: #2c3e50;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
.filter-controls[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:hover:not(:disabled), 
.filter-controls[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:hover:not(:disabled) {
  border-color: #adb5bd;
}
.filter-controls[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus, 
.filter-controls[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.18);
  outline: none;
}
.filter-controls[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {
  padding-right: 0.75rem;
}
.filter-controls[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%236c757d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='4 6 8 10 12 6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.65rem center;
  background-size: 14px 14px;
  cursor: pointer;
}
.booking-details[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {
  color: #495057;
  font-weight: 600;
  margin-bottom: 0.75rem;
}
.booking-details[_ngcontent-%COMP%]   h6.text-primary[_ngcontent-%COMP%] {
  color: #007bff !important;
}
.booking-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin-bottom: 0.5rem;
}
.booking-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: #495057;
  font-weight: 600;
}
.booking-details[_ngcontent-%COMP%]   .border-top[_ngcontent-%COMP%] {
  border-color: #e9ecef !important;
}
.loading-overlay[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
@media (max-width: 767.98px) {
  .stats-row[_ngcontent-%COMP%] {
    display: none !important;
  }
  .stats-card[_ngcontent-%COMP%] {
    margin-bottom: 1rem;
  }
  .stats-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .stats-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    font-size: 0.875rem;
  }
  .table-responsive[_ngcontent-%COMP%] {
    font-size: 0.875rem;
  }
  .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
    padding: 0.75rem 0.5rem;
    font-size: 0.75rem;
  }
  .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
    padding: 0.75rem 0.5rem;
  }
  .booking-id[_ngcontent-%COMP%] {
    font-size: 0.75rem;
  }
  c-button-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
    font-size: 0.75rem;
    padding: 0.375rem 0.75rem;
  }
}
@media (max-width: 576px) {
  .stats-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
    font-size: 1.25rem;
  }
  .stats-card[_ngcontent-%COMP%]   .stats-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
    width: 1.5rem !important;
    height: 1.5rem !important;
  }
  .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], 
   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
    padding: 0.5rem 0.25rem;
    font-size: 0.75rem;
  }
  .d-flex.gap-2[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 0.5rem !important;
  }
  .d-flex.gap-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    width: 100%;
  }
}
.fade-in[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in;
}
@keyframes _ngcontent-%COMP%_fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.slide-down[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;
}
@keyframes _ngcontent-%COMP%_slideDown {
  from {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    max-height: 500px;
    transform: translateY(0);
  }
}
.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar {
  height: 8px;
}
.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}
.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}
.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
.status-confirmed[_ngcontent-%COMP%] {
  color: #28a745;
}
.status-pending[_ngcontent-%COMP%] {
  color: #ffc107;
}
.status-rejected[_ngcontent-%COMP%] {
  color: #dc3545;
}
.status-cancelled[_ngcontent-%COMP%] {
  color: #6c757d;
}
.status-expired[_ngcontent-%COMP%] {
  color: #6c757d;
  text-decoration: line-through;
  opacity: 0.7;
}
.expired-booking-row[_ngcontent-%COMP%] {
  opacity: 0.6;
  background-color: #f5f5f5 !important;
}
.expired-booking-row[_ngcontent-%COMP%]   .booking-id[_ngcontent-%COMP%], 
.expired-booking-row[_ngcontent-%COMP%]   .booking-date[_ngcontent-%COMP%], 
.expired-booking-row[_ngcontent-%COMP%]   .booking-time[_ngcontent-%COMP%] {
  text-decoration: line-through;
  color: #999 !important;
}
.expired-booking-row[_ngcontent-%COMP%]:hover {
  background-color: #efefef !important;
}
c-badge[color=secondary].text-decoration-line-through[_ngcontent-%COMP%] {
  text-decoration: line-through;
  opacity: 0.7;
}
.cursor-pointer[_ngcontent-%COMP%] {
  cursor: pointer;
}
.text-truncate-custom[_ngcontent-%COMP%] {
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media print {
  .stats-card[_ngcontent-%COMP%], 
   .filter-section[_ngcontent-%COMP%], 
   .btn[_ngcontent-%COMP%], 
   .pagination[_ngcontent-%COMP%] {
    display: none !important;
  }
  .table-responsive[_ngcontent-%COMP%] {
    overflow: visible !important;
  }
  table[_ngcontent-%COMP%] {
    font-size: 0.75rem !important;
    min-width: 0 !important;
  }
  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {
    background: #f8f9fa !important;
    color: #000 !important;
  }
}
/*# sourceMappingURL=list-booking.component.css.map */`] });
var ListBookingComponent = _ListBookingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListBookingComponent, { className: "ListBookingComponent", filePath: "src\\app\\views\\bookings\\list-booking\\list-booking.component.ts", lineNumber: 82 });
})();
export {
  ListBookingComponent
};
//# sourceMappingURL=list-booking.component-2CN5GIQV.mjs.map
