import{b as R,e as C,i as s}from"./chunk-4TGDBMK4.js";import"./chunk-XHS7OS3V.js";import{a as M}from"./chunk-TWQDPD4B.js";import"./chunk-MOHHWKAW.js";import{m as h,t as b}from"./chunk-XB25HVPP.js";import{Ab as u,Jb as v,Oa as a,Pa as d,R as l,Tb as o,Vb as y,Za as x,_a as m,db as g,pb as c,yb as e,zb as n}from"./chunk-KK5ZIUJ6.js";import"./chunk-4CLCTAJ7.js";function I(t,p){if(t&1&&(e(0,"div",4),u(1,"i",5),e(2,"h2",6),o(3," Email Verified! "),n(),e(4,"p",7),o(5),n()()),t&2){let r=v();a(5),y(" We have successfully verified your email. Sign in to access ",r.saasName,". ")}}function E(t,p){t&1&&(e(0,"div",4),u(1,"i",5),e(2,"h2",6),o(3," Email Not Verified! "),n(),e(4,"p",7),o(5," Your email could not be verified. "),e(6,"a",8),o(7,"Try again"),n(),o(8,". "),n()())}function N(t,p){t&1&&(e(0,"div",9)(1,"div",10)(2,"div",11)(3,"div",12),u(4,"div",13),n(),e(5,"button",14),o(6," Sign In "),n()()()())}var V=(()=>{class t{constructor(r){this.route=r,this.success=!1,this.saasName=M.saasName,this.route.queryParams.subscribe(i=>{this.success=i.result!="fail"})}static{this.\u0275fac=function(i){return new(i||t)(d(R))}}static{this.\u0275cmp=x({type:t,selectors:[["app-verification-result"]],standalone:!1,decls:5,vars:3,consts:[[1,"py-12","sm:py-16","lg:py-20","xl:py-24"],[1,"px-4","mx-auto","max-w-7xl","sm:px-6","lg:px-8"],["class","max-w-xl mx-auto text-center",4,"ngIf"],["class","max-w-lg mx-auto mt-4 sm:mt-4",4,"ngIf"],[1,"max-w-xl","mx-auto","text-center"],[1,"pi","pi-envelope","text-7xl","mb-5","font-semibold","tracking-tight","text-gray-900"],[1,"text-2xl","font-semibold","tracking-tight","text-gray-900","sm:text-3xl","lg:text-4xl"],[1,"mt-4","text-base","font-normal","leading-7","text-gray-600","lg:text-lg","lg:mt-6","lg:leading-8"],["routerLink","/sign-in"],[1,"max-w-lg","mx-auto","mt-4","sm:mt-4"],[1,"p-6","sm:px-8"],[1,"relative"],[1,"absolute","-inset-2"],[1,"w-full","h-full","mx-auto","opacity-30","blur-lg","filter"],["routerLink","/sign-in",1,"relative","flex","items-center","justify-center","w-full","px-8","py-4","text-base","font-bold","text-white","transition-all","duration-200","bg-gray-900","border","border-transparent","rounded-xl","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-gray-900","font-pj","hover:bg-gray-600"]],template:function(i,f){i&1&&(e(0,"section",0)(1,"div",1),g(2,I,6,1,"div",2)(3,E,9,0,"div",2)(4,N,7,0,"div",3),n()()),i&2&&(a(2),c("ngIf",f.success),a(),c("ngIf",!f.success),a(),c("ngIf",f.success))},dependencies:[h,C],encapsulation:2})}}return t})();var _=[{path:"",component:V}],w=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=m({type:t})}static{this.\u0275inj=l({imports:[s.forChild(_),s]})}}return t})();var B=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=m({type:t})}static{this.\u0275inj=l({imports:[b,w,s]})}}return t})();export{B as VerificationResultModule};
