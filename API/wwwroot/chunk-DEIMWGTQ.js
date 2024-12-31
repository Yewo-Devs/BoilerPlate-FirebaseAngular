import{a as T}from"./chunk-SVW3I2OV.js";import{c as R,e as z,f as q,j as G,r as H}from"./chunk-XTT6DPND.js";import{f as K}from"./chunk-FHYAQCHI.js";import{d as Y,e as A,i as O}from"./chunk-MEJR6MZI.js";import{a as J}from"./chunk-BWE2EIYQ.js";import{k as B,m as I,t as k}from"./chunk-5RQIKTTO.js";import{Ab as u,Bb as V,Cb as P,Eb as h,Ib as C,Jb as s,La as N,Mb as m,Oa as n,Pa as g,R as f,Sb as U,Tb as c,Vb as v,Wb as M,Za as b,_a as x,bc as D,da as _,db as d,ea as y,fa as E,pb as r,rb as j,yb as i,zb as o}from"./chunk-QP33FRZG.js";var W=(e,a)=>({"pl-12":e,"pl-4":a});function X(e,a){if(e&1&&(i(0,"div",5),u(1,"i",6),o()),e&2){let t=s();n(),m("ngClass",t.icon)}}function Z(e,a){if(e&1&&u(0,"input",7),e&2){let t=s();j("is-invalid",t.ngControl.touched&&t.ngControl.invalid&&t.invalidFeedback),m("type",t.type),m("placeholder",t.placeholder),r("ngClass",D(6,W,t.icon,!t.icon))("formControl",t.ngControl.control)}}function $(e,a){if(e&1&&u(0,"input",8),e&2){let t=s();j("is-invalid",t.ngControl.touched&&t.ngControl.invalid&&t.invalidFeedback),m("type",t.type),m("placeholder",t.placeholder),r("formControl",t.ngControl.control)}}function ee(e,a){if(e&1&&(i(0,"div",10),c(1),o()),e&2){let t=s(2);n(),v(" Please enter your ",t.label," ")}}function te(e,a){if(e&1&&(i(0,"div",10),c(1),o()),e&2){let t=s(2);n(),v(" Please enter a valid ",t.label," address ")}}function ne(e,a){if(e&1&&(i(0,"div",10),c(1),o()),e&2){let t=s(2);n(),M(" Your ",t.label," must be at least ",t.ngControl.control.errors.minlength.requiredLength," characters ")}}function ie(e,a){if(e&1&&(i(0,"div",10),c(1),o()),e&2){let t=s(2);n(),M(" Your ",t.label," must be at most ",t.ngControl.control.errors.maxlength.requiredLength," characters ")}}function oe(e,a){if(e&1&&(i(0,"div",10),c(1),o()),e&2){let t=s(2);n(),v(" Your ",t.label,"s dont match ")}}function re(e,a){if(e&1&&(i(0,"div",10),c(1),o()),e&2){let t=s(2);n(),v(" You cannot have numbers or special characters in your ",t.label," ")}}function ae(e,a){if(e&1&&(i(0,"div",10),c(1),o()),e&2){let t=s(2);n(),v(" You can on have numbers in ",t.label," ")}}function le(e,a){e&1&&(i(0,"div",10),c(1," You have to pick a time with in operating hours "),o())}function ce(e,a){if(e&1&&(V(0),d(1,ee,2,1,"div",9)(2,te,2,1,"div",9)(3,ne,2,2,"div",9)(4,ie,2,2,"div",9)(5,oe,2,1,"div",9)(6,re,2,1,"div",9)(7,ae,2,1,"div",9)(8,le,2,0,"div",9),P()),e&2){let t=s();n(),r("ngIf",t.ngControl.control.errors==null?null:t.ngControl.control.errors.required),n(),r("ngIf",t.ngControl.control.errors==null?null:t.ngControl.control.errors.email),n(),r("ngIf",t.ngControl.control.errors==null?null:t.ngControl.control.errors.minlength),n(),r("ngIf",t.ngControl.control.errors==null?null:t.ngControl.control.errors.maxlength),n(),r("ngIf",t.ngControl.control.errors==null?null:t.ngControl.control.errors.isMatching),n(),r("ngIf",t.ngControl.control.errors==null?null:t.ngControl.control.errors.hasNumbers),n(),r("ngIf",t.ngControl.control.errors==null?null:t.ngControl.control.errors.hasLetters),n(),r("ngIf",t.ngControl.control.errors==null?null:t.ngControl.control.errors.isInRange)}}var Se=(()=>{class e{constructor(t){this.ngControl=t,this.type="text",this.placeholder="",this.invalidFeedback=!0,this.icon="",this.thick=!1,this.ngControl.valueAccessor=this}writeValue(t){}registerOnChange(t){}registerOnTouched(t){}static{this.\u0275fac=function(p){return new(p||e)(g(z))}}static{this.\u0275cmp=b({type:e,selectors:[["app-text-input"]],inputs:{label:"label",type:"type",placeholder:"placeholder",invalidFeedback:"invalidFeedback",icon:"icon",thick:"thick"},standalone:!1,decls:5,vars:4,consts:[[1,"relative"],["class","absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none",4,"ngIf"],["class","block w-full py-4 pl-12 pr-4 overflow-hidden text-base font-normal text-gray-900 placeholder-gray-600 transition-all duration-200 border border-gray-300 caret-gray-900 rounded-xl bg-white focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-gray-900 font-pj",3,"ngClass","is-invalid","type","formControl","placeholder",4,"ngIf"],["class","block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900 sm:text-sm caret-gray-900",3,"is-invalid","type","formControl","placeholder",4,"ngIf"],[4,"ngIf"],[1,"absolute","inset-y-0","left-0","flex","items-center","pl-4","pointer-events-none"],[1,"text-gray-400",3,"ngClass"],[1,"block","w-full","py-4","pl-12","pr-4","overflow-hidden","text-base","font-normal","text-gray-900","placeholder-gray-600","transition-all","duration-200","border","border-gray-300","caret-gray-900","rounded-xl","bg-white","focus:outline-none","focus:bg-white","focus:border-gray-900","focus:ring-gray-900","font-pj",3,"ngClass","type","formControl","placeholder"],[1,"block","w-full","px-4","py-3","placeholder-gray-500","border","-gray-300","rounded-lg","focus:ring-gray-900","focus:border-gray-900","sm:text-sm","caret-gray-900",3,"type","formControl","placeholder"],["class","invalid-feedback",4,"ngIf"],[1,"invalid-feedback"]],template:function(p,l){p&1&&(i(0,"div",0),d(1,X,2,1,"div",1)(2,Z,1,9,"input",2)(3,$,1,5,"input",3),o(),d(4,ce,9,8,"ng-container",4)),p&2&&(n(),r("ngIf",l.icon),n(),r("ngIf",l.thick),n(),r("ngIf",!l.thick),n(),r("ngIf",l.ngControl.touched&&l.ngControl.invalid&&l.invalidFeedback))},dependencies:[B,I,R,q,G],styles:[".is-invalid[_ngcontent-%COMP%]{border:1px solid red}.invalid-feedback[_ngcontent-%COMP%]{color:red;font-weight:700;font-size:.75rem;margin-top:.5rem;margin-left:.5rem}"]})}}return e})();function se(e,a){e&1&&(i(0,"span",18),E(),i(1,"svg",19),u(2,"path",20),o()())}function pe(e,a){e&1&&(i(0,"span",18),E(),i(1,"svg",19),u(2,"path",21),o()())}function de(e,a){if(e&1){let t=h();i(0,"div",15)(1,"button",16),C("click",function(){_(t);let l=s();return y(l.expanded=!l.expanded)}),d(2,se,3,0,"span",17)(3,pe,3,0,"span",17),o()()}if(e&2){let t=s();n(2),r("ngIf",!t.expanded),n(),r("ngIf",t.expanded)}}function ue(e,a){e&1&&(i(0,"span",18),u(1,"i",23),o())}function me(e,a){if(e&1&&(i(0,"span",18),u(1,"img",24),o()),e&2){let t=s(2);n(),m("src",t.profile.photoUrl,N)}}function fe(e,a){if(e&1){let t=h();i(0,"div",15)(1,"button",22),C("click",function(){_(t);let l=s();return y(l.expanded=!l.expanded)}),d(2,ue,2,0,"span",17)(3,me,2,1,"span",17),o()()}if(e&2){let t=s();n(2),r("ngIf",!t.profile.photoUrl),n(),r("ngIf",t.profile.photoUrl)}}function ge(e,a){e&1&&(i(0,"a",25),c(1," Dashboard "),o())}function xe(e,a){e&1&&(i(0,"div",26)(1,"a",27),c(2," Login "),o(),i(3,"a",28),c(4," Sign Up "),o()())}function ve(e,a){e&1&&(i(0,"span",18),u(1,"i",23),o())}function _e(e,a){if(e&1&&(i(0,"span",18),u(1,"img",31),o()),e&2){let t=s(2);n(),m("src",t.profile.photoUrl,N)}}function ye(e,a){if(e&1){let t=h();i(0,"div",26)(1,"button",29),C("click",function(l){_(t);let w=U(5);return y(w.toggle(l))}),d(2,ve,2,0,"span",17)(3,_e,2,1,"span",17),o(),u(4,"p-menu",30,0),o()}if(e&2){let t=s();n(2),r("ngIf",!t.profile.photoUrl),n(),r("ngIf",t.profile.photoUrl),n(),r("model",t.menuItems)("popup",!0)}}function he(e,a){e&1&&(i(0,"a",25),c(1," Dashboard "),o())}function Ce(e,a){if(e&1){let t=h();i(0,"a",41),C("click",function(){_(t);let l=s(2);return y(l.logout())}),c(1," Logout "),o()}}function be(e,a){e&1&&(i(0,"a",27),c(1," Login "),o())}function Ie(e,a){e&1&&(i(0,"a",28),c(1," Sign Up "),o())}function ke(e,a){if(e&1&&(i(0,"nav",32)(1,"div",33)(2,"div",34),d(3,he,2,0,"a",9),i(4,"a",35),c(5," Features "),o(),i(6,"a",36),c(7," Pricing "),o(),i(8,"a",37),c(9," Support "),o(),d(10,Ce,2,0,"a",38)(11,be,2,0,"a",39)(12,Ie,2,0,"a",40),o()()()),e&2){let t=s();n(3),r("ngIf",t.profile),n(7),r("ngIf",t.profile),n(),r("ngIf",!t.profile),n(),r("ngIf",!t.profile)}}var Le=(()=>{class e{constructor(t,p,l){if(this.router=p,this.accountService=l,this.expanded=!1,this.menuItems=[{items:[{label:"Profile",icon:"pi pi-user",command:()=>{this.router.navigateByUrl("/dashboard/profile")}},{label:"Team",icon:"pi pi-users",command:()=>{this.router.navigateByUrl("/dashboard/team")}},{label:"Billing",icon:"pi pi-money-bill",command:()=>{this.router.navigateByUrl("/dashboard/billing")}},{label:"Logout",icon:"pi pi-sign-out",command:()=>{this.logout()}}]}],this.profile=t.getPreferences().profile,!!t.getPreferences().user&&t.getPreferences().user.role=="Admin"){let w={label:"Admin Portal",icon:"pi pi-user",command:()=>{this.router.navigateByUrl("/admin-portal")}};this.menuItems[0].items=[w,...this.menuItems[0].items]}}logout(){this.accountService.logout()}static{this.\u0275fac=function(p){return new(p||e)(g(J),g(Y),g(K))}}static{this.\u0275cmp=b({type:e,selectors:[["app-nav"]],standalone:!1,decls:19,vars:6,consts:[["op",""],["x-data","{expanded: false}",1,"relative","z-10","py-4","md:py-6"],[1,"container","px-4","mx-auto","sm:px-6","lg:px-8"],[1,"relative","flex","items-center","justify-between"],[1,"flex-shrink-0"],["routerLink","/","title","",1,"flex","rounded","outline-none","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["src","../../../../assets/images/yourlogo.svg","alt","",1,"w-auto","h-8"],["class","flex md:hidden",4,"ngIf"],[1,"hidden","md:flex","md:items-center","md:justify-center","md:space-x-10","md:absolute","md:inset-y-0","md:left-1/2","md:-translate-x-1/2","lg:space-x-16"],["routerLink","/dashboard","class","text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",4,"ngIf"],["routerLink","/","fragment","features",1,"text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","focus:outline-none","font-pj","hover:text-opacity-50","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["routerLink","/pricing","title","",1,"text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","focus:outline-none","font-pj","hover:text-opacity-50","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["routerLink","/support","title","",1,"text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","focus:outline-none","font-pj","hover:text-opacity-50","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["class","hidden md:flex items-center gap-10",4,"ngIf"],["x-collapse","",4,"ngIf"],[1,"flex","md:hidden"],["type","button",1,"text-gray-900",3,"click"],["aria-hidden","true",4,"ngIf"],["aria-hidden","true"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"w-7","h-7"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","1.5","d","M4 6h16M4 12h16M4 18h16"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18L18 6M6 6l12 12"],["type","button",1,"bg-gray-200","text-gray-600","w-10","h-10","rounded-md",3,"click"],[1,"pi","pi-user"],[1,"rounded-md",3,"src"],["routerLink","/dashboard",1,"text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","focus:outline-none","font-pj","hover:text-opacity-50","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],[1,"hidden","md:flex","items-center","gap-10"],["routerLink","/sign-in",1,"text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","focus:outline-none","font-pj","hover:text-opacity-50","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["routerLink","/sign-up","role","button",1,"inline-flex","items-center","justify-center","px-6","py-3","text-base","font-bold","leading-7","text-white","transition-all","duration-200","bg-gray-900","border","border-transparent","rounded","hover:bg-gray-600","font-pj","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-gray-900"],["type","button",1,"bg-gray-200","text-gray-600","w-10","h-10","rounded-full",3,"click"],[3,"model","popup"],[1,"rounded-full",3,"src"],["x-collapse",""],[1,"px-1","py-8"],[1,"grid","gap-y-7"],["routerLink","/","fragment","features",1,"flex","items-center","p-3","-m-3","text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","hover:bg-gray-50","focus:outline-none","font-pj","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["routerLink","/pricing","title","",1,"flex","items-center","p-3","-m-3","text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","hover:bg-gray-50","focus:outline-none","font-pj","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["routerLink","/support","title","",1,"flex","items-center","p-3","-m-3","text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","hover:bg-gray-50","focus:outline-none","font-pj","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2"],["class","text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",3,"click",4,"ngIf"],["routerLink","/sign-in","class","text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",4,"ngIf"],["routerLink","/sign-up","class","inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900","role","button",4,"ngIf"],[1,"text-base","font-medium","text-gray-900","transition-all","duration-200","rounded","focus:outline-none","font-pj","hover:text-opacity-50","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2",3,"click"]],template:function(p,l){p&1&&(i(0,"header",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"a",5),u(5,"img",6),o()(),d(6,de,4,2,"div",7)(7,fe,4,2,"div",7),i(8,"div",8),d(9,ge,2,0,"a",9),i(10,"a",10),c(11," Features "),o(),i(12,"a",11),c(13," Pricing "),o(),i(14,"a",12),c(15," Support "),o()(),d(16,xe,5,0,"div",13)(17,ye,6,4,"div",13),o(),d(18,ke,13,4,"nav",14),o()()),p&2&&(n(6),r("ngIf",!l.profile),n(),r("ngIf",l.profile),n(2),r("ngIf",l.profile),n(7),r("ngIf",!l.profile),n(),r("ngIf",l.profile),n(),r("ngIf",l.expanded))},dependencies:[I,A,T],styles:["[_nghost-%COMP%]     .p-menu-submenu-label{display:none}"]})}}return e})();var L=(()=>{class e{static{this.\u0275fac=function(p){return new(p||e)}}static{this.\u0275mod=x({type:e})}static{this.\u0275inj=f({imports:[k,H]})}}return e})();var F=(()=>{class e{static{this.\u0275fac=function(p){return new(p||e)}}static{this.\u0275mod=x({type:e})}static{this.\u0275inj=f({imports:[k,O,T]})}}return e})();var Je=(()=>{class e{static{this.\u0275fac=function(p){return new(p||e)}}static{this.\u0275mod=x({type:e})}static{this.\u0275inj=f({imports:[L,F,L,F]})}}return e})();export{Se as a,Le as b,Je as c};
