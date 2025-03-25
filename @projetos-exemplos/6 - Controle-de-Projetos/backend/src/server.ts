import express from 'express'
import { initDB } from './database/database'
import { routes } from './routes'
import cors from 'cors'

const port = 3333

const app = express()

app.use(cors({
    origin: 'http://127.0.0.1:5500' // Permite apenas essa origem
}));

app.use(express.json())
app.use(routes)


initDB()
    .then(() => {
        app.listen(port, () => console.log('servidor funcionando ! 🙌  🐱‍👤'))
    })
