import express from 'express'
import axios from 'axios'

const  API_URL = "http://localhost:11434/api/generate "
const port = 3339

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    response.send('hello express !')
})

app.post('/ia', async (request, response)=> {
    const {text} = request.body
    const resposta  = await axios.post(API_URL, {
        "model" : "llama2:7b",
        "prompt": text,
        "stream":false
        },
        {proxy: false})

    console.log(resposta.data.response.toString())
    response.json(resposta.data.response.toString())
})


app.listen(port, () => {
    console.log("server is runing ... ✨✨✨✨")
})