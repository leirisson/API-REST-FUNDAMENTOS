import { knex } from "@/database/knex";
import { Request, Response, NextFunction } from "express";

export class TableController {
    async index(request: Request, response: Response, next: NextFunction) {
        try {
            const tables = await knex<TableFactory>("tables").select()

            return response.json({ tables })
        } catch (error) {
            next(error)
        }
    }
}