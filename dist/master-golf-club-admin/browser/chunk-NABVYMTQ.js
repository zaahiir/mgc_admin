import{a as le}from"./chunk-F4L2PKW2.js";import{a as me}from"./chunk-DVM5LER3.js";import"./chunk-T3N573N6.js";import"./chunk-ECX54NPK.js";import{N as T,Ta as Y,U as q,Ua as $,V as G,Va as s,Wa as J,X as B,Xa as K,ab as Q,bb as W,c as k,d as I,db as X,eb as Z,fa as j,fb as ee,ga as z,gb as te,h as A,ia as M,kb as ie,lb as re,ma as O,mb as ne,na as R,nb as ae,ob as oe,qa as L,ra as H,t as V,v as U}from"./chunk-JU5RFLJC.js";import{$b as _,Ab as l,Kb as r,Lb as n,Mb as c,Qb as F,Vb as y,Xb as g,db as d,eb as b,hc as e,ia as N,jc as w,qc as D,ta as v,ua as x,ub as f}from"./chunk-QLX3N2J3.js";import{a as C,b as E,f as de,k as u}from"./chunk-AAPNLDO3.js";var S=de(me());function ce(o,m){o&1&&(r(0,"c-form-feedback",21),e(1,"Please provide a Plan Name."),n()),o&2&&l("valid",!1)}function se(o,m){o&1&&(r(0,"c-form-feedback",21),e(1,"Please provide a Plan Description."),n()),o&2&&l("valid",!1)}function pe(o,m){o&1&&(r(0,"c-form-feedback",21),e(1,"Please provide a valid duration in years."),n()),o&2&&l("valid",!1)}function ue(o,m){o&1&&(r(0,"c-form-feedback",21),e(1,"Please provide a valid Plan Price."),n()),o&2&&l("valid",!1)}function fe(o,m){o&1&&(r(0,"c-form-feedback",21),e(1,`
                    Feature name is required
                  `),n()),o&2&&l("valid",!1)}function he(o,m){if(o&1){let h=F();r(0,"div",22),e(1,`
                `),r(2,"c-col",23),e(3,`
                  `),c(4,"input",24),e(5,`
                  `),f(6,fe,2,1,"c-form-feedback",7),e(7,`
                `),n(),e(8,`
                `),r(9,"c-col",25),e(10,`
                  `),r(11,"div",26),e(12,`
                    `),c(13,"input",27),e(14,`
                    `),r(15,"label",28),e(16,`
                      Included in plan
                    `),n(),e(17,`
                  `),n(),e(18,`
                `),n(),e(19,`
                `),r(20,"c-col",29),e(21,`
                  `),r(22,"button",30),y("click",function(){let a=v(h).index,i=g();return x(i.removeFeature(a))}),e(23,`
                    `),c(24,"i",31),e(25,` Remove
                  `),n(),e(26,`
                `),n(),e(27,`
              `),n()}if(o&2){let h,t=m.$implicit,a=m.index,i=g();l("formGroupName",a),d(6),l("ngIf",((h=t.get("featureName"))==null?null:h.errors)&&(((h=t.get("featureName"))==null?null:h.touched)||i.submitted)),d(7),_("id","included",a,""),d(2),_("for","included",a,"")}}var Ne=(()=>{let m=class m{constructor(t,a,i,p){this.fb=t,this.router=a,this.route=i,this.planService=p,this.customStylesValidated=!1,this.loading=!1,this.submitted=!1,this.planId="",this.initializeForm()}initializeForm(){this.planForm=this.fb.group({planName:["",[s.required]],planDescription:["",[s.required]],planDuration:["",[s.required,s.min(1)]],planPrice:["",[s.required,s.min(0)]],features:this.fb.array([])})}ngOnInit(){return u(this,null,function*(){try{this.route.params.subscribe(t=>{this.planId=t.id,this.loadPlanData(this.planId)})}catch(t){console.error("Error during initialization:",t),yield this.showError("An error occurred during initialization.")}})}get f(){return this.planForm.controls}get featuresArray(){return this.planForm.get("features")}loadPlanData(t){return u(this,null,function*(){try{let a=yield this.planService.listPlan(t);if(a.data.code===1&&a.data.data.length>0){let i=a.data.data[0];this.planForm.patchValue({planName:i.planName,planDescription:i.planDescription,planDuration:i.planDuration,planPrice:i.planPrice}),yield this.loadPlanFeatures(t)}}catch(a){console.error("Error loading plan data:",a),yield this.showError("Failed to load plan data.")}})}loadPlanFeatures(t){return u(this,null,function*(){try{let a=yield this.planService.getPlanFeatures(t);a.data.code===1&&(this.featuresArray.clear(),a.data.data.forEach(i=>{let p=this.fb.group({id:[i.id],featureName:[i.featureName,[s.required]],isIncluded:[i.isIncluded],order:[i.order||0]});this.featuresArray.push(p)}))}catch(a){console.error("Error loading plan features:",a)}})}onSubmit(){return u(this,null,function*(){if(this.customStylesValidated=!0,this.submitted=!0,this.planForm.invalid){Object.values(this.planForm.controls).forEach(t=>{t.invalid&&t.markAsTouched()});return}this.loading=!0;try{let t=E(C({},this.planForm.value),{planDuration:Number(this.planForm.value.planDuration),planPrice:Number(this.planForm.value.planPrice)}),a=yield this.planService.processPlan(t,this.planId);a.data.code===1?(yield this.updatePlanFeatures(),yield S.default.fire("Updated!",a.data.message,"success"),this.router.navigate(["/plan"])):yield this.showError(a.data.message)}catch(t){console.error("Error updating plan:",t),yield this.showError("An error occurred while updating the plan.")}finally{this.loading=!1}})}onCancel(){this.router.navigate(["/plan"])}updatePlanFeatures(){return u(this,null,function*(){try{for(let t of this.featuresArray.value)t.id?yield this.planService.updatePlanFeature(t.id,{plan:parseInt(this.planId),featureName:t.featureName,isIncluded:t.isIncluded,order:t.order||0}):yield this.planService.createPlanFeature({plan:parseInt(this.planId),featureName:t.featureName,isIncluded:t.isIncluded,order:t.order||0})}catch(t){throw console.error("Error updating plan features:",t),t}})}addFeature(){let t=this.fb.group({id:[null],featureName:["",[s.required]],isIncluded:[!0],order:[this.featuresArray.length]});this.featuresArray.push(t)}removeFeature(t){let a=this.featuresArray.at(t).value;a.id&&this.planService.deletePlanFeature(a.id).catch(console.error),this.featuresArray.removeAt(t);for(let i=0;i<this.featuresArray.length;i++)this.featuresArray.at(i).patchValue({order:i})}showError(t){return u(this,null,function*(){yield S.default.fire("Failed!",t,"error")})}};m.\u0275fac=function(a){return new(a||m)(b(ne),b(U),b(V),b(le))},m.\u0275cmp=N({type:m,selectors:[["app-update-plan"]],standalone:!0,features:[D],decls:90,vars:14,consts:[["customStylesForm","ngForm"],["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup","validated"],["md","6",3,"cFormFloating"],["cFormControl","","id","planName","formControlName","planName","required","","type","text","placeholder","Plan Name"],["cLabel","","for","planName",1,"ms-2"],[3,"valid",4,"ngIf"],["cFormControl","","id","planDescription","formControlName","planDescription","required","","type","text","placeholder","Plan Description"],["cLabel","","for","planDescription",1,"ms-2"],["cFormControl","","id","planDuration","formControlName","planDuration","required","","type","number","min","1","step","1","placeholder","Duration in years (e.g., 1, 2, 5)"],["cLabel","","for","planDuration",1,"ms-2"],["cFormControl","","id","planPrice","formControlName","planPrice","required","","type","number","step","0.01","placeholder","Plan Price"],["cLabel","","for","planPrice",1,"ms-2"],[1,"d-flex","justify-content-between","align-items-center","mb-4"],["type","button","cButton","","color","success","size","sm",3,"click"],[1,"cil-plus"],["formArrayName","features",1,"mb-5"],["class","row g-3 mb-4 p-3 border rounded",3,"formGroupName",4,"ngFor","ngForOf"],["cButton","","color","primary","type","submit",1,"me-1",3,"disabled"],["cButton","","color","secondary",3,"click","disabled"],[3,"valid"],[1,"row","g-3","mb-4","p-3","border","rounded",3,"formGroupName"],["md","6"],["cFormControl","","formControlName","featureName","type","text","placeholder","Feature Name"],["md","4"],[1,"form-check"],["type","checkbox","formControlName","isIncluded",1,"form-check-input",3,"id"],[1,"form-check-label",3,"for"],["md","2"],["type","button","cButton","","color","danger","size","sm",3,"click"],[1,"cil-trash"]],template:function(a,i){if(a&1){let p=F();r(0,"c-row"),e(1,`
  `),r(2,"c-col",1),e(3,`
    `),r(4,"c-card",2),e(5,`
      `),r(6,"c-card-header"),e(7,`
        `),r(8,"strong"),e(9,"Update Plan"),n(),e(10,`
      `),n(),e(11,`
      `),r(12,"c-card-body"),e(13,`
        `),r(14,"form",3,0),y("ngSubmit",function(){return v(p),x(i.onSubmit())}),e(16,`
          `),r(17,"c-col",4),e(18,`
            `),c(19,"input",5),e(20,`
            `),r(21,"label",6),e(22,"Plan Name"),n(),e(23,`
            `),f(24,ce,2,1,"c-form-feedback",7),e(25,`
          `),n(),e(26,`

          `),r(27,"c-col",4),e(28,`
            `),c(29,"input",8),e(30,`
            `),r(31,"label",9),e(32,"Plan Description"),n(),e(33,`
            `),f(34,se,2,1,"c-form-feedback",7),e(35,`
          `),n(),e(36,`

          `),r(37,"c-col",4),e(38,`
            `),c(39,"input",10),e(40,`
            `),r(41,"label",11),e(42,"Plan Duration (Years)"),n(),e(43,`
            `),f(44,pe,2,1,"c-form-feedback",7),e(45,`
          `),n(),e(46,`

          `),r(47,"c-col",4),e(48,`
            `),c(49,"input",12),e(50,`
            `),r(51,"label",13),e(52,"Plan Price"),n(),e(53,`
            `),f(54,ue,2,1,"c-form-feedback",7),e(55,`
          `),n(),e(56,`

          `),e(57,`
          `),r(58,"c-col",1),e(59,`
            `),r(60,"div",14),e(61,`
              `),r(62,"h5"),e(63,"Plan Features"),n(),e(64,`
              `),r(65,"button",15),y("click",function(){return v(p),x(i.addFeature())}),e(66,`
                `),c(67,"i",16),e(68,` Add Feature
              `),n(),e(69,`
            `),n(),e(70,`
            
            `),r(71,"div",17),e(72,`
              `),f(73,he,28,6,"div",18),e(74,`
            `),n(),e(75,`
          `),n(),e(76,`

          `),r(77,"c-col",1),e(78,`
            `),r(79,"button",19),e(80),n(),e(81,`
            `),r(82,"button",20),y("click",function(){return v(p),x(i.onCancel())}),e(83,`
              Cancel
            `),n(),e(84,`
          `),n(),e(85,`
        `),n(),e(86,`
      `),n(),e(87,`
    `),n(),e(88,`
  `),n(),e(89,`
`),n()}a&2&&(d(14),l("formGroup",i.planForm)("validated",i.customStylesValidated),d(3),l("cFormFloating",!0),d(7),l("ngIf",i.f.planName.errors&&(i.f.planName.touched||i.submitted)),d(3),l("cFormFloating",!0),d(7),l("ngIf",i.f.planDescription.errors&&(i.f.planDescription.touched||i.submitted)),d(3),l("cFormFloating",!0),d(7),l("ngIf",i.f.planDuration.errors&&(i.f.planDuration.touched||i.submitted)),d(3),l("cFormFloating",!0),d(7),l("ngIf",i.f.planPrice.errors&&(i.f.planPrice.touched||i.submitted)),d(19),l("ngForOf",i.featuresArray.controls),d(6),l("disabled",i.loading),d(),w(`
              `,i.loading?"Updating...":"Update",`
            `),d(2),l("disabled",i.loading))},dependencies:[I,A,k,H,L,q,R,B,G,oe,Q,$,W,Y,J,K,re,ie,X,te,Z,ee,ae,j,M,O,z,T]});let o=m;return o})();export{Ne as UpdatePlanComponent};
