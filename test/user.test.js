const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/app');
const startDb = require('./utils/db-handler');

//mocks and vars used in tests
const mockUsers = [
    { name: 'Walter Mitty', mail: 'walter@mail.com'},
    { name: 'John Doe', mail: 'john@mail.com'}
];
let userId = '';


beforeAll(async () => {
    await startDb();
});
  
afterAll(async () => {
    await mongoose.disconnect();
});

test('should return an empty list when list all the users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(0);
});

test('should add a user', async () => {
    const response = await request(app).post('/users').send(mockUsers[0]);
    expect(response.status).toBe(201);
    expect(response.body.name).toBe(mockUsers[0].name);
    
});

test('should return list with one user when list users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0]).toHaveProperty('name', mockUsers[0].name);
    userId = response.body[0]._id;
});

test('should get the created user', async () => {
    const response = await request(app).get(`/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name', mockUsers[0].name);
});

test('should update the created user', async () => {
    const response = await request(app).put(`/users/${userId}`).send(mockUsers[1]);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name', mockUsers[1].name);
});

test('should delete the created user', async () => {
    const response = await request(app).delete(`/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name', mockUsers[1].name);
});
