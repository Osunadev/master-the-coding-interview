// The time complexity is O(n)
function iterativeFibonacci(n) {
  let leftTerm = 0;
  let rightTerm = 1;
  /**
   * We give fibNum a value of n, in case that n is 0 or 1,
   * because it wouldn't enter into the for loop, so that'd
   * be the default value to be returned.
   */
  let fibNum = n;

  for (let i = 2; i <= n; i++) {
    fibNum = leftTerm + rightTerm;

    // Now, we move along 1 position
    leftTerm = rightTerm;
    rightTerm = fibNum;
  }

  return fibNum;
}

console.log(iterativeFibonacci(10));
