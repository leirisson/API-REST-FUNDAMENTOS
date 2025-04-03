import { NextFunction, Request, Response } from "express";


export async function middleWareLocal(request: Request, response: Response, next: NextFunction){

    console.log('middleware local')
    return next()
}