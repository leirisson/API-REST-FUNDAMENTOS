import { PrismaClient } from "../generated/prisma"
import { IUserRepository } from "./IUserRepository"
import { IUser } from "./IUser"

const prisma = new PrismaClient()

export class PrismaUserRepository implements IUserRepository {
    async create(data: IUser): Promise<void> {
        await prisma.user.create({ data }
        )
    }

    async findUnique(email: string): Promise<IUser | null> {
        return await prisma.user.findUnique({
            where: {
                email
            }
        })
    }
}