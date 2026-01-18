import {Link} from "react-router-dom";
import instagram2 from "../assets/Icons/instagram2.svg";
import oNas from "../assets/Images/aboutfoto.png";
import Zoe from "../assets/Images/ady.png";
import gal1 from "../assets/Images/gal1.png";
import gal2 from "../assets/Images/gal2.png";
import gal3 from "../assets/Images/gal3.png";
import gal4 from "../assets/Images/gal4.png";
import gal5 from "../assets/Images/gal5.png";
import gal6 from "../assets/Images/gal6.png";
import gal7 from "../assets/Images/gal7.png";
import gal8 from "../assets/Images/gal8.png";

function Home() {
    const reviews = [
        {
            id: 1,
            name: "Zoe S. - Ownerka",
            text: "Zdravím! Jakožto owner fairy seals musím říct, že jsem velmi spokojená " +
                "jak se členy tak i aktivitou, za kterou jsem nesmírně vděčná. Musím říct, " +
                "že jsem vůbec nečekala něco takového když jsem tento klub zakládala kvůli " +
                "demotivaci z vedení minulého klubu a i přes to jsem do toho šla, teď si " +
                "nemůžu absolutně stěžovat. Pod svým vedením mám strašně hodné s fajn slečny, " +
                "na které se vždy mohu spolehnout, takže pokud se ti tu zalíbilo, neváhej " +
                "vyplnit přihlášku!"
        },
        {
            id: 2,
            name: "Tia L.",
            text: "V klubiku jsem velmi spokojena myslela jsem si ze tu vubec nezapadnu " +
                "jak jsem introvert ale naopak zapadla jsem podle me dobre. Jsem rada ze " +
                "jsem nasla tento " +
                "klub protoze je tu dost fajn lidi a kdyz je nejaky problem tak pomuzou."
        },
        {
            id: 3,
            name: "Victoria C.",
            text: "Jsem člověk, který vystřídal už xy klubů, ať už s různým zaměřením nebo " +
                "úplně bez něj. Upřímně ale můžu říct, že tady se cítím jako mezi svými. " +
                "Je fajn mít v uvozovkách ‚holčičí zázemí‘, kde nejen hrajeme SSO, ale i " +
                "spoustu dalších her, díky kterým vznikají další společné zážitky." +
                "Je to klub plný ochotných lidí, kteří jsou rádi, když ti můžou pomoct, " +
                "podpořit tě a společně s tebou třeba oslavit i nějaký tvůj úspěch. " +
                "Nemyslím si, že by se u nás člověk nudil, takže pokud ti v životě chybí " +
                "holčičí kolektiv a cítíš, že bys s námi mohla matchnout, tak let’s go."
        },
        {
            id: 4,
            name: "Doreen G.",
            text: "Klub je super, miluju ho a miluju lidi v nem. " +
                "Jsme skvela parta a vzdycky se zasmejem jak na srazech tak i v " +
                "ostatnich hrach. Po srazu nebo jakehokoliv hrani her mam dobrou naladu "
        },
        {
            id: 5,
            name: "Michelle Y.",
            text: "klubík je hrozně super a neříkám to jen proto, že znám pár holek z " +
                "minulého klubu. Tenhle klubík je super už jen z toho důvodu, že nemá " +
                "zaměření a je to takové \"náhodné\" co se bude dít. :D A že ownerka " +
                "hodně toleruje,nebo spíš chápe, když se člověk nemůže účastnit " +
                "nějakých věcí. A ohledně ostatních v klubu si myslím, že je to fajn. " +
                "Zatím je to jak kdyby ta fáze seznamování s novýma členkama, z mého" +
                "pohledu. Ale je to celkově fajn a nemůžu si na nic stěžovat <3 "
        }
    ];

    const images = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8];

    return (
        <div className="home">
            <section className="welcome">
                <div className="welcome-content">
                    <p className="welcome-sub">Vítejte na oficiální stránce</p>
                    <h1 className="welcome-main">Star Stable Online Clubu</h1>
                    <h2 className="club-title">FAIRY SEALS</h2>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWHOhHePHAYisG0d9Vhou0dTSfHqQKOiuKfTSZ8DL1IzlgLQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnh1BPWnaPmxayosGyg5jnvHYxLFP9MI7Ha1_LvuULfj3rb2w_yV_Xg7OwrVc_aem_ksnuq_P47vGwDPjJZ8INTg"
                        className="nav-btn-main"
                        target="_blank"
                        rel="noopener noreferrer">
                        Přidej se!
                    </a>
                </div>
            </section>

            <section className="about">
                <h2 className="who">Kdo jsme?</h2>

                <div className="about-container">
                    <div className="about-text">
                        <p>Jsme Československý Star Stable hang out club, který sídlí na serveru
                            EE3. Naše majitelka se jmenuje Ady, na Star Stable Zoe Softhall.
                            Náš clubový kůň je Noriker.</p>

                        <Link to="/oClubu" className="about-link">
                            Přečti si o nás víc zde!
                        </Link>
                    </div>

                    <div className="about-image">
                        <img src={oNas} alt="Fairy Seals tým" />
                    </div>
                </div>
            </section>

            <section className="leadership">
                <h2>Leadership</h2>
                <div className="leadership-container">
                    <div className="leadership-card">
                        <div className="card-photo">Foto (Již brzy)</div>
                        <div className="card-info">
                            <p>Již brzy</p>
                        </div>
                    </div>

                    <div className="leadership-card featured">
                        <div className="card-photo">
                            <img src={Zoe} alt="Zoe Softhall" />
                        </div>
                        <div className="card-info">
                            <a href="https://www.instagram.com/zoe.softhall/"
                               target="_blank" rel="noopener noreferrer">
                                Zoe Softhall <img src={instagram2} alt="IG" />
                            </a>
                        </div>
                    </div>

                    <div className="leadership-card">
                        <div className="card-photo">Foto (Již brzy)</div>
                        <div className="card-info">
                            <p>Již brzy</p>
                        </div>
                    </div>
                </div>

                <div className="leadership-footer">
                    <Link to="/cleni" className="about-link">Naše další členky.</Link>
                </div>
            </section>

            <section id="reviews">
                <div className="review-container">
                <h2> Co o nás píšou naše členky? </h2>
                    <div className="marquee-window desktop-reviews">
                        <div className="marquee-track">
                            {/* První sada */}
                            {reviews.map((review, index) => (
                                <div key={`a-${index}`} className="review-card">
                                    <div className="review-box">
                                        <div className="review-header">
                                            <span className="reviewer">{review.name}</span>
                                        </div>
                                        <p className="review-text">{review.text}</p>
                                    </div>
                                </div>
                            ))}
                            {/* Druhá sada (Identická kopie pro plynulý loop) */}
                            {reviews.map((review, index) => (
                                <div key={`b-${index}`} className="review-card">
                                    <div className="review-box">
                                        <div className="review-header">
                                            <span className="reviewer">{review.name}</span>
                                        </div>
                                        <p className="review-text">{review.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mobile-single-review">
                        <div className="review-box">
                            <span className="reviewer">{reviews[0].name}</span>
                            <p className="review-text">{reviews[0].text}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mini-galery">
                <h2>Mini Galerie</h2>
                <div className="galery-viewport">
                    <div className="galery-track">
                        {images.map((img, i) => (
                            <div className="gal-card" key={`a-${i}`}><img src={img} alt="gal" /></div>
                        ))}

                        {images.map((img, i) => (
                            <div className="gal-card" key={`b-${i}`}><img src={img} alt="gal" /></div>
                        ))}
                    </div>
                </div>
                <div className="galery-footer">
                    <Link to="/galerie" className="about-link">Celá galerie</Link>
                </div>
            </section>
        </div>
    );
}
export default Home;