new Promise((resolve, reject) => {
  reject('error01');
}).then((ret) => {
  console.log('chile ======1=>', ret);
}, (err) => {
  console.log('chile ======2=>', err);
}).then((ret) => {
  console.log('chile ======3=>', ret);
}, (err) => {
  console.log('chile ======4=>', err);
});
