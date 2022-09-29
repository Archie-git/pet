import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import initServiceWorker from './util/initServiceWorker';
import initMessageWorker from './util/initMessageWorker';
import PWAGuide from './component/PWAGuide';
import MessageDB from './common/database';
import Http from './common/http';
import App from './App';

const root = document.getElementById('root') as Element | DocumentFragment;
const prepared = window.matchMedia('(display-mode: standalone)').matches || ENV.MODE === 'DEVELOPMENT';

ReactDOM.createRoot(root).render(prepared ? <App /> : <PWAGuide />);

initMessageWorker();
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
  MessageDB.put({
    id: 1000,
    sender: 'Archie',
    recipient: 'Dogge',
    content: 'Hello World 2021',
    time: 1664262608197,
  });
  MessageDB.put({
    id: 1001,
    sender: 'Archie',
    recipient: 'Dogge',
    content: 'Hello World 2022',
    time: 1664262608197,
  });
  MessageDB.update({
    id: 1001,
    sender: 'Archie',
    recipient: 'Dogge',
    content: 'Hello World 2023',
    time: 1664262608197,
  });
  MessageDB.getAll().then((ret) => {
    console.log('chile ======>data 999 222 =>', ret);
  }).catch((err) => {
    console.log('chile ======>data 999 333 =>', err);
  });
}, 2000);
