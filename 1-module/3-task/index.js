function ucFirst(str) {
  if (str === "") {
    return "";
  }
  firstLtr = str[0];
  return firstLtr.toUpperCase() + str.slice(1);
}
