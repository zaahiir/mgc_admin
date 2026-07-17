import {
  require_sweetalert2_all
} from "./chunk-UDKX4ISR.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-EZZDAKGS.js";
import {
  ButtonDirective,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-WDQ2E3IC.js";
import {
  __async,
  __toESM
} from "./chunk-ZDRA4OZL.js";

// src/app/views/tournament/update-tournament/update-tournament.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function UpdateTournamentComponent_c_form_feedback_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", ctx_r0.getErrorMessage("tournamentName"), "\n              ");
  }
}
function UpdateTournamentComponent_c_form_feedback_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", ctx_r0.getErrorMessage("tournamentDate"), "\n              ");
  }
}
function UpdateTournamentComponent_c_form_feedback_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", ctx_r0.getErrorMessage("tournamentTime"), "\n              ");
  }
}
function UpdateTournamentComponent_c_form_feedback_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", ctx_r0.getErrorMessage("tournamentLocation"), "\n              ");
  }
}
function UpdateTournamentComponent_c_form_feedback_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", ctx_r0.getErrorMessage("tournamentDescription"), "\n              ");
  }
}
function UpdateTournamentComponent_c_form_feedback_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", ctx_r0.getErrorMessage("entryFee"), "\n              ");
  }
}
function UpdateTournamentComponent_c_form_feedback_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", ctx_r0.getErrorMessage("maxParticipants"), "\n              ");
  }
}
var _UpdateTournamentComponent = class _UpdateTournamentComponent {
  constructor(formBuilder, router) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.loading = false;
    this.submitted = false;
  }
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.tournamentForm = this.formBuilder.group({
      tournamentName: ["", [Validators.required, Validators.minLength(2)]],
      tournamentDate: ["", [Validators.required]],
      tournamentTime: ["", [Validators.required]],
      tournamentLocation: ["", [Validators.required, Validators.minLength(3)]],
      tournamentDescription: ["", [Validators.required, Validators.minLength(10)]],
      entryFee: ["", [Validators.required, Validators.min(0)]],
      maxParticipants: ["", [Validators.required, Validators.min(1)]]
    });
  }
  get f() {
    return this.tournamentForm.controls;
  }
  onSubmit() {
    return __async(this, null, function* () {
      this.submitted = true;
      if (this.tournamentForm.invalid) {
        return;
      }
      try {
        this.loading = true;
        yield import_sweetalert2.default.fire({
          title: "Success!",
          text: "Tournament has been created successfully",
          icon: "success",
          confirmButtonText: "Ok"
        });
        this.router.navigate(["/tournaments"]);
      } catch (error) {
        console.error("Error creating tournament:", error);
        yield import_sweetalert2.default.fire({
          title: "Error!",
          text: "Failed to create tournament",
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
    this.tournamentForm.reset();
  }
  isFieldInvalid(fieldName) {
    const field = this.tournamentForm.get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }
  getErrorMessage(fieldName) {
    const control = this.tournamentForm.get(fieldName);
    if (!control || !control.errors)
      return "";
    if (control.errors["required"])
      return "This field is required";
    if (control.errors["minlength"])
      return `Minimum length is ${control.errors["minlength"].requiredLength} characters`;
    if (control.errors["min"])
      return `Minimum value is ${control.errors["min"].min}`;
    return "Invalid input";
  }
};
_UpdateTournamentComponent.\u0275fac = function UpdateTournamentComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UpdateTournamentComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
};
_UpdateTournamentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdateTournamentComponent, selectors: [["app-update-tournament"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 99, vars: 18, consts: [["xs", "12"], [1, "mb-4"], ["cForm", "", 1, "row", "g-3", "needs-validation", 3, "ngSubmit", "formGroup"], ["md", "6", 3, "cFormFloating"], ["cFormControl", "", "id", "tournamentName", "formControlName", "tournamentName", "required", "", "type", "text", "placeholder", "Tournament Name"], ["cLabel", "", "for", "tournamentName", 1, "ms-2"], [3, "valid", 4, "ngIf"], ["cFormControl", "", "id", "tournamentDate", "formControlName", "tournamentDate", "required", "", "type", "date", "placeholder", "Tournament Date"], ["cLabel", "", "for", "tournamentDate", 1, "ms-2"], ["cFormControl", "", "id", "tournamentTime", "formControlName", "tournamentTime", "required", "", "type", "time", "placeholder", "Tournament Time"], ["cLabel", "", "for", "tournamentTime", 1, "ms-2"], ["cFormControl", "", "id", "tournamentLocation", "formControlName", "tournamentLocation", "required", "", "type", "text", "placeholder", "Tournament Location"], ["cLabel", "", "for", "tournamentLocation", 1, "ms-2"], ["md", "12", 3, "cFormFloating"], ["cFormControl", "", "id", "tournamentDescription", "formControlName", "tournamentDescription", "required", "", "rows", "3", "placeholder", "Tournament Description"], ["cLabel", "", "for", "tournamentDescription", 1, "ms-2"], ["cFormControl", "", "id", "entryFee", "formControlName", "entryFee", "required", "", "type", "number", "step", "0.01", "placeholder", "Entry Fee"], ["cLabel", "", "for", "entryFee", 1, "ms-2"], ["cFormControl", "", "id", "maxParticipants", "formControlName", "maxParticipants", "required", "", "type", "number", "placeholder", "Max Participants"], ["cLabel", "", "for", "maxParticipants", 1, "ms-2"], ["cButton", "", "color", "primary", "type", "submit", 1, "me-1", 3, "disabled"], ["cButton", "", "color", "secondary", "type", "button", 3, "click", "disabled"], [3, "valid"]], template: function UpdateTournamentComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row");
    \u0275\u0275text(1, "\n    ");
    \u0275\u0275elementStart(2, "c-col", 0);
    \u0275\u0275text(3, "\n      ");
    \u0275\u0275elementStart(4, "c-card", 1);
    \u0275\u0275text(5, "\n        ");
    \u0275\u0275elementStart(6, "c-card-header");
    \u0275\u0275text(7, "\n          ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Update New Tournament");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n        ");
    \u0275\u0275elementStart(12, "c-card-body");
    \u0275\u0275text(13, "\n          ");
    \u0275\u0275elementStart(14, "form", 2);
    \u0275\u0275listener("ngSubmit", function UpdateTournamentComponent_Template_form_ngSubmit_14_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275text(15, "\n            ");
    \u0275\u0275elementStart(16, "c-col", 3);
    \u0275\u0275text(17, "\n              ");
    \u0275\u0275element(18, "input", 4);
    \u0275\u0275text(19, "\n              ");
    \u0275\u0275elementStart(20, "label", 5);
    \u0275\u0275text(21, "Tournament Name");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "\n              ");
    \u0275\u0275template(23, UpdateTournamentComponent_c_form_feedback_23_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275text(24, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, "\n  \n            ");
    \u0275\u0275elementStart(26, "c-col", 3);
    \u0275\u0275text(27, "\n              ");
    \u0275\u0275element(28, "input", 7);
    \u0275\u0275text(29, "\n              ");
    \u0275\u0275elementStart(30, "label", 8);
    \u0275\u0275text(31, "Tournament Date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, "\n              ");
    \u0275\u0275template(33, UpdateTournamentComponent_c_form_feedback_33_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275text(34, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, "\n  \n            ");
    \u0275\u0275elementStart(36, "c-col", 3);
    \u0275\u0275text(37, "\n              ");
    \u0275\u0275element(38, "input", 9);
    \u0275\u0275text(39, "\n              ");
    \u0275\u0275elementStart(40, "label", 10);
    \u0275\u0275text(41, "Tournament Time");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, "\n              ");
    \u0275\u0275template(43, UpdateTournamentComponent_c_form_feedback_43_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275text(44, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, "\n  \n            ");
    \u0275\u0275elementStart(46, "c-col", 3);
    \u0275\u0275text(47, "\n              ");
    \u0275\u0275element(48, "input", 11);
    \u0275\u0275text(49, "\n              ");
    \u0275\u0275elementStart(50, "label", 12);
    \u0275\u0275text(51, "Tournament Location");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, "\n              ");
    \u0275\u0275template(53, UpdateTournamentComponent_c_form_feedback_53_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275text(54, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, "\n  \n            ");
    \u0275\u0275elementStart(56, "c-col", 13);
    \u0275\u0275text(57, "\n              ");
    \u0275\u0275element(58, "textarea", 14);
    \u0275\u0275text(59, "\n              ");
    \u0275\u0275elementStart(60, "label", 15);
    \u0275\u0275text(61, "Tournament Description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(62, "\n              ");
    \u0275\u0275template(63, UpdateTournamentComponent_c_form_feedback_63_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275text(64, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, "\n  \n            ");
    \u0275\u0275elementStart(66, "c-col", 3);
    \u0275\u0275text(67, "\n              ");
    \u0275\u0275element(68, "input", 16);
    \u0275\u0275text(69, "\n              ");
    \u0275\u0275elementStart(70, "label", 17);
    \u0275\u0275text(71, "Entry Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275text(72, "\n              ");
    \u0275\u0275template(73, UpdateTournamentComponent_c_form_feedback_73_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275text(74, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(75, "\n  \n            ");
    \u0275\u0275elementStart(76, "c-col", 3);
    \u0275\u0275text(77, "\n              ");
    \u0275\u0275element(78, "input", 18);
    \u0275\u0275text(79, "\n              ");
    \u0275\u0275elementStart(80, "label", 19);
    \u0275\u0275text(81, "Max Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275text(82, "\n              ");
    \u0275\u0275template(83, UpdateTournamentComponent_c_form_feedback_83_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275text(84, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, "\n  \n            ");
    \u0275\u0275elementStart(86, "c-col", 0);
    \u0275\u0275text(87, "\n              ");
    \u0275\u0275elementStart(88, "button", 20);
    \u0275\u0275text(89);
    \u0275\u0275elementEnd();
    \u0275\u0275text(90, "\n              ");
    \u0275\u0275elementStart(91, "button", 21);
    \u0275\u0275listener("click", function UpdateTournamentComponent_Template_button_click_91_listener() {
      return ctx.onReset();
    });
    \u0275\u0275text(92, "\n                Reset Form\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(93, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(94, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(95, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(96, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(97, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(98, "\n  ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275property("formGroup", ctx.tournamentForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("tournamentName"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("tournamentDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("tournamentTime"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("tournamentLocation"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("tournamentDescription"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("entryFee"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("maxParticipants"));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", ctx.loading ? "Saving..." : "Save Tournament", "\n              ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.loading);
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
  NumberValueAccessor,
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
  ButtonDirective
] });
var UpdateTournamentComponent = _UpdateTournamentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdateTournamentComponent, { className: "UpdateTournamentComponent", filePath: "src\\app\\views\\tournament\\update-tournament\\update-tournament.component.ts", lineNumber: 22 });
})();
export {
  UpdateTournamentComponent
};
//# sourceMappingURL=update-tournament.component-U4KKD4SH.js.map
