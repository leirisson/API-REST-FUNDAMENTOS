import { NextFunction, Request, Response } from "express";



export function middlewareLog(request: Request, response: Response, next: NextFunction){

    console.log(`Data de solicitação: ${new Date()}`)
    return next()
}