import { ApolloClient, createNetworkInterface } from 'apollo-client';

class ApolloHelper {
  constructor(uri) {
    const networkInterface = createNetworkInterface({ uri });
    this.client = new ApolloClient({ networkInterface });
  }

  getMutation(mutation, variables = {}) {
    return this.client.mutate({ mutation, variables }).then(result => result.data);
  }

  getQuery(query, variables = {}) {
    return this.client.query({ query, variables }).then(result => result.data);
  }
}

export default ApolloHelper;
