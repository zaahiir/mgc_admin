import {
  require_sweetalert2_all
} from "./chunk-UDKX4ISR.js";
import {
  axios_default
} from "./chunk-EXN3ACQE.js";
import {
  BaseAPIUrl,
  baseURLType
} from "./chunk-AE67A222.js";
import {
  ActivatedRoute,
  ButtonModule,
  CommonModule,
  DefaultValueAccessor,
  DomSanitizer,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  ReactiveFormsModule,
  Router,
  Validators,
  ɵNgNoValidate
} from "./chunk-DWS3B4N5.js";
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
} from "./chunk-WDQ2E3IC.js";
import {
  __async,
  __toESM
} from "./chunk-ZDRA4OZL.js";

// src/app/views/team/team.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/app/views/common-service/team/team.service.ts
var _TeamService = class _TeamService {
  constructor() {
    this.apiUrl = new BaseAPIUrl().getUrl(baseURLType);
    this.lists = this.apiUrl + "protocol/0/listing/";
    this.processing = this.apiUrl + "protocol/0/processing/";
    this.deletion = this.apiUrl + "protocol/0/deletion/";
  }
  // Protocol methods
  listProtocol(id = "0") {
    return axios_default.get(this.lists.replace("0", id));
  }
  processProtocol(data, id = "0") {
    if (data instanceof FormData) {
      return axios_default.post(this.processing.replace("0", id), data);
    }
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      const value = data[key];
      if (value !== null && value !== void 0 && value !== "") {
        formData.append(key, value);
      }
    });
    return axios_default.post(this.processing.replace("0", id), formData);
  }
  deleteProtocol(id) {
    return axios_default.get(this.deletion.replace("0", id));
  }
  getActiveProtocols() {
    return axios_default.get(this.apiUrl + "protocol/active_protocols/");
  }
  getAllProtocols() {
    return axios_default.get(this.apiUrl + "protocol/0/listing/");
  }
  // Instructor methods
  listInstructor(id = "0") {
    return axios_default.get(this.apiUrl + `instructor/${id}/listing/`);
  }
  processInstructor(data, id = "0") {
    if (data instanceof FormData) {
      return axios_default.post(this.apiUrl + `instructor/${id}/processing/`, data);
    }
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      const value = data[key];
      if (value !== null && value !== void 0 && value !== "") {
        if (key === "instructorPhoto" && value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, value);
        }
      }
    });
    return axios_default.post(this.apiUrl + `instructor/${id}/processing/`, formData);
  }
  deleteInstructor(id) {
    return axios_default.get(this.apiUrl + `instructor/${id}/deletion/`);
  }
  getActiveInstructors() {
    return axios_default.get(this.apiUrl + "instructor/active_instructors/");
  }
  getAllInstructors() {
    return axios_default.get(this.apiUrl + "instructor/0/listing/");
  }
};
_TeamService.\u0275fac = function TeamService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TeamService)();
};
_TeamService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TeamService, factory: _TeamService.\u0275fac, providedIn: "root" });
var TeamService = _TeamService;

// src/app/views/team/team.component.ts
function TeamComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 20)(2, "h5");
    \u0275\u0275element(3, "i", 21);
    \u0275\u0275text(4, " Protocol Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 22);
    \u0275\u0275text(6, "Manage the golf club protocol. You can edit the title and description below.");
    \u0275\u0275elementEnd()()();
  }
}
function TeamComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h5", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 6)(5, "p", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 24)(8, "button", 17);
    \u0275\u0275listener("click", function TeamComponent_div_18_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editProtocol(ctx_r1.protocols[0]));
    });
    \u0275\u0275element(9, "i", 25);
    \u0275\u0275text(10, " Edit Protocol ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 26);
    \u0275\u0275listener("click", function TeamComponent_div_18_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteProtocol(ctx_r1.protocols[0].id));
    });
    \u0275\u0275element(12, "i", 27);
    \u0275\u0275text(13, " Delete Protocol ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.protocols[0].protocolTitle);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.protocols[0].protocolDescription);
  }
}
function TeamComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "h5");
    \u0275\u0275element(2, "i", 29);
    \u0275\u0275text(3, " No Protocol Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 22);
    \u0275\u0275text(5, "No protocol has been created yet. Click the button below to create one.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 30);
    \u0275\u0275listener("click", function TeamComponent_div_19_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showProtocolForm());
    });
    \u0275\u0275element(7, "i", 18);
    \u0275\u0275text(8, " Create Protocol ");
    \u0275\u0275elementEnd()();
  }
}
function TeamComponent_form_20_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("protocolTitle"), " ");
  }
}
function TeamComponent_form_20_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("protocolDescription"), " ");
  }
}
function TeamComponent_form_20_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 43);
  }
}
function TeamComponent_form_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 31);
    \u0275\u0275listener("ngSubmit", function TeamComponent_form_20_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 32)(3, "div", 33)(4, "label", 34);
    \u0275\u0275text(5, "Protocol Title *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 35);
    \u0275\u0275template(7, TeamComponent_form_20_div_7_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 1)(9, "div", 32)(10, "div", 33)(11, "label", 37);
    \u0275\u0275text(12, "Protocol Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "textarea", 38);
    \u0275\u0275template(14, TeamComponent_form_20_div_14_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 1)(16, "div", 2)(17, "button", 39);
    \u0275\u0275template(18, TeamComponent_form_20_span_18_Template, 1, 0, "span", 40);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 41);
    \u0275\u0275listener("click", function TeamComponent_form_20_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelForm());
    });
    \u0275\u0275text(21, " Cancel ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.protocolForm);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("protocolTitle"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("protocolTitle"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("protocolDescription"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("protocolDescription"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Update Protocol" : "Create Protocol", " ");
  }
}
function TeamComponent_div_26_tr_17_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 56);
  }
  if (rf & 2) {
    const instructor_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", instructor_r6.instructorPhotoUrl, \u0275\u0275sanitizeUrl);
  }
}
function TeamComponent_div_26_tr_17_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275elementEnd();
  }
}
function TeamComponent_div_26_tr_17_a_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 59);
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const instructor_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", instructor_r6.facebookUrl, \u0275\u0275sanitizeUrl);
  }
}
function TeamComponent_div_26_tr_17_a_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 61);
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const instructor_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", instructor_r6.instagramUrl, \u0275\u0275sanitizeUrl);
  }
}
function TeamComponent_div_26_tr_17_a_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 63);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const instructor_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", instructor_r6.twitterUrl, \u0275\u0275sanitizeUrl);
  }
}
function TeamComponent_div_26_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275template(2, TeamComponent_div_26_tr_17_img_2_Template, 1, 1, "img", 47)(3, TeamComponent_div_26_tr_17_div_3_Template, 2, 0, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "div", 49);
    \u0275\u0275template(10, TeamComponent_div_26_tr_17_a_10_Template, 2, 1, "a", 50)(11, TeamComponent_div_26_tr_17_a_11_Template, 2, 1, "a", 51)(12, TeamComponent_div_26_tr_17_a_12_Template, 2, 1, "a", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 53);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "button", 54);
    \u0275\u0275listener("click", function TeamComponent_div_26_tr_17_Template_button_click_17_listener() {
      const instructor_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editInstructor(instructor_r6));
    });
    \u0275\u0275element(18, "i", 25);
    \u0275\u0275text(19, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 55);
    \u0275\u0275listener("click", function TeamComponent_div_26_tr_17_Template_button_click_20_listener() {
      const instructor_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteInstructor(instructor_r6.id));
    });
    \u0275\u0275element(21, "i", 27);
    \u0275\u0275text(22, " Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const instructor_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", instructor_r6.instructorPhotoUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !instructor_r6.instructorPhotoUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(instructor_r6.instructorName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(instructor_r6.instructorPosition);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", instructor_r6.facebookUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", instructor_r6.instagramUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", instructor_r6.twitterUrl);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", instructor_r6.hideStatus === 0)("bg-danger", instructor_r6.hideStatus === 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", instructor_r6.hideStatus === 0 ? "Active" : "Inactive", " ");
  }
}
function TeamComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "table", 45)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Photo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Position");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Social Media");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, TeamComponent_div_26_tr_17_Template, 23, 12, "tr", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.instructors);
  }
}
function TeamComponent_form_27_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("instructorName"), " ");
  }
}
function TeamComponent_form_27_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("instructorPosition"), " ");
  }
}
function TeamComponent_form_27_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275element(1, "img", 81);
    \u0275\u0275elementStart(2, "button", 82);
    \u0275\u0275listener("click", function TeamComponent_form_27_div_20_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeMainImage());
    });
    \u0275\u0275text(3, " Remove ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.imagePreview, \u0275\u0275sanitizeUrl);
  }
}
function TeamComponent_form_27_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 43);
  }
}
function TeamComponent_form_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 31);
    \u0275\u0275listener("ngSubmit", function TeamComponent_form_27_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 65)(3, "div", 33)(4, "label", 66);
    \u0275\u0275text(5, "Instructor Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 67);
    \u0275\u0275template(7, TeamComponent_form_27_div_7_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 65)(9, "div", 33)(10, "label", 68);
    \u0275\u0275text(11, "Position *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 69);
    \u0275\u0275template(13, TeamComponent_form_27_div_13_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 1)(15, "div", 32)(16, "div", 33)(17, "label", 70);
    \u0275\u0275text(18, "Instructor Photo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 71);
    \u0275\u0275listener("change", function TeamComponent_form_27_Template_input_change_19_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMainImageChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, TeamComponent_form_27_div_20_Template, 4, 1, "div", 72);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 1)(22, "div", 73)(23, "div", 33)(24, "label", 74);
    \u0275\u0275text(25, "Facebook URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 73)(28, "div", 33)(29, "label", 76);
    \u0275\u0275text(30, "Instagram URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 73)(33, "div", 33)(34, "label", 78);
    \u0275\u0275text(35, "Twitter/X URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 79);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 1)(38, "div", 2)(39, "button", 39);
    \u0275\u0275template(40, TeamComponent_form_27_span_40_Template, 1, 0, "span", 40);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 41);
    \u0275\u0275listener("click", function TeamComponent_form_27_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelForm());
    });
    \u0275\u0275text(43, " Cancel ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.instructorForm);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("instructorName"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("instructorName"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("instructorPosition"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("instructorPosition"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.imagePreview);
    \u0275\u0275advance(19);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Update Instructor" : "Create Instructor", " ");
  }
}
var _TeamComponent = class _TeamComponent {
  constructor(formBuilder, router, route, teamService, domSanitizer) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.route = route;
    this.teamService = teamService;
    this.domSanitizer = domSanitizer;
    this.loading = false;
    this.submitted = false;
    this.imagePreview = null;
    this.selectedFile = null;
    this.isEditMode = false;
    this.itemId = null;
    this.activeTab = "protocol";
    this.protocols = [];
    this.instructors = [];
    this.showForm = false;
  }
  ngOnInit() {
    this.initializeForms();
    this.loadData();
    this.checkEditMode();
  }
  initializeForms() {
    this.protocolForm = this.formBuilder.group({
      protocolTitle: ["", [Validators.required, Validators.maxLength(255)]],
      protocolDescription: ["", [Validators.required]],
      hideStatus: [0]
    });
    this.instructorForm = this.formBuilder.group({
      instructorName: ["", [Validators.required, Validators.maxLength(255)]],
      instructorPosition: ["", [Validators.required, Validators.maxLength(255)]],
      instructorPhoto: [null],
      facebookUrl: [""],
      instagramUrl: [""],
      twitterUrl: [""],
      hideStatus: [0]
    });
  }
  loadData() {
    return __async(this, null, function* () {
      try {
        this.loading = true;
        const protocolResponse = yield this.teamService.getAllProtocols();
        if (protocolResponse && protocolResponse.data && protocolResponse.data.status === "success") {
          this.protocols = protocolResponse.data.data || [];
        }
        const instructorResponse = yield this.teamService.getAllInstructors();
        if (instructorResponse && instructorResponse.data && instructorResponse.data.status === "success") {
          this.instructors = instructorResponse.data.data || [];
        }
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        this.loading = false;
      }
    });
  }
  checkEditMode() {
    return __async(this, null, function* () {
      this.itemId = this.route.snapshot.paramMap.get("id");
      if (this.itemId && this.itemId !== "0") {
        this.isEditMode = true;
        this.showForm = true;
        yield this.loadItemData();
      }
    });
  }
  loadItemData() {
    return __async(this, null, function* () {
      try {
        this.loading = true;
        if (this.activeTab === "protocol") {
          const response = yield this.teamService.listProtocol(this.itemId);
          if (response && response.data && response.data.status === "success" && response.data.data) {
            const protocolData = response.data.data;
            this.protocolForm.patchValue({
              protocolTitle: protocolData.protocolTitle || "",
              protocolDescription: protocolData.protocolDescription || "",
              hideStatus: protocolData.hideStatus || 0
            });
          }
        } else {
          const response = yield this.teamService.listInstructor(this.itemId);
          if (response && response.data && response.data.status === "success" && response.data.data) {
            const instructorData = response.data.data;
            this.instructorForm.patchValue({
              instructorName: instructorData.instructorName || "",
              instructorPosition: instructorData.instructorPosition || "",
              facebookUrl: instructorData.facebookUrl || "",
              instagramUrl: instructorData.instagramUrl || "",
              twitterUrl: instructorData.twitterUrl || "",
              hideStatus: instructorData.hideStatus || 0
            });
            if (instructorData.instructorPhotoUrl) {
              this.imagePreview = instructorData.instructorPhotoUrl;
            }
          }
        }
      } catch (error) {
        console.error("Error loading item data:", error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: "Error",
          text: "Failed to load data"
        });
      } finally {
        this.loading = false;
      }
    });
  }
  onMainImageChange(event) {
    const target = event.target;
    if (target.files && target.files[0]) {
      this.selectedFile = target.files[0];
      this.instructorForm.patchValue({ instructorPhoto: this.selectedFile });
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
  removeMainImage() {
    this.selectedFile = null;
    this.imagePreview = null;
    this.instructorForm.patchValue({ instructorPhoto: null });
  }
  get f() {
    return this.activeTab === "protocol" ? this.protocolForm.controls : this.instructorForm.controls;
  }
  onSubmit() {
    return __async(this, null, function* () {
      this.submitted = true;
      const currentForm = this.activeTab === "protocol" ? this.protocolForm : this.instructorForm;
      console.log("Form valid:", currentForm.valid);
      console.log("Form invalid:", currentForm.invalid);
      console.log("Form values:", currentForm.value);
      console.log("Form errors:", currentForm.errors);
      if (currentForm.invalid) {
        console.log("Form validation failed");
        return;
      }
      try {
        this.loading = true;
        const formData = new FormData();
        const formValue = currentForm.value;
        Object.keys(formValue).forEach((key) => {
          if (formValue[key] !== null && formValue[key] !== void 0) {
            formData.append(key, formValue[key]);
          }
        });
        if (this.activeTab === "instructor") {
          if (this.selectedFile) {
            formData.set("instructorPhoto", this.selectedFile);
          } else if (formValue.instructorPhoto && formValue.instructorPhoto instanceof File) {
            formData.set("instructorPhoto", formValue.instructorPhoto);
          }
        }
        console.log("FormData contents:");
        console.log("FormData object:", formData);
        console.log("Form values being sent:", formValue);
        console.log("FormData has content:", formData.has("instructorName"));
        console.log("FormData has instructorName:", formData.get("instructorName"));
        console.log("FormData has instructorPosition:", formData.get("instructorPosition"));
        console.log("FormData has instructorPhoto:", formData.get("instructorPhoto"));
        let response;
        if (this.activeTab === "protocol") {
          response = yield this.teamService.processProtocol(formData, this.itemId || "0");
        } else {
          response = yield this.teamService.processInstructor(formData, this.itemId || "0");
        }
        if (response && response.data && response.data.status === "success") {
          import_sweetalert2.default.fire({
            icon: "success",
            title: "Success",
            text: this.isEditMode ? `${this.activeTab} updated successfully!` : `${this.activeTab} created successfully!`
          }).then(() => __async(this, null, function* () {
            yield this.loadData();
            this.cancelForm();
          }));
        } else {
          throw new Error(response?.message || "Unknown error occurred");
        }
      } catch (error) {
        console.error("Error saving item:", error);
        let errorMessage = `Failed to save ${this.activeTab}`;
        if (error.response?.message) {
          errorMessage = error.response.message;
        } else if (error.message) {
          errorMessage = error.message;
        }
        import_sweetalert2.default.fire({
          icon: "error",
          title: "Error",
          text: errorMessage
        });
      } finally {
        this.loading = false;
      }
    });
  }
  isFieldInvalid(fieldName) {
    const currentForm = this.activeTab === "protocol" ? this.protocolForm : this.instructorForm;
    const field = currentForm.get(fieldName);
    return field ? this.submitted && field.invalid : false;
  }
  getErrorMessage(fieldName) {
    const currentForm = this.activeTab === "protocol" ? this.protocolForm : this.instructorForm;
    const field = currentForm.get(fieldName);
    if (field && field.errors) {
      if (field.errors["required"]) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      }
      if (field.errors["email"]) {
        return "Please enter a valid email address";
      }
      if (field.errors["maxlength"]) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is too long`;
      }
    }
    return "";
  }
  getSafeHtml(html) {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }
  setActiveTab(tab) {
    this.activeTab = tab;
    this.submitted = false;
    this.imagePreview = null;
    this.selectedFile = null;
    this.isEditMode = false;
    this.itemId = null;
    this.showForm = false;
    this.protocolForm.reset({
      hideStatus: 0
    });
    this.instructorForm.reset({
      hideStatus: 0
    });
  }
  showProtocolForm() {
    this.showForm = true;
    this.isEditMode = false;
    this.itemId = null;
    this.protocolForm.reset({
      hideStatus: 0
    });
  }
  showInstructorForm() {
    this.showForm = true;
    this.isEditMode = false;
    this.itemId = null;
    this.selectedFile = null;
    this.imagePreview = null;
    this.instructorForm.reset({
      hideStatus: 0
    });
  }
  cancelForm() {
    this.showForm = false;
    this.isEditMode = false;
    this.itemId = null;
    this.submitted = false;
    this.imagePreview = null;
    this.selectedFile = null;
  }
  editProtocol(protocol) {
    return __async(this, null, function* () {
      this.showForm = true;
      this.isEditMode = true;
      this.itemId = protocol.id.toString();
      yield this.loadItemData();
    });
  }
  editInstructor(instructor) {
    return __async(this, null, function* () {
      this.showForm = true;
      this.isEditMode = true;
      this.itemId = instructor.id.toString();
      yield this.loadItemData();
    });
  }
  deleteProtocol(id) {
    return __async(this, null, function* () {
      const result = yield import_sweetalert2.default.fire({
        icon: "warning",
        title: "Are you sure?",
        text: "This will delete the protocol. This action cannot be undone!",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
      });
      if (result.isConfirmed) {
        try {
          this.loading = true;
          const response = yield this.teamService.deleteProtocol(id.toString());
          if (response && response.data && response.data.status === "success") {
            import_sweetalert2.default.fire({
              icon: "success",
              title: "Deleted!",
              text: "Protocol has been deleted successfully."
            });
            yield this.loadData();
          } else {
            throw new Error(response?.message || "Unknown error occurred");
          }
        } catch (error) {
          console.error("Error deleting protocol:", error);
          import_sweetalert2.default.fire({
            icon: "error",
            title: "Error",
            text: "Failed to delete protocol"
          });
        } finally {
          this.loading = false;
        }
      }
    });
  }
  deleteInstructor(id) {
    return __async(this, null, function* () {
      const result = yield import_sweetalert2.default.fire({
        icon: "warning",
        title: "Are you sure?",
        text: "This action cannot be undone!",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
      });
      if (result.isConfirmed) {
        try {
          this.loading = true;
          const response = yield this.teamService.deleteInstructor(id.toString());
          if (response && response.data && response.data.status === "success") {
            import_sweetalert2.default.fire({
              icon: "success",
              title: "Deleted!",
              text: "Instructor has been deleted successfully."
            });
            yield this.loadData();
          } else {
            throw new Error(response?.message || "Unknown error occurred");
          }
        } catch (error) {
          console.error("Error deleting instructor:", error);
          import_sweetalert2.default.fire({
            icon: "error",
            title: "Error",
            text: "Failed to delete instructor"
          });
        } finally {
          this.loading = false;
        }
      }
    });
  }
};
_TeamComponent.\u0275fac = function TeamComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TeamComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(TeamService), \u0275\u0275directiveInject(DomSanitizer));
};
_TeamComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamComponent, selectors: [["app-team"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 18, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "card-body"], ["role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["type", "button", "role", "tab", 1, "nav-link", 3, "click"], [1, "tab-content"], [1, "tab-pane", "fade"], ["class", "mt-3 mb-3", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "mt-3", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "mt-3", "mb-3"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus"], ["class", "table-responsive", 4, "ngIf"], [1, "alert", "alert-info"], [1, "fas", "fa-info-circle"], [1, "mb-0"], [1, "card-text"], [1, "d-flex", "gap-2"], [1, "fas", "fa-edit"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-trash"], [1, "alert", "alert-warning"], [1, "fas", "fa-exclamation-triangle"], ["type", "button", 1, "btn", "btn-primary", "mt-2", 3, "click"], [1, "mt-3", 3, "ngSubmit", "formGroup"], [1, "col-md-12"], [1, "mb-3"], ["for", "protocolTitle", 1, "form-label"], ["type", "text", "id", "protocolTitle", "formControlName", "protocolTitle", "placeholder", "Enter protocol title", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "protocolDescription", 1, "form-label"], ["id", "protocolDescription", "formControlName", "protocolDescription", "rows", "5", "placeholder", "Enter protocol description", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", "ms-2", 3, "click"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "table-responsive"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], ["alt", "Instructor Photo", "class", "img-thumbnail", "style", "width: 50px; height: 50px; object-fit: cover;", 3, "src", 4, "ngIf"], ["class", "bg-secondary text-white rounded d-flex align-items-center justify-content-center", "style", "width: 50px; height: 50px;", 4, "ngIf"], [1, "d-flex", "gap-1"], ["target", "_blank", "class", "btn btn-sm btn-outline-primary", "title", "Facebook", 3, "href", 4, "ngIf"], ["target", "_blank", "class", "btn btn-sm btn-outline-danger", "title", "Instagram", 3, "href", 4, "ngIf"], ["target", "_blank", "class", "btn btn-sm btn-outline-info", "title", "X (Twitter)", 3, "href", 4, "ngIf"], [1, "badge"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "me-2", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], ["alt", "Instructor Photo", 1, "img-thumbnail", 2, "width", "50px", "height", "50px", "object-fit", "cover", 3, "src"], [1, "bg-secondary", "text-white", "rounded", "d-flex", "align-items-center", "justify-content-center", 2, "width", "50px", "height", "50px"], [1, "fas", "fa-user"], ["target", "_blank", "title", "Facebook", 1, "btn", "btn-sm", "btn-outline-primary", 3, "href"], [1, "fab", "fa-facebook"], ["target", "_blank", "title", "Instagram", 1, "btn", "btn-sm", "btn-outline-danger", 3, "href"], [1, "fab", "fa-instagram"], ["target", "_blank", "title", "X (Twitter)", 1, "btn", "btn-sm", "btn-outline-info", 3, "href"], [1, "fab", "fa-x-twitter"], [1, "col-md-6"], ["for", "instructorName", 1, "form-label"], ["type", "text", "id", "instructorName", "formControlName", "instructorName", "placeholder", "Enter instructor name", 1, "form-control"], ["for", "instructorPosition", 1, "form-label"], ["type", "text", "id", "instructorPosition", "formControlName", "instructorPosition", "placeholder", "Enter instructor position", 1, "form-control"], ["for", "instructorPhoto", 1, "form-label"], ["type", "file", "id", "instructorPhoto", "accept", "image/*", 1, "form-control", 3, "change"], ["class", "mt-2", 4, "ngIf"], [1, "col-md-4"], ["for", "facebookUrl", 1, "form-label"], ["type", "url", "id", "facebookUrl", "formControlName", "facebookUrl", "placeholder", "https://facebook.com/username", 1, "form-control"], ["for", "instagramUrl", 1, "form-label"], ["type", "url", "id", "instagramUrl", "formControlName", "instagramUrl", "placeholder", "https://instagram.com/username", 1, "form-control"], ["for", "twitterUrl", 1, "form-label"], ["type", "url", "id", "twitterUrl", "formControlName", "twitterUrl", "placeholder", "https://twitter.com/username", 1, "form-control"], [1, "mt-2"], ["alt", "Preview", 1, "img-thumbnail", 2, "max-width", "200px", "max-height", "200px", 3, "src"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", "ms-2", 3, "click"]], template: function TeamComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
    \u0275\u0275text(6, "Team Management");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "ul", 7)(9, "li", 8)(10, "button", 9);
    \u0275\u0275listener("click", function TeamComponent_Template_button_click_10_listener() {
      return ctx.setActiveTab("protocol");
    });
    \u0275\u0275text(11, " Protocols ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li", 8)(13, "button", 9);
    \u0275\u0275listener("click", function TeamComponent_Template_button_click_13_listener() {
      return ctx.setActiveTab("instructor");
    });
    \u0275\u0275text(14, " Instructors ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 10)(16, "div", 11);
    \u0275\u0275template(17, TeamComponent_div_17_Template, 7, 0, "div", 12)(18, TeamComponent_div_18_Template, 14, 2, "div", 13)(19, TeamComponent_div_19_Template, 9, 0, "div", 14)(20, TeamComponent_form_20_Template, 22, 10, "form", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 11)(22, "div", 16)(23, "button", 17);
    \u0275\u0275listener("click", function TeamComponent_Template_button_click_23_listener() {
      return ctx.showInstructorForm();
    });
    \u0275\u0275element(24, "i", 18);
    \u0275\u0275text(25, " Add New Instructor ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, TeamComponent_div_26_Template, 18, 1, "div", 19)(27, TeamComponent_form_27_Template, 44, 11, "form", 15);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275classProp("active", ctx.activeTab === "protocol");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx.activeTab === "instructor");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("show", ctx.activeTab === "protocol")("active", ctx.activeTab === "protocol");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.showForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.showForm && ctx.protocols.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.showForm && ctx.protocols.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showForm);
    \u0275\u0275advance();
    \u0275\u0275classProp("show", ctx.activeTab === "instructor")("active", ctx.activeTab === "instructor");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx.showForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showForm);
  }
}, dependencies: [
  NgIf,
  NgForOf,
  CommonModule,
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
var TeamComponent = _TeamComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamComponent, { className: "TeamComponent", filePath: "src\\app\\views\\team\\team.component.ts", lineNumber: 53 });
})();
export {
  TeamComponent
};
//# sourceMappingURL=team.component-G4P55NMD.js.map
