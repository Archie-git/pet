import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import initServiceWorker from './util/initServiceWorker';
import Http from './common/http';
import App from './App';
// import initMessageWorker from './util/initMessageWorker';

ReactDOM.createRoot(
  document.getElementById('root') as Element | DocumentFragment,
).render(<App />);

// initMessageWorker();

if (ENV.MODE === 'PRODUCTION') {
  initServiceWorker();
}

Http.post('/v1/api/ddd', {
  headers: new Headers({ 'Content-Type': 'on' }),
  body: { name: 'archie' },
}).then((ret: any) => {
  console.log('chile ======ret=>', ret);
}, (err: any) => {
  console.log('chile ======err=>', err);
});
