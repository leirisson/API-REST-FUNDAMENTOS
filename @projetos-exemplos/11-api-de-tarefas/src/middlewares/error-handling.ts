import { AppError } from "@/utils/AppError"
import { ZodError } from "zod"
import { NextFunction, Request, Response } from "express"

export function errorHanding(error: any, request: Request, response: Response, _: NextFunction) {
    if (error instanceof AppError) {
        return response
        .status(error.statusCode)
        .json({message: error.message})
    }

    if(error instanceof ZodError){
        return response
        .status(400)
        .json({message: "validation error", issues: error.format()})
    }

    return response
    .status(500)
    .json({message: error.message})
}

