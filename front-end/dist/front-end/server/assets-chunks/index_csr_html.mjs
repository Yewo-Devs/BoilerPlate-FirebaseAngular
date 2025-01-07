export default `<!DOCTYPE html>
<html lang="en" data-beasties-container="">
  <head>
    <meta charset="utf-8">
    <title></title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
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
  <style>@font-face{font-family:Lexend;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/lexend/v23/wlpwgwvFAVdoq2_v9KQU4Wc.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Lexend;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/lexend/v23/wlpwgwvFAVdoq2_v9aQU4Wc.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Lexend;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/lexend/v23/wlpwgwvFAVdoq2_v-6QU.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}*,:before,:after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}*{font-family:Lexend,sans-serif;box-sizing:border-box;margin:0;padding:0}*{outline:none!important;text-decoration:none!important;box-shadow:none!important;-webkit-tap-highlight-color:transparent!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body{min-height:100vh;background-color:#f9fafb}@layer base,primeng,app;@-webkit-keyframes ball-clip-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}</style><link rel="stylesheet" href="http://localhost:4000/styles-WZ2IOCQ3.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="http://localhost:4000/styles-WZ2IOCQ3.css"></noscript></head>
  <body ngcm="">
    <app-root></app-root>
  <link rel="modulepreload" href="http://localhost:4000/chunk-BTCAHYKF.js"><link rel="modulepreload" href="http://localhost:4000/chunk-DSHMKTRR.js"><link rel="modulepreload" href="http://localhost:4000/chunk-ZEON36AT.js"><link rel="modulepreload" href="http://localhost:4000/chunk-2MHBVPJL.js"><link rel="modulepreload" href="http://localhost:4000/chunk-PND7Q2S5.js"><link rel="modulepreload" href="http://localhost:4000/chunk-HOHR253E.js"><link rel="modulepreload" href="http://localhost:4000/chunk-KR6BTNRN.js"><link rel="modulepreload" href="http://localhost:4000/chunk-U3QUSVWF.js"><link rel="modulepreload" href="http://localhost:4000/chunk-W5MTSLKP.js"><link rel="modulepreload" href="http://localhost:4000/chunk-G6VSAEU6.js"><script src="http://localhost:4000/polyfills-FFHMD2TL.js" type="module"></script><script src="http://localhost:4000/main-KJVQGF3M.js" type="module"></script></body>
</html>
`;