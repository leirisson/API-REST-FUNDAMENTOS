import { NextFunction, Request, Response } from "express";


export async function middlewareGlobal(request:Request, response: Response, next: NextFunction){
    console.log('middlewareGlobal => ', new Date())

    return next()
}