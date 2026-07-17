import {
  BlogService
} from "./chunk-3KRF5NP5.js";
import {
  EditorComponent,
  EditorModule
} from "./chunk-66TX5S54.js";
import {
  require_sweetalert2_all
} from "./chunk-UDKX4ISR.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-EZZDAKGS.js";
import "./chunk-EXN3ACQE.js";
import "./chunk-AE67A222.js";
import {
  ActivatedRoute,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  CommonModule,
  FormControlDirective,
  FormFeedbackComponent,
  FormFloatingDirective,
  FormLabelDirective,
  NgIf,
  Router,
  RowComponent,
  SpinnerComponent
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-WDQ2E3IC.js";
import {
  __async,
  __toESM
} from "./chunk-ZDRA4OZL.js";

// src/app/views/blog/update-blog/update-blog.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = () => ({ plugins: "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount", toolbar: "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat" });
function UpdateBlogComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "c-spinner", 5);
    \u0275\u0275elementStart(2, "p", 6);
    \u0275\u0275text(3, "Loading blog data...");
    \u0275\u0275elementEnd()();
  }
}
function UpdateBlogComponent_form_8_c_form_feedback_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("blogTitle"), " ");
  }
}
function UpdateBlogComponent_form_8_c_form_feedback_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("blogDate"), " ");
  }
}
function UpdateBlogComponent_form_8_c_form_feedback_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("blogHighlight"), " ");
  }
}
function UpdateBlogComponent_form_8_c_form_feedback_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("blogDescription"), " ");
  }
}
function UpdateBlogComponent_form_8_c_form_feedback_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("blogQuote"), " ");
  }
}
function UpdateBlogComponent_form_8_c_form_feedback_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("blogQuoteCreator"), " ");
  }
}
function UpdateBlogComponent_form_8_c_form_feedback_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("blogImage"), " ");
  }
}
function UpdateBlogComponent_form_8_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "img", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.imagePreview, \u0275\u0275sanitizeUrl);
  }
}
function UpdateBlogComponent_form_8_c_spinner_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-spinner", 33);
  }
}
function UpdateBlogComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 7);
    \u0275\u0275listener("ngSubmit", function UpdateBlogComponent_form_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "c-col", 8);
    \u0275\u0275element(2, "input", 9);
    \u0275\u0275elementStart(3, "label", 10);
    \u0275\u0275text(4, "Blog Title");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, UpdateBlogComponent_form_8_c_form_feedback_5_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "c-col", 8);
    \u0275\u0275element(7, "input", 12);
    \u0275\u0275elementStart(8, "label", 13);
    \u0275\u0275text(9, "Blog Date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, UpdateBlogComponent_form_8_c_form_feedback_10_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "c-col", 14);
    \u0275\u0275element(12, "textarea", 15);
    \u0275\u0275elementStart(13, "label", 16);
    \u0275\u0275text(14, "Highlight");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, UpdateBlogComponent_form_8_c_form_feedback_15_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "c-col", 17)(17, "label", 18);
    \u0275\u0275text(18, "Blog Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "editor", 19);
    \u0275\u0275template(20, UpdateBlogComponent_form_8_c_form_feedback_20_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "c-col", 14);
    \u0275\u0275element(22, "textarea", 20);
    \u0275\u0275elementStart(23, "label", 21);
    \u0275\u0275text(24, "Quote (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, UpdateBlogComponent_form_8_c_form_feedback_25_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "c-col", 8);
    \u0275\u0275element(27, "input", 22);
    \u0275\u0275elementStart(28, "label", 23);
    \u0275\u0275text(29, "Quote Creator Name (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, UpdateBlogComponent_form_8_c_form_feedback_30_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "c-col", 17)(32, "div", 24)(33, "label", 25);
    \u0275\u0275text(34, "Blog Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 26);
    \u0275\u0275listener("change", function UpdateBlogComponent_form_8_Template_input_change_35_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, UpdateBlogComponent_form_8_c_form_feedback_36_Template, 2, 2, "c-form-feedback", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, UpdateBlogComponent_form_8_div_37_Template, 2, 1, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "c-col", 0)(39, "button", 28);
    \u0275\u0275template(40, UpdateBlogComponent_form_8_c_spinner_40_Template, 1, 0, "c-spinner", 29);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 30);
    \u0275\u0275listener("click", function UpdateBlogComponent_form_8_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReset());
    });
    \u0275\u0275text(43, " Reset Form ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.blogForm);
    \u0275\u0275advance();
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("blogTitle"));
    \u0275\u0275advance();
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("blogDate"));
    \u0275\u0275advance();
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("blogHighlight"));
    \u0275\u0275advance(4);
    \u0275\u0275property("init", \u0275\u0275pureFunction0(19, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("blogDescription"));
    \u0275\u0275advance();
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("blogQuote"));
    \u0275\u0275advance();
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("blogQuoteCreator"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("blogImage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.imagePreview);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading || ctx_r1.blogForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Updating..." : "Update Blog", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
var _UpdateBlogComponent = class _UpdateBlogComponent {
  constructor(formBuilder, blogService, router, route) {
    this.formBuilder = formBuilder;
    this.blogService = blogService;
    this.router = router;
    this.route = route;
    this.loading = false;
    this.submitted = false;
    this.selectedFile = null;
    this.imagePreview = null;
    this.blogId = null;
    this.existingImageUrl = null;
  }
  ngOnInit() {
    this.initializeForm();
    setTimeout(() => {
      this.loadBlogData();
    }, 50);
  }
  initializeForm() {
    this.blogForm = this.formBuilder.group({
      blogTitle: ["", [Validators.required, Validators.minLength(3)]],
      blogDate: ["", [Validators.required]],
      blogDescription: ["", [Validators.required]],
      blogHighlight: [""],
      blogQuote: [""],
      blogQuoteCreator: [""],
      blogImage: [null]
    });
  }
  loadBlogData() {
    return __async(this, null, function* () {
      this.blogId = this.route.snapshot.paramMap.get("id");
      if (!this.blogId) {
        yield import_sweetalert2.default.fire({
          title: "Error!",
          text: "Blog ID is required",
          icon: "error",
          confirmButtonText: "Ok"
        });
        this.router.navigate(["/blog"]);
        return;
      }
      try {
        this.loading = true;
        const response = yield this.blogService.listBlog(this.blogId);
        if (response.data.code === 1 && response.data.data) {
          let blogData;
          if (Array.isArray(response.data.data)) {
            blogData = response.data.data[0];
          } else {
            blogData = response.data.data;
          }
          if (!blogData) {
            throw new Error("Blog not found");
          }
          console.log("Blog data received:", blogData);
          this.blogForm.setValue({
            blogTitle: blogData.blogTitle || "",
            blogDate: blogData.blogDate ? this.formatDateForInput(blogData.blogDate) : "",
            blogDescription: blogData.blogDescription || "",
            blogHighlight: blogData.blogHighlight || "",
            blogQuote: blogData.blogQuote || "",
            blogQuoteCreator: blogData.blogQuoteCreator || "",
            blogImage: null
          });
          if (blogData.blogImage) {
            this.existingImageUrl = blogData.blogImage;
            this.imagePreview = blogData.blogImage;
          }
          console.log("Form values after setValue:", this.blogForm.value);
          setTimeout(() => {
            this.blogForm.patchValue({
              blogDescription: blogData.blogDescription || ""
            });
          }, 100);
        } else {
          throw new Error("Blog not found");
        }
      } catch (error) {
        console.error("Error loading blog:", error);
        yield import_sweetalert2.default.fire({
          title: "Error!",
          text: "Failed to load blog data",
          icon: "error",
          confirmButtonText: "Ok"
        });
        this.router.navigate(["/blog"]);
      } finally {
        this.loading = false;
      }
    });
  }
  formatDateForInput(dateString) {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  }
  onFileChange(event) {
    const element = event.target;
    const file = element.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        import_sweetalert2.default.fire({
          title: "Error!",
          text: "File size should not exceed 5MB",
          icon: "error"
        });
        return;
      }
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  onSubmit() {
    return __async(this, null, function* () {
      this.submitted = true;
      if (this.blogForm.invalid) {
        Object.keys(this.blogForm.controls).forEach((key) => {
          const control = this.blogForm.get(key);
          if (control?.invalid) {
            control.markAsTouched();
          }
        });
        return;
      }
      if (!this.blogId) {
        yield import_sweetalert2.default.fire({
          title: "Error!",
          text: "Blog ID is required",
          icon: "error",
          confirmButtonText: "Ok"
        });
        return;
      }
      try {
        this.loading = true;
        const formData = new FormData();
        Object.keys(this.blogForm.value).forEach((key) => {
          if (key !== "blogImage") {
            formData.append(key, this.blogForm.value[key]);
          }
        });
        if (this.selectedFile) {
          formData.append("blogImage", this.selectedFile);
        }
        const response = yield this.blogService.processBlog(formData, this.blogId);
        if (response.data.code === 1) {
          yield import_sweetalert2.default.fire({
            title: "Success!",
            text: "Blog post has been updated successfully",
            icon: "success",
            confirmButtonText: "Ok"
          });
          this.router.navigate(["/blog"]);
        } else {
          throw new Error(response.data.message || "Failed to update blog post");
        }
      } catch (error) {
        console.error("Error updating blog:", error);
        yield import_sweetalert2.default.fire({
          title: "Error!",
          text: error instanceof Error ? error.message : "Failed to update blog post",
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
    this.blogForm.reset();
    this.selectedFile = null;
    this.imagePreview = this.existingImageUrl;
  }
  isFieldInvalid(fieldName) {
    const field = this.blogForm.get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }
  getErrorMessage(fieldName) {
    const control = this.blogForm.get(fieldName);
    if (!control || !control.errors)
      return "";
    if (control.errors["required"])
      return "This field is required";
    if (control.errors["minlength"]) {
      return `Minimum length is ${control.errors["minlength"].requiredLength} characters`;
    }
    if (control.errors["maxlength"]) {
      return `Maximum length is ${control.errors["maxlength"].requiredLength} characters`;
    }
    return "Invalid input";
  }
};
_UpdateBlogComponent.\u0275fac = function UpdateBlogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UpdateBlogComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(BlogService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
};
_UpdateBlogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdateBlogComponent, selectors: [["app-update-blog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [["xs", "12"], [1, "mb-4"], ["class", "text-center mb-3", 4, "ngIf"], ["class", "row g-3 needs-validation", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "text-center", "mb-3"], ["size", "sm"], [1, "mt-2"], [1, "row", "g-3", "needs-validation", 3, "ngSubmit", "formGroup"], ["md", "6", 3, "cFormFloating"], ["cFormControl", "", "id", "blogTitle", "formControlName", "blogTitle", "type", "text", "placeholder", "Blog Title"], ["cLabel", "", "for", "blogTitle"], [3, "valid", 4, "ngIf"], ["cFormControl", "", "id", "blogDate", "formControlName", "blogDate", "type", "date", "placeholder", "Blog Date"], ["cLabel", "", "for", "blogDate"], ["md", "12", 3, "cFormFloating"], ["cFormControl", "", "id", "blogHighlight", "formControlName", "blogHighlight", "placeholder", "Highlight", "rows", "3"], ["cLabel", "", "for", "blogHighlight", 1, "ms-2"], ["md", "12"], ["cLabel", "", "for", "blogDescription"], ["apiKey", "jrj64u0e25jw0n4a9v0jbajhi9iakdkeyta9ryl58xwmqwz7", "formControlName", "blogDescription", 3, "init"], ["cFormControl", "", "id", "blogQuote", "formControlName", "blogQuote", "placeholder", "Quote (Optional)", "rows", "3"], ["cLabel", "", "for", "blogQuote", 1, "ms-2"], ["cFormControl", "", "id", "blogQuoteCreator", "formControlName", "blogQuoteCreator", "type", "text", "placeholder", "Quote Creator Name"], ["cLabel", "", "for", "blogQuoteCreator"], [1, "mb-3"], ["cLabel", "", "for", "blogImage"], ["cFormControl", "", "id", "blogImage", "type", "file", "accept", "image/*", 3, "change"], ["class", "mb-3", 4, "ngIf"], ["cButton", "", "color", "primary", "type", "submit", 1, "me-2", 3, "disabled"], ["size", "sm", "class", "me-1", 4, "ngIf"], ["cButton", "", "color", "secondary", "type", "button", 3, "click", "disabled"], [3, "valid"], ["alt", "Preview", 1, "img-thumbnail", 2, "max-width", "200px", 3, "src"], ["size", "sm", 1, "me-1"]], template: function UpdateBlogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row")(1, "c-col", 0)(2, "c-card", 1)(3, "c-card-header")(4, "strong");
    \u0275\u0275text(5, "Update Blog Post");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "c-card-body");
    \u0275\u0275template(7, UpdateBlogComponent_div_7_Template, 4, 0, "div", 2)(8, UpdateBlogComponent_form_8_Template, 44, 20, "form", 3);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [
  NgIf,
  CommonModule,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  EditorModule,
  EditorComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  FormFloatingDirective,
  FormLabelDirective,
  FormControlDirective,
  FormFeedbackComponent,
  ButtonDirective,
  RowComponent,
  ColComponent,
  SpinnerComponent
] });
var UpdateBlogComponent = _UpdateBlogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdateBlogComponent, { className: "UpdateBlogComponent", filePath: "src\\app\\views\\blog\\update-blog\\update-blog.component.ts", lineNumber: 45 });
})();
export {
  UpdateBlogComponent
};
//# sourceMappingURL=update-blog.component-6KMMQTXK.js.map
