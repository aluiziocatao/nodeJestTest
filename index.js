const app = require('./server')

app.listen(3000, () => {
    console.log(`Servidor is running http://localhost:${3000}`)
})