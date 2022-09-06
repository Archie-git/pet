import React, { useEffect, useMemo, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ThemeContext from '../../common/context';
import HomeHeader from './component/HomeHeader';
import BackTop from '../../component/BackTop';

const HomePage = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<'light'|'dark'>('light');
  useEffect(() => {
    if (localStorage.getItem('logined') !== 'YES') {
      navigate('/login');
    }
  }, []);
  const themeValue = useMemo(() => ({
    theme,
    toggle: () => { setTheme(theme === 'light' ? 'dark' : 'light'); },
  }), [theme]);
  return (
    <ThemeContext.Provider value={themeValue}>
      <HomeHeader />
      <BackTop />
      <Outlet />
    </ThemeContext.Provider>
  );
};

export default HomePage;
