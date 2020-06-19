class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(x) {
        while (this.stack1.length) {
            // Passing all the values to s2, an aux stack
            this.stack2.push(this.stack1.pop());
        }

        // This would be our new back, or front if our stack1 is empty
        this.stack1.push(x);

        // Passing back the values it it's exact order
        while (this.stack2.length) {
            this.stack1.push(this.stack2.pop());
        }
    }

    pop() {
        return this.stack1.pop();
    }

    empty() {
        return !this.stack1.length;
    }

    peek() {
        // Since js doesn't have a built-in method to get the element at the top
        // of the stack (peek), we make this implementation
        return this.stack1[this.stack1.length - 1];
    }
}
