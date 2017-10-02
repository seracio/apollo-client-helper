import ApolloClient from 'apollo-client';
import HttpLink from 'apollo-link-http';
import InMemoryCache from 'apollo-cache-inmemory';

class ApolloHelper {
    constructor(uri) {
        this.client = new ApolloClient({
            link: new HttpLink({ uri }),
            cache: InMemoryCache()
        });
    }

    getMutation(mutation, variables = {}) {
        return this.client
            .mutate({ mutation, variables })
            .then(result => result.data);
    }

    getQuery(query, variables = {}) {
        return this.client
            .query({ query, variables })
            .then(result => result.data);
    }
}

export default ApolloHelper;
