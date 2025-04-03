import { NextFunction, Request, Response } from "express";


export async function middlewareLog(request: Request, response: Response, next: NextFunction) {
    console.log('middleware global - log: ', new Date())
    return next()
}