/**
 * @typedef {Object} ConverterTypes
 * @property {string} input 
 * @property {string} output
 * @property {string} button
 */

/**
 * 
 * @param {ConverterTypes} param0 
 */
const converter = ({ button, input, output }) => {
  const inputElement = document.querySelector(input)
  const outputElement = document.querySelector(output)
  const btn = document.querySelector(button)

  if (!inputElement || !outputElement || !btn) return

  const convert = () => {
    /** @type {string} */
    const value = inputElement.value

    const resultArr = [...value].map(item => {
      const code = item.charCodeAt()
      return code.toString(2)
    })

    outputElement.value = resultArr.join('.')
  }

  btn.addEventListener('click', convert)
}

converter({ button: '#button', input: '#input', output: '#output' })

/**
 * 
 * @param {ConverterTypes} param0 
 */
const converter2 = ({ button, input, output}) => {
  const inputElement = document.querySelector(input)
  const outputElement = document.querySelector(output)
  const btn = document.querySelector(button)

  if (!inputElement || !outputElement || !btn) return

  const convert = () => {
    /** @type {string} */
    const value = inputElement.value

    if (!value.length) return

    const valueArr = value.split('.')

    const resultArr = valueArr.map(item => {
      const code = parseInt(item, 2)
      return String.fromCharCode(code)
    })
    
    outputElement.value = resultArr.join('')
  }

  btn.addEventListener('click', convert)
}

converter2({ button: '#buttonRev', input: '#inputRev', output: '#outputRev' })

const create = (tagName) => {
  const elem = document.createElement(tagName)
  return elem
}

/**
 * 
 * @param {HTMLElement} elem 
 * @param {string} name 
 * @param {?string} value 
 */
const attr = (elem, name, value) => {
  if (value) {
    elem.setAttribute(name, value)
  } else {
    return elem.getAttribute(name)
  }
}