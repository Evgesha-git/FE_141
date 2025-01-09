/**
 * операторы присваивания =, +=, -=, *=, /=, **=
 * Математические операторы +, -, *, /, *, %
 * Логические операторы &&, ||, !, &, |, 
 * Операторы стравнения >, <, >=, <=, ==, !=, ===, !==
 * остальные операторы .
 * ||, &&, ??
 */

// function getRandomValue (max, min) {
// return Math.floor(min + Math.random() * (max + 1 - min)) // random (0 .. 1)
//   let rand = Math.floor(min + Math.random() * (max + 1 - min))
//   if (rand > 0) {    
//     return rand
//   } else if (rand < 0) {
//     return ''
//   } else {
//     return null
//   }
// }

// let a = getRandomValue(2, -2) ?? 'false' 
/**
 * || истинные значяения это любые значения кроме 0, '', null и undefined
 * ?? истинные значяения это любые значения кроме null и undefined
 */
// console.log(a);

// console.log(!true);

// let flag = false;

// console.log(flag);

// flag = !flag;

// console.log(flag);

// flag = !flag;

// console.log(flag);

// let b = 1;

// console.log(!!b);

/**
 * if .. else
 * switch case
 * ? :
 */

let number = prompt("Введите число") // prompt возвращает либо строку, либо null

if (isNaN(number)) { // (isNaN <- NaN) -> isNaN -> true, (isNaN <- 12) -> isNaN -> false
  alert('Ввели не число')
} else {
  let num = Number(number)
  if (num > 0) {
    alert(num ** 3)
  } else if (num < 0) {
    alert(num ** 2)
  } else {
    alert('введен 0')
  }
}

// let a = 0

// if (a !== 0) {
//   alert('Истинное значение')
// } else {
//   alert('Ложное значение')
// }

// let arr = []

// arr.length > 0 && alert('что то там было')

// let val = prompt('Веедите str | number | type')

// switch (val) {
//   case 'str':
//     alert('Ввели str')
//     break;
//   case 'number':
//     alert('Ввели number')
//     break;
//   case 'TYPE':
//   case 'Type':
//   case 'type':
//     alert('Ввели type')
//     break;
//   default:
//     alert('Ввели не валидное значение')
//   // break;
// }

// ? :

function ternal (pattern, treuVal, falseVal) {
  if (pattern){
    return treuVal
  } else {
    return falseVal
  }
}

let test = 23 < 56 ? 
    23 * 2 > 56 ? 
      'Верно' : 
      'Не верно' : 
  'Не верно'
let test2 = ternal(
    23 < 56, 
    ternal(23 * 2 > 56, 'Верно', 'Не верно'), 
    'Не верно'
  )
console.log(test);
console.log(test2);
