function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let currMinIdx = i;

    for (let j = i + 1; j < array.length; j++) {
      // If the certain element is smaller than the currMin
      if (array[j] < array[currMinIdx]) {
        currMinIdx = j;
      }
    }

    // Swaping values
    let temp = array[i];
    array[i] = array[currMinIdx];
    array[currMinIdx] = temp;
  }
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

selectionSort(numbers);
console.log(numbers);
