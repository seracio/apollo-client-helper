'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ApolloClient = _interopDefault(require('apollo-client'));
var HttpLink = _interopDefault(require('apollo-link-http'));
var InMemoryCache = _interopDefault(require('apollo-cache-inmemory'));

var ApolloHelper = function ApolloHelper(uri) {
    this.client = new ApolloClient({
        link: new HttpLink({ uri: uri }),
        cache: InMemoryCache()
    });
};

ApolloHelper.prototype.getMutation = function getMutation (mutation, variables) {
        if ( variables === void 0 ) variables = {};

    return this.client
        .mutate({ mutation: mutation, variables: variables })
        .then(function (result) { return result.data; });
};

ApolloHelper.prototype.getQuery = function getQuery (query, variables) {
        if ( variables === void 0 ) variables = {};

    return this.client
        .query({ query: query, variables: variables })
        .then(function (result) { return result.data; });
};

module.exports = ApolloHelper;
