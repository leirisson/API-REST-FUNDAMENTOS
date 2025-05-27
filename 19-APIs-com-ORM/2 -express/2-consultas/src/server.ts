import 'dotenv/config'

import { app } from "./app"
import express  from 'express'
import { routes } from './routes'

app.use(express.json())
app.use(routes)



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server pronto 💥💥 => http://localhost:${PORT}`)
})