import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import style from './style.less';

const PATHS = ['/follow'];

const BackTop = () => {
  const location = useLocation();
  const [targeted, setTargeted] = useState(false);
  const [arrived, setArrived] = useState(false);

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 1000 && !arrived) {
      setArrived(true);
    }
    if (document.documentElement.scrollTop <= 1000 && arrived) {
      setArrived(false);
    }
    console.log('chile ======>', document.documentElement.scrollTop);
    // // todo.archie
    // setArrived(false);
  };

  useEffect(() => {
    const value = PATHS.some((item) => location.pathname.startsWith(item));
    if (value) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }
    setTargeted(value);
  }, [location.pathname]);

  return (
    <div className={style.container} style={{ display: targeted && arrived ? 'block' : 'none' }}>返回</div>
  );
};

export default BackTop;
