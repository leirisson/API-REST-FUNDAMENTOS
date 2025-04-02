import express from 'express'

const app = express()
const port = 3333

app.get('/', (request, response) => {
    response.send('Hellor express')
})

app.listen(port, () => console.log('server está funcionando 🎇🎆🎄🎄'))