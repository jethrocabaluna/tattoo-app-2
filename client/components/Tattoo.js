import React from 'react';

import '../styles/components/tattoo.scss';

export default function ({tattoo, openModal}) {
    return (
        <button className="tattoo" onClick={() => openModal(tattoo)}>
            <h1 className="tattoo__name">{tattoo.name}</h1>
            <img className="tattoo__image" src={tattoo.image.filename} alt={tattoo.name}/>
            <p className="tattoo__description">{tattoo.description}</p>
        </button>
    );
}