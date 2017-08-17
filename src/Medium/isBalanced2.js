/**
 * Реализуйте функцию isBalanced2(). 
 * Она похожа на функцию isBalanced() из предыдущей группы заданий, но поддерживает три типа скобок:
 *  фигурные {}, квадратные [], и круглые (). При передаче функции строки,
 *  в которой имеются неправильные скобочные последовательности, функция должна возвращать false.
 */

console.log(isBalanced2('(foo { bar (baz) [boo] })'));
console.log(isBalanced2('foo { bar { baz }'));
console.log(isBalanced2('foo { (bar [baz] } )'));


function isBalanced2(arrya) {
    let tmp = [];
    let result;
    // фигурная 
    let fr = 0;
    // квадратная 
    let kv = 0;
    //круглая 
    let kr = 0;

    let ms = [];

    [...arrya].map(function (item) {
        if (item == "}" || item == "{" || item == "[" || item == "]" || item == "(" || item == ")")
            tmp.push(item);
    });

    if (tmp.length % 2 != 0)
        return false
    if (tmp[0] == "}" || tmp[0] == "]" || tmp[0] == ")")
        return false

    for (var i = 0; i < tmp.length; i++) {
        let item = tmp[i];
        if (item == "{" || item == "[" || item == "(")
            ms.push(item);
        else {
            if (item == "}") {
                if (ms[ms.length - 1] == "{")
                    ms.pop();
                else
                    return false
            }
            if (item == "]") {
                if (ms[ms.length - 1] == "[")
                    ms.pop();
                else
                    return false
            }
            if (item == ")") {
                if (ms[ms.length - 1] == "(")
                    ms.pop();
                else
                    return false
            }
        }
    }
    return true
}