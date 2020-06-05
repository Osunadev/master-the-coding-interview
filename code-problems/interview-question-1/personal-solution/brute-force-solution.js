// TIME COMPLEXITY: O(M * N)
// SPACE COMPLEXITY: O(1)

function isThereCommonItems(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) return true;
        }
    }

    return false;
}

// OR
function isThereCommonItems(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            return true;
        }
    }

    return false;
}
