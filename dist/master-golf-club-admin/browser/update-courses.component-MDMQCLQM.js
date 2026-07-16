import {
  CourseService
} from "./chunk-N4PJY6JV.js";
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
  FormArrayName,
  FormBuilder,
  FormControlDirective,
  FormControlName,
  FormDirective,
  FormFeedbackComponent,
  FormFloatingDirective,
  FormGroupDirective,
  FormGroupName,
  FormLabelDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  Router,
  RowComponent,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DWS3B4N5.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-WDQ2E3IC.js";
import {
  __async,
  __toESM
} from "./chunk-ZDRA4OZL.js";

// src/app/views/courses/update-courses/update-courses.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function UpdateCoursesComponent_c_form_feedback_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("courseName"), "\n            ");
  }
}
function UpdateCoursesComponent_c_form_feedback_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("coursePhoneNumber"), "\n            ");
  }
}
function UpdateCoursesComponent_c_form_feedback_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("courseAlternatePhoneNumber"), "\n            ");
  }
}
function UpdateCoursesComponent_c_form_feedback_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("courseWebsite"), "\n            ");
  }
}
function UpdateCoursesComponent_c_form_feedback_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("courseOpenFrom"), "\n            ");
  }
}
function UpdateCoursesComponent_c_form_feedback_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("joinRequestExpiryHours"), "\n            ");
  }
}
function UpdateCoursesComponent_c_form_feedback_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("courseAddress"), "\n            ");
  }
}
function UpdateCoursesComponent_c_form_feedback_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("courseLocation"), "\n            ");
  }
}
function UpdateCoursesComponent_c_form_feedback_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("courseDescription"), "\n            ");
  }
}
function UpdateCoursesComponent_c_form_feedback_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", ctx_r1.getErrorMessage("courseImage"), "\n              ");
  }
}
function UpdateCoursesComponent_div_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, "\n              ");
    \u0275\u0275elementStart(2, "p", 55);
    \u0275\u0275text(3, "Image Preview:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n              ");
    \u0275\u0275element(5, "img", 56);
    \u0275\u0275text(6, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r1.imagePreview, \u0275\u0275sanitizeUrl);
  }
}
function UpdateCoursesComponent_div_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, "\n                  Loading amenities...\n                ");
    \u0275\u0275elementEnd();
  }
}
function UpdateCoursesComponent_button_147_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "\n                  ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const amenity_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r1.getSafeHtml(amenity_r4.icon_svg), \u0275\u0275sanitizeHtml);
  }
}
function UpdateCoursesComponent_button_147_i_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 62);
  }
  if (rf & 2) {
    const amenity_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap("fas " + amenity_r4.icon);
  }
}
function UpdateCoursesComponent_button_147_i_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 63);
  }
}
function UpdateCoursesComponent_button_147_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function UpdateCoursesComponent_button_147_Template_button_click_0_listener() {
      const amenity_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAmenity(amenity_r4));
    });
    \u0275\u0275text(1, "\n                  ");
    \u0275\u0275text(2, "\n                  ");
    \u0275\u0275template(3, UpdateCoursesComponent_button_147_span_3_Template, 2, 1, "span", 58);
    \u0275\u0275text(4, "\n                  ");
    \u0275\u0275text(5, "\n                  ");
    \u0275\u0275template(6, UpdateCoursesComponent_button_147_i_6_Template, 1, 2, "i", 59);
    \u0275\u0275text(7);
    \u0275\u0275text(8, "\n                  ");
    \u0275\u0275template(9, UpdateCoursesComponent_button_147_i_9_Template, 1, 0, "i", 60);
    \u0275\u0275text(10, "\n                ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const amenity_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("color", ctx_r1.isAmenitySelected(amenity_r4.id) ? "primary" : "secondary")("title", amenity_r4.tooltip);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", amenity_r4.icon_svg);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !amenity_r4.icon_svg && amenity_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                  ", amenity_r4.title, "\n                  ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isAmenitySelected(amenity_r4.id));
  }
}
function UpdateCoursesComponent_c_form_feedback_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", ctx_r1.getErrorMessage("courseAmenities"), "\n              ");
  }
}
function UpdateCoursesComponent_div_173_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function UpdateCoursesComponent_div_173_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const i_r6 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeTee(i_r6));
    });
    \u0275\u0275text(1, "\n                      ");
    \u0275\u0275element(2, "i", 73);
    \u0275\u0275text(3, "\n                    ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
function UpdateCoursesComponent_div_173_c_form_feedback_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r6 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                          ", ctx_r1.getTeeErrorMessage(i_r6, "holeNumber"), "\n                        ");
  }
}
function UpdateCoursesComponent_div_173_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1, "\n                  ");
    \u0275\u0275elementStart(2, "div", 65);
    \u0275\u0275text(3, "\n                    ");
    \u0275\u0275elementStart(4, "h6", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                    ");
    \u0275\u0275template(7, UpdateCoursesComponent_div_173_button_7_Template, 4, 1, "button", 67);
    \u0275\u0275text(8, "\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                  ");
    \u0275\u0275elementStart(10, "div", 68);
    \u0275\u0275text(11, "\n                    ");
    \u0275\u0275elementStart(12, "div", 69);
    \u0275\u0275text(13, "\n                      ");
    \u0275\u0275text(14, "\n                      ");
    \u0275\u0275elementStart(15, "c-col", 44);
    \u0275\u0275text(16, "\n                        ");
    \u0275\u0275elementStart(17, "label", 70);
    \u0275\u0275text(18, "Holes *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n                        ");
    \u0275\u0275element(20, "input", 71);
    \u0275\u0275text(21, "\n                        ");
    \u0275\u0275template(22, UpdateCoursesComponent_div_173_c_form_feedback_22_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(23, "\n                      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n\n                      ");
    \u0275\u0275text(25, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, "\n                ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r6);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Tee #", i_r6 + 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.teesFormArray.length > 1);
    \u0275\u0275advance(10);
    \u0275\u0275property("for", "holeNumber_" + i_r6);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r1.isTeeFieldInvalid(i_r6, "holeNumber"));
    \u0275\u0275property("id", "holeNumber_" + i_r6);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isTeeFieldInvalid(i_r6, "holeNumber"));
  }
}
function UpdateCoursesComponent_c_form_feedback_177_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", ctx_r1.getErrorMessage("tees"), "\n              ");
  }
}
function UpdateCoursesComponent_span_214_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 74);
  }
}
function UpdateCoursesComponent_button_223_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function UpdateCoursesComponent_button_223_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDelete());
    });
    \u0275\u0275text(1, "\n              Delete Course\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
var _UpdateCoursesComponent = class _UpdateCoursesComponent {
  constructor(formBuilder, router, route, courseService, domSanitizer) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.route = route;
    this.courseService = courseService;
    this.domSanitizer = domSanitizer;
    this.loading = false;
    this.submitted = false;
    this.amenitiesList = [];
    this.selectedAmenities = [];
    this.imagePreview = null;
    this.selectedFile = null;
    this.courseId = "";
    this.hasExistingData = false;
    this.courseTees = [];
  }
  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get("id") || "";
    this.initializeForm();
    this.loadDataSequentially();
  }
  loadDataSequentially() {
    return __async(this, null, function* () {
      try {
        yield this.loadAmenities();
        yield this.loadCourseData();
      } catch (error) {
        console.error("Error loading data:", error);
      }
    });
  }
  loadAmenities() {
    return __async(this, null, function* () {
      try {
        const response = yield this.courseService.getAllAmenities();
        if (response && response.data && response.data.code === 1) {
          this.amenitiesList = response.data.data.map((amenity) => ({
            id: amenity.id,
            amenityName: amenity.amenityName,
            amenityTooltip: amenity.amenityTooltip,
            title: amenity.amenityName,
            // For frontend compatibility
            tooltip: amenity.amenityTooltip,
            // For frontend compatibility
            icon_svg: amenity.amenity_icon_svg,
            icon_path: amenity.amenity_icon_path,
            viewbox: amenity.amenity_viewbox,
            icon: amenity.amenityIcon
            // Fallback
          }));
        }
      } catch (error) {
        console.error("Error loading amenities:", error);
        import_sweetalert2.default.fire({
          title: "Error!",
          text: "Failed to load amenities",
          icon: "error",
          confirmButtonText: "Ok"
        });
      }
    });
  }
  loadCourseData() {
    return __async(this, null, function* () {
      if (!this.courseId)
        return;
      try {
        const response = yield this.courseService.getCourse(this.courseId);
        if (response && response.data && response.data.code === 1 && response.data.data.length > 0) {
          const courseData = response.data.data[0];
          this.hasExistingData = true;
          this.selectedAmenities = courseData.amenities || [];
          if (this.selectedAmenities.length > 0 && typeof this.selectedAmenities[0] === "object") {
            this.selectedAmenities = this.selectedAmenities.map((amenity) => amenity.id);
          }
          this.selectedAmenities = this.selectedAmenities.map((id) => Number(id));
          this.golfCourseForm.patchValue({
            courseAmenities: this.selectedAmenities
          });
          yield this.loadCourseTees();
          this.golfCourseForm.patchValue({
            courseName: courseData.name || courseData.courseName,
            courseAddress: courseData.address || courseData.courseAddress,
            courseOpenFrom: this.convertTimeForInput(courseData.timing || courseData.courseOpenFrom),
            coursePhoneNumber: courseData.phone || courseData.coursePhoneNumber,
            courseAlternatePhoneNumber: courseData.alternatePhone || courseData.courseAlternatePhoneNumber,
            courseWebsite: courseData.website || courseData.courseWebsite,
            courseDescription: courseData.description || courseData.courseDescription,
            courseLocation: courseData.location || courseData.courseLocation,
            joinRequestExpiryHours: courseData.joinRequestExpiryHours ?? null,
            hideStatus: courseData.hideStatus || 0
          });
          if (courseData.imageUrl) {
            this.imagePreview = courseData.imageUrl;
          }
        }
      } catch (error) {
        console.error("Error loading course data:", error);
        import_sweetalert2.default.fire({
          title: "Error!",
          text: "Failed to load course data",
          icon: "error",
          confirmButtonText: "Ok"
        });
      }
    });
  }
  loadCourseTees() {
    return __async(this, null, function* () {
      if (!this.courseId)
        return;
      try {
        const response = yield this.courseService.getTeesByCourse(this.courseId);
        if (response && response.data && response.data.code === 1) {
          this.courseTees = response.data.data;
          while (this.teesFormArray.length !== 0) {
            this.teesFormArray.removeAt(0);
          }
          if (this.courseTees.length > 0) {
            this.courseTees.forEach((tee) => {
              this.teesFormArray.push(this.createTeeFormGroup({
                id: tee.id,
                holeNumber: tee.holeNumber
              }));
            });
          } else {
            this.addDefaultTee();
          }
        }
      } catch (error) {
        console.error("Error loading course tees:", error);
        this.addDefaultTee();
      }
    });
  }
  initializeForm() {
    this.golfCourseForm = this.formBuilder.group({
      courseName: ["", [Validators.required, Validators.minLength(2)]],
      courseAddress: ["", [Validators.required]],
      courseOpenFrom: ["06:00", [Validators.required]],
      coursePhoneNumber: ["", [Validators.required, Validators.pattern(/^[\+]?[\d\s\-\(\)]+$/)]],
      courseAlternatePhoneNumber: ["", [Validators.pattern(/^[\+]?[\d\s\-\(\)]+$/)]],
      courseWebsite: ["", [Validators.pattern(/^https?:\/\/.+/)]],
      courseDescription: [""],
      courseLocation: ["", [Validators.required]],
      joinRequestExpiryHours: [null, [Validators.min(0)]],
      courseAmenities: [[], [Validators.required, Validators.minLength(1)]],
      courseImage: [null],
      hideStatus: [0],
      tees: this.formBuilder.array([], [Validators.required, Validators.minLength(1)])
    });
  }
  // Tee FormArray getter
  get teesFormArray() {
    return this.golfCourseForm.get("tees");
  }
  // Create a new tee form group
  createTeeFormGroup(teeData) {
    return this.formBuilder.group({
      id: [teeData?.id || null],
      holeNumber: [
        teeData?.holeNumber || "",
        [Validators.required, Validators.min(1), Validators.pattern("^[0-9]+$")]
      ]
    });
  }
  // Add a new tee
  addTee() {
    const teeForm = this.createTeeFormGroup({
      holeNumber: 9
      // Default to 9 holes
    });
    this.teesFormArray.push(teeForm);
  }
  // Add default tee for new courses
  addDefaultTee() {
    const defaultTee = this.createTeeFormGroup({
      holeNumber: 9
    });
    this.teesFormArray.push(defaultTee);
  }
  // Remove a tee
  removeTee(index) {
    if (this.teesFormArray.length > 1) {
      this.teesFormArray.removeAt(index);
    } else {
      import_sweetalert2.default.fire({
        title: "Cannot Remove",
        text: "At least one tee must be defined for the course",
        icon: "warning",
        confirmButtonText: "Ok"
      });
    }
  }
  // Get tee form group at index
  getTeeFormGroup(index) {
    return this.teesFormArray.at(index);
  }
  // Check if tee field is invalid
  isTeeFieldInvalid(teeIndex, fieldName) {
    const teeGroup = this.getTeeFormGroup(teeIndex);
    const field = teeGroup.get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }
  // Get tee field error message
  getTeeErrorMessage(teeIndex, fieldName) {
    const teeGroup = this.getTeeFormGroup(teeIndex);
    const control = teeGroup.get(fieldName);
    if (!control || !control.errors)
      return "";
    const errors = control.errors;
    if (errors["required"]) {
      switch (fieldName) {
        case "holeNumber":
          return "Please enter number of holes";
        default:
          return "This field is required";
      }
    }
    if (errors["min"]) {
      if (fieldName === "holeNumber")
        return "Hole number must be at least 1";
    }
    if (errors["pattern"]) {
      if (fieldName === "holeNumber")
        return "Hole number must be a whole number";
    }
    return "Invalid value";
  }
  // Validate tee data
  validateTeeData() {
    const teesArray = this.teesFormArray;
    if (teesArray.length === 0) {
      import_sweetalert2.default.fire({
        title: "Validation Error",
        text: "At least one tee must be defined for the course",
        icon: "error",
        confirmButtonText: "Ok"
      });
      return false;
    }
    for (let i = 0; i < teesArray.length; i++) {
      const teeGroup = teesArray.at(i);
      if (teeGroup.invalid) {
        import_sweetalert2.default.fire({
          title: "Validation Error",
          text: `Please fix errors in tee ${i + 1}`,
          icon: "error",
          confirmButtonText: "Ok"
        });
        return false;
      }
    }
    return true;
  }
  onFileChange(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      if (!file.type.startsWith("image/")) {
        import_sweetalert2.default.fire({
          title: "Error!",
          text: "Please select an image file",
          icon: "error",
          confirmButtonText: "Ok"
        });
        return;
      }
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        import_sweetalert2.default.fire({
          title: "Error!",
          text: "Image size should not exceed 5MB",
          icon: "error",
          confirmButtonText: "Ok"
        });
        return;
      }
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  isAmenitySelected(amenityId) {
    const isSelected = this.selectedAmenities.includes(amenityId);
    return isSelected;
  }
  toggleAmenity(amenity) {
    const index = this.selectedAmenities.indexOf(amenity.id);
    if (index === -1) {
      this.selectedAmenities.push(amenity.id);
    } else {
      this.selectedAmenities.splice(index, 1);
    }
    this.golfCourseForm.patchValue({ courseAmenities: this.selectedAmenities });
    this.golfCourseForm.get("courseAmenities")?.markAsTouched();
  }
  // Helper method to get amenity title by ID
  getAmenityTitle(amenityId) {
    const amenity = this.amenitiesList.find((a) => a.id === amenityId);
    return amenity ? amenity.title : `Amenity ${amenityId}`;
  }
  // Helper method to safely render HTML (for SVG icons)
  getSafeHtml(html) {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }
  // Get tee information for display
  getTeeInfo() {
    if (this.courseTees && this.courseTees.length > 0) {
      const teeCount = this.courseTees.length;
      const holeTypes = this.courseTees.map((tee) => `${tee.holeNumber}H`).join(", ");
      return `${teeCount} tee${teeCount > 1 ? "s" : ""} (${holeTypes})`;
    }
    return "No tees";
  }
  get f() {
    return this.golfCourseForm.controls;
  }
  onSubmit() {
    return __async(this, null, function* () {
      this.submitted = true;
      if (this.golfCourseForm.invalid) {
        import_sweetalert2.default.fire({
          title: "Validation Error",
          text: "Please fix the errors in the form",
          icon: "error",
          confirmButtonText: "Ok"
        });
        return;
      }
      if (!this.validateTeeData()) {
        return;
      }
      this.loading = true;
      try {
        const formData = new FormData();
        const formValue = this.golfCourseForm.value;
        formData.append("courseName", formValue.courseName);
        formData.append("courseAddress", formValue.courseAddress);
        formData.append("courseOpenFrom", formValue.courseOpenFrom);
        formData.append("joinRequestExpiryHours", formValue.joinRequestExpiryHours ?? "");
        formData.append("coursePhoneNumber", formValue.coursePhoneNumber);
        formData.append("courseAlternatePhoneNumber", formValue.courseAlternatePhoneNumber || "");
        formData.append("courseWebsite", formValue.courseWebsite || "");
        formData.append("courseDescription", formValue.courseDescription || "");
        formData.append("courseLocation", formValue.courseLocation);
        formData.append("hideStatus", formValue.hideStatus.toString());
        if (this.selectedAmenities.length > 0) {
          formData.append("courseAmenities", JSON.stringify(this.selectedAmenities));
        } else {
          formData.append("courseAmenities", JSON.stringify([]));
        }
        const teesData = this.teesFormArray.value;
        formData.append("tees", JSON.stringify(teesData));
        if (this.selectedFile) {
          formData.append("courseImage", this.selectedFile);
        }
        const response = yield this.courseService.processCourse(formData, this.courseId);
        if (response && response.data && response.data.code === 1) {
          import_sweetalert2.default.fire({
            title: "Success!",
            text: "Course updated successfully",
            icon: "success",
            confirmButtonText: "Ok"
          }).then(() => {
            this.router.navigate(["/courses"]);
          });
        } else {
          import_sweetalert2.default.fire({
            title: "Error!",
            text: response?.data?.message || "Failed to update course",
            icon: "error",
            confirmButtonText: "Ok"
          });
        }
      } catch (error) {
        console.error("Error updating course:", error);
        import_sweetalert2.default.fire({
          title: "Error!",
          text: "Failed to update course",
          icon: "error",
          confirmButtonText: "Ok"
        });
      } finally {
        this.loading = false;
      }
    });
  }
  onDelete() {
    return __async(this, null, function* () {
      const result = yield import_sweetalert2.default.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
      });
      if (result.isConfirmed) {
        this.loading = true;
        try {
          const response = yield this.courseService.deleteCourse(this.courseId);
          if (response && response.data && response.data.code === 1) {
            import_sweetalert2.default.fire({
              title: "Deleted!",
              text: "Course has been deleted.",
              icon: "success",
              confirmButtonText: "Ok"
            }).then(() => {
              this.router.navigate(["/courses"]);
            });
          } else {
            import_sweetalert2.default.fire({
              title: "Error!",
              text: response?.data?.message || "Failed to delete course",
              icon: "error",
              confirmButtonText: "Ok"
            });
          }
        } catch (error) {
          console.error("Error deleting course:", error);
          import_sweetalert2.default.fire({
            title: "Error!",
            text: "Failed to delete course",
            icon: "error",
            confirmButtonText: "Ok"
          });
        } finally {
          this.loading = false;
        }
      }
    });
  }
  onReset() {
    this.submitted = false;
    this.golfCourseForm.reset();
    this.selectedAmenities = [];
    this.imagePreview = null;
    this.selectedFile = null;
    while (this.teesFormArray.length !== 0) {
      this.teesFormArray.removeAt(0);
    }
    this.addDefaultTee();
    this.loadCourseData();
  }
  onCancel() {
    this.router.navigate(["/courses"]);
  }
  isFieldInvalid(fieldName) {
    const field = this.golfCourseForm.get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }
  getErrorMessage(fieldName) {
    const field = this.golfCourseForm.get(fieldName);
    if (!field || !field.errors)
      return "";
    const errors = field.errors;
    if (errors["required"]) {
      return "This field is required";
    }
    if (errors["minlength"]) {
      return `Minimum length is ${errors["minlength"].requiredLength} characters`;
    }
    if (errors["pattern"]) {
      switch (fieldName) {
        case "coursePhoneNumber":
        case "courseAlternatePhoneNumber":
          return "Please enter a valid phone number";
        case "courseWebsite":
          return "Please enter a valid URL starting with http:// or https://";
        default:
          return "Invalid format";
      }
    }
    return "Invalid value";
  }
  convertTimeForInput(timeString) {
    if (!timeString)
      return "06:00";
    if (/^\d{2}:\d{2}$/.test(timeString)) {
      return timeString;
    }
    const timeMatch = timeString.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
    if (timeMatch) {
      let hours = parseInt(timeMatch[1]);
      const minutes = timeMatch[2];
      const period = timeMatch[3].toUpperCase();
      if (period === "PM" && hours !== 12) {
        hours += 12;
      } else if (period === "AM" && hours === 12) {
        hours = 0;
      }
      return `${hours.toString().padStart(2, "0")}:${minutes}`;
    }
    return "06:00";
  }
};
_UpdateCoursesComponent.\u0275fac = function UpdateCoursesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UpdateCoursesComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CourseService), \u0275\u0275directiveInject(DomSanitizer));
};
_UpdateCoursesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdateCoursesComponent, selectors: [["app-update-courses"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 230, vars: 33, consts: [["form", "ngForm"], ["xs", "12"], [1, "mb-4"], ["cForm", "", 1, "row", "g-3", "needs-validation", 3, "ngSubmit", "formGroup"], ["md", "6", 3, "cFormFloating"], ["cFormControl", "", "id", "courseName", "formControlName", "courseName", "type", "text", "placeholder", "Course Name"], ["cLabel", "", "for", "courseName", 1, "ms-2"], [3, "valid", 4, "ngIf"], ["cFormControl", "", "id", "coursePhoneNumber", "formControlName", "coursePhoneNumber", "type", "text", "placeholder", "Phone Number"], ["cLabel", "", "for", "coursePhoneNumber", 1, "ms-2"], ["cFormControl", "", "id", "courseAlternatePhoneNumber", "formControlName", "courseAlternatePhoneNumber", "type", "text", "placeholder", "Alternate Phone Number"], ["cLabel", "", "for", "courseAlternatePhoneNumber", 1, "ms-2"], ["cFormControl", "", "id", "courseWebsite", "formControlName", "courseWebsite", "type", "url", "placeholder", "Website"], ["cLabel", "", "for", "courseWebsite", 1, "ms-2"], ["md", "12", 3, "cFormFloating"], ["cFormControl", "", "id", "courseOpenFrom", "formControlName", "courseOpenFrom", "type", "time", "placeholder", "Opening Time"], ["cLabel", "", "for", "courseOpenFrom", 1, "ms-2"], ["cFormControl", "", "id", "joinRequestExpiryHours", "formControlName", "joinRequestExpiryHours", "type", "number", "min", "0", "placeholder", "Auto-expiry hours"], ["cLabel", "", "for", "joinRequestExpiryHours", 1, "ms-2"], [1, "text-muted", "d-block", "mt-1", "ms-2"], ["cFormControl", "", "id", "courseAddress", "formControlName", "courseAddress", "placeholder", "Course Address", "rows", "4"], ["cLabel", "", "for", "courseAddress", 1, "ms-2"], ["cFormControl", "", "id", "courseLocation", "formControlName", "courseLocation", "type", "text", "placeholder", "GPS Coordinates or Detailed Location"], ["cLabel", "", "for", "courseLocation", 1, "ms-2"], ["cFormControl", "", "id", "courseDescription", "formControlName", "courseDescription", "placeholder", "Course Description", "rows", "8"], ["cLabel", "", "for", "courseDescription", 1, "ms-2"], ["md", "12"], [1, "mb-3"], ["cLabel", "", "for", "courseImage", 1, "form-label"], ["cFormControl", "", "id", "courseImage", "type", "file", "accept", "image/*", 1, "form-control", 3, "change"], [1, "form-text"], ["class", "mb-3", 4, "ngIf"], ["cLabel", "", 1, "form-label"], [1, "amenities-container", "mt-2"], ["class", "text-muted", 4, "ngIf"], ["cButton", "", "class", "me-2 mb-2", "variant", "outline", "type", "button", 3, "color", "title", "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], ["cLabel", "", 1, "form-label", "mb-0"], ["cButton", "", "color", "success", "variant", "outline", "size", "sm", "type", "button", 3, "click", "disabled"], [1, "fas", "fa-plus", "me-1"], ["formArrayName", "tees"], ["class", "card mb-3 tee-card", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "text-muted"], [1, "fas", "fa-info-circle", "me-1"], ["md", "6"], ["cFormSelect", "", "formControlName", "hideStatus", 1, "form-select"], ["value", "0"], ["value", "1"], ["xs", "12", 1, "d-flex", "gap-2"], ["cButton", "", "color", "primary", "type", "submit", 1, "d-inline-flex", "align-items-center", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["cButton", "", "color", "secondary", "type", "button", 3, "click", "disabled"], ["cButton", "", "color", "light", "type", "button", 3, "click", "disabled"], ["cButton", "", "color", "danger", "type", "button", "class", "ms-auto", 3, "disabled", "click", 4, "ngIf"], [3, "valid"], [1, "mb-2"], ["alt", "Course Image Preview", 1, "img-thumbnail", 2, "max-width", "300px", "max-height", "200px", 3, "src"], ["cButton", "", "variant", "outline", "type", "button", 1, "me-2", "mb-2", 3, "click", "color", "title"], ["class", "me-1 amenity-icon", "style", "width: 16px; height: 16px; display: inline-block;", 3, "innerHTML", 4, "ngIf"], ["class", "me-1", 3, "class", 4, "ngIf"], ["class", "fas fa-check ms-1", 4, "ngIf"], [1, "me-1", "amenity-icon", 2, "width", "16px", "height", "16px", "display", "inline-block", 3, "innerHTML"], [1, "me-1"], [1, "fas", "fa-check", "ms-1"], [1, "card", "mb-3", "tee-card", 3, "formGroupName"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], ["cButton", "", "color", "danger", "variant", "outline", "size", "sm", "type", "button", 3, "disabled", "click", 4, "ngIf"], [1, "card-body"], [1, "row", "g-3"], ["cLabel", "", 1, "form-label", 3, "for"], ["cFormControl", "", "formControlName", "holeNumber", "type", "number", "min", "1", "step", "1", "placeholder", "Enter number of holes", 1, "form-control", 3, "id"], ["cButton", "", "color", "danger", "variant", "outline", "size", "sm", "type", "button", 3, "click", "disabled"], [1, "fas", "fa-trash"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], ["cButton", "", "color", "danger", "type", "button", 1, "ms-auto", 3, "click", "disabled"]], template: function UpdateCoursesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-row");
    \u0275\u0275text(1, "\n  ");
    \u0275\u0275elementStart(2, "c-col", 1);
    \u0275\u0275text(3, "\n    ");
    \u0275\u0275elementStart(4, "c-card", 2);
    \u0275\u0275text(5, "\n      ");
    \u0275\u0275elementStart(6, "c-card-header");
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Update Golf Course");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n      ");
    \u0275\u0275elementStart(12, "c-card-body");
    \u0275\u0275text(13, "\n        ");
    \u0275\u0275elementStart(14, "form", 3, 0);
    \u0275\u0275listener("ngSubmit", function UpdateCoursesComponent_Template_form_ngSubmit_14_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSubmit());
    });
    \u0275\u0275text(16, "\n          ");
    \u0275\u0275text(17, "\n          ");
    \u0275\u0275elementStart(18, "c-col", 4);
    \u0275\u0275text(19, "\n            ");
    \u0275\u0275element(20, "input", 5);
    \u0275\u0275text(21, "\n            ");
    \u0275\u0275elementStart(22, "label", 6);
    \u0275\u0275text(23, "Course Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n            ");
    \u0275\u0275template(25, UpdateCoursesComponent_c_form_feedback_25_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(26, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, "\n\n          ");
    \u0275\u0275elementStart(28, "c-col", 4);
    \u0275\u0275text(29, "\n            ");
    \u0275\u0275element(30, "input", 8);
    \u0275\u0275text(31, "\n            ");
    \u0275\u0275elementStart(32, "label", 9);
    \u0275\u0275text(33, "Phone Number *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, "\n            ");
    \u0275\u0275template(35, UpdateCoursesComponent_c_form_feedback_35_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(36, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, "\n\n          ");
    \u0275\u0275elementStart(38, "c-col", 4);
    \u0275\u0275text(39, "\n            ");
    \u0275\u0275element(40, "input", 10);
    \u0275\u0275text(41, "\n            ");
    \u0275\u0275elementStart(42, "label", 11);
    \u0275\u0275text(43, "Alternate Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, "\n            ");
    \u0275\u0275template(45, UpdateCoursesComponent_c_form_feedback_45_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(46, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, "\n\n          ");
    \u0275\u0275elementStart(48, "c-col", 4);
    \u0275\u0275text(49, "\n            ");
    \u0275\u0275element(50, "input", 12);
    \u0275\u0275text(51, "\n            ");
    \u0275\u0275elementStart(52, "label", 13);
    \u0275\u0275text(53, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, "\n            ");
    \u0275\u0275template(55, UpdateCoursesComponent_c_form_feedback_55_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(56, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, "\n\n          ");
    \u0275\u0275elementStart(58, "c-col", 14);
    \u0275\u0275text(59, "\n            ");
    \u0275\u0275element(60, "input", 15);
    \u0275\u0275text(61, "\n            ");
    \u0275\u0275elementStart(62, "label", 16);
    \u0275\u0275text(63, "Opening Time *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, "\n            ");
    \u0275\u0275template(65, UpdateCoursesComponent_c_form_feedback_65_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(66, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, "\n\n          ");
    \u0275\u0275text(68, "\n          ");
    \u0275\u0275elementStart(69, "c-col", 14);
    \u0275\u0275text(70, "\n            ");
    \u0275\u0275element(71, "input", 17);
    \u0275\u0275text(72, "\n            ");
    \u0275\u0275elementStart(73, "label", 18);
    \u0275\u0275text(74, "Join-request auto-expiry (hours before tee time)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(75, "\n            ");
    \u0275\u0275elementStart(76, "small", 19);
    \u0275\u0275text(77, "Leave blank to disable. Pending join requests auto-expire this many hours before the tee time.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(78, "\n            ");
    \u0275\u0275template(79, UpdateCoursesComponent_c_form_feedback_79_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(80, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(81, "\n\n          ");
    \u0275\u0275text(82, "\n          ");
    \u0275\u0275elementStart(83, "c-col", 14);
    \u0275\u0275text(84, "\n            ");
    \u0275\u0275element(85, "textarea", 20);
    \u0275\u0275text(86, "\n            ");
    \u0275\u0275elementStart(87, "label", 21);
    \u0275\u0275text(88, "Course Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89, "\n            ");
    \u0275\u0275template(90, UpdateCoursesComponent_c_form_feedback_90_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(91, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, "\n\n          ");
    \u0275\u0275text(93, "\n          ");
    \u0275\u0275elementStart(94, "c-col", 14);
    \u0275\u0275text(95, "\n            ");
    \u0275\u0275element(96, "input", 22);
    \u0275\u0275text(97, "\n            ");
    \u0275\u0275elementStart(98, "label", 23);
    \u0275\u0275text(99, "Course Location (GPS/Directions) *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(100, "\n            ");
    \u0275\u0275template(101, UpdateCoursesComponent_c_form_feedback_101_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(102, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(103, "\n\n          ");
    \u0275\u0275text(104, "\n          ");
    \u0275\u0275elementStart(105, "c-col", 14);
    \u0275\u0275text(106, "\n            ");
    \u0275\u0275element(107, "textarea", 24);
    \u0275\u0275text(108, "\n            ");
    \u0275\u0275elementStart(109, "label", 25);
    \u0275\u0275text(110, "Course Description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(111, "\n            ");
    \u0275\u0275template(112, UpdateCoursesComponent_c_form_feedback_112_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(113, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(114, "\n\n          ");
    \u0275\u0275text(115, "\n          ");
    \u0275\u0275elementStart(116, "c-col", 26);
    \u0275\u0275text(117, "\n            ");
    \u0275\u0275elementStart(118, "div", 27);
    \u0275\u0275text(119, "\n              ");
    \u0275\u0275elementStart(120, "label", 28);
    \u0275\u0275text(121, "Course Image");
    \u0275\u0275elementEnd();
    \u0275\u0275text(122, "\n              ");
    \u0275\u0275elementStart(123, "input", 29);
    \u0275\u0275listener("change", function UpdateCoursesComponent_Template_input_change_123_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onFileChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(124, "\n              ");
    \u0275\u0275elementStart(125, "div", 30);
    \u0275\u0275text(126, "Maximum file size: 5MB. Supported formats: JPG, PNG, GIF");
    \u0275\u0275elementEnd();
    \u0275\u0275text(127, "\n              ");
    \u0275\u0275template(128, UpdateCoursesComponent_c_form_feedback_128_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(129, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(130, "\n            ");
    \u0275\u0275text(131, "\n            ");
    \u0275\u0275template(132, UpdateCoursesComponent_div_132_Template, 7, 1, "div", 31);
    \u0275\u0275text(133, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(134, "\n\n          ");
    \u0275\u0275text(135, "\n          ");
    \u0275\u0275elementStart(136, "c-col", 26);
    \u0275\u0275text(137, "\n            ");
    \u0275\u0275elementStart(138, "div", 27);
    \u0275\u0275text(139, "\n              ");
    \u0275\u0275elementStart(140, "label", 32);
    \u0275\u0275text(141, "Amenities *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(142, "\n              ");
    \u0275\u0275elementStart(143, "div", 33);
    \u0275\u0275text(144, "\n                ");
    \u0275\u0275template(145, UpdateCoursesComponent_div_145_Template, 2, 0, "div", 34);
    \u0275\u0275text(146, "\n                ");
    \u0275\u0275template(147, UpdateCoursesComponent_button_147_Template, 11, 6, "button", 35);
    \u0275\u0275text(148, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(149, "\n              ");
    \u0275\u0275template(150, UpdateCoursesComponent_c_form_feedback_150_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(151, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(152, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(153, "\n\n          ");
    \u0275\u0275text(154, "\n          ");
    \u0275\u0275elementStart(155, "c-col", 26);
    \u0275\u0275text(156, "\n            ");
    \u0275\u0275elementStart(157, "div", 27);
    \u0275\u0275text(158, "\n              ");
    \u0275\u0275elementStart(159, "div", 36);
    \u0275\u0275text(160, "\n                ");
    \u0275\u0275elementStart(161, "label", 37);
    \u0275\u0275text(162, "Course Tees *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(163, "\n                ");
    \u0275\u0275elementStart(164, "button", 38);
    \u0275\u0275listener("click", function UpdateCoursesComponent_Template_button_click_164_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addTee());
    });
    \u0275\u0275text(165, "\n                  ");
    \u0275\u0275element(166, "i", 39);
    \u0275\u0275text(167, "\n                  Add Tee\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(168, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(169, "\n\n              ");
    \u0275\u0275text(170, "\n              ");
    \u0275\u0275elementStart(171, "div", 40);
    \u0275\u0275text(172, "\n                ");
    \u0275\u0275template(173, UpdateCoursesComponent_div_173_Template, 28, 8, "div", 41);
    \u0275\u0275text(174, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(175, "\n\n              ");
    \u0275\u0275text(176, "\n              ");
    \u0275\u0275template(177, UpdateCoursesComponent_c_form_feedback_177_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(178, "\n\n              ");
    \u0275\u0275text(179, "\n              ");
    \u0275\u0275elementStart(180, "div", 30);
    \u0275\u0275text(181, "\n                ");
    \u0275\u0275elementStart(182, "small", 42);
    \u0275\u0275text(183, "\n                  ");
    \u0275\u0275element(184, "i", 43);
    \u0275\u0275text(185, "\n                  Add multiple tees to offer different hole configurations. Each tee can have any number of holes.\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(186, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(187, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(188, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(189, "\n\n          ");
    \u0275\u0275text(190, "\n          ");
    \u0275\u0275elementStart(191, "c-col", 44);
    \u0275\u0275text(192, "\n            ");
    \u0275\u0275elementStart(193, "div", 27);
    \u0275\u0275text(194, "\n              ");
    \u0275\u0275elementStart(195, "label", 32);
    \u0275\u0275text(196, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275text(197, "\n              ");
    \u0275\u0275elementStart(198, "select", 45);
    \u0275\u0275text(199, "\n                ");
    \u0275\u0275elementStart(200, "option", 46);
    \u0275\u0275text(201, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275text(202, "\n                ");
    \u0275\u0275elementStart(203, "option", 47);
    \u0275\u0275text(204, "Hidden");
    \u0275\u0275elementEnd();
    \u0275\u0275text(205, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(206, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(207, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(208, "\n\n          ");
    \u0275\u0275text(209, "\n          ");
    \u0275\u0275elementStart(210, "c-col", 48);
    \u0275\u0275text(211, "\n            ");
    \u0275\u0275elementStart(212, "button", 49);
    \u0275\u0275text(213, "\n              ");
    \u0275\u0275template(214, UpdateCoursesComponent_span_214_Template, 1, 0, "span", 50);
    \u0275\u0275text(215);
    \u0275\u0275elementEnd();
    \u0275\u0275text(216, "\n\n            ");
    \u0275\u0275elementStart(217, "button", 51);
    \u0275\u0275listener("click", function UpdateCoursesComponent_Template_button_click_217_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onReset());
    });
    \u0275\u0275text(218, "\n              Reset Form\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(219, "\n\n            ");
    \u0275\u0275elementStart(220, "button", 52);
    \u0275\u0275listener("click", function UpdateCoursesComponent_Template_button_click_220_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onCancel());
    });
    \u0275\u0275text(221, "\n              Cancel\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(222, "\n\n            ");
    \u0275\u0275template(223, UpdateCoursesComponent_button_223_Template, 2, 1, "button", 53);
    \u0275\u0275text(224, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(225, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(226, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(227, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(228, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(229, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275property("formGroup", ctx.golfCourseForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("courseName"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("coursePhoneNumber"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("courseAlternatePhoneNumber"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("courseWebsite"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("courseOpenFrom"));
    \u0275\u0275advance(4);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("joinRequestExpiryHours"));
    \u0275\u0275advance(4);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("courseAddress"));
    \u0275\u0275advance(4);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("courseLocation"));
    \u0275\u0275advance(4);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("courseDescription"));
    \u0275\u0275advance(16);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("courseImage"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.imagePreview);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx.amenitiesList.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.amenitiesList);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("courseAmenities"));
    \u0275\u0275advance(14);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx.teesFormArray.controls);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("tees"));
    \u0275\u0275advance(35);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx.loading ? "Updating..." : "Update Course", "\n            ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.hasExistingData);
  }
}, dependencies: [
  NgIf,
  NgForOf,
  CommonModule,
  RowComponent,
  ColComponent,
  CardComponent,
  FormFloatingDirective,
  CardHeaderComponent,
  CardBodyComponent,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  NumberValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  MinValidator,
  FormGroupDirective,
  FormControlName,
  FormGroupName,
  FormArrayName,
  FormsModule,
  FormDirective,
  FormLabelDirective,
  FormControlDirective,
  FormFeedbackComponent,
  ButtonDirective,
  ButtonModule
], styles: [".amenities-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  border-width: 2px;\n}\n\n.amenities-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n\n\n.amenities-container[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%] {\n  background-color: #0d6efd !important;\n  border-color: #0d6efd !important;\n  color: white !important;\n  font-weight: 500;\n}\n\n.amenities-container[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0b5ed7 !important;\n  border-color: #0b5ed7 !important;\n}\n\n\n\n.amenities-container[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border-color: #6c757d !important;\n  color: #6c757d !important;\n}\n\n.amenities-container[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #6c757d !important;\n  border-color: #6c757d !important;\n  color: white !important;\n}\n\n\n\n.amenities-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n}\n\n.tee-card[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  transition: box-shadow 0.15s ease-in-out;\n}\n\n.tee-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n\n.amenity-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.form-control-plaintext[_ngcontent-%COMP%] {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 0.875rem;\n  color: #6c757d;\n}"] });
var UpdateCoursesComponent = _UpdateCoursesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdateCoursesComponent, { className: "UpdateCoursesComponent", filePath: "src\\app\\views\\courses\\update-courses\\update-courses.component.ts", lineNumber: 87 });
})();
export {
  UpdateCoursesComponent
};
//# sourceMappingURL=update-courses.component-MDMQCLQM.js.map
