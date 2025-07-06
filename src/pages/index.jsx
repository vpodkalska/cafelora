import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header';
import { Banner } from '../components/Banner/banner';
import { Menu } from '../components/Menu/menu';
import { Gallery } from '../components/Gallery/gallery';
import { Contact } from '../components/Contact/contact';
import { Footer } from '../components/Footer/footer';




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



