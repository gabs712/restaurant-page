import {render, handleUnderline} from './functions.js'
import beef from '../assets/beef.jpg'
import chicken from '../assets/chicken.jpg'
import lasagna from '../assets/lasagna.jpg'
import omelette from '../assets/omelette.jpg'
import pizza from '../assets/pizza.jpg'
import salad from '../assets/salad.jpg'

const innerHtml = `
    <main class="food-grid">

      <div class="food-card">
        <div class="food-card-picture">
          <img src="${beef}" alt="beef">
        </div>
        <div class="food-card-info">
          <div class="food-card-name">Beef</div>
          <div class="food-card-description">
            Juicy, tender beef cooked to perfection with a blend of aromatic herbs and spices.
          </div>
        </div>
      </div>

      <div class="food-card">
        <div class="food-card-picture">
          <img src="${chicken}" alt="chicken">
        </div>
        <div class="food-card-info">
          <div class="food-card-name">Chicken</div>
          <div class="food-card-description">
             Savory, grilled chicken bursting with flavor, marinated in our special blend of seasonings.
          </div>
        </div>
      </div>
    
      <div class="food-card">
        <div class="food-card-picture">
          <img src="${lasagna}" alt="lasagna">
        </div>
        <div class="food-card-info">
          <div class="food-card-name">Lasagna</div>
          <div class="food-card-description">
            Rich, cheesy lasagna layered with hearty meat sauce, baked to a golden brown.
          </div>
        </div>
      </div>
    
      <div class="food-card">
        <div class="food-card-picture">
          <img src="${omelette}" alt="omelette">
        </div>
        <div class="food-card-info">
          <div class="food-card-name">Omelette</div>
          <div class="food-card-description">
            Fluffy omelette packed with fresh veggies and cheese, cooked to your liking.
          </div>
        </div>
      </div>
    
      <div class="food-card">
        <div class="food-card-picture">
          <img src="${pizza}" alt="pizza">
        </div>
        <div class="food-card-info">
          <div class="food-card-name">Pizza</div>
          <div class="food-card-description">
            Crisp, thin-crust pizza topped with premium ingredients and a rich tomato sauce.
          </div>
        </div>
      </div>
    
      <div class="food-card">
        <div class="food-card-picture">
          <img src="${salad}" alt="salad">
        </div>
        <div class="food-card-info">
          <div class="food-card-name">Salad</div>
          <div class="food-card-description">
            Fresh, vibrant salad featuring seasonal produce and a zesty house-made dressing.
          </div>
        </div>
      </div>
    
    </main>
`

const menuButton = document.querySelector('[data-menu]')

function renderMenu() {
  render(innerHtml)
  handleUnderline(menuButton)
}

export default renderMenu