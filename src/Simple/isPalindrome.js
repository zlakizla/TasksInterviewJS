/**
 * Реализуйте функцию isPalindrome(), которая возвращает true или false в зависимости от того, 
 * является ли переданная ей строка палиндромом
 * (функция нечувствительна к регистру и к наличию в строке пробелов).
 */

console.log(isPalindrome(''));
console.log(isPalindrome('abcdcba'));
console.log(isPalindrome('abcd'));
console.log(isPalindrome('A man a plan a canal Panama'));

function isPalindrome(value) {
    let stVal = value.split(' ').join("").toLowerCase();
    let endVal = (value.split(' ').join("")).split('').reverse().join("").toLowerCase();

    if (stVal === endVal)
        return true
    else
        return false
}