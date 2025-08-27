import{a as se}from"./chunk-F4L2PKW2.js";import{a as me}from"./chunk-DVM5LER3.js";import{Pa as Z,va as X}from"./chunk-LGTA4EWS.js";import"./chunk-T3N573N6.js";import"./chunk-ECX54NPK.js";import{$a as ae,Ca as q,Da as J,Ea as K,M as O,N as G,Qa as Q,Ra as U,U as W,Ua as ee,V as Y,Wa as te,Xa as ie,Za as ne,ab as re,b as N,c as V,d as B,fa as j,h as R,ma as $,nb as oe,ob as le,qa as z,ra as H,w as A}from"./chunk-JU5RFLJC.js";import{Ab as m,Kb as i,Lb as n,Mb as w,Qb as C,Vb as u,Xb as p,db as l,eb as b,hc as e,ia as T,ic as h,mc as k,nc as D,oc as F,qc as I,rc as M,sc as E,ta as P,ua as _,ub as f,va as S,wa as y,zb as v}from"./chunk-QLX3N2J3.js";import{f as ce,k as L}from"./chunk-AAPNLDO3.js";var g=ce(me());var de=()=>["/plan/add"],pe=s=>["/plan/update",s],ge=s=>({active:s});function ue(s,c){if(s&1){let r=C();i(0,"tr"),e(1,`
              `),i(2,"td"),e(3),n(),e(4,`
              `),i(5,"td"),e(6),n(),e(7,`
              `),i(8,"td"),e(9),n(),e(10,`
              `),i(11,"td"),e(12),n(),e(13,`
              `),i(14,"td"),e(15,`
                `),i(16,"a",11),e(17,`
                  `),S(),w(18,"svg",12),e(19,`
                `),n(),e(20,`
                `),y(),i(21,"a",13),u("click",function(){let a=P(r).$implicit,o=p();return _(o.deletePlan(a.id))}),e(22,`
                  `),S(),w(23,"svg",14),e(24,`
                `),n(),e(25,`
              `),n(),e(26,`
            `),n()}if(s&2){let r=c.$implicit,t=c.index,a=p();l(3),h((a.currentPage-1)*a.itemsPerPage+t+1),l(3),h(r.planName),l(3),h(r.planDuration),l(3),h(r.planPrice),l(4),m("routerLink",E(9,pe,r.id))("cTooltip",a.tooltipEditText),l(2),m("cIcon",a.icons.cilPen),l(3),m("cTooltip",a.tooltipDeleteText),l(2),m("cIcon",a.icons.cilTrash)}}function he(s,c){if(s&1){let r=C();i(0,"c-page-item"),e(1,`
            `),i(2,"a",17),u("click",function(){let a=P(r).$implicit,o=p(2);return _(o.changePage(a))}),e(3),n(),e(4,`
          `),n()}if(s&2){let r=c.$implicit,t=p(2);l(2),m("ngClass",E(2,ge,t.currentPage===r)),l(),h(r)}}function xe(s,c){if(s&1){let r=C();i(0,"c-pagination",15),e(1,`
          `),i(2,"c-page-item"),e(3,`
            `),i(4,"a",16),u("click",function(){P(r);let a=p();return _(a.previousPage())}),e(5,"Previous"),n(),e(6,`
          `),n(),e(7,`
          `),f(8,he,5,4,"c-page-item",9),e(9,`
          `),i(10,"c-page-item"),e(11,`
            `),i(12,"a",16),u("click",function(){P(r);let a=p();return _(a.nextPage())}),e(13,"Next"),n(),e(14,`
          `),n(),e(15,`
        `),n()}if(s&2){let r=p();l(4),v("aria-disabled",r.currentPage===1),l(4),m("ngForOf",r.pageRange),l(4),v("aria-disabled",r.currentPage===r.totalPages)}}var be=(()=>{let c=class c{constructor(t){this.planService=t,this.icons={cilPen:X,cilTrash:Z},this.tooltipEditText="Edit",this.tooltipDeleteText="Delete",this.planList=[],this.pageRange=[],this.currentPage=1,this.itemsPerPage=10,this.isLoading=!1,this.searchTerm=""}ngOnInit(){this.loadPlanList()}updatePageRange(){let t=this.totalPages,a=Math.max(1,this.currentPage-1);Math.min(t,a+2)===t&&(a=Math.max(1,t-2)),this.pageRange=Array.from({length:Math.min(3,t)},(d,x)=>a+x)}changePage(t){t>=1&&t<=this.totalPages&&!this.isLoading&&(this.currentPage=t,this.updatePageRange())}nextPage(){this.currentPage<this.totalPages&&!this.isLoading&&this.changePage(this.currentPage+1)}previousPage(){this.currentPage>1&&!this.isLoading&&this.changePage(this.currentPage-1)}loadPlanList(){return L(this,null,function*(){if(!this.isLoading){this.isLoading=!0;try{let t=yield this.planService.listPlan("0");t.data.code===1?(this.planList=t.data.data,this.updatePageRange()):yield g.default.fire("Error","Failed to load Plan list","error")}catch(t){console.error("Error loading Plan list:",t),yield g.default.fire("Error","An error occurred while loading the Plan list","error")}finally{this.isLoading=!1}}})}search(){this.currentPage=1,this.updatePageRange()}get paginatedPlanList(){let t=this.planList;if(this.searchTerm){let o=this.searchTerm.toLowerCase();t=this.planList.filter(d=>d.planName.toLowerCase().includes(o)||d.planDuration.toString().includes(o)||d.planPrice.toString().includes(o))}let a=(this.currentPage-1)*this.itemsPerPage;return t.slice(a,a+this.itemsPerPage)}get totalPages(){let t=this.searchTerm?this.planList.filter(a=>a.planName.toLowerCase().includes(this.searchTerm.toLowerCase())||a.planDuration.toString().includes(this.searchTerm.toLowerCase())||a.planPrice.toString().includes(this.searchTerm.toLowerCase())).length:this.planList.length;return Math.ceil(t/this.itemsPerPage)}deletePlan(t){return L(this,null,function*(){if(this.isLoading)return;if((yield g.default.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"})).isConfirmed){this.isLoading=!0;try{(yield this.planService.deletePlan(t.toString())).data.code===1?(this.planList=this.planList.filter(d=>d.id!==t),yield g.default.fire("Deleted!","Plan has been deleted.","success"),yield this.loadPlanList()):yield g.default.fire("Error","Failed to delete Plan","error")}catch(o){console.error("Error deleting Plan:",o),yield g.default.fire("Error","An error occurred while deleting the Plan","error")}finally{this.isLoading=!1}}})}};c.\u0275fac=function(a){return new(a||c)(b(se))},c.\u0275cmp=T({type:c,selectors:[["app-list-plan"]],standalone:!0,features:[I],decls:54,vars:8,consts:[["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3"],[1,"col-auto"],["cButton","","color","primary","role","button",3,"routerLink"],["md","3",1,"mb-4","flex","justify-content-md-end"],["cFormControl","","id","validationCustom09","type","search","placeholder","search",3,"input","ngModelChange","ngModel"],["cTable","",3,"hover","striped","bordered"],["scope","col"],[4,"ngFor","ngForOf"],["aria-label","Page navigation example",4,"ngIf"],["cButton","","color","btn-transparent","role","button","cTooltipPlacement","top",1,"btn-sm","text-primary","border-0","py-0",3,"routerLink","cTooltip"],["size","xl","title","List Icon",3,"cIcon"],["cButton","","color","btn-transparent","role","button","cTooltipPlacement","top",1,"btn-sm","text-danger","border-0","py-0",3,"click","cTooltip"],["width","25","title","List Icon",3,"cIcon"],["aria-label","Page navigation example"],["cPageLink","",3,"click"],["cPageLink","",3,"click","ngClass"]],template:function(a,o){a&1&&(i(0,"c-col",0)(1,"c-card",1)(2,"c-card-body")(3,"form",2)(4,"div",3)(5,"a",4),e(6,"Create New Plan"),n()()()()()(),i(7,"c-row"),e(8,`
  `),i(9,"c-col",0),e(10,`
    `),i(11,"c-card",1),e(12,`
      `),i(13,"c-card-body"),e(14,`
        `),i(15,"c-col",5),e(16,`
          `),i(17,"input",6),u("input",function(){return o.search()}),F("ngModelChange",function(x){return D(o.searchTerm,x)||(o.searchTerm=x),x}),n(),e(18,`
        `),n(),e(19,`
        `),i(20,"table",7),e(21,`
          `),i(22,"thead"),e(23,`
            `),i(24,"tr"),e(25,`
              `),i(26,"th",8),e(27,"S.No"),n(),e(28,`
              `),i(29,"th",8),e(30,"Plan Name"),n(),e(31,`
              `),i(32,"th",8),e(33,"Plan Duration (Years)"),n(),e(34,`
              `),i(35,"th",8),e(36,"Plan Price"),n(),e(37,`
              `),i(38,"th",8),e(39,"Action"),n(),e(40,`
            `),n(),e(41,`
          `),n(),e(42,`
          `),i(43,"tbody"),e(44,`
            `),f(45,ue,27,11,"tr",9),e(46,`
          `),n(),e(47,`
        `),n(),e(48,`
        `),f(49,xe,16,3,"c-pagination",10),e(50,`
      `),n(),e(51,`
    `),n(),e(52,`
  `),n(),e(53,`
`),n()),a&2&&(l(5),m("routerLink",M(7,de)),l(12),k("ngModel",o.searchTerm),l(3),m("hover",!0)("striped",!0)("bordered",!0),l(25),m("ngForOf",o.paginatedPlanList),l(4),m("ngIf",o.planList.length>o.itemsPerPage))},dependencies:[R,N,V,B,U,O,A,H,z,W,Y,le,re,ee,te,ie,oe,ae,ne,j,$,G,Q,K,J,q]});let s=c;return s})();export{be as ListPlanComponent};
