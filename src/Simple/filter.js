/**
 * Создайте собственную реализацию функции filter().
 */


console.log(filter([1, 2, 3, 4], n => n < 3))



function filter(array, param) {
    let mas = [];
    for (let i = 0; i < array.length; i++) {
        //        console.log(array[i]);
        if (param(array[i]))
            mas.push(array[i]);
    }
    return mas
}