/**
 * Создайте собственную реализацию функции reduce().
 */


console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));


function reduce(arr, sum, index) {
    let val = 0;
    for (let i = 0; i < arr.length; i++) {
        val = sum(val, arr[i])
    }
    return val;
}