import{d as C,e as h}from"./chunk-HGXZOI6N.js";import{t as f}from"./chunk-XB25HVPP.js";import{Ab as g,Ib as d,Oa as s,R as l,Tb as u,Vb as m,Za as p,_a as c,fa as a,yb as n,zb as i}from"./chunk-KK5ZIUJ6.js";var L=(()=>{class e{constructor(){this.buttonText="Sign in with Google",this.createFakeGoogleWrapper=()=>{let t=document.createElement("div");t.style.display="none",t.classList.add("custom-google-button"),document.body.appendChild(t),window.google.accounts.id.renderButton(t,{type:"icon",width:"200"});let o=t.querySelector("div[role=button]");return{click:()=>{o?.click()}}}}handleGoogleLogin(){this.createFakeGoogleWrapper().click()}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-google-signin"]],inputs:{buttonText:"buttonText"},standalone:!1,decls:9,vars:1,consts:[["role","button",1,"flex","items-center","justify-center","w-full","px-8","py-4","mt-8","text-base","font-bold","text-gray-900","transition-all","duration-200","bg-gray-100","border","border-transparent","rounded-xl","hover:bg-gray-200","focus:bg-gray-200","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-gray-200","font-pj",3,"click"],["viewBox","0 0 20 20","fill","none","xmlns","http://www.w3.org/2000/svg",1,"w-5","h-5","mr-4"],["d","M19.2436 8.26113L11.0858 8.26074C10.7256 8.26074 10.4336 8.5527 10.4336 8.91293V11.519C10.4336 11.8791 10.7256 12.1712 11.0858 12.1712H15.6798C15.1767 13.4767 14.2378 14.57 13.0399 15.2647L14.9988 18.6557C18.1411 16.8384 19.9988 13.6497 19.9988 10.0803C19.9988 9.57203 19.9613 9.20871 19.8864 8.79961C19.8295 8.48879 19.5596 8.26113 19.2436 8.26113Z","fill","#167EE6"],["d","M9.99957 16.0871C7.75137 16.0871 5.78871 14.8587 4.73461 13.041L1.34375 14.9955C3.06934 17.9862 6.30191 20.0001 9.99957 20.0001C11.8135 20.0001 13.5251 19.5117 14.9996 18.6606V18.6559L13.0407 15.2649C12.1447 15.7846 11.1078 16.0871 9.99957 16.0871Z","fill","#12B347"],["d","M15 18.6603V18.6557L13.0411 15.2646C12.1451 15.7843 11.1083 16.0868 10 16.0868V19.9998C11.8139 19.9998 13.5256 19.5114 15 18.6603Z","fill","#0F993E"],["d","M3.91305 10.0002C3.91305 8.89207 4.21547 7.85531 4.73504 6.95934L1.34418 5.00488C0.488359 6.47469 0 8.18164 0 10.0002C0 11.8188 0.488359 13.5258 1.34418 14.9956L4.73504 13.0411C4.21547 12.1452 3.91305 11.1084 3.91305 10.0002Z","fill","#FFD500"],["d","M9.99957 3.91305C11.4656 3.91305 12.8123 4.43398 13.8641 5.30051C14.1236 5.51426 14.5007 5.49883 14.7384 5.26113L16.5849 3.41465C16.8546 3.14496 16.8354 2.70352 16.5473 2.45359C14.785 0.924726 12.492 0 9.99957 0C6.30191 0 3.06934 2.01395 1.34375 5.00465L4.73461 6.9591C5.78871 5.14141 7.75137 3.91305 9.99957 3.91305Z","fill","#FF4B26"],["d","M13.8645 5.30051C14.124 5.51426 14.5012 5.49883 14.7389 5.26113L16.5854 3.41465C16.855 3.14496 16.8358 2.70352 16.5477 2.45359C14.7854 0.924688 12.4925 0 10 0V3.91305C11.466 3.91305 12.8127 4.43398 13.8645 5.30051Z","fill","#D93F21"]],template:function(o,r){o&1&&(n(0,"a",0),d("click",function(){return r.handleGoogleLogin()}),a(),n(1,"svg",1),g(2,"path",2)(3,"path",3)(4,"path",4)(5,"path",5)(6,"path",6)(7,"path",7),i(),u(8),i()),o&2&&(s(8),m(" ",r.buttonText,`
`))},encapsulation:2})}}return e})();var S=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=l({providers:[C],imports:[f,h]})}}return e})();export{L as a,S as b};
