import { NextFunction, Request, Response } from "express";


export async function middlewareLocal(request: Request, response: Response, next: NextFunction){
    console.log('middlewareLocal => data: ', new Date())

    return next()
}