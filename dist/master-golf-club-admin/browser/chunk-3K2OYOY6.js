import{a as pe}from"./chunk-BLVS5CY5.js";import{a as ce}from"./chunk-R6FZ26T6.js";import{a as ue}from"./chunk-DVM5LER3.js";import"./chunk-T3N573N6.js";import"./chunk-ECX54NPK.js";import{N as O,Ta as X,U as A,Ua as Y,V,Va as g,Wa as Z,X as j,Xa as ee,ab as te,c as q,d as L,db as ie,fa as G,ga as $,gb as ne,h as R,ha as z,hb as re,ia as H,ib as ae,jb as oe,lb as le,ma as J,mb as me,na as K,nb as de,ob as se,qa as Q,ra as W,t as T,v as U}from"./chunk-JU5RFLJC.js";import{$a as N,Ab as o,Kb as i,Lb as n,Mb as f,Nb as P,Ob as _,Qb as D,Vb as y,Xb as b,db as a,eb as S,hc as e,ia as B,jc as x,qc as k,ta as E,ua as F,ub as h}from"./chunk-QLX3N2J3.js";import{f as he,k as v}from"./chunk-AAPNLDO3.js";var I=he(ue());function be(m,c){if(m&1&&(i(0,"c-form-feedback",57),e(1),n()),m&2){let d=b();o("valid",!1),a(),x(`
              `,d.getErrorMessage("firstName"),`
            `)}}function xe(m,c){if(m&1&&(i(0,"c-form-feedback",57),e(1),n()),m&2){let d=b();o("valid",!1),a(),x(`
              `,d.getErrorMessage("lastName"),`
            `)}}function ge(m,c){if(m&1&&(i(0,"c-form-feedback",57),e(1),n()),m&2){let d=b();o("valid",!1),a(),x(`
              `,d.getErrorMessage("email"),`
            `)}}function ye(m,c){if(m&1&&(i(0,"c-form-feedback",57),e(1),n()),m&2){let d=b();o("valid",!1),a(),x(`
              `,d.getErrorMessage("phoneNumber"),`
            `)}}function ve(m,c){if(m&1&&(i(0,"c-form-feedback",57),e(1),n()),m&2){let d=b();o("valid",!1),a(),x(`
              `,d.getErrorMessage("alternateEmail"),`
            `)}}function Se(m,c){if(m&1&&(i(0,"option",58),e(1),n()),m&2){let d=c.$implicit;o("value",d.id),a(),x(`
                `,d.genderName,`
              `)}}function Ce(m,c){if(m&1&&(i(0,"option",58),e(1),n()),m&2){let d=c.$implicit;o("value",d.id),a(),x(`
                `,d.countryName,`
              `)}}function Ee(m,c){if(m&1&&(i(0,"option",58),e(1),n()),m&2){let d=c.$implicit;o("value",d.id),a(),x(`
                `,d.planName,`
              `)}}function Fe(m,c){if(m&1&&(i(0,"c-form-feedback",57),e(1),n()),m&2){let d=b();o("valid",!1),a(),x(`
              `,d.getErrorMessage("plan"),`
            `)}}function Ne(m,c){if(m&1){let d=D();i(0,"div",59),e(1,`
                `),f(2,"img",60),e(3,`
                `),i(4,"button",61),y("click",function(){E(d);let t=b();return F(t.removeFile("profile"))}),e(5,`
                  Remove Photo
                `),n(),e(6,`
              `),n()}if(m&2){let d=b();a(2),o("src",d.profilePhotoPreview,N)}}function Pe(m,c){if(m&1&&(P(0),e(1,`
                  `),f(2,"img",63),e(3,`
                `),_()),m&2){let d=b(2);a(2),o("src",d.idProofPreview,N)}}function _e(m,c){m&1&&(P(0),e(1,`
                  `),i(2,"div",64),e(3,`
                    ID Proof document uploaded
                  `),n(),e(4,`
                `),_())}function De(m,c){if(m&1){let d=D();i(0,"div",59),e(1,`
                `),h(2,Pe,4,1,"ng-container",62),e(3,`
                `),h(4,_e,5,0,"ng-container",62),e(5,`
                `),i(6,"button",61),y("click",function(){E(d);let t=b();return F(t.removeFile("idProof"))}),e(7,`
                  Remove ID Proof
                `),n(),e(8,`
              `),n()}if(m&2){let d=b();a(2),o("ngIf",d.idProofPreview.toString().includes("data:image")),a(2),o("ngIf",!d.idProofPreview.toString().includes("data:image"))}}var Ae=(()=>{let c=class c{constructor(r,t,l,p,s){this.fb=r,this.memberService=t,this.memberEnquiryService=l,this.router=p,this.route=s,this.loading=!1,this.submitted=!1,this.selectedProfileFile=null,this.selectedIdProofFile=null,this.profilePhotoPreview=null,this.idProofPreview=null,this.genders=[],this.nationalities=[],this.plans=[],this.memberId=null,this.memberData=null,this.pageTitle="Update Member Profile",this.requiredFields=["firstName","lastName","email","phoneNumber","plan"],this.initializeForm()}initializeForm(){this.memberForm=this.fb.group({firstName:["",[g.required,g.minLength(2)]],lastName:["",[g.required,g.minLength(2)]],email:["",[g.required,g.email]],phoneNumber:["",[g.required]],plan:["",[g.required]],alternatePhoneNumber:[""],alternateEmail:[""],dateOfBirth:[""],gender:[""],nationality:[""],address:[""],golfClubId:[""],membershipStartDate:[""],membershipEndDate:[""],emergencyContactName:[""],emergencyContactPhone:[""],emergencyContactRelation:[""],referredBy:[""],profilePhoto:[""],idProof:[""],handicap:[!1],enquiryId:[""],enquiryMessage:[""]})}ngOnInit(){return v(this,null,function*(){try{if(this.memberId=this.route.snapshot.paramMap.get("id"),!this.memberId){yield this.showError("Member ID not found"),this.router.navigate(["/members"]);return}yield this.loadDropdownData(),yield this.loadMemberData()}catch{yield this.showError("Failed to load member data")}})}loadMemberData(){return v(this,null,function*(){try{let r=yield this.memberService.listMember(this.memberId);r?.data?.code===1&&r.data.data&&r.data.data.length>0?(this.memberData=r.data.data[0],this.populateForm()):(yield this.showError("Failed to load member data"),this.router.navigate(["/members"]))}catch(r){console.error("Error loading member data:",r),yield this.showError("Failed to load member data"),this.router.navigate(["/members"])}})}populateForm(){if(!this.memberData)return;let r="";if(this.memberData.plan){let p=this.plans.find(s=>s.planName.toLowerCase().trim()===this.memberData.plan.toLowerCase().trim());if(p)r=p.id.toString();else{let s=this.plans.find(u=>u.id.toString()===this.memberData.plan);s&&(r=s.id.toString())}}let t="";if(this.memberData.gender){let p=this.genders.find(s=>s.genderName.toLowerCase().trim()===this.memberData.gender.toLowerCase().trim());if(p)t=p.id.toString();else{let s=this.genders.find(u=>u.id.toString()===this.memberData.gender);s&&(t=s.id.toString())}}let l="";if(this.memberData.nationality){let p=this.nationalities.find(s=>s.countryName.toLowerCase().trim()===this.memberData.nationality.toLowerCase().trim());if(p)l=p.id.toString();else{let s=this.nationalities.find(u=>u.id.toString()===this.memberData.nationality);s&&(l=s.id.toString())}}this.memberForm.patchValue({firstName:this.memberData.firstName||"",lastName:this.memberData.lastName||"",email:this.memberData.email||"",phoneNumber:this.memberData.phoneNumber||"",alternatePhoneNumber:this.memberData.alternatePhoneNumber||"",alternateEmail:this.memberData.alternateEmail||"",dateOfBirth:this.memberData.dateOfBirth||"",gender:t,nationality:l,address:this.memberData.address||"",plan:r,golfClubId:this.memberData.golfClubId||"",membershipStartDate:this.memberData.membershipStartDate||"",membershipEndDate:this.memberData.membershipEndDate||"",emergencyContactName:this.memberData.emergencyContactName||"",emergencyContactPhone:this.memberData.emergencyContactPhone||"",emergencyContactRelation:this.memberData.emergencyContactRelation||"",referredBy:this.memberData.referredBy||"",profilePhoto:this.memberData.profilePhoto||"",idProof:this.memberData.idProof||"",handicap:this.memberData.handicap||!1,enquiryId:this.memberData.enquiryId||"",enquiryMessage:this.memberData.enquiryMessage||""}),this.memberData.profilePhoto&&(this.profilePhotoPreview=this.memberData.profilePhoto),this.memberData.idProof&&(this.idProofPreview=this.memberData.idProof)}loadDropdownData(){return v(this,null,function*(){try{let[r,t,l]=yield Promise.all([this.memberService.getGender(),this.memberService.getNationality(),this.memberService.getPlan()]);r?.data&&(this.genders=Array.isArray(r.data)?r.data:r.data.data?r.data.data:[]),t?.data&&(this.nationalities=Array.isArray(t.data)?t.data:t.data.data?t.data.data:[]),l?.data&&(this.plans=Array.isArray(l.data)?l.data:l.data.data?l.data.data:[])}catch(r){throw r}})}onFileSelected(r,t){let l=r.target.files[0];if(l)if(t==="profile"){this.selectedProfileFile=l;let p=new FileReader;p.onload=s=>{this.profilePhotoPreview=s.target?.result||null},p.readAsDataURL(l)}else{this.selectedIdProofFile=l;let p=new FileReader;p.onload=s=>{this.idProofPreview=s.target?.result||null},p.readAsDataURL(l)}}removeFile(r){if(r==="profile"){this.selectedProfileFile=null,this.profilePhotoPreview=null;let t=document.getElementById("profilePhoto");t&&(t.value="")}else{this.selectedIdProofFile=null,this.idProofPreview=null;let t=document.getElementById("idProof");t&&(t.value="")}}onSubmit(){return v(this,null,function*(){try{if(this.submitted=!0,this.memberForm.invalid){let u=this.getFirstInvalidField();u&&document.querySelector(`[formcontrolname="${u}"]`)?.scrollIntoView({behavior:"smooth",block:"center"}),yield this.showError("Please fill in all required fields correctly.");return}this.loading=!0;let r=new FormData,t=this.memberForm.getRawValue(),l=t.plan;if(!l||l===""||l==="null"){yield this.showError("Please select a valid membership plan."),this.loading=!1;return}if(!this.plans.find(u=>u.id.toString()===l.toString())){yield this.showError("Selected plan is invalid. Please select a valid membership plan."),this.loading=!1;return}r.append("firstName",(t.firstName||"").toString().trim()),r.append("lastName",(t.lastName||"").toString().trim()),r.append("email",(t.email||"").toString().trim()),r.append("phoneNumber",(t.phoneNumber||"").toString().trim()),r.append("plan",l.toString()),t.alternatePhoneNumber&&t.alternatePhoneNumber.trim()&&r.append("alternatePhoneNumber",t.alternatePhoneNumber.trim()),t.alternateEmail&&t.alternateEmail.trim()&&r.append("alternateEmail",t.alternateEmail.trim()),t.dateOfBirth&&r.append("dateOfBirth",new Date(t.dateOfBirth).toISOString().split("T")[0]),t.gender&&t.gender!==""&&t.gender!=="null"&&r.append("gender",t.gender.toString()),t.nationality&&t.nationality!==""&&t.nationality!=="null"&&r.append("nationality",t.nationality.toString()),t.address&&t.address.trim()&&r.append("address",t.address.trim()),t.membershipStartDate&&r.append("membershipStartDate",new Date(t.membershipStartDate).toISOString().split("T")[0]),t.membershipEndDate&&r.append("membershipEndDate",new Date(t.membershipEndDate).toISOString().split("T")[0]),t.emergencyContactName&&t.emergencyContactName.trim()&&r.append("emergencyContactName",t.emergencyContactName.trim()),t.emergencyContactPhone&&t.emergencyContactPhone.trim()&&r.append("emergencyContactPhone",t.emergencyContactPhone.trim()),t.emergencyContactRelation&&t.emergencyContactRelation.trim()&&r.append("emergencyContactRelation",t.emergencyContactRelation.trim()),t.referredBy&&t.referredBy.trim()&&r.append("referredBy",t.referredBy.trim()),r.append("handicap",t.handicap?"true":"false"),t.enquiryId&&r.append("enquiryId",t.enquiryId.toString()),t.enquiryMessage&&t.enquiryMessage.trim()&&r.append("enquiryMessage",t.enquiryMessage.trim()),this.selectedProfileFile&&r.append("profilePhoto",this.selectedProfileFile),this.selectedIdProofFile&&r.append("idProof",this.selectedIdProofFile);let s=yield this.memberService.processMember(r,this.memberId);if(s?.data?.code===1)yield I.default.fire({title:"Success!",text:"Member profile has been updated successfully.",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/members"]);else{let u=s?.data?.message||"Failed to update member",C=s?.data?.errors;if(C){let w="";for(let[fe,M]of Object.entries(C))Array.isArray(M)&&(w+=`${fe}: ${M.join(", ")}
`);throw new Error(`${u}

Details:
${w}`)}else throw new Error(u)}}catch(r){console.error("Update error:",r),yield this.showError(r instanceof Error?r.message:"Failed to update member")}finally{this.loading=!1}})}onCancel(){this.router.navigate(["/members"])}get f(){return this.memberForm.controls}getFirstInvalidField(){let r=this.memberForm.controls;for(let t in r)if(r[t].invalid)return t;return null}isFieldInvalid(r){let t=this.memberForm.get(r);return["firstName","lastName","email","phoneNumber","plan"].includes(r)?!!(t&&t.invalid&&(t.dirty||t.touched||this.submitted)):!1}getErrorMessage(r){let t=this.memberForm.get(r);return!t||!t.errors?"":t.errors.required?"This field is required":t.errors.email?"Please enter a valid email address":t.errors.pattern&&r==="phoneNumber"?"Please enter a valid phone number":t.errors.minlength?`Minimum length is ${t.errors.minlength.requiredLength} characters`:"Invalid input"}showError(r){return v(this,null,function*(){yield I.default.fire("Error",r,"error")})}};c.\u0275fac=function(t){return new(t||c)(S(me),S(ce),S(pe),S(U),S(T))},c.\u0275cmp=B({type:c,selectors:[["app-update-members"]],standalone:!0,features:[k],decls:245,vars:34,consts:[["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","firstName","formControlName","firstName","required","","type","text","placeholder","First Name"],["cLabel","","for","firstName",1,"ms-2"],[3,"valid",4,"ngIf"],["cFormControl","","id","lastName","formControlName","lastName","required","","type","text","placeholder","Last Name"],["cLabel","","for","lastName",1,"ms-2"],["cFormControl","","id","email","formControlName","email","required","","type","email","placeholder","Email"],["cLabel","","for","email",1,"ms-2"],["cFormControl","","id","phoneNumber","formControlName","phoneNumber","required","","type","tel","placeholder","Phone Number"],["cLabel","","for","phoneNumber",1,"ms-2"],["cFormControl","","id","alternatePhoneNumber","formControlName","alternatePhoneNumber","type","tel","placeholder","Alternate Phone Number"],["cLabel","","for","alternatePhoneNumber",1,"ms-2"],["cFormControl","","id","alternateEmail","formControlName","alternateEmail","type","email","placeholder","Alternate Email"],["cLabel","","for","alternateEmail",1,"ms-2"],["cFormControl","","id","dateOfBirth","formControlName","dateOfBirth","type","date","placeholder","Date of Birth"],["cLabel","","for","dateOfBirth",1,"ms-2"],["cSelect","","id","gender","formControlName","gender"],["value",""],[3,"value",4,"ngFor","ngForOf"],["cLabel","","for","gender",1,"ms-2"],["cSelect","","id","nationality","formControlName","nationality"],["cLabel","","for","nationality",1,"ms-2"],["md","12",3,"cFormFloating"],["cFormControl","","id","address","formControlName","address","placeholder","Address","rows","3"],["cLabel","","for","address",1,"ms-2"],["cSelect","","id","plan","formControlName","plan","required",""],["cLabel","","for","plan",1,"ms-2"],["cFormControl","","id","golfClubId","formControlName","golfClubId","readonly","","type","text","placeholder","Golf Club ID"],["cLabel","","for","golfClubId",1,"ms-2"],["cFormControl","","id","membershipStartDate","formControlName","membershipStartDate","type","date","placeholder","Membership Start Date"],["cLabel","","for","membershipStartDate",1,"ms-2"],["cFormControl","","id","membershipEndDate","formControlName","membershipEndDate","type","date","placeholder","Membership End Date",3,"disabled"],["cLabel","","for","membershipEndDate",1,"ms-2"],["cFormControl","","id","emergencyContactName","formControlName","emergencyContactName","type","text","placeholder","Emergency Contact Name"],["cLabel","","for","emergencyContactName",1,"ms-2"],["cFormControl","","id","emergencyContactPhone","formControlName","emergencyContactPhone","type","tel","placeholder","Emergency Contact Phone"],["cLabel","","for","emergencyContactPhone",1,"ms-2"],["cFormControl","","id","emergencyContactRelation","formControlName","emergencyContactRelation","type","text","placeholder","Relationship"],["cLabel","","for","emergencyContactRelation",1,"ms-2"],["cFormControl","","id","referredBy","formControlName","referredBy","type","text","placeholder","Referred By"],["cLabel","","for","referredBy",1,"ms-2"],["md","6"],[1,"mb-3"],["cLabel","","for","profilePhoto",1,"form-label"],["cFormControl","","type","file","id","profilePhoto","accept","image/*",1,"form-control",3,"change"],["class","mt-2",4,"ngIf"],["cLabel","","for","idProof",1,"form-label"],["cFormControl","","type","file","id","idProof","accept",".pdf,.jpg,.jpeg,.png",1,"form-control",3,"change"],[1,"form-check","mt-3"],["type","checkbox","id","handicap","formControlName","handicap",1,"form-check-input"],["for","handicap",1,"form-check-label"],["xs","12",1,"mt-4"],["cButton","","color","primary","type","submit",1,"me-2",3,"disabled"],["cButton","","color","secondary","type","button",3,"click","disabled"],[3,"valid"],[3,"value"],[1,"mt-2"],["alt","Profile Preview",1,"img-thumbnail",2,"max-width","200px","max-height","200px",3,"src"],["cButton","","color","danger","size","sm","type","button",1,"ms-2",3,"click"],[4,"ngIf"],["alt","ID Proof Preview",1,"img-thumbnail",2,"max-width","200px","max-height","200px",3,"src"],[1,"alert","alert-info"]],template:function(t,l){t&1&&(i(0,"c-row"),e(1,`
  `),i(2,"c-col",0),e(3,`
    `),i(4,"c-card",1),e(5,`
      `),i(6,"c-card-header"),e(7,`
        `),i(8,"strong"),e(9,"Update Member Profile"),n(),e(10,`
      `),n(),e(11,`
      `),i(12,"c-card-body"),e(13,`
        `),i(14,"form",2),y("ngSubmit",function(){return l.onSubmit()}),e(15,`
          `),e(16,`
          `),i(17,"c-col",3),e(18,`
            `),f(19,"input",4),e(20,`
            `),i(21,"label",5),e(22,"First Name"),n(),e(23,`
            `),h(24,be,2,2,"c-form-feedback",6),e(25,`
          `),n(),e(26,`

          `),i(27,"c-col",3),e(28,`
            `),f(29,"input",7),e(30,`
            `),i(31,"label",8),e(32,"Last Name"),n(),e(33,`
            `),h(34,xe,2,2,"c-form-feedback",6),e(35,`
          `),n(),e(36,`

          `),i(37,"c-col",3),e(38,`
            `),f(39,"input",9),e(40,`
            `),i(41,"label",10),e(42,"Email"),n(),e(43,`
            `),h(44,ge,2,2,"c-form-feedback",6),e(45,`
          `),n(),e(46,`

          `),i(47,"c-col",3),e(48,`
            `),f(49,"input",11),e(50,`
            `),i(51,"label",12),e(52,"Phone Number"),n(),e(53,`
            `),h(54,ye,2,2,"c-form-feedback",6),e(55,`
          `),n(),e(56,`

          `),i(57,"c-col",3),e(58,`
            `),f(59,"input",13),e(60,`
            `),i(61,"label",14),e(62,"Alternate Phone Number"),n(),e(63,`
          `),n(),e(64,`

          `),i(65,"c-col",3),e(66,`
            `),f(67,"input",15),e(68,`
            `),i(69,"label",16),e(70,"Alternate Email"),n(),e(71,`
            `),h(72,ve,2,2,"c-form-feedback",6),e(73,`
          `),n(),e(74,`

          `),i(75,"c-col",3),e(76,`
            `),f(77,"input",17),e(78,`
            `),i(79,"label",18),e(80,"Date of Birth"),n(),e(81,`
          `),n(),e(82,`

          `),i(83,"c-col",3),e(84,`
            `),i(85,"select",19),e(86,`
              `),i(87,"option",20),e(88,"Select Gender"),n(),e(89,`
              `),h(90,Se,2,2,"option",21),e(91,`
            `),n(),e(92,`
            `),i(93,"label",22),e(94,"Gender"),n(),e(95,`
          `),n(),e(96,`

          `),i(97,"c-col",3),e(98,`
            `),i(99,"select",23),e(100,`
              `),i(101,"option",20),e(102,"Select Nationality"),n(),e(103,`
              `),h(104,Ce,2,2,"option",21),e(105,`
            `),n(),e(106,`
            `),i(107,"label",24),e(108,"Nationality"),n(),e(109,`
          `),n(),e(110,`

          `),i(111,"c-col",25),e(112,`
            `),f(113,"textarea",26),e(114,`
            `),i(115,"label",27),e(116,"Address"),n(),e(117,`
          `),n(),e(118,`

          `),i(119,"c-col",3),e(120,`
            `),i(121,"select",28),e(122,`
              `),i(123,"option",20),e(124,"Select Plan"),n(),e(125,`
              `),h(126,Ee,2,2,"option",21),e(127,`
            `),n(),e(128,`
            `),i(129,"label",29),e(130,"Membership Plan"),n(),e(131,`
            `),h(132,Fe,2,2,"c-form-feedback",6),e(133,`
          `),n(),e(134,`

          `),i(135,"c-col",3),e(136,`
            `),f(137,"input",30),e(138,`
            `),i(139,"label",31),e(140,"Golf Club ID"),n(),e(141,`
          `),n(),e(142,`

          `),i(143,"c-col",3),e(144,`
            `),f(145,"input",32),e(146,`
            `),i(147,"label",33),e(148,"Membership Start Date"),n(),e(149,`
          `),n(),e(150,`

          `),i(151,"c-col",3),e(152,`
            `),f(153,"input",34),e(154,`
            `),i(155,"label",35),e(156,"Membership End Date"),n(),e(157,`
          `),n(),e(158,`

          `),e(159,`
          `),i(160,"c-col",3),e(161,`
            `),f(162,"input",36),e(163,`
            `),i(164,"label",37),e(165,"Emergency Contact Name"),n(),e(166,`
          `),n(),e(167,`

          `),i(168,"c-col",3),e(169,`
            `),f(170,"input",38),e(171,`
            `),i(172,"label",39),e(173,"Emergency Contact Phone"),n(),e(174,`
          `),n(),e(175,`

          `),i(176,"c-col",3),e(177,`
            `),f(178,"input",40),e(179,`
            `),i(180,"label",41),e(181,"Relationship"),n(),e(182,`
          `),n(),e(183,`

          `),i(184,"c-col",3),e(185,`
            `),f(186,"input",42),e(187,`
            `),i(188,"label",43),e(189,"Referred By (Optional)"),n(),e(190,`
          `),n(),e(191,`

          `),e(192,`
          `),i(193,"c-col",44),e(194,`
            `),i(195,"div",45),e(196,`
              `),i(197,"label",46),e(198,"Profile Photo"),n(),e(199,`
              `),i(200,"input",47),y("change",function(s){return l.onFileSelected(s,"profile")}),n(),e(201,`
              `),h(202,Ne,7,1,"div",48),e(203,`
            `),n(),e(204,`
          `),n(),e(205,`

          `),i(206,"c-col",44),e(207,`
            `),i(208,"div",45),e(209,`
              `),i(210,"label",49),e(211,"ID Proof"),n(),e(212,`
              `),i(213,"input",50),y("change",function(s){return l.onFileSelected(s,"idProof")}),n(),e(214,`
              `),h(215,De,9,2,"div",48),e(216,`
            `),n(),e(217,`
          `),n(),e(218,`

          `),e(219,`
          `),i(220,"c-col",44),e(221,`
            `),i(222,"div",51),e(223,`
              `),f(224,"input",52),e(225,`
              `),i(226,"label",53),e(227,`
                Handicap
              `),n(),e(228,`
            `),n(),e(229,`
          `),n(),e(230,`

          `),e(231,`
          `),i(232,"c-col",54),e(233,`
            `),i(234,"button",55),e(235),n(),e(236,`
            `),i(237,"button",56),y("click",function(){return l.onCancel()}),e(238,`
              Cancel
            `),n(),e(239,`
          `),n(),e(240,`
        `),n(),e(241,`
      `),n(),e(242,`
    `),n(),e(243,`
  `),n(),e(244,`
`),n()),t&2&&(a(14),o("formGroup",l.memberForm),a(3),o("cFormFloating",!0),a(7),o("ngIf",l.isFieldInvalid("firstName")),a(3),o("cFormFloating",!0),a(7),o("ngIf",l.isFieldInvalid("lastName")),a(3),o("cFormFloating",!0),a(7),o("ngIf",l.isFieldInvalid("email")),a(3),o("cFormFloating",!0),a(7),o("ngIf",l.isFieldInvalid("phoneNumber")),a(3),o("cFormFloating",!0),a(8),o("cFormFloating",!0),a(7),o("ngIf",l.isFieldInvalid("alternateEmail")),a(3),o("cFormFloating",!0),a(8),o("cFormFloating",!0),a(7),o("ngForOf",l.genders),a(7),o("cFormFloating",!0),a(7),o("ngForOf",l.nationalities),a(7),o("cFormFloating",!0),a(8),o("cFormFloating",!0),a(7),o("ngForOf",l.plans),a(6),o("ngIf",l.isFieldInvalid("plan")),a(3),o("cFormFloating",!0),a(8),o("cFormFloating",!0),a(8),o("cFormFloating",!0),a(2),o("disabled",!0),a(7),o("cFormFloating",!0),a(8),o("cFormFloating",!0),a(8),o("cFormFloating",!0),a(8),o("cFormFloating",!0),a(18),o("ngIf",l.profilePhotoPreview),a(13),o("ngIf",l.idProofPreview),a(19),o("disabled",l.loading),a(),x(`
              `,l.loading?"Saving...":"Update Member Profile",`
            `),a(2),o("disabled",l.loading))},dependencies:[L,R,q,W,Q,A,K,j,V,se,te,ae,oe,Y,X,re,Z,ee,le,ie,ne,de,G,H,J,$,z,O]});let m=c;return m})();export{Ae as UpdateMembersComponent};
