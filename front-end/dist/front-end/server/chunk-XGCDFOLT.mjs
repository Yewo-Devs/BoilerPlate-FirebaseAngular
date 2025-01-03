import './polyfills.server.mjs';
import{i as j}from"./chunk-4EQ3CSFW.mjs";import{f as T}from"./chunk-2UEZCBOK.mjs";import{a as w}from"./chunk-PMTGJU2L.mjs";import{p as E,q as N}from"./chunk-RKHYJ25K.mjs";import{o as k}from"./chunk-4CMVCGMC.mjs";import{Bb as n,Cb as i,Db as u,Eb as C,Fb as S,Hb as g,Lb as x,Mb as p,Oa as y,Pb as h,Ra as r,Sa as _,Vb as I,Wb as l,ab as b,da as d,ea as m,fa as v,gb as c,sb as a}from"./chunk-JQ55PVVS.mjs";function U(e,o){e&1&&(n(0,"span",18),v(),n(1,"svg",19),u(2,"path",20),i()())}function V(e,o){e&1&&(n(0,"span",18),v(),n(1,"svg",19),u(2,"path",21),i()())}function D(e,o){if(e&1){let t=g();n(0,"div",15)(1,"button",16),x("click",function(){d(t);let f=p();return m(f.expanded=!f.expanded)}),c(2,U,3,0,"span",17)(3,V,3,0,"span",17),i()()}if(e&2){let t=p();r(2),a("ngIf",!t.expanded),r(),a("ngIf",t.expanded)}}function M(e,o){e&1&&(n(0,"span",18),u(1,"i",23),i())}function A(e,o){if(e&1&&(n(0,"span",18),u(1,"img",24),i()),e&2){let t=p(2);r(),h("src",t.profile.photoUrl,y)}}function z(e,o){if(e&1){let t=g();n(0,"div",15)(1,"button",22),x("click",function(){d(t);let f=p();return m(f.expanded=!f.expanded)}),c(2,M,2,0,"span",17)(3,A,2,1,"span",17),i()()}if(e&2){let t=p();r(2),a("ngIf",!t.profile.photoUrl),r(),a("ngIf",t.profile.photoUrl)}}function B(e,o){e&1&&(n(0,"a",25),l(1," Dashboard "),i())}function R(e,o){e&1&&(n(0,"div",26)(1,"a",27),l(2," Login "),i(),n(3,"a",28),l(4," Sign Up "),i()())}function F(e,o){e&1&&(n(0,"span",18),u(1,"i",23),i())}function G(e,o){if(e&1&&(n(0,"span",18),u(1,"img",31),i()),e&2){let t=p(2);r(),h("src",t.profile.photoUrl,y)}}function O(e,o){if(e&1){let t=g();n(0,"div",26)(1,"button",29),x("click",function(f){d(t);let P=I(5);return m(P.toggle(f))}),c(2,F,2,0,"span",17)(3,G,2,1,"span",17),i(),u(4,"p-menu",30,0),i()}if(e&2){let t=p();r(2),a("ngIf",!t.profile.photoUrl),r(),a("ngIf",t.profile.photoUrl),r(),a("model",t.menuItems)("popup",!0)}}function q(e,o){e&1&&(n(0,"a",43),l(1," Admin Portal "),i())}function H(e,o){if(e&1&&(C(0),c(1,q,2,0,"a",42),S()),e&2){let t=p(2);r(),a("ngIf",t.user.role=="Admin")}}function J(e,o){e&1&&(n(0,"a",25),l(1," Dashboard "),i())}function K(e,o){if(e&1){let t=g();n(0,"a",44),x("click",function(){d(t);let f=p(2);return m(f.logout())}),l(1," Logout "),i()}}function Q(e,o){e&1&&(n(0,"a",27),l(1," Login "),i())}function W(e,o){e&1&&(n(0,"a",28),l(1," Sign Up "),i())}function X(e,o){if(e&1&&(n(0,"nav",32)(1,"div",33)(2,"div",34),c(3,H,2,1,"ng-container",35)(4,J,2,0,"a",9),n(5,"a",36),l(6," Features "),i(),n(7,"a",37),l(8," Pricing "),i(),n(9,"a",38),l(10," Support "),i(),c(11,K,2,0,"a",39)(12,Q,2,0,"a",40)(13,W,2,0,"a",41),i()()()),e&2){let t=p();r(3),a("ngIf",t.user),r(),a("ngIf",t.profile),r(7),a("ngIf",t.profile),r(),a("ngIf",!t.profile),r(),a("ngIf",!t.profile)}}var L=class e{constructor(o,t,s){this.router=t;this.accountService=s;if(this.profile=o.getPreferences().profile,this.user=o.getPreferences().user,!!o.getPreferences().user&&o.getPreferences().user.role=="Admin"){let f={label:"Admin Portal",icon:"pi pi-user",command:()=>{this.router.navigateByUrl("/admin-portal")}};this.menuItems[0].items=[f,...this.menuItems[0].items]}}expanded=!1;profile;user;menuItems=[{items:[{label:"Profile",icon:"pi pi-user",command:()=>{this.router.navigateByUrl("/dashboard/profile")}},{label:"Team",icon:"pi pi-users",command:()=>{this.router.navigateByUrl("/dashboard/team")}},{label:"Billing",icon:"pi pi-money-bill",command:()=>{this.router.navigateByUrl("/dashboard/billing")}},{label:"Logout",icon:"pi pi-sign-out",command:()=>{this.logout()}}]}];logout(){this.accountService.logout()}static \u0275fac=function(t){return new(t||e)(_(w),_(E),_(T))};static \u0275cmp=b({type:e,selectors:[["app-nav"]],standalone:!1,decls:19,vars:6,consts:[["op",""],["x-data","{expanded: false}",1,"relative","z-10","py-4","md:py-6"],[1,"container","px-4","mx-auto","sm:px-6","lg:px-8"],[1,"relative","flex","items-center","justify-between"],[1,"flex-shrink-0"],["routerLink","/","title","",1,"flex","rounded","outline-none","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["loading","lazy","src","../../../../assets/images/yourlogo.svg","alt","",1,"w-auto","h-8"],["class","flex md:hidden",4,"ngIf"],[1,"hidden","md:flex","md:items-center","md:justify-center","md:space-x-10","md:absolute","md:inset-y-0","md:left-1/2","md:-translate-x-1/2","lg:space-x-16"],["routerLink","/dashboard","class","text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",4,"ngIf"],["routerLink","/","fragment","features",1,"text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","focus:outline-none","font-pj","hover:text-opacity-50","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["routerLink","/pricing","title","",1,"text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","focus:outline-none","font-pj","hover:text-opacity-50","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["routerLink","/support","title","",1,"text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","focus:outline-none","font-pj","hover:text-opacity-50","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["class","hidden md:flex items-center gap-10",4,"ngIf"],["x-collapse","",4,"ngIf"],[1,"flex","md:hidden"],["type","button",1,"text-gray-900",3,"click"],["aria-hidden","true",4,"ngIf"],["aria-hidden","true"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"w-7","h-7"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","1.5","d","M4 6h16M4 12h16M4 18h16"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18L18 6M6 6l12 12"],["type","button",1,"bg-gray-200","text-gray-600","w-10","h-10","rounded-md",3,"click"],[1,"pi","pi-user"],["loading","lazy",1,"rounded-md",3,"src"],["routerLink","/dashboard",1,"text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","focus:outline-none","font-pj","hover:text-opacity-50","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],[1,"hidden","md:flex","items-center","gap-10"],["routerLink","/sign-in",1,"text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","focus:outline-none","font-pj","hover:text-opacity-50","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["routerLink","/sign-up","role","button",1,"inline-flex","items-center","justify-center","px-6","py-3","text-base","font-bold","leading-7","text-white","transition-all","duration-200","bg-gray-900","border","border-transparent","rounded","hover:bg-gray-600","font-pj","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-gray-900"],["type","button",1,"bg-gray-200","text-gray-600","w-10","h-10","rounded-full",3,"click"],[3,"model","popup"],["loading","lazy",1,"rounded-full",3,"src"],["x-collapse",""],[1,"px-1","py-8"],[1,"grid","gap-y-7"],[4,"ngIf"],["routerLink","/","fragment","features",1,"flex","items-center","p-3","-m-3","text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","hover:bg-gray-50","focus:outline-none","font-pj","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["routerLink","/pricing","title","",1,"flex","items-center","p-3","-m-3","text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","hover:bg-gray-50","focus:outline-none","font-pj","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["routerLink","/support","title","",1,"flex","items-center","p-3","-m-3","text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","hover:bg-gray-50","focus:outline-none","font-pj","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["class","text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",3,"click",4,"ngIf"],["routerLink","/sign-in","class","text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",4,"ngIf"],["routerLink","/sign-up","class","inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900","role","button",4,"ngIf"],["routerLink","/admin-portal","class","text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",4,"ngIf"],["routerLink","/admin-portal",1,"text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","focus:outline-none","font-pj","hover:text-opacity-50","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],[1,"text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","focus:outline-none","font-pj","hover:text-opacity-50","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2",3,"click"]],template:function(t,s){t&1&&(n(0,"header",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"a",5),u(5,"img",6),i()(),c(6,D,4,2,"div",7)(7,z,4,2,"div",7),n(8,"div",8),c(9,B,2,0,"a",9),n(10,"a",10),l(11," Features "),i(),n(12,"a",11),l(13," Pricing "),i(),n(14,"a",12),l(15," Support "),i()(),c(16,R,5,0,"div",13)(17,O,6,4,"div",13),i(),c(18,X,14,5,"nav",14),i()()),t&2&&(r(6),a("ngIf",!s.profile),r(),a("ngIf",s.profile),r(2),a("ngIf",s.profile),r(7),a("ngIf",!s.profile),r(),a("ngIf",s.profile),r(),a("ngIf",s.expanded))},dependencies:[k,N,j],styles:["[_nghost-%COMP%]     .p-menu-submenu-label{display:none}"]})};export{L as a};
