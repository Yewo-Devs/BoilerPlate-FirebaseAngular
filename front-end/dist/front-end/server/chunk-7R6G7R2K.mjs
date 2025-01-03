import './polyfills.server.mjs';
import{a as W,b as Y}from"./chunk-K64AUJDI.mjs";import{a as Z}from"./chunk-4I7WEQR6.mjs";import{a as _}from"./chunk-3VPIIOTU.mjs";import{a as O}from"./chunk-W4KCEUCZ.mjs";import"./chunk-S5LLE7VL.mjs";import{a as M}from"./chunk-TRCGT4ME.mjs";import{a as z}from"./chunk-VMTRNC42.mjs";import"./chunk-4EQ3CSFW.mjs";import"./chunk-P5XOHON5.mjs";import{b as H,f as q}from"./chunk-UWTE5XPM.mjs";import{b as N,d as p,f as L,g as D,i as B,j as R,k as T,l as G,p as V,r as A}from"./chunk-JUYC4XRN.mjs";import"./chunk-D5MSRIRL.mjs";import"./chunk-ZTZUQXOY.mjs";import{a as F}from"./chunk-PMTGJU2L.mjs";import{a as E}from"./chunk-6ERRVSZZ.mjs";import{p as k,q as I,u as b}from"./chunk-RKHYJ25K.mjs";import"./chunk-D2P6BBTD.mjs";import"./chunk-PBUWRJ2U.mjs";import{t as U}from"./chunk-4CMVCGMC.mjs";import{Bb as r,Cb as i,Db as s,J as v,L as y,Lb as P,R as u,Ra as c,Sa as l,Wb as n,Yb as j,ab as C,bb as d,fa as h,ga as S,sb as f}from"./chunk-JQ55PVVS.mjs";import"./chunk-S6KH3LOX.mjs";var x=class m{constructor(o,e,t,a,w,X,$,ee){this.fb=o;this.accountService=e;this.profileService=t;this.toastService=a;this.busyService=w;this.preferencesService=X;this.authService=$;this.routerService=ee}userForm;saasName=E.saasName;ngOnInit(){this.initializeForm(),this.authService.authState.subscribe(o=>{o!=null&&this.socialLogin(o)})}initializeForm(){this.userForm=this.fb.group({email:["",[p.required,p.email]],password:["",[p.required]],terms:[!1,[p.requiredTrue]]})}registerUser(){let o={permissions:[""],role:"User",email:this.userForm.controls.email.value,password:this.userForm.controls.password.value,requireEmailVerification:!0};this.busyService.busy();let e=this.preferencesService.getPreferences();this.accountService.registerUser(o).subscribe(t=>{if(this.busyService.idle(),this.toastService.success("We have successfully registered your account!"),e.user=t,e.keepLoggedIn=!1,this.preferencesService.setPreferences(e),this.accountService.setUser(t),e.nextPage){this.routerService.navigateByUrl(e.nextPage),e.nextPage=null,this.preferencesService.setPreferences(e);return}this.routerService.navigateByUrl("/dashboard")},t=>{if(this.busyService.idle(),t.error[0]=="?"){this.routerService.navigateByUrl("/verify"+t.error);return}this.toastService.error(t.error,"Error")})}socialLogin(o){this.busyService.busy();let e=this.preferencesService.getPreferences(),t=o;t.keepLoggedIn=!0,t.role="User",t.permissions=[],this.accountService.socialLogin(t).pipe(y(()=>this.busyService.idle()),y(a=>{e.user=a,e.keepLoggedIn=t.keepLoggedIn,this.preferencesService.setPreferences(e),this.accountService.setUser(a)}),v(a=>{let w={userId:a.id,firstName:o.firstName,lastName:o.lastName,photoUrl:o.photoUrl};return this.profileService.createProfile(w).pipe(v(()=>this.profileService.getProfile(a.id)))})).subscribe(a=>{e.profile=a,this.preferencesService.setPreferences(e),e.nextPage?(this.routerService.navigateByUrl(e.nextPage),e.nextPage=null,this.preferencesService.setPreferences(e)):this.routerService.navigateByUrl("/dashboard")},a=>{console.error("Error during social login process",a)})}static \u0275fac=function(e){return new(e||m)(l(V),l(q),l(Z),l(M),l(O),l(F),l(H),l(k))};static \u0275cmp=C({type:m,selectors:[["app-sign-up"]],standalone:!1,decls:78,vars:16,consts:[[1,"min-h-full","lg:flex","lg:justify-between"],[1,"flex","flex-col","justify-center","flex-1","px-4","py-12","bg-white","sm:px-6","lg:px-20","xl:px-24"],[1,"flex-1","max-w-sm","mx-auto","lg:max-w-md"],[1,"mt-5","text-3xl","font-bold","text-center","text-gray-900","sm:text-4xl","xl:text-5xl","font-pj","lg:text-left"],[1,"mt-10",3,"formGroup"],[1,"space-y-4"],["for","",1,"sr-only"],[3,"type","thick","formControl","placeholder","label","icon"],[1,"flex","items-center","justify-between","mt-5"],[1,"relative","flex","items-center"],[1,"flex","items-center","h-5"],["type","checkbox","name","terms","id","terms","formControlName","terms",1,"w-5","h-5","text-gray-900","border-gray-300","rounded","focus:ring-gray-900"],[1,"ml-3","text-base"],["for","terms",1,"font-normal","text-gray-900","font-pj"],["routerLink","/terms",1,"font-bold","rounded","focus:outline-none","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2","hover:underline"],[1,"relative","mt-8"],[1,"absolute","-inset-2"],[1,"w-full","h-full","mx-auto","opacity-30","blur-lg","filter"],[1,"relative","flex","items-center","justify-center","w-full","px-8","py-4","text-base","font-bold","text-white","transition-all","duration-200","bg-gray-900","border","border-transparent","rounded-xl","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-gray-900","font-pj","hover:bg-gray-600",3,"click","disabled"],["viewBox","0 0 172 16","fill","none","stroke","currentColor","xmlns","http://www.w3.org/2000/svg",1,"w-auto","h-4","mx-auto","mt-8","text-gray-300"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"],["y1","-0.5","x2","18.0278","y2","-0.5","transform","matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"],[3,"buttonText"],[1,"mt-10","text-base","font-normal","text-center","text-gray-900","font-pj","lg:text-left"],["routerLink","/sign-in",1,"font-bold","rounded","focus:outline-none","focus:ring-1","focus:ring-gray-900","focus:ring-offset-2","hover:underline"],[1,"relative","grid","flex-1","w-full","fullscreen","px-4","py-12","overflow-hidden","bg-gray-900","lg:max-w-2xl","lg:px-20","xl:px-24","sm:px-6","place-items-center"],[1,"absolute","inset-0"],["loading","lazy","src","https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/4/background-pattern.png","alt","",1,"object-cover","object-top","w-full","h-full","scale-150","-rotate-90","opacity-10"],[1,"relative","max-w-sm","mx-auto"],[1,"inline-flex","items-center","justify-center","w-20","h-20","bg-gray-800","rounded-xl"],["viewBox","0 0 33 23","fill","currentColor","xmlns","http://www.w3.org/2000/svg",1,"w-auto","h-5","text-white"],["d","M32.0011 4.7203L30.9745 0C23.5828 0.33861 18.459 3.41404 18.459 12.4583V22.8687H31.3725V9.78438H26.4818C26.4819 6.88236 28.3027 5.17551 32.0011 4.7203Z"],["d","M13.5421 4.7203L12.5155 0C5.12386 0.33861 0 3.41413 0 12.4584V22.8687H12.914V9.78438H8.02029C8.02029 6.88236 9.84111 5.17551 13.5421 4.7203Z"],[1,"mt-14"],[1,"text-2xl","font-medium","leading-relaxed","text-white","lg:text-3xl","font-pj"],[1,"flex","items-center","mt-12"],["loading","lazy","src","https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/4/avatar-female.png","alt","",1,"flex-shrink-0","object-cover","rounded-full","w-14","h-14"],[1,"ml-4"],[1,"text-xl","font-bold","text-white","font-pj"],[1,"mt-px","text-lg","font-normal","text-gray-400","font-pj"]],template:function(e,t){e&1&&(r(0,"section")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1",3),n(5),i(),r(6,"form",4)(7,"div",5)(8,"div")(9,"label",6),n(10," Email "),i(),s(11,"app-text-input",7),i(),r(12,"div")(13,"label",6),n(14," Password "),i(),s(15,"app-text-input",7),i()(),r(16,"div",8)(17,"div",9)(18,"div",10),s(19,"input",11),i(),r(20,"div",12)(21,"label",13),n(22," I agree with "),r(23,"a",14),n(24,"Terms & Conditions"),i()()()()(),r(25,"div",15)(26,"div",16),s(27,"div",17),i(),r(28,"button",18),P("click",function(){return t.userForm.valid&&t.registerUser()}),n(29," Sign up "),i()(),h(),r(30,"svg",19),s(31,"line",20)(32,"line",21)(33,"line",22)(34,"line",23)(35,"line",24)(36,"line",25)(37,"line",26)(38,"line",27)(39,"line",28)(40,"line",29)(41,"line",30)(42,"line",31)(43,"line",32)(44,"line",33)(45,"line",34)(46,"line",35)(47,"line",36)(48,"line",37)(49,"line",38)(50,"line",39)(51,"line",40)(52,"line",41)(53,"line",42)(54,"line",43),i(),S(),s(55,"app-google-signin",44),i(),r(56,"p",45),n(57," Already have an account? "),r(58,"a",46),n(59,"Login now"),i()()()(),r(60,"div",47)(61,"div",48),s(62,"img",49),i(),r(63,"div",50)(64,"div",51),h(),r(65,"svg",52),s(66,"path",53)(67,"path",54),i()(),S(),r(68,"blockquote",55)(69,"p",56),n(70," \u201CYou made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.\u201D "),i()(),r(71,"div",57),s(72,"img",58),r(73,"div",59)(74,"p",60),n(75,"Leslie Alexander"),i(),r(76,"p",61),n(77," React Developer "),i()()()()()()()),e&2&&(c(5),j(" Get started with ",t.saasName," "),c(),f("formGroup",t.userForm),c(5),f("type","text")("thick",!0)("formControl",t.userForm.get("email"))("placeholder","Email")("label","email")("icon","pi pi-envelope"),c(4),f("type","password")("thick",!0)("formControl",t.userForm.get("password"))("placeholder","Password (min. 8 characters)")("label","password")("icon","pi pi-lock"),c(13),f("disabled",!t.userForm.valid),c(27),f("buttonText","Sign up with Google"))},dependencies:[I,_,B,N,L,D,R,T,G,W],styles:["a[_ngcontent-%COMP%]{cursor:pointer}.fullscreen[_ngcontent-%COMP%]{display:block;min-height:100vh}"]})};var Q=[{path:"",component:x}],g=class m{static \u0275fac=function(e){return new(e||m)};static \u0275mod=d({type:m});static \u0275inj=u({imports:[b.forChild(Q),b]})};var K=class m{static \u0275fac=function(e){return new(e||m)};static \u0275mod=d({type:m});static \u0275inj=u({imports:[U,g,z,A,Y]})};export{K as SignUpModule};
