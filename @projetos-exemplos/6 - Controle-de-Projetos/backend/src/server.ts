import express from 'express'
import { initDB } from './database/database'
import { routes } from './routes'

const port = 3335

const app = express()

app.use(express.json())
app.use(routes)


initDB()
    .then(() => {
        app.listen(port, () => console.log('servidor funcionando ! 🙌  🐱‍👤'))
    })
