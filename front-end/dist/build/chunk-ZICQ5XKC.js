import{a as M}from"./chunk-527CQSJ3.js";import{a as P}from"./chunk-NTJQJCQI.js";import"./chunk-U6HSTW4V.js";import{a as T,c as N}from"./chunk-IZXNLNMV.js";import"./chunk-I22SW7EJ.js";import"./chunk-HU2YZ2DC.js";import{d as u,f as C,g as k,i as I,j as _,k as F,p as D,r as R}from"./chunk-FRW3667Z.js";import"./chunk-MWKCO5LE.js";import"./chunk-EVW2LFY5.js";import"./chunk-GSLSRBMZ.js";import"./chunk-ETXXSDLS.js";import"./chunk-JCVGH3QK.js";import"./chunk-U7NA52XG.js";import"./chunk-BRYWZKMQ.js";import"./chunk-U3QUSVWF.js";import{l as S,m as b,q as w,r as E}from"./chunk-GHBBNMAF.js";import{Cb as t,Db as e,Eb as x,Mb as g,Nb as v,Sa as n,Ta as p,Xb as i,Zb as m,bb as f,hb as c,jc as y,kc as h,tb as d}from"./chunk-A6EP6ZMT.js";function G(o,s){if(o&1&&(t(0,"div")(1,"p",16),i(2," Total Sales "),e(),t(3,"p",17),i(4),y(5,"currency"),e()()),o&2){let r=v();n(4),m(" ",h(5,1,r.periodTotal())," ")}}function O(o,s){if(o&1&&(t(0,"tr")(1,"td",18),i(2),e(),t(3,"td",19),i(4),e(),t(5,"td",19),i(6),e(),t(7,"td",19),i(8),e(),t(9,"td",19),i(10),e()()),o&2){let r=s.$implicit;n(2),m(" ",r.Id," "),n(2),m(" ",r.Date," "),n(2),m(" ",r.Customer," "),n(2),m(" ",r.Item," "),n(2),m(" ",r.Price," ")}}function j(o,s){o&1&&(t(0,"tr")(1,"td",20),i(2," Nothing to show. "),e()())}var L=(()=>{class o{constructor(r,a,l){this.fb=r,this.reportService=a,this.busyService=l,this.sales=[]}ngOnInit(){this.periodForm=this.fb.group({startDate:["",u.required],endDate:["",u.required]})}periodTotal(){let r=0;for(let a=0;a<this.sales.length;a++)this.sales[a].Price&&(r+=this.sales[a].Price);return r}onSubmit(){this.busyService.busy(),this.reportService.getSalesReport(this.periodForm.value).subscribe(r=>{this.sales=r,this.busyService.idle()})}static{this.\u0275fac=function(a){return new(a||o)(p(D),p(M),p(P))}}static{this.\u0275cmp=f({type:o,selectors:[["app-sales-report"]],decls:35,vars:13,consts:[[1,"bg-gray-50","dark:bg-neutral-900","w-screen","md:w-full","lg:w-full"],[1,"py-6"],[1,"px-4","mx-auto","sm:px-6","md:px-8"],[1,"max-w-md"],[1,"text-lg","font-bold","text-gray-900","dark:text-white"],[1,"px-4","mx-auto","mt-8","sm:px-6","md:px-8"],[1,"flex","gap-4","mb-6",3,"formGroup"],[1,"block","text-sm","mb-2","font-medium","text-gray-900","dark:text-white","sm:mt-px","sm:pt-2"],[3,"type","formControl","placeholder","label"],[1,"inline-flex","h-fit","self-end","items-center","justify-center","px-5","py-4","text-sm","font-semibold","leading-4","text-white","transition-all","duration-200","bg-indigo-600","border","border-transparent","rounded-md","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-indigo-600","hover:bg-indigo-500",3,"click","disabled"],[4,"ngIf"],[1,"min-w-full","divide-y","divide-gray-200","dark:divide-neutral-900"],[1,"bg-gray-50","dark:bg-neutral-600"],["scope","col",1,"px-6","py-3","text-left","text-xs","font-medium","text-gray-500","dark:text-gray-300","uppercase","tracking-wider"],[1,"bg-white","dark:bg-neutral-900","divide-y","divide-gray-200","dark:divide-neutral-900"],[4,"ngFor","ngForOf"],[1,"text-sm","w-fit","font-medium","mb-1","border-b","text-gray-900","dark:text-white","lg:order-1"],[1,"text-xl","mb-2","font-bold","text-gray-900","dark:text-white"],[1,"px-6","py-4","whitespace-nowrap","text-sm","font-medium","text-gray-900","dark:text-white"],[1,"px-6","py-4","whitespace-nowrap","text-sm","text-gray-500","dark:text-gray-300"],["colspan","5",1,"px-6","py-4","whitespace-nowrap","text-sm","text-gray-500","dark:text-gray-300","text-center"]],template:function(a,l){a&1&&(t(0,"main",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),i(5," Sales Report "),e()()(),t(6,"div",5)(7,"form",6)(8,"div")(9,"p",7),i(10," Start Date "),e(),x(11,"app-text-input",8),e(),t(12,"div")(13,"p",7),i(14," End Date "),e(),x(15,"app-text-input",8),e(),t(16,"button",9),g("click",function(){return l.periodForm.valid&&l.onSubmit()}),i(17," Generate Report "),e()(),c(18,G,6,3,"div",10),t(19,"table",11)(20,"thead",12)(21,"tr")(22,"th",13),i(23," ID "),e(),t(24,"th",13),i(25," Purchase Date "),e(),t(26,"th",13),i(27," Customer "),e(),t(28,"th",13),i(29," Item "),e(),t(30,"th",13),i(31," Price "),e()()(),t(32,"tbody",14),c(33,O,11,5,"tr",15)(34,j,3,0,"tr",10),e()()()()()),a&2&&(n(7),d("formGroup",l.periodForm),n(4),d("type","date")("formControl",l.periodForm.get("startDate"))("placeholder","Start Date")("label","start date"),n(4),d("type","date")("formControl",l.periodForm.get("endDate"))("placeholder","End Date")("label","end date"),n(),d("disabled",!l.periodForm.valid),n(2),d("ngIf",l.sales.length>0),n(15),d("ngForOf",l.sales),n(),d("ngIf",l.sales.length===0))},dependencies:[R,I,C,k,_,F,E,S,b,w,N,T],styles:["*[_ngcontent-%COMP%]{-webkit-user-select:text;user-select:text}"]})}}return o})();export{L as SalesReportComponent};
