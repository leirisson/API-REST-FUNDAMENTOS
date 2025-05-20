import 'dotenv/config'
import { app } from "./app"
import express, { Request, Response } from 'express'
import { routes } from './routes'


app.use(express.json())
app.use(routes)

const PORT = process.env.PORT

app.get('/', (request: Request, response: Response) => {
    response.send(`
        <h1>
        api com JTW - authenticação
        </h1>
        `)
})

app.listen(PORT, () => console.log(`server is ruinging, in http://localhost:${PORT}`))