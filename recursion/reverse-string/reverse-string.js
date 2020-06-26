//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  // Base Case
  if (str.length === 1) return str;

  // str[str.length - 1] is the last character of the string
  return str[str.length - 1] + reverseString(str.substring(0, str.length - 1));
}

console.log(reverseString('yoyo mastery'));
//should return: 'yretsam oyoy'

// 1. 'y' + reverseString('yoyo master')
// 2. 'r' + reverseString('yoyo maste')
// 3. 'e' + reverseString('yoyo mast')
// 3. 't' + reverseString('yoyo mas')
// 4. 's' + reverseString('yoyo ma')
// 5. 'a' + reverseString('yoyo m')
// 6. 'm' + reverseString('yoyo ')
// 7. ' ' + reverseString('yoyo')
// 8. 'o' + reverseString('yoy')
// 9. 'y' + reverseString('yo')
// 10. 'o' + reverseString('y')
// 11. 'y'
