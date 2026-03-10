function askPassword(login, password, success, failure) {
  const vowels = new Set(["a", "e", "i", "o", "u", "y"]);
  const loginLower = login.toLowerCase();
  const passLower = password.toLowerCase();

  let vowelCount = 0;
  let consLogin = [];
  let consPass = [];

  for (let ch of passLower) {
    if (vowels.has(ch)) {
      vowelCount++;
    } else {
      consPass.push(ch);
    }
  }

  for (let ch of loginLower) {
    if (!vowels.has(ch)) {
      consLogin.push(ch);
    }
  }

  const vowelsOk = vowelCount === 3;
  let consOk = consLogin.length === consPass.length;
  if (consOk) {
    for (let i = 0; i < consLogin.length; i++) {
      if (consLogin[i] !== consPass[i]) {
        consOk = false;
        break;
      }
    }
  }

  if (vowelsOk && consOk) {
    success(login);
  } else {
    let msg;
    if (!vowelsOk && !consOk) {
      msg = "Everything is wrong";
    } else if (!vowelsOk) {
      msg = "Wrong number of vowels";
    } else {
      msg = "Wrong consonants";
    }
    failure(login, msg);
  }
}

function main(login, password) {
  function onSuccess(login) {
    console.log(`Привет, ${login}!`);
  }

  function onFailure(login, errMsg) {
    console.log(
      `Кто-то пытался притвориться пользователем ${login}, но в пароле допустил ошибку: ${errMsg.toUpperCase()}.`,
    );
  }

  askPassword(login, password, onSuccess, onFailure);
}

main("login", "aaalgn");
main("login", "luagon");
main("login", "login");
main("login", "lgn");
main("login", "aaaaaa");
main("login", "aaalggn");
main("login", "aalan");
main("login", "aaang");
main("login", "xyz");
main("login", "abc");
main("admin", "aaadmn");
main("world", "ooowrld");
main("world", "wrld");
main("python", "yyythpn");
main("python", "pppythn");
