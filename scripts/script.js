/**
 * @todo задание на дом: выбрать один из двух вариантов реализации и добавить возможность добавления новых вкладок через кнопку
 *  в общем списке кнопок для табов, содержание контента может быть любым.
 */

/**
 * @typedef {Object} TabsContainerParams
 * @property {string} tabContainer
 * @property {string} tabButtons
 * @property {string} tabContent
 */

/**
 * 
 * @param {TabsContainerParams} param0 
 */

const tabsContainer = ({ tabContainer, tabButtons, tabContent }) => {
  const tabContainers = document.querySelectorAll(tabContainer)

  /**
   * 
   * @param {HTMLDivElement} tabHtmlElement 
   */
  const tabHandler = (tabHtmlElement) => {
    const buttons = tabHtmlElement.querySelector(tabButtons)
    const content = tabHtmlElement.querySelector(tabContent)

    if (!buttons || !content) return

    const tabContentHendler = (index) => {
      // for (let contentItem of content.children) {
      //   if (contentItem.dataset.contentindex === index) {
      //     contentItem.classList.add('tab-content--active')
      //   } else {
      //     contentItem.classList.remove('tab-content--active')
      //   }
      // }

      [...content.children].forEach(item => {
        if (item.dataset.contentindex === index) {
          item.classList.add('tab-content--active')
        } else {
          item.classList.remove('tab-content--active')
        }
      })

      // [...content.children].forEach((item, contentIndex) => {
      //   if (index === contentIndex) {
      //     item.classList.add('tab-content--active')
      //   } else {
      //     item.classList.remove('tab-content--active')
      //   }
      // })
    }

    /**
     * @param {Event} event 
     */
    const buttonHandler = (event) => {
      /** @type {HTMLElement} */
      const target = event.target
      
      if (target.classList.contains('tab-buttons') || target.classList.contains('tab-button--active')) return      

      const tabIndex = target.dataset.buttonindex
      
      tabContentHendler(tabIndex)
      target.classList.add('tab-button--active')

      for(let button of buttons.children){ // for..in -> for(let key in obj), for..of -> for(let item of iter)
        if (button.dataset.buttonindex !== tabIndex) {
          button.classList.remove('tab-button--active')
        }
      }
      
      
      // [...buttons.children].forEach((button, index) => {       
      //   if (button === target) {
      //     button.classList.add('tab-button--active')
      //     tabContentHendler(index)
      //   } else {
      //     button.classList.remove('tab-button--active')
      //   }
      // })
    }

    buttons.addEventListener('click', buttonHandler)
  }

  tabContainers.forEach(tabHandler)
}

tabsContainer({ tabContainer: '.tab-container', tabButtons: '.tab-buttons', tabContent: '.tab-contents' })