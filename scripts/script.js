const makeSlider = (sliderContainerSelector) => {
  const slidersContainers = document.querySelectorAll(sliderContainerSelector)

  /**
   * 
   * @param {HTMLDivElement} sliderContainer 
   */
  const slider = (sliderContainer) => {
    /** @type {HTMLElement} */
    const slides = sliderContainer.querySelector('.slides')
    const next = sliderContainer.querySelector('.btn-next')
    const prev = sliderContainer.querySelector('.btn-prev')
    const pagination = sliderContainer.querySelector('.slider-pagination')

    if (!slides || !next || !prev) return

    const slideCount = slides.children.length

    const moveSlideByIndex = (index) => {
      slides.style.transform = `translateX(-${index * 100}%)`
      movePagination(index)
    }

    const makePagination = (count) => {
      const items = []
      for (let i = 0; i < count; i++) {
        const span = document.createElement('span')
        span.addEventListener('click', () => moveSlideByIndex(i))
        if (i === 0) {
          span.classList.add('active')
        }
        items.push(span)
      }

      pagination.append(...items)
    }

    if (pagination) {
      makePagination(slideCount)
    }

    const movePagination = (index) => {
      [...pagination.children].forEach((paginationItem, i) => {
        if (i === index) {
          paginationItem.classList.add('active')
        } else {
          paginationItem.classList.remove('active')
        }
      })
    }

    /**
     * 
     * @param {boolean} direction 
     */
    const slideMove = (direction) => {
      let position = slides.style.transform || '0'
      position = position.replace('translateX(', '')
      position = Math.abs(parseInt(position)) // -400%) -> -400

      if (direction) {
        if (position < (slideCount - 1) * 100) {
          slides.style.transform = `translateX(-${position + 100}%)`
          !!pagination && movePagination((position + 100) / 100)
        } else {
          slides.style.transform = `translateX(-0%)`
          !!pagination && movePagination(0)
        }
      } else {
        if (position > 0) {
          slides.style.transform = `translateX(-${position - 100}%)`
          !!pagination && movePagination((position - 100) / 100)
        } else {
          slides.style.transform = `translateX(-${(slideCount - 1) * 100}%)`
          !!pagination && movePagination(slideCount - 1)
        }
      }

    }

    next.addEventListener('click', () => slideMove(true))
    prev.addEventListener('click', () => slideMove(false))
  }

  slidersContainers.forEach(slider)
}

makeSlider('.slider-container')