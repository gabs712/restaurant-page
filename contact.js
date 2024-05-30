import {render, addUnderline} from './functions.js'

const innerHtml = `
  
`

const contactButton = document.querySelector('[data-contact]')

function renderContact() {
  render(innerHtml)
  addUnderline(contactButton)
}

export default renderContact