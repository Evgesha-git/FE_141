/**
 * Создание элементов
 * Вывод на экран
 */

const vanilaJS = () => {
  const h1 = document.createElement('h1')
  h1.innerText = 'Lorem, ipsum dolor.'
  h1.classList.add('title')
  const p = document.createElement('p')
  p.innerText = 'Lorem ipsum dolor sit amet.'
  p.classList.add('text')

  const container = document.createElement('div')
  container.classList.add('container')
  container.append(h1, p)

  const root = document.getElementById('root')
  root.append(container)
}

vanilaJS()

const reactJS = () => {
  const h1 = React.createElement(
    'h1',
    {
      className: 'title2 class2',
      id: 'titleId'
    },
    'React Js'
  )
  const p = React.createElement(
    'p',
    null,
    [
      React.createElement('span', { className: 'red' }, 'Lorem, ipsum.'),
      'Lorem ipsum dolor sit amet consectetur.'
    ]
  )

  const container = React.createElement(
    'div',
    {
      className: 'cotainer'
    },
    [
      h1,
      p,
      React.createElement('img', { src: 'https://placehold.co/600x400' })
    ]
  )

  const root = ReactDOM.createRoot(document.getElementById('root2'))
  root.render(container)
}

reactJS()

/**
 * Компоненты
 */

const componentJS = () => {
  function Logo () {
    this.create = () => {
      this.element = document.createElement('div')
      this.element.innerHTML = `
        <a href="#" className="logo"><img src="https://placehold.co/60x40" alt="logo" /></a>
      `
      return this.element
    }
  }

  const logo = new Logo().create()
  const root = document.getElementById('root3')
  root.append(logo)
}

componentJS()

const componentReact = () => {
  const Logo = () => {
    return React.createElement(
      'div',
      {
        className: 'logo'
      },
      React.createElement(
        'a',
        {
          href: '#'
        },
        React.createElement(
          'img',
          {
            src: 'https://placehold.co/70x50',
            alt: 'logo'
          }
        )
      )
    )
  }

  const root = ReactDOM.createRoot(document.getElementById('root4'))
  root.render(Logo())
}
componentReact()

/**
 * JSX разметка
 */

const reactJSX = () => {
  const root = ReactDOM.createRoot(document.getElementById('root5'))
  root.render(
    <div className="logo">
      <a href="#">
        <img src="https://placehold.co/100x80" alt="logo" />
      </a>
    </div>
  )
}

reactJSX()

/**
 * Пропсы (Параметры функций)
 * Стейты
 * События
 */