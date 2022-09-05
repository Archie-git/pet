import React, { useEffect, useMemo, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ThemeContext from '../../common/context';
import HomeHeader from './component/HomeHeader';

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
      <Outlet />
    </ThemeContext.Provider>
  );
};

export default HomePage;
