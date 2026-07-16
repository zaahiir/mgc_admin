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
  ActivatedRoute,
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

// src/app/views/plan/update-plan/update-plan.component.ts
function UpdatePlanComponent_c_form_feedback_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 21);
    \u0275\u0275text(1, "Please provide a Plan Name.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("valid", false);
  }
}
function UpdatePlanComponent_c_form_feedback_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 21);
    \u0275\u0275text(1, "Please provide a Plan Description.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("valid", false);
  }
}
function UpdatePlanComponent_c_form_feedback_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 21);
    \u0275\u0275text(1, "Please provide a valid duration in years.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("valid", false);
  }
}
function UpdatePlanComponent_c_form_feedback_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 21);
    \u0275\u0275text(1, "Please provide a valid Plan Price.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("valid", false);
  }
}
function UpdatePlanComponent_div_73_c_form_feedback_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 21);
    \u0275\u0275text(1, "\n                    Feature name is required\n                  ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("valid", false);
  }
}
function UpdatePlanComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, "\n                ");
    \u0275\u0275elementStart(2, "c-col", 23);
    \u0275\u0275text(3, "\n                  ");
    \u0275\u0275element(4, "input", 24);
    \u0275\u0275text(5, "\n                  ");
    \u0275\u0275template(6, UpdatePlanComponent_div_73_c_form_feedback_6_Template, 2, 1, "c-form-feedback", 7);
    \u0275\u0275text(7, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n                ");
    \u0275\u0275elementStart(9, "c-col", 25);
    \u0275\u0275text(10, "\n                  ");
    \u0275\u0275elementStart(11, "div", 26);
    \u0275\u0275text(12, "\n                    ");
    \u0275\u0275element(13, "input", 27);
    \u0275\u0275text(14, "\n                    ");
    \u0275\u0275elementStart(15, "label", 28);
    \u0275\u0275text(16, "\n                      Included in plan\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n                ");
    \u0275\u0275elementStart(20, "c-col", 29);
    \u0275\u0275text(21, "\n                  ");
    \u0275\u0275elementStart(22, "button", 30);
    \u0275\u0275listener("click", function UpdatePlanComponent_div_73_Template_button_click_22_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeFeature(i_r3));
    });
    \u0275\u0275text(23, "\n                    ");
    \u0275\u0275element(24, "i", 31);
    \u0275\u0275text(25, " Remove\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, "\n              ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const feature_r5 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r3);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_5_0 = feature_r5.get("featureName")) == null ? null : tmp_5_0.errors) && (((tmp_5_0 = feature_r5.get("featureName")) == null ? null : tmp_5_0.touched) || ctx_r3.submitted));
    \u0275\u0275advance(7);
    \u0275\u0275propertyInterpolate1("id", "included", i_r3, "");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("for", "included", i_r3, "");
  }
}
var _UpdatePlanComponent = class _UpdatePlanComponent {
  constructor(fb, router, route, planService) {
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.planService = planService;
    this.customStylesValidated = false;
    this.loading = false;
    this.submitted = false;
    this.planId = "";
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
      try {
        this.route.params.subscribe((params) => {
          this.planId = params["id"];
          this.loadPlanData(this.planId);
        });
      } catch (error) {
        console.error("Error during initialization:", error);
        yield this.showError("An error occurred during initialization.");
      }
    });
  }
  get f() {
    return this.planForm.controls;
  }
  get featuresArray() {
    return this.planForm.get("features");
  }
  loadPlanData(planId) {
    return __async(this, null, function* () {
      try {
        const response = yield this.planService.listPlan(planId);
        if (response.data.code === 1 && response.data.data.length > 0) {
          const planData = response.data.data[0];
          this.planForm.patchValue({
            planName: planData.planName,
            planDescription: planData.planDescription,
            planDuration: planData.planDuration,
            planPrice: planData.planPrice
          });
          yield this.loadPlanFeatures(planId);
        }
      } catch (error) {
        console.error("Error loading plan data:", error);
        yield this.showError("Failed to load plan data.");
      }
    });
  }
  loadPlanFeatures(planId) {
    return __async(this, null, function* () {
      try {
        const response = yield this.planService.getPlanFeatures(planId);
        if (response.data.code === 1) {
          this.featuresArray.clear();
          response.data.data.forEach((feature) => {
            const featureGroup = this.fb.group({
              id: [feature.id],
              featureName: [feature.featureName, [Validators.required]],
              isIncluded: [feature.isIncluded],
              order: [feature.order || 0]
            });
            this.featuresArray.push(featureGroup);
          });
        }
      } catch (error) {
        console.error("Error loading plan features:", error);
      }
    });
  }
  onSubmit() {
    return __async(this, null, function* () {
      this.customStylesValidated = true;
      this.submitted = true;
      if (this.planForm.invalid) {
        Object.values(this.planForm.controls).forEach((control) => {
          if (control.invalid) {
            control.markAsTouched();
          }
        });
        return;
      }
      this.loading = true;
      try {
        const formData = __spreadProps(__spreadValues({}, this.planForm.value), {
          planDuration: Number(this.planForm.value.planDuration),
          planPrice: Number(this.planForm.value.planPrice)
        });
        const response = yield this.planService.processPlan(formData, this.planId);
        if (response.data.code === 1) {
          yield this.updatePlanFeatures();
          yield Swal.fire("Updated!", response.data.message, "success");
          this.router.navigate(["/plan"]);
        } else {
          yield this.showError(response.data.message);
        }
      } catch (error) {
        console.error("Error updating plan:", error);
        yield this.showError("An error occurred while updating the plan.");
      } finally {
        this.loading = false;
      }
    });
  }
  onCancel() {
    this.router.navigate(["/plan"]);
  }
  updatePlanFeatures() {
    return __async(this, null, function* () {
      try {
        for (const feature of this.featuresArray.value) {
          if (feature.id) {
            yield this.planService.updatePlanFeature(feature.id, {
              plan: parseInt(this.planId),
              featureName: feature.featureName,
              isIncluded: feature.isIncluded,
              order: feature.order || 0
            });
          } else {
            yield this.planService.createPlanFeature({
              plan: parseInt(this.planId),
              featureName: feature.featureName,
              isIncluded: feature.isIncluded,
              order: feature.order || 0
            });
          }
        }
      } catch (error) {
        console.error("Error updating plan features:", error);
        throw error;
      }
    });
  }
  addFeature() {
    const featureGroup = this.fb.group({
      id: [null],
      featureName: ["", [Validators.required]],
      isIncluded: [true],
      order: [this.featuresArray.length]
    });
    this.featuresArray.push(featureGroup);
  }
  removeFeature(index) {
    const feature = this.featuresArray.at(index).value;
    if (feature.id) {
      this.planService.deletePlanFeature(feature.id).catch(console.error);
    }
    this.featuresArray.removeAt(index);
    for (let i = 0; i < this.featuresArray.length; i++) {
      this.featuresArray.at(i).patchValue({ order: i });
    }
  }
  showError(message) {
    return __async(this, null, function* () {
      yield Swal.fire("Failed!", message, "error");
    });
  }
};
_UpdatePlanComponent.\u0275fac = function UpdatePlanComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UpdatePlanComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(PlanService));
};
_UpdatePlanComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdatePlanComponent, selectors: [["app-update-plan"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 90, vars: 14, consts: [["customStylesForm", "ngForm"], ["xs", "12"], [1, "mb-4"], ["cForm", "", 1, "row", "g-3", "needs-validation", 3, "ngSubmit", "formGroup", "validated"], ["md", "6", 3, "cFormFloating"], ["cFormControl", "", "id", "planName", "formControlName", "planName", "required", "", "type", "text", "placeholder", "Plan Name"], ["cLabel", "", "for", "planName", 1, "ms-2"], [3, "valid", 4, "ngIf"], ["cFormControl", "", "id", "planDescription", "formControlName", "planDescription", "required", "", "type", "text", "placeholder", "Plan Description"], ["cLabel", "", "for", "planDescription", 1, "ms-2"], ["cFormControl", "", "id", "planDuration", "formControlName", "planDuration", "required", "", "type", "number", "min", "1", "step", "1", "placeholder", "Duration in years (e.g., 1, 2, 5)"], ["cLabel", "", "for", "planDuration", 1, "ms-2"], ["cFormControl", "", "id", "planPrice", "formControlName", "planPrice", "required", "", "type", "number", "step", "0.01", "placeholder", "Plan Price"], ["cLabel", "", "for", "planPrice", 1, "ms-2"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], ["type", "button", "cButton", "", "color", "success", "size", "sm", 3, "click"], [1, "cil-plus"], ["formArrayName", "features", 1, "mb-5"], ["class", "row g-3 mb-4 p-3 border rounded", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["cButton", "", "color", "primary", "type", "submit", 1, "me-1", 3, "disabled"], ["cButton", "", "color", "secondary", 3, "click", "disabled"], [3, "valid"], [1, "row", "g-3", "mb-4", "p-3", "border", "rounded", 3, "formGroupName"], ["md", "6"], ["cFormControl", "", "formControlName", "featureName", "type", "text", "placeholder", "Feature Name"], ["md", "4"], [1, "form-check"], ["type", "checkbox", "formControlName", "isIncluded", 1, "form-check-input", 3, "id"], [1, "form-check-label", 3, "for"], ["md", "2"], ["type", "button", "cButton", "", "color", "danger", "size", "sm", 3, "click"], [1, "cil-trash"]], template: function UpdatePlanComponent_Template(rf, ctx) {
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
    \u0275\u0275text(9, "Update Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n      ");
    \u0275\u0275elementStart(12, "c-card-body");
    \u0275\u0275text(13, "\n        ");
    \u0275\u0275elementStart(14, "form", 3, 0);
    \u0275\u0275listener("ngSubmit", function UpdatePlanComponent_Template_form_ngSubmit_14_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSubmit());
    });
    \u0275\u0275text(16, "\n          ");
    \u0275\u0275elementStart(17, "c-col", 4);
    \u0275\u0275text(18, "\n            ");
    \u0275\u0275element(19, "input", 5);
    \u0275\u0275text(20, "\n            ");
    \u0275\u0275elementStart(21, "label", 6);
    \u0275\u0275text(22, "Plan Name");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n            ");
    \u0275\u0275template(24, UpdatePlanComponent_c_form_feedback_24_Template, 2, 1, "c-form-feedback", 7);
    \u0275\u0275text(25, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\n\n          ");
    \u0275\u0275elementStart(27, "c-col", 4);
    \u0275\u0275text(28, "\n            ");
    \u0275\u0275element(29, "input", 8);
    \u0275\u0275text(30, "\n            ");
    \u0275\u0275elementStart(31, "label", 9);
    \u0275\u0275text(32, "Plan Description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, "\n            ");
    \u0275\u0275template(34, UpdatePlanComponent_c_form_feedback_34_Template, 2, 1, "c-form-feedback", 7);
    \u0275\u0275text(35, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, "\n\n          ");
    \u0275\u0275elementStart(37, "c-col", 4);
    \u0275\u0275text(38, "\n            ");
    \u0275\u0275element(39, "input", 10);
    \u0275\u0275text(40, "\n            ");
    \u0275\u0275elementStart(41, "label", 11);
    \u0275\u0275text(42, "Plan Duration (Years)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, "\n            ");
    \u0275\u0275template(44, UpdatePlanComponent_c_form_feedback_44_Template, 2, 1, "c-form-feedback", 7);
    \u0275\u0275text(45, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, "\n\n          ");
    \u0275\u0275elementStart(47, "c-col", 4);
    \u0275\u0275text(48, "\n            ");
    \u0275\u0275element(49, "input", 12);
    \u0275\u0275text(50, "\n            ");
    \u0275\u0275elementStart(51, "label", 13);
    \u0275\u0275text(52, "Plan Price");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, "\n            ");
    \u0275\u0275template(54, UpdatePlanComponent_c_form_feedback_54_Template, 2, 1, "c-form-feedback", 7);
    \u0275\u0275text(55, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, "\n\n          ");
    \u0275\u0275text(57, "\n          ");
    \u0275\u0275elementStart(58, "c-col", 1);
    \u0275\u0275text(59, "\n            ");
    \u0275\u0275elementStart(60, "div", 14);
    \u0275\u0275text(61, "\n              ");
    \u0275\u0275elementStart(62, "h5");
    \u0275\u0275text(63, "Plan Features");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, "\n              ");
    \u0275\u0275elementStart(65, "button", 15);
    \u0275\u0275listener("click", function UpdatePlanComponent_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addFeature());
    });
    \u0275\u0275text(66, "\n                ");
    \u0275\u0275element(67, "i", 16);
    \u0275\u0275text(68, " Add Feature\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(69, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(70, "\n            \n            ");
    \u0275\u0275elementStart(71, "div", 17);
    \u0275\u0275text(72, "\n              ");
    \u0275\u0275template(73, UpdatePlanComponent_div_73_Template, 28, 6, "div", 18);
    \u0275\u0275text(74, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(75, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(76, "\n\n          ");
    \u0275\u0275elementStart(77, "c-col", 1);
    \u0275\u0275text(78, "\n            ");
    \u0275\u0275elementStart(79, "button", 19);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd();
    \u0275\u0275text(81, "\n            ");
    \u0275\u0275elementStart(82, "button", 20);
    \u0275\u0275listener("click", function UpdatePlanComponent_Template_button_click_82_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onCancel());
    });
    \u0275\u0275text(83, "\n              Cancel\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(84, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(86, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(87, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275property("formGroup", ctx.planForm)("validated", ctx.customStylesValidated);
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.f["planName"].errors && (ctx.f["planName"].touched || ctx.submitted));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.f["planDescription"].errors && (ctx.f["planDescription"].touched || ctx.submitted));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.f["planDuration"].errors && (ctx.f["planDuration"].touched || ctx.submitted));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.f["planPrice"].errors && (ctx.f["planPrice"].touched || ctx.submitted));
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx.featuresArray.controls);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx.loading ? "Updating..." : "Update", "\n            ");
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
var UpdatePlanComponent = _UpdatePlanComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdatePlanComponent, { className: "UpdatePlanComponent", filePath: "src\\app\\views\\plan\\update-plan\\update-plan.component.ts", lineNumber: 22 });
})();
export {
  UpdatePlanComponent
};
//# sourceMappingURL=update-plan.component-OL3UEOFM.mjs.map
