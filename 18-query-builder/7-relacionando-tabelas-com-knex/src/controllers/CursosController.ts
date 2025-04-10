import { Request, Response } from "express";
import { knex } from "../database/knex";




export class CursosController {
    async listaTodosOsCursos(request: Request, response: Response) {
        const cursosCadastrados = await knex("cursos").select()

        response.json(cursosCadastrados)

    }

    async cadastroDeCurso(request: Request, response: Response) {
        try {
            const { nome, carga_horaria } = request.body

            await knex('cursos').insert({
                nome,
                carga_horaria
            })

            response.status(201).send()
        } catch (error) {
            console.log('alguma coisa deu errado', error)
        }

    }

    async listarCursosPorModulo(request: Request, response: Response) {
        try {
            const cursos = await knex("cursos")
                .select(
                    "cursos.id AS curso_id",
                    "curso_modulos.id AS modulo_id",
                    "curso_modulos.nome AS modulo",
                    "cursos.nome AS curso"
                )
                .join(
                    "curso_modulos", 
                    "cursos.id",
                    "curso_modulos.curso_id"
                )

            response.json(cursos)

        } catch (error) {
            console.log(error)
        }



    }


}