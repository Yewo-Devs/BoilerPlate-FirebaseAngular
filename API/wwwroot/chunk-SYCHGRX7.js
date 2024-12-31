import{a as oo,d as to}from"./chunk-B2TTBPJA.js";import{a as W,b as X}from"./chunk-FWSIJP3L.js";import{a as K,b as Y}from"./chunk-TFQVLPCP.js";import{J as G,aa as U,ba as y,ha as Z}from"./chunk-N6ENGRFR.js";import{k as H,m as R,p as q,q as J,t as I}from"./chunk-5RQIKTTO.js";import{Ab as p,Bb as $,Cb as v,Db as D,Ib as O,Jb as u,Kb as L,Lb as N,Oa as a,Ob as g,Q as w,Qb as h,R as T,Rb as f,Tb as j,Ub as Q,W as B,Za as P,_a as E,_b as A,ac as C,bb as F,ca as S,cb as M,db as b,ha as x,ma as m,ob as d,pb as i,tb as z,uc as c,vc as V,yb as k,zb as _}from"./chunk-QP33FRZG.js";var ro=({dt:o})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${o("button.primary.color")};
    background: ${o("button.primary.background")};
    border: 1px solid ${o("button.primary.border.color")};
    padding-block: ${o("button.padding.y")};
    padding-inline: ${o("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${o("button.transition.duration")}, color ${o("button.transition.duration")}, border-color ${o("button.transition.duration")},
            outline-color ${o("button.transition.duration")}, box-shadow ${o("button.transition.duration")};
    border-radius: ${o("button.border.radius")};
    outline-color: transparent;
    gap: ${o("button.gap")};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${o("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${o("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${o("button.sm.font.size")};
    padding-block: ${o("button.sm.padding.y")};
    padding-inline: ${o("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${o("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${o("button.lg.font.size")};
    padding-block: ${o("button.lg.padding.y")};
    padding-inline: ${o("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${o("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${o("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${o("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${o("button.primary.hover.background")};
    border: 1px solid ${o("button.primary.hover.border.color")};
    color: ${o("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${o("button.primary.active.background")};
    border: 1px solid ${o("button.primary.active.border.color")};
    color: ${o("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${o("button.primary.focus.ring.shadow")};
    outline: ${o("button.focus.ring.width")} ${o("button.focus.ring.style")} ${o("button.primary.focus.ring.color")};
    outline-offset: ${o("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${o("button.badge.size")};
    height: ${o("button.badge.size")};
    line-height: ${o("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${o("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${o("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${o("button.secondary.background")};
    border: 1px solid ${o("button.secondary.border.color")};
    color: ${o("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${o("button.secondary.hover.background")};
    border: 1px solid ${o("button.secondary.hover.border.color")};
    color: ${o("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${o("button.secondary.active.background")};
    border: 1px solid ${o("button.secondary.active.border.color")};
    color: ${o("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${o("button.secondary.focus.ring.color")};
    box-shadow: ${o("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${o("button.success.background")};
    border: 1px solid ${o("button.success.border.color")};
    color: ${o("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${o("button.success.hover.background")};
    border: 1px solid ${o("button.success.hover.border.color")};
    color: ${o("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${o("button.success.active.background")};
    border: 1px solid ${o("button.success.active.border.color")};
    color: ${o("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${o("button.success.focus.ring.color")};
    box-shadow: ${o("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${o("button.info.background")};
    border: 1px solid ${o("button.info.border.color")};
    color: ${o("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${o("button.info.hover.background")};
    border: 1px solid ${o("button.info.hover.border.color")};
    color: ${o("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${o("button.info.active.background")};
    border: 1px solid ${o("button.info.active.border.color")};
    color: ${o("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${o("button.info.focus.ring.color")};
    box-shadow: ${o("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${o("button.warn.background")};
    border: 1px solid ${o("button.warn.border.color")};
    color: ${o("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${o("button.warn.hover.background")};
    border: 1px solid ${o("button.warn.hover.border.color")};
    color: ${o("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${o("button.warn.active.background")};
    border: 1px solid ${o("button.warn.active.border.color")};
    color: ${o("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${o("button.warn.focus.ring.color")};
    box-shadow: ${o("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${o("button.help.background")};
    border: 1px solid ${o("button.help.border.color")};
    color: ${o("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${o("button.help.hover.background")};
    border: 1px solid ${o("button.help.hover.border.color")};
    color: ${o("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${o("button.help.active.background")};
    border: 1px solid ${o("button.help.active.border.color")};
    color: ${o("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${o("button.help.focus.ring.color")};
    box-shadow: ${o("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${o("button.danger.background")};
    border: 1px solid ${o("button.danger.border.color")};
    color: ${o("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${o("button.danger.hover.background")};
    border: 1px solid ${o("button.danger.hover.border.color")};
    color: ${o("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${o("button.danger.active.background")};
    border: 1px solid ${o("button.danger.active.border.color")};
    color: ${o("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${o("button.danger.focus.ring.color")};
    box-shadow: ${o("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${o("button.contrast.background")};
    border: 1px solid ${o("button.contrast.border.color")};
    color: ${o("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${o("button.contrast.hover.background")};
    border: 1px solid ${o("button.contrast.hover.border.color")};
    color: ${o("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${o("button.contrast.active.background")};
    border: 1px solid ${o("button.contrast.active.border.color")};
    color: ${o("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${o("button.contrast.focus.ring.color")};
    box-shadow: ${o("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${o("button.outlined.primary.border.color")};
    color: ${o("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${o("button.outlined.primary.hover.background")};
    border-color: ${o("button.outlined.primary.border.color")};
    color: ${o("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${o("button.outlined.primary.active.background")};
    border-color: ${o("button.outlined.primary.border.color")};
    color: ${o("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${o("button.outlined.secondary.border.color")};
    color: ${o("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${o("button.outlined.secondary.hover.background")};
    border-color: ${o("button.outlined.secondary.border.color")};
    color: ${o("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${o("button.outlined.secondary.active.background")};
    border-color: ${o("button.outlined.secondary.border.color")};
    color: ${o("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${o("button.outlined.success.border.color")};
    color: ${o("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${o("button.outlined.success.hover.background")};
    border-color: ${o("button.outlined.success.border.color")};
    color: ${o("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${o("button.outlined.success.active.background")};
    border-color: ${o("button.outlined.success.border.color")};
    color: ${o("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${o("button.outlined.info.border.color")};
    color: ${o("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${o("button.outlined.info.hover.background")};
    border-color: ${o("button.outlined.info.border.color")};
    color: ${o("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${o("button.outlined.info.active.background")};
    border-color: ${o("button.outlined.info.border.color")};
    color: ${o("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${o("button.outlined.warn.border.color")};
    color: ${o("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${o("button.outlined.warn.hover.background")};
    border-color: ${o("button.outlined.warn.border.color")};
    color: ${o("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${o("button.outlined.warn.active.background")};
    border-color: ${o("button.outlined.warn.border.color")};
    color: ${o("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${o("button.outlined.help.border.color")};
    color: ${o("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${o("button.outlined.help.hover.background")};
    border-color: ${o("button.outlined.help.border.color")};
    color: ${o("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${o("button.outlined.help.active.background")};
    border-color: ${o("button.outlined.help.border.color")};
    color: ${o("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${o("button.outlined.danger.border.color")};
    color: ${o("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${o("button.outlined.danger.hover.background")};
    border-color: ${o("button.outlined.danger.border.color")};
    color: ${o("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${o("button.outlined.danger.active.background")};
    border-color: ${o("button.outlined.danger.border.color")};
    color: ${o("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${o("button.outlined.contrast.border.color")};
    color: ${o("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${o("button.outlined.contrast.hover.background")};
    border-color: ${o("button.outlined.contrast.border.color")};
    color: ${o("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${o("button.outlined.contrast.active.background")};
    border-color: ${o("button.outlined.contrast.border.color")};
    color: ${o("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${o("button.outlined.plain.border.color")};
    color: ${o("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${o("button.outlined.plain.hover.background")};
    border-color: ${o("button.outlined.plain.border.color")};
    color: ${o("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${o("button.outlined.plain.active.background")};
    border-color: ${o("button.outlined.plain.border.color")};
    color: ${o("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${o("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${o("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${o("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${o("button.text.primary.active.background")};
    border-color: transparent;
    color: ${o("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${o("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${o("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${o("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${o("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${o("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${o("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${o("button.text.success.hover.background")};
    border-color: transparent;
    color: ${o("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${o("button.text.success.active.background")};
    border-color: transparent;
    color: ${o("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${o("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${o("button.text.info.hover.background")};
    border-color: transparent;
    color: ${o("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${o("button.text.info.active.background")};
    border-color: transparent;
    color: ${o("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${o("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${o("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${o("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${o("button.text.warn.active.background")};
    border-color: transparent;
    color: ${o("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${o("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${o("button.text.help.hover.background")};
    border-color: transparent;
    color: ${o("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${o("button.text.help.active.background")};
    border-color: transparent;
    color: ${o("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${o("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${o("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${o("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${o("button.text.danger.active.background")};
    border-color: transparent;
    color: ${o("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${o("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${o("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${o("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${o("button.text.plain.active.background")};
    border-color: transparent;
    color: ${o("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${o("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${o("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${o("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${o("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${o("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${o("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${o("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${o("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,io={root:({instance:o,props:e})=>["p-button p-component",{"p-button-icon-only":o.hasIcon&&!e.label&&!e.badge,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading,"p-button-link":e.link,[`p-button-${e.severity}`]:e.severity,"p-button-raised":e.raised,"p-button-rounded":e.rounded,"p-button-text":e.text,"p-button-outlined":e.outlined,"p-button-sm":e.size==="small","p-button-lg":e.size==="large","p-button-plain":e.plain,"p-button-fluid":e.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:o})=>["p-button-icon",{[`p-button-icon-${o.iconPos}`]:o.label}],label:"p-button-label"},no=(()=>{class o extends Z{name="button";theme=ro;classes=io;static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(o)))(n||o)}})();static \u0275prov=w({token:o,factory:o.\u0275fac})}return o})();var lo=["content"],ao=["loading"],uo=["icon"],co=["*"],eo=o=>({class:o});function so(o,e){o&1&&D(0)}function bo(o,e){if(o&1&&p(0,"span",8),o&2){let t=u(3);i("ngClass",t.iconClass()),d("aria-hidden",!0)("data-pc-section","loadingicon")}}function po(o,e){if(o&1&&p(0,"SpinnerIcon",9),o&2){let t=u(3);i("styleClass",t.spinnerIconClass())("spin",!0),d("aria-hidden",!0)("data-pc-section","loadingicon")}}function go(o,e){if(o&1&&($(0),b(1,bo,1,3,"span",6)(2,po,1,4,"SpinnerIcon",7),v()),o&2){let t=u(2);a(),i("ngIf",t.loadingIcon),a(),i("ngIf",!t.loadingIcon)}}function ho(o,e){}function fo(o,e){if(o&1&&b(0,ho,0,0,"ng-template",10),o&2){let t=u(2);i("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function mo(o,e){if(o&1&&($(0),b(1,go,3,2,"ng-container",2)(2,fo,1,1,null,5),v()),o&2){let t=u();a(),i("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),a(),i("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",C(3,eo,t.iconClass()))}}function $o(o,e){if(o&1&&p(0,"span",8),o&2){let t=u(2);z(t.icon),i("ngClass",t.iconClass()),d("data-pc-section","icon")}}function vo(o,e){}function yo(o,e){if(o&1&&b(0,vo,0,0,"ng-template",10),o&2){let t=u(2);i("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function xo(o,e){if(o&1&&($(0),b(1,$o,1,4,"span",11)(2,yo,1,1,null,5),v()),o&2){let t=u();a(),i("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),a(),i("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",C(3,eo,t.iconClass()))}}function ko(o,e){if(o&1&&(k(0,"span",12),j(1),_()),o&2){let t=u();d("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),a(),Q(t.label)}}function _o(o,e){if(o&1&&p(0,"p-badge",13),o&2){let t=u();i("value",t.badge)("severity",t.badgeSeverity)}}var Co=(()=>{class o extends K{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new m;onFocus=new m;onBlur=new m;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([r,n])=>this[`_${r}`]!==n&&(this[`_${r}`]=n))}get hasFluid(){let r=this.el.nativeElement.closest("p-fluid");return G(this.fluid)?!!r:this.fluid}_componentStyle=B(no);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this.contentTemplate=t.template;break;case"icon":this.iconTemplate=t.template;break;case"loadingicon":this.loadingIconTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:r}=t;if(r){let n=r.currentValue;for(let s in n)this[s]=n[s]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[r])=>t+` ${r}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(o)))(n||o)}})();static \u0275cmp=P({type:o,selectors:[["p-button"]],contentQueries:function(r,n,s){if(r&1&&(g(s,lo,5),g(s,ao,5),g(s,uo,5),g(s,U,4)),r&2){let l;h(l=f())&&(n.contentTemplate=l.first),h(l=f())&&(n.loadingIconTemplate=l.first),h(l=f())&&(n.iconTemplate=l.first),h(l=f())&&(n.templates=l)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",c],loading:[2,"loading","loading",c],loadingIcon:"loadingIcon",raised:[2,"raised","raised",c],rounded:[2,"rounded","rounded",c],text:[2,"text","text",c],plain:[2,"plain","plain",c],severity:"severity",outlined:[2,"outlined","outlined",c],link:[2,"link","link",c],tabindex:[2,"tabindex","tabindex",V],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",c],fluid:[2,"fluid","fluid",c],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[A([no]),M,F,S],ngContentSelectors:co,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(r,n){r&1&&(L(),k(0,"button",0),O("click",function(l){return n.onClick.emit(l)})("focus",function(l){return n.onFocus.emit(l)})("blur",function(l){return n.onBlur.emit(l)}),N(1),b(2,so,1,0,"ng-container",1)(3,mo,3,5,"ng-container",2)(4,xo,3,5,"ng-container",2)(5,ko,2,3,"span",3)(6,_o,1,2,"p-badge",4),_()),r&2&&(i("ngStyle",n.style)("disabled",n.disabled||n.loading)("ngClass",n.buttonClass)("pAutoFocus",n.autofocus),d("type",n.type)("aria-label",n.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",n.tabindex),a(2),i("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),a(),i("ngIf",n.loading),a(),i("ngIf",!n.loading),a(),i("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.label),a(),i("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.badge))},dependencies:[I,H,R,J,q,Y,oo,to,X,W,y],encapsulation:2,changeDetection:0})}return o})(),et=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=E({type:o});static \u0275inj=T({imports:[I,Co,y,y]})}return o})();export{Co as a,et as b};
