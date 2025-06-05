import { Request, Response } from "express"




export class LivroController {
    async create(request: Request, response: Response) {
        response.status(201).json({messgae: "livro cadastrado com sucesso."})
    }

    async listAllBooks(request: Request, response: Response) {
        response.json({ message: "todos os livros" })
    }
}