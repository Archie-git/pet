import React, { useEffect } from 'react';
// @ts-ignore
import Worker2 from '../../public/hello.worker';

const TestWorker = () => {
  useEffect(() => {
    const worker = new Worker('./worker.js');
    console.log('chile =======>', worker);
    console.log('chile =======22=>', new Worker(Worker2));
  }, []);

  return (
    <div>test worker</div>
  );
};

export default TestWorker;
