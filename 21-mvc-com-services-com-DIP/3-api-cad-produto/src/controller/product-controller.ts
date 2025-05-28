// Controller (HTTP)

import { Request, Response } from 'express'
import { PrismaProductRepository } from '../repositories/PrismaProductRepository'
import { ProductService } from '../services/ProductService'


const repository = new PrismaProductRepository()
const service = new ProductService(repository)

export class ProductController {
    async create(request: Request, response: Response): Promise<any> {

        const { name, description, price } = request.body
        await service.create({ name, description, price })
        
        return response.status(201).json({ message: "Produto criado com sucesso!" })
    }

}