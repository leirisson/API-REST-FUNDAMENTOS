import express from 'express'
import { middlewareLog } from './middlewares/middlewareLog'
import { routes } from './routes'

const port = 3333

const app = express()

// middleware global
app.use(middlewareLog)
app.use(routes)

app.listen(port, () => console.log('server is run.... ✨ ✨ 👀'))