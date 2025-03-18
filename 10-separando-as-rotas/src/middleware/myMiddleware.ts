import { NextFunction, Request, Response } from "express";


export function myMiddleware(request: Request, response: Response, next: NextFunction){
    console.log('Passou pelo middleware local')

    return next()
}