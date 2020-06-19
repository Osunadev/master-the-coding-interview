class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// Node <== Node <== 'Top'
// * When Push: Node <== Top
class Stack {
    constructor() {
        this.length = 0;
        this.top = null;
        // With this linked list implementation, we can opt for not
        // to use a bottom, instead we use a length property
    }

    push(value) {
        const newNode = new Node(value);

        if (this.length) {
            // If our stack isn't empty
            newNode.next = this.top;
        }

        this.top = newNode;
        this.length++;

        return this;
    }

    pop() {
        let poppedValue;
        // If at least there're one element in the stack
        if (this.length) {
            poppedValue = this.top.value;

            this.top = this.top.next;
            this.length--;

            // If now the stack is empty
            if (!this.length) {
                this.top = null;
            }
        }

        return poppedValue;
    }

    // Reads the last element without popping it
    peek() {
        if (this.length) {
            return this.top.value;
        }
    }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
myStack.pop();

console.log(myStack.peek());
console.log(myStack);
