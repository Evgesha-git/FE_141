let str = 'Lorem ipsum dolor, sit amet consectetur\nadipisicing elit. Provident consectetur temporibus ea rerum cumque repudiandae.';

console.log(str.split(' '));

/**
 * @typedef {Object} FunctionParams
 * @property {string} string
 * @property {number} test
 */

/**
 * @param {string} string 
 * @returns {number}
 */
const strCount = (string) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ' || string[i] === '\n') {
      count++
    }
  }

  return count + 1
}

const count = strCount(str)
console.log(count);

/**
 * @param {string} string
 * @returns {string}
 */
const firstLetterUpper = (string) => {
  const lineArr = string.split('\n')
  const stringArr = lineArr.map(function (line) {
    // const strArr = line.split(' ')
    // for (let i = 0; i < strArr.length; i++) {
    //   strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1)
    // }
    // return strArr.join(' ')
    return line
      .split(' ')
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join(' ')
  })

  return stringArr.join('\n')
}

console.log(firstLetterUpper(str));


// let reg = /\s+/
console.log(('                   ajhs           dgfjk          hgdas          fjkas                        ').trim().replace(/\s+/, ' '));
console.log(('                   ajhs           dgfjk          hgdas          fjkas                        ').trim().replaceAll(/\s+/gi, ' '));

console.log(`sdhfghdfsg
sdfgkldhsfgkj
dsfjglfdg
sdfgjlfds`)

const pyramid = (h) => {
  for (let i = 1; i <= h; i++) {
    // document.write('<pre style="margin: 0">' + (' ').repeat(h - i) + ('^').repeat(i * 2 - 1) + '</pre>')
    document.write(`<pre style='margin: 0;'>${(' ').repeat(h - i)}${('^').repeat(i * 2 - 1)}</pre>`)
  }
}

pyramid(10);

let s2 = '1234';

const s3 = [].map.call(s2, function (item) {
  return item ** 2
})
console.log(s3);

const s4 = [].map.bind(s2, function (item) {
  return item ** 3
})

console.log(s4());
