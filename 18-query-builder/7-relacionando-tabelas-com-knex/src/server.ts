import express, { Request, Response } from 'express'
import { routes } from './routes'
import { middlewareGlobal } from './middleware/middlewareGlobal'

const app = express()
const port = 3335
app.use(express.json())
app.use(middlewareGlobal)
app.use(routes)


app.listen(port, () => console.log('servidor está funcionando ... 🛹 🏍'))