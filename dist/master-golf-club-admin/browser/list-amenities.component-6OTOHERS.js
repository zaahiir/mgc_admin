import {
  AmenitiesService
} from "./chunk-62QFIL4R.js";
import {
  require_sweetalert2_all
} from "./chunk-UDKX4ISR.js";
import {
  cilPen,
  cilTrash
} from "./chunk-3OTSM4RC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-EZZDAKGS.js";
import "./chunk-EXN3ACQE.js";
import "./chunk-AE67A222.js";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  CommonModule,
  DomSanitizer,
  FormControlDirective,
  FormDirective,
  IconDirective,
  NgClass,
  NgForOf,
  NgIf,
  PageItemComponent,
  PageLinkDirective,
  PaginationComponent,
  RouterLink,
  RowComponent,
  TableDirective,
  TooltipDirective
} from "./chunk-KEGAS2QG.js";
import {
  SecurityContext,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WDQ2E3IC.js";
import {
  __async,
  __toESM
} from "./chunk-ZDRA4OZL.js";

// src/app/views/amenities/list-amenities/list-amenities.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = () => ["/amenities/add"];
var _c1 = (a0) => ["/amenities/update", a0];
var _c2 = (a0) => ["amenity-icon-svg", a0];
var _c3 = (a0) => ["amenity-icon-img", a0];
var _c4 = (a0) => ["amenity-icon-placeholder", a0];
function ListAmenitiesComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "\n          ");
    \u0275\u0275elementStart(2, "div", 16);
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5, "Loading...");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementEnd();
  }
}
function ListAmenitiesComponent_table_25_tr_28_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\n                    ");
    \u0275\u0275elementStart(2, "div", 28);
    \u0275\u0275text(3, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n                  ");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const safeIcon_r2 = ctx.ngIf;
    const amenity_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", safeIcon_r2, \u0275\u0275sanitizeHtml)("title", amenity_r3.tooltip || amenity_r3.amenityTooltip || amenity_r3.title || amenity_r3.amenityName);
  }
}
function ListAmenitiesComponent_table_25_tr_28_ng_template_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\n                       ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 29);
    \u0275\u0275text(3, "\n                         ");
    \u0275\u0275element(4, "path", 30);
    \u0275\u0275text(5, "\n                       ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                     ");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const amenity_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c2, ctx_r3.getIconSizeClass(amenity_r3)))("title", amenity_r3.tooltip || amenity_r3.amenityTooltip || amenity_r3.title || amenity_r3.amenityName);
    \u0275\u0275attribute("width", ctx_r3.getIconWidth(amenity_r3))("height", ctx_r3.getIconHeight(amenity_r3))("viewBox", ctx_r3.getViewBox(amenity_r3));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", ctx_r3.getIconPath(amenity_r3));
  }
}
function ListAmenitiesComponent_table_25_tr_28_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                     ");
    \u0275\u0275template(1, ListAmenitiesComponent_table_25_tr_28_ng_template_14_ng_container_1_Template, 7, 8, "ng-container", 23);
    \u0275\u0275text(2, "\n                   ");
  }
  if (rf & 2) {
    const amenity_r3 = \u0275\u0275nextContext().$implicit;
    const tryImageIcon_r5 = \u0275\u0275reference(19);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getIconPath(amenity_r3))("ngIfElse", tryImageIcon_r5);
  }
}
function ListAmenitiesComponent_table_25_tr_28_ng_template_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\n                       ");
    \u0275\u0275elementStart(2, "img", 31);
    \u0275\u0275listener("error", function ListAmenitiesComponent_table_25_tr_28_ng_template_18_ng_container_1_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const amenity_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onImageError($event, amenity_r3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n                     ");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const amenity_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r3.getIconWidth(amenity_r3), "px")("height", ctx_r3.getIconHeight(amenity_r3), "px");
    \u0275\u0275property("src", amenity_r3.icon || amenity_r3.amenity_icon_url, \u0275\u0275sanitizeUrl)("alt", amenity_r3.title || amenity_r3.amenityName)("title", amenity_r3.tooltip || amenity_r3.amenityTooltip || amenity_r3.title || amenity_r3.amenityName)("ngClass", \u0275\u0275pureFunction1(8, _c3, ctx_r3.getIconSizeClass(amenity_r3)));
  }
}
function ListAmenitiesComponent_table_25_tr_28_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                     ");
    \u0275\u0275template(1, ListAmenitiesComponent_table_25_tr_28_ng_template_18_ng_container_1_Template, 4, 10, "ng-container", 23);
    \u0275\u0275text(2, "\n                   ");
  }
  if (rf & 2) {
    const amenity_r3 = \u0275\u0275nextContext().$implicit;
    const tryFallbackIcon_r7 = \u0275\u0275reference(23);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", amenity_r3.icon || amenity_r3.amenity_icon_url)("ngIfElse", tryFallbackIcon_r7);
  }
}
function ListAmenitiesComponent_table_25_tr_28_ng_template_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\n                       ");
    \u0275\u0275element(2, "i", 32);
    \u0275\u0275text(3, "\n                     ");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const amenity_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("fas amenity-icon-font " + (amenity_r3.amenityIcon || amenity_r3.icon_file) + " " + ctx_r3.getIconSizeClass(amenity_r3));
    \u0275\u0275styleProp("font-size", ctx_r3.getIconSize(amenity_r3) * 0.625, "px");
    \u0275\u0275property("title", amenity_r3.tooltip || amenity_r3.amenityTooltip || amenity_r3.title || amenity_r3.amenityName);
  }
}
function ListAmenitiesComponent_table_25_tr_28_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                     ");
    \u0275\u0275template(1, ListAmenitiesComponent_table_25_tr_28_ng_template_22_ng_container_1_Template, 4, 5, "ng-container", 23);
    \u0275\u0275text(2, "\n                   ");
  }
  if (rf & 2) {
    const amenity_r3 = \u0275\u0275nextContext().$implicit;
    const noIcon_r8 = \u0275\u0275reference(27);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", amenity_r3.amenityIcon || amenity_r3.icon_file)("ngIfElse", noIcon_r8);
  }
}
function ListAmenitiesComponent_table_25_tr_28_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                     ");
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275text(2, "\n                       ");
    \u0275\u0275element(3, "i", 33);
    \u0275\u0275text(4, "\n                     ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                   ");
  }
  if (rf & 2) {
    const amenity_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r3.getIconWidth(amenity_r3), "px")("height", ctx_r3.getIconHeight(amenity_r3), "px");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c4, ctx_r3.getIconSizeClass(amenity_r3)))("title", amenity_r3.tooltip || amenity_r3.amenityTooltip || amenity_r3.title || amenity_r3.amenityName);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("font-size", ctx_r3.getIconSize(amenity_r3) * 0.5, "px");
  }
}
function ListAmenitiesComponent_table_25_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275text(1, "\n              ");
    \u0275\u0275elementStart(2, "td");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n                             ");
    \u0275\u0275elementStart(5, "td", 15);
    \u0275\u0275text(6, "\n                 ");
    \u0275\u0275text(7, "\n                 ");
    \u0275\u0275elementStart(8, "div", 22);
    \u0275\u0275text(9, "\n                  ");
    \u0275\u0275text(10, "\n                  ");
    \u0275\u0275template(11, ListAmenitiesComponent_table_25_tr_28_ng_container_11_Template, 5, 2, "ng-container", 23);
    \u0275\u0275text(12, "\n\n                                     ");
    \u0275\u0275text(13, "\n                   ");
    \u0275\u0275template(14, ListAmenitiesComponent_table_25_tr_28_ng_template_14_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275text(16, "\n\n                                     ");
    \u0275\u0275text(17, "\n                   ");
    \u0275\u0275template(18, ListAmenitiesComponent_table_25_tr_28_ng_template_18_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275text(20, "\n\n                   ");
    \u0275\u0275text(21, "\n                   ");
    \u0275\u0275template(22, ListAmenitiesComponent_table_25_tr_28_ng_template_22_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275text(24, "\n\n                   ");
    \u0275\u0275text(25, "\n                   ");
    \u0275\u0275template(26, ListAmenitiesComponent_table_25_tr_28_ng_template_26_Template, 6, 10, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275text(28, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, "\n              ");
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, "\n              ");
    \u0275\u0275elementStart(34, "td");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, "\n              ");
    \u0275\u0275elementStart(37, "td");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, "\n              ");
    \u0275\u0275elementStart(40, "td");
    \u0275\u0275text(41, "\n                ");
    \u0275\u0275elementStart(42, "a", 24);
    \u0275\u0275text(43, "\n                  ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(44, "svg", 25);
    \u0275\u0275text(45, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, "\n                ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(47, "a", 26);
    \u0275\u0275listener("click", function ListAmenitiesComponent_table_25_tr_28_Template_a_click_47_listener() {
      const amenity_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteAmenity(amenity_r3.id));
    });
    \u0275\u0275text(48, "\n                  ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(49, "svg", 27);
    \u0275\u0275text(50, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const amenity_r3 = ctx.$implicit;
    const i_r9 = ctx.index;
    const tryPathSvg_r10 = \u0275\u0275reference(15);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r3.currentPage - 1) * ctx_r3.itemsPerPage + i_r9 + 1);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r3.getContainerSizeClass(amenity_r3));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.getSafeIconSvg(amenity_r3))("ngIfElse", tryPathSvg_r10);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(amenity_r3.title || amenity_r3.amenityName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(amenity_r3.tooltip || amenity_r3.amenityTooltip || amenity_r3.title || amenity_r3.amenityName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(amenity_r3.description || amenity_r3.amenitiesDescription);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c1, amenity_r3.id))("cTooltip", ctx_r3.tooltipEditText);
    \u0275\u0275advance(2);
    \u0275\u0275property("cIcon", ctx_r3.icons.cilPen);
    \u0275\u0275advance(3);
    \u0275\u0275property("cTooltip", ctx_r3.tooltipDeleteText);
    \u0275\u0275advance(2);
    \u0275\u0275property("cIcon", ctx_r3.icons.cilTrash);
  }
}
function ListAmenitiesComponent_table_25_tr_31_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('No amenities found matching "', ctx_r3.searchTerm, '"');
  }
}
function ListAmenitiesComponent_table_25_tr_31_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "No amenities available");
  }
}
function ListAmenitiesComponent_table_25_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275text(1, "\n              ");
    \u0275\u0275elementStart(2, "td", 34);
    \u0275\u0275text(3, "\n                ");
    \u0275\u0275template(4, ListAmenitiesComponent_table_25_tr_31_span_4_Template, 2, 1, "span", 23);
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275template(6, ListAmenitiesComponent_table_25_tr_31_ng_template_6_Template, 1, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275text(8, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noData_r11 = \u0275\u0275reference(7);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.searchTerm)("ngIfElse", noData_r11);
  }
}
function ListAmenitiesComponent_table_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 18);
    \u0275\u0275text(1, "\n          ");
    \u0275\u0275elementStart(2, "thead");
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "tr");
    \u0275\u0275text(5, "\n              ");
    \u0275\u0275elementStart(6, "th", 19);
    \u0275\u0275text(7, "S.No");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n              ");
    \u0275\u0275elementStart(9, "th", 19);
    \u0275\u0275text(10, "Icon");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n              ");
    \u0275\u0275elementStart(12, "th", 19);
    \u0275\u0275text(13, "Amenity Name");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n              ");
    \u0275\u0275elementStart(15, "th", 19);
    \u0275\u0275text(16, "Tooltip");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n              ");
    \u0275\u0275elementStart(18, "th", 19);
    \u0275\u0275text(19, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n              ");
    \u0275\u0275elementStart(21, "th", 19);
    \u0275\u0275text(22, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, "\n          ");
    \u0275\u0275elementStart(26, "tbody");
    \u0275\u0275text(27, "\n            ");
    \u0275\u0275template(28, ListAmenitiesComponent_table_25_tr_28_Template, 53, 14, "tr", 20);
    \u0275\u0275text(29, "\n            ");
    \u0275\u0275text(30, "\n            ");
    \u0275\u0275template(31, ListAmenitiesComponent_table_25_tr_31_Template, 10, 2, "tr", 21);
    \u0275\u0275text(32, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("hover", true)("striped", true)("bordered", true);
    \u0275\u0275advance(28);
    \u0275\u0275property("ngForOf", ctx_r3.paginatedAmenityList);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.paginatedAmenityList.length === 0 && !ctx_r3.isLoading);
  }
}
function ListAmenitiesComponent_c_pagination_28_c_page_item_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-page-item", 39);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "a", 37);
    \u0275\u0275listener("click", function ListAmenitiesComponent_c_pagination_28_c_page_item_8_Template_a_click_2_listener() {
      const page_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.changePage(page_r14));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n          ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r14 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("active", ctx_r3.currentPage === page_r14);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(page_r14);
  }
}
function ListAmenitiesComponent_c_pagination_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-pagination", 35);
    \u0275\u0275text(1, "\n          ");
    \u0275\u0275elementStart(2, "c-page-item", 36);
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "a", 37);
    \u0275\u0275listener("click", function ListAmenitiesComponent_c_pagination_28_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.previousPage());
    });
    \u0275\u0275text(5, "Previous");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n          ");
    \u0275\u0275template(8, ListAmenitiesComponent_c_pagination_28_c_page_item_8_Template, 5, 2, "c-page-item", 38);
    \u0275\u0275text(9, "\n          ");
    \u0275\u0275elementStart(10, "c-page-item", 36);
    \u0275\u0275text(11, "\n            ");
    \u0275\u0275elementStart(12, "a", 37);
    \u0275\u0275listener("click", function ListAmenitiesComponent_c_pagination_28_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.nextPage());
    });
    \u0275\u0275text(13, "Next");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-disabled", ctx_r3.currentPage === 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.pageRange);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.currentPage === ctx_r3.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-disabled", ctx_r3.currentPage === ctx_r3.totalPages);
  }
}
var _ListAmenitiesComponent = class _ListAmenitiesComponent {
  constructor(amenitiesService, sanitizer) {
    this.amenitiesService = amenitiesService;
    this.sanitizer = sanitizer;
    this.icons = { cilPen, cilTrash };
    this.tooltipEditText = "Edit Amenity";
    this.tooltipDeleteText = "Delete Amenity";
    this.amenityList = [];
    this.pageRange = [];
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.isLoading = false;
    this.searchTerm = "";
  }
  ngOnInit() {
    this.loadAmenityList();
  }
  updatePageRange() {
    const totalPages = this.totalPages;
    let start = Math.max(1, this.currentPage - 1);
    let end = Math.min(totalPages, start + 2);
    if (end === totalPages) {
      start = Math.max(1, totalPages - 2);
    }
    this.pageRange = Array.from({ length: Math.min(3, totalPages) }, (_, i) => start + i);
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages && !this.isLoading) {
      this.currentPage = page;
      this.updatePageRange();
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages && !this.isLoading) {
      this.changePage(this.currentPage + 1);
    }
  }
  previousPage() {
    if (this.currentPage > 1 && !this.isLoading) {
      this.changePage(this.currentPage - 1);
    }
  }
  loadAmenityList() {
    return __async(this, null, function* () {
      if (this.isLoading)
        return;
      this.isLoading = true;
      try {
        let response;
        try {
          response = yield this.amenitiesService.getAllAmenities();
        } catch (error) {
          console.log("Using fallback listing endpoint");
          response = yield this.amenitiesService.listAmenities("0");
        }
        if (response.data.code === 1) {
          this.amenityList = response.data.data;
          this.updatePageRange();
        } else {
          throw new Error(response.data.message || "Failed to load amenities");
        }
      } catch (error) {
        console.error("Error loading amenity list:", error);
        yield import_sweetalert2.default.fire({
          title: "Error",
          text: "An error occurred while loading the amenity list",
          icon: "error",
          confirmButtonText: "Ok"
        });
      } finally {
        this.isLoading = false;
      }
    });
  }
  search() {
    this.currentPage = 1;
    this.updatePageRange();
  }
  clearSearch() {
    this.searchTerm = "";
    this.search();
  }
  get paginatedAmenityList() {
    let filtered = this.amenityList;
    if (this.searchTerm) {
      const searchTermLower = this.searchTerm.toLowerCase();
      filtered = this.amenityList.filter((amenity) => {
        const name = amenity.title || amenity.amenityName || "";
        const tooltip = amenity.tooltip || amenity.amenityTooltip || "";
        const description = amenity.description || amenity.amenitiesDescription || "";
        return name.toLowerCase().includes(searchTermLower) || tooltip.toLowerCase().includes(searchTermLower) || description.toLowerCase().includes(searchTermLower);
      });
    }
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return filtered.slice(startIndex, startIndex + this.itemsPerPage);
  }
  get totalPages() {
    const filteredLength = this.searchTerm ? this.amenityList.filter((amenity) => {
      const name = amenity.title || amenity.amenityName || "";
      const tooltip = amenity.tooltip || amenity.amenityTooltip || "";
      const description = amenity.description || amenity.amenitiesDescription || "";
      const searchTermLower = this.searchTerm.toLowerCase();
      return name.toLowerCase().includes(searchTermLower) || tooltip.toLowerCase().includes(searchTermLower) || description.toLowerCase().includes(searchTermLower);
    }).length : this.amenityList.length;
    return Math.ceil(filteredLength / this.itemsPerPage);
  }
  onImageError(event, amenity) {
    event.target.style.display = "none";
  }
  onSvgError(event, amenity) {
    console.warn("SVG failed to load for amenity:", amenity.id);
    event.target.style.display = "none";
  }
  // Helper method to safely render SVG content
  getSafeIconSvg(amenity) {
    const svgContent = amenity.icon_svg || amenity.amenity_icon_svg;
    if (!svgContent)
      return null;
    try {
      const sanitizedSvg = this.sanitizer.sanitize(SecurityContext.HTML, svgContent);
      if (sanitizedSvg) {
        let processedSvg = sanitizedSvg;
        const iconWidth = this.getIconWidth(amenity);
        const iconHeight = this.getIconHeight(amenity);
        if (!processedSvg.includes("width=") && !processedSvg.includes("height=")) {
          processedSvg = processedSvg.replace("<svg", `<svg width="${iconWidth}" height="${iconHeight}"`);
        }
        const sizeClass = this.getIconSizeClass(amenity);
        if (!processedSvg.includes("class=")) {
          processedSvg = processedSvg.replace("<svg", `<svg class="amenity-icon-svg ${sizeClass}"`);
        } else {
          processedSvg = processedSvg.replace('class="', `class="amenity-icon-svg ${sizeClass} `);
        }
        if (!processedSvg.includes("viewBox=")) {
          processedSvg = processedSvg.replace("<svg", '<svg viewBox="0 0 24 24"');
        }
        return this.sanitizer.bypassSecurityTrustHtml(processedSvg);
      }
    } catch (error) {
      console.warn("Error sanitizing SVG for amenity:", amenity.id, error);
    }
    return null;
  }
  // Helper method to get icon path for custom SVG rendering
  getIconPath(amenity) {
    return amenity.icon_path || amenity.amenity_icon_path || "";
  }
  // Helper method to get viewBox
  getViewBox(amenity) {
    return amenity.viewbox || "0 0 448 512";
  }
  // Check if amenity has any icon data
  hasIcon(amenity) {
    return !!(amenity.icon_svg || amenity.amenity_icon_svg || amenity.icon_path || amenity.amenity_icon_path || amenity.icon || amenity.amenity_icon_url || amenity.amenityIcon);
  }
  // Get icon size from backend data
  getIconSize(amenity) {
    return amenity.icon_size || amenity.amenity_icon_size || amenity.icon_width || amenity.amenity_icon_width || 32;
  }
  // Get icon width from backend data
  getIconWidth(amenity) {
    return amenity.icon_width || amenity.amenity_icon_width || this.getIconSize(amenity);
  }
  // Get icon height from backend data
  getIconHeight(amenity) {
    return amenity.icon_height || amenity.amenity_icon_height || this.getIconSize(amenity);
  }
  // Get dynamic CSS class based on icon size
  getIconSizeClass(amenity) {
    const size = this.getIconSize(amenity);
    if (size <= 16)
      return "icon-size-xs";
    if (size <= 24)
      return "icon-size-sm";
    if (size <= 32)
      return "icon-size-md";
    if (size <= 48)
      return "icon-size-lg";
    if (size <= 64)
      return "icon-size-xl";
    return "icon-size-xxl";
  }
  // Get dynamic container size based on icon size
  getContainerSizeClass(amenity) {
    const size = this.getIconSize(amenity);
    if (size <= 16)
      return "container-size-xs";
    if (size <= 24)
      return "container-size-sm";
    if (size <= 32)
      return "container-size-md";
    if (size <= 48)
      return "container-size-lg";
    if (size <= 64)
      return "container-size-xl";
    return "container-size-xxl";
  }
  deleteAmenity(id) {
    return __async(this, null, function* () {
      if (this.isLoading)
        return;
      const result = yield import_sweetalert2.default.fire({
        title: "Are you sure?",
        text: "This action cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel"
      });
      if (result.isConfirmed) {
        this.isLoading = true;
        try {
          const response = yield this.amenitiesService.deleteAmenities(id.toString());
          if (response.data.code === 1) {
            yield import_sweetalert2.default.fire({
              title: "Deleted!",
              text: "Amenity has been deleted successfully.",
              icon: "success",
              confirmButtonText: "Ok"
            });
            yield this.loadAmenityList();
          } else {
            throw new Error(response.data.message || "Failed to delete amenity");
          }
        } catch (error) {
          console.error("Error deleting amenity:", error);
          yield import_sweetalert2.default.fire({
            title: "Error",
            text: "An error occurred while deleting the amenity",
            icon: "error",
            confirmButtonText: "Ok"
          });
        } finally {
          this.isLoading = false;
        }
      }
    });
  }
};
_ListAmenitiesComponent.\u0275fac = function ListAmenitiesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListAmenitiesComponent)(\u0275\u0275directiveInject(AmenitiesService), \u0275\u0275directiveInject(DomSanitizer));
};
_ListAmenitiesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListAmenitiesComponent, selectors: [["app-list-amenities"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 6, consts: [["tryPathSvg", ""], ["tryImageIcon", ""], ["tryFallbackIcon", ""], ["noIcon", ""], ["noData", ""], ["xs", "12"], [1, "mb-4"], ["cForm", "", 1, "row", "g-3"], [1, "col-auto"], ["cButton", "", "color", "primary", "role", "button", 3, "routerLink"], ["md", "3", 1, "mb-4", "flex", "justify-content-md-end"], ["cFormControl", "", "id", "searchInput", "type", "search", "placeholder", "Search amenities...", 3, "input", "ngModelChange", "ngModel"], ["class", "text-center", 4, "ngIf"], ["cTable", "", 3, "hover", "striped", "bordered", 4, "ngIf"], ["aria-label", "Page navigation", "class", "mt-3", 4, "ngIf"], [1, "text-center"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["cTable", "", 3, "hover", "striped", "bordered"], ["scope", "col"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "amenity-icon-container", 3, "ngClass"], [4, "ngIf", "ngIfElse"], ["cButton", "", "color", "btn-transparent", "role", "button", "cTooltipPlacement", "top", 1, "btn-sm", "text-primary", "border-0", "py-0", 3, "routerLink", "cTooltip"], ["size", "xl", "title", "Edit", 3, "cIcon"], ["cButton", "", "color", "btn-transparent", "role", "button", "cTooltipPlacement", "top", 1, "btn-sm", "text-danger", "border-0", "py-0", 3, "click", "cTooltip"], ["width", "25", "title", "Delete", 3, "cIcon"], [1, "amenity-icon-svg", 3, "innerHTML", "title"], [3, "ngClass", "title"], ["fill", "currentColor"], [3, "error", "src", "alt", "title", "ngClass"], [3, "title"], [1, "fas", "fa-cube"], ["colspan", "6", 1, "text-center"], ["aria-label", "Page navigation", 1, "mt-3"], [3, "disabled"], ["cPageLink", "", 3, "click"], [3, "active", 4, "ngFor", "ngForOf"], [3, "active"]], template: function ListAmenitiesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-col", 5)(1, "c-card", 6)(2, "c-card-body")(3, "form", 7)(4, "div", 8)(5, "a", 9);
    \u0275\u0275text(6, "Create New Amenity");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(7, "c-row");
    \u0275\u0275text(8, "\n  ");
    \u0275\u0275elementStart(9, "c-col", 5);
    \u0275\u0275text(10, "\n    ");
    \u0275\u0275elementStart(11, "c-card", 6);
    \u0275\u0275text(12, "\n      ");
    \u0275\u0275elementStart(13, "c-card-body");
    \u0275\u0275text(14, "\n        ");
    \u0275\u0275text(15, "\n        ");
    \u0275\u0275elementStart(16, "c-col", 10);
    \u0275\u0275text(17, "\n          ");
    \u0275\u0275elementStart(18, "input", 11);
    \u0275\u0275listener("input", function ListAmenitiesComponent_Template_input_input_18_listener() {
      return ctx.search();
    });
    \u0275\u0275twoWayListener("ngModelChange", function ListAmenitiesComponent_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n\n        ");
    \u0275\u0275text(21, "\n        ");
    \u0275\u0275template(22, ListAmenitiesComponent_div_22_Template, 8, 0, "div", 12);
    \u0275\u0275text(23, "\n\n        ");
    \u0275\u0275text(24, "\n        ");
    \u0275\u0275template(25, ListAmenitiesComponent_table_25_Template, 34, 5, "table", 13);
    \u0275\u0275text(26, "\n\n        ");
    \u0275\u0275text(27, "\n        ");
    \u0275\u0275template(28, ListAmenitiesComponent_c_pagination_28_Template, 16, 5, "c-pagination", 14);
    \u0275\u0275text(29, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx.isLoading && ctx.amenityList.length > ctx.itemsPerPage);
  }
}, dependencies: [
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  TooltipDirective,
  IconDirective,
  RouterLink,
  RowComponent,
  ColComponent,
  CardComponent,
  CardBodyComponent,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormsModule,
  NgModel,
  NgForm,
  FormDirective,
  FormControlDirective,
  ButtonDirective,
  TableDirective,
  PaginationComponent,
  PageItemComponent,
  PageLinkDirective
], styles: ["\n\n.amenity-icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  padding: 4px;\n  overflow: visible;\n  position: relative;\n}\n.container-size-xs[_ngcontent-%COMP%] {\n  width: 24px !important;\n  height: 24px !important;\n  min-width: 24px !important;\n  min-height: 24px !important;\n  padding: 2px !important;\n}\n.container-size-sm[_ngcontent-%COMP%] {\n  width: 32px !important;\n  height: 32px !important;\n  min-width: 32px !important;\n  min-height: 32px !important;\n  padding: 3px !important;\n}\n.container-size-md[_ngcontent-%COMP%] {\n  width: 40px !important;\n  height: 40px !important;\n  min-width: 40px !important;\n  min-height: 40px !important;\n  padding: 4px !important;\n}\n.container-size-lg[_ngcontent-%COMP%] {\n  width: 56px !important;\n  height: 56px !important;\n  min-width: 56px !important;\n  min-height: 56px !important;\n  padding: 6px !important;\n}\n.container-size-xl[_ngcontent-%COMP%] {\n  width: 72px !important;\n  height: 72px !important;\n  min-width: 72px !important;\n  min-height: 72px !important;\n  padding: 8px !important;\n}\n.container-size-xxl[_ngcontent-%COMP%] {\n  width: 88px !important;\n  height: 88px !important;\n  min-width: 88px !important;\n  min-height: 88px !important;\n  padding: 10px !important;\n}\n.amenity-icon-svg[_ngcontent-%COMP%] {\n  width: 32px !important;\n  height: 32px !important;\n  min-width: 32px;\n  min-height: 32px;\n  max-width: 32px;\n  max-height: 32px;\n  display: block;\n  flex-shrink: 0;\n  overflow: visible;\n}\n.amenity-icon-svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 100% !important;\n  max-height: 100% !important;\n  overflow: visible;\n}\n.icon-size-xs[_ngcontent-%COMP%] {\n  width: 16px !important;\n  height: 16px !important;\n  min-width: 16px !important;\n  min-height: 16px !important;\n  max-width: 16px !important;\n  max-height: 16px !important;\n}\n.icon-size-sm[_ngcontent-%COMP%] {\n  width: 24px !important;\n  height: 24px !important;\n  min-width: 24px !important;\n  min-height: 24px !important;\n  max-width: 24px !important;\n  max-height: 24px !important;\n}\n.icon-size-md[_ngcontent-%COMP%] {\n  width: 32px !important;\n  height: 32px !important;\n  min-width: 32px !important;\n  min-height: 32px !important;\n  max-width: 32px !important;\n  max-height: 32px !important;\n}\n.icon-size-lg[_ngcontent-%COMP%] {\n  width: 48px !important;\n  height: 48px !important;\n  min-width: 48px !important;\n  min-height: 48px !important;\n  max-width: 48px !important;\n  max-height: 48px !important;\n}\n.icon-size-xl[_ngcontent-%COMP%] {\n  width: 64px !important;\n  height: 64px !important;\n  min-width: 64px !important;\n  min-height: 64px !important;\n  max-width: 64px !important;\n  max-height: 64px !important;\n}\n.icon-size-xxl[_ngcontent-%COMP%] {\n  width: 80px !important;\n  height: 80px !important;\n  min-width: 80px !important;\n  min-height: 80px !important;\n  max-width: 80px !important;\n  max-height: 80px !important;\n}\n.amenity-icon-img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  max-width: 32px;\n  max-height: 32px;\n  object-fit: contain;\n  display: block;\n  flex-shrink: 0;\n  overflow: visible;\n}\n.amenity-icon-font[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  overflow: visible;\n}\n.amenity-icon-placeholder[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n  flex-shrink: 0;\n  overflow: visible;\n}\n.amenity-icon-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6c757d;\n}\ntd[_ngcontent-%COMP%]:first-child    + td[_ngcontent-%COMP%] {\n  width: 60px;\n  min-width: 60px;\n  max-width: 60px;\n  text-align: center;\n  vertical-align: middle;\n  padding: 8px 4px;\n  overflow: visible;\n  position: relative;\n}\ntable[_ngcontent-%COMP%] {\n  table-layout: auto;\n  overflow: visible;\n}\ntr[_ngcontent-%COMP%] {\n  overflow: visible;\n}\ntd[_ngcontent-%COMP%] {\n  overflow: visible;\n  position: relative;\n}\n@media (max-width: 768px) {\n  .amenity-icon-container[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    min-width: 36px;\n    min-height: 36px;\n  }\n  .amenity-icon-svg[_ngcontent-%COMP%], \n   .amenity-icon-img[_ngcontent-%COMP%] {\n    width: 28px !important;\n    height: 28px !important;\n    min-width: 28px;\n    min-height: 28px;\n    max-width: 28px;\n    max-height: 28px;\n  }\n  .amenity-icon-font[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 28px;\n    height: 28px;\n  }\n  .amenity-icon-placeholder[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n  }\n}\n.amenity-icon-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n.amenity-icon-container[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%], \n.amenity-icon-container[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], \n.amenity-icon-container[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  overflow: visible !important;\n  position: relative;\n  z-index: 1;\n}\n/*# sourceMappingURL=list-amenities.component.css.map */"] });
var ListAmenitiesComponent = _ListAmenitiesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListAmenitiesComponent, { className: "ListAmenitiesComponent", filePath: "src\\app\\views\\amenities\\list-amenities\\list-amenities.component.ts", lineNumber: 86 });
})();
export {
  ListAmenitiesComponent
};
//# sourceMappingURL=list-amenities.component-6OTOHERS.js.map
