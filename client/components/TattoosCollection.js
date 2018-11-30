import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Tattoo from './Tattoo';

const LAUNCHES_QUERY = gql`
    query TattoosQuery {
        tattoos {
            name,
            image,
            description
        }
    }
`;

export default function ({tattoos}) {
    return (
        <div className="grid-container">
            <Query query={LAUNCHES_QUERY}>
                {
                    ({loading, error, data}) => {
                        if (loading) return <h1>Loading...</h1>;
                        if (error) console.log(error);

                        return (
                            data.tattoos.map((tattoo, i) => <Tattoo key={i} tattoo={tattoo} />)
                        );
                    }
                }
            </Query>
        </div>
    );
}