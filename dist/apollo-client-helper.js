'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ApolloClient = _interopDefault(require('apollo-client'));
var HttpLink = _interopDefault(require('apollo-link-http'));
var InMemoryCache = _interopDefault(require('apollo-cache-inmemory'));

class ApolloHelper {
    constructor(uri) {
        this.client = new ApolloClient({
            link: new HttpLink({ uri }),
            cache: new InMemoryCache()
        });
    }

    getMutation(mutation, variables = {}) {
        return this.client.mutate({ mutation, variables }).then(result => result.data);
    }

    getQuery(query, variables = {}) {
        return this.client.query({ query, variables }).then(result => result.data);
    }
}

module.exports = ApolloHelper;
