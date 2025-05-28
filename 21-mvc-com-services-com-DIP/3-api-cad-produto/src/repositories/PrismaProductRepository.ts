import { PrismaClient } from "../../generated/prisma"
import { IProductRepository } from './IProductRepository'
import { IProductDTO } from './IProductDTO'


const prisma = new PrismaClient()

export class PrismaProductRepository implements IProductRepository {

    async create(data: IProductDTO): Promise<any> {
        return await prisma.product.create({ data })
    }

    async findAll(): Promise<IProductDTO[]> {
        return prisma.product.findMany()
    }

    async findById(id: string): Promise<IProductDTO | null> {
        return prisma.product.findUnique({ where: { id } })
    }

    async update(id: string, data: IProductDTO): Promise<any> {
        return await prisma.product.update({ where: { id }, data })
    }

    async delete(id: string): Promise<any> {
        return await prisma.product.delete({ where: { id } })
    }
}