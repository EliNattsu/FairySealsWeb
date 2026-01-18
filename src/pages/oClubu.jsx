import logo from '../assets/Images/logo.jpg'

function oClubu() {
    return(
        <section className="o-clubu">
            <h1 className="page-title">O Fairy Seals</h1>
            <div className="o-clubu-container">
                <div className="o-clubu-text">
                    <div className="info-box">
                    <p>Jsme československý Star Stable hang out club, který působí na
                        serveru EE3 a spojuje hráče, kteří mají rádi přátelskou atmosféru,
                        pohodu a společně strávený čas nejen ve hře, ale i mimo ni.
                        Náš klub je místem, kde si každý může odpočinout, užít si hraní
                        bez stresu a najít nové kamarády se stejnými zájmy.
                    </p>
                    <p>
                        Majitelkou klubu je Ady, ve hře známá jako Zoe Softhall,
                        která se stará o chod klubu a snaží se vytvářet příjemné a
                        bezpečné prostředí pro všechny členy. Zakládáme si na respektu,
                        komunikaci a přátelském přístupu, aby se u nás každý cítil vítaný.
                    </p>
                    <p>
                        Ačkoli je Star Stable naší hlavní hrou, nesoustředíme se
                        pouze na ni. Snažíme se společně hrát i další hry a trávit
                        čas různými aktivitami, ať už herními, nebo jen povídáním.
                        Na našem Discord serveru neustále připravujeme nové věci –
                        některé už jsou dostupné, na dalších se stále pracuje.
                        Najdete u nás novinky, zábavné kanály, prostor pro sdílení
                        i plánování společných akcí.
                    </p>
                    <p>
                        Naším klubovým koněm je Noriker, který symbolizuje sílu,
                        stabilitu a týmového ducha našeho klubu. Naším hlavním cílem
                        je především pohoda, zábava a dobrá parta lidí, kteří si chtějí
                        hry užívat společně.</p>
                    </div>
                </div>
                <div className="o-clubu-logo-box">
                    <img src={logo} alt="Fairy Seals Logo" />
                </div>
            </div>
        </section>
    )
}
export default oClubu;