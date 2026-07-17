import './polyfills.server.mjs';
import {
  AmenitiesService
} from "./chunk-TGGQNBN6.mjs";
import {
  Swal
} from "./chunk-LUM3LCUE.mjs";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-IPRNOZXQ.mjs";
import "./chunk-KMHHOWHO.mjs";
import "./chunk-R72VMWDM.mjs";
import "./chunk-HYNU6U63.mjs";
import {
  ButtonDirective,
  ButtonModule,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormFeedbackComponent,
  FormFloatingDirective,
  FormLabelDirective,
  RowComponent
} from "./chunk-VUYBFT6U.mjs";
import {
  ActivatedRoute,
  CommonModule,
  DomSanitizer,
  NgIf,
  Router
} from "./chunk-7RJECGZ5.mjs";
import {
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-J4TCKMJW.mjs";
import {
  __async
} from "./chunk-CKH4O4N6.mjs";

// src/app/views/amenities/create-amenities/create-amenities.component.ts
function CreateAmenitiesComponent_c_form_feedback_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("amenityName"), "\n            ");
  }
}
function CreateAmenitiesComponent_c_form_feedback_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("amenityIcon"), "\n            ");
  }
}
function CreateAmenitiesComponent_c_col_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-col", 1);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 32);
    \u0275\u0275text(3, "\n              ");
    \u0275\u0275elementStart(4, "label", 33);
    \u0275\u0275text(5, "Icon Preview:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n              ");
    \u0275\u0275elementStart(7, "div", 34);
    \u0275\u0275text(8, "\n                ");
    \u0275\u0275elementStart(9, "div", 35);
    \u0275\u0275text(10, "\n                  ");
    \u0275\u0275element(11, "div", 36);
    \u0275\u0275text(12, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n                ");
    \u0275\u0275elementStart(14, "div", 37);
    \u0275\u0275text(15, "\n                  ");
    \u0275\u0275elementStart(16, "div", 38);
    \u0275\u0275text(17, "SVG Icon");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "\n                  ");
    \u0275\u0275elementStart(19, "small", 39);
    \u0275\u0275text(20, "\n                    Preview of your SVG icon\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "\n                ");
    \u0275\u0275elementStart(23, "button", 40);
    \u0275\u0275listener("click", function CreateAmenitiesComponent_c_col_48_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSVG());
    });
    \u0275\u0275text(24, "\n                  ");
    \u0275\u0275element(25, "i", 41);
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
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("innerHTML", ctx_r1.svgPreview, \u0275\u0275sanitizeHtml);
  }
}
function CreateAmenitiesComponent_c_form_feedback_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("amenityTooltip"), "\n            ");
  }
}
function CreateAmenitiesComponent_c_form_feedback_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("amenitiesDescription"), "\n            ");
  }
}
function CreateAmenitiesComponent_span_157_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 42);
  }
}
function CreateAmenitiesComponent_button_163_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function CreateAmenitiesComponent_button_163_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDelete());
    });
    \u0275\u0275text(1, "\n              Delete Amenity\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
var _CreateAmenitiesComponent = class _CreateAmenitiesComponent {
  constructor(formBuilder, router, route, amenitiesService, sanitizer) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.route = route;
    this.amenitiesService = amenitiesService;
    this.sanitizer = sanitizer;
    this.loading = false;
    this.submitted = false;
    this.isEditMode = false;
    this.amenityId = null;
    this.hasExistingData = false;
    this.svgPreview = null;
    this.rawSvgContent = "";
  }
  ngOnInit() {
    this.initializeForm();
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.amenityId = params["id"];
        this.isEditMode = true;
        this.loadAmenityData();
      }
    });
  }
  loadAmenityData() {
    return __async(this, null, function* () {
      if (!this.amenityId)
        return;
      try {
        this.loading = true;
        const response = yield this.amenitiesService.listAmenities(this.amenityId);
        if (response.data && response.data.code === 1 && response.data.data.length > 0) {
          const amenityData = response.data.data[0];
          this.hasExistingData = true;
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
        }
      } catch (error) {
        console.error("Error loading amenity data:", error);
        yield Swal.fire({
          title: "Error!",
          text: "Failed to load amenity data",
          icon: "error",
          confirmButtonText: "Ok"
        });
      } finally {
        this.loading = false;
      }
    });
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
          hideStatus: 0
        };
        const requestId = this.isEditMode && this.amenityId ? this.amenityId : "0";
        const response = yield this.amenitiesService.processAmenitiesWithSVG(amenityData, requestId);
        if (response.data && response.data.code === 1) {
          yield Swal.fire({
            title: "Success!",
            text: this.isEditMode ? "Amenity has been updated successfully" : "Amenity has been created successfully",
            icon: "success",
            confirmButtonText: "Ok"
          });
          this.router.navigate(["/amenities"]);
        } else {
          throw new Error(response.data?.message || "Unknown error occurred");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        let errorMessage = "Failed to save amenity";
        if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        } else if (error.response?.data?.errors) {
          const errors = error.response.data.errors;
          errorMessage = Object.keys(errors).map((key) => `${key}: ${errors[key].join(", ")}`).join("\n");
        } else if (error.message) {
          errorMessage = error.message;
        }
        yield Swal.fire({
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
  onDelete() {
    return __async(this, null, function* () {
      if (!this.amenityId || !this.hasExistingData)
        return;
      const result = yield Swal.fire({
        title: "Are you sure?",
        text: "This action cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
      });
      if (result.isConfirmed) {
        try {
          this.loading = true;
          const response = yield this.amenitiesService.deleteAmenities(this.amenityId);
          if (response.data && response.data.code === 1) {
            yield Swal.fire({
              title: "Deleted!",
              text: "Amenity has been deleted successfully",
              icon: "success",
              confirmButtonText: "Ok"
            });
            this.router.navigate(["/amenities"]);
          } else {
            throw new Error(response.data?.message || "Failed to delete amenity");
          }
        } catch (error) {
          console.error("Error deleting amenity:", error);
          yield Swal.fire({
            title: "Error!",
            text: "Failed to delete amenity",
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
    this.svgPreview = null;
    this.rawSvgContent = "";
    this.amenityForm.reset({
      hideStatus: 0
    });
    if (this.isEditMode) {
      this.loadAmenityData();
    }
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
_CreateAmenitiesComponent.\u0275fac = function CreateAmenitiesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreateAmenitiesComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AmenitiesService), \u0275\u0275directiveInject(DomSanitizer));
};
_CreateAmenitiesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateAmenitiesComponent, selectors: [["app-create-amenities"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 170, vars: 17, consts: [["form", "ngForm"], ["xs", "12"], [1, "mb-4"], ["cForm", "", 1, "row", "g-3", "needs-validation", 3, "ngSubmit", "formGroup"], ["md", "6", 3, "cFormFloating"], ["cFormControl", "", "id", "amenityName", "formControlName", "amenityName", "type", "text", "placeholder", "Amenity Name"], ["cLabel", "", "for", "amenityName", 1, "ms-2"], [3, "valid", 4, "ngIf"], ["md", "6"], ["cLabel", "", "for", "amenityIcon", 1, "form-label"], ["href", "https://fontawesome.com/icons", "target", "_blank", 1, "text-primary", "ms-2", "text-decoration-none"], [1, "fas", "fa-external-link-alt"], ["cFormControl", "", "id", "amenityIcon", "formControlName", "amenityIcon", "placeholder", "Paste your SVG code here...", "rows", "4", 1, "font-monospace", 3, "input"], [1, "form-text"], ["xs", "12", 4, "ngIf"], ["xs", "12", 3, "cFormFloating"], ["cFormControl", "", "id", "amenityTooltip", "formControlName", "amenityTooltip", "placeholder", "Amenity Tooltip/Description", "rows", "3"], ["cLabel", "", "for", "amenityTooltip", 1, "ms-2"], ["cFormControl", "", "id", "amenitiesDescription", "formControlName", "amenitiesDescription", "placeholder", "Detailed description of the amenity", "rows", "4"], ["cLabel", "", "for", "amenitiesDescription", 1, "ms-2"], [1, "mt-3"], [1, "row"], [1, "col-md-6"], [1, "small"], ["href", "https://fontawesome.com/icons", "target", "_blank", 1, "text-primary"], [1, "small", "bg-dark", "text-light", "p-2", "rounded"], ["xs", "12", 1, "d-flex", "gap-2", "mt-4"], ["cButton", "", "color", "primary", "type", "submit", 1, "d-inline-flex", "align-items-center", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["cButton", "", "color", "secondary", "type", "button", 3, "click", "disabled"], ["cButton", "", "color", "danger", "type", "button", "class", "ms-auto", 3, "disabled", "click", 4, "ngIf"], [3, "valid"], [1, "mb-3"], [1, "form-label"], [1, "d-flex", "align-items-center", "gap-3", "p-3", "border", "rounded", "bg-light"], [1, "icon-preview-container"], [1, "svg-icon-preview", 3, "innerHTML"], [1, "flex-grow-1"], [1, "fw-bold"], [1, "text-muted"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fas", "fa-times"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], ["cButton", "", "color", "danger", "type", "button", 1, "ms-auto", 3, "click", "disabled"]], template: function CreateAmenitiesComponent_Template(rf, ctx) {
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
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n      ");
    \u0275\u0275elementStart(12, "c-card-body");
    \u0275\u0275text(13, "\n        ");
    \u0275\u0275elementStart(14, "form", 3, 0);
    \u0275\u0275listener("ngSubmit", function CreateAmenitiesComponent_Template_form_ngSubmit_14_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSubmit());
    });
    \u0275\u0275text(16, "\n\n          ");
    \u0275\u0275text(17, "\n          ");
    \u0275\u0275elementStart(18, "c-col", 4);
    \u0275\u0275text(19, "\n            ");
    \u0275\u0275element(20, "input", 5);
    \u0275\u0275text(21, "\n            ");
    \u0275\u0275elementStart(22, "label", 6);
    \u0275\u0275text(23, "Amenity Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n            ");
    \u0275\u0275template(25, CreateAmenitiesComponent_c_form_feedback_25_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(26, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, "\n\n          ");
    \u0275\u0275text(28, "\n          ");
    \u0275\u0275elementStart(29, "c-col", 8);
    \u0275\u0275text(30, "\n            ");
    \u0275\u0275elementStart(31, "label", 9);
    \u0275\u0275text(32, "\n              Amenity Icon (SVG) *\n              ");
    \u0275\u0275elementStart(33, "a", 10);
    \u0275\u0275text(34, "\n                ");
    \u0275\u0275element(35, "i", 11);
    \u0275\u0275text(36, " Get from Font Awesome\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, "\n            ");
    \u0275\u0275elementStart(39, "textarea", 12);
    \u0275\u0275listener("input", function CreateAmenitiesComponent_Template_textarea_input_39_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSVGInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, "\n            ");
    \u0275\u0275elementStart(41, "div", 13);
    \u0275\u0275text(42, "\n              Copy the full SVG code from Font Awesome (right-click \u2192 Copy SVG) and paste it here.\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, "\n            ");
    \u0275\u0275template(44, CreateAmenitiesComponent_c_form_feedback_44_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(45, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, "\n\n          ");
    \u0275\u0275text(47, "\n          ");
    \u0275\u0275template(48, CreateAmenitiesComponent_c_col_48_Template, 30, 1, "c-col", 14);
    \u0275\u0275text(49, "\n\n          ");
    \u0275\u0275text(50, "\n          ");
    \u0275\u0275elementStart(51, "c-col", 15);
    \u0275\u0275text(52, "\n            ");
    \u0275\u0275element(53, "textarea", 16);
    \u0275\u0275text(54, "\n            ");
    \u0275\u0275elementStart(55, "label", 17);
    \u0275\u0275text(56, "Tooltip/Description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, "\n            ");
    \u0275\u0275template(58, CreateAmenitiesComponent_c_form_feedback_58_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(59, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, "\n\n          ");
    \u0275\u0275text(61, "\n          ");
    \u0275\u0275elementStart(62, "c-col", 15);
    \u0275\u0275text(63, "\n            ");
    \u0275\u0275element(64, "textarea", 18);
    \u0275\u0275text(65, "\n            ");
    \u0275\u0275elementStart(66, "label", 19);
    \u0275\u0275text(67, "Detailed Description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, "\n            ");
    \u0275\u0275template(69, CreateAmenitiesComponent_c_form_feedback_69_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(70, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, "\n\n          ");
    \u0275\u0275text(72, "\n          ");
    \u0275\u0275elementStart(73, "c-col", 1);
    \u0275\u0275text(74, "\n            ");
    \u0275\u0275elementStart(75, "c-card", 20);
    \u0275\u0275text(76, "\n              ");
    \u0275\u0275elementStart(77, "c-card-header");
    \u0275\u0275text(78, "\n                ");
    \u0275\u0275elementStart(79, "small")(80, "strong");
    \u0275\u0275text(81, "How to get Font Awesome SVG Icons:");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(82, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(83, "\n              ");
    \u0275\u0275elementStart(84, "c-card-body");
    \u0275\u0275text(85, "\n                ");
    \u0275\u0275elementStart(86, "div", 21);
    \u0275\u0275text(87, "\n                  ");
    \u0275\u0275elementStart(88, "div", 22);
    \u0275\u0275text(89, "\n                    ");
    \u0275\u0275elementStart(90, "h6");
    \u0275\u0275text(91, "Steps to get SVG:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, "\n                    ");
    \u0275\u0275elementStart(93, "ol", 23);
    \u0275\u0275text(94, "\n                      ");
    \u0275\u0275elementStart(95, "li");
    \u0275\u0275text(96, "Visit ");
    \u0275\u0275elementStart(97, "a", 24);
    \u0275\u0275text(98, "Font Awesome Icons");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(99, "\n                      ");
    \u0275\u0275elementStart(100, "li");
    \u0275\u0275text(101, "Search for your desired icon");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, "\n                      ");
    \u0275\u0275elementStart(103, "li");
    \u0275\u0275text(104, "Click on the icon to open details");
    \u0275\u0275elementEnd();
    \u0275\u0275text(105, "\n                      ");
    \u0275\u0275elementStart(106, "li");
    \u0275\u0275text(107, 'Right-click and select "Copy SVG"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(108, "\n                      ");
    \u0275\u0275elementStart(109, "li");
    \u0275\u0275text(110, "Paste the SVG code in the textarea above");
    \u0275\u0275elementEnd();
    \u0275\u0275text(111, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(112, "\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(113, "\n                  ");
    \u0275\u0275elementStart(114, "div", 22);
    \u0275\u0275text(115, "\n                    ");
    \u0275\u0275elementStart(116, "h6");
    \u0275\u0275text(117, "SVG Benefits:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(118, "\n                    ");
    \u0275\u0275elementStart(119, "ul", 23);
    \u0275\u0275text(120, "\n                      ");
    \u0275\u0275elementStart(121, "li");
    \u0275\u0275text(122, "Vector-based (scales perfectly)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(123, "\n                      ");
    \u0275\u0275elementStart(124, "li");
    \u0275\u0275text(125, "Customizable colors via CSS");
    \u0275\u0275elementEnd();
    \u0275\u0275text(126, "\n                      ");
    \u0275\u0275elementStart(127, "li");
    \u0275\u0275text(128, "Lightweight and fast loading");
    \u0275\u0275elementEnd();
    \u0275\u0275text(129, "\n                      ");
    \u0275\u0275elementStart(130, "li");
    \u0275\u0275text(131, "No additional HTTP requests");
    \u0275\u0275elementEnd();
    \u0275\u0275text(132, "\n                      ");
    \u0275\u0275elementStart(133, "li");
    \u0275\u0275text(134, "Consistent across all devices");
    \u0275\u0275elementEnd();
    \u0275\u0275text(135, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(136, "\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(137, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(138, "\n                ");
    \u0275\u0275elementStart(139, "div", 20);
    \u0275\u0275text(140, "\n                  ");
    \u0275\u0275elementStart(141, "h6");
    \u0275\u0275text(142, "Example SVG Structure:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(143, "\n                  ");
    \u0275\u0275elementStart(144, "pre", 25)(145, "code");
    \u0275\u0275text(146, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\n  <path d="M64 32C28.7 32..."></path>\n</svg>');
    \u0275\u0275elementEnd()();
    \u0275\u0275text(147, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(148, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(149, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(150, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(151, "\n\n          ");
    \u0275\u0275text(152, "\n          ");
    \u0275\u0275elementStart(153, "c-col", 26);
    \u0275\u0275text(154, "\n            ");
    \u0275\u0275elementStart(155, "button", 27);
    \u0275\u0275text(156, "\n              ");
    \u0275\u0275template(157, CreateAmenitiesComponent_span_157_Template, 1, 0, "span", 28);
    \u0275\u0275text(158);
    \u0275\u0275elementEnd();
    \u0275\u0275text(159, "\n\n            ");
    \u0275\u0275elementStart(160, "button", 29);
    \u0275\u0275listener("click", function CreateAmenitiesComponent_Template_button_click_160_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onReset());
    });
    \u0275\u0275text(161, "\n              Reset Form\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(162, "\n\n            ");
    \u0275\u0275template(163, CreateAmenitiesComponent_button_163_Template, 2, 1, "button", 30);
    \u0275\u0275text(164, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(165, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(166, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(167, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(168, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(169, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Amenity" : "New Amenity");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.amenityForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("amenityName"));
    \u0275\u0275advance(14);
    \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("amenityIcon"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("amenityIcon"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.svgPreview);
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("amenityTooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("amenitiesDescription"));
    \u0275\u0275advance(86);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx.loading ? "Saving..." : ctx.isEditMode ? "Update Amenity" : "Create Amenity", "\n            ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.isEditMode && ctx.hasExistingData);
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
  ButtonModule
], styles: [".icon-preview-container[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border: 2px dashed #dee2e6;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  overflow: hidden;\n}\n\n.svg-icon-preview[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.svg-icon-preview[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  fill: #0d6efd; \n\n}\n\n.font-monospace[_ngcontent-%COMP%] {\n  font-family: 'Courier New', Courier, monospace;\n  font-size: 0.875rem;\n}\n\n.form-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin-top: 0.25rem;\n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: #0d6efd !important;\n}\n\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n\npre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n\ncode[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}"] });
var CreateAmenitiesComponent = _CreateAmenitiesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateAmenitiesComponent, { className: "CreateAmenitiesComponent", filePath: "src\\app\\views\\amenities\\create-amenities\\create-amenities.component.ts", lineNumber: 60 });
})();
export {
  CreateAmenitiesComponent
};
//# sourceMappingURL=create-amenities.component-AFTK2NP4.mjs.map
