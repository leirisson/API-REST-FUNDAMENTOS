import { Request, Response } from "express";
import { knex } from '../database/knex'

export class DentistaController {
    // listando os dentistas
    async getDentista(request: Request, response: Response) {
        const lista_de_dentistas = await knex("dentistas").select()
        response.json({ lista_de_dentistas })
    }



    // cadastrar um dentista 
    async createDentista(request: Request, response: Response) {
        const { nome, especialidade, cro } = request.body

        await knex("dentistas").insert(
            {
                nome,
                especialidade,
                cro
            })

        response.status(201).send()
    }

    async getOneDentista(request: Request, response: Response) {
        const { id } = request.params

        const dentista_encontrado = await knex('dentistas')
            .select().where('id', '=', id)

        response.json({ dentista_encontrado })
    }

    async putDentista(request: Request, response: Response) {
        const { id } = request.params
        const {
            nome,
            especialidade,
            cro } = request.body

        await knex('dentistas').update({
            nome,
            especialidade,
            cro
        }).where({ id })

        response.status(409).send()

    }
    
    async deleteDentista(request: Request, response: Response) {
        const { id } = request.params

        await knex("dentistas").delete().where({ id })

        response.status(409).send()
    }
}