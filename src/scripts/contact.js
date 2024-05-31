import {render, handleUnderline} from './functions.js'

const innerHtml = `
    <h1>
      Contact Us
    </h1>
    <p>1234 Delicious Avenue</p>
    <p>Gourmet City, Foodland 56789</p>
    <br>
    <p>Phone: (123) 456-7890</p>
    <p>Email: info@restaurant.com</p>
    <br>
    <h2>Reservations:</h2>
    <p>We accept reservations for parties of all sizes. Please call us at (123) 456-7890 to make a reservation or use our online reservation system available on our website.</p>
`

const contactButton = document.querySelector('[data-contact]')

function renderContact() {
  render(innerHtml)
  handleUnderline(contactButton)
}

export default renderContact