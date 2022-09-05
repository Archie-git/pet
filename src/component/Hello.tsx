import React from 'react';
import { useSelector } from 'react-redux';
import useTitle from '../hook/useTitle';

const Hello = () => {
  const isLoading = useSelector((state: any) => state.app.isLoading);
  // useTitle('Dogge is Here');
  return (
    <div>
      <div>{isLoading ? 'loading' : 'not loading'}</div>
    </div>
  );
};

export default Hello;
