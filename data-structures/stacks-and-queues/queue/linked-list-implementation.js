class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// 'Front' => Node => Node => Back
// * When dequeue: Front => Node => Back
class Queue {
    constructor() {
        this.length = 0;
        this.back = null;
        this.front = null;
    }

    enqueue(value) {
        const newNode = new Node(value);

        if (!this.length) {
            this.back = newNode;
            this.front = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }

        this.length++;

        return this;
    }

    dequeue() {
        let dequeuedVal;

        if (this.length) {
            const firstNode = this.front;
            dequeuedVal = firstNode.value;
            this.front = firstNode.next;

            this.length--;

            // If now, our queue is empty
            if (!this.length) {
                this.back = null;
                this.front = null;
            }
        }

        return dequeuedVal;
    }

    peek() {
        return this.front;
    }
}

const myQueue = new Queue();
myQueue.enqueue('hello');
myQueue.enqueue('my');
myQueue.enqueue('friend');

console.log(myQueue.dequeue());
console.log(myQueue);
