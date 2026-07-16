import './polyfills.server.mjs';
import {
  Swal
} from "./chunk-LUM3LCUE.mjs";
import {
  BaseAPIUrl,
  baseURLType
} from "./chunk-R72VMWDM.mjs";
import {
  ButtonModule,
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
} from "./chunk-KHKHR2VG.mjs";
import {
  ActivatedRoute,
  CommonModule,
  DatePipe,
  HttpClient,
  NgForOf,
  NgIf,
  Router
} from "./chunk-7RJECGZ5.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-J4TCKMJW.mjs";
import {
  __async
} from "./chunk-CKH4O4N6.mjs";

// src/app/views/common-service/faq/faq.service.ts
var _FaqService = class _FaqService {
  constructor(http) {
    this.http = http;
    const baseUrl = new BaseAPIUrl();
    this.apiUrl = baseUrl.getUrl(baseURLType);
    this.lists = "/listing/";
    this.processing = "/processing/";
    this.deletion = "/deletion/";
  }
  // FAQ methods
  listFAQ(id = "0") {
    return this.http.get(`${this.apiUrl}faq/${id}${this.lists}`);
  }
  processFAQ(data, id = "0") {
    return this.http.post(`${this.apiUrl}faq/${id}${this.processing}`, data);
  }
  deleteFAQ(id) {
    return this.http.get(`${this.apiUrl}faq/${id}${this.deletion}`);
  }
  getActiveFAQs() {
    return this.http.get(`${this.apiUrl}faq/active_faqs/`);
  }
  getAllFAQs() {
    return this.http.get(`${this.apiUrl}faq/0${this.lists}`);
  }
};
_FaqService.\u0275fac = function FaqService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FaqService)(\u0275\u0275inject(HttpClient));
};
_FaqService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FaqService, factory: _FaqService.\u0275fac, providedIn: "root" });
var FaqService = _FaqService;

// src/app/views/faq/faq/faq.component.ts
function FaqComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "h5");
    \u0275\u0275element(3, "i", 12);
    \u0275\u0275text(4, " FAQ Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 13);
    \u0275\u0275text(6, "Manage frequently asked questions. You can create, edit, and delete FAQs below.");
    \u0275\u0275elementEnd()()();
  }
}
function FaqComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "span", 19);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function FaqComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 20);
    \u0275\u0275listener("click", function FaqComponent_div_9_div_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showFAQForm());
    });
    \u0275\u0275element(2, "i", 21);
    \u0275\u0275text(3, " Add New FAQ ");
    \u0275\u0275elementEnd()();
  }
}
function FaqComponent_div_9_div_3_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "small", 27);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "button", 28);
    \u0275\u0275listener("click", function FaqComponent_div_9_div_3_tr_15_Template_button_click_15_listener() {
      const faq_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editFAQ(faq_r4));
    });
    \u0275\u0275element(16, "i", 29);
    \u0275\u0275text(17, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 30);
    \u0275\u0275listener("click", function FaqComponent_div_9_div_3_tr_15_Template_button_click_18_listener() {
      const faq_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteFAQ(faq_r4.id));
    });
    \u0275\u0275element(19, "i", 31);
    \u0275\u0275text(20, " Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const faq_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r4.faqQuestion);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("title", faq_r4.faqAnswer);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", faq_r4.faqAnswer, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", faq_r4.hideStatus === 0)("bg-danger", faq_r4.hideStatus === 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", faq_r4.hideStatus === 0 ? "Active" : "Inactive", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 9, faq_r4.createdAt, "short"), " ");
  }
}
function FaqComponent_div_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "table", 23)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Question");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Answer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, FaqComponent_div_9_div_3_tr_15_Template, 21, 12, "tr", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.faqs);
  }
}
function FaqComponent_div_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "h5");
    \u0275\u0275element(2, "i", 33);
    \u0275\u0275text(3, " No FAQs Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 13);
    \u0275\u0275text(5, "No FAQs have been created yet. Click the button above to create one.");
    \u0275\u0275elementEnd()();
  }
}
function FaqComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, FaqComponent_div_9_div_1_Template, 4, 0, "div", 14)(2, FaqComponent_div_9_div_2_Template, 4, 0, "div", 7)(3, FaqComponent_div_9_div_3_Template, 16, 1, "div", 15)(4, FaqComponent_div_9_div_4_Template, 6, 0, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.faqs.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.faqs.length === 0);
  }
}
function FaqComponent_form_10_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("faqQuestion"), " ");
  }
}
function FaqComponent_form_10_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("faqAnswer"), " ");
  }
}
function FaqComponent_form_10_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 49);
  }
}
function FaqComponent_form_10_i_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 50);
  }
}
function FaqComponent_form_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 34);
    \u0275\u0275listener("ngSubmit", function FaqComponent_form_10_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 35)(3, "div", 36)(4, "label", 37);
    \u0275\u0275text(5, "FAQ Question *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 38);
    \u0275\u0275template(7, FaqComponent_form_10_div_7_Template, 2, 1, "div", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 1)(9, "div", 35)(10, "div", 36)(11, "label", 40);
    \u0275\u0275text(12, "FAQ Answer *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "textarea", 41);
    \u0275\u0275template(14, FaqComponent_form_10_div_14_Template, 2, 1, "div", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 1)(16, "div", 2)(17, "div", 42)(18, "button", 43);
    \u0275\u0275template(19, FaqComponent_form_10_span_19_Template, 1, 0, "span", 44)(20, FaqComponent_form_10_i_20_Template, 1, 0, "i", 45);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 46);
    \u0275\u0275listener("click", function FaqComponent_form_10_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelForm());
    });
    \u0275\u0275element(23, "i", 47);
    \u0275\u0275text(24, " Cancel ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.faqForm);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("faqQuestion"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("faqQuestion"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("faqAnswer"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("faqAnswer"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Update FAQ" : "Create FAQ", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
var _FaqComponent = class _FaqComponent {
  constructor(formBuilder, router, route, faqService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.route = route;
    this.faqService = faqService;
    this.loading = false;
    this.submitted = false;
    this.isEditMode = false;
    this.itemId = null;
    this.faqs = [];
    this.showForm = false;
  }
  ngOnInit() {
    this.initializeForm();
    this.loadData();
    this.checkEditMode();
  }
  initializeForm() {
    this.faqForm = this.formBuilder.group({
      faqQuestion: ["", [Validators.required, Validators.maxLength(500)]],
      faqAnswer: ["", [Validators.required]],
      hideStatus: [0]
    });
  }
  loadData() {
    return __async(this, null, function* () {
      try {
        this.loading = true;
        const response = yield this.faqService.getAllFAQs().toPromise();
        if (response && response.data) {
          this.faqs = response.data;
        }
      } catch (error) {
        console.error("Error loading FAQs:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to load FAQs"
        });
      } finally {
        this.loading = false;
      }
    });
  }
  checkEditMode() {
    return __async(this, null, function* () {
      this.route.params.subscribe((params) => {
        const id = params["id"];
        if (id && id !== "0") {
          this.isEditMode = true;
          this.itemId = id;
          this.loadItemData();
        }
      });
    });
  }
  loadItemData() {
    return __async(this, null, function* () {
      if (!this.itemId)
        return;
      try {
        this.loading = true;
        const response = yield this.faqService.listFAQ(this.itemId).toPromise();
        if (response && response.data) {
          const faq = response.data;
          this.faqForm.patchValue({
            faqQuestion: faq.faqQuestion,
            faqAnswer: faq.faqAnswer,
            hideStatus: faq.hideStatus
          });
          this.showForm = true;
        }
      } catch (error) {
        console.error("Error loading FAQ data:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to load FAQ data"
        });
      } finally {
        this.loading = false;
      }
    });
  }
  get f() {
    return this.faqForm.controls;
  }
  onSubmit() {
    return __async(this, null, function* () {
      this.submitted = true;
      if (this.faqForm.invalid) {
        return;
      }
      try {
        this.loading = true;
        const formData = this.faqForm.value;
        const id = this.isEditMode ? this.itemId : "0";
        const response = yield this.faqService.processFAQ(formData, id).toPromise();
        if (response && response.status === "success") {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: this.isEditMode ? "FAQ updated successfully" : "FAQ created successfully"
          });
          if (!this.isEditMode) {
            this.showForm = false;
            this.resetForm();
            this.loadData();
          } else {
            this.resetForm();
            this.loadData();
          }
        } else {
          throw new Error(response?.message || "Unknown error");
        }
      } catch (error) {
        console.error("Error processing FAQ:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message || "Failed to process FAQ"
        });
      } finally {
        this.loading = false;
      }
    });
  }
  isFieldInvalid(fieldName) {
    const field = this.faqForm.get(fieldName);
    return field.invalid && (field.dirty || field.touched || this.submitted);
  }
  getErrorMessage(fieldName) {
    const field = this.faqForm.get(fieldName);
    if (field?.errors) {
      if (field.errors["required"]) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      }
      if (field.errors["maxlength"]) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} cannot exceed ${field.errors["maxlength"].requiredLength} characters`;
      }
    }
    return "";
  }
  showFAQForm() {
    this.showForm = true;
    this.isEditMode = false;
    this.itemId = null;
    this.resetForm();
  }
  cancelForm() {
    this.showForm = false;
    this.isEditMode = false;
    this.itemId = null;
    this.resetForm();
    this.submitted = false;
  }
  resetForm() {
    this.faqForm.reset({
      faqQuestion: "",
      faqAnswer: "",
      hideStatus: 0
    });
    this.submitted = false;
  }
  editFAQ(faq) {
    return __async(this, null, function* () {
      this.isEditMode = true;
      this.itemId = faq.id.toString();
      this.faqForm.patchValue({
        faqQuestion: faq.faqQuestion,
        faqAnswer: faq.faqAnswer,
        hideStatus: faq.hideStatus
      });
      this.showForm = true;
    });
  }
  deleteFAQ(id) {
    return __async(this, null, function* () {
      const result = yield Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });
      if (result.isConfirmed) {
        try {
          this.loading = true;
          const response = yield this.faqService.deleteFAQ(id.toString()).toPromise();
          if (response && response.status === "success") {
            Swal.fire("Deleted!", "FAQ has been deleted.", "success");
            this.loadData();
          } else {
            throw new Error(response?.message || "Unknown error");
          }
        } catch (error) {
          console.error("Error deleting FAQ:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.message || "Failed to delete FAQ"
          });
        } finally {
          this.loading = false;
        }
      }
    });
  }
};
_FaqComponent.\u0275fac = function FaqComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FaqComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(FaqService));
};
_FaqComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqComponent, selectors: [["app-faq"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 3, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "card-body"], ["class", "mt-3 mb-3", 4, "ngIf"], [4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "mt-3", "mb-3"], [1, "alert", "alert-info"], [1, "fas", "fa-info-circle"], [1, "mb-0"], ["class", "text-center", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "alert alert-warning", 4, "ngIf"], [1, "text-center"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus"], [1, "table-responsive"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [1, "text-truncate", 2, "max-width", "300px", 3, "title"], [1, "badge"], [1, "text-muted"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "me-2", 3, "click"], [1, "fas", "fa-edit"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "fas", "fa-trash"], [1, "alert", "alert-warning"], [1, "fas", "fa-exclamation-triangle"], [3, "ngSubmit", "formGroup"], [1, "col-md-12"], [1, "mb-3"], ["for", "faqQuestion", 1, "form-label"], ["type", "text", "id", "faqQuestion", "formControlName", "faqQuestion", "placeholder", "Enter FAQ question", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "faqAnswer", 1, "form-label"], ["id", "faqAnswer", "formControlName", "faqAnswer", "rows", "5", "placeholder", "Enter FAQ answer", 1, "form-control"], [1, "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "fas fa-save me-2", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "fas", "fa-times", "me-2"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fas", "fa-save", "me-2"]], template: function FaqComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
    \u0275\u0275text(6, "FAQ Management");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275template(8, FaqComponent_div_8_Template, 7, 0, "div", 7)(9, FaqComponent_div_9_Template, 5, 4, "div", 8)(10, FaqComponent_form_10_Template, 25, 12, "form", 9);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx.showForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.showForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showForm);
  }
}, dependencies: [
  NgIf,
  NgForOf,
  CommonModule,
  DatePipe,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  FormsModule,
  ButtonModule
] });
var FaqComponent = _FaqComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqComponent, { className: "FaqComponent", filePath: "src\\app\\views\\faq\\faq\\faq.component.ts", lineNumber: 50 });
})();

// src/app/views/faq/routes.ts
var faqRoutes = [
  {
    path: "",
    component: FaqComponent,
    data: {
      title: "FAQ Management"
    }
  }
];
export {
  faqRoutes
};
//# sourceMappingURL=routes-GSAG753A.mjs.map
