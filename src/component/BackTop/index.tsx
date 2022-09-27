import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import style from './style.less';

const PATHS = ['/follow'];

const BackTop = () => {
  const location = useLocation();
  const [targeted, setTargeted] = useState(false);
  const [arrived, setArrived] = useState(false);

  const handleScroll = () => {
    setArrived(document.documentElement.scrollTop > 1000);
  };

  const handleClick = () => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
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
    <div
      className={style.container}
      style={{ display: targeted && arrived ? 'block' : 'none' }}
      onClick={handleClick}
    >
      返回
    </div>
  );
};

export default BackTop;
