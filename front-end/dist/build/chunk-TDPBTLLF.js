import{a as A}from"./chunk-VDYRJCPG.js";import{a as N}from"./chunk-NHCOVMH4.js";import"./chunk-C7BR53PB.js";import"./chunk-4KEACNFI.js";import"./chunk-652GZLPA.js";import"./chunk-TOKC4HOE.js";import{d as Q}from"./chunk-4TGDBMK4.js";import"./chunk-XHS7OS3V.js";import{a as L}from"./chunk-TPI4TS65.js";import{a as V}from"./chunk-TWQDPD4B.js";import{a as z}from"./chunk-MOHHWKAW.js";import"./chunk-U3QUSVWF.js";import{l as D,m as U,r as $,t as q}from"./chunk-XB25HVPP.js";import{$b as g,Ab as p,Bb as S,Cb as P,Eb as w,Ib as I,Jb as f,Oa as o,Pa as s,Pb as k,Q as h,Qb as E,Rb as F,Tb as a,Ub as _,V as v,Vb as b,Za as M,ac as x,da as C,db as u,dc as R,ea as y,ic as T,kc as j,pb as d,tb as O,yb as n,zb as r}from"./chunk-KK5ZIUJ6.js";import"./chunk-4CLCTAJ7.js";var B=(()=>{class e{constructor(t){this.httpClient=t}getItems(t){return this.httpClient.get(V.apiUrl+"dashboard/get-items?ownerId="+t)}static{this.\u0275fac=function(i){return new(i||e)(v(z))}}static{this.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var X=["menuq"],Y=()=>({label:"Edit",icon:"pi pi-pen-to-square"}),Z=()=>({label:"Move to folder",icon:"pi pi-folder"}),ee=()=>({label:"Copy link",icon:"pi pi-link"}),te=()=>({label:"Delete",icon:"pi pi-trash red"}),ne=(e,m,t,i)=>[e,m,t,i],ie=e=>({label:"Actions",items:e}),re=e=>[e];function oe(e,m){if(e&1&&(n(0,"label",26),a(1),r()),e&2){let t=f().$implicit;o(),_(t.label)}}function ae(e,m){if(e&1&&(n(0,"label"),a(1),r()),e&2){let t=f().$implicit;o(),_(t.label)}}function ce(e,m){if(e&1&&(n(0,"a",23),p(1,"span"),u(2,oe,2,1,"label",24)(3,ae,2,1,"label",25),r()),e&2){let t=m.$implicit;o(),O(t.icon),o(),d("ngIf",t.label=="Delete"),o(),d("ngIf",t.label!="Delete")}}function le(e,m){if(e&1){let t=w();S(0),n(1,"div",14),p(2,"div",15),n(3,"div",16)(4,"div")(5,"h4",17),a(6),r(),n(7,"label",18),a(8),T(9,"date"),r()(),n(10,"button",19),I("click",function(c){let l=C(t),H=l.$implicit,G=l.index,J=f();return y(J.menu(H,c,G))}),p(11,"i",20),n(12,"p-menu",21,0),u(14,ce,4,4,"ng-template",22),r()()()(),P()}if(e&2){let t=m.$implicit;o(6),b(" ",t.name," "),o(2),b(" Updated ",j(9,4,t.lastUpdated,"MMM dd, yyyy")," "),o(4),d("model",x(18,re,x(16,ie,R(11,ne,g(7,Y),g(8,Z),g(9,ee),g(10,te)))))("popup",!0)}}var be=(()=>{class e{constructor(t,i,c,l){this.router=t,this.dashboardService=i,this.toastService=c,this.preferencesService=l,this.items=[{name:"Test 1",lastUpdated:"2021-09-01T00:00:00"},{name:"Test 2",lastUpdated:"2021-09-01T00:00:00"}]}ngOnInit(){this.dashboardService.getItems(this.preferencesService.getPreferences().user.id).subscribe(t=>{this.items=t},t=>{this.toastService.error("Something went wrong please try again")})}menu(t,i,c){this.menus.toArray()[c].toggle(i)}static{this.\u0275fac=function(i){return new(i||e)(s(Q),s(B),s(A),s(L))}}static{this.\u0275cmp=M({type:e,selectors:[["app-recents"]],viewQuery:function(i,c){if(i&1&&k(X,5),i&2){let l;E(l=F())&&(c.menus=l)}},decls:25,vars:1,consts:[["menuq",""],[1,"bg-gray-50","dark:bg-neutral-900"],[1,"py-6"],[1,"px-4","mx-auto","sm:px-6","md:px-8"],[1,"max-w-md"],[1,"text-lg","font-bold","text-gray-900","dark:text-white","dark:text-white"],[1,"px-4","mx-auto","mt-8","sm:px-6","md:px-8"],[1,"mt-6","border-gray-200"],[1,"button-group","mt-6"],[1,"btn-outline","btn-action","inline-flex","items-center","justify-center","px-4","py-2","text-sm","font-semibold","leading-5","text-gray-600","transition-all","duration-200","bg-transparent","border","border-gray-300","rounded-md","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-gray-500","hover:bg-gray-50","hover:text-gray-900","dark:text-white"],[1,"pi","pi-plus-circle"],[1,"pi","pi-file-import"],[1,"dashboard-container"],[4,"ngFor","ngForOf"],[1,"offer-card"],[1,"banner","click"],[1,"info-container"],[1,"text","click"],[1,"text"],[1,"btn","btn-ellips",3,"click"],[1,"pi","pi-ellipsis-h","text"],[3,"model","popup"],["pTemplate","item"],["pRipple","",1,"kebab","flex","align-items-center","p-menuitem-link"],["class","red",4,"ngIf"],[4,"ngIf"],[1,"red"]],template:function(i,c){i&1&&(n(0,"main",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"h1",5),a(5," Recents "),r()()(),n(6,"div",6),p(7,"hr",7),n(8,"div",8)(9,"button",9),p(10,"i",10),n(11,"div")(12,"label"),a(13,"Craft a new item"),r(),n(14,"p"),a(15,"Lorem ipsum dolor sit amet."),r()()(),n(16,"button",9),p(17,"i",11),n(18,"div")(19,"label"),a(20,"Import an item"),r(),n(21,"p"),a(22,"Lorem ipsum dolor sit amet consectetur adipisicing."),r()()()(),n(23,"article",12),u(24,le,15,20,"ng-container",13),r()()()()),i&2&&(o(24),d("ngForOf",c.items))},dependencies:[N,q,D,U,$],styles:[".button-group[_ngcontent-%COMP%]{display:flex;gap:1rem}.btn-ellips[_ngcontent-%COMP%]{background:transparent;border-radius:.5rem;width:fit-content;height:fit-content;padding:.25rem .5rem;display:flex;align-items:center;justify-content:center}.btn-ellips[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%]{font-size:.75rem}.kebab[_ngcontent-%COMP%]{gap:.5rem}[_nghost-%COMP%]     .p-submenu-header{display:none}.info-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.btn-ellips[_ngcontent-%COMP%]:hover{background:var(--lightest-gray)}.btn-action[_ngcontent-%COMP%]{display:flex;gap:1rem;text-align:left;align-items:center;padding:1rem 1.5rem}.btn-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.25rem}.btn-action[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1.25rem;cursor:pointer}.btn-action[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300}.dashboard-container[_ngcontent-%COMP%]{display:grid;padding-bottom:1rem;gap:1rem;grid-template-columns:repeat(3,1fr)}.click[_ngcontent-%COMP%]{cursor:pointer}.red[_ngcontent-%COMP%]{color:red}.banner[_ngcontent-%COMP%]{height:200px;border-radius:.5rem;background:var(--pri-color)}.offer-card[_ngcontent-%COMP%]{display:grid;gap:.5rem}.offer-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.75rem;font-weight:300}@media (max-width: 768px){.button-group[_ngcontent-%COMP%]{display:grid;gap:1rem}.dashboard-container[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})}}return e})();export{be as RecentsComponent};
