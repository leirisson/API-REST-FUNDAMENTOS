import { NextFunction, Request, Response } from "express";


export function meuMiddleware(
    request: Request,
    response: Response,
    next: NextFunction
) {
    console.log('Passou pelo meu middleware global')

    return next()
}