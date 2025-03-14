import { Request, Response, NextFunction} from 'express'

export function MyMiddleware(request: Request, response: Response, next: NextFunction){
    console.log('passou pelo middlware')

    return next()
}