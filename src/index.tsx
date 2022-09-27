import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import initServiceWorker from './util/initServiceWorker';
import initMessageWorker from './util/initMessageWorker';
import PWAGuide from './component/PWAGuide';
import Http from './common/http';
import App from './App';
import MessageDB from "./common/database";

const root = document.getElementById('root') as Element | DocumentFragment;
const prepared = window.matchMedia('(display-mode: standalone)').matches || ENV.MODE === 'DEVELOPMENT';

ReactDOM.createRoot(root).render(prepared ? <App /> : <PWAGuide />);

// initMessageWorker();
initServiceWorker();

// todo.archie remove
Http.post('/v1/api/ddd', {
  headers: new Headers({ 'Content-Type': 'on' }),
  body: { name: 'archie' },
}).then((ret: any) => {
  console.log('chile ======ret=>', ret);
}, (err: any) => {
  console.log('chile ======err=>', err);
});

// todo.archie remove
setTimeout(() => {
  MessageDB.insert();
  MessageDB.query();
  MessageDB.update();
}, 2000);
