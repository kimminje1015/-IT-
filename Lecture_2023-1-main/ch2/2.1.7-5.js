const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.allSettled([promise1, promise2])
  .then((result) => {
    console.log(result); // ['성공1', '성공2'];
  })
  .catch((error) => {
    console.error(error);
  });
