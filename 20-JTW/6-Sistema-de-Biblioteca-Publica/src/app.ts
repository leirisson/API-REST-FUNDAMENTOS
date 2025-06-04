import express from 'express'
import { routes } from './routers'

export const app = express()

app.use(express.json())
app.use(routes)

