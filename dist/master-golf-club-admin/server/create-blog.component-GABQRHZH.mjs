import './polyfills.server.mjs';
import {
  BlogService
} from "./chunk-RAXCRHVT.mjs";
import {
  Swal
} from "./chunk-LUM3LCUE.mjs";
import {
  EditorComponent,
  EditorModule
} from "./chunk-3PBELD5C.mjs";
import "./chunk-KMHHOWHO.mjs";
import "./chunk-R72VMWDM.mjs";
import "./chunk-HYNU6U63.mjs";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  DefaultValueAccessor,
  FormBuilder,
  FormControlDirective,
  FormControlName,
  FormFeedbackComponent,
  FormFloatingDirective,
  FormGroupDirective,
  FormLabelDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RowComponent,
  SpinnerComponent,
  Validators,
  ɵNgNoValidate
} from "./chunk-KHKHR2VG.mjs";
import {
  CommonModule,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-J4TCKMJW.mjs";
import {
  __async
} from "./chunk-CKH4O4N6.mjs";

// src/app/views/blog/create-blog/create-blog.component.ts
var _c0 = () => ({ plugins: "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount", toolbar: "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat" });
function CreateBlogComponent_c_form_feedback_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("blogTitle"), " ");
  }
}
function CreateBlogComponent_c_form_feedback_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("blogDate"), " ");
  }
}
function CreateBlogComponent_c_form_feedback_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("blogHighlight"), " ");
  }
}
function CreateBlogComponent_c_form_feedback_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("blogDescription"), " ");
  }
}
function CreateBlogComponent_c_form_feedback_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("blogQuote"), " ");
  }
}
function CreateBlogComponent_c_form_feedback_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("blogQuoteCreator"), " ");
  }
}
function CreateBlogComponent_c_form_feedback_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-form-feedback", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("blogImage"), " ");
  }
}
function CreateBlogComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "img", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.imagePreview, \u0275\u0275sanitizeUrl);
  }
}
function CreateBlogComponent_c_spinner_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-spinner", 28);
  }
}
var _CreateBlogComponent = class _CreateBlogComponent {
  constructor(formBuilder, blogService, router) {
    this.formBuilder = formBuilder;
    this.blogService = blogService;
    this.router = router;
    this.loading = false;
    this.submitted = false;
    this.selectedFile = null;
    this.imagePreview = null;
  }
  ngOnInit() {
    this.initializeForm();
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
  onFileChange(event) {
    const element = event.target;
    const file = element.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        Swal.fire({
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
        const response = yield this.blogService.processBlog(formData);
        if (response.data.code === 1) {
          yield Swal.fire({
            title: "Success!",
            text: "Blog post has been created successfully",
            icon: "success",
            confirmButtonText: "Ok"
          });
          this.router.navigate(["/blog"]);
        } else {
          throw new Error(response.data.message || "Failed to create blog post");
        }
      } catch (error) {
        console.error("Error creating blog:", error);
        yield Swal.fire({
          title: "Error!",
          text: error instanceof Error ? error.message : "Failed to create blog post",
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
    this.imagePreview = null;
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
_CreateBlogComponent.\u0275fac = function CreateBlogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreateBlogComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(BlogService), \u0275\u0275directiveInject(Router));
};
_CreateBlogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateBlogComponent, selectors: [["app-create-blog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 51, vars: 20, consts: [["xs", "12"], [1, "mb-4"], [1, "row", "g-3", "needs-validation", 3, "ngSubmit", "formGroup"], ["md", "6", 3, "cFormFloating"], ["cFormControl", "", "id", "blogTitle", "formControlName", "blogTitle", "type", "text", "placeholder", "Blog Title"], ["cLabel", "", "for", "blogTitle"], [3, "valid", 4, "ngIf"], ["cFormControl", "", "id", "blogDate", "formControlName", "blogDate", "type", "date", "placeholder", "Blog Date"], ["cLabel", "", "for", "blogDate"], ["md", "12", 3, "cFormFloating"], ["cFormControl", "", "id", "blogHighlight", "formControlName", "blogHighlight", "placeholder", "Highlight", "rows", "3"], ["cLabel", "", "for", "blogHighlight", 1, "ms-2"], ["md", "12"], ["cLabel", "", "for", "blogDescription"], ["apiKey", "jrj64u0e25jw0n4a9v0jbajhi9iakdkeyta9ryl58xwmqwz7", "formControlName", "blogDescription", 3, "init"], ["cFormControl", "", "id", "blogQuote", "formControlName", "blogQuote", "placeholder", "Quote (Optional)", "rows", "3"], ["cLabel", "", "for", "blogQuote", 1, "ms-2"], ["cFormControl", "", "id", "blogQuoteCreator", "formControlName", "blogQuoteCreator", "type", "text", "placeholder", "Quote Creator Name"], ["cLabel", "", "for", "blogQuoteCreator"], [1, "mb-3"], ["cLabel", "", "for", "blogImage"], ["cFormControl", "", "id", "blogImage", "type", "file", "accept", "image/*", 3, "change"], ["class", "mb-3", 4, "ngIf"], ["cButton", "", "color", "primary", "type", "submit", 1, "me-2", 3, "disabled"], ["size", "sm", "class", "me-1", 4, "ngIf"], ["cButton", "", "color", "secondary", "type", "button", 3, "click", "disabled"], [3, "valid"], ["alt", "Preview", 1, "img-thumbnail", 2, "max-width", "200px", 3, "src"], ["size", "sm", 1, "me-1"]], template: function CreateBlogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row")(1, "c-col", 0)(2, "c-card", 1)(3, "c-card-header")(4, "strong");
    \u0275\u0275text(5, "Create New Blog Post");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "c-card-body")(7, "form", 2);
    \u0275\u0275listener("ngSubmit", function CreateBlogComponent_Template_form_ngSubmit_7_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(8, "c-col", 3);
    \u0275\u0275element(9, "input", 4);
    \u0275\u0275elementStart(10, "label", 5);
    \u0275\u0275text(11, "Blog Title");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, CreateBlogComponent_c_form_feedback_12_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "c-col", 3);
    \u0275\u0275element(14, "input", 7);
    \u0275\u0275elementStart(15, "label", 8);
    \u0275\u0275text(16, "Blog Date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, CreateBlogComponent_c_form_feedback_17_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "c-col", 9);
    \u0275\u0275element(19, "textarea", 10);
    \u0275\u0275elementStart(20, "label", 11);
    \u0275\u0275text(21, "Highlight");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, CreateBlogComponent_c_form_feedback_22_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "c-col", 12)(24, "label", 13);
    \u0275\u0275text(25, "Blog Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "editor", 14);
    \u0275\u0275template(27, CreateBlogComponent_c_form_feedback_27_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "c-col", 9);
    \u0275\u0275element(29, "textarea", 15);
    \u0275\u0275elementStart(30, "label", 16);
    \u0275\u0275text(31, "Quote (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, CreateBlogComponent_c_form_feedback_32_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "c-col", 3);
    \u0275\u0275element(34, "input", 17);
    \u0275\u0275elementStart(35, "label", 18);
    \u0275\u0275text(36, "Quote Creator Name (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, CreateBlogComponent_c_form_feedback_37_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "c-col", 12)(39, "div", 19)(40, "label", 20);
    \u0275\u0275text(41, "Blog Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 21);
    \u0275\u0275listener("change", function CreateBlogComponent_Template_input_change_42_listener($event) {
      return ctx.onFileChange($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, CreateBlogComponent_c_form_feedback_43_Template, 2, 2, "c-form-feedback", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, CreateBlogComponent_div_44_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "c-col", 0)(46, "button", 23);
    \u0275\u0275template(47, CreateBlogComponent_c_spinner_47_Template, 1, 0, "c-spinner", 24);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 25);
    \u0275\u0275listener("click", function CreateBlogComponent_Template_button_click_49_listener() {
      return ctx.onReset();
    });
    \u0275\u0275text(50, " Reset Form ");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx.blogForm);
    \u0275\u0275advance();
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("blogTitle"));
    \u0275\u0275advance();
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("blogDate"));
    \u0275\u0275advance();
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("blogHighlight"));
    \u0275\u0275advance(4);
    \u0275\u0275property("init", \u0275\u0275pureFunction0(19, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("blogDescription"));
    \u0275\u0275advance();
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("blogQuote"));
    \u0275\u0275advance();
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("blogQuoteCreator"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.isFieldInvalid("blogImage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.imagePreview);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.loading || ctx.blogForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.loading ? "Saving..." : "Publish Blog", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.loading);
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
var CreateBlogComponent = _CreateBlogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateBlogComponent, { className: "CreateBlogComponent", filePath: "src\\app\\views\\blog\\create-blog\\create-blog.component.ts", lineNumber: 45 });
})();
export {
  CreateBlogComponent
};
//# sourceMappingURL=create-blog.component-GABQRHZH.mjs.map
