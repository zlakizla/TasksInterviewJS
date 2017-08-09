//Реализуйте функцию isPrime(), которая возвращает true или false, указывая, является ли переданное ей число простым.


 isPrime(5);



function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) 
            return false;
    }
    return true;
}