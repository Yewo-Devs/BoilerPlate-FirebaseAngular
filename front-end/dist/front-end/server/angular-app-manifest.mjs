
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 5074, hash: '54c9edff37a48575b19229e2d62f3699c27576ac98eeb29dbb936e3b70105c8b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2121, hash: '420d02ce2eaba8e56c784fb8035f6f5e872c99754f81b1f9b24f11eb6bbbdba4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WZ2IOCQ3.css': {size: 60322, hash: 'MgWNqBOL5Tc', text: () => import('./assets-chunks/styles-WZ2IOCQ3_css.mjs').then(m => m.default)}
  },
};
