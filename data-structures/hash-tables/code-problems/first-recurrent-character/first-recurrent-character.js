/* Google Question */
// The first recurrent character is basically the first repeated character at least twice

//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

/////////////////////////////////////////////////////////////////

// Inefficient way
// NOTE: I tried to force the solution to be O(n^2), yet, first thing that came to my mind was the efficient way
function firstRecurringCharacter(input) {
    // These indexes help me defining the boundary to search for other possible recurrent chars
    let lowerBoundIdx;
    let upperBoundIdx;
    let firstRecurrentChar = undefined;

    let i, j;
    let forceNestedBreak = false;

    for (i = 0; i < input.length; i++) {
        for (j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                // These represent inner boundaries, that's why the offset of 1
                lowerBoundIdx = i + 1;
                upperBoundIdx = j - 1;
                firstRecurrentChar = input[i];
                forceNestedBreak = true;
                break;
            }
        }

        // Forcing the outer loop to break if we found a value
        if (forceNestedBreak) break;
    }

    // Meaning that we found at least 1 repeated character
    if (firstRecurrentChar !== undefined) {
        forceNestedBreak = false;

        for (i = lowerBoundIdx; i <= upperBoundIdx; i++) {
            for (j = i + 1; j <= upperBoundIdx; j++) {
                if (input[i] === input[j]) {
                    firstRecurrentChar = input[i];
                    break;
                }
            }

            if (forceNestedBreak) break;
        }
    }

    return firstRecurrentChar;
}

// Efficient way
function firstRecurringCharacter2(input) {
    repCharCount = {};

    for (let i = 0; i < input.length; i++) {
        if (repCharCount[input[i]] === undefined) {
            repCharCount[input[i]] = true;
        } else {
            // By default we'll only return the first character
            // to be repeated, no matter what
            return input[i];
        }
    }

    return undefined;
}

input1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
input2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
input3 = [2, 3, 4, 5];
input4 = [2, 5, 5, 2, 3, 5, 1, 2, 4];

console.log(firstRecurringCharacter(input1), firstRecurringCharacter2(input1)); // 2
console.log(firstRecurringCharacter(input2), firstRecurringCharacter2(input2)); // 1
console.log(firstRecurringCharacter(input3), firstRecurringCharacter(3)); // undefined
console.log(firstRecurringCharacter(input4), firstRecurringCharacter2(input4)); // 5
