import './polyfills.server.mjs';
import {
  MemberEnquiryService
} from "./chunk-VHZUDTQY.mjs";
import {
  MemberService
} from "./chunk-STGCRQXO.mjs";
import {
  Swal
} from "./chunk-LUM3LCUE.mjs";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-IPRNOZXQ.mjs";
import "./chunk-KMHHOWHO.mjs";
import "./chunk-R72VMWDM.mjs";
import "./chunk-HYNU6U63.mjs";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormFeedbackComponent,
  FormFloatingDirective,
  FormLabelDirective,
  FormSelectDirective,
  RowComponent
} from "./chunk-VUYBFT6U.mjs";
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-J4TCKMJW.mjs";
import {
  __async
} from "./chunk-CKH4O4N6.mjs";

// src/app/views/members/update-members/update-members.component.ts
function UpdateMembersComponent_c_form_feedback_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r0.getErrorMessage("firstName"), "\n            ");
  }
}
function UpdateMembersComponent_c_form_feedback_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r0.getErrorMessage("lastName"), "\n            ");
  }
}
function UpdateMembersComponent_c_form_feedback_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r0.getErrorMessage("email"), "\n            ");
  }
}
function UpdateMembersComponent_c_form_feedback_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r0.getErrorMessage("phoneNumber"), "\n            ");
  }
}
function UpdateMembersComponent_c_form_feedback_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r0.getErrorMessage("alternateEmail"), "\n            ");
  }
}
function UpdateMembersComponent_option_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const gender_r2 = ctx.$implicit;
    \u0275\u0275property("value", gender_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", gender_r2.genderName, "\n              ");
  }
}
function UpdateMembersComponent_option_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nationality_r3 = ctx.$implicit;
    \u0275\u0275property("value", nationality_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", nationality_r3.countryName, "\n              ");
  }
}
function UpdateMembersComponent_option_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r4 = ctx.$implicit;
    \u0275\u0275property("value", plan_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", plan_r4.planName, "\n              ");
  }
}
function UpdateMembersComponent_c_form_feedback_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r0.getErrorMessage("plan"), "\n            ");
  }
}
function UpdateMembersComponent_div_202_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1, "\n                ");
    \u0275\u0275element(2, "img", 60);
    \u0275\u0275text(3, "\n                ");
    \u0275\u0275elementStart(4, "button", 61);
    \u0275\u0275listener("click", function UpdateMembersComponent_div_202_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeFile("profile"));
    });
    \u0275\u0275text(5, "\n                  Remove Photo\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n              ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.profilePhotoPreview, \u0275\u0275sanitizeUrl);
  }
}
function UpdateMembersComponent_div_215_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\n                  ");
    \u0275\u0275element(2, "img", 63);
    \u0275\u0275text(3, "\n                ");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.idProofPreview, \u0275\u0275sanitizeUrl);
  }
}
function UpdateMembersComponent_div_215_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\n                  ");
    \u0275\u0275elementStart(2, "div", 64);
    \u0275\u0275text(3, "\n                    ID Proof document uploaded\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275elementContainerEnd();
  }
}
function UpdateMembersComponent_div_215_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1, "\n                ");
    \u0275\u0275template(2, UpdateMembersComponent_div_215_ng_container_2_Template, 4, 1, "ng-container", 62);
    \u0275\u0275text(3, "\n                ");
    \u0275\u0275template(4, UpdateMembersComponent_div_215_ng_container_4_Template, 5, 0, "ng-container", 62);
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275elementStart(6, "button", 61);
    \u0275\u0275listener("click", function UpdateMembersComponent_div_215_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeFile("idProof"));
    });
    \u0275\u0275text(7, "\n                  Remove ID Proof\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n              ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.idProofPreview.toString().includes("data:image"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.idProofPreview.toString().includes("data:image"));
  }
}
var _UpdateMembersComponent = class _UpdateMembersComponent {
  constructor(fb, memberService, memberEnquiryService, router, route) {
    this.fb = fb;
    this.memberService = memberService;
    this.memberEnquiryService = memberEnquiryService;
    this.router = router;
    this.route = route;
    this.loading = false;
    this.submitted = false;
    this.selectedProfileFile = null;
    this.selectedIdProofFile = null;
    this.profilePhotoPreview = null;
    this.idProofPreview = null;
    this.genders = [];
    this.nationalities = [];
    this.plans = [];
    this.memberId = null;
    this.memberData = null;
    this.pageTitle = "Update Member Profile";
    this.requiredFields = ["firstName", "lastName", "email", "phoneNumber", "plan"];
    this.initializeForm();
  }
  initializeForm() {
    this.memberForm = this.fb.group({
      // ONLY Required fields with validators
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", [Validators.required]],
      plan: ["", [Validators.required]],
      // ALL Optional fields - NO validators
      alternatePhoneNumber: [""],
      alternateEmail: [""],
      dateOfBirth: [""],
      gender: [""],
      nationality: [""],
      address: [""],
      golfClubId: [""],
      membershipStartDate: [""],
      membershipEndDate: [""],
      emergencyContactName: [""],
      emergencyContactPhone: [""],
      emergencyContactRelation: [""],
      referredBy: [""],
      profilePhoto: [""],
      idProof: [""],
      handicap: [false],
      enquiryId: [""],
      enquiryMessage: [""]
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      try {
        this.memberId = this.route.snapshot.paramMap.get("id");
        if (!this.memberId) {
          yield this.showError("Member ID not found");
          this.router.navigate(["/members"]);
          return;
        }
        yield this.loadDropdownData();
        yield this.loadMemberData();
      } catch (error) {
        yield this.showError("Failed to load member data");
      }
    });
  }
  loadMemberData() {
    return __async(this, null, function* () {
      try {
        const response = yield this.memberService.listMember(this.memberId);
        if (response?.data?.code === 1 && response.data.data && response.data.data.length > 0) {
          this.memberData = response.data.data[0];
          this.populateForm();
        } else {
          yield this.showError("Failed to load member data");
          this.router.navigate(["/members"]);
        }
      } catch (error) {
        console.error("Error loading member data:", error);
        yield this.showError("Failed to load member data");
        this.router.navigate(["/members"]);
      }
    });
  }
  populateForm() {
    if (!this.memberData)
      return;
    let planId = "";
    if (this.memberData.plan) {
      const planByName = this.plans.find((plan) => plan.planName.toLowerCase().trim() === this.memberData.plan.toLowerCase().trim());
      if (planByName) {
        planId = planByName.id.toString();
      } else {
        const planById = this.plans.find((plan) => plan.id.toString() === this.memberData.plan);
        if (planById) {
          planId = planById.id.toString();
        }
      }
    }
    let genderId = "";
    if (this.memberData.gender) {
      const genderByName = this.genders.find((gender) => gender.genderName.toLowerCase().trim() === this.memberData.gender.toLowerCase().trim());
      if (genderByName) {
        genderId = genderByName.id.toString();
      } else {
        const genderById = this.genders.find((gender) => gender.id.toString() === this.memberData.gender);
        if (genderById) {
          genderId = genderById.id.toString();
        }
      }
    }
    let nationalityId = "";
    if (this.memberData.nationality) {
      const nationalityByName = this.nationalities.find((nationality) => nationality.countryName.toLowerCase().trim() === this.memberData.nationality.toLowerCase().trim());
      if (nationalityByName) {
        nationalityId = nationalityByName.id.toString();
      } else {
        const nationalityById = this.nationalities.find((nationality) => nationality.id.toString() === this.memberData.nationality);
        if (nationalityById) {
          nationalityId = nationalityById.id.toString();
        }
      }
    }
    this.memberForm.patchValue({
      firstName: this.memberData.firstName || "",
      lastName: this.memberData.lastName || "",
      email: this.memberData.email || "",
      phoneNumber: this.memberData.phoneNumber || "",
      alternatePhoneNumber: this.memberData.alternatePhoneNumber || "",
      alternateEmail: this.memberData.alternateEmail || "",
      dateOfBirth: this.memberData.dateOfBirth || "",
      gender: genderId,
      nationality: nationalityId,
      address: this.memberData.address || "",
      plan: planId,
      golfClubId: this.memberData.golfClubId || "",
      membershipStartDate: this.memberData.membershipStartDate || "",
      membershipEndDate: this.memberData.membershipEndDate || "",
      emergencyContactName: this.memberData.emergencyContactName || "",
      emergencyContactPhone: this.memberData.emergencyContactPhone || "",
      emergencyContactRelation: this.memberData.emergencyContactRelation || "",
      referredBy: this.memberData.referredBy || "",
      profilePhoto: this.memberData.profilePhoto || "",
      idProof: this.memberData.idProof || "",
      handicap: this.memberData.handicap || false,
      enquiryId: this.memberData.enquiryId || "",
      enquiryMessage: this.memberData.enquiryMessage || ""
    });
    if (this.memberData.profilePhoto) {
      this.profilePhotoPreview = this.memberData.profilePhoto;
    }
    if (this.memberData.idProof) {
      this.idProofPreview = this.memberData.idProof;
    }
  }
  loadDropdownData() {
    return __async(this, null, function* () {
      try {
        const [genderRes, countryRes, planRes] = yield Promise.all([
          this.memberService.getGender(),
          this.memberService.getNationality(),
          this.memberService.getPlan()
        ]);
        if (genderRes?.data) {
          this.genders = Array.isArray(genderRes.data) ? genderRes.data : genderRes.data.data ? genderRes.data.data : [];
        }
        if (countryRes?.data) {
          this.nationalities = Array.isArray(countryRes.data) ? countryRes.data : countryRes.data.data ? countryRes.data.data : [];
        }
        if (planRes?.data) {
          this.plans = Array.isArray(planRes.data) ? planRes.data : planRes.data.data ? planRes.data.data : [];
        }
      } catch (error) {
        throw error;
      }
    });
  }
  onFileSelected(event, type) {
    const file = event.target.files[0];
    if (file) {
      if (type === "profile") {
        this.selectedProfileFile = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profilePhotoPreview = e.target?.result || null;
        };
        reader.readAsDataURL(file);
      } else {
        this.selectedIdProofFile = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.idProofPreview = e.target?.result || null;
        };
        reader.readAsDataURL(file);
      }
    }
  }
  removeFile(type) {
    if (type === "profile") {
      this.selectedProfileFile = null;
      this.profilePhotoPreview = null;
      const fileInput = document.getElementById("profilePhoto");
      if (fileInput)
        fileInput.value = "";
    } else {
      this.selectedIdProofFile = null;
      this.idProofPreview = null;
      const fileInput = document.getElementById("idProof");
      if (fileInput)
        fileInput.value = "";
    }
  }
  onSubmit() {
    return __async(this, null, function* () {
      try {
        this.submitted = true;
        if (this.memberForm.invalid) {
          const firstInvalidField = this.getFirstInvalidField();
          if (firstInvalidField) {
            const element = document.querySelector(`[formcontrolname="${firstInvalidField}"]`);
            element?.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          yield this.showError("Please fill in all required fields correctly.");
          return;
        }
        this.loading = true;
        const formData = new FormData();
        const formValues = this.memberForm.getRawValue();
        const planId = formValues.plan;
        if (!planId || planId === "" || planId === "null") {
          yield this.showError("Please select a valid membership plan.");
          this.loading = false;
          return;
        }
        const planExists = this.plans.find((plan) => plan.id.toString() === planId.toString());
        if (!planExists) {
          yield this.showError("Selected plan is invalid. Please select a valid membership plan.");
          this.loading = false;
          return;
        }
        formData.append("firstName", (formValues.firstName || "").toString().trim());
        formData.append("lastName", (formValues.lastName || "").toString().trim());
        formData.append("email", (formValues.email || "").toString().trim());
        formData.append("phoneNumber", (formValues.phoneNumber || "").toString().trim());
        formData.append("plan", planId.toString());
        if (formValues.alternatePhoneNumber && formValues.alternatePhoneNumber.trim()) {
          formData.append("alternatePhoneNumber", formValues.alternatePhoneNumber.trim());
        }
        if (formValues.alternateEmail && formValues.alternateEmail.trim()) {
          formData.append("alternateEmail", formValues.alternateEmail.trim());
        }
        if (formValues.dateOfBirth) {
          formData.append("dateOfBirth", new Date(formValues.dateOfBirth).toISOString().split("T")[0]);
        }
        if (formValues.gender && formValues.gender !== "" && formValues.gender !== "null") {
          formData.append("gender", formValues.gender.toString());
        }
        if (formValues.nationality && formValues.nationality !== "" && formValues.nationality !== "null") {
          formData.append("nationality", formValues.nationality.toString());
        }
        if (formValues.address && formValues.address.trim()) {
          formData.append("address", formValues.address.trim());
        }
        if (formValues.membershipStartDate) {
          formData.append("membershipStartDate", new Date(formValues.membershipStartDate).toISOString().split("T")[0]);
        }
        if (formValues.membershipEndDate) {
          formData.append("membershipEndDate", new Date(formValues.membershipEndDate).toISOString().split("T")[0]);
        }
        if (formValues.emergencyContactName && formValues.emergencyContactName.trim()) {
          formData.append("emergencyContactName", formValues.emergencyContactName.trim());
        }
        if (formValues.emergencyContactPhone && formValues.emergencyContactPhone.trim()) {
          formData.append("emergencyContactPhone", formValues.emergencyContactPhone.trim());
        }
        if (formValues.emergencyContactRelation && formValues.emergencyContactRelation.trim()) {
          formData.append("emergencyContactRelation", formValues.emergencyContactRelation.trim());
        }
        if (formValues.referredBy && formValues.referredBy.trim()) {
          formData.append("referredBy", formValues.referredBy.trim());
        }
        formData.append("handicap", formValues.handicap ? "true" : "false");
        if (formValues.enquiryId) {
          formData.append("enquiryId", formValues.enquiryId.toString());
        }
        if (formValues.enquiryMessage && formValues.enquiryMessage.trim()) {
          formData.append("enquiryMessage", formValues.enquiryMessage.trim());
        }
        if (this.selectedProfileFile) {
          formData.append("profilePhoto", this.selectedProfileFile);
        }
        if (this.selectedIdProofFile) {
          formData.append("idProof", this.selectedIdProofFile);
        }
        const response = yield this.memberService.processMember(formData, this.memberId);
        if (response?.data?.code === 1) {
          yield Swal.fire({
            title: "Success!",
            text: "Member profile has been updated successfully.",
            icon: "success",
            confirmButtonText: "Ok"
          });
          this.router.navigate(["/members"]);
        } else {
          const errorMessage = response?.data?.message || "Failed to update member";
          const errors = response?.data?.errors;
          if (errors) {
            let errorDetails = "";
            for (const [field, fieldErrors] of Object.entries(errors)) {
              if (Array.isArray(fieldErrors)) {
                errorDetails += `${field}: ${fieldErrors.join(", ")}
`;
              }
            }
            throw new Error(`${errorMessage}

Details:
${errorDetails}`);
          } else {
            throw new Error(errorMessage);
          }
        }
      } catch (error) {
        console.error("Update error:", error);
        yield this.showError(error instanceof Error ? error.message : "Failed to update member");
      } finally {
        this.loading = false;
      }
    });
  }
  onCancel() {
    this.router.navigate(["/members"]);
  }
  get f() {
    return this.memberForm.controls;
  }
  getFirstInvalidField() {
    const controls = this.memberForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        return name;
      }
    }
    return null;
  }
  // Only validate the actually required fields
  isFieldInvalid(fieldName) {
    const field = this.memberForm.get(fieldName);
    const requiredFields = ["firstName", "lastName", "email", "phoneNumber", "plan"];
    if (!requiredFields.includes(fieldName)) {
      return false;
    }
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }
  getErrorMessage(fieldName) {
    const control = this.memberForm.get(fieldName);
    if (!control || !control.errors)
      return "";
    if (control.errors["required"])
      return "This field is required";
    if (control.errors["email"])
      return "Please enter a valid email address";
    if (control.errors["pattern"]) {
      if (fieldName === "phoneNumber")
        return "Please enter a valid phone number";
    }
    if (control.errors["minlength"])
      return `Minimum length is ${control.errors["minlength"].requiredLength} characters`;
    return "Invalid input";
  }
  showError(message) {
    return __async(this, null, function* () {
      yield Swal.fire("Error", message, "error");
    });
  }
};
_UpdateMembersComponent.\u0275fac = function UpdateMembersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UpdateMembersComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MemberService), \u0275\u0275directiveInject(MemberEnquiryService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
};
_UpdateMembersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdateMembersComponent, selectors: [["app-update-members"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 245, vars: 34, consts: [["xs", "12"], [1, "mb-4"], ["cForm", "", 1, "row", "g-3", "needs-validation", 3, "ngSubmit", "formGroup"], ["md", "6", 3, "cFormFloating"], ["cFormControl", "", "id", "firstName", "formControlName", "firstName", "required", "", "type", "text", "placeholder", "First Name"], ["cLabel", "", "for", "firstName", 1, "ms-2"], [3, "valid", 4, "ngIf"], ["cFormControl", "", "id", "lastName", "formControlName", "lastName", "required", "", "type", "text", "placeholder", "Last Name"], ["cLabel", "", "for", "lastName", 1, "ms-2"], ["cFormControl", "", "id", "email", "formControlName", "email", "required", "", "type", "email", "placeholder", "Email"], ["cLabel", "", "for", "email", 1, "ms-2"], ["cFormControl", "", "id", "phoneNumber", "formControlName", "phoneNumber", "required", "", "type", "tel", "placeholder", "Phone Number"], ["cLabel", "", "for", "phoneNumber", 1, "ms-2"], ["cFormControl", "", "id", "alternatePhoneNumber", "formControlName", "alternatePhoneNumber", "type", "tel", "placeholder", "Alternate Phone Number"], ["cLabel", "", "for", "alternatePhoneNumber", 1, "ms-2"], ["cFormControl", "", "id", "alternateEmail", "formControlName", "alternateEmail", "type", "email", "placeholder", "Alternate Email"], ["cLabel", "", "for", "alternateEmail", 1, "ms-2"], ["cFormControl", "", "id", "dateOfBirth", "formControlName", "dateOfBirth", "type", "date", "placeholder", "Date of Birth"], ["cLabel", "", "for", "dateOfBirth", 1, "ms-2"], ["cSelect", "", "id", "gender", "formControlName", "gender"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["cLabel", "", "for", "gender", 1, "ms-2"], ["cSelect", "", "id", "nationality", "formControlName", "nationality"], ["cLabel", "", "for", "nationality", 1, "ms-2"], ["md", "12", 3, "cFormFloating"], ["cFormControl", "", "id", "address", "formControlName", "address", "placeholder", "Address", "rows", "3"], ["cLabel", "", "for", "address", 1, "ms-2"], ["cSelect", "", "id", "plan", "formControlName", "plan", "required", ""], ["cLabel", "", "for", "plan", 1, "ms-2"], ["cFormControl", "", "id", "golfClubId", "formControlName", "golfClubId", "readonly", "", "type", "text", "placeholder", "Golf Club ID"], ["cLabel", "", "for", "golfClubId", 1, "ms-2"], ["cFormControl", "", "id", "membershipStartDate", "formControlName", "membershipStartDate", "type", "date", "placeholder", "Membership Start Date"], ["cLabel", "", "for", "membershipStartDate", 1, "ms-2"], ["cFormControl", "", "id", "membershipEndDate", "formControlName", "membershipEndDate", "type", "date", "placeholder", "Membership End Date", 3, "disabled"], ["cLabel", "", "for", "membershipEndDate", 1, "ms-2"], ["cFormControl", "", "id", "emergencyContactName", "formControlName", "emergencyContactName", "type", "text", "placeholder", "Emergency Contact Name"], ["cLabel", "", "for", "emergencyContactName", 1, "ms-2"], ["cFormControl", "", "id", "emergencyContactPhone", "formControlName", "emergencyContactPhone", "type", "tel", "placeholder", "Emergency Contact Phone"], ["cLabel", "", "for", "emergencyContactPhone", 1, "ms-2"], ["cFormControl", "", "id", "emergencyContactRelation", "formControlName", "emergencyContactRelation", "type", "text", "placeholder", "Relationship"], ["cLabel", "", "for", "emergencyContactRelation", 1, "ms-2"], ["cFormControl", "", "id", "referredBy", "formControlName", "referredBy", "type", "text", "placeholder", "Referred By"], ["cLabel", "", "for", "referredBy", 1, "ms-2"], ["md", "6"], [1, "mb-3"], ["cLabel", "", "for", "profilePhoto", 1, "form-label"], ["cFormControl", "", "type", "file", "id", "profilePhoto", "accept", "image/*", 1, "form-control", 3, "change"], ["class", "mt-2", 4, "ngIf"], ["cLabel", "", "for", "idProof", 1, "form-label"], ["cFormControl", "", "type", "file", "id", "idProof", "accept", ".pdf,.jpg,.jpeg,.png", 1, "form-control", 3, "change"], [1, "form-check", "mt-3"], ["type", "checkbox", "id", "handicap", "formControlName", "handicap", 1, "form-check-input"], ["for", "handicap", 1, "form-check-label"], ["xs", "12", 1, "mt-4"], ["cButton", "", "color", "primary", "type", "submit", 1, "me-2", 3, "disabled"], ["cButton", "", "color", "secondary", "type", "button", 3, "click", "disabled"], [3, "valid"], [3, "value"], [1, "mt-2"], ["alt", "Profile Preview", 1, "img-thumbnail", 2, "max-width", "200px", "max-height", "200px", 3, "src"], ["cButton", "", "color", "danger", "size", "sm", "type", "button", 1, "ms-2", 3, "click"], [4, "ngIf"], ["alt", "ID Proof Preview", 1, "img-thumbnail", 2, "max-width", "200px", "max-height", "200px", 3, "src"], [1, "alert", "alert-info"]], template: function UpdateMembersComponent_Template(rf, ctx) {
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
    \u0275\u0275text(9, "Update Member Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n      ");
    \u0275\u0275elementStart(12, "c-card-body");
    \u0275\u0275text(13, "\n        ");
    \u0275\u0275elementStart(14, "form", 2);
    \u0275\u0275listener("ngSubmit", function UpdateMembersComponent_Template_form_ngSubmit_14_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275text(15, "\n          ");
    \u0275\u0275text(16, "\n          ");
    \u0275\u0275elementStart(17, "c-col", 3);
    \u0275\u0275text(18, "\n            ");
    \u0275\u0275element(19, "input", 4);
    \u0275\u0275text(20, "\n            ");
    \u0275\u0275elementStart(21, "label", 5);
    \u0275\u0275text(22, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n            ");
    \u0275\u0275template(24, UpdateMembersComponent_c_form_feedback_24_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275text(25, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\n\n          ");
    \u0275\u0275elementStart(27, "c-col", 3);
    \u0275\u0275text(28, "\n            ");
    \u0275\u0275element(29, "input", 7);
    \u0275\u0275text(30, "\n            ");
    \u0275\u0275elementStart(31, "label", 8);
    \u0275\u0275text(32, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, "\n            ");
    \u0275\u0275template(34, UpdateMembersComponent_c_form_feedback_34_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275text(35, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, "\n\n          ");
    \u0275\u0275elementStart(37, "c-col", 3);
    \u0275\u0275text(38, "\n            ");
    \u0275\u0275element(39, "input", 9);
    \u0275\u0275text(40, "\n            ");
    \u0275\u0275elementStart(41, "label", 10);
    \u0275\u0275text(42, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, "\n            ");
    \u0275\u0275template(44, UpdateMembersComponent_c_form_feedback_44_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275text(45, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, "\n\n          ");
    \u0275\u0275elementStart(47, "c-col", 3);
    \u0275\u0275text(48, "\n            ");
    \u0275\u0275element(49, "input", 11);
    \u0275\u0275text(50, "\n            ");
    \u0275\u0275elementStart(51, "label", 12);
    \u0275\u0275text(52, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, "\n            ");
    \u0275\u0275template(54, UpdateMembersComponent_c_form_feedback_54_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275text(55, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, "\n\n          ");
    \u0275\u0275elementStart(57, "c-col", 3);
    \u0275\u0275text(58, "\n            ");
    \u0275\u0275element(59, "input", 13);
    \u0275\u0275text(60, "\n            ");
    \u0275\u0275elementStart(61, "label", 14);
    \u0275\u0275text(62, "Alternate Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, "\n\n          ");
    \u0275\u0275elementStart(65, "c-col", 3);
    \u0275\u0275text(66, "\n            ");
    \u0275\u0275element(67, "input", 15);
    \u0275\u0275text(68, "\n            ");
    \u0275\u0275elementStart(69, "label", 16);
    \u0275\u0275text(70, "Alternate Email");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, "\n            ");
    \u0275\u0275template(72, UpdateMembersComponent_c_form_feedback_72_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275text(73, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(74, "\n\n          ");
    \u0275\u0275elementStart(75, "c-col", 3);
    \u0275\u0275text(76, "\n            ");
    \u0275\u0275element(77, "input", 17);
    \u0275\u0275text(78, "\n            ");
    \u0275\u0275elementStart(79, "label", 18);
    \u0275\u0275text(80, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275text(81, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(82, "\n\n          ");
    \u0275\u0275elementStart(83, "c-col", 3);
    \u0275\u0275text(84, "\n            ");
    \u0275\u0275elementStart(85, "select", 19);
    \u0275\u0275text(86, "\n              ");
    \u0275\u0275elementStart(87, "option", 20);
    \u0275\u0275text(88, "Select Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89, "\n              ");
    \u0275\u0275template(90, UpdateMembersComponent_option_90_Template, 2, 2, "option", 21);
    \u0275\u0275text(91, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, "\n            ");
    \u0275\u0275elementStart(93, "label", 22);
    \u0275\u0275text(94, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275text(95, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(96, "\n\n          ");
    \u0275\u0275elementStart(97, "c-col", 3);
    \u0275\u0275text(98, "\n            ");
    \u0275\u0275elementStart(99, "select", 23);
    \u0275\u0275text(100, "\n              ");
    \u0275\u0275elementStart(101, "option", 20);
    \u0275\u0275text(102, "Select Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275text(103, "\n              ");
    \u0275\u0275template(104, UpdateMembersComponent_option_104_Template, 2, 2, "option", 21);
    \u0275\u0275text(105, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(106, "\n            ");
    \u0275\u0275elementStart(107, "label", 24);
    \u0275\u0275text(108, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275text(109, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(110, "\n\n          ");
    \u0275\u0275elementStart(111, "c-col", 25);
    \u0275\u0275text(112, "\n            ");
    \u0275\u0275element(113, "textarea", 26);
    \u0275\u0275text(114, "\n            ");
    \u0275\u0275elementStart(115, "label", 27);
    \u0275\u0275text(116, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275text(117, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(118, "\n\n          ");
    \u0275\u0275elementStart(119, "c-col", 3);
    \u0275\u0275text(120, "\n            ");
    \u0275\u0275elementStart(121, "select", 28);
    \u0275\u0275text(122, "\n              ");
    \u0275\u0275elementStart(123, "option", 20);
    \u0275\u0275text(124, "Select Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275text(125, "\n              ");
    \u0275\u0275template(126, UpdateMembersComponent_option_126_Template, 2, 2, "option", 21);
    \u0275\u0275text(127, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(128, "\n            ");
    \u0275\u0275elementStart(129, "label", 29);
    \u0275\u0275text(130, "Membership Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275text(131, "\n            ");
    \u0275\u0275template(132, UpdateMembersComponent_c_form_feedback_132_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275text(133, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(134, "\n\n          ");
    \u0275\u0275elementStart(135, "c-col", 3);
    \u0275\u0275text(136, "\n            ");
    \u0275\u0275element(137, "input", 30);
    \u0275\u0275text(138, "\n            ");
    \u0275\u0275elementStart(139, "label", 31);
    \u0275\u0275text(140, "Golf Club ID");
    \u0275\u0275elementEnd();
    \u0275\u0275text(141, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(142, "\n\n          ");
    \u0275\u0275elementStart(143, "c-col", 3);
    \u0275\u0275text(144, "\n            ");
    \u0275\u0275element(145, "input", 32);
    \u0275\u0275text(146, "\n            ");
    \u0275\u0275elementStart(147, "label", 33);
    \u0275\u0275text(148, "Membership Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(149, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(150, "\n\n          ");
    \u0275\u0275elementStart(151, "c-col", 3);
    \u0275\u0275text(152, "\n            ");
    \u0275\u0275element(153, "input", 34);
    \u0275\u0275text(154, "\n            ");
    \u0275\u0275elementStart(155, "label", 35);
    \u0275\u0275text(156, "Membership End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(157, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(158, "\n\n          ");
    \u0275\u0275text(159, "\n          ");
    \u0275\u0275elementStart(160, "c-col", 3);
    \u0275\u0275text(161, "\n            ");
    \u0275\u0275element(162, "input", 36);
    \u0275\u0275text(163, "\n            ");
    \u0275\u0275elementStart(164, "label", 37);
    \u0275\u0275text(165, "Emergency Contact Name");
    \u0275\u0275elementEnd();
    \u0275\u0275text(166, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(167, "\n\n          ");
    \u0275\u0275elementStart(168, "c-col", 3);
    \u0275\u0275text(169, "\n            ");
    \u0275\u0275element(170, "input", 38);
    \u0275\u0275text(171, "\n            ");
    \u0275\u0275elementStart(172, "label", 39);
    \u0275\u0275text(173, "Emergency Contact Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(174, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(175, "\n\n          ");
    \u0275\u0275elementStart(176, "c-col", 3);
    \u0275\u0275text(177, "\n            ");
    \u0275\u0275element(178, "input", 40);
    \u0275\u0275text(179, "\n            ");
    \u0275\u0275elementStart(180, "label", 41);
    \u0275\u0275text(181, "Relationship");
    \u0275\u0275elementEnd();
    \u0275\u0275text(182, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(183, "\n\n          ");
    \u0275\u0275elementStart(184, "c-col", 3);
    \u0275\u0275text(185, "\n            ");
    \u0275\u0275element(186, "input", 42);
    \u0275\u0275text(187, "\n            ");
    \u0275\u0275elementStart(188, "label", 43);
    \u0275\u0275text(189, "Referred By (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(190, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(191, "\n\n          ");
    \u0275\u0275text(192, "\n          ");
    \u0275\u0275elementStart(193, "c-col", 44);
    \u0275\u0275text(194, "\n            ");
    \u0275\u0275elementStart(195, "div", 45);
    \u0275\u0275text(196, "\n              ");
    \u0275\u0275elementStart(197, "label", 46);
    \u0275\u0275text(198, "Profile Photo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(199, "\n              ");
    \u0275\u0275elementStart(200, "input", 47);
    \u0275\u0275listener("change", function UpdateMembersComponent_Template_input_change_200_listener($event) {
      return ctx.onFileSelected($event, "profile");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(201, "\n              ");
    \u0275\u0275template(202, UpdateMembersComponent_div_202_Template, 7, 1, "div", 48);
    \u0275\u0275text(203, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(204, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(205, "\n\n          ");
    \u0275\u0275elementStart(206, "c-col", 44);
    \u0275\u0275text(207, "\n            ");
    \u0275\u0275elementStart(208, "div", 45);
    \u0275\u0275text(209, "\n              ");
    \u0275\u0275elementStart(210, "label", 49);
    \u0275\u0275text(211, "ID Proof");
    \u0275\u0275elementEnd();
    \u0275\u0275text(212, "\n              ");
    \u0275\u0275elementStart(213, "input", 50);
    \u0275\u0275listener("change", function UpdateMembersComponent_Template_input_change_213_listener($event) {
      return ctx.onFileSelected($event, "idProof");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(214, "\n              ");
    \u0275\u0275template(215, UpdateMembersComponent_div_215_Template, 9, 2, "div", 48);
    \u0275\u0275text(216, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(217, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(218, "\n\n          ");
    \u0275\u0275text(219, "\n          ");
    \u0275\u0275elementStart(220, "c-col", 44);
    \u0275\u0275text(221, "\n            ");
    \u0275\u0275elementStart(222, "div", 51);
    \u0275\u0275text(223, "\n              ");
    \u0275\u0275element(224, "input", 52);
    \u0275\u0275text(225, "\n              ");
    \u0275\u0275elementStart(226, "label", 53);
    \u0275\u0275text(227, "\n                Handicap\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(228, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(229, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(230, "\n\n          ");
    \u0275\u0275text(231, "\n          ");
    \u0275\u0275elementStart(232, "c-col", 54);
    \u0275\u0275text(233, "\n            ");
    \u0275\u0275elementStart(234, "button", 55);
    \u0275\u0275text(235);
    \u0275\u0275elementEnd();
    \u0275\u0275text(236, "\n            ");
    \u0275\u0275elementStart(237, "button", 56);
    \u0275\u0275listener("click", function UpdateMembersComponent_Template_button_click_237_listener() {
      return ctx.onCancel();
    });
    \u0275\u0275text(238, "\n              Cancel\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(239, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(240, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(241, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(242, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(243, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(244, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275property("formGroup", ctx.memberForm);
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("firstName"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("lastName"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("email"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("phoneNumber"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("alternateEmail"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx.genders);
    \u0275\u0275advance(7);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx.nationalities);
    \u0275\u0275advance(7);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx.plans);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("plan"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngIf", ctx.profilePhotoPreview);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx.idProofPreview);
    \u0275\u0275advance(19);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx.loading ? "Saving..." : "Update Member Profile", "\n            ");
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
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  CheckboxControlValueAccessor,
  SelectControlValueAccessor,
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
  FormSelectDirective,
  ButtonDirective
] });
var UpdateMembersComponent = _UpdateMembersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdateMembersComponent, { className: "UpdateMembersComponent", filePath: "src\\app\\views\\members\\update-members\\update-members.component.ts", lineNumber: 76 });
})();
export {
  UpdateMembersComponent
};
//# sourceMappingURL=update-members.component-YEPO7BI4.mjs.map
