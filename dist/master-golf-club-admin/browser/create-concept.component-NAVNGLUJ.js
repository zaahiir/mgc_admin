import {
  ConceptService
} from "./chunk-OPJHXXAM.js";
import {
  require_sweetalert2_all
} from "./chunk-UDKX4ISR.js";
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
  DefaultValueAccessor,
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
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  ReactiveFormsModule,
  Router,
  RowComponent,
  Validators,
  ɵNgNoValidate
} from "./chunk-DWS3B4N5.js";
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WDQ2E3IC.js";
import {
  __async,
  __toESM
} from "./chunk-ZDRA4OZL.js";

// src/app/views/concept/create-concept/create-concept.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function CreateConceptComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "button", 10);
    \u0275\u0275listener("click", function CreateConceptComponent_div_13_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDelete());
    });
    \u0275\u0275text(3, "\n              ");
    \u0275\u0275element(4, "i", 11);
    \u0275\u0275text(5, "\n              Delete Concept\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n          ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.loading);
  }
}
function CreateConceptComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 13);
    \u0275\u0275text(3, "\n              ");
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5, "Loading...");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n            ");
    \u0275\u0275elementStart(8, "p", 15);
    \u0275\u0275text(9, "Loading concept data...");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n          ");
    \u0275\u0275elementEnd();
  }
}
function CreateConceptComponent_c_col_26_c_form_feedback_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r2.getErrorMessage("conceptHighlight"), "\n            ");
  }
}
function CreateConceptComponent_c_col_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-col", 16);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "textarea", 17);
    \u0275\u0275text(3, "            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n            ");
    \u0275\u0275elementStart(5, "label", 18);
    \u0275\u0275text(6, "Concept Highlight");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n            ");
    \u0275\u0275template(8, CreateConceptComponent_c_col_26_c_form_feedback_8_Template, 2, 2, "c-form-feedback", 19);
    \u0275\u0275text(9, "\n          ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.loading);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.isFieldInvalid("conceptHighlight"));
  }
}
function CreateConceptComponent_c_col_29_div_15_c_form_feedback_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 20);
    \u0275\u0275text(1, "\n                      This field is required\n                    ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("valid", false);
  }
}
function CreateConceptComponent_c_col_29_div_15_c_form_feedback_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 20);
    \u0275\u0275text(1, "\n                      This field is required\n                    ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("valid", false);
  }
}
function CreateConceptComponent_c_col_29_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, "\n\n                ");
    \u0275\u0275elementStart(2, "div", 21);
    \u0275\u0275text(3, "\n                  ");
    \u0275\u0275elementStart(4, "h6", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                  ");
    \u0275\u0275elementStart(7, "button", 10);
    \u0275\u0275listener("click", function CreateConceptComponent_c_col_29_div_15_Template_button_click_7_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeConceptItem(i_r6));
    });
    \u0275\u0275text(8, "\n                    ");
    \u0275\u0275element(9, "i", 28);
    \u0275\u0275text(10, "\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n\n                ");
    \u0275\u0275elementStart(13, "c-row");
    \u0275\u0275text(14, "\n                  ");
    \u0275\u0275elementStart(15, "c-col", 29);
    \u0275\u0275text(16, "\n                    ");
    \u0275\u0275element(17, "input", 30);
    \u0275\u0275text(18, "\n                    ");
    \u0275\u0275elementStart(19, "label", 31);
    \u0275\u0275text(20, "Heading");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n                    ");
    \u0275\u0275template(22, CreateConceptComponent_c_col_29_div_15_c_form_feedback_22_Template, 2, 1, "c-form-feedback", 19);
    \u0275\u0275text(23, "\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n\n                  ");
    \u0275\u0275elementStart(25, "c-col", 32);
    \u0275\u0275text(26, "\n                    ");
    \u0275\u0275elementStart(27, "textarea", 33);
    \u0275\u0275text(28, "                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\n                    ");
    \u0275\u0275elementStart(30, "label", 31);
    \u0275\u0275text(31, "Paragraph");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, "\n                    ");
    \u0275\u0275template(33, CreateConceptComponent_c_col_29_div_15_c_form_feedback_33_Template, 2, 1, "c-form-feedback", 19);
    \u0275\u0275text(34, "\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, "\n              ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", i_r6);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Concept Item ", i_r6 + 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.conceptItems.length <= 1 || ctx_r2.loading);
    \u0275\u0275advance(8);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "heading_" + i_r6)("disabled", ctx_r2.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("for", "heading_" + i_r6);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.isItemFieldInvalid(i_r6, "heading"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "paragraph_" + i_r6)("disabled", ctx_r2.loading);
    \u0275\u0275advance(3);
    \u0275\u0275property("for", "paragraph_" + i_r6);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.isItemFieldInvalid(i_r6, "paragraph"));
  }
}
function CreateConceptComponent_c_col_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-col", 1);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 21);
    \u0275\u0275text(3, "\n              ");
    \u0275\u0275elementStart(4, "h5");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n              ");
    \u0275\u0275elementStart(7, "button", 22);
    \u0275\u0275listener("click", function CreateConceptComponent_c_col_29_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addConceptItem());
    });
    \u0275\u0275text(8, "\n                ");
    \u0275\u0275element(9, "i", 23);
    \u0275\u0275text(10, "\n                Add Item\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n\n            ");
    \u0275\u0275elementStart(13, "div", 24);
    \u0275\u0275text(14, "\n              ");
    \u0275\u0275template(15, CreateConceptComponent_c_col_29_div_15_Template, 37, 13, "div", 25);
    \u0275\u0275text(16, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n          ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Concept Items (", ctx_r2.conceptItems.length, "/7)");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.conceptItems.length >= 7 || ctx_r2.loading);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.conceptItems.controls);
  }
}
function CreateConceptComponent_c_col_32_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 37);
  }
}
function CreateConceptComponent_c_col_32_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function CreateConceptComponent_c_col_32_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.loadConceptData());
    });
    \u0275\u0275text(1, "\n                ");
    \u0275\u0275element(2, "i", 39);
    \u0275\u0275text(3, "\n                Refresh\n              ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.loading);
  }
}
function CreateConceptComponent_c_col_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-col", 1);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275text(3, "\n              ");
    \u0275\u0275elementStart(4, "button", 34);
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275template(6, CreateConceptComponent_c_col_32_span_6_Template, 1, 0, "span", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n\n              ");
    \u0275\u0275template(9, CreateConceptComponent_c_col_32_button_9_Template, 4, 1, "button", 36);
    \u0275\u0275text(10, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n          ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.loading && ctx_r2.submitted);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", ctx_r2.loading && ctx_r2.submitted ? "Saving..." : ctx_r2.isEditMode ? "Update Concept" : "Save Concept", "\n              ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isEditMode);
  }
}
var _CreateConceptComponent = class _CreateConceptComponent {
  constructor(formBuilder, router, conceptService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.conceptService = conceptService;
    this.loading = false;
    this.submitted = false;
    this.isEditMode = false;
    this.hasExistingData = false;
    this.existingConceptId = null;
  }
  ngOnInit() {
    this.initializeForm();
    this.loadConceptData();
  }
  initializeForm() {
    this.conceptForm = this.formBuilder.group({
      conceptHighlight: ["", [Validators.required, Validators.maxLength(1500)]],
      items: this.formBuilder.array([
        this.createConceptItem()
      ])
    });
  }
  createConceptItem() {
    return this.formBuilder.group({
      id: [null],
      heading: ["", [Validators.required, Validators.maxLength(255)]],
      paragraph: ["", [Validators.required, Validators.maxLength(1e3)]],
      order: [0]
    });
  }
  get conceptItems() {
    return this.conceptForm.get("items");
  }
  // Made public to be accessible from template
  loadConceptData() {
    return __async(this, null, function* () {
      try {
        this.loading = true;
        const response = yield this.conceptService.getConcept();
        if (response.data && response.data.code === 1) {
          const conceptData = response.data.data;
          if (conceptData && conceptData.conceptHighlight && conceptData.conceptHighlight.trim()) {
            this.isEditMode = true;
            this.hasExistingData = true;
            this.existingConceptId = conceptData.id;
            while (this.conceptItems.length !== 0) {
              this.conceptItems.removeAt(0);
            }
            this.conceptForm.patchValue({
              conceptHighlight: conceptData.conceptHighlight
            });
            if (conceptData.items && conceptData.items.length > 0) {
              conceptData.items.forEach((item) => {
                const itemForm = this.createConceptItem();
                itemForm.patchValue({
                  id: item.id,
                  heading: item.heading,
                  paragraph: item.paragraph,
                  order: item.order
                });
                this.conceptItems.push(itemForm);
              });
            } else {
              this.conceptItems.push(this.createConceptItem());
            }
          } else {
            this.isEditMode = false;
            this.hasExistingData = false;
          }
        }
      } catch (error) {
        console.error("Error loading concept data:", error);
        this.isEditMode = false;
        this.hasExistingData = false;
      } finally {
        this.loading = false;
      }
    });
  }
  addConceptItem() {
    if (this.conceptItems.length < 8) {
      const newItem = this.createConceptItem();
      newItem.patchValue({ order: this.conceptItems.length + 1 });
      this.conceptItems.push(newItem);
    }
  }
  removeConceptItem(index) {
    return __async(this, null, function* () {
      if (this.conceptItems.length <= 1) {
        yield import_sweetalert2.default.fire({
          title: "Cannot Delete",
          text: "At least one concept item is required",
          icon: "warning",
          confirmButtonText: "Ok"
        });
        return;
      }
      const itemControl = this.conceptItems.at(index);
      const itemId = itemControl.get("id")?.value;
      if (itemId && this.isEditMode) {
        const result = yield import_sweetalert2.default.fire({
          title: "Delete Item",
          text: "Are you sure you want to delete this concept item?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "Cancel"
        });
        if (result.isConfirmed) {
          try {
            this.loading = true;
            const response = yield this.conceptService.deleteConceptItem(itemId);
            if (response.data && response.data.code === 1) {
              this.conceptItems.removeAt(index);
              this.updateItemOrders();
              yield import_sweetalert2.default.fire({
                title: "Deleted!",
                text: "Concept item has been deleted successfully",
                icon: "success",
                timer: 2e3,
                showConfirmButton: false
              });
            } else {
              throw new Error(response.data?.message || "Failed to delete item");
            }
          } catch (error) {
            console.error("Error deleting item:", error);
            yield import_sweetalert2.default.fire({
              title: "Error!",
              text: error?.response?.data?.message || "Failed to delete concept item",
              icon: "error",
              confirmButtonText: "Ok"
            });
          } finally {
            this.loading = false;
          }
        }
      } else {
        this.conceptItems.removeAt(index);
        this.updateItemOrders();
      }
    });
  }
  updateItemOrders() {
    this.conceptItems.controls.forEach((control, i) => {
      control.patchValue({ order: i + 1 });
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
        const conceptData = {
          conceptHighlight: formValue.conceptHighlight.trim(),
          items: formValue.items.map((item, index) => ({
            heading: item.heading?.trim() || "",
            paragraph: item.paragraph?.trim() || "",
            order: index + 1
          }))
        };
        const response = yield this.conceptService.createOrUpdateConcept(conceptData);
        if (response.data && response.data.code === 1) {
          const actionText = this.isEditMode ? "updated" : "created";
          yield import_sweetalert2.default.fire({
            title: "Success!",
            text: `Concept has been ${actionText} successfully`,
            icon: "success",
            confirmButtonText: "Ok"
          });
          yield this.loadConceptData();
        } else {
          throw new Error(response.data?.message || "Unknown error occurred");
        }
      } catch (error) {
        console.error("Error submitting concept:", error);
        const errorMessage = error?.response?.data?.message || error?.message || "Failed to save concept";
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
  onDelete() {
    return __async(this, null, function* () {
      if (!this.hasExistingData) {
        yield import_sweetalert2.default.fire({
          title: "No Data",
          text: "No concept data to delete",
          icon: "info",
          confirmButtonText: "Ok"
        });
        return;
      }
      const result = yield import_sweetalert2.default.fire({
        title: "Delete Concept",
        text: "Are you sure you want to delete the entire concept? This action cannot be undone.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel"
      });
      if (result.isConfirmed) {
        try {
          this.loading = true;
          const response = yield this.conceptService.deleteConcept();
          if (response.data && response.data.code === 1) {
            yield import_sweetalert2.default.fire({
              title: "Deleted!",
              text: "Concept has been deleted successfully",
              icon: "success",
              confirmButtonText: "Ok"
            });
            this.resetToCreateMode();
          } else {
            throw new Error(response.data?.message || "Failed to delete concept");
          }
        } catch (error) {
          console.error("Error deleting concept:", error);
          yield import_sweetalert2.default.fire({
            title: "Error!",
            text: error?.response?.data?.message || "Failed to delete concept",
            icon: "error",
            confirmButtonText: "Ok"
          });
        } finally {
          this.loading = false;
        }
      }
    });
  }
  resetToCreateMode() {
    this.isEditMode = false;
    this.hasExistingData = false;
    this.existingConceptId = null;
    this.submitted = false;
    this.conceptForm.reset();
    while (this.conceptItems.length !== 0) {
      this.conceptItems.removeAt(0);
    }
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
_CreateConceptComponent.\u0275fac = function CreateConceptComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreateConceptComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ConceptService));
};
_CreateConceptComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateConceptComponent, selectors: [["app-create-concept"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 7, consts: [["form", "ngForm"], ["xs", "12"], [1, "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center"], ["class", "d-flex gap-2", 4, "ngIf"], ["cForm", "", 1, "row", "g-3", "needs-validation", 3, "ngSubmit", "formGroup"], ["class", "text-center py-3", 4, "ngIf"], ["md", "12", 3, "cFormFloating", 4, "ngIf"], ["xs", "12", 4, "ngIf"], [1, "d-flex", "gap-2"], ["type", "button", "cButton", "", "color", "danger", "size", "sm", "variant", "outline", 3, "click", "disabled"], [1, "fas", "fa-trash", "me-1"], [1, "text-center", "py-3"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2", "text-muted"], ["md", "12", 3, "cFormFloating"], ["cFormControl", "", "id", "conceptHighlight", "formControlName", "conceptHighlight", "placeholder", "Concept Highlight", "rows", "3", 3, "disabled"], ["cLabel", "", "for", "conceptHighlight", 1, "ms-2"], [3, "valid", 4, "ngIf"], [3, "valid"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], ["type", "button", "cButton", "", "color", "success", "size", "sm", 3, "click", "disabled"], [1, "fas", "fa-plus", "me-1"], ["formArrayName", "items"], ["class", "concept-item-card mb-4 p-3 border rounded", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "concept-item-card", "mb-4", "p-3", "border", "rounded", 3, "formGroupName"], [1, "mb-0"], [1, "fas", "fa-trash"], ["md", "4", 3, "cFormFloating"], ["cFormControl", "", "formControlName", "heading", "type", "text", "placeholder", "Heading", 3, "id", "disabled"], ["cLabel", "", 1, "ms-2", 3, "for"], ["md", "8", 3, "cFormFloating"], ["cFormControl", "", "formControlName", "paragraph", "placeholder", "Paragraph", "rows", "4", 3, "id", "disabled"], ["cButton", "", "color", "primary", "type", "submit", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["type", "button", "cButton", "", "color", "secondary", "variant", "outline", 3, "disabled", "click", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], ["type", "button", "cButton", "", "color", "secondary", "variant", "outline", 3, "click", "disabled"], [1, "fas", "fa-sync", "me-1"]], template: function CreateConceptComponent_Template(rf, ctx) {
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
    \u0275\u0275elementStart(8, "div", 3);
    \u0275\u0275text(9, "\n          ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n          ");
    \u0275\u0275template(13, CreateConceptComponent_div_13_Template, 7, 1, "div", 4);
    \u0275\u0275text(14, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n      ");
    \u0275\u0275elementStart(17, "c-card-body");
    \u0275\u0275text(18, "\n        ");
    \u0275\u0275elementStart(19, "form", 5, 0);
    \u0275\u0275listener("ngSubmit", function CreateConceptComponent_Template_form_ngSubmit_19_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSubmit());
    });
    \u0275\u0275text(21, "\n\n          ");
    \u0275\u0275text(22, "\n          ");
    \u0275\u0275template(23, CreateConceptComponent_div_23_Template, 11, 0, "div", 6);
    \u0275\u0275text(24, "\n\n          ");
    \u0275\u0275text(25, "\n          ");
    \u0275\u0275template(26, CreateConceptComponent_c_col_26_Template, 10, 3, "c-col", 7);
    \u0275\u0275text(27, "\n\n          ");
    \u0275\u0275text(28, "\n          ");
    \u0275\u0275template(29, CreateConceptComponent_c_col_29_Template, 18, 3, "c-col", 8);
    \u0275\u0275text(30, "\n\n          ");
    \u0275\u0275text(31, "\n          ");
    \u0275\u0275template(32, CreateConceptComponent_c_col_32_Template, 12, 4, "c-col", 8);
    \u0275\u0275text(33, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Concept" : "Create Concept");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.hasExistingData);
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx.conceptForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.loading && !ctx.submitted);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx.loading || ctx.submitted);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx.loading || ctx.submitted);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx.loading || ctx.submitted);
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
], styles: ["\n\n.concept-item-card[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 0.375rem;\n  position: relative;\n  transition: all 0.3s ease;\n}\n.concept-item-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n.concept-item-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.d-flex.gap-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.d-flex.gap-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .concept-item-card[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .d-flex.gap-2[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .d-flex.gap-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 0.5rem;\n  }\n  .d-flex.gap-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n}\n.concept-item-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=create-concept.component.css.map */"] });
var CreateConceptComponent = _CreateConceptComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateConceptComponent, { className: "CreateConceptComponent", filePath: "src\\app\\views\\concept\\create-concept\\create-concept.component.ts", lineNumber: 57 });
})();
export {
  CreateConceptComponent
};
//# sourceMappingURL=create-concept.component-NAVNGLUJ.js.map
