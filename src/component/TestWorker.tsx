import React, { useEffect } from 'react';

const TestWorker = () => {
  useEffect(() => {
    const worker = new Worker('./js/worker.message.js');
    console.log('chile ===>', worker);
    // worker.onerror = () => {
    //   console.error('chile worker error');
    // };
    // worker.onmessageerror = () => {
    //   console.log('chile worker message error');
    // };
    // worker.onmessage = (e) => {
    //   console.log(e.data);
    // };
    // worker.postMessage('m1');
    // console.log('chile ==== 11 =>', worker);
    // worker.postMessage('m2');
    // worker.postMessage('m3');
    // worker.postMessage('m4');
  }, []);

  return (
    <div>test worker</div>
  );
};

export default TestWorker;
