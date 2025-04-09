import { Request, Response } from "express";
import { knex } from '../database/knex'
import { createPrompt } from "../utils/openAI";

export class ControllerAi {
    async getAllResponse(request: Request, response: Response) {
        const responseUserAll = await knex("openai").select()
        response.json({ responseUserAll })
    }

    async createPromptAI(request: Request, response: Response) {
        try {
            const { name, prompt } = request.body

            const dataResponse = await createPrompt(prompt)

            await knex("openai").insert(
                {
                    name,
                    prompt,
                    response_ia: dataResponse
                }
            )

            response.status(201).send()
        } catch (error) {
            console.log(error)
        }

    }
}