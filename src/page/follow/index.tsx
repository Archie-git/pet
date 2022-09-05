import React, { useEffect } from 'react';
import { withSkeleton } from '../../component/Skeleton';
import FollowPageSkeleton from './component/PageSkeleton';
import style from './style.less';

const DATA = [1, 2, 3, 4, 5, 6, 7, 8];

const FollowPageContent = (props: any) => {
  useEffect(() => {
    Promise.all([Promise.resolve('value1'), Promise.resolve('value2')]).then(() => {
      props?.onLoadingFinish();
    });
  });
  return (
    <div className={style.container}>
      <div className={style.moments}>
        {DATA.map((item, index) => {
          return (
            <div key={item} className={style.card}>{`item - ${index}`}</div>
          );
        })}
      </div>
      <div className={style.board}>
        <div className={style.info}>info</div>
        <div className={style.community}>circle</div>
      </div>
    </div>
  );
};

export default withSkeleton(FollowPageSkeleton, FollowPageContent);
