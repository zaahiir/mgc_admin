import{a as ae}from"./chunk-F4L2PKW2.js";import{a as le}from"./chunk-DVM5LER3.js";import"./chunk-T3N573N6.js";import"./chunk-ECX54NPK.js";import{N as T,Ta as H,U as q,Ua as Y,V,Va as p,Wa as $,X as G,Xa as J,ab as K,bb as Q,c as D,d as I,db as U,eb as W,fa as B,fb as X,ga as O,gb as Z,h as w,ia as R,kb as ee,lb as te,ma as j,mb as ne,na as M,nb as ie,ob as re,qa as L,ra as z,v as A}from"./chunk-JU5RFLJC.js";import{$b as F,Ab as l,Kb as t,Lb as n,Mb as d,Qb as N,Vb as x,Xb as h,db as m,eb as v,hc as e,ia as C,jc as P,qc as k,ta as S,ua as E,ub as u}from"./chunk-QLX3N2J3.js";import{a as g,b as _,f as oe,k as b}from"./chunk-AAPNLDO3.js";var y=oe(le());function me(o,c){o&1&&(t(0,"c-form-feedback",20),e(1,`
              Please provide a plan name
            `),n()),o&2&&l("valid",!1)}function ce(o,c){o&1&&(t(0,"c-form-feedback",20),e(1,`
              Please provide a description
            `),n()),o&2&&l("valid",!1)}function de(o,c){o&1&&(t(0,"c-form-feedback",20),e(1,`
              Please provide a valid duration in years
            `),n()),o&2&&l("valid",!1)}function se(o,c){o&1&&(t(0,"c-form-feedback",20),e(1,`
              Please provide a valid price
            `),n()),o&2&&l("valid",!1)}function pe(o,c){o&1&&(t(0,"c-form-feedback",20),e(1,`
                    Feature name is required
                  `),n()),o&2&&l("valid",!1)}function ue(o,c){if(o&1){let f=N();t(0,"div",21),e(1,`
                `),t(2,"c-col",22),e(3,`
                  `),d(4,"input",23),e(5,`
                  `),u(6,pe,2,1,"c-form-feedback",6),e(7,`
                `),n(),e(8,`
                `),t(9,"c-col",24),e(10,`
                  `),t(11,"div",25),e(12,`
                    `),d(13,"input",26),e(14,`
                    `),t(15,"label",27),e(16,`
                      Included in plan
                    `),n(),e(17,`
                  `),n(),e(18,`
                `),n(),e(19,`
                `),t(20,"c-col",28),e(21,`
                  `),t(22,"button",29),x("click",function(){let r=S(f).index,i=h();return E(i.removeFeature(r))}),e(23,`
                    `),d(24,"i",30),e(25,` Remove
                  `),n(),e(26,`
                `),n(),e(27,`
              `),n()}if(o&2){let f,a=c.$implicit,r=c.index,i=h();l("formGroupName",r),m(6),l("ngIf",((f=a.get("featureName"))==null?null:f.errors)&&(((f=a.get("featureName"))==null?null:f.touched)||i.submitted)),m(7),F("id","included",r,""),m(2),F("for","included",r,"")}}var Ee=(()=>{let c=class c{constructor(a,r,i){this.fb=a,this.planService=r,this.router=i,this.loading=!1,this.submitted=!1,this.initializeForm()}initializeForm(){this.planForm=this.fb.group({planName:["",[p.required]],planDescription:["",[p.required]],planDuration:["",[p.required,p.min(1)]],planPrice:["",[p.required,p.min(0)]],features:this.fb.array([])})}ngOnInit(){return b(this,null,function*(){})}get f(){return this.planForm.controls}get featuresArray(){return this.planForm.get("features")}onSubmit(){return b(this,null,function*(){if(this.submitted=!0,this.planForm.invalid){Object.keys(this.planForm.controls).forEach(a=>{let r=this.planForm.get(a);r?.invalid&&r.markAsTouched()});return}try{this.loading=!0;let a=_(g({},this.planForm.value),{planDuration:Number(this.planForm.value.planDuration),planPrice:Number(this.planForm.value.planPrice)}),r=yield this.planService.processPlan(a,"0");if(r.data?.code===1){let i=r.data?.data?.id;if(i){if(this.featuresArray.length>0)try{for(let s of this.featuresArray.value)yield this.planService.createPlanFeature({plan:parseInt(i),featureName:s.featureName,isIncluded:s.isIncluded,order:s.order||0})}catch(s){console.error("Error creating features:",s)}}else console.error("No plan ID received from response");yield y.default.fire({title:"Success!",text:"Plan has been created successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/plan"])}else throw new Error(r.data?.message||"Failed to create plan")}catch(a){yield this.showError(a instanceof Error?a.message:"Failed to create plan")}finally{this.loading=!1}})}onReset(){this.submitted=!1,this.planForm.reset(),this.featuresArray.clear(),Object.keys(this.planForm.controls).forEach(a=>{this.planForm.get(a)?.setErrors(null)})}addFeature(){let a=this.fb.group({featureName:["",[p.required]],isIncluded:[!0],order:[this.featuresArray.length]});this.featuresArray.push(a)}removeFeature(a){this.featuresArray.removeAt(a);for(let r=0;r<this.featuresArray.length;r++)this.featuresArray.at(r).patchValue({order:r})}showError(a){return b(this,null,function*(){yield y.default.fire("Error",a,"error")})}};c.\u0275fac=function(r){return new(r||c)(v(ne),v(ae),v(A))},c.\u0275cmp=C({type:c,selectors:[["app-create-plan"]],standalone:!0,features:[k],decls:94,vars:13,consts:[["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","planName","formControlName","planName","required","","type","text","placeholder","Plan Name"],["cLabel","","for","planName",1,"ms-2"],[3,"valid",4,"ngIf"],["cFormControl","","id","planDescription","formControlName","planDescription","required","","type","text","placeholder","Plan Description"],["cLabel","","for","planDescription",1,"ms-2"],["cFormControl","","id","planDuration","formControlName","planDuration","required","","type","number","min","1","step","1","placeholder","Duration in years (e.g., 1, 2, 5)"],["cLabel","","for","planDuration",1,"ms-2"],["cFormControl","","id","planPrice","formControlName","planPrice","required","","type","number","step","0.01","placeholder","Plan Price"],["cLabel","","for","planPrice",1,"ms-2"],[1,"d-flex","justify-content-between","align-items-center","mb-4"],["type","button","cButton","","color","success","size","sm",3,"click"],[1,"cil-plus"],["formArrayName","features",1,"mb-5"],["class","row g-3 mb-4 p-3 border rounded",3,"formGroupName",4,"ngFor","ngForOf"],["cButton","","color","primary","type","submit",1,"me-1",3,"disabled"],["cButton","","color","secondary","type","button",3,"click","disabled"],[3,"valid"],[1,"row","g-3","mb-4","p-3","border","rounded",3,"formGroupName"],["md","6"],["cFormControl","","formControlName","featureName","type","text","placeholder","Feature Name"],["md","4"],[1,"form-check"],["type","checkbox","formControlName","isIncluded",1,"form-check-input",3,"id"],[1,"form-check-label",3,"for"],["md","2"],["type","button","cButton","","color","danger","size","sm",3,"click"],[1,"cil-trash"]],template:function(r,i){r&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),t(4,"c-card",1),e(5,`
      `),t(6,"c-card-header"),e(7,`
        `),t(8,"strong"),e(9,"New Subscription Plan"),n(),e(10,`
      `),n(),e(11,`
      `),t(12,"c-card-body"),e(13,`
        `),t(14,"form",2),x("ngSubmit",function(){return i.onSubmit()}),e(15,`
          `),e(16,`
          `),t(17,"c-col",3),e(18,`
            `),d(19,"input",4),e(20,`
            `),t(21,"label",5),e(22,"Plan Name"),n(),e(23,`
            `),u(24,me,2,1,"c-form-feedback",6),e(25,`
          `),n(),e(26,`

          `),e(27,`
          `),t(28,"c-col",3),e(29,`
            `),d(30,"input",7),e(31,`
            `),t(32,"label",8),e(33,"Plan Description"),n(),e(34,`
            `),u(35,ce,2,1,"c-form-feedback",6),e(36,`
          `),n(),e(37,`

          `),e(38,`
          `),t(39,"c-col",3),e(40,`
            `),d(41,"input",9),e(42,`
            `),t(43,"label",10),e(44,"Plan Duration (Years)"),n(),e(45,`
            `),u(46,de,2,1,"c-form-feedback",6),e(47,`
          `),n(),e(48,`

          `),e(49,`
          `),t(50,"c-col",3),e(51,`
            `),d(52,"input",11),e(53,`
            `),t(54,"label",12),e(55,"Plan Price"),n(),e(56,`
            `),u(57,se,2,1,"c-form-feedback",6),e(58,`
          `),n(),e(59,`

          `),e(60,`
          `),t(61,"c-col",0),e(62,`
            `),t(63,"div",13),e(64,`
              `),t(65,"h5"),e(66,"Plan Features"),n(),e(67,`
              `),t(68,"button",14),x("click",function(){return i.addFeature()}),e(69,`
                `),d(70,"i",15),e(71,` Add Feature
              `),n(),e(72,`
            `),n(),e(73,`
            
            `),t(74,"div",16),e(75,`
              `),u(76,ue,28,6,"div",17),e(77,`
            `),n(),e(78,`
          `),n(),e(79,`

          `),e(80,`
          `),t(81,"c-col",0),e(82,`
            `),t(83,"button",18),e(84),n(),e(85,`
            `),t(86,"button",19),x("click",function(){return i.onReset()}),e(87,`
              Reset Form
            `),n(),e(88,`
          `),n(),e(89,`
        `),n(),e(90,`
      `),n(),e(91,`
    `),n(),e(92,`
  `),n(),e(93,`
`),n()),r&2&&(m(14),l("formGroup",i.planForm),m(3),l("cFormFloating",!0),m(7),l("ngIf",i.f.planName.errors&&(i.f.planName.touched||i.submitted)),m(4),l("cFormFloating",!0),m(7),l("ngIf",i.f.planDescription.errors&&(i.f.planDescription.touched||i.submitted)),m(4),l("cFormFloating",!0),m(7),l("ngIf",i.f.planDuration.errors&&(i.f.planDuration.touched||i.submitted)),m(4),l("cFormFloating",!0),m(7),l("ngIf",i.f.planPrice.errors&&(i.f.planPrice.touched||i.submitted)),m(19),l("ngForOf",i.featuresArray.controls),m(7),l("disabled",i.loading),m(),P(`
              `,i.loading?"Saving...":"Save Plan",`
            `),m(2),l("disabled",i.loading))},dependencies:[I,w,D,z,L,q,M,G,V,re,K,Y,Q,H,$,J,te,ee,U,Z,W,X,ie,B,R,j,O,T]});let o=c;return o})();export{Ee as CreatePlanComponent};
