import { NextFunction, Request, Response } from "express";


export function authorizeMiddleware(role: string){
    
    return (request: Request, response: Response, next:NextFunction) => {
       
        if(request.role && request.role === role ) {
             next()
        } else {
          return  response.send('Acesso proibido, acesso apenas para administradores.');
        }
    }

}