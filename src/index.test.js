import 'isomorphic-fetch';
import Helper from './index';

describe('Helper', () => {
    it('should be defined', () => {
        expect(Helper).toBeDefined();
    });
});

describe('helper instance', () => {
    it('should not throw an exception when instanciated', () => {
        expect(() => {
            helper = new Helper('https://data.serac.io/ligue1');
        }).not.toThrowError();
    });
});
