import{a as e}from"./chunk-6U5655YX.js";import{a as s}from"./chunk-HLDRKBUV.js";import{U as p,Z as a,t as n}from"./chunk-L2D5CQS2.js";var h=(()=>{class r{constructor(t){this.httpClient=t}getSubscription(t){return this.httpClient.get(e.apiUrl+"payment/get-subscription?userId="+t)}getTransactions(t,i,o){return this.httpClient.get(`${e.apiUrl}payment/get-user-transactions?userId=${t}&currentPage=${i}&pageSize=${o}`)}updatePaymentMethod(t){return this.httpClient.get(e.apiUrl+"payment/update-payment-method?subscriptionId="+t,{responseType:"text"})}cancelSubscription(t){return this.httpClient.get(e.apiUrl+"payment/cancel-subscription?subscriptionId="+t)}getPaymentPage(t){return this.httpClient.post(e.apiUrl+"payment/get-payment-page",t,{responseType:"text"}).pipe(n(i=>i))}static{this.\u0275fac=function(i){return new(i||r)(a(s))}}static{this.\u0275prov=p({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();export{h as a};
