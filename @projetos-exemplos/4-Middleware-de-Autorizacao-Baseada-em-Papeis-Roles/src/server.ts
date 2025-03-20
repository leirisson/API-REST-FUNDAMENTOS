import express, { response } from 'express'
import { authMiddleware } from './middlewares/authMiddleware'
import { authorizeMiddleware } from './middlewares/authorizeMiddleware'
import { routes } from './routes'

const port = 3333

const app = express()

app.use(routes)

app.listen(port, () => console.log('Server esta no ar'))