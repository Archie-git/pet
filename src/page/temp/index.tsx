import React from 'react';

const TempPage = () => {
  const handleClick = () => {
    new Notification('Titee', {
      badge: 'badge11',
      body: 'boooody',
      data: 'data111',
      // requireInteraction: true,
      // silent: false,
      tag: 'taggg',
    });
  };
  console.log('chile ==== temp =>');
  return (
    <div>
      <p>Temp Page</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default TempPage;
