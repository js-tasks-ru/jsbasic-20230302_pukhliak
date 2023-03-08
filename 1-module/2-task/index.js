/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  let str = name;

  if (str === null) {
    return false;
  } else if (str.length == 0 || str.length < 4) {
    return false;
  } else if (str.indexOf(" ") !== -1) {
    return false;
  } else {
    return true;
  }
}

function sayHello() {
  let userName = prompt("Введите ваше имя");

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print("Некорректное имя");
  }
}
