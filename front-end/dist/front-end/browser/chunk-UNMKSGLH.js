import{a as b}from"./chunk-PIAC254L.js";import"./chunk-PND7Q2S5.js";import{a as h}from"./chunk-HOHR253E.js";import{f as S}from"./chunk-MQ46MCW7.js";import"./chunk-U3QUSVWF.js";import{j as g,q as s}from"./chunk-W5MTSLKP.js";import{a as y}from"./chunk-G6VSAEU6.js";import"./chunk-U7NA52XG.js";import"./chunk-JRLU6R7W.js";import{r as x}from"./chunk-VUEJJNO2.js";import{Db as o,Eb as n,Fb as f,Nb as v,Ua as r,V as c,Yb as m,cb as d,db as a}from"./chunk-XMVMWOPN.js";var u=class e{constructor(i,t,p,j,C){this.preferencesService=i;this.route=t;this.busyService=p;this.accountService=j;this.toastService=C;this.route.queryParams.subscribe(q=>{this.accountId=q.accountId})}retries=0;accountId="";ngOnInit(){this.retries=this.preferencesService.getPreferences().retries==null?0:this.preferencesService.getPreferences().retries}resendEmail(){if(this.busyService.busy(),this.retries>5){this.toastService.error("You have reached the maximum number of retries","Error"),this.busyService.idle();return}this.retries++;let i=this.preferencesService.getPreferences();i.retries=this.retries,this.preferencesService.setPreferences(i),this.accountService.resendVerificationEmail(this.accountId).subscribe(()=>{this.busyService.idle(),this.toastService.success("We have sent you an email check your inbox for instructions.")},()=>{this.busyService.idle(),this.toastService.error("Something went wrong","Error")})}static \u0275fac=function(t){return new(t||e)(r(y),r(g),r(b),r(S),r(h))};static \u0275cmp=d({type:e,selectors:[["app-verification-request"]],standalone:!1,decls:15,vars:0,consts:[[1,"py-12","sm:py-16","lg:py-20","xl:py-24"],[1,"px-4","mx-auto","max-w-7xl","sm:px-6","lg:px-8"],[1,"max-w-xl","mx-auto","text-center"],[1,"pi","pi-envelope","text-7xl","mb-5","font-semibold","tracking-tight","text-gray-900"],[1,"text-2xl","font-semibold","tracking-tight","text-gray-900","sm:text-3xl","lg:text-4xl"],[1,"mt-4","text-base","font-normal","leading-7","text-gray-600","lg:text-lg","lg:mt-6","lg:leading-8"],[1,"max-w-lg","mx-auto","mt-4","sm:mt-4"],[1,"p-6","sm:px-8"],[1,"relative"],[1,"absolute","-inset-2"],[1,"w-full","h-full","mx-auto","opacity-30","blur-lg","filter"],[1,"relative","flex","items-center","justify-center","w-full","px-8","py-4","text-base","font-bold","text-white","transition-all","duration-200","bg-gray-900","border","border-transparent","rounded-xl","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-gray-900","font-pj","hover:bg-gray-600",3,"click"]],template:function(t,p){t&1&&(o(0,"section",0)(1,"div",1)(2,"div",2),f(3,"i",3),o(4,"h2",4),m(5," Verify your email "),n(),o(6,"p",5),m(7," We've need to verify your email address to activate your account. We sent you an email check your inbox for further instructions. "),n()(),o(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9),f(12,"div",10),n(),o(13,"button",11),v("click",function(){return p.resendEmail()}),m(14," Resend Email "),n()()()()()())},encapsulation:2})};var w=[{path:"",component:u}],l=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=a({type:e});static \u0275inj=c({imports:[s.forChild(w),s]})};var I=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=a({type:e});static \u0275inj=c({imports:[x,l,s]})};export{I as VerificationRequestModule};
