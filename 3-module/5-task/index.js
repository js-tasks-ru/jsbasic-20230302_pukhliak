function getMinMax(str) {
  let arr = str.split(" ");
  let newArr = arr
    .map((i) => Number(i))
    .filter((i) => !isNaN(i))
    .sort((a, b) => a - b);
  let obj = {};
  obj.min = newArr[0];
  obj.max = newArr[newArr.length - 1];
  return obj;
}
