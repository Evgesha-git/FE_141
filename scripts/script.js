// let obj = {
//   key: 'value',
//   key2: 'v2'
// }

// let arr = [1, 2, 3, 4]
// arr['key'] = 5

// console.log(arr);

// let arrFor = [];
// let arrWhile = [];

// for (let i = 27; i <= 57; i++) {
//   arrFor.push(i)
// }

// let arrWhileItemCount = 27
// while (arrWhileItemCount <= 57) {
//   arrWhile.push(arrWhileItemCount)
//   arrWhileItemCount++
// }

// console.log(arrFor);
// console.log(arrWhile);

// let rezult = 0;

// for (let i = 0; i < arrFor.length; i++) {
//   rezult += arrFor[i]; // rezult = rezult + arrFor[i]
// }

// console.log(rezult);

// let arr = [12, false, 'Текст', 4, 2, -5, 0];
// let arrRev = []

// console.log(arr);

// while (arr.length) {
//   // const item = arr.pop()
//   arrRev.push(arr.pop())
// }

// console.log(arrRev);

// function f1(params) {
//   return params
// }

// function f2(){
//   return 6
// }

// console.log(f1(3453));
// console.log(f1(f2()));

const marker = '^';
const h = 10;

for (let i = 1; i <= h; i++) {
  let line = '';
  let space = '';

  for (let j = 0; j < i * 2 - 1; j++) {
    line += marker
  }

  for (let j = i; j <= h; j++) {
    space += ' '
  }

  document.write('<pre style="margin: 0;">' + space + line + '</pre>')
}

// function f3(params) {
//   const rez = params + 3
//   return rez
// }

// let rez = 5

// function f4 () {
//   rez += 10
// }

// function f5 () {
//   console.log(3);
// }

// console.log(f6());
// // console.log(f7()); // Ошибка


// function f6() { // function Declaration
//   let a = 3;
//   let b = 5;
//   return a ** b
// }

// const f7 = function () { // function Expression

//   if (0) {
//     const f8 = function(){
//       return 5
//     }
//     console.log(f8());
//   }
//   let a = 10;
//   let b = 5;
//   return a * b 
// }

// console.log(f7());

// let arr = [1, 2, 3, 4]

// const arrItemMult = function (item) {
//   if (item % 2 === 0) return item
// }

// let newArr = arr.filter(arrItemMult)

// console.log(arr);
// console.log(newArr);


// function f9 (callback) {
//   return callback()
// }

// console.log(f9(function(){
//   let a = 5;
//   let b = 60;
//   return a * b
// }));

// const a = 34;
// console.log(a ** 4);


// // IIFE
// (function() {
//   console.log('Самовызывающаяся функция');
// })()

// const anonFunc = () => {
//   let a = 6; 
//   let b = 9;
//   return a + b
// }

// console.log(anonFunc());

const f1 = () => 5 + 6 // стрелочная функция без параметров всегда определяется с круглыми скобками, если выражение короткое, то не обязательно использовать фигурные скобки и ключевое слово return
const f2 = x => x ** 3 // если передается один параметр, то круглые скобки при определении можно опустить
const f3 = (x, y) => x * y // если павраметров 2 и более, то круглые скобки обязательны
const f4 = (x, y) => {
  if (x > y) {
    return x + y
  } else {
    return x * y
  }
}
const f5 = (x, y) => x > y ? x + y : x * y

/**
 * 
 * @param {string} marker заполнитель строки
 * @param {number} lineIndex номер линии пирамиды
 * @returns {string}
 */
const createLine = (marker, lineIndex) => {
  let line = '';

  for (let i = 0; i < lineIndex * 2 - 1; i++) {
    line += marker
  }

  return line
}

const createSpaceLine = (lineIndex, h) => {
  let space = '';

  for (let i = lineIndex; i <= h; i++) {
    space += ' '
  }

  return space
}

/**
 * Функция создания пирамидки
 * @param {string} marker 
 * @param {number} h 
 */
const createPyramid = (marker, h = 5) => {
  // h = h || 5
  for (let i = 1; i <= h; i++) {
    /** @type {string} */
    let line = createLine(marker, i);
    let space = createSpaceLine(i, h);

    document.write('<pre style="margin: 0;">' + space + line + '</pre>')
  }
}

createPyramid('*')

/** @type {string} */
let s1;
/** @type {string[]} */
let arr = [];

arr[arr.length] = 15
arr[arr.length] = 25
arr[arr.length] = 35
arr[arr.length] = 45
arr[arr.length] = 55

const item = arr[arr.length - 1]
arr.length = arr.length - 1