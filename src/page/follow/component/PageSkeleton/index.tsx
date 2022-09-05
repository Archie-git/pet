import React from 'react';
import { Skeleton } from '../../../../component/Skeleton';
import style from './style.less';

const FollowPageSkeleton = () => {
  return (
    <div className={style.container}>
      <Skeleton>
        <div style={{ height: '1rem', background: 'white' }} />
        <div style={{ marginTop: '2rem' }} />
        <div style={{ height: '1rem', background: 'white' }} />
        <div style={{ marginTop: '2rem' }} />
        <div style={{ height: '1rem', background: 'white' }} />
      </Skeleton>
    </div>
  );
};

export default FollowPageSkeleton;
