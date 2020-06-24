// This implementation is by my own by reading articles, is not implemented in the course

/**
 * This Binary Heap, can be implemented by only using one
 * array because of its nature of Binary Heap, that each child
 * can know where its parent is located by doing n/2
 */
class MinBinaryHeap {
  constructor() {
    // We need to insert 0, so that position 0 is taken and, with that,
    // we respect the property of n/2 (parent) and n (left child), n+1 (right child)
    this.data = [0];
    this.size = 0;
  }

  // Also known as percolate up (shifting elements)
  _bubbleUp(childKey) {
    // Only keeping the whole part of the division
    let parentKey = Math.trunc(childKey / 2);
    let tempVal;

    while (parentKey > 0) {
      // This comparison is because we're implementing a min heap
      if (this.data[childKey] < this.data[parentKey]) {
        tempVal = this.data[childKey];
        this.data[childKey] = this.data[parentKey];
        this.data[parentKey] = tempVal;

        // Now, the childKey becomes the parentKey
        childKey = parentKey;
        parentKey = Math.trunc(childKey / 2);
      } else {
        // If the child isn't lower than the parent
        break;
      }
    }
  }

  // Priority insert
  insert(value) {
    this.data.push(value);
    this.size++;
    // this.size is the key of the inserted child
    this._bubbleUp(this.size);
  }

  _bubbleDown(parentKey) {
    let leftChildKey = parentKey * 2;
    let tempVal;

    // Checking all of the child values
    while (leftChildKey <= this.size) {
      let childKey;

      // Meaning that it doesn't exist the right node
      if (leftChildKey + 1 > this.size) {
        childKey = leftChildKey;
      } else {
        // Comparing which of the 2 childs is the least: left or right
        if (this.data[leftChildKey] < this.data[leftChildKey + 1]) {
          childKey = leftChildKey;
        } else {
          childKey = leftChildKey + 1;
        }
      }

      tempVal = this.data[childKey];
      this.data[childKey] = this.data[parentKey];
      this.data[parentKey] = tempVal;

      parentKey = childKey;
      leftChildKey = childKey * 2;
    }
  }

  // Deletes the min (root) value
  delMin() {
    if (this.size > 1) {
      // We remove the last child, to be inserted as a replacement of the root
      const lastChild = this.data.pop();
      this.size--;

      const deletedRoot = this.data[1];
      this.data[1] = lastChild;

      // 1 is the key of the root
      this._bubbleDown(1);

      return deletedRoot;
    }
  }

  /**
   * Formatting a min heap, given an input array.
   * This would be O(n Log n) if we would've started creating the
   * min heap from the beginning of the array, but instead we start
   * from the middle, to have a time complexity of O(n) because
   * inserting an item in the middle of an array requires O(n) operations
   */
  buildHeap(array) {
    this.size = array.length;
    this.data = [0, ...array];
    // Starting from the mid of the array for efficienty
    let key = Math.trunc(array.length / 2);

    while (key > 0) {
      // We're going upwards to reach values above
      // until we reach the root value
      this._bubbleDown(key);
      key--;
    }
  }
}

const minHeap = new MinBinaryHeap();
minHeap.insert(2);
minHeap.insert(4);
minHeap.insert(6);
minHeap.insert(10);
minHeap.insert(8);
minHeap.insert(7);
minHeap.insert(11);
//      2
//    4   6
//  10 8 7 11
minHeap.insert(1);
//      1
//    2   6
//   4 8 7 11
// 10
console.log(minHeap.delMin());
//      2
//    4   6
//  10 8 7 11
console.log(minHeap.data);

const unformattedHeap = [9, 6, 5, 2, 3];
const formattedMinHeap = new MinBinaryHeap();

formattedMinHeap.buildHeap(unformattedHeap);
//      2
//    3   5
//  6   9
console.log('Formatted Min Heap', formattedMinHeap.data);
formattedMinHeap.delMin();
//      3
//    6   5
//  9
console.log(formattedMinHeap.data);
