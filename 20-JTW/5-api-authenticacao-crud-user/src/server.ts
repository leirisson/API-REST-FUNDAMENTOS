import 'dotenv/config'
import { app } from './app'
import { Request, Response } from 'express'

const PORT = process.env.PORT

app.get('/', (request, response) => {
    response.send(`
        <div style="padding:2rem; margin:auto;">
            <h1 style="background-color:blue; padding:1rem; color:white;">
                API COM AUTHENTICAÇÃO, JWT.
            </h1>
        </div>
        `)
})
app.listen(PORT, () => {console.log(`servidor está funcionando => 🚀✨ http://localhost:${PORT}`)})