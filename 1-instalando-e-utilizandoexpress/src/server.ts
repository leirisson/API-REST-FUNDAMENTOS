

import express from 'express'


const PORT = 3335

const app = express()

app.get('/index', (request, response) => {
    response.send('hello express !')
})

app.listen(PORT, () => {
    console.log('server is ruing')
})