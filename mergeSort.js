    // truthy falsy


    function merge(left, right) {
        let result = [];

        while (left.length && right.length) {
            if (left[0] < right[0]) {
                result.push(left.shift()) // shift removes index 0 and returns it
            } else {
                result.push(right.shift());
            }
        }

        while (left.length) { // right 5eles
            result.push(left.shift());
        }

        while (right.length) {
            result.push(right.shift());
        }
        // console.log(result);

        return result;

    }

    function mergeSort(arr) {
        if (arr.length <= 1) { // base case
            return arr
        }

        let mid = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, mid)) // [8]
        let right = mergeSort(arr.slice(mid))

        return merge(left, right)
    }


    console.log(mergeSort([8, 2, 3, 6, 9, -1, 7]))

