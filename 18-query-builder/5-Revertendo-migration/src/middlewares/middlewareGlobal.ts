import { NextFunction, Request, Response } from "express";


async function middlewareGlobal(request: Request, response: Response, next: NextFunction){
    console.log('middleware global, log: ', new Date())

    return next()
}