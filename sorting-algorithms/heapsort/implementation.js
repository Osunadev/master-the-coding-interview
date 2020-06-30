// Remember that a heap can be represented as a list
function buildHeap(array, endIndex) {
  // We start at the half of the designated portion of heap to be more efficient
  let halfHeapIdx = endIndex / 2;

  for (let i = halfHeapIdx; i >= 0; i--) {
    bubbleDown(array, endIndex, i);
  }
}

function bubbleDown(array, endHeapIdx, parentIdx) {
  let leftIdx = parentIdx * 2;
  let rightIdx = parentIdx * 2 + 1;
  let largestIdx = parentIdx;

  // If the current parent node has childs and the left child is largest
  if (leftIdx <= endHeapIdx && array[leftIdx] > array[largestIdx])
    largestIdx = leftIdx;

  if (rightIdx <= endHeapIdx && array[rightIdx] > array[largestIdx])
    largestIdx = rightIdx;

  // Means that there's at least one child bigger than parent
  if (largestIdx !== parentIdx) {
    let temp = array[parentIdx];
    array[parentIdx] = array[largestIdx];
    array[largestIdx] = temp;

    // Calling again the bubbleDown again, but now,
    // the child node becomes the new parent node
    bubbleDown(array, endHeapIdx, largestIdx);
  }
}

function heapSort(array) {
  // We only build the heap once, because, having that
  // as a base heap, we only do bubbling down of the
  // constrained subheap of the array
  const heapEndIdx = array.length - 1;

  buildHeap(array, heapEndIdx);

  for (let i = heapEndIdx; i > 0; i--) {
    // Always the root is the max item, because is a max heap
    let maxItem = array[0];
    // 'Deleting' the root node (max item) and
    // 'replacing' it with the end node of the heap
    array[0] = array[i];
    array[i] = maxItem;

    // Since we 'deleted' an element of the root and 'replaced'
    // with the end of the heap, we need to make sure that
    // this new replacement satisfies the rule of the largest node
    bubbleDown(array, i - 1, 0);
  }
}
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
heapSort(numbers);
console.log(numbers);
