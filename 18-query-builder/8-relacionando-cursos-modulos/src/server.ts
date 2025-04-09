import express, { Request, Response } from 'express'

const port = 3335

const app = express()

app.get('/cursos', (request: Request, response: Response) => {
    response.send("its ok !")
})

app.listen(port, () => console.log('servidor funcionando corretamente ... ✨'))