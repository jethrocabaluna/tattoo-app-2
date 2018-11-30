const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLSchema } = require('graphql');
const GraphQLJSON = require('graphql-type-json');

const TattooType = new GraphQLObjectType({
    name: 'Tattoo',
    fields: () => ({
        name: { type: GraphQLString },
        image: { type: GraphQLJSON },
        description: { type: GraphQLString },
        author: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        tattoos: {
            type: new GraphQLList(TattooType),
            resolve(parent, args) {
                return axios.get('http://localhost:3000/api/tattoos/list')
                    .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
