import {
  MemberEventsService
} from "./chunk-GVZNPFNS.js";
import {
  EditorComponent,
  EditorModule
} from "./chunk-NLFOX4EC.js";
import {
  require_sweetalert2_all
} from "./chunk-UDKX4ISR.js";
import "./chunk-EXN3ACQE.js";
import "./chunk-AE67A222.js";
import {
  ActivatedRoute,
  ButtonDirective,
  ButtonModule,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CheckboxControlValueAccessor,
  ColComponent,
  CommonModule,
  DefaultValueAccessor,
  DomSanitizer,
  FormBuilder,
  FormControlDirective,
  FormControlName,
  FormDirective,
  FormFeedbackComponent,
  FormFloatingDirective,
  FormGroupDirective,
  FormLabelDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
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
  ɵɵpureFunction0,
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

// src/app/views/events/create-events/create-events.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = () => ({ plugins: "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount", toolbar: "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat" });
function CreateEventsComponent_c_form_feedback_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventTitle"), "\n            ");
  }
}
function CreateEventsComponent_c_form_feedback_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventDate"), "\n            ");
  }
}
function CreateEventsComponent_c_form_feedback_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventVenue"), "\n            ");
  }
}
function CreateEventsComponent_c_form_feedback_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventEntryPrice"), "\n            ");
  }
}
function CreateEventsComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "\n              ");
    \u0275\u0275element(2, "img", 49);
    \u0275\u0275text(3, "\n              ");
    \u0275\u0275elementStart(4, "button", 50);
    \u0275\u0275listener("click", function CreateEventsComponent_div_69_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeMainImage());
    });
    \u0275\u0275text(5, "Remove");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.imagePreview, \u0275\u0275sanitizeUrl);
  }
}
function CreateEventsComponent_c_form_feedback_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventDetails"), "\n            ");
  }
}
function CreateEventsComponent_c_form_feedback_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventActivities"), "\n            ");
  }
}
function CreateEventsComponent_div_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, "\n                    ");
    \u0275\u0275element(2, "img", 52);
    \u0275\u0275text(3, "\n                    ");
    \u0275\u0275elementStart(4, "button", 53);
    \u0275\u0275listener("click", function CreateEventsComponent_div_108_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeAdditionalImage("EventActivitiesimageOne"));
    });
    \u0275\u0275text(5, "Remove");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                  ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.additionalImagePreviews["EventActivitiesimageOne"], \u0275\u0275sanitizeUrl);
  }
}
function CreateEventsComponent_div_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, "\n                    ");
    \u0275\u0275element(2, "img", 54);
    \u0275\u0275text(3, "\n                    ");
    \u0275\u0275elementStart(4, "button", 53);
    \u0275\u0275listener("click", function CreateEventsComponent_div_118_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeAdditionalImage("EventActivitiesimageTwo"));
    });
    \u0275\u0275text(5, "Remove");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                  ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.additionalImagePreviews["EventActivitiesimageTwo"], \u0275\u0275sanitizeUrl);
  }
}
function CreateEventsComponent_c_form_feedback_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventDetailOrganizer"), "\n            ");
  }
}
function CreateEventsComponent_c_form_feedback_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventEndDate"), "\n            ");
  }
}
function CreateEventsComponent_c_form_feedback_152_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventTime"), "\n            ");
  }
}
function CreateEventsComponent_c_form_feedback_162_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventEmail"), "\n            ");
  }
}
function CreateEventsComponent_c_form_feedback_172_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", ctx_r1.getErrorMessage("EventPhone"), "\n            ");
  }
}
function CreateEventsComponent_span_194_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 55);
  }
}
function CreateEventsComponent_button_206_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function CreateEventsComponent_button_206_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDelete());
    });
    \u0275\u0275text(1, "\n                Delete Event\n              ");
    \u0275\u0275elementEnd();
  }
}
var _CreateEventsComponent = class _CreateEventsComponent {
  constructor(formBuilder, router, route, memberEventsService, domSanitizer) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.route = route;
    this.memberEventsService = memberEventsService;
    this.domSanitizer = domSanitizer;
    this.loading = false;
    this.submitted = false;
    this.imagePreview = null;
    this.selectedFile = null;
    this.additionalImagePreviews = {};
    this.selectedAdditionalFiles = {};
    this.isEditMode = false;
    this.eventId = null;
    this.hasExistingData = false;
  }
  ngOnInit() {
    this.initializeForm();
    this.checkEditMode();
  }
  initializeForm() {
    this.eventForm = this.formBuilder.group({
      EventTitle: ["", [Validators.required, Validators.maxLength(255)]],
      EventDate: ["", [Validators.required]],
      EventVenue: ["", [Validators.required, Validators.maxLength(255)]],
      EventEntryPrice: ["", [Validators.required, Validators.maxLength(50)]],
      EventImage: [null],
      EventDetails: ["", [Validators.required]],
      EventActivities: ["", [Validators.required]],
      EventActivitiesimageOne: [null],
      EventActivitiesimageTwo: [null],
      EventDetailOrganizer: ["", [Validators.required, Validators.maxLength(255)]],
      EventEndDate: ["", [Validators.required]],
      EventTime: ["", [Validators.required, Validators.maxLength(50)]],
      EventEmail: ["", [Validators.required, Validators.email]],
      EventPhone: ["", [Validators.required, Validators.maxLength(50)]],
      is_active: [true],
      hideStatus: [0]
    });
  }
  checkEditMode() {
    return __async(this, null, function* () {
      this.eventId = this.route.snapshot.paramMap.get("id");
      if (this.eventId && this.eventId !== "0") {
        this.isEditMode = true;
        yield this.loadEventData();
      }
    });
  }
  loadEventData() {
    return __async(this, null, function* () {
      try {
        this.loading = true;
        const response = yield this.memberEventsService.listEvent(this.eventId);
        if (response.data?.status === "success" && response.data?.data) {
          const eventData = response.data.data;
          this.hasExistingData = true;
          this.eventForm.patchValue({
            EventTitle: eventData.EventTitle || "",
            EventDate: eventData.EventDate || "",
            EventVenue: eventData.EventVenue || "",
            EventEntryPrice: eventData.EventEntryPrice || "",
            EventDetails: eventData.EventDetails || "",
            EventActivities: eventData.EventActivities || "",
            EventDetailOrganizer: eventData.EventDetailOrganizer || "",
            EventEndDate: eventData.EventEndDate || "",
            EventTime: eventData.EventTime || "",
            EventEmail: eventData.EventEmail || "",
            EventPhone: eventData.EventPhone || "",
            is_active: eventData.is_active !== void 0 ? eventData.is_active : true,
            hideStatus: eventData.hideStatus || 0
          });
          if (eventData.EventImageUrl) {
            this.imagePreview = eventData.EventImageUrl;
          }
          if (eventData.EventActivitiesImages) {
            eventData.EventActivitiesImages.forEach((url, index) => {
              this.additionalImagePreviews[`EventActivitiesimage${index === 0 ? "One" : "Two"}`] = url;
            });
          }
        }
      } catch (error) {
        console.error("Error loading event data:", error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: "Error",
          text: "Failed to load event data"
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
      this.eventForm.patchValue({ EventImage: this.selectedFile });
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
  onAdditionalImageChange(event, imageField) {
    const target = event.target;
    if (target.files && target.files[0]) {
      this.selectedAdditionalFiles[imageField] = target.files[0];
      this.eventForm.patchValue({ [imageField]: target.files[0] });
      const reader = new FileReader();
      reader.onload = (e) => {
        this.additionalImagePreviews[imageField] = e.target?.result;
      };
      reader.readAsDataURL(target.files[0]);
    }
  }
  removeMainImage() {
    this.selectedFile = null;
    this.imagePreview = null;
    this.eventForm.patchValue({ EventImage: null });
  }
  removeAdditionalImage(imageField) {
    this.selectedAdditionalFiles[imageField] = null;
    this.additionalImagePreviews[imageField] = null;
    this.eventForm.patchValue({ [imageField]: null });
  }
  get f() {
    return this.eventForm.controls;
  }
  onSubmit() {
    return __async(this, null, function* () {
      this.submitted = true;
      if (this.eventForm.invalid) {
        return;
      }
      try {
        this.loading = true;
        const formData = new FormData();
        const formValue = this.eventForm.value;
        Object.keys(formValue).forEach((key) => {
          if (key === "is_active") {
            formData.append(key, formValue[key] ? "true" : "false");
          } else if (formValue[key] !== null && formValue[key] !== void 0 && formValue[key] !== "") {
            formData.append(key, formValue[key]);
          }
        });
        if (this.selectedFile) {
          formData.append("EventImage", this.selectedFile);
        }
        Object.keys(this.selectedAdditionalFiles).forEach((imageField) => {
          const file = this.selectedAdditionalFiles[imageField];
          if (file) {
            formData.append(imageField, file);
          }
        });
        const response = yield this.memberEventsService.processEvent(formData, this.eventId || "0");
        if (response.data?.status === "success") {
          import_sweetalert2.default.fire({
            icon: "success",
            title: "Success",
            text: this.isEditMode ? "Event updated successfully!" : "Event created successfully!"
          }).then(() => {
            this.router.navigate(["/events"]);
          });
        } else {
          throw new Error(response.data?.message || "Unknown error occurred");
        }
      } catch (error) {
        console.error("Error saving event:", error);
        let errorMessage = "Failed to save event";
        if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
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
  onDelete() {
    return __async(this, null, function* () {
      if (!this.eventId || this.eventId === "0") {
        return;
      }
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
          const response = yield this.memberEventsService.deleteEvent(this.eventId);
          if (response.data?.status === "success") {
            import_sweetalert2.default.fire({
              icon: "success",
              title: "Deleted!",
              text: "Event has been deleted successfully."
            }).then(() => {
              this.router.navigate(["/member-events"]);
            });
          } else {
            throw new Error(response.data?.message || "Unknown error occurred");
          }
        } catch (error) {
          console.error("Error deleting event:", error);
          import_sweetalert2.default.fire({
            icon: "error",
            title: "Error",
            text: "Failed to delete event"
          });
        } finally {
          this.loading = false;
        }
      }
    });
  }
  onReset() {
    this.submitted = false;
    this.imagePreview = null;
    this.selectedFile = null;
    this.additionalImagePreviews = {};
    this.selectedAdditionalFiles = {};
    this.eventForm.reset({
      is_active: true,
      hideStatus: 0
    });
  }
  isFieldInvalid(fieldName) {
    const field = this.eventForm.get(fieldName);
    return field ? this.submitted && field.invalid : false;
  }
  getErrorMessage(fieldName) {
    const field = this.eventForm.get(fieldName);
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
  navigateToEvents() {
    this.router.navigate(["/events"]);
  }
};
_CreateEventsComponent.\u0275fac = function CreateEventsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreateEventsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MemberEventsService), \u0275\u0275directiveInject(DomSanitizer));
};
_CreateEventsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateEventsComponent, selectors: [["app-create-member-events"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 214, vars: 33, consts: [["form", "ngForm"], ["xs", "12"], [1, "mb-4"], ["cForm", "", 1, "row", "g-3", "needs-validation", 3, "ngSubmit", "formGroup"], ["md", "6", 3, "cFormFloating"], ["cFormControl", "", "id", "EventTitle", "formControlName", "EventTitle", "type", "text", "placeholder", "Event Title"], ["cLabel", "", "for", "EventTitle", 1, "ms-2"], [3, "valid", 4, "ngIf"], ["cFormControl", "", "id", "EventDate", "formControlName", "EventDate", "type", "date", "placeholder", "Event Date"], ["cLabel", "", "for", "EventDate", 1, "ms-2"], ["cFormControl", "", "id", "EventVenue", "formControlName", "EventVenue", "type", "text", "placeholder", "Event Venue"], ["cLabel", "", "for", "EventVenue", 1, "ms-2"], ["cFormControl", "", "id", "EventEntryPrice", "formControlName", "EventEntryPrice", "type", "text", "placeholder", "Event Entry Price (e.g., '$60')"], ["cLabel", "", "for", "EventEntryPrice", 1, "ms-2"], ["md", "12"], ["cLabel", "", "for", "EventImage", 1, "form-label"], [1, "mb-3"], ["cFormControl", "", "id", "EventImage", "type", "file", "accept", "image/*", 1, "form-control", 3, "change"], ["class", "mb-3", 4, "ngIf"], ["cLabel", "", "for", "EventDetails", 1, "form-label"], ["apiKey", "jrj64u0e25jw0n4a9v0jbajhi9iakdkeyta9ryl58xwmqwz7", "formControlName", "EventDetails", 3, "init"], ["cLabel", "", "for", "EventActivities", 1, "form-label"], ["apiKey", "jrj64u0e25jw0n4a9v0jbajhi9iakdkeyta9ryl58xwmqwz7", "formControlName", "EventActivities", 3, "init"], ["cLabel", "", 1, "form-label"], [1, "row"], ["md", "6"], ["cFormControl", "", "id", "EventActivitiesimageOne", "type", "file", "accept", "image/*", 1, "form-control", 3, "change"], ["class", "mt-2", 4, "ngIf"], ["cFormControl", "", "id", "EventActivitiesimageTwo", "type", "file", "accept", "image/*", 1, "form-control", 3, "change"], ["cFormControl", "", "id", "EventDetailOrganizer", "formControlName", "EventDetailOrganizer", "type", "text", "placeholder", "Event Organizer"], ["cLabel", "", "for", "EventDetailOrganizer", 1, "ms-2"], ["cFormControl", "", "id", "EventEndDate", "formControlName", "EventEndDate", "type", "date"], ["cLabel", "", "for", "EventEndDate", 1, "ms-2"], ["cFormControl", "", "id", "EventTime", "formControlName", "EventTime", "type", "time", "placeholder", "Event Time"], ["cLabel", "", "for", "EventTime", 1, "ms-2"], ["cFormControl", "", "id", "EventEmail", "formControlName", "EventEmail", "type", "email", "placeholder", "Contact Email"], ["cLabel", "", "for", "EventEmail", 1, "ms-2"], ["cFormControl", "", "id", "EventPhone", "formControlName", "EventPhone", "type", "text", "placeholder", "Contact Phone"], ["cLabel", "", "for", "EventPhone", 1, "ms-2"], [1, "form-check"], ["cFormControl", "", "id", "is_active", "formControlName", "is_active", "type", "checkbox", 1, "form-check-input"], ["cLabel", "", "for", "is_active", 1, "form-check-label"], ["xs", "12", 1, "d-flex", "justify-content-between"], ["type", "submit", "cButton", "", "color", "primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["type", "button", "cButton", "", "color", "secondary", 1, "ms-2", 3, "click"], ["type", "button", "cButton", "", "color", "info", 3, "click"], ["type", "button", "cButton", "", "color", "danger", "class", "ms-2", 3, "click", 4, "ngIf"], [3, "valid"], ["alt", "Main Image Preview", 1, "img-thumbnail", 2, "max-width", "200px", "max-height", "200px", 3, "src"], ["type", "button", "cButton", "", "color", "danger", "size", "sm", 1, "ms-2", 3, "click"], [1, "mt-2"], ["alt", "Activities Image 1 Preview", 1, "img-thumbnail", 2, "max-width", "150px", "max-height", "150px", 3, "src"], ["type", "button", "cButton", "", "color", "danger", "size", "sm", 1, "ms-1", 3, "click"], ["alt", "Activities Image 2 Preview", 1, "img-thumbnail", 2, "max-width", "150px", "max-height", "150px", 3, "src"], [1, "spinner-border", "spinner-border-sm", "me-2"], ["type", "button", "cButton", "", "color", "danger", 1, "ms-2", 3, "click"]], template: function CreateEventsComponent_Template(rf, ctx) {
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
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n      ");
    \u0275\u0275elementStart(12, "c-card-body");
    \u0275\u0275text(13, "\n        ");
    \u0275\u0275elementStart(14, "form", 3, 0);
    \u0275\u0275listener("ngSubmit", function CreateEventsComponent_Template_form_ngSubmit_14_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSubmit());
    });
    \u0275\u0275text(16, "\n          \n          ");
    \u0275\u0275text(17, "\n          ");
    \u0275\u0275elementStart(18, "c-col", 4);
    \u0275\u0275text(19, "\n            ");
    \u0275\u0275element(20, "input", 5);
    \u0275\u0275text(21, "\n            ");
    \u0275\u0275elementStart(22, "label", 6);
    \u0275\u0275text(23, "Event Title *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n            ");
    \u0275\u0275template(25, CreateEventsComponent_c_form_feedback_25_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(26, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, "\n\n          ");
    \u0275\u0275elementStart(28, "c-col", 4);
    \u0275\u0275text(29, "\n            ");
    \u0275\u0275element(30, "input", 8);
    \u0275\u0275text(31, "\n            ");
    \u0275\u0275elementStart(32, "label", 9);
    \u0275\u0275text(33, "Event Date *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, "\n            ");
    \u0275\u0275template(35, CreateEventsComponent_c_form_feedback_35_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(36, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, "\n\n          ");
    \u0275\u0275elementStart(38, "c-col", 4);
    \u0275\u0275text(39, "\n            ");
    \u0275\u0275element(40, "input", 10);
    \u0275\u0275text(41, "\n            ");
    \u0275\u0275elementStart(42, "label", 11);
    \u0275\u0275text(43, "Event Venue *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, "\n            ");
    \u0275\u0275template(45, CreateEventsComponent_c_form_feedback_45_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(46, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, "\n\n          ");
    \u0275\u0275elementStart(48, "c-col", 4);
    \u0275\u0275text(49, "\n            ");
    \u0275\u0275element(50, "input", 12);
    \u0275\u0275text(51, "\n            ");
    \u0275\u0275elementStart(52, "label", 13);
    \u0275\u0275text(53, "Event Entry Price *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, "\n            ");
    \u0275\u0275template(55, CreateEventsComponent_c_form_feedback_55_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(56, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, "\n\n          ");
    \u0275\u0275text(58, "\n          ");
    \u0275\u0275elementStart(59, "c-col", 14);
    \u0275\u0275text(60, "\n            ");
    \u0275\u0275elementStart(61, "label", 15);
    \u0275\u0275text(62, "Main Event Image *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, "\n            ");
    \u0275\u0275elementStart(64, "div", 16);
    \u0275\u0275text(65, "\n              ");
    \u0275\u0275elementStart(66, "input", 17);
    \u0275\u0275listener("change", function CreateEventsComponent_Template_input_change_66_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onMainImageChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, "\n            ");
    \u0275\u0275template(69, CreateEventsComponent_div_69_Template, 7, 1, "div", 18);
    \u0275\u0275text(70, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, "\n\n          ");
    \u0275\u0275text(72, "\n          ");
    \u0275\u0275elementStart(73, "c-col", 14);
    \u0275\u0275text(74, "\n            ");
    \u0275\u0275elementStart(75, "label", 19);
    \u0275\u0275text(76, "Event Details *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(77, "\n            ");
    \u0275\u0275element(78, "editor", 20);
    \u0275\u0275text(79, "\n            ");
    \u0275\u0275template(80, CreateEventsComponent_c_form_feedback_80_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(81, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(82, "\n\n\n\n          ");
    \u0275\u0275text(83, "\n          ");
    \u0275\u0275elementStart(84, "c-col", 14);
    \u0275\u0275text(85, "\n            ");
    \u0275\u0275elementStart(86, "label", 21);
    \u0275\u0275text(87, "Event Activities *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, "\n            ");
    \u0275\u0275element(89, "editor", 22);
    \u0275\u0275text(90, "\n            ");
    \u0275\u0275template(91, CreateEventsComponent_c_form_feedback_91_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(92, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(93, "\n\n          ");
    \u0275\u0275text(94, "\n          ");
    \u0275\u0275elementStart(95, "c-col", 14);
    \u0275\u0275text(96, "\n            ");
    \u0275\u0275elementStart(97, "label", 23);
    \u0275\u0275text(98, "Event Activities Images");
    \u0275\u0275elementEnd();
    \u0275\u0275text(99, "\n            ");
    \u0275\u0275elementStart(100, "div", 24);
    \u0275\u0275text(101, "\n              ");
    \u0275\u0275elementStart(102, "c-col", 25);
    \u0275\u0275text(103, "\n                ");
    \u0275\u0275elementStart(104, "div", 16);
    \u0275\u0275text(105, "\n                  ");
    \u0275\u0275elementStart(106, "input", 26);
    \u0275\u0275listener("change", function CreateEventsComponent_Template_input_change_106_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onAdditionalImageChange($event, "EventActivitiesimageOne"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(107, "\n                  ");
    \u0275\u0275template(108, CreateEventsComponent_div_108_Template, 7, 1, "div", 27);
    \u0275\u0275text(109, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(110, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(111, "\n              ");
    \u0275\u0275elementStart(112, "c-col", 25);
    \u0275\u0275text(113, "\n                ");
    \u0275\u0275elementStart(114, "div", 16);
    \u0275\u0275text(115, "\n                  ");
    \u0275\u0275elementStart(116, "input", 28);
    \u0275\u0275listener("change", function CreateEventsComponent_Template_input_change_116_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onAdditionalImageChange($event, "EventActivitiesimageTwo"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(117, "\n                  ");
    \u0275\u0275template(118, CreateEventsComponent_div_118_Template, 7, 1, "div", 27);
    \u0275\u0275text(119, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(120, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(121, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(122, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(123, "\n\n          ");
    \u0275\u0275text(124, "\n          ");
    \u0275\u0275elementStart(125, "c-col", 4);
    \u0275\u0275text(126, "\n            ");
    \u0275\u0275element(127, "input", 29);
    \u0275\u0275text(128, "\n            ");
    \u0275\u0275elementStart(129, "label", 30);
    \u0275\u0275text(130, "Event Organizer *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(131, "\n            ");
    \u0275\u0275template(132, CreateEventsComponent_c_form_feedback_132_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(133, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(134, "\n\n          ");
    \u0275\u0275elementStart(135, "c-col", 4);
    \u0275\u0275text(136, "\n            ");
    \u0275\u0275element(137, "input", 31);
    \u0275\u0275text(138, "\n            ");
    \u0275\u0275elementStart(139, "label", 32);
    \u0275\u0275text(140, "Event End Date *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(141, "\n            ");
    \u0275\u0275template(142, CreateEventsComponent_c_form_feedback_142_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(143, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(144, "\n\n          ");
    \u0275\u0275elementStart(145, "c-col", 4);
    \u0275\u0275text(146, "\n            ");
    \u0275\u0275element(147, "input", 33);
    \u0275\u0275text(148, "\n            ");
    \u0275\u0275elementStart(149, "label", 34);
    \u0275\u0275text(150, "Event Time *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(151, "\n            ");
    \u0275\u0275template(152, CreateEventsComponent_c_form_feedback_152_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(153, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(154, "\n\n          ");
    \u0275\u0275elementStart(155, "c-col", 4);
    \u0275\u0275text(156, "\n            ");
    \u0275\u0275element(157, "input", 35);
    \u0275\u0275text(158, "\n            ");
    \u0275\u0275elementStart(159, "label", 36);
    \u0275\u0275text(160, "Contact Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(161, "\n            ");
    \u0275\u0275template(162, CreateEventsComponent_c_form_feedback_162_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(163, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(164, "\n\n          ");
    \u0275\u0275elementStart(165, "c-col", 4);
    \u0275\u0275text(166, "\n            ");
    \u0275\u0275element(167, "input", 37);
    \u0275\u0275text(168, "\n            ");
    \u0275\u0275elementStart(169, "label", 38);
    \u0275\u0275text(170, "Contact Phone *");
    \u0275\u0275elementEnd();
    \u0275\u0275text(171, "\n            ");
    \u0275\u0275template(172, CreateEventsComponent_c_form_feedback_172_Template, 2, 2, "c-form-feedback", 7);
    \u0275\u0275text(173, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(174, "\n\n          ");
    \u0275\u0275text(175, "\n          ");
    \u0275\u0275elementStart(176, "c-col", 25);
    \u0275\u0275text(177, "\n            ");
    \u0275\u0275elementStart(178, "div", 39);
    \u0275\u0275text(179, "\n              ");
    \u0275\u0275element(180, "input", 40);
    \u0275\u0275text(181, "\n              ");
    \u0275\u0275elementStart(182, "label", 41);
    \u0275\u0275text(183, "\n                Event is active/visible\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(184, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(185, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(186, "\n\n          ");
    \u0275\u0275text(187, "\n          ");
    \u0275\u0275elementStart(188, "c-col", 42);
    \u0275\u0275text(189, "\n            ");
    \u0275\u0275elementStart(190, "div");
    \u0275\u0275text(191, "\n              ");
    \u0275\u0275elementStart(192, "button", 43);
    \u0275\u0275text(193, "\n                ");
    \u0275\u0275template(194, CreateEventsComponent_span_194_Template, 1, 0, "span", 44);
    \u0275\u0275text(195);
    \u0275\u0275elementEnd();
    \u0275\u0275text(196, "\n              ");
    \u0275\u0275elementStart(197, "button", 45);
    \u0275\u0275listener("click", function CreateEventsComponent_Template_button_click_197_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onReset());
    });
    \u0275\u0275text(198, "\n                Reset\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(199, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(200, "\n            ");
    \u0275\u0275elementStart(201, "div");
    \u0275\u0275text(202, "\n              ");
    \u0275\u0275elementStart(203, "button", 46);
    \u0275\u0275listener("click", function CreateEventsComponent_Template_button_click_203_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.navigateToEvents());
    });
    \u0275\u0275text(204, "\n                Back to Events\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(205, "\n              ");
    \u0275\u0275template(206, CreateEventsComponent_button_206_Template, 2, 0, "button", 47);
    \u0275\u0275text(207, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(208, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(209, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(210, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(211, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(212, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(213, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Member Event" : "New Member Event");
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.eventForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("EventTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("EventDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("EventVenue"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("EventEntryPrice"));
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", ctx.imagePreview);
    \u0275\u0275advance(9);
    \u0275\u0275property("init", \u0275\u0275pureFunction0(31, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("EventDetails"));
    \u0275\u0275advance(9);
    \u0275\u0275property("init", \u0275\u0275pureFunction0(32, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("EventActivities"));
    \u0275\u0275advance(17);
    \u0275\u0275property("ngIf", ctx.additionalImagePreviews["EventActivitiesimageOne"]);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx.additionalImagePreviews["EventActivitiesimageTwo"]);
    \u0275\u0275advance(7);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("EventDetailOrganizer"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("EventEndDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("EventTime"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("EventEmail"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("EventPhone"));
    \u0275\u0275advance(20);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", ctx.isEditMode ? "Update Event" : "Create Event", "\n              ");
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx.isEditMode);
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
  CheckboxControlValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  FormsModule,
  FormDirective,
  FormLabelDirective,
  FormControlDirective,
  FormFeedbackComponent,
  ButtonDirective,
  ButtonModule,
  EditorModule,
  EditorComponent
] });
var CreateEventsComponent = _CreateEventsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateEventsComponent, { className: "CreateEventsComponent", filePath: "src\\app\\views\\events\\create-events\\create-events.component.ts", lineNumber: 82 });
})();
export {
  CreateEventsComponent
};
//# sourceMappingURL=create-events.component-S4INEOPG.js.map
