import{i as w}from"./chunk-I22SW7EJ.js";import{c as O,e as R,f as q,j as G,r as H}from"./chunk-FRW3667Z.js";import{f as K}from"./chunk-MWKCO5LE.js";import{j as A,k as B,o as Y}from"./chunk-ETXXSDLS.js";import{a as J}from"./chunk-JCVGH3QK.js";import{k as z,m as T,r as S}from"./chunk-GHBBNMAF.js";import{Cb as i,Db as o,Eb as u,Fb as I,Gb as k,Ib as h,Mb as C,Nb as c,Pa as M,Qb as f,Sa as n,Ta as g,V as m,Wb as D,Xb as s,Zb as v,_b as F,bb as b,cb as x,fc as P,ha as _,hb as d,ia as y,ja as j,tb as r,vb as L}from"./chunk-A6EP6ZMT.js";var Q=(e,a)=>({"pl-12":e,"pl-4":a});function X(e,a){if(e&1&&(i(0,"div",5),u(1,"i",6),o()),e&2){let t=c();n(),f("ngClass",t.icon)}}function Z(e,a){if(e&1&&u(0,"input",7),e&2){let t=c();L("is-invalid",t.ngControl.touched&&t.ngControl.invalid&&t.invalidFeedback),f("type",t.type),f("placeholder",t.placeholder),r("ngClass",P(6,Q,t.icon,!t.icon))("formControl",t.ngControl.control)}}function $(e,a){if(e&1&&u(0,"input",8),e&2){let t=c();L("is-invalid",t.ngControl.touched&&t.ngControl.invalid&&t.invalidFeedback),f("type",t.type),f("placeholder",t.placeholder),r("ngClass",P(6,Q,t.icon,!t.icon))("formControl",t.ngControl.control)}}function ee(e,a){if(e&1&&(i(0,"div",10),s(1),o()),e&2){let t=c(2);n(),v(" Please enter your ",t.label," ")}}function te(e,a){if(e&1&&(i(0,"div",10),s(1),o()),e&2){let t=c(2);n(),v(" Please enter a valid ",t.label," address ")}}function ne(e,a){if(e&1&&(i(0,"div",10),s(1),o()),e&2){let t=c(2);n(),F(" Your ",t.label," must be at least ",t.ngControl.control.errors.minlength.requiredLength," characters ")}}function ie(e,a){if(e&1&&(i(0,"div",10),s(1),o()),e&2){let t=c(2);n(),F(" Your ",t.label," must be at most ",t.ngControl.control.errors.maxlength.requiredLength," characters ")}}function oe(e,a){if(e&1&&(i(0,"div",10),s(1),o()),e&2){let t=c(2);n(),v(" Your ",t.label,"s dont match ")}}function re(e,a){if(e&1&&(i(0,"div",10),s(1),o()),e&2){let t=c(2);n(),v(" You cannot have numbers or special characters in your ",t.label," ")}}function ae(e,a){if(e&1&&(i(0,"div",10),s(1),o()),e&2){let t=c(2);n(),v(" You can on have numbers in ",t.label," ")}}function le(e,a){e&1&&(i(0,"div",10),s(1," You have to pick a time with in operating hours "),o())}function se(e,a){if(e&1&&(I(0),d(1,ee,2,1,"div",9)(2,te,2,1,"div",9)(3,ne,2,2,"div",9)(4,ie,2,2,"div",9)(5,oe,2,1,"div",9)(6,re,2,1,"div",9)(7,ae,2,1,"div",9)(8,le,2,0,"div",9),k()),e&2){let t=c();n(),r("ngIf",t.ngControl.control.errors==null?null:t.ngControl.control.errors.required),n(),r("ngIf",t.ngControl.control.errors==null?null:t.ngControl.control.errors.email),n(),r("ngIf",t.ngControl.control.errors==null?null:t.ngControl.control.errors.minlength),n(),r("ngIf",t.ngControl.control.errors==null?null:t.ngControl.control.errors.maxlength),n(),r("ngIf",t.ngControl.control.errors==null?null:t.ngControl.control.errors.isMatching),n(),r("ngIf",t.ngControl.control.errors==null?null:t.ngControl.control.errors.hasNumbers),n(),r("ngIf",t.ngControl.control.errors==null?null:t.ngControl.control.errors.hasLetters),n(),r("ngIf",t.ngControl.control.errors==null?null:t.ngControl.control.errors.isInRange)}}var Ee=(()=>{class e{constructor(t){this.ngControl=t,this.type="text",this.placeholder="",this.invalidFeedback=!0,this.icon="",this.thick=!1,this.ngControl.valueAccessor=this}writeValue(t){}registerOnChange(t){}registerOnTouched(t){}static{this.\u0275fac=function(p){return new(p||e)(g(R))}}static{this.\u0275cmp=b({type:e,selectors:[["app-text-input"]],inputs:{label:"label",type:"type",placeholder:"placeholder",invalidFeedback:"invalidFeedback",icon:"icon",thick:"thick"},standalone:!1,decls:5,vars:4,consts:[[1,"relative"],["class","absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none",4,"ngIf"],["class","block w-full py-4 pl-12 pr-4 overflow-hidden text-base font-normal text-gray-900 placeholder-gray-600 transition-all duration-200 border border-gray-300 caret-gray-900 rounded-xl bg-white focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-gray-900 font-pj",3,"ngClass","is-invalid","type","formControl","placeholder",4,"ngIf"],["class","block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900 sm:text-sm caret-gray-900",3,"ngClass","is-invalid","type","formControl","placeholder",4,"ngIf"],[4,"ngIf"],[1,"absolute","inset-y-0","left-0","flex","items-center","pl-4","pointer-events-none"],[1,"text-gray-400",3,"ngClass"],[1,"block","w-full","py-4","pl-12","pr-4","overflow-hidden","text-base","font-normal","text-gray-900","placeholder-gray-600","transition-all","duration-200","border","border-gray-300","caret-gray-900","rounded-xl","bg-white","focus:outline-none","focus:bg-white","focus:border-gray-900","focus:ring-gray-900","font-pj",3,"ngClass","type","formControl","placeholder"],[1,"block","w-full","px-4","py-3","placeholder-gray-500","border","-gray-300","rounded-lg","focus:ring-gray-900","focus:border-gray-900","sm:text-sm","caret-gray-900",3,"ngClass","type","formControl","placeholder"],["class","invalid-feedback",4,"ngIf"],[1,"invalid-feedback"]],template:function(p,l){p&1&&(i(0,"div",0),d(1,X,2,1,"div",1)(2,Z,1,9,"input",2)(3,$,1,9,"input",3),o(),d(4,se,9,8,"ng-container",4)),p&2&&(n(),r("ngIf",l.icon),n(),r("ngIf",l.thick),n(),r("ngIf",!l.thick),n(),r("ngIf",l.ngControl.touched&&l.ngControl.invalid&&l.invalidFeedback))},dependencies:[z,T,O,q,G],styles:[".is-invalid[_ngcontent-%COMP%]{border:1px solid red}.invalid-feedback[_ngcontent-%COMP%]{color:red;font-weight:700;font-size:.75rem;margin-top:.5rem;margin-left:.5rem}"]})}}return e})();function ce(e,a){e&1&&(i(0,"span",18),j(),i(1,"svg",19),u(2,"path",20),o()())}function pe(e,a){e&1&&(i(0,"span",18),j(),i(1,"svg",19),u(2,"path",21),o()())}function de(e,a){if(e&1){let t=h();i(0,"div",15)(1,"button",16),C("click",function(){_(t);let l=c();return y(l.expanded=!l.expanded)}),d(2,ce,3,0,"span",17)(3,pe,3,0,"span",17),o()()}if(e&2){let t=c();n(2),r("ngIf",!t.expanded),n(),r("ngIf",t.expanded)}}function ue(e,a){e&1&&(i(0,"span",18),u(1,"i",23),o())}function fe(e,a){if(e&1&&(i(0,"span",18),u(1,"img",24),o()),e&2){let t=c(2);n(),f("src",t.profile.photoUrl,M)}}function me(e,a){if(e&1){let t=h();i(0,"div",15)(1,"button",22),C("click",function(){_(t);let l=c();return y(l.expanded=!l.expanded)}),d(2,ue,2,0,"span",17)(3,fe,2,1,"span",17),o()()}if(e&2){let t=c();n(2),r("ngIf",!t.profile.photoUrl),n(),r("ngIf",t.profile.photoUrl)}}function ge(e,a){e&1&&(i(0,"a",25),s(1," Dashboard "),o())}function xe(e,a){e&1&&(i(0,"div",26)(1,"a",27),s(2," Login "),o(),i(3,"a",28),s(4," Sign Up "),o()())}function ve(e,a){e&1&&(i(0,"span",18),u(1,"i",23),o())}function _e(e,a){if(e&1&&(i(0,"span",18),u(1,"img",31),o()),e&2){let t=c(2);n(),f("src",t.profile.photoUrl,M)}}function ye(e,a){if(e&1){let t=h();i(0,"div",26)(1,"button",29),C("click",function(l){_(t);let N=D(5);return y(N.toggle(l))}),d(2,ve,2,0,"span",17)(3,_e,2,1,"span",17),o(),u(4,"p-menu",30,0),o()}if(e&2){let t=c();n(2),r("ngIf",!t.profile.photoUrl),n(),r("ngIf",t.profile.photoUrl),n(),r("model",t.menuItems)("popup",!0)}}function he(e,a){e&1&&(i(0,"a",43),s(1," Admin Portal "),o())}function Ce(e,a){if(e&1&&(I(0),d(1,he,2,0,"a",42),k()),e&2){let t=c(2);n(),r("ngIf",t.user.role=="Admin")}}function be(e,a){e&1&&(i(0,"a",25),s(1," Dashboard "),o())}function Ie(e,a){if(e&1){let t=h();i(0,"a",44),C("click",function(){_(t);let l=c(2);return y(l.logout())}),s(1," Logout "),o()}}function ke(e,a){e&1&&(i(0,"a",27),s(1," Login "),o())}function Te(e,a){e&1&&(i(0,"a",28),s(1," Sign Up "),o())}function Se(e,a){if(e&1&&(i(0,"nav",32)(1,"div",33)(2,"div",34),d(3,Ce,2,1,"ng-container",35)(4,be,2,0,"a",9),i(5,"a",36),s(6," Features "),o(),i(7,"a",37),s(8," Pricing "),o(),i(9,"a",38),s(10," Support "),o(),d(11,Ie,2,0,"a",39)(12,ke,2,0,"a",40)(13,Te,2,0,"a",41),o()()()),e&2){let t=c();n(3),r("ngIf",t.user),n(),r("ngIf",t.profile),n(7),r("ngIf",t.profile),n(),r("ngIf",!t.profile),n(),r("ngIf",!t.profile)}}var Pe=(()=>{class e{constructor(t,p,l){if(this.router=p,this.accountService=l,this.expanded=!1,this.menuItems=[{items:[{label:"Profile",icon:"pi pi-user",command:()=>{this.router.navigateByUrl("/dashboard/profile")}},{label:"Team",icon:"pi pi-users",command:()=>{this.router.navigateByUrl("/dashboard/team")}},{label:"Billing",icon:"pi pi-money-bill",command:()=>{this.router.navigateByUrl("/dashboard/billing")}},{label:"Logout",icon:"pi pi-sign-out",command:()=>{this.logout()}}]}],this.profile=t.getPreferences().profile,this.user=t.getPreferences().user,!!t.getPreferences().user&&t.getPreferences().user.role=="Admin"){let N={label:"Admin Portal",icon:"pi pi-user",command:()=>{this.router.navigateByUrl("/admin-portal")}};this.menuItems[0].items=[N,...this.menuItems[0].items]}}logout(){this.accountService.logout()}static{this.\u0275fac=function(p){return new(p||e)(g(J),g(A),g(K))}}static{this.\u0275cmp=b({type:e,selectors:[["app-nav"]],standalone:!1,decls:19,vars:6,consts:[["op",""],["x-data","{expanded: false}",1,"relative","z-10","py-4","md:py-6"],[1,"container","px-4","mx-auto","sm:px-6","lg:px-8"],[1,"relative","flex","items-center","justify-between"],[1,"flex-shrink-0"],["routerLink","/","title","",1,"flex","rounded","outline-none","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["loading","lazy","src","../../../../assets/images/yourlogo.svg","alt","",1,"w-auto","h-8"],["class","flex md:hidden",4,"ngIf"],[1,"hidden","md:flex","md:items-center","md:justify-center","md:space-x-10","md:absolute","md:inset-y-0","md:left-1/2","md:-translate-x-1/2","lg:space-x-16"],["routerLink","/dashboard","class","text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",4,"ngIf"],["routerLink","/","fragment","features",1,"text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","focus:outline-none","font-pj","hover:text-opacity-50","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["routerLink","/pricing","title","",1,"text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","focus:outline-none","font-pj","hover:text-opacity-50","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["routerLink","/support","title","",1,"text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","focus:outline-none","font-pj","hover:text-opacity-50","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["class","hidden md:flex items-center gap-10",4,"ngIf"],["x-collapse","",4,"ngIf"],[1,"flex","md:hidden"],["type","button",1,"text-gray-900",3,"click"],["aria-hidden","true",4,"ngIf"],["aria-hidden","true"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"w-7","h-7"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","1.5","d","M4 6h16M4 12h16M4 18h16"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18L18 6M6 6l12 12"],["type","button",1,"bg-gray-200","text-gray-600","w-10","h-10","rounded-md",3,"click"],[1,"pi","pi-user"],["loading","lazy",1,"rounded-md",3,"src"],["routerLink","/dashboard",1,"text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","focus:outline-none","font-pj","hover:text-opacity-50","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],[1,"hidden","md:flex","items-center","gap-10"],["routerLink","/sign-in",1,"text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","focus:outline-none","font-pj","hover:text-opacity-50","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["routerLink","/sign-up","role","button",1,"inline-flex","items-center","justify-center","px-6","py-3","text-base","font-bold","leading-7","text-white","transition-all","duration-200","bg-gray-900","border","border-transparent","rounded","hover:bg-gray-600","font-pj","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-gray-900"],["type","button",1,"bg-gray-200","text-gray-600","w-10","h-10","rounded-full",3,"click"],[3,"model","popup"],["loading","lazy",1,"rounded-full",3,"src"],["x-collapse",""],[1,"px-1","py-8"],[1,"grid","gap-y-7"],[4,"ngIf"],["routerLink","/","fragment","features",1,"flex","items-center","p-3","-m-3","text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","hover:bg-gray-50","focus:outline-none","font-pj","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["routerLink","/pricing","title","",1,"flex","items-center","p-3","-m-3","text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","hover:bg-gray-50","focus:outline-none","font-pj","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["routerLink","/support","title","",1,"flex","items-center","p-3","-m-3","text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","hover:bg-gray-50","focus:outline-none","font-pj","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["class","text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",3,"click",4,"ngIf"],["routerLink","/sign-in","class","text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",4,"ngIf"],["routerLink","/sign-up","class","inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900","role","button",4,"ngIf"],["routerLink","/admin-portal","class","text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",4,"ngIf"],["routerLink","/admin-portal",1,"text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","focus:outline-none","font-pj","hover:text-opacity-50","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],[1,"text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","focus:outline-none","font-pj","hover:text-opacity-50","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2",3,"click"]],template:function(p,l){p&1&&(i(0,"header",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"a",5),u(5,"img",6),o()(),d(6,de,4,2,"div",7)(7,me,4,2,"div",7),i(8,"div",8),d(9,ge,2,0,"a",9),i(10,"a",10),s(11," Features "),o(),i(12,"a",11),s(13," Pricing "),o(),i(14,"a",12),s(15," Support "),o()(),d(16,xe,5,0,"div",13)(17,ye,6,4,"div",13),o(),d(18,Se,14,5,"nav",14),o()()),p&2&&(n(6),r("ngIf",!l.profile),n(),r("ngIf",l.profile),n(2),r("ngIf",l.profile),n(7),r("ngIf",!l.profile),n(),r("ngIf",l.profile),n(),r("ngIf",l.expanded))},dependencies:[T,B,w],styles:["[_nghost-%COMP%]     .p-menu-submenu-label{display:none}"]})}}return e})();var V=(()=>{class e{static{this.\u0275fac=function(p){return new(p||e)}}static{this.\u0275mod=x({type:e})}static{this.\u0275inj=m({imports:[S,H]})}}return e})();var U=(()=>{class e{static{this.\u0275fac=function(p){return new(p||e)}}static{this.\u0275mod=x({type:e})}static{this.\u0275inj=m({imports:[S,Y,w]})}}return e})();var Qe=(()=>{class e{static{this.\u0275fac=function(p){return new(p||e)}}static{this.\u0275mod=x({type:e})}static{this.\u0275inj=m({imports:[V,U,V,U]})}}return e})();export{Ee as a,Pe as b,Qe as c};
