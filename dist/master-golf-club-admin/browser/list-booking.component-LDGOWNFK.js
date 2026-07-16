import {
  require_sweetalert2_all
} from "./chunk-UDKX4ISR.js";
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
} from "./chunk-A7ELECVY.js";
import {
  axios_default
} from "./chunk-EXN3ACQE.js";
import {
  BaseAPIUrl,
  baseURLType
} from "./chunk-AE67A222.js";
import {
  BadgeComponent,
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  CommonModule,
  DefaultValueAccessor,
  FormBuilder,
  FormControlDirective,
  FormControlName,
  FormDirective,
  FormGroupDirective,
  FormsModule,
  IconDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  NgSelectOption,
  PageItemComponent,
  PageLinkDirective,
  PaginationComponent,
  ReactiveFormsModule,
  RowComponent,
  SelectControlValueAccessor,
  SpinnerComponent,
  TableDirective,
  TooltipDirective,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DWS3B4N5.js";
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
} from "./chunk-WDQ2E3IC.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-ZDRA4OZL.js";

// src/app/views/bookings/list-booking/list-booking.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

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
function ListBookingComponent_div_1_div_102_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275property("value", option_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", option_r4.label, " (", option_r4.count, ") ");
  }
}
function ListBookingComponent_div_1_div_102_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r5 = ctx.$implicit;
    \u0275\u0275property("value", course_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", course_r5.name, " ");
  }
}
function ListBookingComponent_div_1_div_102_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tee_r6 = ctx.$implicit;
    \u0275\u0275property("value", tee_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tee_r6.holeNumber, " Holes ");
  }
}
function ListBookingComponent_div_1_div_102_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    \u0275\u0275property("value", option_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r7.label, " ");
  }
}
function ListBookingComponent_div_1_div_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "form", 51)(2, "c-row", 52)(3, "c-col", 53)(4, "label", 54);
    \u0275\u0275text(5, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 55);
    \u0275\u0275template(7, ListBookingComponent_div_1_div_102_option_7_Template, 2, 3, "option", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "c-col", 53)(9, "label", 54);
    \u0275\u0275text(10, "Course");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 57);
    \u0275\u0275listener("change", function ListBookingComponent_div_1_div_102_Template_select_change_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCourseChange($event));
    });
    \u0275\u0275elementStart(12, "option", 58);
    \u0275\u0275text(13, "All Courses");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ListBookingComponent_div_1_div_102_option_14_Template, 2, 2, "option", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "c-col", 53)(16, "label", 54);
    \u0275\u0275text(17, "Tee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 59)(19, "option", 58);
    \u0275\u0275text(20, "All Tees");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ListBookingComponent_div_1_div_102_option_21_Template, 2, 2, "option", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "c-col", 53)(23, "label", 54);
    \u0275\u0275text(24, "Date From");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "c-col", 53)(27, "label", 54);
    \u0275\u0275text(28, "Date To");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "c-col", 53)(31, "label", 54);
    \u0275\u0275text(32, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "select", 62);
    \u0275\u0275template(34, ListBookingComponent_div_1_div_102_option_34_Template, 2, 2, "option", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "c-col", 53)(36, "label", 54);
    \u0275\u0275text(37, "Booking ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "c-col", 64)(40, "button", 65);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_div_102_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearAllFilters());
    });
    \u0275\u0275text(41, " Clear All Filters ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.filterForm);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.statusOptions);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.courses);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.tees);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r1.participantOptions);
  }
}
function ListBookingComponent_div_1_tr_147_small_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 73);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const booking_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r1.icons.cilClock);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", booking_r9.slotTime, " ");
  }
}
function ListBookingComponent_div_1_tr_147_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div", 68)(7, "code", 69);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_tr_147_Template_code_click_7_listener() {
      const booking_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(booking_r9.booking_id));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "c-badge", 70);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(10, "svg", 71);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "td")(13, "div")(14, "div", 72);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "small", 73);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "div")(22, "div");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, ListBookingComponent_div_1_tr_147_small_24_Template, 3, 2, "small", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td")(26, "span", 75);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td")(29, "c-badge", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(30, "svg", 71);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "span", 77);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "td")(34, "button", 78);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_tr_147_Template_button_click_34_listener() {
      const booking_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetails(booking_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(35, "svg", 79);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const booking_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.currentPage - 1) * ctx_r1.itemsPerPage + i_r10 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r9.bookedDate);
    \u0275\u0275advance(3);
    \u0275\u0275property("cTooltip", "Click to copy");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", booking_r9.booking_id, " ");
    \u0275\u0275advance();
    \u0275\u0275property("color", booking_r9.type === "BOOKING" ? "primary" : "info");
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r1.getTypeIcon(booking_r9.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", booking_r9.type, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(booking_r9.member.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r9.member.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r9.course.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(booking_r9.tee.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", booking_r9.slotTime);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatParticipants(booking_r9));
    \u0275\u0275advance(2);
    \u0275\u0275property("color", ctx_r1.getStatusBadgeColor(booking_r9.status));
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r1.getStatusIcon(booking_r9.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r9.status.split("_").join(" "));
    \u0275\u0275advance(2);
    \u0275\u0275property("cTooltip", "View Details");
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r1.icons.cilEye);
  }
}
function ListBookingComponent_div_1_tr_148_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 81)(2, "div", 73);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(3, "svg", 82);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h5");
    \u0275\u0275text(5, "No bookings found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Try adjusting your search criteria or filters.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("cIcon", ctx_r1.icons.cilCalendar);
  }
}
function ListBookingComponent_div_1_c_row_149_c_page_item_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-page-item", 89)(1, "a", 87);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_c_row_149_c_page_item_9_Template_a_click_1_listener() {
      const page_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.changePage(page_r13));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("active", ctx_r1.currentPage === page_r13);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r13);
  }
}
function ListBookingComponent_div_1_c_row_149_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-row", 83)(1, "c-col", 84)(2, "c-pagination", 85)(3, "c-page-item", 86)(4, "a", 87);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_c_row_149_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePage(1));
    });
    \u0275\u0275text(5, "First");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "c-page-item", 86)(7, "a", 87);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_c_row_149_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275text(8, "Previous");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ListBookingComponent_div_1_c_row_149_c_page_item_9_Template, 3, 2, "c-page-item", 88);
    \u0275\u0275elementStart(10, "c-page-item", 86)(11, "a", 87);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_c_row_149_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275text(12, "Next");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "c-page-item", 86)(14, "a", 87);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_c_row_149_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePage(ctx_r1.totalPages));
    });
    \u0275\u0275text(15, "Last");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pageRange);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-disabled", ctx_r1.currentPage === ctx_r1.totalPages);
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
    \u0275\u0275elementStart(74, "c-card", 20)(75, "c-card-body")(76, "c-row", 21)(77, "c-col", 22)(78, "div", 23)(79, "c-button-group", 24)(80, "button", 25);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_Template_button_click_80_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchView("all"));
    });
    \u0275\u0275text(81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "button", 25);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_Template_button_click_82_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchView("bookings"));
    });
    \u0275\u0275text(83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "button", 25);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_Template_button_click_84_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchView("requests"));
    });
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(86, "c-col", 22)(87, "div", 26)(88, "button", 27);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_Template_button_click_88_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(89, "svg", 28);
    \u0275\u0275text(90, " Refresh ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(91, "button", 29);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_Template_button_click_91_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAdvancedFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(92, "svg", 28);
    \u0275\u0275text(93, " Filters ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(94, "button", 30);
    \u0275\u0275listener("click", function ListBookingComponent_div_1_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportData("csv"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(95, "svg", 28);
    \u0275\u0275text(96, " Export CSV ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(97, "c-row", 21)(98, "c-col", 22)(99, "div", 31)(100, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function ListBookingComponent_div_1_Template_input_ngModelChange_100_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ListBookingComponent_div_1_Template_input_input_100_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(101, "svg", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(102, ListBookingComponent_div_1_div_102_Template, 42, 5, "div", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(103, "c-card")(104, "c-card-body")(105, "c-row", 21)(106, "c-col", 35)(107, "p", 36);
    \u0275\u0275text(108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "c-col", 37)(110, "div", 38)(111, "label", 39);
    \u0275\u0275text(112, "Show:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "select", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ListBookingComponent_div_1_Template_select_ngModelChange_113_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.itemsPerPage, $event) || (ctx_r1.itemsPerPage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ListBookingComponent_div_1_Template_select_ngModelChange_113_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onItemsPerPageChange());
    });
    \u0275\u0275elementStart(114, "option", 41);
    \u0275\u0275text(115, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "option", 41);
    \u0275\u0275text(117, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "option", 41);
    \u0275\u0275text(119, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "option", 41);
    \u0275\u0275text(121, "100");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "span", 42);
    \u0275\u0275text(123, "records per page");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(124, "div", 43)(125, "table", 44)(126, "thead")(127, "tr")(128, "th", 45);
    \u0275\u0275text(129, "S.NO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "th", 46);
    \u0275\u0275text(131, "BOOKED DATE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "th", 46);
    \u0275\u0275text(133, "BOOKING ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "th", 46);
    \u0275\u0275text(135, "MEMBER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "th", 46);
    \u0275\u0275text(137, "COURSE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "th", 46);
    \u0275\u0275text(139, "TEE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "th", 46);
    \u0275\u0275text(141, "PARTICIPANTS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "th", 46);
    \u0275\u0275text(143, "STATUS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "th", 47);
    \u0275\u0275text(145, "DETAILS");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(146, "tbody");
    \u0275\u0275template(147, ListBookingComponent_div_1_tr_147_Template, 36, 18, "tr", 48)(148, ListBookingComponent_div_1_tr_148_Template, 8, 1, "tr", 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(149, ListBookingComponent_div_1_c_row_149_Template, 16, 9, "c-row", 49);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("cIcon", ctx_r1.icons.cilCalendar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.statistics.totalBookings);
    \u0275\u0275advance(7);
    \u0275\u0275property("cIcon", ctx_r1.icons.cilCheckCircle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.statistics.confirmedBookings);
    \u0275\u0275advance(7);
    \u0275\u0275property("cIcon", ctx_r1.icons.cilClock);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.statistics.pendingRequests);
    \u0275\u0275advance(7);
    \u0275\u0275property("cIcon", ctx_r1.icons.cilUser);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.statistics.approvedRequests);
    \u0275\u0275advance(7);
    \u0275\u0275property("cIcon", ctx_r1.icons.cilXCircle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.statistics.rejectedRequests);
    \u0275\u0275advance(7);
    \u0275\u0275property("cIcon", ctx_r1.icons.cilBan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.statistics.cancelledBookings);
    \u0275\u0275advance(7);
    \u0275\u0275property("cIcon", ctx_r1.icons.cilCalendar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.statistics.todaysBookings);
    \u0275\u0275advance(7);
    \u0275\u0275property("cIcon", ctx_r1.icons.cilBuilding);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.statistics.activeCourses);
    \u0275\u0275advance(9);
    \u0275\u0275property("color", ctx_r1.currentView === "all" ? "primary" : "outline-primary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" All Records (", ctx_r1.statistics.totalBookings, ") ");
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx_r1.currentView === "bookings" ? "success" : "outline-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Bookings (", ctx_r1.statistics.confirmedBookings, ") ");
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx_r1.currentView === "requests" ? "warning" : "outline-warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Requests (", ctx_r1.statistics.pendingRequests + ctx_r1.statistics.approvedRequests + ctx_r1.statistics.rejectedRequests, ") ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r1.icons.cilRefresh);
    \u0275\u0275advance(3);
    \u0275\u0275property("cIcon", ctx_r1.icons.cilFilter);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isExporting);
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r1.icons.cilDownload);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r1.icons.cilSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showAdvancedFilters);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3(" Showing ", (ctx_r1.currentPage - 1) * ctx_r1.itemsPerPage + 1, "-", ctx_r1.Math.min(ctx_r1.currentPage * ctx_r1.itemsPerPage, ctx_r1.totalItems), " of ", ctx_r1.totalItems, " records ");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.itemsPerPage);
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
    \u0275\u0275property("ngForOf", ctx_r1.paginatedBookings);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paginatedBookings.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
function ListBookingComponent_c_modal_body_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-modal-body")(1, "div", 90)(2, "div", 91)(3, "div", 92)(4, "h6", 93);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 94);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 92)(9, "h6", 93);
    \u0275\u0275text(10, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "c-badge", 95);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 96)(14, "h6", 97);
    \u0275\u0275text(15, "Member Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 98)(17, "div", 92)(18, "p")(19, "strong");
    \u0275\u0275text(20, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p")(23, "strong");
    \u0275\u0275text(24, "Membership ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 92)(27, "p")(28, "strong");
    \u0275\u0275text(29, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p")(32, "strong");
    \u0275\u0275text(33, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 96)(36, "h6", 97);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 98)(39, "div", 92)(40, "p")(41, "strong");
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
    \u0275\u0275elementStart(52, "div", 92)(53, "p")(54, "strong");
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
    \u0275\u0275elementStart(65, "div", 50)(66, "h6", 97);
    \u0275\u0275text(67, "Status Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 99)(69, "c-badge", 100);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(70, "svg", 71);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedBookingDetails.type === "REQUEST" ? "Request ID" : "Booking ID");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedBookingDetails.booking_id);
    \u0275\u0275advance(4);
    \u0275\u0275property("color", ctx_r1.selectedBookingDetails.type === "BOOKING" ? "primary" : "info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedBookingDetails.type === "REQUEST" ? "JOIN REQUEST" : "ORIGINAL BOOKING", " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.selectedBookingDetails.member == null ? null : ctx_r1.selectedBookingDetails.member.name) || "N/A", "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.selectedBookingDetails.member == null ? null : ctx_r1.selectedBookingDetails.member.id) || "N/A", "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.selectedBookingDetails.member == null ? null : ctx_r1.selectedBookingDetails.member.email) || "N/A", "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.selectedBookingDetails.member == null ? null : ctx_r1.selectedBookingDetails.member.phone) || "N/A", "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedBookingDetails.type === "REQUEST" ? "Request Details" : "Booking Details", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedBookingDetails.type === "REQUEST" ? "Requested Date:" : "Booked Date:");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedBookingDetails.bookedDate || "N/A", "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.selectedBookingDetails.course == null ? null : ctx_r1.selectedBookingDetails.course.name) || "N/A", "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.selectedBookingDetails.tee == null ? null : ctx_r1.selectedBookingDetails.tee.name) || "N/A", "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedBookingDetails.slotDate || "N/A", "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedBookingDetails.slotTime || "N/A", "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatParticipants(ctx_r1.selectedBookingDetails), "");
    \u0275\u0275advance(5);
    \u0275\u0275property("color", ctx_r1.getStatusBadgeColor(ctx_r1.selectedBookingDetails.status));
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r1.getStatusIcon(ctx_r1.selectedBookingDetails.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedBookingDetails.status, " ");
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
        this.filteredBookings = [...this.bookings];
        this.totalItems = this.bookings.length;
        this.updatePagination();
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
    if (!searchTerm.trim()) {
      this.filteredBookings = [...this.bookings];
    } else {
      this.filteredBookings = this.bookings.filter((booking) => booking.booking_id.toLowerCase().includes(searchTerm.toLowerCase()) || booking.member.name.toLowerCase().includes(searchTerm.toLowerCase()) || booking.course.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    this.updatePagination();
  }
  switchView(view) {
    this.currentView = view;
    this.applyViewFilter();
  }
  applyViewFilter() {
    let filtered = [...this.bookings];
    if (this.currentView === "bookings") {
      filtered = filtered.filter((booking) => booking.type === "BOOKING");
    } else if (this.currentView === "requests") {
      filtered = filtered.filter((booking) => booking.type === "REQUEST");
    }
    this.filteredBookings = filtered;
    this.updatePagination();
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
    import_sweetalert2.default.fire({
      icon: "success",
      title: "Success",
      text: message,
      timer: 3e3,
      showConfirmButton: false
    });
  }
  showErrorMessage(message) {
    import_sweetalert2.default.fire({
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
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 7, consts: [["class", "d-flex justify-content-center align-items-center", "style", "min-height: 400px;", 4, "ngIf"], [4, "ngIf"], ["size", "lg", "scrollable", "true", 3, "visibleChange", "visible", "keyboard", "backdrop"], ["cModalTitle", ""], ["cButton", "", "color", "secondary", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "min-height", "400px"], ["color", "primary", "size", "sm"], [1, "mb-4", "stats-row"], ["xs", "12", "sm", "6", "lg", "3", 1, "mb-3"], [1, "text-center", "h-100", "stats-card"], [1, "d-flex", "flex-column", "justify-content-center"], [1, "stats-icon", "mb-2"], ["size", "2xl", 1, "text-primary", 3, "cIcon"], [1, "mb-1", "fw-bold"], [1, "text-muted", "mb-0", "small"], ["size", "2xl", 1, "text-success", 3, "cIcon"], ["size", "2xl", 1, "text-warning", 3, "cIcon"], ["size", "2xl", 1, "text-info", 3, "cIcon"], ["size", "2xl", 1, "text-danger", 3, "cIcon"], ["size", "2xl", 1, "text-secondary", 3, "cIcon"], [1, "mb-4"], [1, "mb-3"], ["xs", "12", "md", "6"], [1, "d-flex", "flex-wrap", "gap-2", "align-items-center"], ["role", "group"], ["cButton", "", "size", "sm", 3, "click", "color"], [1, "d-flex", "flex-wrap", "gap-2", "justify-content-md-end"], ["cButton", "", "color", "outline-secondary", "size", "sm", 3, "click", "disabled"], [1, "me-1", 3, "cIcon"], ["cButton", "", "color", "outline-info", "size", "sm", 3, "click"], ["cButton", "", "color", "outline-success", "size", "sm", 3, "click", "disabled"], [1, "position-relative"], ["cFormControl", "", "type", "search", "placeholder", "Search by Booking ID, Member Name, Course...", 1, "ps-5", 3, "ngModelChange", "input", "ngModel"], [1, "position-absolute", "top-50", "start-0", "translate-middle-y", "ms-3", "text-muted", 3, "cIcon"], ["class", "border-top pt-3", 4, "ngIf"], ["xs", "12", "sm", "6"], [1, "mb-0", "text-muted"], ["xs", "12", "sm", "6", 1, "text-sm-end"], [1, "d-flex", "align-items-center", "justify-content-sm-end", "gap-2"], [1, "mb-0", "text-muted", "small"], ["cFormSelect", "", "size", "sm", 2, "width", "auto", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "text-muted", "small"], [1, "table-responsive", "booking-table-wrapper"], ["cTable", "", 1, "booking-table", 3, "hover", "striped", "bordered"], ["scope", "col", 2, "width", "60px"], ["scope", "col"], ["scope", "col", 2, "width", "100px"], [4, "ngFor", "ngForOf"], ["class", "mt-3", 4, "ngIf"], [1, "border-top", "pt-3"], ["cForm", "", 3, "formGroup"], [1, "g-3"], ["xs", "12", "sm", "6", "md", "3"], ["cFormLabel", ""], ["cFormSelect", "", "formControlName", "status"], [3, "value", 4, "ngFor", "ngForOf"], ["cFormSelect", "", "formControlName", "course", 3, "change"], ["value", ""], ["cFormSelect", "", "formControlName", "tee"], ["cFormControl", "", "type", "date", "formControlName", "dateFrom"], ["cFormControl", "", "type", "date", "formControlName", "dateTo"], ["cFormSelect", "", "formControlName", "participants"], ["cFormControl", "", "type", "text", "placeholder", "Search by ID", "formControlName", "bookingId"], ["xs", "12", "md", "6", 1, "d-flex", "align-items-end"], ["cButton", "", "color", "outline-secondary", "size", "sm", "type", "button", 3, "click"], [3, "value"], [1, "text-nowrap"], [1, "d-flex", "flex-column", "align-items-start", "gap-1"], [1, "booking-id", 3, "click", "cTooltip"], [1, "d-inline-flex", "align-items-center", "gap-1", 3, "color"], ["size", "sm", 3, "cIcon"], [1, "fw-semibold"], [1, "text-muted"], ["class", "text-muted", 4, "ngIf"], [1, "fw-semibold", "text-nowrap"], [1, "d-inline-flex", "align-items-center", "gap-1", "status-badge", 3, "color"], [1, "status-text"], ["cButton", "", "color", "outline-primary", "size", "sm", 3, "click", "cTooltip"], [3, "cIcon"], ["size", "sm", 1, "me-1", 3, "cIcon"], ["colspan", "9", 1, "text-center", "py-5"], ["size", "3xl", 1, "mb-3", "opacity-50", 3, "cIcon"], [1, "mt-3"], ["xs", "12"], [1, "justify-content-center"], [3, "disabled"], ["cPageLink", "", 3, "click"], [3, "active", 4, "ngFor", "ngForOf"], [3, "active"], [1, "booking-details"], [1, "row", "mb-4"], [1, "col-md-6"], [1, "text-muted", "mb-2"], [1, "fw-bold"], [3, "color"], [1, "border-top", "pt-3", "mb-4"], [1, "text-primary", "mb-3"], [1, "row"], [1, "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "d-flex", "align-items-center", "gap-1", 3, "color"]], template: function ListBookingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ListBookingComponent_div_0_Template, 2, 0, "div", 0)(1, ListBookingComponent_div_1_Template, 150, 44, "div", 1);
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
  ButtonGroupComponent
], styles: ["\n\n.stats-card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.stats-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.stats-card[_ngcontent-%COMP%]   .stats-icon[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n.stats-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2c3e50;\n}\n.stats-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.filter-section[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n.position-relative[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 2.5rem;\n}\n.position-relative[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  z-index: 10;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow-x: auto;\n  overflow-y: visible;\n  -webkit-overflow-scrolling: touch;\n}\n.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  min-width: 900px;\n}\n.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: none;\n  font-weight: 600;\n  font-size: 0.875rem;\n  letter-spacing: 0.5px;\n  padding: 1rem 0.75rem;\n  vertical-align: middle;\n}\n.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n}\n.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 123, 255, 0.05);\n}\n.table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.875rem 0.75rem;\n  vertical-align: middle;\n  border-color: #e9ecef;\n}\n.booking-id[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.2s ease;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n}\n.booking-id[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n}\nc-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n}\nc-badge.d-flex[_ngcontent-%COMP%], \nc-badge.d-inline-flex[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n  align-items: center;\n  gap: 0.25rem;\n}\nc-badge.d-flex[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \nc-badge.d-inline-flex[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  flex-shrink: 0;\n}\n.status-badge[_ngcontent-%COMP%] {\n  max-width: 120px;\n  white-space: normal;\n  text-align: left;\n}\n.status-badge[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  white-space: normal;\n  word-break: break-word;\n  line-height: 1.15;\n}\nc-button-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  border-radius: 0;\n}\nc-button-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\nc-button-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.booking-details[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n  margin-bottom: 0.75rem;\n}\n.booking-details[_ngcontent-%COMP%]   h6.text-primary[_ngcontent-%COMP%] {\n  color: #007bff !important;\n}\n.booking-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.booking-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n}\n.booking-details[_ngcontent-%COMP%]   .border-top[_ngcontent-%COMP%] {\n  border-color: #e9ecef !important;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n@media (max-width: 767.98px) {\n  .stats-row[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .stats-card[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .stats-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .stats-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .table-responsive[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.5rem;\n    font-size: 0.75rem;\n  }\n  .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.5rem;\n  }\n  .booking-id[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  c-button-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    padding: 0.375rem 0.75rem;\n  }\n}\n@media (max-width: 576px) {\n  .stats-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .stats-card[_ngcontent-%COMP%]   .stats-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 1.5rem !important;\n    height: 1.5rem !important;\n  }\n  .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.25rem;\n    font-size: 0.75rem;\n  }\n  .d-flex.gap-2[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem !important;\n  }\n  .d-flex.gap-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.slide-down[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    max-height: 500px;\n    transform: translateY(0);\n  }\n}\n.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 8px;\n}\n.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 4px;\n}\n.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.status-confirmed[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.status-pending[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n.status-rejected[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.status-expired[_ngcontent-%COMP%] {\n  color: #6c757d;\n  text-decoration: line-through;\n  opacity: 0.7;\n}\n.expired-booking-row[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  background-color: #f5f5f5 !important;\n}\n.expired-booking-row[_ngcontent-%COMP%]   .booking-id[_ngcontent-%COMP%], \n.expired-booking-row[_ngcontent-%COMP%]   .booking-date[_ngcontent-%COMP%], \n.expired-booking-row[_ngcontent-%COMP%]   .booking-time[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #999 !important;\n}\n.expired-booking-row[_ngcontent-%COMP%]:hover {\n  background-color: #efefef !important;\n}\nc-badge[color=secondary].text-decoration-line-through[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  opacity: 0.7;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.text-truncate-custom[_ngcontent-%COMP%] {\n  max-width: 150px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media print {\n  .stats-card[_ngcontent-%COMP%], \n   .filter-section[_ngcontent-%COMP%], \n   .btn[_ngcontent-%COMP%], \n   .pagination[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .table-responsive[_ngcontent-%COMP%] {\n    overflow: visible !important;\n  }\n  table[_ngcontent-%COMP%] {\n    font-size: 0.75rem !important;\n    min-width: 0 !important;\n  }\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    background: #f8f9fa !important;\n    color: #000 !important;\n  }\n}\n/*# sourceMappingURL=list-booking.component.css.map */"] });
var ListBookingComponent = _ListBookingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListBookingComponent, { className: "ListBookingComponent", filePath: "src\\app\\views\\bookings\\list-booking\\list-booking.component.ts", lineNumber: 80 });
})();
export {
  ListBookingComponent
};
//# sourceMappingURL=list-booking.component-LDGOWNFK.js.map
