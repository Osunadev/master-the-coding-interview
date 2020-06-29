function mergeSort(array) {
  // Base Case
  if (array.length === 1 || array.length === 0) return array;

  const firstHalf = Math.trunc(array.length / 2);

  // Dividing the current array in 2, left and right subarrays
  const leftSubArray = array.slice(0, firstHalf);
  const rightSubArray = array.slice(firstHalf);

  return ascendMerge(mergeSort(leftSubArray), mergeSort(rightSubArray));
}

function ascendMerge(arr1, arr2) {
  let mergedArr = [];
  let arr1Idx = 0;
  let arr2Idx = 0;

  while (arr1Idx < arr1.length || arr2Idx < arr2.length) {
    if (arr1Idx < arr1.length && arr2Idx < arr2.length) {
      if (arr1[arr1Idx] < arr2[arr2Idx]) {
        mergedArr.push(arr1[arr1Idx++]);
      } else {
        mergedArr.push(arr2[arr2Idx++]);
      }
    } else if (arr1Idx >= arr1.length) {
      mergedArr.push(arr2[arr2Idx++]);
    } else if (arr2Idx >= arr2.length) {
      mergedArr.push(arr1[arr1Idx++]);
    }
  }

  return mergedArr;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const orderedNumbers = mergeSort(numbers);
console.log(orderedNumbers);
