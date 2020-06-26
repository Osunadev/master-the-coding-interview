function getFactorial(num) {
  let res = 1;
  let numCount = 2;

  while (numCount <= num) {
    res = res * numCount;
    numCount++;
  }

  return res;
}

console.log(getFactorial(10));
