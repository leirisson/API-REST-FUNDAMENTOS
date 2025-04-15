import { AppError } from "@/utils/AppError";
import { Request, Response, NextFunction } from 'express'


export function errorHandling(error: any, request: Request, response: Response, _: NextFunction) {

    if (error instanceof AppError) {
        return response.status(error.statusCode).json({ message: error.message })
    }

    return response.status(error.statusCode).json({ message: error.message })
}

