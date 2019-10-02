// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve([7, 4, 1]);
//     reject('Thing went wrong!');
//   }, 2000);
// });

// doWorkPromise
//   .then(result => {
//     console.log('Success!', result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// add(1, 2)
//   .then(sum => {
//     console.log(sum);

//     add(sum, 5)
//       .then(sum2 => {
//         console.log(sum2);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   })
//   .catch(e => {
//     console.log(e);
//   });

add(1, 1)
  .then(sum => {
    console.log(sum);
    return add(sum, 4);
  })
  .then(sum2 => {
    console.log(sum2);
  })
  .catch(e => {
    console.log(e);
  });
