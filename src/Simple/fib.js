/**
 * Реализуйте функцию fib(), возвращающую n-ное число Фибоначчи. 
 */


console.log(fib(10));

function fib(number) {
    let arr = new Array;
    arr.push(0);
    arr.push(1);
    for (var i = 2; i <= number; i++) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    return arr[arr.length - 1];
}