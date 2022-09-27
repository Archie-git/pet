import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import Store from './store';
import MePage from './page/me';
import UserPage from './page/user';
import HomePage from './page/home';
import LoginPage from './page/login';
import ErrorPage from './page/error';
import MomentPage from './page/moment';
import FollowPage from './page/follow';
import PlanetPage from './page/planet';
import SearchPage from './page/search';
import CreatePage from './page/create';
import CommunityPage from './page/community';
import NotificationPage from './page/notification';
import NeighbourhoodPage from './page/neighbourhood';
import './App.css';

const App = () => {
  useEffect(() => {
    if (!navigator.onLine) {
      window.alert('请检查您的网络连接...');
    }
    window.onerror = (message, url, line) => {
      console.log('chile =uncaught error=>', message, url, line);
      return false;
    };
    return () => {
      // todo.archie   收集用户访问信息
      const data = { userId: 1000, time: 10000 };
      navigator.sendBeacon('/v1/collect', JSON.stringify(data));
    };
  }, []);
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="404" element={<ErrorPage />} />
          <Route path="/" element={<HomePage />}>
            <Route path="me" element={<MePage />} />
            <Route path="user" element={<UserPage />} />
            <Route path="follow" element={<FollowPage />} />
            <Route path="planet" element={<PlanetPage />} />
            <Route path="neighbourhood" element={<NeighbourhoodPage />} />
            <Route path="moment" element={<MomentPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="create" element={<CreatePage />} />
            <Route path="community" element={<CommunityPage />} />
            <Route path="notification" element={<NotificationPage />} />
            <Route index element={<Navigate to="/follow" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

// todo.archie requestAnimationFrame()
