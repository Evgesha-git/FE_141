let nums = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let min = Infinity;
let max = -Infinity;
let buffer = '';

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === ' ') {
    if (Number(buffer) > max) max = Number(buffer);
    if (Number(buffer) < min) min = Number(buffer);
    buffer = ''
  } else {
    buffer = buffer + nums[i]
  }
}

// nums.split(' ').forEach(num => {
//   if (+num > max) max = +num
//   if (+num < min) min = +num
// })

// console.log(max);
// console.log(min);

// let n = +prompt('Введите число');
let n = 2374865;

let nTestBuff = n;

let numString = String(n);
let numCount = numString.length;
let summ = 0;
let numRev = '';

let numLen = 0;

for (let i = 0; i < numString.length; i++) {
  // console.log(+numString[i]);
  // summ += +numString[i]; // summ  = summ + Number(numString[i])
}

// for (let i = numString.length - 1; i >= 0; i--) {
//   numRev += numString[i]; // numRev = numRev + numString[i]
// }

while (nTestBuff) {
  let ost = nTestBuff % 10
  nTestBuff = parseInt(nTestBuff / 10)
  summ += ost
  numRev += ost
  numLen++
}

// console.log('Исходное значение: ' + n + ', количество цифр: ' + numLen + ', сумма цифр: ' + summ + ', в обратном порядке: ' + numRev);
// console.log(nTestBuff);


let arr = [
  1,
  'string',
  1 > 2 ? 'Да' : 'Нет',
  (234).toString(2),
]

// console.log(arr);

let a = [1, 2, 3, 4, 5, [6, 6.1, 6.2], 7, 8, 9, 10]
a[5][0]

/**
 * push - поместить в конец массива
 * pop - извлечь из конца массива
 * shift - извлекает из начала массива
 * unshift - помещает в начала массива
 * slice - создает новый подмассив, не изменяя исходный
 * splice - извлекает подмассив, изменяет исходный
 */

for (let i = 0; i < a.length; i++) {
  if (typeof a[i] === 'object') {
    for (let j = 0; j < a[i].length; j++){
      if (a[i][j] % 2 === 0) {
        a[i].splice(j, 1, 'Чётное')
      }
    }
  }
  if (a[i] % 2 === 0) {
    a.splice(i, 1, 'Чётное')
  }
}

console.log(a);

let alf = 'abcdefghijklmnopqrstuvwxyz'

let str = prompt()

if (alf.split('').includes(str[0])) {
  alert('Всё успешно')
} else {
  alert('Всё пропало')
}

// let flag = false;

// for (let i = 0; i < alf.length; i++) {
//   if (str[0] === alf[i]) {
//     flag = true;
//     break;
//   }
// }

// if (flag) {
//   alert('Всё успешно')
// } else {
//   alert('Всё пропало')
// }

let c = a.slice(2, 6)