import{a as s}from"./chunk-P4WASEVS.js";import{Q as i,V as r}from"./chunk-KK5ZIUJ6.js";var a=(()=>{class e{constructor(t){this.spinnerService=t,this.busyRequestCount=0}startTimer(){this.resetTimer=setTimeout(()=>{this.idle()},6e4)}clearTimer(){this.resetTimer&&(clearTimeout(this.resetTimer),this.resetTimer=null)}busy(){this.clearTimer(),this.busyRequestCount++,this.spinnerService.show(void 0,{type:"ball-clip-rotate",bdColor:"rgba(0, 0, 0, 0.8)",color:"#fff"}),this.startTimer()}idle(){this.clearTimer(),this.busyRequestCount=0,this.spinnerService.hide()}static{this.\u0275fac=function(o){return new(o||e)(r(s))}}static{this.\u0275prov=i({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();export{a};
