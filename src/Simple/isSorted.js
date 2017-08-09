/**
 * Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.
 */



console.log(isSorted([]));
console.log(isSorted([-Infinity, -5, 0, 3, 9]));
console.log(isSorted([3, 9, -3, 10]));

function isSorted(arr) {
    if (arr.length == 0)
        return true

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1])
            return false
    }
    return true
}