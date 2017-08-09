/**
 * Создайте собственную реализацию функции indexOf() для массивов.
 */

console.log(indexOf([1, 2, 3], 1));
console.log(indexOf([1, 2, 3], 4));
 
 function indexOf(array, value)
 {
     for(let i=0;i< array.length;i++)
        {
            if(array[i]===value)
                return i
        }
        return -1
 }