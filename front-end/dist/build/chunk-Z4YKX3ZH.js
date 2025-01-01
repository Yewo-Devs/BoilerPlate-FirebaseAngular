import{a as j,b as ue}from"./chunk-4KEACNFI.js";import{a as R,f as re,h as se,q as ce}from"./chunk-SPMPY3AK.js";import{M as z,N as k,aa as N,ba as C,ha as Q}from"./chunk-TOKC4HOE.js";import{k as ae,q as V,t as A}from"./chunk-XB25HVPP.js";import{Ab as te,Db as x,Eb as oe,Ib as w,Jb as s,Oa as d,Ob as g,P as $,Q as M,Qb as p,R as K,Rb as b,Tb as ne,Ub as ie,W as B,Za as S,_a as q,_b as F,ac as U,bb as L,bc as D,cb as E,da as J,db as c,ea as H,ha as h,lc as le,ma as v,ob as m,pb as r,rb as Y,sb as W,tb as O,ub as y,uc as u,vb as X,vc as I,wb as Z,xb as ee,yb as _,zb as T}from"./chunk-KK5ZIUJ6.js";var ye=({dt:e})=>`
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
`,_e={root:({instance:e})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":e.checked,"p-disabled":e.disabled,"p-togglebutton-sm p-inputfield-sm":e.size==="small","p-togglebutton-lg p-inputfield-lg":e.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},de=(()=>{class e extends Q{name="togglebutton";theme=ye;classes=_e;static \u0275fac=(()=>{let t;return function(o){return(t||(t=h(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Ce=["icon"],ve=["content"],ge=e=>({$implicit:e}),Te=(e,a)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":e,"p-togglebutton-icon-right":a});function xe(e,a){e&1&&x(0)}function ke(e,a){if(e&1&&te(0,"span",1),e&2){let t=s(3);O(t.checked?t.onIcon:t.offIcon),r("ngClass",D(4,Te,t.iconPos==="left",t.iconPos==="right")),m("data-pc-section","icon")}}function $e(e,a){if(e&1&&c(0,ke,1,7,"span",3),e&2){let t=s(2);y(t.onIcon||t.offIcon?0:-1)}}function Me(e,a){e&1&&x(0)}function Be(e,a){if(e&1&&c(0,Me,1,0,"ng-container",2),e&2){let t=s(2);r("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",U(2,ge,t.checked))}}function Se(e,a){if(e&1&&(c(0,$e,1,1)(1,Be,1,4,"ng-container"),_(2,"span",1),ne(3),T()),e&2){let t=s();y(t.iconTemplate?1:0),d(2),r("ngClass",t.cx("label")),m("data-pc-section","label"),d(),ie(t.checked?t.hasOnLabel?t.onLabel:"\xA0":t.hasOffLabel?t.offLabel:"\xA0")}}var Le={provide:R,useExisting:$(()=>G),multi:!0},G=(()=>{class e extends j{onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;get hostClass(){return this.styleClass||""}inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new v;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=B(de);toggle(t){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}onBlur(){this.onModelTouched()}writeValue(t){this.checked=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=h(e)))(o||e)}})();static \u0275cmp=S({type:e,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,o,i){if(n&1&&(g(i,Ce,4),g(i,ve,4),g(i,N,4)),n&2){let l;p(l=b())&&(o.iconTemplate=l.first),p(l=b())&&(o.contentTemplate=l.first),p(l=b())&&(o.templates=l)}},hostVars:2,hostBindings:function(n,o){n&2&&O(o.hostClass)},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",u],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",I],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",u],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[F([Le,de]),E,L],decls:4,vars:15,consts:[["pRipple","","type","button",3,"click","ngClass","tabindex","disabled"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(n,o){n&1&&(_(0,"button",0),w("click",function(l){return o.toggle(l)}),_(1,"span",1),c(2,xe,1,0,"ng-container",2)(3,Se,4,4),T()()),n&2&&(O(o.styleClass),r("ngClass",o.cx("root"))("tabindex",o.tabindex)("disabled",o.disabled),m("aria-labelledby",o.ariaLabelledBy)("aria-pressed",o.checked)("data-p-checked",o.active)("data-p-disabled",o.disabled),d(),r("ngClass",o.cx("content")),d(),r("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",U(13,ge,o.checked)),d(),y(o.contentTemplate?-1:3))},dependencies:[ue,A,ae,V,C],encapsulation:2,changeDetection:0})}return e})();var Ee=({dt:e})=>`
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
`,Oe={root:({props:e})=>["p-selectbutton p-component",{"p-invalid":e.invalid}]},pe=(()=>{class e extends Q{name="selectbutton";theme=Ee;classes=Oe;static \u0275fac=(()=>{let t;return function(o){return(t||(t=h(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var we=["item"],Fe=(e,a)=>({$implicit:e,index:a});function De(e,a){e&1&&x(0)}function Ie(e,a){if(e&1&&c(0,De,1,0,"ng-container",3),e&2){let t=s(2),n=t.$implicit,o=t.$index,i=s();r("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",D(2,Fe,n,o))}}function Ve(e,a){e&1&&c(0,Ie,1,5,"ng-template",null,0,le)}function Ae(e,a){if(e&1){let t=oe();_(0,"p-toggleButton",2),w("onChange",function(o){let i=J(t),l=i.$implicit,f=i.$index,P=s();return H(P.onOptionSelect(o,l,f))}),c(1,Ve,2,0),T()}if(e&2){let t=a.$implicit,n=s();r("autofocus",n.autofocus)("styleClass",n.styleClass)("ngModel",n.isSelected(t))("onLabel",n.getOptionLabel(t))("offLabel",n.getOptionLabel(t))("disabled",n.disabled||n.isOptionDisabled(t))("allowEmpty",n.allowEmpty)("size",n.size),d(),y(n.itemTemplate||n._itemTemplate?1:-1)}}var ze={provide:R,useExisting:$(()=>be),multi:!0},be=(()=>{class e extends j{options;optionLabel;optionValue;optionDisabled;unselectable=!1;tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new v;onChange=new v;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=B(pe);getOptionLabel(t){return this.optionLabel?z(t,this.optionLabel):t.label!=null?t.label:t}getOptionValue(t){return this.optionValue?z(t,this.optionValue):this.optionLabel||t.value===void 0?t:t.value}isOptionDisabled(t){return this.optionDisabled?z(t,this.optionDisabled):t.disabled!==void 0?t.disabled:!1}writeValue(t){this.value=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onOptionSelect(t,n,o){if(this.disabled||this.isOptionDisabled(n))return;let i=this.isSelected(n);if(i&&this.unselectable)return;let l=this.getOptionValue(n),f;if(this.multiple)i?f=this.value.filter(P=>!k(P,l,this.equalityKey)):f=this.value?[...this.value,l]:[l];else{if(i&&!this.allowEmpty)return;f=i?null:l}this.focusedIndex=o,this.value=f,this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value}),this.onOptionClick.emit({originalEvent:t,option:n,index:o})}changeTabIndexes(t,n){let o,i;for(let l=0;l<=this.el.nativeElement.children.length-1;l++)this.el.nativeElement.children[l].getAttribute("tabindex")==="0"&&(o={elem:this.el.nativeElement.children[l],index:l});n==="prev"?o.index===0?i=this.el.nativeElement.children.length-1:i=o.index-1:o.index===this.el.nativeElement.children.length-1?i=0:i=o.index+1,this.focusedIndex=i,this.el.nativeElement.children[i].focus()}onFocus(t,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(t){this.value=this.value.filter(n=>!k(n,this.getOptionValue(t),this.dataKey))}isSelected(t){let n=!1,o=this.getOptionValue(t);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let i of this.value)if(k(i,o,this.dataKey)){n=!0;break}}}else n=k(this.getOptionValue(t),this.value,this.equalityKey);return n}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"item":this._itemTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=h(e)))(o||e)}})();static \u0275cmp=S({type:e,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(n,o,i){if(n&1&&(g(i,we,4),g(i,N,4)),n&2){let l;p(l=b())&&(o.itemTemplate=l.first),p(l=b())&&(o.templates=l)}},hostVars:10,hostBindings:function(n,o){n&2&&(m("role",o.group)("aria-labelledby",o.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),W(o.style),Y("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",u],tabindex:[2,"tabindex","tabindex",I],multiple:[2,"multiple","multiple",u],allowEmpty:[2,"allowEmpty","allowEmpty",u],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",u],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",u]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[F([ze,pe]),E,L],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){n&1&&Z(0,Ae,2,9,"p-toggleButton",1,X),n&2&&ee(o.options)},dependencies:[G,ce,re,se,A,V,C],encapsulation:2,changeDetection:0})}return e})(),Ct=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=q({type:e});static \u0275inj=K({imports:[be,C,C]})}return e})();export{be as a,Ct as b};
