const initMessageWorker = () => {
  // Notification.requestPermission().then(() => {
  //   new Notification('Notification已授权');
  // }).catch(() => {
  //   console.log('chile ============= jiiijiji =>');
  //   window.alert('需要授权');
  // });

  // 打开进入到Home页面时，如果网络无链接，则从IndexDB获取messages构建填充
  // 关闭App或网络断开时，从redux注入到IndexDB
  // 查询聊天记录时，从IndexDB查询

  // 1. Electron React 仿照微信聊天、朋友圈
  // 2. PWA React 仿即刻兴趣社区
  // 3. Electron Vue 后台管理系统

  // DB初始化
  let db;
  const request = indexedDB.open('user', 1);
  request.onupgradeneeded = (event) => {
    // @ts-ignore
    db = event.target.result;
    if (db.objectStoreNames.contains('user')) {
      db.deleteObjectStore('user');
    }
    db.createObjectStore('user', { keyPath: 'name' });
  };
  request.onsuccess = (event) => {
    console.log('chile ====success=>');
    // @ts-ignore
    db = event.target.result;
    const txn = db.transaction('user', 'readwrite');
    const store = txn.objectStore('user');
    // 添加
    // const request2 = store.add({ name: 'dogge22', age: 11 })
    // request2.onsuccess = (event) => {
    //   console.log('chile successsss')
    // }
    // request2.onerror = (event) => {
    //   console.log('chile errrrrrrrr')
    // }
    // 查询
    // const request3 = store.get('dogge22')
    const request3 = store.getAll();
    console.log('chile ==== store =>', store);
    request3.onsuccess = (e: any) => {
      console.log('chile query success', e.target.result);
    };
    request3.onerror = (e: any) => {
      console.log('chile query error', e.target.result);
    };
  };
  request.onerror = () => {
    console.log('chile ====err=>');
  };
};

export default initMessageWorker;
