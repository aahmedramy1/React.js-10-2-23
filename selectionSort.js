// [5, 3, 8, 2, 1, 4]
// [1, 3, 8, 2, 5, 4]
// [1, 2, 8, 3, 5, 4]


// selection Sort


function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (min !== i) { // swap
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp
        }
    }
    return arr;
}
console.log([9,8,7,6,5].sort());