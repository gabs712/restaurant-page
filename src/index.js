import './styles/reset.css'
import './styles/style.css'

import renderHome from './scripts/home.js'
import renderMenu from './scripts/menu.js'
// import renderContact from './scripts/contact.js'
import {cleanContent} from './scripts/functions.js'

showHome()

document.querySelector('[data-home]').addEventListener('click', showHome)
document.querySelector('[data-menu]').addEventListener('click', showMenu)
// document.querySelector('[data-contact]').addEventListener('click', showContact)


function showHome() {
cleanContent()
renderHome()
}

function showMenu() {
  cleanContent()
  renderMenu()
}

// function showContact() {
//   cleanContent()
//   renderContact()
// }