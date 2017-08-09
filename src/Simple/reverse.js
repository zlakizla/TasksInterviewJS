/**
 * Реализуйте функцию reverse(), которая обращает порядок следования символов переданной ей строки. Не пользуйтесь встроенной функцией reverse().
 */


console.log(reverse(''));
console.log(reverse('abcdef'));

function reverse(value) {
    //  console.log('object');
    let result = [];
    let ms = value.split('');
    for (let i = ms.length - 1; i >= 0; i--) {
        result.push(ms[i]);
    }
    return result;
}