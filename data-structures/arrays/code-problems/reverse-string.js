/* Create a function that reverses a string */
// Input: 'Hi my name is Omar' => Output: 'ramo si eman ym iH'

// This is a pure function (doesn't have side effects)
function reverse(str) {
    // If there's no string value, the string is just 1 char, or the input str is not a string
    if (!str || str.length < 2 || typeof str !== 'string')
        return 'Error: Bad String';

    // We define the array length from the beginning for to ensure O(1) insertion
    const reversedArr = new Array(str.length);
    const totalItems = str.length - 1;

    for (let i = totalItems; i >= 0; i--) {
        reversedArr[totalItems - i] = str[i];
    }

    // Converting array of characters into a string
    return reversedArr.join('');
}

// An in-built js approach
const reverse2 = str => str.split('').reverse().join('');

const input = 'Hi my name is Omar';

console.log(reverse(input));
console.log(reverse2(input));
console.log(input);
