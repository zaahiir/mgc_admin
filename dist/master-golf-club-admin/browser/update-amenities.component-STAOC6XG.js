import {
  AmenitiesService
} from "./chunk-62QFIL4R.js";
import {
  require_sweetalert2_all
} from "./chunk-UDKX4ISR.js";
import "./chunk-EXN3ACQE.js";
import "./chunk-AE67A222.js";
import {
  ActivatedRoute,
  ButtonDirective,
  ButtonModule,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  CommonModule,
  DefaultValueAccessor,
  DomSanitizer,
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
  NgIf,
  ReactiveFormsModule,
  Router,
  RowComponent,
  SpinnerComponent,
  Validators,
  ɵNgNoValidate
} from "./chunk-DWS3B4N5.js";
import {
  Subject,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-WDQ2E3IC.js";
import {
  __async,
  __toESM
} from "./chunk-ZDRA4OZL.js";

// src/app/views/amenities/update-amenities/update-amenities.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function UpdateAmenitiesComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "\n      ");
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275text(3, "\n        ");
    \u0275\u0275element(4, "c-spinner", 6);
    \u0275\u0275text(5, "\n        ");
    \u0275\u0275elementStart(6, "div", 7);
    \u0275\u0275text(7, "Loading amenity data...");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n    ");
    \u0275\u0275elementEnd();
  }
}
function UpdateAmenitiesComponent_c_card_8_c_form_feedback_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("amenityName"), "\n            ");
  }
}
function UpdateAmenitiesComponent_c_card_8_c_form_feedback_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("amenityIcon"), "\n            ");
  }
}
function UpdateAmenitiesComponent_c_card_8_c_col_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-col", 1);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 37);
    \u0275\u0275text(3, "\n              ");
    \u0275\u0275elementStart(4, "label", 38);
    \u0275\u0275text(5, "Icon Preview:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n              ");
    \u0275\u0275elementStart(7, "div", 39);
    \u0275\u0275text(8, "\n                ");
    \u0275\u0275elementStart(9, "div", 40);
    \u0275\u0275text(10, "\n                  ");
    \u0275\u0275element(11, "div", 41);
    \u0275\u0275text(12, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n                ");
    \u0275\u0275elementStart(14, "div", 42);
    \u0275\u0275text(15, "\n                  ");
    \u0275\u0275elementStart(16, "div", 43);
    \u0275\u0275text(17, "SVG Icon");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "\n                  ");
    \u0275\u0275elementStart(19, "small", 44);
    \u0275\u0275text(20, "\n                    Preview of your SVG icon\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "\n                ");
    \u0275\u0275elementStart(23, "button", 45);
    \u0275\u0275listener("click", function UpdateAmenitiesComponent_c_card_8_c_col_44_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearSVG());
    });
    \u0275\u0275text(24, "\n                  ");
    \u0275\u0275element(25, "i", 46);
    \u0275\u0275text(26, " Clear\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\n          ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("innerHTML", ctx_r1.svgPreview, \u0275\u0275sanitizeHtml);
  }
}
function UpdateAmenitiesComponent_c_card_8_c_form_feedback_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("amenityTooltip"), "\n            ");
  }
}
function UpdateAmenitiesComponent_c_card_8_c_form_feedback_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("amenitiesDescription"), "\n            ");
  }
}
function UpdateAmenitiesComponent_c_card_8_span_153_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 47);
  }
}
function UpdateAmenitiesComponent_c_card_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-card", 8);
    \u0275\u0275text(1, "\n      ");
    \u0275\u0275elementStart(2, "c-card-header");
    \u0275\u0275text(3, "\n        ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "Edit Amenity");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n      ");
    \u0275\u0275elementStart(8, "c-card-body");
    \u0275\u0275text(9, "\n        ");
    \u0275\u0275elementStart(10, "form", 9, 0);
    \u0275\u0275listener("ngSubmit", function UpdateAmenitiesComponent_c_card_8_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275text(12, "\n\n          ");
    \u0275\u0275text(13, "\n          ");
    \u0275\u0275elementStart(14, "c-col", 10);
    \u0275\u0275text(15, "\n            ");
    \u0275\u0275element(16, "input", 11);
    \u0275\u0275text(17, "\n            ");
    \u0275\u0275elementStart(18, "label", 12);
    \u0275\u0275text(19, "Amenity Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n            ");
    \u0275\u0275template(21, UpdateAmenitiesComponent_c_card_8_c_form_feedback_21_Template, 2, 2, "c-form-feedback", 13);
    \u0275\u0275text(22, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n\n          ");
    \u0275\u0275text(24, "\n          ");
    \u0275\u0275elementStart(25, "c-col", 14);
    \u0275\u0275text(26, "\n            ");
    \u0275\u0275elementStart(27, "label", 15);
    \u0275\u0275text(28, "\n              Amenity Icon (SVG) *\n              ");
    \u0275\u0275elementStart(29, "a", 16);
    \u0275\u0275text(30, "\n                ");
    \u0275\u0275element(31, "i", 17);
    \u0275\u0275text(32, " Get from Font Awesome\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, "\n            ");
    \u0275\u0275elementStart(35, "textarea", 18);
    \u0275\u0275listener("input", function UpdateAmenitiesComponent_c_card_8_Template_textarea_input_35_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSVGInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, "\n            ");
    \u0275\u0275elementStart(37, "div", 19);
    \u0275\u0275text(38, "\n              Copy the full SVG code from Font Awesome (right-click \u2192 Copy SVG) and paste it here.\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, "\n            ");
    \u0275\u0275template(40, UpdateAmenitiesComponent_c_card_8_c_form_feedback_40_Template, 2, 2, "c-form-feedback", 13);
    \u0275\u0275text(41, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, "\n\n          ");
    \u0275\u0275text(43, "\n          ");
    \u0275\u0275template(44, UpdateAmenitiesComponent_c_card_8_c_col_44_Template, 30, 1, "c-col", 20);
    \u0275\u0275text(45, "\n\n          ");
    \u0275\u0275text(46, "\n          ");
    \u0275\u0275elementStart(47, "c-col", 21);
    \u0275\u0275text(48, "\n            ");
    \u0275\u0275element(49, "textarea", 22);
    \u0275\u0275text(50, "\n            ");
    \u0275\u0275elementStart(51, "label", 23);
    \u0275\u0275text(52, "Tooltip/Description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, "\n            ");
    \u0275\u0275template(54, UpdateAmenitiesComponent_c_card_8_c_form_feedback_54_Template, 2, 2, "c-form-feedback", 13);
    \u0275\u0275text(55, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, "\n\n          ");
    \u0275\u0275text(57, "\n          ");
    \u0275\u0275elementStart(58, "c-col", 21);
    \u0275\u0275text(59, "\n            ");
    \u0275\u0275element(60, "textarea", 24);
    \u0275\u0275text(61, "\n            ");
    \u0275\u0275elementStart(62, "label", 25);
    \u0275\u0275text(63, "Detailed Description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, "\n            ");
    \u0275\u0275template(65, UpdateAmenitiesComponent_c_card_8_c_form_feedback_65_Template, 2, 2, "c-form-feedback", 13);
    \u0275\u0275text(66, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, "\n\n          ");
    \u0275\u0275text(68, "\n          ");
    \u0275\u0275elementStart(69, "c-col", 1);
    \u0275\u0275text(70, "\n            ");
    \u0275\u0275elementStart(71, "c-card", 26);
    \u0275\u0275text(72, "\n              ");
    \u0275\u0275elementStart(73, "c-card-header");
    \u0275\u0275text(74, "\n                ");
    \u0275\u0275elementStart(75, "small")(76, "strong");
    \u0275\u0275text(77, "How to get Font Awesome SVG Icons:");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(78, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(79, "\n              ");
    \u0275\u0275elementStart(80, "c-card-body");
    \u0275\u0275text(81, "\n                ");
    \u0275\u0275elementStart(82, "div", 27);
    \u0275\u0275text(83, "\n                  ");
    \u0275\u0275elementStart(84, "div", 28);
    \u0275\u0275text(85, "\n                    ");
    \u0275\u0275elementStart(86, "h6");
    \u0275\u0275text(87, "Steps to get SVG:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, "\n                    ");
    \u0275\u0275elementStart(89, "ol", 29);
    \u0275\u0275text(90, "\n                      ");
    \u0275\u0275elementStart(91, "li");
    \u0275\u0275text(92, "Visit ");
    \u0275\u0275elementStart(93, "a", 30);
    \u0275\u0275text(94, "Font Awesome Icons");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(95, "\n                      ");
    \u0275\u0275elementStart(96, "li");
    \u0275\u0275text(97, "Search for your desired icon");
    \u0275\u0275elementEnd();
    \u0275\u0275text(98, "\n                      ");
    \u0275\u0275elementStart(99, "li");
    \u0275\u0275text(100, "Click on the icon to open details");
    \u0275\u0275elementEnd();
    \u0275\u0275text(101, "\n                      ");
    \u0275\u0275elementStart(102, "li");
    \u0275\u0275text(103, 'Right-click and select "Copy SVG"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(104, "\n                      ");
    \u0275\u0275elementStart(105, "li");
    \u0275\u0275text(106, "Paste the SVG code in the textarea above");
    \u0275\u0275elementEnd();
    \u0275\u0275text(107, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(108, "\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(109, "\n                  ");
    \u0275\u0275elementStart(110, "div", 28);
    \u0275\u0275text(111, "\n                    ");
    \u0275\u0275elementStart(112, "h6");
    \u0275\u0275text(113, "SVG Benefits:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(114, "\n                    ");
    \u0275\u0275elementStart(115, "ul", 29);
    \u0275\u0275text(116, "\n                      ");
    \u0275\u0275elementStart(117, "li");
    \u0275\u0275text(118, "Vector-based (scales perfectly)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(119, "\n                      ");
    \u0275\u0275elementStart(120, "li");
    \u0275\u0275text(121, "Customizable colors via CSS");
    \u0275\u0275elementEnd();
    \u0275\u0275text(122, "\n                      ");
    \u0275\u0275elementStart(123, "li");
    \u0275\u0275text(124, "Lightweight and fast loading");
    \u0275\u0275elementEnd();
    \u0275\u0275text(125, "\n                      ");
    \u0275\u0275elementStart(126, "li");
    \u0275\u0275text(127, "No additional HTTP requests");
    \u0275\u0275elementEnd();
    \u0275\u0275text(128, "\n                      ");
    \u0275\u0275elementStart(129, "li");
    \u0275\u0275text(130, "Consistent across all devices");
    \u0275\u0275elementEnd();
    \u0275\u0275text(131, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(132, "\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(133, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(134, "\n                ");
    \u0275\u0275elementStart(135, "div", 26);
    \u0275\u0275text(136, "\n                  ");
    \u0275\u0275elementStart(137, "h6");
    \u0275\u0275text(138, "Example SVG Structure:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(139, "\n                  ");
    \u0275\u0275elementStart(140, "pre", 31)(141, "code");
    \u0275\u0275text(142, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\n  <path d="M64 32C28.7 32..."></path>\n</svg>');
    \u0275\u0275elementEnd()();
    \u0275\u0275text(143, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(144, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(145, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(146, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(147, "\n\n          ");
    \u0275\u0275text(148, "\n          ");
    \u0275\u0275elementStart(149, "c-col", 32);
    \u0275\u0275text(150, "\n            ");
    \u0275\u0275elementStart(151, "button", 33);
    \u0275\u0275text(152, "\n              ");
    \u0275\u0275template(153, UpdateAmenitiesComponent_c_card_8_span_153_Template, 1, 0, "span", 34);
    \u0275\u0275text(154);
    \u0275\u0275elementEnd();
    \u0275\u0275text(155, "\n\n            ");
    \u0275\u0275elementStart(156, "button", 35);
    \u0275\u0275listener("click", function UpdateAmenitiesComponent_c_card_8_Template_button_click_156_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(157, "\n              Cancel\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(158, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(159, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(160, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(161, "\n    ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("formGroup", ctx_r1.amenityForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("amenityName"));
    \u0275\u0275advance(14);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("amenityIcon"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("amenityIcon"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.svgPreview);
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("amenityTooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("amenitiesDescription"));
    \u0275\u0275advance(86);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.loading ? "Updating..." : "Update Amenity", "\n            ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
var _UpdateAmenitiesComponent = class _UpdateAmenitiesComponent {
  constructor(formBuilder, router, route, amenitiesService, sanitizer) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.route = route;
    this.amenitiesService = amenitiesService;
    this.sanitizer = sanitizer;
    this.loading = false;
    this.loadingData = false;
    this.submitted = false;
    this.amenityId = null;
    this.amenityData = null;
    this.svgPreview = null;
    this.rawSvgContent = "";
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.initializeForm();
    this.loadRouteData();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadRouteData() {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      if (params["id"]) {
        this.amenityId = params["id"];
        this.loadAmenityData();
      } else {
        this.redirectToAmenitiesList();
      }
    });
  }
  loadAmenityData() {
    return __async(this, null, function* () {
      if (!this.amenityId)
        return;
      try {
        this.loadingData = true;
        const response = yield this.amenitiesService.listAmenities(this.amenityId);
        if (response.data && response.data.code === 1 && response.data.data.length > 0) {
          const amenityData = response.data.data[0];
          this.amenityData = amenityData;
          this.amenityForm.patchValue({
            amenityName: amenityData.amenityName || "",
            amenityIcon: amenityData.amenityIcon || "",
            amenityTooltip: amenityData.amenityTooltip || "",
            amenitiesDescription: amenityData.amenitiesDescription || ""
          });
          if (amenityData.amenityIcon) {
            this.rawSvgContent = amenityData.amenityIcon;
            this.updateSVGPreview(amenityData.amenityIcon);
          }
        } else {
          yield this.handleDataLoadError("Amenity not found");
        }
      } catch (error) {
        console.error("Error loading amenity data:", error);
        yield this.handleDataLoadError("Failed to load amenity data. Please try again.");
      } finally {
        this.loadingData = false;
      }
    });
  }
  handleDataLoadError(message) {
    return __async(this, null, function* () {
      yield import_sweetalert2.default.fire({
        title: "Error!",
        text: message,
        icon: "error",
        confirmButtonText: "Ok"
      });
      this.redirectToAmenitiesList();
    });
  }
  redirectToAmenitiesList() {
    this.router.navigate(["/amenities"]);
  }
  initializeForm() {
    this.amenityForm = this.formBuilder.group({
      amenityName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      amenityIcon: ["", [Validators.required, this.svgValidator.bind(this)]],
      amenityTooltip: ["", [Validators.maxLength(500)]],
      amenitiesDescription: ["", [Validators.maxLength(1e3)]],
      hideStatus: [0]
    });
  }
  svgValidator(control) {
    if (!control.value)
      return null;
    const svgContent = control.value.trim();
    if (!svgContent.includes("<svg") || !svgContent.includes("</svg>")) {
      return { invalidSvg: true };
    }
    return null;
  }
  onSVGInput(event) {
    const svgContent = event.target.value.trim();
    this.rawSvgContent = svgContent;
    if (svgContent && this.isValidSVG(svgContent)) {
      this.updateSVGPreview(svgContent);
    } else {
      this.svgPreview = null;
    }
  }
  isValidSVG(content) {
    return content.includes("<svg") && content.includes("</svg>");
  }
  updateSVGPreview(svgContent) {
    try {
      this.svgPreview = this.sanitizer.bypassSecurityTrustHtml(svgContent);
    } catch (error) {
      console.error("Error creating SVG preview:", error);
      this.svgPreview = null;
    }
  }
  clearSVG() {
    this.amenityForm.patchValue({ amenityIcon: "" });
    this.svgPreview = null;
    this.rawSvgContent = "";
  }
  get f() {
    return this.amenityForm.controls;
  }
  onSubmit() {
    return __async(this, null, function* () {
      this.submitted = true;
      if (this.amenityForm.invalid) {
        Object.keys(this.amenityForm.controls).forEach((key) => {
          const control = this.amenityForm.get(key);
          control?.markAsTouched();
        });
        const firstErrorElement = document.querySelector(".is-invalid");
        if (firstErrorElement) {
          firstErrorElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return;
      }
      try {
        this.loading = true;
        const amenityData = {
          amenityName: this.amenityForm.value.amenityName.trim(),
          amenityIcon: this.amenityForm.value.amenityIcon.trim(),
          amenityTooltip: this.amenityForm.value.amenityTooltip?.trim() || "",
          amenitiesDescription: this.amenityForm.value.amenitiesDescription?.trim() || "",
          hideStatus: this.amenityData?.hideStatus || 0
        };
        const response = yield this.amenitiesService.processAmenitiesWithSVG(amenityData, this.amenityId);
        if (response.data && response.data.code === 1) {
          yield import_sweetalert2.default.fire({
            title: "Success!",
            text: "Amenity has been updated successfully",
            icon: "success",
            confirmButtonText: "Ok"
          });
          this.router.navigate(["/amenities"]);
        } else {
          throw new Error(response.data?.message || "Unknown error occurred");
        }
      } catch (error) {
        console.error("Error updating amenity:", error);
        let errorMessage = "Failed to update amenity";
        if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        } else if (error.response?.data?.errors) {
          const errors = error.response.data.errors;
          errorMessage = Object.keys(errors).map((key) => `${key}: ${errors[key].join(", ")}`).join("\n");
        } else if (error.message) {
          errorMessage = error.message;
        }
        yield import_sweetalert2.default.fire({
          title: "Error!",
          text: errorMessage,
          icon: "error",
          confirmButtonText: "Ok"
        });
      } finally {
        this.loading = false;
      }
    });
  }
  onCancel() {
    this.router.navigate(["/amenities"]);
  }
  isFieldInvalid(fieldName) {
    const field = this.amenityForm.get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }
  getErrorMessage(fieldName) {
    const control = this.amenityForm.get(fieldName);
    if (!control || !control.errors)
      return "";
    const errors = control.errors;
    if (errors["required"]) {
      switch (fieldName) {
        case "amenityName":
          return "Amenity name is required";
        case "amenityIcon":
          return "SVG icon is required";
        default:
          return "This field is required";
      }
    }
    if (errors["invalidSvg"]) {
      return "Please enter a valid SVG code (must contain <svg> and </svg> tags)";
    }
    if (errors["minlength"]) {
      return `Minimum length is ${errors["minlength"].requiredLength} characters`;
    }
    if (errors["maxlength"]) {
      switch (fieldName) {
        case "amenityName":
          return "Amenity name cannot exceed 200 characters";
        case "amenityTooltip":
          return "Tooltip cannot exceed 500 characters";
        default:
          return `Maximum length is ${errors["maxlength"].requiredLength} characters`;
      }
    }
    return "Invalid input";
  }
};
_UpdateAmenitiesComponent.\u0275fac = function UpdateAmenitiesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UpdateAmenitiesComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AmenitiesService), \u0275\u0275directiveInject(DomSanitizer));
};
_UpdateAmenitiesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdateAmenitiesComponent, selectors: [["app-update-amenities"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 2, consts: [["form", "ngForm"], ["xs", "12"], ["class", "d-flex justify-content-center align-items-center", "style", "min-height: 200px;", 4, "ngIf"], ["class", "mb-4", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "min-height", "200px"], [1, "text-center"], ["variant", "border", "role", "status", "aria-hidden", "true"], [1, "mt-2"], [1, "mb-4"], ["cForm", "", 1, "row", "g-3", "needs-validation", 3, "ngSubmit", "formGroup"], ["md", "6", 3, "cFormFloating"], ["cFormControl", "", "id", "amenityName", "formControlName", "amenityName", "type", "text", "placeholder", "Amenity Name"], ["cLabel", "", "for", "amenityName", 1, "ms-2"], [3, "valid", 4, "ngIf"], ["md", "6"], ["cLabel", "", "for", "amenityIcon", 1, "form-label"], ["href", "https://fontawesome.com/icons", "target", "_blank", 1, "text-primary", "ms-2", "text-decoration-none"], [1, "fas", "fa-external-link-alt"], ["cFormControl", "", "id", "amenityIcon", "formControlName", "amenityIcon", "placeholder", "Paste your SVG code here...", "rows", "4", 1, "font-monospace", 3, "input"], [1, "form-text"], ["xs", "12", 4, "ngIf"], ["xs", "12", 3, "cFormFloating"], ["cFormControl", "", "id", "amenityTooltip", "formControlName", "amenityTooltip", "placeholder", "Amenity Tooltip/Description", "rows", "3"], ["cLabel", "", "for", "amenityTooltip", 1, "ms-2"], ["cFormControl", "", "id", "amenitiesDescription", "formControlName", "amenitiesDescription", "placeholder", "Detailed description of the amenity", "rows", "4"], ["cLabel", "", "for", "amenitiesDescription", 1, "ms-2"], [1, "mt-3"], [1, "row"], [1, "col-md-6"], [1, "small"], ["href", "https://fontawesome.com/icons", "target", "_blank", 1, "text-primary"], [1, "small", "bg-dark", "text-light", "p-2", "rounded"], ["xs", "12", 1, "d-flex", "gap-2", "mt-4"], ["cButton", "", "color", "primary", "type", "submit", 1, "d-inline-flex", "align-items-center", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["cButton", "", "color", "light", "type", "button", 1, "ms-auto", 3, "click", "disabled"], [3, "valid"], [1, "mb-3"], [1, "form-label"], [1, "d-flex", "align-items-center", "gap-3", "p-3", "border", "rounded", "bg-light"], [1, "icon-preview-container"], [1, "svg-icon-preview", 3, "innerHTML"], [1, "flex-grow-1"], [1, "fw-bold"], [1, "text-muted"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fas", "fa-times"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function UpdateAmenitiesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row");
    \u0275\u0275text(1, "\n  ");
    \u0275\u0275elementStart(2, "c-col", 1);
    \u0275\u0275text(3, "\n\n    ");
    \u0275\u0275text(4, "\n    ");
    \u0275\u0275template(5, UpdateAmenitiesComponent_div_5_Template, 10, 0, "div", 2);
    \u0275\u0275text(6, "\n\n    ");
    \u0275\u0275text(7, "\n    ");
    \u0275\u0275template(8, UpdateAmenitiesComponent_c_card_8_Template, 162, 15, "c-card", 3);
    \u0275\u0275text(9, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.loadingData);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx.loadingData);
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
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  FormsModule,
  FormDirective,
  FormLabelDirective,
  FormControlDirective,
  FormFeedbackComponent,
  ButtonDirective,
  ButtonModule,
  SpinnerComponent
], styles: [".icon-preview-container[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border: 2px dashed #dee2e6;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  overflow: hidden;\n}\n\n.svg-icon-preview[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.svg-icon-preview[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  fill: #0d6efd; \n\n}\n\n.font-monospace[_ngcontent-%COMP%] {\n  font-family: 'Courier New', Courier, monospace;\n  font-size: 0.875rem;\n}\n\n.form-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin-top: 0.25rem;\n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: #0d6efd !important;\n}\n\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n\npre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n\ncode[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}"] });
var UpdateAmenitiesComponent = _UpdateAmenitiesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdateAmenitiesComponent, { className: "UpdateAmenitiesComponent", filePath: "src\\app\\views\\amenities\\update-amenities\\update-amenities.component.ts", lineNumber: 65 });
})();
export {
  UpdateAmenitiesComponent
};
//# sourceMappingURL=update-amenities.component-STAOC6XG.js.map
