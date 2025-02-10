/** @type {HTMLElement} */
const square = document.querySelector('.square');
const time = getComputedStyle(square);
console.log(time.transitionDuration);

const getRandomColor = () => {
  return Math.floor(Math.random() * 256)
}

// square.onclick = (event) => {
//   square.style.transform = `rotate(${event.timeStamp}deg)`
// }

// square.onclick = () => {
//   square.style.background = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`
// }

const rotateSqare = (event) => {
  square.style.transform = `rotate(${event.timeStamp}deg)`
}

const setRandomColor = () => {
  square.style.background = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`
}

square.addEventListener('click', rotateSqare)

square.addEventListener('click', setRandomColor)

// square.removeEventListener('click', setRandomColor)

square.addEventListener('transitionstart', () => {
  square.removeEventListener('click', rotateSqare)
  square.removeEventListener('click', setRandomColor)
})

square.addEventListener('transitionend', () => {
  square.addEventListener('click', rotateSqare)
  square.addEventListener('click', setRandomColor)
})

/**
 * 
 * @param {string} buttonSelector селектор кнопки
 * @param {string} menuSelector селектор меню
 * @returns 
 */
const menuOpenener = (buttonSelector, menuSelector) => {
  /** @type {HTMLElement | null} */
  const button = document.querySelector(buttonSelector);
  /** @type {HTMLElement | null} */
  const menu = document.querySelector(menuSelector);
  let openFlag = false;

  if (!button && !menu) return

  const menuToggle = () => {
    console.log(menu.classList.contains('active'))
    if (!openFlag) { // menu.classList.contains('active')
      menu.classList.add('active');
      button.innerText = 'Close';
      openFlag = !openFlag;
    } else {
      menu.classList.remove('active');
      button.innerText = 'Open';
      openFlag = !openFlag;
    }
  }

  button.addEventListener('click', menuToggle)
  menu.addEventListener('transitionstart', () => {
    button.removeEventListener('click', menuToggle)
  })
  menu.addEventListener('transitionend', () => {
    button.addEventListener('click', menuToggle)
  })
}

menuOpenener('.menuToggle', '.menu')

/**
 * 
 * @param {string} textSelector селектор элемента с текстом
 */
const textEdit = (textSelector) => {
  const textElements = document.querySelectorAll(textSelector)

  /**
   * 
   * @param {HTMLElement} textElement 
   */
  const textContentEdit = (textElement) => {
    textElement.addEventListener('dblclick', function () {
      console.log(this);
      this.contentEditable = true
    })

    textElement.addEventListener('click', (event) => {
      /** @type {HTMLElement} */
      const target = event.target
      console.log(event);
      
      if (target.nodeName === 'SPAN') {
        target.innerHTML += '!'
      }
      if (target.nodeName === 'P') {
        target.innerHTML = '!' + target.innerHTML
      }
    }, true)

    textElement.addEventListener('keydown', function (event) {
      console.log(event);
      
      if (event.altKey && event.key === 'Enter') {
        this.contentEditable = false
      }
    })
  }

  textElements.forEach(textContentEdit)
}

textEdit('#text')

const listItem = document.createElement('div')
const contentText = document.createElement('p')

contentText.innerText = 'text'
contentText.addEventListener('dblclick', function () {
  this.contentEditable = true
})

contentText.addEventListener('keydown', function (event) {
  if (event.altKey && event.key === 'Enter') {
    this.contentEditable = false
  }
})

listItem.append(contentText);
document.body.append(listItem);

localStorage.setItem('test', 'dfkghkdfj')

console.log(JSON.parse(localStorage.getItem('notes')));
