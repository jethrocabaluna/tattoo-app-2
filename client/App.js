import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Header from './components/Header';
import TattoosCollection from './components/TattoosCollection';

import './styles/app.scss'

const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql'
});

export default function App() {
    return (
        <React.Fragment>
            <Header title='Tattoo Espanya' />
            <ApolloProvider client={client}>
                <TattoosCollection />
            </ApolloProvider>
        </React.Fragment>
    );
};
