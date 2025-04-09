import express, { Request, Response } from 'express'
import { routes } from './routes'

const port = 3335
const app = express()
app.use(express.json())
app.use(routes)



app.listen(port, () => console.log('servidor esta funcionando .... 🪐 🌌'))