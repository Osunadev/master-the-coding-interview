class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        if (this.length > 0) {
            this.length--;
            const deletedItem = this.data[this.length];

            delete this.data[this.length];
            return deletedItem;
        }
    }

    delete(index) {
        const item = this.data[index];

        this.__shiftItems(index);
    }

    __shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        // Deleting the last item because it remains untouched
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push('hello');
newArray.push('my');
newArray.push('my');
newArray.delete(2);
newArray.push('name');
newArray.push('is');
newArray.push('Omar');
newArray.pop();
newArray.push('Alonso');

console.log(newArray);
