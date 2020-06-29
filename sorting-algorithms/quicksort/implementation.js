// Low and high are the indexes that constraint
// the subarray that needs to be partitioned
function quickSort(array, low, high) {
  // If we're left with just a single element array
  if (array.length < 2) return;

  // This means the pivot isn't located in either of
  // the edges (left or right) of the array or subarray
  if (low < high) {
    // Our array is partitioned and we get the
    // pivot index, so that we can know where to
    // split our array to form subarrays
    const pivotIdx = partitioning(array, low, high);

    // Remember that the pivot doesn't move of place
    quickSort(array, low, pivotIdx - 1);
    quickSort(array, pivotIdx + 1, high);
  }
}

// Function that partitions an array based on the pivot
// selected at the beginning, which is the high element
// and, returns the final index of the repositioned pivot.
function partitioning(array, low, high) {
  // The index of the last smaller than pivot element position
  let currSmallIdx = low - 1;
  let pivot = array[high];

  // We go until we reach the previous element of the pivot (high)
  for (let i = low; i < high; i++) {
    if (array[i] < pivot) {
      currSmallIdx++;
      // Swaping elements and keeping the greater elements
      // than the pivot into the right portion of the currSmallIdx
      swap(array, currSmallIdx, i);
    }
  }

  // Positioning the pivot where it belongs
  swap(array, currSmallIdx + 1, high);
  // Returing the final index of the pivot element
  return currSmallIdx + 1;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
quickSort(numbers, 0, numbers.length - 1);
console.log('Sorted numbers: ', numbers);
