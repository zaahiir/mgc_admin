import './polyfills.server.mjs';
import {
  PlanService
} from "./chunk-WRN2RFTQ.mjs";
import {
  Swal
} from "./chunk-LUM3LCUE.mjs";
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
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  RowComponent,
  Validators,
  ɵNgNoValidate
} from "./chunk-KHKHR2VG.mjs";
import {
  CommonModule,
  NgForOf,
  NgIf,
  Router
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
  ɵɵpropertyInterpolate1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-J4TCKMJW.mjs";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-CKH4O4N6.mjs";

// src/app/views/plan/create-plan/create-plan.component.ts
function CreatePlanComponent_c_form_feedback_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 20);
    \u0275\u0275text(1, "\n              Please provide a plan name\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("valid", false);
  }
}
function CreatePlanComponent_c_form_feedback_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 20);
    \u0275\u0275text(1, "\n              Please provide a description\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("valid", false);
  }
}
function CreatePlanComponent_c_form_feedback_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 20);
    \u0275\u0275text(1, "\n              Please provide a valid duration in years\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("valid", false);
  }
}
function CreatePlanComponent_c_form_feedback_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 20);
    \u0275\u0275text(1, "\n              Please provide a valid price\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("valid", false);
  }
}
function CreatePlanComponent_div_76_c_form_feedback_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 20);
    \u0275\u0275text(1, "\n                    Feature name is required\n                  ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("valid", false);
  }
}
function CreatePlanComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, "\n                ");
    \u0275\u0275elementStart(2, "c-col", 22);
    \u0275\u0275text(3, "\n                  ");
    \u0275\u0275element(4, "input", 23);
    \u0275\u0275text(5, "\n                  ");
    \u0275\u0275template(6, CreatePlanComponent_div_76_c_form_feedback_6_Template, 2, 1, "c-form-feedback", 6);
    \u0275\u0275text(7, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n                ");
    \u0275\u0275elementStart(9, "c-col", 24);
    \u0275\u0275text(10, "\n                  ");
    \u0275\u0275elementStart(11, "div", 25);
    \u0275\u0275text(12, "\n                    ");
    \u0275\u0275element(13, "input", 26);
    \u0275\u0275text(14, "\n                    ");
    \u0275\u0275elementStart(15, "label", 27);
    \u0275\u0275text(16, "\n                      Included in plan\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n                ");
    \u0275\u0275elementStart(20, "c-col", 28);
    \u0275\u0275text(21, "\n                  ");
    \u0275\u0275elementStart(22, "button", 29);
    \u0275\u0275listener("click", function CreatePlanComponent_div_76_Template_button_click_22_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeFeature(i_r2));
    });
    \u0275\u0275text(23, "\n                    ");
    \u0275\u0275element(24, "i", 30);
    \u0275\u0275text(25, " Remove\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, "\n              ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const feature_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_4_0 = feature_r4.get("featureName")) == null ? null : tmp_4_0.errors) && (((tmp_4_0 = feature_r4.get("featureName")) == null ? null : tmp_4_0.touched) || ctx_r2.submitted));
    \u0275\u0275advance(7);
    \u0275\u0275propertyInterpolate1("id", "included", i_r2, "");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("for", "included", i_r2, "");
  }
}
var _CreatePlanComponent = class _CreatePlanComponent {
  constructor(fb, planService, router) {
    this.fb = fb;
    this.planService = planService;
    this.router = router;
    this.loading = false;
    this.submitted = false;
    this.initializeForm();
  }
  initializeForm() {
    this.planForm = this.fb.group({
      planName: ["", [Validators.required]],
      planDescription: ["", [Validators.required]],
      planDuration: ["", [Validators.required, Validators.min(1)]],
      planPrice: ["", [Validators.required, Validators.min(0)]],
      features: this.fb.array([])
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
    });
  }
  get f() {
    return this.planForm.controls;
  }
  get featuresArray() {
    return this.planForm.get("features");
  }
  onSubmit() {
    return __async(this, null, function* () {
      this.submitted = true;
      if (this.planForm.invalid) {
        Object.keys(this.planForm.controls).forEach((key) => {
          const control = this.planForm.get(key);
          if (control?.invalid) {
            control.markAsTouched();
          }
        });
        return;
      }
      try {
        this.loading = true;
        const formData = __spreadProps(__spreadValues({}, this.planForm.value), {
          planDuration: Number(this.planForm.value.planDuration),
          planPrice: Number(this.planForm.value.planPrice)
        });
        const response = yield this.planService.processPlan(formData, "0");
        if (response.data?.code === 1) {
          const planId = response.data?.data?.id;
          if (planId) {
            if (this.featuresArray.length > 0) {
              try {
                for (const feature of this.featuresArray.value) {
                  yield this.planService.createPlanFeature({
                    plan: parseInt(planId),
                    featureName: feature.featureName,
                    isIncluded: feature.isIncluded,
                    order: feature.order || 0
                  });
                }
              } catch (error) {
                console.error("Error creating features:", error);
              }
            }
          } else {
            console.error("No plan ID received from response");
          }
          yield Swal.fire({
            title: "Success!",
            text: "Plan has been created successfully",
            icon: "success",
            confirmButtonText: "Ok"
          });
          this.router.navigate(["/plan"]);
        } else {
          throw new Error(response.data?.message || "Failed to create plan");
        }
      } catch (error) {
        yield this.showError(error instanceof Error ? error.message : "Failed to create plan");
      } finally {
        this.loading = false;
      }
    });
  }
  onReset() {
    this.submitted = false;
    this.planForm.reset();
    this.featuresArray.clear();
    Object.keys(this.planForm.controls).forEach((key) => {
      const control = this.planForm.get(key);
      control?.setErrors(null);
    });
  }
  addFeature() {
    const featureGroup = this.fb.group({
      featureName: ["", [Validators.required]],
      isIncluded: [true],
      order: [this.featuresArray.length]
    });
    this.featuresArray.push(featureGroup);
  }
  removeFeature(index) {
    this.featuresArray.removeAt(index);
    for (let i = 0; i < this.featuresArray.length; i++) {
      this.featuresArray.at(i).patchValue({ order: i });
    }
  }
  showError(message) {
    return __async(this, null, function* () {
      yield Swal.fire("Error", message, "error");
    });
  }
};
_CreatePlanComponent.\u0275fac = function CreatePlanComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreatePlanComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(PlanService), \u0275\u0275directiveInject(Router));
};
_CreatePlanComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreatePlanComponent, selectors: [["app-create-plan"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 94, vars: 13, consts: [["xs", "12"], [1, "mb-4"], ["cForm", "", 1, "row", "g-3", "needs-validation", 3, "ngSubmit", "formGroup"], ["md", "6", 3, "cFormFloating"], ["cFormControl", "", "id", "planName", "formControlName", "planName", "required", "", "type", "text", "placeholder", "Plan Name"], ["cLabel", "", "for", "planName", 1, "ms-2"], [3, "valid", 4, "ngIf"], ["cFormControl", "", "id", "planDescription", "formControlName", "planDescription", "required", "", "type", "text", "placeholder", "Plan Description"], ["cLabel", "", "for", "planDescription", 1, "ms-2"], ["cFormControl", "", "id", "planDuration", "formControlName", "planDuration", "required", "", "type", "number", "min", "1", "step", "1", "placeholder", "Duration in years (e.g., 1, 2, 5)"], ["cLabel", "", "for", "planDuration", 1, "ms-2"], ["cFormControl", "", "id", "planPrice", "formControlName", "planPrice", "required", "", "type", "number", "step", "0.01", "placeholder", "Plan Price"], ["cLabel", "", "for", "planPrice", 1, "ms-2"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], ["type", "button", "cButton", "", "color", "success", "size", "sm", 3, "click"], [1, "cil-plus"], ["formArrayName", "features", 1, "mb-5"], ["class", "row g-3 mb-4 p-3 border rounded", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["cButton", "", "color", "primary", "type", "submit", 1, "me-1", 3, "disabled"], ["cButton", "", "color", "secondary", "type", "button", 3, "click", "disabled"], [3, "valid"], [1, "row", "g-3", "mb-4", "p-3", "border", "rounded", 3, "formGroupName"], ["md", "6"], ["cFormControl", "", "formControlName", "featureName", "type", "text", "placeholder", "Feature Name"], ["md", "4"], [1, "form-check"], ["type", "checkbox", "formControlName", "isIncluded", 1, "form-check-input", 3, "id"], [1, "form-check-label", 3, "for"], ["md", "2"], ["type", "button", "cButton", "", "color", "danger", "size", "sm", 3, "click"], [1, "cil-trash"]], template: function CreatePlanComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row");
    \u0275\u0275text(1, "\n  ");
    \u0275\u0275elementStart(2, "c-col", 0);
    \u0275\u0275text(3, "\n    ");
    \u0275\u0275elementStart(4, "c-card", 1);
    \u0275\u0275text(5, "\n      ");
    \u0275\u0275elementStart(6, "c-card-header");
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "New Subscription Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n      ");
    \u0275\u0275elementStart(12, "c-card-body");
    \u0275\u0275text(13, "\n        ");
    \u0275\u0275elementStart(14, "form", 2);
    \u0275\u0275listener("ngSubmit", function CreatePlanComponent_Template_form_ngSubmit_14_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275text(15, "\n          ");
    \u0275\u0275text(16, "\n          ");
    \u0275\u0275elementStart(17, "c-col", 3);
    \u0275\u0275text(18, "\n            ");
    \u0275\u0275element(19, "input", 4);
    \u0275\u0275text(20, "\n            ");
    \u0275\u0275elementStart(21, "label", 5);
    \u0275\u0275text(22, "Plan Name");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n            ");
    \u0275\u0275template(24, CreatePlanComponent_c_form_feedback_24_Template, 2, 1, "c-form-feedback", 6);
    \u0275\u0275text(25, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\n\n          ");
    \u0275\u0275text(27, "\n          ");
    \u0275\u0275elementStart(28, "c-col", 3);
    \u0275\u0275text(29, "\n            ");
    \u0275\u0275element(30, "input", 7);
    \u0275\u0275text(31, "\n            ");
    \u0275\u0275elementStart(32, "label", 8);
    \u0275\u0275text(33, "Plan Description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, "\n            ");
    \u0275\u0275template(35, CreatePlanComponent_c_form_feedback_35_Template, 2, 1, "c-form-feedback", 6);
    \u0275\u0275text(36, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, "\n\n          ");
    \u0275\u0275text(38, "\n          ");
    \u0275\u0275elementStart(39, "c-col", 3);
    \u0275\u0275text(40, "\n            ");
    \u0275\u0275element(41, "input", 9);
    \u0275\u0275text(42, "\n            ");
    \u0275\u0275elementStart(43, "label", 10);
    \u0275\u0275text(44, "Plan Duration (Years)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, "\n            ");
    \u0275\u0275template(46, CreatePlanComponent_c_form_feedback_46_Template, 2, 1, "c-form-feedback", 6);
    \u0275\u0275text(47, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, "\n\n          ");
    \u0275\u0275text(49, "\n          ");
    \u0275\u0275elementStart(50, "c-col", 3);
    \u0275\u0275text(51, "\n            ");
    \u0275\u0275element(52, "input", 11);
    \u0275\u0275text(53, "\n            ");
    \u0275\u0275elementStart(54, "label", 12);
    \u0275\u0275text(55, "Plan Price");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, "\n            ");
    \u0275\u0275template(57, CreatePlanComponent_c_form_feedback_57_Template, 2, 1, "c-form-feedback", 6);
    \u0275\u0275text(58, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59, "\n\n          ");
    \u0275\u0275text(60, "\n          ");
    \u0275\u0275elementStart(61, "c-col", 0);
    \u0275\u0275text(62, "\n            ");
    \u0275\u0275elementStart(63, "div", 13);
    \u0275\u0275text(64, "\n              ");
    \u0275\u0275elementStart(65, "h5");
    \u0275\u0275text(66, "Plan Features");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, "\n              ");
    \u0275\u0275elementStart(68, "button", 14);
    \u0275\u0275listener("click", function CreatePlanComponent_Template_button_click_68_listener() {
      return ctx.addFeature();
    });
    \u0275\u0275text(69, "\n                ");
    \u0275\u0275element(70, "i", 15);
    \u0275\u0275text(71, " Add Feature\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(72, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73, "\n            \n            ");
    \u0275\u0275elementStart(74, "div", 16);
    \u0275\u0275text(75, "\n              ");
    \u0275\u0275template(76, CreatePlanComponent_div_76_Template, 28, 6, "div", 17);
    \u0275\u0275text(77, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(78, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(79, "\n\n          ");
    \u0275\u0275text(80, "\n          ");
    \u0275\u0275elementStart(81, "c-col", 0);
    \u0275\u0275text(82, "\n            ");
    \u0275\u0275elementStart(83, "button", 18);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, "\n            ");
    \u0275\u0275elementStart(86, "button", 19);
    \u0275\u0275listener("click", function CreatePlanComponent_Template_button_click_86_listener() {
      return ctx.onReset();
    });
    \u0275\u0275text(87, "\n              Reset Form\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(90, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(91, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(93, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275property("formGroup", ctx.planForm);
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.f["planName"].errors && (ctx.f["planName"].touched || ctx.submitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.f["planDescription"].errors && (ctx.f["planDescription"].touched || ctx.submitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.f["planDuration"].errors && (ctx.f["planDuration"].touched || ctx.submitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.f["planPrice"].errors && (ctx.f["planPrice"].touched || ctx.submitted));
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx.featuresArray.controls);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx.loading ? "Saving..." : "Save Plan", "\n            ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.loading);
  }
}, dependencies: [
  NgIf,
  CommonModule,
  NgForOf,
  RowComponent,
  ColComponent,
  CardComponent,
  FormFloatingDirective,
  CardHeaderComponent,
  CardBodyComponent,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NumberValueAccessor,
  CheckboxControlValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
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
  ButtonDirective
] });
var CreatePlanComponent = _CreatePlanComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreatePlanComponent, { className: "CreatePlanComponent", filePath: "src\\app\\views\\plan\\create-plan\\create-plan.component.ts", lineNumber: 19 });
})();
export {
  CreatePlanComponent
};
//# sourceMappingURL=create-plan.component-C5QZ5G34.mjs.map
