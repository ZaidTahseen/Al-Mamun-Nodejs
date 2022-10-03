// 2. Promise

// How to create promise in nodejs

const userInfo = new Promise(function (resolve, reject) {
  const user = { id: 1, name: "John", city: "America", password: "12345" };
  setTimeout(() => {
    let flag = true;

    if (flag) {
      resolve(user);
    } else {
      reject({ message: "Server Error " });
    }
  }, 2000);
});

const userMoney = new Promise(function (resolve, reject) {
    const money = { money : 50000 };
    setTimeout(() => {
      let flag = true;
      if (flag) {
        resolve(money);
      } else {
        reject({ message: "Bank Server Error " });
      }
    }, 2000);
  });

// handle promise
userInfo
    .then(function (data) {
        userMoney.then( ( money)=>{
            console.log(money);
        })
    })
    .catch( function (error) {
        console.log(error );
    })
