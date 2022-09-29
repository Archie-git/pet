const initBothFromRemote = () => {
  console.log('chile ===>initBothFromRemote');
};

const initStoreFromDB = () => {
  console.log('chile ===>initStoreFromDB');
};

const initMessageWorker = () => {
  if (Notification.permission !== 'granted') {
    Notification.requestPermission().then((permission) => {
      if (permission !== 'granted') {
        window.alert('Notification需要授权');
      }
    });
  }

  window.addEventListener('online', () => {
    console.log('chile =====online==>');
  });
  window.addEventListener('offline', () => {
    window.alert('请检查您的网络连接');
  });

  if (navigator.onLine) {
    // 从服务器获取聊天data，用于更新redux和indexDB（考虑通过serviceWorker减少阻塞）
    // 查询聊天记录时，从IndexDB查询
    initBothFromRemote();
  } else {
    // 通过indexedDB来对store初始化
    initStoreFromDB();
  }

  // 1. PWA React 仿即刻兴趣社区
  // 2. PWA Vue 即刻后台管理系统
  // 3. 有空将两者集成到Electron
};

export default initMessageWorker;
