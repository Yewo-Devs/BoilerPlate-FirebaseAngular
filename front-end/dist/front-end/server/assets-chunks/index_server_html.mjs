export default `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title></title>
    <base href="/"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="icon" type="image/x-icon" href="favicon.ico"/>
    <script>
      const theme = localStorage.getItem("theme");
      if (theme !== null) {
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        }
      }
    </script>
    <!-- Google tag (gtag.js) -->
    <script async="" src="https://www.googletagmanager.com/gtag/js?id=<YOUR ID HERE>"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "<YOUR ID HERE>");
    </script>
  <link rel="stylesheet" href="styles-WZ2IOCQ3.css"></head>
  <body><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script>
    <app-root></app-root>
  <link rel="modulepreload" href="chunk-BTCAHYKF.js"><link rel="modulepreload" href="chunk-DSHMKTRR.js"><link rel="modulepreload" href="chunk-ZEON36AT.js"><link rel="modulepreload" href="chunk-2MHBVPJL.js"><link rel="modulepreload" href="chunk-PND7Q2S5.js"><link rel="modulepreload" href="chunk-HOHR253E.js"><link rel="modulepreload" href="chunk-MQ46MCW7.js"><link rel="modulepreload" href="chunk-U3QUSVWF.js"><link rel="modulepreload" href="chunk-W5MTSLKP.js"><link rel="modulepreload" href="chunk-G6VSAEU6.js"><script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-ZNBCDJ24.js" type="module"></script></body>
</html>
`;