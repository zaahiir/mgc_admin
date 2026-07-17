import './polyfills.server.mjs';
import {
  EditorComponent,
  EditorModule
} from "./chunk-VWHC7QJP.mjs";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
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
  ButtonDirective,
  ButtonModule,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  FormFeedbackComponent,
  FormFloatingDirective,
  FormLabelDirective,
  RowComponent,
  SpinnerComponent,
  SpinnerModule
} from "./chunk-VUYBFT6U.mjs";
import {
  CommonModule,
  NgIf
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-J4TCKMJW.mjs";
import {
  __async
} from "./chunk-CKH4O4N6.mjs";

// src/app/views/common-service/about/about.service.ts
var _AboutService = class _AboutService {
  constructor() {
    this.apiUrl = new BaseAPIUrl().getUrl(baseURLType);
    this.getAbout = this.apiUrl + "about/get_about/";
    this.createOrUpdateAbout = this.apiUrl + "about/create_or_update_about/";
  }
  getAboutData() {
    return axios_default.get(this.getAbout);
  }
  createOrUpdateAboutData(data) {
    return axios_default.post(this.createOrUpdateAbout, data);
  }
  listing(id = "0") {
    return axios_default.get(this.apiUrl + `about/listing/${id}/`);
  }
  processing(data, id = "0") {
    return axios_default.post(this.apiUrl + `about/processing/${id}/`, data);
  }
  deletion(id) {
    return axios_default.get(this.apiUrl + `about/deletion/${id}/`);
  }
};
_AboutService.\u0275fac = function AboutService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AboutService)();
};
_AboutService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AboutService, factory: _AboutService.\u0275fac, providedIn: "root" });
var AboutService = _AboutService;

// src/app/views/about/about.component.ts
var _c0 = () => ({ plugins: "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount", toolbar: "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat", height: 300, menubar: false, branding: false, elementpath: false, statusbar: false });
function AboutComponent_c_form_feedback_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("aboutHeading"), " ");
  }
}
function AboutComponent_c_form_feedback_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("aboutDescription"), " ");
  }
}
function AboutComponent_c_form_feedback_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("partnerGolfClubs"), " ");
  }
}
function AboutComponent_c_form_feedback_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("successfulYears"), " ");
  }
}
function AboutComponent_c_spinner_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-spinner", 20);
  }
}
function AboutComponent_div_34_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", ctx_r0.aboutData.aboutDescription, \u0275\u0275sanitizeHtml);
  }
}
function AboutComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "h5");
    \u0275\u0275text(2, "Current About Section Data:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22)(4, "div", 23)(5, "p")(6, "strong");
    \u0275\u0275text(7, "Heading:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p")(10, "strong");
    \u0275\u0275text(11, "Partner Golf Clubs:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p")(14, "strong");
    \u0275\u0275text(15, "Successful Years:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, AboutComponent_div_34_div_17_Template, 4, 1, "div", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r0.aboutData.aboutHeading || "Not set", "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.aboutData.partnerGolfClubs || 0, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.aboutData.successfulYears || 0, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.aboutData.aboutDescription);
  }
}
var _AboutComponent = class _AboutComponent {
  constructor(formBuilder, aboutService) {
    this.formBuilder = formBuilder;
    this.aboutService = aboutService;
    this.loading = false;
    this.submitted = false;
    this.aboutData = null;
  }
  ngOnInit() {
    this.initializeForm();
    this.loadAboutData();
  }
  initializeForm() {
    this.aboutForm = this.formBuilder.group({
      aboutHeading: ["", [Validators.required, Validators.maxLength(255)]],
      aboutDescription: ["", [Validators.required]],
      partnerGolfClubs: [0, [Validators.required, Validators.min(0)]],
      successfulYears: [0, [Validators.required, Validators.min(0)]]
    });
  }
  loadAboutData() {
    return __async(this, null, function* () {
      this.loading = true;
      try {
        const response = yield this.aboutService.getAboutData();
        if (response.data && response.data.status === "success" && response.data.data) {
          this.aboutData = response.data.data;
          this.aboutForm.patchValue({
            aboutHeading: this.aboutData.aboutHeading || "",
            aboutDescription: this.aboutData.aboutDescription || "",
            partnerGolfClubs: this.aboutData.partnerGolfClubs || 0,
            successfulYears: this.aboutData.successfulYears || 0
          });
        }
      } catch (error) {
        console.error("Error loading about data:", error);
      } finally {
        this.loading = false;
      }
    });
  }
  onSubmit() {
    return __async(this, null, function* () {
      this.submitted = true;
      if (this.aboutForm.invalid) {
        return;
      }
      this.loading = true;
      try {
        const formData = this.aboutForm.value;
        const response = yield this.aboutService.createOrUpdateAboutData(formData);
        if (response.data && response.data.status === "success") {
          this.aboutData = response.data.data;
          this.submitted = false;
          alert("About section updated successfully!");
        } else {
          alert("Error updating about section: " + (response.data?.message || "Unknown error"));
        }
      } catch (error) {
        console.error("Error updating about section:", error);
        alert("Error updating about section. Please try again.");
      } finally {
        this.loading = false;
      }
    });
  }
  onReset() {
    this.submitted = false;
    this.aboutForm.reset({
      aboutHeading: "",
      aboutDescription: "",
      partnerGolfClubs: 0,
      successfulYears: 0
    });
  }
  isFieldInvalid(fieldName) {
    const field = this.aboutForm.get(fieldName);
    return field.invalid && (field.dirty || field.touched || this.submitted);
  }
  getErrorMessage(fieldName) {
    const field = this.aboutForm.get(fieldName);
    if (field.errors) {
      if (field.errors["required"]) {
        return `${fieldName} is required`;
      }
      if (field.errors["maxlength"]) {
        return `${fieldName} cannot exceed ${field.errors["maxlength"].requiredLength} characters`;
      }
      if (field.errors["min"]) {
        return `${fieldName} must be at least ${field.errors["min"].min}`;
      }
    }
    return "";
  }
};
_AboutComponent.\u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AboutComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AboutService));
};
_AboutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 15, consts: [["xs", "12"], [1, "mb-4"], [1, "row", "g-3", "needs-validation", 3, "ngSubmit", "formGroup"], ["md", "12", 3, "cFormFloating"], ["cFormControl", "", "id", "aboutHeading", "formControlName", "aboutHeading", "type", "text", "placeholder", "About Heading"], ["cLabel", "", "for", "aboutHeading"], [3, "valid", 4, "ngIf"], ["md", "12"], ["cLabel", "", "for", "aboutDescription"], ["apiKey", "jrj64u0e25jw0n4a9v0jbajhi9iakdkeyta9ryl58xwmqwz7", "formControlName", "aboutDescription", 3, "init"], ["md", "6", 3, "cFormFloating"], ["cFormControl", "", "id", "partnerGolfClubs", "formControlName", "partnerGolfClubs", "type", "number", "placeholder", "Partner Golf Clubs", "min", "0"], ["cLabel", "", "for", "partnerGolfClubs"], ["cFormControl", "", "id", "successfulYears", "formControlName", "successfulYears", "type", "number", "placeholder", "Successful Years", "min", "0"], ["cLabel", "", "for", "successfulYears"], ["cButton", "", "color", "primary", "type", "submit", 1, "me-2", 3, "disabled"], ["size", "sm", "class", "me-1", 4, "ngIf"], ["cButton", "", "color", "secondary", "type", "button", 3, "click", "disabled"], ["class", "mt-4", 4, "ngIf"], [3, "valid"], ["size", "sm", 1, "me-1"], [1, "mt-4"], [1, "card"], [1, "card-body"], [4, "ngIf"], [1, "mt-2", 3, "innerHTML"]], template: function AboutComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row")(1, "c-col", 0)(2, "c-card", 1)(3, "c-card-header")(4, "strong");
    \u0275\u0275text(5, "Manage About Section");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "c-card-body")(7, "form", 2);
    \u0275\u0275listener("ngSubmit", function AboutComponent_Template_form_ngSubmit_7_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(8, "c-col", 3);
    \u0275\u0275element(9, "input", 4);
    \u0275\u0275elementStart(10, "label", 5);
    \u0275\u0275text(11, "About Heading");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AboutComponent_c_form_feedback_12_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "c-col", 7)(14, "label", 8);
    \u0275\u0275text(15, "About Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "editor", 9);
    \u0275\u0275template(17, AboutComponent_c_form_feedback_17_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "c-col", 10);
    \u0275\u0275element(19, "input", 11);
    \u0275\u0275elementStart(20, "label", 12);
    \u0275\u0275text(21, "Partner Golf Clubs Count");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, AboutComponent_c_form_feedback_22_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "c-col", 10);
    \u0275\u0275element(24, "input", 13);
    \u0275\u0275elementStart(25, "label", 14);
    \u0275\u0275text(26, "Successful Years Count");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, AboutComponent_c_form_feedback_27_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "c-col", 0)(29, "button", 15);
    \u0275\u0275template(30, AboutComponent_c_spinner_30_Template, 1, 0, "c-spinner", 16);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 17);
    \u0275\u0275listener("click", function AboutComponent_Template_button_click_32_listener() {
      return ctx.onReset();
    });
    \u0275\u0275text(33, " Reset Form ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(34, AboutComponent_div_34_Template, 18, 4, "div", 18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx.aboutForm);
    \u0275\u0275advance();
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("aboutHeading"));
    \u0275\u0275advance(4);
    \u0275\u0275property("init", \u0275\u0275pureFunction0(14, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("aboutDescription"));
    \u0275\u0275advance();
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("partnerGolfClubs"));
    \u0275\u0275advance();
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("successfulYears"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.loading || ctx.aboutForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.loading ? "Saving..." : "Update About Section", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.aboutData);
  }
}, dependencies: [
  CommonModule,
  NgIf,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NumberValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  MinValidator,
  FormGroupDirective,
  FormControlName,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  ButtonDirective,
  ButtonModule,
  ColComponent,
  RowComponent,
  FormFloatingDirective,
  FormFeedbackComponent,
  FormControlDirective,
  FormLabelDirective,
  SpinnerModule,
  SpinnerComponent,
  EditorModule,
  EditorComponent
] });
var AboutComponent = _AboutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src\\app\\views\\about\\about.component.ts", lineNumber: 44 });
})();
export {
  AboutComponent
};
//# sourceMappingURL=about.component-ST2P7WT6.mjs.map
