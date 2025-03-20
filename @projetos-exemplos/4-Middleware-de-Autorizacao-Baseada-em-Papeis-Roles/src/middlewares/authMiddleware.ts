import { NextFunction, Request, Response } from "express";



export function authMiddleware(request: Request, response: Response, next: NextFunction){
    const token = request.headers['chave-api']
    
    if(token === 'meu-token-secreto') {
        request.role = 'admin'
         next()
    } else {
        response.send('NÃO autorizado(a).')
    }
}