import { NextFunction, Request, Response } from "express";


export function meuMiddleLocal(request: Request, response: Response, next: NextFunction){
    console.log('passou pelo middle Local...')

    return next()
    
}