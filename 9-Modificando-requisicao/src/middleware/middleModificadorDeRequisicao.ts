import { NextFunction, Request, Response } from "express";


export function modificador(
    request: Request, 
    response: Response,
    next: NextFunction
){

    request.user_id = "1234"

    return next()
}