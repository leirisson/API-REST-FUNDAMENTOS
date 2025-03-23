import express, { Request, Response  } from 'express'
import { routes } from './routes'
import { ZodError } from 'zod'
import  cors from 'cors' // Importe o pacote cors



const port = 3333

const app = express()

// Configura o CORS para permitir requisições de http://127.0.0.1:5500
app.use(cors({
    origin: 'http://127.0.0.1:5500' // Permite apenas essa origem
}));


app.use(express.json())

// Configura as rotas
app.use(routes)

// Middleware de tratamento de erros
app.use((error: any, request: Request, response: Response) => {
   
    if(error instanceof ZodError){
        response.status(400).json({messagem: "validation Error", issues: error.format()})
    }
})

app.listen(port, () => {console.log('server funcionando ... 🎉✨')})