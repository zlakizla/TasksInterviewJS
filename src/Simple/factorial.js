/**
 * Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа.
 */


console.log(factorial(7));



function factorial(number) {
    var result = 1;
    for (var i = 1; i <= number; i++) {
        result = result * i;
    }

    return result

}