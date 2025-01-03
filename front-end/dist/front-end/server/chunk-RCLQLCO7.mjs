import './polyfills.server.mjs';
import{b as U,c as w}from"./chunk-MMFP2FIZ.mjs";import{h as k,l as F}from"./chunk-S6KH3LOX.mjs";var f=0,t={START_BOUNDARY:f++,HEADER_FIELD_START:f++,HEADER_FIELD:f++,HEADER_VALUE_START:f++,HEADER_VALUE:f++,HEADER_VALUE_ALMOST_DONE:f++,HEADERS_ALMOST_DONE:f++,PART_DATA_START:f++,PART_DATA:f++,END:f++},B=1,_={PART_BOUNDARY:B,LAST_BOUNDARY:B*=2},p=10,O=13,Y=32,P=45,x=58,C=97,I=122,M=u=>u|32,R=()=>{},N=class{constructor(o){this.index=0,this.flags=0,this.onHeaderEnd=R,this.onHeaderField=R,this.onHeadersEnd=R,this.onHeaderValue=R,this.onPartBegin=R,this.onPartData=R,this.onPartEnd=R,this.boundaryChars={},o=`\r
--`+o;let n=new Uint8Array(o.length);for(let r=0;r<o.length;r++)n[r]=o.charCodeAt(r),this.boundaryChars[n[r]]=!0;this.boundary=n,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=t.START_BOUNDARY}write(o){let n=0,r=o.length,E=this.index,{lookbehind:l,boundary:d,boundaryChars:H,index:e,state:s,flags:A}=this,b=this.boundary.length,m=b-1,g=o.length,a,S,h=c=>{this[c+"Mark"]=n},V=c=>{delete this[c+"Mark"]},D=(c,i,T,y)=>{(i===void 0||i!==T)&&this[c](y&&y.subarray(i,T))},L=(c,i)=>{let T=c+"Mark";T in this&&(i?(D(c,this[T],n,o),delete this[T]):(D(c,this[T],o.length,o),this[T]=0))};for(n=0;n<r;n++)switch(a=o[n],s){case t.START_BOUNDARY:if(e===d.length-2){if(a===P)A|=_.LAST_BOUNDARY;else if(a!==O)return;e++;break}else if(e-1===d.length-2){if(A&_.LAST_BOUNDARY&&a===P)s=t.END,A=0;else if(!(A&_.LAST_BOUNDARY)&&a===p)e=0,D("onPartBegin"),s=t.HEADER_FIELD_START;else return;break}a!==d[e+2]&&(e=-2),a===d[e+2]&&e++;break;case t.HEADER_FIELD_START:s=t.HEADER_FIELD,h("onHeaderField"),e=0;case t.HEADER_FIELD:if(a===O){V("onHeaderField"),s=t.HEADERS_ALMOST_DONE;break}if(e++,a===P)break;if(a===x){if(e===1)return;L("onHeaderField",!0),s=t.HEADER_VALUE_START;break}if(S=M(a),S<C||S>I)return;break;case t.HEADER_VALUE_START:if(a===Y)break;h("onHeaderValue"),s=t.HEADER_VALUE;case t.HEADER_VALUE:a===O&&(L("onHeaderValue",!0),D("onHeaderEnd"),s=t.HEADER_VALUE_ALMOST_DONE);break;case t.HEADER_VALUE_ALMOST_DONE:if(a!==p)return;s=t.HEADER_FIELD_START;break;case t.HEADERS_ALMOST_DONE:if(a!==p)return;D("onHeadersEnd"),s=t.PART_DATA_START;break;case t.PART_DATA_START:s=t.PART_DATA,h("onPartData");case t.PART_DATA:if(E=e,e===0){for(n+=m;n<g&&!(o[n]in H);)n+=b;n-=m,a=o[n]}if(e<d.length)d[e]===a?(e===0&&L("onPartData",!0),e++):e=0;else if(e===d.length)e++,a===O?A|=_.PART_BOUNDARY:a===P?A|=_.LAST_BOUNDARY:e=0;else if(e-1===d.length)if(A&_.PART_BOUNDARY){if(e=0,a===p){A&=~_.PART_BOUNDARY,D("onPartEnd"),D("onPartBegin"),s=t.HEADER_FIELD_START;break}}else A&_.LAST_BOUNDARY&&a===P?(D("onPartEnd"),s=t.END,A=0):e=0;if(e>0)l[e-1]=a;else if(E>0){let c=new Uint8Array(l.buffer,l.byteOffset,l.byteLength);D("onPartData",0,E,c),E=0,h("onPartData"),n--}break;case t.END:break;default:throw new Error(`Unexpected state entered: ${s}`)}L("onHeaderField"),L("onHeaderValue"),L("onPartData"),this.index=e,this.state=s,this.flags=A}end(){if(this.state===t.HEADER_FIELD_START&&this.index===0||this.state===t.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==t.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}};function $(u){let o=u.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!o)return;let n=o[2]||o[3]||"",r=n.slice(n.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(E,l)=>String.fromCharCode(l)),r}function j(u,o){return k(this,null,function*(){if(!/multipart/i.test(o))throw new TypeError("Failed to fetch");let n=o.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!n)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new N(n[1]||n[2]),E,l,d,H,e,s,A=[],b=new w,m=i=>{d+=h.decode(i,{stream:!0})},g=i=>{A.push(i)},a=()=>{let i=new U(A,s,{type:e});b.append(H,i)},S=()=>{b.append(H,d)},h=new TextDecoder("utf-8");h.decode(),r.onPartBegin=function(){r.onPartData=m,r.onPartEnd=S,E="",l="",d="",H="",e="",s=null,A.length=0},r.onHeaderField=function(i){E+=h.decode(i,{stream:!0})},r.onHeaderValue=function(i){l+=h.decode(i,{stream:!0})},r.onHeaderEnd=function(){if(l+=h.decode(),E=E.toLowerCase(),E==="content-disposition"){let i=l.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);i&&(H=i[2]||i[3]||""),s=$(l),s&&(r.onPartData=g,r.onPartEnd=a)}else E==="content-type"&&(e=l);l="",E=""};try{for(var V=F(u),D,L,c;D=!(L=yield V.next()).done;D=!1){let i=L.value;r.write(i)}}catch{c=[L]}finally{try{D&&(L=V.return)&&(yield L.call(V))}finally{if(c)throw c[0]}}return r.end(),b})}export{j as toFormData};