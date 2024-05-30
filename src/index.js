import './styles/reset.css'
import './styles/style.css'
import renderHome from './scripts/home'
import {cleanContent} from './scripts/functions'

showHome()

document.querySelector('[data-home]').addEventListener('click', showHome)
document.querySelector('[data-menu]').addEventListener('click', showMenu)
document.querySelector('[data-contact]').addEventListener('click', showContact)


function showHome() {
cleanContent()
renderHome()
}

function showMenu() {
  cleanContent()
  showMenu()
}

function showContact() {
  cleanContent()
  renderContact()
}