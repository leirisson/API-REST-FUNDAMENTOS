import express from 'express'

const port = 3335

const app = express()

app.get('/clientes',  (request, response) => {
    response.send('lista de clientes')
})

app.listen(port, () => console.log('server is ruing... 🎊🛸'))