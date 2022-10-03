// 1 - Callback

// make as a callback
function userInfoFromDb(id, callback) {
  const userData = [
    { id: 1, name: "John", city: "America" },
    { id: 2, name: "Max", city: "America" },
    { id: 3, name: "Raju", city: "America" },
  ];

  setTimeout(() => {
    userData.forEach((user) => {
      if (user.id == id) {
        callback({ ...user });
      }
    });
  }, 2000);
}

function userMoneyDetail(id, name, callback) {
  const userMoney = [
    { id: 1, name: "John", money: 20000 },
    { id: 2, name: "Max", money: 40000 },
    { id: 3, name: "Raju", money: 40000 },
  ];

  setTimeout(() => {
    userMoney.forEach((user) => {
      if (user.id == id && user.name == name) {
        callback({ ...user });
      }
    });
  }, 2000);
}

function sendEmail(name, callback) {
  setTimeout(() => {
    console.log("Send Email to ", name);
  }, 2000);
}



// callbacnk hell  , function () {}  , () =>{ }
userInfoFromDb(2, function (data) {
  console.log("Fetch User Info " , data);

  // userMoneyDetail(data.id, data.name, function (money) {
  //   console.log(money);

  //   sendEmail(money.name, function () {});
  // });

});
