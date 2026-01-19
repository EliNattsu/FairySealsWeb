import React from 'react';
import instagram from '../assets/Icons/instagram2.svg'
import Ady from '../assets/Images/ady.png'
import Anet from '../assets/Images/Anet.png'
import Daja from '../assets/Images/Daja.png'
import Eli from '../assets/Images/eli.png'
import Nina from '../assets/Images/Mei.png'
import Miska from '../assets/Images/Miska.png'
import Niki from '../assets/Images/Niky.png'

const clenkyData = [
    {
        id: 1,
        jmeno: "Zoe Softhall - Ady",
        ig: "https://www.instagram.com/zoe.softhall/",
        bio: "Něco o mně? Řekla bych, že mým hlavním koníčkem je hraní her. Kromě toho mám ale i další záliby, například sbírání Pokémon kartiček nebo sledování seriálů, které beru spíš jako formu relaxu.\n" +
            "Mám ráda děti a zajímám se o dětskou psychologii, i když obecně mám ráda psychologii jako takovou. To je asi vše. <3\n",
        img: Ady,
        bg: "#d1e4ff"
    },
    {
        id: 2,
        jmeno: "Victoria Castelclaw - Anet",
        ig: "...",
        bio: "Hello, jmenuji se Anet, je mi 19 let a vedu poměrně klidný, možná až trochu nudný život 🧘‍♀️. Mám ráda jednoduchost, pohodu a svůj vlastní klid. Miluji růžovou barvu, svoji kočku, a především pořádek a klid doma, kde se cítím nejlépe.\n" +
            "Volný čas nejčastěji trávím s knížkami v ruce nebo hraním LoLka, někdy i se slzami v očích, ale i to k tomu tak nějak patří.\n",
        img: Anet,
        bg: "#bfefff"
    },
    {
        id: 3,
        jmeno: "Mei Pinkrain - Nina",
        ig: "https://www.instagram.com/meipinkrain/",
        bio: "Ani nevím, čím bych začala 😄 Hodně mě baví práce se zvířaty, ke kterým mám opravdu blízký vztah. Zároveň se ráda učím tetovat a trávím čas kreslením a malováním, kde můžu být kreativní a trochu vypnout od všeho ostatního.\n" +
            "Ve volném čase také ráda hraji hry, točím videa a vaření beru jako příjemnou činnost, u které si dokážu odpočinout a mít radost z výsledku <3. Jinak o mně asi není nic extra výjimečného, ale myslím, že právě tyhle maličkosti mě vystihují nejvíc.\n",
        img: Nina,
        bg: "#d1e4ff"
    },
    {
        id: 4,
        jmeno: "Doreen Ghostchild - Dája",
        ig: "https://www.instagram.com/doreen.ghostchild/",
        bio: "Jmenuji se Dája. Baví mě hrát různé hry a svůj volný čas ráda trávím se svým psem. Velkou radost mi také dělá hraní her společně s členy klubu, protože je to skvělá příležitost k zábavě i poznávání nových lidí.\n" +
            "Mám slabost pro zvířata, obzvlášť pro hyeny, a vždy ráda pomáhám nebo se zapojuji do aktivit, které dávají smysl. Jsem přátelská a snažím se být aktivní, kde je to potřeba.\n",
        img: Daja,
        bg: "#bfefff"
    },
    {
        id: 5,
        jmeno: "Michelle Yellowhurricane - Miška",
        ig: "https://www.instagram.com/michelle_yellowhurricane/",
        bio: "Něco málo o mně? Mezi moje oblíbené aktivity a koníčky patří hraní her 😄. Spíš mám ráda chillové hry, jako je SSO nebo TFT, i když někdy si zahraji i LoLka, což už úplně tak chill není.\n" +
            "Hrozně mě baví také experimentovat s makeupem, protože při tom člověk vždycky vypne a nemusí přemýšlet nad ničím jiným 😄. Někdy si k tomu pustím i true crime podcasty, což se dá taky považovat za můj malý „koníček“ – ráda poslouchám tyhle typy pořadů.\n",
        img: Miska,
        bg: "#d1e4ff"
    },
    {
        id: 6,
        jmeno: "Tia Lighthurricane - Niky",
        ig: "https://www.instagram.com/_tia.lighthurricane_/",
        bio: "Momentálně už žádné koníčky nemám, ale jezdila jsem na koni 14 let, což pro mě byla dlouhá a důležitá zkušenost. Původně jsem také chtěla začít s motokrosem, ale nějak to nakonec nevyšlo, takže momentálně žádný aktivní koníček nemám.\n" +
            "Ve volném čase mě baví kreslení, a když mám čas, často trávím celý den hraním her se svým přítelem, což je pro mě skvělý způsob odpočinku a zábavy.\n",
        img: Niki,
        bg: "#bfefff"
    },
    {
        id: 7,
        jmeno: "Elizabeth Fogbard - Eli",
        ig: "https://www.instagram.com/eliz_fogbard/",
        bio: "Zdravím, jsem Eli. Momentálně jsem docela zaneprázdněná studentka vysoké školy, ale když se najde volná chvíle, ráda si zahraji hry, zacvičím si, jdu na procházku nebo si přečtu nějakou knížku.\n" +
            "Poslouchám hudbu skoro pořád – doma u počítače, v autě nebo při cestě autobusem do školy. Miluji kočky a jsem do nich úplný blázen, stejně jako do Formule 1, což jsou dvě věci, bez kterých si svůj život nedokážu představit.\n",
        img: Eli,
        bg: "#d1e4ff"
    }
];

const Cleni = () => {
    return (
        <div className="cleni-page">
            <h1 className="page-title-cleni">Naše členky</h1>

            {clenkyData.map((clen, index) => (
                <section key={clen.id} className="member-row" style={{ backgroundColor: clen.bg }}>
                    <div className={`member-container ${index % 2 !== 0 ? 'reverse' : ''}`}>

                        <div className="member-photo-box">
                            <div className="member-photo">
                                <img src={clen.img} alt={clen.jmeno} />
                            </div>
                            <a href={clen.ig} target="_blank" rel="noopener noreferrer" className="member-ig">
                                <span>{clen.jmeno}</span>
                                <img src={instagram} alt="IG" />
                            </a>
                        </div>

                        <div className="member-bio">
                            <p>{clen.bio}</p>
                        </div>

                    </div>
                </section>
            ))}
        </div>
    );
};

export default Cleni;