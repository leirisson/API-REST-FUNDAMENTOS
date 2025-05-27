import 'dotenv/config'
import { app } from "./app";
import express from 'express'
import { routes } from './routes';


app.use(express.json())
app.use(routes)


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`funcionando http://localhost:${PORT}`)
})