import React from 'react';
import NotificationPageSkeleton from './component/PageSkeleton';

const MainContent = React.lazy(() => import('./component/MainContent'));

const NotificationPage = () => {
  return (
    <React.Suspense fallback={<NotificationPageSkeleton />}>
      <MainContent />
    </React.Suspense>
  );
};

export default NotificationPage;
