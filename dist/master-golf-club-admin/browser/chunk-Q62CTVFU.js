import{a as ne}from"./chunk-AANX7V4S.js";import{a as oe}from"./chunk-DVM5LER3.js";import"./chunk-T3N573N6.js";import"./chunk-ECX54NPK.js";import{N as M,O as N,Oa as W,U as L,Ua as J,V as O,Va as u,Wa as K,X as U,Xa as Q,ab as X,d as T,db as Y,fa as j,ga as B,gb as Z,h as k,ia as q,ma as z,mb as ee,na as $,nb as te,ob as ie,q as A,qa as H,ra as R,t as G,v as P}from"./chunk-JU5RFLJC.js";import{Ab as l,Cb as V,Kb as t,Lb as i,Mb as x,Qb as w,U as E,Vb as v,Xb as d,_a as F,db as m,eb as f,f as C,hc as e,ia as I,jc as g,qc as D,ta as h,ua as y,ub as p}from"./chunk-QLX3N2J3.js";import{f as ae,k as _}from"./chunk-AAPNLDO3.js";var b=ae(oe());function me(o,c){o&1&&(t(0,"div",4),e(1,`
      `),t(2,"div",5),e(3,`
        `),x(4,"c-spinner",6),e(5,`
        `),t(6,"div",7),e(7,"Loading amenity data..."),i(),e(8,`
      `),i(),e(9,`
    `),i())}function le(o,c){if(o&1&&(t(0,"c-form-feedback",36),e(1),i()),o&2){let a=d(2);l("valid",!1),m(),g(`
              `,a.getErrorMessage("amenityName"),`
            `)}}function se(o,c){if(o&1&&(t(0,"c-form-feedback",36),e(1),i()),o&2){let a=d(2);l("valid",!1),m(),g(`
              `,a.getErrorMessage("amenityIcon"),`
            `)}}function ce(o,c){if(o&1){let a=w();t(0,"c-col",1),e(1,`
            `),t(2,"div",37),e(3,`
              `),t(4,"label",38),e(5,"Icon Preview:"),i(),e(6,`
              `),t(7,"div",39),e(8,`
                `),t(9,"div",40),e(10,`
                  `),x(11,"div",41),e(12,`
                `),i(),e(13,`
                `),t(14,"div",42),e(15,`
                  `),t(16,"div",43),e(17,"SVG Icon"),i(),e(18,`
                  `),t(19,"small",44),e(20,`
                    Preview of your SVG icon
                  `),i(),e(21,`
                `),i(),e(22,`
                `),t(23,"button",45),v("click",function(){h(a);let n=d(2);return y(n.clearSVG())}),e(24,`
                  `),x(25,"i",46),e(26,` Clear
                `),i(),e(27,`
              `),i(),e(28,`
            `),i(),e(29,`
          `),i()}if(o&2){let a=d(2);m(11),l("innerHTML",a.svgPreview,F)}}function de(o,c){if(o&1&&(t(0,"c-form-feedback",36),e(1),i()),o&2){let a=d(2);l("valid",!1),m(),g(`
              `,a.getErrorMessage("amenityTooltip"),`
            `)}}function pe(o,c){if(o&1&&(t(0,"c-form-feedback",36),e(1),i()),o&2){let a=d(2);l("valid",!1),m(),g(`
              `,a.getErrorMessage("amenitiesDescription"),`
            `)}}function xe(o,c){o&1&&x(0,"span",47)}function ue(o,c){if(o&1){let a=w();t(0,"c-card",8),e(1,`
      `),t(2,"c-card-header"),e(3,`
        `),t(4,"strong"),e(5,"Edit Amenity"),i(),e(6,`
      `),i(),e(7,`
      `),t(8,"c-card-body"),e(9,`
        `),t(10,"form",9,0),v("ngSubmit",function(){h(a);let n=d();return y(n.onSubmit())}),e(12,`

          `),e(13,`
          `),t(14,"c-col",10),e(15,`
            `),x(16,"input",11),e(17,`
            `),t(18,"label",12),e(19,"Amenity Name *"),i(),e(20,`
            `),p(21,le,2,2,"c-form-feedback",13),e(22,`
          `),i(),e(23,`

          `),e(24,`
          `),t(25,"c-col",14),e(26,`
            `),t(27,"label",15),e(28,`
              Amenity Icon (SVG) *
              `),t(29,"a",16),e(30,`
                `),x(31,"i",17),e(32,` Get from Font Awesome
              `),i(),e(33,`
            `),i(),e(34,`
            `),t(35,"textarea",18),v("input",function(n){h(a);let s=d();return y(s.onSVGInput(n))}),i(),e(36,`
            `),t(37,"div",19),e(38,`
              Copy the full SVG code from Font Awesome (right-click \u2192 Copy SVG) and paste it here.
            `),i(),e(39,`
            `),p(40,se,2,2,"c-form-feedback",13),e(41,`
          `),i(),e(42,`

          `),e(43,`
          `),p(44,ce,30,1,"c-col",20),e(45,`

          `),e(46,`
          `),t(47,"c-col",21),e(48,`
            `),x(49,"textarea",22),e(50,`
            `),t(51,"label",23),e(52,"Tooltip/Description"),i(),e(53,`
            `),p(54,de,2,2,"c-form-feedback",13),e(55,`
          `),i(),e(56,`

          `),e(57,`
          `),t(58,"c-col",21),e(59,`
            `),x(60,"textarea",24),e(61,`
            `),t(62,"label",25),e(63,"Detailed Description"),i(),e(64,`
            `),p(65,pe,2,2,"c-form-feedback",13),e(66,`
          `),i(),e(67,`

          `),e(68,`
          `),t(69,"c-col",1),e(70,`
            `),t(71,"c-card",26),e(72,`
              `),t(73,"c-card-header"),e(74,`
                `),t(75,"small")(76,"strong"),e(77,"How to get Font Awesome SVG Icons:"),i()(),e(78,`
              `),i(),e(79,`
              `),t(80,"c-card-body"),e(81,`
                `),t(82,"div",27),e(83,`
                  `),t(84,"div",28),e(85,`
                    `),t(86,"h6"),e(87,"Steps to get SVG:"),i(),e(88,`
                    `),t(89,"ol",29),e(90,`
                      `),t(91,"li"),e(92,"Visit "),t(93,"a",30),e(94,"Font Awesome Icons"),i()(),e(95,`
                      `),t(96,"li"),e(97,"Search for your desired icon"),i(),e(98,`
                      `),t(99,"li"),e(100,"Click on the icon to open details"),i(),e(101,`
                      `),t(102,"li"),e(103,'Right-click and select "Copy SVG"'),i(),e(104,`
                      `),t(105,"li"),e(106,"Paste the SVG code in the textarea above"),i(),e(107,`
                    `),i(),e(108,`
                  `),i(),e(109,`
                  `),t(110,"div",28),e(111,`
                    `),t(112,"h6"),e(113,"SVG Benefits:"),i(),e(114,`
                    `),t(115,"ul",29),e(116,`
                      `),t(117,"li"),e(118,"Vector-based (scales perfectly)"),i(),e(119,`
                      `),t(120,"li"),e(121,"Customizable colors via CSS"),i(),e(122,`
                      `),t(123,"li"),e(124,"Lightweight and fast loading"),i(),e(125,`
                      `),t(126,"li"),e(127,"No additional HTTP requests"),i(),e(128,`
                      `),t(129,"li"),e(130,"Consistent across all devices"),i(),e(131,`
                    `),i(),e(132,`
                  `),i(),e(133,`
                `),i(),e(134,`
                `),t(135,"div",26),e(136,`
                  `),t(137,"h6"),e(138,"Example SVG Structure:"),i(),e(139,`
                  `),t(140,"pre",31)(141,"code"),e(142,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
  <path d="M64 32C28.7 32..."></path>
</svg>`),i()(),e(143,`
                `),i(),e(144,`
              `),i(),e(145,`
            `),i(),e(146,`
          `),i(),e(147,`

          `),e(148,`
          `),t(149,"c-col",32),e(150,`
            `),t(151,"button",33),e(152,`
              `),p(153,xe,1,0,"span",34),e(154),i(),e(155,`

            `),t(156,"button",35),v("click",function(){h(a);let n=d();return y(n.onCancel())}),e(157,`
              Cancel
            `),i(),e(158,`
          `),i(),e(159,`
        `),i(),e(160,`
      `),i(),e(161,`
    `),i()}if(o&2){let a=d();m(10),l("formGroup",a.amenityForm),m(4),l("cFormFloating",!0),m(7),l("ngIf",a.isFieldInvalid("amenityName")),m(14),V("is-invalid",a.isFieldInvalid("amenityIcon")),m(5),l("ngIf",a.isFieldInvalid("amenityIcon")),m(4),l("ngIf",a.svgPreview),m(3),l("cFormFloating",!0),m(7),l("ngIf",a.isFieldInvalid("amenityTooltip")),m(4),l("cFormFloating",!0),m(7),l("ngIf",a.isFieldInvalid("amenitiesDescription")),m(86),l("disabled",a.loading),m(2),l("ngIf",a.loading),m(),g(`
              `,a.loading?"Updating...":"Update Amenity",`
            `),m(2),l("disabled",a.loading)}}var Ie=(()=>{let c=class c{constructor(r,n,s,S,re){this.formBuilder=r,this.router=n,this.route=s,this.amenitiesService=S,this.sanitizer=re,this.loading=!1,this.loadingData=!1,this.submitted=!1,this.amenityId=null,this.amenityData=null,this.svgPreview=null,this.rawSvgContent="",this.destroy$=new C}ngOnInit(){this.initializeForm(),this.loadRouteData()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}loadRouteData(){this.route.params.pipe(E(this.destroy$)).subscribe(r=>{r.id?(this.amenityId=r.id,this.loadAmenityData()):this.redirectToAmenitiesList()})}loadAmenityData(){return _(this,null,function*(){if(this.amenityId)try{this.loadingData=!0;let r=yield this.amenitiesService.listAmenities(this.amenityId);if(r.data&&r.data.code===1&&r.data.data.length>0){let n=r.data.data[0];this.amenityData=n,this.amenityForm.patchValue({amenityName:n.amenityName||"",amenityIcon:n.amenityIcon||"",amenityTooltip:n.amenityTooltip||"",amenitiesDescription:n.amenitiesDescription||""}),n.amenityIcon&&(this.rawSvgContent=n.amenityIcon,this.updateSVGPreview(n.amenityIcon))}else yield this.handleDataLoadError("Amenity not found")}catch(r){console.error("Error loading amenity data:",r),yield this.handleDataLoadError("Failed to load amenity data. Please try again.")}finally{this.loadingData=!1}})}handleDataLoadError(r){return _(this,null,function*(){yield b.default.fire({title:"Error!",text:r,icon:"error",confirmButtonText:"Ok"}),this.redirectToAmenitiesList()})}redirectToAmenitiesList(){this.router.navigate(["/amenities"])}initializeForm(){this.amenityForm=this.formBuilder.group({amenityName:["",[u.required,u.minLength(2),u.maxLength(200)]],amenityIcon:["",[u.required,this.svgValidator.bind(this)]],amenityTooltip:["",[u.maxLength(500)]],amenitiesDescription:["",[u.maxLength(1e3)]],hideStatus:[0]})}svgValidator(r){if(!r.value)return null;let n=r.value.trim();return!n.includes("<svg")||!n.includes("</svg>")?{invalidSvg:!0}:null}onSVGInput(r){let n=r.target.value.trim();this.rawSvgContent=n,n&&this.isValidSVG(n)?this.updateSVGPreview(n):this.svgPreview=null}isValidSVG(r){return r.includes("<svg")&&r.includes("</svg>")}updateSVGPreview(r){try{this.svgPreview=this.sanitizer.bypassSecurityTrustHtml(r)}catch(n){console.error("Error creating SVG preview:",n),this.svgPreview=null}}clearSVG(){this.amenityForm.patchValue({amenityIcon:""}),this.svgPreview=null,this.rawSvgContent=""}get f(){return this.amenityForm.controls}onSubmit(){return _(this,null,function*(){if(this.submitted=!0,this.amenityForm.invalid){Object.keys(this.amenityForm.controls).forEach(n=>{this.amenityForm.get(n)?.markAsTouched()});let r=document.querySelector(".is-invalid");r&&r.scrollIntoView({behavior:"smooth",block:"center"});return}try{this.loading=!0;let r={amenityName:this.amenityForm.value.amenityName.trim(),amenityIcon:this.amenityForm.value.amenityIcon.trim(),amenityTooltip:this.amenityForm.value.amenityTooltip?.trim()||"",amenitiesDescription:this.amenityForm.value.amenitiesDescription?.trim()||"",hideStatus:this.amenityData?.hideStatus||0},n=yield this.amenitiesService.processAmenitiesWithSVG(r,this.amenityId);if(n.data&&n.data.code===1)yield b.default.fire({title:"Success!",text:"Amenity has been updated successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/amenities"]);else throw new Error(n.data?.message||"Unknown error occurred")}catch(r){console.error("Error updating amenity:",r);let n="Failed to update amenity";if(r.response?.data?.message)n=r.response.data.message;else if(r.response?.data?.errors){let s=r.response.data.errors;n=Object.keys(s).map(S=>`${S}: ${s[S].join(", ")}`).join(`
`)}else r.message&&(n=r.message);yield b.default.fire({title:"Error!",text:n,icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onCancel(){this.router.navigate(["/amenities"])}isFieldInvalid(r){let n=this.amenityForm.get(r);return!!(n&&n.invalid&&(n.dirty||n.touched||this.submitted))}getErrorMessage(r){let n=this.amenityForm.get(r);if(!n||!n.errors)return"";let s=n.errors;if(s.required)switch(r){case"amenityName":return"Amenity name is required";case"amenityIcon":return"SVG icon is required";default:return"This field is required"}if(s.invalidSvg)return"Please enter a valid SVG code (must contain <svg> and </svg> tags)";if(s.minlength)return`Minimum length is ${s.minlength.requiredLength} characters`;if(s.maxlength)switch(r){case"amenityName":return"Amenity name cannot exceed 200 characters";case"amenityTooltip":return"Tooltip cannot exceed 500 characters";default:return`Maximum length is ${s.maxlength.requiredLength} characters`}return"Invalid input"}};c.\u0275fac=function(n){return new(n||c)(f(ee),f(P),f(G),f(ne),f(A))},c.\u0275cmp=I({type:c,selectors:[["app-update-amenities"]],standalone:!0,features:[D],decls:11,vars:2,consts:[["form","ngForm"],["xs","12"],["class","d-flex justify-content-center align-items-center","style","min-height: 200px;",4,"ngIf"],["class","mb-4",4,"ngIf"],[1,"d-flex","justify-content-center","align-items-center",2,"min-height","200px"],[1,"text-center"],["variant","border","role","status","aria-hidden","true"],[1,"mt-2"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","amenityName","formControlName","amenityName","type","text","placeholder","Amenity Name"],["cLabel","","for","amenityName",1,"ms-2"],[3,"valid",4,"ngIf"],["md","6"],["cLabel","","for","amenityIcon",1,"form-label"],["href","https://fontawesome.com/icons","target","_blank",1,"text-primary","ms-2","text-decoration-none"],[1,"fas","fa-external-link-alt"],["cFormControl","","id","amenityIcon","formControlName","amenityIcon","placeholder","Paste your SVG code here...","rows","4",1,"font-monospace",3,"input"],[1,"form-text"],["xs","12",4,"ngIf"],["xs","12",3,"cFormFloating"],["cFormControl","","id","amenityTooltip","formControlName","amenityTooltip","placeholder","Amenity Tooltip/Description","rows","3"],["cLabel","","for","amenityTooltip",1,"ms-2"],["cFormControl","","id","amenitiesDescription","formControlName","amenitiesDescription","placeholder","Detailed description of the amenity","rows","4"],["cLabel","","for","amenitiesDescription",1,"ms-2"],[1,"mt-3"],[1,"row"],[1,"col-md-6"],[1,"small"],["href","https://fontawesome.com/icons","target","_blank",1,"text-primary"],[1,"small","bg-dark","text-light","p-2","rounded"],["xs","12",1,"d-flex","gap-2","mt-4"],["cButton","","color","primary","type","submit",1,"d-inline-flex","align-items-center",3,"disabled"],["class","spinner-border spinner-border-sm me-2","role","status","aria-hidden","true",4,"ngIf"],["cButton","","color","light","type","button",1,"ms-auto",3,"click","disabled"],[3,"valid"],[1,"mb-3"],[1,"form-label"],[1,"d-flex","align-items-center","gap-3","p-3","border","rounded","bg-light"],[1,"icon-preview-container"],[1,"svg-icon-preview",3,"innerHTML"],[1,"flex-grow-1"],[1,"fw-bold"],[1,"text-muted"],["type","button",1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"fas","fa-times"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm","me-2"]],template:function(n,s){n&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",1),e(3,`

    `),e(4,`
    `),p(5,me,10,0,"div",2),e(6,`

    `),e(7,`
    `),p(8,ue,162,15,"c-card",3),e(9,`
  `),i(),e(10,`
`),i()),n&2&&(m(5),l("ngIf",s.loadingData),m(3),l("ngIf",!s.loadingData))},dependencies:[T,k,R,H,L,$,U,O,ie,X,J,K,Q,Y,Z,te,j,q,z,B,M,N,W],styles:[`.icon-preview-container[_ngcontent-%COMP%] {
  width: 80px;
  height: 80px;
  border: 2px dashed #dee2e6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  overflow: hidden;
}

.svg-icon-preview[_ngcontent-%COMP%] {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-icon-preview[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  fill: #0d6efd; 

}

.font-monospace[_ngcontent-%COMP%] {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.875rem;
}

.form-text[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #6c757d;
  margin-top: 0.25rem;
}

.bg-light[_ngcontent-%COMP%] {
  background-color: #f8f9fa !important;
}

.text-primary[_ngcontent-%COMP%] {
  color: #0d6efd !important;
}

.fw-bold[_ngcontent-%COMP%] {
  font-weight: 600 !important;
}

.text-muted[_ngcontent-%COMP%] {
  color: #6c757d !important;
}

pre[_ngcontent-%COMP%] {
  white-space: pre-wrap;
  word-wrap: break-word;
}

code[_ngcontent-%COMP%] {
  font-size: 0.8rem;
}`]});let o=c;return o})();export{Ie as UpdateAmenitiesComponent};
