/**
 * Реализуйте функцию fib2(). Она похожа на функцию fib() из предыдущей группы заданий, но поддерживает числа вплоть до 50. Подсказка: используйте мемоизацию.
 */

console.log(fib2(0));
console.log(fib2(1));
console.log(fib2(10));
console.log(fib2(50));

function fib2(value) {
    let map = new Map();

    for (var i = 0; i <= value; i++) {
        var item = i;
        switch (item) {
            case 0: map.set(0, 0); break;
            case 1: map.set(1, 1); break;
            default: map.set(item, (map.get(item - 1) + map.get(item - 2)));
        }
    }
    return (map.get(map.size - 1))
}