import { NextFunction, Request, Response } from "express";

async function middlewareLocal(request:Request, response: Response,  next: NextFunction){

    console.log("middleware local 🚠🚁")
    return next()
}