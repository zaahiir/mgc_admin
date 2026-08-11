import{a as $}from"./chunk-NEJ4QCLX.js";import{a as B}from"./chunk-LC2VOLD6.js";import{a as W}from"./chunk-XHQQUXOJ.js";import{f as F,g as G,i as P}from"./chunk-ABUHJNLS.js";import{c as M,d as u,f as k,g as N,j as O,l as U,o as L,u as j,v as z,w as q}from"./chunk-577JZRFW.js";import"./chunk-4TJHBWXT.js";import"./chunk-MRAN6CQI.js";import{m as A,p as D}from"./chunk-ZJ3OJK4E.js";import{$ as I,Ab as f,Hb as T,Ja as E,M as C,Oa as s,Pa as g,_a as d,bb as m,db as V,f as b,hb as i,ia as h,ib as n,ja as y,jb as c,mb as w,pb as x,qb as l,yb as a}from"./chunk-VJ5MR54K.js";import{e as R,f as S}from"./chunk-TRNF7YA4.js";var _=R(W());function J(r,p){r&1&&(i(0,"div",5)(1,"div",6)(2,"div",7)(3,"span",8),a(4,"Loading..."),n()(),i(5,"div",9),a(6,"Loading amenity data..."),n()()())}function K(r,p){if(r&1&&(i(0,"div",38),a(1),n()),r&2){let e=l(2);s(),f(" ",e.getErrorMessage("amenityName")," ")}}function Q(r,p){if(r&1&&(i(0,"div",38),a(1),n()),r&2){let e=l(2);s(),f(" ",e.getErrorMessage("amenityIcon")," ")}}function X(r,p){if(r&1){let e=w();i(0,"div",2)(1,"div",39)(2,"label",40),a(3,"Icon Preview:"),n(),i(4,"div",41)(5,"div",42),c(6,"div",43),n(),i(7,"div",44)(8,"div",45),a(9,"SVG Icon"),n(),i(10,"small",46),a(11," Preview of your SVG icon "),n()(),i(12,"button",47),x("click",function(){h(e);let o=l(2);return y(o.clearSVG())}),c(13,"i",48),a(14," Clear "),n()()()()}if(r&2){let e=l(2);s(6),m("innerHTML",e.svgPreview,E)}}function Y(r,p){if(r&1&&(i(0,"div",38),a(1),n()),r&2){let e=l(2);s(),f(" ",e.getErrorMessage("amenityTooltip")," ")}}function Z(r,p){if(r&1&&(i(0,"div",38),a(1),n()),r&2){let e=l(2);s(),f(" ",e.getErrorMessage("amenitiesDescription")," ")}}function ee(r,p){r&1&&c(0,"span",49)}function te(r,p){if(r&1){let e=w();i(0,"div",10)(1,"div",11)(2,"strong"),a(3,"Edit Amenity"),n()(),i(4,"div",12)(5,"form",13,0),x("ngSubmit",function(){h(e);let o=l();return y(o.onSubmit())}),i(7,"div",14)(8,"div",15),c(9,"input",16),i(10,"label",17),a(11,"Amenity Name *"),n()(),d(12,K,2,1,"div",18),n(),i(13,"div",14)(14,"label",19),a(15," Amenity Icon (SVG) * "),i(16,"a",20),c(17,"i",21),a(18," Get from Font Awesome "),n()(),i(19,"textarea",22),x("input",function(o){h(e);let v=l();return y(v.onSVGInput(o))}),n(),i(20,"div",23),a(21," Copy the full SVG code from Font Awesome (right-click \u2192 Copy SVG) and paste it here. "),n(),d(22,Q,2,1,"div",18),n(),d(23,X,15,1,"div",24),i(24,"div",2)(25,"div",15),c(26,"textarea",25),i(27,"label",26),a(28,"Tooltip/Description"),n()(),d(29,Y,2,1,"div",18),n(),i(30,"div",2)(31,"div",15),c(32,"textarea",27),i(33,"label",28),a(34,"Detailed Description"),n()(),d(35,Z,2,1,"div",18),n(),i(36,"div",2)(37,"div",29)(38,"div",11)(39,"small")(40,"strong"),a(41,"How to get Font Awesome SVG Icons:"),n()()(),i(42,"div",12)(43,"div",1)(44,"div",14)(45,"h6"),a(46,"Steps to get SVG:"),n(),i(47,"ol",30)(48,"li"),a(49,"Visit "),i(50,"a",31),a(51,"Font Awesome Icons"),n()(),i(52,"li"),a(53,"Search for your desired icon"),n(),i(54,"li"),a(55,"Click on the icon to open details"),n(),i(56,"li"),a(57,'Right-click and select "Copy SVG"'),n(),i(58,"li"),a(59,"Paste the SVG code in the textarea above"),n()()(),i(60,"div",14)(61,"h6"),a(62,"SVG Benefits:"),n(),i(63,"ul",30)(64,"li"),a(65,"Vector-based (scales perfectly)"),n(),i(66,"li"),a(67,"Customizable colors via CSS"),n(),i(68,"li"),a(69,"Lightweight and fast loading"),n(),i(70,"li"),a(71,"No additional HTTP requests"),n(),i(72,"li"),a(73,"Consistent across all devices"),n()()()(),i(74,"div",32)(75,"h6"),a(76,"Example SVG Structure:"),n(),i(77,"pre",33)(78,"code"),a(79,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
  <path d="M64 32C28.7 32..."></path>
</svg>`),n()()()()()(),i(80,"div",34)(81,"button",35),d(82,ee,1,0,"span",36),a(83),n(),i(84,"button",37),x("click",function(){h(e);let o=l();return y(o.onCancel())}),a(85," Cancel "),n()()()()()}if(r&2){let e=l();s(5),m("formGroup",e.amenityForm),s(7),m("ngIf",e.isFieldInvalid("amenityName")),s(7),V("is-invalid",e.isFieldInvalid("amenityIcon")),s(3),m("ngIf",e.isFieldInvalid("amenityIcon")),s(),m("ngIf",e.svgPreview),s(6),m("ngIf",e.isFieldInvalid("amenityTooltip")),s(6),m("ngIf",e.isFieldInvalid("amenitiesDescription")),s(46),m("disabled",e.loading),s(),m("ngIf",e.loading),s(),f(" ",e.loading?"Updating...":"Update Amenity"," "),s(),m("disabled",e.loading)}}var pe=(()=>{class r{constructor(e,t,o,v,H){this.formBuilder=e,this.router=t,this.route=o,this.amenitiesService=v,this.sanitizer=H,this.loading=!1,this.loadingData=!1,this.submitted=!1,this.amenityId=null,this.amenityData=null,this.svgPreview=null,this.rawSvgContent="",this.destroy$=new b}ngOnInit(){this.initializeForm(),this.loadRouteData()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}loadRouteData(){this.route.params.pipe(C(this.destroy$)).subscribe(e=>{e.id?(this.amenityId=e.id,this.loadAmenityData()):this.redirectToAmenitiesList()})}loadAmenityData(){return S(this,null,function*(){if(this.amenityId)try{this.loadingData=!0;let e=yield this.amenitiesService.listAmenities(this.amenityId);if(e.data&&e.data.code===1&&e.data.data.length>0){let t=e.data.data[0];this.amenityData=t,this.amenityForm.patchValue({amenityName:t.amenityName||"",amenityIcon:t.amenityIcon||"",amenityTooltip:t.amenityTooltip||"",amenitiesDescription:t.amenitiesDescription||""}),t.amenityIcon&&(this.rawSvgContent=t.amenityIcon,this.updateSVGPreview(t.amenityIcon))}else yield this.handleDataLoadError("Amenity not found")}catch(e){console.error("Error loading amenity data:",e),yield this.handleDataLoadError("Failed to load amenity data. Please try again.")}finally{this.loadingData=!1}})}handleDataLoadError(e){return S(this,null,function*(){yield _.default.fire({title:"Error!",text:e,icon:"error",confirmButtonText:"Ok"}),this.redirectToAmenitiesList()})}redirectToAmenitiesList(){this.router.navigate(["/amenities"])}initializeForm(){this.amenityForm=this.formBuilder.group({amenityName:["",[u.required,u.minLength(2),u.maxLength(200)]],amenityIcon:["",[u.required,this.svgValidator.bind(this)]],amenityTooltip:["",[u.maxLength(500)]],amenitiesDescription:["",[u.maxLength(1e3)]],hideStatus:[0]})}svgValidator(e){if(!e.value)return null;let t=e.value.trim();return!t.includes("<svg")||!t.includes("</svg>")?{invalidSvg:!0}:null}onSVGInput(e){let t=e.target.value.trim();this.rawSvgContent=t,t&&this.isValidSVG(t)?this.updateSVGPreview(t):this.svgPreview=null}isValidSVG(e){return e.includes("<svg")&&e.includes("</svg>")}updateSVGPreview(e){try{this.svgPreview=this.sanitizer.bypassSecurityTrustHtml(B(e))}catch(t){console.error("Error creating SVG preview:",t),this.svgPreview=null}}clearSVG(){this.amenityForm.patchValue({amenityIcon:""}),this.svgPreview=null,this.rawSvgContent=""}get f(){return this.amenityForm.controls}onSubmit(){return S(this,null,function*(){if(this.submitted=!0,this.amenityForm.invalid){Object.keys(this.amenityForm.controls).forEach(t=>{this.amenityForm.get(t)?.markAsTouched()});let e=document.querySelector(".is-invalid");e&&e.scrollIntoView({behavior:"smooth",block:"center"});return}try{this.loading=!0;let e={amenityName:this.amenityForm.value.amenityName.trim(),amenityIcon:this.amenityForm.value.amenityIcon.trim(),amenityTooltip:this.amenityForm.value.amenityTooltip?.trim()||"",amenitiesDescription:this.amenityForm.value.amenitiesDescription?.trim()||"",hideStatus:this.amenityData?.hideStatus||0},t=yield this.amenitiesService.processAmenitiesWithSVG(e,this.amenityId);if(t.data&&t.data.code===1)yield _.default.fire({title:"Success!",text:"Amenity has been updated successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/amenities"]);else throw new Error(t.data?.message||"Unknown error occurred")}catch(e){console.error("Error updating amenity:",e);let t="Failed to update amenity";if(e.response?.data?.message)t=e.response.data.message;else if(e.response?.data?.errors){let o=e.response.data.errors;t=Object.keys(o).map(v=>`${v}: ${o[v].join(", ")}`).join(`
`)}else e.message&&(t=e.message);yield _.default.fire({title:"Error!",text:t,icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onCancel(){this.router.navigate(["/amenities"])}isFieldInvalid(e){let t=this.amenityForm.get(e);return!!(t&&t.invalid&&(t.dirty||t.touched||this.submitted))}getErrorMessage(e){let t=this.amenityForm.get(e);if(!t||!t.errors)return"";let o=t.errors;if(o.required)switch(e){case"amenityName":return"Amenity name is required";case"amenityIcon":return"SVG icon is required";default:return"This field is required"}if(o.invalidSvg)return"Please enter a valid SVG code (must contain <svg> and </svg> tags)";if(o.minlength)return`Minimum length is ${o.minlength.requiredLength} characters`;if(o.maxlength)switch(e){case"amenityName":return"Amenity name cannot exceed 200 characters";case"amenityTooltip":return"Tooltip cannot exceed 500 characters";default:return`Maximum length is ${o.maxlength.requiredLength} characters`}return"Invalid input"}static{this.\u0275fac=function(t){return new(t||r)(g(j),g(P),g(G),g($),g(F))}}static{this.\u0275cmp=I({type:r,selectors:[["app-update-amenities"]],standalone:!0,features:[T],decls:4,vars:2,consts:[["form","ngForm"],[1,"row"],[1,"col-12"],["class","d-flex justify-content-center align-items-center","style","min-height: 200px;",4,"ngIf"],["class","card mb-4",4,"ngIf"],[1,"d-flex","justify-content-center","align-items-center",2,"min-height","200px"],[1,"text-center"],["role","status",1,"spinner-border"],[1,"visually-hidden"],[1,"mt-2"],[1,"card","mb-4"],[1,"card-header"],[1,"card-body"],[1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],[1,"col-md-6"],[1,"form-floating"],["id","amenityName","formControlName","amenityName","type","text","placeholder","Amenity Name",1,"form-control"],["for","amenityName",1,"ms-2"],["class","invalid-feedback",4,"ngIf"],["for","amenityIcon",1,"form-label"],["href","https://fontawesome.com/icons","target","_blank",1,"text-primary","ms-2","text-decoration-none"],[1,"fas","fa-external-link-alt"],["id","amenityIcon","formControlName","amenityIcon","placeholder","Paste your SVG code here...","rows","4",1,"form-control","font-monospace",3,"input"],[1,"form-text"],["class","col-12",4,"ngIf"],["id","amenityTooltip","formControlName","amenityTooltip","placeholder","Amenity Tooltip/Description","rows","3",1,"form-control"],["for","amenityTooltip",1,"ms-2"],["id","amenitiesDescription","formControlName","amenitiesDescription","placeholder","Detailed description of the amenity","rows","4",1,"form-control"],["for","amenitiesDescription",1,"ms-2"],[1,"card","mt-3"],[1,"small"],["href","https://fontawesome.com/icons","target","_blank",1,"text-primary"],[1,"mt-3"],[1,"small","bg-dark","text-light","p-2","rounded"],[1,"col-12","d-flex","gap-2","mt-4"],["type","submit",1,"btn","btn-primary","d-inline-flex","align-items-center",3,"disabled"],["class","spinner-border spinner-border-sm me-2","role","status","aria-hidden","true",4,"ngIf"],["type","button",1,"btn","btn-light","ms-auto",3,"click","disabled"],[1,"invalid-feedback"],[1,"mb-3"],[1,"form-label"],[1,"d-flex","align-items-center","gap-3","p-3","border","rounded","bg-light"],[1,"icon-preview-container"],[1,"svg-icon-preview",3,"innerHTML"],[1,"flex-grow-1"],[1,"fw-bold"],[1,"text-muted"],["type","button",1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"fas","fa-times"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm","me-2"]],template:function(t,o){t&1&&(i(0,"div",1)(1,"div",2),d(2,J,7,0,"div",3)(3,te,86,12,"div",4),n()()),t&2&&(s(2),m("ngIf",o.loadingData),s(),m("ngIf",!o.loadingData))},dependencies:[A,D,q,O,M,k,N,U,L,z],styles:[`.icon-preview-container[_ngcontent-%COMP%] {
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
}`]})}}return r})();export{pe as UpdateAmenitiesComponent};
