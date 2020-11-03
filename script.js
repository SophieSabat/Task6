// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
//
// let mass = [22, 34, 109, 3, -499];
// let arr = ['hello', 'asd', 'qwerty', 'xyz', 'bye];
// let xxx = ['cat', 'black', 34, 0.3, false];


//  -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let mas = [];
// mas[0] = 234;
// mas[1] = 98;
// mas[2] = -123;
// mas[3] = 333;
// mas[4] = 136;
// mas[5] = 2468;
// console.log(mas);


//  - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i < 10; i++){
//     document.write('<div>Hello World!</div>');
// }
//
// let k = 0;
// while (k < 10) {
//     document.write('<div>Hello World!</div>');
//     k++
// }


//  - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Index: ${i}</div>`);
// }
//
// let i = 0;
// while (i < 10) {
//     document.write(`<div>INDEX: ${i}</div>`);
//     i++
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Hello World!</h1>`);
//     i++
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let i = 0;
// while (i < 20){
//     document.write(`<h1>Index: ${i}</h1>`);
//     i++
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let mass = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//
// for (let i = 0; i < mass.length; i++) {
//     console.log(mass[i]);
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let arr = ['asd', 'qwerty', 'hello', 'hey', 'cat', 'dog', 'car', 'blue', 'red', 'true'];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let arr = [123, -28, 'dog', false, 'qwerty', 10<302, 333, 00000, 'bleu', true];
//
// for (let i = 0; i < 10; i++) {
//     console.log(arr[i]);
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//
// let arr = [123, true, 'qwerty', -159357, 1001<100, 'asd', 0.14, 'true', true, false, 10>5];
//
// for (let i = 0; i < arr.length; i++){
//     if (typeof arr[i] == 'boolean') {
//         console.log(arr[i]);
//     }
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//
// let mass = [122, 'red car', -1992, 3, false, '10-234', true, 100>=98, 2790, 9-3];
//
// for (let i = 0; i < mass.length; i++) {
//     if (typeof mass[i] == 'number') {
//         document.write(mass[i] + "<br>");
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let arr = [123, true, 'dog', 10+2, 'qwerty', 'Hello World!!!', 1590357, -5, 'false', false];
//
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == 'string') {
//         console.log(arr[i]);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//
// let arr = [];
// arr[0] = true;
// arr[1] = 12345;
// arr[2] = -9;
// arr[3] = 'false';
// arr[4] = 12;
// arr[5] = false;
// arr[6] = 'go to home';
// arr[7] = 'asdasdasd"';
// arr[8] = 159;
// arr[9] = 100-30;
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i + "<br>");
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     document.write(i + "<br>");
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0 ; i < 200; i=i+2) {
//     console.log(i);
//     document.write(i + "<br>");
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let i = 1; i <= 200; i++){
//     if (i % 2 == 0) {
//         console.log(i);
//         document.write(i + "<br>");
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let i = 0; i < 200; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//         document.write(i + "<br>");
//     }
// }


// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//
// for (let i = 0; i < 2; i++) {
//     for (let j = 1; j <= 60; j++) {
//         if (j != 60) {
//             console.log(i + 'хв ' + j + 'с');
//         }
//         else {
//             console.log(i+1 + 'хв' + ' 00c');
//         }
//     }
// }


// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//
// for (let h = 0; h <= 2; h++) {
//     for (let m = 0; m < 60; m++) {
//         for (let s = 0; s < 60; s++) {
//             console.log(h + ':' + m + ':' + s);
//             if (h == 2 && m == 20){
//                 break;
//             }
//         }
//         if (h == 2 && m == 20) {
//             break;
//         }
//     }
// }


// Додатково

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//
// let arr = ['a', 'b', 'c'];
// let word = '';
//
// for (let i = 0; i < arr.length; i++){
//     word += arr[i];
// }
// console.log(word);
// document.write(word);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//
// let arr = ['a', 'b', 'c'];
// let i = 0;
// let str = '';
//
// while (i < arr.length) {
//     str += arr[i];
//     i++;
// }
// console.log(str);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
// let mass = ['a', 'b', 'c'];
// let word = '';
//
// for (let element of mass) {
//     word += element;
// }
// console.log(word);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
//
// let mass = ['a', 'b', 'c'];
// let word = '';
//
// for (let element in mass) {
//     word += mass[element];
// }
// console.log(word);



// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
//
// let arr = ['a', 'b', 'c'];
//
// for (let i = 1; i <= 3 ; i++) {
//     arr.push(i);
// }
// console.log(arr);


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
//
// let mass = [1, 2, 3];
// let  newMass = [];
//
// for (let i = mass.length - 1; i >= 0; i--){
//     newMass.push(mass[i]);
// }
// console.log(newMass);


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
//
// let arr = [1, 2, 3];
//
// for (let i = 4; i <= 6; i++) {
//     arr.push(i);
// }
// console.log(arr);


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
//
// let arr = [1, 2, 3];
//
// for (let i = 6; i >= 4; i--) {
//     arr.unshift(i)
// }
// console.log(arr);


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
//
// let arr = ['js', 'css', 'jq'];
// console.log(arr);
//
// let firstElement = arr.shift();
// console.log(firstElement);
// console.log(arr);


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
//
// let arr = ['js', 'css', 'jq'];
// console.log(arr);
//
// let element = arr.pop();
// console.log(element);
// console.log(arr);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
//
// let mass = [1, 2, 3, 4, 5];
// console.log(mass);
// console.log(arr.slice(3));


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
//
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.slice(0,2));


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
//
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.splice(1, 0, 'a', 'b');
// console.log(arr);
// arr.splice(6, 0, 'c');
// console.log(arr);
// arr.splice(8, 0, 'e');
// console.log(arr);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// let mass = [5, 20, 34, 40, 51, 65, 70, 80, 92, 100];
// for (let element of mass) {
//     if (element % 2 === 0) {
//         console.log(element);
//     }
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
//
// let mass = [5, 20, 34, 40, 51, 65, 70, 80, 92, 100];
// let arr = [];
//
// for (let i = 0; i < mass.length; i++) {
//     arr.push(mass[i]);
// }
// console.log(arr);


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// let mass = [5, 20, 34, 40, 51, 65, 13, 80, 92, 132];
// let arr = [];
//
// for (let i = 0; i < mass.length; i++) {
//     arr[i] = mass[i];
// }
// console.log(arr);