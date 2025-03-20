import { Request, Response } from "express";


export class AdminController {
    getAll(request: Request, response: Response){
        response.send('Bem-vindo, administrador!');
    }
}