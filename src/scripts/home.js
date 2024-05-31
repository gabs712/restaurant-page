import {render, handleUnderline} from './functions.js'

const innerHtml = `
    <h1 class="restaurant-name">Baratie's</h1>
    <p class="restaurant-description">
      Welcome to Baratie's where culinary excellence meets a warm and inviting atmosphere. Located in the heart of
        FoodLand, our restaurant is the perfect place to enjoy a delicious meal with family, friends, or colleagues.
    
      At Baratie's, we pride ourselves on offering a diverse menu that caters to all tastes. Our chefs use only the
      freshest ingredients, crafting each dish with care and creativity. Whether you're in the mood for a hearty steak,
      fresh seafood, or a vegetarian delight, you'll find something to satisfy your cravings. Our menu also features a
      selection of fine wines, craft beers, and handcrafted cocktails to complement your meal.
    
      Our dining area is designed to provide a comfortable and relaxed ambiance, with stylish decor and a friendly staff
      dedicated to making your dining experience memorable. Whether you're celebrating a special occasion or simply enjoying
      a night out, Baratie's is the perfect destination.
    
      Join us at Baratie's and discover why we're a favorite among locals and visitors alike. We look forward to
      serving you!
    </p>
`

const homeButton = document.querySelector('[data-home]')

function renderHome() {
  render(innerHtml)
  handleUnderline(homeButton)
}

export default renderHome