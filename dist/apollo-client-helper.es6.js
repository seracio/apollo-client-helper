import { ApolloClient, createNetworkInterface } from 'apollo-client';

var ApolloHelper = function ApolloHelper(uri) {
  var networkInterface = createNetworkInterface({ uri: uri });
  this.client = new ApolloClient({ networkInterface: networkInterface });
};

ApolloHelper.prototype.getMutation = function getMutation (mutation, variables) {
    if ( variables === void 0 ) variables = {};

  return this.client.mutate({ mutation: mutation, variables: variables }).then(function (result) { return result.data; });
};

ApolloHelper.prototype.getQuery = function getQuery (query, variables) {
    if ( variables === void 0 ) variables = {};

  return this.client.query({ query: query, variables: variables }).then(function (result) { return result.data; });
};

export default ApolloHelper;
