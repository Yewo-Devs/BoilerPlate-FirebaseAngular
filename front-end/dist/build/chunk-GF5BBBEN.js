import{a as T}from"./chunk-2MG3GRLQ.js";import{a as E}from"./chunk-TPI4TS65.js";import"./chunk-TWQDPD4B.js";import"./chunk-MOHHWKAW.js";import{l as w,m as N,r as k,t as I}from"./chunk-XB25HVPP.js";import{Bb as b,Cb as h,Eb as _,Ib as v,Jb as m,Oa as r,Pa as u,Tb as a,Vb as d,Za as y,da as g,db as f,ea as x,ic as C,kc as S,pb as s,yb as n,zb as o}from"./chunk-KK5ZIUJ6.js";import"./chunk-4CLCTAJ7.js";function D(e,l){if(e&1){let t=_();n(0,"button",16),v("click",function(){g(t);let c=m().$implicit,p=m(2);return x(p.onAction(c.actionUrl))}),a(1," Action "),o()}}function M(e,l){if(e&1){let t=_();b(0),n(1,"div",8)(2,"div",9)(3,"p",10),a(4),o(),n(5,"p",11),a(6),o(),n(7,"p",12),a(8),C(9,"date"),o(),n(10,"div",13),f(11,D,2,0,"button",14),n(12,"button",15),v("click",function(){let c=g(t).$implicit,p=m(2);return x(p.onDelete(c))}),a(13," Delete "),o()()()(),h()}if(e&2){let t=l.$implicit;r(4),d(" ",t.title," "),r(2),d(" ",t.message," "),r(2),d(" ",S(9,4,t.dateTime,"dd MMM yyyy, h:mm a")," "),r(3),s("ngIf",t.actionUrl)}}function V(e,l){if(e&1&&(n(0,"div",6),f(1,M,14,7,"ng-container",7),o()),e&2){let t=m();r(),s("ngForOf",t.notifications)}}function j(e,l){e&1&&(n(0,"div",6)(1,"p",17),a(2,"Nothing to show"),o()())}var U=(()=>{class e{constructor(t,i){this.notificationService=t,this.preferencesService=i,this.notifications=[]}ngOnInit(){let t=this.preferencesService.getPreferences().user;this.notificationService.getNotifications(t.id).subscribe(i=>{this.notifications=i})}onAction(t){window.open(t,"_self")}onDelete(t){t.archived=!0,this.notificationService.archiveNotification(t.id).subscribe()}static{this.\u0275fac=function(i){return new(i||e)(u(T),u(E))}}static{this.\u0275cmp=y({type:e,selectors:[["app-notifications"]],decls:8,vars:2,consts:[[1,"bg-gray-50","dark:bg-neutral-900","w-screen","md:w-full","lg:w-full"],[1,"py-6"],[1,"px-4","mx-auto","sm:px-6","md:px-8"],[1,"max-w-md"],[1,"text-lg","font-bold","text-gray-900","dark:text-white"],["class","px-4 mx-auto mt-8 sm:px-6 md:px-8",4,"ngIf"],[1,"px-4","mx-auto","mt-8","sm:px-6","md:px-8"],[4,"ngFor","ngForOf"],[1,"mt-4","bg-transparent","border-b","dark:border-neutral-600"],[1,"px-4","py-5","sm:p-6"],[1,"text-base","capitalize","font-bold","text-gray-900","dark:text-white"],[1,"mt-2","text-sm","font-medium","text-gray-500","dark:text-gray-600"],[1,"mt-2","text-sm","font-medium","text-gray-500"],[1,"flex","gap-2","mt-4"],["class","inline-flex items-center justify-center px-4 py-2 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900",3,"click",4,"ngIf"],[1,"inline-flex","items-center","justify-center","px-4","py-2","text-sm","font-semibold","leading-5","text-gray-600","transition-all","duration-200","bg-transparent","rounded-md","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-gray-500","hover:bg-gray-50","hover:text-gray-900",3,"click"],[1,"inline-flex","items-center","justify-center","px-4","py-2","text-sm","font-semibold","leading-5","text-gray-600","transition-all","duration-200","bg-transparent","border","border-gray-300","rounded-md","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-gray-500","hover:bg-gray-50","hover:text-gray-900",3,"click"],[1,"font-medium","text-gray-500","text-muted"]],template:function(i,c){i&1&&(n(0,"main",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),a(5," Notifications "),o()()(),f(6,V,2,1,"div",5)(7,j,3,0,"div",5),o()()),i&2&&(r(6),s("ngIf",c.notifications.length>0),r(),s("ngIf",!(c.notifications.length>0)))},dependencies:[I,w,N,k],encapsulation:2})}}return e})();export{U as NotificationsComponent};
