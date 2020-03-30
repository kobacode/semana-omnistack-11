const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

    // Antes de executar os testes, executar as migrations
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    // Desconectar
    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "CONCER",
            email: "apad@rsl.com.br",
            whatsapp: "12345678901",
            city: "Rio do Sul",
            uf: "SC"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

    });
});