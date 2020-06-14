// We created a new Class to keep things DRY
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  // Constructor is all about creating the first Linked List node
  constructor(value) {
    this.head = new Node(value);

    this.tail = this.head;
    // This is optional: Keeping the track of the length of the Linked List
    this.length = 1;
  }

  // O(1)
  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;

    return this;
  }

  // O(1)
  append(value) {
    const newNode = new Node(value);
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
    const newIndexNode = new Node(value, currentNode);
    // Updating the next ptr to the left node of the specified idx
    prevNode.next = newIndexNode;

    this.length++;

    return this;
  }

  unshift() {
    this.head = this.head.next;
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
    const currentNode = prevNode.next;
    // We only need to change the next ptr of the previous node, cause the
    // garbage collector will remove the unused Node object
    prevNode.next = currentNode.next;

    // This means we removed the last node
    if (currentNode.next === null) {
      this.tail = prevNode;
    } else {
      this.tail = currentNode.next;
    }

    this.length--;
  }

  // Reversing a linked list is a little bit tricky, we need to use 3 pointers
  // Basicaly we use a curr pointer to change the next pointer of the curr
  // node to now point to the prev node, we keep doing thing until curr reaches to a null value
  reverse() {
    // If there's only one node
    if (!this.head.next) return this.head;

    let prev = null;
    let curr = this.head;
    let next;

    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    // Now, our previous head node becomes our last node (tail)
    this.tail = this.head;
    // Making the last node, the head node (it's the inverse)
    this.head = prev;

    return this;
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

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(3, 99);
myLinkedList.remove(5);

console.log(myLinkedList.getList());
myLinkedList.reverse();
console.log(myLinkedList.getList());
console.log(myLinkedList);
