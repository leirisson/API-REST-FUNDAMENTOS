import {Request,Response, NextFunction} from 'express'

export class QuestionsController {
    index(request:Request, response:Response, next: NextFunction){
        try {
            response.json({mensagem: "questionarios"})
        } catch (error) {
            next()
        }
    }
}