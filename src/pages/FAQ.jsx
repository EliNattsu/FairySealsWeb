import React, { useState } from 'react';

const faqData = [
    {
        category: "O klubu",
        questions: [
            { q: "Na jakém serveru se klub nachází?", a: "Klub se nachází na serveru SSO-EU-EE-3 (Grape Mountain)." },
            { q: "Má klub nějaké konkrétní zaměření?", a: "Ne, klub nemá žádné specializované zaměření. Fungujeme jako hang out klub, zaměřený především na pohodu, komunitu a společně strávený čas." },
            { q: "Jaká je atmosféra klubu?", a: "Klub se snaží udržovat klidnou, přátelskou a respektující atmosféru. Nejsme drama klub a případné konflikty řešíme v klidu a s respektem." },
            { q: "Je klub vhodný i pro časově vytížené hráče (škola, práce)?", a: "Ano. Chápeme, že každý má jiné časové možnosti. Klub není zaměřený na povinnou denní aktivitu, důležitá je především komunikace a vzájemná domluva." },
            { q: "Je klub čistě CZ/SK?", a: "Ano, klub je primárně československý a komunikace probíhá v češtině a slovenštině." },
            { q: "Kolik mi musí být let, abych se mohl/a připojit do klubu?", a: "Minimální věk pro vstup do klubu je 15 let. Toto omezení vychází z podmínek používání Discordu a sociálních sítí." },
            { q: "Kdy klub nabírá nové členy?", a: "Nové členy nabíráme zpravidla jednou měsíčně." },
            { q: "Je možné klub opustit a případně se vrátit?", a: "Ano. Pokud se člen rozhodne klub opustit, není to problém. V případě pozdějšího zájmu o návrat je možné se znovu přihlásit při dalším náboru." }
        ]
    },
    {
        category: "Set & Klubový kůň",
        questions: [
            { q: "Má klub vlastní klubový set?", a: "Ano, klub má vlastní klubové sety. K dispozici je jich hned několik, aby si každý člen mohl vybrat podle svých preferencí nebo aktuální nálady." },
            { q: "Pokud má klub set, má i klubového koně?", a: "Ano, klubovým koněm je Noriker v libovolné barevné variantě." },
            { q: "Do kdy si musím pořídit klubový set?", a: "Klubový set je potřeba pořídit do dvou týdnů od vstupu do klubu." }
        ]
    },
    {
        category: "Srazy",
        questions: [
            { q: "Kdy se konají klubové srazy?", a: "Srazy se obvykle konají 1–2× týdně. Termín je vždy s předstihem oznámen na Discordu." },
            { q: "Jak často se musím účastnit srazů, abych nebyl/a považován/a za neaktivního/ní?", a: "Ideální je účast alespoň jednou za 14 dní. Zároveň chápeme, že ne vždy je možné se srazů zúčastnit, a případná absence je v rozumné míře tolerována." },
            { q: "Co se na srazech obvykle dělá?", a: "Na srazech probíhají různé aktivity, například Runner and Hunters, schovávaná nebo jiné společné hry a aktivity dle aktuální domluvy." }
        ]
    },
    {
        category: "Discord",
        questions: [
            { q: "Musím být aktivní na Discordu?", a: "Discord slouží jako hlavní komunikační kanál klubu. Aktivita v chatech není povinná, ale doporučujeme alespoň sledovat oznámení a důležité informace." },
            { q: "Je možné v klubu hrát i jiné hry než Star Stable?", a: "Ano. Na Discordu se domlouváme i na hraní dalších her. Pro tyto účely máme (nebo připravujeme) samostatné kanály a reaction role." },
            { q: "Má klub omluvný systém pro případ neaktivity (např. dovolená)?", a: "Ano. Pokud jsi členem klubu a máš přístup na náš Discord, stačí napsat do kanálu Omluvenky termín od–do a důvod absence." },
            { q: "Existují v klubu pravidla chování?", a: "Ano, klub má základní pravidla chování, která jsou dostupná na Discordu. Zakládáme si na slušné komunikaci, respektu a přátelském prostředí." },
            { q: "Jsou v klubu nějaké role nebo hodnosti?", a: "Ano, klub má základní role (např. vedení, členové). Role slouží především k organizaci, nikoli k vytváření hierarchie mezi členy." },
            { q: "Kde mohu kontaktovat vedení klubu?", a: "Vedení klubu je možné kontaktovat přímo prostřednictvím Discordu." }
        ]
    }
];

const FAQ = () => {
    const [activeId, setActiveId] = useState(null);

    const toggleAccordion = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <div className="faq-page">
            <h1 className="page-title-faq">Nejčastěji kladené dotazy</h1>

            <div className="faq-container">
                {faqData.map((section, sIdx) => (
                    <div key={sIdx} className="faq-section">
                        <h2 className="section-title">{section.category}</h2>

                        {section.questions.map((item, qIdx) => {
                            const id = `${sIdx}-${qIdx}`;
                            return (
                                <div key={id} className={`faq-item ${activeId === id ? 'active' : ''}`}>
                                    <button className="faq-question" onClick={() => toggleAccordion(id)}>
                                        {item.q}
                                        <span className="arrow">▼</span>
                                    </button>
                                    <div className="faq-answer">
                                        <p>{item.a}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;