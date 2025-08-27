import './polyfills.server.mjs';
import{a as ue}from"./chunk-VNOOAUJ3.mjs";import{a as b}from"./chunk-LQ5YHFJH.mjs";import"./chunk-RXOEWVMK.mjs";import"./chunk-PXEKN24T.mjs";import"./chunk-7VMQ7K6E.mjs";import{Aa as te,Ba as ie,C as z,Ca as ne,D as W,Da as re,Ea as oe,F as H,Fa as ae,Ga as se,Ha as le,J as R,Ja as ce,K as j,Ka as me,La as de,N as J,O as Y,i as U,j as V,p as G,pa as K,q as $,qa as x,ra as Q,s as q,sa as X,xa as Z,ya as ee}from"./chunk-BTSLUG2I.mjs";import{G as D,W as B,Z as L,g as P,h as O,n as M}from"./chunk-3BNNXX2I.mjs";import{Db as s,Fb as N,Hb as k,Nb as n,Ob as r,Pb as f,Tb as S,Yb as v,_b as d,bb as A,cb as I,gb as c,hb as F,ia as T,kc as e,mc as g,ta as _,tc as w,ua as C,xb as p}from"./chunk-BUS3XCSB.mjs";import{l as y}from"./chunk-DYLV4RNH.mjs";function pe(o,m){if(o&1&&(n(0,"c-form-feedback",51),e(1),r()),o&2){let l=d();s("valid",!1),c(),g(`
              `,l.getErrorMessage("courseName"),`
            `)}}function fe(o,m){if(o&1&&(n(0,"c-form-feedback",51),e(1),r()),o&2){let l=d();s("valid",!1),c(),g(`
              `,l.getErrorMessage("coursePhoneNumber"),`
            `)}}function xe(o,m){if(o&1&&(n(0,"c-form-feedback",51),e(1),r()),o&2){let l=d();s("valid",!1),c(),g(`
              `,l.getErrorMessage("courseAlternatePhoneNumber"),`
            `)}}function he(o,m){if(o&1&&(n(0,"c-form-feedback",51),e(1),r()),o&2){let l=d();s("valid",!1),c(),g(`
              `,l.getErrorMessage("courseWebsite"),`
            `)}}function ge(o,m){if(o&1&&(n(0,"c-form-feedback",51),e(1),r()),o&2){let l=d();s("valid",!1),c(),g(`
              `,l.getErrorMessage("courseOpenFrom"),`
            `)}}function be(o,m){if(o&1&&(n(0,"c-form-feedback",51),e(1),r()),o&2){let l=d();s("valid",!1),c(),g(`
              `,l.getErrorMessage("courseAddress"),`
            `)}}function _e(o,m){if(o&1&&(n(0,"c-form-feedback",51),e(1),r()),o&2){let l=d();s("valid",!1),c(),g(`
              `,l.getErrorMessage("courseLocation"),`
            `)}}function Ce(o,m){if(o&1&&(n(0,"c-form-feedback",51),e(1),r()),o&2){let l=d();s("valid",!1),c(),g(`
              `,l.getErrorMessage("courseDescription"),`
            `)}}function ve(o,m){if(o&1&&(n(0,"c-form-feedback",51),e(1),r()),o&2){let l=d();s("valid",!1),c(),g(`
                `,l.getErrorMessage("courseImage"),`
              `)}}function ye(o,m){if(o&1&&(n(0,"div",24),e(1,`
              `),n(2,"p",52),e(3,"Image Preview:"),r(),e(4,`
              `),f(5,"img",53),e(6,`
            `),r()),o&2){let l=d();c(5),s("src",l.imagePreview,I)}}function Fe(o,m){o&1&&(n(0,"div",39),e(1,`
                  Loading amenities...
                `),r())}function Se(o,m){if(o&1&&(n(0,"span",58),e(1,`
                  `),r()),o&2){let l=d().$implicit,t=d();s("innerHTML",t.getSafeHtml(l.icon_svg),A)}}function Ee(o,m){if(o&1&&f(0,"i",59),o&2){let l=d().$implicit;k("fas "+l.icon)}}function Te(o,m){o&1&&f(0,"i",60)}function Ae(o,m){if(o&1){let l=S();n(0,"button",54),v("click",function(){let i=_(l).$implicit,a=d();return C(a.toggleAmenity(i))}),e(1,`
                  `),e(2,`
                  `),p(3,Se,2,1,"span",55),e(4,`
                  `),e(5,`
                  `),p(6,Ee,1,2,"i",56),e(7),e(8,`
                  `),p(9,Te,1,0,"i",57),e(10,`
                `),r()}if(o&2){let l=m.$implicit,t=d();s("color",t.isAmenitySelected(l.id)?"primary":"secondary")("title",l.tooltip),c(3),s("ngIf",l.icon_svg),c(3),s("ngIf",!l.icon_svg&&l.icon),c(),g(`
                  `,l.title,`
                  `),c(2),s("ngIf",t.isAmenitySelected(l.id))}}function Ie(o,m){if(o&1&&(n(0,"c-form-feedback",51),e(1),r()),o&2){let l=d();s("valid",!1),c(),g(`
                `,l.getErrorMessage("courseAmenities"),`
              `)}}function Ne(o,m){if(o&1){let l=S();n(0,"button",69),v("click",function(){_(l);let i=d().index,a=d();return C(a.removeTee(i))}),e(1,`
                      `),f(2,"i",70),e(3,`
                    `),r()}if(o&2){let l=d(2);s("disabled",l.loading)}}function ke(o,m){if(o&1&&(n(0,"c-form-feedback",51),e(1),r()),o&2){let l=d().index,t=d();s("valid",!1),c(),g(`
                          `,t.getTeeErrorMessage(l,"holeNumber"),`
                        `)}}function we(o,m){if(o&1&&(n(0,"div",61),e(1,`
                  `),n(2,"div",62),e(3,`
                    `),n(4,"h6",63),e(5),r(),e(6,`
                    `),p(7,Ne,4,1,"button",64),e(8,`
                  `),r(),e(9,`
                  `),n(10,"div",65),e(11,`
                    `),n(12,"div",66),e(13,`
                      `),e(14,`
                      `),n(15,"c-col",41),e(16,`
                        `),n(17,"label",67),e(18,"Holes *"),r(),e(19,`
                        `),f(20,"input",68),e(21,`
                        `),p(22,ke,2,2,"c-form-feedback",7),e(23,`
                      `),r(),e(24,`

                      `),e(25,`
                    `),r(),e(26,`
                  `),r(),e(27,`
                `),r()),o&2){let l=m.index,t=d();s("formGroupName",l),c(5),g("Tee #",l+1,""),c(2),s("ngIf",t.teesFormArray.length>1),c(10),s("for","holeNumber_"+l),c(3),N("is-invalid",t.isTeeFieldInvalid(l,"holeNumber")),s("id","holeNumber_"+l),c(2),s("ngIf",t.isTeeFieldInvalid(l,"holeNumber"))}}function Pe(o,m){if(o&1&&(n(0,"c-form-feedback",51),e(1),r()),o&2){let l=d();s("valid",!1),c(),g(`
                `,l.getErrorMessage("tees"),`
              `)}}function Oe(o,m){o&1&&f(0,"span",71)}function Me(o,m){if(o&1){let l=S();n(0,"button",72),v("click",function(){_(l);let i=d();return C(i.onDelete())}),e(1,`
              Delete Course
            `),r()}if(o&2){let l=d();s("disabled",l.loading)}}var Re=(()=>{let m=class m{constructor(t,i,a,u,h){this.formBuilder=t,this.router=i,this.route=a,this.courseService=u,this.domSanitizer=h,this.loading=!1,this.submitted=!1,this.amenitiesList=[],this.selectedAmenities=[],this.imagePreview=null,this.selectedFile=null,this.courseId="",this.hasExistingData=!1,this.courseTees=[]}ngOnInit(){this.courseId=this.route.snapshot.paramMap.get("id")||"",this.initializeForm(),this.loadDataSequentially()}loadDataSequentially(){return y(this,null,function*(){try{yield this.loadAmenities(),yield this.loadCourseData()}catch(t){console.error("Error loading data:",t)}})}loadAmenities(){return y(this,null,function*(){try{let t=yield this.courseService.getAllAmenities();t&&t.data&&t.data.code===1&&(this.amenitiesList=t.data.data.map(i=>({id:i.id,amenityName:i.amenityName,amenityTooltip:i.amenityTooltip,title:i.amenityName,tooltip:i.amenityTooltip,icon_svg:i.amenity_icon_svg,icon_path:i.amenity_icon_path,viewbox:i.amenity_viewbox,icon:i.amenityIcon})))}catch(t){console.error("Error loading amenities:",t),b.fire({title:"Error!",text:"Failed to load amenities",icon:"error",confirmButtonText:"Ok"})}})}loadCourseData(){return y(this,null,function*(){if(this.courseId)try{let t=yield this.courseService.getCourse(this.courseId);if(t&&t.data&&t.data.code===1&&t.data.data.length>0){let i=t.data.data[0];this.hasExistingData=!0,this.selectedAmenities=i.amenities||[],this.selectedAmenities.length>0&&typeof this.selectedAmenities[0]=="object"&&(this.selectedAmenities=this.selectedAmenities.map(a=>a.id)),this.selectedAmenities=this.selectedAmenities.map(a=>Number(a)),this.golfCourseForm.patchValue({courseAmenities:this.selectedAmenities}),yield this.loadCourseTees(),this.golfCourseForm.patchValue({courseName:i.name||i.courseName,courseAddress:i.address||i.courseAddress,courseOpenFrom:this.convertTimeForInput(i.timing||i.courseOpenFrom),coursePhoneNumber:i.phone||i.coursePhoneNumber,courseAlternatePhoneNumber:i.alternatePhone||i.courseAlternatePhoneNumber,courseWebsite:i.website||i.courseWebsite,courseDescription:i.description||i.courseDescription,courseLocation:i.location||i.courseLocation,hideStatus:i.hideStatus||0}),i.imageUrl&&(this.imagePreview=i.imageUrl)}}catch(t){console.error("Error loading course data:",t),b.fire({title:"Error!",text:"Failed to load course data",icon:"error",confirmButtonText:"Ok"})}})}loadCourseTees(){return y(this,null,function*(){if(this.courseId)try{let t=yield this.courseService.getTeesByCourse(this.courseId);if(t&&t.data&&t.data.code===1){for(this.courseTees=t.data.data;this.teesFormArray.length!==0;)this.teesFormArray.removeAt(0);this.courseTees.length>0?this.courseTees.forEach(i=>{this.teesFormArray.push(this.createTeeFormGroup({id:i.id,holeNumber:i.holeNumber}))}):this.addDefaultTee()}}catch(t){console.error("Error loading course tees:",t),this.addDefaultTee()}})}initializeForm(){this.golfCourseForm=this.formBuilder.group({courseName:["",[x.required,x.minLength(2)]],courseAddress:["",[x.required]],courseOpenFrom:["06:00",[x.required]],coursePhoneNumber:["",[x.required,x.pattern(/^[\+]?[\d\s\-\(\)]+$/)]],courseAlternatePhoneNumber:["",[x.pattern(/^[\+]?[\d\s\-\(\)]+$/)]],courseWebsite:["",[x.pattern(/^https?:\/\/.+/)]],courseDescription:[""],courseLocation:["",[x.required]],courseAmenities:[[],[x.required,x.minLength(1)]],courseImage:[null],hideStatus:[0],tees:this.formBuilder.array([],[x.required,x.minLength(1)])})}get teesFormArray(){return this.golfCourseForm.get("tees")}createTeeFormGroup(t){return this.formBuilder.group({id:[t?.id||null],holeNumber:[t?.holeNumber||"",[x.required,x.min(1),x.pattern("^[0-9]+$")]]})}addTee(){let t=this.createTeeFormGroup({holeNumber:9});this.teesFormArray.push(t)}addDefaultTee(){let t=this.createTeeFormGroup({holeNumber:9});this.teesFormArray.push(t)}removeTee(t){this.teesFormArray.length>1?this.teesFormArray.removeAt(t):b.fire({title:"Cannot Remove",text:"At least one tee must be defined for the course",icon:"warning",confirmButtonText:"Ok"})}getTeeFormGroup(t){return this.teesFormArray.at(t)}isTeeFieldInvalid(t,i){let u=this.getTeeFormGroup(t).get(i);return!!(u&&u.invalid&&(u.dirty||u.touched||this.submitted))}getTeeErrorMessage(t,i){let u=this.getTeeFormGroup(t).get(i);if(!u||!u.errors)return"";let h=u.errors;if(h.required)switch(i){case"holeNumber":return"Please enter number of holes";default:return"This field is required"}return h.min&&i==="holeNumber"?"Hole number must be at least 1":h.pattern&&i==="holeNumber"?"Hole number must be a whole number":"Invalid value"}validateTeeData(){let t=this.teesFormArray;if(t.length===0)return b.fire({title:"Validation Error",text:"At least one tee must be defined for the course",icon:"error",confirmButtonText:"Ok"}),!1;for(let i=0;i<t.length;i++)if(t.at(i).invalid)return b.fire({title:"Validation Error",text:`Please fix errors in tee ${i+1}`,icon:"error",confirmButtonText:"Ok"}),!1;return!0}onFileChange(t){let i=t.target;if(i.files&&i.files[0]){let a=i.files[0];if(!a.type.startsWith("image/")){b.fire({title:"Error!",text:"Please select an image file",icon:"error",confirmButtonText:"Ok"});return}let u=5*1024*1024;if(a.size>u){b.fire({title:"Error!",text:"Image size should not exceed 5MB",icon:"error",confirmButtonText:"Ok"});return}this.selectedFile=a;let h=new FileReader;h.onload=E=>{this.imagePreview=E.target.result},h.readAsDataURL(a)}}isAmenitySelected(t){return this.selectedAmenities.includes(t)}toggleAmenity(t){let i=this.selectedAmenities.indexOf(t.id);i===-1?this.selectedAmenities.push(t.id):this.selectedAmenities.splice(i,1),this.golfCourseForm.patchValue({courseAmenities:this.selectedAmenities}),this.golfCourseForm.get("courseAmenities")?.markAsTouched()}getAmenityTitle(t){let i=this.amenitiesList.find(a=>a.id===t);return i?i.title:`Amenity ${t}`}getSafeHtml(t){return this.domSanitizer.bypassSecurityTrustHtml(t)}getTeeInfo(){if(this.courseTees&&this.courseTees.length>0){let t=this.courseTees.length,i=this.courseTees.map(a=>`${a.holeNumber}H`).join(", ");return`${t} tee${t>1?"s":""} (${i})`}return"No tees"}get f(){return this.golfCourseForm.controls}onSubmit(){return y(this,null,function*(){if(this.submitted=!0,this.golfCourseForm.invalid){b.fire({title:"Validation Error",text:"Please fix the errors in the form",icon:"error",confirmButtonText:"Ok"});return}if(this.validateTeeData()){this.loading=!0;try{let t=new FormData,i=this.golfCourseForm.value;t.append("courseName",i.courseName),t.append("courseAddress",i.courseAddress),t.append("courseOpenFrom",i.courseOpenFrom),t.append("coursePhoneNumber",i.coursePhoneNumber),t.append("courseAlternatePhoneNumber",i.courseAlternatePhoneNumber||""),t.append("courseWebsite",i.courseWebsite||""),t.append("courseDescription",i.courseDescription||""),t.append("courseLocation",i.courseLocation),t.append("hideStatus",i.hideStatus.toString()),this.selectedAmenities.length>0?t.append("courseAmenities",JSON.stringify(this.selectedAmenities)):t.append("courseAmenities",JSON.stringify([]));let a=this.teesFormArray.value;t.append("tees",JSON.stringify(a)),this.selectedFile&&t.append("courseImage",this.selectedFile);let u=yield this.courseService.processCourse(t,this.courseId);u&&u.data&&u.data.code===1?b.fire({title:"Success!",text:"Course updated successfully",icon:"success",confirmButtonText:"Ok"}).then(()=>{this.router.navigate(["/courses"])}):b.fire({title:"Error!",text:u?.data?.message||"Failed to update course",icon:"error",confirmButtonText:"Ok"})}catch(t){console.error("Error updating course:",t),b.fire({title:"Error!",text:"Failed to update course",icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}}})}onDelete(){return y(this,null,function*(){if((yield b.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"})).isConfirmed){this.loading=!0;try{let i=yield this.courseService.deleteCourse(this.courseId);i&&i.data&&i.data.code===1?b.fire({title:"Deleted!",text:"Course has been deleted.",icon:"success",confirmButtonText:"Ok"}).then(()=>{this.router.navigate(["/courses"])}):b.fire({title:"Error!",text:i?.data?.message||"Failed to delete course",icon:"error",confirmButtonText:"Ok"})}catch(i){console.error("Error deleting course:",i),b.fire({title:"Error!",text:"Failed to delete course",icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}}})}onReset(){for(this.submitted=!1,this.golfCourseForm.reset(),this.selectedAmenities=[],this.imagePreview=null,this.selectedFile=null;this.teesFormArray.length!==0;)this.teesFormArray.removeAt(0);this.addDefaultTee(),this.loadCourseData()}onCancel(){this.router.navigate(["/courses"])}isFieldInvalid(t){let i=this.golfCourseForm.get(t);return!!(i&&i.invalid&&(i.dirty||i.touched||this.submitted))}getErrorMessage(t){let i=this.golfCourseForm.get(t);if(!i||!i.errors)return"";let a=i.errors;if(a.required)return"This field is required";if(a.minlength)return`Minimum length is ${a.minlength.requiredLength} characters`;if(a.pattern)switch(t){case"coursePhoneNumber":case"courseAlternatePhoneNumber":return"Please enter a valid phone number";case"courseWebsite":return"Please enter a valid URL starting with http:// or https://";default:return"Invalid format"}return"Invalid value"}convertTimeForInput(t){if(!t)return"06:00";if(/^\d{2}:\d{2}$/.test(t))return t;let i=t.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);if(i){let a=parseInt(i[1]),u=i[2],h=i[3].toUpperCase();return h==="PM"&&a!==12?a+=12:h==="AM"&&a===12&&(a=0),`${a.toString().padStart(2,"0")}:${u}`}return"06:00"}};m.\u0275fac=function(i){return new(i||m)(F(ce),F(L),F(B),F(ue),F(D))},m.\u0275cmp=T({type:m,selectors:[["app-update-courses"]],standalone:!0,features:[w],decls:216,vars:31,consts:[["form","ngForm"],["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","courseName","formControlName","courseName","type","text","placeholder","Course Name"],["cLabel","","for","courseName",1,"ms-2"],[3,"valid",4,"ngIf"],["cFormControl","","id","coursePhoneNumber","formControlName","coursePhoneNumber","type","text","placeholder","Phone Number"],["cLabel","","for","coursePhoneNumber",1,"ms-2"],["cFormControl","","id","courseAlternatePhoneNumber","formControlName","courseAlternatePhoneNumber","type","text","placeholder","Alternate Phone Number"],["cLabel","","for","courseAlternatePhoneNumber",1,"ms-2"],["cFormControl","","id","courseWebsite","formControlName","courseWebsite","type","url","placeholder","Website"],["cLabel","","for","courseWebsite",1,"ms-2"],["md","12",3,"cFormFloating"],["cFormControl","","id","courseOpenFrom","formControlName","courseOpenFrom","type","time","placeholder","Opening Time"],["cLabel","","for","courseOpenFrom",1,"ms-2"],["cFormControl","","id","courseAddress","formControlName","courseAddress","placeholder","Course Address","rows","4"],["cLabel","","for","courseAddress",1,"ms-2"],["cFormControl","","id","courseLocation","formControlName","courseLocation","type","text","placeholder","GPS Coordinates or Detailed Location"],["cLabel","","for","courseLocation",1,"ms-2"],["cFormControl","","id","courseDescription","formControlName","courseDescription","placeholder","Course Description","rows","8"],["cLabel","","for","courseDescription",1,"ms-2"],["md","12"],[1,"mb-3"],["cLabel","","for","courseImage",1,"form-label"],["cFormControl","","id","courseImage","type","file","accept","image/*",1,"form-control",3,"change"],[1,"form-text"],["class","mb-3",4,"ngIf"],["cLabel","",1,"form-label"],[1,"amenities-container","mt-2"],["class","text-muted",4,"ngIf"],["cButton","","class","me-2 mb-2","variant","outline","type","button",3,"color","title","click",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],["cLabel","",1,"form-label","mb-0"],["cButton","","color","success","variant","outline","size","sm","type","button",3,"click","disabled"],[1,"fas","fa-plus","me-1"],["formArrayName","tees"],["class","card mb-3 tee-card",3,"formGroupName",4,"ngFor","ngForOf"],[1,"text-muted"],[1,"fas","fa-info-circle","me-1"],["md","6"],["cFormSelect","","formControlName","hideStatus",1,"form-select"],["value","0"],["value","1"],["xs","12",1,"d-flex","gap-2"],["cButton","","color","primary","type","submit",1,"d-inline-flex","align-items-center",3,"disabled"],["class","spinner-border spinner-border-sm me-2","role","status","aria-hidden","true",4,"ngIf"],["cButton","","color","secondary","type","button",3,"click","disabled"],["cButton","","color","light","type","button",3,"click","disabled"],["cButton","","color","danger","type","button","class","ms-auto",3,"disabled","click",4,"ngIf"],[3,"valid"],[1,"mb-2"],["alt","Course Image Preview",1,"img-thumbnail",2,"max-width","300px","max-height","200px",3,"src"],["cButton","","variant","outline","type","button",1,"me-2","mb-2",3,"click","color","title"],["class","me-1 amenity-icon","style","width: 16px; height: 16px; display: inline-block;",3,"innerHTML",4,"ngIf"],["class","me-1",3,"class",4,"ngIf"],["class","fas fa-check ms-1",4,"ngIf"],[1,"me-1","amenity-icon",2,"width","16px","height","16px","display","inline-block",3,"innerHTML"],[1,"me-1"],[1,"fas","fa-check","ms-1"],[1,"card","mb-3","tee-card",3,"formGroupName"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"mb-0"],["cButton","","color","danger","variant","outline","size","sm","type","button",3,"disabled","click",4,"ngIf"],[1,"card-body"],[1,"row","g-3"],["cLabel","",1,"form-label",3,"for"],["cFormControl","","formControlName","holeNumber","type","number","min","1","step","1","placeholder","Enter number of holes",1,"form-control",3,"id"],["cButton","","color","danger","variant","outline","size","sm","type","button",3,"click","disabled"],[1,"fas","fa-trash"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm","me-2"],["cButton","","color","danger","type","button",1,"ms-auto",3,"click","disabled"]],template:function(i,a){if(i&1){let u=S();n(0,"c-row"),e(1,`
  `),n(2,"c-col",1),e(3,`
    `),n(4,"c-card",2),e(5,`
      `),n(6,"c-card-header"),e(7,`
        `),n(8,"strong"),e(9,"Update Golf Course"),r(),e(10,`
      `),r(),e(11,`
      `),n(12,"c-card-body"),e(13,`
        `),n(14,"form",3,0),v("ngSubmit",function(){return _(u),C(a.onSubmit())}),e(16,`
          `),e(17,`
          `),n(18,"c-col",4),e(19,`
            `),f(20,"input",5),e(21,`
            `),n(22,"label",6),e(23,"Course Name *"),r(),e(24,`
            `),p(25,pe,2,2,"c-form-feedback",7),e(26,`
          `),r(),e(27,`

          `),n(28,"c-col",4),e(29,`
            `),f(30,"input",8),e(31,`
            `),n(32,"label",9),e(33,"Phone Number *"),r(),e(34,`
            `),p(35,fe,2,2,"c-form-feedback",7),e(36,`
          `),r(),e(37,`

          `),n(38,"c-col",4),e(39,`
            `),f(40,"input",10),e(41,`
            `),n(42,"label",11),e(43,"Alternate Phone Number"),r(),e(44,`
            `),p(45,xe,2,2,"c-form-feedback",7),e(46,`
          `),r(),e(47,`

          `),n(48,"c-col",4),e(49,`
            `),f(50,"input",12),e(51,`
            `),n(52,"label",13),e(53,"Website"),r(),e(54,`
            `),p(55,he,2,2,"c-form-feedback",7),e(56,`
          `),r(),e(57,`

          `),n(58,"c-col",14),e(59,`
            `),f(60,"input",15),e(61,`
            `),n(62,"label",16),e(63,"Opening Time *"),r(),e(64,`
            `),p(65,ge,2,2,"c-form-feedback",7),e(66,`
          `),r(),e(67,`

          `),e(68,`
          `),n(69,"c-col",14),e(70,`
            `),f(71,"textarea",17),e(72,`
            `),n(73,"label",18),e(74,"Course Address *"),r(),e(75,`
            `),p(76,be,2,2,"c-form-feedback",7),e(77,`
          `),r(),e(78,`

          `),e(79,`
          `),n(80,"c-col",14),e(81,`
            `),f(82,"input",19),e(83,`
            `),n(84,"label",20),e(85,"Course Location (GPS/Directions) *"),r(),e(86,`
            `),p(87,_e,2,2,"c-form-feedback",7),e(88,`
          `),r(),e(89,`

          `),e(90,`
          `),n(91,"c-col",14),e(92,`
            `),f(93,"textarea",21),e(94,`
            `),n(95,"label",22),e(96,"Course Description"),r(),e(97,`
            `),p(98,Ce,2,2,"c-form-feedback",7),e(99,`
          `),r(),e(100,`

          `),e(101,`
          `),n(102,"c-col",23),e(103,`
            `),n(104,"div",24),e(105,`
              `),n(106,"label",25),e(107,"Course Image"),r(),e(108,`
              `),n(109,"input",26),v("change",function(E){return _(u),C(a.onFileChange(E))}),r(),e(110,`
              `),n(111,"div",27),e(112,"Maximum file size: 5MB. Supported formats: JPG, PNG, GIF"),r(),e(113,`
              `),p(114,ve,2,2,"c-form-feedback",7),e(115,`
            `),r(),e(116,`
            `),e(117,`
            `),p(118,ye,7,1,"div",28),e(119,`
          `),r(),e(120,`

          `),e(121,`
          `),n(122,"c-col",23),e(123,`
            `),n(124,"div",24),e(125,`
              `),n(126,"label",29),e(127,"Amenities *"),r(),e(128,`
              `),n(129,"div",30),e(130,`
                `),p(131,Fe,2,0,"div",31),e(132,`
                `),p(133,Ae,11,6,"button",32),e(134,`
              `),r(),e(135,`
              `),p(136,Ie,2,2,"c-form-feedback",7),e(137,`
            `),r(),e(138,`
          `),r(),e(139,`

          `),e(140,`
          `),n(141,"c-col",23),e(142,`
            `),n(143,"div",24),e(144,`
              `),n(145,"div",33),e(146,`
                `),n(147,"label",34),e(148,"Course Tees *"),r(),e(149,`
                `),n(150,"button",35),v("click",function(){return _(u),C(a.addTee())}),e(151,`
                  `),f(152,"i",36),e(153,`
                  Add Tee
                `),r(),e(154,`
              `),r(),e(155,`

              `),e(156,`
              `),n(157,"div",37),e(158,`
                `),p(159,we,28,8,"div",38),e(160,`
              `),r(),e(161,`

              `),e(162,`
              `),p(163,Pe,2,2,"c-form-feedback",7),e(164,`

              `),e(165,`
              `),n(166,"div",27),e(167,`
                `),n(168,"small",39),e(169,`
                  `),f(170,"i",40),e(171,`
                  Add multiple tees to offer different hole configurations. Each tee can have any number of holes.
                `),r(),e(172,`
              `),r(),e(173,`
            `),r(),e(174,`
          `),r(),e(175,`

          `),e(176,`
          `),n(177,"c-col",41),e(178,`
            `),n(179,"div",24),e(180,`
              `),n(181,"label",29),e(182,"Status"),r(),e(183,`
              `),n(184,"select",42),e(185,`
                `),n(186,"option",43),e(187,"Active"),r(),e(188,`
                `),n(189,"option",44),e(190,"Hidden"),r(),e(191,`
              `),r(),e(192,`
            `),r(),e(193,`
          `),r(),e(194,`

          `),e(195,`
          `),n(196,"c-col",45),e(197,`
            `),n(198,"button",46),e(199,`
              `),p(200,Oe,1,0,"span",47),e(201),r(),e(202,`

            `),n(203,"button",48),v("click",function(){return _(u),C(a.onReset())}),e(204,`
              Reset Form
            `),r(),e(205,`

            `),n(206,"button",49),v("click",function(){return _(u),C(a.onCancel())}),e(207,`
              Cancel
            `),r(),e(208,`

            `),p(209,Me,2,1,"button",50),e(210,`
          `),r(),e(211,`
        `),r(),e(212,`
      `),r(),e(213,`
    `),r(),e(214,`
  `),r(),e(215,`
`),r()}i&2&&(c(14),s("formGroup",a.golfCourseForm),c(4),s("cFormFloating",!0),c(7),s("ngIf",a.isFieldInvalid("courseName")),c(3),s("cFormFloating",!0),c(7),s("ngIf",a.isFieldInvalid("coursePhoneNumber")),c(3),s("cFormFloating",!0),c(7),s("ngIf",a.isFieldInvalid("courseAlternatePhoneNumber")),c(3),s("cFormFloating",!0),c(7),s("ngIf",a.isFieldInvalid("courseWebsite")),c(3),s("cFormFloating",!0),c(7),s("ngIf",a.isFieldInvalid("courseOpenFrom")),c(4),s("cFormFloating",!0),c(7),s("ngIf",a.isFieldInvalid("courseAddress")),c(4),s("cFormFloating",!0),c(7),s("ngIf",a.isFieldInvalid("courseLocation")),c(4),s("cFormFloating",!0),c(7),s("ngIf",a.isFieldInvalid("courseDescription")),c(16),s("ngIf",a.isFieldInvalid("courseImage")),c(4),s("ngIf",a.imagePreview),c(13),s("ngIf",a.amenitiesList.length===0),c(2),s("ngForOf",a.amenitiesList),c(3),s("ngIf",a.isFieldInvalid("courseAmenities")),c(14),s("disabled",a.loading),c(9),s("ngForOf",a.teesFormArray.controls),c(4),s("ngIf",a.isFieldInvalid("tees")),c(35),s("disabled",a.loading),c(2),s("ngIf",a.loading),c(),g(`
              `,a.loading?"Updating...":"Update Course",`
            `),c(2),s("disabled",a.loading),c(3),s("disabled",a.loading),c(3),s("ngIf",a.hasExistingData))},dependencies:[O,P,M,Y,J,G,j,q,$,de,Z,ae,se,K,ee,oe,Q,X,le,te,re,ie,ne,me,z,H,R,W,U,V],styles:[`.amenities-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  transition: all 0.3s ease;
  border-width: 2px;
}

.amenities-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}



.amenities-container[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%] {
  background-color: #0d6efd !important;
  border-color: #0d6efd !important;
  color: white !important;
  font-weight: 500;
}

.amenities-container[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:hover {
  background-color: #0b5ed7 !important;
  border-color: #0b5ed7 !important;
}



.amenities-container[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%] {
  background-color: transparent !important;
  border-color: #6c757d !important;
  color: #6c757d !important;
}

.amenities-container[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%]:hover {
  background-color: #6c757d !important;
  border-color: #6c757d !important;
  color: white !important;
}



.amenities-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {
  color: white;
  font-weight: bold;
}

.tee-card[_ngcontent-%COMP%] {
  border: 1px solid #dee2e6;
  transition: box-shadow 0.15s ease-in-out;
}

.tee-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.amenity-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
}

.form-control-plaintext[_ngcontent-%COMP%] {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.875rem;
  color: #6c757d;
}`]});let o=m;return o})();export{Re as UpdateCoursesComponent};
