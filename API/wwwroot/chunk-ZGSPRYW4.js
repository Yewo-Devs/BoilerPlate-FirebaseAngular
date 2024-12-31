import{a as z}from"./chunk-BLKULPXR.js";import{a as w}from"./chunk-2JPAOMOW.js";import{a as H}from"./chunk-ZFIUV5EV.js";import"./chunk-TFQVLPCP.js";import{f as U,h as W,q as G}from"./chunk-XTT6DPND.js";import{f as Y}from"./chunk-FHYAQCHI.js";import"./chunk-VURTVH4L.js";import"./chunk-N6ENGRFR.js";import{c as D,e as B,f as I,i as h}from"./chunk-MEJR6MZI.js";import"./chunk-VA5MERGI.js";import"./chunk-BWE2EIYQ.js";import{a as N}from"./chunk-GCDBP4HB.js";import"./chunk-E5CH4KVA.js";import{k as V,t as R}from"./chunk-5RQIKTTO.js";import{$b as m,Ab as d,Eb as O,Ib as g,Oa as r,Pa as k,R as x,Tb as o,Vb as P,Xb as E,Yb as T,Za as _,Zb as j,_a as y,ac as b,da as p,db as A,ea as c,fa as M,ga as S,lc as F,pb as l,tb as L,yb as t,zb as i}from"./chunk-QP33FRZG.js";import"./chunk-EQDQRRRY.js";var Z=e=>({"dark-mode":e}),q=e=>({open:e}),f=()=>["text-white","bg-indigo-700"],$=()=>({exact:!0});function ee(e,X){if(e&1&&d(0,"i"),e&2){let s=X.$implicit;L(s.icon)}}var K=(()=>{class e{constructor(s,a,n){this.darkModeService=s,this.accountService=a,this.ticketService=n,this.isSidebarOpen=!1,this.value=this.darkModeService.isDarkMode()?{icon:"pi pi-moon",value:"Dark Mode"}:{icon:"pi pi-sun",value:"Light Mode"},this.justifyOptions=[{icon:"pi pi-sun",value:"Light Mode"},{icon:"pi pi-moon",value:"Dark Mode"}],this.googleAnalyticsUrl=N.googleAnalyticsUrl,this.ticketCount=0}ngOnInit(){this.ticketService.getTicketCount().subscribe(s=>{this.ticketCount=s})}themeSelect(){this.value.value==="Light Mode"?this.darkModeService.setLightTheme():this.darkModeService.setDarkTheme()}openAnalytics(){window.open(this.googleAnalyticsUrl,"_blank")}logout(){this.accountService.logout()}static{this.\u0275fac=function(a){return new(a||e)(k(H),k(Y),k(z))}}static{this.\u0275cmp=_({type:e,selectors:[["app-admin-portal"]],standalone:!1,decls:62,vars:24,consts:[["item",""],[1,"dark:bg-neutral-900"],[1,"flex","flex-col"],[1,"bg-white","border-b","border-gray-200","dark:bg-neutral-900","dark:border-neutral-600"],[1,"px-4","mx-auto"],[1,"flex","items-center","justify-between","h-16"],[1,"flex","items-center","-m-2","xl:hidden"],["type","button",1,"inline-flex","items-center","justify-center","p-2","text-gray-400","bg-white","dark:bg-neutral-600","rounded-lg","hover:text-gray-500","hover:bg-gray-100","dark:hover:bg-neutral-600","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-indigo-600",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","2",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","d","M4 6h16M4 12h16M4 18h16"],[1,"flex","ml-6","xl:ml-0"],["routerLink","/",1,"flex","cursor-pointer","items-center","flex-shrink-0"],["src","../../../../assets/images/logoicon.svg",1,"block","w-auto","h-8","lg:hidden"],["routerLink","/",1,"logo","hidden","w-auto","h-8","lg:block",3,"ngClass"],[1,"flex-1","hidden","max-w-xs","ml-40","mr-auto","lg:block"],["for","",1,"sr-only"],[1,"relative"],[1,"absolute","inset-y-0","left-0","flex","items-center","pl-3","pointer-events-none"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","2",1,"w-5","h-5","text-gray-400"],["stroke-linecap","round","stroke-linejoin","round","d","M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"],["type","search","name","","id","","placeholder","Type to search",1,"block","w-full","py-2","pl-10","border","border-gray-300","rounded-lg","focus:ring-indigo-600","focus:border-indigo-600","sm:text-sm"],[1,"flex","flex-1","dark:bg-neutral-900"],[1,"sidebar","hidden","xl:flex","xl:w-64","xl:flex-col",3,"ngClass"],[1,"flex","flex-col","pt-5","overflow-y-auto"],[1,"flex","flex-col","justify-between","flex-1","h-full","px-4"],[1,"space-y-4"],[1,"flex-1","space-y-1"],["routerLink","/admin-portal",1,"flex","items-center","px-4","py-2.5","text-sm","font-medium","transition-all","duration-200","text-gray-900","dark:text-white","rounded-lg","hover:bg-gray-200","dark:hover:bg-gray-600","group",3,"routerLinkActive","routerLinkActiveOptions"],[1,"px-4","text-xs","font-semibold","tracking-widest","text-gray-400","uppercase"],[1,"flex-1","mt-4","space-y-1"],[1,"flex","cursor-pointer","items-center","px-4","py-2.5","text-sm","font-medium","transition-all","duration-200","text-gray-900","dark:text-white","rounded-lg","hover:bg-gray-200","dark:hover:bg-gray-600","group",3,"click"],["routerLink","/admin-portal/tickets",1,"flex","items-center","px-4","py-2.5","text-sm","font-medium","transition-all","duration-200","text-gray-900","dark:text-white","rounded-lg","hover:bg-gray-200","dark:hover:bg-gray-600","group",3,"routerLinkActive"],[1,"text-xs","uppercase","ml-auto","font-semibold","text-white","bg-gray-500","rounded-full","inline-flex","items-center","px-2","py-0.5"],["routerLink","/admin-portal/register-user",1,"flex","items-center","px-4","py-2.5","text-sm","font-medium","transition-all","duration-200","text-gray-900","dark:text-white","rounded-lg","hover:bg-gray-200","dark:hover:bg-gray-600","group",3,"routerLinkActive"],["routerLink","/admin-portal/edit-user",1,"flex","items-center","px-4","py-2.5","text-sm","font-medium","transition-all","duration-200","text-gray-900","dark:text-white","rounded-lg","hover:bg-gray-200","dark:hover:bg-gray-600","group",3,"routerLinkActive"],["routerLink","/admin-portal/sales-report",1,"flex","items-center","px-4","py-2.5","text-sm","font-medium","transition-all","duration-200","text-gray-900","dark:text-white","rounded-lg","hover:bg-gray-200","dark:hover:bg-gray-600","group",3,"routerLinkActive"],[1,"pb-4","mt-12"],[1,"flex","cursor-pointer","mb-6","items-center","px-4","py-2.5","text-sm","font-medium","transition-all","duration-200","text-gray-900","dark:text-white","rounded-lg","hover:bg-gray-200","dark:hover:bg-gray-600","group",3,"click"],["optionLabel","icon",3,"ngModelChange","onOptionClick","options","ngModel"],[1,"content-container","flex","flex-col","flex-1","overflow-x-hidden",3,"ngClass"]],template:function(a,n){if(a&1){let u=O();t(0,"body",1)(1,"div",2)(2,"header",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"button",7),g("click",function(){return p(u),c(n.isSidebarOpen=!n.isSidebarOpen)}),M(),t(7,"svg",8),d(8,"path",9),i()()(),S(),t(9,"div",10)(10,"div",11),d(11,"img",12)(12,"img",13),i()(),t(13,"div",14)(14,"label",15),o(15," Search "),i(),t(16,"div",16)(17,"div",17),M(),t(18,"svg",18),d(19,"path",19),i()(),S(),d(20,"input",20),i()()()()(),t(21,"div",21)(22,"div",22)(23,"div",23)(24,"div",24)(25,"div",25)(26,"nav",26)(27,"a",27),o(28," Dashboard "),i()(),t(29,"div")(30,"p",28),o(31," Analytics "),i(),t(32,"nav",29)(33,"a",30),g("click",function(){return p(u),c(n.openAnalytics())}),o(34," Google Analytics "),i()()(),t(35,"div")(36,"p",28),o(37," Support "),i(),t(38,"nav",29)(39,"a",31),o(40," Tickets "),t(41,"span",32),o(42),i()(),t(43,"a",33),o(44," Register User "),i(),t(45,"a",34),o(46," Edit User "),i()()(),t(47,"div")(48,"p",28),o(49," Shop "),i(),t(50,"nav",29)(51,"a",35),o(52," Sales Reports "),i()()()(),t(53,"div",36)(54,"nav",26)(55,"a",37),g("click",function(){return p(u),c(n.logout())}),o(56," Logout "),i(),t(57,"p-selectButton",38),j("ngModelChange",function(C){return p(u),T(n.value,C)||(n.value=C),c(C)}),g("onOptionClick",function(){return p(u),c(n.themeSelect())}),A(58,ee,1,2,"ng-template",null,0,F),i()()()()()(),t(60,"div",39),d(61,"router-outlet"),i()()()()}a&2&&(r(12),l("ngClass",b(12,Z,n.darkModeService.isDarkMode())),r(10),l("ngClass",b(14,q,n.isSidebarOpen)),r(5),l("routerLinkActive",m(16,f))("routerLinkActiveOptions",m(17,$)),r(12),l("routerLinkActive",m(18,f)),r(3),P(" ",n.ticketCount," "),r(),l("routerLinkActive",m(19,f)),r(2),l("routerLinkActive",m(20,f)),r(6),l("routerLinkActive",m(21,f)),r(6),l("options",n.justifyOptions),E("ngModel",n.value),r(3),l("ngClass",b(22,q,n.isSidebarOpen)))},dependencies:[V,D,B,I,w,U,W],styles:['body[_ngcontent-%COMP%]{min-height:100vh}.logo[_ngcontent-%COMP%]{content:url("./media/yourlogo-AVMIL2FY.svg");height:25px}.dark-mode[_ngcontent-%COMP%]{content:url("./media/yourlogodark-YRMWDLTY.svg")!important}.transition-width[_ngcontent-%COMP%]{transition:width .3s ease-in-out}@media (max-width: 768px){.sidebar[_ngcontent-%COMP%]{width:0;padding:0;border:none;transition:width .3s ease;height:100vh}.sidebar.open[_ngcontent-%COMP%]{display:grid;padding:1rem;width:100vw}.content-container.open[_ngcontent-%COMP%]{width:0}.content-container[_ngcontent-%COMP%]{width:100%}}']})}}return e})();var te=[{path:"",component:K,children:[{path:"",loadComponent:()=>import("./chunk-HCEF3Y7A.js").then(e=>e.DashboardComponent)},{path:"tickets",loadComponent:()=>import("./chunk-GJDEUFBK.js").then(e=>e.TicketComponent)},{path:"register-user",loadComponent:()=>import("./chunk-E27A3K6L.js").then(e=>e.RegisterUserComponent)},{path:"edit-user",loadComponent:()=>import("./chunk-UKAQA56D.js").then(e=>e.EditUserComponent)},{path:"sales-report",loadComponent:()=>import("./chunk-QMNQDBJV.js").then(e=>e.SalesReportComponent)}]}],Q=(()=>{class e{static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275mod=y({type:e})}static{this.\u0275inj=x({imports:[h.forChild(te),h]})}}return e})();var be=(()=>{class e{static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275mod=y({type:e})}static{this.\u0275inj=x({imports:[R,h,Q,w,G]})}}return e})();export{be as AdminPortalModule};
