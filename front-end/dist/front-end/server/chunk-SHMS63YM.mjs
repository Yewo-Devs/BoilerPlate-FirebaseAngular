import './polyfills.server.mjs';
import{a as H}from"./chunk-TRCGT4ME.mjs";import{i as A}from"./chunk-4EQ3CSFW.mjs";import"./chunk-P5XOHON5.mjs";import"./chunk-D5MSRIRL.mjs";import"./chunk-ZTZUQXOY.mjs";import{a as V}from"./chunk-PMTGJU2L.mjs";import{a as N}from"./chunk-6ERRVSZZ.mjs";import{p as L}from"./chunk-RKHYJ25K.mjs";import{a as z}from"./chunk-D2P6BBTD.mjs";import"./chunk-PBUWRJ2U.mjs";import{n as Q,o as U,r as $,t as q}from"./chunk-4CMVCGMC.mjs";import{Bb as i,Cb as r,Db as l,Eb as O,Fb as I,Hb as w,Lb as k,Mb as u,Q as C,Ra as o,Sa as p,Sb as R,Tb as E,Ub as T,V as y,Wb as a,Xb as b,Yb as _,ab as S,cc as d,da as h,dc as v,ea as M,gb as g,gc as F,ic as j,kc as D,sb as s,wb as P}from"./chunk-JQ55PVVS.mjs";import"./chunk-S6KH3LOX.mjs";var f=class t{constructor(n){this.httpClient=n}getItems(n){return this.httpClient.get(N.apiUrl+"dashboard/get-items?ownerId="+n)}static \u0275fac=function(e){return new(e||t)(y(z))};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})};var Y=["menuq"],Z=()=>({label:"Edit",icon:"pi pi-pen-to-square"}),ee=()=>({label:"Move to folder",icon:"pi pi-folder"}),te=()=>({label:"Copy link",icon:"pi pi-link"}),ne=()=>({label:"Delete",icon:"pi pi-trash red"}),ie=(t,n,e,c)=>[t,n,e,c],re=t=>({label:"Actions",items:t}),oe=t=>[t];function ae(t,n){if(t&1&&(i(0,"label",26),a(1),r()),t&2){let e=u().$implicit;o(),b(e.label)}}function ce(t,n){if(t&1&&(i(0,"label"),a(1),r()),t&2){let e=u().$implicit;o(),b(e.label)}}function le(t,n){if(t&1&&(i(0,"a",23),l(1,"span"),g(2,ae,2,1,"label",24)(3,ce,2,1,"label",25),r()),t&2){let e=n.$implicit;o(),P(e.icon),o(),s("ngIf",e.label=="Delete"),o(),s("ngIf",e.label!="Delete")}}function me(t,n){if(t&1){let e=w();O(0),i(1,"div",14),l(2,"div",15),i(3,"div",16)(4,"div")(5,"h4",17),a(6),r(),i(7,"label",18),a(8),j(9,"date"),r()(),i(10,"button",19),k("click",function(m){let x=h(e),G=x.$implicit,J=x.index,K=u();return M(K.menu(G,m,J))}),l(11,"i",20),i(12,"p-menu",21,0),g(14,le,4,4,"ng-template",22),r()()()(),I()}if(t&2){let e=n.$implicit;o(6),_(" ",e.name," "),o(2),_(" Updated ",D(9,4,e.lastUpdated,"MMM dd, yyyy")," "),o(4),s("model",v(18,oe,v(16,re,F(11,ie,d(7,Z),d(8,ee),d(9,te),d(10,ne)))))("popup",!0)}}var B=class t{constructor(n,e,c,m){this.router=n;this.dashboardService=e;this.toastService=c;this.preferencesService=m}menus;items=[{name:"Test 1",lastUpdated:"2021-09-01T00:00:00"},{name:"Test 2",lastUpdated:"2021-09-01T00:00:00"}];ngOnInit(){this.dashboardService.getItems(this.preferencesService.getPreferences().user.id).subscribe(n=>{this.items=n},n=>{this.toastService.error("Something went wrong please try again")})}menu(n,e,c){this.menus.toArray()[c].toggle(e)}static \u0275fac=function(e){return new(e||t)(p(L),p(f),p(H),p(V))};static \u0275cmp=S({type:t,selectors:[["app-recents"]],viewQuery:function(e,c){if(e&1&&R(Y,5),e&2){let m;E(m=T())&&(c.menus=m)}},decls:25,vars:1,consts:[["menuq",""],[1,"bg-gray-50","dark:bg-neutral-900"],[1,"py-6"],[1,"px-4","mx-auto","sm:px-6","md:px-8"],[1,"max-w-md"],[1,"text-lg","font-bold","text-gray-900","dark:text-white","dark:text-white"],[1,"px-4","mx-auto","mt-8","sm:px-6","md:px-8"],[1,"mt-6","border-gray-200"],[1,"button-group","mt-6"],[1,"btn-outline","btn-action","inline-flex","items-center","justify-center","px-4","py-2","text-sm","font-semibold","leading-5","text-gray-600","transition-all","duration-200","bg-transparent","border","border-gray-300","rounded-md","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-gray-500","hover:bg-gray-50","hover:text-gray-900","dark:text-white"],[1,"pi","pi-plus-circle"],[1,"pi","pi-file-import"],[1,"dashboard-container"],[4,"ngFor","ngForOf"],[1,"offer-card"],[1,"banner","click"],[1,"info-container"],[1,"text","click"],[1,"text"],[1,"btn","btn-ellips",3,"click"],[1,"pi","pi-ellipsis-h","text"],[3,"model","popup"],["pTemplate","item"],["pRipple","",1,"kebab","flex","align-items-center","p-menuitem-link"],["class","red",4,"ngIf"],[4,"ngIf"],[1,"red"]],template:function(e,c){e&1&&(i(0,"main",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"h1",5),a(5," Recents "),r()()(),i(6,"div",6),l(7,"hr",7),i(8,"div",8)(9,"button",9),l(10,"i",10),i(11,"div")(12,"label"),a(13,"Craft a new item"),r(),i(14,"p"),a(15,"Lorem ipsum dolor sit amet."),r()()(),i(16,"button",9),l(17,"i",11),i(18,"div")(19,"label"),a(20,"Import an item"),r(),i(21,"p"),a(22,"Lorem ipsum dolor sit amet."),r()()()(),i(23,"article",12),g(24,me,15,20,"ng-container",13),r()()()()),e&2&&(o(24),s("ngForOf",c.items))},dependencies:[A,q,Q,U,$],styles:[".button-group[_ngcontent-%COMP%]{display:flex;gap:1rem}.btn-ellips[_ngcontent-%COMP%]{background:transparent;border-radius:.5rem;width:fit-content;height:fit-content;padding:.25rem .5rem;display:flex;align-items:center;justify-content:center}.btn-ellips[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%]{font-size:.75rem}.kebab[_ngcontent-%COMP%]{gap:.5rem}[_nghost-%COMP%]     .p-submenu-header{display:none}.info-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.btn-ellips[_ngcontent-%COMP%]:hover{background:var(--lightest-gray)}.btn-action[_ngcontent-%COMP%]{display:flex;gap:1rem;text-align:left;align-items:center;padding:1rem 1.5rem}.btn-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.25rem}.btn-action[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1.25rem;cursor:pointer}.btn-action[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300}.dashboard-container[_ngcontent-%COMP%]{display:grid;padding-bottom:1rem;gap:1rem;grid-template-columns:repeat(3,1fr)}.click[_ngcontent-%COMP%]{cursor:pointer}.red[_ngcontent-%COMP%]{color:red}.banner[_ngcontent-%COMP%]{height:200px;border-radius:.5rem;background:var(--pri-color)}.offer-card[_ngcontent-%COMP%]{display:grid;gap:.5rem}.offer-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.75rem;font-weight:300}@media (max-width: 768px){.button-group[_ngcontent-%COMP%]{display:grid;gap:1rem}.dashboard-container[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})};export{B as RecentsComponent};