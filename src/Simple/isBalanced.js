/**
 * Реализуйте функцию isBalanced() которая принимает строку и возвращает true или false, 
 * указывая на то, сбалансированы ли фигурные скобки, находящиеся в строке.
 */


console.log(isBalanced('}{'));
console.log(isBalanced('{{}'));
console.log(isBalanced('{}{}'));
console.log(isBalanced('foo { bar { baz } boo }'));
console.log(isBalanced('foo { bar { baz }'));
console.log(isBalanced('foo { bar } }'));



function isBalanced(array) {
    let ms = array.split('');
    let t = [];

    for (var i = 0; i < ms.length; i++) {
        var item = ms[i];
        if (item == "}" || item == "{")
            t.push(item);
    }
    let symbol = 0;
    if ((t.length) % 2 == 0) {

        for (var j = 0; j <= t.length; j++) {

            if (t[j] == "{")
                symbol = symbol + 1;

            if (t[j] == "}")
                symbol = symbol - 1
            if(symbol<0)
                return false
        }
        if(symbol==0)
            return true
    }
    else return false
}