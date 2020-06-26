/**
 * Given a number N, return the index value of the Fibonacci sequence, where the sequence is:
 *
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
 *
 * The pattern of the fibonacci sequence is that each value is the sum of the 2 previous
 * values, that means that 5 is the result of adding 2 + 3.
 */

// The recursive approach is actually easier than the iterative one
// But its time complexity is awful, it's exponential: O(2^n)
function fibonacciRecursive(n) {
  // Base Cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Recursive Case
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Now, using memoization, we get a time complexity of O(n)
// because we're avoiding unnecessary repeated calculations, but
// now, space complexity is O(n) because of the extra storage for
// our hash map: fibSequence
const fibSequence = {};

function memoizedFibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  } else if (fibSequence[n]) {
    // If our fib number is already stored in cache
    return fibSequence[n];
  } else {
    // If our fib number doesn't exist in cache
    const fibNum = memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
    fibSequence[n] = fibNum;
    return fibNum;
  }
}

// To have a better grasp of the recursive calling,
// we could visualize it in a tree structure
console.log(fibonacciRecursive(10));

// Getting the fib of 100 would take years if we would use
// the normal recursive approach without memoization
console.log(memoizedFibonacci(100));
console.log(fibSequence);
