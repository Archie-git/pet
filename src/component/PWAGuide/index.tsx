import React from 'react';

const PWAGuide = () => {
  const handleClick = (e: any) => {
    e.preventDefault();
    location.reload();
  };
  return (
    <>
      <p style={{ display: 'inline-block' }}>为提高您的使用体验，请下载安装app并从本地打开。</p>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" onClick={handleClick}>刷新</a>
    </>
  );
};

export default PWAGuide;
