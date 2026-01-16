import './App.css'
import instagram from './assets/Icons/instagram.svg'
import logo from './assets/Images/logo.jpg'

function App() {
    return (
    <div>
      <header>
        <div>
          <div className="topbar">
              <a href="https://www.instagram.com/fairy.seals/"
                 className="instagram">
                  <span className='instagram'>Sledujte náš instagram</span>
                  <img src={instagram} alt="instagram"/>
              </a>
          </div>

              <nav className="nav">
                  <div className="nav-container">
                      <div className="nav-logo">
                          <a href='/'><img src={logo} alt="Logo" className='logo'/></a>
                      </div>
                  </div>
              </nav>
          </div>
      </header>

        <main>

        </main>

        <footer>
            <p className='kredit'>Vytvořila Elizabeth Fogbard, vrámci semestrálního projektu</p>
            <p className='prava'>© 2025 Fairy Seals • Všechna práva vyhrazena</p>
        </footer>
    </div>
    )
}

export default App
