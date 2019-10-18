const request = require('supertest');

const server = require('./server');

describe('GET /', () => {
    it('should return an http status code of 200', () => {
        return request(server)
            .get('/')
            .then(response => {
                expect(response.status).toBe(200);
            });
    });

    test('should return JSON', async () => {
        const response = await request(server).get('/');
        expect(response.type).toMatch('json');
    });
});