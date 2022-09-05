import React from 'react';
import Hello from '../../component/Hello';
import TestWorker from '../../component/TestWorker';
import Store from '../../store';
import { setLoading } from '../../store/action';

const TestComponent = () => {
  const handleClick = () => {
    Store.dispatch(setLoading(true));
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>Click</button>
      <Hello />
      <TestWorker />
    </div>
  );
};

export default TestComponent;
