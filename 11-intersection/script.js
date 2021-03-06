/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 *
 */

function intersection(arr1, arr2) {
    let arrBoth = true;
    const res = [];
    arr1.every(function (a) {
        //every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции
        ans1 = arr2.includes(a);
        if (ans1) res.push(a);
        return true;
    });
    // Напишите код здесь
    return Array.from(new Set(res));
}
// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []
