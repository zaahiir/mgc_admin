import {
  ConceptService
} from "./chunk-OPJHXXAM.js";
import {
  require_sweetalert2_all
} from "./chunk-UDKX4ISR.js";
import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-EZZDAKGS.js";
import "./chunk-EXN3ACQE.js";
import "./chunk-AE67A222.js";
import {
  ButtonDirective,
  ButtonModule,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  CommonModule,
  FormControlDirective,
  FormDirective,
  FormFeedbackComponent,
  FormFloatingDirective,
  FormLabelDirective,
  NgForOf,
  NgIf,
  Router,
  RowComponent
} from "./chunk-KEGAS2QG.js";
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-WDQ2E3IC.js";
import {
  __async,
  __toESM
} from "./chunk-ZDRA4OZL.js";

// src/app/views/concept/update-concept/update-concept.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function UpdateConceptComponent_c_form_feedback_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("conceptHighlight"), "\n            ");
  }
}
function UpdateConceptComponent_div_45_c_form_feedback_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 18);
    \u0275\u0275text(1, "\n                      This field is required\n                    ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("valid", false);
  }
}
function UpdateConceptComponent_div_45_c_form_feedback_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 18);
    \u0275\u0275text(1, "\n                      This field is required\n                    ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("valid", false);
  }
}
function UpdateConceptComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "\n\n                ");
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275text(3, "\n                  ");
    \u0275\u0275elementStart(4, "h6", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                  ");
    \u0275\u0275elementStart(7, "button", 21);
    \u0275\u0275listener("click", function UpdateConceptComponent_div_45_Template_button_click_7_listener() {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeConceptItem(i_r4));
    });
    \u0275\u0275text(8, "\n                    ");
    \u0275\u0275element(9, "i", 22);
    \u0275\u0275text(10, "\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n\n                ");
    \u0275\u0275elementStart(13, "c-row");
    \u0275\u0275text(14, "\n                  ");
    \u0275\u0275elementStart(15, "c-col", 23);
    \u0275\u0275text(16, "\n                    ");
    \u0275\u0275element(17, "input", 24);
    \u0275\u0275text(18, "\n                    ");
    \u0275\u0275elementStart(19, "label", 25);
    \u0275\u0275text(20, "Heading");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n                    ");
    \u0275\u0275template(22, UpdateConceptComponent_div_45_c_form_feedback_22_Template, 2, 1, "c-form-feedback", 7);
    \u0275\u0275text(23, "\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n\n                  ");
    \u0275\u0275elementStart(25, "c-col", 26);
    \u0275\u0275text(26, "\n                    ");
    \u0275\u0275elementStart(27, "textarea", 27);
    \u0275\u0275text(28, "                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\n                    ");
    \u0275\u0275elementStart(30, "label", 25);
    \u0275\u0275text(31, "Paragraph");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, "\n                    ");
    \u0275\u0275template(33, UpdateConceptComponent_div_45_c_form_feedback_33_Template, 2, 1, "c-form-feedback", 7);
    \u0275\u0275text(34, "\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, "\n              ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Concept Item ", i_r4 + 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.conceptItems.length <= 1);
    \u0275\u0275advance(8);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "heading_" + i_r4);
    \u0275\u0275advance(2);
    \u0275\u0275property("for", "heading_" + i_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isItemFieldInvalid(i_r4, "heading"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "paragraph_" + i_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("for", "paragraph_" + i_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isItemFieldInvalid(i_r4, "paragraph"));
  }
}
function UpdateConceptComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
  }
}
var _UpdateConceptComponent = class _UpdateConceptComponent {
  constructor(formBuilder, router, conceptService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.conceptService = conceptService;
    this.loading = false;
    this.submitted = false;
  }
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.conceptForm = this.formBuilder.group({
      conceptHighlight: ["", [Validators.required, Validators.maxLength(1500)]],
      conceptCount: [1],
      items: this.formBuilder.array([
        this.createConceptItem()
      ]),
      hideStatus: [0]
    });
  }
  createConceptItem() {
    return this.formBuilder.group({
      heading: ["", [Validators.required, Validators.maxLength(255)]],
      paragraph: ["", [Validators.required, Validators.maxLength(1e3)]],
      order: [0]
    });
  }
  get conceptItems() {
    return this.conceptForm.get("items");
  }
  addConceptItem() {
    if (this.conceptItems.length < 8) {
      const newItem = this.createConceptItem();
      newItem.patchValue({ order: this.conceptItems.length });
      this.conceptItems.push(newItem);
      this.conceptForm.patchValue({ conceptCount: this.conceptItems.length });
    }
  }
  removeConceptItem(index) {
    if (this.conceptItems.length > 1) {
      this.conceptItems.removeAt(index);
      this.conceptForm.patchValue({ conceptCount: this.conceptItems.length });
      this.conceptItems.controls.forEach((control, i) => {
        control.patchValue({ order: i });
      });
    }
  }
  loadExistingConcept() {
    return __async(this, null, function* () {
      try {
        this.loading = true;
        const response = yield this.conceptService.listConcept();
        console.log("Load response:", response.data);
        if (response.data && response.data.code === 1) {
          const conceptData = response.data.data;
          if (!conceptData) {
            throw new Error("No concept data received");
          }
          while (this.conceptItems.length !== 0) {
            this.conceptItems.removeAt(0);
          }
          this.conceptForm.patchValue({
            conceptHighlight: conceptData.conceptHighlight || "",
            conceptCount: conceptData.conceptCount || 1
          });
          if (conceptData.items && conceptData.items.length > 0) {
            conceptData.items.forEach((item) => {
              const itemForm = this.createConceptItem();
              itemForm.patchValue({
                heading: item.heading || "",
                paragraph: item.paragraph || "",
                order: item.order || 0
              });
              this.conceptItems.push(itemForm);
            });
          } else {
            this.conceptItems.push(this.createConceptItem());
          }
          yield import_sweetalert2.default.fire({
            title: "Success!",
            text: "Existing concept loaded successfully",
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3e3
          });
        } else {
          throw new Error(response.data?.message || "Failed to load concept data");
        }
      } catch (error) {
        console.error("Error loading concept:", error);
        const errorMessage = error?.response?.data?.message || error?.message || "Failed to load existing concept";
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
  onSubmit() {
    return __async(this, null, function* () {
      this.submitted = true;
      if (this.conceptForm.invalid) {
        this.markAllFieldsAsTouched();
        yield import_sweetalert2.default.fire({
          title: "Validation Error!",
          text: "Please fill in all required fields correctly",
          icon: "warning",
          confirmButtonText: "Ok"
        });
        return;
      }
      try {
        this.loading = true;
        const formValue = this.conceptForm.value;
        if (!formValue.conceptHighlight?.trim()) {
          throw new Error("Concept highlight is required");
        }
        if (!formValue.items || formValue.items.length === 0) {
          throw new Error("At least one concept item is required");
        }
        for (let i = 0; i < formValue.items.length; i++) {
          const item = formValue.items[i];
          if (!item.heading?.trim()) {
            throw new Error(`Heading is required for item ${i + 1}`);
          }
          if (!item.paragraph?.trim()) {
            throw new Error(`Paragraph is required for item ${i + 1}`);
          }
        }
        const conceptData = {
          conceptHighlight: formValue.conceptHighlight.trim(),
          conceptCount: formValue.items.length,
          items: formValue.items.map((item, index) => ({
            heading: item.heading?.trim() || "",
            paragraph: item.paragraph?.trim() || "",
            order: index + 1
          })),
          hideStatus: 0
        };
        console.log("Sending concept data:", conceptData);
        const response = yield this.conceptService.processConcept(conceptData);
        console.log("Submit response:", response.data);
        if (response.data && response.data.code === 1) {
          yield import_sweetalert2.default.fire({
            title: "Success!",
            text: "Concept has been saved successfully",
            icon: "success",
            confirmButtonText: "Ok"
          });
          this.router.navigate(["/concept"]);
        } else {
          const errorMessage = response.data?.message || "Unknown error occurred";
          throw new Error(errorMessage);
        }
      } catch (error) {
        console.error("Error submitting concept:", error);
        let errorMessage = "Failed to save concept";
        if (error?.response?.data?.message) {
          errorMessage = error.response.data.message;
        } else if (error?.message) {
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
  onReset() {
    this.submitted = false;
    while (this.conceptItems.length !== 0) {
      this.conceptItems.removeAt(0);
    }
    this.conceptForm.reset({
      conceptHighlight: "",
      conceptCount: 1,
      hideStatus: 0
    });
    this.conceptItems.push(this.createConceptItem());
  }
  markAllFieldsAsTouched() {
    Object.keys(this.conceptForm.controls).forEach((key) => {
      const control = this.conceptForm.get(key);
      control?.markAsTouched();
    });
    this.conceptItems.controls.forEach((group) => {
      const formGroup = group;
      Object.keys(formGroup.controls).forEach((key) => {
        formGroup.get(key)?.markAsTouched();
      });
    });
  }
  isFieldInvalid(fieldName) {
    const field = this.conceptForm.get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }
  isItemFieldInvalid(index, fieldName) {
    const field = this.conceptItems.at(index).get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }
  getErrorMessage(fieldName) {
    const control = this.conceptForm.get(fieldName);
    if (!control || !control.errors)
      return "";
    if (control.errors["required"])
      return "This field is required";
    if (control.errors["maxlength"]) {
      const maxLength = control.errors["maxlength"].requiredLength;
      return `Maximum length is ${maxLength} characters`;
    }
    return "Invalid input";
  }
};
_UpdateConceptComponent.\u0275fac = function UpdateConceptComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UpdateConceptComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ConceptService));
};
_UpdateConceptComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdateConceptComponent, selectors: [["app-update-concept"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 71, vars: 11, consts: [["form", "ngForm"], ["xs", "12"], [1, "mb-4"], ["cForm", "", 1, "row", "g-3", "needs-validation", 3, "ngSubmit", "formGroup"], ["md", "12", 3, "cFormFloating"], ["cFormControl", "", "id", "conceptHighlight", "formControlName", "conceptHighlight", "placeholder", "Concept Highlight", "rows", "3"], ["cLabel", "", "for", "conceptHighlight", 1, "ms-2"], [3, "valid", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], ["type", "button", "cButton", "", "color", "success", "size", "sm", 3, "click", "disabled"], [1, "fas", "fa-plus", "me-1"], ["formArrayName", "items"], ["class", "concept-item-card mb-4 p-3 border rounded", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "d-flex", "gap-2"], ["cButton", "", "color", "primary", "type", "submit", 1, "me-1", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["cButton", "", "color", "secondary", "type", "button", 3, "click", "disabled"], ["cButton", "", "color", "info", "type", "button", 3, "click", "disabled"], [3, "valid"], [1, "concept-item-card", "mb-4", "p-3", "border", "rounded", 3, "formGroupName"], [1, "mb-0"], ["type", "button", "cButton", "", "color", "danger", "size", "sm", "variant", "outline", 3, "click", "disabled"], [1, "fas", "fa-trash"], ["md", "4", 3, "cFormFloating"], ["cFormControl", "", "formControlName", "heading", "type", "text", "placeholder", "Heading", 3, "id"], ["cLabel", "", 1, "ms-2", 3, "for"], ["md", "8", 3, "cFormFloating"], ["cFormControl", "", "formControlName", "paragraph", "placeholder", "Paragraph", "rows", "4", 3, "id"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function UpdateConceptComponent_Template(rf, ctx) {
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
    \u0275\u0275text(9, "Create/Edit Concept");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n      ");
    \u0275\u0275elementStart(12, "c-card-body");
    \u0275\u0275text(13, "\n        ");
    \u0275\u0275elementStart(14, "form", 3, 0);
    \u0275\u0275listener("ngSubmit", function UpdateConceptComponent_Template_form_ngSubmit_14_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSubmit());
    });
    \u0275\u0275text(16, "\n\n          ");
    \u0275\u0275text(17, "\n          ");
    \u0275\u0275elementStart(18, "c-col", 4);
    \u0275\u0275text(19, "\n            ");
    \u0275\u0275elementStart(20, "textarea", 5);
    \u0275\u0275text(21, "            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "\n            ");
    \u0275\u0275elementStart(23, "label", 6);
    \u0275\u0275text(24, "Concept Highlight");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, "\n            ");
    \u0275\u0275template(26, UpdateConceptComponent_c_form_feedback_26_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(27, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, "\n\n          ");
    \u0275\u0275text(29, "\n          ");
    \u0275\u0275elementStart(30, "c-col", 1);
    \u0275\u0275text(31, "\n            ");
    \u0275\u0275elementStart(32, "div", 8);
    \u0275\u0275text(33, "\n              ");
    \u0275\u0275elementStart(34, "h5");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, "\n              ");
    \u0275\u0275elementStart(37, "button", 9);
    \u0275\u0275listener("click", function UpdateConceptComponent_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addConceptItem());
    });
    \u0275\u0275text(38, "\n                ");
    \u0275\u0275element(39, "i", 10);
    \u0275\u0275text(40, "\n                Add Concept\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, "\n\n            ");
    \u0275\u0275elementStart(43, "div", 11);
    \u0275\u0275text(44, "\n              ");
    \u0275\u0275template(45, UpdateConceptComponent_div_45_Template, 37, 11, "div", 12);
    \u0275\u0275text(46, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, "\n\n          ");
    \u0275\u0275text(49, "\n          ");
    \u0275\u0275elementStart(50, "c-col", 1);
    \u0275\u0275text(51, "\n            ");
    \u0275\u0275elementStart(52, "div", 13);
    \u0275\u0275text(53, "\n              ");
    \u0275\u0275elementStart(54, "button", 14);
    \u0275\u0275text(55, "\n                ");
    \u0275\u0275template(56, UpdateConceptComponent_span_56_Template, 1, 0, "span", 15);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, "\n              ");
    \u0275\u0275elementStart(59, "button", 16);
    \u0275\u0275listener("click", function UpdateConceptComponent_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onReset());
    });
    \u0275\u0275text(60, "\n                Reset Form\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, "\n              ");
    \u0275\u0275elementStart(62, "button", 17);
    \u0275\u0275listener("click", function UpdateConceptComponent_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.loadExistingConcept());
    });
    \u0275\u0275text(63, "\n                Load Existing\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, "\n          ");
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
    \u0275\u0275advance(14);
    \u0275\u0275property("formGroup", ctx.conceptForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("conceptHighlight"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Concept Items (", ctx.conceptItems.length, "/8)");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.conceptItems.length >= 8);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx.conceptItems.controls);
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", ctx.loading ? "Saving..." : "Save Concept", "\n              ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.loading);
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
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
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
], styles: ["\n\n.concept-item-card[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 0.375rem;\n  position: relative;\n  transition: all 0.3s ease;\n}\n.concept-item-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n.concept-item-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.d-flex.gap-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.d-flex.gap-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .concept-item-card[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .d-flex.gap-2[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .d-flex.gap-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 0.5rem;\n  }\n  .d-flex.gap-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n}\n.concept-item-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=update-concept.component.css.map */"] });
var UpdateConceptComponent = _UpdateConceptComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdateConceptComponent, { className: "UpdateConceptComponent", filePath: "src\\app\\views\\concept\\update-concept\\update-concept.component.ts", lineNumber: 56 });
})();
export {
  UpdateConceptComponent
};
//# sourceMappingURL=update-concept.component-V5TRHWYX.js.map
