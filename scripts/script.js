// {
//   let a = 0;
//   {
//     console.log(a);
//     let b = 3
//     {
//       console.log(b);
      
//     }
//   }
// }

const makeCounter = function () {
  let counter = 0;
  return function () {
    return counter++
  }
}

const counter1 = makeCounter() // создали независимый контейнер со своим counter
const counter2 = makeCounter() // создали новый независимый контейнер со своим counter

const timeStart = Date.now()

const fib = (n) => {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}

/**
 * fib(3)
 * fib(2) + fib(1) => 1
 * fib(1) + fib(0)
 */

// console.log(fib(60));
const timeEnd = Date.now()
console.log(timeEnd - timeStart);

const memoize = function (fn) {
  let cache = {}
  return function (...args) {
    let n = args[0]
    if (n in cache){
      return cache[n]
    } else {
      let result = fn(n)
      cache[n] = result
      return result
    }
  }
}

const fib2 = memoize((n) => {
  return n <= 1 ? n : fib2(n - 1) + fib2(n - 2)
})

console.log(fib2(600));

// 0 1 2 3 4 5
// 0 1 1 2 3 5

const func2 = function (a, b) {
  console.log(a, b, arguments);
  const c = () => {
    console.log(arguments);
  }

  c()
}

func2(1, 2, 3, 4, 5)

/** @deprecated */
const func3 = function (a, b, ...c) {
  console.log(a, b, c);
}

func3(1, 2, 3, 4, 5)

let user = ['Пупкин', 'Вавилий', 'Витальевич', 1, 2, 3, 4, 5]

const [surName, name, lastName, ...other] = user //деструктуризация массива
console.log(name, surName, lastName, other);

let a1 = 10
let b1 = 50
console.log(a1, b1);
[a1, b1] = [b1, a1] // свопинг
console.log(a1, b1);

let arr1 = [1, 2, 3]
let arr2 = arr1
let arr3 = [...arr1]

function rest (arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i])
  }
  return result
}

let arr4 = rest(arr1)

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

arr1.push(4)

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

let user2 = {
  name: 'Alex',
  age: 23,
}

let user3 = {
  lastName: 'Petrov',
  name: 'Vasya',
  ...user2
}

console.log(user3);

const square = document.querySelector('.square')

square.addEventListener('click', () => {
  square.requestFullscreen()
})