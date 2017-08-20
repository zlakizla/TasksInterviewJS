/**
 * Реализуйте функцию intersection(), которая принимает два массива и возвращает их пересечение.
 *  Можете ли вы добиться того, чтобы функция решала эту задачу за время O(M+N), где M и N — длины массивов
 */


console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));
console.log(intersection([1, 5, 4, 2], [7, 12]));


function intersection(array1, array2) {
    let result = [];
    let tmp = [];
    array1.map(item => {
        if (tmp.indexOf(item) == -1)
            tmp[item] = true;
    })

    array2.map(item => {
        if (item in array1)
            result.push(item)

    })
    return result
} 