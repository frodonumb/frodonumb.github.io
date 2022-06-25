let arr = ["apple", "banana", "aim", "taco", "blueberry", "crawnberry"];

console.log(getNewArray(arr));

function getNewArray(arr) {
    return arr.filter(item => item.length >= 5).filter(item => item.includes("a"));
}