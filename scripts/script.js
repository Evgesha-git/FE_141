const calculateCreator = (calculateSelector) => {
  const calculateContainer = document.querySelector(calculateSelector)
  if (!calculateContainer) return
  /** @type {HTMLElement} */
  const input = calculateContainer.querySelector('.calculate__input')
  /** @type {HTMLElement} */
  const buttons = calculateContainer.querySelector('.calculate__buttons')
  const calculate = {
    value: '',
    operand: null,
    waitingSecondOperand: false,
    operator: null
  }

  const formaterNumber = new Intl.NumberFormat('ru-RU', {
    maximumFractionDigits: 100
  })

  const operations = {
    '/': (firs, second) => ((firs * 10) / (second * 10)) / 10,
    '*': (firs, second) => ((firs * 10) * (second * 10)) / 10,
    '-': (firs, second) => ((firs * 10) - (second * 10)) / 10,
    '+': (firs, second) => ((firs * 10) + (second * 10)) / 10
  }

  /**
   * 
   * @param {string} value 
   */
  const render = (value) => {
    if (value[value.length - 1] === '.') {
      input.innerText = formaterNumber.format(+value) + ','
    } else {
      input.innerText = formaterNumber.format(+value)
    }
    console.log(formaterNumber.format(+value));
    
  }

  const formatedCurrent = (value) => {
    const trimVal = value.replaceAll(/\s/g, '')
    return trimVal.replaceAll(',', '.')
  }

  const clear = () => {
    calculate.operand = null
    calculate.value = ''
    calculate.waitingSecondOperand = false
    calculate.operator = null
    input.innerText = 0
  }

  const setNumber = (value) => {
    const currentValue = formatedCurrent(input.innerText)


    if (calculate.waitingSecondOperand) {
      if (value === '.') {
        if (currentValue.indexOf('.') !== -1) return
        calculate.value = 0 + value
      } else {
        calculate.value = value
      }
      calculate.waitingSecondOperand = false
    } else if (calculate.operator === '=') {
      if (value === '.') {
        if (currentValue.indexOf('.') !== -1) return
        calculate.value = 0 + value
      } else {
        calculate.value = value
      }
      calculate.operator = null
    } else {
      if (value === '.') {
        if (currentValue.indexOf('.') !== -1) return
        calculate.value = currentValue + value
      } else {
        calculate.value = +(currentValue + value)
      }
    }


    render(calculate.value)
  }

  const percent = (current) => {
    calculate.value = calculate.operand / 100 * +current
  }

  const abs = () => {
    calculate.value = -(+calculate.value)
  }

  const handleOperators = (operator, current) => {
    if (calculate.waitingSecondOperand) {
      const val = operations[calculate.operator](calculate.operand, +current)
      calculate.value = val
      calculate.operand = val
    } else {
      calculate.operator = operator
      calculate.waitingSecondOperand = true
      calculate.operand = calculate.value
      calculate.value = 0
    }
  }

  const handleResult = (operator, current) => {
    const val = operations[calculate.operator](calculate.operand, +current)
    calculate.value = val
    calculate.waitingSecondOperand = false
    calculate.operand = null
    calculate.operator = operator
  }

  const setOperator = (operator) => {
    const currentValue = formatedCurrent(input.innerText)

    if (operator !== '=') {
      if (operator === '+/-') {
        abs()
      } else if (operator === '%') {
        percent(currentValue)
      } else {
        handleOperators(operator, currentValue)
      }
    } else {
      handleResult(operator, currentValue)
    }

    render(calculate.value)
  }

  buttons.addEventListener('click', (e) => {
    /** @type {HTMLElement} */
    const target = e.target

    if (!target.classList.contains('button')) return

    if (target.classList.contains('clear')) {
      clear()
    }

    if (target.classList.contains('number')) {
      const value = target.dataset.value
      if (!value) return
      setNumber(value)
    }

    if (target.classList.contains('operator')) {
      const operator = target.dataset.value
      if (!operator) return
      setOperator(operator)
    }
  })
}

calculateCreator('.calculate')