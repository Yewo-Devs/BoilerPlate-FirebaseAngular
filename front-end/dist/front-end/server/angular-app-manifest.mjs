
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 5382, hash: '16d0b20d345b0d36d7842f5025ce3b52a8d59f54305ee1557d596eecd4ebf926', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2407, hash: 'e2609f1fc6ac2327e9bb0d0192ff2b6c52f8f7a66477ce72a67c910cf0f18bb7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WZ2IOCQ3.css': {size: 60322, hash: 'MgWNqBOL5Tc', text: () => import('./assets-chunks/styles-WZ2IOCQ3_css.mjs').then(m => m.default)}
  },
};
