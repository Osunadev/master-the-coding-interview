// Implementation by myself at first try
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currElmtIdx = i;

    // Checking if the curr element is less than
    // the previous elements of the array
    for (let j = i - 1; j >= 0; j--) {
      // If the previous element is less than the curr element
      if (array[currElmtIdx] < array[j]) {
        let temp = array[currElmtIdx];
        array[currElmtIdx] = array[j];
        array[j] = temp;

        currElmtIdx = j;
      } else {
        // We break because we know that previous elements
        // won't be bigger than our curr element
        break;
      }
    }
  }
}

// This implementation is more concise, didn't implement it
// by myself, is from the web
function insertionSort2(array) {
  for (let i = 0; i < array.length; i++) {
    let key = array[i];
    j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = key;
  }
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
insertionSort2(numbers);
console.log(numbers);
