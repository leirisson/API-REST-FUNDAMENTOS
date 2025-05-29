import {
    Request,
    Response,
    NextFunction
} from 'express'


export function ensureAuthenticate(request:Request, response:Response, next:NextFunction){

    const authHeader = request.headers.authorization

    if(!authHeader){
        response.json({erro: "mensagem não existe token de autenticação."})
    }


    const [,token] = authHeader?.split(' ')
    

    console.log(token)

    return next()
}