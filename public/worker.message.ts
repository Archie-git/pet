self.onmessage = (e) => {
  console.log('chile ============ ww =>', self);
  if (e.data === 'm3') {
    for (let i = 0; i < 1000000001; i++) {
      if (i === 1000000000) {
        self.postMessage('callback3');
      }
    }
  }
  if (e.data === 'm2') {
    self.postMessage('callback2');
  }
  if (e.data === 'm1') {
    self.postMessage('callback1');
  }
  if (e.data === 'm4') {
    self.postMessage({ name: 'archieeewew '});
  }
};
