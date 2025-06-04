import { Request, Response } from "express"


export class EmprestimoController {
    async create(request: Request, response: Response) {
        response.status(201).json({ message: "emprestimo realizado com sucesso." })
    }
}