import{a as w}from"./chunk-5J7PQTHF.js";import"./chunk-U7NA52XG.js";import"./chunk-JRLU6R7W.js";import{l as C,m as h,p as S,r as I}from"./chunk-VUEJJNO2.js";import{Db as o,Eb as n,Gb as x,Hb as f,Jb as _,Nb as y,Ob as p,Ta as r,Ua as u,Yb as a,_b as c,cb as k,ha as g,ia as v,ib as s,kc as b,mc as T,ub as d}from"./chunk-XMVMWOPN.js";function O(e,i){if(e&1){let t=_();x(0),o(1,"div",9)(2,"div",10)(3,"p",11),a(4),n(),o(5,"p",12),a(6),n(),o(7,"p",13),a(8),b(9,"date"),n(),o(10,"p",13),a(11),n(),o(12,"p",14),a(13),n(),o(14,"div",15)(15,"button",16),y("click",function(){g(t);let l=p().$implicit,D=p(2);return v(D.onResolve(l))}),a(16," Mark as Resolved "),n()()()(),f()}if(e&2){let t=p().$implicit;r(4),c(" ",t.title," "),r(2),c(" ",t.description," "),r(2),c(" ",T(9,5,t.createdDate,"dd MMM yyyy, h:mm a")," "),r(3),c(" Created by : ",t.createdBy," "),r(2),c(" Priority : ",t.priority," ")}}function M(e,i){if(e&1&&(x(0),s(1,O,17,8,"ng-container",8),f()),e&2){let t=i.$implicit;r(),d("ngIf",!t.archived)}}function F(e,i){if(e&1&&(o(0,"div",6),s(1,M,2,1,"ng-container",7),n()),e&2){let t=p();r(),d("ngForOf",t.tickets)}}function N(e,i){e&1&&(o(0,"div",6)(1,"p",17),a(2,"Nothing to show"),n()())}var E=class e{constructor(i){this.ticketService=i}tickets=[];ngOnInit(){this.ticketService.getTickets().subscribe(i=>{this.tickets=i.sort((t,m)=>{let l=["High","Medium","Low"];return l.indexOf(t.priority)-l.indexOf(m.priority)})})}onResolve(i){i.archived=!0,this.ticketService.archiveTicket(i.id).subscribe(t=>{window.location.reload()})}static \u0275fac=function(t){return new(t||e)(u(w))};static \u0275cmp=k({type:e,selectors:[["app-ticket"]],decls:8,vars:2,consts:[[1,"bg-gray-50","dark:bg-neutral-900","w-screen","md:w-full","lg:w-full"],[1,"py-6"],[1,"px-4","mx-auto","sm:px-6","md:px-8"],[1,"max-w-md"],[1,"text-lg","font-bold","text-gray-900","dark:text-white"],["class","px-4 mx-auto mt-8 sm:px-6 md:px-8",4,"ngIf"],[1,"px-4","mx-auto","mt-8","sm:px-6","md:px-8"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"mt-4","bg-transparent","border-b","dark:border-neutral-600"],[1,"px-4","py-5","sm:p-6"],[1,"text-base","capitalize","font-bold","text-gray-900","dark:text-white"],[1,"mt-2","text-sm","font-medium","text-gray-500","dark:text-gray-600"],[1,"mt-2","text-sm","font-medium","text-gray-500"],[1,"mt-2","text-sm","font-bold","text-gray-500"],[1,"flex","gap-2","mt-4"],[1,"inline-flex","items-center","justify-center","px-4","py-2","text-sm","font-semibold","leading-5","text-gray-600","transition-all","duration-200","bg-transparent","border","border-gray-300","rounded-md","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-gray-500","hover:bg-gray-50","hover:text-gray-900",3,"click"],[1,"font-medium","text-gray-500","text-muted"]],template:function(t,m){t&1&&(o(0,"main",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),a(5,"Tickets"),n()()(),s(6,F,2,1,"div",5)(7,N,3,0,"div",5),n()()),t&2&&(r(6),d("ngIf",m.tickets.length>0),r(),d("ngIf",!(m.tickets.length>0)))},dependencies:[I,C,h,S],encapsulation:2})};export{E as TicketComponent};
