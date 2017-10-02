import 'isomorphic-fetch';
import gql from 'graphql-tag';
import Helper from './index';

describe('Helper', () => {
    it('should be defined', () => {
        expect(Helper).toBeDefined();
    });
});

describe('helper instance', () => {
    it('should not throw an exception when instanciated', () => {
        expect(() => {
            const helper = new Helper('https://data.serac.io/ligue1');
        }).not.toThrowError();
    });

    it('should not throw an exception when a query is managed', end => {
        expect(() => {
            const helper = new Helper('https://data.serac.io/ligue1');
            helper
                .getQuery(
                    gql`
                        query {
                            seasons
                        }
                    `
                )
                .then(end);
        }).not.toThrowError();
    });
});
