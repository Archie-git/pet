import React from 'react';
import { Provider } from 'react-redux';
import Store from './store';
import { setLoading } from './store/action';
import Hello from './component/Hello';
import TestWorker from './component/TestWorker';

const App = () => {
  const handleClick = () => {
    Store.dispatch(setLoading(true));
  };

  return (
    <Provider store={Store}>
      <button type="button" onClick={handleClick}>Click</button>
      <Hello />
      <TestWorker />
    </Provider>
  );
};

export default App;
