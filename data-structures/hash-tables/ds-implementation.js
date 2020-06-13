// Handling collisions with arrays
/* 
    k = Size of our Hash Table
    n = Number of items
*/

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // Underscore is a convention to simulate private properties
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  // Time: O(n/k) = O(n)
  // Space: O(1)
  get(key) {
    const address = this._hash(key);

    // If the user haven't inserted anything
    if (!this.data[address]) return undefined;

    let value = undefined;
    // Looking for the key element inside of the array
    for (let i = 0; i < this.data[address].length; i++) {
      if (this.data[address][i][0] === key) {
        value = this.data[address][i][1];
        break;
      }
    }

    return value;
  }

  // Time: O(n/k) = O(n)
  // Space: O(1)
  set(key, value) {
    const address = this._hash(key);

    if (!this.data[address]) {
      // Creating for the first time our array of key-value pairs to avoid collisions
      this.data[address] = [];
      this.data[address].push([key, value]);
    } else {
      // If the memory address is already filled with something
      // We need to make sure that we overwrite our key if a tuple with that same key already exists
      let keyValueTupleExists = false;

      for (let i = 0; i < this.data[address].length; i++) {
        // If we find out that there exists a tuple with the provided key value
        if (this.data[address][i][0] === key) {
          this.data[address][i][1] = value;
          keyValueTupleExists = true;
          break;
        }
      }

      // If we didn't find any tuple with the same key
      if (!keyValueTupleExists) {
        this.data[address].push([key, value]);
      }
    }
  }

  // This implementation of delete isn't efficient because that operation on the array is O(n)
  // In a real case scenario we would use Linked Lists, for example, so that would be O(1)
  // Time: ¿? O(n/k * n/k) = O(n^2)
  // Space: O(1)
  delete(key) {
    const address = this._hash(key);

    if (!this.data[address]) return undefined;

    let delValue = undefined;

    for (let i = 0; i < this.data[address].length; i++) {
      if (this.data[address][i][0] === key) {
        delValue = this.data[address][i][1];
        this.data[address].splice(i, 1);

        // If now the array is empty, we replace it with null to match the logic of set() implementation
        if (this.data[address].length === 0) {
          this.data[address] = undefined;
        }
        break;
      }
    }

    return delValue;
  }

  // Time: O(k*n)
  // Space: O(n)
  keys() {
    const keys = [];

    for (let i = 0; i < this.data.length; i++) {
      // If the data 'celd' isn't empty
      if (this.data[i] !== undefined) {
        // Traverse all of the internal tuples array
        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0]);
        }
      }
    }

    return keys;
  }
}

// The smaller the size of our Hash Table, the more possibilities of collisions we have
const myHashTable = new HashTable(10);

myHashTable.set('name', 'Omar Osuna');
myHashTable.set('name', 'Miguel Osuna');
myHashTable.set('question', 'How are you');
myHashTable.set('hello', 'World');
myHashTable.set('question', 'How old are you?');
myHashTable.set('user', 'Jonathan');
myHashTable.set('age', 21);
myHashTable.set('vacations', false);
myHashTable.delete('name');
myHashTable.set('name', 'Michael Jackson');

console.log(myHashTable.get('hi'));
console.log(myHashTable.get('question'));
console.log(myHashTable.data);
console.log('Keys of myHashTable', myHashTable.keys());
