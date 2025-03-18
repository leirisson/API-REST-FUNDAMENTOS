import express from 'express'
import { routes } from './routes'



const port = 3334
const app = express()

app.use(express.json())


// adcionando as rotas 
app.use(routes)


app.listen(port, () => console.log('Server is ruing 1 2 3 ... 🐱‍🏍 ✔'))