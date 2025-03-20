import express, { NextFunction, Request, Response } from 'express'
import { routes } from './routes'
import { ZodError } from 'zod'


const port = 3334
const app = express()


app.use(express.json())
app.use(routes)

//validadno error do zod
app.use((error: any, request: Request, response: Response, next: NextFunction) => {

    if (error instanceof ZodError) {
        response.status(400).json(
            {
                message: "Validation error",
                issues: error.format()
            })
    }
})

app.listen(port, () => console.log('server is ruing ... 🛩 🚀'))