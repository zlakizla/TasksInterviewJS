/**
 * Реализуйте функцию uniq(), которая принимает массив чисел и возвращает уникальные числа, найденные в нём.
 *  Может ли функция решить эту задачу за время O(N)?
 */


console.log(uniq([]));
console.log(uniq([1, 4, 2, 2, 3, 4, 8]));


function uniq(array) {
    let result = [];
    if (array.length == 0)
        return []

    array.map((item) => {
        if (result.indexOf(item) === -1)
            result.push(item)
    })
    return result
}

