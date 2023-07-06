require('dotenv').config();

test('Need to check if the env vars are configured', () => {
    expect(process.env.PORT).not.toBe(undefined);
    expect(process.env.DB_URI).not.toBe(undefined);
});