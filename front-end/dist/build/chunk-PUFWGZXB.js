import{a as R}from"./chunk-NTJQJCQI.js";import"./chunk-U6HSTW4V.js";import{a as g}from"./chunk-BYNUWOP2.js";import{a as E,c as k}from"./chunk-IZXNLNMV.js";import"./chunk-I22SW7EJ.js";import"./chunk-HU2YZ2DC.js";import{d,f as y,g as x,i as b,j as S,k as P,p as F,r as C}from"./chunk-FRW3667Z.js";import{f as I}from"./chunk-MWKCO5LE.js";import"./chunk-EVW2LFY5.js";import"./chunk-GSLSRBMZ.js";import{h as f,j as h}from"./chunk-ETXXSDLS.js";import"./chunk-JCVGH3QK.js";import"./chunk-U7NA52XG.js";import"./chunk-BRYWZKMQ.js";import"./chunk-U3QUSVWF.js";import"./chunk-GHBBNMAF.js";import{Cb as o,Db as t,Eb as m,Mb as v,Sa as a,Ta as i,Xb as s,bb as w,tb as l}from"./chunk-A6EP6ZMT.js";var L=(()=>{class c{constructor(n,e,r,p,j,D){this.fb=n,this.route=e,this.accountService=r,this.toastService=p,this.busyService=j,this.routerService=D,this.route.queryParams.subscribe(u=>{this.accountId=u.accountId,this.token=u.token})}ngOnInit(){this.initializeForm()}initializeForm(){this.passwordForm=this.fb.group({newPassword:["",[d.required,d.minLength(8)]],confirmPassword:["",[d.required,d.minLength(8)]]})}resetPassword(){if(this.passwordForm.controls.newPassword.value!==this.passwordForm.controls.confirmPassword.value){this.toastService.error("Passwords do not match","Error");return}this.busyService.busy();let n={accountID:this.accountId,token:this.token,password:this.passwordForm.controls.newPassword.value};this.accountService.passwordReset(n).subscribe(e=>{this.busyService.idle(),this.toastService.success("Password reset successful","Success"),this.routerService.navigateByUrl("/sign-in")},e=>{this.busyService.idle(),this.toastService.error(e.error,"Error")})}static{this.\u0275fac=function(e){return new(e||c)(i(F),i(f),i(I),i(g),i(R),i(h))}}static{this.\u0275cmp=w({type:c,selectors:[["app-password-reset"]],decls:24,vars:12,consts:[[1,"py-12","sm:py-16","lg:py-20","xl:py-24","bg-gray-50"],[1,"px-4","mx-auto","max-w-7xl","sm:px-6","lg:px-8"],[1,"max-w-xl","mx-auto","text-center"],[1,"text-2xl","font-semibold","tracking-tight","text-gray-900","sm:text-3xl","lg:text-4xl"],[1,"mt-4","text-base","font-normal","leading-7","text-gray-600","lg:text-lg","lg:mt-6","lg:leading-8"],[1,"max-w-lg","mx-auto","mt-4","sm:mt-4"],[1,"p-6","sm:px-8"],[1,"mt-10",3,"formGroup"],[1,"space-y-4"],["for","",1,"sr-only"],[3,"type","formControl","placeholder","label","icon"],[1,"relative","mt-8"],[1,"absolute","-inset-2"],[1,"w-full","h-full","mx-auto","opacity-30","blur-lg","filter"],[1,"relative","flex","items-center","justify-center","w-full","px-8","py-4","text-base","font-bold","text-white","transition-all","duration-200","bg-gray-900","border","border-transparent","rounded-xl","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-gray-900","font-pj","hover:bg-gray-600",3,"click","disabled"]],template:function(e,r){e&1&&(o(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),s(4," Reset your password "),t(),o(5,"p",4),s(6," Enter your new password below. "),t()(),o(7,"div",5)(8,"div",6)(9,"form",7)(10,"div",8)(11,"div")(12,"label",9),s(13,"New Password"),t(),m(14,"app-text-input",10),t(),o(15,"div")(16,"label",9),s(17,"Confirm Password"),t(),m(18,"app-text-input",10),t()(),o(19,"div",11)(20,"div",12),m(21,"div",13),t(),o(22,"button",14),v("click",function(){return r.passwordForm.valid&&r.resetPassword()}),s(23," Reset Password "),t()()()()()()()),e&2&&(a(9),l("formGroup",r.passwordForm),a(5),l("type","password")("formControl",r.passwordForm.get("newPassword"))("placeholder","New Password")("label","new password")("icon","pi pi-lock"),a(4),l("type","password")("formControl",r.passwordForm.get("confirmPassword"))("placeholder","Confirm Password")("label","confirm password")("icon","pi pi-lock"),a(4),l("disabled",!r.passwordForm.valid))},dependencies:[C,b,y,x,S,P,k,E],encapsulation:2})}}return c})();export{L as PasswordResetComponent};
