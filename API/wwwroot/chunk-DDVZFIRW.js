import{a as ue}from"./chunk-HOR3FU2G.js";import{a as Je}from"./chunk-SSQRKRAY.js";import{a as We}from"./chunk-JB4AR2V2.js";import{a as Ye}from"./chunk-APZSJRTK.js";import"./chunk-J5JZ7UON.js";import{a as Ve}from"./chunk-MAIZ6JXJ.js";import{a as ce,e as qe,g as de}from"./chunk-MHIUT2CF.js";import{a as re,c as Ne,d as je,f as ae,g as Re,h as le,i as Ae,k as ze,l as He,p as Qe,q as se,r as Ue}from"./chunk-GUU2YENF.js";import{f as Ge}from"./chunk-T7B252WK.js";import{D as te,E as N,I as oe,J as ie,P as ne}from"./chunk-DZNB6D3O.js";import{i as Be,j as Ie,k as Fe,l as Pe,o as be}from"./chunk-XWDU3J6L.js";import{a as Ke}from"./chunk-AEHWLKGT.js";import{a as $e}from"./chunk-6U5655YX.js";import"./chunk-HLDRKBUV.js";import"./chunk-U3QUSVWF.js";import{k as Z,m as Ee,o as ee,r as F}from"./chunk-ZN3S7RNM.js";import{$b as pe,Ab as Me,Bb as we,Cb as l,Db as c,Eb as u,Hb as $,Ib as G,Mb as b,Nb as f,Pa as _e,Qb as Te,Sa as a,Sb as k,T as H,Ta as v,U as w,Ub as S,V as T,Vb as M,Wb as Oe,Xb as y,Yb as q,Zb as Le,_ as Q,_a as Ce,_b as De,ac as ge,bb as L,bc as me,cb as D,cc as W,dc as V,ec as C,fb as U,fc as Y,gb as K,ha as g,hb as h,ia as m,la as O,lc as J,qa as P,sb as E,tb as s,uc as _,vb as xe,vc as X,wb as ke,xb as B,yb as I,zb as Se}from"./chunk-L2D5CQS2.js";var j=function(e){return e.LIGHT="light",e.DARK="dark",e}(j||{}),R=typeof localStorage<"u",he="theme",Xe;R&&(Xe=localStorage.getItem(he)||void 0);var Ze=(()=>{class e{constructor(){this.currentTheme=Ce(Xe)}setLightTheme(){this.currentTheme.set(j.LIGHT),this.setToLocalStorage(j.LIGHT),this.removeClassFromHtml("dark")}setDarkTheme(){this.currentTheme.set(j.DARK),this.setToLocalStorage(j.DARK),this.addClassToHtml("dark")}setSystemTheme(){this.currentTheme.set(void 0),this.removeFromLocalStorage(),this.isSystemDark()?this.addClassToHtml("dark"):this.removeClassFromHtml("dark")}addClassToHtml(t){R&&(this.removeClassFromHtml(t),document.documentElement.classList.add(t))}removeClassFromHtml(t){R&&document.documentElement.classList.remove(t)}setToLocalStorage(t){R&&localStorage.setItem(he,t)}removeFromLocalStorage(){R&&localStorage.removeItem(he)}isDarkMode(){return localStorage.getItem("theme")==="dark"}isSystemDark(){return typeof window<"u"?window.matchMedia("(prefers-color-scheme: dark)").matches:!1}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var dt=({dt:e})=>`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("togglebutton.color")};
    background: ${e("togglebutton.background")};
    border: 1px solid ${e("togglebutton.border.color")};
    padding: ${e("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
        outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    border-radius: ${e("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${e("togglebutton.font.weight")};
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${e("togglebutton.gap")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
            outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    position: absolute;
    inset-inline-start: ${e("togglebutton.content.left")};
    top: ${e("togglebutton.content.top")};
    width: calc(100% - calc(2 *  ${e("togglebutton.content.left")}));
    height: calc(100% - calc(2 *  ${e("togglebutton.content.top")}));
    border-radius: ${e("togglebutton.border.radius")};
}

.p-togglebutton.p-togglebutton-checked::before {
    background: ${e("togglebutton.content.checked.background")};
    box-shadow: ${e("togglebutton.content.checked.shadow")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${e("togglebutton.hover.background")};
    color: ${e("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${e("togglebutton.checked.background")};
    border-color: ${e("togglebutton.checked.border.color")};
    color: ${e("togglebutton.checked.color")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${e("togglebutton.focus.ring.shadow")};
    outline: ${e("togglebutton.focus.ring.width")} ${e("togglebutton.focus.ring.style")} ${e("togglebutton.focus.ring.color")};
    outline-offset: ${e("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${e("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: ${e("togglebutton.disabled.background")};
    border-color: ${e("togglebutton.disabled.border.color")};
    color: ${e("togglebutton.disabled.color")};
}

.p-togglebutton-icon {
    color: ${e("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${e("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${e("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${e("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${e("togglebutton.sm.padding")};
    font-size: ${e("togglebutton.sm.font.size")};
}

.p-togglebutton-lg {
    padding: ${e("togglebutton.lg.padding")};
    font-size: ${e("togglebutton.lg.font.size")};
}

/* For PrimeNG (iconPos) */

.p-togglebutton-icon-right {
    order: 1;
}

p-togglebutton.ng-invalid.ng-dirty > .p-togglebutton {
    border-color: ${e("togglebutton.invalid.border.color")};
}
`,ut={root:({instance:e})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":e.checked,"p-disabled":e.disabled,"p-togglebutton-sm p-inputfield-sm":e.size==="small","p-togglebutton-lg p-inputfield-lg":e.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},et=(()=>{class e extends ne{name="togglebutton";theme=dt;classes=ut;static \u0275fac=(()=>{let t;return function(o){return(t||(t=O(e)))(o||e)}})();static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var pt=["icon"],gt=["content"],ot=e=>({$implicit:e}),mt=(e,d)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":e,"p-togglebutton-icon-right":d});function bt(e,d){e&1&&$(0)}function ht(e,d){if(e&1&&u(0,"span",1),e&2){let t=f(3);B(t.checked?t.onIcon:t.offIcon),s("ngClass",Y(4,mt,t.iconPos==="left",t.iconPos==="right")),E("data-pc-section","icon")}}function ft(e,d){if(e&1&&h(0,ht,1,7,"span",3),e&2){let t=f(2);I(t.onIcon||t.offIcon?0:-1)}}function yt(e,d){e&1&&$(0)}function vt(e,d){if(e&1&&h(0,yt,1,0,"ng-container",2),e&2){let t=f(2);s("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",C(2,ot,t.checked))}}function _t(e,d){if(e&1&&(h(0,ft,1,1)(1,vt,1,4,"ng-container"),l(2,"span",1),y(3),c()),e&2){let t=f();I(t.iconTemplate?1:0),a(2),s("ngClass",t.cx("label")),E("data-pc-section","label"),a(),q(t.checked?t.hasOnLabel?t.onLabel:"\xA0":t.hasOffLabel?t.offLabel:"\xA0")}}var Ct={provide:re,useExisting:H(()=>fe),multi:!0},fe=(()=>{class e extends ce{onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;get hostClass(){return this.styleClass||""}inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new P;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=Q(et);toggle(t){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}onBlur(){this.onModelTouched()}writeValue(t){this.checked=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=O(e)))(o||e)}})();static \u0275cmp=L({type:e,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(i,o,n){if(i&1&&(k(n,pt,4),k(n,gt,4),k(n,oe,4)),i&2){let r;S(r=M())&&(o.iconTemplate=r.first),S(r=M())&&(o.contentTemplate=r.first),S(r=M())&&(o.templates=r)}},hostVars:2,hostBindings:function(i,o){i&2&&B(o.hostClass)},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",_],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",X],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",_],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[W([Ct,et]),K,U],decls:4,vars:15,consts:[["pRipple","","type","button",3,"click","ngClass","tabindex","disabled"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(i,o){i&1&&(l(0,"button",0),b("click",function(r){return o.toggle(r)}),l(1,"span",1),h(2,bt,1,0,"ng-container",2)(3,_t,4,4),c()()),i&2&&(B(o.styleClass),s("ngClass",o.cx("root"))("tabindex",o.tabindex)("disabled",o.disabled),E("aria-labelledby",o.ariaLabelledBy)("aria-pressed",o.checked)("data-p-checked",o.active)("data-p-disabled",o.disabled),a(),s("ngClass",o.cx("content")),a(),s("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",C(13,ot,o.checked)),a(),I(o.contentTemplate?-1:3))},dependencies:[qe,F,Z,ee,ie],encapsulation:2,changeDetection:0})}return e})();var kt=({dt:e})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton p-togglebutton:first-child .p-togglebutton {
    border-left-width: 1px;
    border-start-start-radius: ${e("selectbutton.border.radius")};
    border-end-start-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton p-togglebutton:last-child .p-togglebutton{
    border-start-end-radius: ${e("selectbutton.border.radius")};
    border-end-end-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${e("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,St={root:({props:e})=>["p-selectbutton p-component",{"p-invalid":e.invalid}]},it=(()=>{class e extends ne{name="selectbutton";theme=kt;classes=St;static \u0275fac=(()=>{let t;return function(o){return(t||(t=O(e)))(o||e)}})();static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var Mt=["item"],wt=(e,d)=>({$implicit:e,index:d});function Tt(e,d){e&1&&$(0)}function Ot(e,d){if(e&1&&h(0,Tt,1,0,"ng-container",3),e&2){let t=f(2),i=t.$implicit,o=t.$index,n=f();s("ngTemplateOutlet",n.itemTemplate||n._itemTemplate)("ngTemplateOutletContext",Y(2,wt,i,o))}}function Lt(e,d){e&1&&h(0,Ot,1,5,"ng-template",null,0,J)}function Dt(e,d){if(e&1){let t=G();l(0,"p-toggleButton",2),b("onChange",function(o){let n=g(t),r=n.$implicit,p=n.$index,x=f();return m(x.onOptionSelect(o,r,p))}),h(1,Lt,2,0),c()}if(e&2){let t=d.$implicit,i=f();s("autofocus",i.autofocus)("styleClass",i.styleClass)("ngModel",i.isSelected(t))("onLabel",i.getOptionLabel(t))("offLabel",i.getOptionLabel(t))("disabled",i.disabled||i.isOptionDisabled(t))("allowEmpty",i.allowEmpty)("size",i.size),a(),I(i.itemTemplate||i._itemTemplate?1:-1)}}var Et={provide:re,useExisting:H(()=>z),multi:!0},z=(()=>{class e extends ce{options;optionLabel;optionValue;optionDisabled;unselectable=!1;tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new P;onChange=new P;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=Q(it);getOptionLabel(t){return this.optionLabel?te(t,this.optionLabel):t.label!=null?t.label:t}getOptionValue(t){return this.optionValue?te(t,this.optionValue):this.optionLabel||t.value===void 0?t:t.value}isOptionDisabled(t){return this.optionDisabled?te(t,this.optionDisabled):t.disabled!==void 0?t.disabled:!1}writeValue(t){this.value=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onOptionSelect(t,i,o){if(this.disabled||this.isOptionDisabled(i))return;let n=this.isSelected(i);if(n&&this.unselectable)return;let r=this.getOptionValue(i),p;if(this.multiple)n?p=this.value.filter(x=>!N(x,r,this.equalityKey)):p=this.value?[...this.value,r]:[r];else{if(n&&!this.allowEmpty)return;p=n?null:r}this.focusedIndex=o,this.value=p,this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value}),this.onOptionClick.emit({originalEvent:t,option:i,index:o})}changeTabIndexes(t,i){let o,n;for(let r=0;r<=this.el.nativeElement.children.length-1;r++)this.el.nativeElement.children[r].getAttribute("tabindex")==="0"&&(o={elem:this.el.nativeElement.children[r],index:r});i==="prev"?o.index===0?n=this.el.nativeElement.children.length-1:n=o.index-1:o.index===this.el.nativeElement.children.length-1?n=0:n=o.index+1,this.focusedIndex=n,this.el.nativeElement.children[n].focus()}onFocus(t,i){this.focusedIndex=i}onBlur(){this.onModelTouched()}removeOption(t){this.value=this.value.filter(i=>!N(i,this.getOptionValue(t),this.dataKey))}isSelected(t){let i=!1,o=this.getOptionValue(t);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let n of this.value)if(N(n,o,this.dataKey)){i=!0;break}}}else i=N(this.getOptionValue(t),this.value,this.equalityKey);return i}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"item":this._itemTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=O(e)))(o||e)}})();static \u0275cmp=L({type:e,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(i,o,n){if(i&1&&(k(n,Mt,4),k(n,oe,4)),i&2){let r;S(r=M())&&(o.itemTemplate=r.first),S(r=M())&&(o.templates=r)}},hostVars:10,hostBindings:function(i,o){i&2&&(E("role",o.group)("aria-labelledby",o.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),ke(o.style),xe("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",_],tabindex:[2,"tabindex","tabindex",X],multiple:[2,"multiple","multiple",_],allowEmpty:[2,"allowEmpty","allowEmpty",_],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",_],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",_]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[W([Et,it]),K,U],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,o){i&1&&Me(0,Dt,2,9,"p-toggleButton",1,Se),i&2&&we(o.options)},dependencies:[fe,se,ae,le,F,ee,ie],encapsulation:2,changeDetection:0})}return e})();var ye=e=>({open:e}),It=e=>({"dark-mode":e}),ve=()=>["text-white","bg-indigo-700"],Ft=()=>({exact:!0});function Pt(e,d){if(e&1&&(l(0,"h1",47),y(1),c()),e&2){let t=f();a(),q(t.saasName)}}function $t(e,d){if(e&1&&u(0,"img",48),e&2){let t=f();Te("src",t.profile.photoUrl,_e)}}function Vt(e,d){e&1&&(l(0,"div",49),u(1,"i",50),c())}function Nt(e,d){if(e&1&&(l(0,"span",51),y(1),c()),e&2){let t=f();a(),Le(" ",t.notificationCount," ")}}function jt(e,d){if(e&1&&u(0,"i"),e&2){let t=d.$implicit;B(t.icon)}}var nt=(()=>{class e{constructor(t,i,o,n,r,p,x,at,lt){this.fb=t,this.router=i,this.preferencesService=o,this.notificationService=n,this.darkModeService=r,this.accountService=p,this.toastService=x,this.busyService=at,this.emailService=lt,this.value=this.darkModeService.isDarkMode()?{icon:"pi pi-moon",value:"Dark Mode"}:{icon:"pi pi-sun",value:"Light Mode"},this.justifyOptions=[{icon:"pi pi-sun",value:"Light Mode"},{icon:"pi pi-moon",value:"Dark Mode"}],this.isSidebarOpen=!1,this.menuItems=[{items:[{label:"Profile",icon:"pi pi-user",command:()=>{this.isSidebarOpen=!1,this.router.navigateByUrl("/dashboard/profile")}},{label:"Team",icon:"pi pi-users",command:()=>{this.isSidebarOpen=!1,this.router.navigateByUrl("/dashboard/team")}},{label:"Billing",icon:"pi pi-money-bill",command:()=>{this.isSidebarOpen=!1,this.router.navigateByUrl("/dashboard/billing")}},{label:"Logout",icon:"pi pi-sign-out",command:()=>{this.logout()}}]}],this.user=this.preferencesService.getPreferences().user,this.profile=this.preferencesService.getPreferences().profile,this.saasName=$e.saasName,this.notificationCount=0,this.visible=!1}ngOnInit(){this.suggestionForm=this.fb.group({suggestion:["",[je.required]]}),this.notificationService.getNotificationCount(this.user.id).subscribe(t=>{this.notificationCount=t})}share(){navigator.share?navigator.share({title:this.saasName,text:"Check out this app!",url:window.location.origin}).then(()=>{}).catch(t=>{}):(navigator.clipboard.writeText(window.location.origin),this.toastService.success("Link copied to clipboard"))}themeSelect(){this.value.value==="Light Mode"?this.darkModeService.setLightTheme():this.darkModeService.setDarkTheme()}logout(){this.accountService.logout()}onSubmit(){this.visible=!1;let t={name:this.profile.firstName+" "+this.profile.lastName,email:this.user.email,message:this.suggestionForm.controls.suggestion.value};this.busyService.busy(),this.emailService.SendSuggestion(t).subscribe(i=>{this.busyService.idle(),this.toastService.success("We have received your suggestion, thank you.","Suggestion Received")},i=>{this.busyService.idle(),this.toastService.error("Something went wrong please try again.","Suggestion Failed")})}static{this.\u0275fac=function(i){return new(i||e)(v(Qe),v(Ie),v(Ke),v(Je),v(Ze),v(Ge),v(Ve),v(Ye),v(We))}}static{this.\u0275cmp=L({type:e,selectors:[["app-dashboard"]],standalone:!1,decls:61,vars:34,consts:[["op",""],["item",""],[1,"bg-gray-50","dark:bg-neutral-900"],[1,"flex","md:hidden","absolute","top-0","w-full","gap-5","px-4","py-2","bg-gray-50","dark:bg-neutral-900"],[1,"hamburger-button",3,"click"],[1,"pi","pi-bars","text-xl"],["class","text-md font-medium",4,"ngIf"],[1,"container",3,"ngClass"],[1,"sidebar","bg-gray-50","dark:bg-neutral-900","border-r","border-gray-200","dark:border-neutral-600",3,"ngClass"],[1,"brand-section","border-b","border-gray-200","dark:border-neutral-600"],["routerLink","/",3,"ngClass"],[1,"control-container"],[1,"profile-container","border","border-gray-200","dark:border-neutral-600","hover:bg-gray-200","dark:hover:bg-neutral-600","rounded-md",3,"click"],["class","w-8 h-8 rounded-md",3,"src",4,"ngIf"],["class","bg-gray-200 dark:bg-neutral-600 flex text-gray-600 dark:text-white w-8 h-8 rounded-md justify-center items-center",4,"ngIf"],[1,"text"],[1,"pi","pi-chevron-down","text"],[3,"model","popup"],["routerLink","/dashboard/notifications",1,"cursor-pointer","p-1","hover:bg-gray-200","dark:hover:bg-neutral-600","rounded-md",3,"click"],[1,"pi","pi-bell","text-xl"],["class","inline-flex items-center px-1.5 absolute -top-px -right-1 py-0.5 rounded-full text-xs font-semibold bg-indigo-600 text-white",4,"ngIf"],[1,"sidebar-options"],["routerLink","/dashboard",1,"flex","items-center","px-2","py-2.5","text-md","font-medium","transition-all","duration-200","text-gray-900","dark:text-white","rounded-lg","hover:bg-gray-200","dark:hover:bg-neutral-600","group",3,"click","routerLinkActive","routerLinkActiveOptions"],[1,"pi","pi-clock","mr-3","text-xl"],["routerLink","/dashboard/library",1,"flex","items-center","px-2","py-2.5","text-md","font-medium","transition-all","duration-200","text-gray-900","dark:text-white","rounded-lg","hover:bg-gray-200","dark:hover:bg-neutral-600","group",3,"click","routerLinkActive"],[1,"pi","pi-book","mr-3","text-xl"],["routerLink","/dashboard/trash",1,"flex","items-center","px-2","py-2.5","text-md","font-medium","transition-all","duration-200","text-gray-900","dark:text-white","rounded-lg","hover:bg-gray-200","dark:hover:bg-neutral-600","group",3,"click","routerLinkActive"],[1,"pi","pi-trash","mr-3","text-xl"],[1,"sidebar-options","bottom","border-t","border-gray-200","dark:border-neutral-600"],[1,"flex","items-center","px-2","py-2.5","text-md","font-medium","transition-all","duration-200","text-gray-900","dark:text-white","rounded-lg","hover:bg-gray-200","dark:hover:bg-neutral-600","group",3,"click"],[1,"pi","pi-share-alt","mr-3","text-xl"],[1,"pi","pi-box","mr-3","text-xl"],[1,"flex","items-center","px-2","py-2.5","text-md","font-medium","transition-all","duration-200","text-gray-900","dark:text-white","rounded-lg","hover:bg-gray-200","dark:hover:bg-neutral-600","group"],[1,"pi","pi-star","mr-3","text-xl"],["optionLabel","icon",3,"ngModelChange","onOptionClick","options","ngModel"],[1,"content-container","dark:bg-neutral-900",3,"ngClass"],["header","Suggestion",3,"visibleChange","modal","visible"],[1,"w-full","max-w-sm","bg-white","dark:bg-neutral-900","shadow-lg","rounded-xl"],[1,"px-4","py-5","pt-0","sm:p-6","sm:pt-0"],[1,"mt-3","text-sm","font-medium","text-gray-500","dark:text-white"],[1,"mt-6",3,"formGroup"],[1,"mb-5"],["formControlName","suggestion","placeholder","Write us your suggestion here...",1,"block","w-full","px-4","py-3","placeholder-gray-500","border","-gray-300","rounded-lg","focus:ring-gray-900","focus:border-gray-900","sm:text-sm","caret-gray-900"],[1,"relative","mt-8"],[1,"absolute","-inset-2"],[1,"w-full","h-full","mx-auto","opacity-30","blur-lg","filter"],[1,"relative","flex","items-center","justify-center","w-full","px-8","py-4","text-base","font-bold","text-white","transition-all","duration-200","bg-gray-900","border","border-transparent","rounded-xl","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-gray-900","font-pj","hover:bg-gray-600",3,"click","disabled"],[1,"text-md","font-medium"],[1,"w-8","h-8","rounded-md",3,"src"],[1,"bg-gray-200","dark:bg-neutral-600","flex","text-gray-600","dark:text-white","w-8","h-8","rounded-md","justify-center","items-center"],[1,"pi","pi-user"],[1,"inline-flex","items-center","px-1.5","absolute","-top-px","-right-1","py-0.5","rounded-full","text-xs","font-semibold","bg-indigo-600","text-white"]],template:function(i,o){if(i&1){let n=G();l(0,"body",2)(1,"div",3)(2,"button",4),b("click",function(){return g(n),m(o.isSidebarOpen=!o.isSidebarOpen)}),u(3,"i",5),c(),h(4,Pt,2,1,"h1",6),c(),l(5,"div",7)(6,"aside",8)(7,"div")(8,"div",9),u(9,"img",10),c(),l(10,"div",11)(11,"div",12),b("click",function(p){g(n);let x=Oe(18);return m(x.toggle(p))}),h(12,$t,1,1,"img",13)(13,Vt,2,0,"div",14),l(14,"p",15),y(15),c(),u(16,"i",16),c(),u(17,"p-menu",17,0),l(19,"div",18),b("click",function(){return g(n),m(o.isSidebarOpen=!1)}),u(20,"i",19),h(21,Nt,2,1,"span",20),c()(),l(22,"ul",21)(23,"a",22),b("click",function(){return g(n),m(o.isSidebarOpen=!1)}),u(24,"i",23),y(25," Recents "),c(),l(26,"a",24),b("click",function(){return g(n),m(o.isSidebarOpen=!1)}),u(27,"i",25),y(28," Library "),c(),l(29,"a",26),b("click",function(){return g(n),m(o.isSidebarOpen=!1)}),u(30,"i",27),y(31," Recently Deleted "),c()()(),l(32,"ul",28)(33,"a",29),b("click",function(){return g(n),m(o.share())}),u(34,"i",30),y(35," Tell Your Friends "),c(),l(36,"a",29),b("click",function(){return g(n),m(o.visible=!0)}),u(37,"i",31),y(38," Suggestion Box "),c(),l(39,"a",32),u(40,"i",33),y(41," Rate Us "),c(),l(42,"p-selectButton",34),me("ngModelChange",function(p){return g(n),ge(o.value,p)||(o.value=p),m(p)}),b("onOptionClick",function(){return g(n),m(o.themeSelect())}),h(43,jt,1,2,"ng-template",null,1,J),c()()(),l(45,"div",35),u(46,"router-outlet"),c(),l(47,"p-dialog",36),me("visibleChange",function(p){return g(n),ge(o.visible,p)||(o.visible=p),m(p)}),l(48,"div",37)(49,"div",38)(50,"p",39),y(51," We value your feedback and suggestions. Please let us know how we can improve our service. "),c(),l(52,"form",40)(53,"div",41)(54,"div"),u(55,"textarea",42),c()(),l(56,"div",43)(57,"div",44),u(58,"div",45),c(),l(59,"button",46),b("click",function(){return g(n),m(o.suggestionForm.valid&&o.onSubmit())}),y(60," Send suggestion "),c()()()()()()()()}i&2&&(a(4),s("ngIf",!o.isSidebarOpen),a(),s("ngClass",C(22,ye,o.isSidebarOpen)),a(),s("ngClass",C(24,ye,o.isSidebarOpen)),a(3),s("ngClass",C(26,It,o.darkModeService.isDarkMode())),a(3),s("ngIf",o.profile.photoUrl),a(),s("ngIf",!o.profile.photoUrl),a(2),De("",o.profile.firstName," ",o.profile.lastName,""),a(2),s("model",o.menuItems)("popup",!0),a(4),s("ngIf",o.notificationCount>0),a(2),s("routerLinkActive",V(28,ve))("routerLinkActiveOptions",V(29,Ft)),a(3),s("routerLinkActive",V(30,ve)),a(3),s("routerLinkActive",V(31,ve)),a(13),s("options",o.justifyOptions),pe("ngModel",o.value),a(3),s("ngClass",C(32,ye,o.isSidebarOpen)),a(2),s("modal",!0),pe("visible",o.visible),a(5),s("formGroup",o.suggestionForm),a(7),s("disabled",!o.suggestionForm.valid))},dependencies:[Z,Ee,Be,Fe,Pe,z,ue,de,Ae,Ne,ae,Re,ze,He,le],styles:['*[_ngcontent-%COMP%]{box-sizing:border-box}body[_ngcontent-%COMP%]{min-height:100vh}a[_ngcontent-%COMP%]{cursor:pointer}.container[_ngcontent-%COMP%]{display:grid;grid-template-columns:20rem auto}.content-container[_ngcontent-%COMP%]{overflow-y:scroll;height:100vh}.brand-section[_ngcontent-%COMP%]{padding:1rem;margin-bottom:1rem}.brand-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;content:url("./media/yourlogo-AVMIL2FY.svg");width:10rem;margin:0}.dark-mode[_ngcontent-%COMP%]{content:url("./media/yourlogodark-YRMWDLTY.svg")!important}.profile-container[_ngcontent-%COMP%]{border-radius:.5rem;padding:.25rem .75rem .25rem .25rem;cursor:pointer;display:flex;align-items:center;width:fit-content;gap:.75rem}.profile-container[_ngcontent-%COMP%]   .pi-chevron-down[_ngcontent-%COMP%]{font-size:.75rem}.control-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem}.sidebar[_ngcontent-%COMP%]{display:grid;padding:1rem;min-height:100vh;width:20rem}.sidebar-options[_ngcontent-%COMP%]{text-decoration:none;display:grid;gap:.25rem}.sidebar-option[_ngcontent-%COMP%]{border-radius:.5rem;padding:.5rem;cursor:pointer;display:flex;align-items:center;width:100%;gap:.75rem}.sidebar-option[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300}.sidebar-option[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%]{font-size:1.25rem;margin-left:0}.bottom[_ngcontent-%COMP%]{height:min-content;align-self:flex-end}.sidebar-options.bottom[_ngcontent-%COMP%]{padding-top:.5rem}[_nghost-%COMP%]     .p-button.p-highlight{background:#000;border:1px solid #000}[_nghost-%COMP%]     p-selectButton{margin-top:1.25rem}[_nghost-%COMP%]     .p-button{padding:.75rem 1.25rem}@media (max-width: 768px){.container[_ngcontent-%COMP%]{display:flex;margin-top:1rem}.sidebar[_ngcontent-%COMP%]{width:0;padding:0;border:none;transition:width .3s ease}.sidebar.open[_ngcontent-%COMP%]{display:grid;padding:1rem;width:100vw}.sidebar-options[_ngcontent-%COMP%]{opacity:0;display:none;transition:opacity .3s ease}.sidebar.open[_ngcontent-%COMP%]   .sidebar-options[_ngcontent-%COMP%]{opacity:1;display:block}.sidebar-option[_ngcontent-%COMP%]{transform:scale(0);transition:transform .3s ease}.sidebar.open[_ngcontent-%COMP%]   .sidebar-option[_ngcontent-%COMP%]{transform:scale(1)}.content-container.open[_ngcontent-%COMP%]{width:0}.content-container[_ngcontent-%COMP%]{width:100%}}@media (max-width: 768px){[_nghost-%COMP%]     .p-dialog{width:90%!important}}[_nghost-%COMP%]     .p-dialog .p-dialog-content:last-of-type{border-radius:6px}[_nghost-%COMP%]     .p-dialog .p-dialog-content{padding:0}[_nghost-%COMP%]     .p-menu-submenu-label{display:none}']})}}return e})();var Rt=[{path:"",component:nt,children:[{path:"",loadComponent:()=>import("./chunk-6DPE6B2B.js").then(e=>e.RecentsComponent)},{path:"library",loadComponent:()=>import("./chunk-Z4ZNVKRF.js").then(e=>e.LibraryComponent)},{path:"trash",loadComponent:()=>import("./chunk-ZIGGT7N3.js").then(e=>e.TrashComponent)},{path:"team",loadChildren:()=>import("./chunk-YM6R6E2D.js").then(e=>e.TeamModule)},{path:"notifications",loadComponent:()=>import("./chunk-B2J5D7GG.js").then(e=>e.NotificationsComponent)},{path:"profile",loadComponent:()=>import("./chunk-SSRSD7UH.js").then(e=>e.ProfileComponent)},{path:"billing",loadComponent:()=>import("./chunk-7UIDZV7W.js").then(e=>e.BillingComponent)}]}],rt=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=D({type:e})}static{this.\u0275inj=T({imports:[be.forChild(Rt),be]})}}return e})();var Go=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=D({type:e})}static{this.\u0275inj=T({imports:[F,rt,z,ue,de,Ue,se]})}}return e})();export{Go as DashboardModule};
