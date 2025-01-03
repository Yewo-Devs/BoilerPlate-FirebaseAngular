import{a as w}from"./chunk-IVTGGX4A.js";import{a as q}from"./chunk-YYT5C7JF.js";import{a as J}from"./chunk-AWZ7B46G.js";import"./chunk-YZIVIYTJ.js";import{f as z,h as G,q as Y}from"./chunk-DSHMKTRR.js";import"./chunk-ZEON36AT.js";import"./chunk-2MHBVPJL.js";import{f as H}from"./chunk-WA6TNNBG.js";import{k as N,m as B,n as U,q as v}from"./chunk-W5MTSLKP.js";import"./chunk-G6VSAEU6.js";import{a as W}from"./chunk-5BAP7SGT.js";import"./chunk-JRLU6R7W.js";import{k as R,r as I}from"./chunk-VUEJJNO2.js";import{Db as i,Eb as n,Fb as g,Jb as T,Nb as m,Ta as s,Ua as x,V as h,Yb as r,_b as V,ac as E,bc as j,cb as L,cc as D,db as y,ec as f,fc as b,ha as a,ia as l,ib as O,ja as M,ka as A,nc as F,ub as c,yb as P}from"./chunk-XMVMWOPN.js";var Z=e=>({"dark-mode":e}),K=e=>({open:e}),k=()=>["text-white","bg-indigo-700"],$=()=>({exact:!0});function ee(e,p){if(e&1&&g(0,"i"),e&2){let o=p.$implicit;P(o.icon)}}var _=class e{constructor(p,o,t){this.darkModeService=p;this.accountService=o;this.ticketService=t;this.value=p.isDarkMode()?{icon:"pi pi-moon",value:"Dark Mode"}:{icon:"pi pi-sun",value:"Light Mode"}}isSidebarOpen=!1;value={};justifyOptions=[{icon:"pi pi-sun",value:"Light Mode"},{icon:"pi pi-moon",value:"Dark Mode"}];googleAnalyticsUrl=W.googleAnalyticsUrl;ticketCount=0;ngOnInit(){this.ticketService.getTicketCount().subscribe(p=>{this.ticketCount=p})}themeSelect(){this.value.value==="Light Mode"?this.darkModeService.setLightTheme():this.darkModeService.setDarkTheme()}openAnalytics(){window.open(this.googleAnalyticsUrl,"_blank")}logout(){this.accountService.logout()}static \u0275fac=function(o){return new(o||e)(x(q),x(H),x(J))};static \u0275cmp=L({type:e,selectors:[["app-admin-portal"]],standalone:!1,decls:62,vars:24,consts:[["item",""],[1,"dark:bg-neutral-900"],[1,"flex","flex-col"],[1,"bg-white","border-b","border-gray-200","dark:bg-neutral-900","dark:border-neutral-600"],[1,"px-4","mx-auto"],[1,"flex","items-center","justify-between","h-16"],[1,"flex","items-center","-m-2","xl:hidden"],["type","button",1,"inline-flex","items-center","justify-center","p-2","text-gray-400","bg-white","dark:bg-neutral-600","rounded-lg","hover:text-gray-500","hover:bg-gray-100","dark:hover:bg-neutral-600","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-indigo-600",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","2",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","d","M4 6h16M4 12h16M4 18h16"],[1,"flex","ml-6","xl:ml-0"],["routerLink","/",1,"flex","cursor-pointer","items-center","flex-shrink-0"],["loading","lazy","src","../../../../assets/images/logoicon.svg",1,"block","w-auto","h-8","lg:hidden"],["loading","lazy","routerLink","/",1,"logo","hidden","w-auto","h-8","lg:block",3,"ngClass"],[1,"flex-1","hidden","max-w-xs","ml-40","mr-auto","lg:block"],["for","",1,"sr-only"],[1,"relative"],[1,"absolute","inset-y-0","left-0","flex","items-center","pl-3","pointer-events-none"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","2",1,"w-5","h-5","text-gray-400"],["stroke-linecap","round","stroke-linejoin","round","d","M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"],["type","search","name","","id","","placeholder","Type to search",1,"block","w-full","py-2","pl-10","border","border-gray-300","rounded-lg","focus:ring-indigo-600","focus:border-indigo-600","sm:text-sm"],[1,"flex","flex-1","dark:bg-neutral-900"],[1,"sidebar","hidden","xl:flex","xl:w-64","xl:flex-col",3,"ngClass"],[1,"flex","flex-col","pt-5","overflow-y-auto"],[1,"flex","flex-col","justify-between","flex-1","h-full","px-4"],[1,"space-y-4"],[1,"flex-1","space-y-1"],["routerLink","/admin-portal",1,"flex","items-center","px-4","py-2.5","text-sm","font-medium","transition-all","duration-200","text-gray-900","dark:text-white","rounded-lg","hover:bg-gray-200","dark:hover:bg-gray-600","group",3,"click","routerLinkActive","routerLinkActiveOptions"],[1,"px-4","text-xs","font-semibold","tracking-widest","text-gray-400","uppercase"],[1,"flex-1","mt-4","space-y-1"],[1,"flex","cursor-pointer","items-center","px-4","py-2.5","text-sm","font-medium","transition-all","duration-200","text-gray-900","dark:text-white","rounded-lg","hover:bg-gray-200","dark:hover:bg-gray-600","group",3,"click"],["routerLink","/admin-portal/tickets",1,"flex","items-center","px-4","py-2.5","text-sm","font-medium","transition-all","duration-200","text-gray-900","dark:text-white","rounded-lg","hover:bg-gray-200","dark:hover:bg-gray-600","group",3,"click","routerLinkActive"],[1,"text-xs","uppercase","ml-auto","font-semibold","text-white","bg-gray-500","rounded-full","inline-flex","items-center","px-2","py-0.5"],["routerLink","/admin-portal/register-user",1,"flex","items-center","px-4","py-2.5","text-sm","font-medium","transition-all","duration-200","text-gray-900","dark:text-white","rounded-lg","hover:bg-gray-200","dark:hover:bg-gray-600","group",3,"click","routerLinkActive"],["routerLink","/admin-portal/edit-user",1,"flex","items-center","px-4","py-2.5","text-sm","font-medium","transition-all","duration-200","text-gray-900","dark:text-white","rounded-lg","hover:bg-gray-200","dark:hover:bg-gray-600","group",3,"click","routerLinkActive"],["routerLink","/admin-portal/sales-report",1,"flex","items-center","px-4","py-2.5","text-sm","font-medium","transition-all","duration-200","text-gray-900","dark:text-white","rounded-lg","hover:bg-gray-200","dark:hover:bg-gray-600","group",3,"click","routerLinkActive"],[1,"pb-4","mt-12"],[1,"flex","cursor-pointer","mb-6","items-center","px-4","py-2.5","text-sm","font-medium","transition-all","duration-200","text-gray-900","dark:text-white","rounded-lg","hover:bg-gray-200","dark:hover:bg-gray-600","group",3,"click"],["optionLabel","icon",3,"ngModelChange","onOptionClick","options","ngModel"],[1,"content-container","flex","flex-col","flex-1","overflow-x-hidden",3,"ngClass"]],template:function(o,t){if(o&1){let d=T();i(0,"body",1)(1,"div",2)(2,"header",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"button",7),m("click",function(){return a(d),l(t.isSidebarOpen=!t.isSidebarOpen)}),M(),i(7,"svg",8),g(8,"path",9),n()()(),A(),i(9,"div",10)(10,"div",11),g(11,"img",12)(12,"img",13),n()(),i(13,"div",14)(14,"label",15),r(15," Search "),n(),i(16,"div",16)(17,"div",17),M(),i(18,"svg",18),g(19,"path",19),n()(),A(),g(20,"input",20),n()()()()(),i(21,"div",21)(22,"div",22)(23,"div",23)(24,"div",24)(25,"div",25)(26,"nav",26)(27,"a",27),m("click",function(){return a(d),l(t.isSidebarOpen=!1)}),r(28," Dashboard "),n()(),i(29,"div")(30,"p",28),r(31," Analytics "),n(),i(32,"nav",29)(33,"a",30),m("click",function(){return a(d),t.openAnalytics(),l(t.isSidebarOpen=!1)}),r(34," Google Analytics "),n()()(),i(35,"div")(36,"p",28),r(37," Support "),n(),i(38,"nav",29)(39,"a",31),m("click",function(){return a(d),l(t.isSidebarOpen=!1)}),r(40," Tickets "),i(41,"span",32),r(42),n()(),i(43,"a",33),m("click",function(){return a(d),l(t.isSidebarOpen=!1)}),r(44," Register User "),n(),i(45,"a",34),m("click",function(){return a(d),l(t.isSidebarOpen=!1)}),r(46," Edit User "),n()()(),i(47,"div")(48,"p",28),r(49," Shop "),n(),i(50,"nav",29)(51,"a",35),m("click",function(){return a(d),l(t.isSidebarOpen=!1)}),r(52," Sales Reports "),n()()()(),i(53,"div",36)(54,"nav",26)(55,"a",37),m("click",function(){return a(d),l(t.logout())}),r(56," Logout "),n(),i(57,"p-selectButton",38),D("ngModelChange",function(S){return a(d),j(t.value,S)||(t.value=S),l(S)}),m("onOptionClick",function(){return a(d),l(t.themeSelect())}),O(58,ee,1,2,"ng-template",null,0,F),n()()()()()(),i(60,"div",39),g(61,"router-outlet"),n()()()()}o&2&&(s(12),c("ngClass",b(12,Z,t.darkModeService.isDarkMode())),s(10),c("ngClass",b(14,K,t.isSidebarOpen)),s(5),c("routerLinkActive",f(16,k))("routerLinkActiveOptions",f(17,$)),s(12),c("routerLinkActive",f(18,k)),s(3),V(" ",t.ticketCount," "),s(),c("routerLinkActive",f(19,k)),s(2),c("routerLinkActive",f(20,k)),s(6),c("routerLinkActive",f(21,k)),s(6),c("options",t.justifyOptions),E("ngModel",t.value),s(3),c("ngClass",b(22,K,t.isSidebarOpen)))},dependencies:[R,N,B,U,w,z,G],styles:['body[_ngcontent-%COMP%]{min-height:100vh}.logo[_ngcontent-%COMP%]{content:url("https://cdn.apex-offers.com/media/yourlogo-AVMIL2FY.svg");height:25px}.dark-mode[_ngcontent-%COMP%]{content:url("https://cdn.apex-offers.com/media/yourlogodark-YRMWDLTY.svg")!important}.transition-width[_ngcontent-%COMP%]{transition:width .3s ease-in-out}@media (max-width: 768px){.sidebar[_ngcontent-%COMP%]{width:0;padding:0;border:none;transition:width .3s ease;height:100vh}.sidebar.open[_ngcontent-%COMP%]{display:grid;padding:1rem;width:100vw}.content-container.open[_ngcontent-%COMP%]{width:0}.content-container[_ngcontent-%COMP%]{width:100%}}']})};var te=[{path:"",component:_,children:[{path:"",loadComponent:()=>import("./chunk-LBYHTW7Z.js").then(e=>e.DashboardComponent)},{path:"tickets",loadComponent:()=>import("./chunk-PBDQZHKN.js").then(e=>e.TicketComponent)},{path:"register-user",loadComponent:()=>import("./chunk-ALR6LEZ7.js").then(e=>e.RegisterUserComponent)},{path:"edit-user",loadComponent:()=>import("./chunk-QYRXE4HL.js").then(e=>e.EditUserComponent)},{path:"sales-report",loadComponent:()=>import("./chunk-7O35CNJM.js").then(e=>e.SalesReportComponent)}]}],C=class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=y({type:e});static \u0275inj=h({imports:[v.forChild(te),v]})};var X=class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=y({type:e});static \u0275inj=h({imports:[I,v,C,w,Y]})};export{X as AdminPortalModule};
