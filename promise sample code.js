
const promise = new Promise((resolve, reject) => {
  let iscleanroom= false;
  if(iscleanroom){
    resolve("clean")
  }

});

console.log(promise);

promise
  .then((res) => {
    console.log("room is clean");
  })
  .catch((error) => {
    console.log("not clean");
  });

//   catch=>to handle error

