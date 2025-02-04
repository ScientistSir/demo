
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/demo/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/demo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 506, hash: 'f51eeacab921b3dbe2105c059b86b91db47071678b42051828d80324c855c757', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1019, hash: '02206c4b6da52428fc0ae3c6a15871c7d17828bc9c8c40742567940f5652f125', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 694, hash: 'c3983045fdbcfc8f4941918b4660c6b99ce4a691fddb297ae792eb93b471167c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
