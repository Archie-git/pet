const initServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    // const timer = setTimeout(() => {
    //   fetch('http://localhost:3000/zzz.txt');
    // }, 1000);
    navigator.serviceWorker.register('./worker.service.js', { scope: '../' }).then((registration) => {
      // registration.update().then(() => {
      //   console.log('chile ==== 更新成功 ===》');
      //   setTimeout(() => {
      //     fetch('https://p1.ssl.qhimg.com/dr/270_500_/t01ad07a02776ef1d3b.jpg?size=640x480');
      //   }, 1000);
      // });
      // setTimeout(() => {
      //   fetch('https://p1.ssl.qhimg.com/dr/270_500_/t01ad07a02776ef1d3b.jpg?size=640x480');
      // }, 1000);
      console.log('chile =注册成功=>', registration);
      registration.addEventListener('updatefound', () => {
        // 此事件会在服务工作者线程开始安装新版本时触发
        console.log('chile =updatefound111=>');
        navigator.serviceWorker.getRegistration().then((ret) => {
          // registration.update().then(() => {
          //
          // });
          // ret?.unregister().then(() => {
          //   clearInterval(timer);
          //   window.location.reload();
          // });
        });
      });
      // window.addEventListener('unload', () => {
      //   registration.unregister().then();
      // });
    }).catch(() => {
      console.error('chile =注册失败=>');
    });
    navigator.serviceWorker.oncontrollerchange = () => {
      // 此事件在获得新激活的 ServiceWorkerRegistration 时触发。
      console.log('chile =controller change=>');
    };
    navigator.serviceWorker.onmessage = () => {
      // 在关联的服务工作者线程触发 ErrorEvent 错误事件时会调用指定的事件处理程序。
      console.log('chile =message=>');
    };
    navigator.serviceWorker.onmessageerror = () => {
      // 在服务工作者线程触发 MessageEvent 事件时会调用指定的事件处理程序。
      console.error('chile =message error=>');
    };
    navigator.serviceWorker.controller?.addEventListener('statechange', () => {
      // 此事件会在 ServiceWorker.state 变化时发生。
      console.log('chile =controller statechange=>');
    });
    navigator.serviceWorker.controller?.addEventListener('error', () => {
      console.error('chile =controller error=>');
    });
  }
};

export default initServiceWorker;
