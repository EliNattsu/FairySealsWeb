import './App.css'
import instagram from './assets/Icons/instagram.svg'
import logo from './assets/Images/logo.jpg'
import {Link, HashRouter as Router, Routes, Route } from 'react-router-dom';
import OClubu from './pages/oClubu.jsx';
import FAQ from './pages/FAQ.jsx';
import Cleni from './pages/cleni.jsx';
import Galerie from './pages/Galerie.jsx';
import Sety from './pages/Sety.jsx';
import Home from './pages/Home.jsx';
import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => setIsMenuOpen(false);

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Router basename="/FairySealsWeb">
    <div className="app-wrapper">
        <header className='header-fixed'>
        <div>
          <div className="topbar">
              <a href="https://www.instagram.com/fairy.seals/"
                 className="instagram" target="_blank" rel="noopener noreferrer">
                  <span className='instagram'>Sledujte náš instagram</span>
                  <img src={instagram} alt="instagram"/>
              </a>
          </div>

              <nav className="nav">
                  <div className="nav-container">
                      <div className="nav-logo">
                          <Link to="/" onClick={closeMenu}>
                              <img src={logo} alt="Logo" className="logo" />
                          </Link>
                      </div>

                      <button
                          className={`hamburger ${isMenuOpen ? 'is-open' : ''}`}
                          onClick={toggleMenu}
                          aria-label="Otevřít menu"
                          aria-expanded={isMenuOpen}
                      >
                          <span></span>
                          <span></span>
                          <span></span>
                      </button>

                      <ul className="nav-menu">
                          <li><Link to="/oClubu">O nás</Link></li>
                          <li><Link to="/FAQ">FAQ</Link></li>
                          <li><Link to="/cleni">Naše členky</Link></li>
                          <li><Link to="/Sety">Naše sety</Link></li>
                          <li><Link to="/Galerie">Galerie</Link></li>
                          <li>
                              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWHOhHePHAYisG0d9Vhou0dTSfHqQKOiuKfTSZ8DL1IzlgLQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnh1BPWnaPmxayosGyg5jnvHYxLFP9MI7Ha1_LvuULfj3rb2w_yV_Xg7OwrVc_aem_ksnuq_P47vGwDPjJZ8INTg"
                                 className="nav-btn"
                                 target="_blank"
                                 rel="noopener noreferrer">
                                  Přidej se!
                              </a>
                          </li>
                      </ul>

                      <ul className={`nav-menu-mobile ${isMenuOpen ? 'show' : ''}`}>
                          <li><Link to="/oClubu" onClick={closeMenu}>O nás</Link></li>
                          <li><Link to="/FAQ" onClick={closeMenu}>FAQ</Link></li>
                          <li><Link to="/cleni" onClick={closeMenu}>Naše členky</Link></li>
                          <li><Link to="/Sety" onClick={closeMenu}>Naše sety</Link></li>
                          <li><Link to="/Galerie" onClick={closeMenu}>Galerie</Link></li>
                          <li>
                              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWHOhHePHAYisG0d9Vhou0dTSfHqQKOiuKfTSZ8DL1IzlgLQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnh1BPWnaPmxayosGyg5jnvHYxLFP9MI7Ha1_LvuULfj3rb2w_yV_Xg7OwrVc_aem_ksnuq_P47vGwDPjJZ8INTg"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 onClick={closeMenu}>
                                  Přidej se!
                              </a>
                          </li>
                      </ul>
                  </div>
              </nav>
          </div>
      </header>

        <main className="main">
            <Routes>
                <Route path="/FairySealsWeb" element={<Home />} />
                <Route path="/oClubu" element={<OClubu />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/cleni" element={<Cleni />} />
                <Route path="/Galerie" element={<Galerie />} />
                <Route path="/Sety" element={<Sety />} />
            </Routes>
        </main>

        <footer className="footer">
            <div className="footer-top">
                <div className="footer-my">
                    <h4>Poznej nás víc!</h4>
                    <ul>
                        <li><Link to="/oClubu">O nás</Link></li>
                        <li><Link to="/FAQ">FAQ</Link></li>
                        <li><Link to="/cleni">Naše členky</Link></li>
                        <li><Link to="/Sety">Naše sety</Link></li>
                    </ul>
                </div>

                <div className="footer-formular">
                    <h4>Chceš se přidat k nám?</h4>
                    <ul>
                        <li>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWHOhHePHAYisG0d9Vhou0dTSfHqQKOiuKfTSZ8DL1IzlgLQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnh1BPWnaPmxayosGyg5jnvHYxLFP9MI7Ha1_LvuULfj3rb2w_yV_Xg7OwrVc_aem_ksnuq_P47vGwDPjJZ8INTg"
                               target="_blank" rel="noopener noreferrer">
                                Stačí vyplnit dotazník!
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-srazy">
                    <h4>To nejlepší ze srazů!</h4>
                    <ul>
                        <li><Link to="/Galerie">Naše Galerie</Link></li>
                    </ul>
                </div>

                <div className="footer-followus">
                    <h4>Sleduj nás</h4>
                    <a href="https://www.instagram.com/fairy.seals/" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="instagram" className="footer-instagram"/>
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p className='kredit'>Vytvořila Elizabeth Fogbard, vrámci semestrálního projektu</p>
                <p className='prava'>© 2026 Fairy Seals • Všechna práva vyhrazena</p>
                <p className='love'>Made with love &#128153; </p>
            </div>
        </footer>
    </div>
        </Router>
    )
}
export default App