/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 *
 */

// 1 метод "Перебор"

/* function isPrimes(num) {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
function primes(num) {
    const primes = [];

    for (let i = 2; i <= num; i++) {
        if (isPrimes(i)) {
            primes.push(i);
        }
    }
    return primes;
} */

// 2 метод "Решето Эратосфена"

function primes(num) {
    const silve = [];
    const getPrimes = [];
    for (let i = 2; i <= num; i++) {
        if (!silve[i]) {
            getPrimes.push(i);
            for (j = i * 2; j <= num; j += i) {
                silve[j] = true;
            }
        }
    }
    return getPrimes;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]
