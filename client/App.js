import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import TattoosCollection from './components/TattoosCollection';

import './styles/app.scss'

export default function App() {
    const [tattoos, setTattoos] = useState({});

    useEffect(() => {
        fetch('/api/tattoos/list')
            .then(res => res.json())
            .then(tattoos => setTattoos(tattoos));
    }, []);

    function renderTattoos() {
        if (tattoos.length) {
            return (
                <TattoosCollection tattoos={ tattoos } />
            );
        } else {
            return (
                <h2>Loading...</h2>
            );
        }
    }

    return (
        <React.Fragment>
            <Header title='Tattoo Espanya' />
            { renderTattoos() }
        </React.Fragment>
    );
};
