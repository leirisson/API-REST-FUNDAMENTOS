import { Request, Response } from "express";


export class CourseController {

    hello(request: Request, response: Response){
        response.send('hello express via Controller')
    }
}