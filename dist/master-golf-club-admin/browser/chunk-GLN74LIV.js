import{a as xe}from"./chunk-OQSEC4JP.js";import{a as ge}from"./chunk-DVM5LER3.js";import"./chunk-T3N573N6.js";import"./chunk-ECX54NPK.js";import{N as $,O as j,U as z,Ua as Z,V as W,Va as h,Wa as ee,X as H,Xa as te,ab as ie,bb as ne,c as D,d as L,db as re,eb as oe,fa as R,fb as se,ga as U,gb as ae,h as B,hb as le,ia as J,ib as ce,jb as me,kb as de,ma as Y,mb as ue,na as K,nb as pe,ob as fe,q as V,qa as Q,ra as X,t as G,v as q}from"./chunk-JU5RFLJC.js";import{$a as N,Ab as a,Cb as k,Eb as P,Kb as n,Lb as r,Mb as x,Qb as S,Vb as v,Xb as u,_a as w,db as c,eb as F,hc as e,ia as T,ic as M,jc as g,qc as O,ta as C,ua as _,ub as p}from"./chunk-QLX3N2J3.js";import{a as I,b as A,f as he,k as y}from"./chunk-AAPNLDO3.js";var b=he(ge());function be(s,d){if(s&1&&(n(0,"c-form-feedback",50),e(1),r()),s&2){let l=u();a("valid",!1),c(),g(`
              `,l.getErrorMessage("courseName"),`
            `)}}function Ce(s,d){if(s&1&&(n(0,"c-form-feedback",50),e(1),r()),s&2){let l=u();a("valid",!1),c(),g(`
              `,l.getErrorMessage("coursePhoneNumber"),`
            `)}}function _e(s,d){if(s&1&&(n(0,"c-form-feedback",50),e(1),r()),s&2){let l=u();a("valid",!1),c(),g(`
              `,l.getErrorMessage("courseAlternatePhoneNumber"),`
            `)}}function ve(s,d){if(s&1&&(n(0,"c-form-feedback",50),e(1),r()),s&2){let l=u();a("valid",!1),c(),g(`
              `,l.getErrorMessage("courseWebsite"),`
            `)}}function ye(s,d){if(s&1&&(n(0,"c-form-feedback",50),e(1),r()),s&2){let l=u();a("valid",!1),c(),g(`
              `,l.getErrorMessage("courseOpenFrom"),`
            `)}}function Fe(s,d){if(s&1&&(n(0,"c-form-feedback",50),e(1),r()),s&2){let l=u();a("valid",!1),c(),g(`
              `,l.getErrorMessage("courseAddress"),`
            `)}}function Ee(s,d){if(s&1&&(n(0,"c-form-feedback",50),e(1),r()),s&2){let l=u();a("valid",!1),c(),g(`
              `,l.getErrorMessage("courseLocation"),`
            `)}}function Se(s,d){if(s&1&&(n(0,"c-form-feedback",50),e(1),r()),s&2){let l=u();a("valid",!1),c(),g(`
              `,l.getErrorMessage("courseDescription"),`
            `)}}function Ie(s,d){if(s&1&&(n(0,"c-form-feedback",50),e(1),r()),s&2){let l=u();a("valid",!1),c(),g(`
                `,l.getErrorMessage("courseImage"),`
              `)}}function Ae(s,d){if(s&1&&(n(0,"div",24),e(1,`
              `),n(2,"p",51),e(3,"Image Preview:"),r(),e(4,`
              `),x(5,"img",52),e(6,`
            `),r()),s&2){let l=u();c(5),a("src",l.imagePreview,N)}}function Te(s,d){s&1&&(n(0,"div",39),e(1,`
                  Loading amenities...
                `),r())}function we(s,d){if(s&1&&(n(0,"span",57),e(1,`
                  `),r()),s&2){let l=u().$implicit,t=u();a("innerHTML",t.getSafeHtml(l.icon_svg),w)}}function Ne(s,d){if(s&1&&x(0,"i",58),s&2){let l=u().$implicit;P("fas "+l.icon)}}function ke(s,d){s&1&&x(0,"i",59)}function Pe(s,d){if(s&1){let l=S();n(0,"button",53),v("click",function(){let i=C(l).$implicit,o=u();return _(o.toggleAmenity(i))}),e(1,`
                  `),e(2,`
                  `),p(3,we,2,1,"span",54),e(4,`
                  `),e(5,`
                  `),p(6,Ne,1,2,"i",55),e(7),e(8,`
                  `),p(9,ke,1,0,"i",56),e(10,`
                `),r()}if(s&2){let l=d.$implicit,t=u();a("color",t.isAmenitySelected(l.id)?"primary":"secondary")("title",l.tooltip),c(3),a("ngIf",l.icon_svg),c(3),a("ngIf",!l.icon_svg&&l.icon),c(),g(`
                  `,l.title,`
                  `),c(2),a("ngIf",t.isAmenitySelected(l.id))}}function Me(s,d){if(s&1&&(n(0,"c-form-feedback",50),e(1),r()),s&2){let l=u();a("valid",!1),c(),g(`
                `,l.getErrorMessage("courseAmenities"),`
              `)}}function Oe(s,d){if(s&1){let l=S();n(0,"button",68),v("click",function(){C(l);let i=u().index,o=u();return _(o.removeTee(i))}),e(1,`
                      `),x(2,"i",69),e(3,`
                    `),r()}if(s&2){let l=u(2);a("disabled",l.loading)}}function De(s,d){if(s&1&&(n(0,"c-form-feedback",50),e(1),r()),s&2){let l=u().index,t=u();a("valid",!1),c(),g(`
                          `,t.getTeeErrorMessage(l,"holeNumber"),`
                        `)}}function Le(s,d){if(s&1&&(n(0,"div",60),e(1,`
                  `),n(2,"div",61),e(3,`
                    `),n(4,"h6",62),e(5),r(),e(6,`
                    `),p(7,Oe,4,1,"button",63),e(8,`
                  `),r(),e(9,`
                  `),n(10,"div",64),e(11,`
                    `),n(12,"div",65),e(13,`
                      `),e(14,`
                      `),n(15,"c-col",41),e(16,`
                        `),n(17,"label",66),e(18,"Holes *"),r(),e(19,`
                        `),x(20,"input",67),e(21,`
                        `),p(22,De,2,2,"c-form-feedback",7),e(23,`
                      `),r(),e(24,`

                      `),e(25,`
                    `),r(),e(26,`
                  `),r(),e(27,`
                `),r()),s&2){let l=d.index,t=u();a("formGroupName",l),c(5),g("Tee #",l+1,""),c(2),a("ngIf",t.teesFormArray.length>1),c(10),a("for","holeNumber_"+l),c(3),k("is-invalid",t.isTeeFieldInvalid(l,"holeNumber")),a("id","holeNumber_"+l),c(2),a("ngIf",t.isTeeFieldInvalid(l,"holeNumber"))}}function Be(s,d){if(s&1&&(n(0,"c-form-feedback",50),e(1),r()),s&2){let l=u();a("valid",!1),c(),g(`
                `,l.getErrorMessage("tees"),`
              `)}}function Ve(s,d){s&1&&x(0,"span",70)}function Ge(s,d){if(s&1){let l=S();n(0,"button",71),v("click",function(){C(l);let i=u();return _(i.onDelete())}),e(1,`
              Delete Course
            `),r()}if(s&2){let l=u();a("disabled",l.loading)}}var Ke=(()=>{let d=class d{constructor(t,i,o,m,f){this.formBuilder=t,this.router=i,this.route=o,this.courseService=m,this.domSanitizer=f,this.loading=!1,this.submitted=!1,this.amenitiesList=[],this.selectedAmenities=[],this.imagePreview=null,this.selectedFile=null,this.isEditMode=!1,this.courseId=null,this.hasExistingData=!1,this.courseTees=[]}ngOnInit(){this.initializeForm(),this.loadAmenities(),this.route.params.subscribe(t=>{t.id?(this.courseId=t.id,this.isEditMode=!0,this.loadCourseData()):this.addDefaultTee()})}initializeForm(){this.golfCourseForm=this.formBuilder.group({courseName:["",[h.required,h.minLength(2)]],courseAddress:["",[h.required]],courseOpenFrom:["06:00",[h.required]],coursePhoneNumber:["",[h.required,h.pattern(/^[\+]?[\d\s\-\(\)]+$/)]],courseAlternatePhoneNumber:["",[h.pattern(/^[\+]?[\d\s\-\(\)]+$/)]],courseWebsite:["",[h.pattern(/^https?:\/\/.+/)]],courseDescription:[""],courseLocation:["",[h.required]],courseAmenities:[[],[h.required,h.minLength(1)]],courseImage:[null],hideStatus:[0],tees:this.formBuilder.array([],[h.required,h.minLength(1)])})}get teesFormArray(){return this.golfCourseForm.get("tees")}createTeeFormGroup(t){return this.formBuilder.group({id:[t?.id||null],holeNumber:[t?.holeNumber||"",[h.required,h.min(1),h.pattern("^[0-9]+$")]]})}addTee(){let t=this.createTeeFormGroup({holeNumber:9});this.teesFormArray.push(t)}addDefaultTee(){let t=this.createTeeFormGroup({holeNumber:9});this.teesFormArray.push(t)}removeTee(t){this.teesFormArray.length>1?this.teesFormArray.removeAt(t):b.default.fire({title:"Cannot Remove",text:"At least one tee must be defined for the course",icon:"warning",confirmButtonText:"Ok"})}getTeeFormGroup(t){return this.teesFormArray.at(t)}isTeeFieldInvalid(t,i){let m=this.getTeeFormGroup(t).get(i);return!!(m&&m.invalid&&(m.dirty||m.touched||this.submitted))}getTeeErrorMessage(t,i){let m=this.getTeeFormGroup(t).get(i);if(!m||!m.errors)return"";let f=m.errors;if(f.required)switch(i){case"holeNumber":return"Please enter number of holes";default:return"This field is required"}return f.min&&i==="holeNumber"?"Hole number must be at least 1":f.pattern&&i==="holeNumber"?"Hole number must be a positive integer":"Invalid input"}validateTeeData(){let i=this.teesFormArray.value.map(m=>m.holeNumber);return i.filter((m,f)=>i.indexOf(m)!==f).length>0?(b.default.fire({title:"Duplicate Tees!",text:"You have duplicate hole configurations. Each tee must have a unique number of holes.",icon:"warning",confirmButtonText:"Ok"}),!1):!0}loadAmenities(){return y(this,null,function*(){try{let t=yield this.courseService.getAmenities();t.data&&t.data.code===1?(this.amenitiesList=t.data.data.map(i=>A(I({},i),{title:i.amenityName||i.title,tooltip:i.amenityTooltip||i.tooltip||i.amenityName})),console.log("Loaded amenities:",this.amenitiesList)):(console.warn("Unexpected amenities response format:",t.data),this.amenitiesList=[])}catch(t){console.error("Error loading amenities:",t),yield b.default.fire({title:"Error!",text:"Failed to load amenities",icon:"error",confirmButtonText:"Ok"})}})}loadCourseData(){return y(this,null,function*(){if(this.courseId)try{this.loading=!0;let t=yield this.courseService.listCourse(this.courseId);if(t.data&&t.data.code===1&&t.data.data.length>0){let i=t.data.data[0];this.hasExistingData=!0,this.golfCourseForm.patchValue({courseName:i.courseName||"",courseAddress:i.courseAddress||"",courseOpenFrom:this.convertTimeForInput(i.courseOpenFrom)||"06:00",coursePhoneNumber:i.coursePhoneNumber||"",courseAlternatePhoneNumber:i.courseAlternatePhoneNumber||"",courseWebsite:i.courseWebsite||"",courseDescription:i.courseDescription||"",courseLocation:i.courseLocation||"",hideStatus:i.hideStatus||0}),this.selectedAmenities=i.courseAmenities||i.amenities||[],this.golfCourseForm.patchValue({courseAmenities:this.selectedAmenities}),i.imageUrl&&!i.imageUrl.includes("default-course.jpg")?this.imagePreview=i.imageUrl:i.courseImage&&!i.courseImage.includes("default-course.jpg")&&(this.imagePreview=i.courseImage),yield this.loadCourseTees()}}catch(t){console.error("Error loading course data:",t),yield b.default.fire({title:"Error!",text:"Failed to load course data",icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}loadCourseTees(){return y(this,null,function*(){if(this.courseId)try{let t=yield this.courseService.getTeesByCourse(this.courseId);if(t.data&&t.data.code===1){let i=t.data.data;for(console.log("Course tees loaded:",i);this.teesFormArray.length>0;)this.teesFormArray.removeAt(0);i&&i.length>0?i.forEach(o=>{let m=this.createTeeFormGroup({id:o.id,holeNumber:o.holeNumber});this.teesFormArray.push(m)}):this.addDefaultTee()}}catch(t){console.error("Error loading course tees:",t),this.teesFormArray.length===0&&this.addDefaultTee()}})}onFileChange(t){let i=t.target;if(i.files&&i.files[0]){let o=i.files[0];if(!o.type.startsWith("image/")){b.default.fire({title:"Error!",text:"Please select an image file",icon:"error",confirmButtonText:"Ok"});return}let m=5*1024*1024;if(o.size>m){b.default.fire({title:"Error!",text:"Image size should not exceed 5MB",icon:"error",confirmButtonText:"Ok"});return}this.selectedFile=o;let f=new FileReader;f.onload=E=>{this.imagePreview=E.target.result},f.readAsDataURL(o)}}isAmenitySelected(t){return this.selectedAmenities.includes(t)}toggleAmenity(t){let i=this.selectedAmenities.indexOf(t.id);i===-1?this.selectedAmenities.push(t.id):this.selectedAmenities.splice(i,1),this.golfCourseForm.patchValue({courseAmenities:this.selectedAmenities}),this.golfCourseForm.get("courseAmenities")?.markAsTouched()}getAmenityTitle(t){let i=this.amenitiesList.find(o=>o.id===t);return i?i.title:`Amenity ${t}`}getSafeHtml(t){return this.domSanitizer.bypassSecurityTrustHtml(t)}get f(){return this.golfCourseForm.controls}onSubmit(){return y(this,null,function*(){if(this.submitted=!0,this.golfCourseForm.invalid){Object.keys(this.golfCourseForm.controls).forEach(i=>{this.golfCourseForm.get(i)?.markAsTouched()}),this.teesFormArray.controls.forEach(i=>{Object.keys(i.value).forEach(o=>{i.get(o)?.markAsTouched()})});let t=document.querySelector(".is-invalid");t&&t.scrollIntoView({behavior:"smooth",block:"center"});return}try{this.loading=!0;let t=new FormData,i=this.golfCourseForm.value;t.append("courseName",i.courseName||""),t.append("courseAddress",i.courseAddress||""),t.append("courseOpenFrom",i.courseOpenFrom||""),t.append("coursePhoneNumber",i.coursePhoneNumber||""),t.append("courseAlternatePhoneNumber",i.courseAlternatePhoneNumber||""),t.append("courseWebsite",i.courseWebsite||""),t.append("courseDescription",i.courseDescription||""),t.append("courseLocation",i.courseLocation||""),t.append("hideStatus",i.hideStatus.toString()),this.selectedAmenities.length>0?t.append("courseAmenities",JSON.stringify(this.selectedAmenities)):t.append("courseAmenities",JSON.stringify([])),t.append("tees",JSON.stringify(i.tees)),this.selectedFile&&t.append("courseImage",this.selectedFile);let o=this.isEditMode&&this.courseId?this.courseId:"0",m=yield this.courseService.processCourse(t,o);if(m.data&&m.data.code===1){let f=i.tees.length,E=this.isEditMode?`Golf course has been updated successfully with ${f} tee(s)`:`Golf course has been created successfully with ${f} tee(s)`;yield b.default.fire({title:"Success!",text:E,icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/courses"])}else throw new Error(m.data?.message||"Unknown error occurred")}catch(t){console.error("Error submitting form:",t);let i="Failed to save golf course";if(t.response?.data?.message)i=t.response.data.message;else if(t.response?.data?.errors){let o=t.response.data.errors;i=Object.keys(o).map(m=>`${m}: ${o[m].join(", ")}`).join(`
`)}else t.message&&(i=t.message);yield b.default.fire({title:"Error!",text:i,icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onDelete(){return y(this,null,function*(){if(!this.courseId||!this.hasExistingData)return;if((yield b.default.fire({title:"Are you sure?",text:"This action cannot be undone! This will also delete all associated tees.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"})).isConfirmed)try{this.loading=!0;let i=yield this.courseService.deleteCourse(this.courseId);if(i.data&&i.data.code===1)yield b.default.fire({title:"Deleted!",text:"Golf course and all associated tees have been deleted successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/courses"]);else throw new Error(i.data?.message||"Failed to delete course")}catch(i){console.error("Error deleting course:",i),yield b.default.fire({title:"Error!",text:"Failed to delete golf course",icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onReset(){for(this.submitted=!1,this.selectedAmenities=[],this.imagePreview=null,this.selectedFile=null;this.teesFormArray.length>0;)this.teesFormArray.removeAt(0);this.golfCourseForm.reset({hideStatus:0,courseAmenities:[]}),this.isEditMode?this.loadCourseData():this.addDefaultTee()}isFieldInvalid(t){let i=this.golfCourseForm.get(t);return!!(i&&i.invalid&&(i.dirty||i.touched||this.submitted))}getErrorMessage(t){let i=this.golfCourseForm.get(t);if(!i||!i.errors)return"";let o=i.errors;if(o.required)switch(t){case"courseAmenities":return"Please select at least one amenity";case"tees":return"At least one tee must be defined";case"courseName":return"Course name is required";case"courseAddress":return"Course address is required";case"courseOpenFrom":return"Opening hours are required";case"coursePhoneNumber":return"Phone number is required";case"courseLocation":return"Course location is required";default:return"This field is required"}if(o.minlength)return t==="courseAmenities"?"Please select at least one amenity":t==="tees"?"At least one tee must be defined":`Minimum length is ${o.minlength.requiredLength} characters`;if(o.pattern)switch(t){case"coursePhoneNumber":case"courseAlternatePhoneNumber":return"Invalid phone number format";case"courseWebsite":return"Invalid website URL format (must start with http:// or https://)";default:return"Invalid format"}return"Invalid input"}convertTimeForInput(t){if(!t)return"06:00";if(/^\d{2}:\d{2}$/.test(t))return t;let i=t.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);if(i){let o=parseInt(i[1]),m=i[2],f=i[3].toUpperCase();return f==="PM"&&o!==12?o+=12:f==="AM"&&o===12&&(o=0),`${o.toString().padStart(2,"0")}:${m}`}return"06:00"}};d.\u0275fac=function(i){return new(i||d)(F(ue),F(q),F(G),F(xe),F(V))},d.\u0275cmp=T({type:d,selectors:[["app-create-courses"]],standalone:!0,features:[O],decls:213,vars:31,consts:[["form","ngForm"],["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","courseName","formControlName","courseName","type","text","placeholder","Course Name"],["cLabel","","for","courseName",1,"ms-2"],[3,"valid",4,"ngIf"],["cFormControl","","id","coursePhoneNumber","formControlName","coursePhoneNumber","type","text","placeholder","Phone Number"],["cLabel","","for","coursePhoneNumber",1,"ms-2"],["cFormControl","","id","courseAlternatePhoneNumber","formControlName","courseAlternatePhoneNumber","type","text","placeholder","Alternate Phone Number"],["cLabel","","for","courseAlternatePhoneNumber",1,"ms-2"],["cFormControl","","id","courseWebsite","formControlName","courseWebsite","type","url","placeholder","Website"],["cLabel","","for","courseWebsite",1,"ms-2"],["md","12",3,"cFormFloating"],["cFormControl","","id","courseOpenFrom","formControlName","courseOpenFrom","type","time","placeholder","Opening Time"],["cLabel","","for","courseOpenFrom",1,"ms-2"],["cFormControl","","id","courseAddress","formControlName","courseAddress","placeholder","Course Address","rows","4"],["cLabel","","for","courseAddress",1,"ms-2"],["cFormControl","","id","courseLocation","formControlName","courseLocation","type","text","placeholder","GPS Coordinates or Detailed Location"],["cLabel","","for","courseLocation",1,"ms-2"],["cFormControl","","id","courseDescription","formControlName","courseDescription","placeholder","Course Description","rows","8"],["cLabel","","for","courseDescription",1,"ms-2"],["md","12"],[1,"mb-3"],["cLabel","","for","courseImage",1,"form-label"],["cFormControl","","id","courseImage","type","file","accept","image/*",1,"form-control",3,"change"],[1,"form-text"],["class","mb-3",4,"ngIf"],["cLabel","",1,"form-label"],[1,"amenities-container","mt-2"],["class","text-muted",4,"ngIf"],["cButton","","class","me-2 mb-2","variant","outline","type","button",3,"color","title","click",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],["cLabel","",1,"form-label","mb-0"],["cButton","","color","success","variant","outline","size","sm","type","button",3,"click","disabled"],[1,"fas","fa-plus","me-1"],["formArrayName","tees"],["class","card mb-3 tee-card",3,"formGroupName",4,"ngFor","ngForOf"],[1,"text-muted"],[1,"fas","fa-info-circle","me-1"],["md","6"],["cFormSelect","","formControlName","hideStatus",1,"form-select"],["value","0"],["value","1"],["xs","12",1,"d-flex","gap-2"],["cButton","","color","primary","type","submit",1,"d-inline-flex","align-items-center",3,"disabled"],["class","spinner-border spinner-border-sm me-2","role","status","aria-hidden","true",4,"ngIf"],["cButton","","color","secondary","type","button",3,"click","disabled"],["cButton","","color","danger","type","button","class","ms-auto",3,"disabled","click",4,"ngIf"],[3,"valid"],[1,"mb-2"],["alt","Course Image Preview",1,"img-thumbnail",2,"max-width","300px","max-height","200px",3,"src"],["cButton","","variant","outline","type","button",1,"me-2","mb-2",3,"click","color","title"],["class","me-1 amenity-icon","style","width: 16px; height: 16px; display: inline-block;",3,"innerHTML",4,"ngIf"],["class","me-1",3,"class",4,"ngIf"],["class","fas fa-check ms-1",4,"ngIf"],[1,"me-1","amenity-icon",2,"width","16px","height","16px","display","inline-block",3,"innerHTML"],[1,"me-1"],[1,"fas","fa-check","ms-1"],[1,"card","mb-3","tee-card",3,"formGroupName"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"mb-0"],["cButton","","color","danger","variant","outline","size","sm","type","button",3,"disabled","click",4,"ngIf"],[1,"card-body"],[1,"row","g-3"],["cLabel","",1,"form-label",3,"for"],["cFormControl","","formControlName","holeNumber","type","number","min","1","step","1","placeholder","Enter number of holes",1,"form-control",3,"id"],["cButton","","color","danger","variant","outline","size","sm","type","button",3,"click","disabled"],[1,"fas","fa-trash"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm","me-2"],["cButton","","color","danger","type","button",1,"ms-auto",3,"click","disabled"]],template:function(i,o){if(i&1){let m=S();n(0,"c-row"),e(1,`
  `),n(2,"c-col",1),e(3,`
    `),n(4,"c-card",2),e(5,`
      `),n(6,"c-card-header"),e(7,`
        `),n(8,"strong"),e(9),r(),e(10,`
      `),r(),e(11,`
      `),n(12,"c-card-body"),e(13,`
        `),n(14,"form",3,0),v("ngSubmit",function(){return C(m),_(o.onSubmit())}),e(16,`
          `),e(17,`
          `),n(18,"c-col",4),e(19,`
            `),x(20,"input",5),e(21,`
            `),n(22,"label",6),e(23,"Course Name *"),r(),e(24,`
            `),p(25,be,2,2,"c-form-feedback",7),e(26,`
          `),r(),e(27,`

          `),n(28,"c-col",4),e(29,`
            `),x(30,"input",8),e(31,`
            `),n(32,"label",9),e(33,"Phone Number *"),r(),e(34,`
            `),p(35,Ce,2,2,"c-form-feedback",7),e(36,`
          `),r(),e(37,`

          `),n(38,"c-col",4),e(39,`
            `),x(40,"input",10),e(41,`
            `),n(42,"label",11),e(43,"Alternate Phone Number"),r(),e(44,`
            `),p(45,_e,2,2,"c-form-feedback",7),e(46,`
          `),r(),e(47,`

          `),n(48,"c-col",4),e(49,`
            `),x(50,"input",12),e(51,`
            `),n(52,"label",13),e(53,"Website"),r(),e(54,`
            `),p(55,ve,2,2,"c-form-feedback",7),e(56,`
          `),r(),e(57,`

          `),n(58,"c-col",14),e(59,`
            `),x(60,"input",15),e(61,`
            `),n(62,"label",16),e(63,"Opening Time *"),r(),e(64,`
            `),p(65,ye,2,2,"c-form-feedback",7),e(66,`
          `),r(),e(67,`

          `),e(68,`
          `),n(69,"c-col",14),e(70,`
            `),x(71,"textarea",17),e(72,`
            `),n(73,"label",18),e(74,"Course Address *"),r(),e(75,`
            `),p(76,Fe,2,2,"c-form-feedback",7),e(77,`
          `),r(),e(78,`

          `),e(79,`
          `),n(80,"c-col",14),e(81,`
            `),x(82,"input",19),e(83,`
            `),n(84,"label",20),e(85,"Course Location (GPS/Directions) *"),r(),e(86,`
            `),p(87,Ee,2,2,"c-form-feedback",7),e(88,`
          `),r(),e(89,`

          `),e(90,`
          `),n(91,"c-col",14),e(92,`
            `),x(93,"textarea",21),e(94,`
            `),n(95,"label",22),e(96,"Course Description"),r(),e(97,`
            `),p(98,Se,2,2,"c-form-feedback",7),e(99,`
          `),r(),e(100,`

          `),e(101,`
          `),n(102,"c-col",23),e(103,`
            `),n(104,"div",24),e(105,`
              `),n(106,"label",25),e(107,"Course Image"),r(),e(108,`
              `),n(109,"input",26),v("change",function(E){return C(m),_(o.onFileChange(E))}),r(),e(110,`
              `),n(111,"div",27),e(112,"Maximum file size: 5MB. Supported formats: JPG, PNG, GIF"),r(),e(113,`
              `),p(114,Ie,2,2,"c-form-feedback",7),e(115,`
            `),r(),e(116,`
            `),e(117,`
            `),p(118,Ae,7,1,"div",28),e(119,`
          `),r(),e(120,`

          `),e(121,`
          `),n(122,"c-col",23),e(123,`
            `),n(124,"div",24),e(125,`
              `),n(126,"label",29),e(127,"Amenities *"),r(),e(128,`
              `),n(129,"div",30),e(130,`
                `),p(131,Te,2,0,"div",31),e(132,`
                `),p(133,Pe,11,6,"button",32),e(134,`
              `),r(),e(135,`
              `),p(136,Me,2,2,"c-form-feedback",7),e(137,`
            `),r(),e(138,`
          `),r(),e(139,`

          `),e(140,`
          `),n(141,"c-col",23),e(142,`
            `),n(143,"div",24),e(144,`
              `),n(145,"div",33),e(146,`
                `),n(147,"label",34),e(148,"Course Tees *"),r(),e(149,`
                `),n(150,"button",35),v("click",function(){return C(m),_(o.addTee())}),e(151,`
                  `),x(152,"i",36),e(153,`
                  Add Tee
                `),r(),e(154,`
              `),r(),e(155,`

              `),e(156,`
              `),n(157,"div",37),e(158,`
                `),p(159,Le,28,8,"div",38),e(160,`
              `),r(),e(161,`

              `),e(162,`
              `),p(163,Be,2,2,"c-form-feedback",7),e(164,`

              `),e(165,`
              `),n(166,"div",27),e(167,`
                `),n(168,"small",39),e(169,`
                  `),x(170,"i",40),e(171,`
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
              `),p(200,Ve,1,0,"span",47),e(201),r(),e(202,`

            `),n(203,"button",48),v("click",function(){return C(m),_(o.onReset())}),e(204,`
              Reset Form
            `),r(),e(205,`

            `),p(206,Ge,2,1,"button",49),e(207,`
          `),r(),e(208,`
        `),r(),e(209,`
      `),r(),e(210,`
    `),r(),e(211,`
  `),r(),e(212,`
`),r()}i&2&&(c(9),M(o.isEditMode?"Edit Golf Course":"New Golf Course"),c(5),a("formGroup",o.golfCourseForm),c(4),a("cFormFloating",!0),c(7),a("ngIf",o.isFieldInvalid("courseName")),c(3),a("cFormFloating",!0),c(7),a("ngIf",o.isFieldInvalid("coursePhoneNumber")),c(3),a("cFormFloating",!0),c(7),a("ngIf",o.isFieldInvalid("courseAlternatePhoneNumber")),c(3),a("cFormFloating",!0),c(7),a("ngIf",o.isFieldInvalid("courseWebsite")),c(3),a("cFormFloating",!0),c(7),a("ngIf",o.isFieldInvalid("courseOpenFrom")),c(4),a("cFormFloating",!0),c(7),a("ngIf",o.isFieldInvalid("courseAddress")),c(4),a("cFormFloating",!0),c(7),a("ngIf",o.isFieldInvalid("courseLocation")),c(4),a("cFormFloating",!0),c(7),a("ngIf",o.isFieldInvalid("courseDescription")),c(16),a("ngIf",o.isFieldInvalid("courseImage")),c(4),a("ngIf",o.imagePreview),c(13),a("ngIf",o.amenitiesList.length===0),c(2),a("ngForOf",o.amenitiesList),c(3),a("ngIf",o.isFieldInvalid("courseAmenities")),c(14),a("disabled",o.loading),c(9),a("ngForOf",o.teesFormArray.controls),c(4),a("ngIf",o.isFieldInvalid("tees")),c(35),a("disabled",o.loading),c(2),a("ngIf",o.loading),c(),g(`
              `,o.loading?"Saving...":o.isEditMode?"Update Course":"Create Course",`
            `),c(2),a("disabled",o.loading),c(3),a("ngIf",o.isEditMode&&o.hasExistingData))},dependencies:[L,D,B,X,Q,z,K,H,W,fe,ie,ce,me,Z,ne,le,ee,te,de,re,ae,oe,se,pe,R,J,Y,U,$,j],styles:[`.amenities-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
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
  display: inline-block;
}`]});let s=d;return s})();export{Ke as CreateCoursesComponent};
