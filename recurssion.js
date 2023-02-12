function test(num) {
    /* 
    @desc: this function will return the sum of all numbers from 0 to num
    */
   
    let sum = 0
    for(let i = 0; i <= num; i++)
    {
        sum += i;
    }

    return sum
}

console.log(test(20));

function testRec(num) {
    if(num === 0 ) {// base case
        return 0 
    }

    return num + testRec(num -1); // recursive call
}

console.log(testRec(10))

function fib(num) {
    if(num == 0) { // base case
        return 0;
    }
    if(num == 1)   { // base case
        return 1
    }
    return fib(num - 2) + fib(num - 1); // recursive call
}

console.log(fib(3))