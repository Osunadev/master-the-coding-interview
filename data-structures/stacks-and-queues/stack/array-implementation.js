// This implementation is pointless, al least in js because arrays are built-in
// to act as stacks, that's why we have methods like push() or pop()
class Stack {
    constructor() {
        this.array = [];
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    pop() {
        return this.array.pop();
    }

    peek() {
        return this.array[this.array.length - 1];
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
