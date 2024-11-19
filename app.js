// Задание 1: Функции сложения, вычитания, возведения и деления двух чисел
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function power(a, b) {
    return Math.pow(a, b);
}

function divide(a, b) {
    if (b === 0) {
        return "Ошибка: деление на ноль";
    }
    return a / b;
}

// Задание 2: Функция расчета длины строки
function stringLength(str) {
    return str.length;
}

// Задание 3: Проверка числа на положительность, отрицательность или ноль
function checkNumber(num) {
    if (num > 0) {
        console.log("Число положительное");
    } else if (num < 0) {
        console.log("Число отрицательное");
    } else {
        console.log("Число равно нулю");
    }
}

// Задание 4: Функция расчета среднего арифметического
function average(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
}

// Задание 5: Создание объекта с двумя свойствами
const person = {
    name: "Иван",
    age: 25
};

console.log(person.name);
console.log(person.age);

// Задание 6: Проверка четности чисел
function isEven(num) {
    return num % 2 === 0;
}

// Задание 7: Проверка, отрицательное ли число
function isNegative(num) {
    if (num < 0) {
        console.log("Число отрицательное");
    } else {
        console.log("Число не отрицательное");
    }
}

// Задание 8: Проверка делимости
function isDivisible(a, b) {
    if (b === 0) {
        return "Ошибка: деление на ноль";
    }
    return a % b === 0;
}

// Примеры использования функций
console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
console.log(power(2, 3)); // 8
console.log(divide(6, 3)); // 2
console.log(stringLength("Привет")); // 6
checkNumber(-5); // Число отрицательное
console.log(average([1, 2, 3, 4, 5])); // 3
console.log(person); // { name: 'Иван', age: 25 }
console.log(isEven(4)); // true
isNegative(-3); // Число отрицательное
console.log(isDivisible(10, 2)); // true