import React from 'react';

const allImages = Array.from({ length: 55 }, (_, i) => ({
    id: i + 1,
    src: `Images/g${i + 1}.png`,
    alt: `Galerie foto ${i + 1}`
}));

const chunkImages = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};
const rows = chunkImages(allImages, 5);

const Galerie = () => {
    return (
        <div className="galerie-page">
            <h1 className="page-title-galerie">To nejlepší z našich srazů</h1>
            <div className="galerie-grid">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="galerie-row">
                        <div className={`galerie-track ${rowIndex % 2 === 0 ? 'left' : 'right'}`}>

                            {row.map((img) => (
                                <div key={`a-${img.id}`} className="galerie-item">
                                    <img src={img.src} alt={img.alt} loading="lazy" />
                                </div>
                            ))}
                            {row.map((img) => (
                                <div key={`b-${img.id}`} className="galerie-item">
                                    <img src={img.src} alt={img.alt} loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Galerie;