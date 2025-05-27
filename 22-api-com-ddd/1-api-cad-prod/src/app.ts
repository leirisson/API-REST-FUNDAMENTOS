import express from 'express'
import { execPath } from 'process'


export const app = express()

app.use(express.json())
