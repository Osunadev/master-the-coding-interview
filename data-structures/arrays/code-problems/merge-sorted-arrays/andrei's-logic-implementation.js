const arr1 = [1, 4, 5, 10, 67];
const arr2 = [20, 52, 100, 301];

// Result: [1, 3, 5, 10, 20, 51, 67, 100, 301]

function mergeSortedArrays(arr1, arr2) {
    // Invalid inputs, these are not arrays
    if (!arr1 || !arr2 || !arr1.length || !arr2.length) return;

    if (!arr1.length) return arr2;
    if (!arr2.length) return arr1;

    const reversedArr = [];

    let arr1Idx = 0;
    let arr2Idx = 0;

    // While both indexes don't surpass the limit of its respective array
    while (arr1Idx < arr1.length || arr2Idx < arr2.length) {
        if (
            (arr1[arr1Idx] < arr2[arr2Idx] || arr2Idx >= arr2.length) &&
            arr1Idx < arr1.length
        ) {
            reversedArr.push(arr1[arr1Idx++]);
        } else {
            reversedArr.push(arr2[arr2Idx++]);
        }
    }

    return reversedArr;
}

console.log(mergeSortedArrays(arr1, arr2));
