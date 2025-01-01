import{a as te}from"./chunk-MF2AVFJR.js";import{c as ce}from"./chunk-CLOGCBH5.js";import{a as ne}from"./chunk-4KEACNFI.js";import{a as oe,e as ie}from"./chunk-SPMPY3AK.js";import{N as Z,O as W,aa as Y,ba as M,ha as ee}from"./chunk-TOKC4HOE.js";import{k as P,m as U,q as K,t as X}from"./chunk-XB25HVPP.js";import{$b as H,Ab as d,Bb as T,Cb as V,Eb as Q,Ib as j,Jb as v,Oa as l,Ob as F,P as S,Pb as A,Q as B,Qb as I,R as z,Rb as $,W as D,Wa as L,Za as y,_a as q,_b as R,ac as G,bb as _,ca as E,cb as N,da as m,db as p,ea as g,fa as O,ha as b,ma as C,ob as s,pb as t,sb as w,tb as k,uc as h,vc as J,yb as x,zb as f}from"./chunk-KK5ZIUJ6.js";var ae=(()=>{class e extends ce{static \u0275fac=(()=>{let o;return function(i){return(o||(o=b(e)))(i||e)}})();static \u0275cmp=y({type:e,selectors:[["MinusIcon"]],features:[_],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,i){n&1&&(O(),x(0,"svg",0),d(1,"path",1),f()),n&2&&(k(i.getClassNames()),s("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return e})();var he=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

.p-checkbox.ng-invalid.ng-dirty > .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${e("checkbox.sm.width")};
    height: ${e("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${e("checkbox.icon.sm.size")};
    width: ${e("checkbox.icon.sm.size")};
    height: ${e("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${e("checkbox.lg.width")};
    height: ${e("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${e("checkbox.icon.lg.size")};
    width: ${e("checkbox.icon.lg.size")};
    height: ${e("checkbox.icon.lg.size")};
}
`,de={root:({instance:e,props:a})=>["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":a.disabled,"p-invalid":a.invalid,"p-variant-filled":a.variant?a.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},re=(()=>{class e extends ee{name="checkbox";theme=he;classes=de;static \u0275fac=(()=>{let o;return function(i){return(o||(o=b(e)))(i||e)}})();static \u0275prov=B({token:e,factory:e.\u0275fac})}return e})();var ue=["checkboxicon"],be=["input"],pe=()=>({"p-checkbox-input":!0}),ke=e=>({checked:e,class:"p-checkbox-icon"});function xe(e,a){if(e&1&&d(0,"span",8),e&2){let o=v(3);t("ngClass",o.checkboxIcon),s("data-pc-section","icon")}}function fe(e,a){e&1&&d(0,"CheckIcon",9),e&2&&(t("styleClass","p-checkbox-icon"),s("data-pc-section","icon"))}function me(e,a){if(e&1&&(T(0),p(1,xe,1,2,"span",7)(2,fe,1,2,"CheckIcon",6),V()),e&2){let o=v(2);l(),t("ngIf",o.checkboxIcon),l(),t("ngIf",!o.checkboxIcon)}}function ge(e,a){e&1&&d(0,"MinusIcon",9),e&2&&(t("styleClass","p-checkbox-icon"),s("data-pc-section","icon"))}function Ce(e,a){if(e&1&&(T(0),p(1,me,3,2,"ng-container",4)(2,ge,1,2,"MinusIcon",6),V()),e&2){let o=v();l(),t("ngIf",o.checked),l(),t("ngIf",o._indeterminate())}}function ye(e,a){}function _e(e,a){e&1&&p(0,ye,0,0,"ng-template")}var ve={provide:oe,useExisting:S(()=>le),multi:!0},le=(()=>{class e extends ne{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant="outlined";onChange=new C;onFocus=new C;onBlur=new C;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:W(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=L(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=D(re);ngAfterContentInit(){this.templates.forEach(o=>{switch(o.getType()){case"icon":this._checkboxIconTemplate=o.template;break;case"checkboxicon":this._checkboxIconTemplate=o.template;break}})}ngOnChanges(o){super.ngOnChanges(o),o.indeterminate&&this._indeterminate.set(o.indeterminate.currentValue)}updateModel(o){let n,i=this.injector.get(ie,null,{optional:!0,self:!0}),c=i&&!this.formControl?i.value:this.model;this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked||this._indeterminate()?n=c.filter(r=>!Z(r,this.value)):n=c?[...c,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:o})}handleChange(o){this.readonly||this.updateModel(o)}onInputFocus(o){this.focused=!0,this.onFocus.emit(o)}onInputBlur(o){this.focused=!1,this.onBlur.emit(o),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(o){this.model=o,this.cd.markForCheck()}registerOnChange(o){this.onModelChange=o}registerOnTouched(o){this.onModelTouched=o}setDisabledState(o){setTimeout(()=>{this.disabled=o,this.cd.markForCheck()})}static \u0275fac=(()=>{let o;return function(i){return(o||(o=b(e)))(i||e)}})();static \u0275cmp=y({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,i,c){if(n&1&&(F(c,ue,4),F(c,Y,4)),n&2){let r;I(r=$())&&(i.checkboxIconTemplate=r.first),I(r=$())&&(i.templates=r)}},viewQuery:function(n,i){if(n&1&&A(be,5),n&2){let c;I(c=$())&&(i.inputViewChild=c.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",h],binary:[2,"binary","binary",h],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",J],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",h],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",h],required:[2,"required","required",h],autofocus:[2,"autofocus","autofocus",h],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[R([ve,re]),N,_,E],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(n,i){if(n&1){let c=Q();x(0,"div",1)(1,"input",2,0),j("focus",function(u){return m(c),g(i.onInputFocus(u))})("blur",function(u){return m(c),g(i.onInputBlur(u))})("change",function(u){return m(c),g(i.handleChange(u))}),f(),x(3,"div",3),p(4,Ce,3,2,"ng-container",4)(5,_e,1,0,null,5),f()()}n&2&&(w(i.style),k(i.styleClass),t("ngClass",i.containerClass),s("data-p-highlight",i.checked)("data-p-checked",i.checked)("data-p-disabled",i.disabled),l(),w(i.inputStyle),k(i.inputClass),t("value",i.value)("checked",i.checked)("disabled",i.disabled)("readonly",i.readonly)("ngClass",H(26,pe)),s("id",i.inputId)("name",i.name)("tabindex",i.tabindex)("required",i.required)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel),l(3),t("ngIf",!i.checkboxIconTemplate&&!i._checkboxIconTemplate),l(),t("ngTemplateOutlet",i.checkboxIconTemplate||i._checkboxIconTemplate)("ngTemplateOutletContext",G(27,ke,i.checked)))},dependencies:[X,P,U,K,te,ae,M],encapsulation:2,changeDetection:0})}return e})(),Je=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=q({type:e});static \u0275inj=z({imports:[le,M,M]})}return e})();export{le as a,Je as b};
