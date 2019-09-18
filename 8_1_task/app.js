/* Дан массив

[16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
//Найти сумму и количество положительных элементов.
//Найти минимальный элемент массива и его порядковый номер.
//Найти максимальный элемент массива и его порядковый номер.
//Определить количество отрицательных элементов.
//Найти количество нечетных положительных элементов.
//Найти количество четных положительных элементов.
//Найти сумму четных положительных элементов.
//Найти сумму нечетных положительных элементов.
//Найти произведение положительных элементов.
//Определить количество элементов, равных 4.
Найти наибольший среди элементов массива, остальные обнулить.


Взять еще один массив

[46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47,16,-37,54,-4,72,-56,47,4,-16,25,-37]
12. Вычислить разность соответствующих элементов массивов и записать в новый массив */

let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// let message = array.forEach((element, index) => {
//     console.log('element', element, 'index', index);
// });

//1.Найти сумму и количество положительных элементов.
let newArray1 = array.filter((element) => element > 0);
//console.log('newArray1 только положительные элементы', newArray1);
let sum1 = newArray1.reduce((sum, element) => {
    return (sum + element);
}, 0);
console.log('задание 1');
console.log('колличество положительных элементов ', newArray1.length);
console.log('сумма всех положительных элементов ', sum1);
console.log('***************');


//2. Найти минимальный элемент массива и его порядковый номер.
//создаем копию не трогая главный массив
let newArray2 = [...array];
newArray2 = newArray2.sort((a, b) => {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
});
//console.log(newArray2);
let minElement2 = newArray2[0];
let minElementIndex2 = array.indexOf(minElement2);
console.log('задание 2');
console.log('минимальный элемент', minElement2);
console.log('индекс минимального элемента', minElementIndex2);
console.log('***************');


//3. Найти максимальный элемент массива и его порядковый номер.
let newArray3 = [...array];
newArray3 = newArray3.sort((a, b) => {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
});
//console.log(newArray3);
let maxElement3 = newArray3[0];
let maxElementIndex3 = array.indexOf(maxElement3);
console.log(`задание 3`);
console.log(`максимальный элемент элемент ${maxElement3}`);
console.log(`индекс минимального элемента ${maxElementIndex3}`);
console.log(`***************`);


//4. Определить количество отрицательных элементов.
let newArray4 = [...array];
newArray4 = newArray4.filter((element) => element < 0);
//console.log(newArray4);
let negativeQuantity = newArray4.length;
console.log(`задание 4`);
console.log(`количество отрицательных элементов ${negativeQuantity}`);
console.log(`***************`);


//5. Найти количество нечетных положительных элементов.
let newArray5 = [];
array.forEach(element => {
    if (element % 2 !== 0 && element > 0) return (newArray5.push(element))
})
//console.log(newArray5);
let oddPositiveQuantity = newArray5.length;
console.log(`задание 5`);
console.log(`количество положительных нечетных ${oddPositiveQuantity}`);
console.log(`***************`);


//6. Найти количество четных положительных элементов.
let newArray6 = [...array];
newArray6 = newArray6.filter(element => {
    return (element > 0 && element % 2 === 0)
})
//console.log(newArray6);
let evenPositiveQuantity = newArray6.length;
console.log(`задание 6`);
console.log(`количество положительных четных ${evenPositiveQuantity}`);
console.log(`***************`);


//7. Найти сумму четных положительных элементов.
let newArray7 = [...array];

let sumEvenPositive = newArray7.reduce((sum7, element) => {
    if (element > 0 && element % 2 === 0) {
        //console.log(element);
        sum7 += element
    }
    return sum7
}, 0 /*initial*/ );
//console.log(newArray7);
console.log(`задание 7`);
console.log(`сумма четных положительных элементов ${sumEvenPositive}`);
console.log(`***************`);


//8. Найти сумму нечетных положительных элементов.
let newArray8 = [...array];

let sumOddPositive = newArray8.reduce((sum8, element) => {
    if (element > 0 && element % 2 !== 0) {
        //console.log(element);
        sum8 += element
    }
    return sum8
}, 0 /*initial*/ );
//console.log(newArray8);
console.log(`задание 8`);
console.log(`сумма нечетных положительных элементов ${sumOddPositive}`);
console.log(`***************`);


//9. Найти произведение положительных элементов.
let newArray9 = array.filter(element => element > 0);
//console.log(newArray9);
let multiplyPositive = newArray9.reduce((mult, element) => mult *= element, 1);
//console.log(multiplyPositive);
console.log(`задание 9`);
console.log(`произведение положительных элементов ${multiplyPositive}`);
console.log(`***************`);


//10. Определить количество элементов, равных 4.
let newArray10 = array.filter(element => element === 4);
//console.log(newArray10);
let quantityOfElementFour = newArray10.length;
//console.log(quantityOfElementFour);
console.log(`задание 10`);
console.log(`количество элементов, равных 4, равно ${quantityOfElementFour}`);
console.log(`***************`);


//11. Найти наибольший среди элементов массива, остальные обнулить.
let newArray11_1 = [...array];
newArray11_1 = newArray11_1.sort((a, b) => {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
});
let maxElement11 = newArray11_1[0];
//console.log('макс элемент ', maxElement11);
let newArray11 = [...array];
newArray11.map((element, index) => {
    if (element !== maxElement11) {
        //console.log(element, index);
        delete newArray11[index];
    } else {
        return maxElement11;
    }
});
//console.log(newArray11);
console.log(`задание 11`);
console.log(`наибольший элемент ${maxElement11}`);
console.log(`обнуленный массив ${newArray11}`);
console.log(`***************`);


//12.Взять еще один массив и вычислить разность соответствующих элементов массивов и записать в новый массив
let array2 = [46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47,16,-37,54,-4,72,-56,47,4,-16,25,-37];

//console.log(array.length);
//console.log(array2.length);
let newArray12 = [...array];
//console.log(newArray12);
//console.log(array2);
let newDifferenceArray = newArray12.map((element, index) => element - array2[index]);
//console.log(newDifferenceArray);
console.log(`задание 12`);
console.log(`результирующий массив ${newDifferenceArray}`);
console.log(`***************`);