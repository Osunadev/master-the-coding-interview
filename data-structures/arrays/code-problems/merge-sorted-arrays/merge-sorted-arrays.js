/* Given two arrays that are sorted, merge them a create one array */
// Inputs: [0, 3, 4, 31] and [4, 5, 30]
// Ouput: [0, 3, 4, 4, 5, 30, 31]

// Space Complexity: O(m+n + log(n)) = O(n)
// Time Complexity: O (m+n + nlog(n)) = O(nlog(n))
function mergeSortedArrays(arr1, arr2) {
    if (!arr1 || !arr2 || !arr1.length || !arr2.length) return 'Invalid arrays';

    // Space Complexity: O(m+n)
    // Time Complexity: O(m+n)
    const mergedArrays = [...arr1, ...arr2];

    // Sort() uses QuickSort behind the scenes that's why:
    // Time Complexity: O(n log(n))
    // Space Complexity: O(log(n))
    mergedArrays.sort((a, b) => a - b);

    return mergedArrays;
}

// Space Complexity: O(m + m+n) = O(n)
// Time Complexity: O(m + m*n + n) = O(n^2)
function mergeSortedArrays2(arr1, arr2) {
    if (!arr1 || !arr2 || !arr1.length || !arr2.length) return 'Invalid arrays';

    // Space Complexity: O(m)
    // Time Complexity: O(m)
    const arr1Copy = [...arr1];

    // BEST CASE: O(n) - If the last number of the array is lower than the first number of the arr2
    if (arr1Copy[arr1Copy.length - 1] < arr2[0]) {
        // O(n) because we only traverse through arr2 elements (O(n)) and append them to the end of arr1Copy (O(1) operation)
        for (let num of arr2) {
            arr1Copy.push(num);
        }

        return arr1Copy;
    }

    // WORST CASE: O(m*n+n) - If at least one element of the arr2 is within the range of arr1 bounds
    let arr2Idx = 0;
    // O(m*n) because array.splice() time complexity is O(n)
    for (let i = 0; i < arr1Copy.length; i++) {
        if (arr2[arr2Idx] <= arr1Copy[i]) {
            arr1Copy.splice(i, 0, arr2[arr2Idx]);
            arr2Idx++;
        }
    }

    // If there are certain element of arr2 that didn't were inserted due to the low range of the arr1 numbers
    if (arr2Idx < arr2.length - 1) {
        // O(n): Because we iterate through arr2 elements (O(n))
        for (let j = arr2Idx; j < arr2.length; j++) {
            arr1Copy.push(arr2[j]);
        }
    }

    return arr1Copy;
}

const arr1 = [
    0,
    2,
    4,
    6,
    8,
    10,
    12,
    14,
    16,
    18,
    20,
    22,
    24,
    26,
    28,
    30,
    32,
    34,
    36,
    38,
    40,
    42,
    44,
    46,
    48,
    50,
    52,
    54,
    56,
    58,
    60,
    62,
    64,
    66,
    68,
    70,
    72,
    74,
    76,
    78,
    80,
    82,
    84,
    86,
    88,
    90,
    92,
    94,
    96,
    98,
    100,
    102,
    104,
    106,
    108,
    110,
    112,
    114,
    116,
    118,
    120,
    122,
    124,
    126,
    128,
    130,
    132,
    134,
    136,
    138,
    140,
    142,
    144,
    146,
    148,
    150,
    152,
    154,
    156,
    158,
    160,
    162,
    164,
    166,
    168,
    170,
    172,
    174,
    176,
    178,
    180,
    182,
    184,
    186,
    188,
    190,
    192,
    194,
    196,
    198,
];
const arr2 = [
    150,
    151,
    152,
    153,
    154,
    155,
    156,
    157,
    158,
    159,
    160,
    161,
    162,
    163,
    164,
    165,
    166,
    167,
    168,
    169,
    170,
    171,
    172,
    173,
    174,
    175,
    176,
    177,
    178,
    179,
    180,
    181,
    182,
    183,
    184,
    185,
    186,
    187,
    188,
    189,
    190,
    191,
    192,
    193,
    194,
    195,
    196,
    197,
    198,
    199,
    200,
    201,
    202,
    203,
    204,
    205,
    206,
    207,
    208,
    209,
    210,
    211,
    212,
    213,
    214,
    215,
    216,
    217,
    218,
    219,
    220,
    221,
    222,
    223,
    224,
    225,
    226,
    227,
    228,
    229,
    230,
    231,
    232,
    233,
    234,
    235,
    236,
    237,
    238,
    239,
    240,
    241,
    242,
    243,
    244,
    245,
    246,
    247,
    248,
    249,
];

console.log(mergeSortedArrays2(arr1, arr2));
