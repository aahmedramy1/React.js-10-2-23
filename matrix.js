// matrix example for beginners
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][0]);
console.log(matrix[0][1]);
console.log(matrix[1][0]);
console.log(matrix[1][1]);
console.log(matrix[1][2]);

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}