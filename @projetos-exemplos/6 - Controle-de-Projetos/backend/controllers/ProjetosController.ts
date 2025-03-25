import { Request, Response } from "express";
import { initDB, openDB } from "../src/database/database";
import {  z } from 'zod'

export class ProjetosController {

    async getAll(request: Request, response: Response) {
        const db = await openDB()
        const users = await db.all('SELECT * FROM projetos')

        // Fechar conexão com o banco
        await db.close();

        response.json(users)
    }

    //  Criar projeto
    async createProjeto(request: Request, response: Response) {

        const db = await openDB()

        const createSchemaBody = z.object({
            nome: z.string(),
            descricao: z.string().min(10),
            data_inicio: z.string(),
            data_conclusao: z.string(),
            status: z.boolean()
        })

        const {
            nome,
            descricao,
            data_inicio,
            data_conclusao,
            status
        } = createSchemaBody.parse(request.body)

        
        try {
        
            await db.run(
                `
                INSERT INTO projetos (nome, descricao, data_inicio, data_conclusao, status) VALUES (?, ?, ?, ?, ?)
                `, [nome, descricao, data_inicio, data_conclusao, status ? 1: 0]
            )

            // Fechar conexão com o banco
            await db.close();

            response.status(201).send()
        } catch (error) {
            //console.log(error)
            response.status(400).json({ message: "Erro ao criar projeto" })
        }
    }
    // Atualizar um projeto
    async updateProjeto(request: Request, response:Response){
        const createSchemaID = z.object({
            id: z.string()
        })

        const createSchemaBody = z.object({
            nome: z.string(),
            descricao: z.string().min(10),
            data_inicio: z.string(),
            data_conclusao: z.string(),
            status: z.boolean()
        })

        const {id} = createSchemaID.parse(request.params)
        const {  nome,
            descricao,
            data_inicio,
            data_conclusao,
            status
        } = createSchemaBody.parse(request.body)

        const db = await openDB()
        
        const resultado = await db.run(`
            UPDATE projetos 
            SET nome = ?, descricao = ?, data_inicio = ?, data_conclusao = ?, status = ? 
            WHERE id = ?
            `,
            [nome, descricao, data_inicio, data_conclusao, status, id]
        )

        if (resultado.changes === 0) {
            response.json({mensagem : "Nenhum registro foi atualizado. Verifique o ID informado." })
       
        } else {
            response.status(200).json({mensagem: "Projeto atualizado com sucesso!"});
        }
         // Fechar conexão com o banco
         await db.close();
    }

    async deleteProjeto(request: Request, response: Response){
        const db = await openDB()

        const createSchemaID = z.object({
            id: z.string()
        })

        const {id} = createSchemaID.parse(request.params)

        const resultao = await db.run(`DELETE FROM projetos WHERE id = ?`, [id])

        if(resultao.changes === 0){
            response.status(404).send()
        } else {
            response.status(200).send()
        }
    }
}