import express, { response } from 'express'
import { modificador } from './middleware/middleModificadorDeRequisicao'

const port = 3335

const app = express()
app.use(express.json())


app.post('/produtos', modificador, (request, response) => {
    const {name, price, user_id} = request.body

    response.status(200).json({"id": request.user_id})
})

app.listen(port, () => console.log('server está funcionando....'))