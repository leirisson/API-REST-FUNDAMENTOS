import { Request, Response } from "express";
import { knex } from "../database/knex";




export class CursosController {
    async listaTodosOsCursos(request:Request, response:Response){
        const cursosCadastrados = await knex("cursos").select()

        response.json(cursosCadastrados)
        
    }


}