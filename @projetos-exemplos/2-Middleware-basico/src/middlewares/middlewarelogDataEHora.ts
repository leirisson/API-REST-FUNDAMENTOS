import { NextFunction, Request, Response } from "express";


export function middlewarelogDataEHora(request: Request, response:Response , next: NextFunction){
    
    console.log('Passando pelo middleware básico que loga a hora da requisição:')
    console.log(`Requisição recebida em: ${new Date().toISOString()}`)

    return next()
}