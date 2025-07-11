import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header';
import { Banner } from '../components/Banner/banner';
import { Menu } from '../components/Menu/menu';
import { Gallery } from '../components/Gallery/gallery';
import { Contact } from '../components/Contact/contact';
import { Footer } from '../components/Footer/footer';

const responseDrinks = await fetch('http://localhost:4000/api/drinks');
const data = await responseDrinks.json();
const drinksData = data.data


document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header
      domu="domů"
      menu="menu"
      galerie="galerie"
      kontakt="kontakt"
    />
    <div>

    </div>
    <main>
      <Banner />
      <Menu
        drinks={drinksData}
      />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

// hamburger ikonka roll
const navToggle = document.querySelector(".nav-btn");
const mobileNav = document.querySelector(".rollout-nav");

navToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("nav-closed");
});

mobileNav.addEventListener("click", () => {
  mobileNav.classList.add("nav-closed");
});

//objednani napoje


const orderForms = document.querySelectorAll('.drink form');
orderForms.forEach(form => {
  form.addEventListener('submit', async (prop) => {
    prop.preventDefault();
    const drinkId = Number(prop.target.dataset.id);

    
    const drink = drinksData.find(drink => drink.id === drinkId);
    const orderValue = !drink.ordered;

    // poslat objednavku
    const response = await fetch(`http://localhost:4000/api/drinks/${drinkId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{
        op: 'replace',
        path: '/ordered',
        value: orderValue,
      }]),
    });
    const data = await response.json();
    console.log(data);

    window.location.reload();

  });
});




