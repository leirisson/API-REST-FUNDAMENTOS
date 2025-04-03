import express from 'express'
import { routes } from './routes'
import { middlewareLog } from './middlewares/middlewareLog'

const app = express()
const port = 3335

app.use(middlewareLog)
app.use(express.json())
app.use(routes)

app.listen(port, () => { console.log('server is ruing ... 🎆🎇') })