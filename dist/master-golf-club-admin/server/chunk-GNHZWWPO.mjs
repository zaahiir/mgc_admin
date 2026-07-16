import './polyfills.server.mjs';
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibFacebook,
  cibGoogle,
  cibLinkedin,
  cibSkype,
  cibTwitter,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cilAccountLogout,
  cilAlignCenter,
  cilAlignLeft,
  cilAlignRight,
  cilApplicationsSettings,
  cilArrowBottom,
  cilArrowRight,
  cilArrowTop,
  cilBasket,
  cilBell,
  cilBold,
  cilBookmark,
  cilCalculator,
  cilCalendar,
  cilChart,
  cilChartPie,
  cilCheck,
  cilChevronLeft,
  cilChevronRight,
  cilCloudDownload,
  cilCode,
  cilCommentSquare,
  cilContrast,
  cilCreditCard,
  cilCursor,
  cilDescription,
  cilDollar,
  cilDrop,
  cilEnvelopeClosed,
  cilEnvelopeOpen,
  cilFile,
  cilGrid,
  cilHome,
  cilInbox,
  cilIndentDecrease,
  cilIndentIncrease,
  cilItalic,
  cilJustifyCenter,
  cilLanguage,
  cilLayers,
  cilList,
  cilListNumbered,
  cilLocationPin,
  cilLockLocked,
  cilMagnifyingGlass,
  cilMap,
  cilMediaPlay,
  cilMediaRecord,
  cilMenu,
  cilMoon,
  cilNotes,
  cilOptions,
  cilPaperPlane,
  cilPaperclip,
  cilPen,
  cilPencil,
  cilPeople,
  cilPrint,
  cilPuzzle,
  cilReportSlash,
  cilSave,
  cilSettings,
  cilShare,
  cilShareAll,
  cilShareBoxed,
  cilSpeech,
  cilSpeedometer,
  cilSpreadsheet,
  cilStar,
  cilSun,
  cilTags,
  cilTask,
  cilTrash,
  cilUnderline,
  cilUser,
  cilUserFemale,
  cilUserFollow,
  cilUserUnfollow
} from "./chunk-3IVUJFLD.mjs";
import {
  provideAnimations,
  provideServerRendering
} from "./chunk-T3CRUVKJ.mjs";
import {
  AvatarComponent,
  BreadcrumbRouterComponent,
  ButtonModule,
  CardModule,
  ColorModeService,
  ContainerComponent,
  DefaultValueAccessor,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownModule,
  DropdownToggleDirective,
  FooterComponent,
  FormBuilder,
  FormControlName,
  FormDirective,
  FormGroupDirective,
  FormModule,
  GridModule,
  HeaderComponent,
  HeaderNavComponent,
  HeaderTogglerDirective,
  IconDirective,
  IconSetService,
  NgControlStatus,
  NgControlStatusGroup,
  Platform,
  ReactiveFormsModule,
  RequiredValidator,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarModule,
  SidebarNavComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective,
  Validators,
  coerceBooleanProperty,
  coerceElement,
  coerceNumberProperty,
  getRtlScrollAxisType,
  takeUntilDestroyed,
  ɵNgNoValidate
} from "./chunk-KHKHR2VG.mjs";
import {
  ActivatedRoute,
  DOCUMENT,
  HttpClient,
  NavigationEnd,
  NgIf,
  NgTemplateOutlet,
  Router,
  RouterLink,
  RouterOutlet,
  Title,
  bootstrapApplication,
  isPlatformBrowser,
  provideHttpClient,
  provideRouter,
  withFetch,
  withInterceptors
} from "./chunk-7RJECGZ5.mjs";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DestroyRef,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererStyleFlags2,
  Subject,
  Subscription,
  ViewChild,
  animationFrameScheduler,
  auditTime,
  catchError,
  debounceTime,
  delay,
  distinctUntilChanged,
  expand,
  filter,
  finalize,
  fromEvent,
  importProvidersFrom,
  inject,
  input,
  interval,
  map,
  merge,
  mergeApplicationConfig,
  mergeMap,
  of,
  pairwise,
  setClassMetadata,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-J4TCKMJW.mjs";
import {
  __privateAdd,
  __privateGet,
  __privateSet,
  __spreadProps,
  __spreadValues
} from "./chunk-CKH4O4N6.mjs";

// src/app/icons/signet.ts
var signet = [
  "102 115",
  `<g style="fill: currentColor">
    <path d="M96 24.124 57 1.608a12 12 0 0 0-12 0L6 24.124a12.034 12.034 0 0 0-6 10.393V79.55a12.033 12.033 0 0 0 6 10.392l39 22.517a12 12 0 0 0 12 0l39-22.517a12.033 12.033 0 0 0 6-10.392V34.517a12.034 12.034 0 0 0-6-10.393ZM94 79.55a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0L10 83.014a4 4 0 0 1-2-3.464V34.517a4 4 0 0 1 2-3.464L49 8.536a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464V79.55Z"/>
    <path d="M74.022 70.071h-2.866a4 4 0 0 0-1.925.494L51.95 80.05 32 68.531V45.554l19.95-11.519 17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.71a2 2 0 0 0-1.04-1.756L55.793 27.02a8.04 8.04 0 0 0-7.843.09L28 38.626a8.025 8.025 0 0 0-4 6.929V68.53a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.088l19.19-10.532a2 2 0 0 0 1.038-1.753v-2.71a2 2 0 0 0-2-2Z"/>
  </g>`
];

// src/app/icons/logo.ts
var logo = [
  "685 116",
  `<g>
    <g style="fill:#cf2f4c" transform="translate(0 -10)">
      <path d="M399.5024,45.8636h1.2164a.5659.5659,0,0,1,.64.64v43.52a.5658.5658,0,0,1-.64.6406h-1.4083a.7517.7517,0,0,1-.768-.4482L379.2144,51.6234c-.086-.085-.16-.1172-.2242-.0967-.0634.0225-.0957.0967-.0957.2246l.064,38.2715a.5662.5662,0,0,1-.64.6406h-1.2159a.5656.5656,0,0,1-.64-.6406V46.5033a.5657.5657,0,0,1,.64-.64h1.3438a.7524.7524,0,0,1,.7681.4473l19.3281,38.4639c.0849.0869.16.1181.2241.0966s.0957-.0966.0957-.2246V46.5033A.5657.5657,0,0,1,399.5024,45.8636Z"/>
      <path d="M360.418,90.1507l-2.4317-8.832a.2965.2965,0,0,0-.32-.1914H340.8984a.2951.2951,0,0,0-.32.1914L338.21,90.0873a.6584.6584,0,0,1-.7037.5761H336.29a.5863.5863,0,0,1-.48-.1923.58.58,0,0,1-.0961-.5118l12.0317-43.5839a.6436.6436,0,0,1,.7041-.5118h1.6a.6442.6442,0,0,1,.7041.5118l12.16,43.5839.0644.1914c0,.3428-.2139.5127-.64.5127h-1.2163A.6426.6426,0,0,1,360.418,90.1507ZM341.3145,78.9193a.3057.3057,0,0,0,.2236.0957h15.4883a.3076.3076,0,0,0,.2236-.0957c.0645-.0645.0742-.1172.0322-.16L349.41,49.8314c-.043-.085-.086-.1279-.128-.1279s-.0859.0429-.1279.1279l-7.8721,28.9277C341.2393,78.8021,341.25,78.8548,341.3145,78.9193Z"/>
      <path d="M419.8223,87.9427a11.2812,11.2812,0,0,1-3.3282-8.48v-22.4a11.2857,11.2857,0,0,1,3.3282-8.48,13.69,13.69,0,0,1,17.6318-.0323,11.0472,11.0472,0,0,1,3.36,8.3838v1.92a.566.566,0,0,1-.64.6407H438.958a.5654.5654,0,0,1-.64-.6407v-1.92a9.019,9.019,0,0,0-2.6563-6.7519,10.7705,10.7705,0,0,0-14.0161,0,9.0946,9.0946,0,0,0-2.6558,6.8164V79.5267a9.0367,9.0367,0,0,0,2.6875,6.8164,9.7141,9.7141,0,0,0,7.04,2.5918,9.5618,9.5618,0,0,0,6.9765-2.5595,8.9655,8.9655,0,0,0,2.6241-6.72v-8.32a.2268.2268,0,0,0-.2564-.2558h-8.3843a.5654.5654,0,0,1-.64-.6407V69.4154a.5662.5662,0,0,1,.64-.6406h10.4961a.5667.5667,0,0,1,.64.6406v9.9834a11.3465,11.3465,0,0,1-3.3277,8.5762,13.7344,13.7344,0,0,1-17.664-.0323Z"/>
      <path d="M461.3838,89.5755a10.9043,10.9043,0,0,1-4.3525-4.5439,14.4642,14.4642,0,0,1-1.5357-6.7842V46.5033a.5657.5657,0,0,1,.64-.64h1.2159a.5659.5659,0,0,1,.64.64v32a10.543,10.543,0,0,0,2.7207,7.5517,10.36,10.36,0,0,0,14.336,0,10.5506,10.5506,0,0,0,2.72-7.5517v-32a.5655.5655,0,0,1,.64-.64h1.2163a.5661.5661,0,0,1,.64.64V78.2474a13.0121,13.0121,0,0,1-3.3921,9.376,11.8983,11.8983,0,0,1-9.0239,3.5518A12.8539,12.8539,0,0,1,461.3838,89.5755Z"/>
      <path d="M495.9048,90.0228V46.5033a.5657.5657,0,0,1,.64-.64h1.2158a.5663.5663,0,0,1,.64.64v41.664a.2259.2259,0,0,0,.2558.2559h19.2a.5665.5665,0,0,1,.6407.64v.96a.5663.5663,0,0,1-.6407.6406H496.5449A.5656.5656,0,0,1,495.9048,90.0228Z"/>
      <path d="M554.6436,90.1507l-2.4322-8.832a.2959.2959,0,0,0-.32-.1914H535.123a.2939.2939,0,0,0-.3193.1914l-2.3682,8.7686a.659.659,0,0,1-.7041.5761h-1.2158a.5888.5888,0,0,1-.48-.1923.5824.5824,0,0,1-.0957-.5118l12.0322-43.5839a.643.643,0,0,1,.7036-.5118h1.6a.6442.6442,0,0,1,.7041.5118l12.16,43.5839.0635.1914c0,.3428-.2138.5127-.64.5127h-1.2158A.6423.6423,0,0,1,554.6436,90.1507ZM535.5391,78.9193a.31.31,0,0,0,.2246.0957h15.4878a.31.31,0,0,0,.2241-.0957c.0635-.0645.0737-.1172.0317-.16l-7.8716-28.9277c-.0434-.085-.0864-.1279-.1284-.1279s-.0859.0429-.1279.1279l-7.8721,28.9277C535.4644,78.8021,535.4756,78.8548,535.5391,78.9193Z"/>
      <path d="M592.4473,90.1507,583.68,69.4154a.2515.2515,0,0,0-.2559-.1924H573.44a.2263.2263,0,0,0-.2559.2559V90.0228a.566.566,0,0,1-.64.6406h-1.2164a.5654.5654,0,0,1-.64-.6406V46.5033a.5655.5655,0,0,1,.64-.64h12.5445a9.9783,9.9783,0,0,1,7.7436,3.2315A12.2019,12.2019,0,0,1,594.56,57.639a12.4342,12.4342,0,0,1-2.24,7.584,9.3626,9.3626,0,0,1-6.08,3.7442q-.2563.1288-.128.32l8.7041,20.6074.064.2558c0,.3428-.1919.5127-.5757.5127h-1.1523A.7027.7027,0,0,1,592.4473,90.1507ZM573.1836,48.3588v18.496a.2267.2267,0,0,0,.2559.2569h10.3037a7.6688,7.6688,0,0,0,6.0166-2.5928,9.878,9.878,0,0,0,2.3037-6.8154,10.2885,10.2885,0,0,0-2.272-6.9766,7.6035,7.6035,0,0,0-6.0483-2.624H573.44A.2263.2263,0,0,0,573.1836,48.3588Z"/>
    </g>
    <g style="fill:currentColor;">
      <g>
        <path d="m96.835 25.058-39-22.517a12 12 0 0 0-12 0l-39 22.517a12.034 12.034 0 0 0-6 10.392v45.033a12.033 12.033 0 0 0 6 10.393l39 22.516a12 12 0 0 0 12 0l39-22.516a12.033 12.033 0 0 0 6-10.393V35.45a12.033 12.033 0 0 0-6-10.392Zm-2 55.425a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0l-39-22.517a4 4 0 0 1-2-3.464V35.45a4 4 0 0 1 2-3.464l39-22.517a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464v45.033Z"/>
        <path d="M74.857 71.005H71.99a4 4 0 0 0-1.925.493l-17.28 9.485-19.951-11.518V46.487l19.95-11.518 17.29 9.455a4 4 0 0 0 1.918.49h2.864a2 2 0 0 0 2-2v-2.712a2 2 0 0 0-1.04-1.754L56.628 27.952a8.04 8.04 0 0 0-7.843.09L28.835 39.56a8.025 8.025 0 0 0-4 6.929v22.976a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.087l19.19-10.53a2 2 0 0 0 1.038-1.754v-2.71a2 2 0 0 0-2-2Z"/>
      </g>
      <g transform="translate(118 34)">
         <path d="M51.58.362c-8.28.009-14.99 6.719-15 15v17.277c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15V15.36c-.01-8.28-6.72-14.99-15-15Zm7 32.277a7 7 0 0 1-14 0V15.36a7 7 0 0 1 14 0V32.64ZM14.914 8.421a7.01 7.01 0 0 1 7.868 6.075.99.99 0 0 0 .984.865h6.03a1.01 1.01 0 0 0 .999-1.097C30.189 6.14 23.216-.02 15.079.381 6.996.932.748 7.696.835 15.796v16.407C.748 40.305 6.996 47.068 15.079 47.62c8.138.401 15.111-5.76 15.716-13.884a1.01 1.01 0 0 0-.998-1.097h-6.03a.99.99 0 0 0-.985.865 7.01 7.01 0 0 1-7.867 6.075 7.164 7.164 0 0 1-6.08-7.184v-16.79a7.164 7.164 0 0 1 6.079-7.184ZM97.757 27.928a12.159 12.159 0 0 0 7.184-11.077v-3.702A12.15 12.15 0 0 0 92.793 1H75.835a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V29h6.622l7.915 17.414a1 1 0 0 0 .91.586h6.591a1 1 0 0 0 .91-1.414l-8.026-17.658Zm-.816-11.077A4.154 4.154 0 0 1 92.794 21H82.94V9h9.852a4.154 4.154 0 0 1 4.148 4.15v3.7ZM139.835 1h-26a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-19V27h13a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-13V9h19a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM177.835 1h-6a1 1 0 0 0-1 1v22.648a7.007 7.007 0 1 1-14 0V2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v22.648a15.003 15.003 0 1 0 30 0V2a1 1 0 0 0-1-1Z"/>
         <rect width="8" height="38" x="186.835" y="1" rx="1"/>
      </g>
    </g>
  </g>`
];

// src/app/icons/icon-subset.ts
var iconSubset = {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibFacebook,
  cibGoogle,
  cibLinkedin,
  cibSkype,
  cibTwitter,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cilAccountLogout,
  cilAlignCenter,
  cilAlignLeft,
  cilAlignRight,
  cilApplicationsSettings,
  cilArrowBottom,
  cilArrowRight,
  cilArrowTop,
  cilBasket,
  cilBell,
  cilBold,
  cilBookmark,
  cilCalculator,
  cilCalendar,
  cilChart,
  cilChartPie,
  cilCheck,
  cilChevronLeft,
  cilChevronRight,
  cilCloudDownload,
  cilCode,
  cilCommentSquare,
  cilContrast,
  cilCreditCard,
  cilCursor,
  cilDescription,
  cilDollar,
  cilDrop,
  cilEnvelopeClosed,
  cilEnvelopeOpen,
  cilFile,
  cilGrid,
  cilHome,
  cilInbox,
  cilIndentDecrease,
  cilIndentIncrease,
  cilItalic,
  cilJustifyCenter,
  cilLanguage,
  cilLayers,
  cilList,
  cilListNumbered,
  cilLocationPin,
  cilLockLocked,
  cilMagnifyingGlass,
  cilMap,
  cilMediaPlay,
  cilMediaRecord,
  cilMenu,
  cilMoon,
  cilNotes,
  cilOptions,
  cilPaperclip,
  cilPaperPlane,
  cilPen,
  cilPencil,
  cilPeople,
  cilPrint,
  cilPuzzle,
  cilReportSlash,
  cilSave,
  cilSettings,
  cilShare,
  cilShareAll,
  cilShareBoxed,
  cilSpeech,
  cilSpeedometer,
  cilSpreadsheet,
  cilStar,
  cilSun,
  cilTags,
  cilTask,
  cilTrash,
  cilUnderline,
  cilUser,
  cilUserFemale,
  cilUserFollow,
  cilUserUnfollow,
  logo,
  signet
};
var IconSubset;
(function(IconSubset2) {
  IconSubset2["cibCcAmex"] = "cibCcAmex";
  IconSubset2["cibCcApplePay"] = "cibCcApplePay";
  IconSubset2["cibCcMastercard"] = "cibCcMastercard";
  IconSubset2["cibCcPaypal"] = "cibCcPaypal";
  IconSubset2["cibCcStripe"] = "cibCcStripe";
  IconSubset2["cibCcVisa"] = "cibCcVisa";
  IconSubset2["cibFacebook"] = "cibFacebook";
  IconSubset2["cibGoogle"] = "cibGoogle";
  IconSubset2["cibLinkedin"] = "cibLinkedin";
  IconSubset2["cibSkype"] = "cibSkype";
  IconSubset2["cibTwitter"] = "cibTwitter";
  IconSubset2["cifBr"] = "cifBr";
  IconSubset2["cifEs"] = "cifEs";
  IconSubset2["cifFr"] = "cifFr";
  IconSubset2["cifIn"] = "cifIn";
  IconSubset2["cifPl"] = "cifPl";
  IconSubset2["cifUs"] = "cifUs";
  IconSubset2["cilAccountLogout"] = "cilAccountLogout";
  IconSubset2["cilAlignCenter"] = "cilAlignCenter";
  IconSubset2["cilAlignLeft"] = "cilAlignLeft";
  IconSubset2["cilAlignRight"] = "cilAlignRight";
  IconSubset2["cilApplicationsSettings"] = "cilApplicationsSettings";
  IconSubset2["cilArrowBottom"] = "cilArrowBottom";
  IconSubset2["cilArrowRight"] = "cilArrowRight";
  IconSubset2["cilArrowTop"] = "cilArrowTop";
  IconSubset2["cilBasket"] = "cilBasket";
  IconSubset2["cilBell"] = "cilBell";
  IconSubset2["cilBold"] = "cilBold";
  IconSubset2["cilBookmark"] = "cilBookmark";
  IconSubset2["cilCalculator"] = "cilCalculator";
  IconSubset2["cilCalendar"] = "cilCalendar";
  IconSubset2["cilChart"] = "cilChart";
  IconSubset2["cilChartPie"] = "cilChartPie";
  IconSubset2["cilCheck"] = "cilCheck";
  IconSubset2["cilChevronLeft"] = "cilChevronLeft";
  IconSubset2["cilChevronRight"] = "cilChevronRight";
  IconSubset2["cilCloudDownload"] = "cilCloudDownload";
  IconSubset2["cilCode"] = "cilCode";
  IconSubset2["cilCommentSquare"] = "cilCommentSquare";
  IconSubset2["cilContrast"] = "cilContrast\u015B";
  IconSubset2["cilCreditCard"] = "cilCreditCard";
  IconSubset2["cilCursor"] = "cilCursor";
  IconSubset2["cilDescription"] = "cilDescription";
  IconSubset2["cilDollar"] = "cilDollar";
  IconSubset2["cilDrop"] = "cilDrop";
  IconSubset2["cilEnvelopeClosed"] = "cilEnvelopeClosed";
  IconSubset2["cilEnvelopeOpen"] = "cilEnvelopeOpen";
  IconSubset2["cilFile"] = "cilFile";
  IconSubset2["cilGrid"] = "cilGrid";
  IconSubset2["cilHome"] = "cilHome";
  IconSubset2["cilInbox"] = "cilInbox";
  IconSubset2["cilIndentDecrease"] = "cilIndentDecrease";
  IconSubset2["cilIndentIncrease"] = "cilIndentIncrease";
  IconSubset2["cilItalic"] = "cilItalic";
  IconSubset2["cilJustifyCenter"] = "cilJustifyCenter";
  IconSubset2["cilLanguage"] = "cilLanguage";
  IconSubset2["cilLayers"] = "cilLayers";
  IconSubset2["cilList"] = "cilList";
  IconSubset2["cilListNumbered"] = "cilListNumbered";
  IconSubset2["cilLocationPin"] = "cilLocationPin";
  IconSubset2["cilLockLocked"] = "cilLockLocked";
  IconSubset2["cilMagnifyingGlass"] = "cilMagnifyingGlass";
  IconSubset2["cilMap"] = "cilMap";
  IconSubset2["cilMediaPlay"] = "cilMediaPlay";
  IconSubset2["cilMediaRecord"] = "cilMediaRecord";
  IconSubset2["cilMenu"] = "cilMenu";
  IconSubset2["cilMoon"] = "cilMoon";
  IconSubset2["cilNotes"] = "cilNotes";
  IconSubset2["cilOptions"] = "cilOptions";
  IconSubset2["cilPaperclip"] = "cilPaperclip";
  IconSubset2["cilPaperPlane"] = "cilPaperPlane";
  IconSubset2["cilPen"] = "cilPen";
  IconSubset2["cilPencil"] = "cilPencil";
  IconSubset2["cilPeople"] = "cilPeople";
  IconSubset2["cilPrint"] = "cilPrint";
  IconSubset2["cilPuzzle"] = "cilPuzzle";
  IconSubset2["cilReportSlash"] = "cilReportSlash";
  IconSubset2["cilSave"] = "cilSave";
  IconSubset2["cilSettings"] = "cilSettings";
  IconSubset2["cilShare"] = "cilShare";
  IconSubset2["cilShareAll"] = "cilShareAll";
  IconSubset2["cilShareBoxed"] = "cilShareBoxed";
  IconSubset2["cilSpeech"] = "cilSpeech";
  IconSubset2["cilSpeedometer"] = "cilSpeedometer";
  IconSubset2["cilSpreadsheet"] = "cilSpreadsheet";
  IconSubset2["cilStar"] = "cilStar";
  IconSubset2["cilSun"] = "cilSun";
  IconSubset2["cilTags"] = "cilTags";
  IconSubset2["cilTask"] = "cilTask";
  IconSubset2["cilTrash"] = "cilTrash";
  IconSubset2["cilUnderline"] = "cilUnderline";
  IconSubset2["cilUser"] = "cilUser";
  IconSubset2["cilUserFemale"] = "cilUserFemale";
  IconSubset2["cilUserFollow"] = "cilUserFollow";
  IconSubset2["cilUserUnfollow"] = "cilUserUnfollow";
  IconSubset2["logo"] = "logo";
  IconSubset2["signet"] = "signet";
})(IconSubset || (IconSubset = {}));

// src/app/app.component.ts
var _destroyRef, _activatedRoute, _router, _titleService, _colorModeService, _iconSetService;
var _AppComponent = class _AppComponent {
  constructor() {
    __privateAdd(this, _destroyRef);
    __privateAdd(this, _activatedRoute);
    __privateAdd(this, _router);
    __privateAdd(this, _titleService);
    __privateAdd(this, _colorModeService);
    __privateAdd(this, _iconSetService);
    this.title = "Admin Panel";
    __privateSet(this, _destroyRef, inject(DestroyRef));
    __privateSet(this, _activatedRoute, inject(ActivatedRoute));
    __privateSet(this, _router, inject(Router));
    __privateSet(this, _titleService, inject(Title));
    __privateSet(this, _colorModeService, inject(ColorModeService));
    __privateSet(this, _iconSetService, inject(IconSetService));
    __privateGet(this, _titleService).setTitle(this.title);
    __privateGet(this, _iconSetService).icons = __spreadValues({}, iconSubset);
    __privateGet(this, _colorModeService).localStorageItemName.set("coreui-free-angular-admin-template-theme-default");
    __privateGet(this, _colorModeService).eventName.set("ColorSchemeChange");
  }
  ngOnInit() {
    __privateGet(this, _router).events.pipe(takeUntilDestroyed(__privateGet(this, _destroyRef))).subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
    __privateGet(this, _activatedRoute).queryParams.pipe(delay(1), map((params) => params["theme"]?.match(/^[A-Za-z0-9\s]+/)?.[0]), filter((theme) => ["dark", "light", "auto"].includes(theme)), tap((theme) => {
      __privateGet(this, _colorModeService).colorMode.set(theme);
    }), takeUntilDestroyed(__privateGet(this, _destroyRef))).subscribe();
  }
};
_destroyRef = new WeakMap();
_activatedRoute = new WeakMap();
_router = new WeakMap();
_titleService = new WeakMap();
_colorModeService = new WeakMap();
_iconSetService = new WeakMap();
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}, dependencies: [RouterOutlet], encapsulation: 2 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 17 });
})();

// src/app/auth/auth.service.ts
var _AuthService = class _AuthService {
  constructor(http, router, injector) {
    this.http = http;
    this.router = router;
    this.injector = injector;
    this.apiUrl = "http://localhost/apis/";
    this.authenticationState = new BehaviorSubject(false);
    this.isAuthenticated$ = this.authenticationState.asObservable();
    this.autoLogoutTimer = null;
    this.sessionCheckTimer = null;
    this.SESSION_DURATION = 60 * 60 * 1e3;
    this.CHECK_INTERVAL = 60 * 1e3;
    const platformId = this.injector.get(PLATFORM_ID);
    this.isBrowser = isPlatformBrowser(platformId);
    this.initializeAuthState();
    if (this.isAuthenticated()) {
      this.startSessionMonitoring();
    }
  }
  initializeAuthState() {
    const token = this.getStorageItem("access_token");
    const userType = this.getUserType();
    const loginTimestamp = this.getStorageItem("login_timestamp");
    const hasValidToken = !!token && userType === "superuser";
    let sessionValid = true;
    if (loginTimestamp) {
      const loginTime = parseInt(loginTimestamp, 10);
      const currentTime = Date.now();
      const sessionAge = currentTime - loginTime;
      sessionValid = sessionAge < this.SESSION_DURATION;
    } else {
      sessionValid = false;
    }
    const isAuth = hasValidToken && sessionValid;
    this.authenticationState.next(isAuth);
  }
  // Admin login (superuser only)
  login(username, password) {
    return this.http.post(`${this.apiUrl}login/`, { username, password }).pipe(tap((response) => {
      this.setStorageItem("access_token", response.access);
      this.setStorageItem("refresh_token", response.refresh);
      this.setStorageItem("user_type", response.user_type);
      this.setStorageItem("user_id", response.user_id.toString());
      this.setStorageItem("username", response.username);
      this.setStorageItem("email", response.email);
      this.setStorageItem("login_timestamp", Date.now().toString());
      this.authenticationState.next(true);
      this.startAutoLogoutTimer();
      this.startSessionMonitoring();
    }), catchError((error) => {
      return this.handleError(error);
    }));
  }
  // Start auto-logout timer (1 hour)
  startAutoLogoutTimer() {
    this.clearAutoLogoutTimer();
    if (this.isBrowser) {
      this.autoLogoutTimer = setTimeout(() => {
        console.log("Session expired - auto logout");
        this.performAutoLogout();
      }, this.SESSION_DURATION);
    }
  }
  // Start session monitoring to check for expired sessions
  startSessionMonitoring() {
    this.stopSessionMonitoring();
    if (this.isBrowser) {
      this.sessionCheckTimer = interval(this.CHECK_INTERVAL).subscribe(() => {
        this.checkSessionExpiry();
      });
    }
  }
  // Check if current session has expired
  checkSessionExpiry() {
    const loginTimestamp = this.getStorageItem("login_timestamp");
    if (!loginTimestamp) {
      this.performAutoLogout();
      return;
    }
    const loginTime = parseInt(loginTimestamp, 10);
    const currentTime = Date.now();
    const sessionAge = currentTime - loginTime;
    if (sessionAge >= this.SESSION_DURATION) {
      console.log("Session expired during periodic check");
      this.performAutoLogout();
    }
  }
  // Perform automatic logout due to session expiry
  performAutoLogout() {
    console.log("Performing auto-logout due to session expiry");
    if (this.isBrowser) {
      alert("Your session has expired. You will be redirected to the login page.");
    }
    this.performCompleteLogout();
  }
  // Clear auto-logout timer
  clearAutoLogoutTimer() {
    if (this.autoLogoutTimer) {
      clearTimeout(this.autoLogoutTimer);
      this.autoLogoutTimer = null;
    }
  }
  // Stop session monitoring
  stopSessionMonitoring() {
    if (this.sessionCheckTimer) {
      this.sessionCheckTimer.unsubscribe();
      this.sessionCheckTimer = null;
    }
  }
  // Get remaining session time in minutes
  getRemainingSessionTime() {
    const loginTimestamp = this.getStorageItem("login_timestamp");
    if (!loginTimestamp) {
      return 0;
    }
    const loginTime = parseInt(loginTimestamp, 10);
    const currentTime = Date.now();
    const sessionAge = currentTime - loginTime;
    const remainingTime = this.SESSION_DURATION - sessionAge;
    return Math.max(0, Math.floor(remainingTime / (60 * 1e3)));
  }
  // Reset session timer (call this on user activity)
  resetSessionTimer() {
    if (this.isAuthenticated() && this.getUserType() === "superuser") {
      this.setStorageItem("login_timestamp", Date.now().toString());
      this.startAutoLogoutTimer();
    }
  }
  // Admin logout
  logout() {
    const refreshToken = this.getStorageItem("refresh_token");
    if (!refreshToken) {
      this.performCompleteLogout();
      return throwError(() => new Error("No refresh token available"));
    }
    const logoutRequest = this.http.post(`${this.apiUrl}logout/`, { refresh_token: refreshToken }, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return logoutRequest.pipe(tap(() => {
      this.performCompleteLogout();
    }), catchError((error) => {
      console.error("Logout API error:", error);
      this.performCompleteLogout();
      return throwError(() => error);
    }));
  }
  // Complete logout process for admin
  performLogout() {
    const refreshToken = this.getStorageItem("refresh_token");
    if (refreshToken) {
      this.logout().subscribe({
        next: (response) => {
          console.log("Admin logout successful");
        },
        error: (error) => {
          console.error("Admin logout error:", error);
        }
      });
    } else {
      this.performCompleteLogout();
    }
  }
  // Complete logout process
  performCompleteLogout() {
    this.clearAutoLogoutTimer();
    this.stopSessionMonitoring();
    this.clearAllUserData();
    this.authenticationState.next(false);
    if (this.isBrowser) {
      window.history.replaceState(null, "", "/login");
      if ("caches" in window) {
        caches.keys().then((names) => {
          names.forEach((name) => {
            caches.delete(name);
          });
        });
      }
    }
    this.router.navigate(["/login"], { replaceUrl: true });
  }
  // Helper method to clear all user data
  clearAllUserData() {
    this.removeStorageItem("access_token");
    this.removeStorageItem("refresh_token");
    this.removeStorageItem("user_type");
    this.removeStorageItem("user_id");
    this.removeStorageItem("username");
    this.removeStorageItem("email");
    this.removeStorageItem("login_timestamp");
    this.removeSessionItem("session_type");
    if (this.isBrowser) {
      sessionStorage.clear();
    }
  }
  refreshToken() {
    const refreshToken = this.getStorageItem("refresh_token");
    return this.http.post(`${this.apiUrl}token/refresh/`, { refresh: refreshToken }).pipe(tap((response) => {
      this.setStorageItem("access_token", response.access);
      this.setStorageItem("login_timestamp", Date.now().toString());
      this.authenticationState.next(true);
      this.startAutoLogoutTimer();
    }), catchError((error) => {
      this.performCompleteLogout();
      return this.handleError(error);
    }));
  }
  isAuthenticated() {
    const token = this.getStorageItem("access_token");
    const userType = this.getUserType();
    const loginTimestamp = this.getStorageItem("login_timestamp");
    const hasValidToken = !!token && userType === "superuser";
    let sessionValid = true;
    if (loginTimestamp) {
      const loginTime = parseInt(loginTimestamp, 10);
      const currentTime = Date.now();
      const sessionAge = currentTime - loginTime;
      sessionValid = sessionAge < this.SESSION_DURATION;
    } else {
      sessionValid = false;
    }
    const isAuth = hasValidToken && sessionValid;
    if (this.authenticationState.value !== isAuth) {
      this.authenticationState.next(isAuth);
      if (!isAuth && hasValidToken && !sessionValid) {
        this.performAutoLogout();
      }
    }
    return isAuth;
  }
  isAdmin() {
    return this.getUserType() === "superuser";
  }
  isLoggedIn() {
    return this.isAuthenticated();
  }
  getUserType() {
    return this.getStorageItem("user_type");
  }
  getUserId() {
    const userId = this.getStorageItem("user_id");
    return userId ? parseInt(userId, 10) : null;
  }
  getUsername() {
    return this.getStorageItem("username");
  }
  getEmail() {
    return this.getStorageItem("email");
  }
  getAccessToken() {
    return this.getStorageItem("access_token");
  }
  getRefreshToken() {
    return this.getStorageItem("refresh_token");
  }
  forceLogout() {
    this.performCompleteLogout();
  }
  // Helper methods for storage
  getStorageItem(key) {
    if (this.isBrowser) {
      return localStorage.getItem(key);
    }
    return null;
  }
  setStorageItem(key, value) {
    if (this.isBrowser) {
      localStorage.setItem(key, value);
    }
  }
  removeStorageItem(key) {
    if (this.isBrowser) {
      localStorage.removeItem(key);
    }
  }
  removeSessionItem(key) {
    if (this.isBrowser) {
      sessionStorage.removeItem(key);
    }
  }
  handleError(error) {
    let errorMessage = "An unknown error occurred";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      if (error.error?.detail) {
        errorMessage = error.error.detail;
      } else {
        errorMessage = `Error Code: ${error.status}
Message: ${error.message}`;
      }
    }
    console.error(errorMessage);
    return throwError(() => error);
  }
};
_AuthService.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router), \u0275\u0275inject(Injector));
};
_AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;

// src/app/auth/login/login.component.ts
function LoginComponent_div_18_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Username is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, LoginComponent_div_18_small_1_Template, 2, 0, "small", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.loginForm.get("username")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
  }
}
function LoginComponent_div_28_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, LoginComponent_div_28_small_1_Template, 2, 0, "small", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.loginForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
  }
}
function LoginComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function LoginComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
  }
}
var _LoginComponent = class _LoginComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.errorMessage = "";
    this.isLoading = false;
    this.showPassword = false;
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  ngOnInit() {
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = "";
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response.user_type === "superuser") {
            this.router.navigate(["/dashboard"]);
          } else {
            this.authService.forceLogout();
            this.errorMessage = "Access denied. Only superuser accounts are allowed.";
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.errorMessage = err.error?.detail || "Login failed. Please check your credentials and try again.";
        }
      });
    }
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 9, consts: [[1, "login-section"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-6", "col-lg-5"], [1, "card"], [1, "logo-container"], ["src", "assets/mgc_logo-03.png", "alt", "GolFer Logo", 1, "logo"], [1, "card-header"], [1, "card-body", "p-4"], ["cForm", "", 3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "username", 1, "form-label"], ["type", "text", "id", "username", "formControlName", "username", "placeholder", "Enter your username", "autoComplete", "username", "required", "", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], [1, "password-label-container"], ["for", "password", 1, "form-label"], ["type", "button", 1, "password-toggle-btn", 3, "click"], ["id", "password", "formControlName", "password", "placeholder", "Enter your password", "autoComplete", "current-password", "required", "", 1, "form-control", 3, "type"], ["class", "alert alert-danger mb-3", 4, "ngIf"], [1, "d-grid", "gap-2", "mt-4"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "text-danger"], [4, "ngIf"], [1, "alert", "alert-danger", "mb-3"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275element(6, "img", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7)(8, "h2");
    \u0275\u0275text(9, "Admin Login");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "form", 9);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(12, "div", 10)(13, "label", 11);
    \u0275\u0275text(14, "Username ");
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "input", 12);
    \u0275\u0275template(18, LoginComponent_div_18_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 10)(20, "div", 14)(21, "label", 15);
    \u0275\u0275text(22, "Password ");
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 16);
    \u0275\u0275listener("click", function LoginComponent_Template_button_click_25_listener() {
      return ctx.togglePasswordVisibility();
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "input", 17);
    \u0275\u0275template(28, LoginComponent_div_28_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, LoginComponent_div_29_Template, 2, 1, "div", 18);
    \u0275\u0275elementStart(30, "div", 19)(31, "button", 20);
    \u0275\u0275template(32, LoginComponent_span_32_Template, 1, 0, "span", 21);
    \u0275\u0275text(33, " Sign In ");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_5_0;
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx.loginForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.loginForm.get("username")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = ctx.loginForm.get("username")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.loginForm.get("username")) == null ? null : tmp_1_0.touched)));
    \u0275\u0275advance(7);
    \u0275\u0275attribute("aria-label", ctx.showPassword ? "Hide password" : "Show password");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.showPassword ? "Hide" : "Show", " ");
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.touched)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.errorMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isLoading);
  }
}, dependencies: [
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
  FormGroupDirective,
  FormControlName,
  FormDirective,
  NgIf
], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --d: 700ms;\n  --e: cubic-bezier(0.19, 1, 0.22, 1);\n  --font-sans: "Montserrat", sans-serif;\n  --font-serif: "Cardo", serif;\n  --font-poppins: "Poppins", sans-serif;\n  --admin-primary: #4c49b8;\n  --admin-secondary: #6c757d;\n  --admin-dark: #212529;\n  --text-color: #212529;\n  --text-color-one: #fff;\n  --title-color: #212529;\n  --text-font: "DM Sans", sans-serif;\n  --title-font: "Marcellus", serif;\n  --success-color: #198754;\n  --warning-color: #ffc107;\n  --danger-color: #dc3545;\n  --light-bg: #f8f9fa;\n}\n.login-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--light-bg) 0%,\n      #e9ecef 100%);\n}\n.logo-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px 0;\n  margin-top: 10px;\n}\n.logo[_ngcontent-%COMP%] {\n  max-height: 80px;\n  max-width: 180px;\n  height: auto;\n  display: inline-block;\n  transition: transform var(--d) var(--e);\n}\n.logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);\n  border: none;\n  transition: all var(--d) var(--e);\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  background: rgba(255, 255, 255, 0.95);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);\n}\n.card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--admin-primary),\n      var(--admin-dark)) !important;\n  background-color: var(--admin-primary) !important;\n  color: var(--text-color-one) !important;\n  border-bottom: none !important;\n  border-radius: 0 !important;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 0 !important;\n}\n.card-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    linear-gradient(\n      45deg,\n      transparent,\n      rgba(255, 255, 255, 0.1),\n      transparent);\n  transform: rotate(45deg);\n  transition: all 0.6s;\n}\n.card[_ngcontent-%COMP%]:hover   .card-header[_ngcontent-%COMP%]::before {\n  animation: _ngcontent-%COMP%_shimmer 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    transform: translateX(-100%) rotate(45deg);\n  }\n  100% {\n    transform: translateX(100%) rotate(45deg);\n  }\n}\n.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--title-font);\n  font-size: 28px;\n  text-transform: uppercase;\n  margin-bottom: 0 !important;\n  position: relative;\n  z-index: 1;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  color: var(--text-color-one) !important;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 30px !important;\n  background: white;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-color);\n  margin-bottom: 8px;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-family: var(--text-font);\n}\n.form-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--admin-primary);\n  font-weight: bold;\n}\n.password-label-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.password-toggle-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--admin-primary);\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  cursor: pointer;\n  padding: 0;\n  transition: all 0.3s ease;\n  font-family: var(--text-font);\n  outline: none;\n}\n.password-toggle-btn[_ngcontent-%COMP%]:hover {\n  color: var(--admin-dark);\n  transform: scale(1.05);\n}\n.password-toggle-btn[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--admin-primary);\n  outline-offset: 2px;\n  border-radius: 2px;\n}\n.password-toggle-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.form-control[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 12px 16px;\n  border: 1px solid #ddd;\n  font-size: 16px;\n  font-family: var(--text-font);\n  color: var(--text-color);\n  background: white;\n  transition: all 0.3s ease;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--admin-primary);\n  box-shadow: 0 0 0 0.25rem rgba(76, 73, 184, 0.25);\n  outline: 0;\n  color: var(--text-color);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 5px;\n  padding: 14px 24px;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 1px;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n  color: #fff;\n  font-family: var(--text-font);\n  background: #3e3a9d;\n  cursor: pointer;\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #4c49b8;\n  box-shadow: 0 8px 25px rgba(76, 73, 184, 0.3);\n  color: #fff;\n  transform: translateY(-2px);\n}\n.btn-primary[_ngcontent-%COMP%]:focus {\n  background: #4c49b8;\n  box-shadow: 0 0 0 0.25rem rgba(76, 73, 184, 0.25);\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:active {\n  background: #4c49b8;\n  transform: translateY(0);\n  color: #fff;\n}\n.btn-primary.loading[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n.alert[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: none;\n  padding: 12px 16px;\n  margin-bottom: 20px;\n  font-weight: 500;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n  font-family: var(--text-font);\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.alert-success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d1e7dd,\n      #badbcc);\n  color: #0f5132;\n  border-left: 4px solid var(--success-color);\n}\n.alert-danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8d7da,\n      #f5c6cb);\n  color: #721c24;\n  border-left: 4px solid var(--danger-color);\n}\n.text-danger[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  display: block;\n  margin-top: 4px;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n  font-family: var(--text-font);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  width: 1rem;\n  height: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.alert-success[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  font-weight: bold;\n  margin-right: 8px;\n  color: var(--success-color);\n}\n.alert-danger[_ngcontent-%COMP%]::before {\n  content: "\\26a0";\n  font-weight: bold;\n  margin-right: 8px;\n  color: var(--danger-color);\n}\n.login-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4c49b8,\n      #212529) !important;\n  background-color: #4c49b8 !important;\n  color: #fff !important;\n  border: none !important;\n  border-bottom: none !important;\n}\n.login-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff !important;\n  margin: 0 !important;\n}\n@media (max-width: 768px) {\n  .login-section[_ngcontent-%COMP%] {\n    padding: 20px 0;\n  }\n  .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .card-body[_ngcontent-%COMP%] {\n    padding: 20px !important;\n  }\n  .form-control[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n    font-size: 16px;\n  }\n  .btn-primary[_ngcontent-%COMP%] {\n    padding: 12px 20px;\n  }\n  .password-toggle-btn[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n@media (max-width: 480px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 15px;\n  }\n  .card[_ngcontent-%COMP%] {\n    margin: 10px;\n  }\n  .logo[_ngcontent-%COMP%] {\n    max-height: 60px;\n    max-width: 150px;\n  }\n  .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .password-label-container[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 5px;\n  }\n  .password-toggle-btn[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\auth\\login\\login.component.ts", lineNumber: 40 });
})();

// src/app/layout/default-layout/default-footer/default-footer.component.ts
var _DefaultFooterComponent = class _DefaultFooterComponent extends FooterComponent {
  constructor() {
    super();
  }
};
_DefaultFooterComponent.\u0275fac = function DefaultFooterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DefaultFooterComponent)();
};
_DefaultFooterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DefaultFooterComponent, selectors: [["app-default-footer"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 8, vars: 0, consts: [[1, "ms-auto"], ["href", "https://smartxoft.com/", "target", "_blank"]], template: function DefaultFooterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2, "Copyright 2024 \xA9 All rights reserved.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 0);
    \u0275\u0275text(4, " Crafted By ");
    \u0275\u0275elementStart(5, "a", 1)(6, "span");
    \u0275\u0275text(7, " Smartxoft");
    \u0275\u0275elementEnd()()();
  }
} });
var DefaultFooterComponent = _DefaultFooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DefaultFooterComponent, { className: "DefaultFooterComponent", filePath: "src\\app\\layout\\default-layout\\default-footer\\default-footer.component.ts", lineNumber: 10 });
})();

// src/app/layout/default-layout/default-header/default-header.component.ts
var _c0 = () => ({ placement: "bottom-start" });
function DefaultHeaderComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DefaultHeaderComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-dropdown", 7)(1, "button", 8);
    \u0275\u0275element(2, "c-avatar", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 10);
    \u0275\u0275element(4, "li");
    \u0275\u0275elementStart(5, "li")(6, "a", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(7, "svg", 12);
    \u0275\u0275text(8, " Profile ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "li")(10, "a", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(11, "svg", 14);
    \u0275\u0275text(12, " Settings ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "li");
    \u0275\u0275element(14, "hr", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li")(16, "a", 16);
    \u0275\u0275listener("click", function DefaultHeaderComponent_ng_template_8_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(17, "svg", 17);
    \u0275\u0275text(18, " Logout ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("popperOptions", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("caret", false);
    \u0275\u0275advance();
    \u0275\u0275property("size", "md");
    \u0275\u0275advance(14);
    \u0275\u0275attribute("disabled", false);
  }
}
var _DefaultHeaderComponent = class _DefaultHeaderComponent extends HeaderComponent {
  constructor(authService) {
    super();
    this.authService = authService;
    this.sidebarId = input("sidebar1");
  }
  // Handle logout click - ENHANCED VERSION
  onLogout() {
    if (confirm("Are you sure you want to logout?")) {
      const logoutButton = document.querySelector("[data-logout-btn]");
      if (logoutButton) {
        logoutButton.style.pointerEvents = "none";
        logoutButton.style.opacity = "0.6";
      }
      this.clearApplicationState();
      this.authService.performLogout();
    }
  }
  // Clear any application-specific state
  clearApplicationState() {
  }
};
_DefaultHeaderComponent.\u0275fac = function DefaultHeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DefaultHeaderComponent)(\u0275\u0275directiveInject(AuthService));
};
_DefaultHeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DefaultHeaderComponent, selectors: [["app-default-header"]], inputs: { sidebarId: [1, "sidebarId"] }, standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 10, vars: 4, consts: [["userDropdown", ""], [1, "border-bottom", "px-4", 3, "fluid"], ["cHeaderToggler", "", "toggle", "visible", "aria-label", "Toggle sidebar navigation", 1, "btn", 2, "margin-inline-start", "-14px", 3, "cSidebarToggle"], ["cIcon", "", "name", "cilMenu", "size", "lg"], [1, "mx-0"], [4, "ngTemplateOutlet"], [1, "px-4", 3, "fluid"], ["variant", "nav-item", 3, "popperOptions"], ["cDropdownToggle", "", "aria-label", "Open user menu", 1, "py-0", "pe-0", 3, "caret"], ["shape", "rounded-1", "src", "./assets/images/avatars/8.jpg", "status", "success", "textColor", "primary", "alt", "User avatar", 3, "size"], ["cDropdownMenu", "", 1, "pt-0", "w-auto"], ["cDropdownItem", "", "routerLink", "/profile"], ["cIcon", "", "name", "cilUser", 1, "me-2"], ["cDropdownItem", "", "routerLink", "/settings"], ["cIcon", "", "name", "cilSettings", 1, "me-2"], ["cDropdownDivider", ""], ["cDropdownItem", "", "data-logout-btn", "", 2, "cursor", "pointer", 3, "click"], ["cIcon", "", "name", "cilAccountLogout", 1, "me-2"]], template: function DefaultHeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "c-container", 1)(2, "button", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(3, "svg", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "c-header-nav", 4);
    \u0275\u0275template(5, DefaultHeaderComponent_ng_container_5_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "c-container", 6);
    \u0275\u0275element(7, "c-breadcrumb-router");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(8, DefaultHeaderComponent_ng_template_8_Template, 19, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const userDropdown_r3 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275property("fluid", true);
    \u0275\u0275advance();
    \u0275\u0275property("cSidebarToggle", ctx.sidebarId());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", userDropdown_r3);
    \u0275\u0275advance();
    \u0275\u0275property("fluid", true);
  }
}, dependencies: [ContainerComponent, HeaderTogglerDirective, SidebarToggleDirective, IconDirective, HeaderNavComponent, RouterLink, NgTemplateOutlet, BreadcrumbRouterComponent, DropdownComponent, DropdownToggleDirective, AvatarComponent, DropdownMenuDirective, DropdownItemDirective, DropdownDividerDirective], encapsulation: 2 });
var DefaultHeaderComponent = _DefaultHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DefaultHeaderComponent, { className: "DefaultHeaderComponent", filePath: "src\\app\\layout\\default-layout\\default-header\\default-header.component.ts", lineNumber: 38 });
})();

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: DIR_DOCUMENT_FACTORY
});
function DIR_DOCUMENT_FACTORY() {
  return inject(DOCUMENT);
}
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var _Directionality = class _Directionality {
  constructor(_document) {
    this.value = "ltr";
    this.change = new EventEmitter();
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.value = _resolveDirectionality(bodyDir || htmlDir || "ltr");
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
};
_Directionality.\u0275fac = function Directionality_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Directionality)(\u0275\u0275inject(DIR_DOCUMENT, 8));
};
_Directionality.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Directionality,
  factory: _Directionality.\u0275fac,
  providedIn: "root"
});
var Directionality = _Directionality;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DIR_DOCUMENT]
    }]
  }], null);
})();
var _Dir = class _Dir {
  constructor() {
    this._dir = "ltr";
    this._isInitialized = false;
    this.change = new EventEmitter();
  }
  /** @docs-private */
  get dir() {
    return this._dir;
  }
  set dir(value) {
    const previousValue = this._dir;
    this._dir = _resolveDirectionality(value);
    this._rawDir = value;
    if (previousValue !== this._dir && this._isInitialized) {
      this.change.emit(this._dir);
    }
  }
  /** Current layout direction of the element. */
  get value() {
    return this.dir;
  }
  /** Initialize once default value has been set. */
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
};
_Dir.\u0275fac = function Dir_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Dir)();
};
_Dir.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _Dir,
  selectors: [["", "dir", ""]],
  hostVars: 1,
  hostBindings: function Dir_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("dir", ctx._rawDir);
    }
  },
  inputs: {
    dir: "dir"
  },
  outputs: {
    change: "dirChange"
  },
  exportAs: ["dir"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: Directionality,
    useExisting: _Dir
  }])]
});
var Dir = _Dir;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir",
      standalone: true
    }]
  }], null, {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var _BidiModule = class _BidiModule {
};
_BidiModule.\u0275fac = function BidiModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BidiModule)();
};
_BidiModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _BidiModule
});
_BidiModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var BidiModule = _BidiModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

// node_modules/ngx-scrollbar/fesm2022/ngx-scrollbar-smooth-scroll.mjs
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 1e-3;
var SUBDIVISION_PRECISION = 1e-7;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var float32ArraySupported = typeof Float32Array === "function";
function A(aA1, aA2) {
  return 1 - 3 * aA2 + 3 * aA1;
}
function B(aA1, aA2) {
  return 3 * aA2 - 6 * aA1;
}
function C(aA1) {
  return 3 * aA1;
}
function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
function getSlope(aT, aA1, aA2) {
  return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i = 0; i < NEWTON_ITERATIONS; ++i) {
    let currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    let currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
function LinearEasing(x) {
  return x;
}
function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }
  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }
  let sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (let i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    let lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    let dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    let guessForT = intervalStart + dist * kSampleStepSize;
    let initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return function BezierEasing(x) {
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
}
var SMOOTH_SCROLL_OPTIONS = new InjectionToken("SMOOTH_SCROLL_OPTIONS");
var _SmoothScrollManager = class _SmoothScrollManager {
  get _w() {
    return this._document.defaultView;
  }
  /**
   * Timing method
   */
  get _now() {
    return this._w.performance && this._w.performance.now ? this._w.performance.now.bind(this._w.performance) : Date.now;
  }
  constructor(_document, _platform, customDefaultOptions) {
    this._document = _document;
    this._platform = _platform;
    this._onGoingScrolls = /* @__PURE__ */ new Map();
    this._defaultOptions = __spreadValues({
      duration: 468,
      easing: {
        x1: 0.42,
        y1: 0,
        x2: 0.58,
        y2: 1
      }
    }, customDefaultOptions);
  }
  /**
   * changes scroll position inside an element
   */
  _scrollElement(el, x, y) {
    el.scrollLeft = x;
    el.scrollTop = y;
  }
  /**
   * Handles a given parameter of type HTMLElement, ElementRef or selector
   */
  _getElement(el, parent) {
    if (typeof el === "string") {
      return (parent || this._document).querySelector(el);
    }
    return coerceElement(el);
  }
  /**
   * Initializes a destroyer stream, re-initializes it if the element is already being scrolled
   */
  _initSmoothScroll(el) {
    if (this._onGoingScrolls.has(el)) {
      this._onGoingScrolls.get(el).next();
    }
    return this._onGoingScrolls.set(el, new Subject()).get(el);
  }
  /**
   * Checks if smooth scroll has reached, cleans up the smooth scroll stream and resolves its promise
   */
  _isFinished(context, destroyed, resolve) {
    if (context.currentX !== context.x || context.currentY !== context.y) {
      return true;
    }
    destroyed.next();
    resolve();
    return false;
  }
  /**
   * Terminates an ongoing smooth scroll
   */
  _interrupted(el, destroyed) {
    return merge(fromEvent(el, "wheel", {
      passive: true,
      capture: true
    }), fromEvent(el, "touchmove", {
      passive: true,
      capture: true
    }), destroyed).pipe(take(1));
  }
  /**
   * Deletes the destroyer function, runs if the smooth scroll has finished or interrupted
   */
  _destroy(el, destroyed) {
    destroyed.complete();
    this._onGoingScrolls.delete(el);
  }
  /**
   * A function called recursively that, given a context, steps through scrolling
   */
  _step(context) {
    return new Observable((subscriber) => {
      let elapsed = (this._now() - context.startTime) / context.duration;
      elapsed = elapsed > 1 ? 1 : elapsed;
      const value = context.easing(elapsed);
      context.currentX = context.startX + (context.x - context.startX) * value;
      context.currentY = context.startY + (context.y - context.startY) * value;
      this._scrollElement(context.scrollable, context.currentX, context.currentY);
      animationFrameScheduler.schedule(() => subscriber.next(context));
    });
  }
  _applyScrollToOptions(el, options) {
    if (!options.duration) {
      this._scrollElement(el, options.left, options.top);
      return Promise.resolve();
    }
    const destroyed = this._initSmoothScroll(el);
    const context = {
      scrollable: el,
      startTime: this._now(),
      startX: el.scrollLeft,
      startY: el.scrollTop,
      x: options.left == null ? el.scrollLeft : ~~options.left,
      y: options.top == null ? el.scrollTop : ~~options.top,
      duration: options.duration,
      easing: bezier(options.easing.x1, options.easing.y1, options.easing.x2, options.easing.y2)
    };
    return new Promise((resolve) => {
      of(null).pipe(expand(() => this._step(context).pipe(takeWhile((currContext) => this._isFinished(currContext, destroyed, resolve)))), takeUntil(this._interrupted(el, destroyed)), finalize(() => this._destroy(el, destroyed))).subscribe();
    });
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param scrollable element
   * @param customOptions specified the offsets to scroll to.
   */
  scrollTo(scrollable, customOptions) {
    if (isPlatformBrowser(this._platform)) {
      const el = this._getElement(scrollable);
      const isRtl = getComputedStyle(el).direction === "rtl";
      const rtlScrollAxisType = getRtlScrollAxisType();
      const options = __spreadValues(__spreadValues(__spreadValues({}, this._defaultOptions), customOptions), {
        // Rewrite start & end offsets as right or left offsets.
        left: customOptions.left == null ? isRtl ? customOptions.end : customOptions.start : customOptions.left,
        right: customOptions.right == null ? isRtl ? customOptions.start : customOptions.end : customOptions.right
      });
      if (options.bottom != null) {
        options.top = el.scrollHeight - el.clientHeight - options.bottom;
      }
      if (isRtl && rtlScrollAxisType !== 0) {
        if (options.left != null) {
          options.right = el.scrollWidth - el.clientWidth - options.left;
        }
        if (rtlScrollAxisType === 2) {
          options.left = options.right;
        } else if (rtlScrollAxisType === 1) {
          options.left = options.right ? -options.right : options.right;
        }
      } else {
        if (options.right != null) {
          options.left = el.scrollWidth - el.clientWidth - options.right;
        }
      }
      return this._applyScrollToOptions(el, options);
    }
    return Promise.resolve();
  }
  /**
   * Scroll to element by reference or selector
   */
  scrollToElement(scrollable, target, customOptions = {}) {
    const scrollableEl = this._getElement(scrollable);
    const targetEl = this._getElement(target, scrollableEl);
    const options = __spreadValues(__spreadValues({}, customOptions), {
      left: targetEl.offsetLeft + (customOptions.left || 0),
      top: targetEl.offsetTop + (customOptions.top || 0)
    });
    return targetEl ? this.scrollTo(scrollableEl, options) : Promise.resolve();
  }
};
_SmoothScrollManager.\u0275fac = function SmoothScrollManager_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SmoothScrollManager)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(PLATFORM_ID), \u0275\u0275inject(SMOOTH_SCROLL_OPTIONS, 8));
};
_SmoothScrollManager.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SmoothScrollManager,
  factory: _SmoothScrollManager.\u0275fac,
  providedIn: "root"
});
var SmoothScrollManager = _SmoothScrollManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmoothScrollManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [SMOOTH_SCROLL_OPTIONS]
      }]
    }];
  }, null);
})();
var _SmoothScroll = class _SmoothScroll {
  constructor(element, smoothScroll) {
    this.element = element;
    this.smoothScroll = smoothScroll;
  }
  scrollTo(options) {
    return this.smoothScroll.scrollTo(this.element, options);
  }
  scrollToElement(target, options) {
    return this.smoothScroll.scrollToElement(this.element, target, options);
  }
};
_SmoothScroll.\u0275fac = function SmoothScroll_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SmoothScroll)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(SmoothScrollManager));
};
_SmoothScroll.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SmoothScroll,
  selectors: [["", "smoothScroll", ""], ["", "smooth-scroll", ""]],
  exportAs: ["smoothScroll"],
  standalone: true
});
var SmoothScroll = _SmoothScroll;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmoothScroll, [{
    type: Directive,
    args: [{
      selector: "[smoothScroll], [smooth-scroll]",
      exportAs: "smoothScroll",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: SmoothScrollManager
    }];
  }, null);
})();

// node_modules/ngx-scrollbar/fesm2022/ngx-scrollbar.mjs
var _c02 = ["scrollbarY"];
var _c1 = ["scrollbarX"];
var _c2 = ["*"];
function NgScrollbar_ng_container_5_scrollbar_x_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "scrollbar-x", null, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("scrollable", ctx_r0.state.isHorizontallyScrollable)("fit", ctx_r0.state.verticalUsed);
  }
}
function NgScrollbar_ng_container_5_scrollbar_y_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "scrollbar-y", null, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("scrollable", ctx_r0.state.isVerticallyScrollable)("fit", ctx_r0.state.horizontalUsed);
  }
}
function NgScrollbar_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NgScrollbar_ng_container_5_scrollbar_x_1_Template, 2, 2, "scrollbar-x", 5)(2, NgScrollbar_ng_container_5_scrollbar_y_2_Template, 2, 2, "scrollbar-y", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.state.horizontalUsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.state.verticalUsed);
  }
}
var _NgAttr = class _NgAttr {
  constructor(el) {
    this.el = el;
  }
  set ngAttr(attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      this.el.nativeElement.setAttribute(key, value);
    }
  }
};
_NgAttr.\u0275fac = function NgAttr_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgAttr)(\u0275\u0275directiveInject(ElementRef));
};
_NgAttr.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgAttr,
  selectors: [["", "ngAttr", ""]],
  inputs: {
    ngAttr: "ngAttr"
  },
  standalone: true
});
var NgAttr = _NgAttr;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgAttr, [{
    type: Directive,
    args: [{
      selector: "[ngAttr]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    ngAttr: [{
      type: Input
    }]
  });
})();
function preventSelection(doc) {
  return tap(() => {
    doc.onselectstart = () => false;
  });
}
function enableSelection(doc) {
  return tap(() => {
    doc.onselectstart = null;
  });
}
function stopPropagation() {
  return tap((e) => e.stopPropagation());
}
function isWithinBounds(e, rect) {
  return e.clientX >= rect.left && e.clientX <= rect.left + rect.width && e.clientY >= rect.top && e.clientY <= rect.top + rect.height;
}
var _ScrollViewport = class _ScrollViewport {
  // Get viewport size, clientHeight or clientWidth
  get clientHeight() {
    return this.nativeElement.clientHeight;
  }
  get clientWidth() {
    return this.nativeElement.clientWidth;
  }
  get scrollHeight() {
    return this.nativeElement.scrollHeight;
  }
  get scrollWidth() {
    return this.nativeElement.scrollWidth;
  }
  // Get viewport scroll offset, scrollTop or scrollLeft
  get scrollTop() {
    return this.nativeElement.scrollTop;
  }
  get scrollLeft() {
    return this.nativeElement.scrollLeft;
  }
  // Get the available scrollable size
  get scrollMaxX() {
    return this.scrollWidth - this.clientWidth;
  }
  get scrollMaxY() {
    return this.scrollHeight - this.clientHeight;
  }
  get contentHeight() {
    return this.contentWrapperElement?.clientHeight || 0;
  }
  get contentWidth() {
    return this.contentWrapperElement?.clientWidth || 0;
  }
  constructor(viewPort) {
    this.viewPort = viewPort;
    this.nativeElement = viewPort.nativeElement;
  }
  /**
   * Activate viewport pointer events such as 'hovered' and 'clicked' events
   */
  activatePointerEvents(propagate, destroyed) {
    this.hovered = new Observable((subscriber) => {
      const mouseMoveStream = fromEvent(this.nativeElement, "mousemove", {
        passive: true
      });
      const mouseMove = propagate ? mouseMoveStream : mouseMoveStream.pipe(stopPropagation());
      const mouseLeave = fromEvent(this.nativeElement, "mouseleave", {
        passive: true
      }).pipe(map(() => false));
      merge(mouseMove, mouseLeave).pipe(tap((e) => subscriber.next(e)), takeUntil(destroyed)).subscribe();
    });
    this.clicked = new Observable((subscriber) => {
      const mouseDown = fromEvent(this.nativeElement, "mousedown", {
        passive: true
      }).pipe(tap((e) => subscriber.next(e)));
      const mouseUp = fromEvent(this.nativeElement, "mouseup", {
        passive: true
      }).pipe(tap(() => subscriber.next(false)));
      mouseDown.pipe(switchMap(() => mouseUp), takeUntil(destroyed)).subscribe();
    });
  }
  /**
   * Set this directive as a non-functional wrapper, called when a custom viewport is used
   */
  setAsWrapper() {
    this.nativeElement.className = "ng-native-scrollbar-hider ng-scroll-layer";
    if (this.nativeElement.firstElementChild) {
      this.nativeElement.firstElementChild.className = "ng-scroll-layer";
    }
  }
  /**
   * Set this directive as  the viewport, called when no custom viewport is used
   */
  setAsViewport(customClassName) {
    this.nativeElement.className += ` ng-native-scrollbar-hider ng-scroll-viewport ${customClassName}`;
    if (this.nativeElement.firstElementChild) {
      this.contentWrapperElement = this.nativeElement.firstElementChild;
      this.contentWrapperElement.classList.add("ng-scroll-content");
    }
  }
  /**
   * Scroll viewport vertically
   */
  scrollYTo(value) {
    this.nativeElement.scrollTop = value;
  }
  /**
   * Scroll viewport horizontally
   */
  scrollXTo(value) {
    this.nativeElement.scrollLeft = value;
  }
};
_ScrollViewport.\u0275fac = function ScrollViewport_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScrollViewport)(\u0275\u0275directiveInject(ElementRef));
};
_ScrollViewport.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _ScrollViewport,
  selectors: [["", "scrollViewport", ""]],
  standalone: true
});
var ScrollViewport = _ScrollViewport;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollViewport, [{
    type: Directive,
    args: [{
      selector: "[scrollViewport]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, null);
})();
var _NgScrollbarBase = class _NgScrollbarBase {
};
_NgScrollbarBase.\u0275fac = function NgScrollbarBase_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgScrollbarBase)();
};
_NgScrollbarBase.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgScrollbarBase
});
var NgScrollbarBase = _NgScrollbarBase;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbarBase, [{
    type: Directive
  }], null, null);
})();
var _TrackAdapter = class _TrackAdapter {
  // Stream that emits when the track element is clicked
  get clicked() {
    const mouseDown = fromEvent(this.trackElement, "mousedown", {
      passive: true
    }).pipe(stopPropagation(), preventSelection(this.document));
    const mouseup = fromEvent(this.document, "mouseup", {
      passive: true
    }).pipe(stopPropagation(), enableSelection(this.document), switchMap(() => EMPTY));
    return merge(mouseDown, mouseup);
  }
  // Get track client rect
  get clientRect() {
    return this.trackElement.getBoundingClientRect();
  }
  constructor(cmp, trackElement, document2) {
    this.cmp = cmp;
    this.trackElement = trackElement;
    this.document = document2;
  }
  /**
   * Stream that emits when scrollbar track is clicked
   */
  onTrackClicked(e, thumbSize, scrollSize) {
    return of(e).pipe(
      map((e2) => e2[this.pageProperty]),
      // Calculate scrollTo position
      map((pageOffset) => {
        const clickOffset = pageOffset - this.offset;
        const offset = clickOffset - thumbSize / 2;
        const ratio = offset / this.size;
        return ratio * scrollSize;
      }),
      // Smooth scroll to position
      tap((value) => {
        this.cmp.scrollTo(__spreadProps(__spreadValues({}, this.mapToScrollToOption(value)), {
          duration: coerceNumberProperty(this.cmp.trackClickScrollDuration)
        }));
      })
    );
  }
};
_TrackAdapter.\u0275fac = function TrackAdapter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrackAdapter)(\u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(HTMLElement), \u0275\u0275directiveInject(Document));
};
_TrackAdapter.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TrackAdapter
});
var TrackAdapter = _TrackAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackAdapter, [{
    type: Directive
  }], function() {
    return [{
      type: NgScrollbarBase
    }, {
      type: HTMLElement
    }, {
      type: Document
    }];
  }, null);
})();
var _TrackXDirective = class _TrackXDirective extends TrackAdapter {
  get pageProperty() {
    return "pageX";
  }
  get offset() {
    return this.clientRect.left;
  }
  get size() {
    return this.trackElement.clientWidth;
  }
  constructor(cmp, trackElement, document2) {
    super(cmp, trackElement.nativeElement, document2);
    this.cmp = cmp;
    this.document = document2;
  }
  mapToScrollToOption(value) {
    return {
      left: value
    };
  }
};
_TrackXDirective.\u0275fac = function TrackXDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrackXDirective)(\u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DOCUMENT));
};
_TrackXDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TrackXDirective,
  selectors: [["", "scrollbarTrackX", ""]],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var TrackXDirective = _TrackXDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackXDirective, [{
    type: Directive,
    args: [{
      selector: "[scrollbarTrackX]",
      standalone: true
    }]
  }], function() {
    return [{
      type: NgScrollbarBase
    }, {
      type: ElementRef
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var _TrackYDirective = class _TrackYDirective extends TrackAdapter {
  get pageProperty() {
    return "pageY";
  }
  get offset() {
    return this.clientRect.top;
  }
  get size() {
    return this.trackElement.clientHeight;
  }
  constructor(cmp, trackElement, document2) {
    super(cmp, trackElement.nativeElement, document2);
    this.cmp = cmp;
    this.document = document2;
  }
  mapToScrollToOption(value) {
    return {
      top: value
    };
  }
};
_TrackYDirective.\u0275fac = function TrackYDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrackYDirective)(\u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DOCUMENT));
};
_TrackYDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TrackYDirective,
  selectors: [["", "scrollbarTrackY", ""]],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var TrackYDirective = _TrackYDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackYDirective, [{
    type: Directive,
    args: [{
      selector: "[scrollbarTrackY]",
      standalone: true
    }]
  }], function() {
    return [{
      type: NgScrollbarBase
    }, {
      type: ElementRef
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var _ThumbAdapter = class _ThumbAdapter {
  get trackMax() {
    return this.track.size - this.size;
  }
  // Get thumb client rect
  get clientRect() {
    return this.thumbElement.getBoundingClientRect();
  }
  // Stream that emits when scrollbar thumb is clicked
  get clicked() {
    return fromEvent(this.thumbElement, "mousedown", {
      passive: true
    }).pipe(stopPropagation());
  }
  constructor(cmp, track, thumbElement, document2) {
    this.cmp = cmp;
    this.track = track;
    this.thumbElement = thumbElement;
    this.document = document2;
    this._dragging = new Subject();
    this.dragging = this._dragging.pipe(distinctUntilChanged());
  }
  // Calculate and update thumb position and size
  update() {
    const size = calculateThumbSize(this.track.size, this.viewportScrollSize, this.cmp.minThumbSize);
    const position = calculateThumbPosition(this.viewportScrollOffset, this.viewportScrollMax, this.trackMax);
    animationFrameScheduler.schedule(() => this.updateStyles(this.handleDirection(position, this.trackMax), size));
  }
  /**
   * Stream that emits the 'scrollTo' position when a scrollbar thumb element is dragged
   * This function is called by thumb drag event using viewport or scrollbar pointer events
   */
  dragged(event) {
    let trackMaxStart;
    let scrollMaxStart;
    const dragStart = of(event).pipe(preventSelection(this.document), tap(() => {
      trackMaxStart = this.trackMax;
      scrollMaxStart = this.viewportScrollMax;
      this.setDragging(true);
    }));
    const dragging = fromEvent(this.document, "mousemove", {
      capture: true,
      passive: true
    }).pipe(stopPropagation());
    const dragEnd = fromEvent(this.document, "mouseup", {
      capture: true
    }).pipe(stopPropagation(), enableSelection(this.document), tap(() => this.setDragging(false)));
    return dragStart.pipe(map((e) => e[this.pageProperty]), map((pageOffset) => pageOffset - this.dragStartOffset), mergeMap((mouseDownOffset) => dragging.pipe(
      map((e) => e[this.clientProperty]),
      // Calculate how far the pointer is from the top/left of the scrollbar (minus the dragOffset).
      map((mouseOffset) => mouseOffset - this.track.offset),
      map((offset) => scrollMaxStart * (offset - mouseDownOffset) / trackMaxStart),
      map((position) => this.handleDrag(position, scrollMaxStart)),
      tap((position) => this.scrollTo(position)),
      takeUntil(dragEnd)
    )));
  }
};
_ThumbAdapter.\u0275fac = function ThumbAdapter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThumbAdapter)(\u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(TrackAdapter), \u0275\u0275directiveInject(HTMLElement), \u0275\u0275directiveInject(Document));
};
_ThumbAdapter.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _ThumbAdapter,
  outputs: {
    dragging: "dragging"
  }
});
var ThumbAdapter = _ThumbAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbAdapter, [{
    type: Directive
  }], function() {
    return [{
      type: NgScrollbarBase
    }, {
      type: TrackAdapter
    }, {
      type: HTMLElement
    }, {
      type: Document
    }];
  }, {
    dragging: [{
      type: Output
    }]
  });
})();
function calculateThumbSize(trackSize, contentSize, minThumbSize) {
  const scrollbarRatio = trackSize / contentSize;
  const thumbSize = scrollbarRatio * trackSize;
  return Math.max(~~thumbSize, minThumbSize);
}
function calculateThumbPosition(scrollPosition, scrollMax, trackMax) {
  return scrollPosition * trackMax / scrollMax;
}
var _ThumbXDirective = class _ThumbXDirective extends ThumbAdapter {
  get clientProperty() {
    return "clientX";
  }
  get pageProperty() {
    return "pageX";
  }
  get viewportScrollSize() {
    return this.cmp.viewport.scrollWidth;
  }
  get viewportScrollOffset() {
    return this.cmp.viewport.scrollLeft;
  }
  get viewportScrollMax() {
    return this.cmp.viewport.scrollMaxX;
  }
  get dragStartOffset() {
    return this.clientRect.left + this.document.defaultView.pageXOffset || 0;
  }
  get size() {
    return this.thumbElement.clientWidth;
  }
  constructor(cmp, track, element, document2, dir) {
    super(cmp, track, element.nativeElement, document2);
    this.cmp = cmp;
    this.track = track;
    this.element = element;
    this.document = document2;
    this.dir = dir;
  }
  updateStyles(position, size) {
    this.thumbElement.style.width = `${size}px`;
    this.thumbElement.style.transform = `translate3d(${position}px, 0, 0)`;
  }
  handleDrag(position, scrollMax) {
    if (this.dir.value === "rtl") {
      if (this.cmp.manager.rtlScrollAxisType === 1) {
        return position - scrollMax;
      }
      if (this.cmp.manager.rtlScrollAxisType === 2) {
        return scrollMax - position;
      }
    }
    return position;
  }
  handleDirection(position, trackMax) {
    if (this.dir.value === "rtl") {
      if (this.cmp.manager.rtlScrollAxisType === 2) {
        return -position;
      }
      if (this.cmp.manager.rtlScrollAxisType === 0) {
        return position - trackMax;
      }
    }
    return position;
  }
  setDragging(value) {
    this.cmp.setDragging({
      horizontalDragging: value
    });
  }
  scrollTo(position) {
    this.cmp.viewport.scrollXTo(position);
  }
};
_ThumbXDirective.\u0275fac = function ThumbXDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThumbXDirective)(\u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(TrackXDirective), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(Directionality));
};
_ThumbXDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _ThumbXDirective,
  selectors: [["", "scrollbarThumbX", ""]],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var ThumbXDirective = _ThumbXDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbXDirective, [{
    type: Directive,
    args: [{
      selector: "[scrollbarThumbX]",
      standalone: true
    }]
  }], function() {
    return [{
      type: NgScrollbarBase
    }, {
      type: TrackXDirective
    }, {
      type: ElementRef
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: Directionality
    }];
  }, null);
})();
var _ThumbYDirective = class _ThumbYDirective extends ThumbAdapter {
  get pageProperty() {
    return "pageY";
  }
  get viewportScrollSize() {
    return this.cmp.viewport.scrollHeight;
  }
  get viewportScrollOffset() {
    return this.cmp.viewport.scrollTop;
  }
  get viewportScrollMax() {
    return this.cmp.viewport.scrollMaxY;
  }
  get clientProperty() {
    return "clientY";
  }
  get dragStartOffset() {
    return this.clientRect.top + this.document.defaultView.pageYOffset || 0;
  }
  get size() {
    return this.thumbElement.clientHeight;
  }
  constructor(cmp, track, element, document2) {
    super(cmp, track, element.nativeElement, document2);
    this.cmp = cmp;
    this.track = track;
    this.element = element;
    this.document = document2;
  }
  updateStyles(position, size) {
    this.thumbElement.style.height = `${size}px`;
    this.thumbElement.style.transform = `translate3d(0px, ${position}px, 0)`;
  }
  handleDrag(position) {
    return position;
  }
  handleDirection(position) {
    return position;
  }
  setDragging(value) {
    this.cmp.setDragging({
      verticalDragging: value
    });
  }
  scrollTo(position) {
    this.cmp.viewport.scrollYTo(position);
  }
};
_ThumbYDirective.\u0275fac = function ThumbYDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThumbYDirective)(\u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(TrackYDirective), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DOCUMENT));
};
_ThumbYDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _ThumbYDirective,
  selectors: [["", "scrollbarThumbY", ""]],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var ThumbYDirective = _ThumbYDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbYDirective, [{
    type: Directive,
    args: [{
      selector: "[scrollbarThumbY]",
      standalone: true
    }]
  }], function() {
    return [{
      type: NgScrollbarBase
    }, {
      type: TrackYDirective
    }, {
      type: ElementRef
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var _Scrollbar = class _Scrollbar {
  constructor(el, cmp, platform, document2, zone) {
    this.el = el;
    this.cmp = cmp;
    this.platform = platform;
    this.document = document2;
    this.zone = zone;
    this.destroyed = new Subject();
  }
  /**
   * Activate scrollbar pointer events
   */
  activatePointerEvents() {
    let thumbDragEvent;
    let trackClickEvent;
    let trackHoveredEvent;
    if (this.cmp.pointerEventsMethod === "viewport") {
      this.viewportTrackClicked = new Subject();
      this.viewportThumbClicked = new Subject();
      this.cmp.viewport.activatePointerEvents(this.cmp.viewportPropagateMouseMove, this.destroyed);
      thumbDragEvent = this.viewportThumbClicked;
      trackClickEvent = this.viewportTrackClicked;
      trackHoveredEvent = this.cmp.viewport.hovered.pipe(
        // Check if track is hovered
        map((e) => e ? isWithinBounds(e, this.el.getBoundingClientRect()) : false),
        distinctUntilChanged(),
        // Enable / disable text selection
        tap((hovered) => this.document.onselectstart = hovered ? () => false : null)
      );
      this.cmp.viewport.clicked.pipe(tap((e) => {
        if (e) {
          if (isWithinBounds(e, this.thumb.clientRect)) {
            this.viewportThumbClicked.next(e);
          } else if (isWithinBounds(e, this.track.clientRect)) {
            this.cmp.setClicked(true);
            this.viewportTrackClicked.next(e);
          }
        } else {
          this.cmp.setClicked(false);
        }
      }), takeUntil(this.destroyed)).subscribe();
    } else {
      thumbDragEvent = this.thumb.clicked;
      trackClickEvent = this.track.clicked;
      trackHoveredEvent = this.hovered;
    }
    return merge(
      // Activate scrollbar hovered event
      trackHoveredEvent.pipe(tap((e) => this.setHovered(e))),
      // Activate scrollbar thumb drag event
      thumbDragEvent.pipe(switchMap((e) => this.thumb.dragged(e))),
      // Activate scrollbar track click event
      trackClickEvent.pipe(switchMap((e) => this.track.onTrackClicked(e, this.thumb.size, this.viewportScrollSize)))
    );
  }
  // Stream that emits when the track element is hovered
  get hovered() {
    const mouseEnter = fromEvent(this.el, "mouseenter", {
      passive: true
    }).pipe(stopPropagation(), map(() => true));
    const mouseLeave = fromEvent(this.el, "mouseleave", {
      passive: true
    }).pipe(stopPropagation(), map(() => false));
    return merge(mouseEnter, mouseLeave);
  }
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      if (!(this.platform.IOS || this.platform.ANDROID) && !this.cmp.pointerEventsDisabled) {
        this.activatePointerEvents().pipe(takeUntil(this.destroyed)).subscribe();
      }
      merge(this.cmp.scrolled, this.cmp.updated).pipe(tap(() => this.thumb?.update()), takeUntil(this.destroyed)).subscribe();
    });
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
    if (this.viewportThumbClicked && this.viewportTrackClicked) {
      this.viewportTrackClicked.complete();
      this.viewportThumbClicked.complete();
    }
  }
};
_Scrollbar.\u0275fac = function Scrollbar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Scrollbar)(\u0275\u0275directiveInject(HTMLElement), \u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(Document), \u0275\u0275directiveInject(NgZone));
};
_Scrollbar.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _Scrollbar
});
var Scrollbar = _Scrollbar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Scrollbar, [{
    type: Directive
  }], function() {
    return [{
      type: HTMLElement
    }, {
      type: NgScrollbarBase
    }, {
      type: Platform
    }, {
      type: Document
    }, {
      type: NgZone
    }];
  }, null);
})();
var _ScrollbarY = class _ScrollbarY extends Scrollbar {
  get viewportScrollSize() {
    return this.cmp.viewport.scrollHeight;
  }
  constructor(el, cmp, platform, document2, zone) {
    super(el.nativeElement, cmp, platform, document2, zone);
    this.cmp = cmp;
    this.platform = platform;
    this.document = document2;
    this.zone = zone;
  }
  setHovered(value) {
    this.cmp.setHovered({
      verticalHovered: value
    });
  }
};
_ScrollbarY.\u0275fac = function ScrollbarY_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScrollbarY)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(NgZone));
};
_ScrollbarY.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ScrollbarY,
  selectors: [["scrollbar-y"]],
  viewQuery: function ScrollbarY_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(TrackYDirective, 7);
      \u0275\u0275viewQuery(ThumbYDirective, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.track = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.thumb = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function ScrollbarY_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("scrollbar-control", true);
    }
  },
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  decls: 2,
  vars: 6,
  consts: [["scrollbarTrackY", ""], ["scrollbarThumbY", ""]],
  template: function ScrollbarY_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMapInterpolate1("ng-scrollbar-track ", ctx.cmp.trackClass, "");
      \u0275\u0275advance();
      \u0275\u0275classMapInterpolate1("ng-scrollbar-thumb ", ctx.cmp.thumbClass, "");
    }
  },
  dependencies: [TrackYDirective, ThumbYDirective],
  styles: [".ng-scrollbar-wrapper>scrollbar-y.scrollbar-control{width:var(--vertical-scrollbar-total-size)}  .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control>.ng-scrollbar-track{width:var(--vertical-scrollbar-size);height:calc(100% - var(--scrollbar-padding) * 2)}  .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control>.ng-scrollbar-track>.ng-scrollbar-thumb{height:0;width:100%}  .ng-scrollbar-wrapper[verticalHovered=true]>scrollbar-y.scrollbar-control .ng-scrollbar-thumb,   .ng-scrollbar-wrapper[verticalDragging=true]>scrollbar-y.scrollbar-control .ng-scrollbar-thumb{background-color:var(--scrollbar-thumb-hover-color)}  .ng-scrollbar-wrapper[deactivated=false]>scrollbar-y.scrollbar-control{top:0;bottom:0}  .ng-scrollbar-wrapper[deactivated=false][dir=ltr]>scrollbar-y.scrollbar-control{right:0;left:unset}  .ng-scrollbar-wrapper[deactivated=false][dir=ltr][position=invertY]>scrollbar-y.scrollbar-control,   .ng-scrollbar-wrapper[deactivated=false][dir=ltr][position=invertAll]>scrollbar-y.scrollbar-control{left:0;right:unset}  .ng-scrollbar-wrapper[deactivated=false][dir=rtl]>scrollbar-y.scrollbar-control{left:0;right:unset}  .ng-scrollbar-wrapper[deactivated=false][dir=rtl][position=invertY]>scrollbar-y.scrollbar-control,   .ng-scrollbar-wrapper[deactivated=false][dir=rtl][position=invertAll]>scrollbar-y.scrollbar-control{left:unset;right:0}  .ng-scrollbar-wrapper[deactivated=false][track=all]>scrollbar-y.scrollbar-control[fit=true]{bottom:var(--scrollbar-total-size);top:0}  .ng-scrollbar-wrapper[deactivated=false][track=all][position=invertX]>scrollbar-y.scrollbar-control[fit=true],   .ng-scrollbar-wrapper[deactivated=false][track=all][position=invertAll]>scrollbar-y.scrollbar-control[fit=true]{top:var(--scrollbar-total-size);bottom:0}"],
  changeDetection: 0
});
var ScrollbarY = _ScrollbarY;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarY, [{
    type: Component,
    args: [{
      selector: "scrollbar-y",
      host: {
        "[class.scrollbar-control]": "true"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div scrollbarTrackY class="ng-scrollbar-track {{cmp.trackClass}}">
      <div scrollbarThumbY class="ng-scrollbar-thumb {{cmp.thumbClass}}"></div>
    </div>
  `,
      standalone: true,
      imports: [TrackYDirective, ThumbYDirective],
      styles: ["::ng-deep .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control{width:var(--vertical-scrollbar-total-size)}::ng-deep .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control>.ng-scrollbar-track{width:var(--vertical-scrollbar-size);height:calc(100% - var(--scrollbar-padding) * 2)}::ng-deep .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control>.ng-scrollbar-track>.ng-scrollbar-thumb{height:0;width:100%}::ng-deep .ng-scrollbar-wrapper[verticalHovered=true]>scrollbar-y.scrollbar-control .ng-scrollbar-thumb,::ng-deep .ng-scrollbar-wrapper[verticalDragging=true]>scrollbar-y.scrollbar-control .ng-scrollbar-thumb{background-color:var(--scrollbar-thumb-hover-color)}::ng-deep .ng-scrollbar-wrapper[deactivated=false]>scrollbar-y.scrollbar-control{top:0;bottom:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=ltr]>scrollbar-y.scrollbar-control{right:0;left:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=ltr][position=invertY]>scrollbar-y.scrollbar-control,::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=ltr][position=invertAll]>scrollbar-y.scrollbar-control{left:0;right:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=rtl]>scrollbar-y.scrollbar-control{left:0;right:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=rtl][position=invertY]>scrollbar-y.scrollbar-control,::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=rtl][position=invertAll]>scrollbar-y.scrollbar-control{left:unset;right:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all]>scrollbar-y.scrollbar-control[fit=true]{bottom:var(--scrollbar-total-size);top:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][position=invertX]>scrollbar-y.scrollbar-control[fit=true],::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][position=invertAll]>scrollbar-y.scrollbar-control[fit=true]{top:var(--scrollbar-total-size);bottom:0}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgScrollbarBase
    }, {
      type: Platform
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: NgZone
    }];
  }, {
    track: [{
      type: ViewChild,
      args: [TrackYDirective, {
        static: true
      }]
    }],
    thumb: [{
      type: ViewChild,
      args: [ThumbYDirective, {
        static: true
      }]
    }]
  });
})();
var _ScrollbarX = class _ScrollbarX extends Scrollbar {
  get viewportScrollSize() {
    return this.cmp.viewport.scrollWidth;
  }
  constructor(el, cmp, platform, document2, zone) {
    super(el.nativeElement, cmp, platform, document2, zone);
    this.cmp = cmp;
    this.platform = platform;
    this.document = document2;
    this.zone = zone;
  }
  setHovered(value) {
    this.cmp.setHovered({
      horizontalHovered: value
    });
  }
};
_ScrollbarX.\u0275fac = function ScrollbarX_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScrollbarX)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgScrollbarBase), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(NgZone));
};
_ScrollbarX.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ScrollbarX,
  selectors: [["scrollbar-x"]],
  viewQuery: function ScrollbarX_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(TrackXDirective, 7);
      \u0275\u0275viewQuery(ThumbXDirective, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.track = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.thumb = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function ScrollbarX_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("scrollbar-control", true);
    }
  },
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  decls: 2,
  vars: 6,
  consts: [["scrollbarTrackX", ""], ["scrollbarThumbX", ""]],
  template: function ScrollbarX_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMapInterpolate1("ng-scrollbar-track ", ctx.cmp.trackClass, "");
      \u0275\u0275advance();
      \u0275\u0275classMapInterpolate1("ng-scrollbar-thumb ", ctx.cmp.thumbClass, "");
    }
  },
  dependencies: [TrackXDirective, ThumbXDirective],
  styles: [".ng-scrollbar-wrapper>scrollbar-x.scrollbar-control{height:var(--horizontal-scrollbar-total-size)}  .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control>.ng-scrollbar-track{height:var(--horizontal-scrollbar-size);width:calc(100% - var(--scrollbar-padding) * 2)}  .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control>.ng-scrollbar-track>.ng-scrollbar-thumb{width:0;height:100%}  .ng-scrollbar-wrapper[horizontalHovered=true]>scrollbar-x.scrollbar-control .ng-scrollbar-thumb,   .ng-scrollbar-wrapper[horizontalDragging=true]>scrollbar-x.scrollbar-control .ng-scrollbar-thumb{background-color:var(--scrollbar-thumb-hover-color)}  .ng-scrollbar-wrapper[position=invertX]>scrollbar-x.scrollbar-control,   .ng-scrollbar-wrapper[position=invertAll]>scrollbar-x.scrollbar-control{top:0;bottom:unset}  .ng-scrollbar-wrapper[deactivated=false]>scrollbar-x.scrollbar-control{left:0;right:0;bottom:0;top:unset}  .ng-scrollbar-wrapper[deactivated=false][position=invertX]>scrollbar-x.scrollbar-control,   .ng-scrollbar-wrapper[deactivated=false][position=invertAll]>scrollbar-x.scrollbar-control{top:0;bottom:unset}  .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr]>scrollbar-x.scrollbar-control[fit=true]{right:var(--scrollbar-total-size);left:0}  .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr][position=invertY]>scrollbar-x.scrollbar-control[fit=true],   .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr][position=invertAll]>scrollbar-x.scrollbar-control[fit=true]{left:var(--scrollbar-total-size);right:0}  .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl]>scrollbar-x.scrollbar-control[fit=true]{left:var(--scrollbar-total-size);right:0}  .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl][position=invertY]>scrollbar-x.scrollbar-control[fit=true],   .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl][position=invertAll]>scrollbar-x.scrollbar-control[fit=true]{right:var(--scrollbar-total-size);left:0}"],
  changeDetection: 0
});
var ScrollbarX = _ScrollbarX;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarX, [{
    type: Component,
    args: [{
      selector: "scrollbar-x",
      host: {
        "[class.scrollbar-control]": "true"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div scrollbarTrackX class="ng-scrollbar-track {{cmp.trackClass}}">
      <div scrollbarThumbX class="ng-scrollbar-thumb {{cmp.thumbClass}}"></div>
    </div>
  `,
      standalone: true,
      imports: [TrackXDirective, ThumbXDirective],
      styles: ["::ng-deep .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control{height:var(--horizontal-scrollbar-total-size)}::ng-deep .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control>.ng-scrollbar-track{height:var(--horizontal-scrollbar-size);width:calc(100% - var(--scrollbar-padding) * 2)}::ng-deep .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control>.ng-scrollbar-track>.ng-scrollbar-thumb{width:0;height:100%}::ng-deep .ng-scrollbar-wrapper[horizontalHovered=true]>scrollbar-x.scrollbar-control .ng-scrollbar-thumb,::ng-deep .ng-scrollbar-wrapper[horizontalDragging=true]>scrollbar-x.scrollbar-control .ng-scrollbar-thumb{background-color:var(--scrollbar-thumb-hover-color)}::ng-deep .ng-scrollbar-wrapper[position=invertX]>scrollbar-x.scrollbar-control,::ng-deep .ng-scrollbar-wrapper[position=invertAll]>scrollbar-x.scrollbar-control{top:0;bottom:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false]>scrollbar-x.scrollbar-control{left:0;right:0;bottom:0;top:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][position=invertX]>scrollbar-x.scrollbar-control,::ng-deep .ng-scrollbar-wrapper[deactivated=false][position=invertAll]>scrollbar-x.scrollbar-control{top:0;bottom:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr]>scrollbar-x.scrollbar-control[fit=true]{right:var(--scrollbar-total-size);left:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr][position=invertY]>scrollbar-x.scrollbar-control[fit=true],::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr][position=invertAll]>scrollbar-x.scrollbar-control[fit=true]{left:var(--scrollbar-total-size);right:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl]>scrollbar-x.scrollbar-control[fit=true]{left:var(--scrollbar-total-size);right:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl][position=invertY]>scrollbar-x.scrollbar-control[fit=true],::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl][position=invertAll]>scrollbar-x.scrollbar-control[fit=true]{right:var(--scrollbar-total-size);left:0}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgScrollbarBase
    }, {
      type: Platform
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: NgZone
    }];
  }, {
    track: [{
      type: ViewChild,
      args: [TrackXDirective, {
        static: true
      }]
    }],
    thumb: [{
      type: ViewChild,
      args: [ThumbXDirective, {
        static: true
      }]
    }]
  });
})();
var NG_SCROLLBAR_OPTIONS = new InjectionToken("NG_SCROLLBAR_OPTIONS");
var defaultOptions = {
  viewClass: "",
  trackClass: "",
  thumbClass: "",
  track: "vertical",
  appearance: "compact",
  visibility: "native",
  position: "native",
  pointerEventsMethod: "viewport",
  trackClickScrollDuration: 300,
  minThumbSize: 20,
  windowResizeDebounce: 0,
  sensorDebounce: 0,
  scrollAuditTime: 0,
  viewportPropagateMouseMove: true,
  autoHeightDisabled: true,
  autoWidthDisabled: true,
  sensorDisabled: false,
  pointerEventsDisabled: false
};
var _ScrollbarManager = class _ScrollbarManager {
  constructor(options) {
    this.globalOptions = options ? __spreadValues(__spreadValues({}, defaultOptions), options) : defaultOptions;
    this.rtlScrollAxisType = getRtlScrollAxisType();
  }
};
_ScrollbarManager.\u0275fac = function ScrollbarManager_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScrollbarManager)(\u0275\u0275inject(NG_SCROLLBAR_OPTIONS, 8));
};
_ScrollbarManager.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ScrollbarManager,
  factory: _ScrollbarManager.\u0275fac,
  providedIn: "root"
});
var ScrollbarManager = _ScrollbarManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [NG_SCROLLBAR_OPTIONS]
      }]
    }];
  }, null);
})();
var _NativeScrollbarSizeFactory = class _NativeScrollbarSizeFactory {
  constructor(document2, manager, platform) {
    this.document = document2;
    this.manager = manager;
    this.platform = platform;
    this._scrollbarSize = new BehaviorSubject(this.getNativeScrollbarSize());
    this.scrollbarSize = this._scrollbarSize.asObservable();
    if (platform.isBrowser) {
      fromEvent(this.document.defaultView, "resize", {
        passive: true
      }).pipe(debounceTime(this.manager.globalOptions.windowResizeDebounce), map(() => this.getNativeScrollbarSize()), distinctUntilChanged(), tap((size) => this._scrollbarSize.next(size))).subscribe();
    }
  }
  /**
   * Get native scrollbar size
   */
  getNativeScrollbarSize() {
    if (!this.platform.isBrowser) {
      return 0;
    }
    if (this.platform.IOS) {
      return 6;
    }
    const box = this.document.createElement("div");
    box.className = "ng-scrollbar-measure";
    box.style.left = "0px";
    box.style.overflow = "scroll";
    box.style.position = "fixed";
    box.style.top = "-9999px";
    this.document.body.appendChild(box);
    const size = box.getBoundingClientRect().right;
    this.document.body.removeChild(box);
    return size;
  }
};
_NativeScrollbarSizeFactory.\u0275fac = function NativeScrollbarSizeFactory_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NativeScrollbarSizeFactory)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(ScrollbarManager), \u0275\u0275inject(Platform));
};
_NativeScrollbarSizeFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NativeScrollbarSizeFactory,
  factory: _NativeScrollbarSizeFactory.\u0275fac,
  providedIn: "root"
});
var NativeScrollbarSizeFactory = _NativeScrollbarSizeFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeScrollbarSizeFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: ScrollbarManager
    }, {
      type: Platform
    }];
  }, null);
})();
var _HideNativeScrollbar = class _HideNativeScrollbar {
  constructor(el, renderer, hideNativeScrollbar) {
    this.renderer = renderer;
    this.hideNativeScrollbar = hideNativeScrollbar;
    this._subscriber = Subscription.EMPTY;
    this._subscriber = hideNativeScrollbar.scrollbarSize.subscribe((size) => {
      this.renderer.setStyle(el.nativeElement, "--native-scrollbar-size", `-${size}px`, RendererStyleFlags2.DashCase);
    });
  }
  ngOnDestroy() {
    this._subscriber.unsubscribe();
  }
};
_HideNativeScrollbar.\u0275fac = function HideNativeScrollbar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HideNativeScrollbar)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NativeScrollbarSizeFactory));
};
_HideNativeScrollbar.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _HideNativeScrollbar,
  selectors: [["", "hideNativeScrollbar", ""]],
  standalone: true
});
var HideNativeScrollbar = _HideNativeScrollbar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HideNativeScrollbar, [{
    type: Directive,
    args: [{
      selector: "[hideNativeScrollbar]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NativeScrollbarSizeFactory
    }];
  }, null);
})();
var _ResizeSensor = class _ResizeSensor {
  /** Debounce interval for emitting the changes. */
  get debounce() {
    return this._debounce;
  }
  set debounce(value) {
    this._debounce = coerceNumberProperty(value);
    this._subscribe();
  }
  /** Whether ResizeObserver is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  constructor(zone, platform, scrollbar) {
    this.zone = zone;
    this.platform = platform;
    this.scrollbar = scrollbar;
    this._disabled = false;
    this._currentSubscription = null;
    this.event = new EventEmitter();
    if (!scrollbar) {
      throw new Error("[NgScrollbar Resize Sensor Directive]: Host element must be an NgScrollbar component.");
    }
  }
  ngAfterContentInit() {
    if (!this._currentSubscription && !this._disabled) {
      this._subscribe();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    if (this.platform.isBrowser) {
      const stream = new Observable((observer) => {
        this._resizeObserver = new ResizeObserver((e) => observer.next(e));
        this._resizeObserver.observe(this.scrollbar.viewport.nativeElement);
        if (this.scrollbar.viewport.contentWrapperElement) {
          this._resizeObserver.observe(this.scrollbar.viewport.contentWrapperElement);
        }
      });
      this.zone.runOutsideAngular(() => {
        this._currentSubscription = (this._debounce ? stream.pipe(debounceTime(this._debounce)) : stream).subscribe(this.event);
      });
    }
  }
  _unsubscribe() {
    this._resizeObserver?.disconnect();
    this._currentSubscription?.unsubscribe();
  }
};
_ResizeSensor.\u0275fac = function ResizeSensor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResizeSensor)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(NgScrollbarBase));
};
_ResizeSensor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _ResizeSensor,
  selectors: [["", "resizeSensor", ""]],
  inputs: {
    debounce: [0, "sensorDebounce", "debounce"],
    disabled: [0, "sensorDisabled", "disabled"]
  },
  outputs: {
    event: "resizeSensor"
  },
  standalone: true
});
var ResizeSensor = _ResizeSensor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeSensor, [{
    type: Directive,
    args: [{
      selector: "[resizeSensor]",
      standalone: true
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: Platform
    }, {
      type: NgScrollbarBase
    }];
  }, {
    debounce: [{
      type: Input,
      args: ["sensorDebounce"]
    }],
    disabled: [{
      type: Input,
      args: ["sensorDisabled"]
    }],
    event: [{
      type: Output,
      args: ["resizeSensor"]
    }]
  });
})();
var _NgScrollbar = class _NgScrollbar {
  /** Disable custom scrollbar and switch back to native scrollbar */
  get disabled() {
    return this._disabled;
  }
  set disabled(disabled) {
    this._disabled = coerceBooleanProperty(disabled);
  }
  /** Whether ResizeObserver is disabled */
  get sensorDisabled() {
    return this._sensorDisabled;
  }
  set sensorDisabled(disabled) {
    this._sensorDisabled = coerceBooleanProperty(disabled);
  }
  /** A flag used to enable/disable the scrollbar thumb dragged event */
  get pointerEventsDisabled() {
    return this._pointerEventsDisabled;
  }
  set pointerEventsDisabled(disabled) {
    this._pointerEventsDisabled = coerceBooleanProperty(disabled);
  }
  /** Enable viewport mousemove event propagation (only when pointerEventsMethod="viewport") */
  get viewportPropagateMouseMove() {
    return this._viewportPropagateMouseMove;
  }
  set viewportPropagateMouseMove(disabled) {
    this._viewportPropagateMouseMove = coerceBooleanProperty(disabled);
  }
  /** Disable auto-height */
  get autoHeightDisabled() {
    return this._autoHeightDisabled;
  }
  set autoHeightDisabled(disabled) {
    this._autoHeightDisabled = coerceBooleanProperty(disabled);
  }
  /** Disable auto-width */
  get autoWidthDisabled() {
    return this._autoWidthDisabled;
  }
  set autoWidthDisabled(disabled) {
    this._autoWidthDisabled = coerceBooleanProperty(disabled);
  }
  get nativeElement() {
    return this.el.nativeElement;
  }
  constructor(el, zone, changeDetectorRef, dir, smoothScroll, manager) {
    this.el = el;
    this.zone = zone;
    this.changeDetectorRef = changeDetectorRef;
    this.dir = dir;
    this.smoothScroll = smoothScroll;
    this.manager = manager;
    this._disabled = false;
    this._sensorDisabled = this.manager.globalOptions.sensorDisabled;
    this._pointerEventsDisabled = this.manager.globalOptions.pointerEventsDisabled;
    this._autoHeightDisabled = this.manager.globalOptions.autoHeightDisabled;
    this._autoWidthDisabled = this.manager.globalOptions.autoWidthDisabled;
    this._viewportPropagateMouseMove = this.manager.globalOptions.viewportPropagateMouseMove;
    this.viewClass = this.manager.globalOptions.viewClass;
    this.trackClass = this.manager.globalOptions.trackClass;
    this.thumbClass = this.manager.globalOptions.thumbClass;
    this.minThumbSize = this.manager.globalOptions.minThumbSize;
    this.trackClickScrollDuration = this.manager.globalOptions.trackClickScrollDuration;
    this.pointerEventsMethod = this.manager.globalOptions.pointerEventsMethod;
    this.track = this.manager.globalOptions.track;
    this.visibility = this.manager.globalOptions.visibility;
    this.appearance = this.manager.globalOptions.appearance;
    this.position = this.manager.globalOptions.position;
    this.sensorDebounce = this.manager.globalOptions.sensorDebounce;
    this.scrollAuditTime = this.manager.globalOptions.scrollAuditTime;
    this.updated = new EventEmitter();
    this.state = {};
    this.destroyed = new Subject();
  }
  /**
   * Update local state with each change detection
   */
  updateState() {
    let verticalUsed = false;
    let horizontalUsed = false;
    let isVerticallyScrollable = false;
    let isHorizontallyScrollable = false;
    if (this.track === "all" || this.track === "vertical") {
      isVerticallyScrollable = this.viewport.scrollHeight > this.viewport.clientHeight;
      verticalUsed = this.visibility === "always" || isVerticallyScrollable;
    }
    if (this.track === "all" || this.track === "horizontal") {
      isHorizontallyScrollable = this.viewport.scrollWidth > this.viewport.clientWidth;
      horizontalUsed = this.visibility === "always" || isHorizontallyScrollable;
    }
    this.setState({
      position: this.position,
      track: this.track,
      appearance: this.appearance,
      visibility: this.visibility,
      deactivated: this.disabled,
      dir: this.dir.value,
      pointerEventsMethod: this.pointerEventsMethod,
      verticalUsed,
      horizontalUsed,
      isVerticallyScrollable,
      isHorizontallyScrollable
    });
  }
  setState(state) {
    this.state = __spreadValues(__spreadValues({}, this.state), state);
    this.changeDetectorRef.detectChanges();
  }
  getScrolledByDirection(property) {
    let event;
    return this.scrolled.pipe(tap((e) => event = e), map((e) => e.target[property]), pairwise(), filter(([prev, curr]) => prev !== curr), map(() => event));
  }
  /**
   * Set hovered state if a scrollbar is being hovered
   */
  setHovered(hovered) {
    this.zone.run(() => this.setState(__spreadValues({}, hovered)));
  }
  /**
   * Set dragging state if a scrollbar is being dragged
   */
  setDragging(dragging) {
    this.zone.run(() => this.setState(__spreadValues({}, dragging)));
  }
  /**
   * Set clicked state if a scrollbar track is being clicked
   */
  setClicked(scrollbarClicked) {
    this.zone.run(() => this.setState({
      scrollbarClicked
    }));
  }
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      if (this.customViewPort) {
        this.viewport = this.customViewPort;
        this.defaultViewPort.setAsWrapper();
      } else {
        this.viewport = this.defaultViewPort;
      }
      this.viewport.setAsViewport(this.viewClass);
      let scrollStream = fromEvent(this.viewport.nativeElement, "scroll", {
        passive: true
      });
      scrollStream = this.scrollAuditTime ? scrollStream.pipe(auditTime(this.scrollAuditTime)) : scrollStream;
      this.scrolled = scrollStream.pipe(takeUntil(this.destroyed));
      this.verticalScrolled = this.getScrolledByDirection("scrollTop");
      this.horizontalScrolled = this.getScrolledByDirection("scrollLeft");
    });
  }
  ngOnChanges(changes) {
    if (this.viewport) {
      this.update();
    }
  }
  ngAfterViewInit() {
    this.update();
    this.dir.change.pipe(tap(() => this.update()), takeUntil(this.destroyed)).subscribe();
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
  /**
   * Update local state and the internal scrollbar controls
   */
  update() {
    if (!this.autoHeightDisabled) {
      this.updateHeight();
    }
    if (!this.autoWidthDisabled) {
      this.updateWidth();
    }
    this.updateState();
    this.updated.next();
  }
  /**
   * Smooth scroll functions
   */
  scrollTo(options) {
    return this.smoothScroll.scrollTo(this.viewport.nativeElement, options);
  }
  /**
   * Scroll to element by reference or selector
   */
  scrollToElement(target, options) {
    return this.smoothScroll.scrollToElement(this.viewport.nativeElement, target, options);
  }
  updateHeight() {
    if (this.appearance === "standard" && this.scrollbarX) {
      this.nativeElement.style.height = `${this.viewport.contentHeight + this.scrollbarX.nativeElement.clientHeight}px`;
    } else {
      this.nativeElement.style.height = `${this.viewport.contentHeight}px`;
    }
  }
  updateWidth() {
    if (this.appearance === "standard" && this.scrollbarY) {
      this.nativeElement.style.width = `${this.viewport.contentWidth + this.scrollbarY.nativeElement.clientWidth}px`;
    } else {
      this.nativeElement.style.width = `${this.viewport.contentWidth}px`;
    }
  }
};
_NgScrollbar.\u0275fac = function NgScrollbar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgScrollbar)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Directionality), \u0275\u0275directiveInject(SmoothScrollManager), \u0275\u0275directiveInject(ScrollbarManager));
};
_NgScrollbar.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NgScrollbar,
  selectors: [["ng-scrollbar"]],
  contentQueries: function NgScrollbar_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, ScrollViewport, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.customViewPort = _t.first);
    }
  },
  viewQuery: function NgScrollbar_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5, ElementRef);
      \u0275\u0275viewQuery(_c1, 5, ElementRef);
      \u0275\u0275viewQuery(ScrollViewport, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollbarY = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollbarX = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.defaultViewPort = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function NgScrollbar_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ng-scrollbar", true);
    }
  },
  inputs: {
    disabled: "disabled",
    sensorDisabled: "sensorDisabled",
    pointerEventsDisabled: "pointerEventsDisabled",
    viewportPropagateMouseMove: "viewportPropagateMouseMove",
    autoHeightDisabled: "autoHeightDisabled",
    autoWidthDisabled: "autoWidthDisabled",
    viewClass: "viewClass",
    trackClass: "trackClass",
    thumbClass: "thumbClass",
    minThumbSize: "minThumbSize",
    trackClickScrollDuration: "trackClickScrollDuration",
    pointerEventsMethod: "pointerEventsMethod",
    track: "track",
    visibility: "visibility",
    appearance: "appearance",
    position: "position",
    sensorDebounce: "sensorDebounce",
    scrollAuditTime: "scrollAuditTime"
  },
  outputs: {
    updated: "updated"
  },
  exportAs: ["ngScrollbar"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: NgScrollbarBase,
    useExisting: _NgScrollbar
  }]), \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c2,
  decls: 6,
  vars: 4,
  consts: [["scrollbarX", ""], ["scrollbarY", ""], [1, "ng-scrollbar-wrapper", 3, "ngAttr"], [1, "ng-scroll-viewport-wrapper", 3, "resizeSensor", "sensorDebounce", "sensorDisabled"], ["scrollViewport", "", "hideNativeScrollbar", ""], [4, "ngIf"]],
  template: function NgScrollbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275listener("resizeSensor", function NgScrollbar_Template_div_resizeSensor_1_listener() {
        return ctx.update();
      });
      \u0275\u0275elementStart(2, "div", 4)(3, "div");
      \u0275\u0275projection(4);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(5, NgScrollbar_ng_container_5_Template, 3, 2, "ng-container", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngAttr", ctx.state);
      \u0275\u0275advance();
      \u0275\u0275property("sensorDebounce", ctx.sensorDebounce)("sensorDisabled", ctx.sensorDisabled);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", !ctx.disabled);
    }
  },
  dependencies: [NgIf, NgAttr, ResizeSensor, ScrollViewport, HideNativeScrollbar, ScrollbarX, ScrollbarY],
  styles: [".ng-scrollbar-measure{scrollbar-width:none;-ms-overflow-style:none}  .ng-scrollbar-measure::-webkit-scrollbar{display:none}[_nghost-%COMP%]{--scrollbar-border-radius: 7px;--scrollbar-padding: 4px;--scrollbar-track-color: transparent;--scrollbar-thumb-color: rgba(0, 0, 0, .2);--scrollbar-thumb-hover-color: var(--scrollbar-thumb-color);--scrollbar-size: 5px;--scrollbar-hover-size: var(--scrollbar-size);--scrollbar-overscroll-behavior: initial;--scrollbar-transition-duration: .4s;--scrollbar-transition-delay: .8s;--scrollbar-thumb-transition: height ease-out .15s, width ease-out .15s;--scrollbar-track-transition: height ease-out .15s, width ease-out .15s;display:block;position:relative;height:100%;max-height:100%;max-width:100%;box-sizing:content-box!important}[_nghost-%COMP%] > .ng-scrollbar-wrapper[_ngcontent-%COMP%]{--scrollbar-total-size: calc(var(--scrollbar-size) + var(--scrollbar-padding) * 2);--vertical-scrollbar-size: var(--scrollbar-size);--horizontal-scrollbar-size: var(--scrollbar-size);--vertical-scrollbar-total-size: calc(var(--vertical-scrollbar-size) + var(--scrollbar-padding) * 2);--horizontal-scrollbar-total-size: calc(var(--horizontal-scrollbar-size) + var(--scrollbar-padding) * 2)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalHovered=true][_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalDragging=true][_ngcontent-%COMP%]{--vertical-scrollbar-size: var(--scrollbar-hover-size);--vertical-scrollbar-total-size: calc(var(--vertical-scrollbar-size) + var(--scrollbar-padding) * 2);cursor:default}[_nghost-%COMP%] > .ng-scrollbar-wrapper[horizontalHovered=true][_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[horizontalDragging=true][_ngcontent-%COMP%]{--horizontal-scrollbar-size: var(--scrollbar-hover-size);--horizontal-scrollbar-total-size: calc(var(--horizontal-scrollbar-size) + var(--scrollbar-padding) * 2);cursor:default}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{left:0;right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{left:var(--scrollbar-total-size);right:0}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-left:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-left:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{left:var(--scrollbar-total-size);right:0}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-left:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-left:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{left:0;right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{top:0;bottom:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-bottom:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-bottom:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{top:var(--scrollbar-total-size);bottom:0}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-top:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-top:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{scrollbar-width:none;-ms-overflow-style:none}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport::-webkit-scrollbar{display:none}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-native-scrollbar-hider[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-native-scrollbar-hider{bottom:var(--native-scrollbar-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-native-scrollbar-hider[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-native-scrollbar-hider{left:0;right:var(--native-scrollbar-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][dir=rtl][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-native-scrollbar-hider[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][dir=rtl][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-native-scrollbar-hider{right:0;left:var(--native-scrollbar-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][visibility=hover][_ngcontent-%COMP%] > .scrollbar-control[_ngcontent-%COMP%]{opacity:0;transition-property:opacity;transition-duration:var(--scrollbar-transition-duration);transition-delay:var(--scrollbar-transition-delay)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][visibility=hover][_ngcontent-%COMP%]:hover > .scrollbar-control[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][visibility=hover][_ngcontent-%COMP%]:active > .scrollbar-control[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][visibility=hover][_ngcontent-%COMP%]:focus > .scrollbar-control[_ngcontent-%COMP%]{opacity:1;transition-duration:var(--scrollbar-transition-duration);transition-delay:0ms}[_nghost-%COMP%] > .ng-scrollbar-wrapper[horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{overflow-x:auto;overflow-y:hidden}[_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{overflow-y:auto;overflow-x:hidden}[_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalUsed=true][horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalUsed=true][horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{overflow:auto}.ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{overflow:hidden}.ng-scroll-viewport[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch;contain:strict;will-change:scroll-position;overscroll-behavior:var(--scrollbar-overscroll-behavior)}  .ng-scroll-content{display:inline-block;min-width:100%}.ng-scrollbar-wrapper[_ngcontent-%COMP%], .ng-scroll-viewport-wrapper[_ngcontent-%COMP%], .ng-scroll-layer[_ngcontent-%COMP%],   .ng-scroll-viewport{position:absolute;inset:0}", ".ng-scrollbar-wrapper[pointerEventsMethod=viewport]>.scrollbar-control{pointer-events:none}  .ng-scrollbar-wrapper[horizontalDragging=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,   .ng-scrollbar-wrapper[horizontalDragging=true]>.ng-scroll-viewport-wrapper>*>*>  .ng-scroll-viewport,   .ng-scrollbar-wrapper[verticalDragging=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,   .ng-scrollbar-wrapper[verticalDragging=true]>.ng-scroll-viewport-wrapper>*>*>  .ng-scroll-viewport,   .ng-scrollbar-wrapper[scrollbarClicked=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,   .ng-scrollbar-wrapper[scrollbarClicked=true]>.ng-scroll-viewport-wrapper>*>*>  .ng-scroll-viewport{-webkit-user-select:none;-moz-user-select:none;user-select:none}  .ng-scrollbar-wrapper>.scrollbar-control{position:absolute;display:flex;justify-content:center;align-items:center;transition:var(--scrollbar-track-transition)}  .ng-scrollbar-wrapper>.scrollbar-control[scrollable=false] .ng-scrollbar-thumb{display:none}  .ng-scrollbar-track{height:100%;width:100%;z-index:1;border-radius:var(--scrollbar-border-radius);background-color:var(--scrollbar-track-color);overflow:hidden;transition:var(--scrollbar-track-transition);cursor:default}  .ng-scrollbar-thumb{box-sizing:border-box;position:relative;border-radius:inherit;background-color:var(--scrollbar-thumb-color);transform:translateZ(0);transition:var(--scrollbar-thumb-transition)}"],
  changeDetection: 0
});
var NgScrollbar = _NgScrollbar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbar, [{
    type: Component,
    args: [{
      selector: "ng-scrollbar",
      exportAs: "ngScrollbar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.ng-scrollbar]": "true"
      },
      providers: [{
        provide: NgScrollbarBase,
        useExisting: NgScrollbar
      }],
      standalone: true,
      imports: [NgIf, NgAttr, ResizeSensor, ScrollViewport, HideNativeScrollbar, ScrollbarX, ScrollbarY],
      template: '<div class="ng-scrollbar-wrapper" [ngAttr]="state">\r\n  <div class="ng-scroll-viewport-wrapper"\r\n       (resizeSensor)="update()"\r\n       [sensorDebounce]="sensorDebounce"\r\n       [sensorDisabled]="sensorDisabled">\r\n    <div scrollViewport\r\n         hideNativeScrollbar>\r\n      <div>\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-container *ngIf="!disabled">\r\n    <scrollbar-x #scrollbarX\r\n                 *ngIf="state.horizontalUsed"\r\n                 [attr.scrollable]="state.isHorizontallyScrollable"\r\n                 [attr.fit]="state.verticalUsed">\r\n    </scrollbar-x>\r\n    <scrollbar-y #scrollbarY\r\n                 *ngIf="state.verticalUsed"\r\n                 [attr.scrollable]="state.isVerticallyScrollable"\r\n                 [attr.fit]="state.horizontalUsed">\r\n    </scrollbar-y>\r\n  </ng-container>\r\n</div>\r\n\r\n',
      styles: ["::ng-deep .ng-scrollbar-measure{scrollbar-width:none;-ms-overflow-style:none}::ng-deep .ng-scrollbar-measure::-webkit-scrollbar{display:none}:host{--scrollbar-border-radius: 7px;--scrollbar-padding: 4px;--scrollbar-track-color: transparent;--scrollbar-thumb-color: rgba(0, 0, 0, .2);--scrollbar-thumb-hover-color: var(--scrollbar-thumb-color);--scrollbar-size: 5px;--scrollbar-hover-size: var(--scrollbar-size);--scrollbar-overscroll-behavior: initial;--scrollbar-transition-duration: .4s;--scrollbar-transition-delay: .8s;--scrollbar-thumb-transition: height ease-out .15s, width ease-out .15s;--scrollbar-track-transition: height ease-out .15s, width ease-out .15s;display:block;position:relative;height:100%;max-height:100%;max-width:100%;box-sizing:content-box!important}:host>.ng-scrollbar-wrapper{--scrollbar-total-size: calc(var(--scrollbar-size) + var(--scrollbar-padding) * 2);--vertical-scrollbar-size: var(--scrollbar-size);--horizontal-scrollbar-size: var(--scrollbar-size);--vertical-scrollbar-total-size: calc(var(--vertical-scrollbar-size) + var(--scrollbar-padding) * 2);--horizontal-scrollbar-total-size: calc(var(--horizontal-scrollbar-size) + var(--scrollbar-padding) * 2)}:host>.ng-scrollbar-wrapper[verticalHovered=true],:host>.ng-scrollbar-wrapper[verticalDragging=true]{--vertical-scrollbar-size: var(--scrollbar-hover-size);--vertical-scrollbar-total-size: calc(var(--vertical-scrollbar-size) + var(--scrollbar-padding) * 2);cursor:default}:host>.ng-scrollbar-wrapper[horizontalHovered=true],:host>.ng-scrollbar-wrapper[horizontalDragging=true]{--horizontal-scrollbar-size: var(--scrollbar-hover-size);--horizontal-scrollbar-total-size: calc(var(--horizontal-scrollbar-size) + var(--scrollbar-padding) * 2);cursor:default}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{left:0;right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{left:var(--scrollbar-total-size);right:0}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-left:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-left:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{left:var(--scrollbar-total-size);right:0}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-left:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-left:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{left:0;right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{top:0;bottom:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-bottom:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-bottom:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{top:var(--scrollbar-total-size);bottom:0}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-top:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-top:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{scrollbar-width:none;-ms-overflow-style:none}:host>.ng-scrollbar-wrapper[deactivated=false]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport::-webkit-scrollbar,:host>.ng-scrollbar-wrapper[deactivated=false]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport::-webkit-scrollbar{display:none}:host>.ng-scrollbar-wrapper[deactivated=false][horizontalUsed=true]>.ng-scroll-viewport-wrapper>.ng-native-scrollbar-hider,:host>.ng-scrollbar-wrapper[deactivated=false][horizontalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-native-scrollbar-hider{bottom:var(--native-scrollbar-size)}:host>.ng-scrollbar-wrapper[deactivated=false][verticalUsed=true]>.ng-scroll-viewport-wrapper>.ng-native-scrollbar-hider,:host>.ng-scrollbar-wrapper[deactivated=false][verticalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-native-scrollbar-hider{left:0;right:var(--native-scrollbar-size)}:host>.ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][dir=rtl]>.ng-scroll-viewport-wrapper>.ng-native-scrollbar-hider,:host>.ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][dir=rtl]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-native-scrollbar-hider{right:0;left:var(--native-scrollbar-size)}:host>.ng-scrollbar-wrapper[deactivated=false][visibility=hover]>.scrollbar-control{opacity:0;transition-property:opacity;transition-duration:var(--scrollbar-transition-duration);transition-delay:var(--scrollbar-transition-delay)}:host>.ng-scrollbar-wrapper[deactivated=false][visibility=hover]:hover>.scrollbar-control,:host>.ng-scrollbar-wrapper[deactivated=false][visibility=hover]:active>.scrollbar-control,:host>.ng-scrollbar-wrapper[deactivated=false][visibility=hover]:focus>.scrollbar-control{opacity:1;transition-duration:var(--scrollbar-transition-duration);transition-delay:0ms}:host>.ng-scrollbar-wrapper[horizontalUsed=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[horizontalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{overflow-x:auto;overflow-y:hidden}:host>.ng-scrollbar-wrapper[verticalUsed=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[verticalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{overflow-y:auto;overflow-x:hidden}:host>.ng-scrollbar-wrapper[verticalUsed=true][horizontalUsed=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[verticalUsed=true][horizontalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{overflow:auto}.ng-scroll-viewport-wrapper{overflow:hidden}.ng-scroll-viewport{-webkit-overflow-scrolling:touch;contain:strict;will-change:scroll-position;overscroll-behavior:var(--scrollbar-overscroll-behavior)}::ng-deep .ng-scroll-content{display:inline-block;min-width:100%}.ng-scrollbar-wrapper,.ng-scroll-viewport-wrapper,.ng-scroll-layer,::ng-deep .ng-scroll-viewport{position:absolute;inset:0}\n", "::ng-deep .ng-scrollbar-wrapper[pointerEventsMethod=viewport]>.scrollbar-control{pointer-events:none}::ng-deep .ng-scrollbar-wrapper[horizontalDragging=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[horizontalDragging=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[verticalDragging=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[verticalDragging=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[scrollbarClicked=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[scrollbarClicked=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{-webkit-user-select:none;-moz-user-select:none;user-select:none}::ng-deep .ng-scrollbar-wrapper>.scrollbar-control{position:absolute;display:flex;justify-content:center;align-items:center;transition:var(--scrollbar-track-transition)}::ng-deep .ng-scrollbar-wrapper>.scrollbar-control[scrollable=false] .ng-scrollbar-thumb{display:none}::ng-deep .ng-scrollbar-track{height:100%;width:100%;z-index:1;border-radius:var(--scrollbar-border-radius);background-color:var(--scrollbar-track-color);overflow:hidden;transition:var(--scrollbar-track-transition);cursor:default}::ng-deep .ng-scrollbar-thumb{box-sizing:border-box;position:relative;border-radius:inherit;background-color:var(--scrollbar-thumb-color);transform:translateZ(0);transition:var(--scrollbar-thumb-transition)}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: Directionality
    }, {
      type: SmoothScrollManager
    }, {
      type: ScrollbarManager
    }];
  }, {
    disabled: [{
      type: Input
    }],
    sensorDisabled: [{
      type: Input
    }],
    pointerEventsDisabled: [{
      type: Input
    }],
    viewportPropagateMouseMove: [{
      type: Input
    }],
    autoHeightDisabled: [{
      type: Input
    }],
    autoWidthDisabled: [{
      type: Input
    }],
    viewClass: [{
      type: Input
    }],
    trackClass: [{
      type: Input
    }],
    thumbClass: [{
      type: Input
    }],
    minThumbSize: [{
      type: Input
    }],
    trackClickScrollDuration: [{
      type: Input
    }],
    pointerEventsMethod: [{
      type: Input
    }],
    track: [{
      type: Input
    }],
    visibility: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    sensorDebounce: [{
      type: Input
    }],
    scrollAuditTime: [{
      type: Input
    }],
    updated: [{
      type: Output
    }],
    scrollbarY: [{
      type: ViewChild,
      args: ["scrollbarY", {
        read: ElementRef
      }]
    }],
    scrollbarX: [{
      type: ViewChild,
      args: ["scrollbarX", {
        read: ElementRef
      }]
    }],
    defaultViewPort: [{
      type: ViewChild,
      args: [ScrollViewport, {
        static: true
      }]
    }],
    customViewPort: [{
      type: ContentChild,
      args: [ScrollViewport, {
        static: true
      }]
    }]
  });
})();
var _NgScrollbarModule = class _NgScrollbarModule {
};
_NgScrollbarModule.\u0275fac = function NgScrollbarModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgScrollbarModule)();
};
_NgScrollbarModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NgScrollbarModule
});
_NgScrollbarModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var NgScrollbarModule = _NgScrollbarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbarModule, [{
    type: NgModule,
    args: [{
      imports: [NgScrollbar, ScrollViewport],
      exports: [NgScrollbar, ScrollViewport]
    }]
  }], null, null);
})();

// src/app/layout/default-layout/_nav.ts
var navItems = [
  {
    name: "Dashboard",
    url: "/dashboard",
    iconComponent: { name: "cil-speedometer" }
  },
  {
    name: "About",
    url: "/about",
    iconComponent: { name: "cil-star" }
  },
  {
    name: "Update Concept",
    url: "/concept",
    iconComponent: { name: "cil-indent-decrease" }
  },
  {
    name: "Enquiries",
    url: "/enquiry",
    iconComponent: { name: "cil-notes" }
  },
  {
    name: "Member Enquiries",
    url: "/memberEnquiry",
    iconComponent: { name: "cil-location-pin" }
  },
  {
    name: "Member Message",
    url: "/memberMessage",
    iconComponent: { name: "cil-location-pin" }
  },
  {
    name: "Plan",
    url: "/plan",
    iconComponent: { name: "cil-notes" }
  },
  {
    name: "Members",
    url: "/members",
    iconComponent: { name: "cilPeople" }
  },
  {
    name: "Booking",
    url: "/bookings",
    iconComponent: { name: "cil-pencil" }
  },
  {
    name: "Amenities",
    url: "/amenities",
    iconComponent: { name: "cil-location-pin" }
  },
  {
    name: "Courses",
    url: "/courses",
    iconComponent: { name: "cil-layers" }
  },
  {
    name: "Blog",
    url: "/blog",
    iconComponent: { name: "cil-indent-decrease" }
  },
  {
    name: "Events",
    url: "/events",
    iconComponent: { name: "cil-calendar" }
  },
  {
    name: "Team",
    url: "/team",
    iconComponent: { name: "cil-star" }
  },
  {
    name: "FAQ",
    url: "/faq",
    iconComponent: { name: "cil-credit-card" }
  }
  // {
  //   name: 'Report',
  //   url: '/base/popovers',
  //   iconComponent: { name: 'cil-description' }
  // }
];

// src/app/layout/default-layout/default-layout.component.ts
var _c03 = () => [];
function DefaultLayoutComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-sidebar-footer", 10);
    \u0275\u0275element(1, "button", 15);
    \u0275\u0275elementEnd();
  }
}
var _DefaultLayoutComponent = class _DefaultLayoutComponent {
  constructor() {
    this.navItems = navItems;
  }
  onScrollbarUpdate($event) {
  }
};
_DefaultLayoutComponent.\u0275fac = function DefaultLayoutComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DefaultLayoutComponent)();
};
_DefaultLayoutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DefaultLayoutComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 5, consts: [["sidebar1", "cSidebar"], ["scrollbar", "ngScrollbar"], ["overflow", ""], ["colorScheme", "light", "id", "sidebar1", "visible", "", 1, "d-print-none", "sidebar", "sidebar-fixed", "border-end"], [1, "d-flex", "justify-content-center", "align-items-center", "mt-3"], [1, "w-100", "text-center", 3, "routerLink"], ["src", "../../../assets/mgc_logo-03.png", "height", "100", "alt", "logo", 1, "sidebar-brand-full"], ["src", "../../../assets/mgc_logo-03.png", "height", "50", "alt", "logo", 1, "sidebar-brand-narrow"], ["pointerEventsMethod", "scrollbar", "visibility", "hover", 1, "overflow", 3, "updated"], ["dropdownMode", "close", "compact", "", 3, "navItems"], ["cSidebarToggle", "sidebar1", "toggle", "unfoldable", 1, "border-top", "d-none", "d-lg-flex", 2, "cursor", "pointer"], [1, "wrapper", "d-flex", "flex-column", "min-vh-100"], ["position", "sticky", "sidebarId", "sidebar1", 1, "mb-4", "d-print-none", "header", "header-sticky", "p-0", "shadow-sm", 3, "cShadowOnScroll"], [1, "body", "flex-grow-1"], ["breakpoint", "lg", 1, "h-auto", "px-4"], ["cSidebarToggler", "", "aria-label", "Toggle sidebar fold"]], template: function DefaultLayoutComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-sidebar", 3, 0)(2, "c-sidebar-header", 4)(3, "c-sidebar-brand", 5);
    \u0275\u0275element(4, "img", 6)(5, "img", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ng-scrollbar", 8, 1);
    \u0275\u0275listener("updated", function DefaultLayoutComponent_Template_ng_scrollbar_updated_6_listener() {
      \u0275\u0275restoreView(_r1);
      const scrollbar_r2 = \u0275\u0275reference(7);
      return \u0275\u0275resetView(ctx.onScrollbarUpdate(scrollbar_r2.state));
    });
    \u0275\u0275element(8, "c-sidebar-nav", 9, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, DefaultLayoutComponent_Conditional_10_Template, 2, 0, "c-sidebar-footer", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 11);
    \u0275\u0275element(12, "app-default-header", 12);
    \u0275\u0275elementStart(13, "div", 13)(14, "c-container", 14);
    \u0275\u0275element(15, "router-outlet");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "app-default-footer");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sidebar1_r3 = \u0275\u0275reference(1);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c03));
    \u0275\u0275advance(5);
    \u0275\u0275property("navItems", ctx.navItems);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!sidebar1_r3.narrow ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("cShadowOnScroll", "sm");
  }
}, dependencies: [
  SidebarComponent,
  SidebarHeaderComponent,
  SidebarBrandComponent,
  RouterLink,
  NgScrollbar,
  SidebarNavComponent,
  SidebarFooterComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective,
  DefaultHeaderComponent,
  ShadowOnScrollDirective,
  ContainerComponent,
  RouterOutlet,
  DefaultFooterComponent
], styles: ["\n\n[_nghost-%COMP%]   .ng-scrollbar[_ngcontent-%COMP%] {\n  --scrollbar-padding: 1px;\n  --scrollbar-size: 5px;\n  --scrollbar-thumb-color: var(--cui-gray-500, #999);\n  --scrollbar-thumb-hover-color: var(--cui-gray-400, #999);\n  --scrollbar-hover-size: calc(var(--scrollbar-size) * 1.5);\n}\n/*# sourceMappingURL=default-layout.component.css.map */"] });
var DefaultLayoutComponent = _DefaultLayoutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DefaultLayoutComponent, { className: "DefaultLayoutComponent", filePath: "src\\app\\layout\\default-layout\\default-layout.component.ts", lineNumber: 48 });
})();

// src/app/auth/auth.guard.ts
var _AdminAuthGuard = class _AdminAuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    if (!this.authService.isAuthenticated() || !this.authService.isAdmin()) {
      this.authService.forceLogout();
      return false;
    }
    return true;
  }
};
_AdminAuthGuard.\u0275fac = function AdminAuthGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminAuthGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
};
_AdminAuthGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminAuthGuard, factory: _AdminAuthGuard.\u0275fac, providedIn: "root" });
var AdminAuthGuard = _AdminAuthGuard;
var _AuthGuard = class _AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(["/login"], { replaceUrl: true });
      return false;
    }
    return true;
  }
};
_AuthGuard.\u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
};
_AuthGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
var AuthGuard = _AuthGuard;
var _NoBackButtonGuard = class _NoBackButtonGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    if (!this.authService.isAuthenticated() || !this.authService.isAdmin()) {
      this.authService.forceLogout();
      return false;
    }
    if (typeof window !== "undefined") {
      window.addEventListener("beforeunload", () => {
        if ("caches" in window) {
          caches.keys().then((names) => {
            names.forEach((name) => {
              caches.delete(name);
            });
          });
        }
      });
    }
    return true;
  }
};
_NoBackButtonGuard.\u0275fac = function NoBackButtonGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NoBackButtonGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
};
_NoBackButtonGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NoBackButtonGuard, factory: _NoBackButtonGuard.\u0275fac, providedIn: "root" });
var NoBackButtonGuard = _NoBackButtonGuard;

// src/app/auth/auth-redirect.resolver.ts
var _AdminAuthRedirectResolver = class _AdminAuthRedirectResolver {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  resolve() {
    if (this.authService.isAuthenticated() && this.authService.isAdmin()) {
      this.router.navigate(["/dashboard"]);
      return false;
    }
    return true;
  }
};
_AdminAuthRedirectResolver.\u0275fac = function AdminAuthRedirectResolver_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminAuthRedirectResolver)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
};
_AdminAuthRedirectResolver.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminAuthRedirectResolver, factory: _AdminAuthRedirectResolver.\u0275fac, providedIn: "root" });
var AdminAuthRedirectResolver = _AdminAuthRedirectResolver;
var _AdminRootRedirectResolver = class _AdminRootRedirectResolver {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  resolve() {
    if (this.authService.isAuthenticated() && this.authService.isAdmin()) {
      this.router.navigate(["/dashboard"]);
    } else {
      this.router.navigate(["/login"]);
    }
    return true;
  }
};
_AdminRootRedirectResolver.\u0275fac = function AdminRootRedirectResolver_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminRootRedirectResolver)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
};
_AdminRootRedirectResolver.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminRootRedirectResolver, factory: _AdminRootRedirectResolver.\u0275fac, providedIn: "root" });
var AdminRootRedirectResolver = _AdminRootRedirectResolver;
var _AdminWildcardRedirectResolver = class _AdminWildcardRedirectResolver {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  resolve() {
    if (!this.authService.isAuthenticated() || !this.authService.isAdmin()) {
      this.router.navigate(["/login"]);
    } else {
      this.router.navigate(["/dashboard"]);
    }
    return false;
  }
};
_AdminWildcardRedirectResolver.\u0275fac = function AdminWildcardRedirectResolver_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminWildcardRedirectResolver)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
};
_AdminWildcardRedirectResolver.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminWildcardRedirectResolver, factory: _AdminWildcardRedirectResolver.\u0275fac, providedIn: "root" });
var AdminWildcardRedirectResolver = _AdminWildcardRedirectResolver;

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
    resolve: {
      auth: AdminAuthRedirectResolver
    }
  },
  {
    path: "login",
    component: LoginComponent,
    resolve: {
      auth: AdminAuthRedirectResolver
    }
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    canActivate: [AdminAuthGuard],
    data: {
      title: "Home"
    },
    children: [
      {
        path: "dashboard",
        loadChildren: () => import("./routes-EG2TYC5T.mjs").then((m) => m.dashboardRoutes)
      },
      {
        path: "about",
        loadChildren: () => import("./routes-FWEZLVMA.mjs").then((m) => m.aboutRoutes)
      },
      {
        path: "bookings",
        loadChildren: () => import("./routes-JEJWZ3U2.mjs").then((m) => m.bookingRoutes)
      },
      {
        path: "members",
        loadChildren: () => import("./routes-R7O7PUB4.mjs").then((m) => m.membersRoutes)
      },
      {
        path: "plan",
        loadChildren: () => import("./routes-S4OO2XWK.mjs").then((m) => m.planRoutes)
      },
      {
        path: "courses",
        loadChildren: () => import("./routes-WN6CJ7RN.mjs").then((m) => m.coursesRoutes)
      },
      {
        path: "events",
        loadChildren: () => import("./routes-YJVT36XP.mjs").then((m) => m.eventsRoutes)
      },
      {
        path: "tournament",
        loadChildren: () => import("./routes-PPFJQYM5.mjs").then((m) => m.tournamentRoutes)
      },
      {
        path: "team",
        loadChildren: () => import("./routes-GEDHFC5Y.mjs").then((m) => m.teamRoutes)
      },
      {
        path: "faq",
        loadChildren: () => import("./routes-GSAG753A.mjs").then((m) => m.faqRoutes)
      },
      {
        path: "scoreBoard",
        loadChildren: () => import("./routes-2O3R2ICU.mjs").then((m) => m.scoreBoardRoutes)
      },
      {
        path: "blog",
        loadChildren: () => import("./routes-UOSRH53Y.mjs").then((m) => m.blogRoutes)
      },
      {
        path: "concept",
        loadChildren: () => import("./routes-3DJNCDRS.mjs").then((m) => m.couponRoutes)
      },
      {
        path: "coupon",
        loadChildren: () => import("./routes-FYCM32ER.mjs").then((m) => m.couponRoutes)
      },
      {
        path: "enquiry",
        loadChildren: () => import("./routes-EVTVUCJK.mjs").then((m) => m.enquiryRoutes)
      },
      {
        path: "memberEnquiry",
        loadChildren: () => import("./routes-NXWXVICC.mjs").then((m) => m.memberEnquiryRoutes)
      },
      {
        path: "memberMessage",
        loadChildren: () => import("./routes-H55TV24Z.mjs").then((m) => m.memberMessageRoutes)
      },
      {
        path: "amenities",
        loadChildren: () => import("./routes-LGQHVWUI.mjs").then((m) => m.amenitiesRoutes)
      }
    ]
  },
  { path: "**", redirectTo: "dashboard" }
];

// src/app/auth/admin-auth.interceptor.ts
var adminAuthInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const authToken = authService.getAccessToken();
  let authReq = req;
  if (authToken && authService.isAdmin()) {
    const headers = {
      "Authorization": `Bearer ${authToken}`
    };
    const isFormData = req.body instanceof FormData || req.headers.get("Content-Type")?.includes("multipart/form-data");
    if (!isFormData && !req.headers.has("Content-Type")) {
      headers["Content-Type"] = "application/json";
    }
    authReq = req.clone({
      setHeaders: headers
    });
  }
  return next(authReq).pipe(catchError((error) => {
    if (error.status === 401) {
      console.error("Unauthorized access - forcing logout");
      authService.forceLogout();
    }
    if (error.status === 403) {
      console.error("Forbidden - insufficient privileges");
      authService.forceLogout();
    }
    return throwError(() => error);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(SidebarModule, DropdownModule, GridModule, CardModule, FormModule, ButtonModule),
    provideHttpClient(withFetch(), withInterceptors([adminAuthInterceptor])),
    IconSetService,
    provideAnimations()
  ]
};

// src/app/app.config.server.ts
var serverConfig = {
  providers: [
    provideServerRendering()
  ]
};
var config = mergeApplicationConfig(appConfig, serverConfig);

// src/main.server.ts
var bootstrap = () => bootstrapApplication(AppComponent, config);
var main_server_default = bootstrap;

export {
  main_server_default
};
//# sourceMappingURL=chunk-GNHZWWPO.mjs.map
