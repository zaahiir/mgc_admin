import{a as de}from"./chunk-DVM5LER3.js";import{va as te}from"./chunk-LGTA4EWS.js";import{a as p}from"./chunk-T3N573N6.js";import{a as ae,b as oe}from"./chunk-ECX54NPK.js";import{$a as se,Ca as Q,Da as X,Ea as Y,M as G,N as z,Qa as Z,Ra as ee,U as W,Ua as ie,V as q,Wa as ne,b as D,c as N,d as U,g as B,h as j,ma as H,nb as re,qa as J,ra as K,v as O}from"./chunk-JU5RFLJC.js";import{Ab as m,Kb as n,Lb as s,Mb as k,Qb as C,Vb as x,Xb as d,_ as w,db as l,eb as y,hc as e,ia as T,ic as M,jc as E,lc as I,mc as L,nc as R,oc as F,qc as V,sc as S,ta as h,ua as f,ub as u,uc as $,va as P,wc as A}from"./chunk-QLX3N2J3.js";import{f as me,k as _}from"./chunk-AAPNLDO3.js";var g=me(de());var le=(()=>{let c=class c{constructor(){this.apiUrl=new ae().getUrl(oe)}listMemberMessage(i="0"){let t=`${this.apiUrl}message/listing/${i}/`;return p.get(t)}processMemberMessage(i,t="0"){let o=`${this.apiUrl}message/processing/${t}/`;return p.post(o,i)}deleteMemberMessage(i){let t=`${this.apiUrl}message/deletion/${i}/`;return p.get(t)}markMessageAsRead(i){let t=`${this.apiUrl}message/mark_as_read/${i}/`;return p.post(t)}markMessageAsReplied(i){let t=`${this.apiUrl}message/mark_as_replied/${i}/`;return p.post(t)}markMessageAsClosed(i){let t=`${this.apiUrl}message/mark_as_closed/${i}/`;return p.post(t)}getNewMessages(){let i=`${this.apiUrl}message/new_messages/`;return p.get(i)}getMessageById(i){return _(this,null,function*(){try{let t=`${this.apiUrl}message/listing/${i}/`;console.log("Getting message by ID:",t);let o=yield p.get(t,{timeout:3e4});return console.log("Get message response:",o),o}catch(t){throw console.error("Error getting message by ID:",t),t}})}};c.\u0275fac=function(t){return new(t||c)},c.\u0275prov=w({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();var ue=a=>({"table-secondary":a}),ce=a=>({disabled:a}),xe=a=>({active:a});function _e(a,c){if(a&1){let r=C();n(0,"a",18),x("click",function(){h(r);let t=d().$implicit,o=d();return f(o.markMessageAsRead(t.id))}),e(1,`
                  `),P(),k(2,"svg",19),e(3,`
                `),s()}if(a&2){let r=d(2);l(2),m("cIcon",r.icons.cilPen)}}function he(a,c){if(a&1){let r=C();n(0,"a",20),x("click",function(){h(r);let t=d().$implicit,o=d();return f(o.markMessageAsReplied(t.id))}),e(1,`
                  `),P(),k(2,"svg",21),e(3,`
                `),s()}if(a&2){let r=d(2);l(2),m("cIcon",r.icons.cilPen)}}function fe(a,c){if(a&1){let r=C();n(0,"a",22),x("click",function(){h(r);let t=d().$implicit,o=d();return f(o.markMessageAsClosed(t.id))}),e(1,`
                  `),P(),k(2,"svg",23),e(3,`
                `),s()}if(a&2){let r=d(2);l(2),m("cIcon",r.icons.cilPen)}}function Me(a,c){if(a&1&&(n(0,"tr",13),e(1,`
              `),n(2,"td"),e(3),s(),e(4,`
              `),n(5,"td"),e(6),$(7,"date"),s(),e(8,`
              `),n(9,"td"),e(10),s(),e(11,`
              `),n(12,"td"),e(13),s(),e(14,`
              `),n(15,"td"),e(16),s(),e(17,`
              `),n(18,"td"),e(19),s(),e(20,`
              `),n(21,"td"),e(22,`
                `),n(23,"span",14),e(24),s(),e(25,`
              `),s(),e(26,`
              `),n(27,"td"),e(28,`
                `),e(29,`
                `),u(30,_e,4,1,"a",15),e(31,`

                `),e(32,`
                `),u(33,he,4,1,"a",16),e(34,`

                `),e(35,`
                `),u(36,fe,4,1,"a",17),e(37,`
              `),s(),e(38,`
            `),s()),a&2){let r=c.$implicit,i=c.index,t=d();m("ngClass",S(15,ue,t.isMessageClosed(r))),l(3),M((t.currentPage-1)*t.itemsPerPage+i+1),l(3),M(A(7,12,r.createdAt,"mediumDate")),l(4),M(r.name),l(3),M(r.email),l(3),M(r.phone||"N/A"),l(3),M(r.subject),l(4),m("ngClass",t.getStatusClass(r)),l(),E(`
                  `,t.getStatusText(r),`
                `),l(6),m("ngIf",t.isMessageNew(r)),l(3),m("ngIf",!t.isMessageReplied(r)&&!t.isMessageClosed(r)),l(3),m("ngIf",!t.isMessageClosed(r))}}function Ce(a,c){if(a&1&&(n(0,"tr"),e(1,`
              `),n(2,"td",24),e(3),s(),e(4,`
            `),s()),a&2){let r=d();l(3),E(`
                `,r.isLoading?"Loading...":"No messages found",`
              `)}}function be(a,c){if(a&1){let r=C();n(0,"c-page-item"),e(1,`
            `),n(2,"a",26),x("click",function(){let t=h(r).$implicit,o=d(2);return f(o.changePage(t))}),e(3),s(),e(4,`
          `),s()}if(a&2){let r=c.$implicit,i=d(2);l(2),m("ngClass",S(2,xe,i.currentPage===r)),l(),E(`
              `,r,`
            `)}}function Se(a,c){if(a&1){let r=C();n(0,"c-pagination",25),e(1,`
          `),n(2,"c-page-item"),e(3,`
            `),n(4,"a",26),x("click",function(){h(r);let t=d();return f(t.previousPage())}),e(5,`
              Previous
            `),s(),e(6,`
          `),s(),e(7,`
          `),u(8,be,5,4,"c-page-item",27),e(9,`
          `),n(10,"c-page-item"),e(11,`
            `),n(12,"a",26),x("click",function(){h(r);let t=d();return f(t.nextPage())}),e(13,`
              Next
            `),s(),e(14,`
          `),s(),e(15,`
        `),s()}if(a&2){let r=d();l(4),m("ngClass",S(3,ce,r.currentPage===1)),l(4),m("ngForOf",r.pageRange),l(4),m("ngClass",S(5,ce,r.currentPage===r.totalPages))}}var $e=(()=>{let c=class c{constructor(i,t){this.memberMessageService=i,this.router=t,this.icons={cilPen:te},this.tooltipViewText="View Message",this.tooltipMarkReadText="Mark as Read",this.tooltipMarkRepliedText="Mark as Replied",this.tooltipMarkClosedText="Mark as Closed",this.Math=Math,this.messageList=[],this.filteredList=[],this.pageRange=[],this.currentPage=1,this.itemsPerPage=10,this.isLoading=!1,this.searchTerm=""}ngOnInit(){this.loadMessageList()}loadMessageList(){return _(this,null,function*(){try{this.isLoading=!0;let i=yield this.memberMessageService.listMemberMessage("0");i.data.status==="success"?(this.messageList=i.data.data,this.filteredList=[...this.messageList],this.updatePageRange()):(console.error("Error loading messages:",i.data.message),g.default.fire({icon:"error",title:"Error",text:i.data.message||"Failed to load messages"}))}catch(i){console.error("Error loading messages:",i),g.default.fire({icon:"error",title:"Error",text:"Failed to load messages"})}finally{this.isLoading=!1}})}markMessageAsRead(i){return _(this,null,function*(){try{let t=yield this.memberMessageService.markMessageAsRead(i.toString());t.data.status==="success"?(g.default.fire({icon:"success",title:"Success",text:"Message marked as read"}),this.loadMessageList()):g.default.fire({icon:"error",title:"Error",text:t.data.message||"Failed to mark message as read"})}catch(t){console.error("Error marking message as read:",t),g.default.fire({icon:"error",title:"Error",text:"Failed to mark message as read"})}})}markMessageAsReplied(i){return _(this,null,function*(){try{let t=yield this.memberMessageService.markMessageAsReplied(i.toString());t.data.status==="success"?(g.default.fire({icon:"success",title:"Success",text:"Message marked as replied"}),this.loadMessageList()):g.default.fire({icon:"error",title:"Error",text:t.data.message||"Failed to mark message as replied"})}catch(t){console.error("Error marking message as replied:",t),g.default.fire({icon:"error",title:"Error",text:"Failed to mark message as replied"})}})}markMessageAsClosed(i){return _(this,null,function*(){try{let t=yield this.memberMessageService.markMessageAsClosed(i.toString());t.data.status==="success"?(g.default.fire({icon:"success",title:"Success",text:"Message marked as closed"}),this.loadMessageList()):g.default.fire({icon:"error",title:"Error",text:t.data.message||"Failed to mark message as closed"})}catch(t){console.error("Error marking message as closed:",t),g.default.fire({icon:"error",title:"Error",text:"Failed to mark message as closed"})}})}getStatusText(i){switch(i.status){case"new":return"New";case"read":return"Read";case"replied":return"Replied";case"closed":return"Closed";default:return"Unknown"}}getStatusClass(i){switch(i.status){case"new":return"bg-warning";case"read":return"bg-info";case"replied":return"bg-success";case"closed":return"bg-secondary";default:return"bg-light"}}isMessageNew(i){return i.status==="new"}isMessageRead(i){return i.status==="read"||i.status==="replied"||i.status==="closed"}isMessageReplied(i){return i.status==="replied"}isMessageClosed(i){return i.status==="closed"}filterList(){if(!this.searchTerm.trim())this.filteredList=[...this.messageList];else{let i=this.searchTerm.toLowerCase();this.filteredList=this.messageList.filter(t=>t.name.toLowerCase().includes(i)||t.email.toLowerCase().includes(i)||t.subject.toLowerCase().includes(i)||t.description.toLowerCase().includes(i)||t.phone.toLowerCase().includes(i))}this.currentPage=1,this.updatePageRange()}updatePageRange(){let i=this.totalPages,t=this.currentPage,o=2;this.pageRange=[];for(let b=Math.max(1,t-o);b<=Math.min(i,t+o);b++)this.pageRange.push(b)}changePage(i){i>=1&&i<=this.totalPages&&(this.currentPage=i)}nextPage(){this.currentPage<this.totalPages&&this.currentPage++}previousPage(){this.currentPage>1&&this.currentPage--}get paginatedMessageList(){let i=(this.currentPage-1)*this.itemsPerPage,t=i+this.itemsPerPage;return this.filteredList.slice(i,t)}get totalPages(){return Math.ceil(this.filteredList.length/this.itemsPerPage)}search(){this.filterList()}};c.\u0275fac=function(t){return new(t||c)(y(le),y(O))},c.\u0275cmp=T({type:c,selectors:[["app-member-message"]],standalone:!0,features:[V],decls:71,vars:10,consts:[["xs","12"],[1,"mb-4"],["md","3",1,"mb-4"],[1,"position-relative"],["cFormControl","","id","searchInput","type","search","placeholder","Search Messages","autocomplete","off",3,"ngModelChange","input","ngModel"],["cTable","",1,"align-middle",3,"hover","striped","bordered"],["scope","col",2,"width","70px"],["scope","col"],["scope","col",2,"width","200px"],[3,"ngClass",4,"ngFor","ngForOf"],[4,"ngIf"],["aria-label","Message navigation",4,"ngIf"],[1,"mt-3","text-muted"],[3,"ngClass"],[1,"badge",3,"ngClass"],["cButton","","color","btn-transparent","class","btn-sm border-0 py-0 me-2","cTooltip","Mark as Read","cTooltipPlacement","top","style","cursor: pointer;",3,"click",4,"ngIf"],["cButton","","color","btn-transparent","class","btn-sm border-0 py-0 me-2","cTooltip","Mark as Replied","cTooltipPlacement","top","style","cursor: pointer;",3,"click",4,"ngIf"],["cButton","","color","btn-transparent","class","btn-sm border-0 py-0 me-2","cTooltip","Mark as Closed","cTooltipPlacement","top","style","cursor: pointer;",3,"click",4,"ngIf"],["cButton","","color","btn-transparent","cTooltip","Mark as Read","cTooltipPlacement","top",1,"btn-sm","border-0","py-0","me-2",2,"cursor","pointer",3,"click"],["size","xl",1,"text-info",3,"cIcon"],["cButton","","color","btn-transparent","cTooltip","Mark as Replied","cTooltipPlacement","top",1,"btn-sm","border-0","py-0","me-2",2,"cursor","pointer",3,"click"],["size","xl",1,"text-success",3,"cIcon"],["cButton","","color","btn-transparent","cTooltip","Mark as Closed","cTooltipPlacement","top",1,"btn-sm","border-0","py-0","me-2",2,"cursor","pointer",3,"click"],["size","xl",1,"text-secondary",3,"cIcon"],["colspan","8",1,"text-center","py-4"],["aria-label","Message navigation"],["cPageLink","",3,"click","ngClass"],[4,"ngFor","ngForOf"]],template:function(t,o){t&1&&(n(0,"c-row"),e(1,`
  `),n(2,"c-col",0),e(3,`
    `),n(4,"c-card",1),e(5,`
      `),n(6,"c-card-body"),e(7,`
        `),e(8,`
        `),n(9,"c-col",2),e(10,`
          `),n(11,"div",3),e(12,`
            `),n(13,"input",4),F("ngModelChange",function(v){return R(o.searchTerm,v)||(o.searchTerm=v),v}),x("input",function(){return o.search()}),s(),e(14,`
          `),s(),e(15,`
        `),s(),e(16,`

        `),e(17,`
        `),n(18,"table",5),e(19,`
          `),n(20,"thead"),e(21,`
            `),n(22,"tr"),e(23,`
              `),n(24,"th",6),e(25,"S.No"),s(),e(26,`
              `),n(27,"th",7),e(28,"Date"),s(),e(29,`
              `),n(30,"th",7),e(31,"Name"),s(),e(32,`
              `),n(33,"th",7),e(34,"Email"),s(),e(35,`
              `),n(36,"th",7),e(37,"Phone"),s(),e(38,`
              `),n(39,"th",7),e(40,"Subject"),s(),e(41,`
              `),n(42,"th",7),e(43,"Status"),s(),e(44,`
              `),n(45,"th",8),e(46,"Actions"),s(),e(47,`
            `),s(),e(48,`
          `),s(),e(49,`
          `),n(50,"tbody"),e(51,`
            `),u(52,Me,39,17,"tr",9),e(53,`
            `),u(54,Ce,5,1,"tr",10),e(55,`
          `),s(),e(56,`
        `),s(),e(57,`

        `),e(58,`
        `),u(59,Se,16,7,"c-pagination",11),e(60,`

        `),e(61,`
        `),n(62,"div",12),e(63,`
          `),n(64,"small"),e(65),s(),e(66,`
        `),s(),e(67,`
      `),s(),e(68,`
    `),s(),e(69,`
  `),s(),e(70,`
`),s()),t&2&&(l(13),L("ngModel",o.searchTerm),l(5),m("hover",!0)("striped",!0)("bordered",!0),l(34),m("ngForOf",o.paginatedMessageList),l(2),m("ngIf",o.paginatedMessageList.length===0),l(5),m("ngIf",o.messageList.length>o.itemsPerPage),l(6),I(`
            Showing `,(o.currentPage-1)*o.itemsPerPage+1,` to 
            `,o.Math.min(o.currentPage*o.itemsPerPage,o.filteredList.length),` of 
            `,o.filteredList.length,` messages
          `))},dependencies:[j,D,N,U,B,ee,G,K,J,W,q,re,ie,ne,se,H,z,Z,Y,X,Q]});let a=c;return a})();export{$e as MemberMessageComponent};
