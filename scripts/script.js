const accordeon = (accordeonSelector) => {
  const accordeonContainers = document.querySelectorAll(accordeonSelector)

  /**
   * 
   * @param {HTMLDivElement} container 
   */
  const accordeonHandler = (container) => {
    const titels = container.querySelectorAll('.accordeon__title')

    /**
     * 
     * @param {HTMLElement} title 
     */
    const titleHandler = (title) => {
      title.addEventListener('click', () => {
        title.classList.toggle('active')
        titels.forEach(item => {
          if (item !== title) {
            item.classList.remove('active')
          }
        })
      })
    }

    titels.forEach(titleHandler)
  }

  accordeonContainers.forEach(accordeonHandler)
}

accordeon('.accordeon-container')

function Test(test1, test2) {
  this.test1 = test1
  this.test2 = test2
}

const test1 = new Test(1, 2)
const test2 = new Test(1, 2)
const test3 = test2

const calculate = () => {
  const container = document.querySelector('.numbers')
  const input = document.querySelector('.numbers__input')
  const math = {
    operandA: null,
    result: null
  }

  /**
   * 
   * @param {MouseEvent} event 
   */
  const clickHandler = (event) => {
    /** @type {HTMLElement} */
    const target = event.target
    console.log(target.className);

    switch (target.className) {
      case 'numbers__button':
        let value = input.value
        const num = target.dataset.value
        input.value = value + num
        return
      case 'numbers__buttons':
        if (!math.operandA) {
          math.operandA = +input.value
          input.value = ''
        } else {
          const num = +input.value
          math.result = math.operandA + num
          math.operandA = math.result
          input.value = ''
        }
        return
      case 'numbers__input':
        if (!math.result) {
          input.value = math.operandA + +input.value
        } else {
          input.value = math.result + +input.value
          math.operandA = null
          math.result = null
        }
        return
      default:
        input.value = ''
        math.operandA = null
        math.result = null
    }

    // if (target.classList.contains('numbers__button')) {
    //   let value = input.value
    //   const num = target.dataset.value
    //   input.value = value + num
    // }

    // if (target.classList.contains('numbers__buttons')) {
    //   if (!math.operandA) {
    //     math.operandA = +input.value
    //     input.value = ''
    //   } else {
    //     const num = +input.value
    //     math.result = math.operandA + num
    //     math.operandA = math.result
    //     input.value = ''
    //   }
    // }

    // if (target.classList.contains('numbers__input')) {
    //   if (!math.result) {
    //     input.value = math.operandA + +input.value
    //   } else {
    //     input.value = math.result + +input.value
    //     math.operandA = null
    //     math.result = null
    //   }
    // }

    // if (target.classList.contains('numbers')) {
    //   input.value = ''
    //   math.operandA = null
    //   math.result = null
    // }
  }

  container.addEventListener('click', clickHandler)
}

calculate()