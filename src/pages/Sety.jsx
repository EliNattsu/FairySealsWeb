import cerveny from '../assets/Images/cerveny.jpg'
import fialovy from '../assets/Images/fialovy.jpg'
import svetlemodry from '../assets/Images/svetelemodra.jpg'
import tmavemodry from '../assets/Images/tmavemodry.jpg'
import zeleny from '../assets/Images/zeleny.jpg'
import zluty from '../assets/Images/zluty.jpg'
import ruzovy from '../assets/Images/ruzovy.jpg'
import cerny from '../assets/Images/cerny.jpg'
import React from 'react';

const setyData = [
    {
        id: 1,
        barva: 'Červený',
        img: cerveny,
        bg: 'rgba(255, 100, 100, 0.2)',
        kun: ['Black drop noseband bridle', 'Sweet cream blanket', 'Ebony classic jumping saddle'],
        postava: ['Autumn leaves black beanie', 'Red cardigan', 'Autumn leaves black jeans', 'Black fingerless gloves', 'White riding boots']
    },
    {
        id: 2,
        barva: 'Fialový',
        img: fialovy,
        bg: 'rgba(200, 100, 255, 0.2)',
        kun: ['Black drop noseband bridle', 'Sweet cream blanket', 'Ebony classic jumping saddle'],
        postava: ['Autumn leaves black beanie', 'Purple cardigan', 'Autumn leaves black jeans', 'Black fingerless gloves', 'White riding boots']
    },
    {
        id: 3,
        barva: 'Růžový',
        img: ruzovy,
        bg: 'rgba(255, 150, 200, 0.2)',
        kun: ['Black drop noseband bridle', 'Sweet cream blanket', 'Ebony classic jumping saddle'],
        postava: ['Autumn leaves black beanie', 'Pink cardigan', 'Autumn leaves black jeans', 'Black fingerless gloves', 'White riding boots']
    },
    {
        id: 4,
        barva: 'Světle modrý',
        img: svetlemodry,
        bg: 'rgba(100, 200, 255, 0.2)',
        kun: ['Black drop noseband bridle', 'Sweet cream blanket', 'Ebony classic jumping saddle'],
        postava: ['Autumn leaves black beanie', 'Turquoise cardigan', 'Autumn leaves black jeans', 'Black fingerless gloves', 'White riding boots']
    },
    {
        id: 5,
        barva: 'Tmavě modrý',
        img: tmavemodry,
        bg: 'rgba(0, 63, 145, 0.2)',
        kun: ['Black drop noseband bridle', 'Sweet cream blanket', 'Ebony classic jumping saddle'],
        postava: ['Autumn leaves black beanie', 'Blue cardigan', 'Autumn leaves black jeans', 'Black fingerless gloves', 'White riding boots']
    },
    {
        id: 6,
        barva: 'Zelený',
        img: zeleny,
        bg: 'rgba(100, 255, 100, 0.2)',
        kun: ['Black drop noseband bridle', 'Sweet cream blanket', 'Ebony classic jumping saddle'],
        postava: ['Autumn leaves black beanie', 'Green cardigan', 'Autumn leaves black jeans', 'Black fingerless gloves', 'White riding boots']
    },
    {
        id: 7,
        barva: 'Žlutý',
        img: zluty,
        bg: 'rgba(255, 255, 100, 0.2)',
        kun: ['Black drop noseband bridle', 'Sweet cream blanket', 'Ebony classic jumping saddle'],
        postava: ['Autumn leaves black beanie', 'Yellow cardigan', 'Autumn leaves black jeans', 'Black fingerless gloves', 'White riding boots']
    },
    {
        id: 8,
        barva: 'Černý',
        img: cerny,
        bg: 'rgba(0,0,0,0.2)',
        kun: ['Black drop noseband bridle', 'Sweet cream blanket', 'Ebony classic jumping saddle'],
        postava: ['Autumn leaves black beanie', 'Black cardigan', 'Autumn leaves black jeans', 'Black fingerless gloves', 'White riding boots']
    },
    ];

const Sety = () => {
    return (
        <div className="sety-page">
            <h1 className="page-title-sety">Naše clubové sety</h1>

            {setyData.map((set) => (
                <section key={set.id} className="set-row" style={{ backgroundColor: set.bg }}>
                    <div className="set-container">
                        <div className="set-photo">
                            <img src={set.img} alt={`${set.barva} set`} />
                        </div>

                        <div className="set-info">
                            <div className="equipment-col">
                                <h3>Kůň</h3>
                                <ul>
                                    {set.kun.map((item, i) => <li key={i}>{item}</li>)}
                                    <li className="note">ozdoby jsou dobrovolné!</li>
                                </ul>
                            </div>

                            <div className="equipment-col">
                                <h3>Postava</h3>
                                <ul>
                                    {set.postava.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};
export default Sety;