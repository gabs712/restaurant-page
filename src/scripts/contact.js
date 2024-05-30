import {render, handleUnderline} from './functions.js'

const innerHtml = `

`

const contactButton = document.querySelector('[data-contact]')

function renderContact() {
  render(innerHtml)
  handleUnderline(contactButton)
}

export default renderContact