// let promise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("success");
//   } else {
//     reject("rejected");
//   }
// });
// console.log(promise);
// promise
//   .then((result) => {
//     console.log("then", result);
//   })
//   .catch((error) => {
//     console.log("catch", error);
//   });

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise pura nhi hua..");
    // resolve("Chombu");
  }, 5000);
});

p1.then(
  function success1(val) {
    console.log("val in then1:", val);
    const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve(val + " Singh");
          reject("Something")
      }, 5000);
    });
    return p2;
  },
  function error1(reason) {
    console.log(reason);
    const p2 = new Promise((resolve, reject) => {
        resolve("kaam ho gya")
    //   reject("Promise firse pura nahi hua..");
    });
    return p2;
  }
)
  .then(
    function success2(fullname) {
      console.log("fullname in then2:", fullname);
    },
    function error2(reason) {
      console.log(reason);
    }
  )
  .catch(function globalError(err) {
    console.log(err.message);
  });
