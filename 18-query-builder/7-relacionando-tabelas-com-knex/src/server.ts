import express, { Request, Response } from 'express'

const app = express()
const port = 3335

app.get('/consulta', (request: Request, response: Response) => {
    
})

app.listen(port, () => console.log('servidor está funcionando ... 🛹 🏍'))