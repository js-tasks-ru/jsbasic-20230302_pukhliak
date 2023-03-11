function sumSalary(salaries) {
  let result = 0;
  for (let key in salaries) {
    if (isFinite(salaries[key])) {
      result += salaries[key];
    } else {
      result += 0;
    }
  }
  return result;
}
