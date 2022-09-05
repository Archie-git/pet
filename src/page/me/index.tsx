import React, { useEffect, useState } from 'react';
import style from './style.less';
import Test from './component/test';

const MePage = () => {
  const [data, setData] = useState({ name: '', age: 0 });
  useEffect(() => {
    fetch('https://www.fastmock.site/mock/3db4f15e56f6f8792ad5755dc1c1c101/v1/api/ddd')
      .then((res) => res.json())
      .then((res2) => { console.log(res2); });
  });
  return (
    <div className={style.container}>
      <div className={style.main}>Me Page</div>
      <Test />
      <div className={style.board}>tabs: 动态，点赞/评论，收藏，历史，圈子，设置</div>
      {/*<React.Suspense fallback={<div>spinner</div>}>*/}
      {/*  {data.name && <div>{JSON.stringify(data)}</div>}*/}
      {/*</React.Suspense>*/}
    </div>
  );
};

export default MePage;
