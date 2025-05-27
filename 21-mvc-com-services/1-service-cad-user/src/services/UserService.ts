import { CreateUserDTO } from "../types/createUser";
import { prisma } from '../database/prisma'
import { IdUSer } from "../types/IdUSer";

export class UserServices {

    async getUsers() {
        const allUsers = await prisma.user.findMany()
        return allUsers
    }

    async getUser({ id }: IdUSer) {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })

        return user
    }


    async createUser({ name, email }: CreateUserDTO) {
        console.log(name, email)
        if (!email.includes('@')) {
            throw new Error("E-mail invalido")
        }

        const newUser: CreateUserDTO = {
            name, email
        }

        // criando usuario no banco de dados
        const user = await prisma.user.create({
            data: {
                name: newUser.name,
                email: newUser.email
            }
        })

        return user

    }


}