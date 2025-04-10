import { Request, Response } from "express";
import { knex } from "../database/knex";



export class ModulosController {
    async listarTodosOsModulos(request: Request, response:Response){
        try {
            const todosOsodulos = await knex("curso_modulos").select()

            response.json(todosOsodulos)
        } catch (error) {
            console.log(error)
        }

    }
}