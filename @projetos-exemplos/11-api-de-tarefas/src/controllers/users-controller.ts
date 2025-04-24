import { Request, Response, NextFunction } from "express"


export class UserController {
    async index(request: Request, response: Response, next: NextFunction) {
        try {


            response.json({message: "ok"})
        } catch (error) {
            next(error)
        }
    }
}