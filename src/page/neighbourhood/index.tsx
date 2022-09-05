import React, { useEffect, useState } from 'react';

const NeighbourhoodPage = () => {
  const [granted, setGranted] = useState(true);
  const [location, setLocation] = useState<{ latitude: number, longitude: number } | null>(null);
  useEffect(() => {
    // todo.archie locaion放全局redux；
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
      console.log(`https://apis.map.qq.com/ws/geocoder/v1/?key=LOABZ-ONL6F-CLXJZ-N4A2L-AB74O-ITFWZ&location=${latitude},${longitude}`);
    }, () => {
      setGranted(false);
    });
  }, []);
  return granted ? location === null ? null : (
    <div>{JSON.stringify(location)}</div>
  ) : (
    <div>
      <div>未授权</div>
    </div>
  );
};

export default NeighbourhoodPage;
