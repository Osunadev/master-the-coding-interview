// We created a new Class to keep things DRY
class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkList {
  // Constructor is all about creating the first Linked List node
  constructor(value) {
    this.head = new Node(value);

    this.tail = this.head;
    // This is optional: Keeping the track of the length of the Linked List
    this.length = 1;
  }

  // O(1)
  prepend(value) {
    const newNode = new Node(value, null, this.head);
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  // O(1)
  append(value) {
    const newNode = new Node(value, this.tail, null);
    this.tail.next = newNode;

    // Now, the new node created passes to be the new tail
    this.tail = newNode;
    this.length++;

    return this;
  }

  traverseToIndex(index) {
    let currentNode = this.head;

    for (let i = 1; i <= index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  // O(n)
  insert(index, value) {
    if (index >= this.length) return this.append(value);
    else if (index == 0) return this.prepend(value);

    // We traverse to index - 1 because we want to be at 1 previous
    // node of our specified index node
    const prevNode = this.traverseToIndex(index - 1);

    // This is the node at the current index that we want to insert a new value
    const currentNode = prevNode.next;
    const newIndexNode = new Node(value, prevNode, currentNode);

    prevNode.next = newIndexNode;
    currentNode.prev = newIndexNode;

    this.length++;

    return this;
  }

  unshift() {
    const nextNode = this.head.next;
    nextNode.prev = null;

    this.head = nextNode;
    this.length--;

    return this;
  }

  // O(n)
  remove(index) {
    if (index === 0) return this.unshift();

    let doesIndexExceedsLength = index >= this.length;
    // We always want to traverse to a node before the specified index
    const prevNode = this.traverseToIndex(
      doesIndexExceedsLength ? this.length - 2 : index - 1
    );

    if (doesIndexExceedsLength) {
      prevNode.next = null;
      this.tail = prevNode;
    } else {
      const currentNode = prevNode.next;
      const nextNode = currentNode.next;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }

    this.length--;
  }

  getList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }
}

const myDoublyLinkList = new DoublyLinkList(10);

console.log(myDoublyLinkList.append(5));

console.log(myDoublyLinkList.append(16));
// myDoublyLinkList.prepend(1);

// myDoublyLinkList.insert(3, 99);
// console.log(myDoublyLinkList.getList());
// myDoublyLinkList.remove(5);

// console.log(myDoublyLinkList.getList());
