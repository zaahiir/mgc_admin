import{a as oe}from"./chunk-LF5HJZNB.js";import{a as re,b as ae}from"./chunk-TGQF57SU.js";import{a as se}from"./chunk-DVM5LER3.js";import"./chunk-T3N573N6.js";import"./chunk-ECX54NPK.js";import{N as L,O,Ta as Y,U as j,Ua as J,V as B,Va as E,Wa as Q,X as N,Xa as W,ab as X,d as A,db as Z,fa as q,ga as R,gb as ee,h as V,ia as U,ma as G,mb as te,na as $,nb as ie,ob as ne,q as P,qa as H,ra as K,t as M,v as z}from"./chunk-JU5RFLJC.js";import{$a as S,Ab as l,Kb as t,Lb as i,Mb as f,Qb as y,Vb as _,Xb as v,db as a,eb as C,hc as e,ia as k,ic as D,jc as u,qc as T,rc as w,ta as g,ua as h,ub as p}from"./chunk-QLX3N2J3.js";import{f as me,k as F}from"./chunk-AAPNLDO3.js";var b=me(se());var le=()=>({plugins:"anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",toolbar:"undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat"});function ce(r,d){if(r&1&&(t(0,"c-form-feedback",48),e(1),i()),r&2){let s=v();l("valid",!1),a(),u(`
              `,s.getErrorMessage("EventTitle"),`
            `)}}function de(r,d){if(r&1&&(t(0,"c-form-feedback",48),e(1),i()),r&2){let s=v();l("valid",!1),a(),u(`
              `,s.getErrorMessage("EventDate"),`
            `)}}function ve(r,d){if(r&1&&(t(0,"c-form-feedback",48),e(1),i()),r&2){let s=v();l("valid",!1),a(),u(`
              `,s.getErrorMessage("EventVenue"),`
            `)}}function Ee(r,d){if(r&1&&(t(0,"c-form-feedback",48),e(1),i()),r&2){let s=v();l("valid",!1),a(),u(`
              `,s.getErrorMessage("EventEntryPrice"),`
            `)}}function pe(r,d){if(r&1){let s=y();t(0,"div",16),e(1,`
              `),f(2,"img",49),e(3,`
              `),t(4,"button",50),_("click",function(){g(s);let n=v();return h(n.removeMainImage())}),e(5,"Remove"),i(),e(6,`
            `),i()}if(r&2){let s=v();a(2),l("src",s.imagePreview,S)}}function fe(r,d){if(r&1&&(t(0,"c-form-feedback",48),e(1),i()),r&2){let s=v();l("valid",!1),a(),u(`
              `,s.getErrorMessage("EventDetails"),`
            `)}}function ue(r,d){if(r&1&&(t(0,"c-form-feedback",48),e(1),i()),r&2){let s=v();l("valid",!1),a(),u(`
              `,s.getErrorMessage("EventActivities"),`
            `)}}function xe(r,d){if(r&1){let s=y();t(0,"div",51),e(1,`
                    `),f(2,"img",52),e(3,`
                    `),t(4,"button",53),_("click",function(){g(s);let n=v();return h(n.removeAdditionalImage("EventActivitiesimageOne"))}),e(5,"Remove"),i(),e(6,`
                  `),i()}if(r&2){let s=v();a(2),l("src",s.additionalImagePreviews.EventActivitiesimageOne,S)}}function ge(r,d){if(r&1){let s=y();t(0,"div",51),e(1,`
                    `),f(2,"img",54),e(3,`
                    `),t(4,"button",53),_("click",function(){g(s);let n=v();return h(n.removeAdditionalImage("EventActivitiesimageTwo"))}),e(5,"Remove"),i(),e(6,`
                  `),i()}if(r&2){let s=v();a(2),l("src",s.additionalImagePreviews.EventActivitiesimageTwo,S)}}function he(r,d){if(r&1&&(t(0,"c-form-feedback",48),e(1),i()),r&2){let s=v();l("valid",!1),a(),u(`
              `,s.getErrorMessage("EventDetailOrganizer"),`
            `)}}function _e(r,d){if(r&1&&(t(0,"c-form-feedback",48),e(1),i()),r&2){let s=v();l("valid",!1),a(),u(`
              `,s.getErrorMessage("EventEndDate"),`
            `)}}function be(r,d){if(r&1&&(t(0,"c-form-feedback",48),e(1),i()),r&2){let s=v();l("valid",!1),a(),u(`
              `,s.getErrorMessage("EventTime"),`
            `)}}function Ce(r,d){if(r&1&&(t(0,"c-form-feedback",48),e(1),i()),r&2){let s=v();l("valid",!1),a(),u(`
              `,s.getErrorMessage("EventEmail"),`
            `)}}function ye(r,d){if(r&1&&(t(0,"c-form-feedback",48),e(1),i()),r&2){let s=v();l("valid",!1),a(),u(`
              `,s.getErrorMessage("EventPhone"),`
            `)}}function Ie(r,d){r&1&&f(0,"span",55)}function Fe(r,d){if(r&1){let s=y();t(0,"button",56),_("click",function(){g(s);let n=v();return h(n.onDelete())}),e(1,`
                Delete Event
              `),i()}}var Be=(()=>{let d=class d{constructor(o,n,m,c,x){this.formBuilder=o,this.router=n,this.route=m,this.memberEventsService=c,this.domSanitizer=x,this.loading=!1,this.submitted=!1,this.imagePreview=null,this.selectedFile=null,this.additionalImagePreviews={},this.selectedAdditionalFiles={},this.isEditMode=!1,this.eventId=null,this.hasExistingData=!1}ngOnInit(){this.initializeForm(),this.checkEditMode()}initializeForm(){this.eventForm=this.formBuilder.group({EventTitle:["",[E.required,E.maxLength(255)]],EventDate:["",[E.required]],EventVenue:["",[E.required,E.maxLength(255)]],EventEntryPrice:["",[E.required,E.maxLength(50)]],EventImage:[null],EventDetails:["",[E.required]],EventActivities:["",[E.required]],EventActivitiesimageOne:[null],EventActivitiesimageTwo:[null],EventDetailOrganizer:["",[E.required,E.maxLength(255)]],EventEndDate:["",[E.required]],EventTime:["",[E.required,E.maxLength(50)]],EventEmail:["",[E.required,E.email]],EventPhone:["",[E.required,E.maxLength(50)]],is_active:[!0],hideStatus:[0]})}checkEditMode(){return F(this,null,function*(){this.eventId=this.route.snapshot.paramMap.get("id"),this.eventId&&this.eventId!=="0"&&(this.isEditMode=!0,yield this.loadEventData())})}loadEventData(){return F(this,null,function*(){try{this.loading=!0;let o=yield this.memberEventsService.listEvent(this.eventId);if(o.data?.status==="success"&&o.data?.data){let n=o.data.data;this.hasExistingData=!0,this.eventForm.patchValue({EventTitle:n.EventTitle||"",EventDate:n.EventDate||"",EventVenue:n.EventVenue||"",EventEntryPrice:n.EventEntryPrice||"",EventDetails:n.EventDetails||"",EventActivities:n.EventActivities||"",EventDetailOrganizer:n.EventDetailOrganizer||"",EventEndDate:n.EventEndDate||"",EventTime:n.EventTime||"",EventEmail:n.EventEmail||"",EventPhone:n.EventPhone||"",is_active:n.is_active!==void 0?n.is_active:!0,hideStatus:n.hideStatus||0}),n.EventImageUrl&&(this.imagePreview=n.EventImageUrl),n.EventActivitiesImages&&n.EventActivitiesImages.forEach((m,c)=>{this.additionalImagePreviews[`EventActivitiesimage${c===0?"One":"Two"}`]=m})}}catch(o){console.error("Error loading event data:",o),b.default.fire({icon:"error",title:"Error",text:"Failed to load event data"})}finally{this.loading=!1}})}onMainImageChange(o){let n=o.target;if(n.files&&n.files[0]){this.selectedFile=n.files[0],this.eventForm.patchValue({EventImage:this.selectedFile});let m=new FileReader;m.onload=c=>{this.imagePreview=c.target?.result},m.readAsDataURL(this.selectedFile)}}onAdditionalImageChange(o,n){let m=o.target;if(m.files&&m.files[0]){this.selectedAdditionalFiles[n]=m.files[0],this.eventForm.patchValue({[n]:m.files[0]});let c=new FileReader;c.onload=x=>{this.additionalImagePreviews[n]=x.target?.result},c.readAsDataURL(m.files[0])}}removeMainImage(){this.selectedFile=null,this.imagePreview=null,this.eventForm.patchValue({EventImage:null})}removeAdditionalImage(o){this.selectedAdditionalFiles[o]=null,this.additionalImagePreviews[o]=null,this.eventForm.patchValue({[o]:null})}get f(){return this.eventForm.controls}onSubmit(){return F(this,null,function*(){if(this.submitted=!0,!this.eventForm.invalid)try{this.loading=!0;let o=new FormData,n=this.eventForm.value;Object.keys(n).forEach(c=>{c==="is_active"?o.append(c,n[c]?"true":"false"):n[c]!==null&&n[c]!==void 0&&n[c]!==""&&o.append(c,n[c])}),this.selectedFile&&o.append("EventImage",this.selectedFile),Object.keys(this.selectedAdditionalFiles).forEach(c=>{let x=this.selectedAdditionalFiles[c];x&&o.append(c,x)});let m=yield this.memberEventsService.processEvent(o,this.eventId||"0");if(m.data?.status==="success")b.default.fire({icon:"success",title:"Success",text:this.isEditMode?"Event updated successfully!":"Event created successfully!"}).then(()=>{this.router.navigate(["/events"])});else throw new Error(m.data?.message||"Unknown error occurred")}catch(o){console.error("Error saving event:",o);let n="Failed to save event";o.response?.data?.message?n=o.response.data.message:o.message&&(n=o.message),b.default.fire({icon:"error",title:"Error",text:n})}finally{this.loading=!1}})}onDelete(){return F(this,null,function*(){if(!this.eventId||this.eventId==="0")return;if((yield b.default.fire({icon:"warning",title:"Are you sure?",text:"This action cannot be undone!",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"})).isConfirmed)try{this.loading=!0;let n=yield this.memberEventsService.deleteEvent(this.eventId);if(n.data?.status==="success")b.default.fire({icon:"success",title:"Deleted!",text:"Event has been deleted successfully."}).then(()=>{this.router.navigate(["/member-events"])});else throw new Error(n.data?.message||"Unknown error occurred")}catch(n){console.error("Error deleting event:",n),b.default.fire({icon:"error",title:"Error",text:"Failed to delete event"})}finally{this.loading=!1}})}onReset(){this.submitted=!1,this.imagePreview=null,this.selectedFile=null,this.additionalImagePreviews={},this.selectedAdditionalFiles={},this.eventForm.reset({is_active:!0,hideStatus:0})}isFieldInvalid(o){let n=this.eventForm.get(o);return n?this.submitted&&n.invalid:!1}getErrorMessage(o){let n=this.eventForm.get(o);if(n&&n.errors){if(n.errors.required)return`${o.charAt(0).toUpperCase()+o.slice(1)} is required`;if(n.errors.email)return"Please enter a valid email address";if(n.errors.maxlength)return`${o.charAt(0).toUpperCase()+o.slice(1)} is too long`}return""}getSafeHtml(o){return this.domSanitizer.bypassSecurityTrustHtml(o)}navigateToEvents(){this.router.navigate(["/events"])}};d.\u0275fac=function(n){return new(n||d)(C(te),C(z),C(M),C(oe),C(P))},d.\u0275cmp=k({type:d,selectors:[["app-create-member-events"]],standalone:!0,features:[T],decls:214,vars:33,consts:[["form","ngForm"],["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","EventTitle","formControlName","EventTitle","type","text","placeholder","Event Title"],["cLabel","","for","EventTitle",1,"ms-2"],[3,"valid",4,"ngIf"],["cFormControl","","id","EventDate","formControlName","EventDate","type","date","placeholder","Event Date"],["cLabel","","for","EventDate",1,"ms-2"],["cFormControl","","id","EventVenue","formControlName","EventVenue","type","text","placeholder","Event Venue"],["cLabel","","for","EventVenue",1,"ms-2"],["cFormControl","","id","EventEntryPrice","formControlName","EventEntryPrice","type","text","placeholder","Event Entry Price (e.g., '$60')"],["cLabel","","for","EventEntryPrice",1,"ms-2"],["md","12"],["cLabel","","for","EventImage",1,"form-label"],[1,"mb-3"],["cFormControl","","id","EventImage","type","file","accept","image/*",1,"form-control",3,"change"],["class","mb-3",4,"ngIf"],["cLabel","","for","EventDetails",1,"form-label"],["apiKey","jrj64u0e25jw0n4a9v0jbajhi9iakdkeyta9ryl58xwmqwz7","formControlName","EventDetails",3,"init"],["cLabel","","for","EventActivities",1,"form-label"],["apiKey","jrj64u0e25jw0n4a9v0jbajhi9iakdkeyta9ryl58xwmqwz7","formControlName","EventActivities",3,"init"],["cLabel","",1,"form-label"],[1,"row"],["md","6"],["cFormControl","","id","EventActivitiesimageOne","type","file","accept","image/*",1,"form-control",3,"change"],["class","mt-2",4,"ngIf"],["cFormControl","","id","EventActivitiesimageTwo","type","file","accept","image/*",1,"form-control",3,"change"],["cFormControl","","id","EventDetailOrganizer","formControlName","EventDetailOrganizer","type","text","placeholder","Event Organizer"],["cLabel","","for","EventDetailOrganizer",1,"ms-2"],["cFormControl","","id","EventEndDate","formControlName","EventEndDate","type","date"],["cLabel","","for","EventEndDate",1,"ms-2"],["cFormControl","","id","EventTime","formControlName","EventTime","type","time","placeholder","Event Time"],["cLabel","","for","EventTime",1,"ms-2"],["cFormControl","","id","EventEmail","formControlName","EventEmail","type","email","placeholder","Contact Email"],["cLabel","","for","EventEmail",1,"ms-2"],["cFormControl","","id","EventPhone","formControlName","EventPhone","type","text","placeholder","Contact Phone"],["cLabel","","for","EventPhone",1,"ms-2"],[1,"form-check"],["cFormControl","","id","is_active","formControlName","is_active","type","checkbox",1,"form-check-input"],["cLabel","","for","is_active",1,"form-check-label"],["xs","12",1,"d-flex","justify-content-between"],["type","submit","cButton","","color","primary",3,"disabled"],["class","spinner-border spinner-border-sm me-2",4,"ngIf"],["type","button","cButton","","color","secondary",1,"ms-2",3,"click"],["type","button","cButton","","color","info",3,"click"],["type","button","cButton","","color","danger","class","ms-2",3,"click",4,"ngIf"],[3,"valid"],["alt","Main Image Preview",1,"img-thumbnail",2,"max-width","200px","max-height","200px",3,"src"],["type","button","cButton","","color","danger","size","sm",1,"ms-2",3,"click"],[1,"mt-2"],["alt","Activities Image 1 Preview",1,"img-thumbnail",2,"max-width","150px","max-height","150px",3,"src"],["type","button","cButton","","color","danger","size","sm",1,"ms-1",3,"click"],["alt","Activities Image 2 Preview",1,"img-thumbnail",2,"max-width","150px","max-height","150px",3,"src"],[1,"spinner-border","spinner-border-sm","me-2"],["type","button","cButton","","color","danger",1,"ms-2",3,"click"]],template:function(n,m){if(n&1){let c=y();t(0,"c-row"),e(1,`
  `),t(2,"c-col",1),e(3,`
    `),t(4,"c-card",2),e(5,`
      `),t(6,"c-card-header"),e(7,`
        `),t(8,"strong"),e(9),i(),e(10,`
      `),i(),e(11,`
      `),t(12,"c-card-body"),e(13,`
        `),t(14,"form",3,0),_("ngSubmit",function(){return g(c),h(m.onSubmit())}),e(16,`
          
          `),e(17,`
          `),t(18,"c-col",4),e(19,`
            `),f(20,"input",5),e(21,`
            `),t(22,"label",6),e(23,"Event Title *"),i(),e(24,`
            `),p(25,ce,2,2,"c-form-feedback",7),e(26,`
          `),i(),e(27,`

          `),t(28,"c-col",4),e(29,`
            `),f(30,"input",8),e(31,`
            `),t(32,"label",9),e(33,"Event Date *"),i(),e(34,`
            `),p(35,de,2,2,"c-form-feedback",7),e(36,`
          `),i(),e(37,`

          `),t(38,"c-col",4),e(39,`
            `),f(40,"input",10),e(41,`
            `),t(42,"label",11),e(43,"Event Venue *"),i(),e(44,`
            `),p(45,ve,2,2,"c-form-feedback",7),e(46,`
          `),i(),e(47,`

          `),t(48,"c-col",4),e(49,`
            `),f(50,"input",12),e(51,`
            `),t(52,"label",13),e(53,"Event Entry Price *"),i(),e(54,`
            `),p(55,Ee,2,2,"c-form-feedback",7),e(56,`
          `),i(),e(57,`

          `),e(58,`
          `),t(59,"c-col",14),e(60,`
            `),t(61,"label",15),e(62,"Main Event Image *"),i(),e(63,`
            `),t(64,"div",16),e(65,`
              `),t(66,"input",17),_("change",function(I){return g(c),h(m.onMainImageChange(I))}),i(),e(67,`
            `),i(),e(68,`
            `),p(69,pe,7,1,"div",18),e(70,`
          `),i(),e(71,`

          `),e(72,`
          `),t(73,"c-col",14),e(74,`
            `),t(75,"label",19),e(76,"Event Details *"),i(),e(77,`
            `),f(78,"editor",20),e(79,`
            `),p(80,fe,2,2,"c-form-feedback",7),e(81,`
          `),i(),e(82,`



          `),e(83,`
          `),t(84,"c-col",14),e(85,`
            `),t(86,"label",21),e(87,"Event Activities *"),i(),e(88,`
            `),f(89,"editor",22),e(90,`
            `),p(91,ue,2,2,"c-form-feedback",7),e(92,`
          `),i(),e(93,`

          `),e(94,`
          `),t(95,"c-col",14),e(96,`
            `),t(97,"label",23),e(98,"Event Activities Images"),i(),e(99,`
            `),t(100,"div",24),e(101,`
              `),t(102,"c-col",25),e(103,`
                `),t(104,"div",16),e(105,`
                  `),t(106,"input",26),_("change",function(I){return g(c),h(m.onAdditionalImageChange(I,"EventActivitiesimageOne"))}),i(),e(107,`
                  `),p(108,xe,7,1,"div",27),e(109,`
                `),i(),e(110,`
              `),i(),e(111,`
              `),t(112,"c-col",25),e(113,`
                `),t(114,"div",16),e(115,`
                  `),t(116,"input",28),_("change",function(I){return g(c),h(m.onAdditionalImageChange(I,"EventActivitiesimageTwo"))}),i(),e(117,`
                  `),p(118,ge,7,1,"div",27),e(119,`
                `),i(),e(120,`
              `),i(),e(121,`
            `),i(),e(122,`
          `),i(),e(123,`

          `),e(124,`
          `),t(125,"c-col",4),e(126,`
            `),f(127,"input",29),e(128,`
            `),t(129,"label",30),e(130,"Event Organizer *"),i(),e(131,`
            `),p(132,he,2,2,"c-form-feedback",7),e(133,`
          `),i(),e(134,`

          `),t(135,"c-col",4),e(136,`
            `),f(137,"input",31),e(138,`
            `),t(139,"label",32),e(140,"Event End Date *"),i(),e(141,`
            `),p(142,_e,2,2,"c-form-feedback",7),e(143,`
          `),i(),e(144,`

          `),t(145,"c-col",4),e(146,`
            `),f(147,"input",33),e(148,`
            `),t(149,"label",34),e(150,"Event Time *"),i(),e(151,`
            `),p(152,be,2,2,"c-form-feedback",7),e(153,`
          `),i(),e(154,`

          `),t(155,"c-col",4),e(156,`
            `),f(157,"input",35),e(158,`
            `),t(159,"label",36),e(160,"Contact Email *"),i(),e(161,`
            `),p(162,Ce,2,2,"c-form-feedback",7),e(163,`
          `),i(),e(164,`

          `),t(165,"c-col",4),e(166,`
            `),f(167,"input",37),e(168,`
            `),t(169,"label",38),e(170,"Contact Phone *"),i(),e(171,`
            `),p(172,ye,2,2,"c-form-feedback",7),e(173,`
          `),i(),e(174,`

          `),e(175,`
          `),t(176,"c-col",25),e(177,`
            `),t(178,"div",39),e(179,`
              `),f(180,"input",40),e(181,`
              `),t(182,"label",41),e(183,`
                Event is active/visible
              `),i(),e(184,`
            `),i(),e(185,`
          `),i(),e(186,`

          `),e(187,`
          `),t(188,"c-col",42),e(189,`
            `),t(190,"div"),e(191,`
              `),t(192,"button",43),e(193,`
                `),p(194,Ie,1,0,"span",44),e(195),i(),e(196,`
              `),t(197,"button",45),_("click",function(){return g(c),h(m.onReset())}),e(198,`
                Reset
              `),i(),e(199,`
            `),i(),e(200,`
            `),t(201,"div"),e(202,`
              `),t(203,"button",46),_("click",function(){return g(c),h(m.navigateToEvents())}),e(204,`
                Back to Events
              `),i(),e(205,`
              `),p(206,Fe,2,0,"button",47),e(207,`
            `),i(),e(208,`
          `),i(),e(209,`
        `),i(),e(210,`
      `),i(),e(211,`
    `),i(),e(212,`
  `),i(),e(213,`
`),i()}n&2&&(a(9),D(m.isEditMode?"Edit Member Event":"New Member Event"),a(5),l("formGroup",m.eventForm),a(4),l("cFormFloating",!0),a(7),l("ngIf",m.isFieldInvalid("EventTitle")),a(3),l("cFormFloating",!0),a(7),l("ngIf",m.isFieldInvalid("EventDate")),a(3),l("cFormFloating",!0),a(7),l("ngIf",m.isFieldInvalid("EventVenue")),a(3),l("cFormFloating",!0),a(7),l("ngIf",m.isFieldInvalid("EventEntryPrice")),a(14),l("ngIf",m.imagePreview),a(9),l("init",w(31,le)),a(2),l("ngIf",m.isFieldInvalid("EventDetails")),a(9),l("init",w(32,le)),a(2),l("ngIf",m.isFieldInvalid("EventActivities")),a(17),l("ngIf",m.additionalImagePreviews.EventActivitiesimageOne),a(10),l("ngIf",m.additionalImagePreviews.EventActivitiesimageTwo),a(7),l("cFormFloating",!0),a(7),l("ngIf",m.isFieldInvalid("EventDetailOrganizer")),a(3),l("cFormFloating",!0),a(7),l("ngIf",m.isFieldInvalid("EventEndDate")),a(3),l("cFormFloating",!0),a(7),l("ngIf",m.isFieldInvalid("EventTime")),a(3),l("cFormFloating",!0),a(7),l("ngIf",m.isFieldInvalid("EventEmail")),a(3),l("cFormFloating",!0),a(7),l("ngIf",m.isFieldInvalid("EventPhone")),a(20),l("disabled",m.loading),a(2),l("ngIf",m.loading),a(),u(`
                `,m.isEditMode?"Update Event":"Create Event",`
              `),a(11),l("ngIf",m.isEditMode))},dependencies:[A,V,K,H,j,$,N,B,ne,X,J,Y,Q,W,Z,ee,ie,q,U,G,R,L,O,ae,re]});let r=d;return r})();export{Be as CreateEventsComponent};
