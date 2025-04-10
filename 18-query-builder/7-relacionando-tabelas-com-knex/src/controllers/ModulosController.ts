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

    async cadastroDeCurso(request:Request, response:Response){
        try {
            const {nome, curso_id} = request.body

            await knex("curso_modulos").insert({
                nome,
                curso_id
            })

            response.status(201).send()

        } catch (error) {
            console.log('error ao tentar cadastrar um curso => ', error)
        }
    }
}