import React from 'react';
import Tattoo from './Tattoo';

export default function ({tattoos}) {
    return (
        <div className="grid-container">
            {
                tattoos.map((tattoo, i) => <Tattoo key={i} tattoo={tattoo} />)
            }
        </div>
    );
}