console.log("Start ");

var count = 0;
var start = true;

setImmediate(() => {
  start = false;
}, 0);

while (start) {
  console.log("While loop ", count);
  count++;
}

console.log("End");

// let start = true;
// let count = 0;

// setTimeout(() => {
//   start = false;
//   console.log("Set timeout executed !!! ", start);
// }, 1000); // after 1 sec

// setTimeout(() => {
//   while (start) {
//     count++;
//     console.log("While Loop ", count);
//   }
// }, 500 );
