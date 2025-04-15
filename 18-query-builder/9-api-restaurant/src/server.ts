import express from 'express'
import 'dotenv/config'
import { routes } from './routes'
import { errorHandling } from './middlewares/error-handling'

const app = express()

const port = process.env.PORT

app.use(express.json())
app.use(routes)


app.use(errorHandling)

app.listen(
    port,
    () => console.log(`server is running ... ON PORT ${port} ✨✨✨`)
)