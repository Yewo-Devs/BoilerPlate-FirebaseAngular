import{a as O}from"./chunk-GF5BCOQ4.js";import{a as N}from"./chunk-UZCAFMJX.js";import{a as F}from"./chunk-PIAC254L.js";import"./chunk-PND7Q2S5.js";import{a as D}from"./chunk-HOHR253E.js";import"./chunk-U3QUSVWF.js";import{m as T,q as P}from"./chunk-W5MTSLKP.js";import{a as j}from"./chunk-G6VSAEU6.js";import"./chunk-5BAP7SGT.js";import"./chunk-JRLU6R7W.js";import{l as C,m as I,p as k,q as M,r as B}from"./chunk-VUEJJNO2.js";import{$b as u,Db as e,Eb as t,Fb as l,Gb as _,Hb as E,Nb as v,Ob as x,Ta as a,Ua as p,Yb as i,Zb as S,_b as f,cb as w,ib as y,ja as c,kc as m,lc as b,mc as g,ub as d}from"./chunk-XMVMWOPN.js";function V(o,r){if(o&1&&(e(0,"div",35)(1,"p",36),i(2," Your next payment is "),e(3,"span",37),i(4),m(5,"currency"),t(),i(6,", to be charged on "),e(7,"span",37),i(8),m(9,"date"),t()(),e(10,"p",38),i(11," Your payment will be automatically renewed "),t()()),o&2){let n=x();a(4),u("",b(5,3,n.subscription.price)," ",n.subscription.currency,""),a(4),S(g(9,5,n.subscription.expiryDate,"MMMM dd, yyyy"))}}function L(o,r){if(o&1&&(e(0,"td",45),i(1),m(2,"currency"),e(3,"div",46),c(),e(4,"svg",47),l(5,"circle",48),t(),i(6," Failed "),t()()),o&2){let n=x().$implicit;a(),u(" ",b(2,2,n.amount)," ",n.currency," ")}}function $(o,r){o&1&&(e(0,"td",42)(1,"div",49),c(),e(2,"svg",47),l(3,"circle",48),t(),i(4," Failed "),t()())}function z(o,r){if(o&1&&(e(0,"td",45),i(1),m(2,"currency"),e(3,"div",46),c(),e(4,"svg",50),l(5,"circle",48),t(),i(6," Complete "),t()()),o&2){let n=x().$implicit;a(),u(" ",b(2,2,n.amount)," ",n.currency," ")}}function R(o,r){o&1&&(e(0,"td",42)(1,"div",49),c(),e(2,"svg",50),l(3,"circle",48),t(),i(4," Complete "),t()())}function Y(o,r){if(o&1&&(_(0),e(1,"tr")(2,"td",39),i(3),m(4,"date"),e(5,"div",40)(6,"p",41),i(7),m(8,"date"),t()()(),e(9,"td",42),i(10),m(11,"date"),t(),y(12,L,7,4,"td",43)(13,$,5,0,"td",44)(14,z,7,4,"td",43)(15,R,5,0,"td",44),t(),E()),o&2){let n=r.$implicit;a(3),u(" ",n.itemTitle," Plan - ",g(4,8,n.dateTime,"MMM yyyy")," "),a(4),f(" ",g(8,11,n.dateTime,"dd MMMM, yyyy")," "),a(3),f(" ",g(11,14,n.dateTime,"dd MMMM, yyyy")," "),a(2),d("ngIf",n.status=="Failed"),a(),d("ngIf",n.status=="Failed"),a(),d("ngIf",n.status!="Failed"),a(),d("ngIf",n.status!="Failed")}}var G=class o{constructor(r,n,s,h){this.paymentService=r;this.preferencesService=n;this.toastService=s;this.busyService=h;this.prefs=n.getPreferences()}subscription;transactions;prefs;ngOnInit(){this.getSubscription()}getSubscription(){this.busyService.busy(),this.paymentService.getSubscription(this.prefs.user.id).subscribe(r=>{this.subscription=r,this.getTransactions()},r=>{this.busyService.idle()})}pageSize=5;currentPage=1;getTransactions(){this.busyService.busy(),this.paymentService.getTransactions(this.prefs.user.id,this.currentPage,this.pageSize).subscribe(r=>{this.transactions=r,this.busyService.idle()},r=>{this.busyService.idle()})}validSubscription(){return this.subscription?this.subscription&&this.subscription.cancellationDate.toString()==="0001-01-01T00:00:00":!1}cancelSubscription(){this.busyService.busy(),this.paymentService.cancelSubscription(this.subscription.subscriptionId).subscribe(r=>{this.toastService.success("Subscription cancelled"),this.busyService.idle(),window.location.reload()},r=>{this.toastService.error("Error cancelling subscription"),this.busyService.idle()})}managePaymentMethod(){this.busyService.busy(),this.paymentService.updatePaymentMethod(this.subscription.subscriptionId).subscribe(r=>{this.busyService.idle(),window.open(r,"_self")},r=>{this.toastService.error("Error updating payment method"),this.busyService.idle()})}static \u0275fac=function(n){return new(n||o)(p(O),p(j),p(D),p(F))};static \u0275cmp=w({type:o,selectors:[["app-billing"]],decls:56,vars:7,consts:[[1,"bg-gray-50","dark:bg-neutral-900"],[1,"py-6"],[1,"px-4","mx-auto","sm:px-6","md:px-8"],[1,"max-w-md"],[1,"text-lg","font-bold","text-gray-900","dark:text-white"],[1,"mt-2","text-sm","font-medium","leading-6","text-gray-500"],[1,"px-4","mx-auto","mt-8","sm:px-6","md:px-8"],[1,"mt-8","sm:flex","sm:items-center","sm:justify-between"],[1,"text-base","font-bold","text-gray-900","dark:text-white"],[1,"text-indigo-600"],[1,"mt-1","text-sm","font-medium","text-gray-500"],[1,"mt-4","sm:mt-0"],["routerLink","/pricing",1,"inline-flex","mr-4","items-center","justify-center","px-4","py-2","text-sm","font-semibold","leading-5","text-white","transition-all","duration-200","bg-indigo-600","border","border-transparent","rounded-md","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-indigo-600","hover:bg-indigo-500",3,"disabled"],[1,"inline-flex","items-center","justify-center","px-4","py-2","text-sm","font-semibold","leading-5","text-gray-600","transition-all","duration-200","bg-transparent","border","border-gray-300","rounded-md","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-gray-500","hover:bg-gray-50","hover:text-gray-900","dark:text-white",3,"click","disabled"],[1,"mt-6","border-gray-200","dark:border-neutral-600"],["class","mt-4 sm:flex sm:items-center sm:justify-between",4,"ngIf"],[1,"mt-8","bg-white","dark:bg-transparent","border","border-gray-200","dark:border-neutral-600","dark:border-neutral-600","rounded-xl"],[1,"px-4","py-5","sm:p-6"],[1,"grid","grid-cols-1","lg:grid-cols-5","lg:gap-x-24","gap-y-8"],[1,"lg:col-span-2"],[1,"mt-2","text-sm","font-medium","text-gray-500"],[1,"lg:col-span-3"],[1,"mt-6"],[1,"inline-flex","items-center","justify-center","text-sm","font-medium","leading-5","text-gray-600","transition-all","duration-200","rounded-md","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-gray-300","hover:text-gray-900","dark:hover:text-gray-600","dark:text-white",3,"click","disabled"],[1,"pi","pi-wallet","mr-4"],[1,"mt-8"],[1,"sm:flex","sm:items-center","sm:justify-between"],[1,"flex-1","text-base","font-bold","text-gray-900","dark:text-white"],[1,"mt-6","ring-1","ring-gray-300","rounded-2xl"],[1,"min-w-full","lg:divide-y","lg:divide-gray-200","dark:divide-neutral-600"],[1,"hidden","lg:table-header-group"],["width","50%",1,"px-6","py-4","text-sm","font-medium","text-gray-400","whitespace-normal"],[1,"px-6","py-4","text-sm","font-medium","text-gray-400","whitespace-normal"],[1,"divide-y","divide-gray-200","dark:divide-neutral-600"],[4,"ngFor","ngForOf"],[1,"mt-4","sm:flex","sm:items-center","sm:justify-between"],[1,"text-sm","font-medium","text-gray-900","dark:text-white"],[1,"font-bold"],[1,"mt-2","text-sm","font-medium","text-gray-500","sm:mt-0"],["width","50%",1,"px-6","py-4","text-sm","font-bold","text-gray-900","dark:text-white","whitespace-nowrap"],[1,"mt-1","lg:hidden"],[1,"font-medium","text-gray-500"],[1,"hidden","px-6","py-4","text-sm","font-medium","text-gray-900","dark:text-white","lg:table-cell","whitespace-nowrap"],["class","px-6 py-4 text-sm font-bold text-right text-gray-900 dark:text-white lg:text-left whitespace-nowrap",4,"ngIf"],["class","hidden px-6 py-4 text-sm font-medium text-gray-900 dark:text-white lg:table-cell whitespace-nowrap",4,"ngIf"],[1,"px-6","py-4","text-sm","font-bold","text-right","text-gray-900","dark:text-white","lg:text-left","whitespace-nowrap"],[1,"flex","items-center","justify-end","mt-1","font-medium","lg:hidden"],["fill","currentColor","viewBox","0 0 8 8",1,"mr-1.5","h-2.5","w-2.5","text-red-500"],["cx","4","cy","4","r","3"],[1,"inline-flex","items-center"],["fill","currentColor","viewBox","0 0 8 8",1,"mr-1.5","h-2.5","w-2.5","text-green-500"]],template:function(n,s){n&1&&(e(0,"main",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),i(5," Settings "),t(),e(6,"p",5),i(7," Manage your billing information and payment methods. Update your subscription plan and view your transaction history. "),t()()(),e(8,"div",6),l(9,"app-nav-bread-crumb"),e(10,"div",7)(11,"div")(12,"p",8),i(13," Subscription Plan: "),e(14,"span",9),i(15),t()(),e(16,"p",10),i(17),t()(),e(18,"div",11)(19,"button",12),i(20," Change Plan "),t(),e(21,"button",13),v("click",function(){return s.cancelSubscription()}),i(22," Cancel Subscription "),t()()(),l(23,"hr",14),y(24,V,12,8,"div",15),e(25,"div",16)(26,"div",17)(27,"div",18)(28,"div",19)(29,"p",8),i(30," Payment Method "),t(),e(31,"p",20),i(32," Choose your preferred payment method for making future payments "),t()(),e(33,"div",21)(34,"div",22)(35,"button",23),v("click",function(){return s.managePaymentMethod()}),l(36,"i",24),i(37," Manage Payment Method "),t()()()()()(),e(38,"div",25)(39,"div",26)(40,"p",27),i(41," Latest Transactions "),t()(),e(42,"div",28)(43,"table",29)(44,"thead",30)(45,"tr")(46,"td",31),i(47," Invoice "),t(),e(48,"td",32),i(49," Date "),t(),e(50,"td",32),i(51," Amount "),t(),e(52,"td",32),i(53," Status "),t()()(),e(54,"tbody",33),y(55,Y,16,17,"ng-container",34),t()()()()()()()),n&2&&(a(15),S(s.validSubscription()?s.subscription.itemTitle:"None"),a(2),f(" ",s.validSubscription()?s.subscription.interval+" Plan":""," "),a(2),d("disabled",!s.validSubscription()),a(2),d("disabled",!s.validSubscription()),a(3),d("ngIf",s.validSubscription()),a(11),d("disabled",!s.validSubscription()),a(20),d("ngForOf",s.transactions))},dependencies:[N,M,k,B,C,I,P,T],encapsulation:2})};export{G as BillingComponent};