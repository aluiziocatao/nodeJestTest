const request = require("supertest")
const app = require('./server')

describe('Teste meu app server', () => {

    it('deve obter o statusCode da rota', async () => {
        const res = await request(app).get('/')

        expect(res.statusCode).toEqual(200)
    })

    it('deve testar o status', async () => {
        const res = await request(app).get('/')
        
        expect(res.status).toBe(300)
    })

    it('deve obter o conteúdo principal', async() => {
        const res = await request(app).get('/')

        expect(res.statusCode).toEqual(200)
    })

})