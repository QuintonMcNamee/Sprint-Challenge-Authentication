const Users = require('./jokes-model.js');

const db = require('../database/dbConfig.js');

describe('jokes model', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('add()', () => {
        it('should add user to the database', async () => {
            const records = await db('users');
            expect(records).toHaveLength(0);
            await Users.add({ username: 'quinton', password: 'password' });
            const users = await db('users');
            expect(users).toHaveLength(1);
        });
    });

    it('should add the provided user to the database', async () => {
        let username = await Users.add({ username: "brittany", password: 'password' });
        expect(username.username).toBe('brittany');
        expect(username.password).toBe('password');

        username = await Users.add({ username: "connor", password: 'password2' });
        expect(username.username).toBe('connor');
        expect(username.password).toBe('password2');

        const users = await db('users');
        expect(users).toHaveLength(2);
    });
});