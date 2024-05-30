const content = document.querySelector('#content')

function render(innerHtml) {
  const element = document.createElement('div')
  element.innerHTML = innerHtml
  content.append(element)
}

function removeUnderLine() {
  const buttons = [...document.querySelector('[data-header-buttons]').children]
  buttons.forEach((button) => {
    button.classList.remove('selected')
  })
}

function addUnderline(element) {
  element.classList.add('selected')
}

function handleUnderline(element) {
  removeUnderLine()
  addUnderline(element)
}

function cleanContent() {
  content.innerHTML = ''
}

export {render, handleUnderline, cleanContent }