import express from 'express'

const PORT = 3334

const app = express()

app.listen(PORT, () => {
    console.log('Servidor está funcionando.')
})