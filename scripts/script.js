/**
 * 
 * @param {string} content 
 * @param {boolean} position 
 * @returns {HTMLDivElement}
 */
const createTooltip = (content, position) => {
  const tooltipContainer = document.createElement('div')
  tooltipContainer.classList.add('tooltip-container')
  if (position) {
    tooltipContainer.style.top = '-5px'
    tooltipContainer.style.transform = 'translate(-50%, -100%)'
  } else {
    tooltipContainer.style.bottom = '-5px'
    tooltipContainer.style.transform = 'translate(-50%, 100%)'
  }

  const tooltipContent = document.createElement('p')
  tooltipContent.classList.add('tooltip-content')
  tooltipContent.innerText = content

  tooltipContainer.append(tooltipContent)
  return tooltipContainer
}

const tooltips = (tooltipsSelector) => {
  const tooltipsItems = document.querySelectorAll(tooltipsSelector)

  /**
   * 
   * @param {HTMLElement} tooltipItem 
   */
  const tooltip = (tooltipItem) => {
    const content = tooltipItem.dataset.content
    let tooltipConteiner = null
    /**
     * 
     * @param {MouseEvent} event 
     */
    const tooltipHandler = (event) => {
      const height = window.innerHeight
      const positionY = event.clientY
      let topFlag = false

      if (positionY > height * .75) {
        topFlag = true
      }

      tooltipConteiner = createTooltip(content, topFlag)
      tooltipItem.append(tooltipConteiner)
    }

    const mouseLeaveHandler = () => {
      if (!tooltipConteiner) return
      tooltipConteiner.remove()
      tooltipConteiner = null
    }

    tooltipItem.addEventListener('mouseenter', tooltipHandler)
    tooltipItem.addEventListener('mouseleave', mouseLeaveHandler)
  }

  tooltipsItems.forEach(tooltip)
}

tooltips('.tooltip')

const popupHandler = () => {
  const show = (content) => {
    const container = document.createElement('div')
    container.classList.add('popup')

    const popupModal = document.createElement('div')
    popupModal.classList.add('popup__modal')

    const popupClose = document.createElement('div')
    popupClose.classList.add('popup__close')
    popupClose.innerHTML = '&#215;'

    const popupContent = document.createElement('div')
    popupContent.classList.add('popup__content')
    popupContent.append(content)

    container.addEventListener('click', (e) => {
      /** @type {HTMLElement} */
      const target = e.target

      if (target.classList.contains('popup') || target.classList.contains('popup__close')) {
        container.remove()
      }
    })

    popupModal.append(popupClose, popupContent)
    container.append(popupModal)
    document.body.append(container)
  }

  /**
   * @param {MouseEvent} event 
   */
  const popup = (event) => {
    /** @type {HTMLLinkElement} */
    let target = event.target

    if (!target) return
    if (target.tagName !== 'A') {
      target = target.closest('a')
    }

    if (target.tagName !== 'A') return
    let type = target.dataset.type

    if (!type) return
    event.preventDefault()

    let content = null

    if (type === 'text') {
      content = target.dataset.content
    }

    if (type === 'img') {
      const img =  new Image()
      img.src = target.dataset.content
      content = img
    }

    if (type === 'content') {
      const id = target.dataset.id
      
      if (!id) return

      const idChild = document.getElementById(id).children[0]
      if (!idChild) return
      content = idChild
    }

    show(content)
  }

  document.body.addEventListener('click', popup)
}

popupHandler()