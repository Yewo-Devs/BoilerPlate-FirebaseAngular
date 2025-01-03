
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 5074, hash: '3848c095309469a73e774f566359ad17d2a3d9f7bde264e4470d1fe55f34a26f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2121, hash: 'dfb032551dfa25e39bf4c6949f478e33ae9c6c3cb02298bdf03b76a20d3bd60f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WZ2IOCQ3.css': {size: 60322, hash: 'MgWNqBOL5Tc', text: () => import('./assets-chunks/styles-WZ2IOCQ3_css.mjs').then(m => m.default)}
  },
};
