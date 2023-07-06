const request = require('supertest')
const app = require('../src/app.js')

test('Root need to have response with status equal to 200', () => {
    return request(app).get('/')
        .then((res) => {
            expect(res.status).toBe(200);
        });
});