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
  FormBuilder,
  FormControlDirective,
  FormControlName,
  FormDirective,
  FormFeedbackComponent,
  FormFloatingDirective,
  FormGroupDirective,
  FormLabelDirective,
  FormSelectDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  RowComponent,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-J4TCKMJW.mjs";
import {
  __async
} from "./chunk-CKH4O4N6.mjs";

// src/app/views/members/create-members/create-members.component.ts
function CreateMemberComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1, "From Enquiry");
    \u0275\u0275elementEnd();
  }
}
function CreateMemberComponent_c_col_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-col", 0);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 59);
    \u0275\u0275text(3, "\n              ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "Enquiry Message:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "br");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n          ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\n              ", (tmp_1_0 = ctx_r0.memberForm.get("enquiryMessage")) == null ? null : tmp_1_0.value, "\n            ");
  }
}
function CreateMemberComponent_c_form_feedback_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 60);
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
function CreateMemberComponent_c_form_feedback_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 60);
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
function CreateMemberComponent_c_form_feedback_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 60);
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
function CreateMemberComponent_c_form_feedback_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 60);
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
function CreateMemberComponent_c_form_feedback_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 60);
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
function CreateMemberComponent_option_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const gender_r2 = ctx.$implicit;
    \u0275\u0275property("value", gender_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(gender_r2.genderName);
  }
}
function CreateMemberComponent_option_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r3 = ctx.$implicit;
    \u0275\u0275property("value", country_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(country_r3.countryName);
  }
}
function CreateMemberComponent_option_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r4 = ctx.$implicit;
    \u0275\u0275property("value", plan_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(plan_r4.planName);
  }
}
function CreateMemberComponent_c_form_feedback_148_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 60);
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
function CreateMemberComponent_div_203_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1, "\n              ");
    \u0275\u0275element(2, "img", 62);
    \u0275\u0275text(3, "\n              ");
    \u0275\u0275elementStart(4, "button", 63);
    \u0275\u0275listener("click", function CreateMemberComponent_div_203_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removePhoto("profile"));
    });
    \u0275\u0275text(5, "\n                Remove Photo\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.previewUrl, \u0275\u0275sanitizeUrl);
  }
}
function CreateMemberComponent_c_row_248_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-row", 64)(1, "c-col", 0)(2, "c-card")(3, "c-card-header")(4, "h4", 65);
    \u0275\u0275text(5, "Member Credentials");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "c-card-body")(7, "div", 66)(8, "h5");
    \u0275\u0275text(9, "Member Created Successfully!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p")(11, "strong");
    \u0275\u0275text(12, "Member ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p")(15, "strong");
    \u0275\u0275text(16, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p")(19, "strong");
    \u0275\u0275text(20, "Password:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p")(23, "strong");
    \u0275\u0275text(24, "QR Token:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "hr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 67)(28, "button", 68);
    \u0275\u0275listener("click", function CreateMemberComponent_c_row_248_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.createAnotherMember());
    });
    \u0275\u0275text(29, " Create Another Member ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 69);
    \u0275\u0275listener("click", function CreateMemberComponent_c_row_248_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearCredentialsAndNavigate());
    });
    \u0275\u0275text(31, " Go to Members List ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1(" ", ctx_r0.createdMemberCredentials.member_id, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.createdMemberCredentials.email, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.createdMemberCredentials.password, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.createdMemberCredentials.qr_token, "");
  }
}
var _CreateMemberComponent = class _CreateMemberComponent {
  constructor(fb, memberService, memberEnquiryService, router, route) {
    this.fb = fb;
    this.memberService = memberService;
    this.memberEnquiryService = memberEnquiryService;
    this.router = router;
    this.route = route;
    this.CLUB_PREFIX = "MGC";
    this.loading = false;
    this.submitted = false;
    this.selectedProfileFile = null;
    this.selectedIdProofFile = null;
    this.previewUrl = null;
    this.genders = [];
    this.countries = [];
    this.plans = [];
    this.enquiryId = null;
    this.isFromEnquiry = false;
    this.pageTitle = "New Member Profile";
    this.createdMemberCredentials = null;
    this.initializeForm();
  }
  initializeForm() {
    const currentDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.memberForm = this.fb.group({
      // ONLY Required fields with validators
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", [Validators.required]],
      plan: ["", [Validators.required]],
      // ALL Optional fields - NO validators
      password: [""],
      alternatePhoneNumber: [""],
      alternateEmail: ["", [Validators.email]],
      // New field
      dateOfBirth: [""],
      gender: [""],
      nationality: [""],
      address: [""],
      membershipStartDate: [currentDate],
      membershipEndDate: [""],
      emergencyContactName: [""],
      emergencyContactPhone: [""],
      emergencyContactRelation: [""],
      referredBy: [""],
      profilePhoto: [""],
      idProof: [""],
      handicap: [false],
      golfClubId: [""],
      enquiryId: [""],
      enquiryMessage: [""]
    });
  }
  generatePassword(length = 12) {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const special = "!@#$%^&*";
    let password = "";
    password += this.getRandomChar(uppercase);
    password += this.getRandomChar(lowercase);
    password += this.getRandomChar(numbers);
    password += this.getRandomChar(special);
    const allChars = uppercase + lowercase + numbers + special;
    for (let i = password.length; i < length; i++) {
      password += this.getRandomChar(allChars);
    }
    return password.split("").sort(() => Math.random() - 0.5).join("");
  }
  getRandomChar(charset) {
    return charset[Math.floor(Math.random() * charset.length)];
  }
  ngOnInit() {
    return __async(this, null, function* () {
      try {
        this.route.queryParams.subscribe((params) => {
          if (params["enquiryId"]) {
            this.enquiryId = params["enquiryId"];
            this.isFromEnquiry = true;
            this.pageTitle = "Convert Enquiry to Member";
          }
        });
        yield this.loadDropdownData();
        if (this.isFromEnquiry && this.enquiryId) {
          yield this.loadEnquiryData();
        }
        this.memberForm.get("membershipStartDate")?.valueChanges.subscribe((startDate) => {
          this.calculateMembershipEndDate(startDate);
        });
        this.memberForm.get("plan")?.valueChanges.subscribe((planId) => {
          const startDate = this.memberForm.get("membershipStartDate")?.value;
          if (startDate) {
            this.calculateMembershipEndDate(startDate);
          }
        });
      } catch (error) {
        yield this.showError("Failed to load form data");
      }
    });
  }
  calculateMembershipEndDate(startDate) {
    if (!startDate)
      return;
    const selectedPlanId = this.memberForm.get("plan")?.value;
    if (!selectedPlanId)
      return;
    const plan = this.plans.find((p) => p.id.toString() === selectedPlanId.toString());
    if (!plan)
      return;
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(startDateObj);
    endDateObj.setFullYear(endDateObj.getFullYear() + (plan.planDuration || 1));
    const endDate = endDateObj.toISOString().split("T")[0];
    this.memberForm.patchValue({ membershipEndDate: endDate });
  }
  loadEnquiryData() {
    return __async(this, null, function* () {
      try {
        const response = yield this.memberEnquiryService.listMemberEnquiry(this.enquiryId);
        if (response?.data?.code === 1 && response.data.data && response.data.data.length > 0) {
          const enquiryData = response.data.data[0];
          let planId = "";
          if (enquiryData.memberEnquiryPlan) {
            console.log("Original plan data:", enquiryData.memberEnquiryPlan);
            if (typeof enquiryData.memberEnquiryPlan === "object" && enquiryData.memberEnquiryPlan.id) {
              planId = enquiryData.memberEnquiryPlan.id.toString();
            } else if (typeof enquiryData.memberEnquiryPlan === "number") {
              planId = enquiryData.memberEnquiryPlan.toString();
            } else if (typeof enquiryData.memberEnquiryPlan === "string") {
              const parsedId = parseInt(enquiryData.memberEnquiryPlan);
              if (!isNaN(parsedId)) {
                const planExists = this.plans.find((plan) => plan.id === parsedId);
                if (planExists) {
                  planId = parsedId.toString();
                }
              }
              if (!planId) {
                const matchingPlan = this.plans.find((plan) => plan.planName.toLowerCase().trim() === enquiryData.memberEnquiryPlan.toLowerCase().trim());
                if (matchingPlan) {
                  planId = matchingPlan.id.toString();
                }
              }
            }
          }
          console.log("Resolved plan ID:", planId);
          console.log("Available plans:", this.plans);
          this.memberForm.patchValue({
            firstName: enquiryData.memberEnquiryFirstName || "",
            lastName: enquiryData.memberEnquiryLastName || "",
            email: enquiryData.memberEnquiryEmail || "",
            phoneNumber: enquiryData.memberEnquiryPhoneNumber || "",
            plan: planId,
            enquiryId: this.enquiryId,
            enquiryMessage: enquiryData.memberEnquiryMessage || ""
          });
          this.disableEnquiryFields(enquiryData, planId);
        } else {
          yield this.showError("Failed to load enquiry data");
        }
      } catch (error) {
        console.error("Error loading enquiry data:", error);
        yield this.showError("Failed to load enquiry data");
      }
    });
  }
  disableEnquiryFields(enquiryData, planId) {
    if (enquiryData.memberEnquiryFirstName) {
      this.memberForm.get("firstName")?.disable();
    }
    if (enquiryData.memberEnquiryLastName) {
      this.memberForm.get("lastName")?.disable();
    }
    if (enquiryData.memberEnquiryEmail) {
      this.memberForm.get("email")?.disable();
    }
    if (enquiryData.memberEnquiryPhoneNumber) {
      this.memberForm.get("phoneNumber")?.disable();
    }
    if (planId) {
      this.memberForm.get("plan")?.disable();
    }
    this.memberForm.get("enquiryMessage")?.disable();
  }
  get f() {
    return this.memberForm.controls;
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
          this.countries = Array.isArray(countryRes.data) ? countryRes.data : countryRes.data.data ? countryRes.data.data : [];
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
          this.previewUrl = e.target?.result || null;
        };
        reader.readAsDataURL(file);
      } else {
        this.selectedIdProofFile = file;
      }
    }
  }
  removePhoto(type) {
    if (type === "profile") {
      this.selectedProfileFile = null;
      this.previewUrl = null;
      const fileInput = document.getElementById("profilePhoto");
      if (fileInput)
        fileInput.value = "";
    } else {
      this.selectedIdProofFile = null;
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
        const generatedMemberId = yield this.generateMemberId();
        const generatedPassword = this.generatePassword();
        const formData = new FormData();
        const formValues = this.memberForm.getRawValue();
        const planId = formValues.plan;
        console.log("Submitting with plan ID:", planId);
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
        formData.append("golfClubId", generatedMemberId);
        formData.append("password", generatedPassword);
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
        console.log("FormData contents:");
        formData.forEach((value, key) => {
          console.log(`${key}: ${value}`);
        });
        const response = yield this.memberService.processMember(formData);
        if (response?.data?.code === 1) {
          this.createdMemberCredentials = response?.data?.data || {
            member_id: generatedMemberId,
            email: formValues.email,
            password: generatedPassword,
            qr_token: response?.data?.data?.qr_token || ""
          };
          let successMessage = `Member has been created successfully with Golf Club ID: ${generatedMemberId}. Credentials have been sent to the member's email.`;
          if (this.isFromEnquiry && this.enquiryId) {
            try {
              yield this.markEnquiryAsConverted(this.enquiryId, generatedMemberId);
              successMessage = `Enquiry has been successfully converted to member with Golf Club ID: ${generatedMemberId}. Credentials have been sent to the member's email.`;
            } catch (error) {
              yield Swal.fire({
                title: "Warning",
                text: `Member created successfully with ID: ${generatedMemberId}, but failed to update enquiry status. Please manually update the enquiry status.`,
                icon: "warning",
                confirmButtonText: "Ok"
              });
              return;
            }
          }
          yield Swal.fire({
            title: "Success!",
            text: successMessage,
            icon: "success",
            confirmButtonText: "View Credentials"
          });
        } else {
          const errorMessage = response?.data?.message || "Failed to create member";
          const errors = response?.data?.errors;
          console.error("Server response error:", response?.data);
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
        console.error("Submission error:", error);
        yield this.showError(error instanceof Error ? error.message : "Failed to create member");
      } finally {
        this.loading = false;
      }
    });
  }
  markEnquiryAsConverted(enquiryId, memberId) {
    return __async(this, null, function* () {
      try {
        const response = yield this.memberEnquiryService.markEnquiryConverted(enquiryId, {
          convertedMemberId: memberId
        });
        if (response?.data?.code !== 1) {
          const errorMessage = response?.data?.message || "Failed to mark enquiry as converted";
          throw new Error(errorMessage);
        }
      } catch (error) {
        throw error;
      }
    });
  }
  generateMemberId() {
    return __async(this, null, function* () {
      try {
        const currentDate = /* @__PURE__ */ new Date();
        const year = currentDate.getFullYear().toString().slice(-2);
        const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
        const lastMemberId = yield this.memberService.getLastMemberId(year, month);
        let sequence;
        if (!lastMemberId) {
          sequence = 1;
        } else {
          const lastSequence = parseInt(lastMemberId.slice(-4));
          sequence = lastSequence + 1;
        }
        const sequenceStr = sequence.toString().padStart(4, "0");
        return `${this.CLUB_PREFIX}${year}${month}${sequenceStr}`;
      } catch (error) {
        throw new Error("Failed to generate member ID");
      }
    });
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
  clearCredentialsAndNavigate() {
    this.createdMemberCredentials = null;
    if (this.isFromEnquiry) {
      this.router.navigate(["/memberEnquiry"]);
    } else {
      this.router.navigate(["/members"]);
    }
  }
  createAnotherMember() {
    this.createdMemberCredentials = null;
    this.memberForm.reset();
    this.submitted = false;
    this.selectedProfileFile = null;
    this.selectedIdProofFile = null;
    this.previewUrl = null;
  }
};
_CreateMemberComponent.\u0275fac = function CreateMemberComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreateMemberComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MemberService), \u0275\u0275directiveInject(MemberEnquiryService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
};
_CreateMemberComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateMemberComponent, selectors: [["app-create-members"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 249, vars: 35, consts: [["xs", "12"], [1, "mb-4"], ["class", "badge bg-info ms-2", 4, "ngIf"], ["enctype", "multipart/form-data", "cForm", "", 1, "row", "g-3", "needs-validation", 3, "ngSubmit", "formGroup"], ["xs", "12", 4, "ngIf"], ["md", "6", 3, "cFormFloating"], ["cFormControl", "", "id", "firstName", "formControlName", "firstName", "type", "text", "placeholder", "First Name"], ["cLabel", "", "for", "firstName"], [1, "text-danger"], [3, "valid", 4, "ngIf"], ["cFormControl", "", "id", "lastName", "formControlName", "lastName", "type", "text", "placeholder", "Last Name"], ["cLabel", "", "for", "lastName"], ["cFormControl", "", "id", "email", "formControlName", "email", "type", "email", "placeholder", "Email"], ["cLabel", "", "for", "email"], ["cFormControl", "", "id", "phoneNumber", "formControlName", "phoneNumber", "type", "tel", "placeholder", "Phone Number"], ["cLabel", "", "for", "phoneNumber"], ["cFormControl", "", "id", "alternatePhoneNumber", "formControlName", "alternatePhoneNumber", "type", "tel", "placeholder", "Alternate Phone"], ["cLabel", "", "for", "alternatePhoneNumber"], ["cFormControl", "", "id", "alternateEmail", "formControlName", "alternateEmail", "type", "email", "placeholder", "Alternate Email"], ["cLabel", "", "for", "alternateEmail"], ["cFormControl", "", "id", "dateOfBirth", "formControlName", "dateOfBirth", "type", "date", "placeholder", "Date of Birth"], ["cLabel", "", "for", "dateOfBirth"], ["cSelect", "", "id", "gender", "formControlName", "gender"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["cLabel", "", "for", "gender"], ["cSelect", "", "id", "nationality", "formControlName", "nationality"], ["cLabel", "", "for", "nationality"], ["md", "12", 3, "cFormFloating"], ["cFormControl", "", "id", "address", "formControlName", "address", "placeholder", "Address", "rows", "3"], ["cLabel", "", "for", "address"], ["cSelect", "", "id", "plan", "formControlName", "plan"], ["cLabel", "", "for", "plan"], ["cFormControl", "", "id", "membershipStartDate", "formControlName", "membershipStartDate", "type", "date"], ["cLabel", "", "for", "membershipStartDate"], ["cFormControl", "", "id", "membershipEndDate", "formControlName", "membershipEndDate", "type", "date", 3, "disabled"], ["cLabel", "", "for", "membershipEndDate"], ["cFormControl", "", "id", "emergencyContactName", "formControlName", "emergencyContactName", "type", "text"], ["cLabel", "", "for", "emergencyContactName"], ["cFormControl", "", "id", "emergencyContactPhone", "formControlName", "emergencyContactPhone", "type", "tel"], ["cLabel", "", "for", "emergencyContactPhone"], ["cFormControl", "", "id", "emergencyContactRelation", "formControlName", "emergencyContactRelation", "type", "text"], ["cLabel", "", "for", "emergencyContactRelation"], ["md", "6"], [1, "mb-3"], ["cLabel", "", "for", "profilePhoto", 1, "form-label"], ["cFormControl", "", "type", "file", "id", "profilePhoto", "accept", "image/*", 1, "form-control", 3, "change"], ["class", "mb-3", 4, "ngIf"], ["cLabel", "", "for", "idProof", 1, "form-label"], ["cFormControl", "", "type", "file", "id", "idProof", 1, "form-control", 3, "change"], ["cFormControl", "", "id", "referredBy", "formControlName", "referredBy", "type", "text"], ["cLabel", "", "for", "referredBy"], [1, "form-check"], ["type", "checkbox", "id", "handicap", "formControlName", "handicap", 1, "form-check-input"], ["for", "handicap", 1, "form-check-label"], ["xs", "12", 1, "mt-4"], ["cButton", "", "color", "primary", "type", "submit", 1, "me-2", 3, "disabled"], ["class", "mt-4", 4, "ngIf"], [1, "badge", "bg-info", "ms-2"], [1, "alert", "alert-info"], [3, "valid"], [3, "value"], ["alt", "Profile Preview", 1, "img-thumbnail", 2, "max-width", "200px", "max-height", "200px", 3, "src"], ["cButton", "", "color", "danger", "size", "sm", "type", "button", 1, "ms-2", 3, "click"], [1, "mt-4"], [1, "mb-0"], [1, "alert", "alert-success"], [1, "mt-3"], ["cButton", "", "color", "success", 1, "me-2", 3, "click"], ["cButton", "", "color", "secondary", 3, "click"]], template: function CreateMemberComponent_Template(rf, ctx) {
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
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n        ");
    \u0275\u0275template(11, CreateMemberComponent_span_11_Template, 2, 0, "span", 2);
    \u0275\u0275text(12, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n      ");
    \u0275\u0275elementStart(14, "c-card-body");
    \u0275\u0275text(15, "\n        ");
    \u0275\u0275elementStart(16, "form", 3);
    \u0275\u0275listener("ngSubmit", function CreateMemberComponent_Template_form_ngSubmit_16_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275text(17, "\n\n          ");
    \u0275\u0275text(18, "\n          ");
    \u0275\u0275template(19, CreateMemberComponent_c_col_19_Template, 9, 1, "c-col", 4);
    \u0275\u0275text(20, "\n\n          ");
    \u0275\u0275text(21, "\n          ");
    \u0275\u0275elementStart(22, "c-col", 5);
    \u0275\u0275text(23, "\n            ");
    \u0275\u0275element(24, "input", 6);
    \u0275\u0275text(25, "\n            ");
    \u0275\u0275elementStart(26, "label", 7);
    \u0275\u0275text(27, "First Name ");
    \u0275\u0275elementStart(28, "span", 8);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(30, "\n            ");
    \u0275\u0275template(31, CreateMemberComponent_c_form_feedback_31_Template, 2, 2, "c-form-feedback", 9);
    \u0275\u0275text(32, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, "\n\n          ");
    \u0275\u0275elementStart(34, "c-col", 5);
    \u0275\u0275text(35, "\n            ");
    \u0275\u0275element(36, "input", 10);
    \u0275\u0275text(37, "\n            ");
    \u0275\u0275elementStart(38, "label", 11);
    \u0275\u0275text(39, "Last Name ");
    \u0275\u0275elementStart(40, "span", 8);
    \u0275\u0275text(41, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(42, "\n            ");
    \u0275\u0275template(43, CreateMemberComponent_c_form_feedback_43_Template, 2, 2, "c-form-feedback", 9);
    \u0275\u0275text(44, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, "\n\n          ");
    \u0275\u0275elementStart(46, "c-col", 5);
    \u0275\u0275text(47, "\n            ");
    \u0275\u0275element(48, "input", 12);
    \u0275\u0275text(49, "\n            ");
    \u0275\u0275elementStart(50, "label", 13);
    \u0275\u0275text(51, "Email ");
    \u0275\u0275elementStart(52, "span", 8);
    \u0275\u0275text(53, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(54, "\n            ");
    \u0275\u0275template(55, CreateMemberComponent_c_form_feedback_55_Template, 2, 2, "c-form-feedback", 9);
    \u0275\u0275text(56, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, "\n\n          ");
    \u0275\u0275elementStart(58, "c-col", 5);
    \u0275\u0275text(59, "\n            ");
    \u0275\u0275element(60, "input", 14);
    \u0275\u0275text(61, "\n            ");
    \u0275\u0275elementStart(62, "label", 15);
    \u0275\u0275text(63, "Phone Number ");
    \u0275\u0275elementStart(64, "span", 8);
    \u0275\u0275text(65, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(66, "\n            ");
    \u0275\u0275template(67, CreateMemberComponent_c_form_feedback_67_Template, 2, 2, "c-form-feedback", 9);
    \u0275\u0275text(68, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(69, "\n\n          ");
    \u0275\u0275elementStart(70, "c-col", 5);
    \u0275\u0275text(71, "\n            ");
    \u0275\u0275element(72, "input", 16);
    \u0275\u0275text(73, "\n            ");
    \u0275\u0275elementStart(74, "label", 17);
    \u0275\u0275text(75, "Alternate Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(76, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(77, "\n\n          ");
    \u0275\u0275elementStart(78, "c-col", 5);
    \u0275\u0275text(79, "\n            ");
    \u0275\u0275element(80, "input", 18);
    \u0275\u0275text(81, "\n            ");
    \u0275\u0275elementStart(82, "label", 19);
    \u0275\u0275text(83, "Alternate Email");
    \u0275\u0275elementEnd();
    \u0275\u0275text(84, "\n            ");
    \u0275\u0275template(85, CreateMemberComponent_c_form_feedback_85_Template, 2, 2, "c-form-feedback", 9);
    \u0275\u0275text(86, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(87, "\n\n          ");
    \u0275\u0275elementStart(88, "c-col", 5);
    \u0275\u0275text(89, "\n            ");
    \u0275\u0275element(90, "input", 20);
    \u0275\u0275text(91, "\n            ");
    \u0275\u0275elementStart(92, "label", 21);
    \u0275\u0275text(93, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275text(94, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(95, "\n\n          ");
    \u0275\u0275elementStart(96, "c-col", 5);
    \u0275\u0275text(97, "\n            ");
    \u0275\u0275elementStart(98, "select", 22);
    \u0275\u0275text(99, "\n              ");
    \u0275\u0275elementStart(100, "option", 23);
    \u0275\u0275text(101, "Select Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, "\n              ");
    \u0275\u0275template(103, CreateMemberComponent_option_103_Template, 2, 2, "option", 24);
    \u0275\u0275text(104, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(105, "\n            ");
    \u0275\u0275elementStart(106, "label", 25);
    \u0275\u0275text(107, "Gender ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(108, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(109, "\n\n          ");
    \u0275\u0275elementStart(110, "c-col", 5);
    \u0275\u0275text(111, "\n            ");
    \u0275\u0275elementStart(112, "select", 26);
    \u0275\u0275text(113, "\n              ");
    \u0275\u0275elementStart(114, "option", 23);
    \u0275\u0275text(115, "Select Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275text(116, "\n              ");
    \u0275\u0275template(117, CreateMemberComponent_option_117_Template, 2, 2, "option", 24);
    \u0275\u0275text(118, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(119, "\n            ");
    \u0275\u0275elementStart(120, "label", 27);
    \u0275\u0275text(121, "Nationality ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(122, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(123, "\n\n          ");
    \u0275\u0275elementStart(124, "c-col", 28);
    \u0275\u0275text(125, "\n            ");
    \u0275\u0275element(126, "textarea", 29);
    \u0275\u0275text(127, "\n            ");
    \u0275\u0275elementStart(128, "label", 30);
    \u0275\u0275text(129, "Address ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(130, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(131, "\n\n          ");
    \u0275\u0275text(132, "\n          ");
    \u0275\u0275elementStart(133, "c-col", 5);
    \u0275\u0275text(134, "\n            ");
    \u0275\u0275elementStart(135, "select", 31);
    \u0275\u0275text(136, "\n              ");
    \u0275\u0275elementStart(137, "option", 23);
    \u0275\u0275text(138, "Select Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275text(139, "\n              ");
    \u0275\u0275template(140, CreateMemberComponent_option_140_Template, 2, 2, "option", 24);
    \u0275\u0275text(141, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(142, "\n            ");
    \u0275\u0275elementStart(143, "label", 32);
    \u0275\u0275text(144, "Membership Plan ");
    \u0275\u0275elementStart(145, "span", 8);
    \u0275\u0275text(146, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(147, "\n            ");
    \u0275\u0275template(148, CreateMemberComponent_c_form_feedback_148_Template, 2, 2, "c-form-feedback", 9);
    \u0275\u0275text(149, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(150, "\n\n          ");
    \u0275\u0275elementStart(151, "c-col", 5);
    \u0275\u0275text(152, "\n            ");
    \u0275\u0275element(153, "input", 33);
    \u0275\u0275text(154, "\n            ");
    \u0275\u0275elementStart(155, "label", 34);
    \u0275\u0275text(156, "Membership Start Date ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(157, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(158, "\n\n          ");
    \u0275\u0275elementStart(159, "c-col", 5);
    \u0275\u0275text(160, "\n            ");
    \u0275\u0275element(161, "input", 35);
    \u0275\u0275text(162, "\n            ");
    \u0275\u0275elementStart(163, "label", 36);
    \u0275\u0275text(164, "Membership End Date ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(165, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(166, "\n\n          ");
    \u0275\u0275text(167, "\n          ");
    \u0275\u0275elementStart(168, "c-col", 5);
    \u0275\u0275text(169, "\n            ");
    \u0275\u0275element(170, "input", 37);
    \u0275\u0275text(171, "\n            ");
    \u0275\u0275elementStart(172, "label", 38);
    \u0275\u0275text(173, "Emergency Contact Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(174, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(175, "\n\n          ");
    \u0275\u0275elementStart(176, "c-col", 5);
    \u0275\u0275text(177, "\n            ");
    \u0275\u0275element(178, "input", 39);
    \u0275\u0275text(179, "\n            ");
    \u0275\u0275elementStart(180, "label", 40);
    \u0275\u0275text(181, "Emergency Contact Phone ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(182, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(183, "\n\n          ");
    \u0275\u0275elementStart(184, "c-col", 5);
    \u0275\u0275text(185, "\n            ");
    \u0275\u0275element(186, "input", 41);
    \u0275\u0275text(187, "\n            ");
    \u0275\u0275elementStart(188, "label", 42);
    \u0275\u0275text(189, "Emergency Contact Relation ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(190, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(191, "\n\n          ");
    \u0275\u0275text(192, "\n          ");
    \u0275\u0275elementStart(193, "c-col", 43);
    \u0275\u0275text(194, "\n            ");
    \u0275\u0275elementStart(195, "div", 44);
    \u0275\u0275text(196, "\n              ");
    \u0275\u0275elementStart(197, "label", 45);
    \u0275\u0275text(198, "Profile Photo ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(199, "\n              ");
    \u0275\u0275elementStart(200, "input", 46);
    \u0275\u0275listener("change", function CreateMemberComponent_Template_input_change_200_listener($event) {
      return ctx.onFileSelected($event, "profile");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(201, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(202, "\n            ");
    \u0275\u0275template(203, CreateMemberComponent_div_203_Template, 7, 1, "div", 47);
    \u0275\u0275text(204, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(205, "\n\n          ");
    \u0275\u0275elementStart(206, "c-col", 43);
    \u0275\u0275text(207, "\n            ");
    \u0275\u0275elementStart(208, "div", 44);
    \u0275\u0275text(209, "\n              ");
    \u0275\u0275elementStart(210, "label", 48);
    \u0275\u0275text(211, "ID Proof ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(212, "\n              ");
    \u0275\u0275elementStart(213, "input", 49);
    \u0275\u0275listener("change", function CreateMemberComponent_Template_input_change_213_listener($event) {
      return ctx.onFileSelected($event, "idProof");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(214, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(215, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(216, "\n\n          ");
    \u0275\u0275elementStart(217, "c-col", 5);
    \u0275\u0275text(218, "\n            ");
    \u0275\u0275element(219, "input", 50);
    \u0275\u0275text(220, "\n            ");
    \u0275\u0275elementStart(221, "label", 51);
    \u0275\u0275text(222, "Referred By ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(223, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(224, "\n\n          ");
    \u0275\u0275text(225, "\n          ");
    \u0275\u0275elementStart(226, "c-col", 43);
    \u0275\u0275text(227, "\n            ");
    \u0275\u0275elementStart(228, "div", 52);
    \u0275\u0275text(229, "\n              ");
    \u0275\u0275element(230, "input", 53);
    \u0275\u0275text(231, "\n              ");
    \u0275\u0275elementStart(232, "label", 54);
    \u0275\u0275text(233, "\n                Handicap\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(234, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(235, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(236, "\n\n          ");
    \u0275\u0275text(237, "\n          ");
    \u0275\u0275elementStart(238, "c-col", 55);
    \u0275\u0275text(239, "\n            ");
    \u0275\u0275elementStart(240, "button", 56);
    \u0275\u0275text(241);
    \u0275\u0275elementEnd();
    \u0275\u0275text(242, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(243, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(244, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(245, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(246, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(247, "\n");
    \u0275\u0275elementEnd();
    \u0275\u0275template(248, CreateMemberComponent_c_row_248_Template, 32, 4, "c-row", 57);
  }
  if (rf & 2) {
    let tmp_3_0;
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx.pageTitle);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.isFromEnquiry);
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.memberForm);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.isFromEnquiry && ((tmp_3_0 = ctx.memberForm.get("enquiryMessage")) == null ? null : tmp_3_0.value));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("firstName"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("lastName"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("email"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(9);
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
    \u0275\u0275property("ngForOf", ctx.countries);
    \u0275\u0275advance(7);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(9);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx.plans);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("plan"));
    \u0275\u0275advance(3);
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
    \u0275\u0275advance(19);
    \u0275\u0275property("ngIf", ctx.previewUrl);
    \u0275\u0275advance(14);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(23);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx.loading ? "Submitting..." : ctx.isFromEnquiry ? "Convert to Member" : "Submit", "\n            ");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.createdMemberCredentials);
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
var CreateMemberComponent = _CreateMemberComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateMemberComponent, { className: "CreateMemberComponent", filePath: "src\\app\\views\\members\\create-members\\create-members.component.ts", lineNumber: 50 });
})();
export {
  CreateMemberComponent
};
//# sourceMappingURL=create-members.component-PKT275W2.mjs.map
