import { NextFunction, Response, Request } from "express";



export function authMiddleware(request: Request, response: Response, next: NextFunction){
    const token_auth = request.headers['teste']

    const hash = "asdfghjk"


    if(token_auth === hash){
        console.log('autorizado !')
        return next()
    } else {
        console.log('Acesso negado.')
        response.json({mensagem: 'acesso negado.'})
    }


}