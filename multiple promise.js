// Promise Chaining:
// then()
// catch()

// then().then().then().catch()
// It is used to execute a promises in a sequenece.
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise1 is completed");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise2 is completed");
  }, 5000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise3 is completed");
  }, 7000);
});

promise1
  .then((data) => {
    console.log(data); //promise1 is resolved
    return promise2;
  })
  .then((data) => {
    console.log(data); //promise 2 is resolved
    return promise3;
  })
  .then((data) => {
    console.log(data); //promise 3 is resolved
  })
  .catch((error) => {
    console.log(error);
  });

//   promise.all method