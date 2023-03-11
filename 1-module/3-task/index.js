function ucFirst(str) {
  if (str === "") {
    return "";
  }
  let firstLtr = str[0];
  return firstLtr.toUpperCase() + str.slice(1);
}
