function quickSort(array) {
  // If we're left with just a single element array
  if (array.length < 2) return array;

  // Our array is partitioned and we get the
  // pivot index, so that we can know where to
  // split our array
  const pivotIdx = partitioning(array);
  const smallThanPivot = array.slice(0, pivotIdx);
  const largeThanPivot = array.slice(pivotIdx + 1);

  return [
    ...quickSort(smallThanPivot),
    array[pivotIdx],
    ...quickSort(largeThanPivot),
  ];
}

// Function that partitions an array based on the pivot
// selected at the beginning, which is the last element
// and, returns the final index of the repositioned pivot.
function partitioning(array) {
  // The index of the last smaller than pivot
  // element position
  let currSmallIdx = -1;
  let pivot = array[array.length - 1];
  let temp;

  // We go until we reach the previous element of the pivot (last)
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] < pivot) {
      currSmallIdx++;
      // Swaping elements and keeping the greater elements
      // than the pivot into the right portion of the currSmallIdx
      temp = array[currSmallIdx];
      array[currSmallIdx] = array[i];
      array[i] = temp;
    }
  }

  // Storing the temp value of the 1rst element greater than te pivot
  temp = array[currSmallIdx + 1];
  array[currSmallIdx + 1] = pivot;
  array[array.length - 1] = temp;

  // Returing the final index of the pivot element
  return currSmallIdx + 1;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const orderedNumbers = quickSort(numbers);
console.log(orderedNumbers);
