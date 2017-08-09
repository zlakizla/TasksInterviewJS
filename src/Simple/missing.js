/**
 * Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
 *  от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. 
 * Там может быть либо одно отсутствующее число, либо их может не быть вовсе.
 */


console.log(missing([]));
console.log(missing([1, 4, 3]));
console.log(missing([2, 3, 4]));
console.log(missing([5, 1, 4, 2]));
console.log(missing([1, 2, 3, 4]));

function missing(array) {

    let max = Math.max.apply(null, array);
    let result = [];
    for (var i = 1; i < max; i++) {
       // var element = array[i];
// console.log(typeof(split('')));
//indexOf(array,0)
        if (array.indexOf(i) == -1)
            result.push(i);
    }

    if(result.length==0)
        return undefined
    else
    return result
}