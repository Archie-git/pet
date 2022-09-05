import React, { useState } from 'react';
import style from './style.less';

interface Props {
  children: any,
}

export const Skeleton = (props: Props) => {
  return (
    <div className={style.bar}>
      {props.children}
    </div>
  );
};

export const withSkeleton = (PageSkeleton: any, PageContent: any) => {
  return () => {
    const [loading, setLoading] = useState(true);
    const handleLoadingFinish = () => {
      setLoading(false);
    };

    return (
      <>
        <div style={{ display: loading ? 'block' : 'none' }}>
          <PageSkeleton />
        </div>
        <div style={{ display: loading ? 'none' : 'block' }}>
          <PageContent onLoadingFinish={handleLoadingFinish} />
        </div>
      </>
    );
  };
};
