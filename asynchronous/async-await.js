// 3. Async-await

const userInfoDetail = function () {
  return new Promise(function (resolve, reject) {
    const user = { id: 1, name: "John", city: "America", password: "12345" };
    setTimeout(() => {
      let flag = true;

      if (flag) {
        resolve(user);
      } else {
        reject({ message: "Server Error " });
      }
    }, 4000);
  });
};

const userInfoMoney = function () {
  return new Promise(function (resolve, reject) {
    const money = { money: 5000000 };
    setTimeout(() => {
      let flag = true;

      if (flag) {
        resolve(money);
      } else {
        reject({ message: "Server Error " });
      }
    }, 4000);
  });
};



// how to handle in async-await

async function userDetail() {
  try {
    const user = await userInfoDetail();
    console.log(user);
    const money = await userInfoMoney();
    console.log(money);
  } catch (err) {
    console.log(err);
  }
}

userDetail();
