import 'dotenv/config'
import express from 'express'
import { app } from "./app"
import { routes } from './routes'
import { errorHanding } from './middlewares/error-handling'


app.use(express.json())
app.use(routes)

app.use(errorHanding)

app.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT} ✨ 👀`))



