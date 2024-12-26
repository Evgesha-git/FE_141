// let a;
// console.log(typeof a);
// a = 1;
// console.log(typeof a);
// a = 'sting'
// console.log(typeof a);
// a = []
// console.log(typeof a);
// a = {}
// console.log(typeof a);

/**
 * undefined
 * number
 * sting
 * object
 * null
 * Symbol
 * bigInt
 * boolean
 */

// let square = document.querySelector('.square')
// square.style.background = '#94faff'

// window.addEventListener('DOMContentLoaded', function () {
//   let square = document.querySelector('.square')
//   square.style.background = '#94faff'
// })

console.log(a);

var a = 21;

var a = 43;

console.log(a);

// console.log(b);

let b = 4;

// let b = 5;
b = 'bananas';
console.log(b);

function f1() {
  var c = 10
  console.log(c);

  (function(){
    console.log('Повторное C', c);
    
  })()
}

f1()

// console.log(c);

{
  let d = 10
  var g = 101
  console.log(d);
  console.log(g);
  console.log(b);
}

// console.log(d);
console.log(g);

const num = 10;

console.log(num);

// num = 12;

// console.log(num);

const obj = {
  num: 1
}

console.log(obj);

obj.num = 3
obj.arr = []

console.log(obj);

// obj = [] //Так сделать не получится

// console.log(obj);

let s = 'sdf'

console.log(typeof Number(s), Number(s));

console.log(NaN == NaN);

/**
 * операторы присваивания =, +=, -=, *=, /=, **=
 * Математические операторы +, -, *, /, *, %
 * Логические операторы &&, ||, !, &, |, 
 * Операторы стравнения >, <, >=, <=, ==, !=, ===, !==
 * отсальные операторы .
 */