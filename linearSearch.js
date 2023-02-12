// linear search algorithm

// [5, 3, 8, 2, 1, 4] , 12

// answer = -1

function linearSearch(arr, valueToFind) { // worst case: O(n)
    let answer = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == valueToFind) {
            answer = i;
            break;
        }
    }

    return answer;
}


console.log(linearSearch([5, 3, 8, 2, 1, 4], 20))