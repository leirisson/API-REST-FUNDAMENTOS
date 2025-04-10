import { NextFunction, Request, Response } from "express";



export async function middlewareLocalDeRota(request: Request, response:Response, next:NextFunction){

    console.log('middle local da aplocação, esse middle vai ser valido para algumas rotas.')

    return next()

}