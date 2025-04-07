import express from 'express'
import { routes } from './router'
import { middlewareGlobal } from './middlewares/middlewareGlobal'

const port = 3335
const app = express()

app.use(middlewareGlobal)
app.use(express.json())
app.use(routes)

app.listen(port, () => console.log('Servidor funcionando ... 🚁 ✈'))