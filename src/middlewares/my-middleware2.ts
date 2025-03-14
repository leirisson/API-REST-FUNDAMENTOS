import { NextFunction, Request, Response } from "express";


export function myMiddleware2(
    request: Request, 
    response: Response, 
    next: NextFunction
){
    request.user_id = '123456'
    console.log('Passando pelo middleware local')

    return next()
}