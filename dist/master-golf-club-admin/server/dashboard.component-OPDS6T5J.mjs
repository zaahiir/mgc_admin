import './polyfills.server.mjs';
import {
  cilCalendar,
  cilChartLine,
  cilClock,
  cilEnvelopeClosed,
  cilLocationPin,
  cilPeople,
  cilReload
} from "./chunk-MJFQPHHA.mjs";
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
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  IconDirective,
  RowComponent,
  SpinnerComponent,
  TableDirective
} from "./chunk-VUYBFT6U.mjs";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  RouterLink
} from "./chunk-7RJECGZ5.mjs";
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-J4TCKMJW.mjs";
import {
  __async
} from "./chunk-CKH4O4N6.mjs";

// src/app/views/common-service/dashboard/dashboard.service.ts
var _DashboardService = class _DashboardService {
  constructor() {
    this.statsUrl = new BaseAPIUrl().getUrl(baseURLType) + "dashboard/stats/";
  }
  getStats() {
    return axios_default.get(this.statsUrl);
  }
};
_DashboardService.\u0275fac = function DashboardService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardService)();
};
_DashboardService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
var DashboardService = _DashboardService;

// src/app/views/dashboard/dashboard.component.ts
function DashboardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "c-spinner", 3);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Updated ", \u0275\u0275pipeBind2(2, 1, ctx_r1.lastUpdated, "HH:mm:ss"), " \xB7 refreshes every 30s");
  }
}
function DashboardComponent_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "\xB7 refreshing\u2026");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function DashboardComponent_div_1_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " No bookings created in the last 7 days. ");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_1_div_68_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42);
    \u0275\u0275element(4, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r3.count);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r1.barHeight(day_r3.count));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r3.label);
  }
}
function DashboardComponent_div_1_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, DashboardComponent_div_1_div_68_div_1_Template, 7, 4, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.stats == null ? null : ctx_r1.stats.bookingsTrend);
  }
}
function DashboardComponent_div_1_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " No bookings yet. ");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_1_div_78_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 49);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "div", 50);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 49);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "c-badge", 51);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const booking_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r4.bookingId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r4.memberName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", booking_r4.courseName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r4.teeInfo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatSlot(booking_r4.slotDate, booking_r4.bookingTime));
    \u0275\u0275advance(2);
    \u0275\u0275property("color", ctx_r1.statusColor(booking_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", booking_r4.status, " ");
  }
}
function DashboardComponent_div_1_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "table", 46)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Booking ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Member");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Course");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Slot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, DashboardComponent_div_1_div_78_tr_15_Template, 14, 7, "tr", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.stats == null ? null : ctx_r1.stats.recentBookings);
  }
}
function DashboardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 4)(2, "div")(3, "h4", 5);
    \u0275\u0275text(4, "Club Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275template(6, DashboardComponent_div_1_span_6_Template, 3, 4, "span", 1)(7, DashboardComponent_div_1_span_7_Template, 2, 0, "span", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 8);
    \u0275\u0275listener("click", function DashboardComponent_div_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadStats());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(9, "svg", 9);
    \u0275\u0275text(10, " Refresh ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, DashboardComponent_div_1_div_11_Template, 2, 1, "div", 10);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "c-row", 11)(13, "c-col", 12)(14, "c-card", 13)(15, "c-card-body")(16, "div", 14)(17, "div")(18, "div", 15);
    \u0275\u0275text(19, "Bookings Today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 16);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 17);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(24, "svg", 18);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "c-col", 12)(26, "c-card", 19)(27, "c-card-body")(28, "div", 14)(29, "div")(30, "div", 15);
    \u0275\u0275text(31, "Members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 16);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 17);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(36, "svg", 18);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(37, "c-col", 12)(38, "c-card", 20)(39, "c-card-body")(40, "div", 14)(41, "div")(42, "div", 15);
    \u0275\u0275text(43, "Pending Requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 16);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 17);
    \u0275\u0275text(47, "awaiting approval");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(48, "svg", 18);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(49, "c-col", 12)(50, "c-card", 21)(51, "c-card-body")(52, "div", 14)(53, "div")(54, "div", 15);
    \u0275\u0275text(55, "Courses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 16);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 17);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(60, "svg", 18);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(61, "c-row")(62, "c-col", 22)(63, "c-card", 23)(64, "c-card-header", 24);
    \u0275\u0275text(65, "Bookings Made (last 7 days)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "c-card-body");
    \u0275\u0275template(67, DashboardComponent_div_1_div_67_Template, 2, 0, "div", 25)(68, DashboardComponent_div_1_div_68_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "c-col", 27)(70, "c-card", 23)(71, "c-card-header", 28)(72, "span", 24);
    \u0275\u0275text(73, "Latest Bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "a", 29);
    \u0275\u0275text(75, "View all");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "c-card-body", 30);
    \u0275\u0275template(77, DashboardComponent_div_1_div_77_Template, 2, 0, "div", 25)(78, DashboardComponent_div_1_div_78_Template, 16, 1, "div", 31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(79, "c-row")(80, "c-col", 32)(81, "c-card")(82, "c-card-body", 28)(83, "div")(84, "div", 15);
    \u0275\u0275text(85, "Contact Enquiries");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 33);
    \u0275\u0275text(87);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(88, "svg", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(89, "c-col", 32)(90, "c-card")(91, "c-card-body", 28)(92, "div")(93, "div", 15);
    \u0275\u0275text(94, "Member Enquiries");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 33);
    \u0275\u0275text(96);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(97, "svg", 34);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_12_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_21_0;
    let tmp_23_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.lastUpdated);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isRefreshing);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isRefreshing);
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r1.icons.cilReload);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r1.stats == null ? null : ctx_r1.stats.bookings == null ? null : ctx_r1.stats.bookings.today) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (tmp_7_0 = ctx_r1.stats == null ? null : ctx_r1.stats.bookings == null ? null : ctx_r1.stats.bookings.upcoming) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : 0, " upcoming");
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r1.icons.cilCalendar);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((tmp_9_0 = ctx_r1.stats == null ? null : ctx_r1.stats.members == null ? null : ctx_r1.stats.members.total) !== null && tmp_9_0 !== void 0 ? tmp_9_0 : 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (tmp_10_0 = ctx_r1.stats == null ? null : ctx_r1.stats.members == null ? null : ctx_r1.stats.members.newThisMonth) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : 0, " new this month");
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r1.icons.cilPeople);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((tmp_12_0 = ctx_r1.stats == null ? null : ctx_r1.stats.joinRequests == null ? null : ctx_r1.stats.joinRequests.pending) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("cIcon", ctx_r1.icons.cilClock);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((tmp_14_0 = ctx_r1.stats == null ? null : ctx_r1.stats.courses == null ? null : ctx_r1.stats.courses.active) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (tmp_15_0 = ctx_r1.stats == null ? null : ctx_r1.stats.courses == null ? null : ctx_r1.stats.courses.tees) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : 0, " tees");
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r1.icons.cilLocationPin);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.trendPeak === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.trendPeak > 0);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", !(ctx_r1.stats == null ? null : ctx_r1.stats.recentBookings == null ? null : ctx_r1.stats.recentBookings.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats == null ? null : ctx_r1.stats.recentBookings == null ? null : ctx_r1.stats.recentBookings.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((tmp_21_0 = ctx_r1.stats == null ? null : ctx_r1.stats.enquiries == null ? null : ctx_r1.stats.enquiries.contact) !== null && tmp_21_0 !== void 0 ? tmp_21_0 : 0);
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r1.icons.cilEnvelopeClosed);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((tmp_23_0 = ctx_r1.stats == null ? null : ctx_r1.stats.enquiries == null ? null : ctx_r1.stats.enquiries.member) !== null && tmp_23_0 !== void 0 ? tmp_23_0 : 0);
    \u0275\u0275advance();
    \u0275\u0275property("cIcon", ctx_r1.icons.cilEnvelopeClosed);
  }
}
var _DashboardComponent = class _DashboardComponent {
  constructor(dashboardService) {
    this.dashboardService = dashboardService;
    this.icons = { cilCalendar, cilChartLine, cilClock, cilPeople, cilReload, cilEnvelopeClosed, cilLocationPin };
    this.stats = null;
    this.isLoading = true;
    this.isRefreshing = false;
    this.errorMessage = "";
    this.lastUpdated = null;
    this.timerId = null;
  }
  ngOnInit() {
    this.loadStats();
    this.timerId = setInterval(() => this.loadStats(true), _DashboardComponent.REFRESH_MS);
  }
  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
  loadStats(isBackground = false) {
    return __async(this, null, function* () {
      if (isBackground) {
        this.isRefreshing = true;
      }
      try {
        const response = yield this.dashboardService.getStats();
        if (response?.data?.code === 1) {
          this.stats = response.data.data;
          this.lastUpdated = /* @__PURE__ */ new Date();
          this.errorMessage = "";
        } else {
          this.errorMessage = response?.data?.message || "Failed to load dashboard stats";
        }
      } catch (error) {
        console.error("Error loading dashboard stats:", error);
        this.errorMessage = "Could not reach the server. Figures may be out of date.";
      } finally {
        this.isLoading = false;
        this.isRefreshing = false;
      }
    });
  }
  /** Tallest bar in the 7-day trend, used to scale the others. */
  get trendPeak() {
    if (!this.stats?.bookingsTrend?.length)
      return 0;
    return Math.max(...this.stats.bookingsTrend.map((d) => d.count));
  }
  barHeight(count) {
    const peak = this.trendPeak;
    if (!peak)
      return "2px";
    return `${Math.max(count / peak * 100, 2)}%`;
  }
  statusColor(status) {
    switch ((status || "").toLowerCase()) {
      case "confirmed":
        return "success";
      case "approved":
        return "info";
      case "pending":
      case "pending_approval":
        return "warning";
      case "completed":
        return "primary";
      default:
        return "secondary";
    }
  }
  formatSlot(date, time) {
    if (!date)
      return "Date not set";
    const formatted = new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "2-digit"
    });
    return time ? `${formatted}, ${time}` : formatted;
  }
};
_DashboardComponent.REFRESH_MS = 3e4;
_DashboardComponent.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(DashboardService));
};
_DashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["class", "d-flex justify-content-center align-items-center", "style", "min-height: 300px;", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "min-height", "300px"], ["color", "primary"], [1, "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "mb-3", "gap-2"], [1, "mb-0", "fw-bold"], [1, "small", "text-body-secondary"], ["class", "ms-1", 4, "ngIf"], ["cButton", "", "color", "outline-primary", "size", "sm", 3, "click", "disabled"], [1, "me-1", 3, "cIcon"], ["class", "alert alert-warning py-2 small", 4, "ngIf"], [1, "mb-4"], ["xs", "12", "sm", "6", "lg", "3", 1, "mb-3"], [1, "h-100", "kpi-card", "kpi-primary"], [1, "d-flex", "justify-content-between", "align-items-start"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-sub"], ["size", "xl", 1, "kpi-icon", 3, "cIcon"], [1, "h-100", "kpi-card", "kpi-success"], [1, "h-100", "kpi-card", "kpi-warning"], [1, "h-100", "kpi-card", "kpi-info"], ["xs", "12", "lg", "5", 1, "mb-4"], [1, "h-100"], [1, "fw-semibold"], ["class", "text-body-secondary small text-center py-5", 4, "ngIf"], ["class", "trend-chart", 4, "ngIf"], ["xs", "12", "lg", "7", 1, "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center"], ["routerLink", "/bookings", 1, "small", "text-decoration-none"], [1, "p-0"], ["class", "table-responsive", 4, "ngIf"], ["xs", "12", "sm", "6", 1, "mb-3"], [1, "fs-4", "fw-bold"], ["size", "xl", 1, "text-body-secondary", 3, "cIcon"], [1, "ms-1"], [1, "alert", "alert-warning", "py-2", "small"], [1, "text-body-secondary", "small", "text-center", "py-5"], [1, "trend-chart"], ["class", "trend-bar-wrap", 4, "ngFor", "ngForOf"], [1, "trend-bar-wrap"], [1, "trend-count"], [1, "trend-track"], [1, "trend-bar"], [1, "trend-label"], [1, "table-responsive"], ["cTable", "", 1, "mb-0", "align-middle"], [4, "ngFor", "ngForOf"], [1, "small", "fw-semibold"], [1, "small"], [1, "text-body-secondary"], [1, "text-uppercase", "small", 3, "color"]], template: function DashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DashboardComponent_div_0_Template, 2, 0, "div", 0)(1, DashboardComponent_div_1_Template, 98, 24, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  DatePipe,
  RouterLink,
  RowComponent,
  ColComponent,
  CardComponent,
  CardBodyComponent,
  CardHeaderComponent,
  ButtonDirective,
  IconDirective,
  SpinnerComponent,
  TableDirective,
  BadgeComponent
], styles: ["\n\n.kpi-card[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-left-width: 4px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: #6c757d;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: 1.2;\n  color: #2c3e50;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #8a939b;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  opacity: 0.35;\n}\n.kpi-primary[_ngcontent-%COMP%] {\n  border-left-color: #667eea;\n}\n.kpi-primary[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.kpi-success[_ngcontent-%COMP%] {\n  border-left-color: #28a745;\n}\n.kpi-success[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.kpi-warning[_ngcontent-%COMP%] {\n  border-left-color: #ffc107;\n}\n.kpi-warning[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n.kpi-info[_ngcontent-%COMP%] {\n  border-left-color: #17a2b8;\n}\n.kpi-info[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n.trend-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 0.5rem;\n  min-height: 180px;\n}\n.trend-chart[_ngcontent-%COMP%]   .trend-bar-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.35rem;\n}\n.trend-chart[_ngcontent-%COMP%]   .trend-count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #6c757d;\n}\n.trend-chart[_ngcontent-%COMP%]   .trend-track[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  width: 100%;\n  height: 120px;\n}\n.trend-chart[_ngcontent-%COMP%]   .trend-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 4px 4px 0 0;\n  background:\n    linear-gradient(\n      180deg,\n      #667eea 0%,\n      #764ba2 100%);\n  transition: height 0.3s ease;\n}\n.trend-chart[_ngcontent-%COMP%]   .trend-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #8a939b;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
var DashboardComponent = _DashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\views\\dashboard\\dashboard.component.ts", lineNumber: 33 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=dashboard.component-OPDS6T5J.mjs.map
