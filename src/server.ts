import express from 'express'



import { routes } from './routes'

const PORT = 3334

const app = express()
app.use(express.json())

app.use(routes)

app.listen(PORT, () => {
    console.log('Servidor está funcionando.')
})