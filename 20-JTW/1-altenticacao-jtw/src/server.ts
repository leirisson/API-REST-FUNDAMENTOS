import 'dotenv/config'
import { app } from "./app"
import express, { NextFunction, Request, response, Response } from 'express'
import { routes } from './routes'
import { AppError } from './utils/AppError'

const PORT = process.env.PORT
app.use(express.json())


app.use(routes)


app.get('/', (request: Request, response: Response) => {
    response.send(`
        <h1>
        api com JTW - authenticação
        </h1>
        `)
})

/**
 * Tipos de erro
 * Erro do cliente = status -> 400
 * erro interno status code -> 500
 * 
 */

app.use((error: any, request: Request, response: Response, _: NextFunction) => {

    if (error instanceof AppError) {
        response.status(error.statusCode).json({ message: error.message })
    }

    response.status(500).json({ message: error })
})

app.listen(PORT, () => console.log(`server is ruinging, in http://localhost:${PORT}`))