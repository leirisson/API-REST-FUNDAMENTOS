import { NextFunction, Request, Response } from "express";


export function myMiddleware2(
    request: Request, 
    response: Response, 
    next: NextFunction
){
    return console.log('Passando pelo middleware local')
}