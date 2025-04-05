import { Request, Response } from "express";

import { knex } from "../database/knex";

export class PacienteController {
    async listaDePacientes(request: Request, response: Response) {
        const pacientes = await knex("paciente").select()
        response.json({ pacientes })
    }

    async createPaciente(request: Request, response: Response) {
        const { nome, cpf, data_nascimento, telefone } = request.body

        await knex("paciente").insert({
            nome,
            cpf,
            data_nascimento,
            telefone
        })

        response.status(201).send()
    }

    async atualizarPaciente(request: Request, response: Response) {
        // dados para atualizar
        const { nome, cpf, data_nascimento, telefone } = request.body
        // id do paciente
        const { id } = request.params

        await knex("paciente").update({
            nome,
            cpf,
            data_nascimento,
            telefone
        })
            .where({ id })

        response.status(409).send()

    }

    async cadastrarPaciente(request: Request, response: Response) {
        const { id } = request.params

        await knex("paciente").delete().where({ id })

        response.status(409).send()
    }
}