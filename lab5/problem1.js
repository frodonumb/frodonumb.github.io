let arr = [1, 2, 3, 4, 5];

console.log(sum(arr));

function sum(arr) {
    return arr.filter(item => item > 20).reduce((previous, current) => previous + current, 0);
}