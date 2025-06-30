import './header.css'

export const Header = ({ domu, menu, galerie, kontakt }) => {
  return (
    <header>
      <div>
        <div className="header__content container">
          <div className="site-logo"></div>

          <div className="navigation">
            <button id="nav-button" className="nav-btn"></button>
            <nav className="rollout-nav nav-closed">
              <a href="#home">{domu}</a>
              <a href="#menu">{menu}</a>
              <a href="#gallery">{galerie}</a>
              <a href="#contact">{kontakt}</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}


function navBtnRollout() {
  
}

document.querySelector('#nav-button').addEventListener('click', navBtnRollout)

