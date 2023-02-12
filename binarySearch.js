
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== target && start <= end) {
        if (target < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }


    if (arr[middle] == target) {
        return middle
    } else {
        return -1
    }

}

console.log(binarySearch([1, 2, 3, 4, 5], 4));
