function userInfo() {
  setTimeout(() => {
    return { id: 1, name: "John" };
  }, 3000);
}

const user = userInfo(); // { id: 1, name: "John" } // undefined

console.log("Fetching User Info");
console.log(user); // undefined 
console.log("Fetching User Info Completed");


// 3 ways -->
// Promises , callback and asyn-await 
