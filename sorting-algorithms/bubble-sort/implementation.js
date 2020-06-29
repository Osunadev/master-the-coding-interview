function bubbleSort(array) {
  let temp;

  for (let i = array.length - 1; i >= 1; i--) {
    for (let j = 0; j <= i; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

const unsortedArray = [45, 12, 4, 11, 7, 98, 2, 10, 54];

bubbleSort(unsortedArray);
console.log(unsortedArray);
