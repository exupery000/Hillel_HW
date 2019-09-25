/* Дан массив

[
  [16,-37,54,-4,72],
  [-56,47,4,-16,25],
  [-37,46,4,-51,27],
  [-63,4,-54,76,-4],
  [12,-35,4,47]
]
//Найти сумму и количество положительных элементов.
//Найти минимальный элемент массива и его порядковый номер.
//Найти максимальный элемент массива и его порядковый номер.
//Определить количество отрицательных элементов.
//Найти количество нечетных положительных элементов.
//Найти количество четных положительных элементов.
//Найти сумму четных положительных элементов.
//Найти сумму нечетных положительных элементов.
//Найти произведение положительных элементов.
//Найти определить количество элементов, равных 4.
//Найти наибольший среди элементов массива, остальные обнулить. */




let array = [
    [16, -37, 54, -4, 72],
    [-56, 47, 4, -16, 25],
    [-37, 46, 4, -51, 27],
    [-63, 4, -54, 76, -4],
    [12, -35, 4, 47]
];


// 1.Найти сумму и количество положительных элементов.
let numberOfPositive1 = 0;

function recursion1(current_array) {
    let sumOfPositive1 = 0;
    for (let i = 0; i < current_array.length; i++) {
        const current = current_array[i];
        if (Array.isArray(current)) {
            sumOfPositive1 += recursion1(current);
        } else if (current > 0) {
            sumOfPositive1 += current;
            numberOfPositive1++;
            //console.log(numberOfPositive1);
        } else continue;
    }
    return sumOfPositive1;
}
// console.log(recursion(array));
let resultSumOfPositive1 = recursion1(array);
console.log(`задание 1`);
console.log(`колличество положительных элементов ${numberOfPositive1}`);
console.log(`сумма всех положительных элементов ${resultSumOfPositive1}`);
console.log('***************');


// 2.Найти минимальный элемент массива и его порядковый номер.

let lowerestNumber = Infinity;
let addressOf = 0;

function recursion2(current_array) {

    for (let i = 0; i < current_array.length; i++) {
        const current = current_array[i];
        if (Array.isArray(current)) {
            lowerestNumber = recursion2(current);
        } else if (current < lowerestNumber) {
            lowerestNumber = current;
        } else continue;
    }
    //console.log(lowerestNumber);
    return lowerestNumber;
}

// array.findIndex – по ;
console.log(`задание 2`);
console.log(`минимальный элемент массива ${recursion2(array)}`);
//console.log('порядковый номер ', resultSumOfPositive1);
console.log(`***************`);


//3.Найти максимальный элемент массива и его порядковый номер.
let highestNumber = -Infinity;

function recursion3(current_array) {

    for (let i = 0; i < current_array.length; i++) {
        const current = current_array[i];
        if (Array.isArray(current)) {
            highestNumber = recursion3(current);
        } else if (current > highestNumber) {
            highestNumber = current;
        } else continue;
    }
    //console.log(lowerestNumber);
    return highestNumber;
}
// array.findIndex – по ;
console.log(`задание 3`);
console.log(`максимальный элемент массива ${recursion3(array)}`);
//console.log('порядковый номер ', resultSumOfPositive1);
console.log(`***************`);


//4.Определить количество отрицательных элементов.
function recursion4(current_array) {
    let numberOfNegatives4 = 0;
    for (let i = 0; i < current_array.length; i++) {
        const current = current_array[i];
        if (Array.isArray(current)) {
            numberOfNegatives4 += recursion4(current);
        } else if (current < 0) {
            numberOfNegatives4++;
        } else continue;
    }
    //console.log(lowerestNumber);
    return numberOfNegatives4;
}

console.log(`задание 4`);
console.log(`количество отрицательных элементов ${recursion4(array)}`);
console.log('***************');

//5.Найти количество нечетных положительных элементов.
function recursion5(current_array) {
    let numberOfPositiveOdd5 = 0;
    for (let i = 0; i < current_array.length; i++) {
        const current = current_array[i];
        if (Array.isArray(current)) {
            numberOfPositiveOdd5 += recursion5(current);
        } else if ((current % 2 !== 0) && (current > 0)) {
            numberOfPositiveOdd5++;
        } else continue;
    }
    return numberOfPositiveOdd5;
}

console.log(`задание 5`);
console.log(`количество нечетных положительных элементов ${recursion5(array)}`);
console.log('***************');

//6.Найти количество четных положительных элементов.
function recursion6(current_array) {
    let numberOfNegativeEven6 = 0;
    for (let i = 0; i < current_array.length; i++) {
        const current = current_array[i];
        if (Array.isArray(current)) {
            numberOfNegativeEven6 += recursion6(current);
        } else if ((current % 2 === 0) && (current > 0)) {
            numberOfNegativeEven6++;
        } else continue;
    }
    return numberOfNegativeEven6;
}

console.log(`задание 6`);
console.log(`количество четных положительных элементов ${recursion6(array)}`);
console.log('***************');


//7.Найти сумму четных положительных элементов.
function recursion7(current_array) {
    let sumOfEvenPositive7 = 0;
    for (let i = 0; i < current_array.length; i++) {
        const current = current_array[i];
        if (Array.isArray(current)) {
            sumOfEvenPositive7 += recursion7(current);
        } else if ((current % 2 === 0) && (current > 0)) {
            sumOfEvenPositive7 += current;
        } else continue;
    }
    return sumOfEvenPositive7;
}

console.log(`задание 7`);
console.log(`сумму четных положительных элементов ${recursion7(array)}`);
console.log('***************');


//8.Найти сумму нечетных положительных элементов.
function recursion8(current_array) {
    let sumOfOddPositive8 = 0;
    for (let i = 0; i < current_array.length; i++) {
        const current = current_array[i];
        if (Array.isArray(current)) {
            sumOfOddPositive8 += recursion8(current);
        } else if ((current % 2 !== 0) && (current > 0)) {
            sumOfOddPositive8 += current;
        } else continue;
    }
    return sumOfOddPositive8;
}

console.log(`задание 8`);
console.log(`сумму нечетных положительных элементов ${recursion8(array)}`);
console.log('***************');


//9.Найти произведение положительных элементов.
function recursion9(current_array) {
    let multiplyOfPositive9 = 1;
    for (let i = 0; i < current_array.length; i++) {
        const current = current_array[i];
        if (Array.isArray(current)) {
            multiplyOfPositive9 *= recursion9(current);
        } else if (current > 0) {
            multiplyOfPositive9 *= current;
        } else continue;
    }
    return multiplyOfPositive9;
}

console.log(`задание 9`);
console.log(`произведение положительных элементов ${recursion9(array)}`);
console.log('***************');

//10.Найти определить количество элементов, равных 4.

function recursion10(current_array) {
    let numberOfEqualFour10 = 0;
    for (let i = 0; i < current_array.length; i++) {
        const current = current_array[i];
        if (Array.isArray(current)) {
            numberOfEqualFour10 += recursion10(current);
        } else if (current === 4) {
            numberOfEqualFour10++;
        } else continue;
    }
    return numberOfEqualFour10;
}

console.log(`задание 10`);
console.log(`количество элементов, равных четырем ${recursion10(array)}`);
console.log('***************');


//11.Найти наибольший среди элементов массива, остальные обнулить. */

let maxElementOfArray = recursion3(array);
console.log(maxElementOfArray);

function recursion11(current_array) {

    for (let i = 0; i < current_array.length; i++) {
        let current = current_array[i];
        if (Array.isArray(current)) {
            recursion11(current);
        } else if (current !== maxElementOfArray) {
            current = 0;
        } else continue;
    }
}
recursion11(array);
console.log(`задание 11`);
console.log(`Обнуленный массив с максимальным элементом ${array}`);
console.log('***************');