// TIME COMPLEXITY: O(M + N)
// SPACE COMPLEXITY: O(M)

function isThereCommonItems(array1, array2) {
    const itemEntries = {};

    for (let i = 0; i < array1.length; i++) {
        if (itemEntries[array1[i]] === undefined) {
            // Saving for the first time the item into the hash table
            itemEntries[array1[i]] = 1;
        }
    }

    for (let j = 0; j < array2.length; j++) {
        // If we find that there's a registered value
        if (itemEntries[array2[j]]) {
            return true;
        }
    }

    return false;
}
