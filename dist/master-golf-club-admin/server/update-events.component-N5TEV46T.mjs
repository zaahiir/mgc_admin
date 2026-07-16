import './polyfills.server.mjs';
import {
  MemberEventsService
} from "./chunk-EVMQQCEB.mjs";
import {
  Swal
} from "./chunk-LUM3LCUE.mjs";
import {
  EditorComponent,
  EditorModule
} from "./chunk-3PBELD5C.mjs";
import "./chunk-KMHHOWHO.mjs";
import "./chunk-R72VMWDM.mjs";
import "./chunk-HYNU6U63.mjs";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CheckboxControlValueAccessor,
  ColComponent,
  DefaultValueAccessor,
  FormBuilder,
  FormControlDirective,
  FormControlName,
  FormDirective,
  FormFeedbackComponent,
  FormFloatingDirective,
  FormGroupDirective,
  FormLabelDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  RowComponent,
  Validators,
  ɵNgNoValidate
} from "./chunk-KHKHR2VG.mjs";
import {
  ActivatedRoute,
  CommonModule,
  NgIf,
  Router,
  RouterLink,
  RouterModule
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-J4TCKMJW.mjs";
import {
  __async
} from "./chunk-CKH4O4N6.mjs";

// src/app/views/events/update-events/update-events.component.ts
var _c0 = () => ({ plugins: "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount", toolbar: "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat" });
var _c1 = () => ["/events"];
function UpdateEventsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "span", 4);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function UpdateEventsComponent_c_row_1_c_form_feedback_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventTitle"), "\n            ");
  }
}
function UpdateEventsComponent_c_row_1_c_form_feedback_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventDate"), "\n            ");
  }
}
function UpdateEventsComponent_c_row_1_c_form_feedback_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventVenue"), "\n            ");
  }
}
function UpdateEventsComponent_c_row_1_c_form_feedback_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventEntryPrice"), "\n            ");
  }
}
function UpdateEventsComponent_c_row_1_c_form_feedback_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", ctx_r1.getErrorMessage("EventImage"), "\n              ");
  }
}
function UpdateEventsComponent_c_row_1_div_77_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function UpdateEventsComponent_c_row_1_div_77_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearMainImage());
    });
    \u0275\u0275text(1, "\n                Remove Image\n              ");
    \u0275\u0275elementEnd();
  }
}
function UpdateEventsComponent_c_row_1_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "\n              ");
    \u0275\u0275element(2, "img", 49);
    \u0275\u0275text(3, "\n              ");
    \u0275\u0275template(4, UpdateEventsComponent_c_row_1_div_77_button_4_Template, 2, 0, "button", 50);
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.mainImagePreview, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isEditMode);
  }
}
function UpdateEventsComponent_c_row_1_c_form_feedback_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventDetails"), "\n            ");
  }
}
function UpdateEventsComponent_c_row_1_c_form_feedback_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventActivities"), "\n            ");
  }
}
function UpdateEventsComponent_c_row_1_c_form_feedback_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", ctx_r1.getErrorMessage("EventActivitiesimageOne"), "\n              ");
  }
}
function UpdateEventsComponent_c_row_1_div_116_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function UpdateEventsComponent_c_row_1_div_116_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearActivitiesImageOne());
    });
    \u0275\u0275text(1, "\n                Remove Image\n              ");
    \u0275\u0275elementEnd();
  }
}
function UpdateEventsComponent_c_row_1_div_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "\n              ");
    \u0275\u0275element(2, "img", 52);
    \u0275\u0275text(3, "\n              ");
    \u0275\u0275template(4, UpdateEventsComponent_c_row_1_div_116_button_4_Template, 2, 0, "button", 50);
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.activitiesImageOnePreview, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isEditMode);
  }
}
function UpdateEventsComponent_c_row_1_c_form_feedback_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", ctx_r1.getErrorMessage("EventActivitiesimageTwo"), "\n              ");
  }
}
function UpdateEventsComponent_c_row_1_div_132_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function UpdateEventsComponent_c_row_1_div_132_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearActivitiesImageTwo());
    });
    \u0275\u0275text(1, "\n                Remove Image\n              ");
    \u0275\u0275elementEnd();
  }
}
function UpdateEventsComponent_c_row_1_div_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "\n              ");
    \u0275\u0275element(2, "img", 53);
    \u0275\u0275text(3, "\n              ");
    \u0275\u0275template(4, UpdateEventsComponent_c_row_1_div_132_button_4_Template, 2, 0, "button", 50);
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.activitiesImageTwoPreview, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isEditMode);
  }
}
function UpdateEventsComponent_c_row_1_c_form_feedback_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventDetailOrganizer"), "\n            ");
  }
}
function UpdateEventsComponent_c_row_1_c_form_feedback_159_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventEndDate"), "\n            ");
  }
}
function UpdateEventsComponent_c_row_1_c_form_feedback_169_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventTime"), "\n            ");
  }
}
function UpdateEventsComponent_c_row_1_c_form_feedback_179_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventEmail"), "\n            ");
  }
}
function UpdateEventsComponent_c_row_1_c_form_feedback_189_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventPhone"), "\n            ");
  }
}
function UpdateEventsComponent_c_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-row");
    \u0275\u0275text(1, "\n  ");
    \u0275\u0275elementStart(2, "c-col", 5);
    \u0275\u0275text(3, "\n    ");
    \u0275\u0275elementStart(4, "c-card", 6);
    \u0275\u0275text(5, "\n      ");
    \u0275\u0275elementStart(6, "c-card-header");
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n      ");
    \u0275\u0275elementStart(12, "c-card-body");
    \u0275\u0275text(13, "\n        ");
    \u0275\u0275elementStart(14, "form", 7);
    \u0275\u0275listener("ngSubmit", function UpdateEventsComponent_c_row_1_Template_form_ngSubmit_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275text(15, "\n          \n          ");
    \u0275\u0275text(16, "\n          ");
    \u0275\u0275elementStart(17, "c-col", 5);
    \u0275\u0275text(18, "\n            ");
    \u0275\u0275elementStart(19, "h5");
    \u0275\u0275text(20, "Basic Information");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "\n          \n          ");
    \u0275\u0275elementStart(23, "c-col", 8);
    \u0275\u0275text(24, "\n            ");
    \u0275\u0275element(25, "input", 9);
    \u0275\u0275text(26, "\n            ");
    \u0275\u0275elementStart(27, "label", 10);
    \u0275\u0275text(28, "Event Title *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\n            ");
    \u0275\u0275template(30, UpdateEventsComponent_c_row_1_c_form_feedback_30_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275text(31, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, "\n\n          ");
    \u0275\u0275elementStart(33, "c-col", 8);
    \u0275\u0275text(34, "\n            ");
    \u0275\u0275element(35, "input", 12);
    \u0275\u0275text(36, "\n            ");
    \u0275\u0275elementStart(37, "label", 13);
    \u0275\u0275text(38, "Event Date *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, "\n            ");
    \u0275\u0275template(40, UpdateEventsComponent_c_row_1_c_form_feedback_40_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275text(41, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, "\n\n          ");
    \u0275\u0275elementStart(43, "c-col", 8);
    \u0275\u0275text(44, "\n            ");
    \u0275\u0275element(45, "input", 14);
    \u0275\u0275text(46, "\n            ");
    \u0275\u0275elementStart(47, "label", 15);
    \u0275\u0275text(48, "Event Venue *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, "\n            ");
    \u0275\u0275template(50, UpdateEventsComponent_c_row_1_c_form_feedback_50_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275text(51, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, "\n\n          ");
    \u0275\u0275elementStart(53, "c-col", 8);
    \u0275\u0275text(54, "\n            ");
    \u0275\u0275element(55, "input", 16);
    \u0275\u0275text(56, "\n            ");
    \u0275\u0275elementStart(57, "label", 17);
    \u0275\u0275text(58, "Event Entry Price *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59, "\n            ");
    \u0275\u0275template(60, UpdateEventsComponent_c_row_1_c_form_feedback_60_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275text(61, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(62, "\n\n          ");
    \u0275\u0275text(63, "\n          ");
    \u0275\u0275elementStart(64, "c-col", 18);
    \u0275\u0275text(65, "\n            ");
    \u0275\u0275elementStart(66, "div", 19);
    \u0275\u0275text(67, "\n              ");
    \u0275\u0275elementStart(68, "label", 20);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275text(70, "\n              ");
    \u0275\u0275elementStart(71, "input", 21);
    \u0275\u0275listener("change", function UpdateEventsComponent_c_row_1_Template_input_change_71_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMainImageChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(72, "\n              ");
    \u0275\u0275template(73, UpdateEventsComponent_c_row_1_c_form_feedback_73_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275text(74, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(75, "\n            ");
    \u0275\u0275text(76, "\n            ");
    \u0275\u0275template(77, UpdateEventsComponent_c_row_1_div_77_Template, 6, 2, "div", 22);
    \u0275\u0275text(78, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(79, "\n\n          ");
    \u0275\u0275text(80, "\n          ");
    \u0275\u0275elementStart(81, "c-col", 18);
    \u0275\u0275text(82, "\n            ");
    \u0275\u0275elementStart(83, "label", 23);
    \u0275\u0275text(84, "Event Details *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, "\n            ");
    \u0275\u0275element(86, "editor", 24);
    \u0275\u0275text(87, "\n            ");
    \u0275\u0275template(88, UpdateEventsComponent_c_row_1_c_form_feedback_88_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275text(89, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(90, "\n\n\n\n          ");
    \u0275\u0275text(91, "\n          ");
    \u0275\u0275elementStart(92, "c-col", 18);
    \u0275\u0275text(93, "\n            ");
    \u0275\u0275elementStart(94, "label", 25);
    \u0275\u0275text(95, "Event Activities *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(96, "\n            ");
    \u0275\u0275element(97, "editor", 26);
    \u0275\u0275text(98, "\n            ");
    \u0275\u0275template(99, UpdateEventsComponent_c_row_1_c_form_feedback_99_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275text(100, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(101, "\n\n          ");
    \u0275\u0275text(102, "\n          ");
    \u0275\u0275elementStart(103, "c-col", 27);
    \u0275\u0275text(104, "\n            ");
    \u0275\u0275elementStart(105, "div", 19);
    \u0275\u0275text(106, "\n              ");
    \u0275\u0275elementStart(107, "label", 28);
    \u0275\u0275text(108, "Event Activities Image 1 (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(109, "\n              ");
    \u0275\u0275elementStart(110, "input", 29);
    \u0275\u0275listener("change", function UpdateEventsComponent_c_row_1_Template_input_change_110_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onActivitiesImageOneChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(111, "\n              ");
    \u0275\u0275template(112, UpdateEventsComponent_c_row_1_c_form_feedback_112_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275text(113, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(114, "\n            ");
    \u0275\u0275text(115, "\n            ");
    \u0275\u0275template(116, UpdateEventsComponent_c_row_1_div_116_Template, 6, 2, "div", 22);
    \u0275\u0275text(117, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(118, "\n\n          ");
    \u0275\u0275elementStart(119, "c-col", 27);
    \u0275\u0275text(120, "\n            ");
    \u0275\u0275elementStart(121, "div", 19);
    \u0275\u0275text(122, "\n              ");
    \u0275\u0275elementStart(123, "label", 30);
    \u0275\u0275text(124, "Event Activities Image 2 (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(125, "\n              ");
    \u0275\u0275elementStart(126, "input", 31);
    \u0275\u0275listener("change", function UpdateEventsComponent_c_row_1_Template_input_change_126_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onActivitiesImageTwoChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(127, "\n              ");
    \u0275\u0275template(128, UpdateEventsComponent_c_row_1_c_form_feedback_128_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275text(129, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(130, "\n            ");
    \u0275\u0275text(131, "\n            ");
    \u0275\u0275template(132, UpdateEventsComponent_c_row_1_div_132_Template, 6, 2, "div", 22);
    \u0275\u0275text(133, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(134, "\n\n          ");
    \u0275\u0275text(135, "\n          ");
    \u0275\u0275elementStart(136, "c-col", 5);
    \u0275\u0275text(137, "\n            ");
    \u0275\u0275elementStart(138, "h5");
    \u0275\u0275text(139, "Event Details");
    \u0275\u0275elementEnd();
    \u0275\u0275text(140, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(141, "\n\n          ");
    \u0275\u0275elementStart(142, "c-col", 8);
    \u0275\u0275text(143, "\n            ");
    \u0275\u0275element(144, "input", 32);
    \u0275\u0275text(145, "\n            ");
    \u0275\u0275elementStart(146, "label", 33);
    \u0275\u0275text(147, "Event Organizer *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(148, "\n            ");
    \u0275\u0275template(149, UpdateEventsComponent_c_row_1_c_form_feedback_149_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275text(150, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(151, "\n\n          ");
    \u0275\u0275elementStart(152, "c-col", 8);
    \u0275\u0275text(153, "\n            ");
    \u0275\u0275element(154, "input", 34);
    \u0275\u0275text(155, "\n            ");
    \u0275\u0275elementStart(156, "label", 35);
    \u0275\u0275text(157, "Event End Date *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(158, "\n            ");
    \u0275\u0275template(159, UpdateEventsComponent_c_row_1_c_form_feedback_159_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275text(160, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(161, "\n\n          ");
    \u0275\u0275elementStart(162, "c-col", 8);
    \u0275\u0275text(163, "\n            ");
    \u0275\u0275element(164, "input", 36);
    \u0275\u0275text(165, "\n            ");
    \u0275\u0275elementStart(166, "label", 37);
    \u0275\u0275text(167, "Event Time *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(168, "\n            ");
    \u0275\u0275template(169, UpdateEventsComponent_c_row_1_c_form_feedback_169_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275text(170, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(171, "\n\n          ");
    \u0275\u0275elementStart(172, "c-col", 8);
    \u0275\u0275text(173, "\n            ");
    \u0275\u0275element(174, "input", 38);
    \u0275\u0275text(175, "\n            ");
    \u0275\u0275elementStart(176, "label", 39);
    \u0275\u0275text(177, "Contact Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(178, "\n            ");
    \u0275\u0275template(179, UpdateEventsComponent_c_row_1_c_form_feedback_179_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275text(180, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(181, "\n\n          ");
    \u0275\u0275elementStart(182, "c-col", 8);
    \u0275\u0275text(183, "\n            ");
    \u0275\u0275element(184, "input", 40);
    \u0275\u0275text(185, "\n            ");
    \u0275\u0275elementStart(186, "label", 41);
    \u0275\u0275text(187, "Contact Phone *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(188, "\n            ");
    \u0275\u0275template(189, UpdateEventsComponent_c_row_1_c_form_feedback_189_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275text(190, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(191, "\n\n          ");
    \u0275\u0275text(192, "\n          ");
    \u0275\u0275elementStart(193, "c-col", 5);
    \u0275\u0275text(194, "\n            ");
    \u0275\u0275elementStart(195, "h5");
    \u0275\u0275text(196, "Status and Visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(197, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(198, "\n\n          ");
    \u0275\u0275elementStart(199, "c-col", 27);
    \u0275\u0275text(200, "\n            ");
    \u0275\u0275elementStart(201, "div", 42);
    \u0275\u0275text(202, "\n              ");
    \u0275\u0275element(203, "input", 43);
    \u0275\u0275text(204, "\n              ");
    \u0275\u0275elementStart(205, "label", 44);
    \u0275\u0275text(206, "Event is active/visible");
    \u0275\u0275elementEnd();
    \u0275\u0275text(207, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(208, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(209, "\n\n          ");
    \u0275\u0275text(210, "\n          ");
    \u0275\u0275elementStart(211, "c-col", 5);
    \u0275\u0275text(212, "\n            ");
    \u0275\u0275elementStart(213, "button", 45);
    \u0275\u0275text(214);
    \u0275\u0275elementEnd();
    \u0275\u0275text(215, "\n            ");
    \u0275\u0275elementStart(216, "button", 46);
    \u0275\u0275listener("click", function UpdateEventsComponent_c_row_1_Template_button_click_216_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReset());
    });
    \u0275\u0275text(217, "\n              Reset Form\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(218, "\n            ");
    \u0275\u0275elementStart(219, "a", 47);
    \u0275\u0275text(220, "\n              Back to Events\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(221, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(222, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(223, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(224, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(225, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(226, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Update Event" : "Create New Event");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.eventForm);
    \u0275\u0275advance(9);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("EventTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("EventDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("EventVenue"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("EventEntryPrice"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Main Event Image ", !ctx_r1.isEditMode ? "*" : "", "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("EventImage"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.mainImagePreview);
    \u0275\u0275advance(9);
    \u0275\u0275property("init", \u0275\u0275pureFunction0(35, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("EventDetails"));
    \u0275\u0275advance(9);
    \u0275\u0275property("init", \u0275\u0275pureFunction0(36, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("EventActivities"));
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("EventActivitiesimageOne"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.activitiesImageOnePreview);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("EventActivitiesimageTwo"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.activitiesImageTwoPreview);
    \u0275\u0275advance(10);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("EventDetailOrganizer"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("EventEndDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("EventTime"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("EventEmail"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("EventPhone"));
    \u0275\u0275advance(24);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.loading ? "Saving..." : ctx_r1.isEditMode ? "Update Event" : "Create Event", "\n            ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(37, _c1));
  }
}
var _UpdateEventsComponent = class _UpdateEventsComponent {
  constructor(formBuilder, router, route, eventService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.route = route;
    this.eventService = eventService;
    this.loading = false;
    this.submitted = false;
    this.isEditMode = false;
    this.eventId = null;
    this.mainImagePreview = null;
    this.activitiesImageOnePreview = null;
    this.activitiesImageTwoPreview = null;
    this.selectedMainImage = null;
    this.selectedActivitiesImageOne = null;
    this.selectedActivitiesImageTwo = null;
  }
  ngOnInit() {
    this.initializeForm();
    this.checkEditMode();
  }
  checkEditMode() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.eventId = params["id"];
        this.loadEventData();
      }
    });
  }
  loadEventData() {
    return __async(this, null, function* () {
      if (!this.eventId)
        return;
      try {
        this.loading = true;
        const response = yield this.eventService.listEvent(this.eventId);
        const eventData = response.data.data;
        if (eventData) {
          this.eventForm.patchValue({
            EventTitle: eventData.EventTitle || "",
            EventDate: eventData.EventDate || "",
            EventVenue: eventData.EventVenue || "",
            EventEntryPrice: eventData.EventEntryPrice || "",
            EventDetails: eventData.EventDetails || "",
            EventActivities: eventData.EventActivities || "",
            EventDetailOrganizer: eventData.EventDetailOrganizer || "",
            EventEndDate: eventData.EventEndDate || "",
            EventTime: eventData.EventTime || "",
            EventEmail: eventData.EventEmail || "",
            EventPhone: eventData.EventPhone || "",
            is_active: eventData.is_active !== void 0 ? eventData.is_active : true,
            hideStatus: eventData.hideStatus || 0
          });
          if (eventData.EventImageUrl) {
            this.mainImagePreview = eventData.EventImageUrl;
          }
          if (eventData.EventActivitiesImages && eventData.EventActivitiesImages.length > 0) {
            this.activitiesImageOnePreview = eventData.EventActivitiesImages[0];
            if (eventData.EventActivitiesImages.length > 1) {
              this.activitiesImageTwoPreview = eventData.EventActivitiesImages[1];
            }
          }
        }
      } catch (error) {
        console.error("Error loading event data:", error);
        yield Swal.fire({
          title: "Error!",
          text: "Failed to load event data",
          icon: "error",
          confirmButtonText: "Ok"
        });
      } finally {
        this.loading = false;
      }
    });
  }
  initializeForm() {
    this.eventForm = this.formBuilder.group({
      EventTitle: ["", [Validators.required, Validators.maxLength(255)]],
      EventDate: ["", [Validators.required]],
      EventVenue: ["", [Validators.required, Validators.maxLength(255)]],
      EventEntryPrice: ["", [Validators.required, Validators.maxLength(50)]],
      EventImage: [null],
      // Will be made required conditionally
      EventDetails: ["", [Validators.required]],
      EventActivities: ["", [Validators.required]],
      EventActivitiesimageOne: [null],
      EventActivitiesimageTwo: [null],
      EventDetailOrganizer: ["", [Validators.required, Validators.maxLength(255)]],
      EventEndDate: ["", [Validators.required]],
      EventTime: ["", [Validators.required, Validators.maxLength(50)]],
      EventEmail: ["", [Validators.required, Validators.email]],
      EventPhone: ["", [Validators.required, Validators.maxLength(50)]],
      is_active: [true],
      hideStatus: [0]
    });
  }
  // Image change handlers
  onMainImageChange(event) {
    const element = event.target;
    const file = element.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        Swal.fire({
          title: "Error!",
          text: "File size should not exceed 5MB",
          icon: "error"
        });
        return;
      }
      this.selectedMainImage = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.mainImagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.selectedMainImage = null;
      this.mainImagePreview = null;
    }
  }
  onActivitiesImageOneChange(event) {
    const element = event.target;
    const file = element.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        Swal.fire({
          title: "Error!",
          text: "File size should not exceed 5MB",
          icon: "error"
        });
        return;
      }
      this.selectedActivitiesImageOne = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.activitiesImageOnePreview = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.selectedActivitiesImageOne = null;
      this.activitiesImageOnePreview = null;
    }
  }
  onActivitiesImageTwoChange(event) {
    const element = event.target;
    const file = element.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        Swal.fire({
          title: "Error!",
          text: "File size should not exceed 5MB",
          icon: "error"
        });
        return;
      }
      this.selectedActivitiesImageTwo = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.activitiesImageTwoPreview = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.selectedActivitiesImageTwo = null;
      this.activitiesImageTwoPreview = null;
    }
  }
  // Clear image methods
  clearMainImage() {
    this.mainImagePreview = null;
    this.selectedMainImage = null;
    const fileInput = document.getElementById("EventImage");
    if (fileInput) {
      fileInput.value = "";
    }
  }
  clearActivitiesImageOne() {
    this.activitiesImageOnePreview = null;
    this.selectedActivitiesImageOne = null;
    const fileInput = document.getElementById("EventActivitiesimageOne");
    if (fileInput) {
      fileInput.value = "";
    }
  }
  clearActivitiesImageTwo() {
    this.activitiesImageTwoPreview = null;
    this.selectedActivitiesImageTwo = null;
    const fileInput = document.getElementById("EventActivitiesimageTwo");
    if (fileInput) {
      fileInput.value = "";
    }
  }
  get f() {
    return this.eventForm.controls;
  }
  onSubmit() {
    return __async(this, null, function* () {
      this.submitted = true;
      const mainImageControl = this.eventForm.get("EventImage");
      if (!this.isEditMode) {
        mainImageControl?.setValidators([Validators.required]);
      } else {
        if (!this.mainImagePreview && !this.selectedMainImage) {
          mainImageControl?.setValidators([Validators.required]);
        } else {
          mainImageControl?.clearValidators();
        }
      }
      mainImageControl?.updateValueAndValidity();
      if (this.eventForm.invalid) {
        return;
      }
      try {
        this.loading = true;
        const formData = new FormData();
        Object.keys(this.eventForm.value).forEach((key) => {
          if (!key.includes("Image")) {
            formData.append(key, this.eventForm.value[key]);
          }
        });
        if (this.selectedMainImage) {
          formData.append("EventImage", this.selectedMainImage);
        }
        if (this.selectedActivitiesImageOne) {
          formData.append("EventActivitiesimageOne", this.selectedActivitiesImageOne);
        }
        if (this.selectedActivitiesImageTwo) {
          formData.append("EventActivitiesimageTwo", this.selectedActivitiesImageTwo);
        }
        let response;
        if (this.isEditMode && this.eventId) {
          response = yield this.eventService.processEvent(formData, this.eventId);
        } else {
          response = yield this.eventService.processEvent(formData);
        }
        yield Swal.fire({
          title: "Success!",
          text: this.isEditMode ? "Event has been updated successfully" : "Event has been created successfully",
          icon: "success",
          confirmButtonText: "Ok"
        });
        this.router.navigate(["/events"]);
      } catch (error) {
        console.error("Error saving event:", error);
        yield Swal.fire({
          title: "Error!",
          text: this.isEditMode ? "Failed to update event" : "Failed to create event",
          icon: "error",
          confirmButtonText: "Ok"
        });
      } finally {
        this.loading = false;
      }
    });
  }
  onReset() {
    this.submitted = false;
    this.eventForm.reset();
    this.selectedMainImage = null;
    this.selectedActivitiesImageOne = null;
    this.selectedActivitiesImageTwo = null;
    this.mainImagePreview = null;
    this.activitiesImageOnePreview = null;
    this.activitiesImageTwoPreview = null;
    const fileInputs = [
      "EventImage",
      "EventActivitiesimageOne",
      "EventActivitiesimageTwo"
    ];
    fileInputs.forEach((id) => {
      const fileInput = document.getElementById(id);
      if (fileInput) {
        fileInput.value = "";
      }
    });
  }
  isFieldInvalid(fieldName) {
    const field = this.eventForm.get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }
  getErrorMessage(fieldName) {
    const control = this.eventForm.get(fieldName);
    if (!control || !control.errors)
      return "";
    if (control.errors["required"]) {
      if (fieldName === "EventImage") {
        return this.isEditMode ? "Please select a new image or keep the existing one" : "This field is required";
      }
      return "This field is required";
    }
    if (control.errors["minlength"])
      return `Minimum length is ${control.errors["minlength"].requiredLength} characters`;
    if (control.errors["email"])
      return "Please enter a valid email address";
    return "Invalid input";
  }
};
_UpdateEventsComponent.\u0275fac = function UpdateEventsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UpdateEventsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MemberEventsService));
};
_UpdateEventsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdateEventsComponent, selectors: [["app-update-events"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["class", "text-center py-4", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["xs", "12"], [1, "mb-4"], ["cForm", "", 1, "row", "g-3", "needs-validation", 3, "ngSubmit", "formGroup"], ["md", "6", 3, "cFormFloating"], ["cFormControl", "", "id", "EventTitle", "formControlName", "EventTitle", "required", "", "type", "text", "placeholder", "Event Title"], ["cLabel", "", "for", "EventTitle", 1, "ms-2"], [3, "valid", 4, "ngIf"], ["cFormControl", "", "id", "EventDate", "formControlName", "EventDate", "required", "", "type", "date", "placeholder", "Event Date"], ["cLabel", "", "for", "EventDate", 1, "ms-2"], ["cFormControl", "", "id", "EventVenue", "formControlName", "EventVenue", "required", "", "type", "text", "placeholder", "Event Venue"], ["cLabel", "", "for", "EventVenue", 1, "ms-2"], ["cFormControl", "", "id", "EventEntryPrice", "formControlName", "EventEntryPrice", "required", "", "type", "text", "placeholder", "Event Entry Price (e.g., $60)"], ["cLabel", "", "for", "EventEntryPrice", 1, "ms-2"], ["md", "12"], [1, "mb-3"], ["cLabel", "", "for", "EventImage"], ["cFormControl", "", "id", "EventImage", "type", "file", "accept", "image/*", 3, "change"], ["class", "mb-3", 4, "ngIf"], ["cLabel", "", "for", "EventDetails"], ["apiKey", "jrj64u0e25jw0n4a9v0jbajhi9iakdkeyta9ryl58xwmqwz7", "formControlName", "EventDetails", 3, "init"], ["cLabel", "", "for", "EventActivities"], ["apiKey", "jrj64u0e25jw0n4a9v0jbajhi9iakdkeyta9ryl58xwmqwz7", "formControlName", "EventActivities", 3, "init"], ["md", "6"], ["cLabel", "", "for", "EventActivitiesimageOne"], ["cFormControl", "", "id", "EventActivitiesimageOne", "type", "file", "accept", "image/*", 3, "change"], ["cLabel", "", "for", "EventActivitiesimageTwo"], ["cFormControl", "", "id", "EventActivitiesimageTwo", "type", "file", "accept", "image/*", 3, "change"], ["cFormControl", "", "id", "EventDetailOrganizer", "formControlName", "EventDetailOrganizer", "required", "", "type", "text", "placeholder", "Event Organizer"], ["cLabel", "", "for", "EventDetailOrganizer", 1, "ms-2"], ["cFormControl", "", "id", "EventEndDate", "formControlName", "EventEndDate", "required", "", "type", "date", "placeholder", "Event End Date"], ["cLabel", "", "for", "EventEndDate", 1, "ms-2"], ["cFormControl", "", "id", "EventTime", "formControlName", "EventTime", "required", "", "type", "time", "placeholder", "Event Time"], ["cLabel", "", "for", "EventTime", 1, "ms-2"], ["cFormControl", "", "id", "EventEmail", "formControlName", "EventEmail", "required", "", "type", "email", "placeholder", "Contact Email"], ["cLabel", "", "for", "EventEmail", 1, "ms-2"], ["cFormControl", "", "id", "EventPhone", "formControlName", "EventPhone", "required", "", "type", "text", "placeholder", "Contact Phone"], ["cLabel", "", "for", "EventPhone", 1, "ms-2"], [1, "form-check"], ["cFormControl", "", "id", "is_active", "formControlName", "is_active", "type", "checkbox", 1, "form-check-input"], ["cLabel", "", "for", "is_active", 1, "form-check-label"], ["cButton", "", "color", "primary", "type", "submit", 1, "me-1", 3, "disabled"], ["cButton", "", "color", "secondary", "type", "button", 3, "click", "disabled"], ["cButton", "", "color", "info", 1, "ms-1", 3, "routerLink"], [3, "valid"], ["alt", "Main Event Preview", 1, "img-thumbnail", 2, "max-width", "200px", 3, "src"], ["type", "button", "cButton", "", "color", "danger", "size", "sm", "class", "mt-2", 3, "click", 4, "ngIf"], ["type", "button", "cButton", "", "color", "danger", "size", "sm", 1, "mt-2", 3, "click"], ["alt", "Activities Image 1 Preview", 1, "img-thumbnail", 2, "max-width", "150px", 3, "src"], ["alt", "Activities Image 2 Preview", 1, "img-thumbnail", 2, "max-width", "150px", 3, "src"]], template: function UpdateEventsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UpdateEventsComponent_div_0_Template, 4, 0, "div", 0)(1, UpdateEventsComponent_c_row_1_Template, 227, 38, "c-row", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [
  NgIf,
  CommonModule,
  RowComponent,
  ColComponent,
  CardComponent,
  FormFloatingDirective,
  CardHeaderComponent,
  CardBodyComponent,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  CheckboxControlValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
  FormGroupDirective,
  FormControlName,
  FormsModule,
  FormDirective,
  FormLabelDirective,
  FormControlDirective,
  FormFeedbackComponent,
  ButtonDirective,
  RouterModule,
  RouterLink,
  EditorModule,
  EditorComponent
] });
var UpdateEventsComponent = _UpdateEventsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdateEventsComponent, { className: "UpdateEventsComponent", filePath: "src\\app\\views\\events\\update-events\\update-events.component.ts", lineNumber: 25 });
})();
export {
  UpdateEventsComponent
};
//# sourceMappingURL=update-events.component-N5TEV46T.mjs.map
