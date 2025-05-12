import {Request, Response, NextFunction} from 'express'



export class UserController {
    index(request:Request, response:Response, next: NextFunction){
        try {
             response.send("cadastro de usuarios")
        } catch (error) {
            next()
        }
       
    }
}