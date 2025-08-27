import{a as se}from"./chunk-LF5HJZNB.js";import{a as de}from"./chunk-DVM5LER3.js";import{Pa as Z,va as X}from"./chunk-LGTA4EWS.js";import"./chunk-T3N573N6.js";import"./chunk-ECX54NPK.js";import{$a as re,Ca as q,Da as J,Ea as K,M as R,N as G,Qa as Q,Ra as U,U as W,Ua as ee,V as j,Wa as te,Xa as ie,Za as ne,ab as ae,b as M,c as N,d as B,fa as H,h as O,ma as Y,nb as oe,ob as ce,qa as $,ra as z,w as A}from"./chunk-JU5RFLJC.js";import{Ab as l,Kb as t,Lb as i,Mb as P,Qb as u,Vb as _,Xb as d,db as c,eb as L,hc as e,ia as T,ic as v,jc as b,mc as I,nc as D,oc as V,qc as k,rc as F,sc as w,ta as x,ua as g,ub as p,va as C,wa as y,zb as S}from"./chunk-QLX3N2J3.js";import{f as me,k as f}from"./chunk-AAPNLDO3.js";var h=me(de());var pe=()=>["/events/add"],xe=o=>["/events/update",o],ge=o=>({active:o});function ve(o,s){o&1&&(t(0,"div",7)(1,"div",8)(2,"span",9),e(3,"Loading..."),i()()())}function _e(o,s){if(o&1){let a=u();t(0,"tr"),e(1,`
              `),t(2,"td"),e(3),i(),e(4,`
              `),t(5,"td"),e(6),i(),e(7,`
              `),t(8,"td"),e(9),i(),e(10,`
              `),t(11,"td"),e(12),i(),e(13,`
              `),t(14,"td"),e(15),i(),e(16,`
              `),t(17,"td"),e(18,`
                `),t(19,"span",16),e(20),i(),e(21,`
              `),i(),e(22,`
              `),t(23,"td"),e(24,`
                `),t(25,"a",17),e(26,`
                  `),C(),P(27,"svg",18),e(28,`
                `),i(),e(29,`
                `),y(),t(30,"a",19),_("click",function(){let r=x(a).$implicit,m=d(2);return g(m.deleteEvent(r.id))}),e(31,`
                  `),C(),P(32,"svg",20),e(33,`
                `),i(),e(34,`
              `),i(),e(35,`
            `),i()}if(o&2){let a=s.$implicit,n=s.index,r=d(2);c(3),v((r.currentPage-1)*r.itemsPerPage+n+1),c(3),v(a.EventTitle),c(3),v(a.EventDate),c(3),v(a.EventTime),c(3),v(a.EventVenue),c(4),l("ngClass",r.getStatusClass(a)),c(),b(`
                  `,r.getEventStatus(a),`
                `),c(5),l("routerLink",w(12,xe,a.id))("cTooltip",r.tooltipEditText),c(2),l("cIcon",r.icons.cilPen),c(3),l("cTooltip",r.tooltipDeleteText),c(2),l("cIcon",r.icons.cilTrash)}}function ue(o,s){o&1&&(t(0,"div"),e(1,`
                  No events found matching your search criteria.
                `),i())}function he(o,s){o&1&&(t(0,"div"),e(1,`
                  No events available.
                `),i())}function Ee(o,s){if(o&1&&(t(0,"tr"),e(1,`
              `),t(2,"td",21),e(3,`
                `),p(4,ue,2,0,"div",6),e(5,`
                `),p(6,he,2,0,"div",6),e(7,`
              `),i(),e(8,`
            `),i()),o&2){let a=d(2);c(4),l("ngIf",a.searchTerm.trim()),c(2),l("ngIf",!a.searchTerm.trim())}}function fe(o,s){if(o&1){let a=u();t(0,"c-page-item"),e(1,`
              `),t(2,"a",24),_("click",function(){let r=x(a).$implicit,m=d(3);return g(m.changePage(r))}),e(3),i(),e(4,`
            `),i()}if(o&2){let a=s.$implicit,n=d(3);c(2),l("ngClass",w(2,ge,n.currentPage===a)),c(),v(a)}}function Ce(o,s){if(o&1){let a=u();t(0,"c-pagination",22),e(1,`
            `),t(2,"c-page-item"),e(3,`
              `),t(4,"a",23),_("click",function(){x(a);let r=d(2);return g(r.previousPage())}),e(5,"Previous"),i(),e(6,`
            `),i(),e(7,`
            `),p(8,fe,5,4,"c-page-item",14),e(9,`
            `),t(10,"c-page-item"),e(11,`
              `),t(12,"a",23),_("click",function(){x(a);let r=d(2);return g(r.nextPage())}),e(13,"Next"),i(),e(14,`
            `),i(),e(15,`
          `),i()}if(o&2){let a=d(2);c(4),S("aria-disabled",a.currentPage===1),c(4),l("ngForOf",a.pageRange),c(4),S("aria-disabled",a.currentPage===a.totalPages)}}function Se(o,s){if(o&1){let a=u();t(0,"c-row"),e(1,`
    `),t(2,"c-col",0),e(3,`
      `),t(4,"c-card",1),e(5,`
        `),t(6,"c-card-body"),e(7,`
          `),t(8,"c-col",10),e(9,`
            `),t(10,"input",11),_("input",function(){x(a);let r=d();return g(r.search())}),V("ngModelChange",function(r){x(a);let m=d();return D(m.searchTerm,r)||(m.searchTerm=r),g(r)}),i(),e(11,`
          `),i(),e(12,`
          
          `),t(13,"table",12),e(14,`
            `),t(15,"thead"),e(16,`
            `),t(17,"tr"),e(18,`
              `),t(19,"th",13),e(20,"S.No"),i(),e(21,`
              `),t(22,"th",13),e(23,"Event Title"),i(),e(24,`
              `),t(25,"th",13),e(26,"Date"),i(),e(27,`
              `),t(28,"th",13),e(29,"Time"),i(),e(30,`
              `),t(31,"th",13),e(32,"Location"),i(),e(33,`
              `),t(34,"th",13),e(35,"Status"),i(),e(36,`
              `),t(37,"th",13),e(38,"Action"),i(),e(39,`  
            `),i(),e(40,`
            `),i(),e(41,`
            `),t(42,"tbody"),e(43,`
            `),p(44,_e,36,14,"tr",14),e(45,`
            `),p(46,Ee,9,2,"tr",6),e(47,`
            `),i(),e(48,`
          `),i(),e(49,`
          
          `),p(50,Ce,16,3,"c-pagination",15),e(51,`
        `),i(),e(52,`
      `),i(),e(53,`
    `),i(),e(54,`
`),i()}if(o&2){let a=d();c(10),I("ngModel",a.searchTerm),c(3),l("hover",!0)("striped",!0)("bordered",!0),c(31),l("ngForOf",a.paginatedEvents),c(2),l("ngIf",a.paginatedEvents.length===0),c(4),l("ngIf",a.filteredEvents.length>a.itemsPerPage)}}var je=(()=>{let s=class s{constructor(n){this.memberEventsService=n,this.icons={cilPen:X,cilTrash:Z},this.tooltipEditText="Edit",this.tooltipDeleteText="Delete",this.isLoading=!1,this.searchTerm="",this.events=[],this.filteredEvents=[],this.currentPage=1,this.itemsPerPage=10,this.totalPages=1}ngOnInit(){this.loadEvents()}loadEvents(){return f(this,null,function*(){try{this.isLoading=!0;let n=yield this.memberEventsService.listEvent();this.events=n.data.data||[],this.filteredEvents=[...this.events],this.calculatePagination()}catch(n){console.error("Error loading events:",n),yield h.default.fire({title:"Error!",text:"Failed to load events",icon:"error",confirmButtonText:"Ok"})}finally{this.isLoading=!1}})}search(){if(!this.searchTerm.trim())this.filteredEvents=[...this.events];else{let n=this.searchTerm.toLowerCase();this.filteredEvents=this.events.filter(r=>r.EventTitle?.toLowerCase().includes(n)||r.EventVenue?.toLowerCase().includes(n)||r.EventDate?.toLowerCase().includes(n)||r.EventTime?.toLowerCase().includes(n))}this.currentPage=1,this.calculatePagination()}calculatePagination(){this.totalPages=Math.ceil(this.filteredEvents.length/this.itemsPerPage)}get paginatedEvents(){let n=(this.currentPage-1)*this.itemsPerPage,r=n+this.itemsPerPage;return this.filteredEvents.slice(n,r)}get pageRange(){let n=[],r=Math.min(5,this.totalPages),m=Math.max(1,this.currentPage-Math.floor(r/2)),le=Math.min(this.totalPages,m+r-1);for(let E=m;E<=le;E++)n.push(E);return n}changePage(n){n>=1&&n<=this.totalPages&&(this.currentPage=n)}previousPage(){this.currentPage>1&&this.currentPage--}nextPage(){this.currentPage<this.totalPages&&this.currentPage++}deleteEvent(n){return f(this,null,function*(){if((yield h.default.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"})).isConfirmed)try{this.isLoading=!0,yield this.memberEventsService.deleteEvent(n.toString()),yield h.default.fire("Deleted!","Event has been deleted.","success"),this.loadEvents()}catch(m){console.error("Error deleting event:",m),yield h.default.fire({title:"Error!",text:"Failed to delete event",icon:"error",confirmButtonText:"Ok"})}finally{this.isLoading=!1}})}getEventStatus(n){return n.is_active?"Active":"Inactive"}getStatusClass(n){return n.is_active?"text-primary":"text-danger"}};s.\u0275fac=function(r){return new(r||s)(L(se))},s.\u0275cmp=T({type:s,selectors:[["app-list-events"]],standalone:!0,features:[k],decls:9,vars:4,consts:[["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3"],[1,"col-auto"],["cButton","","color","primary","role","button",3,"routerLink"],["class","text-center py-4",4,"ngIf"],[4,"ngIf"],[1,"text-center","py-4"],["role","status",1,"spinner-border"],[1,"visually-hidden"],["md","3",1,"mb-4","flex","justify-content-md-end"],["cFormControl","","id","validationCustom09","type","search","placeholder","Search events...",3,"input","ngModelChange","ngModel"],["cTable","",3,"hover","striped","bordered"],["scope","col"],[4,"ngFor","ngForOf"],["aria-label","Page navigation example",4,"ngIf"],[1,"badge",3,"ngClass"],["cButton","","color","btn-transparent","role","button","cTooltipPlacement","top",1,"btn-sm","text-primary","border-0","py-0",3,"routerLink","cTooltip"],["size","xl","title","Edit Icon",3,"cIcon"],["cButton","","color","btn-transparent","role","button","cTooltipPlacement","top",1,"btn-sm","text-danger","border-0","py-0",3,"click","cTooltip"],["width","25","title","Delete Icon",3,"cIcon"],["colspan","7",1,"text-center","py-4"],["aria-label","Page navigation example"],["cPageLink","",3,"click"],["cPageLink","",3,"click","ngClass"]],template:function(r,m){r&1&&(t(0,"c-col",0)(1,"c-card",1)(2,"c-card-body")(3,"form",2)(4,"div",3)(5,"a",4),e(6,"Create New Events"),i()()()()()(),p(7,ve,4,0,"div",5)(8,Se,55,7,"c-row",6)),r&2&&(c(5),l("routerLink",F(3,pe)),c(2),l("ngIf",m.isLoading),c(),l("ngIf",!m.isLoading))},dependencies:[M,O,N,B,U,R,A,z,$,W,j,ce,ae,ee,te,ie,oe,re,ne,H,Y,G,Q,K,J,q]});let o=s;return o})();export{je as ListEventsComponent};
