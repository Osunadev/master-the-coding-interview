function getFactorial(num) {
  // Base Case
  if (num === 0 || num === 1) return 1;
  // Recursive Case
  return num * getFactorial(num - 1);
}

console.log(getFactorial(10));
