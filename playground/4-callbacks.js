// setTimeout(() => {
//   console.log('Two seconds are up');
// }, 2000);

// const names = ['Andrew', 'Jen', 'Jess'];
// const shortNames = names.filter(name => {
//   return name.length <= 4;
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0
//     };

//     callback(data);
//   }, 2000);
// };

// geocode('Philadelphia', data => {
//   console.log(data);
// });

// const add = (num1, num2, callback) => {
//   setTimeout(() => {
//     callback(num1 + num2);
//   }, 2000);
// };

// add(1, 4, sum => {
//   console.log(sum);
// });

const doWorkCallback = callback => {
  setTimeout(() => {
    //callback('This is my error!', undefined);
    callback(undefined, [1, 4, 7]);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }

  console.log(result);
});
