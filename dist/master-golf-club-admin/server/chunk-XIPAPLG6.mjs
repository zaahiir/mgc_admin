import './polyfills.server.mjs';
import{a as ie}from"./chunk-6HFSODRI.mjs";import{a as g}from"./chunk-LQ5YHFJH.mjs";import"./chunk-RXOEWVMK.mjs";import"./chunk-PXEKN24T.mjs";import"./chunk-7VMQ7K6E.mjs";import{Aa as Q,C as j,D as q,Da as X,F as z,J as R,Ja as Z,K as H,Ka as ee,La as te,N as $,O as U,i as P,j as N,p as B,pa as W,q as O,qa as f,ra as Y,s as L,sa as J,xa as K}from"./chunk-BTSLUG2I.mjs";import{G as D,W as M,Z as G,h as T,n as A}from"./chunk-3BNNXX2I.mjs";import{Db as m,Fb as F,Nb as t,Ob as i,Pb as x,Tb as E,Yb as S,_b as d,bb as I,gb as l,hb as v,ia as _,kc as e,lc as V,mc as b,ta as h,tc as k,ua as y,xb as u}from"./chunk-BUS3XCSB.mjs";import{l as w}from"./chunk-DYLV4RNH.mjs";function re(a,c){if(a&1&&(t(0,"c-form-feedback",31),e(1),i()),a&2){let s=d();m("valid",!1),l(),b(`
              `,s.getErrorMessage("amenityName"),`
            `)}}function oe(a,c){if(a&1&&(t(0,"c-form-feedback",31),e(1),i()),a&2){let s=d();m("valid",!1),l(),b(`
              `,s.getErrorMessage("amenityIcon"),`
            `)}}function ae(a,c){if(a&1){let s=E();t(0,"c-col",1),e(1,`
            `),t(2,"div",32),e(3,`
              `),t(4,"label",33),e(5,"Icon Preview:"),i(),e(6,`
              `),t(7,"div",34),e(8,`
                `),t(9,"div",35),e(10,`
                  `),x(11,"div",36),e(12,`
                `),i(),e(13,`
                `),t(14,"div",37),e(15,`
                  `),t(16,"div",38),e(17,"SVG Icon"),i(),e(18,`
                  `),t(19,"small",39),e(20,`
                    Preview of your SVG icon
                  `),i(),e(21,`
                `),i(),e(22,`
                `),t(23,"button",40),S("click",function(){h(s);let n=d();return y(n.clearSVG())}),e(24,`
                  `),x(25,"i",41),e(26,` Clear
                `),i(),e(27,`
              `),i(),e(28,`
            `),i(),e(29,`
          `),i()}if(a&2){let s=d();l(11),m("innerHTML",s.svgPreview,I)}}function le(a,c){if(a&1&&(t(0,"c-form-feedback",31),e(1),i()),a&2){let s=d();m("valid",!1),l(),b(`
              `,s.getErrorMessage("amenityTooltip"),`
            `)}}function me(a,c){if(a&1&&(t(0,"c-form-feedback",31),e(1),i()),a&2){let s=d();m("valid",!1),l(),b(`
              `,s.getErrorMessage("amenitiesDescription"),`
            `)}}function se(a,c){a&1&&x(0,"span",42)}function ce(a,c){if(a&1){let s=E();t(0,"button",43),S("click",function(){h(s);let n=d();return y(n.onDelete())}),e(1,`
              Delete Amenity
            `),i()}if(a&2){let s=d();m("disabled",s.loading)}}var Ce=(()=>{let c=class c{constructor(r,n,o,p,C){this.formBuilder=r,this.router=n,this.route=o,this.amenitiesService=p,this.sanitizer=C,this.loading=!1,this.submitted=!1,this.isEditMode=!1,this.amenityId=null,this.hasExistingData=!1,this.svgPreview=null,this.rawSvgContent=""}ngOnInit(){this.initializeForm(),this.route.params.subscribe(r=>{r.id&&(this.amenityId=r.id,this.isEditMode=!0,this.loadAmenityData())})}loadAmenityData(){return w(this,null,function*(){if(this.amenityId)try{this.loading=!0;let r=yield this.amenitiesService.listAmenities(this.amenityId);if(r.data&&r.data.code===1&&r.data.data.length>0){let n=r.data.data[0];this.hasExistingData=!0,this.amenityForm.patchValue({amenityName:n.amenityName||"",amenityIcon:n.amenityIcon||"",amenityTooltip:n.amenityTooltip||"",amenitiesDescription:n.amenitiesDescription||""}),n.amenityIcon&&(this.rawSvgContent=n.amenityIcon,this.updateSVGPreview(n.amenityIcon))}}catch(r){console.error("Error loading amenity data:",r),yield g.fire({title:"Error!",text:"Failed to load amenity data",icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}initializeForm(){this.amenityForm=this.formBuilder.group({amenityName:["",[f.required,f.minLength(2),f.maxLength(200)]],amenityIcon:["",[f.required,this.svgValidator.bind(this)]],amenityTooltip:["",[f.maxLength(500)]],amenitiesDescription:["",[f.maxLength(1e3)]],hideStatus:[0]})}svgValidator(r){if(!r.value)return null;let n=r.value.trim();return!n.includes("<svg")||!n.includes("</svg>")?{invalidSvg:!0}:null}onSVGInput(r){let n=r.target.value.trim();this.rawSvgContent=n,n&&this.isValidSVG(n)?this.updateSVGPreview(n):this.svgPreview=null}isValidSVG(r){return r.includes("<svg")&&r.includes("</svg>")}updateSVGPreview(r){try{this.svgPreview=this.sanitizer.bypassSecurityTrustHtml(r)}catch(n){console.error("Error creating SVG preview:",n),this.svgPreview=null}}clearSVG(){this.amenityForm.patchValue({amenityIcon:""}),this.svgPreview=null,this.rawSvgContent=""}get f(){return this.amenityForm.controls}onSubmit(){return w(this,null,function*(){if(this.submitted=!0,this.amenityForm.invalid){Object.keys(this.amenityForm.controls).forEach(n=>{this.amenityForm.get(n)?.markAsTouched()});let r=document.querySelector(".is-invalid");r&&r.scrollIntoView({behavior:"smooth",block:"center"});return}try{this.loading=!0;let r={amenityName:this.amenityForm.value.amenityName.trim(),amenityIcon:this.amenityForm.value.amenityIcon.trim(),amenityTooltip:this.amenityForm.value.amenityTooltip?.trim()||"",amenitiesDescription:this.amenityForm.value.amenitiesDescription?.trim()||"",hideStatus:0},n=this.isEditMode&&this.amenityId?this.amenityId:"0",o=yield this.amenitiesService.processAmenitiesWithSVG(r,n);if(o.data&&o.data.code===1)yield g.fire({title:"Success!",text:this.isEditMode?"Amenity has been updated successfully":"Amenity has been created successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/amenities"]);else throw new Error(o.data?.message||"Unknown error occurred")}catch(r){console.error("Error submitting form:",r);let n="Failed to save amenity";if(r.response?.data?.message)n=r.response.data.message;else if(r.response?.data?.errors){let o=r.response.data.errors;n=Object.keys(o).map(p=>`${p}: ${o[p].join(", ")}`).join(`
`)}else r.message&&(n=r.message);yield g.fire({title:"Error!",text:n,icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onDelete(){return w(this,null,function*(){if(!this.amenityId||!this.hasExistingData)return;if((yield g.fire({title:"Are you sure?",text:"This action cannot be undone!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"})).isConfirmed)try{this.loading=!0;let n=yield this.amenitiesService.deleteAmenities(this.amenityId);if(n.data&&n.data.code===1)yield g.fire({title:"Deleted!",text:"Amenity has been deleted successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/amenities"]);else throw new Error(n.data?.message||"Failed to delete amenity")}catch(n){console.error("Error deleting amenity:",n),yield g.fire({title:"Error!",text:"Failed to delete amenity",icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onReset(){this.submitted=!1,this.svgPreview=null,this.rawSvgContent="",this.amenityForm.reset({hideStatus:0}),this.isEditMode&&this.loadAmenityData()}isFieldInvalid(r){let n=this.amenityForm.get(r);return!!(n&&n.invalid&&(n.dirty||n.touched||this.submitted))}getErrorMessage(r){let n=this.amenityForm.get(r);if(!n||!n.errors)return"";let o=n.errors;if(o.required)switch(r){case"amenityName":return"Amenity name is required";case"amenityIcon":return"SVG icon is required";default:return"This field is required"}if(o.invalidSvg)return"Please enter a valid SVG code (must contain <svg> and </svg> tags)";if(o.minlength)return`Minimum length is ${o.minlength.requiredLength} characters`;if(o.maxlength)switch(r){case"amenityName":return"Amenity name cannot exceed 200 characters";case"amenityTooltip":return"Tooltip cannot exceed 500 characters";default:return`Maximum length is ${o.maxlength.requiredLength} characters`}return"Invalid input"}};c.\u0275fac=function(n){return new(n||c)(v(Z),v(G),v(M),v(ie),v(D))},c.\u0275cmp=_({type:c,selectors:[["app-create-amenities"]],standalone:!0,features:[k],decls:170,vars:17,consts:[["form","ngForm"],["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","amenityName","formControlName","amenityName","type","text","placeholder","Amenity Name"],["cLabel","","for","amenityName",1,"ms-2"],[3,"valid",4,"ngIf"],["md","6"],["cLabel","","for","amenityIcon",1,"form-label"],["href","https://fontawesome.com/icons","target","_blank",1,"text-primary","ms-2","text-decoration-none"],[1,"fas","fa-external-link-alt"],["cFormControl","","id","amenityIcon","formControlName","amenityIcon","placeholder","Paste your SVG code here...","rows","4",1,"font-monospace",3,"input"],[1,"form-text"],["xs","12",4,"ngIf"],["xs","12",3,"cFormFloating"],["cFormControl","","id","amenityTooltip","formControlName","amenityTooltip","placeholder","Amenity Tooltip/Description","rows","3"],["cLabel","","for","amenityTooltip",1,"ms-2"],["cFormControl","","id","amenitiesDescription","formControlName","amenitiesDescription","placeholder","Detailed description of the amenity","rows","4"],["cLabel","","for","amenitiesDescription",1,"ms-2"],[1,"mt-3"],[1,"row"],[1,"col-md-6"],[1,"small"],["href","https://fontawesome.com/icons","target","_blank",1,"text-primary"],[1,"small","bg-dark","text-light","p-2","rounded"],["xs","12",1,"d-flex","gap-2","mt-4"],["cButton","","color","primary","type","submit",1,"d-inline-flex","align-items-center",3,"disabled"],["class","spinner-border spinner-border-sm me-2","role","status","aria-hidden","true",4,"ngIf"],["cButton","","color","secondary","type","button",3,"click","disabled"],["cButton","","color","danger","type","button","class","ms-auto",3,"disabled","click",4,"ngIf"],[3,"valid"],[1,"mb-3"],[1,"form-label"],[1,"d-flex","align-items-center","gap-3","p-3","border","rounded","bg-light"],[1,"icon-preview-container"],[1,"svg-icon-preview",3,"innerHTML"],[1,"flex-grow-1"],[1,"fw-bold"],[1,"text-muted"],["type","button",1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"fas","fa-times"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm","me-2"],["cButton","","color","danger","type","button",1,"ms-auto",3,"click","disabled"]],template:function(n,o){if(n&1){let p=E();t(0,"c-row"),e(1,`
  `),t(2,"c-col",1),e(3,`
    `),t(4,"c-card",2),e(5,`
      `),t(6,"c-card-header"),e(7,`
        `),t(8,"strong"),e(9),i(),e(10,`
      `),i(),e(11,`
      `),t(12,"c-card-body"),e(13,`
        `),t(14,"form",3,0),S("ngSubmit",function(){return h(p),y(o.onSubmit())}),e(16,`

          `),e(17,`
          `),t(18,"c-col",4),e(19,`
            `),x(20,"input",5),e(21,`
            `),t(22,"label",6),e(23,"Amenity Name *"),i(),e(24,`
            `),u(25,re,2,2,"c-form-feedback",7),e(26,`
          `),i(),e(27,`

          `),e(28,`
          `),t(29,"c-col",8),e(30,`
            `),t(31,"label",9),e(32,`
              Amenity Icon (SVG) *
              `),t(33,"a",10),e(34,`
                `),x(35,"i",11),e(36,` Get from Font Awesome
              `),i(),e(37,`
            `),i(),e(38,`
            `),t(39,"textarea",12),S("input",function(ne){return h(p),y(o.onSVGInput(ne))}),i(),e(40,`
            `),t(41,"div",13),e(42,`
              Copy the full SVG code from Font Awesome (right-click \u2192 Copy SVG) and paste it here.
            `),i(),e(43,`
            `),u(44,oe,2,2,"c-form-feedback",7),e(45,`
          `),i(),e(46,`

          `),e(47,`
          `),u(48,ae,30,1,"c-col",14),e(49,`

          `),e(50,`
          `),t(51,"c-col",15),e(52,`
            `),x(53,"textarea",16),e(54,`
            `),t(55,"label",17),e(56,"Tooltip/Description"),i(),e(57,`
            `),u(58,le,2,2,"c-form-feedback",7),e(59,`
          `),i(),e(60,`

          `),e(61,`
          `),t(62,"c-col",15),e(63,`
            `),x(64,"textarea",18),e(65,`
            `),t(66,"label",19),e(67,"Detailed Description"),i(),e(68,`
            `),u(69,me,2,2,"c-form-feedback",7),e(70,`
          `),i(),e(71,`

          `),e(72,`
          `),t(73,"c-col",1),e(74,`
            `),t(75,"c-card",20),e(76,`
              `),t(77,"c-card-header"),e(78,`
                `),t(79,"small")(80,"strong"),e(81,"How to get Font Awesome SVG Icons:"),i()(),e(82,`
              `),i(),e(83,`
              `),t(84,"c-card-body"),e(85,`
                `),t(86,"div",21),e(87,`
                  `),t(88,"div",22),e(89,`
                    `),t(90,"h6"),e(91,"Steps to get SVG:"),i(),e(92,`
                    `),t(93,"ol",23),e(94,`
                      `),t(95,"li"),e(96,"Visit "),t(97,"a",24),e(98,"Font Awesome Icons"),i()(),e(99,`
                      `),t(100,"li"),e(101,"Search for your desired icon"),i(),e(102,`
                      `),t(103,"li"),e(104,"Click on the icon to open details"),i(),e(105,`
                      `),t(106,"li"),e(107,'Right-click and select "Copy SVG"'),i(),e(108,`
                      `),t(109,"li"),e(110,"Paste the SVG code in the textarea above"),i(),e(111,`
                    `),i(),e(112,`
                  `),i(),e(113,`
                  `),t(114,"div",22),e(115,`
                    `),t(116,"h6"),e(117,"SVG Benefits:"),i(),e(118,`
                    `),t(119,"ul",23),e(120,`
                      `),t(121,"li"),e(122,"Vector-based (scales perfectly)"),i(),e(123,`
                      `),t(124,"li"),e(125,"Customizable colors via CSS"),i(),e(126,`
                      `),t(127,"li"),e(128,"Lightweight and fast loading"),i(),e(129,`
                      `),t(130,"li"),e(131,"No additional HTTP requests"),i(),e(132,`
                      `),t(133,"li"),e(134,"Consistent across all devices"),i(),e(135,`
                    `),i(),e(136,`
                  `),i(),e(137,`
                `),i(),e(138,`
                `),t(139,"div",20),e(140,`
                  `),t(141,"h6"),e(142,"Example SVG Structure:"),i(),e(143,`
                  `),t(144,"pre",25)(145,"code"),e(146,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
  <path d="M64 32C28.7 32..."></path>
</svg>`),i()(),e(147,`
                `),i(),e(148,`
              `),i(),e(149,`
            `),i(),e(150,`
          `),i(),e(151,`

          `),e(152,`
          `),t(153,"c-col",26),e(154,`
            `),t(155,"button",27),e(156,`
              `),u(157,se,1,0,"span",28),e(158),i(),e(159,`

            `),t(160,"button",29),S("click",function(){return h(p),y(o.onReset())}),e(161,`
              Reset Form
            `),i(),e(162,`

            `),u(163,ce,2,1,"button",30),e(164,`
          `),i(),e(165,`
        `),i(),e(166,`
      `),i(),e(167,`
    `),i(),e(168,`
  `),i(),e(169,`
`),i()}n&2&&(l(9),V(o.isEditMode?"Edit Amenity":"New Amenity"),l(5),m("formGroup",o.amenityForm),l(4),m("cFormFloating",!0),l(7),m("ngIf",o.isFieldInvalid("amenityName")),l(14),F("is-invalid",o.isFieldInvalid("amenityIcon")),l(5),m("ngIf",o.isFieldInvalid("amenityIcon")),l(4),m("ngIf",o.svgPreview),l(3),m("cFormFloating",!0),l(7),m("ngIf",o.isFieldInvalid("amenityTooltip")),l(4),m("cFormFloating",!0),l(7),m("ngIf",o.isFieldInvalid("amenitiesDescription")),l(86),m("disabled",o.loading),l(2),m("ngIf",o.loading),l(),b(`
              `,o.loading?"Saving...":o.isEditMode?"Update Amenity":"Create Amenity",`
            `),l(2),m("disabled",o.loading),l(3),m("ngIf",o.isEditMode&&o.hasExistingData))},dependencies:[T,A,U,$,B,H,L,O,te,K,W,Y,J,Q,X,ee,j,z,R,q,P,N],styles:[`.icon-preview-container[_ngcontent-%COMP%] {
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
}`]});let a=c;return a})();export{Ce as CreateAmenitiesComponent};
