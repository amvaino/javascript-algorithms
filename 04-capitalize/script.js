/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
    // Напишите код здесь
    //if (!str) return str;
    const mas = str.split(" ");
    let arr = [];
    mas.forEach(function (i) {
        let oneLetter = i.slice(0, 1);
        arr.push(oneLetter.toUpperCase() + i.slice(1));
    });
    return arr.join(" ");
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize("молодость всё простит")); // "Молодость Всё Простит"
