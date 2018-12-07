import React from 'react';

export default function ({tattoo}) {
  return (
    <div className="tattoo-modal">
      <h1 className="tattoo-modal__title">{tattoo.name}</h1>
      <img src={tattoo.image.filename} alt={tattoo.name} className="tattoo-modal__image"/>
      <p className="tattoo-modal__description">{tattoo.description}</p>
    </div>
  );
}