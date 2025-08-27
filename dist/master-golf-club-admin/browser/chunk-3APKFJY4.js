import{a as vt}from"./chunk-AANX7V4S.js";import{a as Pt}from"./chunk-DVM5LER3.js";import{Pa as xt,va as pt}from"./chunk-LGTA4EWS.js";import"./chunk-T3N573N6.js";import"./chunk-ECX54NPK.js";import{$a as ft,Ca as rt,Da as ct,Ea as st,M as X,N as Z,Qa as lt,Ra as mt,U as tt,Ua as gt,V as et,Wa as dt,Xa as ht,Za as _t,ab as ut,b as U,c as Y,d as q,fa as it,h as J,ma as nt,nb as Ct,ob as yt,q as K,qa as ot,ra as at,w as Q}from"./chunk-JU5RFLJC.js";import{$a as V,Ab as m,Bb as S,Eb as B,Kb as a,Lb as r,Mb as C,Nb as I,Ob as b,Qb as L,Vb as _,Xb as x,Za as N,_a as D,db as s,eb as A,gc as y,hc as t,ia as k,ic as v,jc as R,mc as $,nc as H,oc as W,qc as j,rc as G,sc as T,ta as f,ua as u,ub as g,va as M,wa as F,xc as w,zb as P}from"./chunk-QLX3N2J3.js";import{f as wt,k as O}from"./chunk-AAPNLDO3.js";var E=wt(Pt());var St=()=>["/amenities/add"],It=n=>["/amenities/update",n],bt=n=>["amenity-icon-svg",n],Lt=n=>["amenity-icon-img",n],Tt=n=>["amenity-icon-placeholder",n];function Et(n,p){n&1&&(a(0,"div",15),t(1,`
          `),a(2,"div",16),t(3,`
            `),a(4,"span",17),t(5,"Loading..."),r(),t(6,`
          `),r(),t(7,`
        `),r())}function zt(n,p){if(n&1&&(I(0),t(1,`
                    `),a(2,"div",28),t(3,`
                    `),r(),t(4,`
                  `),b()),n&2){let i=p.ngIf,e=x().$implicit;s(2),m("innerHTML",i,D)("title",e.tooltip||e.amenityTooltip||e.title||e.amenityName)}}function Mt(n,p){if(n&1&&(I(0),t(1,`
                       `),M(),a(2,"svg",29),t(3,`
                         `),C(4,"path",30),t(5,`
                       `),r(),t(6,`
                     `),b()),n&2){let i=x(2).$implicit,e=x(2);s(2),m("ngClass",T(6,bt,e.getIconSizeClass(i)))("title",i.tooltip||i.amenityTooltip||i.title||i.amenityName),P("width",e.getIconWidth(i))("height",e.getIconHeight(i))("viewBox",e.getViewBox(i)),s(2),P("d",e.getIconPath(i))}}function Ot(n,p){if(n&1&&(t(0,`
                     `),g(1,Mt,7,8,"ng-container",23),t(2,`
                   `)),n&2){let i=x().$implicit,e=y(19),o=x(2);s(),m("ngIf",o.getIconPath(i))("ngIfElse",e)}}function At(n,p){if(n&1){let i=L();I(0),t(1,`
                       `),a(2,"img",31),_("error",function(o){f(i);let c=x(2).$implicit,l=x(2);return u(l.onImageError(o,c))}),r(),t(3,`
                     `),b()}if(n&2){let i=x(2).$implicit,e=x(2);s(2),S("width",e.getIconWidth(i),"px")("height",e.getIconHeight(i),"px"),m("src",i.icon||i.amenity_icon_url,V)("alt",i.title||i.amenityName)("title",i.tooltip||i.amenityTooltip||i.title||i.amenityName)("ngClass",T(8,Lt,e.getIconSizeClass(i)))}}function kt(n,p){if(n&1&&(t(0,`
                     `),g(1,At,4,10,"ng-container",23),t(2,`
                   `)),n&2){let i=x().$implicit,e=y(23);s(),m("ngIf",i.icon||i.amenity_icon_url)("ngIfElse",e)}}function Ft(n,p){if(n&1&&(I(0),t(1,`
                       `),C(2,"i",32),t(3,`
                     `),b()),n&2){let i=x(2).$implicit,e=x(2);s(2),B("fas amenity-icon-font "+(i.amenityIcon||i.icon_file)+" "+e.getIconSizeClass(i)),S("font-size",e.getIconSize(i)*.625,"px"),m("title",i.tooltip||i.amenityTooltip||i.title||i.amenityName)}}function Nt(n,p){if(n&1&&(t(0,`
                     `),g(1,Ft,4,5,"ng-container",23),t(2,`
                   `)),n&2){let i=x().$implicit,e=y(27);s(),m("ngIf",i.amenityIcon||i.icon_file)("ngIfElse",e)}}function Dt(n,p){if(n&1&&(t(0,`
                     `),a(1,"div",29),t(2,`
                       `),C(3,"i",33),t(4,`
                     `),r(),t(5,`
                   `)),n&2){let i=x().$implicit,e=x(2);s(),S("width",e.getIconWidth(i),"px")("height",e.getIconHeight(i),"px"),m("ngClass",T(8,Tt,e.getIconSizeClass(i)))("title",i.tooltip||i.amenityTooltip||i.title||i.amenityName),s(2),S("font-size",e.getIconSize(i)*.5,"px")}}function Vt(n,p){if(n&1){let i=L();a(0,"tr"),t(1,`
              `),a(2,"td"),t(3),r(),t(4,`
                             `),a(5,"td",15),t(6,`
                 `),t(7,`
                 `),a(8,"div",22),t(9,`
                  `),t(10,`
                  `),g(11,zt,5,2,"ng-container",23),t(12,`

                                     `),t(13,`
                   `),g(14,Ot,3,2,"ng-template",null,0,w),t(16,`

                                     `),t(17,`
                   `),g(18,kt,3,2,"ng-template",null,1,w),t(20,`

                   `),t(21,`
                   `),g(22,Nt,3,2,"ng-template",null,2,w),t(24,`

                   `),t(25,`
                   `),g(26,Dt,6,10,"ng-template",null,3,w),t(28,`
                `),r(),t(29,`
              `),r(),t(30,`
              `),a(31,"td"),t(32),r(),t(33,`
              `),a(34,"td"),t(35),r(),t(36,`
              `),a(37,"td"),t(38),r(),t(39,`
              `),a(40,"td"),t(41,`
                `),a(42,"a",24),t(43,`
                  `),M(),C(44,"svg",25),t(45,`
                `),r(),t(46,`
                `),F(),a(47,"a",26),_("click",function(){let o=f(i).$implicit,c=x(2);return u(c.deleteAmenity(o.id))}),t(48,`
                  `),M(),C(49,"svg",27),t(50,`
                `),r(),t(51,`
              `),r(),t(52,`
            `),r()}if(n&2){let i=p.$implicit,e=p.index,o=y(15),c=x(2);s(3),v((c.currentPage-1)*c.itemsPerPage+e+1),s(5),m("ngClass",c.getContainerSizeClass(i)),s(3),m("ngIf",c.getSafeIconSvg(i))("ngIfElse",o),s(21),v(i.title||i.amenityName),s(3),v(i.tooltip||i.amenityTooltip||i.title||i.amenityName),s(3),v(i.description||i.amenitiesDescription),s(4),m("routerLink",T(12,It,i.id))("cTooltip",c.tooltipEditText),s(2),m("cIcon",c.icons.cilPen),s(3),m("cTooltip",c.tooltipDeleteText),s(2),m("cIcon",c.icons.cilTrash)}}function Bt(n,p){if(n&1&&(a(0,"span"),t(1),r()),n&2){let i=x(3);s(),R('No amenities found matching "',i.searchTerm,'"')}}function Rt(n,p){n&1&&t(0,"No amenities available")}function $t(n,p){if(n&1&&(a(0,"tr"),t(1,`
              `),a(2,"td",34),t(3,`
                `),g(4,Bt,2,1,"span",23),t(5,`
                `),g(6,Rt,1,0,"ng-template",null,4,w),t(8,`
              `),r(),t(9,`
            `),r()),n&2){let i=y(7),e=x(2);s(4),m("ngIf",e.searchTerm)("ngIfElse",i)}}function Ht(n,p){if(n&1&&(a(0,"table",18),t(1,`
          `),a(2,"thead"),t(3,`
            `),a(4,"tr"),t(5,`
              `),a(6,"th",19),t(7,"S.No"),r(),t(8,`
              `),a(9,"th",19),t(10,"Icon"),r(),t(11,`
              `),a(12,"th",19),t(13,"Amenity Name"),r(),t(14,`
              `),a(15,"th",19),t(16,"Tooltip"),r(),t(17,`
              `),a(18,"th",19),t(19,"Description"),r(),t(20,`
              `),a(21,"th",19),t(22,"Action"),r(),t(23,`
            `),r(),t(24,`
          `),r(),t(25,`
          `),a(26,"tbody"),t(27,`
            `),g(28,Vt,53,14,"tr",20),t(29,`
            `),t(30,`
            `),g(31,$t,10,2,"tr",21),t(32,`
          `),r(),t(33,`
        `),r()),n&2){let i=x();m("hover",!0)("striped",!0)("bordered",!0),s(28),m("ngForOf",i.paginatedAmenityList),s(3),m("ngIf",i.paginatedAmenityList.length===0&&!i.isLoading)}}function Wt(n,p){if(n&1){let i=L();a(0,"c-page-item",39),t(1,`
            `),a(2,"a",37),_("click",function(){let o=f(i).$implicit,c=x(2);return u(c.changePage(o))}),t(3),r(),t(4,`
          `),r()}if(n&2){let i=p.$implicit,e=x(2);m("active",e.currentPage===i),s(3),v(i)}}function jt(n,p){if(n&1){let i=L();a(0,"c-pagination",35),t(1,`
          `),a(2,"c-page-item",36),t(3,`
            `),a(4,"a",37),_("click",function(){f(i);let o=x();return u(o.previousPage())}),t(5,"Previous"),r(),t(6,`
          `),r(),t(7,`
          `),g(8,Wt,5,2,"c-page-item",38),t(9,`
          `),a(10,"c-page-item",36),t(11,`
            `),a(12,"a",37),_("click",function(){f(i);let o=x();return u(o.nextPage())}),t(13,"Next"),r(),t(14,`
          `),r(),t(15,`
        `),r()}if(n&2){let i=x();s(2),m("disabled",i.currentPage===1),s(2),P("aria-disabled",i.currentPage===1),s(4),m("ngForOf",i.pageRange),s(2),m("disabled",i.currentPage===i.totalPages),s(2),P("aria-disabled",i.currentPage===i.totalPages)}}var re=(()=>{let p=class p{constructor(e,o){this.amenitiesService=e,this.sanitizer=o,this.icons={cilPen:pt,cilTrash:xt},this.tooltipEditText="Edit Amenity",this.tooltipDeleteText="Delete Amenity",this.amenityList=[],this.pageRange=[],this.currentPage=1,this.itemsPerPage=10,this.isLoading=!1,this.searchTerm=""}ngOnInit(){this.loadAmenityList()}updatePageRange(){let e=this.totalPages,o=Math.max(1,this.currentPage-1);Math.min(e,o+2)===e&&(o=Math.max(1,e-2)),this.pageRange=Array.from({length:Math.min(3,e)},(l,d)=>o+d)}changePage(e){e>=1&&e<=this.totalPages&&!this.isLoading&&(this.currentPage=e,this.updatePageRange())}nextPage(){this.currentPage<this.totalPages&&!this.isLoading&&this.changePage(this.currentPage+1)}previousPage(){this.currentPage>1&&!this.isLoading&&this.changePage(this.currentPage-1)}loadAmenityList(){return O(this,null,function*(){if(!this.isLoading){this.isLoading=!0;try{let e;try{e=yield this.amenitiesService.getAllAmenities()}catch{console.log("Using fallback listing endpoint"),e=yield this.amenitiesService.listAmenities("0")}if(e.data.code===1)this.amenityList=e.data.data,this.updatePageRange();else throw new Error(e.data.message||"Failed to load amenities")}catch(e){console.error("Error loading amenity list:",e),yield E.default.fire({title:"Error",text:"An error occurred while loading the amenity list",icon:"error",confirmButtonText:"Ok"})}finally{this.isLoading=!1}}})}search(){this.currentPage=1,this.updatePageRange()}clearSearch(){this.searchTerm="",this.search()}get paginatedAmenityList(){let e=this.amenityList;if(this.searchTerm){let c=this.searchTerm.toLowerCase();e=this.amenityList.filter(l=>{let d=l.title||l.amenityName||"",h=l.tooltip||l.amenityTooltip||"",z=l.description||l.amenitiesDescription||"";return d.toLowerCase().includes(c)||h.toLowerCase().includes(c)||z.toLowerCase().includes(c)})}let o=(this.currentPage-1)*this.itemsPerPage;return e.slice(o,o+this.itemsPerPage)}get totalPages(){let e=this.searchTerm?this.amenityList.filter(o=>{let c=o.title||o.amenityName||"",l=o.tooltip||o.amenityTooltip||"",d=o.description||o.amenitiesDescription||"",h=this.searchTerm.toLowerCase();return c.toLowerCase().includes(h)||l.toLowerCase().includes(h)||d.toLowerCase().includes(h)}).length:this.amenityList.length;return Math.ceil(e/this.itemsPerPage)}onImageError(e,o){e.target.style.display="none"}onSvgError(e,o){console.warn("SVG failed to load for amenity:",o.id),e.target.style.display="none"}getSafeIconSvg(e){let o=e.icon_svg||e.amenity_icon_svg;if(!o)return null;try{let c=this.sanitizer.sanitize(N.HTML,o);if(c){let l=c,d=this.getIconWidth(e),h=this.getIconHeight(e);!l.includes("width=")&&!l.includes("height=")&&(l=l.replace("<svg",`<svg width="${d}" height="${h}"`));let z=this.getIconSizeClass(e);return l.includes("class=")?l=l.replace('class="',`class="amenity-icon-svg ${z} `):l=l.replace("<svg",`<svg class="amenity-icon-svg ${z}"`),l.includes("viewBox=")||(l=l.replace("<svg",'<svg viewBox="0 0 24 24"')),this.sanitizer.bypassSecurityTrustHtml(l)}}catch(c){console.warn("Error sanitizing SVG for amenity:",e.id,c)}return null}getIconPath(e){return e.icon_path||e.amenity_icon_path||""}getViewBox(e){return e.viewbox||"0 0 448 512"}hasIcon(e){return!!(e.icon_svg||e.amenity_icon_svg||e.icon_path||e.amenity_icon_path||e.icon||e.amenity_icon_url||e.amenityIcon)}getIconSize(e){return e.icon_size||e.amenity_icon_size||e.icon_width||e.amenity_icon_width||32}getIconWidth(e){return e.icon_width||e.amenity_icon_width||this.getIconSize(e)}getIconHeight(e){return e.icon_height||e.amenity_icon_height||this.getIconSize(e)}getIconSizeClass(e){let o=this.getIconSize(e);return o<=16?"icon-size-xs":o<=24?"icon-size-sm":o<=32?"icon-size-md":o<=48?"icon-size-lg":o<=64?"icon-size-xl":"icon-size-xxl"}getContainerSizeClass(e){let o=this.getIconSize(e);return o<=16?"container-size-xs":o<=24?"container-size-sm":o<=32?"container-size-md":o<=48?"container-size-lg":o<=64?"container-size-xl":"container-size-xxl"}deleteAmenity(e){return O(this,null,function*(){if(this.isLoading)return;if((yield E.default.fire({title:"Are you sure?",text:"This action cannot be undone!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed){this.isLoading=!0;try{let c=yield this.amenitiesService.deleteAmenities(e.toString());if(c.data.code===1)yield E.default.fire({title:"Deleted!",text:"Amenity has been deleted successfully.",icon:"success",confirmButtonText:"Ok"}),yield this.loadAmenityList();else throw new Error(c.data.message||"Failed to delete amenity")}catch(c){console.error("Error deleting amenity:",c),yield E.default.fire({title:"Error",text:"An error occurred while deleting the amenity",icon:"error",confirmButtonText:"Ok"})}finally{this.isLoading=!1}}})}};p.\u0275fac=function(o){return new(o||p)(A(vt),A(K))},p.\u0275cmp=k({type:p,selectors:[["app-list-amenities"]],standalone:!0,features:[j],decls:33,vars:6,consts:[["tryPathSvg",""],["tryImageIcon",""],["tryFallbackIcon",""],["noIcon",""],["noData",""],["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3"],[1,"col-auto"],["cButton","","color","primary","role","button",3,"routerLink"],["md","3",1,"mb-4","flex","justify-content-md-end"],["cFormControl","","id","searchInput","type","search","placeholder","Search amenities...",3,"input","ngModelChange","ngModel"],["class","text-center",4,"ngIf"],["cTable","",3,"hover","striped","bordered",4,"ngIf"],["aria-label","Page navigation","class","mt-3",4,"ngIf"],[1,"text-center"],["role","status",1,"spinner-border"],[1,"visually-hidden"],["cTable","",3,"hover","striped","bordered"],["scope","col"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"amenity-icon-container",3,"ngClass"],[4,"ngIf","ngIfElse"],["cButton","","color","btn-transparent","role","button","cTooltipPlacement","top",1,"btn-sm","text-primary","border-0","py-0",3,"routerLink","cTooltip"],["size","xl","title","Edit",3,"cIcon"],["cButton","","color","btn-transparent","role","button","cTooltipPlacement","top",1,"btn-sm","text-danger","border-0","py-0",3,"click","cTooltip"],["width","25","title","Delete",3,"cIcon"],[1,"amenity-icon-svg",3,"innerHTML","title"],[3,"ngClass","title"],["fill","currentColor"],[3,"error","src","alt","title","ngClass"],[3,"title"],[1,"fas","fa-cube"],["colspan","6",1,"text-center"],["aria-label","Page navigation",1,"mt-3"],[3,"disabled"],["cPageLink","",3,"click"],[3,"active",4,"ngFor","ngForOf"],[3,"active"]],template:function(o,c){o&1&&(a(0,"c-col",5)(1,"c-card",6)(2,"c-card-body")(3,"form",7)(4,"div",8)(5,"a",9),t(6,"Create New Amenity"),r()()()()()(),a(7,"c-row"),t(8,`
  `),a(9,"c-col",5),t(10,`
    `),a(11,"c-card",6),t(12,`
      `),a(13,"c-card-body"),t(14,`
        `),t(15,`
        `),a(16,"c-col",10),t(17,`
          `),a(18,"input",11),_("input",function(){return c.search()}),W("ngModelChange",function(d){return H(c.searchTerm,d)||(c.searchTerm=d),d}),r(),t(19,`
        `),r(),t(20,`

        `),t(21,`
        `),g(22,Et,8,0,"div",12),t(23,`

        `),t(24,`
        `),g(25,Ht,34,5,"table",13),t(26,`

        `),t(27,`
        `),g(28,jt,16,5,"c-pagination",14),t(29,`
      `),r(),t(30,`
    `),r(),t(31,`
  `),r(),t(32,`
`),r()),o&2&&(s(5),m("routerLink",G(5,St)),s(13),$("ngModel",c.searchTerm),s(4),m("ngIf",c.isLoading),s(3),m("ngIf",!c.isLoading),s(3),m("ngIf",!c.isLoading&&c.amenityList.length>c.itemsPerPage))},dependencies:[J,U,Y,q,mt,X,Q,at,ot,tt,et,yt,ut,gt,dt,ht,Ct,ft,_t,it,nt,Z,lt,st,ct,rt],styles:[".amenity-icon-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:40px;height:40px;min-width:40px;min-height:40px;padding:4px;overflow:visible;position:relative}.container-size-xs[_ngcontent-%COMP%]{width:24px!important;height:24px!important;min-width:24px!important;min-height:24px!important;padding:2px!important}.container-size-sm[_ngcontent-%COMP%]{width:32px!important;height:32px!important;min-width:32px!important;min-height:32px!important;padding:3px!important}.container-size-md[_ngcontent-%COMP%]{width:40px!important;height:40px!important;min-width:40px!important;min-height:40px!important;padding:4px!important}.container-size-lg[_ngcontent-%COMP%]{width:56px!important;height:56px!important;min-width:56px!important;min-height:56px!important;padding:6px!important}.container-size-xl[_ngcontent-%COMP%]{width:72px!important;height:72px!important;min-width:72px!important;min-height:72px!important;padding:8px!important}.container-size-xxl[_ngcontent-%COMP%]{width:88px!important;height:88px!important;min-width:88px!important;min-height:88px!important;padding:10px!important}.amenity-icon-svg[_ngcontent-%COMP%]{width:32px!important;height:32px!important;min-width:32px;min-height:32px;max-width:32px;max-height:32px;display:block;flex-shrink:0;overflow:visible}.amenity-icon-svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;overflow:visible}.icon-size-xs[_ngcontent-%COMP%]{width:16px!important;height:16px!important;min-width:16px!important;min-height:16px!important;max-width:16px!important;max-height:16px!important}.icon-size-sm[_ngcontent-%COMP%]{width:24px!important;height:24px!important;min-width:24px!important;min-height:24px!important;max-width:24px!important;max-height:24px!important}.icon-size-md[_ngcontent-%COMP%]{width:32px!important;height:32px!important;min-width:32px!important;min-height:32px!important;max-width:32px!important;max-height:32px!important}.icon-size-lg[_ngcontent-%COMP%]{width:48px!important;height:48px!important;min-width:48px!important;min-height:48px!important;max-width:48px!important;max-height:48px!important}.icon-size-xl[_ngcontent-%COMP%]{width:64px!important;height:64px!important;min-width:64px!important;min-height:64px!important;max-width:64px!important;max-height:64px!important}.icon-size-xxl[_ngcontent-%COMP%]{width:80px!important;height:80px!important;min-width:80px!important;min-height:80px!important;max-width:80px!important;max-height:80px!important}.amenity-icon-img[_ngcontent-%COMP%]{width:32px;height:32px;min-width:32px;min-height:32px;max-width:32px;max-height:32px;object-fit:contain;display:block;flex-shrink:0;overflow:visible}.amenity-icon-font[_ngcontent-%COMP%]{font-size:20px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:visible}.amenity-icon-placeholder[_ngcontent-%COMP%]{width:32px;height:32px;display:flex;align-items:center;justify-content:center;background-color:#f8f9fa;border-radius:4px;flex-shrink:0;overflow:visible}.amenity-icon-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:16px;color:#6c757d}td[_ngcontent-%COMP%]:first-child + td[_ngcontent-%COMP%]{width:60px;min-width:60px;max-width:60px;text-align:center;vertical-align:middle;padding:8px 4px;overflow:visible;position:relative}table[_ngcontent-%COMP%]{table-layout:auto;overflow:visible}tr[_ngcontent-%COMP%]{overflow:visible}td[_ngcontent-%COMP%]{overflow:visible;position:relative}@media (max-width: 768px){.amenity-icon-container[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;min-height:36px}.amenity-icon-svg[_ngcontent-%COMP%], .amenity-icon-img[_ngcontent-%COMP%]{width:28px!important;height:28px!important;min-width:28px;min-height:28px;max-width:28px;max-height:28px}.amenity-icon-font[_ngcontent-%COMP%]{font-size:18px;width:28px;height:28px}.amenity-icon-placeholder[_ngcontent-%COMP%]{width:28px;height:28px}}.amenity-icon-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .amenity-icon-container[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%], .amenity-icon-container[_ngcontent-%COMP%] > img[_ngcontent-%COMP%], .amenity-icon-container[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{overflow:visible!important;position:relative;z-index:1}"]});let n=p;return n})();export{re as ListAmenitiesComponent};
